function lint(string) {

  const errors = [];

  const validSpacesX2 = {
    xxxs: "xs",
    xxs: "s",
    xs: "m",
    s: "l",
    m: "xl",
    l: "xxl",
    xl: "xxxl",
    xxl: "xxxl",
    xxxl: "xxxxxl"
  };

  const validSpacesX1 = {
    xxxs: "xxs",
    xxs: "xs",
    xs: "s",
    s: "m",
    m: "l",
    l: "xl",
    xl: "xxl",
    xxl: "xxxl",
    xxxl: "xxxxl",
    xxxxl: "xxxxxl"
  }

  const errorMessages = {
    invalidH1: { "code": "TEXT.SEVERAL_H1", "error": "В документе не может быть больше одного заголовка h1" },
    invalidH2: { "code": "TEXT.INVALID_H2_POSITION", "error": "Заголовок h2 следует раньше заголовка h1" },
    invalidH3: { "code": "TEXT.INVALID_H3_POSITION", "error": "Заголовок h3 следует раньше заголовка h2" },
    invalidInputSize: { "code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL", "error": "Подписи и поля в форме должны быть одного размера" },
    invalidContentSpaceVer: { "code": "FORM.CONTENT_VERTICAL_SPACE_IS_INVALID", "error": "Вертикальный внутренний отступ контентного элемента должен быть на 2 шага больше эталонного размера" },
    invalidContentSpaceHor: { "code": "FORM.CONTENT_HORIZONTAL_SPACE_IS_INVALID", "error": "Горизонтальный внутренний отступ контентного элемента должен быть на 1 шаг больше эталонного размера" },
    invalidContentItem: { "code": "FORM.CONTENT_ITEM_INDENT_IS_INVALID", "error": "Строки формы помечаются элементом формы content-item и должны отбиваться между собой с помощью модификатора нижнего отступа со значением модификатора indent-b элемента формы item на 1 шаг больше эталонного размера" },
    invalidHeaderTextSize: { "code": "FORM.HEADER_TEXT_SIZE_IS_INVALID", "error": "Все текстовые блоки в заголовке формы должны быть со значением модификатора size на 2 шага больше эталонного размера" },
    invalidHeaderSpaceVer: { "code": "FORM.HEADER_VERTICAL_SPACE_IS_INVALID", "error": "Вертикальный внутренний отступ заголовка формы должен быть задан с помощью микса на него элемента формы item со значением модификатора space-v, равным эталонному размеру" },
    invalidHeaderSpaceHor: { "code": "FORM.HEADER_HORIZONTAL_SPACE_IS_INVALID", "error": "Горизонтальный внутренний отступ заголовка формы должен быть на 1 шаг больше эталонного размера" },
    invalidFooterSpaceVer: { "code": "FORM.FOOTER_VERTICAL_SPACE_IS_INVALID", "error": "Вертикальный внутренний отступ подвала формы должен быть задан с помощью микса на него элемента формы item со значением модификатора space-v, равным эталонному размеру" },
    invalidFooterSpaceHor: { "code": "FORM.FOOTER_HORIZONTAL_SPACE_IS_INVALID", "error": "Горизонтальный внутренний отступ подвала формы должен быть на 1 шаг больше эталонного размера" },
    invalidFooterTextSize: { "code": "FORM.FOOTER_TEXT_SIZE_IS_INVALID", "error": "Все текстовые блоки в подвале формы должны быть со значением модификатора size на 2 шага больше эталонного размера" },
    invalidH1: { "code": "TEXT.SEVERAL_H1", "error": "В документе не может быть больше одного заголовка h1" },
    invalidH2: { "code": "TEXT.INVALID_H2_POSITION", "error": "Заголовок h2 следует раньше заголовка h1" },
    invalidH3: { "code": "TEXT.INVALID_H3_POSITION", "error": "Заголовок h3 следует раньше заголовка h2" }
  }

  const json = JSON.parse(string);

  if (!json) throw new Error;

  const ast = jsonToAst(json, string);
  validateHeader(ast);

  const mix = findObjects(ast, "form", true);

  if (mix) {

  } else form = findObject(ast, "form", true);

  if (form) validateForm(form);

  return errors;

  function validateHeader(obj) {
    const h1 = findObjects(obj, "h1", true),
      h2 = findObjects(obj, "h2", true),
      h3 = findObjects(obj, "h3", true);

    console.log(h1);
    console.log(h2);
    console.log(h3);

    console.log(h2);
    if (h1 && h1.length > 1) {
      for (let i = 1; i < h1.length; i++) {
        pushError(h1[i], errorMessages.invalidH1);
      }
    }

    if (h2 && h1) compareLocation(h2, h1[0], errorMessages.invalidH2);

    if (h3 && h2) compareLocation(h3, h2, errorMessages.invalidH3);
  }

  function compareLocation(item1, item2, errorMessage) {
    let result = [];

    if (Array.isArray(item1) && Array.isArray(item2)) {
      result = item1.filter(item1Child => {
        item2.forEach(item2Child => compareLoc(item1Child, item2Child))
      });
    } else if (Array.isArray(item1)) {
      result = item1.filter(item1Child => compareLoc(item1Child, item2))
    } else if (Array.isArray(item2)) {
      result = item2.filter(item2Child => compareLoc(item1, item2Child))
    } else result = compareLoc(item1, item2);

    if (result.length) {
      result.forEach(item => pushError(item, errorMessage));
    }
  }

  function compareLoc(item1, item2) {
    if (item1.locate.start.line !== item2.locate.start.line) return item1.locate.start.line < item2.locate.start.line;
    else return item1.locate.start.column < item2.locate.start.column;
  }

  function findObjects(item, name, shouldReturnParent, shouldDefineKey = false) {
    let arr = [],
      soughtObject = false;

    findObj(item, name, shouldReturnParent, shouldDefineKey);

    function findObj(item, name, shouldReturnParent, shouldDefineKey) {

      if (item.type === 'Property') {
        if (typeof name === "string") {
          let arr = [];
          arr.push(name);
          name = arr;
        }
        let namesResult = name.filter(str => findProperty(item, str, shouldDefineKey));

        if (namesResult.length) {
          soughtObject = item;
          return;
        } else if (item.value.children) {
          item.value.children.forEach(child => {
            findObj(child, name, shouldReturnParent, shouldDefineKey);
            if (soughtObject) {
              if (shouldReturnParent) soughtObject = item;
              arr.push(soughtObject);
              soughtObject = false;
              return;
            }
          })
        }
      } else if (item.type === 'Object') {
        item.children.forEach(child => {
          findObj(child, name, shouldReturnParent, shouldDefineKey);
          if (soughtObject) {
            if (shouldReturnParent) soughtObject = item;
            arr.push(soughtObject);
            soughtObject = false;
            return;
          }
        });
      }

    }
    return arr;
  }

  function validateForm(form) {
    validateInputSizes(form);
    validateContentSpaces(form);
    validateContentItem(form);
    validateHeaderFooterText(form, "header");
    validateHeaderFooterText(form, "footer");
    validateHeaderFooterSpaces(form, "header");
    validateHeaderFooterSpaces(form, "footer");
  }

  function validateInputSizes(obj) {
    const refSize = findSize(obj, ["input", "text", "label"], true);
    const content = findObject(obj, "content", false, true);
    const sizes = [];
    sizes.push(...findAllMods(content));
    console.log(sizes);
    compareSizes(refSize, sizes, "size", errorMessages.invalidInputSize);
    console.log(errors);
  }

  function validateContentSpaces(obj) {
    const contentElem = findObject(obj, "content", true);

    if (contentElem) {
      const refSize = findSize(obj, "content", true);
      console.log(refSize);
      const mix = findObject(obj, "mix", false);
      if (!mix) {
        pushError(obj, errorMessages.invalidContentSpaceVer);
        pushError(obj, errorMessages.invalidContentSpaceHor);
        return;
      }
      const size = findAllMods(mix);
      compareSizes(refSize, size, "space-v", errorMessages.invalidContentSpaceVer, validSpacesX2);
      compareSizes(refSize, size, "space-h", errorMessages.invalidContentSpaceHor, validSpacesX1);
      console.log(errors);
    }
  };

  function validateContentItem(obj) {
    const contentElem = findObject(obj, "content", true);

    if (contentElem) {
      const content = findObject(contentElem.value, "content", false, true);
      let contentItems = [];

      content.value.children.forEach(child => {
        let contentItem = findObject(child, "content-item", true);
        if (!contentItem) pushError(child, errorMessages.invalidContentItem);
        else contentItems.push(contentItem);
      })

      let mixes = [];
      for (let i = 0; i < contentItems.length - 1; i++) {
        let mix = findObject(contentItems[i], "mix", false, true);
        mixes.push(mix);
      }

      const refSize = findSize(content, ["input", "text", "label"], true);
      const sizes = [];

      mixes.forEach(item => sizes.push(findObject(item, "mods", false, true)));

      compareSizes(refSize, sizes, "indent-b", errorMessages.invalidContentItem, validSpacesX1);
    }

    console.log(errors);
  }

  function validateHeaderFooterText(obj, elem) {
    const section = findObject(obj, elem, true);

    if (section) {
      const refSize = findSize(obj, ["input", "text", "label"], true);
      const content = findObject(section, "content", false, true);
      if (content) {
        const sizes = findAllMods(content);
        let errorMessage;

        if (elem === 'header') {
          errorMessage = errorMessages.invalidHeaderTextSize;
          compareSizes(refSize, sizes, "size", errorMessage, validSpacesX2);
        } else {
          errorMessage = errorMessages.invalidFooterTextSize;
          compareSizes(refSize, sizes, "size", errorMessage);
        }
      }
    }
    console.log(errors);
  }

  function validateHeaderFooterSpaces(obj, elem) {
    const section = findObject(obj, elem, true);

    if (section) {
      const refSize = findSize(obj, ["input", "text", "label"], true);


      const mix = findObject(section, "mix", false, true);

      if (!mix) {
        (elem === 'header') ? pushError(section, errorMessages.invalidHeaderSpaceVer): pushError(section, errorMessages.invalidFooterSpaceHor);
        return;
      }

      const sizes = [];
      sizes.push(...findAllMods(mix));
      console.log(sizes);

      if (elem === 'header') {
        compareSizes(refSize, sizes, "space-v", errorMessages.invalidHeaderSpaceVer);
        compareSizes(refSize, sizes, "space-h", errorMessages.invalidHeaderSpaceHor, validSpacesX2);
      } else {
        compareSizes(refSize, sizes, "space-v", errorMessages.invalidFooterSpaceVer);
        compareSizes(refSize, sizes, "space-h", errorMessages.invalidFooterSpaceHor, validSpacesX2);
      }
    }
    console.log(errors);
  }

  function findObject(item, name, shouldReturnParent, shouldDefineKey = false) {
    let result = false,
      soughtObject = false;

    findObj(item, name, shouldReturnParent, shouldDefineKey);

    function findObj(item, name, shouldReturnParent, shouldDefineKey) {

      if (!result && item.type === 'Property') {
        if (typeof name === "string") {
          let arr = [];
          arr.push(name);
          name = arr;
        }
        let namesResult = name.filter(str => findProperty(item, str, shouldDefineKey));

        if (namesResult.length) {
          soughtObject = item;
          return;
        } else if (!result && item.value.children) {
          item.value.children.forEach(child => {
            findObj(child, name, shouldReturnParent, shouldDefineKey);
            if (!result && soughtObject) {
              if (shouldReturnParent) soughtObject = item;
              result = true;
              return;
            }
          })
        }
      } else if (!result && item.type === 'Object') {
        item.children.forEach(child => {
          findObj(child, name, shouldReturnParent, shouldDefineKey);
          if (!result && soughtObject) {
            if (shouldReturnParent) soughtObject = item;
            result = true;
            return;
          }
        });
      } else return soughtObject;
    }

    return soughtObject;
  }

  function findProperty(item, name, shouldDefineKey) {
    if (shouldDefineKey) return item.key.value === name;
    else return item.value.value === name;
  }

  function findAllMods(obj) {
    const arr = [];
    obj.value.children.forEach(child => {
      const mod = findObject(child, "mods", false, true);
      if (mod) arr.push(mod);
    })

    return arr;
  }

  function findMod(item, name) {
    const mod = findObject(item, "mods", false, true);
    const size = findObject(mod, name, false, true);
    return size;
  }

  function findSize(item, name) {
    const obj = findObject(item, name, true);
    const mod = findObject(obj, "mods", false, true);
    const size = mod.value.children[0].value.value;
    return size;
  }

  function compareSizes(refSize, sizes, name, error, validArr) {
    const errorSizes = [];
    sizes.forEach(size => {
      let errorSize = size.value.children.filter(child => {
        if (child.key.value === name) {
          if (validArr) return child.value.value !== validArr[refSize];
          else return child.value.value !== refSize;
        }
      });
      if (errorSize.length) errorSizes.push(size);
    });

    if (errorSizes) {
      const errorsFull = errorSizes.map(item => {
        let locate = { location: item.locate };
        return {
          ...error,
          ...locate
        }
      });
      errors.push(...errorsFull);
    }
  }

  function pushError(item, error) {
    let locate = { location: item.locate };
    errors.push({
      ...error,
      ...locate
    });
  }

  function locateValue(raw, numberOfObjects) {
    let loc = {
      start: {},
      end: {}
    };

    const bracket = /{/g,
      backBracket = /}/g;

    for (let i = 0; i < numberOfObjects; i++) {
      bracket.exec(raw);
    }

    let objStartIndex = bracket.lastIndex;
    backBracket.lastIndex = bracket.lastIndex;
    findEndIndex();
    let objEndIndex = backBracket.lastIndex;

    if (objStartIndex > 1) {
      prevStr = raw.substring(0, objStartIndex - 1);
      let { column: startColumn, line: startLine } = locateLineColumn(raw, prevStr);
      loc.start.line = startLine;
      loc.start.column = startColumn;
    } else {
      loc.start.line = 1;
      loc.start.column = 1;
    }

    let wholeStr = raw.substring(0, objEndIndex - 1);
    let { column: endColumn, line: endLine } = locateLineColumn(raw, wholeStr);

    loc.end.line = endLine;
    loc.end.column = endColumn;

    return loc;

    function findEndIndex(startIndex = backBracket.lastIndex) {
      if (arguments.length === 0) backBracket.exec(raw);
      let substr = raw.substring(startIndex, backBracket.lastIndex - 1);
      if (substr.search(bracket) !== -1) {
        let length = substr.match(bracket).length;
        let prevIndex = backBracket.lastIndex;
        for (let i = 0; i < length - 1; i++) {
          backBracket.exec(raw);
        }
        findEndIndex(prevIndex);
        findEndIndex();
      } else return;
    }

    function locateLineColumn(raw, str) {
      let line = str.match(/\n/g).length + 1;
      let column = str.length - str.lastIndexOf("\n");
      return { column: column, line: line };
    }
  }

  function jsonToAst(obj, raw) {
    let numberOfObjects = 1;

    const ast = {
      type: 'Object',
      children: [],
      locate: locateValue(raw, numberOfObjects)
    };

    createAstTree(obj, ast, raw);

    function createAstTree(obj, node, raw) {

      for (prop in obj) {

        let child = {
          type: 'Property',
          key: {
            type: 'Identifier',
            value: `${prop}`
          },
          value: {}
        };

        node.children.push(child);

        if (typeof obj[prop] === 'string') {
          child.value.type = 'Literal';
          child.value.value = `${obj[prop]}`;
        }

        if (typeof obj[prop] === 'object') {
          child.value.children = [];

          if (Array.isArray(obj[prop])) {
            child.value.type = 'Array';

            obj[prop].forEach(item => {
              numberOfObjects++;
              let astObj = {
                type: 'Object',
                children: [],
                locate: locateValue(raw, numberOfObjects)
              }
              createAstTree(item, astObj, raw);
              child.value.children.push(astObj);
            });
          } else {
            child.value.type = 'Object';
            numberOfObjects++;
            child.locate = locateValue(raw, numberOfObjects);
            createAstTree(obj[prop], child.value, raw);
          }
        }
      }
    }
    return ast;
  }
}