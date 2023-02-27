import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage/HomePage'
import ShoppingPage from './pages/ShoppingPage/ShoppingPage'
import Page404 from './pages/Page404/Page404'
import AssetPage from './pages/AssetPage/AssetPage'
import useStore from './stores/Store'

function App() {
  const collections = useStore(state => state.collectionsArray)
  const fetchCollections = useStore(state => state.fetchCollections)

  // Load the collection cards one time when the component has been loaded
  useEffect(() => {
    fetchCollections()
  }, [])

  return (
    <div className="App">
      <Navigation />
      <div className='container-main'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/shop/:id' element={<ShoppingPage />} />
          <Route path='/shop/:id/:id' element={<AssetPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
