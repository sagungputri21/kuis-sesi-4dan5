import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import JoinCard from './components/Cards/JoinMeetCard';

function App() {
  return (
    <div className="App">
      <Layout>
        <JoinCard/> 
      </Layout>
    </div>
  );
}

export default App;
