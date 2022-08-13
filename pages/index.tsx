import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Linha from '../components/Linha'
import Lista from '../components/Lista'
import Div from '../components/Div'
import h1 from '../components/h1'
const Home: NextPage = () => {
  return (
    <Lista>
      <Linha text= "Farinha"></Linha>
      <Linha text= "Fava"></Linha>
      <Linha text = "Arroz Vermelho"></Linha>
    </Lista>

  )
}

export default Home
