import THREE, { Clock, Mesh, Texture, TextureLoader } from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { MainContainer } from './commons'
import { Suspense, useLayoutEffect, useRef, useState } from 'react'
import { TorusKnot, RoundedBox, Plane } from '@react-three/drei'

export const PlaneSect = () => {
    return (
        <MainContainer>
            
            <Canvas >
                <Suspense fallback={null}>
                    <PlaneMesh />
                </Suspense>
            </Canvas>
                    
            
            
        </MainContainer>
    )
}

const PlaneMesh = () => {

    return (     
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <mesh >
            <Plane args={[4, 4]} >
                <meshPhongMaterial color='#f3f3f3' />
            </Plane>
                                
                
            </mesh>
        </>       
    )
}