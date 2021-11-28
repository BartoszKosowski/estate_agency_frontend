import React from "react";

export class BuyEstate extends React.Component {
    render() {
        return (
            <div className={"bg-gray-400 md:container md:mx-auto"}>
                <div className={"text-lg container mx-auto"}>
                    <img className={"w-full h-80"} src={"img/pexels-quark-studio-2506990.jpg"}
                         alt={"exclusive apartment"}/>
                </div>
                <div className={"text-xl container bg-gray-500 text-white mt-20 h-80"}>
                    <img className={"w-1/3 float-left object-contain h-full"}
                         src={"img/pexels-alena-darmel-7641862.jpg"} alt={"property agent with couple"}/>
                    <div className={"float-right w-2/3 h-full text-xl text-white justify-end font-semibold"}>
                        <div className={"h-1/2 ml-2"}>
                            <span className={"uppercase text-3xl mb-3 mr-5"}>Chcesz kupić mieszkanie wprost stworzone dla Ciebie?</span>
                            <br/>

                            {/*TODO extend descriptions*/}

                            <span className={"mr-20"}>
                            Posiadamy w naszej ofercie szeroki wachlarz mieszkań, domów i innych nieruchomości na sprzedaż. Nie czekaj tylko sprawdź naszą ofertę
                            </span>
                        </div>
                        <div className={"h-1/2 mx-auto"}>

                            {/*TODO CENTER THAT F*****' DIVS AND BUTTONS !!!*/}

                            <button
                                className={"w-1/2 h-full bg-purple-700 hover:bg-purple-500 font-semibold uppercase content-center inline-block"}>
                                sprawdź nasze oferty sprzedaży nieruchomości
                            </button>
                        </div>

                    </div>

                </div>
                <div className={"mt-20 text-lg container bg-gray-500 mx-auto text-white h-80"}>
                    <div className={"float-right w-1/3"}>
                        <img className={" object-scale-down"} src={"img/pexels-rodnae-productions-8293771.jpg"}
                             alt={"key on hands"}/>
                    </div>
                    <div className={"float-left w-2/3 h-full text-xl text-white font-semibold"}>
                        <div className={"h-1/2"}>
                            <span className={"uppercase text-3xl mb-3 ml-5"}>A może jesteś zainteresowany wynajmem?</span>
                            <br/>
                            <span className={"ml-5"}>
                            Nasi agenci pośredniczą także w ofertach najmu nieruchomości.
                        </span>
                        </div>
                        <div className={"h-1/2 m-auto"}>
                            <button
                                className={"w-1/2 m-auto h-full bg-purple-700 hover:bg-purple-500 font-semibold justify-end uppercase ml-5 flex-1"}>
                                sprawdź nasze oferty Wynajmu nieruchomości
                            </button>
                        </div>
                    </div>

                </div>
                <div className={"h-20"}/>
            </div>

        )
    }
}