import Slider from "../../components/slider+cat/slider";
import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom";
import '../../App.css';
import Card from "../../components/card"
import Navbar from "../../components/navbar";
// import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {

    // const navigate = useNavigate();
    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts();

    }, []);



    const getProducts = () => {
       fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then(res => setProducts(res.products));

    };

// const handleCardClick = (Id)=>{
//     navigate(`/details/${Id}`)
// };


    return (
        <div className="Dashboard">

{/* <Navbar /> */}
<Slider />

<div className="container-fluid">
<div className="row">
{products.map(item => {

const { title, description, images, id, thumbnail } = item
return <Card images={images} id={id} title={title} description={description} thumbnail={thumbnail} />
})}

</div>
</div>
          
        </div>
    )
}

export default Dashboard; 