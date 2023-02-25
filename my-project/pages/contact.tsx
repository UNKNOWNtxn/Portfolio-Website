import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import logo from "../public/images/logo.png";

const Contact: NextPage = () => {
    return (
        <>
        <Head>
          <title>Get in touch</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="globals.css"/>
        </Head>

        <main className='bg-black h-[100%] font-pressStart'>
            <Link href="/">
            <Image className='pt-5 pl-5'
            src={logo}
            alt="hello"
            width={200}
            height={200}
            />
            </Link>

            <div className="flex h-screen items-center flex-col mt-44">
              <p className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center'>Phone Number:</p>
              <p className='text-primary lg:text-2xl xlg:text-2xl font-pressStart'>+1(949)726-2009</p>
              <br></br>
              <br></br>
              <p className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center'>Discord:</p>
              <p className='text-primary lg:text-2xl xlg:text-2xl font-pressStart text-center'>UNKNOWN#2222</p>
              <br></br>
              <br></br>
              <p className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center'>Email:</p>
              <p className='text-primary lg:text-2xl xlg:text-2xl font-pressStart'>Reece.bailey8857@yahoo.com</p>
            </div>
            

        </main>
  
        
        </>
    )
  }
  
  export default Contact
  