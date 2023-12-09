import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const MainLayout = () => {
  return (
    <>
        <Header></Header>
        <main> <Outlet /></main>
        <Footer></Footer>
    </>
  )
}

export default MainLayout