import {Routes,Route} from "react-router-dom"
import './App.css';
import { Navigation } from "./components/shared/Navigation/Navigation";
import { Home } from "./pages/Home/Home";
// import {Register} from "./pages/register/Register"
// import {Login} from "./pages/login/Login"
import { Authenticate } from "./pages/authenticate/Authenticate";
// import { Fragment } from "react";
import Guest from "./utils/guest/Guest";
import { SemiProtected } from "./utils/semiProtected/SemiProtected";
import { Protected } from "./utils/protected/Protected";
import { Activate } from "./pages/activate/Activate";
import { Rooms } from "./pages/rooms/Rooms";
import { useSelector } from "react-redux";

// const selector= useSelector()

// const isAuth=false 
// const user={
//   activated: false,
// }

function App() {
  const {user,isAuth} = useSelector((state)=>state.auth)
  // const {user,isAuth} = useSelector((state)=>state.auth)
  

  return (
    <>
    <Navigation/>   
    <Routes>
      <Route exact path="/" element={<Guest isAuth={isAuth} component={Home}/>}/>
      <Route exact path="/activate" element={<SemiProtected isAuth={isAuth} user={user} component={Activate}/>}/>
      <Route exact path="/rooms" element={<Protected isAuth={isAuth} user={user} component={Rooms}/>}/>
      <Route exact path="/authenticate" element={<Guest isAuth={isAuth} component={Authenticate}/>}/>
      {/* <Route path="/register" element={<Register/>}/> */}
      {/* <Route path="/login" element={<Login/>}/> */}
    </Routes>
    </>
  );
}

export default App;
