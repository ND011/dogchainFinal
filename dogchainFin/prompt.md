User{
uint userId,
address userAddress,
string userName,
string userPhone,
string userEmail 
}

Listing {
uint listingId,
address userAddress,
string listingName,
string duration,
boolean isComplete,
uint listedPrice
}

TaskRequest {
uint taskId,
address clientAddress,
address freelancerAddress,
uint listingId,
string requestPrice,
string finalPrice,
string comments,
string status
}


----
The above structure is for a Platform where Clients can create Listings of their requirements (for websites, or apps) and Freelancers can create TaskRequests for the services. Clients will have the option to choose which request to accept. I want you to create a smart contract with the above structure and the following functions.

- SetUser() -> to Create or Update User (It can take userAddress as parameter when updating user) 
- SetListing() -> to Create or Update User (It can take userAddress as parameter when updating user) 
- SetTaskRequest() -> to Create or Update User (It can take userAddress as parameter when updating user) 
- LoginUser()

in addition to the above basic features, I also require the following features.

- acceptTaskRequest() -> To approve and assign the task 
- completeTaskRequest() -> To mark the taskrequest as completed once successful delivery

___
Also,

- onAcceptTaskRequest() -> Once the request gets accepted, the client provides the amount of finalPrice should go to an escrow arbiter who holds these funds until the project is marked as complete i.e onCompleteTaskRequest. (Please evaluate the code and add an escrow arbiter as you deem fit while ensuring to follow the same structure and style of the project)
