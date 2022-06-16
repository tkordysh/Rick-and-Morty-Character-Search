import React from "react"



const DisplaySinglePersonCard = (props) => {

    console.log(props);

    const { person } = props;
    

    return (
         <article>
            <img src={person.image} alt={person.name}></img>
            <h2>{person.name}</h2>
            <p>{person.name} is a {person.gender} {person.species} whose status is currently {person.status}</p>
         </article>
    )
}


export default DisplaySinglePersonCard