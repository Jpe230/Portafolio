var duration  = 2,
    easing    = Power4.easeOut,
    projectCards = new TimelineMax({paused: true});


var Card1 = $('.Card1');
var Card2 = $('.Card2');
var Card3 = $('.Card3');
var Card4 = $('.Card4');
var Card5 = $('.Card5');



var Cards = [];


Cards.push(Card1);
Cards.push(Card2);
Cards.push(Card3);
Cards.push(Card4);
Cards.push(Card5);


$(function(){
  $.each(Cards, function(index, item) {
   
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(this).css('background-color', "#" + randomColor);
  });
});


Card1.mouseenter(function(){
  TweenLite.to(this, duration/8, {y: -10, zIndex:2}, "walolo");
  TweenLite.to(this, duration/8, {autoAlpha: 0}, "walolo");
  TweenLite.to(this, duration/8, {autoAlpha: 1, delay:duration/8});
});

Card1.mouseleave(function(){
  TweenLite.to(this, duration/8, {y: 0, zIndex:0}, "wa");
  TweenLite.to(this, duration/16, {autoAlpha: 0}, "wa");
  TweenLite.to(this, duration/16, {autoAlpha: 1});
});


Card2.mouseenter(function(){
  TweenLite.to(this, duration/8, {y: -10, zIndex:2}, "walolo");
  TweenLite.to(this, duration/8, {autoAlpha: 0}, "walolo");
  TweenLite.to(this, duration/8, {autoAlpha: 1, delay:duration/8});
  
});

Card2.mouseleave(function(){
  TweenLite.to(this, duration/8, {y: 0, zIndex:0}, "wa1");
  TweenLite.to(this, duration/16, {autoAlpha: 0}, "wa1");
  TweenLite.to(this, duration/16, {autoAlpha: 1});
});


Card3.mouseenter(function(){
  TweenLite.to(this, duration/8, {y: -10, zIndex:2}, "walolo");
  TweenLite.to(this, duration/8, {autoAlpha: 0}, "walolo");
  TweenLite.to(this, duration/8, {autoAlpha: 1, delay:duration/8});
});

Card3.mouseleave(function(){
  TweenLite.to(this, duration/8, {y: 0, zIndex:0}, "wa3");
  TweenLite.to(this, duration/16, {autoAlpha: 0}, "wa3");
  TweenLite.to(this, duration/16, {autoAlpha: 1});
});


Card4.mouseenter(function(){
  TweenLite.to(this, duration/8, {y: -10, zIndex:2}, "walolo");
  TweenLite.to(this, duration/8, {autoAlpha: 0}, "walolo");
  TweenLite.to(this, duration/8, {autoAlpha: 1, delay:duration/8});
});

Card4.mouseleave(function(){
  TweenLite.to(this, duration/8, {y: 0, zIndex:0}, "wa5");
  TweenLite.to(this, duration/16, {autoAlpha: 0}, "wa5");
  TweenLite.to(this, duration/16, {autoAlpha: 1});
});

Card5.mouseenter(function(){
  TweenLite.to(this, duration/8, {y: -10, zIndex:2}, "walolo");
  TweenLite.to(this, duration/8, {autoAlpha: 0}, "walolo");
  TweenLite.to(this, duration/8, {autoAlpha: 1, delay:duration/8});
});

Card5.mouseleave(function(){
  TweenLite.to(this, duration/8, {y: 0, zIndex:0}, "wa7");
  TweenLite.to(this, duration/16, {autoAlpha: 0}, "wa7");
  TweenLite.to(this, duration/16, {autoAlpha: 1});
});

projectCards
.to(Card1, duration, { x: '-160%', ease: easing }, .4)
.to(Card2, duration, { x: '-80%', ease: easing }, .4)
.to(Card4, duration, { x: '80%', ease: easing }, .4)
.to(Card5, duration, { x: '160%', ease: easing }, .4);


var controller = new ScrollMagic.Controller();

var tl = new TimelineMax()
.set("#name",{delay: .01, text: 'JP Angulo'})
.set("#name",{delay: .01, text: 'J@ P! R Angulo'})
.set("#name",{delay: .01, text:'J%L PG_ Id Angulo'})
.set("#name",{delay: .01, text:'J3%3 Pa#g 0xE Angulo'})
.set("#name",{delay: .01, text:'J)j$ P?gme GX=l Angulo'})
.set("#name",{delay: .01, text:'J;45 P0h2g QY9:z Angulo'})
.set("#name",{delay: .01, text:'Jhi5 P45hh .5>V(c Angulo'})
.set("#name",{delay: .01, text:'Jh50 PQj<3 3p1aPK3 Angulo'})
.set("#name",{delay: .01, text:'J?b] Pj6F) D`+.]CK Angulo'})
.set("#name",{delay: .01, text:'Jf^s P31JV c!DK_Kf Angulo'})
.set("#name",{delay: .01, text:'JS@) Pie49 Y/dDp2W Angulo'})
.set("#name",{delay: .01, text:'JL*0 Pwc8J 3<[@"[Z Angulo'})
.set("#name",{delay: .01, text:'Ja9@ PTy@o @"Bv03. Angulo'})
.set("#name",{delay: .01, text:'JO/` P>8|7 u5Qz3<A Angulo'})
.set("#name",{delay: .01, text:'J%L2 PcW22 sD23uof, Angulo'})
.set("#name",{delay: .01, text:'J(k" PS&=a -x#g234j Angulo'})
.set("#name",{delay: .01, text:'J%mX Pg%O< Tv3VT6Y Angulo'})
.set("#name",{delay: .01, text:'JhpF PG7+n GPG-|]v Angulo'})
.set("#name",{delay: .01, text:'JRGy Py9+o U6/k8nR Angulo'})
.set("#name",{delay: .01, text:'Jsl{ PO((B (ZAE9z[ Angulo'})
.set("#name",{delay: .01, text:'J=1Z P&oD" O7[;+h4 Angulo'})
.set("#name",{delay: .01, text:'J[8Y P};=R aJ23UTJ Angulo'})
.set("#name",{delay: .01, text:'JjXT P!/48 %SeFKPD Angulo'})
.set("#name",{delay: .01, text:'JU@4 Pz=/K CfF{^)Y Angulo'})
.set("#name",{delay: .01, text:'Je|/ P:mUb ](:zUyV Angulo'})
.set("#name",{delay: .01, text:'JcrW Pmj/- *Hy8F}H Angulo'})
.set("#name",{delay: .01, text:'Jp/# PO+]> TW,fw_v Angulo'})
.set("#name",{delay: .01, text:'J9w} Pf3s^ rl/qxM[ Angulo'})
.set("#name",{delay: .01, text:'JT3" PGV;j v8LJ=9/ Angulo'})
.set("#name",{delay: .01, text:'Jo31 PaVlf faeíy5z Angulo'})
.set("#name",{delay: .01, text:'Jos1 PaVlo famírez Angulo'})
.set("#name",{delay: .01, text:'José Pablo Ramírez Angulo'})
.set("#name",{delay: .01, text:'José Pablo Ramírez Angulo'});



var text = new TimelineMax({paused: true})
.to(".light", .1, {text: 'all'})
.to(".light", .2, {text: 'all some'})
.to(".light", .3, {text: 'all some one of your'});

var height = $(window).height();

var vsOpts = {
  $slides: $('.v-slide'),
  $list: $('.v-slides'),
  duration: 6,
  lineHeight: 50
};

var vSlide = new TimelineMax({
  paused: true,
  repeat: -1
});

vsOpts.$slides.each(function(i) {
  vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
    y: i * -1 * vsOpts.lineHeight,
    ease: Elastic.easeOut.config(1, 0.4)
  })
});


var Inicio = new TimelineMax()
.fromTo(".logo-wrapper", 1, {height:"80%"},{height:"40%"},"first")
.fromTo(".name-wrapper", 1,  {scale: 1}, {scale: 2}, "first")
.add(tl, "first")
.to("#slideContainer", 0.5, {z: -150})

new ScrollMagic.Scene({
  triggerElement: "#pinContainer",
  triggerHook: "onLeave",
  duration: "100%"
})
.setPin("#pinContainer")
  .setTween(Inicio)
  .addIndicators({
    colorTrigger: "black",
    colorStart: "black",
    colorEnd: "black",
    indent: 40
  })
  .addIndicators({name: "1 (duration: 0)"})
  .addTo(controller);


var Who = new TimelineMax()
    // move back in 3D space
.to("#slideContainer", 1,   {x: "-25%"}, "second")	// move in to first panel
.to("#slideContainer", 0.5, {z: 0}) // move back to origin in 3D space
.to("#slideContainer", 0.5, {z: -150, delay: 1})



new ScrollMagic.Scene({
  triggerElement: "#pinContainer",
  triggerHook: "onLeave",
  duration: "100%",
  offset: height
})
.setPin("#pinContainer")
  .setTween(Who)
  .addIndicators({
    colorTrigger: "black",
    colorStart: "black",
    colorEnd: "black",
    indent: 40
  })
  .on("enter", function (event) {
    vSlide.play();
    text.play();
  })
  .on("leave", function (event) {
    vSlide.pause();
    text.reverse();
  })
  .addTo(controller);


var Projects = new TimelineMax()
.to("#slideContainer", 1,   {x: "-50%"})	// move in to first panel
.to("#slideContainer", 0.5, {z: 0}) // move back to origin in 3D space
.to("#slideContainer", 0.5, {z: -150, delay: 1})	// move back in 3D space


new ScrollMagic.Scene({
  triggerElement: "#pinContainer",
  triggerHook: "onLeave",
  duration: "100%",
  offset: height*2
})
.setPin("#pinContainer")
  .setTween(Projects)
  .addIndicators({
    colorTrigger: "black",
    colorStart: "black",
    colorEnd: "black",
    indent: 40
  })
  .on("enter", function (event) {
   projectCards.play();
  })
  .on("leave", function (event) {
    projectCards.reverse();
  })
  .addTo(controller);





