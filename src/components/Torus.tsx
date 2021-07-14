import THREE, { Clock, Mesh, Texture, TextureLoader } from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import styles from '../styles/Home.module.css'
import { MainContainer } from './commons'
import { Suspense, useLayoutEffect, useRef, useState } from 'react'

export const Torus = () => {
    return (
        <MainContainer>
            <Canvas>
                <Suspense fallback={null}>
                    <TorusMesh />
                </Suspense>
            </Canvas>
        </MainContainer>
    )
}

const TorusMesh = () => {
    const mesfRef = useRef<Mesh>(null!)
    const [colorMap] = useLoader(TextureLoader, ['/pstoneColor.jpg' ])
    useFrame(({ clock }) => {
        mesfRef.current.rotation.x = clock.getElapsedTime()
        mesfRef.current.rotation.z = clock.getElapsedTime()
    })
    return (     
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <mesh ref={mesfRef}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshStandardMaterial
                map={colorMap}
                
                />
            </mesh>
        </>       
    )
}