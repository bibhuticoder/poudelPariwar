import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FamilyTree } from '../components/FamilyTree/FamilyTree'
import { FAMILY_TREE_MODE } from "../enums"
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter()
  let activePersonId: any = null;

  if (typeof window !== "undefined") {
    window.document.addEventListener("show-person-detail", (data: any) => {
      router.push('?name=' + data.detail);
    });
  }

  if (router.query.name) activePersonId = (router.query.name + "")

  const handleActivePersonRemove = () => {
    if (activePersonId) activePersonId = null;
  }

  return (
    <div className='pb-16'>
      <Head>
        <title>पौडेल परिवार</title>
      </Head>

      <section id='hero' className="container py-16 md:pt-36 md:pb-32">
        <main className='text-center md:text-left font-Mukta text-black'>
          <h1 className="text-6xl md:text-6xl font-semibold mb-12 md:mb-16">
            स्वागतम्
          </h1>

          <p className='text-2xl md:text-3xl md:w-1/2 md:max-w-xl leading-10'>
            यस पृष्ठमा भद्रबास र वरिपरिका निवासी पौडेल परिवारको सम्पूर्ण सामान्य जानकारी समावेश गरिएको छ ।
            <br />
            <br />
            नयाँ पुस्ताहरूलाई उनीहरूको पारिवारिक इतिहास र परिवारका सदस्यहरूको बारेमा थप जान्नको लागि यसले सन्दर्भको रूपमा सेवा गर्ने लक्ष्य राख्छ ।
          </p>
        </main>
      </section>

      <div className="px-0 md:px-8 mx-auto my-4 mb-16">
        <FamilyTree activePersonId={activePersonId} onActivePersonRemove={handleActivePersonRemove} />
      </div>
    </div>
  )
}

export default Home
