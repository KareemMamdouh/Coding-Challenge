import {useState}from 'react';
import gitIcon from 'assets/images/gitIcon.png'
import searchIcon from 'assets/images/searchIcon.png'
import {GitImg,SearchImg,SearchInput,InputSec ,ButtonSearchImg} from './Home.style'
import { useNavigate } from 'react-router-dom';

function Home() {
  const [state,setState]=useState<String>("")
  const navigate = useNavigate();
    const handleSubmit =(e:any)=>{
      e.preventDefault();
      console.log("handleSubmit",state)
      if(state.length>2){
        navigate(`/search?name=${state}`);
      }
    }
  return (
    <div className="">
      <div>
          <GitImg src={gitIcon} alt=""/>
      </div>
      <form onSubmit={handleSubmit}>
          <InputSec >
            <ButtonSearchImg type="submit">
              <SearchImg src={searchIcon} alt=""/>
            </ButtonSearchImg>
              <SearchInput type="text" onChange={(e:any)=>setState(e.target.value)} placeholder='Search for Github repositories' />
          </InputSec>
      </form>
    </div>
  ); 
}

export default Home;
