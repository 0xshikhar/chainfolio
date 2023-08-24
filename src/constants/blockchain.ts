
export const contractAddress = {
    5: "0x9EEcacD627067cCd877587caea7C9cF38B5D2154", //goerli
    421613: "", //arbitrum testnet
    84531: "", //base goerli
    80001: "", //polgon mumbai
    43113: "" // avalanche fuji
}

export const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "linkedinUrl",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "githubUrl",
                "type": "string"
            }
        ],
        "name": "ProfileCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "ProfileDeleted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "projectName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "demoUrl",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "gitUrl",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "contractUrl",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "enum ChainFolio.Category",
                "name": "category",
                "type": "uint8"
            }
        ],
        "name": "ProjectAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "projectIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "newProjectName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "newDescription",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "newDemoUrl",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "newGitUrl",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "newContractUrl",
                "type": "string"
            }
        ],
        "name": "ProjectUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "projectName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "tagline",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "demoUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "gitUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "contractUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "imageUrl",
                "type": "string"
            },
            {
                "internalType": "enum ChainFolio.Category",
                "name": "category",
                "type": "uint8"
            }
        ],
        "name": "addProject",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "linkedinUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "githubUrl",
                "type": "string"
            }
        ],
        "name": "createProfile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "deleteProfile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllProjects",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "projectName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "tagline",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "demoUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "gitUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "contractUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imageUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "enum ChainFolio.Category",
                        "name": "category",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct ChainFolio.Project[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllUsers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getProjects",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "projectName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "tagline",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "demoUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "gitUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "contractUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imageUrl",
                        "type": "string"
                    },
                    {
                        "internalType": "enum ChainFolio.Category",
                        "name": "category",
                        "type": "uint8"
                    }
                ],
                "internalType": "struct ChainFolio.Project[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "profiles",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "linkedinUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "githubUrl",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectIndex",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "newProjectName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newDescription",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newDemoUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newGitUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "newContractUrl",
                "type": "string"
            }
        ],
        "name": "updateProject",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userProjects",
        "outputs": [
            {
                "internalType": "string",
                "name": "projectName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "tagline",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "demoUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "gitUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "contractUrl",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "imageUrl",
                "type": "string"
            },
            {
                "internalType": "enum ChainFolio.Category",
                "name": "category",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "users",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]