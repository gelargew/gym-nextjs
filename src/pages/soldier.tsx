import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from 'three'
import { Suspense } from "react";
import Layout from "../components/Layout";
import { OrbitControls, TorusKnot, useGLTF } from "@react-three/drei";
import { MainContainer } from "../components/commons";

let GLTFLoader: any

export default function Soldier() {
    

    return (
        <Layout>
            <MainContainer>
            <Canvas>
                
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                
                
            </Canvas>
            </MainContainer>
        </Layout>
    )
}

const Model = () => {
  
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader
    const obj: any = useLoader(GLTFLoader, '/model.gltf')
    console.log(obj)
    return (
        <>
            <ambientLight intensity={0.2} />
            <primitive object={obj.scene} dispose={null} />
            <TorusKnot />
            <OrbitControls />
        </>
    )
}



