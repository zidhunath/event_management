

let dataUrl =`http://localhost:3000/users`
let main= document.getElementById("conatiner")
let userArray=[]

 function fetchAnd_RenderUserData(){
    let fetchData =fetch(dataUrl,{ 
        method:'GET',
        headers:{   
            'Content-type': 'application/json',
        }
    })
    fetchData.then((response =>{
        return response.json()
    })).then((data)=>{
        let userObj = data.map((item)=>({   
            id:item.id,
            name:item.name,
            age:item.age,
            place:item.place,
            profession:item.profession

        }))
        
        renderUsers(userObj)
    })
    
}



function renderUsers(userData){
    let cardList = `  
        ${userData.map((item=>renderCard(item.id,item.name,item.age,item.place,item.profession))).join("")}  
    `
    main.innerHTML=cardList
    
    let editIconList= document.querySelectorAll(".edit")
    editIconList.forEach((el)=>{
        el.addEventListener("click",(e)=>{
            let currentId= e.target.dataset.id
            editUser(currentId)
        })
    })

    let deleteIconList = document.querySelectorAll(".delete")
    deleteIconList.forEach((e)=>{
        e.addEventListener("click",(e,userObj)=>{
            
            let current_DeleteId= e.target.dataset.id
            deleteUser(current_DeleteId,userObj)
        })
    })
    
   // console.log(deleteIconList)
    
}

function editUser(currentId){
    
    fetch(`${dataUrl}/${currentId}`)
    .then( (res)=>{
        return res.json()
    })
    .then( (data)=>{
        
    })

}
// Delete user
function deleteUser(current_DeleteId,userObj){
    
    fetch(`${dataUrl}/${current_DeleteId}`,{    
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(userObj)
        
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        fetchAnd_RenderUserData(userObj)
        
    })

}

function renderCard( id,name,age,place,profession){
    let card = `  
    <div id="userCard" class="userDiv">  
        <div class="width100 padding5" >   
            <img src="./images/avatar-g28ea6c695_1920.png" alt="" class="width100">
        </div>
        <h5 class="padding5">${name}</h5> 
        <h5 class="padding5">${age}</h5> 
        <h5 class="padding5">${place}</h5>
        <select name="" id="" class="padding5">
            <option value="default" class="">${profession}</option> 
            <option value="FullstackDeveloper">Fullstack Developer</option>
            <option value="BckendDeveloper">Bckend Developer</option>
            <option value="FrontendDeveloper">Frontend Developer</option>
        </select>
        <div class="iconsdiv padding5">
            <img src="./images/pen.png" alt="" class=" editicon edit" data-id=${id}> 
            <img src="./images/icons8-delete-64.png" alt="" class=" editicon delete" data-id=${id}>  
        </div>
    </div>
    `
    return card
}

fetchAnd_RenderUserData()
