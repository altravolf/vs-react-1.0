import './App.scss'
import AboutUs from "./components/AboutUs/AboutUs"
import Carousel from "./components/Carousel/Carousel"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Courses from "./components/Courses/Courses"

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <AboutUs />
      <Courses />
      <Footer />
    </>
  )
}

export default App
