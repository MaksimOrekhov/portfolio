module.exports = () => {
  if (document.querySelector('.blog__nav')) {
    window.onscroll = function() {
        let sidebar = document.querySelector('.blog__nav'),
            sectionBlog = document.querySelector('.blog'),
            windowMargin = window.innerHeight / 3,
            wScroll = window.pageYOffset,
            articles = document.querySelector('.blog__articles');
    
        const sidebarFixed = wScroll + windowMargin;
    
        if (sidebarFixed >= 700) {
            sidebar.classList.add('blog__nav-fixed');
            articles.classList.add('blog__articles-fixed');
        } else {
            sidebar.classList.remove('blog__nav-fixed');  
            articles.classList.remove('blog__articles-fixed');
                  
        }
    }

    $(window).scroll(function(){
        let $articles = $('.article__item');
    $articles.each(function(i,el){
    let top  = $(el).offset().top-100;
    let bottom = top +$(el).height();
    let scroll = $(window).scrollTop();
    let id = $(el).attr('id');
    if( scroll > top && scroll < bottom){
        $('.blog__item').removeClass('blog__item-active');
        $('a[href="#'+id+'"]').parent().addClass('blog__item-active');        
    } else {
        $('a[href="#'+id+'"]').parent().removeClass('blog__item-active');  
    }
    })
    });

    $(".blog__item").on("click","a", function (e) {
    e.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
    });
}
}