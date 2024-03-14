// 할 일 아이템의 수정 및 삭제

const TodoItem = ({ id, isDone, task, createdDate, onUpdate }) => {
    const onChangeTask = () => {
        onUpdate(id)
    }

    return (
        <div style={{ border: '5px solid orange' }}>
            TodoItem.jsx
            <li key={id}>
                {/* 체크박스를 클릭하면 onUpdate 함수를 호출합니다. */}
                <input type="checkbox" checked={isDone} onChange={onChangeTask} />
                <span>{task}</span>
                <span>{new Date(createdDate).toLocaleDateString()}</span>
                <button>삭제</button>
            </li>
        </div>
    )
}
export default TodoItem
