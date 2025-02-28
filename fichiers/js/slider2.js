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