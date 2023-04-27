"use client"
import "./globals.css"

import Link from "next/link"

// Components
import Navbar from "./components/Navbar"

export default function Home() {

  return (
    <div className="container">
      <Navbar />
      <div>Content</div>
    </div>
  )
}
