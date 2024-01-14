import '../../App.css';
import { useNavigate } from 'react-router-dom';
function Card(props) {

const nevigate = useNavigate()

  const { id, title, description, thumbnail } = props
  return ( 

        <div class="col-3" onClick={()=>nevigate(`/details/${id}`)}>
          <img src={thumbnail} ></img><br></br>
          <h4>{title}</h4>
          <p>{description}</p>
          <button>Details</button>
        </div>

  )
}

export default Card;