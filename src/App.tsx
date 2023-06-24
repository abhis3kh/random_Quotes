import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [quote, setQuote] = useState('');
  const [quotes, setQuotes] = useState([{ id: '', quote: '', quotedBy: '' }]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/quotes');
        setQuotes(response.data);
      } catch (error) {
        console.error('Error occurred while fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const getQuote = () => {
    const randomNumber = Math.ceil(Math.random() * 9);
    setQuote(
      `${quotes[randomNumber].quote} ~ ${quotes[randomNumber].quotedBy} `
    );
  };
  return (
    <>
      <div className='container'>
        <h1 className='heading'>
          <span className='letter-q'>Q</span>uotes
        </h1>

        {/* For Future - Increase a forward and backward button so one can view the previous Quote as well.  */}
        <p className='quote'>
          {quote === '' ? 'Quote will be displayed here Once clicked' : quote}{' '}
        </p>
        <label htmlFor='generateButton'>
          <button onClick={getQuote}> Generate Quote </button>
        </label>
      </div>
    </>
  );
}

export default App;
