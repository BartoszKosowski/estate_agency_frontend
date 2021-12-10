import React from "react";
import {Disclosure} from "@headlessui/react";
import {FiChevronDown} from "react-icons/all";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {HouseOfferCard} from "../Components/HouseOfferCard";
import axios from "axios";
import data from "../data/path.json";
import {ApartmentOfferCard} from "../Components/ApartmentOfferCard";

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    state = {
        colors: [
            {value: "red", label: "Red"},
            {value: "blue", label: "Blue"}
        ],
        offerType: [
            {value: "sprzedaz", label: "sprzedaż"},
            {value: "wynajem", label: "wynajem"}
        ],
        properties: [],
        cities: [],
        location: [
            {value: "near_forest", label: "Niedaleko lasu"},
            {value: "near_river", label: "Niedaleko rzeki"},
            {value: "near_mountains", label: "W górach"},
            {value: "near_center", label: "W centrum"},
            {value: "near_highway", label: "Blisko wjazdu na autostradę"},
            {value: "near_mall", label: "Niedaleko centrum handlowego"},
            {value: "near_lake", label: "Niedaleko jeziora"},
            {value: "near_coast", label: "Nad morzem"}
        ],
        facilities: [],
        agents: [],
        agentsList: [],
        selectedFacilities: [],
        estateStatuses: [],
        estateStatusesList: [],
        roomsFrom: "",
        roomsTo: "",
        priceFrom: "",
        priceTo: "",
        priceForMeterFrom: "",
        priceForMeterTo: "",
        areaFrom: "",
        areaTo: "",
        floorsFrom: "",
        floorsTo: "",
        selectedPropertyType: "",
        selectedOfferType: "",
        selectedCity: "",
        selectedMarket: "",
        selectedLocations: [],
        selectedAgents: [],
        selectedStatus: "",
        onlyApartments: false,
        onlyEstates: false,
        query: "",
        wasSearch: false,
        justSearch: false
    }

    animatedComponents = makeAnimated();

    api = axios.create({
        baseURL: "https://" + data.env.dev.realEstateAgencyAPI.hostName + ":" + data.env.dev.realEstateAgencyAPI.port
    })

    async componentDidMount() {
        await this.api.get(data.api.tradeInfos.property.toString()).then(res => {
            this.setState({properties: res.data})
        })
        await this.api.get(data.api.tradeInfos.market.toString()).then(res => {
            this.setState({market: res.data})
        })
        await this.api.get(data.api.cities.toString()).then(res => {
            this.setState({cities: res.data})
        })
        await this.api.get(data.api.agents.toString()).then(res => {
            this.setState({agents: res.data})
        })

        await this.api.get(data.api.estateStatuses.toString()).then(res => {
            this.setState({estateStatuses: res.data})
        })

        this.getAgents();
        this.getEstateStatusesList();
    }

    getCities() {
        return (
            this.state.cities.map(c =>
                <option key={c}>{c}</option>
            )
        )
    }

    getProperties = () => {
        return (
            this.state.properties.map(p =>
                <option key={p}>{p}</option>
            )
        )
    }

    getAgents = () => {
        this.state.agents.map(a =>
            this.state.agentsList.push({value: a.IdAgents, label: a.FullName})
        )
    }

    getEstateStatusesList = () => {
        this.state.estateStatuses.map(e =>
            this.state.estateStatusesList.push({value: e.Name, label: e.Name})
        )
    }

    handleChangePriceForMeterFrom = (event) => {
        this.setState({priceForMeterFrom: event.target.value})
    }

    handleChangePriceForMeterTo = (event) => {
        this.setState({priceForMeterTo: event.target.value})
    }

    handleChangeNumberOfRoomsFrom = (event) => {
        this.setState({numberOfRoomsFrom: event.target.value})
    }

    handleChangeNumberOfRoomsTo = (event) => {
        this.setState({numberOfRoomsTo: event.target.value})
    }

    handleChangeNumberOfFloorsFrom = (event) => {
        this.setState({numberOfFloorsFrom: event.target.value})
    }

    handleChangeNumberOfFloorsTo = (event) => {
        this.setState({numberOfFloorsTo: event.target.value})
    }

    handleChangeAreaFrom = (event) => {
        this.setState({areaFrom: event.target.value})
    }

    handleChangeAreaTo = (event) => {
        this.setState({areaTo: event.target.value})
    }

    handleChangePriceFrom = (event) => {
        this.setState({priceFrom: event.target.value})
    }

    handleChangePriceTo = (event) => {
        this.setState({priceTo: event.target.value})
    }

    squareMeter() {
        return (
            <span>m<sup>2</sup></span>
        )
    }

    formatLabel(content) {
        return (
            <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
                   htmlFor="grid-last-name">
                {content}
            </label>
        )
    }

    createQueryString = () => {
        let query = "";
        if (this.state.selectedPropertyType !== "") {
            query += ("propertyType-" + this.state.selectedPropertyType + "~");
        }
        if (this.state.selectedOfferType !== "") {
            query += ("offerType-" + this.state.selectedOfferType + "~");
        }

        if (this.state.selectedCity !== "") {
            query += ("city-" + this.state.selectedCity + "~");
        }

        if (this.state.selectedMarket !== "") {
            query += ("market-" + this.state.selectedMarket + "~");
        }

        if (this.state.areaFrom !== "") {
            query += ("areaFrom-" + this.state.areaFrom + "~");
        }

        if (this.state.areaTo !== "") {
            query += ("areaTo-" + this.state.areaTo + "~");
        }

        if (this.state.priceFrom !== "" && !isNaN(parseInt(this.state.priceFrom))) {
            query += ("priceFrom-" + this.state.priceFrom + "~");
        }

        if (this.state.priceTo !== "" && !isNaN(parseInt(this.state.priceTo))) {
            query += ("priceTo-" + this.state.priceTo + "~");
        }

        if (this.state.priceForMeterFrom !== "" && !isNaN(parseInt(this.state.priceForMeterFrom))) {
            query += ("priceForMeterFrom-" + this.state.priceForMeterFrom + "~");
        }

        if (this.state.priceForMeterTo !== "" && !isNaN(parseInt(this.state.priceForMeterTo))) {
            query += ("priceForMeterTo-" + this.state.priceForMeterTo + "~");
        }

        if (this.state.roomsFrom !== "" && !isNaN(parseInt(this.state.roomsFrom))) {
            query += ("numberOfRoomsFrom-" + this.state.roomsFrom + "~");
        }

        if (this.state.roomsTo !== "" && !isNaN(parseInt(this.state.roomsTo))) {
            query += ("numberOfRoomsTo-" + this.state.roomsTo + "~");
        }

        if (this.state.floorsFrom !== "" && !isNaN(parseInt(this.state.floorsFrom))) {
            query += ("numberOfFloorsFrom-" + this.state.floorsFrom + "~");
        }

        if (this.state.floorsTo !== "" && !isNaN(parseInt(this.state.floorsTo))) {
            query += ("numberOfFloorsTo-" + this.state.floorsTo + "~");
        }

        if (this.state.selectedAgents.length > 0) {
            query += ("agents-")
            this.state.selectedAgents.map(agent => {
                query += ("_" + agent.IdAgent)
            })
            query += ("~")
        }

        if (this.state.selectedStatus !== "") {
            query += ("state-" + this.state.selectedStatus + "~");
        }

        if (this.state.selectedLocations.length > 0) {
            this.state.selectedLocations.map(location => {
                query += (this.state.selectedLocations + "~")
            })
        }

        if (this.state.selectedFacilities.length > 0) {
            //TODO add facilities
        }

        if (query.length === 0) {
            query = "empty"
        } else {
            query = query.substring(0, query.length - 1);
        }

        return query;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("2")
        if (this.state.justSearch === true) {
            this.setState({wasSearch: true})
            console.log("to też")
            this.renderOffers()
            this.setState({justSearch: false})
        }

    }

    renderOffers() {
        if (this.state.wasSearch === false) {
            return (
                <div>
                    <div className={"mx-10 mx-auto w-3/4 mt-20"}>
                        {<HouseOfferCard query={""}/>}
                    </div>
                    <div className={"mx-10 mx-auto w-3/4 mt-20\""}>
                        {<ApartmentOfferCard query={""}/>}
                    </div>
                </div>
            )
        }
        if (this.state.onlyEstates === true && this.state.onlyApartments === true) {
            return (
                <div>
                    <div className={"mx-10 mx-auto w-3/4 mt-20"}>
                        {<HouseOfferCard query={this.createQueryString()}/>}
                    </div>
                    <div className={"mx-10 mx-auto w-3/4 mt-20\""}>
                        {<ApartmentOfferCard query={this.createQueryString()}/>}
                    </div>
                </div>
            )
        }
        if (this.state.onlyEstates === true && this.state.onlyApartments === false) {
            return (
                <div className={"mx-10 mx-auto w-3/4 mt-20"}>
                    {<HouseOfferCard query={this.createQueryString()}/>}
                </div>
            )
        }
        if (this.state.onlyEstates === false && this.state.onlyApartments === true) {
            return (
                <div className={"mx-10 mx-auto w-3/4 mt-20\""}>
                    {<ApartmentOfferCard query={this.createQueryString()}/>}
                </div>
            )
        }
    }

    moreOptions() {
        return (
            <div
                className="w-full mt-5 ml-5 rounded-md shadow-lg bg-gray-400 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className={"grid grid-cols-3 gap-10 mx-5"}>
                    <div className={"w-full grid gap-6 grid-cols-2"}>
                        <div className={"w-full"}>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id={"priceForMeterFrom"} type="text" pattern={"[0-9]*"} placeholder="cena za m2 od"
                                onChange={this.handleChangePriceForMeterFrom}/>
                        </div>
                        <div className={"w-full"}>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id={"priceForMeterTo"} type="text" pattern={"[0-9]*"} placeholder="cena za m2 do"
                                onChange={this.handleChangePriceForMeterTo}/>
                        </div>
                    </div>
                    <div className={"w-full grid gap-6 grid-cols-2"}>
                        <div className={"w-full"}>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id={"numberOfRoomsFrom"} type="text" pattern={"[0-9]*"} placeholder="Liczba pokoi od"
                                onChange={this.handleChangeNumberOfRoomsFrom}/>
                        </div>
                        <div className={"w-full"}>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id={"numberOfRoomsTo"} type="text" pattern={"[0-9]*"} placeholder="Liczba pokoi do"
                                onChange={this.handleChangeNumberOfRoomsTo}/>
                        </div>
                    </div>
                    <div>
                        <div className={"w-full grid gap-6 grid-cols-2"}>
                            <div className={"w-full"}>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id={"numberOfFloorsFrom"} type="text" pattern={"[0-9]*"}
                                    placeholder="Liczba pięter od" onChange={this.handleChangeNumberOfFloorsFrom}/>
                            </div>
                            <div className={"w-full"}>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id={"numberOfFloorsTo"} type="text" pattern={"[0-9]*"}
                                    placeholder="Liczba pięter do" onChange={this.handleChangeNumberOfFloorsTo}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"grid grid-cols-3 gap-10 mx-5 mt-5"}>

                    <div className={"w-full"}>
                        <Select options={this.state.agentsList}
                                closeMenuOnSelect={false}
                                components={this.animatedComponents}
                                isMulti
                                placeholder={"Agent"}/>
                    </div>

                    <div className={"w-full"}>
                        <Select options={this.state.location}
                                closeMenuOnSelect={false}
                                components={this.animatedComponents}
                                isMulti
                                placeholder={"Lokalizacja"}/>
                    </div>
                    <div className={"grid grid-cols-2 gap-6"}>
                        <div className={"w-full"}>
                            <Select options={this.state.estateStatusesList}
                                    closeMenuOnSelect={true}
                                    components={this.animatedComponents}
                                    placeholder={"Stan"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    handleSearch = () => {
        alert(this.state.areaTo)
        this.setState({justSearch: true})
        if (this.state.selectedPropertyType === "Apartment") {
            this.setState({onlyApartments: true})
        }

        if (this.state.selectedPropertyType.length > 0 && this.state.selectedPropertyType !== "Mieszkanie") {
            this.setState({onlyEstates: true})
        }

        if (this.state.onlyApartments === false && this.state.onlyEstates === false) {
            this.setState({onlyApartments: true})
            this.setState({onlyEstates: true})
        }
        console.log("działa");
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
                            id="estateSelect">
                            <option selected={"selected"} hidden>Rodzaj nieruchomości</option>
                            {this.getProperties()}
                        </select>
                    </div>
                    <div className={"w-full"}>
                        <select
                            className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="serviceSelect">
                            <option selected={"selected"} hidden>Typ oferty</option>
                            <option>Sprzedaż</option>
                            <option>Wynajem</option>
                        </select>
                    </div>
                    <div className={"w-full"}>
                        <select
                            className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="citiesSelect">
                            <option selected={"selected"} hidden>Miasto</option>
                            {this.getCities()}
                        </select>
                    </div>
                </div>
                <div className={"grid grid-cols-3 gap-10 mx-5 mt-5"}>
                    <div className={"grid grid-cols-2 gap-6 w-full"}>
                        <div className={"w-full"}>
                            <Disclosure>
                                {({open}) => (
                                    <>
                                        {/*TODO hide that button*/}
                                        <Disclosure.Button as={"button"}
                                                           className={"flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-200 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"}
                                                           id={"showButton"}>
                                            <span>Wicej opcji</span>
                                            <FiChevronDown
                                                className={`${
                                                    open ? 'transform rotate-180' : ''
                                                } w-5 h-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className={"w-screen bg-transparent -ml-10"}>
                                            <div className={"container"}>
                                                {this.moreOptions()}
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div className={"w-full"}>
                            <select
                                className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="Select">
                                <option selected={"selected"} hidden>Rynek</option>
                                <option>Pierwotny</option>
                                <option>Wtórny</option>
                            </select>
                        </div>
                    </div>
                    <div className={"grid grid-cols-2 gap-6 w-full"}>
                        <div className={"w-full"}>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id={"areaFrom"} type="text" pattern={"[0-9]*"} placeholder="Powierzchnia od"
                                onChange={this.handleChangeAreaFrom}/>
                        </div>
                        <div className={"w-full"}>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id={"areaTo"} type="text" pattern={"[0-9]*"} placeholder="Powierzchnia do"
                                onChange={this.handleChangeAreaTo}/>
                        </div>
                    </div>
                    <div className={"grid grid-cols-2 gap-6 w-full"}>
                        <div className={"w-full"}>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id={"priceFrom"} type="text" pattern={"[0-9]*"} placeholder="Cena od"
                                onChange={this.handleChangePriceFrom}/>
                        </div>
                        <div className={"w-full"}>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id={"priceTo"} type="text" pattern={"[0-9]*"} placeholder="Cena do"
                                onChange={this.handleChangePriceTo}/>
                        </div>
                    </div>
                </div>
                <div className={"w-1/3 h-20 mx-auto items-end"}>
                    <button
                        className={"w-full h-full my-5 mx-auto uppercase text-2xl rounded text-white text-center bg-purple-700 hover:bg-purple-500"}
                        id={"searchButton"} placeholder={"Szukaj"} onClick={this.handleSearch}>
                        Szukaj
                    </button>
                </div>
                {this.renderOffers()}
            </div>
        )
    }

}