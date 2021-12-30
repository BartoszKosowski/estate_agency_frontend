import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import data from "../data/path.json";
import {ApartmentOfferCard} from "../Components/ApartmentOfferCard";
import {HouseOfferCard} from "../Components/HouseOfferCard";

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    state = {
        agents: [],
        agentsList: [],
        areaFrom: "",
        areaTo: "",
        cities: [],
        citiesList: [],
        estateStatuses: [],
        estateStatusesList: [],
        facilities: [],
        floorsFrom: "",
        floorsTo: "",
        justSearch: false,
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
        market: [
            {value: "pierwotny", label: "Pierwotny"},
            {value: "wtorny", label: "Wtórny"}
        ],
        onlyApartments: false,
        onlyEstates: false,
        offerType: [
            {value: "sprzedaz", label: "sprzedaż"},
            {value: "wynajem", label: "wynajem"}
        ],
        priceForMeterFrom: "",
        priceForMeterTo: "",
        priceFrom: "",
        priceTo: "",
        properties: [],
        propertyTypesList: [],
        roomsFrom: "",
        roomsTo: "",
        query: "",
        selectedAgents: [],
        selectedCity: "",
        selectedFacilities: [],
        selectedLocations: [],
        selectedMarket: "",
        selectedOfferType: "",
        selectedPropertyType: "",
        selectedStatus: "",
        wasSearch: false,
        checkParams: false,

    }

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
        this.getCities();
        this.getEstateStatusesList();
        this.getPropertyTypes();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.justSearch === true) {
            this.setState({wasSearch: true})
            this.setState({justSearch: false})
        }
    }


    //region fuzzySearch

    CheckParams() {
        let parameter = new URLSearchParams(window.location.search);
        return parameter.toString().length > 0;

    }

    getParameter(parameterName) {
        let parameter = new URLSearchParams(window.location.search);
        return parameter.get(parameterName);
    }

    setFuzzyQuery() {
        let query = "";
        if (this.getParameter("o") !== null) {
            query += "offerType-" + this.getParameter("o") + "~"
        }
        if (this.getParameter("p") !== null) {
            query += "price-" + this.getParameter("p") + "~"
        }
        if (this.getParameter("a") !== null) {
            query += "area-" + this.getParameter("a") + "~"
        }
        if (this.getParameter("c") !== null) {
            query += "city-" + this.getParameter("c") + "~"
        }

        if (query.length === 0) {
            return "empty"
        }

        return query.substring(0, query.length - 1);
    }

    //endregion

    animatedComponents = makeAnimated();

    api = axios.create({
        baseURL: "https://" + data.env.dev.realEstateAgencyAPI.hostName + ":" + data.env.dev.realEstateAgencyAPI.port
    })

    //region getters

    getCities = () => {
        return (
            this.state.cities.map(c =>
                this.state.citiesList.push({value: c, label: c})
            )
        )
    }

    getPropertyTypes = () => {
        return (
            this.state.properties.map(p =>
                this.state.propertyTypesList.push({value: p, label: p})
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

    //endregion

    //region handlers
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

    handleSearch = () => {
        this.setState({justSearch: true})
        if (this.state.selectedPropertyType === "Mieszkanie") {
            this.setState({onlyApartments: true})
        }

        if (this.state.selectedPropertyType.length > 0 && this.state.selectedPropertyType !== "Mieszkanie") {
            this.setState({onlyEstates: true})
        }

        if (this.state.onlyApartments === false && this.state.onlyEstates === false) {
            this.setState({onlyApartments: true})
            this.setState({onlyEstates: true})
        }

        this.renderOffers()
    }


    handleSelectAgents = (selectedAgents) => {
        this.setState({selectedAgents})
    }

    handleSelectLocations = (selectedLocations) => {
        this.setState({selectedLocations})
    }

    handleSelectStatus = (selectedStatus) => {
        this.setState({selectedStatus})
    }

    handleSelectOfferType = (selectedOfferType) => {
        this.setState({selectedOfferType})
    }

    handleSelectCity = (selectedCity) => {
        this.setState({selectedCity})
    }

    handleSelectMarket = (selectedMarket) => {
        this.setState({selectedMarket})
    }

    handleSelectPropertyType = (selectedPropertyType) => {
        this.setState({selectedPropertyType})
    }

    //endregion

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
            query += ("propertyType-" + encodeURIComponent(this.state.selectedPropertyType.value) + "~");
        }
        if (this.state.selectedOfferType !== "") {
            query += ("offerType-" + encodeURIComponent(this.state.selectedOfferType.value) + "~");
        }

        if (this.state.selectedCity !== "") {
            query += ("city-" + encodeURIComponent(this.state.selectedCity.value) + "~");
        }

        if (this.state.selectedMarket !== "") {
            query += ("market-" + encodeURIComponent(this.state.selectedMarket.value) + "~");
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
                return query += encodeURIComponent("_" + agent.IdAgent)
            })
            query += ("~")
        }

        if (this.state.selectedStatus !== "") {
            query += ("state-" + this.state.selectedStatus.value + "~");
        }

        //TODO check if that works correctly
        if (this.state.selectedLocations.length > 0) {
            this.state.selectedLocations.map(location => {
                return query += encodeURIComponent(this.state.selectedLocations.value + "~")
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

    renderOffers() {
        if (this.CheckParams() && this.state.wasSearch === false) {
            if (this.getParameter("b") === "d") {
                return (
                    <div className={"mx-10 mx-auto w-3/4 mt-20"}>
                        {<HouseOfferCard query={this.setFuzzyQuery()} fuzzyQuery={true}/>}
                    </div>
                )
            } else if (this.getParameter("b") === "m") {
                return (
                    <div className={"mx-10 mx-auto w-3/4 mt-20\""}>
                        {<ApartmentOfferCard query={this.setFuzzyQuery()} fuzzyQuery={true}/>}
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className={"mx-10 mx-auto w-3/4 mt-20"}>
                            {<HouseOfferCard query={this.setFuzzyQuery()} fuzzyQuery={true}/>}
                        </div>
                        <div className={"mx-10 mx-auto w-3/4 mt-20\""}>
                            {<ApartmentOfferCard query={this.setFuzzyQuery()} fuzzyQuery={true}/>}
                        </div>
                    </div>
                )
            }
        }

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
                        {<HouseOfferCard query={this.createQueryString().toString()}
                                         justSearch={this.state.justSearch}/>}
                    </div>
                    <div className={"mx-10 mx-auto w-3/4 mt-20\""}>
                        {<ApartmentOfferCard query={this.createQueryString().toString()}
                                             justSearch={this.state.justSearch}/>}
                    </div>
                </div>
            )
        }
        if (this.state.onlyEstates === true && this.state.onlyApartments === false) {
            return (
                <div className={"mx-10 mx-auto w-3/4 mt-20"}>
                    {<HouseOfferCard query={this.createQueryString()} justSearch={this.state.justSearch}/>}
                </div>
            )
        }
        if (this.state.onlyEstates === false && this.state.onlyApartments === true) {
            return (
                <div className={"mx-10 mx-auto w-3/4 mt-20\""}>
                    {<ApartmentOfferCard query={this.createQueryString()} justSearch={this.state.justSearch}/>}
                </div>
            )
        }
    }


    render() {
        return (
            <div className={"bg-gray-400 md:container md:mx-auto"}>
                <div className={"h-28 bg-pink-400 w-full flex"}>
                    <img src={"img/pexels-burst-373893.jpg"} className={"w-full h-full"} alt={"city at night"}/>
                </div>
                <div className={"grid grid-cols-3 gap-8 mx-5 mt-5 text-center"}>
                    <div className={"w-full"}>
                        <Select
                            options={this.state.propertyTypesList}
                            value={this.state.selectedPropertyType}
                            CloseMenuOnSelect={true}
                            onChange={this.handleSelectPropertyType}
                            components={this.animatedComponents}
                            isClearable
                            placeholder={"Typ nieruchomości"}/>
                    </div>
                    <div className={"w-full"}>
                        <Select
                            options={this.state.offerType}
                            value={this.state.selectedOfferType}
                            CloseMenuOnSelect={true}
                            onChange={this.handleSelectOfferType}
                            components={this.animatedComponents}
                            placeholder={"Typ oferty"}/>
                    </div>
                    <div className={"w-full"}>
                        <Select
                            options={this.state.citiesList}
                            value={this.state.selectedCity}
                            CloseMenuOnSelect={true}
                            onChange={this.handleSelectCity}
                            components={this.animatedComponents}
                            placeholder={"Miasto"}/>
                    </div>
                </div>
                <div className={"grid grid-cols-3 gap-10 mx-5 mt-5"}>
                    <div className={"grid grid-cols-2 gap-6 w-full"}>
                        <div className={"w-full"}>
                            <Select options={this.state.estateStatusesList}
                                    closeMenuOnSelect={true}
                                    components={this.animatedComponents}
                                    onChange={this.handleSelectStatus}
                                    isClearable
                                    placeholder={"Stan"}/>
                        </div>
                        <div className={"w-full"}>
                            <Select
                                options={this.state.market}
                                value={this.state.selectedMarket}
                                CloseMenuOnSelect={true}
                                onChange={this.handleSelectMarket}
                                components={this.animatedComponents}
                                isClearable
                                placeholder={"Rynek"}/>
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
                <div className={"grid grid-cols-3 gap-10 mx-5 mt-5"}>
                    <div className={"grid grid-cols-2 gap-6 w-full"}>
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
                    <div className={"grid grid-cols-2 gap-6 w-full"}>
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
                    <div className={"grid grid-cols-2 gap-6 w-full"}>
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
                <div className={"grid grid-cols-3 gap-10 mx-5 mt-5"}>

                    <div className={"w-full"}>
                        <Select options={this.state.agentsList}
                                value={this.state.selectedAgents}
                                closeMenuOnSelect={false}
                                components={this.animatedComponents}
                                isMulti
                                onChange={this.handleSelectAgents}
                                placeholder={"Agent"}/>
                    </div>

                    <div className={"w-full"}>
                        <Select options={this.state.location}
                                value={this.state.selectedLocations}
                                closeMenuOnSelect={false}
                                components={this.animatedComponents}
                                isMulti
                                onChange={this.handleSelectLocations}
                                placeholder={"Lokalizacja"}/>
                    </div>
                    <div className={"grid grid-cols-2 gap-6"}>
                        <div className={"w-full"}>
                            <Select options={this.state.estateStatusesList}
                                    closeMenuOnSelect={true}
                                    components={this.animatedComponents}
                                    onChange={this.handleSelectStatus}
                                    isClearable
                                    placeholder={"Stan"}/>
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