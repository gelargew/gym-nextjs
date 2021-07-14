
  import React, { Suspense, useRef } from "react";
  import { Canvas } from "@react-three/fiber";
  import { OrbitControls, OrbitControlsProps, Stage } from "@react-three/drei";
  import SkellyArm from "./Vr";
  
  export default function Viewer() {
    const ref = useRef<{
      update(): void;
      target: any;
  }>(null!);
    const orbitRef = useRef<OrbitControlsProps>(null!)
  
    return (
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage
            controls={ref}
            preset="rembrandt"
            intensity={1}
            environment="city"
          >
            <SkellyArm />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    );
  }    
