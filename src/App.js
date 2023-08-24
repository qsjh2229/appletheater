import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Movies from "./pages/Movies";
import User from "./pages/User";
import About from "./pages/About";
import Movie from "./pages/Movie";
import Store from "./pages/Store";
import Footer from "./component/Footer";

/* import User from "./pages/User"; */

function App() {
  return (
    
      <div className="app">
       <div className="appcontainer">
          <Navbar></Navbar>
         
          
          <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="movies/" element={<Movies />} />
            <Route path="movie/" element={<Movie />} />
            <Route path="users/" element={<Users />} />
            <Route path="store/" element={<Store />} />
            <Route path="/users/:id" element={<User />}></Route>
            <Route path="/about/:id" element={<About />}></Route>
          </Routes>
          <Footer></Footer>
       </div>
      </div>
   
  );
}

export default App;
