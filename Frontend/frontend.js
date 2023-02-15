window.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:4/get-all-users')
    .then(res => {
        console.log(res.data)
        for(let i=0; i<res.data.length; i++){
            showUserOnScreen(res.data[i])
        }
    })
    .catch(err => {
        console.log(err)
    })
})

function saveUserToDatabase(e){
    e.preventDefault()

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    let obj={
        name,
        email,
        number
 
    };

    axios.post('http://localhost:4/add-user', obj)
    .then(res => {

        showUserOnScreen(res.data)

        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('number').value = ''
        
    })
    .catch(err => {
        console.log(err)
    })

}


async function showUserOnScreen(user){
    
    console.log(user)
    try{
        let userLi = `<li id='${user.id}'>${user.name}-${user.email}-${user.number}
        <button onclick=deleteUser('${user.id}') class="delete-buttons">Delete Order</button>
        </li>`
        let parDiv = document.getElementById('list')

        parDiv.innerHTML = parDiv.innerHTML + userLi
    }
    catch(err){
        console.log(err)
    }
}

function deleteUser(id){

    axios.delete(`http://localhost:4/delete-user/${id}`)
    .then(res => {
        removeUserFromUi(id)
    })
    .catch(err => {
        console.log(err)
    })
}

function removeUserFromUi(id){
    let elemToRemove = document.getElementById(`${id}`)
    let parDiv = elemToRemove.parentElement
    parDiv.removeChild(elemToRemove)
}
