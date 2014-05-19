 (function() {
    var data = {
            // add url to enable link
            'urls': {'link-1': '#', 'link-2': '#', 'link-3': '#', 'link-4': '#', 'link-5': '#', 'link-6': '#', 'link-7': '#', 'link-8': '#', 'link-9': '#', 'link-10': '#', 'link-11': '#', 'link-12': '#', 'link-13': '#', 'link-14': '#', 'link-15': '#'},

            // change 'link name' to customize
            'copy': {'link-1': 'home', 'link-2': 'projects & teams', 'link-3': 'employee center', 'link-4': 'workplace ssssservices', 'link-5': 'company', 'link-6': 'directory', 'link-7': 'news', 'link-8': 'events', 'link-9': 'leadership', 'link-10': 'my settings', 'link-11': 'terms and policies', 'link-12': 'logout', 'link-13': 'internet', 'link-14': 'intranet', 'link-15': 'extranet'},

            // add 'invisible' to hide
            'hide': {'link-1': '', 'link-2': '', 'link-3': '', 'link-4': '', 'link-5': '', 'link-6': '', 'link-7': '', 'link-8': '', 'link-9': '', 'link-10': '', 'link-11': '', 'link-12': '', 'link-13': '', 'link-14': '', 'link-15': ''}
        },

        // ------------------------------- START template content - (DO NOT touch) --------------------------- //
        content = '<div id="nav-con" class="kill-pointer nav" data-id="nav-main" data-no><div class="mp-pusher" id="mp-pusher" data-no><nav id="mp-menu" class="mp-menu" data-no><div class="mp-level" data-no><ul data-no><li class="icon-global-menu"  data-trigger data-id="sec-open" data-no><div class="mp-level secondary" data-id="nav-sec" data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white" title="Global Menu" data-no>Global Menu</h4></span><a class="mp-back" href="#" data-trigger data-id="sec-close" data-no>back</a><ul><li class="nav-left-panel border-white border-solo-bot {{hide.link-13}}" data-no><a href="{{urls.link-13}}" class="icon-inter" data-no>{{copy.link-13}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.link-14}}" data-no><a href="{{urls.link-14}}" class="icon-intra" data-no>{{copy.link-14}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.link-15}}" data-no><a href="{{urls.link-15}}" class="icon-extra" data-no>{{copy.link-15}}</a></li></ul></div></li><li data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white" data-no>intranet</h4></span></li><li class="nav-left-panel border-white border-solo-bot {{hide.link-1}}" data-no><a href="{{urls.link-1}}" class="icon-home" data-no>{{copy.link-1}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.link-2}}" data-no><a href="{{urls.link-2}}" class="icon-proj" data-no>{{copy.link-2}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.link-3}}" data-no><a href="{{urls.link-3}}" class="icon-huma">{{copy.link-3}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.link-4}}" data-no><a href="{{urls.link-4}}" class="icon-work" data-no>{{copy.link-4}}</a></li><li class="nav-left-panel border-white border-solo-bot drop-down-custom {{hide.link-5}}" data-no><a href="{{urls.link-5}}" data-trigger data-id="hidden-nav" class="icon-comp" data-no>{{copy.link-5}}</a><ul class="mp-level-sub-drop bg-color-white" data-id="hidden-links" data-no><li class="nav-left-panel-sub {{hide.link-6}}" data-no><a href="{{urls.link-6}}" class="indicator-border-left" data-no>{{copy.link-6}}</a></li><li class="nav-left-panel-sub {{hide.link-7}}" data-no><a href="{{urls.link-7}}" class="indicator-border-left" data-no>{{copy.link-7}}</a></li><li class="nav-left-panel-sub {{hide.link-8}}" data-no><a href="{{urls.link-8}}" class="indicator-border-left" data-no>{{copy.link-8}}</a></li><li class="nav-left-panel-sub {{hide.link-9}}" data-no><a href="{{urls.link-9}}" class="indicator-border-left" data-no>{{copy.link-9}}</a></li></ul></li><li data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white height-force-min-40" data-no></h4></span></li><li class="nav-left-panel border-white border-solo-bot {{hide.link-10}}" data-no><a href="{{urls.link-10}}" class="icon-sets" data-no>{{copy.link-10}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.link-11}}" data-no><a href="{{urls.link-11}}" class="icon-term" data-no>{{copy.link-11}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.link-12}}" data-no><a href="{{urls.link-12}}" class="icon-logs" data-no>{{copy.link-12}}</a></li></ul></div></nav></div></div>',
        template = Handlebars.compile(content),
        html = template(data),
        // ------------------------------- START template content - (DO NOT touch) ---------------------------- //
        
        // methods for functionality
        $idMain = $('[data-id=main]'),
        openSidepage = function() {  
            var pageHeight = $('html').height() * 1.25;
            $('[data-id=nav-main]')
                .animate({left: '310px'}, 400)
                .removeClass('kill-pointer')
                .css({
                    top: '40px',
                    height: pageHeight + 'px'
                });
            $idMain.addClass('open');
        },

        openInnerpage = function() {
            $('[data-id=nav-sec]')
                .animate({left: '310px'}, 400)
                .removeClass('kill-pointer'); 
        },
      
        closeSidepage = function () {
            $('[data-id=nav-main]')
                .animate({left: '-310px'}, 400)
                .addClass('kill-pointer');
            closeInnerpage();
            $idMain.removeClass('open');
        },

        closeInnerpage = function() {  
            $('[data-id=nav-sec]')
                .animate({left: '-310px'}, 400)
                .addClass('kill-pointer');
        };

    // append template into DOM
    $('[data-target=template]').append(html);

    //trigger menu open/close methods
    $('html').on('click', '[data-trigger]', function(ev) {
        ev.preventDefault();
        var dataId = $(ev.target).data('id');
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
            case 'sec-open':
                openInnerpage();
                break;
            case 'sec-close':
                closeInnerpage();
                break;
            case 'hidden-nav':
                $('[data-id=hidden-links]').slideToggle( "slow");
                break;
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