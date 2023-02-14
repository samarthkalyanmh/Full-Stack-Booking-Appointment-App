window.addEventListener('DOMContentLoaded', () => {
    
})

function saveUserToCrudCrud(e){
    e.preventDefault()
    // console.log('Hi')

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
        // console.log( res.config.data )

        const user = res.config.data
        console.log(user)

        showUserOnScreen(user)
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('number').value = ''
        
    })
    .catch(err => {
        console.log(err)
    })

}


async function showUserOnScreen(user){
    
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

    // axios.delete(`http://localhost:4/delete-user/${id}`, obj)
    // .then(res => {

    // })
    // .catch(err => {
    //     console.log(err)
    // })
}
