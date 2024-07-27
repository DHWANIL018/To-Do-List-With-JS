// Shree Ganeshay namah 
// let month = date.getMonth()+1
// console.log(date_date,month)
function main_btn() {
    let date = new Date()
    let date_date = date.getDate()
    let month = date.getMonth() + 1
    
    let userlist = JSON.parse(localStorage.getItem('userlist')) || []
    console.log(userlist)

    if (date_date < 10) {
        date_date = "0" + date_date
    }
    
    month < 10 ? month = "0" + month : console.log("fhdna")
    let mix = `${month} - ${date_date}`
    console.log(mix)
    let input = document.querySelector('#input').value
    if(input == ""){
        let error = document.querySelector('#error')
        error.style.display = "block"
        error.innerHTML = "Enter Your Text"
        throw ReferenceError    
    }
    let id = userlist.length
    let myobj = {
        input:input,
        date : mix,
        id:id
    }
    userlist.push(myobj)
    localStorage.setItem("userlist",JSON.stringify(userlist))
    
    console.log(myobj)
    document.querySelector('#input').value = ""
    show()
}
show()
    function show(){
        let userlist = JSON.parse(localStorage.getItem('userlist')) 
        let result = ''
        userlist.forEach((ele,index) =>{
            console.log(ele)
            console.log(ele.date)
            result+=`  
            
             <div class="d-flex  align-items-center p-1 border-main flex-wrap mt-3">
            <div class="m-4">
    <input type="checkbox" class="form-check-input" onchange="add(${ele.id})" id="myCheckbox">
</div>
<div>
    <h5 style="font-size: 1.3rem;">${ele.input}</h5>
    <h5 style="font-size: 1.1rem;" class="text-danger">${ele.date}</h5>
</div>
</div>
`
        })

        document.querySelector('.main_show').innerHTML = result
    }


    function add(id){
        let userlist = JSON.parse(localStorage.getItem('userlist')) 
            console.log(id)

        setTimeout(() => {
            let id_find = userlist.findIndex(ele=>{
                return ele.id === id
            })
    
            userlist.splice(id_find,1)
            localStorage.setItem('userlist',JSON.stringify(userlist))
            show()
            console.log(id_find)
        }, 1000);


       


    }


    