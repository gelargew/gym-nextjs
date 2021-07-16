
import { Canvas } from '@react-three/fiber'
import { MainContainer } from './commons'
import { TorusKnot } from '@react-three/drei'

export const Torus = () => {
    return (
        <MainContainer>
            
            <Canvas>
                <ambientLight intensity={0.4} />
                <meshPhongMaterial color={'green'} />
                <TorusKnot />
            </Canvas>
                    
            
            
        </MainContainer>
    )
}