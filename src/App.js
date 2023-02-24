import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import JoinCard from './components/Cards/JoinMeetCard';
import MembersSection from './components/Section/MembersSection';
import NextMeetSection from './components/Section/NextMeetSection';
import AboutMeetupSection from './components/Section/AboutMeetupSection';
import PastMeetSection from './components/Section/PastMeetSection';
import  data from "../../data/pastMeet.json";

function App() {
  return (
    <div className="App bg-gray-100">
      <Layout>
        <JoinCard/> 
        <NextMeetSection/>
        <AboutMeetupSection/>
        <MembersSection/>
        <PastMeetSection data={data}/>
      </Layout>
      
    </div>
  );
}

export default App;
