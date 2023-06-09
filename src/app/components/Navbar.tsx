"use client"
import styles from "./Navbar.module.css"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useAuthContext } from "../context/AuthContext"
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut } from "firebase/auth"


const Navbar = () => {

    const pathname = usePathname()

    const { user } = useAuthContext()

    // Clean up (deal with memory leak)
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }


    const logout = () => {

        checkIfIsCancelled()

        signOut(auth)
    }

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
            {user && (
                <li>
                    <button onClick={logout}>Sair</button>
                </li>
            )}
        </ul>
    </nav>
  )
}

export default Navbar