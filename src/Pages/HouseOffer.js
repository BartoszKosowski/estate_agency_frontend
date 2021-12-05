import React from "react";
import description from "../data/description.json";
import {
    AiFillBook,
    AiFillFire,
    AiOutlineColumnHeight, CgFileDocument,
    FaGripfire, FaHandHoldingUsd,
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
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {PhotoGallery} from "../Components/PhotoGallery";
import axios from "axios";
import data from "../data/path.json";

export class HouseOffer extends React.Component {

    state = {
        offer: []
    }

    api = axios.create({
        baseURL: "https://" + data.env.dev.realEstateAgencyAPI.hostName + ":" + data.env.dev.realEstateAgencyAPI.port
    })

    squareMeters = () => {
        return (
            <span>m<sup>2</sup></span>
        )
    }

    getParameter(parameterName) {
        let parameter = new URLSearchParams(window.location.search);
        return parameter.get(parameterName);
    }

    componentDidMount() {
        this.api.get(data.api.estateOffer.toString() + "/" + this.getParameter("o")).then(res => {
            this.setState({offer: res.data})
        })
    }

    showRent = () => {
        if (this.state.offer.HasRent) {
            return (
                <div>{this.state.offer.RentValue} PLN</div>
            )
        }
    }

    showRentIcon = () => {
        if (this.state.offer.HasRent) {
            return (
                <div><FaHandHoldingUsd size={22} className={"float-left mr-2 mt-1"}/>Czynsz:</div>
            )
        }
    }

    showPrice = () => {
        if (this.state.offer.OfferType === "sprzedaz") {
            return (
                <div>{this.state.offer.Price} PLN</div>
            )
        }
    }

    showPriceIcon = () => {
        if (this.state.offer.OfferType === "sprzedaz") {
            return (
                <div><ImPriceTags size={22} className={"float-left mr-2 mt-1"}/>Cena:</div>
            )
        }
    }

    showPriceForMeter = () => {
        if (this.state.offer.OfferType === "sprzedaz") {
            return (
                <div>{this.state.offer.PriceForMeter} PLN/{this.squareMeters()}</div>
            )
        }
    }

    showPriceForMeterIcon = () => {
        if (this.state.offer.OfferType === "sprzedaz") {
            return (
                <div><SiBookmeter size={22} className={"float-left mr-2 mt-1"}/>Cena za {this.squareMeters()}:
                </div>
            )
        }

    }

    render() {
        return (

            <div className={"md:container mx-auto bg-gray-400"}>
                <div className={"flex grid grid-cols-2 text-white border-b-2 border-white"}>
                    <div>{<PhotoGallery/>}</div>
                    <div>{<OfferAgent agentNumber={this.getParameter("a")}/>}</div>
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
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div>{this.state.offer.Market}</div>
                        <div>{this.state.offer.PropertyType}</div>
                        <div>{this.state.offer.PropertyStatus}</div>
                        <div>{this.state.offer.PropertyArea} {this.squareMeters()}</div>
                        <div>{this.state.offer.Furnishings ? "Tak" : "Nie"}</div>
                        <div className={"capitalize"}>{this.state.offer.RoofType}</div>
                        <div>{this.state.offer.HasBalcony ? "Tak" : "Nie"}</div>
                        <div>{this.state.offer.Electricity ? "Tak" : "Nie"}</div>
                        <div>{this.state.offer.WaterConnection ? "Tak" : "Nie"}</div>
                    </div>
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
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div>{this.state.offer.Floors}</div>
                        <div>{this.state.offer.NumberOfRooms}</div>
                        <div>{this.state.offer.Basement ? "Tak" : "Nie"}</div>
                        <div>{this.state.offer.Garage ? "Tak" : "Nie"}</div>
                        <div>{this.state.offer.Plot} {this.squareMeters()}</div>
                        <div>{this.state.offer.Fence ? "Tak" : "Nie"}</div>
                        <div>{this.state.offer.Heating}</div>
                        <div>{this.state.offer.Sewers ? "Tak" : "Nie"}</div>
                        <div>{this.state.offer.GasInstallation ? "Tak" : "Nie"}</div>
                    </div>
                </div>
                <div className={" grid grid-cols-5 gap-4 text-white border-b-2 border-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold"}>
                        Oferta
                    </div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        {this.showPriceIcon()}
                        {this.showPriceForMeterIcon()}
                        {this.showRentIcon()}
                        <div><CgFileDocument size={22} className={"float-left mr-2 mt-1"}/>numer oferty:</div>
                    </div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        {this.showPrice()}
                        {this.showPriceForMeter()}
                        {this.showRent()}
                        <div>{this.state.offer.IdOffers}</div>
                    </div>
                </div>
                <div className={"grid grid-cols-5 gap-4 border-b-2 border-white text-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold"}>Lokalizacja</div>
                    <div className={"col-span-4 grid place-items-center"}>
                        <iframe
                            src={this.state.offer.GoogleMapsUrl}
                            width={"600"} height={"450"} loading="lazy" title={"headquarters-map"}
                            className={"mt-10 mb-10"}/>
                    </div>
                </div>
                <div className={"grid grid-cols-5 gap-4 text-white"}>
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