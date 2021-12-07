import React, {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {FiChevronDown} from "react-icons/all";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {HouseOfferCard} from "../Components/HouseOfferCard";
import axios from "axios";
import data from "../data/path.json";
import {ApartmentOfferCard} from "../Components/ApartmentOfferCard";

export class Search extends React.Component {
    state = {
        colors: [
            {value: "red", label: "Red"},
            {value: "blue", label: "Blue"}
        ],
        offerType: [
            {value: "sprzedaz", label: "sprzedaż"},
            {value: "wynajem", label: "wynajem"}
        ],
        propertyType: [],
        city: [],
        market: [],
        location: [],
        facilities: []
    }

    animatedComponents = makeAnimated();

    api = axios.create({
        baseURL: "https://" + data.env.dev.realEstateAgencyAPI.hostName + ":" + data.env.dev.realEstateAgencyAPI.port
    })

    async componentDidMount() {
        await this.api.get(data.api.tradeInfos.propertyType.toString()).then(res => {
            this.setState({propertyType: res.data})
        })
        await this.api.get(data.api.tradeInfos.market.toString()).then(res => {
            this.setState({market: res.data})
        })
        await this.api.get(data.api.estateOfferPreviews.toString()).then(res => {
            this.setState({city: res.data})
        })
    }

    customInput(id, name) {
        return (
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={id} type="text" placeholder={name}/>
        )
    }

    squareMeter() {
        return (
            <span>m<sup>2</sup></span>
        )
    }

    formatLabel(content){
        return(
            <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
                   htmlFor="grid-last-name">
                {content}
            </label>
        )
    }


    render() {
        return (
            <div className={"bg-gray-400 md:container md:mx-auto"}>
                <div className={"h-28 bg-pink-400 w-full flex"}>
                    <img src={"img/pexels-burst-373893.jpg"} className={"w-full h-full"} alt={"city at night"}/>
                </div>
                <div className={"grid grid-cols-3 gap-8 mx-5 mt-5 text-center"}>
                    <div className={"w-full"}>
                        <select
                            className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="serviceSelect">
                            <option selected={"selected"} hidden>Rodzaj nieruchomości</option>
                            <option>AAAA</option>
                        </select>
                    </div>
                    <div className={"w-full"}>
                        <select
                            className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="serviceSelect">
                            <option selected={"selected"} hidden>Typ oferty</option>
                            <option>AAAA</option>
                        </select>
                    </div>
                    <div className={"w-full"}>
                        <select
                            className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="serviceSelect">
                            <option selected={"selected"} hidden>Miasto</option>
                            <option>AAAA</option>
                        </select>
                    </div>
                </div>
                <div className={"grid grid-cols-3 gap-10 mx-5 mt-5"}>
                    <div className={"grid grid-cols-2 gap-6 w-full"}>
                        <div className={"w-full"}>
                            {this.customInput("priceFrom", "Cena od")}
                        </div>
                        <div className={"w-full"}>
                            {this.customInput("priceTo", "Cena do")}
                        </div>
                    </div>
                    <div className={"grid grid-cols-2 gap-6 w-full"}>
                        <div className={"w-full"}>
                            {this.customInput("areaFrom", "Powierzchnia od")}
                        </div>
                        <div className={"w-full"}>
                            {this.customInput("areaTo", "Powierzchnia do")}
                        </div>
                    </div>
                    <div className={"grid grid-cols-2 gap-6 w-full"}>
                        <div className={"w-full"}>
                            <select
                                className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="serviceSelect">
                                <option selected={"selected"} hidden>Rynek</option>
                                <option>AAAA</option>
                            </select>
                        </div>
                        <div className={"w-full"}>
                            {/*TODO fix positioning*/}
                            <Menu as="div" className="relative w-full inline-block text-left">
                                {({open}) => (
                                    <Fragment>
                                        <Menu.Button className={"w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}>
                                            Więcej opcji
                                            <FiChevronDown className=" -mr-7 ml-2 h-5 w-5 float-right" aria-hidden="true" />
                                        </Menu.Button>

                                        <Transition
                                            show={open}
                                            enter="transform transition duration-100 ease-in"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="transform transition ease-out duration-75"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo=" opacity-0 scale-95"
                                        >
                                            <Menu.Items className="static origin-top-right absolute right-0 w-screen container mx-auto bg-transparent mb-10">
                                                <div className="w-full mt-5 ml-5 rounded-md shadow-lg bg-gray-400 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className={"grid grid-cols-3 gap-10 mx-5"}>
                                                        <div className={"w-full grid gap-6 grid-cols-2"}>
                                                            <div className={"w-full"}>
                                                                {this.customInput("priceMeterSFrom", "Cena za m2 od")}
                                                            </div>
                                                            <div className={"w-full"}>
                                                                {this.customInput("priceMeterSTo", "Cena za m2 do")}
                                                            </div>
                                                        </div>
                                                        <div className={"w-full grid gap-6 grid-cols-2"}>
                                                            <div className={"w-full"}>
                                                                {this.customInput("numberOfRoomsFrom", "Liczba pokoi od")}
                                                            </div>
                                                            <div className={"w-full"}>
                                                                {this.customInput("numberOfRoomsTo", "Liczba pokoi do")}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className={"w-full grid gap-6 grid-cols-2"}>
                                                                <div className={"w-full"}>
                                                                    {this.customInput("numberOfFloorsFrom", "Liczba pokoi od")}
                                                                </div>
                                                                <div className={"w-full"}>
                                                                    {this.customInput("numeberOfFloorsTo", "Liczba pokoi do")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"grid grid-cols-3 gap-10 mx-5 mt-5"}>
                                                        <div className={"w-full"}>
                                                            <Select options={this.state.colors}
                                                                    closeMenuOnSelect={false}
                                                                    components={this.animatedComponents}
                                                                    isMulti
                                                                    placeholder={"Lokalizacja"}/>
                                                        </div>
                                                        <div className={"w-full"}>
                                                            <Select options={this.state.colors}
                                                                    closeMenuOnSelect={false}
                                                                    components={this.animatedComponents}
                                                                    isMulti
                                                                    placeholder={"Udogodnienia"}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Fragment>
                                )}
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className={"w-1/3 h-20 mx-auto items-end"}>
                    <button
                        className={"w-full h-full my-5 mx-auto uppercase text-2xl rounded text-white text-center bg-purple-700 hover:bg-purple-500"}
                        id={"searchButton"} placeholder={"Szukaj"}>
                        Szukaj
                    </button>
                </div>
                <div className={"mx-10 mx-auto w-3/4 mt-20"}>
                    {<HouseOfferCard/>}
                </div>
                <div className={"mx-10 mx-auto w-3/4 mt-20\""}>
                    {<ApartmentOfferCard/>}
                </div>
            </div>
        )
    }

}