import {Abi, Bytes} from "@subsquid/ink-abi"
import {Constructor, Event, Message} from "./d9-usdt";


export const metadata = {
    "source": {
        "hash": "0x6ad9cda55fde88186df5dc7f260ced5a77975b6f1c7c050abb54b53d88d7ac27",
        "language": "ink! 4.3.0",
        "compiler": "rustc 1.72.1",
        "build_info": {
            "build_mode": "Release",
            "cargo_contract_version": "3.2.0",
            "rust_toolchain": "stable-x86_64-apple-darwin",
            "wasm_opt_settings": {
                "keep_debug_symbols": false,
                "optimization_passes": "Z"
            }
        }
    },
    "contract": {
        "name": "main-pool",
        "version": "2.0.0",
        "authors": [
            "D9Dev"
        ]
    },
    "spec": {
        "constructors": [
            {
                "args": [
                    {
                        "label": "admin",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "burn_contracts",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "node_reward_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "mining_pool",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [
                    "Constructor that initializes the `bool` value to the given `init_value`."
                ],
                "label": "new",
                "payable": true,
                "returnType": {
                    "displayName": [
                        "ink_primitives",
                        "ConstructorResult"
                    ],
                    "type": 6
                },
                "selector": "0x9bae9d5e"
            }
        ],
        "docs": [],
        "environment": {
            "accountId": {
                "displayName": [
                    "AccountId"
                ],
                "type": 0
            },
            "balance": {
                "displayName": [
                    "Balance"
                ],
                "type": 4
            },
            "blockNumber": {
                "displayName": [
                    "BlockNumber"
                ],
                "type": 24
            },
            "chainExtension": {
                "displayName": [
                    "ChainExtension"
                ],
                "type": 25
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 23
            },
            "maxEventTopics": 4,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 5
            }
        },
        "events": [
            {
                "args": [
                    {
                        "docs": [
                            " initiator of of the burn"
                        ],
                        "indexed": true,
                        "label": "from",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [
                            "amount of tokens burned"
                        ],
                        "indexed": true,
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "docs": [],
                "label": "WithdrawalExecuted"
            },
            {
                "args": [
                    {
                        "docs": [
                            " initiator of of the burn"
                        ],
                        "indexed": true,
                        "label": "from",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [
                            "amount of tokens burned"
                        ],
                        "indexed": true,
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "docs": [],
                "label": "BurnExecuted"
            }
        ],
        "lang_error": {
            "displayName": [
                "ink",
                "LangError"
            ],
            "type": 8
        },
        "messages": [
            {
                "args": [
                    {
                        "label": "mining_pool",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "set_mining_pool",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 6
                },
                "selector": "0xbad17c27"
            },
            {
                "args": [
                    {
                        "label": "burn_beneficiary",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "burn_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "burn",
                "mutates": true,
                "payable": true,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0xb1efc17b"
            },
            {
                "args": [
                    {
                        "label": "burn_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "withdraw",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0x410fcc9d"
            },
            {
                "args": [
                    {
                        "label": "account_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_ancestors",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 15
                },
                "selector": "0xe2ee2364"
            },
            {
                "args": [
                    {
                        "label": "burn_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "add_burn_contract",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 17
                },
                "selector": "0x50cb7e6b"
            },
            {
                "args": [
                    {
                        "label": "burn_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "remove_burn_contract",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 6
                },
                "selector": "0x2610355d"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_admin",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 19
                },
                "selector": "0x57b8a8a7"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "change_admin",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 17
                },
                "selector": "0x61ae97d7"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_total_burned",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 20
                },
                "selector": "0x717d96e0"
            },
            {
                "args": [
                    {
                        "label": "account_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_portfolio",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 21
                },
                "selector": "0xf3246265"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_balance",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 20
                },
                "selector": "0xea817e65"
            },
            {
                "args": [
                    {
                        "label": "new_amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "set_burn_amount",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 6
                },
                "selector": "0xb1609ad5"
            },
            {
                "args": [
                    {
                        "label": "code_hash",
                        "type": {
                            "displayName": [],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Modifies the code which is used to execute calls to this contract address (`AccountId`).",
                    "",
                    " We use this to upgrade the contract logic. We don't do any authorization here, any caller",
                    " can execute this method. In a production contract you would do some authorization here."
                ],
                "label": "set_code",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 6
                },
                "selector": "0x694fb50f"
            },
            {
                "args": [
                    {
                        "label": "node_reward_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "set_node_reward_contract",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 6
                },
                "selector": "0x0ab14de7"
            }
        ]
    },
    "storage": {
        "root": {
            "layout": {
                "struct": {
                    "fields": [
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "admin"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 3
                                }
                            },
                            "name": "burn_contracts"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "struct": {
                                            "fields": [
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x5a060fe3",
                                                            "ty": 4
                                                        }
                                                    },
                                                    "name": "amount_burned"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x5a060fe3",
                                                            "ty": 4
                                                        }
                                                    },
                                                    "name": "balance_due"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x5a060fe3",
                                                            "ty": 4
                                                        }
                                                    },
                                                    "name": "balance_paid"
                                                },
                                                {
                                                    "layout": {
                                                        "enum": {
                                                            "dispatchKey": "0x5a060fe3",
                                                            "name": "Option",
                                                            "variants": {
                                                                "0": {
                                                                    "fields": [],
                                                                    "name": "None"
                                                                },
                                                                "1": {
                                                                    "fields": [
                                                                        {
                                                                            "layout": {
                                                                                "struct": {
                                                                                    "fields": [
                                                                                        {
                                                                                            "layout": {
                                                                                                "leaf": {
                                                                                                    "key": "0x5a060fe3",
                                                                                                    "ty": 5
                                                                                                }
                                                                                            },
                                                                                            "name": "time"
                                                                                        },
                                                                                        {
                                                                                            "layout": {
                                                                                                "leaf": {
                                                                                                    "key": "0x5a060fe3",
                                                                                                    "ty": 0
                                                                                                }
                                                                                            },
                                                                                            "name": "contract"
                                                                                        }
                                                                                    ],
                                                                                    "name": "ActionRecord"
                                                                                }
                                                                            },
                                                                            "name": "0"
                                                                        }
                                                                    ],
                                                                    "name": "Some"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "name": "last_withdrawal"
                                                },
                                                {
                                                    "layout": {
                                                        "struct": {
                                                            "fields": [
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x5a060fe3",
                                                                            "ty": 5
                                                                        }
                                                                    },
                                                                    "name": "time"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x5a060fe3",
                                                                            "ty": 0
                                                                        }
                                                                    },
                                                                    "name": "contract"
                                                                }
                                                            ],
                                                            "name": "ActionRecord"
                                                        }
                                                    },
                                                    "name": "last_burn"
                                                }
                                            ],
                                            "name": "BurnPortfolio"
                                        }
                                    },
                                    "root_key": "0x5a060fe3"
                                }
                            },
                            "name": "portfolios"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 4
                                }
                            },
                            "name": "total_amount_burned"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "node_reward_contract"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "mining_pool"
                        }
                    ],
                    "name": "D9MainPool"
                }
            },
            "root_key": "0x00000000"
        }
    },
    "types": [
        {
            "id": 0,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 1,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "AccountId"
                ]
            }
        },
        {
            "id": 1,
            "type": {
                "def": {
                    "array": {
                        "len": 32,
                        "type": 2
                    }
                }
            }
        },
        {
            "id": 2,
            "type": {
                "def": {
                    "primitive": "u8"
                }
            }
        },
        {
            "id": 3,
            "type": {
                "def": {
                    "sequence": {
                        "type": 0
                    }
                }
            }
        },
        {
            "id": 4,
            "type": {
                "def": {
                    "primitive": "u128"
                }
            }
        },
        {
            "id": 5,
            "type": {
                "def": {
                    "primitive": "u64"
                }
            }
        },
        {
            "id": 6,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 7
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 8
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 7
                    },
                    {
                        "name": "E",
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 7,
            "type": {
                "def": {
                    "tuple": []
                }
            }
        },
        {
            "id": 8,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 1,
                                "name": "CouldNotReadInput"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "LangError"
                ]
            }
        },
        {
            "id": 9,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 10
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 8
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 10
                    },
                    {
                        "name": "E",
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 10,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 11
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 14
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 11
                    },
                    {
                        "name": "E",
                        "type": 14
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 11,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "amount_burned",
                                "type": 4,
                                "typeName": "Balance"
                            },
                            {
                                "name": "balance_due",
                                "type": 4,
                                "typeName": "Balance"
                            },
                            {
                                "name": "balance_paid",
                                "type": 4,
                                "typeName": "Balance"
                            },
                            {
                                "name": "last_withdrawal",
                                "type": 12,
                                "typeName": "Option<ActionRecord>"
                            },
                            {
                                "name": "last_burn",
                                "type": 13,
                                "typeName": "ActionRecord"
                            }
                        ]
                    }
                },
                "path": [
                    "d9_burn_common",
                    "BurnPortfolio"
                ]
            }
        },
        {
            "id": 12,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 13
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 13
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 13,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "time",
                                "type": 5,
                                "typeName": "Timestamp"
                            },
                            {
                                "name": "contract",
                                "type": 0,
                                "typeName": "AccountId"
                            }
                        ]
                    }
                },
                "path": [
                    "d9_burn_common",
                    "ActionRecord"
                ]
            }
        },
        {
            "id": 14,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "BurnAmountInsufficient"
                            },
                            {
                                "index": 1,
                                "name": "NoAccountFound"
                            },
                            {
                                "index": 2,
                                "name": "EarlyWithdrawalAttempt"
                            },
                            {
                                "index": 3,
                                "name": "ContractBalanceTooLow"
                            },
                            {
                                "index": 4,
                                "name": "RestrictedFunction"
                            },
                            {
                                "index": 5,
                                "name": "UsePortfolioExecuteFunction"
                            },
                            {
                                "index": 6,
                                "name": "WithdrawalExceedsBalance"
                            },
                            {
                                "index": 7,
                                "name": "TransferFailed"
                            },
                            {
                                "index": 8,
                                "name": "InvalidCaller"
                            },
                            {
                                "index": 9,
                                "name": "InvalidBurnContract"
                            },
                            {
                                "index": 10,
                                "name": "BurnContractAlreadyAdded"
                            },
                            {
                                "index": 11,
                                "name": "BurnAmountNotMultipleOf100"
                            },
                            {
                                "index": 12,
                                "name": "CrossContractCallFailed"
                            },
                            {
                                "index": 13,
                                "name": "WithdrawalNotAllowed"
                            },
                            {
                                "index": 14,
                                "name": "WithdrawalAmountZero"
                            },
                            {
                                "index": 15,
                                "name": "RuntimeErrorGettingAncestors"
                            },
                            {
                                "index": 16,
                                "name": "NoAncestorsFound"
                            },
                            {
                                "index": 17,
                                "name": "MustBeMultipleOf100"
                            },
                            {
                                "index": 18,
                                "name": "RemoteCallToBurnContractFailed"
                            },
                            {
                                "index": 19,
                                "name": "RemoteCallToMiningPoolFailed"
                            },
                            {
                                "index": 20,
                                "name": "SomeEnvironmentError"
                            },
                            {
                                "index": 21,
                                "name": "CalledContractTrapped"
                            },
                            {
                                "index": 22,
                                "name": "CalledContractReverted"
                            },
                            {
                                "index": 23,
                                "name": "NotCallable"
                            },
                            {
                                "index": 24,
                                "name": "SomeDecodeError"
                            },
                            {
                                "index": 25,
                                "name": "SomeOffChainError"
                            },
                            {
                                "index": 26,
                                "name": "CalleeTrapped"
                            },
                            {
                                "index": 27,
                                "name": "CalleeReverted"
                            },
                            {
                                "index": 28,
                                "name": "KeyNotFound"
                            },
                            {
                                "index": 29,
                                "name": "_BelowSubsistenceThreshold"
                            },
                            {
                                "index": 30,
                                "name": "EnvironmentalTransferFailed"
                            },
                            {
                                "index": 31,
                                "name": "_EndowmentTooLow"
                            },
                            {
                                "index": 32,
                                "name": "CodeNotFound"
                            },
                            {
                                "index": 33,
                                "name": "Unknown"
                            },
                            {
                                "index": 34,
                                "name": "LoggingDisabled"
                            },
                            {
                                "index": 35,
                                "name": "CallRuntimeFailed"
                            },
                            {
                                "index": 36,
                                "name": "EcdsaRecoveryFailed"
                            },
                            {
                                "index": 37,
                                "name": "WithdrawalAmountExceedsBalance"
                            }
                        ]
                    }
                },
                "path": [
                    "d9_burn_common",
                    "Error"
                ]
            }
        },
        {
            "id": 15,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 16
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 8
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 16
                    },
                    {
                        "name": "E",
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 16,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 3
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 3
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 17,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 18
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 8
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 18
                    },
                    {
                        "name": "E",
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 18,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 7
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 14
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 7
                    },
                    {
                        "name": "E",
                        "type": 14
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 19,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 0
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 8
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 0
                    },
                    {
                        "name": "E",
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 20,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 4
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 8
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 4
                    },
                    {
                        "name": "E",
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 21,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 22
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 8
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 22
                    },
                    {
                        "name": "E",
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 22,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 11
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 11
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 23,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 1,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "Hash"
                ]
            }
        },
        {
            "id": 24,
            "type": {
                "def": {
                    "primitive": "u32"
                }
            }
        },
        {
            "id": 25,
            "type": {
                "def": {
                    "variant": {}
                },
                "path": [
                    "d9_chain_extension",
                    "D9ChainExtension"
                ]
            }
        }
    ],
    "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(bytes: Bytes): Event {
    return _abi.decodeEvent(bytes)
}

export function decodeMessage(bytes: Bytes): Message {
    return _abi.decodeMessage(bytes)
}

export function decodeConstructor(bytes: Bytes): Constructor {
    return _abi.decodeConstructor(bytes)
}