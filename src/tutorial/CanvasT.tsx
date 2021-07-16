import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef, useState, useEffect } from "react"
import { MainContainer } from "../components/commons"
import { BufferGeometry, InstancedMesh, Mesh } from 'three'
import * as THREE from 'three'
import { Any } from "@react-spring/types"

export { CanvasT, Boxs }

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const colors = new Array(200).fill(undefined).map(() => ['red', 'black', 'white', 'teal', 'aquamarine'][Math.floor(Math.random() * 5)])

const CanvasT = () => {
    const boxRef = useRef<Mesh>(null!)
    const rotate = () => {
        useFrame(({ clock }) => {
            boxRef.current.rotation.y = clock.getElapsedTime()
        })
    }

    return (
        <MainContainer>
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh position={[1, 1, 1]} onPointerEnter={rotate}>
                <boxGeometry ref={boxRef}  />
                <meshPhongMaterial />
                </mesh>
            </Canvas>
        </MainContainer>
    )
}

function Boxs() {
    const [hovered, set] = useState<number>()
    const colorArray = useMemo(() => Float32Array.from(new Array(1000).fill(undefined).flatMap((_, i) => tempColor.set(colors[i]).toArray())), [])
    const meshRef = useRef<THREE.InstancedMesh>(null!)
    const prevRef = useRef<number>()
    useEffect(() => void (prevRef.current = hovered), [hovered])
    useFrame((state: any) => {
      const time = state.clock.getElapsedTime()
      meshRef.current.rotation.x = Math.sin(time / 4)
      meshRef.current.rotation.y = Math.sin(time / 2)
      let i = 0
      for (let x = 0; x < 10; x++)
        for (let y = 0; y < 10; y++)
          for (let z = 0; z < 10; z++) {
            const id = i++
            tempObject.position.set(5 - x, 5 - y, 5 - z)
            tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
            tempObject.rotation.z = tempObject.rotation.y * 2
            if (hovered !== prevRef.current) {
              tempColor.set(id === hovered ? 'white' : colors[id]).toArray(colorArray, id * 3)
              meshRef.current.geometry.attributes.color.needsUpdate = true
            }
            const scale = id === hovered ? 2 : 1
            tempObject.scale.set(scale, scale, scale)
            tempObject.updateMatrix()
            meshRef.current.setMatrixAt(id, tempObject.matrix)
          }
      meshRef.current.instanceMatrix.needsUpdate = true
    })
    return (
      <instancedMesh ref={meshRef} args={[new BufferGeometry, 0, 1000]} onPointerMove={(e) => set(e.instanceId)} onPointerOut={(e) => set(undefined)}>
        <boxGeometry args={[0.7, 0.7, 0.7]}>
          <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
        </boxGeometry>
        <meshPhongMaterial vertexColors={true} />
      </instancedMesh>
    )
  }