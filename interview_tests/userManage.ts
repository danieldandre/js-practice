interface User {
    id: string;
    name: string;
    email: string;
    age: number;
}

// 1. GET - Fetch all users
async function getAllUsers(): Promise<User[]> {
    try {
        const response = await fetch(`https://api.users.com/users`);

        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

        const data: { users: User[] } = await response.json();
        return data.users;

    } catch (error) {
        console.log('Failed to retrieve data', error);
        return [];
    }
}

// 2. GET - Fetch one user by ID
async function getUserById(userId: string): Promise<User | null> {
    try {
        const response = await fetch(`https://api.users.com/users/${userId}`);

        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

        const data: User = await response.json();
        return data;

    } catch (error) {
        console.log('Failed to find user', error);
        return null;
    }
}

// 3. POST - Create a new user
async function createUser(name: string, email: string, age: number): Promise<User | null> {
    try {
        const response = await fetch("https://api.users.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, age })
        });
        if (!response.ok) throw new Error(`POST /users failed: ${response.status} ${response.statusText}`)

        const created: User = await response.json();
        return created;
    } catch (error) {
        console.log('Failed to create user', error);
        return null;
    }
}

// 4. PATCH - Update user's email
async function updateUserEmail(userId: string, newEmail: string): Promise<User | null> {
    try {
        const response = await fetch(`https://api.users.com/users/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: newEmail })
        });
        if (!response.ok) throw new Error(`PATCH /users/${userId} failed: ${response.status} ${response.statusText}`)

        const updateUser = await response.json();
        return updateUser;
    } catch (error) {
        console.log('Failed to update user email', error);
        return null;
    }
}

// 5. DELETE - Delete a user
async function deleteUser(userId: string): Promise<boolean> {
    try {
        const response =  await fetch(`https://api.users.com/users/${userId}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error(`DELETE /users/${userId} failed: ${response.status} ${response.statusText}`)
        return true;
    } catch (error) {
        console.log("Failed to delete user", error);
        return false;
    }
}