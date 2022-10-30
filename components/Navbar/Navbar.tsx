// import Navbar from './navbar'
// import Footer from './footer'

import Link from "next/link"

export default function Navbar(props: any) {

    const routes = [
        {
            name: "गृहपृष्ठ",
            path: "/"
        },

        {
            name: "इतिहास",
            path: "/history"
        },

        {
            name: "योगदान गर्नुहोस्",
            path: "contribute"
        }
    ]


    return (
        <>
            <nav className="px-2 sm:px-4 py-2.5 rounded fixed top-0 left-0 w-full z-50 bg-white">
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <Link href="/" className="flex items-center cursor-pointer">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap cursor-pointer text-black">पौडेल परिवार</span>
                    </Link>

                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        hamburger
                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">

                            {routes.map(route => {
                                return <li key={route.path} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">
                                    <Link href={route.path}>{route.name}</Link>
                                </li>

                            })}

                            {/* <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}