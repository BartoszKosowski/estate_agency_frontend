import React from "react";
import description from "../data/description.json";
import {
    AiFillBook,
    AiFillFire,
    AiOutlineColumnHeight, CgFileDocument,
    FaGripfire,
    GiAqueduct,
    GiFruitTree,
    GiHomeGarage,
    ImPriceTags,
    IoIosHome,
    IoWater,
    MdChair,
    MdEqualizer,
    MdFence,
    MdMeetingRoom,
    MdOutlineBalcony,
    MdOutlineBedroomChild,
    MdOutlineElectricalServices,
    MdOutlineRoofing,
    MdOutlineZoomOutMap,
    SiBookmeter
} from "react-icons/all";
import {OfferAgent} from "../Components/OfferAgent";

export class HouseOffer extends React.Component {

    state = {
        images: [
            {
                original: "img/pexels-binyamin-mellish-186077-full.jpg",
                thumbnail: "img/pexels-binyamin-mellish-186077-.jpg"
            },
            {
                original: "img/pexels-max-vakhtbovych-7587376-full.jpg",
                thumbnail: "img/pexels-max-vakhtbovych-7587376.jpg"
            },
            {
                original: "img/pexels-max-vakhtbovych-7587380.jpg-full",
                thumbnail: "img/pexels-max-vakhtbovych-7587380.jpg"
            },
        ]
    }

    squareMeters = () => {
        return (
            <span>m<sup>2</sup></span>
        )
    }

    render() {
        return (

            <div className={"md:container mx-auto bg-gray-400"}>
                <div className={"flex grid grid-cols-2 text-white border-b-2 border-white"}>
                    <div></div>
                    <div>{<OfferAgent agentNumber={1}/>}</div>
                </div>
                <div className={"flex grid grid-cols-5 gap-4 text-white border-b-2 border-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold "}>
                        Nieruchomość
                    </div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><AiFillBook size={22} className={"mr-2 mt-1 float-left"}/>Rynek:</div>
                        <div><IoIosHome size={22} className={"mr-2 mt-1 float-left"}/>Typ nieruchomości:</div>
                        <div><MdEqualizer size={22} className={"float-left mr-2 mt-1"}/>Stan:</div>
                        <div><MdOutlineZoomOutMap size={22} className={"mr-2 mt-1 float-left"}/>Powierzchnia:</div>
                        <div><MdChair className={"mr-2 mt-1 float-left"} size={22}/>Umeblowanie:</div>
                        <div><MdOutlineRoofing size={22} className={"mr-2 mt-1 float-left"}/>Dach:</div>
                        <div><MdOutlineBalcony size={22} className={"float-left mr-2 mt-1"}/>Balkon:</div>
                        <div><MdOutlineElectricalServices size={22} className={"float-left mr-2 mt-1"}/>Elektryczność:
                        </div>
                        <div><IoWater size={22} className={"float-left mr-2 mt-1"}/>Woda:</div>
                    </div>
                    <div></div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><AiOutlineColumnHeight size={22} className={"float-left mr-2 mt-1"}/>Liczba pięter:</div>
                        <div><MdOutlineBedroomChild size={22} className={"float-left mr-2 mt-1"}/>Liczba pokoi:</div>
                        <div><MdMeetingRoom size={22} className={"float-left mr-2 mt-1"}/>Piwnica:</div>
                        <div><GiHomeGarage size={22} className={"float-left mr-2 mt-1"}/>Garaż:</div>
                        <div><GiFruitTree size={22} className={"float-left mr-2 mt-1"}/>Działka:</div>
                        <div><MdFence size={22} className={"float-left mr-2 mt-1"}/>Ogrodzenie:</div>
                        <div><AiFillFire size={22} className={"float-left mr-2 mt-1"}/>Ogrzewanie:</div>
                        <div><GiAqueduct size={22} className={"float-left mr-2 mt-1"}/>Kanalizacja:</div>
                        <div><FaGripfire size={22} className={"float-left mr-2 mt-1"}/>Gaz:</div>
                    </div>
                    <div></div>
                </div>
                <div className={" grid grid-cols-5 gap-4 text-white border-b-2 border-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold"}>
                        Oferta
                    </div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><ImPriceTags size={22} className={"float-left mr-2 mt-1"}/>Cena:</div>
                        <div><SiBookmeter size={22} className={"float-left mr-2 mt-1"}/>Cena za {this.squareMeters()}:
                        </div>
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
                        {description.description.lorem1}
                        <br/>
                        <br/>
                        {description.description.ex1}
                    </div>
                </div>
            </div>
        )
    }
}