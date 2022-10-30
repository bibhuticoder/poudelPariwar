import Navbar from './Navbar/Navbar'
// import Footer from './footer'

export default function Layout(props: any) {
  return (
    <>
      <Navbar />
      <main className='mt-20'>{props.children}</main>
      {/* <Footer /> */}
    </>
  )
}