const MyInput = window.MyInput; // Recupera el componente de window
const { useContext } = React;
const UserContext = window.UserContext;

function MyForm() {
    const { user, setUser } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    return (
        <div>
            <h3>Formulario</h3>
            <form className="myForm">
            <MyInput label="Nombre" type="text" name="name" id="nombre" value={user.name || ''} onChange={handleChange} />
            <MyInput label="Edad" type="number" name="age" id="edad" value={user.age || ''} onChange={handleChange} />
            <MyInput label="Correo" type="email" name="email" id="email" value={user.email || ''} onChange={handleChange} />
        </form>
        </div>
    );
}

window.MyForm = MyForm;