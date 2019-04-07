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
                ExistCond: ""
        };
    }

    componentDidMount() {
        // Call our fetch function below once the component mounts 
        this.axiosGET('/scan')
            .then(response => {
                this.setState({
                    FirstName: response.data.FirstName,
                    LastName: response.data.LastName,
                    Age: response.data.Age,
                    Gender: response.data.Gender,
                    BloodType: response.data.BloodType,
                    ExistCond: response.data.ExistCond
                });
                console.log("Scan component mounted and data recieved");
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