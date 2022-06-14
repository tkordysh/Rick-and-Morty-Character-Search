import React from "react"



const DisplaySinglePersonCard = (props) => {

    // console.log(props);

    const { person } = props;
    

    return (
         <article>
            <img src={person.image} alt={person.name}></img>
            <h2>{person.name}</h2>
            <p>{person.name} is a {person.gender} {person.species} who is currently {person.status}</p>
            <h3>Appears in the following episodes</h3>
         </article>
    )
}


export default DisplaySinglePersonCard