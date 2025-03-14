

function Button({ contador, setContador }) {
    const handleClick = () => {
        setContador(contador + 1);
    }
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}
window.Button = Button;