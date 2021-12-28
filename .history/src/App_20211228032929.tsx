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
  const today = new Date()
  const priorDate = new Date().setDate(today.getDate()-30)
  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=created:>${priorDate}&sort=stars&order=desc&page=${pageNumber}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setState(data)
    });
  }, [pageNumber])
  return (
    <div className="App">
      {state&&state.items&&state.items.map((x,i)=>{
        return(
          <div className='card'  key={x.id}>
            <div className='card-body'>
              <div className='avatar'>
                  <img src={x.owner.avatar_url} alt=""/>
              </div>
              <div className='content'>
                  <h4> {x.name} </h4> 
                  <p> {x.description}</p> 
                  <div className='flex'>
                    <div className="box"> <div> Stars: {x.stargazers_count}</div></div>
                    <div className="box"> <div> Issues: {x.open_issues_count}</div></div>
                  </div>
              </div>
            </div>
          </div>
        )
      })}
      {/* <div className='flex'>
      {state?.total_count&&[...Array(state.total_count/30)].map((x,i)=>{
        return(
          <div>{i-1}</div>
        )
      })}
      </div> */}
    </div>
  );
}

export default App;
