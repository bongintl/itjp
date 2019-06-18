(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbk5vZGVMaXN0LnByb3RvdHlwZS5tYXAgPSBBcnJheS5wcm90b3R5cGUubWFwO1xuTm9kZUxpc3QucHJvdG90eXBlLmZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG5cbnZhciBzaXRlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZmlsdGVyKGZ1bmN0aW9uKGEpe1xuICAgIHZhciBjb21wID0gbmV3IFJlZ0V4cChsb2NhdGlvbi5ob3N0KTtcbiAgICByZXR1cm4gY29tcC50ZXN0KGEuaHJlZikgJiYgYS5ocmVmLmluZGV4T2YoJyMnKSA9PT0gLTE7XG59KS5tYXAoZnVuY3Rpb24oYSl7XG4gICAgYS5vcmlnaW5hbEhyZWYgPSBhLmhyZWY7XG4gICAgcmV0dXJuIGE7XG59KVxuXG5mdW5jdGlvbiBsYW5nKCB3aGljaCApIHtcbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdsYW5nX2VuZ2xpc2gnLCAnbGFuZ190YW1pbCcsICdsYW5nX3NpbmhhbGEnICk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnbGFuZ18nICsgd2hpY2ggKTtcbiAgICBzaXplUHJlc3MoKTtcbiAgICBcbiAgICBzaXRlTGlua3MuZm9yRWFjaChmdW5jdGlvbihhKXtcbiAgICAgICAgYS5ocmVmID0gYS5vcmlnaW5hbEhyZWYgKyAnIycgKyB3aGljaDtcbiAgICB9KVxuICAgIFxufVxuXG52YXIgcHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3MnKTtcblxuXG5pZihsb2NhdGlvbi5oYXNoLmxlbmd0aCA+IDEpIHtcbiAgICBsYW5nKGxvY2F0aW9uLmhhc2guc2xpY2UoMSkpO1xufVxuXG5bJ2VuZ2xpc2gnLCAndGFtaWwnLCAnc2luaGFsYSddLmZvckVhY2goIGZ1bmN0aW9uKGxhbmd1YWdlKXtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmpzLWxhbmctJyArIGxhbmd1YWdlICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGxhbmcoIGxhbmd1YWdlICk7XG5cbiAgICB9KTtcbiAgICBcbn0pO1xuXG5cblxuZnVuY3Rpb24gc2l6ZVByZXNzKCl7XG4gICBpZiAoIXByZXNzKSB7IFxuICAgICAgIHJldHVybjtcbiAgIH1cbiAgIFxuICAgIHZhciBtYXJnaW4gPSAxMDtcbiAgICB2YXIgYmxvY2tIZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC4zMztcbiAgICBcbiAgICBwcmVzcy5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICB2YXIgY29udGVudEhlaWdodCA9IHByZXNzLmNsaWVudEhlaWdodDtcbiAgICBcbiAgICB2YXIgaCA9IDA7XG4gICAgXG4gICAgd2hpbGUoIGggPCBjb250ZW50SGVpZ2h0ICkge1xuICAgICAgICBcbiAgICAgICAgaCArPSBibG9ja0hlaWdodCArIG1hcmdpbjtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGggLT0gbWFyZ2luO1xuICAgIFxuICAgIHByZXNzLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCdzaXplZCcpO1xufVxuICAgIFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2l6ZVByZXNzKTtcblxuc2l6ZVByZXNzKCk7XG4gXG5cblxudmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xudmFyIGhlYWRlckZ1bGxWSCA9IC42NTtcbnZhciBoZWFkZXJDb2xsYXBzZWRWSCA9IC4yO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcbiAgICBcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA0MTUpIHJldHVybjtcbiAgICBcbiAgICBpZiggd2luZG93LnBhZ2VZT2Zmc2V0ID4gMCApIHtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbGxhcHNlZCcpXG4gICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1jb2xsYXBzZWQnKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgdmFyIGhlYWRlck1heEhlaWdodCA9IGhlYWRlckZ1bGxWSCAqIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB2YXIgaGVhZGVyTWluSGVpZ2h0ID0gaGVhZGVyQ29sbGFwc2VkVkggKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgXG4gICAgaGVhZGVyLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KCBoZWFkZXJNYXhIZWlnaHQgLSB3aW5kb3cucGFnZVlPZmZzZXQsIGhlYWRlck1pbkhlaWdodCApICsgJ3B4JztcbiAgICBcbn0pIl19
