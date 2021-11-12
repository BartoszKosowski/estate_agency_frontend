import React from "react";
import {DescribeServices} from "../Components/DescribeServices";


export class Home extends React.Component {
    render() {
        return (
            //TODO naprawić ten obrazek aby dobrze się wyświetlał pronto 
            <div className={"text-lg container bg-gray-400 mx-auto"}>
                <div className={"relative"}>
                    <img className={"object-contain w-full"} src={"img/pexels-max-vakhtbovych-7545789.jpg"} alt={"Room"}/>
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
                <div className={"bg-purple-700 container w-1/2 justify-center mt-5 mx-1 mx-auto h-52"}>
                    <div>
                        <div>
                            {/*TODO add url to contact page*/}
                            <img src={"img/pexels-fauxels-3184416.jpg"} alt={"Contact us!"}/>
                        </div>
                    </div>
                </div>
                <div className={"h-60"}/>
            </div>
        )
    }
}