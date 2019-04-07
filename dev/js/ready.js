'use strict';

// $(function() {
//   $('.l_block-photo_wrap').magnificPopup({
//   	delegate: 'a',
//   	type:'image',
//   	image: {
//   		titleSrc: 'title'
//   	}
//   });
// });


function number_format(number, decimals, dec_point, separator ) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof separator === 'undefined') ? ',' : separator ,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Р¤РёРєСЃРёРј Р±Р°Рі РІ IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}


$(function(){ 
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
    return false;
    });
});


$(function(){
  $('[name=phone]').mask("+7 (999) 999-9999");
})


$(function(){
  $('.l_block-map__title').on('click', function(){
    $('.l_block-map__list').slideToggle()
  })
})
  

$(function(){
  $('.header_menu__toggle').on('click', function(){
    $('.menu').toggleClass('active')
  })

})



var tiltSettings = [
{},
{
  movement: {
    imgWrapper : {
      translation : {x: 10, y: 10, z: 30},
      rotation : {x: 0, y: -10, z: 0},
      reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
    },
    lines : {
      translation : {x: 10, y: 10, z: [0,70]},
      rotation : {x: 0, y: 0, z: -2},
      reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
    },
    caption : {
      rotation : {x: 0, y: 0, z: 2},
      reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
    },
    overlay : {
      translation : {x: 10, y: -10, z: 0},
      rotation : {x: 0, y: 0, z: 2},
      reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
    },
    shine : {
      translation : {x: 100, y: 100, z: 0},
      reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
    }
  }
},
{
  movement: {
    imgWrapper : {
      rotation : {x: -5, y: 10, z: 0},
      reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
    },
    caption : {
      translation : {x: 30, y: 30, z: [0,40]},
      rotation : {x: [0,15], y: 0, z: 0},
      reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
    },
    overlay : {
      translation : {x: 10, y: 10, z: [0,20]},
      reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
    },
    shine : {
      translation : {x: 100, y: 100, z: 0},
      reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
    }
  }
},
{
  movement: {
    imgWrapper : {
      rotation : {x: -5, y: 10, z: 0},
      reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
    },
    caption : {
      translation : {x: 20, y: 20, z: 0},
      reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
    },
    overlay : {
      translation : {x: 5, y: -5, z: 0},
      rotation : {x: 0, y: 0, z: 6},
      reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
    },
    shine : {
      translation : {x: 50, y: 50, z: 0},
      reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
    }
  }
},
{
  movement: {
    imgWrapper : {
      translation : {x: 0, y: -8, z: 0},
      rotation : {x: 3, y: 3, z: 0},
      reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
    },
    lines : {
      translation : {x: 15, y: 15, z: [0,15]},
      reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
    },
    overlay : {
      translation : {x: 0, y: 8, z: 0},
      reverseAnimation : {duration : 600, easing : 'easeOutExpo'}
    },
    caption : {
      translation : {x: 10, y: -15, z: 0},
      reverseAnimation : {duration : 900, easing : 'easeOutExpo'}
    },
    shine : {
      translation : {x: 50, y: 50, z: 0},
      reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
    }
  }
},
{
  movement: {
    lines : {
      translation : {x: -5, y: 5, z: 0},
      reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
    },
    caption : {
      translation : {x: 15, y: 15, z: 0},
      rotation : {x: 0, y: 0, z: 3},
      reverseAnimation : {duration : 1500, easing : 'easeOutElastic', elasticity : 700}
    },
    overlay : {
      translation : {x: 15, y: -15, z: 0},
      reverseAnimation : {duration : 500,easing : 'easeOutExpo'}
    },
    shine : {
      translation : {x: 50, y: 50, z: 0},
      reverseAnimation : {duration : 500, easing : 'easeOutExpo'}
    }
  }
},
{
  movement: {
    imgWrapper : {
      translation : {x: 5, y: 5, z: 0},
      reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
    },
    caption : {
      translation : {x: 10, y: 10, z: [0,50]},
      reverseAnimation : {duration : 1000, easing : 'easeOutQuart'}
    },
    shine : {
      translation : {x: 50, y: 50, z: 0},
      reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
    }
  }
},
{
  movement: {
    lines : {
      translation : {x: 40, y: 40, z: 0},
      reverseAnimation : {duration : 1500, easing : 'easeOutElastic'}
    },
    caption : {
      translation : {x: 20, y: 20, z: 0},
      rotation : {x: 0, y: 0, z: -5},
      reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
    },
    overlay : {
      translation : {x: -30, y: -30, z: 0},
      rotation : {x: 0, y: 0, z: 3},
      reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
    },
    shine : {
      translation : {x: 100, y: 100, z: 0},
      reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
    }
  }
}];

function init() {
  var idx = 0;
  [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) { 
    idx = pos%2 === 0 ? idx+1 : idx;
    new TiltFx(el, tiltSettings[idx-1]);
  });
}

// REMOVE THIS!
// For Demo purposes only. Prevent the click event.
[].slice.call(document.querySelectorAll('a[href="#"]')).forEach(function(el) {
  el.addEventListener('click', function(ev) { ev.preventDefault(); });
});


$(function(){
  imagesLoaded($('.main'), function() {
    document.body.classList.remove('loading');
    init();
  });
})

$(function() { 
  $('select.select').selectbox();
});  