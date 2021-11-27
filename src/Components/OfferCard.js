export const OfferCard = () => {

    const squareMeters = () => {
        return (
            <span>m<sup>2</sup></span>
        )
    }

    return (
        <div className={"md: flex mt-10 mx-auto w-full"}>
            <div className={"w-2/5 flex-wrap float-left bg-pink-400"}>
                <img className={"w-full object-contain h-full m-auto"} src={"img/pexels-binyamin-mellish-186077.jpg"}
                     alt={"offer estate"}/>
            </div>
            <div className={"w-3/5 float-right bg-blue-800"}>
                <div className={"ml-5 mt-5 flow-root uppercase text-4xl flex font-semibold text-white"}>
                    <div className={"float-left flex  items-start"}>Kraków, Wola</div>
                    <div
                        className={"float-right content-center ml text-2xl text-center h-12 w-1/3 bg-indigo-400 font-semibold"}>
                        <span className={"grid place-items-center h-full"}>
                            Sprzedaż
                        </span>
                    </div>
                </div>
                <div className={"ml-5  mt-5 text-lg flex grid grid-cols-2 font-semibold text-white"}>
                    <div>
                        ul. Chłopska
                        <br/>
                        Powierzchnia: 150{squareMeters()}
                        <br/>
                        Liczba pokoi: 9
                        <br/>
                        Dom jednorodzinny
                    </div>
                    <div className={"float-right inline-block items-end content-end text-right mr-5"}>
                        <span className={"text-2xl"}>
                            150000 PLN
                        </span>
                        <br/>
                        1000 PLN/{squareMeters()}
                        <br/>
                    </div>
                </div>
                <div
                    className={"w-full ml-5 mt-5 text-base text-white font-semibold items-start content-start text-left"}>
                    Mamy przyjemność zaprezentować państwu nowy dom jednorodzinny wybudowany na ekskluzywnym osiedlu
                </div>
            </div>
        </div>
    )
}