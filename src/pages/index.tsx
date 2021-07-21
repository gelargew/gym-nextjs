import { Box, OrbitControls, Sphere } from "@react-three/drei"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Suspense, useEffect, useRef } from "react"
import * as THREE from "three"
import { Vector3 } from "three"
import { MainContainer } from "../components/commons"
import Layout from "../components/Layout"


export default function index() {   
    

    return (
        <Layout>
            <MainContainer>
                <Canvas>
                <ambientLight  intensity={10} />
                <spotLight intensity={10} position={[5, 5, 0]} color='greenyellow' />
                    <Suspense fallback={null}>
                        <Earth />
                    </Suspense>
                </Canvas>
            </MainContainer>
        </Layout>
    )

}

const Earth = ({r = 5}) => {
    const offsetCoor = useRef<THREE.Object3D>(null!)
    const texture = useLoader(THREE.TextureLoader, 'https://unpkg.com/three-globe@2.18.5/example/img/earth-dark.jpg')
    const bumpTexture = useLoader(THREE.TextureLoader, 'https://unpkg.com/three-globe/example/img/earth-topology.png')
    const coor = latlonToCoor(0.7893, 113.9213, r)
    const aus = latlonToCoor(25.2744, 133.7751, r)
    const uk = latlonToCoor(-52.3781, -1.4360, r)
    const german = latlonToCoor(-51.1657, 10.4515, r)
    const saudi = latlonToCoor(-23.8859, 45.0792, r)

    useEffect(() => {
        
        
    }, [])

    return (
        <>
            <Sphere args={[r, 314, 314]}  scale={0.4}>
                <meshPhongMaterial map={texture} bumpMap={bumpTexture} />
                <group ref={offsetCoor} >
                <Box scale={0.2} position={coor} />
                <Box scale={0.2} position={aus} />
                <Box scale={0.2} position={uk} />
                <Box scale={0.2} position={german} />
                <Box scale={0.2} position={saudi} />
                </group>
            </Sphere>
            <OrbitControls />
        </>
    )
}


const latlonToCoor = (lat:number, lon:number, r:number): [x: number, y:number, z:number] => {
    const offsetLat = lat + 5
    const offsetLon = lon - 40
    const phi = (90 - offsetLat) * (Math.PI / 180)
    const theta = (offsetLon * 180) * (Math.PI / 180)
    const x = -(r * Math.sin(phi) * Math.cos(theta))
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)

    return [x, y, z]
}