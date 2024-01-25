const Nav = () => {
    return (
        <nav>
            {/* 문자가 아닌 데이터를 받을 땐  {}로 감싸주어야 한다. */}
            <ul>
                <li>
                    <a href="/">d-html</a>
                </li>
                <li>
                    <a href="/">d-css</a>
                </li>
                <li>
                    <a href="/">d-js</a>
                </li>
            </ul>
        </nav>
    )
}

export const NavMobile = (props) => {
    // const arr = [1, 2, 3]
    console.log(props) // {nav: Array(3)}
    console.log(props.nav) // (3) [{…}, {…}, {…}]
    console.log(props.nav[0]) // {title: "html"}
    console.log(props.nav[0].title) // html
    console.log(props.nav[1]) // {title: "css"}
    const list = []
    for (let i = 0; i < props.nav.length; i++) {
        list.push(
            <li>
                <a href={'/sub/' + props.nav[i].title + '.html'}>{props.nav[i].title}</a>
            </li>
        )
    }

    return (
        <nav>
            <ul>{list}</ul>
        </nav>
    )
}

export default Nav
