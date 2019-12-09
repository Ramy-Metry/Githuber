import React from "react";
import axios from "axios"
import User from "./UserCard"

class FetchUser extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            myAcc:[]
        }
    }


    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
       
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        axios.get(`https://api.github.com/users/${this.state.name}`)
        .then(res=>{
            this.setState({myAcc:res.data})  
        })
        .catch(err=>{
            console.log("error",err)
        }) 
        
        this.setState({
            name:""
        })
    }

  

    render(){
        return(
            <div >
                <form onSubmit={this.handleSubmit}>
                   <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <button type="submit">Find</button> 
                </form>
                    
                <User myAcc={this.state.myAcc}/>
                
            </div>
        )
    }
}

export default FetchUser;