import React from "react";


export class Advisement extends React.Component {
    render() {
        return (
            <div className={"bg-gray-400 md:container md:mx-auto"}>
                <div className={"w-full"}>
                    <img className={"w-full h-80 object-cover"} src={"img/pexels-kampus-production-8439697.jpg"}
                         alt={"architectonic project"}/>
                    {/*TODO improve page description*/}
                    <div className={"mt-20 h-60 w-full text-white text-xl  bg-gray-500"}>
                        <span className={"text-3xl font-semibold uppercase mb-5"}>
                            Nie jesteś pewien czego szukasz?
                        </span>
                        <br/>
                        {/*TODO fix description*/}
                        Nasi agenci to pasjonaci, posiadaja obszerną wiedzę z dziedziny nieruchomości. Konultując się z
                        nami masz pewność, że znajdziesz mieszkanie
                        o jakim zawsze marzyłeś.

                    </div>
                    <a href={"/contact-us"}>
                        <button
                            className={"w-2/3 h-40 mt-20 text-2xl flex text-center m-auto uppercase font-semibold text-white bg-purple-700 hover:bg-purple-500"}>
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