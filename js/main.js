// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  methods: {
    //pushing items to array
    addItem: function(){
    this.items.push({
      title: this.toDoItemTitleInputValue,
      content: this.toDoItemContentInputValue,
    })

    //idk if i need this come back 2 it
    this.toDoItemTitleInputValue = '';
    this.toDoItemContentInputValue = '';

  }, //end addItem

  removeItem (i){
    console.log(i);
  } // end removeItem()
}, // end methods
  data: {
    toDoItemTitleInputValue: '',
    toDoItemContentInputValue: '',
    items: []

  }

});
