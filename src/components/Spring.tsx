import { useSpring, animated, config } from '@react-spring/three'
import { useState } from 'react'
import { ThreeWrapper } from './ThreeWrapper'


export const Spring = () => <ThreeWrapper Component={SpringMesh}  />

const SpringMesh = () => {
    const [isActive, setIsActive] = useState(false)
    const {scale} = useSpring({ scale: isActive ? 1.5 : 1, config: config.wobbly})

    return (
        <animated.mesh scale={scale} onClick={() => setIsActive(!isActive)}>
            <boxGeometry />
            <meshPhongMaterial color='royalblue' />
        </animated.mesh>
    )
}