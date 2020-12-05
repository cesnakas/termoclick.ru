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

$(function(){
	$('#cb-close').click(function(){
		$('#feedbackbox').slideUp(300);
	}
	);

	$('#callBtn').click(function(){
		if ($('#feedbackbox').css('display') == 'none')
		{
			//$('#call').css('display', 'block');
			$('#feedbackbox').slideDown(300);
		}
		else
		{
			//$('#call').css('display', 'none');
			$('#feedbackbox').slideUp(300);
		}
	});

	validationCallback = function(){
		var result = true;

		if ($('#callback-name').val() === '')
		{
			result = false;
			$('#callback-name').css("border", "1px solid red").css("background", "#ffebeb");
		}

		if ($('#callback-email').val() === '')
		{
			result = false;
			$('#callback-email').css("border", "1px solid red").css("background", "#ffebeb");
		}

		return result;
	}

	$('#sendCallback').click(function(){
		if (validationCallback())
		{
			$.post('/index.php?route=common/callback/callback',
				{
					'callback-name' : $('#callback-name').val(),
					'callback-email' : $('#callback-email').val(),
					'callback-question' : $('#callback-question').val()
				},
				function(response){
				if (response == 'success')
				{
					$('#callback-name').val('');
					$('#callback-email').val('');
					$('#callback-question').val('');
					//$('#call').css('display', 'none');
					$('#call').slideUp(300);
					$('#cb-success').slideDown(300);
				}
			});
		}
		return false;
	});



});

}
/*
     FILE ARCHIVED ON 16:52:17 Apr 17, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:43:46 Dec 05, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 973.136
  exclusion.robots.policy: 0.121
  esindex: 0.016
  RedisCDXSource: 2.63
  PetaboxLoader3.datanode: 978.015 (4)
  PetaboxLoader3.resolve: 38.287
  CDXLines.iter: 24.291 (3)
  exclusion.robots: 0.131
  load_resource: 154.457
  LoadShardBlock: 939.791 (3)
*/