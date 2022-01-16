import {BsFillTelephoneFill, FaFacebook, FaInstagram, FaSearchLocation, HiOutlineMail} from "react-icons/all";

export const Footer = () => {

    return (
        <footer className="footer bg-gray-700 relative pt-1 border-b-2 text-white fixed">
            <div className="container mx-auto px-6">

                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2"><a href={"/"}>some estates</a></span>
                            <span className="my-2"><a href={"/about-us"}
                                                      className="text-white text-md hover:opacity-75">O nas</a></span>
                            <span className="my-2"><a href={"/contact"}
                                                      className="text-white  text-md hover:opacity-75">Kontakt</a></span>
                            <span className="my-2"><a href={"/contact-us"}
                                                      className="text-white  text-md hover:opacity-75">Napisz do nas</a></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase mb-2">Skontaktuj się z nami:</span>
                            <span className="my-2 text-base"><HiOutlineMail size={30} className={"float-left mr-3 -mt-1"}/>office@someestate.com</span>
                            <span className="my-2 text-base"><BsFillTelephoneFill size={30} className={"float-left mr-3 -mt-1"}/>+48 501 253 466</span>
                            <span className="my-2 text-base"><FaSearchLocation size={30} className={"float-left mr-3 mt-1"}/>44-100 Gliwice <br/> Kujawska 2</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Znajdź nas w social media:</span>
                            <div className={"w-3/4 m-auto"}>
                                <div className={"grid grid-cols-2"}>
                                    <div className={"m-auto"}>
                                        <a href={"https://www.facebook.com"} target={"_blank"} rel={"noreferrer"}>
                                            <FaFacebook size={30}/>
                                        </a>
                                    </div>
                                    <div className={"m-auto"}>
                                        <a href={"https://www.instagram.com"} target={"_blank"} rel={"noreferrer"}>
                                            <FaInstagram size={30}/>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div className={"m-auto"}>
                                <div className={"float-left mr-1"}>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-white font-bold mb-2">
                            © 2021 by Bartosz Kosowski
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )

}

