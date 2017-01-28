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
    this.toDoItemTitleInputValue = '';
    this.toDoItemContentInputValue = '';

  }, //end addItem

  cancelItem: function(){
    this.toDoItemTitleInputValue = '',
    this.toDoItemContentInputValue = ''

  },

  editItem: function(i){
    console.log("hello");
  },

  //  printItem: function (p) {
  //    return `${p.title}`;
  //    return `${p.content}`;
  //  },

   removeItem: function (i){
    this.items.splice(i, 1);
   } // end removeItem()
}, // end methods
  data: {
    toDoItemTitleInputValue: '',
    toDoItemContentInputValue: '',
    //setting example to-do card text
    items: [
      {
        title: 'To Do Item Title',
        content: 'My First To Do Item'
      }
    ]

  }

});
