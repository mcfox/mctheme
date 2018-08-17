// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require_self



$(function() {
    $('nav#menu').mmenu({
        wrappers: ['turbolinks'],
        setSelected	: true,
        counters	: true,
        searchfield : {
            placeholder		: 'Search menu items'
        },
        iconbar		: {
            add 		: true,
            size		: 40,
            top 		: [
                '<a href="#/"><span class="fa fa-home"></span></a>',
                '<a href="#/"><span class="fa fa-search"></span></a>',
                '<a href="#/"><span class="fa fa-plus"></span></a>'
            ],
            bottom 		: [
                '<a href="#/"><span class="fa fa-question-circle"></span></a>',
                '<a href="#/"><span class="fa fa-user"></span></a>',
                '<a href="#/"><span class="fa fa-cogs"></span></a>',
            ]
        },
        sidebar		: {
            collapsed		: {
                use 			: '(min-width: 450px)',
                size			: 40,
                hideNavbar		: false
            },
            expanded		: {
                use 			: '(min-width: 992px)',
                size			: 35
            }
        },
        navbars		: [
            {
                content		: [ 'searchfield' ]
            },  {
                content		: [ 'prev', 'breadcrumbs', 'close' ]
            }
        ]
    }, {
        searchfield : {
            clear 		: true
        },
        navbars		: {
            breadcrumbs	: {
                removeFirst	: true
            }
        }
    });

    $('a[href^="#/"]').click(function() {
        alert( 'Thank you for clicking, but that\'s a demo link' );
        return false;
    })
});

