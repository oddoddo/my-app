import React from 'react'
import TodoHd from './TodoHd'
import TodoEditor from './TodoEditor'
import TodoList from './TodoList'

const mockTodo = [
    {
        id: 1,
        isDone: false,
        text: '고양이 밥주기',
        createdDate: new Date().getTime(), // 현재 시간
    },
    {
        id: 2,
        isDone: true,
        text: '감자 캐기',
        createdDate: new Date().getTime(),
    },
    {
        id: 3,
        isDone: false,
        text: '고양이 놀아주기',
        createdDate: new Date().getTime(),
    },
]

function TodoApp() {
    return (
        <div>
            <TodoHd />
            <TodoEditor />
            <TodoList />
        </div>
    )
}

export default TodoApp
