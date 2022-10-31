
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { BsX, BsJustify } from "react-icons/bs";
import FormNotice from "../FormNotice/FormNotice";

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
            name: "योगदान दिनुहोस",
            path: "/contribute"
        }
    ]

    const [formNotice, setFormNotice] = useState<Boolean>(true);
    const [mobileNav, setMobileNav] = useState<Boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window != undefined) {
            window.addEventListener('scroll', (e) => {
                let navbar = document.querySelector("#navbar");
                if (navbar) {
                    let navHeight = navbar.getBoundingClientRect().height;
                    if (window.pageYOffset > navHeight)
                        navbar.classList.add("fixed-nav");
                    else navbar.classList.remove("fixed-nav");
                }
            });
        }
    }, [])

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white z-10 transition-shadow ease-in-out duration-200" id="navbar">
                {formNotice && <FormNotice onCancel={(e) => setFormNotice(false)} />}

                <div className="container flex flex-wrap justify-between items-center mx-auto px-2 sm:px-4 py-2">

                    <Link href="/" className="flex items-center cursor-pointer">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap cursor-pointer text-black">पौडेल परिवार</span>
                    </Link>

                    <button onClick={() => setMobileNav(!mobileNav)} type="button" className="inline-flex items-center p-2 ml-3 text-2xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <BsJustify />
                    </button>

                    {/* desktop nav */}
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">

                            {routes.map(route => {
                                return <li key={route.path} data-active={router.pathname == route.path} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">
                                    <Link href={route.path}>{route.name}</Link>
                                </li>
                            })}
                        </ul>
                    </div>

                    {/* mobile nav */}
                    {mobileNav &&
                        <div className="md:hidden fixed top-0 left-0 w-screen h-screen z-50 bg-gray-200 grid place-items-center">
                            <div className="flex flex-col">
                                <p className="text-center">
                                    <BsX className="mx-auto text-5xl" onClick={() => setMobileNav(false)} />
                                </p>
                                {routes.map(route => {
                                    return <li key={route.path} onClick={() => setMobileNav(false)} data-active={router.pathname == route.path} className="block text-3xl text-center py-8 pr-4 pl-3 text-gray-700">
                                        <Link href={route.path} >{route.name}</Link>
                                    </li>
                                })}
                            </div>
                        </div>
                    }

                </div>
            </nav>

        </>
    )
}