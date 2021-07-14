import { useSpring, animated, config } from '@react-spring/three'
import { useState, Suspense } from 'react'
import { ThreeWrapper } from './ThreeWrapper'
import { MainContainer } from './commons'
import { Canvas } from '@react-three/fiber'


export const Spring = () => {
    return (
        <MainContainer>
            <div style={{height: '70%'}}>
                <Canvas>
                    <Suspense fallback={null}>
                        <SpringMesh />
                    </Suspense>
                </Canvas>
            </div>
            <h1>click the box</h1>
        </MainContainer>
    )
}

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