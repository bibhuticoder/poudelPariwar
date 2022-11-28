import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import FamilyTree from '../components/FamilyTree/FamilyTree'
import Timeline from '../components/Timeline/Timeline'
import { useRouter } from 'next/router'
import Link from 'next/link'
import timelineBg from "../public/images/timeline-back.png"

const Home: NextPage = () => {

  const router = useRouter()
  const [activePersonId, setActivePersonId] = useState<String | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.document.addEventListener("show-person-detail", (data: any) => {
        router.push('?name=' + data.detail);
      });
    }
  }, [])

  useEffect(() => {
    if (router.query.name) {
      if (activePersonId != router.query.name)
        setActivePersonId(router.query.name + "")
    }
  }, [router.query])

  const handleActivePersonRemove = () => {
    if (activePersonId) setActivePersonId(null);
  }

  return (
    <>
      <Head>
        <title>पौडेल परिवार</title>
      </Head>


      <section id='hero' className="container py-16 md:pt-36 md:pb-32">
        <main className='text-center md:text-left font-Mukta text-black'>
          <h1 className="text-6xl md:text-6xl font-semibold mb-12 md:mb-16">
            स्वागतम्
          </h1>

          <p className='text-2xl md:text-3xl md:w-1/2 md:max-w-xl leading-10'>
            यस पृष्ठमा पौडेल परिवार तथा उनीहरुको वंशज को जानकारी समावेश गरिएको छ ।
            <br />
            <br />
            नयाँ पुस्ताहरूलाई पारिवारिक इतिहास र परिवारका सदस्यहरूको बारेमा थप जान्नको लागि यसले यसले मद्दत गर्नेछ ।
          </p>
        </main>
      </section>

      <div className="px-0 md:px-8 mx-auto my-4 mb-16">
        <FamilyTree activePersonId={activePersonId} onActivePersonRemove={handleActivePersonRemove} />
      </div>


      <div className="container">
        <h1 className='text-5xl text-center mb-8 md:text-left md:text-5xl'> इतिहासका प्रमुख घटनाहरू </h1>

        <p className="text-2xl mb-16 text-center md:text-left">
          आजको अवस्था सम्म आइपुग्न विभिन्न घटनाहरुको योगदान छ । थुप्रै स्रोतहरु आध्यान गरि हामीले ती घटनाहरुलाई श्रृंखलाबद्ध रुपमा प्रस्तुत गरेका छौ ।
          विस्तृत जानकारीको लागी &nbsp;
          <Link href="/history">
            <a className='site-link'>इतिहास</a>
          </Link>
          &nbsp; पृष्ठमा जानुहोला ।
        </p>
      </div>

      <div className="relative">
        <Timeline />
        <div className='absolute h-full w-full top-0 left-0 -z-10 bg-auto bg-center md:bg-left bg-repeat opacity-40' style={{
          backgroundImage: `url(${timelineBg.src})`
        }}>

        </div>
      </div>

    </>
  )
}

export default Home
