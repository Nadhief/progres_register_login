'use client'
import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Logo from '/public/xx.png';
const links = [
    {
      id: 1,
      title: "Masuk",
      url: "/api/auth/signin",
    },
    {
      id: 2,
      title: "Daftar",
      url: "/daftar",
    },
  ];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
      <Image src={Logo} alt="Logo" width={100} height={50} className={styles.logo} />
      </Link>
      {/* membuat komponen yang ada di navbar menggunakan json list links yang telah dibuat diatas */}
      <div className={styles.links}> 
        {links.map(link=>(
            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        {/* <button 
          className={styles.logout}
          onClick={()=> {
            console.log("logged out")
        }}>Logout</button> */}
      </div>
    </div>
  )
}

export default Navbar


