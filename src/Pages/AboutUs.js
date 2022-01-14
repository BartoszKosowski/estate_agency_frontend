import React from "react";
import {AgentProfile} from "../Components/AgentProfile";


export class AboutUs extends React.Component{


    render() {
        return(
            <div className={"bg-gray-400 md:mx-auto text-white text-3xl font-semibold"}>
                <div className={"md:container mx-auto"}>
                    Nasz zespół
                    <AgentProfile/>
                </div>
            </div>
        )
    }
}