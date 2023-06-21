// file must be called App.js for React to latch on.

// Here you import everything; the api folder that you need, other components you have created, etc.
import React, { useEffect, useState } from 'react';

export const App = () => {

    // This is a good spot for useStates...
    const [user, setUser] = useState("");

    // This is a good spot for useEffects, as well...
    useEffect(() => {
        if (token) {
            setUser(token);
        };
    }, [])

    // Every React copmponent requires a return.
    return (
        <div>
            <div> Nav bar component? </div>
            {/* // Routes are for the url. React components are the elements.  */}
            <Routes>
                <Route path="/" element={ <LandingPage /> } />
            </Routes>
            <div> Footer component? </div>
        </div>
    )

}