
import { useEffect, useState } from 'react';
import Welcome from './pages/Welcome/Welcome';
import BirthdayLetter from './pages/BirthdayLetter/BirthdayLetter';
import OurStory from './pages/OurStory/OurStory';
import Proposal from './pages/Proposal/Proposal';
import Celebration from './pages/Celebration/Celebration';
import './App.css';

function getCurrentPage() {
  const page = window.location.hash.replace('#', '');
  const validPages = [
    'welcome',
    'letter',
    'story',
    'proposal',
    'celebration',
  ];

  return validPages.includes(page) ? page : 'welcome';
}

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPage(getCurrentPage());
      setSubmissionError('');
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

  const handleResponse = async (answer) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionError('');

    try {
      const response = await fetch('/api/response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          response: answer,
          website: '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'We could not send your response.'
        );
      }

      if (answer === 'yes') {
        navigateTo('celebration');
      } else if (answer === 'time') {
        window.dispatchEvent(
          new CustomEvent('faith-proposal-time-response')
        );
      }
    } catch (error) {
      console.error('Proposal response error:', error);

      setSubmissionError(
        error.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
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
        <>
          <Proposal
            onYes={() => handleResponse('yes')}
            onTime={() => handleResponse('time')}
            isSubmitting={isSubmitting}
          />

          {submissionError && (
            <div
              role="alert"
              style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'calc(100% - 32px)',
                maxWidth: '420px',
                padding: '14px 18px',
                background: '#641b30',
                color: '#fff',
                borderRadius: '8px',
                textAlign: 'center',
                zIndex: 1000,
                fontSize: '14px',
              }}
            >
              {submissionError}
            </div>
          )}
        </>
      )}

      {currentPage === 'celebration' && <Celebration />}
    </div>
  );
}

export default App;
