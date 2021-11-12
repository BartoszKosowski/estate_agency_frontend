import {FaHandshake, FaLightbulb, GiMoneyStack} from "react-icons/all";
import {white} from "tailwindcss/colors";


export const DescribeServices = () => {
    return(
        <div className={"w-full"}>
            <div className={"w-1/2 m-auto text-center font-semibold text-3xl text-white border-b-2 border-white"}>
                <div className={"mb-3"}>
                    Zapewniamy następujące usługi:
                </div>
            </div>
            <div className={"mx-10 mt-3  grid grid-cols-3 gap-5 text-center"}>
                <div className={"mx-auto"}><FaHandshake size={45} color={white}/></div>
                <div className={"mx-auto"}><GiMoneyStack size={45} color={white}/></div>
                <div className={"mx-auto"}><FaLightbulb size={45} color={white}/></div>
            </div>
            <div className={"mx-10 grid grid-cols-3 gap-10 text-center text-white"}>
                <div className={"container"}>
                    <div className={"text-xl uppercase font-semibold"}>
                        Zakup nieruchomości
                    </div>
                    <div className={"mt-1 text-lg justify-center text-center"}>
                        Oferujemy duży wybór wybór różnego rodzaju nieruchomości. Udostępniamy tylko pewne oferty,
                        każda nieruchomość została dokładnie sprawdzona przed wystawieniem.
                    </div>
                </div>
                <div className={"container"}>
                    <div className={"text-xl uppercase font-semibold"}>
                        Sprzedaż nieruchomości
                    </div>
                    <div className={"mt-1 text-lg text-center justify-center"}>
                        Chcesz sprzedać nieruchomość ale nie wiesz jak to zrobić? Umów się z nami na spotkanie a nasi agenci zajmą się
                        wszystkim za Ciebie!
                    </div>
                </div>
                <div className={"container text-center"}>
                    <div>
                        <div className={"text-xl uppercase font-semibold"}>
                            Inspiracje
                        </div>
                    </div>
                    <div className={"mt-1 text-lg text-center justify-center"}>
                        Nie jesteś pewien, czego szukasz? A może potrzebujesz pomocy w urządzeniu nowego mieszkania?
                        Nasi konsultancji pomogą Ci wybrać, a następnie urządzić mieszkanie dokładnie pod Ciebie.
                    </div>
                </div>
            </div>
        </div>
    )
}