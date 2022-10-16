
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[quote, setQuote] = useState("");
  const[author, setAuthor] = useState("");
  
  useEffect( () => {
      fetchQuotes();
      },[])

  const fetchQuotes = async() =>{
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author)
  }
   
  return (<div>
    <div className="App">
      <p>Quote: {quote}</p>
      </div>
      <div className='App'>
         <p className='author'>Author: {author}</p>
      </div>
     
    <div className='btn'>
      <button className='button' onClick={fetchQuotes}>New quote</button>
    </div>
   </div>
  );
  }

export default App;
