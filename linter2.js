const string = `{
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
        {
          "block": "form",
          "elem": "label",
          "content": 
            {
              "block": "text",
              "mods": 
              { 
                "size": "l" 
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
        "mix": [{ "block": "form", "elem": "item", "mods": {  "space-v": "xl" } }]
    }
}`;

  const errors = [];
  let h1 = false,
      h2 = false,
      reference;

  const errorMessages = {
    invalidH1: {"code": "TEXT.SEVERAL_H1", "error": "В документе не может быть больше одного заголовка h1"},
    invalidH2: {"code": "TEXT.INVALID_H2_POSITION", "error": "Заголовок h2 следует раньше заголовка h1"},
    invalidH3: {"code": "TEXT.INVALID_H3_POSITION", "error": "Заголовок h3 следует раньше заголовка h2"},
    invalidInputSize: {"code": "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL", "error": "Подписи и поля в форме должны быть одного размера"},
    invalidContentSpaceVer: {"code": "FORM.CONTENT_VERTICAL_SPACE_IS_INVALID", "error": "Вертикальный внутренний отступ контентного элемента должен быть на 2 шага больше эталонного размера"},
    invalidContentSpaceHor: {"code": "FORM.CONTENT_HORIZONTAL_SPACE_IS_INVALID", "error": "Горизонтальный внутренний отступ контентного элемента должен быть на 1 шаг больше эталонного размера"}
  }

  const inputSizes = [],
        contentSpaces = [];

  function getEntries (obj, arr) {
    const entries = Object.entries(obj);
    entries.forEach(entry => {
        if (typeof entry[1] === 'string') arr.push(entry);
        if (typeof entry[1] === 'object') getEntries(entry[1], arr);
    });   
    }   

  function getProperty (obj, prop) {

  } 

  function validateInputSizes (obj) {
    getEntries(obj, inputSizes);

    let reference,
        size;
    inputSizes.forEach(entry => {
        if (entry[0] === 'size') {
            size = true;
            if (reference === undefined) reference = entry[1];
            else if (entry[1] !== reference) errors.push(errorMessages.invalidInputSize); 
        }         
    })

    if (size === undefined) errors.push(errorMessages.invalidInputSize);
  }

  function validateContentSpaces (obj) {
    obj['content'], contentSpaces);
    console.log(contentSpaces);   
  }

  function lint(string) {
      const json = JSON.parse(string3);
      validateInputSizes(json);
      validateContentSpaces(json);
      
      console.log(errors);
      return errors;
  }

  lint(string);