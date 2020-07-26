import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { AuthContext } from '../Contexts/AuthContext';


const NavBar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleState } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;

    const authText = isAuthenticated ? 'Logged In' : 'Logged Out';
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>React Hooks</h1>
            <div onClick={toggleState}>{authText}</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar;