import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FamilyTree } from '../components/FamilyTree/FamilyTree'
import { FAMILY_TREE_MODE } from "../enums"
import { useRouter } from 'next/router'
import FormNotice from '../components/FormNotice/FormNotice'
import RoadMap from '../components/Roadmap/Roadmap'

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

      {/* <img src="/images/tree-growth.svg" className="absolute transform -translate-x-1/2 -translate-y-28 -z-10 left-1/2 w-4/6 top-0" /> */}

      <section id='hero' className="container py-32">
        <main className='text-left font-Mukta text-black'>
          <h1 className="text-6xl md:text-6xl mb-8 font-semibold">
            स्वागतम
          </h1>

          <p className='text-xl md:text-2xl md:w-1/2 md:max-w-xl'>
            यस पृष्ठमा पौडेल परिवारको सम्पूर्ण सामान्य जानकारी समावेश छ ।&nbsp;
            यसले नयाँ पुस्ताहरूलाई उनीहरूको पारिवारिक इतिहास र परिवारका सदस्यहरूको बारेमा थप जान्नको लागि सन्दर्भको रूपमा सेवा गर्ने लक्ष्य राख्छ ।
          </p>
        </main>
      </section>

      <div className="px-0 md:px-8 mx-auto my-4 mb-16">
        <FamilyTree activePersonId={activePersonId} onActivePersonRemove={handleActivePersonRemove} />
      </div>


      <RoadMap />

      <FormNotice />

    </div>
  )
}

export default Home
