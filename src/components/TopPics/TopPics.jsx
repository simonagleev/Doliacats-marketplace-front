import "./topPics.css"
import useStore from '../../stores/Store'
import AssetCard from "../AssetCard"

const TopPics = ({ id }) => {
    const collectionAssets = useStore(state => (state.collectionsArray.length !== 0 ? state.collectionsArray[id - 1]["assets"] : []))

    return (
        <div className="top-pics">
            <h2 className="top-pics-header">Top Pics</h2>
            <div className="top-pics-slider">
                {
                    collectionAssets
                        .filter(item => item !== null)
                        .map(item => {
                            return (
                                <AssetCard
                                    key={item.id}
                                    id={item.id}
                                    image1={item.picture1}
                                    image2={item.picture2}
                                    name={item.name}
                                    collection={item.collection}
                                    tags={item.tags}
                                />
                            )
                        })

                }
            </div>

        </div>
    )
}

export default TopPics