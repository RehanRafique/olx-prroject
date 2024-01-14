
import '../../App.css'
// import Navbar from '../navbar';

function Header() {
  return (
    <div className="App-header">
      <div className='header'>

        {/* <img src="https://blog.olx.com.pk/wp-content/uploads/2019/08/Blue-Logo-800x800-01.png" ></img><br/> */}
        <div className="inp">
          <img src="https://pixlok.com/wp-content/uploads/2021/04/OLX-Logo-PNG-768x768.jpg" className="img2"></img>

          <input type="text" placeholder="Pakistan" className="loc"></input>
          <input type="text" placeholder="Find Cars Mobile And More..."></input>

          <a className='sell'>SELL

          </a>
          
          <img className='sellImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMkKXd_xsJu04Vaw_pvOtxfLGW7ROFqKoFog&usqp=CAU'></img>

        </div>
      </div>
   

  

    </div>

  )
}

export default Header;