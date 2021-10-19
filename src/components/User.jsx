import React from "react";

export default function User(props) {
  return (
    <div>
      {props.name ? 
        <span> Welcome to unit test, {props.name}!</span>
       : 
        <span>Whatever Stranger!</span>
      }
    </div>
  );
}
