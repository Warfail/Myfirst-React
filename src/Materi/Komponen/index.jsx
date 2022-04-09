import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";
import Bootsrap from "./Styling";


export default class Komponen extends React.Component {
render() {
        return(
            <div>
                <Bootsrap/>
                <FunctionalComponent/>
                <ClassComponent/>
            </div>
        )
    }
}