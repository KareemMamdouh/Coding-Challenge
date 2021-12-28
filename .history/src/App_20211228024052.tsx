import React ,{useEffect,useState}from 'react';
import logo from './logo.svg';
import './App.css';
interface IState {
  items: [any];
  total_count:number;
  incomplete_results:true
}
function App() {
  const [state,setState]=useState<IState|null>(null)
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
            <div className='card'>
            <div className='avatar'>
{/* <img src={} alt=""/> */}
              </div>
              <div>
              {x.full_name}
              {x.description}
              </div>
            </div>
          </div>
        )
      })}</div>

    </div>
  );
}

export default App;
