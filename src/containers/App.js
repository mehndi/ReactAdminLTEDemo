import logo from '../logo.svg';
import './App.css';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Dashboard from '../components/Dashboard/Dashboard';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
