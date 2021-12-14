import React from "react";
import {DescribeServices} from "../Components/DescribeServices";
import "../Styles/home.css"
import {AboutUsShort} from "../Components/AboutUsShort"
import Select from "react-select";
import {Link} from "react-router-dom";


export class Home extends React.Component {

    state = {
        offerBuilding: [
            {value: "estate", label: "Domy"},
            {value: "apartment", label: "Mieszkania"}
        ],
        offerType: [
            {value: "buy", label: "Sprzedaż"},
            {value: "rent", label: "Wynajem"},
        ],
        selectedOfferBuilding: "",
        selectedOfferType: "",
        selectedPrice: -1,
        selectedArea: -1,
        selectedCity: "",
        pathname: ""
    }

    handleSelectOfferBuilding = (selectedOfferBuilding) => {
        this.setState({selectedOfferBuilding})
    }

    handleSelectOfferType = (selectedOfferType) => {
        this.setState({selectedOfferType})
    }

    handleSelectPrice = (event) => {
        this.setState({selectedPrice: parseInt(event.target.value)})
    }

    handleSelectArea = (event) => {
        this.setState({selectedArea: parseInt(event.target.value)})
    }

    handleSelectCity = (event) => {
        this.setState({selectedCity: event.target.value})
    }

    getPathString = () => {
        let query = ""
        if (this.state.selectedOfferType !== "" && this.state.selectedOfferType !== null) {
            query += "o-" + this.state.selectedOfferType.value + "~"
        }
        if (this.state.selectedOfferBuilding !== "" && this.state.offerBuilding !== null) {
            query += "b-" + this.state.selectedOfferBuilding.value + "~"
        }
        if (this.state.selectedPrice !== -1 && this.state.selectedPrice !== null) {
            query += "p-" + this.state.selectedPrice + "~"
        }
        if (this.state.selectedArea !== -1 && this.state.selectedArea !== null) {
            query += "a-" + this.state.selectedArea + "~"
        }
        if (this.state.selectedCity.length > 0) {
            query += "c-" + this.state.selectedCity + "~"
        }

        if (query.length !== 0) {
            query = query.substring(0, query.length - 1)
        }
        console.log(query)
        return (
            query
        )
    }

    render() {
        return (
            <div className={"text-lg container bg-gray-400 mx-auto"}>
                <div className={"grid place-items-center text-3xl font-semibold text-white uppercase"}>
                    Wypróbuj naszą nową wyszukiwarkę!
                </div>
                <div className={" mx-5 grid grid-cols-6 gap-4 w-full"}>
                    <div className={"grid"}>
                        <Select options={this.state.offerType}
                                value={this.state.selectedOfferType}
                                closeMenuOnSelect={false}
                                components={this.animatedComponents}
                                onChange={this.handleSelectOfferType}
                                isClearable={true}
                                placeholder={"Typ oferty"}/>
                    </div>
                    <div className={"grid"}>
                        <Select options={this.state.offerBuilding}
                                value={this.state.selectedOfferBuilding}
                                closeMenuOnSelect={false}
                                isClearable={true}
                                components={this.animatedComponents}
                                onChange={this.handleSelectOfferBuilding}
                                placeholder={"Typ nieruchomości"}/>
                    </div>
                    <div className={"grid"}>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id={"price"} type="number" pattern={"[0-9]*"} placeholder="np. ok. 1000000zł"
                            onChange={this.handleSelectPrice}/>
                    </div>
                    <div className={"grid"}>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id={"area"} type="number" pattern={"[0-9]*"} placeholder="ok. 200m2"
                            onChange={this.handleSelectArea}/>
                    </div>
                    <div className={"grid"}>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id={"area"} type="text" pattern={"[0-9]*"} placeholder="np. Katowice"
                            onChange={this.handleSelectCity}/>
                    </div>
                    <div>
                        <Link to={{pathname: `/search`, state: this.getPathString}}>
                            <button
                                className=" bg-purple-700 hover:bg-purple-500 ml-3 text-white text-xl font-bold rounded text-center w-40 mt-2">
                                Szukaj
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={"mt-5"}>
                    <DescribeServices/>
                </div>
                <div className={"w-1/2 mx-auto"}>
                    <a href={"/contact-us"}>
                        <div
                            className={"bg-purple-700 md:container grid grid-cols-2 w-1/4 justify-center mt-5 mx-1 mx-auto h-auto"}>
                            <div className={"h-auto"}>
                                <img className={"object-contain"} src={"img/pexels-fauxels-3184416.jpg"}
                                     alt={"Contact us!"}/>
                            </div>
                            <div className={"uppercase font-semibold grid place-items-center text-white text-3xl"}>
                                Skontaktuj się z nami
                            </div>
                        </div>
                    </a>
                </div>


                <AboutUsShort/>
                <div className={"mt-5"}>
                    <div className={"w-1/2 m-auto text-left font-semibold text-4xl text-white "}>
                        <div className={"border-b-2 border-white"}>
                            Sprawdź nasze najnowsze oferty
                        </div>
                    </div>
                    <a href={"/search"}>
                        <div className={"flex flex-wrap content-center "}>
                            <button
                                className={"w-1/2 my-5 mx-auto uppercase text-3xl text-white h-40 text-center bg-purple-700 hover:bg-purple-500"}>
                                Przejdź do ofert
                            </button>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}