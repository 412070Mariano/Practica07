function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    updateContentMargin();
}

function updateContentMargin() {
    const sidebar = document.getElementById('sidebar');
    const contenido = document.querySelector('.contenido');

    if (sidebar.classList.contains('active')) {
        contenido.style.marginLeft = '350px'; // Ajusta según el ancho de tu sidebar
    } else {
        contenido.style.marginLeft = '0';
    }
}

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const botonMenu = document.querySelector('.boton-menu');

    // Verifica si el clic fue fuera del menú y el botón
    if (!sidebar.contains(event.target) && !botonMenu.contains(event.target)) {
        sidebar.classList.remove('active');
        updateContentMargin();
    }
});


//VERIFICAR LOGIN
const login={
    email: 'correo123@gmail.com',
    clave: 'clave123'
}

function verificar_login(){
    const $email = document.getElementById('emailInput')
    const $clave = document.getElementById('i-con')

    if($email.value === ''){
        alert('Debe ingresar un email!')
        return false
    }
    if($clave.value === ''){
        alert('Debe ingresar un contraseña!')
        return false
    }
    if($email.value != login.email || $clave.value != login.clave){
        alert('Email o contraseña incorrectas!')
        return false
    }

    window.location.href="/Index.html";
}

function MostrarContra(){
    const $pass = document.getElementById("i-con");
    $icon = document.querySelector(".bx");
    $icon.addEventListener("click", e => {
    if($pass.type === "password"){
    $pass.type = "text";
    }else{
    $pass.type = "password";
    }
    })
}


//VERIFICAR REGISTER
function verificar_register(){
    const $nomApe = document.getElementById("nomApe");
    const $email = document.getElementById('emailInput');
    const $usu = document.getElementById("usu")
    const $clave = document.getElementById('i-con');


    if($nomApe.value === ''){
        alert('Debe ingresar un Nombre y Apellido!');
        return false;
    }



    if($email.value === ''){
        alert('Debe ingresar un email!');
        return false;
    }
    if($usu.value === ''){
        alert('Debe ingresar un usuario!');
        return false;
    }


    if($clave.value === ''){
        alert('Debe ingresar un contraseña!');
        return false;
    }
    window.location.href="/Index.html";
}

//INGRESAR TURNO
function ingresar_turnos(){
    const $div = document.getElementById('contenido');
    $div.innerHTML = '';
    let items = '';
    for (let i = 0; i < clientes.length; i++) {
        let cliente = clientes[i];
        let cTurnos = '';
        turnos.forEach(t => {
            if(t.cliente === cliente){
                cTurnos +=
                `
                    <br>
                    (Id turno: ${t.idTurno}|
                    Fecha: ${t.fecha}|
                    Hora: ${t.hora})
                `
            }
        })

        if(cTurnos != ''){
            items +=
            `
                <li>${cliente} : ${cTurnos}</li>
            `
        }
    }

    $div.innerHTML =
    `
    <p>Total de turnos por cliente: ${turnos.length}</p>
    <ul>
        ${items}
    </ul>
    `
}

function validar_turno(){
    const $idTurno = document.getElementById('idTurno')
    const $fecha = document.getElementById('fechaTurno')
    const $hora = document.getElementById('horaTurno')
    const $clente = document.getElementById('clienteTurno')
    let verifId = true;
    turnos.forEach(t => {
        if(parseInt($idTurno.value) === t.idTurno)
            verifId = false;
    });

    if(verifId === false){
        alert('El id ya está en uso!')
        return false
    }
    if($idTurno.value === '' || $idTurno.value<1){
        alert('Debe ingresar un id valido!')
        return false
    }
    if($fecha.value === ''){
        alert('Debe ingresar una fecha!')
        return false
    }
    if($hora.value === ''){
        alert('Debe ingresar una hora valida!')
        return false
    }

    let nuevoTurno={
        idTurno: parseInt($idTurno.value),
        fecha: $fecha.value,
        hora: $hora.value,
        cliente: $clente.value
    }

    turnos.push(nuevoTurno);

    alert('Datos agregados con exito!')
    ingresar_turnos()
    return true
}