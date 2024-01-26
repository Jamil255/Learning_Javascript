let userTable = document.getElementById('userTable')
let stdObj = [
  {
    name: 'jamil',
    id: 100,
    gender: 'male',
    cosure: 'computer system engineering',
  },
  {
    name: 'adeel',
    id: 100,
    gender: 'male',
    cosure: 'industrial engineering',
  },
  {
    name: 'mughal',
    id: 100,
    gender: 'male',
    cosure: 'electronic engineering',
  },
  {
    name: 'manzoor',
    id: 100,
    gender: 'male',
    cosure: 'telecommunications',
  },
  {
    name: 'mazhar',
    id: 100,
    gender: 'male',
    cosure: 'computer system engineering',
    },
    {
        name: 'mazhar',
        id: 100,
        gender: 'male',
        cosure: 'computer system engineering',
    },
    {
        name: 'mazhar',
        id: 100,
        gender: 'male',
        cosure: 'computer system engineering',
      },
]

for (let i = 0; i < stdObj.length; i++) {
  let name = stdObj[i].name
  let id = stdObj[i].id
  let gender = stdObj[i].gender
  let cosure = stdObj[i].cosure

  let rowHTML =
    '<tr><td>' +
    name +
    '</td><td>' +
    gender +
    '</td><td>' +
    id +
    '</td><td>' +
    cosure +
    '</td></tr>'
  userTable.innerHTML += rowHTML
}

//***table dynamic  */
// arrayOfObject most important topic in js
// collection of data in javascript
