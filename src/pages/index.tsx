import { OrbitControls, Sphere } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Suspense } from "react"
import { TextureLoader } from "three"
import { MainContainer } from "../components/commons"
import Layout from "../components/Layout"


export default function index() {   
    

    return (
        <Layout>
            <MainContainer>
                <Canvas>
                <ambientLight  intensity={1} />
                <spotLight intensity={10} position={[5, 5, 0]} color='greenyellow' />
                    <Suspense fallback={null}>
                        <Earth />
                    </Suspense>
                </Canvas>
            </MainContainer>
        </Layout>
    )

}

const Earth = () => {
    const texture = useLoader(TextureLoader, 'https://unpkg.com/three-globe@2.18.5/example/img/earth-dark.jpg')
    const bumpTexture = useLoader(TextureLoader, 'https://unpkg.com/three-globe/example/img/earth-topology.png')

    return (
        <>
            <Sphere args={[Math.PI, 314, 314]} >
                <meshPhongMaterial map={texture} bumpMap={bumpTexture} />
            </Sphere>
            <OrbitControls />
        </>
    )
}