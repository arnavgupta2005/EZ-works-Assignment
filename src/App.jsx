
import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './sections/Stats'
import Gallery from './sections/Gallery'
import Slider from './sections/Slider'
import Contact from './sections/Contact'
import InfoCards from './sections/InfoCards'
import Footer from './sections/Footer'

export default function App(){
  return(
    <main>
      <section className="section"><Hero/></section>
      <section className="section"><About/></section>
      <section className="section"><Stats/></section>
      <section className="section"><Gallery/></section>
      <section className="section"><Slider/></section>
      <section className="section"><Contact/></section>
      <section className="section"><InfoCards/></section>
      <section className="section"><Footer/></section>
    </main>
  )
}
