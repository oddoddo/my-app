import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
    const navArr = [{ title: 'html' }, { title: 'css' }, { title: 'js' }];
<<<<<<< HEAD
    const articleArr = [
        { title: 'html', desc: 'html이란 모다모다' },
        { title: 'css', desc: 'css란 모다모다' },
        { title: 'js', desc: 'js란 모다모다' },
    ];

    const [currentPage, setCurrentPage] = useState('home');
=======

    const [currentPage, setCurrentPage] = useState('home'); // 초기 페이지는 'home'
>>>>>>> 03fb61807d71267370a1818b07400eb9ca5ba012

    const handleNavClick = (title) => {
        setCurrentPage(title);
    };

    const getPageContent = () => {
        if (currentPage === 'home') {
<<<<<<< HEAD
            return <Article title="home" desc="home이란 모다모다" />;
        } else {
            const selectedArticle = articleArr.find((item) => {
                return item.title === currentPage;
            });
=======
            return <div>Hello</div>;
        } else {
            const selectedArticle = articleArr.find((item) => item.title === currentPage);
>>>>>>> 03fb61807d71267370a1818b07400eb9ca5ba012
            return <Article title={selectedArticle.title} desc={selectedArticle.desc} />;
        }
    };

    return (
        <div className="root">
            <HeaderStyled title="리액트(React)" nav={navArr} onNavClick={handleNavClick} />
            {getPageContent()}
        </div>
    );
}

<<<<<<< HEAD
function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <Nav nav={props.nav} onNavClick={props.handleNavClick} />
=======
function Header({ title, nav, onNavClick }) {
    return (
        <header>
            <h1>{title}</h1>
            <Nav nav={nav} onNavClick={onNavClick} />
>>>>>>> 03fb61807d71267370a1818b07400eb9ca5ba012
        </header>
    );
}

<<<<<<< HEAD
function Nav(props) {
=======
function Nav({ nav, onNavClick }) {
>>>>>>> 03fb61807d71267370a1818b07400eb9ca5ba012
    return (
        <nav>
            <ul>
                {props.nav.map((item, index) => (
                    <li key={index}>
<<<<<<< HEAD
                        <a href="/" onClick={() => props.onNavClick(item.title)}>
=======
                        <a href="#" onClick={() => onNavClick(item.title)}>
>>>>>>> 03fb61807d71267370a1818b07400eb9ca5ba012
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </article>
    );
}

const HeaderStyled = styled(Header)`
    display: flex;
    border-bottom: 1px solid #eee;
`;

const articleArr = [
    { title: 'html', desc: 'html은 모다모다...' },
    { title: 'css', desc: 'css는 모다모다...' },
    { title: 'js', desc: 'js는 모다모다...' },
];

export default App;
