let url = "https://jsonplaceholder.typicode.com/users";
// let list_items = document.createDocumentFragment();//refer:https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
let list = document.getElementById("Authors");

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let authors = data;
    authors.map(author => {
      let li = document.createElement("li");
      let name = document.createElement("h1");
      let email = document.createElement("span");

      name.innerHTML = `${author.name}`;
        email.innerHTML = `${author.email}`;
        console.log(name);

      li.appendChild(name);
        li.appendChild(email);
        list.appendChild(li)
        // list_items.appendChild(li);
        // console.log(list_items);
    });
  })
    .catch(err => console.log(err));
  
    // list.appendChild(list_items)
