import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from 'components/Header/Header'
import Home from 'pages/Home/Home'
import Search from 'pages/Search/Search'

function App() {
  return (
    <div className="">
        <Header/>
        <BrowserRouter>
          <Routes>
              <Route  path="/" element={<Home />} />
              <Route  path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
