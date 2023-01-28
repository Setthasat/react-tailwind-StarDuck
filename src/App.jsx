import Navbar from "./components/Navbar"
import Hero from "./components/Hero" 
import Topsell from "./components/Topsell"
import HeadCard from "./components/HeadCard"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import useStore from './store/store'

function App() {
  const darkmode = useStore((state => state.darkmode))
  document.title = "StarDuck Store"
  return (
    <div className={darkmode ? 'bg-slate-100 duration-300 h-screen relative' : 'bg-[#404040]  duration-300 h-screen relative'}>
        <Hero />
        <SearchBar />
        <HeadCard />
        <Topsell />
        <Footer />
    </div>
  )
}

export default App
