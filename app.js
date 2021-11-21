//dom
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let year = document.querySelector("#year");
let btn = document.querySelector(".btn");
let booklist = document.querySelector("#book-list");

    //eventlistener
    btn.addEventListener('click',function(e){
        e.preventDefault();
        if (title.value == '' && author.value =='' && year.value==''){
            alert('vai kichu de na re')
        }
        else{
            let newRow = document.createElement('tr');
            let newTitle = document.createElement('th');
            newTitle.innerHTML = title.value;
            newRow.appendChild(newTitle);

            let newAuthor = document.createElement('th');
            newAuthor.innerHTML = author.value;
            newRow.appendChild(newAuthor);

            let newYear = document.createElement('th');
            newYear.innerHTML = year.value;
            newRow.appendChild(newYear);
            booklist.appendChild(newRow);
            
        }
    });

//function
