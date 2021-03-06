import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { Torus } from '../components/Torus'
import { MainContainer } from '../components/commons'
import SphereMaterial from '../tutorial/Shadows'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { SoldierModel } from './soldier'



export default function Home() {
 
  

  return (
    <Layout>
      <div className={styles.container} >
        <Head>
          <title>草</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main} onScroll={() => console.log(5)}>
        <MainContainer>
          
            <Canvas>
                <PerspectiveCamera zoom={100}>
                <Suspense fallback={null}>
                    <SoldierModel />
                </Suspense>
                </PerspectiveCamera>              
            </Canvas>
            <h3 style={{ position: 'absolute', left: '30%', top: '80%'}}>rotate & zoom</h3>
          </MainContainer>
          <MainContainer>
            <SphereMaterial />
          </MainContainer>
          <Torus />

        </main>
        {/* <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id='lqbg' d="M385 650C497 560.5 644.5 684.5 786.5 662C893.457 645.052 1014 662 1093 620C1171.5 560.5 1319 465.5 1199.5 432.5C1077 411.5 994.5 299.5 896.5 504.5C828 636 606 404.5 457 542.5C322 650 252 422 82.0001 542.5C20.8971 585.811 183.5 762 385 650Z" fill="#C4C4C4"/>
        </svg> */}
      </div>
    </Layout>
  )
}
