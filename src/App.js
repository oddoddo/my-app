import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
    const navArr = [{ title: 'html' }, { title: 'css' }, { title: 'js' }];

    const [currentPage, setCurrentPage] = useState('home'); // 초기 페이지는 'home'

    const handleNavClick = (title) => {
        setCurrentPage(title);
    };

    const getPageContent = () => {
        if (currentPage === 'home') {
            return <div>Hello</div>;
        } else {
            const selectedArticle = articleArr.find((item) => item.title === currentPage);
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

function Header({ title, nav, onNavClick }) {
    return (
        <header>
            <h1>{title}</h1>
            <Nav nav={nav} onNavClick={onNavClick} />
        </header>
    );
}

function Nav({ nav, onNavClick }) {
    return (
        <nav>
            <ul>
                {nav.map((item, index) => (
                    <li key={index}>
                        <a href="#" onClick={() => onNavClick(item.title)}>
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
