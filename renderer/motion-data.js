window.PET_MOTION_DATA = {
  defaultMotions: {
    tapHead: [
      { motion: 'smile01', weight: 4 },
      { motion: 'nod01', weight: 3 },
      { motion: 'wink01', weight: 2 },
      { motion: 'nnf01', weight: 1 },
      { motion: 'nnf02', weight: 1 }
    ],
    tapBody: [
      { motion: 'wondering01', weight: 3 },
      { motion: 'nf01', weight: 3 },
      { motion: 'nf02', weight: 2 },
      { motion: 'nnf03', weight: 1 },
      { motion: 'bye01', weight: 1 }
    ],
    tapFallback: [
      { motion: 'smile01', weight: 4 },
      { motion: 'nod01', weight: 3 },
      { motion: 'nf01', weight: 2 },
      { motion: 'nf02', weight: 2 },
      { motion: 'nnf01', weight: 1 }
    ],
    hover: [
      { motion: 'wink01', weight: 3 },
      { motion: 'smile01', weight: 3 },
      { motion: 'nod01', weight: 2 },
      { motion: 'nnf05', weight: 1 }
    ],
    drag: [
      { motion: 'wondering01', weight: 3 },
      { motion: 'nf03', weight: 2 },
      { motion: 'nnf04', weight: 1 },
      { motion: 'bye01', weight: 1 }
    ],
    petting: [
      { motion: 'shame01', weight: 4 },
      { motion: 'shame02', weight: 3 },
      { motion: 'smile02', weight: 2 },
      { motion: 'wink01', weight: 1 },
      { motion: 'wondering01', weight: 1 },
      { motion: 'nnf05', weight: 1 }
    ],
    pettingLevels: {
      1: [
        { motion: 'smile01', weight: 4 },
        { motion: 'nod01', weight: 3 },
        { motion: 'wink01', weight: 2 }
      ],
      2: [
        { motion: 'smile02', weight: 4 },
        { motion: 'shame01', weight: 3 },
        { motion: 'wondering01', weight: 2 }
      ],
      3: [
        { motion: 'shame01', weight: 5 },
        { motion: 'shame02', weight: 4 },
        { motion: 'nnf05', weight: 1 }
      ]
    },
    companion: {
      ambient: [
        { motion: 'smile01', weight: 3 },
        { motion: 'idle01', weight: 2 },
        { motion: 'idle02', weight: 2 },
        { motion: 'nf02', weight: 2 },
        { motion: 'nnf02', weight: 1 }
      ]
    },
    focus: {
      interruptTap: [
        { motion: 'nod01', weight: 3 },
        { motion: 'serious01', weight: 3 },
        { motion: 'nf01', weight: 2 },
        { motion: 'idle01', weight: 1 }
      ],
      idle: [
        { motion: 'idle01', weight: 3 },
        { motion: 'idle02', weight: 3 },
        { motion: 'serious01', weight: 2 },
        { motion: 'nf01', weight: 1 }
      ]
    },
    idle: {
      morning: ['idle01', 'nf01', 'nf02', 'nnf01', 'smile01'],
      day: ['idle01', 'idle02', 'nf02', 'nf03', 'nnf02', 'humming01'],
      evening: ['idle02', 'nnf03', 'nnf04', 'wondering01', 'smile02'],
      night: ['idle02', 'humming01', 'sleep01', 'nnf05', 'serious01']
    }
  },
  characterMotions: {
    kasumi: {
      tapHead: [
        { motion: 'smile03', weight: 4 },
        { motion: 'smile01', weight: 3 },
        { motion: 'jaan01', weight: 2 },
        { motion: 'wink01', weight: 2 }
      ],
      tapBody: [
        { motion: 'smile02', weight: 4 },
        { motion: 'gattsu01', weight: 3 },
        { motion: 'nf02', weight: 2 },
        { motion: 'nod01', weight: 1 }
      ],
      hover: [
        { motion: 'eeto01', weight: 3 },
        { motion: 'smile06', weight: 2 },
        { motion: 'niyaniya01', weight: 1 }
      ],
      drag: [
        { motion: 'bye01', weight: 2 },
        { motion: 'nf03', weight: 3 },
        { motion: 'nnf03', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile05', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'smile06', weight: 2 },
          { motion: 'surprised02', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 4 },
          { motion: 'scared01', weight: 1 },
          { motion: 'surprised03', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'smile01', weight: 4 },
          { motion: 'smile02', weight: 3 },
          { motion: 'idle01', weight: 2 },
          { motion: 'jaan01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'nod01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'idle02', weight: 2 },
          { motion: 'serious01', weight: 1 }
        ]
      }
    },
    tae: {
      tapHead: [
        { motion: 'smile01', weight: 4 },
        { motion: 'smile02', weight: 3 },
        { motion: 'thinking01', weight: 2 }
      ],
      tapBody: [
        { motion: 'idle02', weight: 3 },
        { motion: 'nf02', weight: 2 },
        { motion: 'serious01', weight: 1 }
      ],
      hover: [
        { motion: 'thinking01', weight: 3 },
        { motion: 'smile03', weight: 2 },
        { motion: 'nnf02', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'idle02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile02', weight: 3 },
          { motion: 'nnf02', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'smile03', weight: 2 },
          { motion: 'surprised01', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 4 },
          { motion: 'surprised02', weight: 2 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'thinking01', weight: 2 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    rimi: {
      tapHead: [
        { motion: 'smile01', weight: 3 },
        { motion: 'odoodo01', weight: 3 },
        { motion: 'modesty01', weight: 2 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'smile02', weight: 2 },
        { motion: 'odoodo02', weight: 2 }
      ],
      hover: [
        { motion: 'modesty01', weight: 3 },
        { motion: 'odoodo01', weight: 2 },
        { motion: 'smile03', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'bye01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'modesty01', weight: 3 },
          { motion: 'smile02', weight: 2 },
          { motion: 'odoodo01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shame02', weight: 2 },
          { motion: 'odoodo02', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 4 },
          { motion: 'odoodo02', weight: 2 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'smile01', weight: 3 },
          { motion: 'idle02', weight: 2 },
          { motion: 'ranmane01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'nf01', weight: 2 },
          { motion: 'odoodo01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'idle02', weight: 2 },
          { motion: 'serious01', weight: 1 }
        ]
      }
    },
    saaya: {
      tapHead: [
        { motion: 'smile01', weight: 4 },
        { motion: 'nod01', weight: 3 },
        { motion: 'smile03', weight: 2 }
      ],
      tapBody: [
        { motion: 'nod01', weight: 3 },
        { motion: 'nf02', weight: 2 },
        { motion: 'thinking01', weight: 2 }
      ],
      hover: [
        { motion: 'smile02', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'wink01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'smile04', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'nod01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'smile04', weight: 2 },
          { motion: 'wink01', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 4 },
          { motion: 'surprised01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'smile01', weight: 3 },
          { motion: 'idle02', weight: 2 },
          { motion: 'nod01', weight: 2 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'nod01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    arisa: {
      tapHead: [
        { motion: 'nnf01', weight: 3 },
        { motion: 'pui01', weight: 3 },
        { motion: 'shame01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'nf03', weight: 1 }
      ],
      hover: [
        { motion: 'stare01', weight: 3 },
        { motion: 'pui01', weight: 2 },
        { motion: 'nnf05', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'bye01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'nnf01', weight: 3 },
          { motion: 'pui01', weight: 2 },
          { motion: 'shame01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shame02', weight: 2 },
          { motion: 'pui01', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 4 },
          { motion: 'angry01', weight: 1 },
          { motion: 'angry02', weight: 1 }
        ]
      },
      petting: [
        { motion: 'shame01', weight: 3 },
        { motion: 'pui01', weight: 2 },
        { motion: 'nnf05', weight: 1 }
      ],
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'nnf02', weight: 2 },
          { motion: 'nf02', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'stare02', weight: 1 }
        ]
      }
    },
    ran: {
      tapHead: [
        { motion: 'serious01', weight: 3 },
        { motion: 'pui01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'sigh01', weight: 2 },
        { motion: 'serious01', weight: 1 }
      ],
      hover: [
        { motion: 'serious01', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'pui01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 1 },
        { motion: 'idle02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'pui01', weight: 3 },
          { motion: 'nnf01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'pui01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 4 },
          { motion: 'angry01', weight: 1 },
          { motion: 'angry02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'sigh01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    moca: {
      tapHead: [
        { motion: 'niyaniya01', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'smile02', weight: 1 }
      ],
      tapBody: [
        { motion: 'eeto02', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'inspiration01', weight: 1 }
      ],
      hover: [
        { motion: 'niyaniya01', weight: 3 },
        { motion: 'eeto01', weight: 2 },
        { motion: 'wink01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'idle02', weight: 2 },
        { motion: 'bye01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'niyaniya01', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shake01', weight: 2 },
          { motion: 'smile03', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shake02', weight: 2 },
          { motion: 'angry01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'niyaniya01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'eeto02', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'inspiration01', weight: 1 }
        ]
      }
    },
    himari: {
      tapHead: [
        { motion: 'awate01', weight: 3 },
        { motion: 'smile03', weight: 2 },
        { motion: 'expectation01', weight: 1 }
      ],
      tapBody: [
        { motion: 'gattsu01', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'handheld01', weight: 1 }
      ],
      hover: [
        { motion: 'wink01', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'expectation01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'awate01', weight: 2 },
        { motion: 'bye01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'awate01', weight: 2 },
          { motion: 'smile04', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'strange01', weight: 2 },
          { motion: 'shake01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'smile02', weight: 3 },
          { motion: 'idle01', weight: 2 },
          { motion: 'expectation01', weight: 2 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'unfight01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'idle02', weight: 2 },
          { motion: 'serious01', weight: 1 }
        ]
      }
    },
    tomoe: {
      tapHead: [
        { motion: 'smile01', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'thinking02', weight: 1 }
      ],
      tapBody: [
        { motion: 'kobushi01', weight: 3 },
        { motion: 'fighting01', weight: 2 },
        { motion: 'smile02', weight: 1 }
      ],
      hover: [
        { motion: 'smile03', weight: 3 },
        { motion: 'simizimi01', weight: 2 },
        { motion: 'thinking01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'fighting02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile02', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'smile03', weight: 2 },
          { motion: 'thinking02', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'angry01', weight: 1 },
          { motion: 'angry02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'simizimi01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'kime03', weight: 2 },
          { motion: 'thinking02', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'simizimi01', weight: 1 }
        ]
      }
    },
    tsugumi: {
      tapHead: [
        { motion: 'nod01', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'ando01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf02', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'smile02', weight: 1 }
      ],
      hover: [
        { motion: 'eeto01', weight: 3 },
        { motion: 'odoodo01', weight: 2 },
        { motion: 'smile03', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'awate01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile02', weight: 3 },
          { motion: 'nod01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'ando01', weight: 2 },
          { motion: 'odoodo01', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'awate01', weight: 2 },
          { motion: 'odoodo01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'nod01', weight: 2 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'nod01', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'idle02', weight: 2 },
          { motion: 'serious02', weight: 1 }
        ]
      }
    },
    lisa: {
      tapHead: [
        { motion: 'smile03', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'nod01', weight: 1 }
      ],
      tapBody: [
        { motion: 'smile02', weight: 3 },
        { motion: 'nf02', weight: 2 },
        { motion: 'uwame01', weight: 1 }
      ],
      hover: [
        { motion: 'smile04', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'eeto01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'smile05', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'smile05', weight: 2 },
          { motion: 'uwame01', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'sad03', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'smile02', weight: 3 },
          { motion: 'idle01', weight: 2 },
          { motion: 'smile05', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'nod01', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious02', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    yukina: {
      tapHead: [
        { motion: 'nod01', weight: 4 },
        { motion: 'serious01', weight: 3 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'serious01', weight: 4 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'nf01', weight: 1 }
      ],
      hover: [
        { motion: 'serious01', weight: 4 },
        { motion: 'thinking02', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 1 },
        { motion: 'idle02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'nod01', weight: 4 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'nod01', weight: 2 }
        ],
        3: [
          { motion: 'shame01', weight: 5 },
          { motion: 'serious01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 4 },
          { motion: 'serious01', weight: 3 },
          { motion: 'smile01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking03', weight: 2 },
          { motion: 'nod01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      },
      idle: {
        night: ['idle02', 'serious01', 'thinking01']
      }
    },
    sayo: {
      tapHead: [
        { motion: 'serious01', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'pui01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'sigh01', weight: 1 }
      ],
      hover: [
        { motion: 'serious02', weight: 3 },
        { motion: 'thinking02', weight: 2 },
        { motion: 'smile02', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'idle02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile01', weight: 3 },
          { motion: 'pui01', weight: 2 },
          { motion: 'serious01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'smile04', weight: 2 },
          { motion: 'odoodo01', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'angry01', weight: 1 },
          { motion: 'angry02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious02', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'sigh01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious03', weight: 2 },
          { motion: 'serious01', weight: 1 }
        ]
      }
    },
    ako: {
      tapHead: [
        { motion: 'chuni01', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'jaan01', weight: 1 }
      ],
      tapBody: [
        { motion: 'chuni02', weight: 3 },
        { motion: 'gattsu01', weight: 2 },
        { motion: 'exciting01', weight: 1 }
      ],
      hover: [
        { motion: 'smile06', weight: 3 },
        { motion: 'chuni03', weight: 2 },
        { motion: 'eeto01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'jaan01', weight: 2 },
        { motion: 'bye01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile05', weight: 3 },
          { motion: 'jaan01', weight: 2 },
          { motion: 'smile03', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'chuni03', weight: 2 },
          { motion: 'odoodo01', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'angry02', weight: 1 },
          { motion: 'cry03', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'smile04', weight: 2 },
          { motion: 'exciting01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'chuni02', weight: 2 },
          { motion: 'eeto01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    rinko: {
      tapHead: [
        { motion: 'smile02', weight: 3 },
        { motion: 'odoodo01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'talking01', weight: 2 },
        { motion: 'thinking01', weight: 1 }
      ],
      hover: [
        { motion: 'odoodo02', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'talking01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'idle02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'odoodo01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shame02', weight: 2 },
          { motion: 'odoodo02', weight: 1 }
        ],
        3: [
          { motion: 'shame03', weight: 3 },
          { motion: 'odoodo03', weight: 2 },
          { motion: 'surprised01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'smile02', weight: 2 },
          { motion: 'talking01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'talking01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    kokoro: {
      tapHead: [
        { motion: 'smile01', weight: 4 },
        { motion: 'smile02', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'jaan01', weight: 2 }
      ],
      tapBody: [
        { motion: 'gattsu01', weight: 3 },
        { motion: 'oowarai01', weight: 2 },
        { motion: 'smile01', weight: 2 },
        { motion: 'nf02', weight: 1 }
      ],
      hover: [
        { motion: 'smile02', weight: 4 },
        { motion: 'wink01', weight: 2 },
        { motion: 'jaan01', weight: 1 }
      ],
      drag: ['bye01', 'nf03', 'smile01'],
      pettingLevels: {
        1: [
          { motion: 'smile01', weight: 4 },
          { motion: 'wink01', weight: 3 }
        ],
        2: [
          { motion: 'smile02', weight: 4 },
          { motion: 'shame01', weight: 2 }
        ],
        3: [
          { motion: 'shame01', weight: 4 },
          { motion: 'wink01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'smile01', weight: 4 },
          { motion: 'smile02', weight: 3 },
          { motion: 'jaan01', weight: 1 },
          { motion: 'nf02', weight: 1 }
        ]
      },
      idle: {
        morning: ['smile01', 'smile02', 'jaan01', 'idle01'],
        day: ['idle01', 'nf02', 'smile01', 'oowarai01']
      }
    },
    kaoru: {
      tapHead: [
        { motion: 'kime03', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'kime01', weight: 3 },
        { motion: 'natural01', weight: 2 },
        { motion: 'smile04', weight: 1 }
      ],
      hover: [
        { motion: 'natural01', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'kime04', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'kime02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile01', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'natural01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'worry01', weight: 2 },
          { motion: 'smile04', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'worry02', weight: 2 },
          { motion: 'surprised02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'natural01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'kime05', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'kime01', weight: 2 },
          { motion: 'natural01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious02', weight: 2 },
          { motion: 'natural01', weight: 1 }
        ]
      }
    },
    hagumi: {
      tapHead: [
        { motion: 'smile03', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'gattsu01', weight: 3 },
        { motion: 'smile02', weight: 2 },
        { motion: 'nf02', weight: 1 }
      ],
      hover: [
        { motion: 'wink01', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'eeto01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'gattsu01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile04', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'pui01', weight: 2 },
          { motion: 'smile03', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'odoodo01', weight: 2 },
          { motion: 'surprised01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'smile02', weight: 3 },
          { motion: 'idle01', weight: 2 },
          { motion: 'gattsu01', weight: 2 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'nod01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'idle02', weight: 2 },
          { motion: 'serious01', weight: 1 }
        ]
      }
    },
    kanon: {
      tapHead: [
        { motion: 'odoodo01', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'shame01', weight: 1 }
      ],
      tapBody: [
        { motion: 'smile02', weight: 3 },
        { motion: 'nf01', weight: 2 },
        { motion: 'awate01', weight: 1 }
      ],
      hover: [
        { motion: 'shame01', weight: 3 },
        { motion: 'odoodo02', weight: 2 },
        { motion: 'smile03', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'awate02', weight: 2 },
        { motion: 'bye01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile02', weight: 3 },
          { motion: 'odoodo01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'odoodo02', weight: 2 },
          { motion: 'awate01', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'awate02', weight: 2 },
          { motion: 'sad03', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'smile01', weight: 3 },
          { motion: 'idle02', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'nf01', weight: 2 },
          { motion: 'odoodo01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious02', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    misaki: {
      tapHead: [
        { motion: 'nnf01', weight: 3 },
        { motion: 'pui01', weight: 2 },
        { motion: 'shame01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'sigh01', weight: 2 },
        { motion: 'talk01', weight: 1 }
      ],
      hover: [
        { motion: 'nnf05', weight: 3 },
        { motion: 'pui01', weight: 2 },
        { motion: 'talk01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'sigh01', weight: 2 },
        { motion: 'bye01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'nnf01', weight: 3 },
          { motion: 'pui01', weight: 2 },
          { motion: 'shame01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shame02', weight: 2 },
          { motion: 'nnf05', weight: 1 }
        ],
        3: [
          { motion: 'shame03', weight: 3 },
          { motion: 'angry01', weight: 1 },
          { motion: 'angry02', weight: 1 }
        ]
      },
      petting: [
        { motion: 'shame01', weight: 3 },
        { motion: 'shame02', weight: 2 },
        { motion: 'nnf05', weight: 1 }
      ],
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'nf02', weight: 2 },
          { motion: 'talk01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'talk01', weight: 2 },
          { motion: 'sigh01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    michelle: {
      tapHead: [
        { motion: 'm_nf01', weight: 3 },
        { motion: 'm_idle', weight: 2 },
        { motion: 'm_awate', weight: 1 }
      ],
      tapBody: [
        { motion: 'm_nf03', weight: 3 },
        { motion: 'm_nf04', weight: 2 },
        { motion: 'm_idle', weight: 1 }
      ],
      hover: [
        { motion: 'm_nf01', weight: 3 },
        { motion: 'm_idle', weight: 2 },
        { motion: 'm_surprised', weight: 1 }
      ],
      drag: [
        { motion: 'm_nf03', weight: 3 },
        { motion: 'm_idle', weight: 2 },
        { motion: 'm_awate', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'm_nf01', weight: 3 },
          { motion: 'm_idle', weight: 2 }
        ],
        2: [
          { motion: 'm_awate', weight: 3 },
          { motion: 'm_surprised', weight: 2 }
        ],
        3: [
          { motion: 'm_awate', weight: 3 },
          { motion: 'm_surprised', weight: 2 },
          { motion: 'm_sad', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'm_idle', weight: 3 },
          { motion: 'm_nf01', weight: 2 },
          { motion: 'm_nf04', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'm_nf04', weight: 3 },
          { motion: 'm_awate', weight: 2 },
          { motion: 'm_idle', weight: 1 }
        ],
        idle: [
          { motion: 'm_idle', weight: 3 },
          { motion: 'm_nf01', weight: 2 },
          { motion: 'm_sad', weight: 1 }
        ]
      }
    },
    aya: {
      tapHead: [
        { motion: 'smile01', weight: 3 },
        { motion: 'shame01', weight: 2 },
        { motion: 'wink01', weight: 2 }
      ],
      tapBody: [
        { motion: 'smile02', weight: 3 },
        { motion: 'gattsu01', weight: 2 },
        { motion: 'nf02', weight: 1 }
      ],
      hover: [
        { motion: 'smile01', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'shame01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'smile03', weight: 2 },
        { motion: 'bye01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile01', weight: 4 },
          { motion: 'wink01', weight: 2 }
        ],
        2: [
          { motion: 'shame01', weight: 4 },
          { motion: 'odoodo01_shame', weight: 2 }
        ],
        3: [
          { motion: 'shame02', weight: 5 },
          { motion: 'odoodo02_shame', weight: 3 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'smile01', weight: 3 },
          { motion: 'smile02', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'nf01', weight: 2 },
          { motion: 'odoodo01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ]
      }
    },
    hina: {
      tapHead: [
        { motion: 'smile03', weight: 3 },
        { motion: 'niyaniya01', weight: 2 },
        { motion: 'wink01', weight: 1 }
      ],
      tapBody: [
        { motion: 'smile05', weight: 3 },
        { motion: 'gattsu01', weight: 2 },
        { motion: 'sayomane01', weight: 1 }
      ],
      hover: [
        { motion: 'niyaniya01', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'eeto01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'smile02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'niyaniya01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'sayomane02', weight: 2 },
          { motion: 'smile05', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'angry01', weight: 1 },
          { motion: 'angry02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'smile03', weight: 2 },
          { motion: 'niyaniya01', weight: 2 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious02', weight: 3 },
          { motion: 'eeto01', weight: 2 },
          { motion: 'sayomane01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    chisato: {
      tapHead: [
        { motion: 'smile03', weight: 3 },
        { motion: 'nod01', weight: 2 },
        { motion: 'pui01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf02', weight: 3 },
        { motion: 'smile02', weight: 2 },
        { motion: 'thinking01', weight: 1 }
      ],
      hover: [
        { motion: 'smile04', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'smile05', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'smile02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'nod01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'pui01', weight: 2 },
          { motion: 'smile05', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'sigh01', weight: 2 },
          { motion: 'angry01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'smile03', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    maya: {
      tapHead: [
        { motion: 'smile02', weight: 3 },
        { motion: 'awate01', weight: 2 },
        { motion: 'wink01', weight: 1 }
      ],
      tapBody: [
        { motion: 'talk01', weight: 3 },
        { motion: 'nf01', weight: 2 },
        { motion: 'thinking01', weight: 1 }
      ],
      hover: [
        { motion: 'talk02', weight: 3 },
        { motion: 'eeto01', weight: 2 },
        { motion: 'smile04', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'nod01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile02', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'awate01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shame02', weight: 2 },
          { motion: 'odoodo01', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'strange01', weight: 2 },
          { motion: 'cry02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'smile02', weight: 2 },
          { motion: 'talk01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'talk02', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    eve: {
      tapHead: [
        { motion: 'smile03', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'bushido01', weight: 1 }
      ],
      tapBody: [
        { motion: 'bushido01', weight: 3 },
        { motion: 'gattsu01', weight: 2 },
        { motion: 'talk01', weight: 1 }
      ],
      hover: [
        { motion: 'talk01', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'eeto01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'bushido01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shame02', weight: 2 },
          { motion: 'talk01', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'surprised01', weight: 2 },
          { motion: 'angry01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'smile03', weight: 2 },
          { motion: 'talk01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'bushido01', weight: 2 },
          { motion: 'talk01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious02', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    mashiro: {
      tapHead: [
        { motion: 'uziuzi01', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'serious01', weight: 1 }
      ],
      hover: [
        { motion: 'uziuzi02', weight: 3 },
        { motion: 'smile02', weight: 2 },
        { motion: 'thinking01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'smile03', weight: 2 },
        { motion: 'idle01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile01', weight: 3 },
          { motion: 'uziuzi01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        2: [
          { motion: 'uziuzi03', weight: 4 },
          { motion: 'uziuzi02', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ],
        3: [
          { motion: 'uziuzi04', weight: 5 },
          { motion: 'sad02', weight: 3 },
          { motion: 'surprised01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'kandou01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious02', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    toko: {
      tapHead: [
        { motion: 'smile04', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'pui01', weight: 1 }
      ],
      tapBody: [
        { motion: 'kime02', weight: 3 },
        { motion: 'smile03', weight: 2 },
        { motion: 'nf02', weight: 1 }
      ],
      hover: [
        { motion: 'wink02', weight: 3 },
        { motion: 'smile05', weight: 2 },
        { motion: 'serious01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'smile02', weight: 2 },
        { motion: 'kime01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile04', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        2: [
          { motion: 'pui01', weight: 3 },
          { motion: 'wink02', weight: 2 },
          { motion: 'surprised01', weight: 1 }
        ],
        3: [
          { motion: 'pui01', weight: 3 },
          { motion: 'angry01', weight: 1 },
          { motion: 'surprised02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile03', weight: 2 },
          { motion: 'wink02', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'kime01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ]
      }
    },
    nanami: {
      tapHead: [
        { motion: 'smile04', weight: 3 },
        { motion: 'nod01', weight: 2 },
        { motion: 'awkward01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf02', weight: 3 },
        { motion: 'smile02', weight: 2 },
        { motion: 'thinking01', weight: 1 }
      ],
      hover: [
        { motion: 'awkward01', weight: 3 },
        { motion: 'smile06', weight: 2 },
        { motion: 'eeto01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'smile03', weight: 2 },
        { motion: 'awate01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile05', weight: 3 },
          { motion: 'nod01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shame02', weight: 2 },
          { motion: 'awkward01', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'surprised01', weight: 2 },
          { motion: 'sad02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile03', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'eeto01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    tsukushi: {
      tapHead: [
        { motion: 'smile05', weight: 3 },
        { motion: 'kime01', weight: 2 },
        { motion: 'awate01', weight: 1 }
      ],
      tapBody: [
        { motion: 'fight01', weight: 3 },
        { motion: 'kime02', weight: 2 },
        { motion: 'nf02', weight: 1 }
      ],
      hover: [
        { motion: 'smile04', weight: 3 },
        { motion: 'serious01', weight: 2 },
        { motion: 'awate02', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'kime03', weight: 2 },
        { motion: 'idle02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'smile05', weight: 2 },
          { motion: 'kime01', weight: 1 }
        ],
        2: [
          { motion: 'awate01', weight: 3 },
          { motion: 'awate03', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        3: [
          { motion: 'awate03', weight: 3 },
          { motion: 'angry02', weight: 1 },
          { motion: 'surprised02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle02', weight: 3 },
          { motion: 'smile02', weight: 2 },
          { motion: 'kime01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'fight01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle02', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    rui: {
      tapHead: [
        { motion: 'smile03', weight: 3 },
        { motion: 'serious02', weight: 2 },
        { motion: 'thinking01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'serious01', weight: 2 },
        { motion: 'sigh01', weight: 1 }
      ],
      hover: [
        { motion: 'thinking01', weight: 3 },
        { motion: 'serious02', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'idle01', weight: 2 },
        { motion: 'sigh02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'odoodo01', weight: 3 },
          { motion: 'sigh01', weight: 2 },
          { motion: 'smile03', weight: 1 }
        ],
        3: [
          { motion: 'odoodo01', weight: 3 },
          { motion: 'sigh02', weight: 2 },
          { motion: 'surprised01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'sigh01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'idle01', weight: 1 }
        ]
      }
    },
    tomori: {
      tapHead: [
        { motion: 'shame01', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'thinking01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'thinking02', weight: 2 },
        { motion: 'serious01', weight: 1 }
      ],
      hover: [
        { motion: 'shame02', weight: 3 },
        { motion: 'kandou01', weight: 2 },
        { motion: 'smile02', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'smile03', weight: 2 },
        { motion: 'idle01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile01', weight: 3 },
          { motion: 'shame01', weight: 2 },
          { motion: 'kandou01', weight: 1 }
        ],
        2: [
          { motion: 'shame02', weight: 3 },
          { motion: 'kandou02', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ],
        3: [
          { motion: 'kandou03', weight: 3 },
          { motion: 'cry02', weight: 2 },
          { motion: 'sad04', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'kandou01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious02', weight: 3 },
          { motion: 'thinking02', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    anon: {
      tapHead: [
        { motion: 'smile03', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'shame01', weight: 1 }
      ],
      tapBody: [
        { motion: 'kime02', weight: 3 },
        { motion: 'smile02', weight: 2 },
        { motion: 'nf02', weight: 1 }
      ],
      hover: [
        { motion: 'smile04', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'wink01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'smile04', weight: 2 },
          { motion: 'thinking02', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'angry01', weight: 1 },
          { motion: 'angry03', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile02', weight: 2 },
          { motion: 'kandou02', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking03', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious02', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    rana: {
      tapHead: [
        { motion: 'smile01', weight: 3 },
        { motion: 'niya01', weight: 2 },
        { motion: 'thinking01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'serious01', weight: 2 },
        { motion: 'sigh01', weight: 1 }
      ],
      hover: [
        { motion: 'niya01', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'serious02', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'idle01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile02', weight: 3 },
          { motion: 'niya01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'smile04', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'angry02', weight: 1 },
          { motion: 'angry03', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'niya01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    soyo: {
      tapHead: [
        { motion: 'smile02', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'ando01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'serious02', weight: 1 }
      ],
      hover: [
        { motion: 'smile05', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'serious03', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye02', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile04', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shame02', weight: 2 },
          { motion: 'ando01', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'angry03', weight: 1 },
          { motion: 'sad03', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile03', weight: 2 },
          { motion: 'smile05', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious04', weight: 3 },
          { motion: 'thinking02', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious03', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    taki: {
      tapHead: [
        { motion: 'nnf01', weight: 3 },
        { motion: 'pui01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'serious01', weight: 2 },
        { motion: 'sigh01', weight: 1 }
      ],
      hover: [
        { motion: 'serious02', weight: 3 },
        { motion: 'sigh02', weight: 2 },
        { motion: 'smile04', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye02', weight: 2 },
        { motion: 'smile02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'nnf01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shame02', weight: 2 },
          { motion: 'pui01', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'angry04', weight: 1 },
          { motion: 'cry02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'nf02', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious02', weight: 3 },
          { motion: 'sigh01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    sakiko: {
      tapHead: [
        { motion: 'serious01', weight: 3 },
        { motion: 'smile02', weight: 2 },
        { motion: 'nod01', weight: 1 }
      ],
      tapBody: [
        { motion: 'kime01', weight: 3 },
        { motion: 'serious02', weight: 2 },
        { motion: 'nf01', weight: 1 }
      ],
      hover: [
        { motion: 'serious01', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'smile04', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'kime01', weight: 2 },
        { motion: 'bye01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile01', weight: 3 },
          { motion: 'nod01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shame02', weight: 2 },
          { motion: 'odoodo01', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'angry06', weight: 1 },
          { motion: 'cry04', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious02', weight: 3 },
          { motion: 'kime01', weight: 2 },
          { motion: 'thinking02', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'kime01', weight: 1 }
        ]
      }
    },
    mutsumi: {
      tapHead: [
        { motion: 'smile02', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'kime01', weight: 2 },
        { motion: 'odoodo01', weight: 1 }
      ],
      hover: [
        { motion: 'thinking01', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'idle01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile02', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ],
        2: [
          { motion: 'odoodo01', weight: 3 },
          { motion: 'smile04', weight: 2 },
          { motion: 'surprised01', weight: 1 }
        ],
        3: [
          { motion: 'odoodo01', weight: 3 },
          { motion: 'sad02', weight: 2 },
          { motion: 'angry01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'thinking01', weight: 3 },
          { motion: 'nf01', weight: 2 },
          { motion: 'kime01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    umiri: {
      tapHead: [
        { motion: 'smile03', weight: 3 },
        { motion: 'thinking01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'serious01', weight: 2 },
        { motion: 'sigh01', weight: 1 }
      ],
      hover: [
        { motion: 'thinking01', weight: 3 },
        { motion: 'smile05', weight: 2 },
        { motion: 'serious01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'smile04', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'smile05', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'sigh01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'smile04', weight: 1 }
        ],
        3: [
          { motion: 'sigh01', weight: 3 },
          { motion: 'angry02', weight: 1 },
          { motion: 'sad01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile02', weight: 2 },
          { motion: 'thinking01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'thinking01', weight: 2 },
          { motion: 'sigh01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    uika: {
      tapHead: [
        { motion: 'smile02', weight: 3 },
        { motion: 'mitore01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'smile03', weight: 2 },
        { motion: 'serious01', weight: 1 }
      ],
      hover: [
        { motion: 'mitore01', weight: 3 },
        { motion: 'smile03', weight: 2 },
        { motion: 'serious01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'smile02', weight: 2 },
        { motion: 'kime01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile02', weight: 3 },
          { motion: 'mitore01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'smile03', weight: 2 },
          { motion: 'serious01', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'angry01', weight: 1 },
          { motion: 'cry01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'mitore01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'kime01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ]
      }
    },
    mana: {
      tapHead: [
        { motion: 'smile03', weight: 3 },
        { motion: 'jaan01', weight: 2 },
        { motion: 'shame01', weight: 1 }
      ],
      tapBody: [
        { motion: 'gattsu01', weight: 3 },
        { motion: 'smile02', weight: 2 },
        { motion: 'nf01', weight: 1 }
      ],
      hover: [
        { motion: 'eeto01', weight: 3 },
        { motion: 'smile03', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'smile02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'jaan01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'smile02', weight: 2 },
          { motion: 'eeto01', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'cry01', weight: 1 },
          { motion: 'sad01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile02', weight: 2 },
          { motion: 'smile03', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'nf01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'eeto01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    nyamu: {
      tapHead: [
        { motion: 'smile03', weight: 3 },
        { motion: 'kime02', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'kime01', weight: 3 },
        { motion: 'nf01', weight: 2 },
        { motion: 'serious01', weight: 1 }
      ],
      hover: [
        { motion: 'smile02', weight: 3 },
        { motion: 'serious01', weight: 2 },
        { motion: 'surprised01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'kime02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile03', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'kime01', weight: 1 }
        ],
        2: [
          { motion: 'serious01', weight: 3 },
          { motion: 'surprised02', weight: 2 },
          { motion: 'smile02', weight: 1 }
        ],
        3: [
          { motion: 'serious01', weight: 3 },
          { motion: 'angry01', weight: 1 },
          { motion: 'cry01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile02', weight: 2 },
          { motion: 'kime01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'kime02', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    layer: {
      tapHead: [
        { motion: 'smile02', weight: 3 },
        { motion: 'mitore01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'nf01', weight: 3 },
        { motion: 'serious01', weight: 2 },
        { motion: 'smile03', weight: 1 }
      ],
      hover: [
        { motion: 'mitore01', weight: 3 },
        { motion: 'serious01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'serious01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile02', weight: 3 },
          { motion: 'mitore01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'smile03', weight: 2 },
          { motion: 'serious01', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'surprised01', weight: 2 },
          { motion: 'cry01', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'mitore01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'nf01', weight: 2 },
          { motion: 'kime01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    lock: {
      tapHead: [
        { motion: 'smile02', weight: 3 },
        { motion: 'awate01', weight: 2 },
        { motion: 'ando01', weight: 1 }
      ],
      tapBody: [
        { motion: 'kime02', weight: 3 },
        { motion: 'nf02', weight: 2 },
        { motion: 'smile03', weight: 1 }
      ],
      hover: [
        { motion: 'eeto01', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'serious02', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'kime03', weight: 2 },
        { motion: 'bye01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile02', weight: 3 },
          { motion: 'ando01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'odoodo01', weight: 2 },
          { motion: 'awate01', weight: 1 }
        ],
        3: [
          { motion: 'shame01', weight: 3 },
          { motion: 'odoodo02', weight: 2 },
          { motion: 'sad03', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'kime01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'kime01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    masking: {
      tapHead: [
        { motion: 'smile02', weight: 3 },
        { motion: 'wink01', weight: 2 },
        { motion: 'eeto01', weight: 1 }
      ],
      tapBody: [
        { motion: 'gattsu01', weight: 3 },
        { motion: 'gattsu02', weight: 2 },
        { motion: 'serious01', weight: 1 }
      ],
      hover: [
        { motion: 'serious02', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'wink01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'gattsu01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'smile02', weight: 3 },
          { motion: 'wink01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'eeto02', weight: 2 },
          { motion: 'smile04', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'angry02', weight: 1 },
          { motion: 'angry03', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'smile01', weight: 2 },
          { motion: 'serious01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious03', weight: 3 },
          { motion: 'gattsu01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ]
      }
    },
    pareo: {
      tapHead: [
        { motion: 'happy01', weight: 3 },
        { motion: 'smile04', weight: 2 },
        { motion: 'smile02', weight: 1 }
      ],
      tapBody: [
        { motion: 'happy02', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'nf02', weight: 1 }
      ],
      hover: [
        { motion: 'smile04', weight: 3 },
        { motion: 'serious01', weight: 2 },
        { motion: 'happy01', weight: 1 }
      ],
      drag: [
        { motion: 'nf03', weight: 3 },
        { motion: 'bye01', weight: 2 },
        { motion: 'happy02', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'happy01', weight: 3 },
          { motion: 'smile03', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame02', weight: 3 },
          { motion: 'happy02', weight: 2 },
          { motion: 'smile04', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'akirame01', weight: 2 },
          { motion: 'cry02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'happy01', weight: 2 },
          { motion: 'smile04', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious01', weight: 3 },
          { motion: 'nf01', weight: 2 },
          { motion: 'happy01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ]
      }
    },
    chuchu: {
      tapHead: [
        { motion: 'serious01', weight: 3 },
        { motion: 'nnf01', weight: 2 },
        { motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { motion: 'kime01', weight: 3 },
        { motion: 'nf01', weight: 2 },
        { motion: 'serious02', weight: 1 }
      ],
      hover: [
        { motion: 'serious01', weight: 3 },
        { motion: 'smile01', weight: 2 },
        { motion: 'eeto01', weight: 1 }
      ],
      drag: [
        { motion: 'kime01', weight: 3 },
        { motion: 'nf03', weight: 2 },
        { motion: 'bye01', weight: 1 }
      ],
      pettingLevels: {
        1: [
          { motion: 'nnf01', weight: 3 },
          { motion: 'smile02', weight: 2 },
          { motion: 'smile01', weight: 1 }
        ],
        2: [
          { motion: 'shame01', weight: 3 },
          { motion: 'shame02', weight: 2 },
          { motion: 'awate01', weight: 1 }
        ],
        3: [
          { motion: 'shame02', weight: 3 },
          { motion: 'angry02', weight: 1 },
          { motion: 'cry02', weight: 1 }
        ]
      },
      companion: {
        ambient: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'kime01', weight: 1 }
        ]
      },
      focus: {
        interruptTap: [
          { motion: 'serious02', weight: 3 },
          { motion: 'kime02', weight: 2 },
          { motion: 'nf01', weight: 1 }
        ],
        idle: [
          { motion: 'idle01', weight: 3 },
          { motion: 'serious01', weight: 2 },
          { motion: 'kime01', weight: 1 }
        ]
      }
    }
  }
};
