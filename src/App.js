import React from 'react'
import UsersList from './components/api/UsersList'
import TodoApp from './components/todolist/TodoApp'
import TodoApp2 from './components/todolist2/TodoApp'
import Arrangement, { Body, Header } from './Arrangement'
import SignUp from './SignUp'

function App() {
    return (
        <div>
            <SignUp />
            <hr />
            {/* <Arrangement /> */}
            {/* <Header />
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
