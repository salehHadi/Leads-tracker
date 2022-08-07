
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "";

    randerLeads()
});

let listItems = " "

function randerLeads() {
    for (let i = 0; i < myLeads.length; i++) {

        listItems +=
           `<li>
              <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
              </a>
           </li>`


        // same as above but diffrant way.
        /*const li = document.createElement("li")
        li.innerText = myLeads[i]
        ulEl.append(li)*/
    }  
    ulEl.innerHTML = listItems
};
