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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="globals.css" />
      </Head>

      <main className="bg-black font-pressStart relative">
        <Link href="/">
          <Image
            className="relative top-5 left-5"
            src={logo}
            alt="hello"
            width={200}
            height={200}
          />
        </Link>
        <div className="flex flex-col py-5">
          <div className='mb-10'>
            <h1 className="font-pressStart text-center text-secondary underline mt-10">
              School Projects
            </h1>
            <ul>
              <Link
                href="https://www.github.com/UNKNOWNtxn/CPSC-121-Labs"
                target="_blank"
              >
                <li className="text-white lg:text-2xl xlg:text-2xl font-pressStart text-center mt-5 py-3 w-screen hover:bg-primary">
                  CPSC 121 Object Oriented
                  <br />
                </li>
              </Link>
              <Link
                href="https://www.github.com/UNKNOWNtxn/CPSC-131-Labs"
                target="_blank"
              >
                <li className="text-white lg:text-2xl xlg:text-2xl font-pressStart text-center py-3 w-screen hover:bg-primary">
                  CPSC 131 Data Structures
                </li>
              </Link>
            </ul>
          </div>

          <div className='mb-10'>
            <h1 className="font-pressStart text-center text-secondary underline">
              Blockchain Projects
            </h1>
            <ul>
              <Link href="https://opensea.io/collection/metasquatch" target="_blank"><li className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center mt-5 py-3 w-screen hover:bg-primary'>METASQUATCH NFT</li></Link>
              <Link href="/projects"><li className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center  py-3 w-screen hover:bg-secondary'>Voting System (under construction) </li></Link>
              <Link href="https://www.bobovision.xyz/" target="_blank"><li className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center py-3 w-screen hover:bg-primary'>BoboVision NFT</li></Link>
              <Link href="https://task-master-blush.vercel.app/" target="_blank"><li className='text-white lg:text-2xl xlg:text-2xl font-pressStart text-center  py-3 hover:bg-primary'>TaskMaster Application</li></Link>

            </ul>
          </div>

          <div>
            <h1 className="font-pressStart text-secondary text-center underline">
              Machine Learning Projects
            </h1>
            <ul>
              <Link href="/contact">
                <li className="text-white lg:text-2xl xlg:text-2xl font-pressStart text-center mt-5 py-3 w-screen hover:bg-primary underline">
                  Coming soon...
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </main>


    </>
  )
}

export default Projects
