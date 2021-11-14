import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutUs} from "../Pages/AboutUs";
import {Advisement} from "../Pages/Advisement";
import {BuyEstate} from "../Pages/BuyEstate";
import {Contact} from "../Pages/Contact";
import {Home} from "../Pages/Home";
import {InsideDesign} from "../Pages/InsideDesign";
import {SellEstate} from "../Pages/SellEstate";
import {Search} from "../Pages/Search";



export const NavRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>} exact/>
                <Route path={"/about-us"} element={<AboutUs/>} exact/>
                <Route path={"/advisement"} element={<Advisement/>} exact/>
                <Route path={"/buy-estate"} element={<BuyEstate/>} exact/>
                <Route path={"/contact"} element={<Contact/>} exact/>
                <Route path={"/inside-design"} element={<InsideDesign/>} exact/>
                <Route path={"/search"} element={<Search/>} exact/>
                <Route path={"/sell-estate"} element={<SellEstate/>} exact/>
            </Routes>
        </BrowserRouter>
    )

}

export default NavRoute;