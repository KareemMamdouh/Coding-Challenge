import React ,{useEffect,useState}from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state,setState]=useState([])
  const [pageNumber,setPageNumber]=useState(1)
  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${pageNumber}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setState(data)
    });
  }, [])
  return (
    <div className="App">
      <div></div>

    </div>
  );
}

export default App;
