 (function() {
    var data = {'home': '#', 'projectsTeams': '#', 'employeeCenter': '#', 'workplaceServices': '#', 'company': '#', 'mySettings': '#', 'terms': '#', 'logout': '#', 'internet': '#', 'intranet': '#', 'extranet': '#'},

        content = '<div id="nav-con" class="kill-pointer nav" data-id="nav-main" data-no><div class="mp-pusher" id="mp-pusher" data-no><nav id="mp-menu" class="mp-menu" data-no><div class="mp-level" data-no><ul data-no><li class="icon-global-menu" data-trigger data-id="sec-open" data-no><div class="mp-level" data-id="nav-sec" data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white" title="Global Menu" data-no>Global Menu</h4></span><a class="mp-back" href="#" data-trigger data-id="sec-close" data-no>back</a><ul><li class="nav-left-panel border-white border-solo-bot" data-no><a href="#" class="icon-inter" data-no>Internet</a></li><li class="nav-left-panel border-white border-solo-bot" data-no><a href="#" class="icon-intra" data-no>Intranet</a></li><li class="nav-left-panel border-white border-solo-bot" data-no><a href="#" class="icon-extra" data-no>Extranet</a></li></ul></div></li><li data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white" data-no>intranet</h4></span></li><li class="nav-left-panel border-white border-solo-bot" data-no><a href="#" class="icon-home" data-no>home</a></li><li class="nav-left-panel border-white border-solo-bot" data-no><a href="#" class="icon-proj" data-no>projects &amp; teams</a></li><li class="nav-left-panel border-white border-solo-bot" data-no><a href="#" class="icon-huma">employee center</a></li><li class="nav-left-panel border-white border-solo-bot" data-no><a href="#" class="icon-work" data-no>workplace services</a></li><li class="nav-left-panel border-white border-solo-bot drop-down-custom" data-no><a href="#" class="icon-comp" data-no>company</a><ul class="mp-level-sub-drop bg-color-white" data-no><li class="nav-left-panel-sub" data-no><a href="#" class="indicator-border-left" data-no>directory</a></li><li class="nav-left-panel-sub" data-no><a href="#" class="indicator-border-left" data-no>news</a></li><li class="nav-left-panel-sub" data-no><a href="#" class="indicator-border-left" data-no>events</a></li><li class="nav-left-panel-sub" data-no><a href="#" class="indicator-border-left" data-no>leadership</a></li></ul></li><li data-no><span class="wrapit border-tb-lightgrey" data-no><h4 class="title border-pair-tb border-white height-force-min-40" data-no></h4></span></li><li class="nav-left-panel border-white border-solo-bot" data-no><a href="#" class="icon-sets" data-no>my settings</a></li><li class="nav-left-panel border-white border-solo-bot" data-no><a href="#" class="icon-term" data-no>terms and policies</a></li><li class="nav-left-panel border-white border-solo-bot" data-no><a href="#" class="icon-logs" data-no>logout</a></li></ul></div></nav></div></div>',
         
        source   = $("#menu-template").html(),
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