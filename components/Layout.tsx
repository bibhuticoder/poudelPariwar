import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { useEffect, useRef } from 'react'

export default function Layout(props: any) {
  const topPadding = useRef(120);  // default

  useEffect(() => {
    let navbar = document.getElementById("navbar");
    if (navbar) topPadding.current = Math.floor(navbar.getBoundingClientRect().height);
  }, []);

  return (
    <>
      <Navbar />
      <main className={`mt-2`} style={{ paddingTop: `${topPadding.current}px` }}>
        {props.children}
      </main>
      <Footer />
    </>
  )
}