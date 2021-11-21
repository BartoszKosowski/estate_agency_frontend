import React from "react";
import data from "../data/path.json"

export class Search extends React.Component{


    render() {
        return(
            <div className={"text-lg h-40"}>
                {data.api.agents}
            </div>
        )
    }
}