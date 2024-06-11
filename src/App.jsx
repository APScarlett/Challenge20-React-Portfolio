import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Contact from './pages/contact'


function App() {
  const [count, setCount] = useState(0)

  
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home/>;
    }
    if (currentPage === 'About') {
      return <About handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio/>;
    }
    return <Contact/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
     
     <NavBar currentPage = {currentPage} handlePageChange = {handlePageChange}/>
     {renderPage()}
    </>
  )
}

export default App