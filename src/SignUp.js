import { useState } from 'react'

const SignUp = () => {
    const [user, setUser] = useState({
        name: '',
        gender: '',
        age: '',
        intro: '',
    })

    const handleOnChange = (e) => {
        console.log(e.target.name, e.target.value)

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        })
    }

    return (
        <div>
            <h1>SignUp</h1>

            <form>
                <div>
                    <label htmlFor="name">이름</label>
                    <input
                        onChange={handleOnChange}
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        placeholder="이름을 입력하세요."
                    />
                </div>
                <div>
                    <label htmlFor="gender">성별</label>
                    <select id="gender" name="gender" value={user.gender} onChange={handleOnChange}>
                        <option value="남성">남성</option>
                        <option value="여성">여성</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="age">나이</label>
                    <input type="number" id="age" name="age" value={user.age} onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="intro">자기소개</label>
                    <textarea
                        id="intro"
                        name="intro"
                        value={user.intro}
                        onChange={handleOnChange}
                        placeholder="자기소개를 입력하세요."
                    />
                </div>
            </form>
        </div>
    )
}

export default SignUp
