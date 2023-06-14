import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <>
      {props.isLoggedIn ? (
        <h1>
          Hello {props.name} , Welcome to the app ! You have{" "}
          {props.messageCount} unread messages.
        </h1>
      ) : (
        <h1>Welcome Guest!</h1>
      )}
    </>
  );
};

export default Greet;
