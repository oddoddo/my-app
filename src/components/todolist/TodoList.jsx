// src/component/TodoList.js
import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
    return (
        <div style={{ border: '5px solid purple' }}>
            TodoList.jsx
            <h2>할 일 목록 📃</h2>
            <input placeholder="검색어를 입력하세요" />
            <ul>
                <TodoItem />
            </ul>
        </div>
    )
}
