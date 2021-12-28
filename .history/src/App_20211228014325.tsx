import React ,{useEffect,useState}from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state,setState]=useState([])
  useEffect(() => {
    fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
   
  }, [])
  return (
    <div className="App">
      <div></div>

    </div>
  );
}

export default App;
