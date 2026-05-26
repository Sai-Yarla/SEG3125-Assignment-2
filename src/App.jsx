import React, { useState } from 'react';
import './App.css';

function App() {
  const [view, setView] = useState('HOME');
  const [artist, setArtist] = useState('Mia');

  return (
    <div className="App">
      {/* Botanical Theme: Mandatory Noise Overlay */}
      <div className="noise-overlay"></div>

      <nav className="navbar">
        <h1 className="logo" onClick={() => { setView('HOME'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Ink & Ease</h1>
        <div className="nav-links">
          <span onClick={() => { setView('STUDIO'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Studio</span>
          <span onClick={() => { 
            if(view !== 'HOME') {
              setView('HOME');
              setTimeout(() => document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' }), 100);
            } else {
              document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}>Artists</span>
          <span onClick={() => { setView('CONNECT'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Connect</span>
        </div>
      </nav>

      <main>
        {view === 'HOME' && <HomeView setView={setView} setArtist={setArtist} />}
        {view === 'STUDIO' && <StudioView setView={setView} />}
        {view === 'CONSULTATION' && <ConsultationView setView={setView} artist={artist} />}
        {view === 'SESSION' && <SessionView setView={setView} artist={artist} />}
        {view === 'CONNECT' && <ConnectView setView={setView} />}
      </main>

      <footer className="footer">
        <p>123 Botanical Way, Ottawa, ON | 555-019-2837</p>
        <p>© 2026 Ink & Ease Studio. A sophisticated approach to permanent art.</p>
      </footer>
    </div>
  );
}

function HomeView({ setView, setArtist }) {
  return (
    <div className="home-view fade-in">
      <div className="hero">
        <h2 className="display-title">Your story, <i>natural</i> form.</h2>
        <p className="subtitle">Botanical and fine-line tattooing in a sophisticated, calm environment.</p>
        <div className="hero-buttons">
          <button className="btn-secondary" onClick={() => { document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' }); }}>
            First Time? Book Consultation
          </button>
          <button className="btn-primary" onClick={() => { document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Veterans: Reserve Session
          </button>
        </div>
      </div>

      <section id="artists" className="artists-section">
        <h3 className="section-title">Our Artists</h3>
        <div className="artists-grid">
          <div className="artist-card">
            <div className="artist-placeholder img-placeholder-1"></div>
            <h4>Mia</h4>
            <p>Fine-Line & Floral</p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn-secondary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.8rem' }} onClick={() => { setArtist('Mia'); setView('CONSULTATION'); window.scrollTo(0, 0); }}>Consultation</button>
              <button className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.8rem' }} onClick={() => { setArtist('Mia'); setView('SESSION'); window.scrollTo(0, 0); }}>Reserve Room</button>
            </div>
          </div>
          <div className="artist-card">
            <div className="artist-placeholder img-placeholder-2"></div>
            <h4>Jax</h4>
            <p>Traditional & Sleeves</p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn-secondary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.8rem' }} onClick={() => { setArtist('Jax'); setView('CONSULTATION'); window.scrollTo(0, 0); }}>Consultation</button>
              <button className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.8rem' }} onClick={() => { setArtist('Jax'); setView('SESSION'); window.scrollTo(0, 0); }}>Reserve Room</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ConsultationView({ setView, artist }) {
  const [step, setStep] = useState(1);

  return (
    <div className="consultation-view fade-in">
      {step === 1 ? (
        <div className="artist-details-split">
          <div className="portfolio-side">
            <h2 className="display-title">{artist}'s <i>Portfolio</i></h2>
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
              <p>It feels like a gentle scratching sensation. Our {artist === 'Mia' ? 'fine line' : 'traditional'} approach is designed to be as comfortable and minimally invasive as possible.</p>
            </details>
            <details>
              <summary>How do I choose a design?</summary>
              <p>We collaborate with you in our serene studio to sketch the perfect, organic piece with {artist}.</p>
            </details>
            <details>
              <summary>What is the healing process?</summary>
              <p>About 2 weeks. We provide vegan, botanical aftercare cream and thorough instructions.</p>
            </details>
            
            <div style={{ marginTop: '3rem' }}>
              <button className="btn-primary" onClick={() => setStep(2)}>Book {artist}'s Next Available Consultation</button>
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

function SessionView({ setView, artist }) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('May 30, 2026');
  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlots = artist === 'Mia' 
    ? ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']
    : ['10:00 AM', '1:00 PM', '4:00 PM'];

  const sessionLength = artist === 'Mia' ? '1 Hour' : '3 Hours';
  const depositAmount = artist === 'Mia' ? '$50.00' : '$150.00';

  const renderCalendarDays = () => {
    const days = [];
    const emptyDays = 5; // May 1st 2026 is a Friday
    for (let i = 0; i < emptyDays; i++) {
        days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let i = 1; i <= 31; i++) {
        const isSelected = selectedDate === `May ${i}, 2026`;
        days.push(
            <div 
                key={i} 
                className={`calendar-day ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedDate(`May ${i}, 2026`)}
            >
                {i}
            </div>
        );
    }
    return days;
  };

  return (
    <div className="session-view fade-in">
      {step === 1 ? (
        <div className="veteran-booking">
          <div className="artist-header">
            <h2 className="display-title">{artist}</h2>
            <p>Senior Artist Reservation</p>
            {artist === 'Jax' && (
              <p style={{ marginTop: '1.5rem', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-main)', opacity: 0.8 }}>
                Note: Jax is currently only accepting 3-hour sessions for larger traditional pieces.<br/>
                For smaller tattoos, please book a consultation with our other artists.
              </p>
            )}
            {artist === 'Mia' && (
              <p style={{ marginTop: '1.5rem', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-main)', opacity: 0.8 }}>
                Note: Reserving a session directly requires you to have finalized a sketch with Mia.<br/>
                If you have not, please book a consultation first.
              </p>
            )}
          </div>
          
          <div className="calendar-ui">
            <h3>Select Date & Time</h3>
            
            <div className="calendar-widget">
              <div className="calendar-header">
                <button className="btn-secondary" style={{padding: '0.5rem 1.5rem'}}>&larr;</button>
                <h4>May 2026</h4>
                <button className="btn-secondary" style={{padding: '0.5rem 1.5rem'}}>&rarr;</button>
              </div>
              <div className="calendar-grid">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="calendar-day-header">{day}</div>
                ))}
                {renderCalendarDays()}
              </div>
            </div>

            <div className="time-slots" style={{ display: 'grid', gridTemplateColumns: artist === 'Mia' ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
              {timeSlots.map(time => (
                <button 
                  key={time}
                  type="button"
                  className={`time-tile ${selectedTime === time ? 'active' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >{time}</button>
              ))}
            </div>
            
            <button 
              className="btn-primary" 
              disabled={!selectedTime || !selectedDate} 
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
            <p><span>Artist</span> <span>{artist}</span></p>
            <p><span>Session</span> <span>{sessionLength}</span></p>
            <p><span>Date & Time</span> <span>{selectedDate}, {selectedTime}</span></p>
            <p><span>Required Deposit</span> <span>{depositAmount}</span></p>
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
    <div className="connect-view fade-in form-container" style={{ margin: '4rem auto', maxWidth: '600px' }}>
      <h2 className="display-title">Let's <i>Connect</i></h2>
      <p style={{ marginBottom: '2rem', textAlign: 'center' }}>We'd love to hear from you. Visit us at 123 Botanical Way, or drop us a message below.</p>
      
      <form className="booking-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will get back to you soon.'); setView('HOME'); }}>
        <label>Name</label>
        <input type="text" placeholder="Your Name" required />
        
        <label>Email</label>
        <input type="email" placeholder="hello@example.com" required />
        
        <label>Message</label>
        <textarea rows="5" placeholder="How can we help you?" required></textarea>
        
        <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Send Message</button>
      </form>
    </div>
  );
}

function StudioView({ setView }) {
  return (
    <div className="studio-view fade-in form-container" style={{ margin: '4rem auto', maxWidth: '800px' }}>
      <h2 className="display-title">Our <i>Studio</i></h2>
      <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Welcome to Ink & Ease. We are located at 123 Botanical Way,Ottawa, ON. 
        Our space is designed to be a serene and welcoming environment, inspired by nature and tranquility, giving you a relaxing space to experience permanent art.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2.5rem' }}>
        <div style={{ height: '300px', backgroundColor: 'var(--surface-clay)', borderRadius: '8px' }}></div>
        <div style={{ height: '300px', backgroundColor: 'var(--surface-light-clay)', borderRadius: '8px' }}></div>
      </div>
      <div style={{ clear: 'both', textAlign: 'center', marginTop: '3rem' }}>
        <button className="btn-secondary" onClick={() => setView('CONSULTATION')}>Book a Studio Tour or Consultation</button>
      </div>
    </div>
  );
}

export default App;
