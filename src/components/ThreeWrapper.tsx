import { MainContainer } from "./commons"
import { Canvas } from "@react-three/fiber"
import React, { ReactNode, Suspense } from "react"

export const ThreeWrapper = ({Component}: { Component: ReactNode}) => {
    return (
        <MainContainer>
            <Canvas>
                <Suspense fallback={null}>
                    {Component}
                </Suspense>
            </Canvas>
        </MainContainer>
    )
}