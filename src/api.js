// This file will make our user-side api / server calls.

// Change link to wherever the database is being hosted.
const {REACT_APP_BASE_URL = 'http://localhost:3000'} = process.env;

export const getAllPosts = async() => {
    // Use try/catch for every api call.
    try {
        const response = await fetch(`${REACT_APP_BASE_URL}/posts`, {
            // Don't forget the method.
            method: "GET",
            // In here goes our headers and body, if there is one.
            header: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                // some info in here. Perhaps a blog post?
                    userId: userId,
            })
        });
        const allUsers = response.json();
        return allUsers;
    } catch (error) {
        console.log('There was an error getting all posts.');
        throw error;
    }
}