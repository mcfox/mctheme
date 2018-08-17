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
        alert( 'Funcionalidade ainda não implementada!' );
        return false;
    })
});

