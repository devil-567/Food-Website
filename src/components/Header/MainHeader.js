import { Outlet } from "react-router-dom";
import "../Header/MainHeader.css"
import Header from "../Nevbar/Header";
export default function MainHeader() {
  return (
    <>
    
      <div className="Mainheader">
      <Header/>
      </div>
      <Outlet/>
    </>
  )
}