import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import HomePage from './components/HomePage';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header/>
     <ProductDetail/>
      <Footer/>
    </div>
  );
}

export default App;
