import './App.css';
//import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './routes/Home/Home';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
