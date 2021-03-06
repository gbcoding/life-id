import React, { Component } from "react";
import MedRec from "../medRec/medRec";
import axios from 'axios';

export default class Edit extends Component {
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
        this.axiosGET(`/edit/${this.props.match.params.uuid}`)
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
        <div contenteditable="true">
	    <h1>Medical Data</h1>
	    <p> First Name: {this.state.FirstName}</p>
	    <p> Last Name: {this.state.LastName}</p>
	    <p> Age: {this.state.Age}</p>
	    <p> Gender: {this.state.Gender}</p>
	    <p> Blood Type: {this.state.BloodType}</p>
	    <p> Existing Condition: {this.state.ExistCond}</p>
        </div>
        );
    }

}
