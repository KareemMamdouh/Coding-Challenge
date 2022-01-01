import {useEffect,useState}from 'react';
import {Select,ButtonReset,Container,CardsContainer,Card,CardBody} from './Search.style'
import starts from 'assets/images/star.png'
import fork from 'assets/images/forks.png'

interface IState {
  items: [any];
  total_count:number;
  incomplete_results:true
}
interface IFilters {
  sort:string
  order:string
}
function Search() {
  const [state,setState]=useState<IState|null>(null)
  const [filters,setFilters]=useState<IFilters>({sort:"",order:"desc"})
  const [loading,setLoading]=useState<boolean>(false)
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name"); 
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.github.com/search/repositories?q=${name}${filters.sort.length>0?`&sort=${filters.sort}`:``}&order=${filters.order}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setState(data)
      setLoading(false)
    });
  }, [filters.sort,filters.order,name])
  return (
    <Container className="">
      <Select  value={filters.sort}  onChange={(e:any)=>{ setFilters({...filters,sort:e.target.value}) }}>
        <option value="">Best match</option>
        <option value="stars">stars</option>
        <option value="forks">forks </option>
      </Select>
      <Select value={filters.order} onChange={(e:any)=>{ setFilters({...filters,order:e.target.value}) }}>
        <option value="desc">Desc</option>
        <option value="asc">Asc</option>
      </Select>

      <ButtonReset type="button" onClick={()=>setFilters({sort:"",order:"desc"})}>Reset</ButtonReset>
        <CardsContainer className="">
        {loading?
        <p>loading...</p>
        :
        <>
        {/* repositories cards */}
        {state&&state.items&&state.items.map((x,i)=>{
          return(
            <Card key={x.id}>
              <CardBody >
                    <h4>{x.full_name} </h4> 
                    <p>{x.description}</p> 
                    <div className='card-footer'>
                      <div className="box"><img src={starts} alt="starts"/>{x.stargazers_count}</div>
                      <div className="box"><img src={fork} alt="fork"/> {x.forks_count}</div>
                    </div>
              </CardBody>
            </Card>
          )
        })}
        </>}
      </CardsContainer>
    </Container>
  );
}

export default Search;
