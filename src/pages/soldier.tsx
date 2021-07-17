import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from 'three'
import { Suspense, useRef } from "react";
import Layout from "../components/Layout";
import { OrbitControls, PerspectiveCamera, Sphere, TorusKnot, useGLTF } from "@react-three/drei";
import { MainContainer } from "../components/commons";
import { TextureLoader } from "three";

let GLTFLoader: any

export default function Soldier() {

    return (
        <Layout>
            <MainContainer>
            <Canvas>
                <PerspectiveCamera>
                <Suspense fallback={null}>
                    <SoldierModel />
                </Suspense>
                </PerspectiveCamera>
                
                
            </Canvas>
            </MainContainer>
        </Layout>
    )
}

export const SoldierModel = () => {
    const redRef = useRef<THREE.Mesh>(null!)
    const blueRef = useRef<THREE.Mesh>(null!)
    const yellowRef = useRef<THREE.Mesh>(null!)
    
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader
    const obj: any = useLoader(GLTFLoader, '/models/soldier/scene.gltf')
    const texture = useLoader(TextureLoader, '/models/soldier/textures/defaultMat.002_diffuse.jpeg')
    
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        redRef.current.position.x = Math.sin(time)
        redRef.current.position.z = Math.cos(time)
        redRef.current.position.y = Math.cos(time) - 0.5
        blueRef.current.position.x = Math.sin(time*2)
        blueRef.current.position.z = Math.cos(time*2)
        blueRef.current.position.y = Math.sin(time*2) - 0.5
        yellowRef.current.position.x = Math.sin(time*5)
        yellowRef.current.position.z = Math.cos(time*5)
        
    })
    return (
        <>
            <ambientLight intensity={0.5} />
            
            <primitive object={obj.scene} position={[0, -1.4, 0]} />
            <Sphere ref={redRef} scale={0.02} args={[4, 12, 12]} position={[1, 1, 0]}>
                <meshPhongMaterial color='red' />
                <pointLight color='red' intensity={3} />
            </Sphere>
            <Sphere ref={blueRef} scale={0.02} args={[4, 12, 12]} position={[-1, 0, 0]}>
                <meshPhongMaterial color='green' />
                <pointLight color='green' intensity={3} />
            </Sphere>
            <Sphere ref={yellowRef} scale={0.02} args={[4, 12, 12]} position={[-1, -0.5, 0]}>
                <meshPhongMaterial color='yellow' />
                <pointLight color='yellow' intensity={3} />
            </Sphere>
            <OrbitControls />
        </>
    )
}



