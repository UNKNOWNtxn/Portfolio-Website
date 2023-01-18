import type { NextPage } from 'next'
import Head from 'next/head'
import { Pause, useWindupString } from "windups";
import { WindupChildren } from "windups";
import Image from 'next/image';
import Web3me from '../public/images/Web3me.jpeg'
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

        <main className='bg-black bg-cover h-screen w-screen font-pressStart'>
            <Link className='sm:invisible md:visible' href="/">
            <Image className='fixed top-5 left-5'
            src={logo}
            alt="hello"
            width={200}
            height={200}
            />
            </Link>
            <Link className='sm:visible md:invisible' href="/">
            <Image className=' sm:visible md:invisible absolute top-5 left-5'
            src={logo}
            alt="hello"
            width={125}
            height={125}
            />
            </Link>
        
            <div className='absolute sm:text-xsm md:text-base md:top-40 md:left-44 sm:left-5 sm:top-24 sm:max-w-full md:max-w-7xl text-primary'>
                <WindupChildren>
                    {"Name: Reece Bailey"}
                    <br></br>
                    <Pause ms={150}/>
                    {"Age: 21 years old"}
                    <br></br>
                    <Pause ms={250}/>
                    {"Location: Fullerton, California"}
                    <br></br>
                    <Pause ms={380}/>
                    {"Occupation: Student"}
                    <br></br>
                    <Pause ms={480}/>
                    {"Links:"}
                    <Link className='underline underline-offset-1 relative left-2' href="https://github.com/Rbailey8857" target="_blank">Github</Link>
                    <Link className='underline underline-offset-1 relative left-5' href="https://www.linkedin.com/in/reece-bailey-1346811b2/" target="_blank">Linkedin</Link>
                    
                    <Link className='underline underline-offset-1 relative left-8 ' href="https://www.instagram.com/rreecebailey/" target="_blank">Instagram</Link>
                 </WindupChildren>
            </div>
            <div className='sm:invisible grid grid-cols-2 fixed top-10 right-24 space-x-6' >
                <div className=''>
                    <Image className='rounded-lg'
                    src={Web2me}
                    alt="hello"
                    width={180}
                    height={180}
                />
                </div>
                <div className=''>
                    <Image className='rounded-lg'
                    src={Web3me}
                    alt="hello"
                    width={180}
                    height={180}
                    />
                </div>
                <h3 className='text-primary relative left-4 top-3'>Web2 Me</h3>
                <h3 className='text-primary relative left-8 top-3'>Web3 Me</h3>
            </div>
            <div className='flex justify-center'>
                <p className='text-primary sm:mb-16 sm:text-sm text-xl text-center absolute top-80 max-w-7xl'>
                    I am a hardworker, fast learner and experienced programmer currently studying computer science. My professional goal is to work with cutting-edge technologies and collaborate with a talented team of developers to create innovative software solutions. Javascript, C++ and Solidity are my most comfortable programming languages, but I am still proficient in a variety of UI frameworks such as TailwindCSS, Bootstrap and more. I have a strong understanding and passion for blockchain technologies including but not limited to; Ethereum, Hardhat and decentralized applications. On my off time I enjoying snowboarding and also playing video games like Overwatch, Call of Duty and Rocket League. Feel free to <Link className='underline underline-offset-1' href='/contact'>contact</Link> me to learn more about my experience, skills and projects, and to discuss potential opportunities.
                </p>
            </div>
        </main>
  
        
        </>
    )
  }
  
  export default About
  