(function() {
    var data = {
            'link-1': {'displayName': 'home', 'icon': 'icon-home'},
            'link-2': {'displayName': 'Collaboration', 'icon': 'icon-proj', 'subLinks': [{'dispName': 'Buisness Unit Teams', 'url': '#'}, {'dispName': 'Projects', 'url': '#'},{'dispName': 'Communities', 'url': '#'}]},
            'link-3': {'displayName': 'Employee Center', 'icon': 'icon-huma', 'subLinks': [{'dispName': 'Benefits/Health', 'url': '#'}, {'dispName': 'Compensation', 'url': '#'},{'dispName': 'Orientation/Training', 'url': '#'},{'dispName': 'Work/Life', 'url': '#'}]},
            'link-4': {'displayName': 'Workplace Services', 'icon': 'icon-work', 'subLinks': [{'dispName': 'Technology/Services', 'url': '#'}, {'dispName': 'Order/Reserve', 'url': '#'},{'dispName': 'Job Aids/Templates', 'url': '#'},{'dispName': 'Project Management', 'url': '#'}]},
            'link-5': {'displayName': 'Company', 'icon': 'icon-comp', 'subLinks': [{'dispName': 'News & Culture', 'url': '#'}, {'dispName': 'Leadership', 'url': '#'},{'dispName': 'About Business Units', 'url': '#'},{'dispName': 'Corporate Libraries', 'url': '#'}]}
        }

        // ------------------------------- START template content - (DO NOT touch) --------------------------- //
        content = '<div class="kill-pointer nav" data-id="nav-main" data-no><div data-no><nav data-no><div class="list-container" data-id="global" id="global" data-no><ul data-no class="global-main"><li data-no class="trigger-container"><a href="#" class="menu-trigger main-trigger" data-trigger data-id="main" data-no></a></li><li class="menu-item selected" data-no><a class="{{link-1.icon}}" data-no>{{link-1.displayName}}</a></li><li class="menu-item" data-no><a data-trigger data-id="hidden-nav" data-link="link-2" class="{{link-2.icon}}" data-no>{{link-2.displayName}}</a></li><li class="menu-item" data-no><a data-trigger data-id="hidden-nav" data-link="link-3" class="{{link-3.icon}}" data-no>{{link-3.displayName}}</a></li><li class="menu-item" data-no><a data-trigger data-id="hidden-nav" data-link="link-4" class="{{link-4.icon}}" data-no>{{link-4.displayName}}</a></li><li class="menu-item" data-no><a data-trigger data-id="hidden-nav" data-link="link-5" class="{{link-5.icon}}" data-no>{{link-5.displayName}}</a></li></ul></div><div class="list-container" id="tertiary" data-id="nav-ter" data-no><div class="trigger-container" data-no><h4 data-trigger data-id="ter-close" class="title" title="Tertiary Menu" data-no>Main Menu</h4><a href="#" class="menu-trigger main-trigger" data-trigger data-id="main" data-no></a><div><ul class="tertiary-list" data-js="tertiary-list"><li class="menu-item selected" data-js="display-name" data-no><a class="" data-no></a></li></ul></div></nav></div></div>',
        template = Handlebars.compile(content),
        html = template(data),
        // ------------------------------- END template content - (DO NOT touch) ---------------------------- //
        
        // methods for functionality
        $idMain = $('[data-id=main]'),
        openSidepage = function() {  
            var pageHeight = $('html').height() * 1.25;
            $('[data-id=nav-main]')
                .animate({left: '310px'}, 400)
                .removeClass('kill-pointer')
                .css({
                    top: '0',
                    height: pageHeight + 'px'
                });
            $idMain.addClass('open');
        },

        openGlobalpage = function () {
            $('#global')
                .animate({left: '0'}, 400)
                .removeClass('kill-pointer');
            setTimeout(function() {
                $('[data-id=nav-ter]').removeClass('shadow');
            }, 440);
        },

        closeGlobalpage = function () {
            $('#global')
                .animate({left: '-310px'}, 400)
                .addClass('kill-pointer');
            $('[data-id=nav-ter]').addClass('shadow');
        },

        closeSidepage = function () {
            $('[data-id=nav-main]')
                .animate({left: '-310px'}, 400)
                .addClass('kill-pointer');
            $idMain.removeClass('open');
            openGlobalpage();
        },

        closeTerpage = function() {  
            $('[data-id=nav-ter]').animate({left: '-310px'}, 400);
            $idMain.removeClass('open');
        },

        loadTertiarty = function(dataLink) {
            $.each(data, function(i, el) {
                if (i === dataLink) {
                    $('[data-js=display-name] a').html(el.displayName).attr('class', el.icon);
                    $('[data-js=sub]').remove()
                    $.each(el.subLinks, function(i, elem) {
                        $('[data-js=tertiary-list]').append('<li class="menu-item sub" data-js="sub" data-no><a href="' + elem.url + '" data-no>' + elem.dispName + '</a></li>');
                    });
                }
            });
        };

    // append template into DOM
    $('[data-target=template]').append(html);

    //trigger menu open/close methods
    $('html').on('click', '[data-trigger]', function(ev) {
        ev.preventDefault();
        var dataId = $(ev.target).data('id'),
            dataLink = $(ev.target).data('link');
        switch(dataId) {
            case 'main':
                if ($idMain.hasClass('open')) {
                    $idMain.removeClass('open');
                    closeSidepage();
                } else {
                    $idMain.addClass('open');
                    openSidepage();
                }
                break;
            case 'hidden-nav':
                closeGlobalpage();
                loadTertiarty(dataLink);
                break;
            case 'ter-close':
                openGlobalpage();
                $idMain.addClass('open');
            default:
                break;
        }
    });

    // close side menu on click outside
    $('html').on('click', function(ev) {
        ev.stopPropagation();
        if (!$(ev.target).is('[data-no]')) {
            if ($idMain.hasClass('open')) {
                closeSidepage();
                $idMain.removeClass('open');
                $('[data-id=hidden-links]').hide();
            }
        }
    });

})();

