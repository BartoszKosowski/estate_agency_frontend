import React from "react";
import {
    AiFillBook,
    AiFillFire,
    AiOutlineColumnHeight,
    BsBookmarkCheckFill,
    BsFillCalendar2EventFill,
    CgFileDocument,
    FaBath,
    FaBuilding,
    FaHandHoldingUsd,
    GiHomeGarage,
    HiOutlineMenu,
    ImPriceTags,
    MdApartment,
    MdChair,
    MdEqualizer,
    MdKitchen,
    MdOutlineBalcony,
    MdOutlineBedroomChild,
    MdOutlineZoomOutMap,
    SiBookmeter
} from "react-icons/all";
import description from "../data/description.json";
import {OfferAgent} from "../Components/OfferAgent";
import {PhotoGallery} from "../Components/PhotoGallery";


export class ApartmentOffer extends React.Component {

    squareMeters = () => {
        return (
            <span>m<sup>2</sup></span>
        )
    }


    render() {
        return (
            <div className={"md:container mx-auto bg-gray-400"}>

                <div className={"flex grid grid-cols-2 text-white border-b-2 border-white"}>
                    <div>{<PhotoGallery/>}</div>
                    <div>{<OfferAgent agentNumber={1}/>}</div>
                </div>

                <div className={"flex grid grid-cols-5 gap-4 text-white border-b-2 border-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold "}>
                        Mieszkanie
                    </div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><AiFillBook size={22} className={"mr-2 mt-1 float-left"}/>Rynek:</div>

                        <div><MdEqualizer size={22} className={"float-left mr-2 mt-1"}/>Stan:</div>
                        <div><MdOutlineZoomOutMap size={22} className={"mr-2 mt-1 float-left"}/>Powierzchnia:</div>
                        <div><MdChair className={"mr-2 mt-1 float-left"} size={22}/>Umeblowanie:</div>
                        <div><MdOutlineBalcony size={22} className={"float-left mr-2 mt-1"}/>Balkon:</div>
                    </div>
                    <div></div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><AiOutlineColumnHeight size={22} className={"float-left mr-2 mt-1"}/>numer piętera:</div>
                        <div><MdOutlineBedroomChild size={22} className={"float-left mr-2 mt-1"}/>Liczba pokoi:</div>
                        <div><FaBath size={22} className={"float-left mr-2 mt-1"}/> łazienka:</div>
                        <div><GiHomeGarage size={22} className={"float-left mr-2 mt-1"}/>Miejsce parkingowe:</div>
                        <div><AiFillFire size={22} className={"float-left mr-2 mt-1"}/>Ogrzewanie:</div>
                    </div>
                    <div></div>
                </div>
                <div className={" grid grid-cols-5 gap-4 text-white border-b-2 border-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold"}>
                        Wyposażenie
                    </div>
                    <div className={"flex col-span-4 text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><MdChair size={22} className={"float-left mr-2 mt-1"}/>Styl wnętrza: <span
                            className={"ml-4"}>Modernizm</span></div>
                        <div><MdKitchen size={22} className={"float-left mr-2 mt-1"}/>Kuchnia:</div>
                        <div className={"normal-case text-base grid grid-cols-7 gap-3"}>
                            <div><BsBookmarkCheckFill size={14} className={"float-left mr-2 mt-1"}/>Płyta indykcyjna
                            </div>
                            <div><BsBookmarkCheckFill size={14} className={"float-left mr-2 mt-1"}/>Zlewozmywak</div>
                            <div><BsBookmarkCheckFill size={14} className={"float-left mr-2 mt-1"}/>Piekarnik</div>
                            <div><BsBookmarkCheckFill size={14} className={"float-left mr-2 mt-1"}/>Zmywarka</div>
                        </div>
                        <div><FaBath size={22} className={"float-left mr-2 mt-1"}/>łazienka:</div>
                        <div className={"normal-case text-base grid grid-cols-7 gap-3"}>
                            <div><BsBookmarkCheckFill size={14} className={"float-left mr-2 mt-1"}/>Kabina prysznicowa
                            </div>
                            <div><BsBookmarkCheckFill size={14} className={"float-left mr-2 mt-1"}/>Umywalka</div>
                            <div><BsBookmarkCheckFill size={14} className={"float-left mr-2 mt-1"}/>Pralka</div>
                            <div><BsBookmarkCheckFill size={14} className={"float-left mr-2 mt-1"}/>Suszarka</div>
                        </div>
                    </div>
                </div>
                <div className={" grid grid-cols-5 gap-4 text-white border-b-2 border-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold"}>
                        Budynek
                    </div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><MdApartment size={22} className={"float-left mr-2 mt-1"}/>Nazwa budynku:</div>
                        <div><BsFillCalendar2EventFill size={22} className={"float-left mr-2 mt-1"}/>Rok budowy:</div>
                    </div>
                    <div/>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><FaBuilding size={22} className={"float-left mr-2 mt-1"}/>Rodzaj budynku:</div>
                        <div><HiOutlineMenu size={22} className={"float-left mr-2 mt-1"}/>Liczba pięter:</div>
                    </div>
                </div>
                <div className={" grid grid-cols-5 gap-4 text-white border-b-2 border-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold"}>
                        Oferta
                    </div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><ImPriceTags size={22} className={"float-left mr-2 mt-1"}/>Cena:</div>
                        <div><SiBookmeter size={22} className={"float-left mr-2 mt-1"}/>Cena za {this.squareMeters()}:
                        </div>
                        <div><FaHandHoldingUsd size={22} className={"float-left mr-2 mt-1"}/>Czynsz:</div>
                        <div><CgFileDocument size={22} className={"float-left mr-2 mt-1"}/>numer oferty:</div>
                    </div>
                </div>
                <div className={"grid grid-cols-5 gap-4 border-b-2 border-white text-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold"}>Lokalizacja</div>
                    <div className={"col-span-4 grid place-items-center"}>
                        <iframe
                            src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1274.640438870381!2d18.6772782!3d50.2866846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113103062bee1f%3A0xc8fb0647d8c52586!2sKujawska%202%2C%2044-100%20Gliwice!5e0!3m2!1spl!2spl!4v1636922631195!5m2!1spl!2spl"}
                            width={"600"} height={"450"} loading="lazy" title={"headquarters-map"}
                            className={"mt-10 mb-10"}/>
                    </div>
                </div>
                <div className={"grid grid-cols-5 gap-4 border-b-2 border-white text-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold"}>
                        Opis
                    </div>
                    <div className={"container mx-auto text-justify col-span-3"}>
                        {description.description.lorem2}
                        <br/>
                        <br/>
                        {description.description.ex3}
                        <br/>
                        <br/>
                        {description.description.ex2}
                    </div>
                </div>
            </div>
        )
    }
}