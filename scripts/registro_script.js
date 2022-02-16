const saveUser = () => {
  const obj = {
    nombre: document.getElementById("name").value,
    apellido: document.getElementById("lastName").value,
    telefono: document.getElementById("phone").value,
    direccion: document.getElementById("address").value,
  };
  if(obj['nombre'].length == 0 || obj['apellido'].length == 0 || obj['telefono'].length == 0 || obj['direccion'].length == 0 ){
    alert('Rellena todos los campos.');
  } else {
    localStorage.setItem("user", JSON.stringify(obj));
  }
  
};
