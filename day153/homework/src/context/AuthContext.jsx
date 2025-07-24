import { useState } from "react";
import AuthContext from "./Auth";
import { getLocal, setLocal } from "../utils/LocalStorage";
import { useNavigate } from "react-router";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();
    
    const register = formData => {
        const users = getLocal("users") || [];
        const exists = users.find(obj => obj.email === formData.email);

        if (exists) {
            alert("Email already registered");
            return;
        }

        setLocal("users", [...users, formData]);
        alert("Registration successful!");
        navigate("../pages/Profile.jsx");
    }

    const login = formData => {
        const users = getLocal("users") || [];

        const exists = users.find(obj => obj.email === formData.email && obj.password === formData.password);

        if (!exists) {
            alert("Credentials are incorrect");
            return;
        }

        setUser(exists);
        alert("Login successful!");
        navigate("../pages/Profile.jsx")
    }

    const logout = () => {
        setUser(null)
        navigate("../pages/Home.jsx")
    }

    return (
        <AuthContext.Provider value={{ register, login, user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};