import { useLocation } from 'wouter'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [location] = useLocation()

  return (
    <>
      <Header location={location} />
      <main>{children}</main>
      <Footer location={location} />
    </>
  )
}

export default Layout
