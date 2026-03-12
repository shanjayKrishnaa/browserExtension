// function saveBtn(){
//     console.log("Button clicked");
// }
let  myLeads=[];
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")



inputBtn.addEventListener("click",function(){
    // console.log("button clciked through event listener")
    myLeads.push(inputEl.value)
    inputEl.value=""
    
    renderLeads()
})
function renderLeads(){

   
    let listItems=""
    for(let i=0;i<myLeads.length;i++){
        listItems+=`<li> ${myLeads[i]} </li>`
        // ulEl.innerHTML+=`<li> ${myLeads[i]} </li>`
    
        // const li=document.createElement("li")  //create element
        // li.textContent=myLeads[i]              //set textContent    
        // ulEl.append(li)                        //append to unorderedList
        
    }
      ulEl.innerHTML=listItems

}