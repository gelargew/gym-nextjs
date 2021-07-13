import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import anime from 'animejs'
import { useEffect, useLayoutEffect } from 'react'

export default function Home() {

  const animate = () => anime({
    targets: '#lqbg',
    d: [
      {
        value: "M649.199 647.882C727.183 716.117 861.18 682.104 918.43 656.569C990.225 619.924 974.648 549.161 957.886 518.361C912.756 443.86 986.244 176.132 935.492 135.697C884.741 95.2608 599.727 -0.142309 512.305 13.2836C451.186 29.0789 400.125 125.43 442.676 206.775C533.193 276.274 581.933 249.422 682.508 326.819C745.948 375.638 571.215 579.646 649.199 647.882Z"
      }
    ],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutBounce',
    
  })
  useEffect(() => {
    const anim = animate()
    const handleScroll = (e:Event) => console.log(e.target)

  },[animate])
  

  
  

  return (
    <div className={styles.container} >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} onScroll={() => console.log(5)}>
      <svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id='lqbg' d="M385 650C497 560.5 644.5 684.5 786.5 662C893.457 645.052 1014 662 1093 620C1171.5 560.5 1319 465.5 1199.5 432.5C1077 411.5 994.5 299.5 896.5 504.5C828 636 606 404.5 457 542.5C322 650 252 422 82.0001 542.5C20.8971 585.811 183.5 762 385 650Z" fill="#C4C4C4"/>
      </svg>


      </main>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
      <h1>YAOO</h1>
    </div>
  )
}
