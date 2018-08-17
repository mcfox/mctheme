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
        wrappers: ["turbolinks"],
        extensions	: [ 'theme-dark' ],
        setSelected	: true,
        counters	: true,
        searchfield : {
            placeholder		: 'Search menu items'
        },
        iconbar		: {
            add 		: true,
            size		: 40,
            top 		: [
                '<a href="#/"><span class="fa fa-home"></span></a>'
            ],
            bottom 		: [
                '<a href="#/"><span class="fa fa-twitter"></span></a>',
                '<a href="#/"><span class="fa fa-facebook"></span></a>',
                '<a href="#/"><span class="fa fa-youtube"></span></a>'
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
            }, {
                type		: 'tabs',
                content		: [
                    '<a href="#panel-menu"><i class="fa fa-bars"></i> <span>Menu</span></a>',
                    '<a href="#panel-account"><i class="fa fa-user"></i> <span>Account</span></a>',
                    '<a href="#panel-cart"><i class="fa fa-shopping-cart"></i> <span>Cart</span></a>'
                ]
            }, {
                content		: [ 'prev', 'breadcrumbs', 'close' ]
            }, {
                position	: 'bottom',
                content		: [ '<a href="http://mmenu.frebsite.nl/wordpress-plugin" target="_blank">WordPress plugin</a>' ]
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

