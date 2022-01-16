import React from "react";


export class InsideDesign extends React.Component {
    render() {
        return (
            <div className={"bg-gray-400 md:mx-auto"}>
                <div className={"w-full"}>
                    <img className={"w-full h-80 object-cover"} src={"img/pexels-thirdman-5582597.jpg"}
                         alt={"architectonic project"}/>

                    <div className={"mt-20 h-60 w-full text-white text-xl  bg-gray-500"}>
                        <span className={"text-3xl font-semibold uppercase mb-5"}>
                            nie masz pomysłu jak się urządzić?
                        </span>
                        <br/>
                        Nasi projektanci od lat specjalizują się w tworzeniu uniklanych wnętrz, nadadzą twojemu
                        mieszkaniu niesamowity, dostosowany
                        do Ciebie styl. Lubisz klasycyzm lub późne rokoko? A może preferujesz nowoczesne wnętrza?
                        Projekty naszych doradzców na pewno sprostają twoim wymaganią!

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