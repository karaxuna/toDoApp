window.package = require('package.json')
require('./style.less')

var Element = require('vigour-js/app/ui/element')
var timestamp = require('monotonic-timestamp')
var app = require('vigour-js/app')
			.inject( require('vigour-js/app/cloud') )

app.cloud = 'localhost:10001'

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
		text: { data: 'text' },
		events: {
			keyup:function(e) {
				this.data.set('text', this.node.value)
			}
		}
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

//control layer
var dataObj = window.dataObj = app.cloud.data.get('todos')

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
