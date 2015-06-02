window.package = require('package.json')
require('./style.less')

var timestamp = require('monotonic-timestamp')

var app = window.a = require('vigour-js/app').inject(
  require('vigour-js/app/cloud')
)

app.cloud = 'localhost:10001'

var Element = require('vigour-js/app/ui/element')

var vObj = require('vigour-js/object')

var Task = new Element({
  title: {
    node: 'textarea',
    text: { data: 'title' },
    events: {
      keyup: function(){
        var taskdata = this.data
        taskdata.title.val = this.node.value
      }
    }
  },
  body: {
    node:'textarea',
    text: { data: 'body' },
    events: {
      keyup: function(){
        var taskdata = this.parent.data
        taskdata.body.val = this.node.value
      }
    }
  },
  removeButton: {
    node: 'button',
    text: 'remove',
    events: {
      click: function() {
        var taskdata = this.parent.data
        taskdata.remove()
      }
    }
  }
}).Class

var TodoList = new Element({
  collection: {
    data: true,
    element: Task
  }
}).Class

var tasklist = window.tl = app.cloud.data.get('taskList')

tasklist.set('fieldname', {title: 'hey', body: 'ha'})

app.set({
  addTodo: {
    node: 'button',
    text: 'add a todo!',
    events: {
      click:function() {
        console.log('this', this)
        var taskList = this.parent.data
        taskList.set( timestamp(), {
          title:'new todo',
          body:'describe what you want to do!'
        })
      }
    }
  },
  todolist: new TodoList(),
  data: tasklist
})


