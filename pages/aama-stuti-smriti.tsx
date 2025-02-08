import React, { useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import dynamic from "next/dynamic"
// const PdfViewer = dynamic(() => import("../components/PdfViewer"), {
//   ssr: false, // Prevents server-side rendering
// })
import PdfViewer from '../components/PdfViewer';
const AamaPage: NextPage = () => {``
  return (
    <div className="pt-16">
      <Head>
        <title>इतिहास - पौडेल परिवार</title>
      </Head>

      <div className="container">
        <PdfViewer fileUrl="/aama-stuti-smriti.pdf" />
      </div>
    </div>
  )
}

export default AamaPage
