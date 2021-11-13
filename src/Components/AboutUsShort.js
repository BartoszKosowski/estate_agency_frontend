import React from "react";

export class AboutUsShort extends React.Component {
    render() {
        return (
            <div className={"w-full mt-10"}>
                <div className={"w-1/2 m-auto text-left font-semibold text-4xl text-white "}>
                    <div className={"border-b-2 border-white"}>
                        O nas
                    </div>
                    <div className={"text-lg text-justify mt-3 text-xl"}>
                        Jesteśmy jedną z najbardziej innowacyjnych agencji nieruchomości w Polsce o głębokich tradycjach developerskich oraz krajowym kapitale.
                        Korzystając z naszych usług masz pewność, że każda tranzakcja przebiegnie bez żadnych przeszkód.
                    </div>
                </div>
            </div>
        )
    }
}