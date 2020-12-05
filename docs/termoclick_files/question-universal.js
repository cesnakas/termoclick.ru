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
	$('.as-close').click(function(){
		$('#askform').hide(300);
	}
	);

	$('#quick-but').click(function(){
		if ($('#askform').css('display') == 'none')
		{
			$('#askform').show(300);
		}
		else
		{
			$('#askform').hide(300);
		}
	});

	validationAskform = function(){
		var result = true;

		if ($('#customer_name').val() === '')
		{
			result = false;
			$('#customer_name').css("border", "1px solid red").css("background", "#ffebeb");
		}

		if ($('#customer_phone').val() === '')
		{
			result = false;
			$('#customer_phone').css("border", "1px solid red").css("background", "#ffebeb");
		}

		return result;
	}

	$('#sendQuestion').click(function(){
		if (validationAskform())
		{
			$.post('/index.php?route=common/question/question',
				{
					'customer_name' : $('#customer_name').val(),
					'customer_phone' : $('#customer_phone').val(),
					'customer_message' : $('#customer_message').val(),
					'product_name' : $('#product_name').val(),
					'product_price' : $('#product_price').val()
				},
				function(response){
				if (response == 'success')
				{
					$('#customer_name').val('');
					$('#customer_phone').val('');
					$('#customer_message').val('');
					$('#fast_order_form').slideUp(300);
					$('#fof_success').slideDown(300);
				}
			});
		}
		return false;
	});



});

}
/*
     FILE ARCHIVED ON 14:19:57 Apr 17, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:43:47 Dec 05, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.014
  CDXLines.iter: 24.199 (3)
  LoadShardBlock: 101.23 (3)
  RedisCDXSource: 11.223
  load_resource: 636.454
  captures_list: 141.945
  exclusion.robots.policy: 0.121
  PetaboxLoader3.resolve: 236.743
  PetaboxLoader3.datanode: 460.28 (4)
  exclusion.robots: 0.13
*/