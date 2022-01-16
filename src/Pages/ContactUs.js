import React from "react";
import axios from "axios";

export class ContactUs extends React.Component {

    state = {
        services: [],
        charactersLeft: 5000,
        description: "",
        email: "",
        phoneNumber: "",
        name: "",
        lastName: "",
        selectedService: 0,
    }

    componentDidMount() {
        axios.get("https://localhost:5001/api/tradeInfoes/domain/service")
            .then(res => this.setState({services: res.data}));
        console.log(this.state.services)
    }

    correctFillInput(id, name, method) {
        return (
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={id} type="text" placeholder={name} onChange={method}/>
        )

    }

    incorrectFillInput(id, name){
        return(
            <div>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={id} type="text" placeholder={name}/>
                <p className="text-red-500 text-base italic">Proszę poprawnie wypełnić pole</p>
            </div>
        )
    }

    formatLabel(content){
        return(
            <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
                   htmlFor="grid-last-name">
                {content}
            </label>
        )
    }

    textCounter(maxLength) {
        if (maxLength > 0) {
            this.setState({charactersLeft: (this.state.charactersLeft - 1)})
        }
    }

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value})
        if (this.state.description === "") {
            this.setState({charactersLeft: 5000})
        } else {
            this.setState({charactersLeft: 5000 - this.state.description.toString().length})
        }
    }

    handleCreateRequest = () => {

        axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
        axios.post("https://localhost:5001/api/Requests", {
            Name: this.state.name,
            LastName: this.state.lastName,
            Email: this.state.email,
            PhoneNumber: this.state.phoneNumber,
            Description: this.state.description,
            Status: 9,
            Service: 20
        }).then(function (response) {
            console.log(response)
            alert("Zgłoszenie dodano pomyślnie")
        })
            .catch(function (error) {
                console.log(error);
                alert("Nie udało się dodać zgłoszenia")
            });
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleLastNameChange = (event) => {
        this.setState({lastName: event.target.value})
    }

    handleNumberChange = (event) => {
        this.setState({phoneNumber: event.target.value})
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handleServiceChange = (event) => {
        this.setState({selectedService: event.target.value})
    }


    render() {
        return (
            <div className={"md:container bg-gray-400 md:mx-auto grid grid-cols-2 h-screen"}>
                <div className>
                    <img src={"img/pexels-rodnae-productions-8297642.jpg"} className={"object-fill"} alt={"mailbox"}/>
                </div>
                <div>
                    <form className={"w-full"}>
                        <div className="flex flex-wrap mt-6 -mx-3 mb-6">
                            <div className="w-10/12 mx-auto md:w-5/12 px-3 mb-6 md:mb-0">
                                {this.formatLabel("Imię")}
                                {this.correctFillInput("nameInput", "Jan", this.handleNameChange)}
                            </div>
                            <div className="w-10/12 mx-auto md:w-5/12 px-3">
                                {this.formatLabel("Nazwisko")}
                                {this.correctFillInput("lastNameInput", "Kowalski", this.handleLastNameChange)}
                           </div>
                       </div>
                       <div className={"w-11/12 mx-auto flex flex-wrap mb-6"}>
                           {this.formatLabel("E-mail")}
                           {this.correctFillInput("emailInput", "example@example.com", this.handleEmailChange)}
                       </div>
                        <div className={"w-11/12 mx-auto flex flex-wrap mb-6"}>
                            {this.formatLabel("Numer telefonu")}
                            {this.correctFillInput("phoneInput", "+48 123456789", this.handleNumberChange)}
                        </div>
                        <div className={"w-11/12 mx-auto flex flex-wrap mb-6"}>
                            {this.formatLabel("Wybierz usługę")}
                            <select
                                className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="serviceSelect" onChange={this.handleServiceChange}>
                                {this.state.services.map(service => <option
                                    value={service.IdInfo}>{service.Name}</option>)}
                            </select>
                        </div>
                        <div className={"w-11/12 mx-auto flex flex-wrap mb-6"}>
                            {this.formatLabel("Dodatkowa wiadomość")}
                            <div className={"w-full mx-auto flex flex-wrap"}>
                                <input className={"bg-gray-400"} disabled maxLength="21" size="21"
                                       value={"Pozostało " + this.state.charactersLeft + " znaków"} id="counter"/>
                                <textarea
                                    className={"w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}
                                    onChange={this.handleDescriptionChange} id={"description"} maxLength={5000}/>
                           </div>
                       </div>
                    </form>
                    <div className={"w-11/12 -mb-10 ml-7 flex items-end"}>
                        <button className={"w-1/3 h-20 bg-blue-800 hover:bg-blue-600 text-white"}
                                onClick={this.handleCreateRequest}>
                            Wyślij
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


