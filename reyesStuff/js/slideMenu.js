(function() {
    var data = {
            'link-1': {'displayName': 'my farm', 'url': '#', 'visible': 'true'},
            'link-2': {'displayName': 'projects & teams', 'url': '#', 'visible': 'true'},
            'link-3': {'displayName': 'employee center', 'url': '#', 'visible': 'true'},
            'link-4': {'displayName': 'workplace services', 'url': '#', 'visible': 'true'},
            'link-5': {'displayName': 'company', 'url': '#', 'visible': 'true'},
            'link-6': {'displayName': 'directory', 'url': '#', 'visible': 'true'},
            'link-7': {'displayName': 'news', 'url': '#', 'visible': 'true'},
            'link-8': {'displayName': 'events', 'url': '#', 'visible': 'true'},
            'link-9': {'displayName': 'leadership', 'url': '#', 'visible': 'true'},
            'link-10': {'displayName': 'my settings', 'url': '#', 'visible': 'true'},
            'link-11': {'displayName': 'terms and policies', 'url': '#', 'visible': 'true'},
            'link-12': {'displayName': 'logout', 'url': '#', 'visible': 'true'},
            'link-13': {'displayName': 'internet', 'url': '#', 'visible': 'true'},
            'link-14': {'displayName': 'intranet', 'url': '#', 'visible': 'true'},
            'link-15': {'displayName': 'extranet', 'url': '#', 'visible': 'true'}
        },

        // ------------------------------- START template content - (DO NOT touch) --------------------------- //
        content = '<div id="nav-con" class="kill-pointer nav" data-id="nav-main" data-no><div class="mp-pusher" id="mp-pusher" data-no><nav id="mp-menu" class="mp-menu" data-no><div class="mp-level" data-no><ul data-no><li class="icon-global-menu"  data-trigger data-id="sec-open" data-no><div class="mp-level secondary" data-id="nav-sec" data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white" title="Global Menu" data-no>Global Menu</h4></span><a class="mp-back" href="#" data-trigger data-id="sec-close" data-no>back</a><ul><li class="nav-left-panel border-white border-solo-bot {{visible link-13.visible}}" data-no><a href="{{link-13.url}}" class="icon-inter" data-no>{{link-13.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-14.visible}}" data-no><a href="{{link-14.url}}" class="icon-intra" data-no>{{link-14.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-15.visible}}" data-no><a href="{{link-15.url}}" class="icon-extra" data-no>{{link-15.displayName}}</a></li></ul></div></li><li data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white" data-no>intranet</h4></span></li><li class="nav-left-panel border-white border-solo-bot {{visible link-1.visible}}" data-no><a href="{{link-1.url}}" class="icon-home" data-no>{{link-1.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-2.visible}}" data-no><a href="{{link-2.url}}" class="icon-proj" data-no>{{link-2.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-3.visible}}" data-no><a href="{{link-3.url}}" class="icon-huma">{{link-3.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-4.visible}}" data-no><a href="{{link-4.url}}" class="icon-work" data-no>{{link-4.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot drop-down-custom {{visible link-5.visible}}" data-no><a href="{{link-5.url}}" data-trigger data-id="hidden-nav" class="icon-comp" data-no>{{link-5.displayName}}</a><ul class="mp-level-sub-drop bg-color-white" data-id="hidden-links" data-no><li class="nav-left-panel-sub {{visible link-6.visible}}" data-no><a href="{{link-6.url}}" class="indicator-border-left" data-no>{{link-6.displayName}}</a></li><li class="nav-left-panel-sub {{visible link-7.visible}}" data-no><a href="{{link-7.url}}" class="indicator-border-left" data-no>{{link-7.displayName}}</a></li><li class="nav-left-panel-sub {{visible link-8.visible}}" data-no><a href="{{link-8.url}}" class="indicator-border-left" data-no>{{link-8.displayName}}</a></li><li class="nav-left-panel-sub {{visible link-9.visible}}" data-no><a href="{{link-9.url}}" class="indicator-border-left" data-no>{{link-9.displayName}}</a></li></ul></li><li data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white height-force-min-40" data-no></h4></span></li><li class="nav-left-panel border-white border-solo-bot {{visible link-10.visible}}" data-no><a href="{{link-10.url}}" class="icon-sets" data-no>{{link-10.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-11.visible}}" data-no><a href="{{link-11.url}}" class="icon-term" data-no>{{link-11.displayName}}</a></li><li class="nav-left-panel border-white border-solo-bot {{visible link-12.visible}}" data-no><a href="{{link-12.url}}" class="icon-logs" data-no>{{link-12.displayName}}</a></li></ul></div></nav></div></div>',
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

