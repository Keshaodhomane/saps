$(document).ready(function(){
  
    






  function switchStyleSheets(theme){
    $('link[title="theme"]').attr('href', theme);
    }
  
  $(document).ready(function(){
      
      
      $('#black').click(function(event){
          event.preventDefault();
          switchStyleSheets(
              'css/black.css'
          );
      });
      
              
      $('#default').click(function(event){
          event.preventDefault();
          switchStyleSheets(
              'css/default.css'        
          );
      });
      
      
      
      $('#orange').click(function(event){
          event.preventDefault();
          switchStyleSheets(
              'css/orange.css'        
          );
      });
      
      
      
      
      $('#green').click(function(event){
          event.preventDefault();
          switchStyleSheets(
              'css/green.css'
          );
      });
      
  });
      
                    
      
      
      
      /* this changes font size of */
  
      var originalSize = $('div').css('font-size');
      // reset
      $(".resetMe").click(function(){
      $('div').css('font-size', originalSize); 
  
      });
  
      // Increase Font Size
      $(".increase").click(function(){
      var currentSize = $('div').css('font-size');
      var currentSize = parseFloat(currentSize)*1.2;
      $('div').css('font-size', currentSize);
  
      return false;
      });
  
      // Decrease Font Size
      $(".decrease").click(function(){
      var currentFontSize = $('div').css('font-size');
      var currentSize = $('div').css('font-size');
      var currentSize = parseFloat(currentSize)*0.8;
      $('div').css('font-size', currentSize);
  
      return false;
      });











    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });




      $('.campustour').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });





      var t = new TimelineMax({paused:true});

      t.set(".img1",{display:"none"})
      t.set(".img2",{display:"none"})
      t.set(".img1 div h2",{display:"none"})
      t.set(".img1 div h1",{display:"none"})

      t.from(".img1", 1, {display:"block", scale:4, autoAlpha:0, ease:Expo.easeOut})
      t.from(".img1 h2", .5, {display:"block", scaleX:5,  autoAlpha:0, ease:Sine.easeOut})
      t.from(".img1 h1", .5, {display:"block", scaleX:5,  autoAlpha:0, ease:Sine.easeOut})
      t.to(".img1", 1, {autoAlpha:0, ease:Sine.easeOut}, "+=2")


      t.from(".img2", 1, {display:"block", scale:4, autoAlpha:0, ease:Expo.easeOut})
      t.from(".img2 h2", .5, {display:"block", scaleX:5,  autoAlpha:0, ease:Sine.easeOut})
      t.from(".img2 h1", .5, {display:"block", scaleX:5,  autoAlpha:0, ease:Sine.easeOut})
      t.to(".img2", 1, {autoAlpha:0, ease:Sine.easeOut}, "+=2")

      t.play();
      t.repeat(-1);















  });