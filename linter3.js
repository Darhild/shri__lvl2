  const string2 = `{
    "block": "form",
    "content": [
        { "block": "form",
          "elem": "label",
          "content": 
            {
              "block": "text",
              "mods": 
              { 
                "size": "m" 
              }
          }
        },
        { 
          "block": "input", 
          "mods": 
          { 
            "size": "l" 
          } 
        },
        { 
          "block": "input", 
          "mods": 
          { 
            "size": "s" 
          } 
        }
    ]
}`;

  const string3 = `{
    "block": "form",
    "content": {
        "block": "form",
        "elem": "content",
        "content": { "block": "input", "mods": { "size": "l" } },
        "mix": [{ "block": "form", "elem": "item", "mods": {  "space-v": "xl", "space-h": "xxl"}}]
    }
}`;

  const string4 = `{
    "block": "form",
    "content": [
        {
            "block": "form",
            "elem": "header",
            "content": [
                {
                    "block": "text",
                    "mods": {
                        "size": "xl"
                    }
                },
                {
                    "block": "text",
                    "mods": {
                        "size": "xxl"
                    }
                },
                {
                    "block": "text",
                    "mods": {
                        "size": "xxxl"
                    }
                },
                {
                    "block": "text",
                    "mods": {
                        "size": "m"
                    }
                }
            ]
        },
        {
            "block": "input",
            "mods": {
                "size": "l"
            }
        }
    ]
}`;

const string5 = `{
    "block": "form",
    "content": {
        "block": "form",
        "elem": "content",
        "content": [
            {
                "block": "form",
                "mix": [{ "block": "form", "elem": "item", "mods": { "indent-b": "xl" } }],
                "content": { "block": "input", "mods": { "size": "l" } }
            },
            {
                "block": "form",
                "elem":  "content-item",
                "mix": [{ "block": "form", "elem": "item", "mods": { "indent-b": "l" } }],
                "content": { "block": "input", "mods": { "size": "l" } }
            },
            {
                "block": "form",
                "elem":  "content-item",
                "content": { "block": "input", "mods": { "size": "l" } }
            }
        ]
    }
}`;


  const errors = [];

  let h1 = false,
      h2 = false,
      reference;

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
    invalidH1: {"code": "TEXT.SEVERAL_H1", "error": "В документе не может быть больше одного заголовка h1"},
    invalidH2: {"code": "TEXT.INVALID_H2_POSITION", "error": "Заголовок h2 следует раньше заголовка h1"},
    invalidH3: {"code": "TEXT.INVALID_H3_POSITION", "error": "Заголовок h3 следует раньше заголовка h2"},
    invalidInputSize: {"code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL", "error": "Подписи и поля в форме должны быть одного размера"},
    invalidContentSpaceVer: {"code": "FORM.CONTENT_VERTICAL_SPACE_IS_INVALID", "error": "Вертикальный внутренний отступ контентного элемента должен быть на 2 шага больше эталонного размера"},
    invalidContentSpaceHor: {"code": "FORM.CONTENT_HORIZONTAL_SPACE_IS_INVALID", "error": "Горизонтальный внутренний отступ контентного элемента должен быть на 1 шаг больше эталонного размера"},
    invalidContentItem: {"code": "FORM.CONTENT_ITEM_INDENT_IS_INVALID", "error": "Строки формы помечаются элементом формы content-item и должны отбиваться между собой с помощью модификатора нижнего отступа со значением модификатора indent-b элемента формы item на 1 шаг больше эталонного размера"},
    invalidHeaderSize: {"code": "FORM.HEADER_TEXT_SIZE_IS_INVALID", "error": "Все текстовые блоки в заголовке формы должны быть со значением модификатора size на 2 шага больше эталонного размера"},
    invalidHeaderSpaceVer: {"code": "FORM.HEADER_VERTICAL_SPACE_IS_INVALID", "error": "Вертикальный внутренний отступ заголовка формы должен быть задан с помощью микса на него элемента формы item со значением модификатора space-v, равным эталонному размеру"}
  }


  const inputSizes = [],
        contentSpaces = [];

  const json = JSON.parse(string5);
//  const ast = jsonToAst(json, string5);
// console.log(ast);

  function lint(string) {
      
//      console.log(jsonToAst(json));
      validateInputSizes(json);
      validateHeader(ast);
//      validateContentSpaces(ast);
//      console.log(findValue(ast, 'size', 'input'));
      return errors;
  }

//  lint(string);



  function validateInputSizes (obj) {
    const refSize = findSize(obj, ["input", "text", "label"], true);
    const sizes = [];
    sizes.push(...findAllMods(obj, ["input", "text", "label"], true))
    compareSizes(refSize, sizes, errorMessages.invalidInputSize);
  }

//  validateInputSizes(ast);

  function validateContentSpaces(obj) {
    const refSize = findSize(obj, "content", true);
    const mix = findObject(obj, "mix", false);
    if (!mix) {
      pushError(obj, errorMessages.invalidContentSpaceVer);
      pushError(obj, errorMessages.invalidContentSpaceHor);
    }
    const size = findAllMods(mix);
    compareSizes(refSize, size, "space-v", errorMessages.invalidContentSpaceVer, validSpacesX2);
    compareSizes(refSize, size, "space-h", errorMessages.invalidContentSpaceHor, validSpacesX1);
  };

//  validateContentSpaces(ast);

  function validateHeader(obj) {

    const refSize = findSize(obj, "input", true);
    const header = findObject(obj, "header", true);
    const content = findObject(header, "content", false);
    const sizes = findAllMods(content);
    compareSizes(refSize, sizes, "size", errorMessages.invalidHeaderSize, validSpacesX2);
  }

//  validateHeader(ast);

  function validateContentItem(obj) {
    const content = findObject(obj, "content", false, true);
    console.log(content);

/*
    content.value.children.forEach(child => {
      if((!child[elem]) || (child[elem] !== "content-item")) pushError(child, errorMessages.invalidContentItem);
    })*/

    console.log(errors);

  }

//  validateContentItem(ast);

  function findObject (item, name, shouldReturnParent, shouldDefineKey = false) {
    let result = false,
    soughtObject = false;

    findObj (item, name, shouldReturnParent, shouldDefineKey);

    function findObj (item, name, shouldReturnParent, shouldDefineKey) {

      if (!result && item.type === 'Property') {
        let namesResult;
        if (Array.isArray(name)) {
          namesResult = name.map(str => findProperty(item, str, shouldDefineKey));
        }
        else namesResult = findProperty(item, name, shouldDefineKey);

        if (namesResult) {
          soughtObject = item;
          return;
        }
        else if (!result && item.value.children) {
          item.value.children.forEach (child => findObj(child, name, shouldReturnParent, shouldDefineKey));
        }
      }

      else if (!result && item.type === 'Object') {
        item.children.forEach (child => {
          findObj(child, name, shouldReturnParent, shouldDefineKey);
          if (!result && soughtObject) {
            if (shouldReturnParent) soughtObject = item;
            result = true;
            return;
          }
        });
      }

      else return soughtObject;
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
      const mods = findObject(child, "mods", false);
      arr.push(mods);
    })

    return arr;
  }

  function findSize(item, name) {
    const obj = findObject(item, name, true);
    const mod = findObject(obj, "mods", false);
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
      if(errorSize.length) errorSizes.push(size);
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
    console.log(objEndIndex);

    if (objStartIndex > 1) {
      prevStr = raw.substring(0, objStartIndex - 1);
      let {column: startColumn, line: startLine} = locateLineColumn (raw, prevStr);
      loc.start.line = startLine;
      loc.start.column = startColumn;
    }
    else {
      loc.start.line = 1;
      loc.start.column = 1;
    }

    let wholeStr = raw.substring(0, objEndIndex - 1);    
    let {column: endColumn, line: endLine} = locateLineColumn (raw, wholeStr);
    
    loc.end.line = endLine;
    loc.end.column = endColumn + 1;

    return loc;

    function findEndIndex() {
      let result = false;
      findIndex();

      function findIndex(startIndex = backBracket.lastIndex) {
        if (arguments.length === 0) backBracket.exec(raw);
        let substr = raw.substring(startIndex, backBracket.lastIndex - 1);
        if (substr.search(bracket) !== -1) {
          let length = substr.match(bracket).length;
          let prevIndex = backBracket.lastIndex;
          for (let i = 0; i < length - 1; i++) {
            backBracket.exec(raw);
            findIndex(prevIndex);
          }
          findIndex();
        }
        else {
          result = true;
          return;
        }
      }
    }

    function locateLineColumn(raw, str) {
      let line = str.match(/\n/g).length + 1;
      let column = str.length - str.lastIndexOf("\n");
      return {column: column, line: line};
    }
  }

  console.log(locateValue(string5, 1));

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
        }    
          else {
            child.value.type = 'Object';
            numberOfObjects++;
            child.locate = locateValue(raw, numberOfObjects);
            createAstTree(obj[prop], child.value, raw);
          } 
        }  
      }
    }

 //   console.log("number: " + numberOfObjects);
    return ast;
  }


