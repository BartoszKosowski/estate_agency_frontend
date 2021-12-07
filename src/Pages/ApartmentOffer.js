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
import axios from "axios";
import data from "../data/path.json";


export class ApartmentOffer extends React.Component {
    state = {
        offer: []
    }

    async componentDidMount() {
        await this.api.get(data.api.apartmentOffer.toString() + "/" + this.getParameter("o")).then(res => {
            this.setState({offer: res.data});
        })
    }

    api = axios.create({
        baseURL: "https://" + data.env.dev.realEstateAgencyAPI.hostName + ":" + data.env.dev.realEstateAgencyAPI.port
    })

    getParameter(parameterName) {
        let parameter = new URLSearchParams(window.location.search);
        return parameter.get(parameterName);
    }

    squareMeters = () => {
        return (
            <span>m<sup>2</sup></span>
        )
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

    getEquipment(roomEquipment) {
        const equipments = roomEquipment?.split(",");
        let eqi = [];
        for (let i = 0; i < equipments?.length; i++) {
            eqi.push(<div><BsBookmarkCheckFill size={14} className={"float-left mr-2 mt-1"}/>{equipments[i]}</div>);
        }
        return eqi;
    }

    //TODO naprawić wyświetlanie w liniach
    render() {
        return (
            <div className={"md:container mx-auto bg-gray-400"}>

                <div className={"flex grid grid-cols-2 text-white border-b-2 border-white"}>
                    <div>{<PhotoGallery/>}</div>
                    <div>{<OfferAgent agentNumber={this.getParameter("a")}/>}</div>
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
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div>{this.state.offer.Market}</div>
                        <div>{this.state.offer.PropertyState}</div>
                        <div>{this.state.offer.PropertyArea} {this.squareMeters()}</div>
                        <div>{this.state.offer.Furnishings ? "Tak" : "Nie"}</div>
                        <div>{this.state.offer.HasBalcony ? "Tak" : "Nie"}</div>
                    </div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><AiOutlineColumnHeight size={22} className={"float-left mr-2 mt-1"}/>piętro:</div>
                        <div><MdOutlineBedroomChild size={22} className={"float-left mr-2 mt-1"}/>Liczba pokoi:</div>
                        <div><FaBath size={22} className={"float-left mr-2 mt-1"}/> łazienka:</div>
                        <div><GiHomeGarage size={22} className={"float-left mr-2 mt-1"}/>Miejsce parkingowe:</div>
                        <div><AiFillFire size={22} className={"float-left mr-2 mt-1"}/>Ogrzewanie:</div>
                    </div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div>{this.state.offer.FloorNumber}</div>
                        <div>{this.state.offer.NumberOfRooms}</div>
                        <div>{this.state.offer.HasBathroom ? "Tak" : "Nie"}</div>
                        <div>{this.state.offer.ParkingSpace ? "Tak" : "Nie"}</div>
                        <div>{this.state.offer.Heating}</div>
                    </div>
                </div>
                <div className={" grid grid-cols-5 gap-4 text-white border-b-2 border-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold"}>
                        Wyposażenie
                    </div>
                    <div className={"flex col-span-4 text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><MdChair size={22} className={"float-left mr-2 mt-1"}/>Styl wnętrza: <span
                            className={"ml-4"}>{this.state.offer.InsideDesign}</span></div>
                        <div><MdKitchen size={22} className={"float-left mr-2 mt-1"}/>Kuchnia:</div>
                        <div className={"normal-case text-base grid grid-cols-7 gap-3"}>
                            {this.getEquipment(this.state.offer.KitchenEquipment)}
                        </div>
                        <div><FaBath size={22} className={"float-left mr-2 mt-1"}/>łazienka:</div>
                        <div className={"normal-case text-base grid grid-cols-7 gap-3"}>
                            {this.getEquipment(this.state.offer.BathroomEquipment)}
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
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div>{this.state.offer.BuildingName}</div>
                        <div>{this.state.offer.BuildYear}</div>
                    </div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div><FaBuilding size={22} className={"float-left mr-2 mt-1"}/>Rodzaj budynku:</div>
                        <div><HiOutlineMenu size={22} className={"float-left mr-2 mt-1"}/>Liczba pięter:</div>
                    </div>
                    <div className={"flex text-white text-lg grid grid-cols-1 uppercase"}>
                        <div>{this.state.offer.BuildingType}</div>
                        <div>{this.state.offer.NumberOfFloors}</div>
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
                <div className={"grid grid-cols-5 gap-4 text-white"}>
                    <div className={"flex text-right text-xl uppercase font-semibold"}>Lokalizacja</div>
                    <div className={"col-span-4 grid place-items-center"}>
                        <iframe
                            src={this.state.offer.GoogleMapsUrl}
                            width={"600"} height={"450"} loading="lazy" title={"headquarters-map"}
                            className={"mt-10 mb-10"}/>
                    </div>
                </div>
                <div className={"grid grid-cols-5 gap-4 border-white text-white"}>
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