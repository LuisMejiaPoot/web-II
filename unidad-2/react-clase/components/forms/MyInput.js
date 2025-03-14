function MyInput({label , type, name, id, value, onChange}) {
    return (
        <div className="myInput">
            <label htmlFor="my-input">{label}</label>
            <input name={name} type={type} className="input" id={id} value={value} onChange={onChange}/>
        </div>
    );
}

window.MyInput = MyInput; // Lo almacena en el objeto global
