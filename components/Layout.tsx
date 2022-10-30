import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function Layout(props: any) {
  return (
    <>
      <Navbar />
      <main className='mt-2'>{props.children}</main>
      <Footer />
    </>
  )
}