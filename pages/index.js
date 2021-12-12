import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className='flex fixed flex-col justify-start items-center h-screen w-screen'>
      <title>Home</title>
      <div className='flex justify-center items-center w-full h-3/4'>
        <div className='flex flex-col justify-center items-center font-bold text-green-800 mt-12 animate-bounce'>
          <h1 className='text-6xl uppercase tracking-wider'>Welcome to Employees WebSite</h1>
          <h2 className='text-3xl tracking-wider mt-8 italic'> " เรื่องข้อมูลพนักงาน เป็นเรื่องสำคัญเสมอ " </h2>
        </div>
      </div>


      <div className='w-screen'>
        <Footer />
      </div>

    </div>
  )
}
