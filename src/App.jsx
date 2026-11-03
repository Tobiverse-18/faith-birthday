
import { useEffect, useState } from 'react';
import Welcome from './pages/Welcome/Welcome';
import BirthdayLetter from './pages/BirthdayLetter/BirthdayLetter';
import OurStory from './pages/OurStory/OurStory';
import Proposal from './pages/Proposal/Proposal';
import Celebration from './pages/Celebration/Celebration';
import './App.css';

function getCurrentPage() {
  const page = window.location.hash.replace('#', '');
  const validPages = ['welcome', 'letter', 'story', 'proposal', 'celebration'];

  return validPages.includes(page) ? page : 'welcome';
}

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPage(getCurrentPage());
    };

    window.addEventListener('hashchange', handleNavigation);

    if (!window.location.hash) {
      window.location.hash = 'welcome';
    }

    return () => {
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  const navigateTo = (page) => {
    if (currentPage !== page) {
      window.location.hash = page;
    }
  };

  return (
    <div className="app">
      {currentPage === 'welcome' && (
        <Welcome onContinue={() => navigateTo('letter')} />
      )}

      {currentPage === 'letter' && (
        <BirthdayLetter onContinue={() => navigateTo('story')} />
      )}

      {currentPage === 'story' && (
        <OurStory onContinue={() => navigateTo('proposal')} />
      )}

      {currentPage === 'proposal' && (
        <Proposal onYes={() => navigateTo('celebration')} />
      )}

      {currentPage === 'celebration' && <Celebration />}
    </div>
  );
}

export default App;
