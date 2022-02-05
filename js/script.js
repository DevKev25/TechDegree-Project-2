/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


const perPage = 9


/*
This is the `showPage` function
This function will show 9 students per page inside the 'ul' tag.
*/

function showPage(list, page) {
   const startIndex = (page * perPage) - perPage;
   const endIndex = (page * perPage);

   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';

   let studentItem = ''; 
   
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentItem +=  `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src=${list[i].picture.large}  alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}  </h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date} |  ${list[i].registered.age} years</span>
         </div>
       </li>
       ` ;
      }
      
   }
   studentList.insertAdjacentHTML("beforeend", studentItem);
}



/*
The following is the `addPagination` function
This function will create and insert the elements needed for each pagination buttons
When another button is clicked, it will get actived and the previous button will get desactivated.
*/

function addPagination(list) {
   const numOfPages = Math.ceil(list.length / perPage )
   let linkList = document.querySelector('ul.link-list')
   linkList.innerHTML = ''; 

   


   for (let i = 1; i <= numOfPages; i++) {
      linkList.insertAdjacentHTML("beforeend", `
      <li>
      <button type="button">${i}</button>
      </li>
      `);
   }

   const firstBtn = document.querySelector('button').className = "active"

   linkList.addEventListener('click', (e) => {

      if (e.target.tagName === 'BUTTON') {
         const removeBtn = document.querySelector('.active');
         removeBtn.className = '';
         const addBtn = e.target;
         addBtn.className = 'active';
         const displayList = addBtn.textContent;
         showPage(list, displayList);

      }
   
   });

   }





// Call functions

showPage(data, 1);
addPagination(data);