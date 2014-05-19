 (function() {
    var data = {
            'urls': {'home': '#', 'projectsTeams': '#', 'employeeCenter': '#', 'workplaceServices': '#', 'company': '#', 'mySettings': '#', 'terms': '#', 'logout': '#', 'internet': '#', 'intranet': '#', 'extranet': '#', 'directory': '#', 'news': '#', 'events': '#', 'leadership': '#'},

            'copy': {'home': 'home', 'projectsTeams': 'projects & teams', 'employeeCenter': 'employee center', 'workplaceServices': 'workplace services', 'company': 'company', 'mySettings': 'my settings', 'terms': 'terms and policies', 'logout': 'logout', 'internet': 'internet', 'intranet': 'intranet', 'extranet': 'extranet', 'directory': 'directory', 'news': 'news', 'events': 'events', 'leadership': 'leadership'},

            'hide': {'home': '', 'projectsTeams': '', 'employeeCenter': '', 'workplaceServices': '', 'company': '', 'mySettings': '', 'terms': '', 'logout': '', 'internet': '', 'intranet': '', 'extranet': '', 'directory': '', 'news': '', 'events': '', 'leadership': ''},
        },

        content = '<div id="nav-con" class="kill-pointer nav" data-id="nav-main" data-no><div class="mp-pusher" id="mp-pusher" data-no><nav id="mp-menu" class="mp-menu" data-no><div class="mp-level" data-no><ul data-no><li class="icon-global-menu"  data-trigger data-id="sec-open" data-no><div class="mp-level secondary" data-id="nav-sec" data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white" title="Global Menu" data-no>Global Menu</h4></span><a class="mp-back" href="#" data-trigger data-id="sec-close" data-no>back</a><ul><li class="nav-left-panel border-white border-solo-bot {{hide.internet}}" data-no><a href="{{urls.internet}}" class="icon-inter" data-no>{{copy.internet}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.intranet}}" data-no><a href="{{urls.intranet}}" class="icon-intra" data-no>{{copy.intranet}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.extranet}}" data-no><a href="{{urls.extranet}}" class="icon-extra" data-no>{{copy.extranet}}</a></li></ul></div></li><li data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white" data-no>intranet</h4></span></li><li class="nav-left-panel border-white border-solo-bot {{hide.home}}" data-no><a href="{{urls.home}}" class="icon-home" data-no>{{copy.home}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.projectsTeams}}" data-no><a href="{{urls.projectsTeams}}" class="icon-proj" data-no>{{copy.projectsTeams}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.employeeCenter}}" data-no><a href="{{urls.employeeCenter}}" class="icon-huma">{{copy.employeeCenter}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.workplaceServices}}" data-no><a href="{{urls.workplaceServices}}" class="icon-work" data-no>{{copy.workplaceServices}}</a></li><li class="nav-left-panel border-white border-solo-bot drop-down-custom {{hide.company}}" data-no><a href="{{urls.company}}" class="icon-comp" data-no>{{copy.company}}</a><ul class="mp-level-sub-drop bg-color-white" data-no><li class="nav-left-panel-sub {{hide.directory}}" data-no><a href="{{urls.directory}}" class="indicator-border-left" data-no>{{copy.directory}}</a></li><li class="nav-left-panel-sub {{hide.news}}" data-no><a href="{{urls.news}}" class="indicator-border-left" data-no>{{copy.news}}</a></li><li class="nav-left-panel-sub {{hide.events}}" data-no><a href="{{urls.events}}" class="indicator-border-left" data-no>{{copy.events}}</a></li><li class="nav-left-panel-sub {{hide.leadership}}" data-no><a href="{{urls.leadership}}" class="indicator-border-left" data-no>{{copy.leadership}}</a></li></ul></li><li data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white height-force-min-40" data-no></h4></span></li><li class="nav-left-panel border-white border-solo-bot {{hide.mySettings}}" data-no><a href="{{urls.mySettings}}" class="icon-sets" data-no>{{copy.mySettings}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.terms}}" data-no><a href="{{urls.terms}}" class="icon-term" data-no>{{copy.terms}}</a></li><li class="nav-left-panel border-white border-solo-bot {{hide.logout}}" data-no><a href="{{urls.logout}}" class="icon-logs" data-no>{{copy.logout}}</a></li></ul></div></nav></div></div>',

        template = Handlebars.compile(content),
        html    = template(data),
        $idMain = $('[data-id=main]'),

    openSidepage = function() {  
        $('[data-id=nav-main]')
            .animate({left: '310px'}, 400)
            .removeClass('kill-pointer')
            .css('top', '40px');
        $idMain.addClass('open');
    },

    openInnerpage = function() {  
        $('[data-id=nav-sec]')
            .animate({left: '310px'}, 400)
            .removeClass('kill-pointer'); 
    },
  
    closeSidepage = function (){        
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

    $('html').on('click', '[data-trigger]', function(ev) {
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
        }
    });
     $('[data-target=template]').append(html);

    //Close menu on click outside menu
    $('html').on('click',  function(ev) {
        ev.stopPropagation();
        if (!$(ev.target).is('[data-no]')) {
            if ($idMain.hasClass('open')) {
                closeSidepage();
                $idMain.removeClass('open');
            }
        }        
    });
})();