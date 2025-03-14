const { useContext } = React;
const UserContext = window.UserContext;

function Profile() {
    const { user, setUser } = useContext(UserContext);
    return (
        <div className="profile">
            <h3>Perfil</h3>
            <p>Nombre: {user.name}</p>
            <p>Edad: {user.age}</p>
            <p>Correo: {user.email}</p>
        </div>
    );
}

window.Profile = Profile;