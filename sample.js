window.addEventListener('DOMContentLoaded', ()=>{

    axios
    .get('https://crudcrud.com/api/6ab63fe87f9143f4a5135a2fcabd98af/appointmentData')
    .then(res => {
        
        for(let i= 0; i<res.data.length ; i++){
            showUserOnScreen(res.data[i], res.data[i]._id)
            console.log(res.data[i])
        }
    })
    .catch(err => console.error(err));
})

        
function saveUserToCrudCrud(event)
{
    event.preventDefault();
    console.log('hi')

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    let obj={
        name: name,
        email: email
 
    };

    //Can use this too, it's same as above obj notation
    /* let obj={
        name,
        email
    }; */

    // POST request to store data in crud crud API
    axios.post('https://crudcrud.com/api/6ab63fe87f9143f4a5135a2fcabd98af/appointmentData', obj)
        .then(res => {
            // console.log("Saved user to Crud Crud, here's the data- " , res)
            // console.log(res.data._id)
            showUserOnScreen(obj, res.data)

            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('number').value = ''
        })
        .catch(err => console.error(err))


 
 }

function showUserOnScreen(obj, userDetails){

    let str = obj.name + ',' + obj.email ;

    let listItem = document.createElement('div');
    listItem.className = 'list-of-appointments'
    listItem.id = userDetails._id
    listItem.textContent = str;
      
    let parentDiv = document.getElementById('list')

    createDeleteButton(listItem)
    createEditButton(listItem, userDetails)
    parentDiv.appendChild(listItem)
}


 function createEditButton(listItem, userDetails){

    let btnEdit = document.createElement('input')
    btnEdit.type = 'button'
    btnEdit.value = 'edit'
    btnEdit.style.marginLeft = '10px'
    listItem.appendChild(btnEdit)

    btnEdit.onclick = () =>
    {    
        let elementToDelete = btnEdit.parentElement
        let _id = elementToDelete.id

                axios.delete(`https://crudcrud.com/api/6ab63fe87f9143f4a5135a2fcabd98af/appointmentData/${_id}`)
                    .then((res)=>{

                        console.log("Deleted & here's the data- \n" , res)

                        let mainparent = elementToDelete.parentElement
                        mainparent.removeChild(elementToDelete)

                        let name = document.getElementById('name')
                        name.value = userDetails.name
                        let email = document.getElementById('email')
                        email.value = userDetails.email

                    })
                    .catch((err)=>{
                        console.log(err)
                    })
      
    }
}

function createDeleteButton(listItem){

    let deleteBtn = document.createElement('input')
    deleteBtn.className = 'delete-button'
    deleteBtn.type = 'button'
    deleteBtn.value = 'delete'
    deleteBtn.style.backgroundColor = 'red'
    deleteBtn.style.marginLeft = '20px'
    listItem.appendChild(deleteBtn)

    deleteBtn.onclick = () =>
    {
        let elementToDelete = deleteBtn.parentElement
        let _id = elementToDelete.id

                axios.delete(`https://crudcrud.com/api/6ab63fe87f9143f4a5135a2fcabd98af/appointmentData/${_id}`)
                    .then((res)=>{
                        console.log("Deleted & here's the data- \n" , res)

                        let mainparent = elementToDelete.parentElement
                        mainparent.removeChild(elementToDelete)

                    })
                    .catch((err)=>console.log(err))
      
    }
}