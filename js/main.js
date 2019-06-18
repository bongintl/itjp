NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.filter = Array.prototype.filter;

var siteLinks = document.querySelectorAll('a').filter(function(a){
    var comp = new RegExp(location.host);
    return comp.test(a.href) && a.href.indexOf('#') === -1;
}).map(function(a){
    a.originalHref = a.href;
    return a;
})

function lang( which ) {
    
    document.body.classList.remove( 'lang_english', 'lang_tamil', 'lang_sinhala' );
    document.body.classList.add( 'lang_' + which );
    sizePress();
    
    siteLinks.forEach(function(a){
        a.href = a.originalHref + '#' + which;
    })
    
}

var press = document.querySelector('.press');


if(location.hash.length > 1) {
    lang(location.hash.slice(1));
}

['english', 'tamil', 'sinhala'].forEach( function(language){
    
    document.querySelector( '.js-lang-' + language ).addEventListener( 'click', function(){
        
        lang( language );

    });
    
});



function sizePress(){
   if (!press) { 
       return;
   }
   
    var margin = 10;
    var blockHeight = window.innerWidth * .33;
    
    press.style.height = '';
    var contentHeight = press.clientHeight;
    
    var h = 0;
    
    while( h < contentHeight ) {
        
        h += blockHeight + margin;
        
    }
    
    h -= margin;
    
    press.style.height = h + 'px';
    
    console.log('sized');
}
    

window.addEventListener('resize', sizePress);

sizePress();
 


var header = document.querySelector('header');
var headerFullVH = .65;
var headerCollapsedVH = .2;

window.addEventListener('scroll', function(){
    
    if(window.innerWidth <= 415) return;
    
    if( window.pageYOffset > 0 ) {
        
        document.body.classList.add('header-collapsed')
        
    } else {
        
        document.body.classList.remove('header-collapsed')
        
    }
    
    var headerMaxHeight = headerFullVH * window.innerHeight;
    var headerMinHeight = headerCollapsedVH * window.innerHeight;
    
    header.style.height = Math.max( headerMaxHeight - window.pageYOffset, headerMinHeight ) + 'px';
    
})