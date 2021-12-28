import React ,{useEffect,useState}from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state,setState]=useState<object>(null)
  const [pageNumber,setPageNumber]=useState(1)
  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${pageNumber}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setState(data)
    });
  }, [pageNumber])
  return (
    <div className="App">
      <div>{state&&state.items&&state.items.map((x,i)=>{
        return(
          <div key={`${i}-items`}>
            sss
          </div>
        )
      })}</div>

    </div>
  );
}

export default App;
