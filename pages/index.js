import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from'../data/ice_cream.json'
import { useState,useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [bestRecords,setBestRecords] = useState(record.filter((rec) => rec.rating > 4.5));


  return (
    <>
      <Head>
        <title>Ice Cream Rating</title>
        <meta name="description" content="Best Ice Cream " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ice-cream-logo.png" />
      </Head>

      

      <main className={styles.container} id="colouring">
        <div className={styles.ice_cream_img}>
        </div>

        <div className={styles.h_title} id="title">STAY COOL & EAT ICE CREAM!</div>
       <div className={styles.h_h2} id="h2">Rating the best ice cream in the world</div>


        <div className={styles.row}>

        {
          bestRecords.map ((rec,index) =>(

            <div className={styles.card}>
              <div kye={index}>
                <div className={styles.company}>{rec.name}</div><br></br>
                <div className={styles.subhead}>{rec.subhead}</div><br></br>
                <div className={styles.description}>{rec.description}</div>
              <div className={styles.thumb_cnt}>
                <img src='/thumbs-up.png' alt="thumb up icon" className={styles.thumb_icon} />
                <div>{rec.rating}</div>
              </div>
              </div>
              </div>
          )
           
          )
          
        }
        </div>
        <div >
          <button className={styles.h_bnt} onClick={() => {location.href='more'}} > Learn More About Ice Cream</button>
        </div>
      </main>
    </>
  )
}
