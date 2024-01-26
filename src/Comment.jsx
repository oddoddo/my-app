const Comment = () => {
    return (
        <div className="comment">
            <img
                src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=3715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <strong>겨울이</strong>
            <p>봄이 왔다. 나가고 싶다. 하지만 나갈 수 없다. 난 고양이니까...</p>
            <time>2024.03.11</time>
        </div>
    )
}

export default Comment
