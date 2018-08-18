$(function() {
    var $menu = $('nav#menu').mmenu({
        wrappers: ['turbolinks'],
        setSelected	: true,
        counters	: true,
        searchfield : {
            placeholder		: 'Search menu items'
        },
        iconbar		: {
            add 		: true,
            size		: 60,
            top 		: [
                '<a href="#/"><span class="fa fa-home"></span></a>',
                '<a href="#/" class="drawer_toogle"><span class="fa fa-search"></span></a>',
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
                size			: 60,
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
        alert( 'Funcionalidade ainda não implementada!' );
        return false;
    })


    var $icon = $("#icon-open");
    var API = $menu.data( "mmenu" );

    $icon.on( "click", function() {
        if ($icon.hasClass( "is-active" )) {
            API.close();
        } else {
            API.open();
        }
    });

    API.bind( "open:finish", function() {
        setTimeout(function() {
            $icon.addClass( "is-active" );
        }, 100);
    });
    API.bind( "close:finish", function() {
        setTimeout(function() {
            $icon.removeClass( "is-active" );
        }, 100);
    });

});

