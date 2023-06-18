import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Greet from "./Greet";
import { Person } from "./Person";
import { PersonList } from "./PersonList";
// import { Status } from "./Status";
import Heading from "./Heading";
import { Oscar } from "./Oscar";
import { Button } from "./Button";
import { Input } from "./Input";
import { Container } from "./Container";

function App() {
  const personName = {
    first: "Rashik",
    last: "Neupane",
  };

  const nameList = [
    {
      first: "Sandesh",
      last: "Bhandari",
    },
    {
      first: "Sagar",
      last: "Bhandari",
    },
    {
      first: "Sudip",
      last: "Bhandari",
    },
  ];
  return (
    <div className="App">
      <Greet name="Rashik" messageCount={12} isLoggedIn={true} />{" "}
      {/*The messageCount is optional here, if we don't pass its value it will set the default value which is 0 in this case */}
      <Person name={personName} />
      <PersonList names={nameList} />
      {/* <Status status={"loading"} /> */}
      {/* 
      Here the status component must be provided with the type values defined in StatusProps in Status.tsx component
      Try Changing the value of status prop, you will get an error.
      */}
      <Oscar>
        <Heading>The Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          // the handleClick function passed as prop to the button element
          console.log("Button Clicked!", event, id); // pass event and id
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1.5rem" }} />
    </div>
  );
}

export default App;
