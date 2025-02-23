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

madjo2_1_slider_init = function() {

            var madjo2_1_SlideshowTransitions = [
              {$Duration:800,$Opacity:2}
            ];

            var madjo2_1_options = {
              $AutoPlay: 1,
              $SlideshowOptions: {
                $Class: $madjo2SlideshowRunner$,
                $Transitions: madjo2_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $madjo2ArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $madjo2BulletNavigator$
              }
            };

            var madjo2_1_slider = new $madjo2Slider$("madjo2_1", madjo2_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 900;

            function ScaleSlider() {
                var containerElement = madjo2_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    madjo2_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $madjo2$.$AddEvent(window, "load", ScaleSlider);
            $madjo2$.$AddEvent(window, "resize", ScaleSlider);
            $madjo2$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };

}
/*
     FILE ARCHIVED ON 03:02:44 Jul 11, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:37:11 Feb 22, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.627
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 6.626
  LoadShardBlock: 232.332 (3)
  PetaboxLoader3.datanode: 181.833 (4)
  PetaboxLoader3.resolve: 163.621 (2)
  load_resource: 134.435
*/