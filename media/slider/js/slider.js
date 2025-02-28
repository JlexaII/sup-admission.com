	madjo_1_slider_init = function() {

		var madjo_1_SlideoTransitions = [
		  [{b:-1,d:1,o:-1},{b:0,d:1000,o:1}],
		  [{b:1900,d:2000,x:-379,e:{x:7}}],
		  [{b:1900,d:2000,x:-379,e:{x:7}}],
		  [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:1000,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:1900,d:1600,x:-200,o:-1,e:{x:16}}]
		];

		var madjo_1_options = {
		  $AutoPlay: true,
		  $SlideDuration: 800,
		  $SlideEasing: $Jease$.$OutQuint,
		  $CaptionSliderOptions: {
			$Class: $madjoCaptionSlideo$,
			$Transitions: madjo_1_SlideoTransitions
		  },
		  $ArrowNavigatorOptions: {
			$Class: $madjoArrowNavigator$
		  },
		  $BulletNavigatorOptions: {
			$Class: $madjoBulletNavigator$
		  }
		};

		var madjo_1_slider = new $madjoSlider$("madjo_1", madjo_1_options);

		/*responsive code begin*/
		/*you can remove responsive code if you don't want the slider scales while window resizing*/
		function ScaleSlider() {
			var refSize = madjo_1_slider.$Elmt.parentNode.clientWidth;
			if (refSize) {
				refSize = Math.min(refSize, 1920);
				madjo_1_slider.$ScaleWidth(refSize);
			}
			else {
				window.setTimeout(ScaleSlider, 30);
			}
		}
		ScaleSlider();
		$madjo$.$AddEvent(window, "load", ScaleSlider);
		$madjo$.$AddEvent(window, "resize", ScaleSlider);
		$madjo$.$AddEvent(window, "orientationchange", ScaleSlider);
		/*responsive code end*/
	};
