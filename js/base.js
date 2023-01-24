const UserForm = document.querySelector('#userForm')
const Name = document.querySelector('#name')
const Surname = document.querySelector('#surname')
const Age = document.querySelector('#age')
const UlTask = document.querySelector('.ultask')
const AlertDOM = document.querySelector('#alert')

function getSelectValue() {
    const Gender = document.querySelector('#gender').value
    console.log(Gender)
}


const alert = (message , className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>Hata!</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

UserForm.addEventListener('submit' , formHandler)

function formHandler(event) {
    event.preventDefault ()
    
    if (Name.value && Surname.value ) {
        addItems(Name.value , Surname.value , Age.value , getSelectValue()) //Aşağaıdaki fonksiyonu burada çağırdık.
          Name.value = ""
          Surname.value = ""
          Age.value = ""
    } else if (alert) {
        AlertDOM.innerHTML = alert(
            "Eksik Bilgi Girdiniz" ,
            "danger"
        )
    }
}

function addItems (name , surname , age , getSelectValue) {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${name} ${surname} / ${gender.value}   <span class="badge bg-primary rounded-pill">${age}</span>`
    liDOM.classList.add('list-group-item' ,'d-flex', 'justify-content-between' , 'border', 'border-secondary' ,'align-items-center')
    UlTask.appendChild(liDOM)
}