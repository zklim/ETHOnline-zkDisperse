//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@semaphore-protocol/contracts/interfaces/ISemaphore.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract ZkDisperse {
    ISemaphore public semaphore;
    mapping(uint256 => uint256) public amountDisperse;

    uint256 public groupId;

    event Withdrawed(address indexed receiver, uint256 amount);
    event Deposited(address indexed sender, uint256 total);

    constructor(address semaphoreAddress) {
        semaphore = ISemaphore(semaphoreAddress);
    }

    // Disperse funds to a list of addresses
    function disperse(address[] calldata targetAddresses, uint256[] calldata targetAmounts) external payable returns (uint256 _groupId) {
        require(targetAddresses.length == targetAmounts.length, "Not equal length");
        
        uint256 total;
        for (uint256 i = 0; i < targetAmounts.length; ) {
            total += targetAmounts[i];
        }
        require(total == msg.value, "Total amount not equal");

        semaphore.createGroup(groupId, 20, address(this));
        for (uint256 i = 0; i < targetAddresses.length; ) {
            semaphore.addMember(groupId, uint256(keccak256(abi.encodePacked(targetAddresses[i]))));
            unchecked {
                i++;
            }
        }

        amountDisperse[groupId] = msg.value;
        emit Deposited(msg.sender, msg.value);

        return groupId++;
    }

    function withdraw(
        bytes32 hash,
        bytes memory signature,
        uint256 amount,
        uint256 gId,
        uint256 feedback,
        uint256 merkleTreeRoot,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) external {
        require(amountDisperse[groupId] > 0, "Not enough to disperse");

        address recovery = ECDSA.recover(hash, signature);
        require(recovery == msg.sender, "Not owner");

        semaphore.verifyProof(groupId, merkleTreeRoot, feedback, nullifierHash, groupId, proof);

        amountDisperse[gId] -= amount;
        payable(msg.sender).call{value: amount}("");

        emit Withdrawed(msg.sender, amount);
    }

    receive() external payable {}
}
