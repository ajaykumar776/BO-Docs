const permissions = [
    { "name": "Access from any IP", "description": "Allows access to the system from any IP address." },
    { "name": "Add New Agent", "description": "Grants permission to add new agents." },
    { "name": "Add Permission", "description": "Grants permission to add new permissions to the system." },
    { "name": "Add/Remove Agent Credit", "description": "Allows adding or removing credit from an agent's account." },
    { "name": "Add/Remove Agent Wallet", "description": "Allows adding or removing funds from an agent's wallet." },
    { "name": "Add/Remove Points", "description": "Grants permission to add or remove points for agents or players." },
    { "name": "Adjust Payment Method Settings", "description": "Allows adjusting settings for payment methods." },
    { "name": "Approve/Reject Risk", "description": "Grants permission to approve or reject risk assessments." },
    { "name": "Change Player Agent", "description": "Allows changing the agent assigned to a player." },
    { "name": "Change Player Balance", "description": "Allows changing the balance of a player's account." },
    { "name": "Create Admin", "description": "Grants permission to create new admin users." },
    { "name": "Create Bank Code", "description": "Allows creation of new bank codes." },
    { "name": "Create Game Category", "description": "Grants permission to create new game categories." },
    { "name": "Create Game Item", "description": "Allows creation of new game items." },
    { "name": "Create IP Whitelist", "description": "Grants permission to create a whitelist of IP addresses." },
    { "name": "Create Payment Category", "description": "Allows creation of new payment categories." },
    { "name": "Create Payment Method", "description": "Grants permission to create new payment methods." },
    { "name": "Create Player", "description": "Allows creation of new player accounts." },
    { "name": "Create Player Banks", "description": "Grants permission to create new player bank accounts." },
    { "name": "Create Promotion Category", "description": "Allows creation of new promotion categories." },
    { "name": "Create Rebate", "description": "Grants permission to create new rebates." },
    { "name": "Create User Payment Method", "description": "Allows creation of new user payment methods." },
    { "name": "Delete IP Whitelist", "description": "Grants permission to delete IP addresses from the whitelist." },
    { "name": "FA Lock Withdraw", "description": "Allows financial administrators to lock withdrawals." },
    { "name": "Finance Approve/Reject Deposit", "description": "Grants permission to approve or reject deposits." },
    { "name": "Finance Approve/Reject Withdraw", "description": "Grants permission to approve or reject withdrawals." },
    { "name": "Payment Category Status Toggle", "description": "Allows toggling the status of payment categories." },
    { "name": "Reset Player Password", "description": "Grants permission to reset player passwords." },
    { "name": "Update IP Whitelist", "description": "Allows updating the whitelist of IP addresses." },
    { "name": "Update Payment Category", "description": "Grants permission to update payment categories." },
    { "name": "Update User Payment Method", "description": "Allows updating user payment methods." },
    { "name": "User Payment Method Status Toggle", "description": "Grants permission to toggle the status of user payment methods." },
    { "name": "View Admin Login History", "description": "Allows viewing the login history of admin users." },
    { "name": "View Agents", "description": "Grants permission to view the list of agents." },
    { "name": "View Agents Change Histories", "description": "Allows viewing change histories of agents." },
    { "name": "View Dashboard", "description": "Grants permission to view the dashboard." },
    { "name": "View Game Categories", "description": "Allows viewing the list of game categories." },
    { "name": "View Game Lists", "description": "Grants permission to view the list of games." },
    { "name": "View Game Transaction Histories", "description": "Allows viewing transaction histories of games." },
    { "name": "View IP Whitelist", "description": "Grants permission to view the IP whitelist." },
    { "name": "View Payment Methods", "description": "Allows viewing the list of payment methods." },
    { "name": "View Permission", "description": "Grants permission to view the list of permissions." },
    { "name": "View Player Banks", "description": "Allows viewing player bank accounts." },
    { "name": "View Player List", "description": "Grants permission to view the list of players." },
    { "name": "View Player Login History", "description": "Allows viewing the login history of players." },
    { "name": "View Player Phone Number", "description": "Grants permission to view player phone numbers." },
    { "name": "View Promotion Categories", "description": "Allows viewing the list of promotion categories." },
    { "name": "View Promotions", "description": "Grants permission to view the list of promotions." },
    { "name": "View Rebate List", "description": "Allows viewing the list of rebates." },
    { "name": "View Transactions Requests", "description": "Grants permission to view transaction requests." },
    { "name": "View Users", "description": "Allows viewing the list of users." }
];

const permissionsList = document.getElementById('permissions-list');
const searchInput = document.getElementById('search');

const renderPermissions = (filter = '') => {
    permissionsList.innerHTML = '';
    const filteredPermissions = permissions.filter(permission => 
        permission.name.toLowerCase().includes(filter.toLowerCase()) || 
        permission.description.toLowerCase().includes(filter.toLowerCase())
    );

    filteredPermissions.forEach(permission => {
        const permissionContainer = document.createElement('div');
        permissionContainer.classList.add('permission-container');

        const label = document.createElement('label');
        label.htmlFor = permission.name;
        label.innerHTML = `<strong>${permission.name}</strong>: ${permission.description}`;

        permissionContainer.appendChild(label);

        permissionsList.appendChild(permissionContainer);
    });
};

searchInput.addEventListener('input', (event) => {
    renderPermissions(event.target.value);
});

// Initial render
renderPermissions();
