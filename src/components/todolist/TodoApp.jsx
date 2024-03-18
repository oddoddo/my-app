import React, { useReducer, useRef, useState } from 'react'
import TodoHd from './TodoHd'
import TodoEditor from './TodoEditor'
import TodoList from './TodoList'

const mockTodo = [
    {
        id: 1,
        isDone: false,
        task: '고양이 밥 주기',
        createDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        task: '고양이 감자 캐기',
        createDate: new Date().getTime(),
    },
    {
        id: 3,
        isDone: false,
        task: '고양이 꾹꾹이 받기',
        createDate: new Date().getTime(),
    },
]

function reducer(state, action) {}

function TodoApp() {
    // useState로 todos 상태를 관리합니다.
    // const [todos, setTodos] = useState(mockTodo)

    // useReducer로 todos 상태를 관리합니다.
    // const [state, dispatch] = useReducer(reducer, initialState)
    const [todos, dispatch] = useReducer(reducer, mockTodo)

    const idRef = useRef(4)

    // 할 일을 추가하는 함수
    // const addTodo = (task) => {
    //     const newTodo = {
    //         id: idRef.current++, // id를 증가시키면서 생성합니다.
    //         isDone: false,
    //         task,
    //         createDate: new Date().getTime(),
    //     }
    //     setTodos([newTodo, ...todos])
    // }

    // 할 일 완료 상태를 변경하는 함수
    // isDone을 토글하는 함수
    // const onUpdate = (id) => {
    //     setTodos(
    //         // id가 일치하는 할 일의 isDone을 반전시킵니다.
    //         todos.map((it) => (it.id === id ? { ...it, isDone: !it.Done } : it))
    //     )
    // }

    // const onDelete = (id) => {
    //     setTodos(todos.filter((it) => it.id !== id))
    // }

    return (
        <div>
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    )
}

export default TodoApp
