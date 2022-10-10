import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'

export default function Home() {
  return (<div>
    <Header/>

    <h1 className="font-sans text-2xl ">Hi, I am Om Kute</h1>
    </div>
  )
}
