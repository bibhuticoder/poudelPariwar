import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import FamilyTree from '../components/FamilyTree/FamilyTree'
import Timeline from '../components/Timeline/Timeline'
import { useRouter } from 'next/router'

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

      {/* <Timeline /> */}

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
    </>
  )
}

export default Home
