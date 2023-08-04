// DOM (Document Object Model)

// Window is parent of page
// console.log(window);
// alert("Hello World");

// single Element Selectors
// console.log(document.getElementById("my-form")); // manipulate by id's
// console.log(document.querySelector(".container")); // select the single elament and manipulte them.

// Multiple Element Selectors
// console.log(document.querySelectorAll('.item')); // Select the multiple elements and manipulate them.
// console.log(document.getElementsByClassName(".item")); // select the elements by class
// console.log(document.getElementsByTagName("li"));       // Select the  elements by tag name


// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// Manipulate the DOM

// const ul = document.querySelector(".items");

// ul.remove(); // remove the all elements that we selectd
// ul.lastElementChild.remove(); // remove the last element of the selected 
// ul.firstElementChild.remove(); // remove the first element of the selected items
// ul.firstElementChild.textContent= "Hello"; // Edit the content of the selected item
// ul.children[1].innerText = "Hello 2";       // return the all text contained by an element and its all child element
// ul.lastElementChild.innerHTML = "<h1> Hello3 </h1>";  //returns all text, including html tags , that is contained by an element


// const btn = document.querySelector(".btn");
// btn.style.background = "blue";       //  change the style

// btn.addEventListener("click", (e) => {      // Add function of click the button
//     e.preventDefault();  // stop the event that we perform
//     console.log("Click");    // print after the function is performed
//     // console.log(e.target.className);  // To print the different target
//     document.querySelector("#my-form")
//     .style.background = "grey";

//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector(".items")
//     .lastElementChild.innerHTML = "<h1>Hello </h1>";
//     document.querySelector(".items").lastElementChild.style.color = "red";
    
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener('submit', onSubmit);

function onSubmit (e) {     // function for submit the form 
    e.preventDefault();     // it is the default function 
    

    if(nameInput.value === "" || emailInput.value === ""){      // If the value of name and email is empty the error message will be appear
        msg.classList.add("error")
        msg.innerHTML = "Please fill the required fields**"     // This is the message if the required fields is not filled

    setTimeout(() => msg.remove(), 2000);                       // Set the Time for disappear  error message 
    }else{
        const li = document.createElement("li");                // To add the list of the name and email which is filled out
        li.appendChild(document.createTextNode(
            `${nameInput.value} ${emailInput.value}`));

            userList.appendChild(li);

            //clear fields                  
            // To clear the fields means we reuse it again and again
            nameInput.value = "";
            emailInput.value = "";
    }       
}
