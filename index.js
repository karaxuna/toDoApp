window.package = require('package.json')
require('./style.less')

var Element = require('vigour-js/app/ui/element')
var vObj = require('vigour-js/object')
var timestamp = require('monotonic-timestamp')

var Todo = new Element({
	title: {
		node:'textarea',
		text: { 
			data: 'title' 
		},
		events: {
			keyup:function(e) {
				this.data.set('title', this.node.value)
			}
		}
	},
	body: {
		node:'textarea',
		text: { data: 'text' }
	},
	removeButton: {
		node:'button',
		text:'remove',
		events: {
			click:function() {
				this.parent.data.remove()
			}
		}
	}
}).Class

var TodoList = new Element({
	collection: {
		data:true,
		element: Todo
	}
}).Class

var app = new Element({
	node:document.body
})

var dataObj = window.dataObj = new vObj({})

app.set({
	addTodo: {
		node:'button',
		text:'add a todo!',
		events: {
			click:function() {
				this.parent.data.set(timestamp(), {
					title:'new todo',
					text:'describe what you want to do!'
				})
			}
		}
	},
	todos: new TodoList(),
	data: dataObj
})
