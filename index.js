// function saveBtn(){
//     console.log("Button clicked");
// }
let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()
}


inputBtn.addEventListener("click", function () {
    // console.log("button clciked through event listener")
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
    // console.log(localStorage.getItem("myLeads"))
})
function renderLeads() {


    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li> 
        <a target="_blank" href='${myLeads[i]}'> 
        ${myLeads[i]} 
        </a> 
        </li>`
        // ulEl.innerHTML+=`<li> ${myLeads[i]} </li>`

        // const li=document.createElement("li")  //create element
        // li.textContent=myLeads[i]              //set textContent    
        // ulEl.append(li)                        //append to unorderedList

    }
    ulEl.innerHTML = listItems

}