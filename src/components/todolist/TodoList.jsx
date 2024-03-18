// src/component/TodoList.js
import React, { useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos }) {
    const [search, setSearch] = useState('')

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    // 검색어를 포함하는 할 일 목록을 저장합니다.
    const getSearchTodo = () => {
        return todos.filter((item) => item.task.includes(search))
    }

    return (
        <div style={{ border: '5px solid purple' }}>
            TodoList.jsx
            <h2>할 일 목록 📃</h2>
            <input value={search} onChange={onSearch} placeholder="검색어를 입력하세요" />
            <ul>
                {/* getSearchTodo에 필터링 된 목록만 표시 */}
                {getSearchTodo().map((item) => (
                    <TodoItem key={item.id} {...item} />
                ))}
            </ul>
        </div>
    )
}
