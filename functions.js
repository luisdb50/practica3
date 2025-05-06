
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
    
    const formData = new FormData(event.target)
    const name = formData.get('name')
    const last_name = formData.get('last_name')
    const dni = formData.get('dni')

    console.log('Los datos han sido cargados: ')
    console.log('- Nombre: ', name)
    console.log('- Apellido: ', last_name)
    console.log('- Cedula: ', dni)

    const alertComponent = document.getElementById('alert')
    alertComponent.style.display = 'inline'

    event.target.reset();

});

const onClickButtom = ()=> {
    location.assign("./welcome.html")
}