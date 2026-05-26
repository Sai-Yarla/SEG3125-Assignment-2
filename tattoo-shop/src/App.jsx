import React, { useState } from 'react';
import './App.css';

function App() {
  const [view, setView] = useState('HOME');

  return (
    <div className="App">
      {/* Botanical Theme: Mandatory Noise Overlay */}
      <div className="noise-overlay"></div>

      <nav className="navbar">
        <h1 className="logo" onClick={() => { setView('HOME'); window.scrollTo(0,0); }}>Ink & Ease</h1>
        <div className="nav-links">
          <span onClick={() => { setView('HOME'); window.scrollTo(0,0); }}>Studio</span>
          <span onClick={() => { 
            setView('HOME'); 
            setTimeout(() => document.getElementById('artists-section')?.scrollIntoView({behavior: 'smooth'}), 50); 
          }}>Artists</span>
          <span onClick={() => { setView('CONNECT'); window.scrollTo(0,0); }}>Connect</span>
        </div>
      </nav>

      <main>
        {view === 'HOME' && <HomeView setView={setView} />}
        {view === 'CONSULTATION' && <ConsultationView setView={setView} />}
        {view === 'SESSION' && <SessionView setView={setView} />}
        {view === 'CONNECT' && <ConnectView setView={setView} />}
      </main>

      <footer className="footer">
        <p>123 Botanical Way, Ottawa, ON | 555-019-2837</p>
        <p>© 2026 Ink & Ease Studio. A sophisticated approach to permanent art.</p>
      </footer>
    </div>
  );
}

function HomeView({ setView }) {
  return (
    <div className="home-view fade-in">
      <div className="hero">
        <h2 className="display-title">Your story, <i>natural</i> form.</h2>
        <p className="subtitle">Botanical and fine-line tattooing in a sophisticated, calm environment.</p>
        <div className="hero-buttons">
          <button className="btn-secondary" onClick={() => setView('CONSULTATION')}>
            First Time? Book Consultation
          </button>
          <button className="btn-primary" onClick={() => setView('SESSION')}>
            Veterans: Reserve Session
          </button>
        </div>
      </div>

      <section id="artists-section" className="artists-section">
        <h3 className="section-title">Our Artists</h3>
        <div className="artists-grid">
          <div className="artist-card" onClick={() => setView('CONSULTATION')}>
            <div className="artist-placeholder img-placeholder-1"></div>
            <h4>Mia</h4>
            <p>Fine-Line & Floral</p>
          </div>
          <div className="artist-card" onClick={() => setView('SESSION')}>
            <div className="artist-placeholder img-placeholder-2"></div>
            <h4>Jax</h4>
            <p>Traditional & Sleeves</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ConsultationView({ setView }) {
  const [step, setStep] = useState(1);

  return (
    <div className="consultation-view fade-in">
      {step === 1 ? (
        <div className="artist-details-split">
          <div className="portfolio-side">
            <h2 className="display-title">Mia's <i>Portfolio</i></h2>
            <div className="masonry-grid">
              <div className="masonry-item"></div>
              <div className="masonry-item"></div>
              <div className="masonry-item"></div>
              <div className="masonry-item"></div>
            </div>
          </div>
          <div className="faq-side">
            <h2 className="display-title">First <i>time?</i></h2>
            <details open>
              <summary>Does it hurt?</summary>
              <p>It feels like a gentle scratching sensation. Our fine line approach is designed to be as comfortable and minimally invasive as possible.</p>
            </details>
            <details>
              <summary>How do I choose a design?</summary>
              <p>We collaborate with you in our serene studio to sketch the perfect, organic piece.</p>
            </details>
            <details>
              <summary>What is the healing process?</summary>
              <p>About 2 weeks. We provide vegan, botanical aftercare cream and thorough instructions.</p>
            </details>
            
            <div style={{ marginTop: '3rem' }}>
              <button className="btn-primary" onClick={() => setStep(2)}>Book Free Consultation</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <h2 className="section-title">Reserve a Consultation</h2>
          <form className="booking-form" onSubmit={(e) => { e.preventDefault(); alert('Consultation Requested! We will reach out shortly.'); setView('HOME'); }}>
            <label>Select Date</label>
            <input type="date" required />
            
            <label>Meeting Format</label>
            <select required>
              <option>In-Studio</option>
              <option>Virtual (Zoom)</option>
            </select>

            <label>Share your vision</label>
            <textarea rows="4" placeholder="I'm thinking of a sage leaf on my inner arm..." required></textarea>
            
            <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Confirm Request</button>
          </form>
        </div>
      )}
    </div>
  );
}

function SessionView({ setView }) {
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="session-view fade-in">
      {step === 1 ? (
        <div className="veteran-booking">
          <div className="artist-header">
            <h2 className="display-title">Jax</h2>
            <p>Senior Artist Reservation</p>
          </div>
          
          <div className="calendar-ui">
            <h3>Select a 3-Hour Block</h3>
            <div className="calendar-placeholder">
              <span>May 28</span>
              <span>May 29</span>
              <span className="selected">May 30</span>
              <span>May 31</span>
            </div>
            <div className="time-slots">
              <button 
                type="button"
                className={`time-tile ${selectedTime === '10:00 AM' ? 'active' : ''}`}
                onClick={() => setSelectedTime('10:00 AM')}
              >10:00 AM</button>
              <button 
                type="button"
                className={`time-tile ${selectedTime === '1:00 PM' ? 'active' : ''}`}
                onClick={() => setSelectedTime('1:00 PM')}
              >1:00 PM</button>
              <button 
                type="button"
                className={`time-tile ${selectedTime === '4:00 PM' ? 'active' : ''}`}
                onClick={() => setSelectedTime('4:00 PM')}
              >4:00 PM</button>
            </div>
            
            <button 
              className="btn-primary" 
              disabled={!selectedTime} 
              onClick={() => setStep(2)}
              style={{ width: '100%' }}
            >
              Proceed to Deposit
            </button>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <h2 className="section-title">Session Deposit</h2>
          <div className="receipt">
            <p><span>Artist</span> <span>Jax</span></p>
            <p><span>Session</span> <span>3 Hours</span></p>
            <p><span>Date & Time</span> <span>May 30, {selectedTime}</span></p>
            <p><span>Required Deposit</span> <span>$150.00</span></p>
          </div>
          
          <form className="booking-form" onSubmit={(e) => { e.preventDefault(); alert('Deposit Paid! Session Confirmed.'); setView('HOME'); }}>
            <label>Credit Card Number</label>
            <input type="text" placeholder="0000 0000 0000 0000" required />
            <div className="card-details">
              <div>
                <label>Expiry</label>
                <input type="text" placeholder="MM/YY" required />
              </div>
              <div>
                <label>CVC</label>
                <input type="text" placeholder="123" required />
              </div>
            </div>
            <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Finalize Reservation</button>
          </form>
        </div>
      )}
    </div>
  );
}

function ConnectView({ setView }) {
  return (
    <div className="fade-in">
      <div className="form-container" style={{ marginTop: '2rem' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Let's <i>Connect</i></h2>
        <div style={{ textAlign: 'center', marginBottom: '3rem', opacity: 0.8, lineHeight: 1.8 }}>
          <p>123 Botanical Way, Ottawa, ON</p>
          <p>hello@inkandease.com</p>
          <p>555-019-2837</p>
        </div>
        
        <form className="booking-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will reach out shortly.'); setView('HOME'); }}>
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />
          
          <label>Email</label>
          <input type="email" placeholder="hello@example.com" required />
          
          <label>Message</label>
          <textarea rows="5" placeholder="How can we help you?" required></textarea>
          
          <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default App;
