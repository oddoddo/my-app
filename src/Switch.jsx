import switchOn from './assets/images/switch-on.svg'
import switchOff from './assets/images/switch-off.svg'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'

const Switch = () => {
    const [isToggled, setIsToggled] = useState(false)
    const [isToggled2, setIsToggled2] = useState(false)

    return (
        <>
            <div>
                <img
                    src={isToggled ? switchOn : switchOff}
                    alt="switch"
                    onClick={() => {
                        setIsToggled(!isToggled)
                    }}
                />

                <div>{isToggled ? '켜짐' : '꺼짐'}</div>
            </div>

            <hr />

            <Box
                onClick={() => {
                    setIsToggled2(!isToggled2)
                }}
                w={300}
                h={200}
                bg={`url(${isToggled2 ? switchOn : switchOff}) no-repeat 0 0 / contain`}
            />
        </>
    )
}

export default Switch
