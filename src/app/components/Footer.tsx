import styles from  "./Footer.module.css"

import React from 'react'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <h3>Escreva o que você tem interesse.</h3>
        <p>Mini Blog &copy; 2023</p>
    </div>
  )
}

export default Footer