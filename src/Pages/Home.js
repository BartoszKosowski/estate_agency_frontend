import React from "react";
import {DescribeServices} from "../Components/DescribeServices";
import "../Styles/home.css"
import {AboutUsShort} from "../Components/AboutUsShort"


export class Home extends React.Component {
    render() {
        return (
            <div className={"text-lg container bg-gray-400 mx-auto"}>
                <img className={"w-full h-auto object-contain"} src={"img/pexels-max-vakhtbovych-7546766.jpg"}
                     alt={"Room"}/>
                <div className={"verticalCenter"}>
                    <div className={"w-3/4 flex ml-52 align-middle"}>
                        <input type={"text"} id={"searchBox"}
                               placeholder={"Podaj słowa kluczowe np. mieszkanie z balkonem w centrum Katowic"}
                               className={"mt-10 shadow appearance-none border text-2xl rounded w-3/4 h-12 float-left py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}/>
                        <button
                            className="mt-10 bg-purple-700 hover:bg-purple-500 ml-3 text-white text-2xl font-bold py-2 px-4 rounded text-center w-40">
                            Szukaj
                        </button>
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