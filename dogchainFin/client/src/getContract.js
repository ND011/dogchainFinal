import web3 from "./web3";

var abi = 
  [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_arbiter",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "deployer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "arbiter",
          "type": "address"
        }
      ],
      "name": "Deployed",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "arbiter",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "name": "listings",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "listingId",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "listingName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "duration",
          "type": "string"
        },
        {
          "internalType": "uint96",
          "name": "listedPrice",
          "type": "uint96"
        },
        {
          "internalType": "bool",
          "name": "isComplete",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "nextListingId",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "nextPaymentId",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "nextTaskRequestId",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "nextUserId",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "name": "payments",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "paymentId",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "payee",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "amount",
          "type": "uint96"
        },
        {
          "internalType": "bool",
          "name": "released",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "markedComplete",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "name": "taskRequests",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "taskId",
          "type": "uint32"
        },
        {
          "internalType": "address payable",
          "name": "clientAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "freelancerAddress",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "listingId",
          "type": "uint32"
        },
        {
          "internalType": "uint96",
          "name": "requestPrice",
          "type": "uint96"
        },
        {
          "internalType": "uint96",
          "name": "finalPrice",
          "type": "uint96"
        },
        {
          "internalType": "uint32",
          "name": "paymentId",
          "type": "uint32"
        },
        {
          "internalType": "enum Marketplace.TaskStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "inEscrow",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "comments",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "userId",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "userName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "userPhone",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "userEmail",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_userName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_userPhone",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_userEmail",
          "type": "string"
        }
      ],
      "name": "setUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "loginUser",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_listingName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_duration",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "_isComplete",
          "type": "bool"
        },
        {
          "internalType": "uint96",
          "name": "_listedPrice",
          "type": "uint96"
        },
        {
          "internalType": "uint32",
          "name": "_listingId",
          "type": "uint32"
        }
      ],
      "name": "setListing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_taskId",
          "type": "uint32"
        },
        {
          "internalType": "address payable",
          "name": "_clientAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_freelancerAddress",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_listingId",
          "type": "uint32"
        },
        {
          "internalType": "uint96",
          "name": "_requestPrice",
          "type": "uint96"
        },
        {
          "internalType": "string",
          "name": "_comments",
          "type": "string"
        },
        {
          "internalType": "enum Marketplace.TaskStatus",
          "name": "_status",
          "type": "uint8"
        }
      ],
      "name": "setTaskRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_taskId",
          "type": "uint32"
        }
      ],
      "name": "acceptTaskRequest",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_taskId",
          "type": "uint32"
        }
      ],
      "name": "markTaskComplete",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_paymentId",
          "type": "uint32"
        }
      ],
      "name": "releaseFundsByArbiter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]


var address = "0x5F9cE64478E3aDB730E57C71B4dEaA89F8050102";

const contract = new web3.eth.Contract(abi, address);

export default contract;
