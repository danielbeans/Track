import { useState } from "react";

import { AuthContext } from "./auth_context";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}
