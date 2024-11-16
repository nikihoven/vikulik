import React, { useState } from "react";
import Button from "./Button";

export const WhiteOutlinedRoundButton = ({ children, ...props }) => (
  <Button
    shape="round"
    color="white"
    border={true}
    textColor="black"
    {...props}
  >
    {children}
  </Button>
);

export const WhiteRoundButton = ({ children, ...props }) => (
  <Button
    shape="round"
    color="white"
    border={false}
    textColor="black"
    {...props}
  >
    {children}
  </Button>
);

export const BlackRoundButton = ({ children, ...props }) => (
  <Button
    shape="round"
    color="black"
    border={false}
    textColor="white"
    {...props}
  >
    {children}
  </Button>
);


  export const GrayRoundButton = ({ children, ...props }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };

    return (
      <Button
        shape="round"
        color={isActive ? "gray-active" : "gray"}
        border={false}
        textColor="dark-gray"
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
    );
  };

  export const WhiteSquaredOutlinedRoundButton = ({ children, ...props }) => (
    <Button
      shape="square"
      color="white"
      border={true}
      textColor="black"
      {...props}
    >
      {children}
    </Button>
  );


