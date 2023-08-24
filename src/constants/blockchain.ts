export const sepolia = {
    contract: "0x26056Cb7EF473D86993c5AdDf1dECfFBb9ae7643",
    chainId: 11155111,
}

export const contractAddress = {
    5: "0x80eD3C1c6286e248E8776147E66D42241019155a", //goerli
    421613: "", //arbitrum testnet
    84531: "", //base goerli
    80001: "", //polgon mumbai
    43113: "" // avalanche fuji

}

export const BaseGoerli = {
    contract: "0x80eD3C1c6286e248E8776147E66D42241019155a"
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
                "name": "email",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "profileUrl",
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
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "profileUrl",
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
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "profileUrl",
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
