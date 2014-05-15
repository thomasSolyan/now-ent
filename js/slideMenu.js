 (function() {
    var data = null, //will be used for link copy, hr
        content = '<div id="nav-con" class="kill-pointer nav" data-id="nav-main"><div class="mp-pusher" id="mp-pusher"><nav id="mp-menu" class="mp-menu"><div class="mp-level"><ul><li class="icon-global-menu" data-trigger data-id="sec-open"><div class="mp-level mp-level-open" data-id="nav-sec"><span class="wrapit border-tb-lightgrey"><h4 class="title border-pair-tb border-white" title="Global Menu">Global Menu</h4></span><a class="mp-back" href="#" data-trigger data-id="sec-close">back</a><ul><li class="nav-left-panel border-white border-solo-bot"><a href="#" class="icon-inter">Internet</a></li><li class="nav-left-panel border-white border-solo-bot"><a href="#" class="icon-intra">Intranet</a></li><li class="nav-left-panel border-white border-solo-bot"><a href="#" class="icon-extra">Extranet</a></li></ul></div></li><li><span class="wrapit border-tb-lightgrey"><h4 class="title border-pair-tb border-white">intranet</h4></span></li><li class="nav-left-panel border-white border-solo-bot"><a href="#" class="icon-home">home</a></li><li class="nav-left-panel border-white border-solo-bot"><a href="#" class="icon-proj">projects &amp; teams</a></li><li class="nav-left-panel border-white border-solo-bot"><a href="#" class="icon-huma">employee center</a></li><li class="nav-left-panel border-white border-solo-bot"><a href="#" class="icon-work">workplace services</a></li><li class="nav-left-panel border-white border-solo-bot drop-down-custom"><a href="#" class="icon-comp">company</a><ul class="mp-level-sub-drop bg-color-white"><li class="nav-left-panel-sub"><a href="#" class="indicator-border-left">directory</a></li><li class="nav-left-panel-sub"><a href="#" class="indicator-border-left">news</a></li><li class="nav-left-panel-sub"><a href="#" class="indicator-border-left">events</a></li><li class="nav-left-panel-sub"><a href="#" class="indicator-border-left">leadership</a></li></ul></li><li><span class="wrapit border-tb-lightgrey"><h4 class="title border-pair-tb border-white height-force-min-40"></h4></span></li><li class="nav-left-panel border-white border-solo-bot"><a href="#" class="icon-sets">my settings</a></li><li class="nav-left-panel border-white border-solo-bot"><a href="#" class="icon-term">terms and policies</a></li><li class="nav-left-panel border-white border-solo-bot"><a href="#" class="icon-logs">logout</a></li></ul></div></nav></div></div>',
         
        source   = $("#menu-template").html(),
        template = Handlebars.compile(content),
        context = data,
        html    = template(context),

    openSidepage = function() {  
        $('[data-id=nav-main]')
            .animate({left: '310px'}, 400)
            .removeClass('kill-pointer')
            .css('top', '40px'); 
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
                if ($(ev.target).hasClass('open')) {
                    $(ev.target).removeClass("open");
                    closeSidepage();            
                } else {
                    $(ev.target).addClass("open");
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
})();