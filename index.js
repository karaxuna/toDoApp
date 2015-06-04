var app = require('vigour-js/app'),
    Cloud = require('vigour-js/app/cloud'),
    Element = require('vigour-js/app/ui/element'),
    VObj = require('vigour-js/object');

// config app
app.inject(Cloud);
app.cloud = 'localhost:10001';

// include styles
require('./style.less');

// create elements
var Participant = new Element({
    logo: {
        node: 'img',
        src: {
            val: {
                data: 'logo'
            }
        },
        events: {
            click: function () {
                var votes = this.parent.data.votes;
                if (votes.val < 500) {
                    votes.val += 1;
                }
            }
        }
    },
    statistics: {
        textual: {
            title: {
                css: 'din-light',
                text: {
                    data: 'title'
                }
            },
            votes: {
                css: 'din-bold',
                model: {
                    subscription: {
                        votes: true
                    }
                },
                text: {
                    data: function (data) {
                        return data.votes.val + ' VOTES';
                    }
                }
            }
        },
        progress: {
            filled: {
                css: {
                    data: function (data) {
                        return data.title.val.split(' ').join('-').toLowerCase();
                    }
                },
                w: {
                    data: function (data) {
                        return ((data.votes.val / 500) * 100) + '%';
                    }
                },
                h: 5
            }
        }
    }
}).Class;

var dataSource = app.cloud.data.get('participants');

dataSource.set('1', {
    title: 'LA Dodgers',
    votes: 345,
    logo: './assets/dodgers.png'
});

dataSource.set('2', {
    title: 'Miami Marlins',
    votes: 246,
    logo: './assets/marlins.png'
});

var participants = new Element({
    collection: {
        data: true,
        element: Participant
    },
    data: dataSource
});

var poll = new Element({
    title: {
        css: 'din-regular',
        text: 'Who Will Win?'
    },
    participants: participants
});

app.set({
    poll: poll
});