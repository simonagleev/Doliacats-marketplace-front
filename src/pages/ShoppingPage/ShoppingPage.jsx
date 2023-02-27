import './shoppingPage.css'
import { useParams } from 'react-router-dom'
import { useState, useRef } from 'react'

import AssetCard from '../../components/AssetCard'
import useStore from '../../stores/Store'
import TopPics from '../../components/TopPics'
import siteIcon from "../../assets/shop-page/collection-website-icon.svg"
import twitterIcon from "../../assets/shop-page/collection-twitter-icon.svg"
import discordIcon from "../../assets/shop-page/collection-discord-icon.svg"

const ShoppingPage = ({ }) => {
    const { id } = useParams()
    const collectionAssets = useStore(state => (state.collectionsArray.length !== 0 ? state.collectionsArray[id - 1]["assets"] : []))
    const currentCollection = useStore(state => (state.collectionsArray.length !== 0 ? state.collectionsArray[id - 1] : {}))

    // Filter values
    const [filterName, setFilterName] = useState('')
    const [filterTags, setfilterTags] = useState([])
    const [filterMinPrice, setFilterMinPrice] = useState(0)
    const [filterMaxPrice, setFilterMaxPrice] = useState(1000000)
    const [filterChains, setFilterChains] = useState([])

    const minInputRef = useRef()
    const maxInputRef = useRef()


    const filterAssets = () => {
        const filteredAssets = collectionAssets.filter(asset => (
            asset.name.toLowerCase().includes(filterName.toLowerCase()) &&
            filterTags.every(i => asset.tags.indexOf(i) >= 0) && // think through register, everything needs to be in lowercase
            asset.priceEther <= filterMaxPrice &&
            asset.priceEther >= filterMinPrice &&
            (filterChains.length > 0 ? filterChains.includes(asset.chain.toLowerCase()) : true)
        ))
        return filteredAssets
    }

    // Filter actions
    const inputNameHandler = (e) => {
        setFilterName(e.target.value)
        console.log('change')
    }

    const tagClickHandler = (e) => {
        setfilterTags([e.target.innerText])
    }

    const tagClearHandler = (e) => {  // Currently on the header
        setfilterTags([])
    }

    const handleMinPriceInput = (e) => { //Not finished, need to make a link to the slider
        maxInputRef.current.value <= minInputRef.current.value ?
            maxInputRef.current.value = Number(minInputRef.current.value) + 1 :
            null

        setFilterMinPrice(minInputRef.current.value)

    }

    const handleMaxPriceInput = (e) => { //Not finished, need to make a link to the slider
        minInputRef.current.value >= maxInputRef.current.value ?
            minInputRef.current.value = Number(maxInputRef.current.value - 0.01)
            : null

        setFilterMaxPrice(maxInputRef.current.value)
    }



    const countAssetsQuantity = () => {
        let count = 0
        for (let i = 0; i < collectionAssets.length; i++) {
            count += collectionAssets[i].quantity
        }

        return count
    }

    return (
        <div className='shopping-page'>
            <div className='shopping-page-description'>
                <img className='shopping-page-description-bg' src={currentCollection.backgroundPicture} alt="bg" loading="lazy" />
                <div className='shopping-page-description-info'>
                    <div className='shopping-page-description-profile'>
                        <div className='shopping-page-description-avatar'>
                            <img src={currentCollection.avatar} alt="avatar" loading="lazy" />
                        </div>
                        <div className='shopping-page-description-name'>
                            {currentCollection.name}
                        </div>
                        <div className='shopping-page-description-number'>
                            {currentCollection.assetsNumber} assets
                        </div>
                    </div>
                    <div className='shopping-page-description-about'>
                        <div className='shopping-page-description-about-left'>
                            <h2 className='shopping-page-description-about-header'>About</h2>
                            <p className='shopping-page-description-about-text'>{currentCollection.description}</p>
                        </div>
                        <div className='shopping-page-description-social'>
                            <a className='collection-social-link' href="#">
                                <img className='shopping-page-social-icon' src={siteIcon} alt="site" loading="lazy" />
                            </a>
                            <a className='collection-social-link' href="#">
                                <img className='shopping-page-social-icon' src={twitterIcon} alt="twitter" loading="lazy" />
                            </a>
                            <a className='collection-social-link' href="#">
                                <img className='shopping-page-social-icon' src={discordIcon} alt="discord" loading="lazy" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <TopPics id={id} />
            <div className='announce-container'>
                <p className='announce-left'>announce</p>
                <p className='announce-text'>buy any of this and get x3 later!!!!!!!!!!! blablabllaa alallal elfnelfnlirnlenrlgnq NOOOOW!!!</p>
            </div>
            <div className='shopping-assets-container'>
                <div className='shopping-assets-filter'>
                    <h2 className='filter-heading'>Filter</h2>
                    <input
                        onChange={inputNameHandler}
                        className='filter-name-input'
                        type="text"
                        placeholder='Start typing a name'
                    />

                    <h2 onClick={tagClearHandler} className='filter-heading'>Tags</h2>
                    <div className='filter-tags-container'>
                        <p onClick={tagClickHandler} style={{ color: '#ff007d' }} className='filter-tag'>Battle</p>
                        <p onClick={tagClickHandler} style={{ color: '#f098c4' }} className='filter-tag'>Sword</p>
                        <p onClick={tagClickHandler} style={{ color: '#FF4500' }} className='filter-tag'>Weapon</p>
                        <p onClick={tagClickHandler} style={{ color: '#f098c4' }} className='filter-tag'>Gun</p>
                        <p onClick={tagClickHandler} style={{ color: '#AC7AFF' }} className='filter-tag'>Hat</p>
                        <p onClick={tagClickHandler} style={{ color: '#00FF00' }} className='filter-tag'>Cosmetics</p>
                    </div>

                    <div className='filter-price-container'>
                        <h2 className='filter-heading'>Price</h2>
                        <form className="filter-price-form" action="">
                            <div className="filter-price-inputs-container">
                                <input
                                    onChange={handleMinPriceInput}
                                    className="filter-price-input"
                                    ref={minInputRef}
                                    id="min-input"
                                    type="number"
                                    defaultValue="0"
                                    step="0.01"
                                    min="0.001"
                                />
                                <input
                                    onChange={handleMaxPriceInput}
                                    className="filter-price-input"
                                    ref={maxInputRef}
                                    id="max-input"
                                    type="number"
                                    defaultValue="10000"
                                    step="0.01"
                                    min="0.01"
                                />
                            </div>

                            <div className="filter-price-slider">
                                <div className="filter-price-slider-status">
                                    <div className="filter-price-slider-progress"></div>
                                </div>
                                <div className="filter-price-slider-inputs-container">
                                    <input
                                        className="filter-price-slider-input"
                                        id="min-range"
                                        min="0"
                                        max="10000"
                                        step="1"
                                        defaultValue="0"
                                        type="range"
                                    />
                                    <input
                                        className="filter-price-slider-input"
                                        id="max-range"
                                        min="0"
                                        max="10000"
                                        step="1"
                                        defaultValue="10000"
                                        type="range"
                                    />
                                </div>
                            </div>
                        </form>

                    </div>

                    <h2 className='filter-heading'>Chains</h2>
                    <div className='filter-chains-container' style={{display: 'none'}}>
                        <div className='filter-chain'>
                            <input className='filter-chain-input' type="radio" name="near" id="near" value='near' />
                            <label className='filter-chain-label' htmlFor="near">Near</label>
                            <p className='filter-chain-number'>116</p>
                        </div>

                        <div className='filter-chain'>
                            <input className='filter-chain-input' type="radio" name="chainlink" id="chainlink" value='chainlink' />
                            <label className='filter-chain-label' htmlFor="chainlink">chainlink</label>
                            <p className='filter-chain-number'>116</p>
                        </div>

                        <div className='filter-chain'>
                            <input className='filter-chain-input' type="radio" name="solana" id="solana" value='solana' />
                            <label className='filter-chain-label' htmlFor="solana">solana</label>
                            <p className='filter-chain-number'>116</p>
                        </div>
                        <div className='filter-chain'>
                            <input className='filter-chain-input' type="radio" name="polygon" id="polygon" value='polygon' />
                            <label className='filter-chain-label' htmlFor="polygon">polygon</label>
                            <p className='filter-chain-number'>116</p>
                        </div>

                    </div>

                </div>

                <div className='shopping-assets-right-part'>
                    <div className='shopping-assets-options-container'>
                        <p ><span className='shopping-assetts-big-span'>{countAssetsQuantity()}</span>items</p>
                        <p className='shopping-assets-options'>all</p>
                        <p className='shopping-assets-options'>for sale</p>
                        <p className='shopping-assets-options'>not for sale</p>
                        <p className='shopping-assets-options'>buy now</p>
                    </div>
                    <div className='shopping-assets'>
                        {
                            filterAssets().map(item => {
                                return (
                                    <AssetCard
                                        key={item.id}
                                        id={item.id}
                                        image1={item.picture1}
                                        image2={item.picture2}
                                        name={item.name}
                                        collection={item.collection}
                                        tags={item.tags}
                                        collectionId={id}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ShoppingPage