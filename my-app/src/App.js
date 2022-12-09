import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Success from './components/Success';
import NewPickUpLineForm from "./components/NewPickUpLineForm";
import Nav from "./components/Nav";
import AllPickUpLines from "./components/AllPickUpLines";
import Home from "./components/Home";
import PickUpLinesContainer from "./components/PickUpLinesContainer";
import './App.css';

function App() {

  const [pickUpLines, setPickUpLines] = useState([])
  const [successStories, setSuccessStories] = useState([])
  const url = ("http://localhost:3004/pickuplines")
  const urlFeedBack = ("http://localhost:3004/feedback")
  

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setPickUpLines(data))
  }, [])

  useEffect(()=>{

    fetch(urlFeedBack)
    .then(res => res.json())
    .then(data => setSuccessStories(data))

 },[])

  function handleNewLine(pickup){
    setPickUpLines([...pickUpLines, pickup])
 }

 
  return (
      <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/newpickupline">
          <NewPickUpLineForm handleNewLine={handleNewLine} />
        </Route>
        <Route exact path="/success">
          <Success successStories={successStories}/>
        </Route>

        <Route exact path="/allpickuplines">
          <AllPickUpLines pickUpLines={pickUpLines}  />
        </Route>
        {/* <PickUpLinesContainer pickUpLines={pickUpLines}/> */}
      </Switch>
       </div>
  );
}
export default App;
