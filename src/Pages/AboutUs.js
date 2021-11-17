import React from "react";


export class AboutUs extends React.Component{
    render() {
        return(
            <div className={"bg-gray-400 container mx-auto"}>
                About us
                <div className={"grid grid-cols-2 mx-10 my-10 gap-20"}>
                    <div className={"h-auto bg-purple-500 grid grid-cols-2"}>
                        <div className={"h-full bg-pink-400"}>
                            <img src={"img/pexels-edmond-dantès-4347368.jpg"} className={"object-contain h-full m-auto"}/>
                        </div>
                        <div className={"h-full"}></div>
                    </div>
                    <div className={"h-80 bg-purple-500"}></div>
                    <div className={"h-80 bg-purple-500"}></div>
                    <div className={"h-80 bg-purple-500"}></div>
                    <div className={"h-80 bg-purple-500"}></div>
                    <div className={"h-80 bg-purple-500"}></div>
                </div>
                <div>A</div>
            </div>
        )
    }
}