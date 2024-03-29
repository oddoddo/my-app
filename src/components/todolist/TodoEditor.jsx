import React, { useRef, useState } from 'react'

export default function TodoEditor({ addTodo }) {
    const [task, setTask] = useState('')
    const inputRef = useRef()

    const onChangeTask = (e) => {
        setTask(e.target.value)
    }
    const onSubmit = () => {
        if (!task) {
            alert('할 일을 입력해주세요.')
            inputRef.current.focus()
            return
        }

        addTodo(task) // 할 일을 추가하는 함수를 호출합니다.
        setTask('') // 할 일을 추가한 후에는 input을 초기화합니다.
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit()
        }
    }

    return (
        <div style={{ border: '5px solid red' }}>
            TodoEditor.jsx
            <h2>새로운 Todo 작성하기 ✏ </h2>
            <div>
                <input
                    ref={inputRef}
                    value={task}
                    onChange={onChangeTask}
                    onKeyDown={onKeyDown}
                    placeholder="할 일을 추가로 입력해주세요."
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}
