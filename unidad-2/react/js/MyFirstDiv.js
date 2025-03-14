function MyFirstDiv() {
    return (
        <div>

            <h1>Hello, React with CDN!</h1>
            <p>This is my first div</p>
        </div>
    );
}

// Lo asignamos al objeto window para que sea accesible en index.html
window.MyFirstDiv = MyFirstDiv;
