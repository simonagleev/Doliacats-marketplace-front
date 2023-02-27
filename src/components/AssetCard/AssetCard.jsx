import { useState } from 'react'
import { Link } from 'react-router-dom'
import './assetCard.css'

const AssetCard = ({ image1, image2, name, id, collection, tags, collectionId }) => {

    const [bgOpacity, setBgOpacity] = useState(0)
    const [infoBgColor, setInfoBgColor] = useState('#383186')

    const mouseEnterHandler = () => {
        setBgOpacity(1)
        setInfoBgColor('#110E31')
    }
    const mouseLeaveHandler = () => {
        setBgOpacity(0)
        setInfoBgColor('#383186')
    }

    const clickHandler = () => {

    }

    return (
        <>
            <Link to={`${id}` } >
                <div
                    className="asset-card-container"
                    id={id}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onClick={clickHandler}
                >
                    <img className="asset-card-bg" src={image1} style={{ opacity: `${1 - bgOpacity}` }} alt="bg" loading="lazy" />
                    <img className="asset-card-bg" src={image2} style={{ opacity: `${bgOpacity}` }} alt="bg" loading="lazy" />
                    <div className='asset-card-info-container' style={{ backgroundColor: `${infoBgColor}` }}>
                        <div className='asset-card-tags-container'>
                            {
                                tags.map(tag => {
                                    return (
                                        <p
                                            className='asset-card-tag'
                                            style={{
                                                color:
                                                    `${tag === 'battle' ? '#FF007D' :
                                                        tag === 'hat' ? '#AC7AFF' :
                                                            tag === 'weapon' ? '#FF4500' :
                                                                tag === 'armor' ? 'aqua' :
                                                                    tag === 'cosmetic' ? '#00FF00' :
                                                                        '#FFF8DC'}`
                                            }}
                                            key={tags.indexOf(tag)}>{tag}
                                        </p>
                                    )
                                })
                            }
                        </div>
                        <div className='asset-card-text-container'>
                            <p className='asset-card-name'>{name}</p>
                            <p className='asset-card-collection'>{collection}</p>
                        </div>
                    </div>
                </div>
            </Link>

        </>

    )
}

export default AssetCard