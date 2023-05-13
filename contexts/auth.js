import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + '/api/token/';

// Creates context that can be accessed elsewhere
const AuthContext = createContext();

export function useAuth() {

    const auth = useContext(AuthContext);

    if (!auth) {
        throw new Error('You forgot AuthProvider!');
    }
    return auth;
}

export function AuthProvider(props) {

    // Initializes user to null
    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    });


    async function login(username, password) {

        const options = {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        };

        // API hits backend with username and password to get user details
        const response = await fetch(tokenUrl, options);
        const data = await response.json();
        const decodedAccess = jwt.decode(data.access);
        // console.log("decoded access", decodedAccess)


        let newState = {
            tokens: null,
            user: null,
        };

        // Modified to alert on bad login
        // Creates object with user and token data
        if (decodedAccess === null) {
            alert("Login credentials not valid")
        } else {
            newState = {
                tokens: data,
                user: {
                    username: decodedAccess.username,
                    email: decodedAccess.email,
                    id: decodedAccess.user_id,
                },
            };
        }


        // Sets state for user data
        // Not sure what's up with prevState
        setState(prevState => ({ ...prevState, ...newState }));
    }

    function logout() {
        const newState = {
            tokens: null,
            user: null,
        };
        setState(prevState => ({ ...prevState, ...newState }));
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}