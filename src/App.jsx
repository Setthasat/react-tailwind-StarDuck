import Navbar from "./components/Navbar"
import Hero from "./components/Hero" 
import Topsell from "./components/Topsell"
import HeadCard from "./components/HeadCard"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"

function App() {
  document.title = "StarDuck Store"
  return (
    <div>
        <Hero />
        <SearchBar />
        <HeadCard />
        <Topsell />
        <Footer />
    </div>
  )
}

export default App
