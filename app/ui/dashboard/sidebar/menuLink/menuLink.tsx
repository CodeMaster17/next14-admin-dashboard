"use client"
// link for menus


import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'
interface Props {
    item: {
        title: string
        path: string
        icon: JSX.Element
    }
}

const MenuLink = ({ item }: Props) => {

    // to match pathname with link tag to style it when active
    const pathname = usePathname()

    return (
        <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink