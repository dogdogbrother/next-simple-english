import styles from './index.module.scss'
import { GetStaticProps } from 'next'
import { Aphorism, Interaction } from './component/pictureText'
import _Login from './component/Login'

type BgProps = "1.jpg" | "2.jpg" | "3.jpg"
interface StaticProps {
  bg: BgProps
}

export default function Login(props: StaticProps) {
  return <div className={styles.swrap}>
    <div className={styles.loginBg} style={{backgroundImage: `url(/login-bg/${props.bg})`}}>
      <Aphorism />
      <Interaction />
    </div>
    <div className={styles.bgBox}>
      <_Login />
    </div>
  </div>
}

export const getStaticProps: GetStaticProps = async () => {
  const bgList: BgProps[] = ["1.jpg", "2.jpg", "3.jpg"]
  const bg = bgList[Math.floor(Math.random() * bgList.length)]
  return { 
    props: { bg }
   }
}
