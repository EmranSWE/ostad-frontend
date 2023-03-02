import logo from './logo.svg';
import './App.css';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <HomePage></HomePage>
     <Footer></Footer>
    </div>
  );
}

export default App;
