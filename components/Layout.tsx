import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { useEffect } from 'react'

export default function Layout(props: any) {
  let topPadding = 120; // default
  useEffect(() => {
    let navbar = document.getElementById("navbar");
    if (navbar) topPadding = Math.floor(navbar.getBoundingClientRect().height);
  }, []);

  return (
    <>
      <Navbar />
      <main className={`mt-2 pt-[${topPadding}px]`}>{props.children}</main>
      <Footer />
    </>
  )
}