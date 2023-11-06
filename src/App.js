import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
    const navArr = [{ title: 'html' }, { title: 'css' }, { title: 'js' }];
    const articleArr = [
        { title: 'html', desc: 'html이란 모다모다' },
        { title: 'css', desc: 'css란 모다모다' },
        { title: 'js', desc: 'js란 모다모다' },
    ];

    const [currentPage, setCurrentPage] = useState('home');

    const handleNavClick = (title) => {
        setCurrentPage(title);
    };

    const getPageContent = () => {
        if (currentPage === 'home') {
            return <Article title="home" desc="home이란 모다모다" />;
        } else {
            const selectedArticle = articleArr.find((item) => {
                return item.title === currentPage;
            });
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

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <Nav nav={props.nav} onNavClick={props.handleNavClick} />
        </header>
    );
}

function Nav(props) {
    return (
        <nav>
            <ul>
                {props.nav.map((item, index) => (
                    <li key={index}>
                        <a href="/" onClick={() => props.onNavClick(item.title)}>
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

// App을 기본으로 내보내기
export default App;
