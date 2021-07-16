import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Plane, Sphere } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import {  InstancedMesh, Mesh, MeshPhongMaterial } from 'three'

const tempObj = new THREE.Object3D()

export default function LotOfStuff() {
    return (
        <Canvas>
            <Plane args={[80, 80]} rotation={[Math.PI * 1.5, 0, 0]}>
                <meshPhongMaterial attach='material' wireframe/>
            </Plane>
            <Suspense fallback={null}>
                <Obj i={100} j={400} />
            </Suspense>
            <OrbitControls />
            <ambientLight intensity={0.5} />
        </Canvas>
    )
}


const Obj = ({i=30, j=30}) => {
    const ref = useRef<InstancedMesh>(null!)

    useFrame(({ clock }) => {
        let counter = 0
        const t = clock.oldTime * 0.001
        for (let x = 0; x < i; x++) {
            for(let z = 0; z < j; z++) {
                const id = counter++
                tempObj.position.set(i / 2 - x, 0, j / 2 - z)
                tempObj.rotation.y = t
                tempObj.updateMatrix()        
                ref.current.setMatrixAt(id, tempObj.matrix)         
            }
        }
        ref.current.instanceMatrix.needsUpdate = true
    })

    return <instancedMesh ref={ref} args={[new THREE.BoxBufferGeometry(0.4,0.4,0.4),new THREE.MeshPhongMaterial({color: 'teal'}), i * j]} />
}