import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from 'three'
import { Suspense } from "react";
import Layout from "../components/Layout";
import { OrbitControls, TorusKnot, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";



export default function Soldier() {
    

    return (
        <Layout>
            <Canvas>
                
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                
                
            </Canvas>
        </Layout>
    )
}

const Model = () => {
    const [texture] = useLoader(THREE.TextureLoader, ['/soldier.jpeg'])
    const obj = useLoader(GLTFLoader, '/scene.gltf')
    return (
        <>
            <ambientLight intensity={0.6} />
            <meshStandardMaterial 
            map={texture}
            />
            <primitive object={obj} dispose={null} />
            <OrbitControls />
        </>
    )
}



