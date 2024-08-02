// Header.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/themSlice';
import { FaMoon, FaSun, FaBell, FaSignInAlt } from 'react-icons/fa';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: any) => state.theme.darkMode);

    const handleToggleMode = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <header className="header">
            <div className="logo"><img src="https://cdn.prod.website-files.com/642535c7875ea6e60927dd49/65cb115f23533388f1d0b7e2_DevDynamics_Logo.svg"/></div>
            <button className="mode-toggle" onClick={handleToggleMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
                <FaBell />
                <FaSignInAlt/>

            </button>
            
        </header>
    );
};

export default Header;
