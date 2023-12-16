import React from 'react'
import styles from '@/app/ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/card/card'
import Chart from '../ui/dashboard/chart/chart'
import Transactions from '../ui/dashboard/transaction/transaction'
import RightSidebar from '../ui/dashboard/rightSidebar/rightSidebar'

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    {/* {cards.map((item) => (
                        <Card item={item} key={item.id} />
                    ))} */}
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                {/* <Chart /> */}
            </div>
            <div className={styles.side}>
                <RightSidebar />
            </div>
        </div>
    )
}

export default Dashboard
