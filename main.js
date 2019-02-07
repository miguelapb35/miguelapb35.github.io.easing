
var img = document.getElementsByTagName('img'),
	h2 = document.getElementsByTagName('h2'),
	firstItem = document.getElementsByClassName('list')[0].firstElementChild,
	secondItem = document.getElementsByClassName('list')[0].children[1],
	thirdItem = document.getElementsByClassName('list')[0].children[2],
	fourthItem = document.getElementsByClassName('list')[0].children[3],
	fifthItem = document.getElementsByClassName('list')[0].children[4],
	sixthItem = document.getElementsByClassName('list')[0].children[5],
	seventhItem = document.getElementsByClassName('list')[0].children[6],
	eightItem = document.getElementsByClassName('list')[0].children[7],
	lastItem = document.getElementsByClassName('list')[0].lastElementChild;
	
//TweenLite.to(img, 1, {width: 100});
//TweenLite.to(img, 1, {x: 200});
//TweenLite.to(img, 1, {x: -100});
//TweenLite.from(img, 1, {x: -200});
//TweenLite.set(img,  {x: -200});
//TweenLite.fromTo(img, 1, {x: -200}, {x: 200} );

//TweenLite.from(img, 1, {x: -200, ease:Power0.easeNone}); // no ease
//TweenLite.from(img, 1, {x: -200, ease:Power1.easeIn});  // start slow, finish fast
//TweenLite.from(img, 1, {x: -200, ease:Power1.easeOut}); // start fast, finish slow
//TweenLite.from(img, 1, {x: -200, ease:Power2.easeOut}); // power 2
//TweenLite.from(img, 1, {x: -200, ease:Power3.easeOut}); // power 3
//TweenLite.from(img, 1, {x: -200, ease:Power4.easeOut}); // power 4 strenghthen curve
TweenLite.from(img, 1, {x: -200, ease:Back.easeOut}); // needs EasePack script
TweenLite.from(h2, 2, {x: -200, ease:Bounce.easeOut});
TweenLite.from(firstItem, 3, {x: -200, ease:Bounce.easeOut });
TweenLite.from(secondItem, 4, {x: -200, ease:Back.easeOut });
TweenLite.from(thirdItem, 5, {x: -200, ease:Circ.easeOut });
TweenLite.from(fourthItem, 6, {x: -200, ease:Elastic.easeOut });
TweenLite.from(fifthItem, 7, {x: -200, ease:Expo.easeOut });

TweenLite.from(sixthItem, 2.5, {
	ease: RoughEase.ease.config({
	  template: Power0.easeNone,
	  strength: 1,
	  points: 20,
	  taper: "none",
	  randomize: true,
	  clamp: false
	}),
	 x: -200
  });

  TweenLite.from(seventhItem, 2.5, {
	ease: SlowMo.ease.config(0.7, 0.7, false),
	x: -200
  }); 

 

  TweenLite.from(lastItem, 2.5, {
	ease: SteppedEase.config(12),
	x: -200
  });


//TweenLite.from(eightItem, 1, {x: -200, ease:Elastic.easeOut });
//TweenLite.from(lastItem, 1, {x: -200, ease:Elastic.easeOut });
//TweenLite.from(lastItem, 1, {x: -200, ease:SlowMo });





//TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});