import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutUs} from "../Pages/AboutUs";
import {Advisement} from "../Pages/Advisement";
import {BuyEstate} from "../Pages/BuyEstate";
import {Contact} from "../Pages/Contact";
import {Home} from "../Pages/Home";
import {InsideDesign} from "../Pages/InsideDesign";
import {RentEstate} from "../Pages/RentEstate";
import {Search} from "../Pages/Search";



export const NavRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/about-us"} element={<AboutUs/>} exact/>
                <Route path={"/advisement"} element={<Advisement/>} exact/>
                <Route path={"/buy-estate"} element={<BuyEstate/>} exact/>
                <Route path={"/contact"} element={<Contact/>} exact/>
                <Route path={"/home"} element={<Home/>} exact/>
                <Route path={"/inside-design"} element={<InsideDesign/>} exact/>
                <Route path={"/rent-estate"} element={<RentEstate/>} exact/>
                <Route path={"/search"} element={<Search/>} exact/>
            </Routes>
        </BrowserRouter>
    )

}

export default NavRoute;