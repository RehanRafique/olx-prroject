import Header from './components/header';
import './App.css';
import Router from './config/router';
// import { Router } from './config/router';
import Dashboard from './view/dashboard';
// import Router from './config/router';
import Footer from './components/footer';
import Detail from './view/detail';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">


     <Header />

<Navbar />

<Router />   
     <br></br>
     <br></br>
     <Footer />
    </div>
  );
}

export default App;
