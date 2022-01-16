import React from "react";
import data from "../resources/data/path.json";
import {BiPhone, HiOutlineMail} from "react-icons/all";
import axios from "axios";

export class OfferAgent extends React.Component {
    state = {
        agents: []
    }

    async componentDidMount() {
        await this.api.get(data.api.agents.toString() + "/" + this.props.agentNumber.toString())
            .then(res => this.setState({agents: res.data}))

    }

    api = axios.create({
        baseURL: "https://" + data.env.dev.realEstateAgencyAPI.hostName + ":" + data.env.dev.realEstateAgencyAPI.port
    })


    render() {
        return (
            <div className={"text-white"}>
                <div className={"h-20 w-full bg-blue-800 grid place-items-center text-xl uppercase font-semibold"}>
                    Skontaktuj się z agentem
                </div>
                <div>
                    <img src={this.state.agents.PhotoUrl} className={"object-contain m-auto"}
                         alt={"once of our agent"}/>
                </div>
                <div className={"h-20"}>
                    <div className={"text-xl uppercase grid place-items-center"}>
                        {this.state.agents.FullName}
                    </div>
                    <div>
                        <HiOutlineMail size={20} className={"float-left mr-2 mt-1"}/>
                        {this.state.agents.Email}
                        <br/>
                        <BiPhone size={20} className={"float-left mr-2 mt-1"}/>
                        {this.state.agents.PhoneNumber}
                    </div>
                </div>
            </div>
        )
    }
}