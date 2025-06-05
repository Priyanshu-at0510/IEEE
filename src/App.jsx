import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import PositionHolderCard from './components/PositionHolderCard';
import OtherMembersList from './components/OtherMembersList';
import ContactsPage from './pages/ContactsPage';
import raviShankar from './assets/Ravisir.jpg';

// Import images

import priyanshuSingh from "./assets/priyanshu_singh.jpeg"
import lakshyaAditya from "./assets/lakshyaAditya.jpeg";
import satyaSanket from "./assets/satya_sanket.jpeg"
import nitinKumar from "./assets/nitin_kumar.jpeg"
import arpitKushwaha from "./assets/arpitKushwaha.jpeg"
import EventsPage from './pages/EventsPage';


function App() {
  const positionHolders = [
       {
      post: 'Faculty Advisor',
      name: 'Dr. Ravi Shanker',
      vision: 'To guide and mentor the IEEE Student Chapter, fostering a culture of innovation, collaboration, and excellence in technology.',  
      imageUrl: raviShankar
       },{
      post: 'Chair',
      name: 'PRIYANHSU SINGH',
      vision: 'To lead an inclusive and innovative IEEE chapter that transforms students into impactful engineers of tomorrow.',
      imageUrl: priyanshuSingh
    },
    {
      post: 'Vice Chair',
      name: 'Lakshyaditya Bhatnagar',
      vision: "Leading initiatives that align our chapter with the future of IoT and Robotics — building a platform where innovation meets impact and future engineers become tech leaders.",
      imageUrl: lakshyaAditya
    },
    {
      post: 'Secretary',
      name: 'Arpit Kushwaha',
      vision: 'Our aim is to make the IEEE Student Chapter a hub of innovation, where every student can explore, create, and share technology that makes a difference. Our vision is a community that inspires curiosity, fosters bold ideas, and drives real-world impact.',
      imageUrl: arpitKushwaha
    },
    {
      post: 'Treasurer',
      name: 'Satya Sanket ',
      vision: "Leadership is not just about big speeches — it is about accountability, integrity, and trust. As Treasurer, I carry that responsibility with pride and precision.",
      imageUrl: satyaSanket
    },
    
    {
      post: 'Webmaster',
      name: 'Nitin Kumar Patwa ',
      vision: 
      ' Crafting a digital hub where technology, creativity, and collaboration converge — empowering our IEEE chapter to lead the future of IoT, Robotics, and beyond. As Webmaster, I am committed to building a platform that turns ideas into action and students into innovators."',
      imageUrl: nitinKumar
    }
  ];




  const otherMembers = [
    'Ayush Kumar Sinha', 'Saurav Ananad','Pranjal Panday','Agniv Saha', 
    'Ujjwal Kumar'
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <header>
                  <h1>IEEE STUDENT CHAPTER - IIIT RANCHI</h1>
                  <p className="tagline">Collaboration is Our Code. Innovation is Our Mission.</p>
                </header>
                
                <section className="position-holders">
                  <h2>Leadership Team</h2>
                  <div className="position-holders-list">
                    {positionHolders.map((holder, index) => (
                      <PositionHolderCard 
                        key={index}
                        post={holder.post}
                        name={holder.name}
                        vision={holder.vision}
                        imageUrl={holder.imageUrl}
                      />
                    ))}
                  </div>
                </section>
                
              
                  <OtherMembersList members={otherMembers} />
              
              </>
            } />
            
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactsPage />} />
          </Routes>
        </main>
        
        <footer>
          <div className="footer-content">
            <div className="social-links">
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
        
              <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/share/1EaeGyF5F5/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            </div>
            <p>Contact Us: <a href="mailto:acm_chair@iiitranchi.ac.in">IEEE_chair@iiitranchi.ac.in</a></p>
            <p>© {new Date().getFullYear()} IEEE Student Chapter - IIIT RANCHI. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;