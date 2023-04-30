import type { NextPage } from 'next'
import Head from 'next/head'
import { Pause, useWindupString } from "windups";
import { WindupChildren } from "windups";
import Image from 'next/image';
import Web3me from '../public/images/Web3me.gif'
import Web2me from '../public/images/Web2me.jpg'
import Link from 'next/link';
import logo from "../public/images/logo.png";

const About: NextPage = () => {
    const [text] = useWindupString(
        "Hello my Name is Reece Bailey, and I am a Computer Science Student at California State Univertiy Fullerton. Some of my hobbies include but are not limited to:",
        {pace: (char) => (char === " " ? 50 : 50),}
    );

    const [text2] = useWindupString(
        "Snowboarding, Gaming and Coding",
        {pace: (char) => (char === " " ? 50 : 50),}
    );
    

    return (
        <>
        <Head>
          <title>All About Me</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="globals.css"/>
          
        </Head>

        <main className='bg-black sm:h-[175vh] md:bg-cover md:h-screen overflow-y-hidden font-pressStart'>
            <Link className='sm:invisible md:visible z-10' href="/">
            <Image className='absolute top-5 left-5'
            src={logo}
            alt="BackHome"
            width={200}
            height={200}
            />
            </Link>
            <Link className='sm:visible md:invisible z-10' href="/">
            <Image className=' sm:visible md:invisible absolute top-5 left-5'
            src={logo}
            alt="BackHome"
            width={125}
            height={125}
            />
            </Link>
                                    
        </main>
  
        
        </>
    )
  }
  
  export default About
  