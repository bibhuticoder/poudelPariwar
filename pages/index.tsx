import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { FamilyTree } from '../components/FamilyTree/FamilyTree'
import { FAMILY_TREE_MODE } from "../enums"
import { useRouter } from 'next/router'
import { findPersonById } from '../components/FamilyTree/data-details'
import { BsJournalText } from "react-icons/bs"

const Home: NextPage = () => {

  const router = useRouter()

  if (typeof window !== "undefined") {
    window.document.addEventListener("show-person-detail", (data: any) => {
      router.push('?id=' + data.detail);
    });
  }

  let activePerson = null;
  if (router.query.id)
    activePerson = findPersonById("" + router.query.id)

  return (
    <div>
      <Head>
        <title>पौडेल परिवार</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script id='raphael' src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.3.0/raphael.min.js" strategy={'beforeInteractive'} />
      <Script id='treant' src="https://cdnjs.cloudflare.com/ajax/libs/treant-js/1.0/Treant.min.js" strategy={'beforeInteractive'} />

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
        <FamilyTree mode={FAMILY_TREE_MODE.MIN} activePerson={activePerson} />
      </div>

      <div className="sticky bottom-2 rounded bg-red-500 text-white p-4 w-80 mx-auto text-center">
        <p className="text-xl mb-6">
          कृपया आफ्नो जानकारी अपडेट गर्न तलको फारम भर्नुहोस् ।
        </p>
        <a href="https://forms.gle/wekzeMbY77AZdQR56" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-white text-black rounded px-4 py-2'>
          <BsJournalText />
          <span className='ml-2'> फारम भर्नुहोस् </span>
        </a>
      </div>

    </div>
  )
}

export default Home
