// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
for( let i = 0; i < threeContacts.length ; i++){
  const threeRows = document.createElement("tr");
  
threeRows.innerHTML = `
  <td>
    <img src="${threeContacts[i].pictureUrl}" />
  </td>
  <td> ${threeContacts[i].name} </td>
  <td> ${threeContacts[i].popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
const dltBtn = threeRows.querySelector(".btn-delete")
  dltBtn.addEventListener("click", function () {
    threeRows.remove()
   })

const likeBtn = threeRows.querySelector(".btn-like")
   likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("selected")
   })


tableBody.appendChild(threeRows);

}

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
 

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
