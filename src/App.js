import './App.css';
import Customer from './Components/Customer';
import { Feature } from './Components/Feature';
import Hero from './Components/Hero';
import Items from './Components/Items';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Static from './Components/Static';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Search></Search>
      <Navbar></Navbar>
      <Hero></Hero>
      <Items></Items>
      <Feature></Feature>
      <Static></Static>
      <Customer></Customer>
      <Footer></Footer>
    </div>
  );
}

export default App;
