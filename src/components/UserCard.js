import React from "react"


 const User = props =>{
    console.log(props)
    return(
        <div>
            <img src={props.myAcc.avatar_url} alt=""/>
           <h3>Login => {props.myAcc.login} </h3>
           <h3>Bio => {props.myAcc.bio}</h3>
           <h3>Blog => {props.myAcc.blog}</h3>
           <h3>Company => {props.myAcc.company}</h3>
           <h3>Created at => {props.myAcc.created_at}</h3>
           <h3>Followers => {props.myAcc.followers}</h3>     
           <h3>Location => {props.myAcc.location}</h3>
           <h3>Email => {props.myAcc.email}</h3>
           <h3>Following => {props.myAcc.following}</h3>
           <h3>ID => {props.myAcc.id}</h3>
           <h3> Name => {props.myAcc.name}</h3>
           <h3>Node ID => {props.myAcc.node_id}</h3>
           <h3>Public_gists => {props.myAcc.public_gists}</h3>
           <h3>Public_repos => {props.myAcc.public_repos}</h3>
           <h3>Type => {props.myAcc.type}</h3>
           <h3>Updated at => {props.myAcc.updated_at}</h3>
           <h3>URL => {props.myAcc.url}</h3>
        </div>
    )
}

export default User;


