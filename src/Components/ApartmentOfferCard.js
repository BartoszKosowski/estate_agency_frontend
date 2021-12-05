import axios from "axios";
import data from "../data/path.json";
import React from "react";
import {Link} from "react-router-dom"

export class ApartmentOfferCard extends React.Component {
    state = {
        offers: []
    }

    api = axios.create({
        baseURL: "https://" + data.env.dev.realEstateAgencyAPI.hostName + ":" + data.env.dev.realEstateAgencyAPI.port
    })

    componentDidMount() {
        this.api.get(data.api.apartmentOfferPreviews.toString()).then(res => {
            this.setState({offers: res.data})
        })
    }

    squareMeters = () => {
        return (
            <span>m<sup>2</sup></span>
        )
    }


    render() {
        return (
            <div>
                {this.state.offers.map(offer =>
                    <Link to={`/apartment-offer/${offer.IdOffer}`}>
                        <div className={"md: flex mb-10 mx-auto w-full"}>
                            <div className={"w-2/5 flex-wrap float-left bg-pink-400"}>
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
                                <div className={"ml-5  mt-5 text-lg flex grid grid-cols-2 font-semibold text-white"}>
                                    <div>
                                        ul. {offer.Street}
                                        <br/>
                                        Powierzchnia: {offer.Area}{this.squareMeters()}
                                        <br/>
                                        Liczba pokoi: {offer.NumberOfRooms}
                                        <br/>
                                        {offer.InsideDesign}
                                    </div>
                                    <div className={"float-right inline-block items-end content-end text-right mr-5"}>
                        <span className={"text-2xl"}>
                            {offer.Price}
                        </span>
                                        <br/>
                                        {offer.PriceForMeter}PLN/{this.squareMeters()}
                                        <br/>
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