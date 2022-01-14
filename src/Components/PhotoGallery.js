import React from "react";
import {Carousel} from "react-responsive-carousel";

export class PhotoGallery extends React.Component {

    render() {
        return (
            //TODO add photos fetching
            <div className={"relative"}>
                <div>
                    <Carousel showArrows={true} infiniteLoop useKeyboardArrows autoPlay>
                        <div>
                            <img src={"img/pexels-binyamin-mellish-186077-.jpg"} alt={"zdjęcie"}/>
                        </div>
                        <div>
                            <img src={"img/pexels-max-vakhtbovych-7587376.jpg"} alt={"zdjęcie"}/>
                        </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}