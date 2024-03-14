import React, { useState } from 'react'
import Controller from './Controller'
import Viewer from './Viewer'

const CounterApp = () => {
    const [count, setCount] = useState(0)

    const handleSetCount = (value) => {
        setCount(count + value)
    }
    return (
        <div>
            <h2>Counter App 만들기</h2>
            <Viewer count={count} />
            <Controller handleSetCount={handleSetCount} />
        </div>
    )
}

export default CounterApp
