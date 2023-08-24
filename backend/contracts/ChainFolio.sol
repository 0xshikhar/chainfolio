// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ChainFolio {
    enum Category {
        Blockchain,
        Frontend,
        Backend,
        FullStack,
        Mobile,
        UI,
        UX,
        GameDev,
        DevOps,
        DataScience,
        MachineLearning,
        Cybersecurity
    }

    struct UserProfile {
        string name;
        string linkedinUrl;
        string githubUrl;
    }

    struct Project {
        string projectName;
        string tagline;
        string description;
        string demoUrl;
        string gitUrl;
        string contractUrl;
        string imageUrl;
        Category category; // Use the enum here
    }

    mapping(address => UserProfile) public profiles;
    mapping(address => Project[]) public userProjects;
    address[] public users; // Maintain a list of registered users
    address public owner; // Store the contract owner's address

    event ProfileCreated(
        address indexed user,
        string name,
        string linkedinUrl,
        string githubUrl
    );

    event ProjectAdded(
        address indexed user,
        string projectName,
        string description,
        string demoUrl,
        string gitUrl,
        string contractUrl,
        Category category
    );
    event ProjectUpdated(
        address indexed user,
        uint256 projectIndex,
        string newProjectName,
        string newDescription,
        string newDemoUrl,
        string newGitUrl,
        string newContractUrl
    );
    event ProfileDeleted(address indexed user);

    constructor() {
        // Initialize the contract by adding the deployer as the owner
        owner = msg.sender;
        addUser(msg.sender);
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only the contract owner can perform this action"
        );
        _;
    }

    function createProfile(
        string memory name,
        string memory linkedinUrl,
        string memory githubUrl
    ) external {
        UserProfile storage profile = profiles[msg.sender];
        profile.name = name;
        profile.linkedinUrl = linkedinUrl;
        profile.githubUrl = githubUrl;

        emit ProfileCreated(msg.sender, name, linkedinUrl, githubUrl);
        addUser(msg.sender); // Add the user to the list of users if not already added
    }

    function addProject(
        string memory projectName,
        string memory tagline,
        string memory description,
        string memory demoUrl,
        string memory gitUrl,
        string memory contractUrl,
        string memory imageUrl,
        Category category
    ) external {
        Project memory project = Project(
            projectName,
            tagline,
            description,
            demoUrl,
            gitUrl,
            contractUrl,
            imageUrl,
            category
        );
        userProjects[msg.sender].push(project);

        emit ProjectAdded(
            msg.sender,
            projectName,
            description,
            demoUrl,
            gitUrl,
            contractUrl,
            category
        );
    }

    function updateProject(
        uint256 projectIndex,
        string memory newProjectName,
        string memory newDescription,
        string memory newDemoUrl,
        string memory newGitUrl,
        string memory newContractUrl
    ) external {
        require(
            projectIndex < userProjects[msg.sender].length,
            "Invalid project index"
        );
        Project storage project = userProjects[msg.sender][projectIndex];
        project.projectName = newProjectName;
        project.description = newDescription;
        project.demoUrl = newDemoUrl;
        project.gitUrl = newGitUrl;
        project.contractUrl = newContractUrl;

        emit ProjectUpdated(
            msg.sender,
            projectIndex,
            newProjectName,
            newDescription,
            project.demoUrl,
            project.gitUrl,
            project.contractUrl
        );
    }

    function deleteProfile(address user) external onlyOwner {
        delete profiles[user];
        delete userProjects[user];
        emit ProfileDeleted(user);
    }

    function getProjects(
        address user
    ) external view returns (Project[] memory) {
        return userProjects[user];
    }

    function getAllUsers() external view returns (address[] memory) {
        return users;
    }

    function getAllProjects() external view returns (Project[] memory) {
        uint256 totalUsers = users.length;
        uint256 totalProjects = 0;

        // Calculate the total number of projects across all users
        for (uint256 i = 0; i < totalUsers; i++) {
            address user = users[i];
            totalProjects += userProjects[user].length;
        }

        // Initialize the result array with the total number of projects
        Project[] memory allProjects = new Project[](totalProjects);

        // Iterate through each user's projects and add them to the result array
        uint256 currentIndex = 0;
        for (uint256 i = 0; i < totalUsers; i++) {
            address user = users[i];
            Project[] memory userProj = userProjects[user];
            uint256 userProjectCount = userProj.length;

            for (uint256 j = 0; j < userProjectCount; j++) {
                allProjects[currentIndex] = userProj[j];
                currentIndex++;
            }
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
