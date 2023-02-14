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
        
    })
    .catch(err => {
        console.log(err)
    })
    console.log(obj)
}