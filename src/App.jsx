import Navbar from "./components/Navbar"
import Hero from "./components/Hero" 

import HeadCard from "./components/HeadCard"
import SearchBar from "./components/SearchBar"

function App() {
  document.title = "StarDuck Store"
  return (
    <div>
        <Hero />
        <SearchBar />
        <HeadCard />
    </div>
  )
}

export default App
