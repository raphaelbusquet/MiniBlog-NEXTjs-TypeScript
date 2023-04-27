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
            <li className={pathname == "/" ? styles.active : ""}>
                <Link href={"/"}>
                    Home
                </Link>
            </li>
            <li className={pathname == "/login" ? styles.active : ""}>
                <Link href={"/login"}>
                    Login
                </Link>
            </li>
            <li  className={pathname == "/register" ? styles.active : ""}>
                <Link href={"/register"}>
                    Cadastrar
                </Link>
            </li>
            <li className={pathname == "/about" ? styles.active : ""}>
                <Link href={"/about"}>
                    Sobre
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar