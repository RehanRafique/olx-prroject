import "../../App.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FbImageLibrary from "react-fb-image-grid"

function Detail() {

    const { Id } = useParams();
    const [cardDetail, setCardDetail] = useState([])

    useEffect(function () {
        getCardDataFromAPI();
    },);



    const getCardDataFromAPI = () => {
        fetch(`https://dummyjson.com/products/${Id}`)
            .then((res) => res.json())
            .then((res) => setCardDetail(res));
    };
console.log(cardDetail)


    return (
        <div className="mainDiv">

            <div style={{ width: '50%' }} className="detailImg">
                <FbImageLibrary images={cardDetail.images} />
            </div>


            <div className="details">

                <h4><span>Title : </span>{ cardDetail.title}</h4>
                <h4><span>Price : Rs </span>{cardDetail.price }</h4>
                <h4><span>Description : </span>{cardDetail.description}</h4>
            </div>

        </div>

    )
}

export default Detail;