import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner';
import Packages from './Components/Packages/Packages';
import Pratice from './Components/Pratice/Pratice';
import Teacher from './Components/Teacher/Teacher';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Packages />
      <Pratice />
      <Teacher />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
