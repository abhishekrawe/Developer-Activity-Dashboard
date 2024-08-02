import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/themSlice';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: any) => state.theme.darkMode);

    const handleToggleMode = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <header className={`header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="logo">
               <img className='logo-icon' src='./logo.jpeg'/>
               <p> DevTracker </p>
            </div>
            <button className="mode-toggle" onClick={handleToggleMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </header>
    );
};

export default Header;
