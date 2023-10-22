//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./semaphore/interfaces/ISemaphore.sol";

contract ZkDisperse {
    ISemaphore public semaphore;

    uint256 public groupId;

    constructor(address semaphoreAddress) {
        semaphore = ISemaphore(semaphoreAddress);
    }

    /* Disperse funds to a list of addresses
    **
    */
    function disperse(address[] calldata targetAddresses, uint256[] calldata targetAmounts) returns (uint256 _groupId) {
        require(targetAddresses.length == targetAmounts.length, "Not equal length");

        semaphore.createGroup(groupId, 20, address(this));
        for (uint256 i = 0; i < targetAddresses.length; ) {
            semaphore.addMember(groupId, uint256(keccak256(targetAddresses[i])));
            unchecked {
            i++;
            }
        }

        return groupId++;
    }

    function withdraw(
        uint256 groupId,
        uint256 feedback,
        uint256 merkleTreeRoot,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) external {
        semaphore.verifyProof(groupId, merkleTreeRoot, feedback, nullifierHash, groupId, proof);
        // payable(msg.sender).call{value: amount}();
    }
}
