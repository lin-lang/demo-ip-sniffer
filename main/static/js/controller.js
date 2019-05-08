changeOrientation($('.bg'));

function changeOrientation( $print ){  
    var width = document.documentElement.clientWidth;
    var height =  document.documentElement.clientHeight;
    if( width < height ){
      // 竖屏
      $print.width(height);
      $print.height(width);
      $print.css('top',  (height-width)/2 );
      $print.css('left',  0-(height-width)/2 );
      $print.css('transform' , 'rotate(90deg)');
      $print.css('transform-origin' , '50% 50%');
    } 
 
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
      
    window.addEventListener(evt, function() {
        console.log(evt);
        setTimeout( function(){
            var width = document.documentElement.clientWidth;
             var height =  document.documentElement.clientHeight;
             if( width > height ){
               // 横屏
                $print.width(width);
                $print.height(height);
                $print.css('top',  0 );
                $print.css('left',  0 );
                $print.css('transform' , 'none');
                $print.css('transform-origin' , '50% 50%');
             }
             else{
                // 竖屏
                $print.width(height);
                $print.height(width);
                $print.css('top',  (height-width)/2 );
                $print.css('left',  0-(height-width)/2 );
                $print.css('transform' , 'rotate(90deg)');
                $print.css('transform-origin' , '50% 50%');
             }
            
        }  , 300 );

    }, false);
}