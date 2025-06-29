import { useEffect, useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState("light");

    const changeTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }

    useEffect(() => {
        document.div.classList.remove("light", "dark");
        document.div.classList.add(theme);
    }, [theme]);

    return { theme, changeTheme };
}