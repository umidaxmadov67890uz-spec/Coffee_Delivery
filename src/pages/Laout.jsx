import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import NavBar from './../components/navBar/NavBar';

function Laout() {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <NavBar/>
    </>
  )
}

export default Laout;
