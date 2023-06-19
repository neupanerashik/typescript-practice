import React from 'react'

type HeadingProps = {
    children : string; // this is the type of the children i.e. string
}

const Heading = (props: HeadingProps) => { 
  return (
    <h2>{props.children}</h2> // We are calling the props here
  )
}

export default Heading