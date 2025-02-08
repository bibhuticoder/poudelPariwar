import React from "react"
import type { NextPage } from "next"
import Head from "next/head"

import PdfViewer from '../components/PdfViewer';
const AamaPage: NextPage = () => {
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
