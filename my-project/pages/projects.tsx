import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import logo from "../public/images/logo.png";

const Projects: NextPage = () => {
    return (
        <>
        <Head>
          <title>Projects</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="globals.css"/>
        </Head>

        <main className='bg-black h-screen font-pressStart relative'>
            <Link href="/">
            <Image className='pt-5 pl-5'
            src={logo}
            alt="hello"
            width={200}
            height={200}
            />
            </Link>
            <div className='grid grid-rows-3'>
              <div className='row-start-1 relative top-10'>
                <h1 className='font-pressStart text-center text-secondary underline mt-10'>School Projects</h1>
                <ul>
                  <Link href="https://github.com/Rbailey8857/CPSC121-Labs" target="_blank"><li className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center mt-5 py-3 w-screen hover:bg-primary'>CPSC 121 Object Oriented<br></br>
                  </li></Link>
                  <Link href="https://github.com/Rbailey8857/CPSC-131-Labs" target="_blank"><li className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center  py-3 w-screen hover:bg-primary'>CPSC 131 Data Structures</li></Link>
                </ul>
              </div>

              <div className='row-start-2'>
                <h1 className='font-pressStart text-center text-secondary underline mt-5'>Blockchain Projects</h1>
                <ul>
                  <Link href="https://opensea.io/collection/metasquatch" target="_blank"><li className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center mt-5 py-3 w-screen hover:bg-primary'>METASQUATCH NFT</li></Link>
                  <Link href="/projects"><li className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center  py-3 w-screen hover:bg-secondary'>Voting System (under construction) </li></Link>
                  <Link href="https://www.divorcedparents.xyz/" target="_blank"><li className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center py-3 w-screen hover:bg-primary'>Divorced Parents NFT</li></Link>
                  <Link href="https://taskmaster-123.vercel.app/" target="_blank"><li className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center  py-3 hover:bg-primary'>TaskMaster Application</li></Link>
                </ul>
              </div>

              <div className='row-start-3'>
                <h1 className='font-pressStart text-secondary text-center underline mt-10'>Freelance Projects</h1>
                <ul>
                  <Link href="/contact"><li className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center mt-5 py-3 w-screen hover:bg-primary underline'>Coming soon...</li></Link>
                </ul>
              </div>
            </div>
            

        </main>
  
        
        </>
    )
  }
  
  export default Projects
  