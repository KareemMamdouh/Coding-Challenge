import React ,{useEffect,useState}from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPaginate from 'react-paginate';
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
  const last30Days= new Date(priorDate).toISOString().slice(0, 10);
  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=created:>${last30Days}&sort=stars&order=desc&page=${pageNumber}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setState(data)
    });
  }, [pageNumber,last30Days])
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
      <div className='flex'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e)=>setPageNumber(+e)}
        pageCount={34}
        previousLabel="< previous"
        pageRangeDisplayed="2"
        marginPagesDisplayed="1"
        breakClassName="mx-1 page-number"
        breakLinkClassName="mx-1 page-number "
        pageClassName="mx-1 page-number "
        activeClassName="mx-1 page-number active"
        activeLinkClassName="mx-1 page-number active"
        nextClassName="mx-1 page-number "
        previousClassName="mx-1 page-number "
      />
      {/* {state?.total_count?[...new Array(34)].map((x,i)=>{
        return(
          <div>{i+1}</div>
        )
      })
      :
      [...new Array(1000/30)].map((x,i)=>{
        return(
          <div>{i-1}</div>
        )
      })
      } */}
      </div>
    </div>
  );
}

export default App;
