// auth.js
const users = {
    "john.doe@example.com": "password123",
    "jane.smith@example.com": "securepass456",
    "admin@upgrad.com": "adminpass789"
};

export const authenticateUser = (email, password) => {
    if (users[email] && users[email] === password) {
        return true;
    }
    return false;
};
