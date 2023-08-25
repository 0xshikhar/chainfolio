
export const contractAddress = {
    5: "0x9760Ab57BB83E3c4DB301Ad8a68F95aD8954947e", //goerli
    421613: "", //arbitrum testnet
    84531: "", //base goerli
    80001: "0xBC9cd74189aCb7A54BDE5f8B949cf69E8ED64369", //polgon mumbai
    43113: "0x2cDc47369bb86C05198Ea2CFF8c548b73b919Bb1" // avalanche fuji
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
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
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
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
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
        "name": "ProjectUpdatedById",
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
                        "internalType": "uint256",
                        "name": "projectId",
                        "type": "uint256"
                    },
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
                    },
                    {
                        "internalType": "address",
                        "name": "projectOnwer",
                        "type": "address"
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
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            }
        ],
        "name": "getProjectById",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "projectId",
                        "type": "uint256"
                    },
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
                    },
                    {
                        "internalType": "address",
                        "name": "projectOnwer",
                        "type": "address"
                    }
                ],
                "internalType": "struct ChainFolio.Project",
                "name": "",
                "type": "tuple"
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
                        "internalType": "uint256",
                        "name": "projectId",
                        "type": "uint256"
                    },
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
                    },
                    {
                        "internalType": "address",
                        "name": "projectOnwer",
                        "type": "address"
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
        "inputs": [],
        "name": "projectCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
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
        "name": "projectsById",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
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
            },
            {
                "internalType": "address",
                "name": "projectOnwer",
                "type": "address"
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
                "internalType": "uint256",
                "name": "projectId",
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
        "name": "updateProjectById",
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
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
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
            },
            {
                "internalType": "address",
                "name": "projectOnwer",
                "type": "address"
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