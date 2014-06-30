(function() {
    Handlebars.registerHelper('visible', function(val) {
        if (val === 'false' || !val) { return 'invisible' }
    });

    var data = {
            'link-1': {'displayName': 'home'},
            'link-2': {'displayName': 'Collaboration', 'subLinks': [{'display': 'Buisness Unit Teams', 'url': '#'}, {'display': 'Projects', 'url': '#'},{'display': 'Communities', 'url': '#'}]},
            'link-3': {'displayName': 'Employee Center', 'subLinks': [{'display': 'Benefits/Health', 'url': '#'}, {'display': 'Compensation', 'url': '#'},{'display': 'Orientation/Training', 'url': '#'},{'display': 'Work/Life', 'url': '#'}]},
            'link-4': {'displayName': 'Workplace Services', 'subLinks': [{'display': 'Technology/Services', 'url': '#'}, {'display': 'Order/Reserve', 'url': '#'},{'display': 'Job Aids/Templates', 'url': '#'},{'display': 'Project Management', 'url': '#'}]},
            'link-5': {'displayName': 'Company', 'subLinks': [{'display': 'News & Culture', 'url': '#'}, {'display': 'Leadership', 'url': '#'},{'display': 'About Buisness Units', 'url': '#'},{'display': 'Corporate Libraries', 'url': '#'}]}
        }

        // ------------------------------- START template content - (DO NOT touch) --------------------------- //
        content = $('#entry-template').html(),//'<div id="nav-con" class="kill-pointer nav" data-id="nav-main" data-no><div class="mp-pusher" id="mp-pusher" data-no><nav id="mp-menu" class="mp-menu" data-no><div class="mp-level" data-id="global" id="global" data-no><ul data-no><li class="icon-global-menu" data-trigger data-id="sec-open" data-no><div class="mp-level secondary" data-id="nav-sec" data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white" title="Global Menu" data-no>Global Menu</h4></span><a class="mp-back" href="#" data-trigger data-id="sec-close" data-no>back</a><ul><li class="nav-left-panel border-white border-solo-bot {{visible link-13.visible}}" data-no><a href="{{link-13.url}}" class="icon-inter" data-no>{{link-13.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-14.visible}}" data-no><a href="{{link-14.url}}" class="icon-intra" data-no>{{link-14.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-15.visible}}" data-no><a href="{{link-15.url}}" class="icon-extra" data-no>{{link-15.displayName}}</a></li></ul></div></li><li data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white" data-no>intranet</h4></span></li><li class="nav-left-panel border-white border-solo-bot {{visible link-1.visible}}" data-no><a href="{{link-1.url}}" class="icon-home" data-no>{{link-1.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-2.visible}}" data-no><a href="{{link-2.url}}" class="icon-proj" data-no>{{link-2.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-3.visible}}" data-no><a href="{{link-3.url}}" class="icon-huma">{{link-3.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-4.visible}}" data-no><a href="{{link-4.url}}" class="icon-work" data-no>{{link-4.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot drop-down-custom {{visible link-5.visible}}" data-no><a href="{{link-5.url}}" data-trigger data-id="hidden-nav" class="icon-comp" data-no>{{link-5.displayName}}</a><ul class="mp-level-sub-drop bg-color-white" data-id="hidden-links" data-no><li class="nav-left-panel-sub {{visible link-6.visible}}" data-no><a href="{{link-6.url}}" class="indicator-border-left" data-no>{{link-6.displayName}}</a></li><li class="nav-left-panel-sub {{visible link-7.visible}}" data-no><a href="{{link-7.url}}" class="indicator-border-left" data-no>{{link-7.displayName}}</a></li><li class="nav-left-panel-sub {{visible link-8.visible}}" data-no><a href="{{link-8.url}}" class="indicator-border-left" data-no>{{link-8.displayName}}</a></li><li class="nav-left-panel-sub {{visible link-9.visible}}" data-no><a href="{{link-9.url}}" class="indicator-border-left" data-no>{{link-9.displayName}}</a></li></ul></li><li data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white height-force-min-40" data-no></h4></span></li><li class="nav-left-panel border-white border-solo-bot {{visible link-10.visible}}" data-no><a href="{{link-10.url}}" class="icon-sets" data-no>{{link-10.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-11.visible}}" data-no><a href="{{link-11.url}}" class="icon-term" data-no>{{link-11.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-12.visible}}" data-no><a href="{{link-12.url}}" class="icon-logs" data-no>{{link-12.displayName}}</a></li></ul></div><div class="mp-level" id="tertiary" data-id="nav-ter" data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white" title="Tertiary Menu" data-no>Tertiary Menu</h4></span><a class="mp-back" href="#" data-trigger data-id="ter-close" data-no>back</a><ul><li class="nav-left-panel-sub {{visible link-6.visible}}" data-no><a href="{{link-6.url}}" class="indicator-border-left" data-no>{{link-6.displayName}}</a></li><li class="nav-left-panel-sub {{visible link-7.visible}}" data-no><a href="{{link-7.url}}" class="indicator-border-left" data-no>{{link-7.displayName}}</a></li><li class="nav-left-panel-sub {{visible link-8.visible}}" data-no><a href="{{link-8.url}}" class="indicator-border-left" data-no>{{link-8.displayName}}</a></li><li class="nav-left-panel-sub {{visible link-9.visible}}" data-no><a href="{{link-9.url}}" class="indicator-border-left" data-no>{{link-9.displayName}}</a></li></ul></div></nav></div></div>',
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
                console.log(dataLink)
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

