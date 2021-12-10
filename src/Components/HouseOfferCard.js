import axios from "axios";
import data from "../data/path.json";
import React from "react";
import {Link} from "react-router-dom";

export class HouseOfferCard extends React.Component {
    state = {
        offers: []
    }

    async componentDidMount() {
        if (this.props.query === "") {
            await this.api.get(data.api.estateOfferPreviews.toString()).then(res => {
                this.setState({offers: res.data})
            })
        } else {

            await this.api.get(data.api.estateOfferPreviews.toString() + "/" + this.props.query).then(res => {
                this.setState({offers: res.data})
            })
        }
    }

    api = axios.create({
        baseURL: "https://" + data.env.dev.realEstateAgencyAPI.hostName + ":" + data.env.dev.realEstateAgencyAPI.port
    })

    squareMeters = () => {
        return (
            <span>m<sup>2</sup></span>
        )
    }


    hasRent = (offer) => {
        if (offer.HasRent) {
            return (
                <span className={"text-2xl"}>
                            {offer.Price} PLN/msc
                        </span>
            )
        } else {
            return (
                <div>
                    {offer.Price} PLN
                    <br/>
                    {offer.PriceForMeter} PLN/{this.squareMeters()}
                    <br/>
                </div>
            )
        }
    }


    render() {
        return (
            <div>
                {this.state.offers.map(offer =>
                    <Link to={`/houseOffer?o=${offer.IdOffer}&a=${offer.Agent}`}>
                        <div className={"md: flex mb-10 mx-auto w-full"}>
                            <div className={"w-2/5 flex-wrap float-left"}>
                                <img className={"w-full object-contain h-full m-auto"} src={offer.MainPhotoUrl}
                                     alt={"offer estate"}/>
                            </div>
                            <div className={"w-3/5 float-right bg-blue-800"}>
                                <div className={"ml-5 mt-5 flow-root uppercase text-4xl flex font-semibold text-white"}>
                                    <div className={"float-left flex  items-start"}>{offer.Name}</div>
                                    <div
                                        className={"float-right content-center ml text-2xl text-center h-12 w-1/3 bg-indigo-400 font-semibold"}>
                        <span className={"grid place-items-center h-full"}>
                            {Boolean(offer.HasRent) ? 'Wynajem' : 'Sprzedaż'}
                        </span>
                                    </div>
                                </div>
                                <div className={"ml-5 mt-5 text-lg flex grid grid-cols-2 font-semibold text-white"}>
                                    <div>
                                        ul. {offer.Street}
                                        <br/>
                                        Powierzchnia: {offer.Area}{this.squareMeters()}
                                        <br/>
                                        Liczba pokoi: {offer.NumberOfRooms}
                                        <br/>
                                        {offer.PropertyType}
                                    </div>
                                    <div className={"float-right inline-block items-end content-end text-right mr-5"}>
                                        {this.hasRent(offer)}
                                    </div>
                                </div>
                                <div
                                    className={"w-full ml-5 mt-5 text-base text-white font-semibold items-start content-start text-left"}>
                                    Mamy przyjemność zaprezentować państwu nowy dom jednorodzinny wybudowany na
                                    ekskluzywnym
                                    osiedlu
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>

        )
    }


}