import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import RoadMap from "../components/Roadmap/Roadmap"

const ContributePage: NextPage = () => {
  return (
    <div className="pt-16">
      <Head>
        <title>योगदान दिनुहोस</title>
      </Head>

      <div className="container font-Nunito">
        <h1 className="text-5xl mb-8 font-Mukta">योगदान दिनुहोस (Contribute)</h1>

        <p className="text-xl font-Nunito mb-16">
          It is a non-profit, open source project.
          Anyone from Poudel family or beyond can contribute to this project.
        </p>

        <h2 className="text-3xl font-semibold mb-4">
          Team behind the project
        </h2>

        <p className="text-xl mb-4">
          Bibhuti Poudel : Developer &amp; maintainer
          <br />
          Biranchi Poudel : Researcher &amp; Content writer
          <br />
          Dikshyant Poudel : Digital assets developer
        </p>

        <div className="bg-blue-50 text-black w-full rounded p-4 font-Nunito">
          <b>Finance</b>: The project is hosted for free on
          <a href="https://pages.cloudflare.com/" className="site-link" target="_blank" rel="noopener noreferrer"> Cloudflare Pages</a>.
          Expense for the sub-domain is covered by Bibhuti Poudel. Future expenses will also be handled by team members.
        </div>


        <h2 className="text-3xl mt-16 mb-8 font-semibold">Project Roadmap</h2>
        <RoadMap />

        <h2 className="text-3xl mt-16 mb-8 font-semibold">Want to contribute ?</h2>
        <div className="text-xl">
          <p className="mb-4">There are few areas where we would appreciate your help.</p>

          <p className="mb-4">
            <b>General</b>: Creative ideas that add value to this project are always welcome.
          </p>
          <p className="mb-4">
            <b>Technical</b>: If you are a programmer, you can help us by improving the source code. The project is kept open-source at <a href="http://" target="_blank" rel="noopener noreferrer" className="site-link">Github</a>.
            If you are a designer(UI/UX), we definitely need you help. You can reach out to me via email <a href="mailto:bibhutipd@gmail.com" className="site-link">bibhutipd@gmail.com.</a>
          </p>

          <p className="mb-4">
            <b>Research</b>: We would love to have more research oriented data on history section.
          </p>

          <p className="mb-4">
            <b>Digital assets</b>: If you are a digital artist, you can help us by contributing digital illustrations. eg: related to Poudel family history.
          </p>
        </div>

      </div>

    </div>
  )
}

export default ContributePage
