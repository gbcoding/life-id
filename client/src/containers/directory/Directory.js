import React, { Component } from "react";

import axios from 'axios';

export default class Directory extends Component {
    constructor(props){
        super(props);

        this.state = {


        };

    }

    componentDidMount() {
        // Call our fetch function below once the component mounts 
        this.axiosGET('/directory')
            .then(response => {
                this.setState({ serverMessage: response.data.serverMessage});
                console.log("Directory component mounted and data recieved");
                console.log(this.state.serverMessage);
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