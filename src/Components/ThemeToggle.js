import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';


const ThemeToggle = (props) => {
    const context = useContext(ThemeContext);
    return (
        <button className="btn btn-info" onClick={context.toggleTheme}>ToggleTheme</button>
    )
}

export default ThemeToggle;