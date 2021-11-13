import React from "react";
import Dropdown from "./Dropdown";


export default function Navigation() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const cities = [{value: "Kraków", key: "Cracow"},
        {value: "Katowice", key: "Katowice"},
        {value: "Tychy",key: "Tychy"}];
    const services = [{value: "Zakup nieruchomości", key: "buy-estate"},
        {value: "Najem nieruchomości", key: "rent-estate"},
        {value: "Doradztwo", key: "advisement"},
        {value: "Projektowanie wnętrz", key: "inside-design"}]

    return (
            <div className="flex flex-wrap">
                <div className="w-full fixed">
                    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-700">
                        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                            <div
                                className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                                <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                                    href="/">
                                    Some estates
                                </a>
                                <button
                                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => setMenuOpen(!menuOpen)}>
                                </button>
                            </div>
                            <div
                                className={
                                    "lg:flex flex-grow items-center" +
                                    (menuOpen ? " flex" : " hidden")
                                }
                                id="example-navbar-info"
                            >
                                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                    <li className="nav-item">
                                        <a
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            href="/"
                                        >
                                            Strona główna
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            href="/search"
                                        >
                                            Wyszukaj
                                        </a>
                                    </li>
                                    <li>
                                        <Dropdown items={cities} name={"Nieruchomości"}/>
                                    </li>
                                    <li>
                                        <Dropdown items={services} name={"Usługi"}/>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            href="/about-us"
                                        >
                                            O nas
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            href="/contact"
                                        >
                                            Kontakt
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
    );
}