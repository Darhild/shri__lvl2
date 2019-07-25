const string1 = `{
  "block": "page-index",
  "content": [
    { "block": "header",
      "content": [
       { "block": "header",
         "elem": "content",
         "content": [
           { "block": "header",
             "elem": "logo"
           },
           { "block": "header",
             "elem": "onoffswitch",
             "mix": [
               {"block": "onoffswitch"}
             ],
             "content": [
               { "block": "onoffswitch",
                 "elem": "button"
                }
              ]
            }
          ]
        }
      ]
    },
    { "block": "page-index",
      "elem": "layout",
      "mix": [
        {"block": "layout"}
      ],
      "content": [
        { "block": "page-index",
          "elem": "container",
          "mix": [
            {"block": "layout", "elem": "container", "elemMods": {"align": "center", "size": "m"}}
          ],
          "content": [
            { "block": "page-index",
              "elem": "grid",
              "mix": [
                {"block": "grid", "mods": {"m-columns": "10", "col-gap": "full", "row-gap": "xxl"}}
              ],
              "content": [
                { "block": "payment",
                  "mix": [
                    {"block": "form", "mods": {"border": "all"}},
                    {"block": "grid", "elem": "fraction", "elemMods": {"m-col": "5"}}
                  ],
                  "content": [
                    { "block": "payment",
                      "elem": "header",
                      "mix": [
                        {"block": "form", "elem": "item", "elemMods": {"space-v": "l", "space-h": "xl", "border": "bottom"}}
                      ],
                      "content":
                        { "block": "text",
                          "mix": [
                            {"block": "text", "mods": {"view": "primary", "size": "xxl"}}
                          ],
                           "content":
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "l"}
                            }
                        }
                    },
                    { "block": "payment",
                      "elem": "content",
                      "mix": [
                        {"block": "form", "elem": "item", "elemMods": {"space-v": "xxxl", "space-h": "xl", "border": "bottom"}}
                      ],
                      "content": [
                        { "block": "payment",
                          "elem": "item",
                          "mix": [
                            {"block": "form", "elem": "item", "elemMods": {"indent-b": "xl", "distribute": "between", "vertical-align": "center"}}
                          ],
                          "content": [
                            { "block": "payment",
                              "elem": "label",
                              "mix": [
                                {"block": "form", "elem": "label", "mods": {"width": "default"}},
                                {"block": "text", "mods": {"view": "primary", "size": "l"}}
                              ],
                              "content": [
                                { "block": "text", "elem": "word", "elemMods": {"width": "l"}
                                }
                              ]
                            },
                            { "block": "payment",
                              "elem": "control",
                              "mix": [
                                {"block": "form", "elem": "control"}
                              ],
                              "content":
                                {"block": "input", "mods": {"size": "l"}}
                            }
                          ]
                        },
                        { "block": "payment",
                          "elem": "item",
                          "mix": [
                            {"block": "form", "elem": "item", "elemMods": {"distribute": "between", "vertical-align": "center"}}
                          ],
                          "content": [
                            { "block": "payment",
                              "elem": "label",
                              "mix": [
                                {"block": "form", "elem": "label", "mods": {"width": "default"}},
                                {"block": "text", "mods": {"view": "primary", "size": "l"}}
                              ],
                              "content": [
                                { "block": "text", "elem": "word", "elemMods": {"width": "l"}
                                }
                              ]
                            },
                            { "block": "payment",
                              "elem": "control",
                              "mix": [
                                {"block": "form", "elem": "control"}
                              ],
                              "content":
                                {"block": "input", "mods": {"size": "l"}}
                            }
                          ]
                        }
                      ]
                    },
                    { "block": "payment",
                      "elem": "footer",
                      "mix": [
                        {"block": "form", "elem": "item", "elemMods": {"distribute": "between", "border": "bottom", "vertical-align": "center", "space-v": "l", "space-h": "xl"}}
                      ],
                      "content": [
                        { "block": "text",
                          "mix": [
                            {"block": "text", "mods": {"view": "primary", "type": "h3", "size": "l"}}
                          ],
                          "content":
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "l"}
                            }
                        },
                        { "block": "button",
                          "mods": {"size": "l"}}
                      ]
                    }
                  ]
                },
                { "block": "warning",
                  "mix": [
                    {"block": "informer", "mods": {"view": "default", "border": "all"}},
                    {"block": "theme", "mods": {"color": "project-warning"}},
                    {"block": "grid", "elem": "fraction", "elemMods": {"m-col": "5"}}
                  ],
                  "content": [
                    { "block": "warning",
                      "elem": "content",
                      "mix": [
                        {"block": "informer", "elem": "content", "elemMods": {"distribute": "center", "space-a": "xxl"}}
                      ],
                      "content": [
                        { "block": "warning",
                          "elem": "placeholder",
                          "mix": [
                            {"block": "placeholder", "mods": {"view": "primary", "size": "m"}}
                          ]
                        },
                        { "block": "warning",
                          "elem": "text",
                          "mix": [
                            {"block": "text", "mods": {"view": "primary", "size": "xl"}}
                          ],
                          "content": [
                            {
                              "block": "text",
                              "elem": "word",
                              "elemMods": {
                                  "width": "s"
                              }
                            },
                            {
                              "block": "text",
                              "elem": "word",
                              "elemMods": {
                                  "width": "l"
                              }
                            },
                            {
                              "block": "text",
                              "elem": "word",
                              "elemMods": {
                                  "width": "m"
                              }
                            },
                            {
                              "block": "text",
                              "elem": "word",
                              "elemMods": {
                                  "width": "m"
                              }
                            },
                            {
                              "block": "text",
                              "elem": "word",
                              "elemMods": {
                                  "width": "s"
                              }
                            },
                            {
                              "block": "text",
                              "elem": "word",
                              "elemMods": {
                                  "width": "m"
                              }
                            },
                            {
                              "block": "text",
                              "elem": "word",
                              "elemMods": {
                                  "width": "l"
                              }
                            },
                            {
                              "block": "text",
                              "elem": "word",
                              "elemMods": {
                                  "width": "s"
                              }
                            },
                            {
                              "block": "text",
                              "elem": "word",
                              "elemMods": {
                                  "width": "m"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    { "block": "warning",
                      "elem": "button-wrapper",
                      "mix": [
                        {"block": "informer", "elem": "action", "elemMods": {"distribute": "center", "space-a": "xl"}}
                      ],
                      "content": [
                        { "block": "button",
                          "mods": {"size": "l"}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { "block": "page-index",
              "elem": "grid",
              "mix": [
                {"block": "grid", "mods": {"m-columns": "10", "col-gap": "half", "row-gap": "xxl"}}
              ],
              "content": [
                { "block": "product",
                  "mix": [
                    {"block": "grid", "elem": "fraction", "elemMods": {"m-col": "2"}},
                    {"block": "card", "mods": {"view": "default","border": "all"}}
                  ],
                  "content": [
                    { "block": "product",
                      "elem": "content",
                      "mix": [
                        {"block": "card", "elem": "content", "elemMods": {"space-a": "m"}}
                      ],
                      "content": [
                        { "block": "product",
                          "elem": "image",
                          "mix": [
                            {"block": "image"},
                            {"block": "theme", "mods": {"color": "project-inverse"}}
                          ]
                        }
                      ]
                    },
                    { "block": "product",
                      "elem": "footer",
                      "mix": [
                        {"block": "card", "elem": "footer", "elemMods": {"space-a": "m"}}
                      ],
                      "content": [
                        { "block": "text",
                          "mods": {"view": "primary","size": "m"},
                          "content": [
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "l"}
                            }
                          ]
                        },
                        { "block": "text",
                          "mods": {"view": "primary","size": "s"},
                          "content": [
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "m"}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { "block": "product",
                  "mix": [
                    {"block": "grid", "elem": "fraction", "elemMods": {"m-col": "2"}},
                    {"block": "card", "mods": {"view": "default","border": "all"}}
                  ],
                  "content": [
                    { "block": "product",
                      "elem": "content",
                      "mix": [
                        {"block": "card", "elem": "content", "elemMods": {"space-a": "m"}}
                      ],
                      "content": [
                        { "block": "product",
                          "elem": "image",
                          "mix": [
                            {"block": "image"},
                            {"block": "theme", "mods": {"color": "project-inverse"}}
                          ]
                        }
                      ]
                    },
                    { "block": "product",
                      "elem": "footer",
                      "mix": [
                        {"block": "card", "elem": "footer", "elemMods": {"space-a": "m"}}
                      ],
                      "content": [
                        { "block": "text",
                          "mods": {"view": "primary","size": "m"},
                          "content": [
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "l"}
                            }
                          ]
                        },
                        { "block": "text",
                          "mods": {"view": "primary","size": "s"},
                          "content": [
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "m"}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { "block": "product",
                  "mix": [
                    {"block": "grid", "elem": "fraction", "elemMods": {"m-col": "2"}},
                    {"block": "card", "mods": {"view": "default","border": "all"}}
                  ],
                  "content": [
                    { "block": "product",
                      "elem": "content",
                      "mix": [
                        {"block": "card", "elem": "content", "elemMods": {"space-a": "m"}}
                      ],
                      "content": [
                        { "block": "product",
                          "elem": "image",
                          "mix": [
                            {"block": "image"},
                            {"block": "theme", "mods": {"color": "project-inverse"}}
                          ]
                        }
                      ]
                    },
                    { "block": "product",
                      "elem": "footer",
                      "mix": [
                        {"block": "card", "elem": "footer", "elemMods": {"space-a": "m"}}
                      ],
                      "content": [
                        { "block": "text",
                          "mods": {"view": "primary","size": "m"},
                          "content": [
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "l"}
                            }
                          ]
                        },
                        { "block": "text",
                          "mods": {"view": "primary","size": "s"},
                          "content": [
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "m"}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { "block": "product",
                  "mix": [
                    {"block": "grid", "elem": "fraction", "elemMods": {"m-col": "2"}},
                    {"block": "card", "mods": {"view": "default","border": "all"}}
                  ],
                  "content": [
                    { "block": "product",
                      "elem": "content",
                      "mix": [
                        {"block": "card", "elem": "content", "elemMods": {"space-a": "m"}}
                      ],
                      "content": [
                        { "block": "product",
                          "elem": "image",
                          "mix": [
                            {"block": "image"},
                            {"block": "theme", "mods": {"color": "project-inverse"}}
                          ]
                        }
                      ]
                    },
                    { "block": "product",
                      "elem": "footer",
                      "mix": [
                        {"block": "card", "elem": "footer", "elemMods": {"space-a": "m"}}
                      ],
                      "content": [
                        { "block": "text",
                          "mods": {"view": "primary","size": "m"},
                          "content": [
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "l"}
                            }
                          ]
                        },
                        { "block": "text",
                          "mods": {"view": "primary","size": "s"},
                          "content": [
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "m"}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { "block": "product",
                  "mix": [
                    {"block": "grid", "elem": "fraction", "elemMods": {"m-col": "2"}},
                    {"block": "card", "mods": {"view": "default","border": "all"}}
                  ],
                  "content": [
                    { "block": "product",
                      "elem": "content",
                      "mix": [
                        {"block": "card", "elem": "content", "elemMods": {"space-a": "m"}}
                      ],
                      "content": [
                        { "block": "product",
                          "elem": "image",
                          "mix": [
                            {"block": "image"},
                            {"block": "theme", "mods": {"color": "project-inverse"}}
                          ]
                        }
                      ]
                    },
                    { "block": "product",
                      "elem": "footer",
                      "mix": [
                        {"block": "card", "elem": "footer", "elemMods": {"space-a": "m"}}
                      ],
                      "content": [
                        { "block": "text",
                          "mods": {"view": "primary","size": "m"},
                          "content": [
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "l"}
                            }
                          ]
                        },
                        { "block": "text",
                          "mods": {"view": "primary","size": "s"},
                          "content": [
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "m"}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { "block": "page-index",
              "elem": "grid",
              "mix": [
                {"block": "grid", "mods": {"m-columns": "12", "col-gap": "full", "row-gap": "xxl"}}
              ],
              "content": [
                { "block": "history",
                  "mix": [
                   {"block": "list", "mods": {"view": "default","border": "all"}},
                   {"block": "grid", "elem": "fraction", "elemMods": {"m-col": "8"}}
                  ],
                  "content": [
                    { "block": "history",
                      "elem": "transaction",
                      "mix":[{"block": "list", "elem": "item", "elemMods": {"border": "bottom","space-a": "l"}}],
                      "content": [
                        { "block": "history",
                          "elem": "show",
                          "mix": [
                            {"block": "e-accordion", "elem": "short"},
                            {"block": "list", "elem": "item", "elemMods": {"vertical-align": "center"}}
                          ],
                          "content": [
                            { "block": "history",
                              "elem": "details",
                              "content": [
                                { "block": "history",
                                  "elem": "time",
                                  "content": [
                                    { "block": "text",
                                      "mods": {"view": "ghost", "size": "s"},
                                      "content": [
                                        { "block": "text",
                                          "elem": "word",
                                          "elemMods": {"width": "m"}
                                        }
                                      ]
                                    },
                                    { "block": "text",
                                      "mods": {"view": "ghost", "size": "s"},
                                      "content": [
                                        { "block": "text",
                                          "elem": "word",
                                          "elemMods": {"width": "m"}
                                        }
                                      ]
                                    }
                                  ]
                                },
                                { "block": "history",
                                  "elem": "destination",
                                  "mix": [
                                    {"block": "icon-plus", "mods": {"vertical-align": "center"}}
                                  ],
                                  "content": [
                                    { "block": "history",
                                      "elem": "pic",
                                      "mix": [
                                        {"block": "icon-plus", "elem": "icon", "elemMods": {"indent-r": "s","indent-l": "l"}}
                                      ],
                                      "content": [
                                        { "block": "brand-logo",
                                          "mods": {"name": "yota","size": "m"}
                                        }
                                      ]
                                    },
                                    { "block": "history",
                                      "elem": "label",
                                      "mix": [
                                        {"block": "icon-plus", "elem": "block"}
                                      ],
                                      "content": [
                                        { "block": "text",
                                          "mods": {"view": "primary", "size": "l"},
                                          "content": [
                                            { "block": "text",
                                              "elem": "word",
                                              "elemMods": {"width": "l"}
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            { "block": "history",
                              "elem": "sum",
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        { "block": "history",
                          "elem": "hide",
                          "mix": [
                            {"block": "e-accordion", "elem": "more", "elemMods": {"view": "default"}},
                            {"block": "list", "elem": "item", "elemMods": {"indent-t": "m"}}
                          ],
                          "content": [
                            { "block": "history",
                              "elem": "description",
                              "mix": [
                                {"block": "list", "elem": "item", "elemMods": {"indent-b": "m"}}
                              ],
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                },
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                }
                              ]
                            },
                            { "block": "history",
                              "elem": "actions",
                              "mix": [
                                {"block": "list", "elem": "item", "elemMods": {"distribute": "between","indent-b": "l"}}
                              ],
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                },
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    { "block": "history",
                      "elem": "transaction",
                      "mix":[{"block": "list", "elem": "item", "elemMods": {"border": "bottom","space-a": "l"}}],
                      "content": [
                        { "block": "history",
                          "elem": "show",
                          "mix": [
                            {"block": "e-accordion", "elem": "short"},
                            {"block": "list", "elem": "item", "elemMods": {"vertical-align": "center"}}
                          ],
                          "content": [
                            { "block": "history",
                              "elem": "details",
                              "content": [
                                { "block": "history",
                                  "elem": "time",
                                  "content": [
                                    { "block": "text",
                                      "mods": {"view": "ghost", "size": "s"},
                                      "content": [
                                        { "block": "text",
                                          "elem": "word",
                                          "elemMods": {"width": "m"}
                                        }
                                      ]
                                    },
                                    { "block": "text",
                                      "mods": {"view": "ghost", "size": "s"},
                                      "content": [
                                        { "block": "text",
                                          "elem": "word",
                                          "elemMods": {"width": "m"}
                                        }
                                      ]
                                    }
                                  ]
                                },
                                { "block": "history",
                                  "elem": "destination",
                                  "mix": [
                                    {"block": "icon-plus", "mods": {"vertical-align": "center"}}
                                  ],
                                  "content": [
                                    { "block": "history",
                                      "elem": "pic",
                                      "mix": [
                                        {"block": "icon-plus", "elem": "icon", "elemMods": {"indent-r": "s","indent-l": "l"}}
                                      ],
                                      "content": [
                                        { "block": "brand-logo",
                                          "mods": {"name": "mts","size": "m"}
                                        }
                                      ]
                                    },
                                    { "block": "history",
                                      "elem": "label",
                                      "mix": [
                                        {"block": "icon-plus", "elem": "block"}
                                      ],
                                      "content": [
                                        { "block": "text",
                                          "mods": {"view": "primary", "size": "l"},
                                          "content": [
                                            { "block": "text",
                                              "elem": "word",
                                              "elemMods": {"width": "l"}
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            { "block": "history",
                              "elem": "sum",
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        { "block": "history",
                          "elem": "hide",
                          "mix": [
                            {"block": "e-accordion", "elem": "more", "elemMods": {"view": "default"}},
                            {"block": "list", "elem": "item", "elemMods": {"indent-t": "m"}}
                          ],
                          "content": [
                            { "block": "history",
                              "elem": "description",
                              "mix": [
                                {"block": "list", "elem": "item", "elemMods": {"indent-b": "m"}}
                              ],
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "type": "h2", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                },
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                }
                              ]
                            },
                            { "block": "history",
                              "elem": "actions",
                              "mix": [
                                {"block": "list", "elem": "item", "elemMods": {"distribute": "between","indent-b": "l"}}
                              ],
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                },
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    { "block": "history",
                      "elem": "transaction",
                      "mix":[{"block": "list", "elem": "item", "elemMods": {"border": "bottom","space-a": "l"}}],
                      "content": [
                        { "block": "history",
                          "elem": "show",
                          "mix": [
                            {"block": "e-accordion", "elem": "short"},
                            {"block": "list", "elem": "item", "elemMods": {"vertical-align": "center"}}
                          ],
                          "content": [
                            { "block": "history",
                              "elem": "details",
                              "content": [
                                { "block": "history",
                                  "elem": "time",
                                  "content": [
                                    { "block": "text",
                                      "mods": {"view": "ghost", "size": "s"},
                                      "content": [
                                        { "block": "text",
                                          "elem": "word",
                                          "elemMods": {"width": "m"}
                                        }
                                      ]
                                    },
                                    { "block": "text",
                                      "mods": {"view": "ghost", "size": "s"},
                                      "content": [
                                        { "block": "text",
                                          "elem": "word",
                                          "elemMods": {"width": "m"}
                                        }
                                      ]
                                    }
                                  ]
                                },
                                { "block": "history",
                                  "elem": "destination",
                                  "mix": [
                                    {"block": "icon-plus", "mods": {"vertical-align": "center"}}
                                  ],
                                  "content": [
                                    { "block": "history",
                                      "elem": "pic",
                                      "mix": [
                                        {"block": "icon-plus", "elem": "icon", "elemMods": {"indent-r": "s","indent-l": "l"}}
                                      ],
                                      "content": [
                                        { "block": "brand-logo",
                                          "mods": {"name": "kcell","size": "m"}
                                        }
                                      ]
                                    },
                                    { "block": "history",
                                      "elem": "label",
                                      "mix": [
                                        {"block": "icon-plus", "elem": "block"}
                                      ],
                                      "content": [
                                        { "block": "text",
                                          "mods": {"view": "primary", "size": "l"},
                                          "content": [
                                            { "block": "text",
                                              "elem": "word",
                                              "elemMods": {"width": "l"}
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            { "block": "history",
                              "elem": "sum",
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        { "block": "history",
                          "elem": "hide",
                          "mix": [
                            {"block": "e-accordion", "elem": "more", "elemMods": {"view": "default"}},
                            {"block": "list", "elem": "item", "elemMods": {"indent-t": "m"}}
                          ],
                          "content": [
                            { "block": "history",
                              "elem": "description",
                              "mix": [
                                {"block": "list", "elem": "item", "elemMods": {"indent-b": "m"}}
                              ],
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                },
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                }
                              ]
                            },
                            { "block": "history",
                              "elem": "actions",
                              "mix": [
                                {"block": "list", "elem": "item", "elemMods": {"distribute": "between","indent-b": "l"}}
                              ],
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                },
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    { "block": "history",
                      "elem": "transaction",
                      "mix":[{"block": "list", "elem": "item", "elemMods": {"border": "bottom","space-a": "l"}}],
                      "content": [
                        { "block": "history",
                          "elem": "show",
                          "mix": [
                            {"block": "e-accordion", "elem": "short"},
                            {"block": "list", "elem": "item", "elemMods": {"vertical-align": "center"}}
                          ],
                          "content": [
                            { "block": "history",
                              "elem": "details",
                              "content": [
                                { "block": "history",
                                  "elem": "time",
                                  "content": [
                                    { "block": "text",
                                      "mods": {"view": "ghost", "size": "s"},
                                      "content": [
                                        { "block": "text",
                                          "elem": "word",
                                          "elemMods": {"width": "m"}
                                        }
                                      ]
                                    },
                                    { "block": "text",
                                      "mods": {"view": "ghost", "size": "s"},
                                      "content": [
                                        { "block": "text",
                                          "elem": "word",
                                          "elemMods": {"width": "m"}
                                        }
                                      ]
                                    }
                                  ]
                                },
                                { "block": "history",
                                  "elem": "destination",
                                  "mix": [
                                    {"block": "icon-plus", "mods": {"vertical-align": "center"}}
                                  ],
                                  "content": [
                                    { "block": "history",
                                      "elem": "pic",
                                      "mix": [
                                        {"block": "icon-plus", "elem": "icon", "elemMods": {"indent-r": "s","indent-l": "l"}}
                                      ],
                                      "content": [
                                        { "block": "brand-logo",
                                          "mods": {"name": "megafon","size": "m"}
                                        }
                                      ]
                                    },
                                    { "block": "history",
                                      "elem": "label",
                                      "mix": [
                                        {"block": "icon-plus", "elem": "block"}
                                      ],
                                      "content": [
                                        { "block": "text",
                                          "mods": {"view": "primary", "size": "l"},
                                          "content": [
                                            { "block": "text",
                                              "elem": "word",
                                              "elemMods": {"width": "l"}
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            { "block": "history",
                              "elem": "sum",
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        { "block": "history",
                          "elem": "hide",
                          "mix": [
                            {"block": "e-accordion", "elem": "more", "elemMods": {"view": "default"}},
                            {"block": "list", "elem": "item", "elemMods": {"indent-t": "m"}}
                          ],
                          "content": [
                            { "block": "history",
                              "elem": "description",
                              "mix": [
                                {"block": "list", "elem": "item", "elemMods": {"indent-b": "m"}}
                              ],
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "type": "h1", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                },
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    },
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                }
                              ]
                            },
                            { "block": "history",
                              "elem": "actions",
                              "mix": [
                                {"block": "list", "elem": "item", "elemMods": {"distribute": "between","indent-b": "l"}}
                              ],
                              "content": [
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "l"}
                                    }
                                  ]
                                },
                                { "block": "text",
                                  "mods": {"view": "primary", "size": "l"},
                                  "content": [
                                    { "block": "text",
                                      "elem": "word",
                                      "elemMods": {"width": "m"}
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { "block": "page-index",
                  "elem": "commercial",
                  "mix": [
                    {"block": "commercial"},
                    {"block": "card", "mods": {"view": "default"}},
                    {"block": "theme", "mods": {"color": "project-brand"}},
                    {"block": "grid", "elem": "fraction", "elemMods": {"m-col": "4"}}
                  ],
                  "content": [
                    { "block": "commercial",
                      "elem": "pic",
                      "mix": [
                        {"block": "card", "elem": "content", "elemMods": {"space-a": "xxl"}}
                      ],
                      "content": [
                        { "block": "commercial",
                          "elem": "image",
                          "mix": [
                            {"block": "image"},
                            {"block": "theme", "mods": {"color": "project-inverse"}}
                          ]
                        }
                      ]
                    },
                    { "block": "commercial",
                      "elem": "info",
                      "mix": [
                        {"block": "card", "elem": "footer", "elemMods": {"space-a": "xxl"}}
                      ],
                      "content": [
                        { "block": "commercial",
                          "elem": "text",
                          "mix": [
                            {"block": "text", "mods": {"view": "primary", "size": "s"}}
                          ],
                          "content": [
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "l"}
                            },
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "m"}
                            },
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "l"}
                            },
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "s"}
                            },
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "s"}
                            },
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "m"}
                            },
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "l"}
                            },
                            { "block": "text",
                              "elem": "word",
                              "elemMods": {"width": "m"}
                            }
                          ]
                        },
                        { "block": "commercial",
                          "elem": "navigation",
                          "content": [
                            { "block": "commercial",
                              "elem": "page-button"
                            },
                            { "block": "commercial",
                              "elem": "page-button"
                            },
                            { "block": "commercial",
                              "elem": "page-button"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    { "block": "footer",
      "content": [
        { "block": "footer",
          "elem": "content",
          "content": [
            { "block": "footer",
              "elem": "text",
              "mix": [
                {"block": "text", "mods": {"view": "primary", "size": "l"}}
              ],
              "content": [
                { "block": "text",
                  "elem": "word",
                  "elemMods": {"width": "l"}
                },
                { "block": "text",
                  "elem": "word",
                  "elemMods": {"width": "s"}
                }
              ]
            },
            { "block": "footer",
              "elem": "text",
              "mix": [
                {"block": "text", "mods": {"view": "primary", "size": "l"}}
              ],
              "content": [
                { "block": "text",
                  "elem": "word",
                  "elemMods": {"width": "l"}
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}`; 


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

const string6 = `{
  "block": "form",
  "content": [
      {
          "block": "input",
          "mods": {
              "size": "l"
          }
      },
      {
          "block": "form",
          "elem": "footer",
          "content": [
              {
                  "block": "text",
                  "mods": {
                      "size": "l"
                  }
              },
              {
                  "block": "text",
                  "mods": {
                      "size": "xxl"
                  }
              }
          ]
      }
  ]
}`

const string7 = `{
  "block": "form",
  "content": [
      {
          "block": "form",
          "elem": "header",
          "mix": [ { "block": "form", "elem": "item", "mods": { "space-v": "l", "space-h": "xl" } } ]
      },      
      {
          "block": "input",
          "mods": {
              "size": "l"
          }
      },
      {
        "block": "form",
        "elem": "footer",
        "mix": [ { "block": "form", "elem": "item", "mods": { "space-v": "s", "space-h": "m" } } ]
    }
  ]
}`

//console.log(lint(string1));

window.lint = lint;

function lint(string) {

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
    invalidHeaderTextSize: {"code": "FORM.HEADER_TEXT_SIZE_IS_INVALID", "error": "Все текстовые блоки в заголовке формы должны быть со значением модификатора size на 2 шага больше эталонного размера"},
    invalidHeaderSpaceVer: {"code": "FORM.HEADER_VERTICAL_SPACE_IS_INVALID", "error": "Вертикальный внутренний отступ заголовка формы должен быть задан с помощью микса на него элемента формы item со значением модификатора space-v, равным эталонному размеру"},
    invalidHeaderSpaceHor: {"code": "FORM.HEADER_HORIZONTAL_SPACE_IS_INVALID", "error": "Горизонтальный внутренний отступ заголовка формы должен быть на 1 шаг больше эталонного размера"},
    invalidFooterSpaceVer: {"code": "FORM.FOOTER_VERTICAL_SPACE_IS_INVALID", "error": "Вертикальный внутренний отступ подвала формы должен быть задан с помощью микса на него элемента формы item со значением модификатора space-v, равным эталонному размеру"},
    invalidFooterSpaceHor: {"code": "FORM.FOOTER_HORIZONTAL_SPACE_IS_INVALID", "error": "Горизонтальный внутренний отступ подвала формы должен быть на 1 шаг больше эталонного размера"},
    invalidFooterTextSize: {"code": "FORM.FOOTER_TEXT_SIZE_IS_INVALID", "error": "Все текстовые блоки в подвале формы должны быть со значением модификатора size на 2 шага больше эталонного размера"},
    invalidH1: {"code": "TEXT.SEVERAL_H1", "error": "В документе не может быть больше одного заголовка h1"},
    invalidH2: {"code": "TEXT.INVALID_H2_POSITION", "error": "Заголовок h2 следует раньше заголовка h1"},
    invalidH3: {"code": "TEXT.INVALID_H3_POSITION", "error": "Заголовок h3 следует раньше заголовка h2"}
  }

  const json = JSON.parse(string);
  const ast = jsonToAst(json, string);
  const form = findObject(ast, "form", true);
  console.log(form);
      
//      console.log(jsonToAst(json));

if(form) {
  validateInputSizes(form);
  validateContentSpaces(form);
  validateContentItem(form);
  validateHeaderFooterText(form, "header");
  validateHeaderFooterText(form, "footer");
  validateHeaderFooterSpaces(form, "header");
  validateHeaderFooterSpaces(form, "footer");  
}

return errors;
  

//      console.log(findValue(form, 'size', 'input'));


  //  lint(string);

  function validateInputSizes (obj) {
    const refSize = findSize(obj, ["input", "text", "label"], true);
    const content = findObject(obj, "content", false, true);
    const sizes = [];
    sizes.push(...findAllMods(content));
    console.log(sizes);
    compareSizes(refSize, sizes, "size", errorMessages.invalidInputSize);
    console.log(errors);
  }

  //  validateInputSizes(form);

  function validateContentSpaces(obj) {
    const contentElem = findObject(obj, "content", true);

    if(contentElem) {
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

  //  validateContentSpaces(form);

  function validateContentItem(obj) {
    const contentElem = findObject(obj, "content", true);

    if(contentElem) {
      const content = findObject(contentElem.value, "content", false, true);
      let contentItems = [];

      content.value.children.forEach(child => {
        let contentItem = findObject(child, "content-item", true);
        if(!contentItem) pushError(child, errorMessages.invalidContentItem);
        else contentItems.push(contentItem);
      })  

      let mixes = [];
      for(let i = 0; i < contentItems.length - 1; i++) {
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

// validateContentItem(form);

  function validateHeaderFooterText(obj, elem) {    
    const section = findObject(obj, elem, true);    

    if(section) {
      const refSize = findSize(obj, ["input", "text", "label"], true);      
      const content = findObject(section, "content", false, true);    
      if(content) {
        const sizes = findAllMods(content);
        let errorMessage;

        if (elem === 'header') {
          errorMessage = errorMessages.invalidHeaderTextSize;
          compareSizes(refSize, sizes, "size", errorMessage, validSpacesX2);
        }  
        else {
          errorMessage = errorMessages.invalidFooterTextSize;
          compareSizes(refSize, sizes, "size", errorMessage); 
        }
      }      
    }
    console.log(errors);    
  }

  //  validateHeaderFooterText(form, "header");
  //  validateHeaderFooterText(form, "footer");
  //  console.log(errors);

  function validateHeaderFooterSpaces(obj, elem) {    
    const section = findObject(obj, elem, true);  

    if(section) {
      const refSize = findSize(obj, ["input", "text", "label"], true);

      
      const mix = findObject(section, "mix", false, true);
     //const mods = findMod(mix, "mods", true, true);

      if(!mix) {
        (elem === 'header') ? pushError(section, errorMessages.invalidHeaderSpaceVer) : pushError(section, errorMessages.invalidFooterSpaceHor);
        return;
      }

      const sizes = [];
      sizes.push(...findAllMods(mix));
      console.log(sizes);

      if (elem === 'header') {
        compareSizes(refSize, sizes, "space-v",  errorMessages.invalidHeaderSpaceVer);
        compareSizes(refSize, sizes, "space-h", errorMessages.invalidHeaderSpaceHor, validSpacesX2);
      }  
      else {
        compareSizes(refSize, sizes, "space-v", errorMessages.invalidFooterSpaceVer);
        compareSizes(refSize, sizes, "space-h", errorMessages.invalidFooterSpaceHor, validSpacesX2);
      }
    }
    console.log(errors);
  }

  //validateHeaderFooterSpaces(form, "header");
  //validateHeaderFooterSpaces(form, "footer");
  //  console.log(errors);
  

  function findObject (item, name, shouldReturnParent, shouldDefineKey = false) {
    let result = false,
    soughtObject = false;

    findObj (item, name, shouldReturnParent, shouldDefineKey);

    function findObj (item, name, shouldReturnParent, shouldDefineKey) {

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
        }

        else if (!result && item.value.children) {
          item.value.children.forEach (child => {
            findObj(child, name, shouldReturnParent, shouldDefineKey);
            if (!result && soughtObject) {
              if (shouldReturnParent) soughtObject = item;
              result = true;
              return;
            }
          })
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
      const mod = findObject(child, "mods", false, true);
      if(mod) arr.push(mod);      
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
    // console.log(objEndIndex);

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
      }
      else return;
    }    

    function locateLineColumn(raw, str) {
      let line = str.match(/\n/g).length + 1;
      let column = str.length - str.lastIndexOf("\n");
      return {column: column, line: line};
    }
  }

  // console.log(locateValue(string5, 1));

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
}

