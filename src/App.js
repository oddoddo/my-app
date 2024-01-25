import styled from 'styled-components';

// 함수 선언식
function Header() {
    return <Hd>header</Hd>;
}
const Hd = styled.div`
    height: 100px;
    background-color: yellowgreen;
`;

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">html</a>
                </li>
                <li>
                    <a href="/">css</a>
                </li>
                <li>
                    <a href="/">js</a>
                </li>
            </ul>
        </nav>
    );
};

const Article = () => {
    return (
        <article>
            <h2>제목1</h2>
            <p>본문1</p>
        </article>
    );
};

// 함수 표현식
// const Footer = function () {
//     return <Ft>footer</Ft>;
// };

// 화살표 함수
const Footer = () => {
    return <Ft>footer</Ft>;
};

const Ft = styled.footer`
    height: 100px;
    background-color: #eee;
`;

function App() {
    // return 내부에는 하나의 태그만 존재해야 한다.
    // 여러개의 태그를 사용하고 싶다면, <></>
    // 또는 <Fragment></Fragment>를 사용한다.
    // 한 줄 이상일 경우 ()로 감싸준다.
    return (
        <div className="wrap">
            <Header />
            <Nav />
            <Article />
            <Footer />
        </div>
    );
}

export default App;
