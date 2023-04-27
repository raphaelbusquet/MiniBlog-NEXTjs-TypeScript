import Link from "next/link"
import styles from "./styles.module.css"

import Navbar from "@/app/components/Navbarundefined"

const login = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.login}>
          <h1>Login</h1>
          <Link href="/">Home</Link>
      </div>
    </div>
  )
}

export default login