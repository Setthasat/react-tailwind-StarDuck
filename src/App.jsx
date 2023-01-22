import Navbar from "./components/Navbar"
import Hero from "./components/Hero" 
import Video from "./components/Video"
import HeadCard from "./components/HeadCard"

function App() {
  document.title = "StarBox Coffee"
  return (
    <div>
        <Hero />
        <HeadCard />
    </div>
  )
}

export default App
