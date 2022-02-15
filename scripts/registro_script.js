const saveUser = () => {
  const obj = {
    nombre: document.getElementById("name").value,
    apellido: document.getElementById("lastName").value,
    telefono: document.getElementById("phone").value,
    direccion: document.getElementById("address").value,
  };
  localStorage.setItem("user", JSON.stringify(obj));
};
