import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplaySinglePersonCard from "./components/DisplaySinglePersonCard";
import styled from "styled-components"


const StyledDiv = styled.div`
  color: ${props => props.currentPage % 2 === 0 ? 'blue' : 'red'}
`;



const initialPeople = [];



function App() {

  const [people, setPeople] = useState(initialPeople);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const [maxPage, setMaxPage] = useState(1);
  

  

  
  const pageSelector = (newPageNumber) => {
    setCurrentPage(newPageNumber)
  }
  
  const searchChange = (evt) => {
    setCurrentPage(1)
    setCurrentSearch(evt.target.value) 
  }
  
  
  
  useEffect(() => {
     axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${currentSearch}`)
     .then(res => {
      //  console.log(res.data.results)
       setPeople(res.data.results)
       setMaxPage(res.data.info.pages)
     })
     .catch(err => {
       console.error(err)
     })
  }, [currentPage, currentSearch])





  return (
    <StyledDiv className="App" currentPage={currentPage}>
      <button
       disabled={currentPage === 1}
       onClick={() => pageSelector(currentPage - 1)}>previous</button>
      <input onChange={searchChange}></input>
      <button 
       disabled={currentPage === maxPage}
       onClick={() => pageSelector(currentPage + 1)}>next</button>
      {
          people.map(person => {
          
            return <DisplaySinglePersonCard key={person.id} person={person}/>

          })
      } 
    </StyledDiv>
  );
}

export default App;
