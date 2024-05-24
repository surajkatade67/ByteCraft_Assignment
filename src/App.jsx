
import './App.css';
import About from './Component/About';
import Footer from './Component/Footer';
import Middlie from './Component/Middlie';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Middlie/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
