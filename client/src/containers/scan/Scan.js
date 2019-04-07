import React, { Component } from "react";

import axios from 'axios';
import { resolveProjectReferencePath } from "typescript";

export default class Scan extends Component {
    constructor(props){
        super(props);

        this.state = {
            
                FirstName: "",
                LastName: "",
                Age: "",
                Gender: "",
                BloodType: "",
                ExistCond: "",
                UUID: ""
        };
    }

    componentDidMount() {

        // Call our fetch function below once the component mounts 
        this.axiosGET(`/scan/${this.props.match.params.uuid}`)
            .then(response => {
                this.setState({ ...response.data });
                console.log("MedRec object received");
                console.log(this.state);
            })
            .catch(err => console.log(err)); 
    }

    //Async Axios get request
    axiosGET = async(serverPath) => {
        try{
            const response = await axios.get(serverPath);
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    render(){

        return(
            <div>
              
            </div>
        );

    }

}