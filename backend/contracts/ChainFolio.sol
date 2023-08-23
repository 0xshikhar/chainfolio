// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ChainFolio {
    struct UserProfile {
        string name;
        string email;
        string profileUrl; // profile image url 
        string githubUrl;
    }

    struct Project {
        string projectName;
        string tagline;
        string description;
    }

    mapping(address => UserProfile) public profiles;
    mapping(address => Project[]) public userProjects;
    address[] public users; // Maintain a list of registered users
    address public owner; // Store the contract owner's address

    event ProfileCreated(
        address indexed user,
        string name,
        string email,
        string profileUrl,
        string githubUrl
    );

    event ProjectAdded(address indexed user, string projectName, string description);
    event ProjectUpdated(address indexed user, uint256 projectIndex, string newProjectName, string newDescription);
    event ProfileDeleted(address indexed user);

    constructor() {
        // Initialize the contract by adding the deployer as the owner
        owner = msg.sender;
        addUser(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    function createProfile(
        string memory name,
        string memory email,
        string memory profileUrl,
        string memory githubUrl
    ) external {
        UserProfile storage profile = profiles[msg.sender];
        profile.name = name;
        profile.email = email;
        profile.profileUrl = profileUrl;
        profile.githubUrl = githubUrl;

        emit ProfileCreated(msg.sender, name, email, profileUrl, githubUrl);
        addUser(msg.sender); // Add the user to the list of users if not already added
    }

    function addProject(string memory projectName, string memory tagline, string memory description) external {
        Project memory project = Project(projectName,tagline, description);
        userProjects[msg.sender].push(project);

        emit ProjectAdded(msg.sender, projectName, description);
    }

    function updateProject(uint256 projectIndex, string memory newProjectName, string memory newDescription) external {
        require(projectIndex < userProjects[msg.sender].length, "Invalid project index");
        Project storage project = userProjects[msg.sender][projectIndex];
        project.projectName = newProjectName;
        project.description = newDescription;

        emit ProjectUpdated(msg.sender, projectIndex, newProjectName, newDescription);
    }

    function deleteProfile(address user) external onlyOwner {
        delete profiles[user];
        delete userProjects[user];
        emit ProfileDeleted(user);
    }

    function getProjects(address user) external view returns (Project[] memory) {
        return userProjects[user];
    }

    function getAllUsers() external view returns (address[] memory) {
        return users;
    }

    function getAllProjects() external view returns (Project[] memory) {
        uint256 totalUsers = users.length;
        Project[] memory allProjects = new Project[](totalUsers);

        for (uint256 i = 0; i < totalUsers; i++) {
            address user = users[i];
            Project[] memory userProj = userProjects[user];
            allProjects[i] = userProj[userProj.length - 1];
        }

        return allProjects;
    }

    // Internal function to add a user to the list of users
    function addUser(address user) internal {
        bool isUserAdded = false;
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i] == user) {
                isUserAdded = true;
                break;
            }
        }
        if (!isUserAdded) {
            users.push(user);
        }
    }
}
