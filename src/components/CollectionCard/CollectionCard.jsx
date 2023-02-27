import './collectionCard.css'

const CollectionCard = ({ name, backgroundPic, avatar, assetsNumber, description }) => {

    return (
        <div className="collection-card-container" >
            <img className="collection-card-bg" src={backgroundPic} alt="bg" loading="lazy"/>
            <div className='collection-card-info-container'>
                <img className="collection-card-avatar" src={avatar} alt="avatar" loading="lazy"/>
                <div className='collection-card-info'>
                    <div>
                        <h2 className='collection-card-name'>{name}</h2>
                        <p className='collection-card-number'>{assetsNumber} assets</p>
                    </div>
                    <p className='collection-card-description'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard