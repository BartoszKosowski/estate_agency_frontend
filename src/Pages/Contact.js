import React from "react";
import "../Styles/mapsStyle.css"
import {BsTelephone, HiOutlineMail} from "react-icons/all";

export class Contact extends React.Component {

    render() {
        return (
            <div className={"bg-gray-400 md:container md:mx-auto"}>
                <div className={"text-lg h-screen grid grid-cols-2 mx-auto"}>
                    <div className={"w-2/3 mx-auto text-lg mt-10 border-r-2 mb-10"}>
                        <div className={"text-2xl text-white font-semibold uppercase mb-3"}>
                            Porozmawiaj z nami:
                        </div>
                        <div>
                            <HiOutlineMail size={40} color={"white"} className={"float-left mr-2 -mt-1"}/>
                            <div className={"mt-3 text-white text-xl ml-5"}>
                                <span className={"font-semibold mt-1"}>E-mail: </span> office@someestate.com
                            </div>
                        </div>
                        <br/>
                        <div>
                            <BsTelephone size={38} color={"white"} className={"float-left mr-2"}/>
                            <div className={"mt-2 text-white text-xl ml-5"}>
                                <span className={"font-semibold mt-1"}>Telefon: </span> +48 501 253 466
                            </div>
                        </div>

                    </div>
                    <div className={"grid grid-rows-2 mt-10 text-white font-semibold"}>
                        <div>
                            <span className={"text-2xl font-semibold uppercase"}>
                                Spotkajmy się
                            </span>

                            <br/>
                            Zapraszamy do  naszego biura w następujących godzinach:
                            <div className={"grid grid-cols-2 mt-5 "}>
                                <div className={"mx-auto flex uppercase font-semibold"}>Poniedziałek:
                                <br/>
                                    Wtorek:
                                <br/>
                                    Środa:
                                    <br/>
                                    Czwartek:
                                    <br/>
                                    Piątek:
                                    <br/>
                                    Sobota:
                                </div>
                                <div className={"font-semibold"}>
                                    9:00 - 17:00
                                    <br/>
                                    9:00 - 17:00
                                    <br/>
                                    9:00 - 17:00
                                    <br/>
                                    9:00 - 17:00
                                    <br/>
                                    9:00 - 17:00
                                    <br/>
                                    10:00 - 15:00
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className={"mx-auto flex items-center"}>
                                <iframe
                                    src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1274.640438870381!2d18.6772782!3d50.2866846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113103062bee1f%3A0xc8fb0647d8c52586!2sKujawska%202%2C%2044-100%20Gliwice!5e0!3m2!1spl!2spl!4v1636922631195!5m2!1spl!2spl"}
                                    width={"600"} height={"450"} loading="lazy" title={"headquarters-map"} className={"-mt-20"}/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}