import React from "react";
import {AgentProfile} from "../Components/AgentProfile";


export class AboutUs extends React.Component{


    render() {
        return(
            <div className={"bg-gray-400 md:container md:mx-auto text-white text-3xl font-semibold"}>
                Nasz zespół
                <AgentProfile/>
            </div>
        )
    }
}