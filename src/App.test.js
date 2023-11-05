import React, { useState } from 'react';
import './App.css';

function App() {
    const [content, setContent] = useState('Hello');

    const handleMenuItemClick = (menuItem) => {
        // 각 메뉴 항목에 따른 내용을 설정
        if (menuItem === 'home') {
            setContent('Hello');
        } else if (menuItem === 'about') {
            setContent('About us content goes here');
        } else if (menuItem === 'contact') {
            setContent('Contact us content goes here');
        }
    };

    return (
        <div className="App">
            <h1>{content}</h1>
            <div>
                <ul>
                    <li onClick={() => handleMenuItemClick('home')}>Home</li>
                    <li onClick={() => handleMenuItemClick('about')}>About</li>
                    <li onClick={() => handleMenuItemClick('contact')}>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
