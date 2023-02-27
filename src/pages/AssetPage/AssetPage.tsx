import "./AssetPage.css"
import React from "react"
import { useParams, useLocation } from 'react-router-dom'
import TopPics from "../../components/TopPics"

const AssetPage = () => {

    const { id } = useParams()
    console.log(useParams())
    return (
        <div className="asset-page">
            <h1 className="asset-heading">NFT details</h1>
            <div className="asset-main-container">
                <div className="asset-main-scene-container">asd</div>
                <div className="asset-main-info-container">12</div>
            </div>
        </div>
    )
}

export default AssetPage