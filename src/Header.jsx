import styled from 'styled-components'
import Nav from './Nav'

// 함수 선언식
function Header() {
    return (
        <Hd>
            header
            <Nav />
        </Hd>
    )
}
const Hd = styled.div`
    height: 100px;
    background-color: yellowgreen;
`

export default Header
