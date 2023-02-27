import './homePage.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CollectionCard from '../../components/CollectionCard'
import ArrowDownIcon from '../../assets/UI/arrow-down-icon.svg'
import useStore from '../../stores/Store'

const HomePage = () => {

    const collectionsArray = useStore(state => state.collectionsArray)

    const [currentPage, setCurrentPage] = useState(0)

    console.log('home page render')


    // Event for showing more collection cards
    const getMoreCollections = () => {
        setCurrentPage(currentPage + 1)
    }

    // Search
    const [query, setQuery] = useState("")

    return (
        <div className='home-page'>
            <h1 className="home-page-header">EXPLORE GAMES COLLECTIONS</h1>
            <h3 className='home-page-sub-header'>Choose your favourite game developer</h3>
            <div className='home-page-search-container'>
                <input
                    className='home-page-search-input'
                    type="text"
                    placeholder='Game name'
                    onChange={event => setQuery(event.target.value)}
                />
            </div>
            <div className='home-page-collections-container'>
                {
                    collectionsArray
                        .filter(item => {
                            if (query === '') {
                                return item
                            } else if (item.name.toLowerCase().trim().includes(query.trim().toLowerCase())) {
                                return item
                            }
                        })
                        .slice(0, (currentPage * 8) + 8)   /* Here change the number of games displayed on one page */
                        .map((item) => {
                            return (
                                <Link to={`/shop/${item.id}`} key={item.id}>
                                    <CollectionCard
                                        key={item.id}
                                        name={item.name}
                                        backgroundPic={item.backgroundPicture}
                                        assetsNumber={item.assetsNumber}
                                        avatar={item.avatar}
                                        description={item.description}
                                    />
                                </Link>

                            )
                        })
                }
            </div>
            <div className='home-page-more-btn'>
                <p onClick={getMoreCollections} className='home-page-more-text'>More games</p>
                <img className='home-page-more-arrow' src={ArrowDownIcon} alt="arrow" />
            </div>

        </div>
    )
}

export default React.memo(HomePage)