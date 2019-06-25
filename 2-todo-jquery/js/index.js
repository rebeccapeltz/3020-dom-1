$(document).ready(event => {
  //need to add an ID to easily select form
  $("#todo-form").submit(event => {
    event.preventDefault()
    //need to fina a single input but need it as a jquery object
    let itemInput = $($("input[name=item-input]")[0])
    let itemValue = itemInput.val()
    if (itemValue.length !== 0) {

      //create new item
      let newItemEl = $("<li>")[0]
      let newCheckBox = $('<input type="checkbox" />')[0]
      let newLabel = $(`<label>`).html(itemValue)[0]
      newItemEl.append(newCheckBox, newLabel)

      //get a reference to list and append
      $('.todo-list')[0].appendChild(newItemEl);
      itemInput.val('')
      $(':checkbox').change(function (event) {

        if ($(this).siblings("label").css("text-decoration").indexOf("none") > -1) {
          $(this).siblings("label").css("text-decoration", "line-through")
        } else {
          $(this).siblings("label").css("text-decoration", "none")
        }
      })
    }
  })

})