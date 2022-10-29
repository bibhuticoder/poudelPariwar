import React, { useEffect, useState } from 'react'
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
    <div>
      <Head>
        <title>पौडेल परिवार</title>
      </Head>


      <div className="container text-center font-Mukta py-8">
        <main>
          <h1 className='text-8xl mb-16 text-black'>
            पौडेल परिवार
          </h1>

          <p className='text-2xl mb-8 text-black'>
            <span className="text-3xl">
              पौडेल परिवारमा स्वागत छ
            </span>
            <br />
            <br />
            यस पृष्ठमा पौडेल परिवारको सम्पूर्ण सामान्य जानकारी समावेश छ ।&nbsp;
            यसले नयाँ पुस्ताहरूलाई उनीहरूको पारिवारिक इतिहास र परिवारका सदस्यहरूको बारेमा थप जान्नको लागि सन्दर्भको रूपमा सेवा गर्ने लक्ष्य राख्छ ।
          </p>
        </main>
      </div>

      <div className="px-0 md:px-8 mx-auto my-8">
        <FamilyTree activePersonId={activePersonId} onActivePersonRemove={handleActivePersonRemove} />
      </div>


      <RoadMap />

      <FormNotice />

    </div>
  )
}

export default Home
