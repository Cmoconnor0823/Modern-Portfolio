 $(document).ready(function() {
  "use strict";
/*------------------ Masonry grid------------------*/

//Masonry parameters
var $grid = $('.grid');
$grid.masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  singleMode: true,
  isResizable: true,
  isAnimated: true
});

$('#load-images').click( function() {
  var $items = getItems();
  $grid.masonryImagesReveal( $items );
  $(".popup").magnificPopup({type:"image"});
});

$.fn.masonryImagesReveal = function( $items ) {
  var msnry = this.data('masonry');
  var itemSelector = msnry.options.itemSelector;
  // hide by default
  $items.hide();
  // append to container
  this.append( $items );
  $items.imagesLoaded().progress( function( imgLoad, image ) {
    // get item
    // image is imagesLoaded class, not <img>, <img> is image.img
    var $item = $( image.img ).parents( itemSelector );
    // un-hide item
    $item.show();
    // masonry does its thing
    msnry.appended( $item );
  });
  
  return this;
};

/*------------------ Masonry Filter ------------------*/

$(".filters .btn").click(function(e) {
  e.preventDefault();
  var filter = $(this).attr("data-filter");
  $grid.masonryFilter({
   filter: function () {
    if (!filter) return true;
    return $(this).attr("data-filter") == filter;
  }
});
});

$.fn.masonryFilter = function (options) {
        //reload masonry
        var reload = function ($container) {
        	setTimeout(function () {
        		$container.masonry("layout");
        	}, 100);
        };

        var process = function ($container) {
        	var items = $container.masonry("getAllItems"),
        	revealItems = [],
        	hideItems = [];

        	$.each(items, function(i) {
        		var item = items[i];
        		var elm = $(item.element),
        		shouldShow = options.filter && options.filter.call(elm);

        		if (shouldShow) {
        			if (item.isHidden) {
                        // -- Have to set this property so masonry does
                        //    not include hidden items when calling "layout"
                        item.isIgnored = false;
                        revealItems.push(item);
                      }
                    } else {
                    	if (!item.isHidden) {                        
                        // -- Easier to set this property directy rather than
                        //    using the "ignore" method, as it takes in a DOM
                        //    element rather than the masonry item object.
                        item.isIgnored = true;
                        hideItems.push(item);
                      }
                    }
                  });

        	$container.masonry('hide', hideItems);
        	$container.masonry('reveal', revealItems);

        	reload($container);
        };

        return this.each(function () {
        	var self = $(this);
        	process(self);
        });
      };

      var $images = [];
      var $img = 17; //the maximum number of uploaded images
      for (var i = 6; i <= $img; i++) {
      	$images[i] = i;
      }

//button "view more" configuration
function getItem(image) {
  var img_text = 'COMMERCIAL DESIGN';
	var n = '<a href="img/portfolio/pic' + image + '.jpg" class="popup"><div class="img_hover"><p>' + img_text + '</p></div></a>';
  var img_nature = 'data-filter="one"';
  var img_people = 'data-filter="two"';
  var img_commercial = 'data-filter="three"';
  if (image % 3 == 0) {
    if (image % 2 == 0) {
    return '<div ' + img_nature + ' class="grid-item w1">' + n + '<img src="img/portfolio/pic' + image + '.jpg" alt="pic' + image + '.jpg"/></div>';
    }
    else {
    return '<div ' + img_nature + ' class="grid-item w2">' + n + '<img src="img/portfolio/pic' + image + '.jpg" alt="pic' + image + '.jpg"/></div>';
    }
  }
	if (image % 2 == 0) {
		if ((image % 10 == 0) || (image % 16 == 0)) {
			return '<div ' + img_people + ' class="grid-item w2">' + n + '<img src="img/portfolio/pic' + image + '.jpg" alt="pic' + image + '.jpg"/></div>';
		}
		else {
			return '<div ' + img_people + ' class="grid-item w1">' + n + '<img src="img/portfolio/pic' + image + '.jpg" alt="pic' + image + '.jpg"/></div>';
		}
	}
	else {
    if ((image % 11 == 0) || (image % 17 == 0)) {
      return '<div ' + img_commercial + ' class="grid-item w1">' + n + '<img src="img/portfolio/pic' + image + '.jpg" alt="pic' + image + '.jpg"/></div>';
    }
		  return '<div ' + img_commercial + ' class="grid-item w2">' + n + '<img src="img/portfolio/pic' + image + '.jpg" alt="pic' + image + '.jpg"/></div>';
	}

}

function concat(elem1, elem2) {
	return elem1+elem2;
}

function getItems() {
	var items = $images
	.splice(6,6) //change parameters 
	.map(getItem)
	.reduce(concat);
	
	return $(items);
}

});