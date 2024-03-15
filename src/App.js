import React, { useEffect, useState } from 'react'
import UsersList from './components/api/UsersList'
import TodoApp from './components/todolist/TodoApp'
import TodoApp2 from './components/todolist2/TodoApp'
import Arrangement, { Body, Header } from './Arrangement'
import SignUp from './SignUp'
import CounterApp from './component/counter/ConterApp'

function App() {
    const [user, setUser] = useState({
        name: '',
        gender: '',
        age: '',
        intro: '',
    })

    const [count, setCount] = useState(0)

    // 마운팅 시
    useEffect(() => {
        console.log('마운팅 & 업데이트')
    })

    return (
        <div>
            <h2>useEffect</h2>
            <p>{count}</p>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                1씩 증가
            </button>

            <CounterApp />
            <br />
            <hr />
            <br />
            <SignUp user={user} setUser={setUser} />
            <br />
            <hr />
            <br />
            {/* <Arrangement />
            <Header />
            <Body /> */}
            {/* <TodoApp /> */}
            <br />
            <hr />
            <br />
            {/* <TodoApp2 /> */}
            <br />
            <hr />
            <br />
            {/* <UsersList /> */}
        </div>
    )
}

export default App
