import React from 'react'
import Navbar from '../ui/dashboard/navbar/navbar'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import styles from '@/app/ui/dashboard/dashboard.module.css'
import Footer from '../ui/dashboard/footer/footer'

const Layout = ({ children }: any) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout
