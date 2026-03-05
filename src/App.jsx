import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className='inter-font flex flex-col min-h-screen'>
        <NavBar/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App
