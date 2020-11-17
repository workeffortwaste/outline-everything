document.querySelector('#outline-everything').addEventListener('click', () => {
  sendObjectToInspectedPage({ action: 'code', content: "document.body.insertAdjacentHTML('beforeend','<style>* { outline: 1px solid red!important; } </style>')" })
}, false)
