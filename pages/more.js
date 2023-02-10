import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from'../data/ice_cream.json'
import { useState, useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `You liked ${count} times`;
    }, [count]);

  return (
    <>
      <Head>
        <title>Ice Cream Rating</title>
        <meta name="description" content="Best Ice Cream " />
        <meta name="vm" content="author:vm" />
        <link rel="icon" href="/ice-cream-logo.png" />
      </Head>

      

      <main className={styles.container}>
        
        <div className={styles.m_img} />
        <h1 className={styles.m_h1} > Ice Cream History</h1>
        <p className={styles.m_text} id="bodytext_color">First ice creams appeared in ancient Persia, some 2500 years ago, and in those early times they were all based on the sweetened water that was iced, grinded into little pieces and then decorated with various tasting toppings and fruits. This tradition of ice cream production slowly reached Greek and Roman empires, where ice creams were welcomed with opened hands and used liberally by Roman nobility and royalty who had necessary money to fund very expensive process of production. Sadly, after the fall of the Roman Empire, organized ice transport from mountains to the cities below stopped, and ice cream continued to be even more expensive product. Little changed in the 1000 years following the fall of Rome, and only after the Europe started exiting Dark Ages did ice cream managed to resurface in Renaissance Italy.
        <br></br>
        During 13th and 14th century, Italy was center of the trade with the Middle East and Asia, and their contact with new and innovative recipes of ice cream enabled this summertime treat to slowly spread across entire Europe. This expansion of ice cream was not an easy one, and it happened only after Italian noblewoman Catherine de'Medici went to France to marry Duke de Orleans (future king of France) in 1533. There she introduced nobility of continental Europe with the wonders of the east  eating utensils, high heeled shoes and off course, ice cream. With nobility fueling its production, innovators, technicians and cooks all put their best efforts into developing the rise of ice cream popularity and availability across the world. North American street vendors started selling ice cream only few decades after France and England, and industrial revolution slowly but surely started working on elevating problems of continuous refrigeration.
        </p>
        <br></br>
        <div >
        <h2 className={styles.m_h2}>Interesting Facts about Ice cream</h2>
        <ul className={styles.ls}>
            <li className={styles.m_ls}>Marco Polo introduced Europe to the milk based ice cream in late 13th century. </li>
            <li className={styles.m_ls}>One ice cream cone can be finished with 50 licks. </li>
            <li className={styles.m_ls}>First ice cream cone was created during 1904 World's Fair in St. Louis. </li>
            <li className={styles.m_ls}>Legends say that Charles I of England ordered beheading of his chef, who was blamed for releasing into public secret recipe of Kings favorite ice cream. </li>
        </ul>
        <div className={styles.m_cnt2}>
            <p className={styles.m_text2} id="text2"> Please click like if you like ice cream!</p>
            <p className={styles.m_text3} id="text3">You've liked {count} times</p>
            <button onClick={() => setCount (count +1)} className={styles.m_bnt} id="m_bnt">Like!
            </button>
        </div>
        </div>

      </main>
    </>
  )
}
