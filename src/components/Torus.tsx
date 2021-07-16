import THREE, { Clock, Mesh, Texture, TextureLoader } from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import styles from '../styles/Home.module.css'
import { MainContainer } from './commons'
import { Suspense, useLayoutEffect, useRef, useState } from 'react'
import { TorusKnot, RoundedBox, Plane } from '@react-three/drei'

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
            <mesh >
            <RoundedBox ref={mesfRef} position={[2, 0, 1]} args={[1, 1, 1]} radius={0.05} smoothness={4}>
                <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
            </RoundedBox>
                                
                
            </mesh>
        </>       
    )
}