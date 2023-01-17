import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import logo from "../public/images/logo.png";

const Experience: NextPage = () => {
    return (
        <>
        <Head>
          <title>All of my work experience and school accomplishments</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="globals.css"/>
        </Head>

        <main className='bg-black h-screen font-pressStart'>
            <Link href="/">
            <Image className='pt-5 pl-5'
            src={logo}
            alt="hello"
            width={200}
            height={200}
            />
            </Link>
        </main>
  
        
        </>
    )
  }
  
  export default Experience
  