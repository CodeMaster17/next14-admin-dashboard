import React from 'react'

import styles from "./sidebar.module.css";
import MenuLink from './menuLink/menuLink';
import { menuItems } from '@/constants';
import Image from 'next/image';

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    src={"/vercel.svg"}
                    alt=""
                    width="50"
                    height="50"
                />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Username</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
