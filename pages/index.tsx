import type { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '../components/organisms/navbar/navbar'
import MainBanner from '../components/organisms/main-banner'
import TransactionStep from '../components/organisms/transaction-step'
import FeaturedGames from '../components/organisms/featured-games'
import Reach from '../components/organisms/reach'
import Story from '../components/organisms/story'
import Footer from '../components/organisms/footer'

const Home: NextPage = () => {

  useEffect(() => AOS.init(), [])

  return (
    <>
      <Navbar />

      <MainBanner />

      <TransactionStep />

      <FeaturedGames />

      <Reach />

      <Story />

      <Footer />
    </>
  )
}

export default Home
