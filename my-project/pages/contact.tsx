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

        <main className='bg-gradient-to-b from-black to-gray-900 h-screen font-pressStart'>
  <div className="flex flex-col justify-center h-full items-center px-5">
    <Link href="/">
      <Image src={logo} alt="logo" width={200} height={200} />
    </Link>
    <div className="flex flex-col items-center mt-10">
  <h2 className="text-white text-2xl font-bold mb-5">Contact Me</h2>
  <div className="flex flex-col items-start mb-5">
    <p className='text-white text-lg font-medium'>Phone:</p>
    <a href="tel:+19497262009" className='text-primary text-lg font-medium mb-2'>
      {/* <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 icon-size"/>*/}+1(949)726-2009</a> 

    <p className='text-white text-lg font-medium'>Email:</p>
    <a href="mailto:reece.bailey8857@yahoo.com" className='text-primary text-lg font-medium mb-2'>
      {/* <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-fa" />*/}Reece.bailey8857@yahoo.com</a> 
  </div>

      <form action="#" method="POST">
        <label className="text-gray-400 text-lg font-medium mb-1 text-white" htmlFor="name">*Name:</label>
        <input type="text" id="name" name="name" className="border border-gray-400 rounded-md p-2 mb-5 w-full bg-gray-900 text-gray-100" required />

        <label className="text-gray-400 text-lg font-medium mb-1 text-white" htmlFor="email">*Email:</label>
        <input type="email" id="email" name="email" className="border border-gray-400 rounded-md p-2 mb-5 w-full bg-gray-900 text-gray-100" required />

        <label className="text-gray-400 text-lg font-medium mb-1 text-white" htmlFor="phone">Phone Number:</label>
        <input id="phone" name="phone" className="border border-gray-400 rounded-md p-2 mb-5 w-full bg-gray-900 text-gray-100" />

        <label className="text-gray-400 text-lg font-medium mb-1 text-white" htmlFor="message">*Message:</label>
        <textarea id="message" name="message" className="border border-gray-400 rounded-md p-2 mb-5 w-full bg-gray-900 text-gray-100" required></textarea>

        <button type="submit" className="bg-primary text-white text-lg font-medium py-2 px-4 rounded-md hover:bg-secondary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Send</button>
      </form>

      <p className="text-lg mt-10 text-secondary">My contact page is currently under construction, please contact me via phone or email! :)</p>
    </div>
  </div>
</main>
        </>
    )
  }
  
  export default Contact
  