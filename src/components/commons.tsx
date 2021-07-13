import { HTMLProps, HTMLAttributes } from "react"
import styles from '../styles/Home.module.css'


export { MainContainer }

const MainContainer = (props: HTMLProps<HTMLDivElement>) => {
    return <div className={styles.mainContainer} {...props}>{props.children}</div>
}