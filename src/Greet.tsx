import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;  //The question mark (?) denotes that the prop value is optional in this case
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props    //this defines that the default value for the messageCount will be 0 if it is not called in the component as it has been declared as optional here
  return (
    <>
      {props.isLoggedIn ? (
        <h1>
          Hello {props.name} , Welcome to the app ! You have{" "}
          {messageCount} unread messages.
        </h1>
      ) : (
        <h1>Welcome Guest!</h1>
      )}
    </>
  );
};

export default Greet;
