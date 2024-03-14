import React from 'react'

export default function TodoEditor() {
    return (
        <div style={{ border: '5px solid red' }}>
            TodoEditor.jsx
            <h2>새로운 Todo 작성하기 ✏ </h2>
            <div>
                <input placeholder="할 일을 추가로 입력해주세요." />
                <button>추가</button>
            </div>
        </div>
    )
}
