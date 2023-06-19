type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
    // we define the type for event and also pass the id of the button
}


export const Button = (props: ButtonProps) => {
    return <button onClick={(event) =>props.handleClick(event, 1)}>Click Me!</button>
}