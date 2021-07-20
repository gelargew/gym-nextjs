import Head from 'next/head'
import Layout from '../components/Layout'
import { MainContainer } from '../components/commons'
import { Canvas, PerspectiveCameraProps, ThreeEvent, useFrame } from '@react-three/fiber'
import { useState, useEffect, useRef } from 'react'
import { Box, CameraShake, MapControls, OrbitControls, PerspectiveCamera, Plane } from '@react-three/drei'
import * as THREE from 'three'



export default function Home() {
  const [pointer, setPointer] = useState<THREE.Vector3>(new THREE.Vector3(0, 0, 4))
  const [distance, setDistance] = useState(0)
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)

  const handlePointerMove = (e:ThreeEvent<PointerEvent>) => {
    setPointer(prev => {
      prev.setX(e.point.x)
      prev.setY(e.point.y)
      return prev
    })
    setDistance(e.distance)
  }

  return (
    <Layout>
      
        <Head>
          <title>草</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <MainContainer>
        <Canvas camera={cameraRef.current} >
          <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} />
          <OrbitControls camera={cameraRef.current}  />
          <mesh  >
            <Plane args={[80, 80, 20, 20]}  position={[0, 0, -4]}>
                  <meshPhongMaterial attach='material' wireframe/>
            </Plane>
            
            <Plane args={[80, 80, 1, 1]}  position={[0, 0, 5]} onClick={e => cameraRef.current.translateOnAxis(pointer, 2) } onPointerMove={handlePointerMove}>
                  <meshPhongMaterial wireframe transparent />
            </Plane>
            <CameraMovement pointer={pointer} />
          
            
            
          </mesh>

        </Canvas>
      </MainContainer>
        
    </Layout>
  )
}


const CameraMovement = ({pointer}: { pointer: THREE.Vector3}) => {
  const boxRef = useRef<THREE.Object3D>(null!)
  const [prevQt, setPrevQt] = useState<THREE.Vector3>(new THREE.Vector3(0, 0, 100))
  

  useFrame(() => {
    const qt = new THREE.Vector3().lerpVectors(prevQt, pointer, 0.1)
    boxRef.current.lookAt(qt)
    setPrevQt(qt)
  })
  return (
    <>
    
      <Box ref={boxRef} args={[5, 5, 5]} position={[0, 0, -4]} onClick={() => console.log(pointer)}>
        <meshPhongMaterial color='blue' wireframe />
      </Box>
      <ambientLight intensity={0.5} />
      
      
      
    </>
  )
}