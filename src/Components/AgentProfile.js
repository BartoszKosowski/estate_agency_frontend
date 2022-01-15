import React from "react";
import axios from "axios";
import data from "../data/path.json"


export class AgentProfile extends React.Component {
    state = {
        agents: []
    }

    async componentDidMount() {
        await this.api.get(data.api.agents.toString())
            .then(res => {
                this.setState({agents: res.data})
            })
    }

    api = axios.create({
        baseURL: "https://" + data.env.dev.realEstateAgencyAPI.hostName + ":" + data.env.dev.realEstateAgencyAPI.port
    })

    render() {
        return (
            <div className={"grid grid-cols-2 mx-10 my-10 gap-16"}>
                {this.state.agents.map(agent =>
                    <div className={"h-auto bg-blue-900 grid grid-cols-2"}>
                        <div className={"h-full"}>
                            <img src={agent.PhotoUrl} className={"object-contain h-full m-auto"}
                                 alt={"once of our agent"}/>
                        </div>
                        <div className={"h-2/3 text-lg font-semibold text-white"}>
                            <span className={"uppercase"}>{agent.FullName}</span>
                            <div className={"mt-4"}><span className={"uppercase"}>e-mail</span> <br/>{agent.Email}</div>
                            <div className={"w-1/3"}><span className={"uppercase"}>Telefon:</span>
                                <br/>{agent.PhoneNumber}</div>
                        </div>
                    </div>
                )}
            </div>
        )

    }
}