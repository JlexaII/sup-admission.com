var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

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


}
/*
     FILE ARCHIVED ON 09:16:18 Apr 15, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:36:57 Feb 22, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.648
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 6.378
  LoadShardBlock: 1790.579 (3)
  PetaboxLoader3.datanode: 1783.388 (4)
  load_resource: 130.603
  PetaboxLoader3.resolve: 93.846
*/