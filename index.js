// function saveBtn(){
//     console.log("Button clicked");
// }
let myLeads = [];
let oldLeads= [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const deleteBtn=document.getElementById("delete-btn")

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {


    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
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



deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})

inputBtn.addEventListener("click", function () {
    // console.log("button clciked through event listener")
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    // console.log(localStorage.getItem("myLeads"))
})
