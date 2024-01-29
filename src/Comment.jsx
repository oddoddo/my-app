import User from './User'

const Comment = (props) => {
    return (
        <div className="comment">
            <User />
            <p>{props.data.text}</p>
            <time>{props.data.date}</time>
        </div>
    )
}

export default Comment
