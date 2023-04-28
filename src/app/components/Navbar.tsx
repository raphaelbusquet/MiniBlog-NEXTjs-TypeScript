"use client"
import styles from "./Navbar.module.css"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {

    const pathname = usePathname()

  return (
    <nav className={styles.navbar}>
        <Link href={"/"} className={styles.brand}>
            Mini<span>Blog</span>
        </Link>
        <ul className={styles.links_list}>
            <li>
                <Link href={"/"} className={pathname == "/" ? styles.active : ""}>
                    Home
                </Link>
            </li>
            <li>
                <Link href={"/login"} className={pathname == "/login" ? styles.active : ""}>
                    Login
                </Link>
            </li>
            <li>
                <Link href={"/register"}  className={pathname == "/register" ? styles.active : ""}>
                    Cadastrar
                </Link>
            </li>
            <li>
                <Link href={"/about"} className={pathname == "/about" ? styles.active : ""}>
                    Sobre
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar