import React from "react";


export class SellEstate extends React.Component{
    render() {
        return(
            <div className={"bg-gray-400 md:mx-auto"}>
                <div className={"w-full"}>
                    <img className={"w-full h-80 object-cover"} src={"img/pexels-pixabay-210617.jpg"}
                         alt={"house to sell"}/>

                    <div className={"mt-20 h-60 w-full text-white text-xl  bg-gray-500"}>
                        <span className={"text-3xl font-semibold uppercase"}>
                            chcesz sprzedać lub wynająć swoją nieruchomość?
                        </span>
                        <br/>
                        {/*TODO fix description*/}
                        Korzystając z naszych usług, agenci zajmą się wszystkim za Ciebie! Wystarczy tylko, że spotkasz
                        się z jednym z nas aby
                        ustalić warunki tranzakcji.

                    </div>
                    <a href={"/contact-us"}>
                        <button
                            className={"w-2/3 h-40 mt-20 text-2xl flex text-center m-auto uppercase font-semibold text-white bg-blue-900 hover:bg-blue-700"}>
                        <span className={"m-auto"}>
                            Umów się na spotkanie już dzisiaj!
                        </span>
                        </button>
                    </a>
                </div>
                <div className={"h-20 bg-gray-400"}/>
            </div>
        )
    }
}