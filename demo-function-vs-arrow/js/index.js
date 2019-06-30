document.addEventListener("DOMContentLoaded", event => {
  console.log("loaded")
  document.querySelector('#click-me').addEventListener("click", event => {
    event.preventDefault()
    console.log("this is window object",this)
  })
   document.querySelector('#click-me2').addEventListener("click", function(event){
    event.preventDefault()
    console.log("this is button object",this)
    console.log(this.id)
  })
})