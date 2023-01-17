import type { NextPage } from 'next'
import Head from 'next/head'
import { Pause, useWindupString } from "windups";
import { WindupChildren } from "windups";
import Image from 'next/image';
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

        <main className='bg-black h-screen font-pressStart'>
            <Link href="/">
            <Image className='pt-5 pl-5'
            src={logo}
            alt="hello"
            width={200}
            height={200}
            />
            </Link>
        
            <div className='static flex ml-28 max-w-7xl text-primary'>
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
                    {"Social Media Links:"}
                    <Link className='underline underline-offset-1 relative right-44 mt-24' href="https://github.com/Rbailey8857">Github</Link>
                    <Link className='underline underline-offset-1 relative right-40 mt-24' href="https://www.linkedin.com/in/reece-bailey-1346811b2/">Linkedin</Link>
                 </WindupChildren>
            </div>
        </main>
  
        
        </>
    )
  }
  
  export default About
  