// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Marketplace{
    address public arbiter;

    constructor(address _arbiter) {
        require(_arbiter != address(0), "Arbiter address is zero");

        // Optional debug log
        emit Deployed(msg.sender, _arbiter);
    }
    event Deployed(address deployer, address arbiter);

    enum TaskStatus { Pending, Accepted, Completed }

    struct User {
        uint32 userId;
        address userAddress;
        string userName;
        string userPhone;
        string userEmail;
    }

    struct Listing {
        uint32 listingId;
        address userAddress;
        string listingName;
        string duration;
        uint96 listedPrice;
        bool isComplete;
    }

    struct TaskRequest {
        uint32 taskId;
        address payable clientAddress;
        address payable freelancerAddress;
        uint32 listingId;
        uint96 requestPrice;
        uint96 finalPrice;
        uint32 paymentId;
        TaskStatus status;
        bool inEscrow;
        string comments;
    }

    struct Payment {
        uint32 paymentId;
        address payer;
        address payee;
        uint96 amount;
        bool released;
        bool markedComplete;
    }

    mapping(address => User) public users;
    mapping(uint32 => Listing) public listings;
    mapping(uint32 => TaskRequest) public taskRequests;
    mapping(uint32 => Payment) public payments;

    uint32 public nextUserId;
    uint32 public nextListingId;
    uint32 public nextTaskRequestId;
    uint32 public nextPaymentId;

    modifier onlyArbiter() {
        require(msg.sender == arbiter, "Not arbiter");
        _;
    }

    // USER
    function setUser(
        address _userAddress,
        string calldata _userName,
        string calldata _userPhone,
        string calldata _userEmail
    ) external {
        if (users[_userAddress].userAddress == address(0)) {
            nextUserId++;
            users[_userAddress] = User(nextUserId, _userAddress, _userName, _userPhone, _userEmail);
        } else {
            User storage user = users[_userAddress];
            user.userName = _userName;
            user.userPhone = _userPhone;
            user.userEmail = _userEmail;
        }
    }

    function loginUser(address _userAddress) external view returns (bool) {
        return users[_userAddress].userAddress != address(0);
    }

    // LISTING
    function setListing(
        address _userAddress,
        string calldata _listingName,
        string calldata _duration,
        bool _isComplete,
        uint96 _listedPrice,
        uint32 _listingId // pass 0 to create new
    ) external {
        if (_listingId == 0) {
            nextListingId++;
            listings[nextListingId] = Listing(
                nextListingId,
                _userAddress,
                _listingName,
                _duration,
                _listedPrice,
                _isComplete
            );
        } else {
            Listing storage listing = listings[_listingId];
            require(listing.userAddress == _userAddress, "Not owner");
            listing.listingName = _listingName;
            listing.duration = _duration;
            listing.isComplete = _isComplete;
            listing.listedPrice = _listedPrice;
        }
    }

    // TASK REQUEST
    function setTaskRequest(
        uint32 _taskId,
        address payable _clientAddress,
        address payable _freelancerAddress,
        uint32 _listingId,
        uint96 _requestPrice,
        string calldata _comments,
        TaskStatus _status
    ) external {
        if (_taskId == 0) {
            nextTaskRequestId++;
            taskRequests[nextTaskRequestId] = TaskRequest(
                nextTaskRequestId,
                _clientAddress,
                _freelancerAddress,
                _listingId,
                _requestPrice,
                0, // finalPrice
                0, // paymentId
                _status,
                false, // inEscrow
                _comments
            );
        } else {
            TaskRequest storage task = taskRequests[_taskId];
            task.requestPrice = _requestPrice;
            task.comments = _comments;
            task.status = _status;
        }
    }

    // ACCEPT TASK + ESCROW
    function acceptTaskRequest(uint32 _taskId) external payable {
        TaskRequest storage task = taskRequests[_taskId];
       
        payable(arbiter).transfer(msg.value);

        task.finalPrice = task.requestPrice;
        task.status = TaskStatus.Accepted;
        task.inEscrow = true;

        nextPaymentId++;
        payments[nextPaymentId] = Payment({
            paymentId: nextPaymentId,
            payer: task.clientAddress,
            payee: task.freelancerAddress,
            amount: uint96(msg.value),
            released: false,
            markedComplete: false
        });

        task.paymentId = nextPaymentId;
    }

    function markTaskComplete(uint32 _taskId) external {
        TaskRequest storage task = taskRequests[_taskId];
        require(msg.sender == task.clientAddress, "Only client");
        require(task.status == TaskStatus.Accepted, "Not accepted");

        task.status = TaskStatus.Completed;
        listings[task.listingId].isComplete = true;

        payments[task.paymentId].markedComplete = true;
    }

    function releaseFundsByArbiter(uint32 _paymentId) external onlyArbiter {
        Payment storage payment = payments[_paymentId];
        require(!payment.released, "Already released");
        require(payment.markedComplete, "Not marked complete");

        payment.released = true;
        payable(payment.payee).transfer(payment.amount);
    }
}
