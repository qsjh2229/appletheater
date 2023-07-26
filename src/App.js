import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Movies from "./pages/Movies";
import User from "./pages/User";
/* import User from "./pages/User"; */

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/App" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="movies/" element={<Movies />} />
        <Route path="users/" element={<Users />} />
        <Route path="/users/:id" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
