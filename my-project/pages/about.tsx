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
        
            <div className='absolute sm:text-xsm md:text-base md:top-40 md:left-44 sm:left-5 sm:top-28 sm:max-w-full md:max-w-7xl text-secondary'>
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
            <div className='sm:invisible md:visible grid grid-cols-2 absolute top-10 right-24 space-x-6' >
                <div className=''>
                    <Image className='border-4 border-dashed border-primary rounded-lg'
                    src={Web2me}
                    alt="hello"
                    width={180}
                    height={180}
                />
                </div>
                <Link href='https://opensea.io/assets/ethereum/0x10064373e248bc7253653ca05df73cf226202956/6142' target='_blank'>
                <div className=''>
                    <Image className='border-4 border-dashed border-primary rounded-lg'
                    src={Web3me}
                    alt="hello"
                    width={180}
                    height={180}
                    />
                </div>
                </Link>
                <h3 className='text-primary relative left-4 top-3'>Web2 Me</h3>
                <h3 className='text-primary relative left-8 top-3'>Web3 Me</h3>
            </div>
                <div className='sm:visible md:invisible grid grid-cols-2 absolute top-5 right-5 space-x-2.5' >
                <div className=''>
                    <Image className='border-4 border-dashed border-primary rounded-lg'
                    src={Web2me}
                    alt="hello"
                    width={60}
                    height={60}
                />
                </div>
                <div className=''>
                    <Image className='border-4 border-dashed border-primary rounded-lg'
                    src={Web3me}
                    alt="hello"
                    width={60}
                    height={60}
                    />
                </div>
                <h3 className='text-primary text-xsm relative right-3 top-3'>Web2 Me</h3>
                <h3 className='text-primary text-xsm relative right-0 top-3'>Web3 Me</h3>
            </div>
            <div className='relative md:top-80 sm:top-48 top-10 flex justify-center leading-loose'>
                <p className='text-primary sm:mb-16 sm:text-sm md:text-base text-xl text-center sm:mx-5 max-w-7xl'>Hello, and welcome to my portfolio website! As a dedicated computer science student, I'm passionate about leveraging the power of cutting-edge technologies to develop innovative software solutions. I take pride in my ability to work collaboratively with others, and I'm always eager to tackle new challenges head-on.<br></br><br></br> I have experience with a variety of programming languages, including JavaScript, C++, and Solidity, and I'm proficient in popular UI frameworks such as TailwindCSS and Bootstrap. In addition, I have a strong understanding of blockchain technologies, including Ethereum, Hardhat, and decentralized applications.<br></br><br></br>But when I'm not focused on my studies, I like to unwind with a few of my favorite hobbies. Snowboarding is one of my favorite ways to relax and get outside, and I also enjoy playing video games like Overwatch, Call of Duty, and Rocket League.<br></br><br></br>I believe that the best results come from open and honest communication, so if you're interested in discussing any potential opportunities or learning more about my experience and skills, please don't hesitate to reach out. I'm always happy to connect with new people in the industry!"
                </p>
            </div>
        </main>
  
        
        </>
    )
  }
  
  export default About
  