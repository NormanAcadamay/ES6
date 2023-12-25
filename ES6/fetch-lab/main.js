// fetch ('https://jsonplaceholder.typicode.com/users')
// .then (resp =>{
//     console.log (resp)
//     return resp.json()
// }).then (data => {
//     console.log(data)
//     console.log(typeof data)
//     console.log(data[0])
//     console.log(data[0].name)
// })



function makeElement(tag, attr_n, attr_v, content) {
    let output = document.createElement(tag);
    (!!attr_n) && output.setAttribute(attr_n , attr_v);
    output.textcontent = content;
    return output;
}


const userList = document.querySelector('.user-list')

function makeElement(tag, attr_n, attr_v, content) {
  let output = document.createElement(tag);
  (!!attr_n) && output.setAttribute(attr_n, attr_v);
  output.textContent = content;
  return output;
}

fetch('https://jsonplaceholder.typicode.com/users')
.then( resp =>  resp.json())
.then( data => {
  for (let el of data) {
    const li = makeElement('li', '', '', `${el.name} / ${el.email}`)
    userList.append(li)
  }
})