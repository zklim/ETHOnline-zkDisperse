const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        ZkDisperse: {
          address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "semaphoreAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "total",
                  type: "uint256",
                },
              ],
              name: "Deposited",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Withdrawed",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "amountDisperse",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "targetAddresses",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "targetAmounts",
                  type: "uint256[]",
                },
              ],
              name: "disperse",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_groupId",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "groupId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "semaphore",
              outputs: [
                {
                  internalType: "contract ISemaphore",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "gId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "feedback",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "merkleTreeRoot",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "nullifierHash",
                  type: "uint256",
                },
                {
                  internalType: "uint256[8]",
                  name: "proof",
                  type: "uint256[8]",
                },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
