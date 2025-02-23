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

jQuery( function() {
	jQuery( ":input" )
		.on( "focus", function() {
			var input      = jQuery(this);
			var inputID    = input.attr("id") || "(no input ID)";
			var inputName  = input.attr("name") || "(no input name)";
			var inputClass = input.attr("class") || "(no input class)";

			var form      = jQuery(this.form);
			var formID    = form.attr("id") || "(no form ID)";
			var formName  = form.attr("name") || "(no form name)";
			var formClass = form.attr("class") || "(no form class)";
			
			window[ gtm4wp_datalayer_name ].push({
				'event'    : 'gtm4wp.formElementEnter',

				'inputID'   : inputID,
				'inputName' : inputName,
				'inputClass': inputClass,

				'formID'   : formID,
				'formName' : formName,
				'formClass': formClass
			});
		})
		
		.on( "blur", function() {
			var input      = jQuery(this);
			var inputID    = input.attr("id") || "(no input ID)";
			var inputName  = input.attr("name") || "(no input name)";
			var inputClass = input.attr("class") || "(no input class)";

			var form      = jQuery(this.form);
			var formID    = form.attr("id") || "(no form ID)";
			var formName  = form.attr("name") || "(no form name)";
			var formClass = form.attr("class") || "(no form class)";
			
			window[ gtm4wp_datalayer_name ].push({
				'event'    : 'gtm4wp.formElementLeave',

				'inputID'   : inputID,
				'inputName' : inputName,
				'inputClass': inputClass,

				'formID'   : formID,
				'formName' : formName,
				'formClass': formClass
			});
		});
});


}
/*
     FILE ARCHIVED ON 13:49:03 Feb 24, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:37:29 Feb 22, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.546
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 6.856
  LoadShardBlock: 215.982 (3)
  PetaboxLoader3.datanode: 166.042 (4)
  load_resource: 81.672
  PetaboxLoader3.resolve: 49.656
*/