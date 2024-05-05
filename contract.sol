// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrivateTransactionBlockchain {
    struct Transaction {
        address sender;
        address receiver;
        uint256 amount;
    }
    
    mapping(uint256 => Transaction) private transactions;
    uint256 private transactionCount;
    address private owner;
    
    event TransactionAdded(uint256 indexed transactionId, address indexed sender, address indexed receiver, uint256 amount);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    constructor() {
        owner = msg.sender;
        transactionCount = 0;
    }
    
    function addTransaction(address _receiver, uint256 _amount) external {
        require(_receiver != address(0), "Invalid receiver address");
        require(_amount > 0, "Amount must be greater than zero");
        
        Transaction memory newTransaction = Transaction(msg.sender, _receiver, _amount);
        transactions[transactionCount] = newTransaction;
        transactionCount++;
        
        emit TransactionAdded(transactionCount - 1, msg.sender, _receiver, _amount);
    }
    
    function getTransaction(uint256 _transactionId) external view returns (address sender, address receiver, uint256 amount) {
        require(_transactionId < transactionCount, "Invalid transaction ID");
        
        Transaction memory transaction = transactions[_transactionId];
        return (transaction.sender, transaction.receiver, transaction.amount);
    }
    
    function getTotalTransactions() external view returns (uint256) {
        return transactionCount;
    }
    
    function transferOwnership(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "Invalid new owner address");
        owner = _newOwner;
    }
}
