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

(function($){
	var initLayout = function() {
		var hash = window.location.hash.replace('#', '');
		var currentTab = $('ul.navigationTabs a')
							.bind('click', showTab)
							.filter('a[rel=' + hash + ']');
		if (currentTab.size() == 0) {
			currentTab = $('ul.navigationTabs a:first');
		}
		showTab.apply(currentTab.get(0));
		$('#colorpickerHolder').ColorPicker({flat: true});
		$('#colorpickerHolder2').ColorPicker({
			flat: true,
			color: '#00ff00',
			onSubmit: function(hsb, hex, rgb) {
				$('#colorSelector2 div').css('backgroundColor', '#' + hex);
			}
		});
		$('#colorpickerHolder2>div').css('position', 'absolute');
		var widt = false;
		$('#colorSelector2').bind('click', function() {
			$('#colorpickerHolder2').stop().animate({height: widt ? 0 : 173}, 500);
			widt = !widt;
		});
		$('#colorpickerField1, #colorpickerField2, #colorpickerField3').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
			},
			onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
			}
		})
		.bind('keyup', function(){
			$(this).ColorPickerSetColor(this.value);
		});
		$('#unipickr_body').ColorPicker({
			color: '#ff9900',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_body div').css('backgroundColor', '#' + hex);
				$('body').css('backgroundImage', 'none');
				$('body').css('backgroundColor', '#' + hex);
			}
		});
		$('#unipickr_popupborder').ColorPicker({
			color: '#FFBC34',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_popupborder div').css('backgroundColor', '#' + hex);
				$('#feedbackbox').css('border-color', '#' + hex);
				$('#loginbox').css('border-color', '#' + hex);
				$('#askform').css('border-color', '#' + hex);
			}
		});
		$('#unipickr_popupback').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_popupback div').css('backgroundColor', '#' + hex);
				$('#feedbackbox').css('background-color', '#' + hex);
				$('#loginbox').css('background-color', '#' + hex);
				$('#askform').css('background-color', '#' + hex);
			}
		});
		$('#unipickr_fontcolor').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_fontcolor div').css('backgroundColor', '#' + hex);
				$('.header-table').css('color', '#' + hex);
				$('.headertablea a').css('color', '#' + hex);
				$('.box-product-countdown a').css('color', '#' + hex);
				$('.box-product-bestseller .name a').css('color', '#' + hex);
				$('.box-product-featured .name a').css('color', '#' + hex);
				$('div#short-dis').css('color', '#' + hex);
			}
		});
		$('#unipickr_topbarcolor').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_topbarcolor div').css('backgroundColor', '#' + hex);
				$('#toppanel').css('background', '#' + hex);
			}
		});
		$('#unipickr_loginbut').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_loginbut div').css('backgroundColor', '#' + hex);
				$('#logaut').css('background', '#' + hex);
			}
		});
		$('#unipick_cartcolor').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_cartcolor div').css('backgroundColor', '#' + hex);
				$('.toppanel_basket').css('background', '#' + hex);
			}
		});
		$('#unipick_carttext').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_carttext div').css('backgroundColor', '#' + hex);
				$('#wrap_analog .toppanel_basket div').css('color', '#' + hex);
			}
		});
		$('#unipickr_contacts').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_contacts div').css('backgroundColor', '#' + hex);
				$('.phone1').css('color', '#' + hex);
				$('.phone2').css('color', '#' + hex);
				$('.phone3').css('color', '#' + hex);
				$('.phone4').css('color', '#' + hex);
			}
		});
		$('#unipickr_go2cartcolor').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_go2cartcolor div').css('backgroundColor', '#' + hex);
				$('.buytempl').css('background', '#' + hex);
				$('.buytempl').css('borderColor', '#' + hex);
			}
		});
		$('#unipickr_go2carthover').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_go2carthover div').css('backgroundColor', '#' + hex);
				$('.buytempl:hover').css('background', '#' + hex);
				$('.buytempl:hover').css('borderColor', '#' + hex);
			}
		});
		$('#unipickr_go2carttext').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_go2carttext div').css('backgroundColor', '#' + hex);
				$('.buytempl').css('color', '#' + hex);
			}
		});
		$('#unipickr_topmenucolor').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_topmenucolor div').css('backgroundColor', '#' + hex);
				$('ul.top_menu_lvl1 li a.selected').css('background', '#' + hex);
				$('ul.top_menu_lvl1 li a.selected').css('borderColor', '#' + hex);
			}
		});
		$('#unipickr_topmenuhover').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_topmenuhover div').css('backgroundColor', '#' + hex);
				//$('ul.top_menu_lvl1 li a').hover(function(){
  			    //$('ul.top_menu_lvl1 li a').css('background', '#' + hex);
 				 // }, function(){
 				  //   $('#txt').html('You have HOVER OUT the area on top!');
				   //});

			}
		});
		$('#unipick_topmenutext').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_topmenutext div').css('backgroundColor', '#' + hex);
				$('ul.top_menu_lvl1 li a').css('color', '#' + hex);
			}
		});
		$('#unipickr_categoriescolor').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_categoriescolor div').css('backgroundColor', '#' + hex);
				$('#menu').css('background', '#' + hex);
				$('#menu').css('borderColor', '#' + hex);
			}
		});
		$('#unipickr_categorieshover').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_categorieshover div').css('backgroundColor', '#' + hex);

			}
		});
		$('#unipickr_categoriestext').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_categoriestext div').css('backgroundColor', '#' + hex);
				$('#menu > ul > li > a').css('color', '#' + hex);
			}
		});
		$('#unipickr_categoriestexthover').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_categoriestexthover div').css('backgroundColor', '#' + hex);

			}
		});
		$('#unipickr_subcatcolor').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_subcatcolor div').css('backgroundColor', '#' + hex);
				$('#menu > ul > li > div').css('background', '#' + hex);
			}
		});
		$('#unipickr_subcathover').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipickr_subcathover div').css('backgroundColor', '#' + hex);
				
			}
		});
		$('#unipick_subcattext').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_subcattext div').css('backgroundColor', '#' + hex);
				$('#menu > ul > li > div > ul > li > a').css('color', '#' + hex);
			}
		});
		$('#unipick_subcattexthover').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_subcattexthover div').css('backgroundColor', '#' + hex);
				
			}
		});
		$('#unipick_moduleshead').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_moduleshead div').css('backgroundColor', '#' + hex);
				$('.box .box-heading-manufacturer').css('background', '#' + hex);
				$('.box .box-heading-featured').css('background', '#' + hex);
				$('.box .box-heading-bestseller').css('background', '#' + hex);
			}
		});
		$('#unipick_modulestext').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_modulestext div').css('backgroundColor', '#' + hex);
				$('.box .box-heading-manufacturer').css('color', '#' + hex);
				$('.box .box-heading-featured').css('color', '#' + hex);
				$('.box .box-heading-bestseller').css('color', '#' + hex);
			}
		});
		$('#unipick_modulesback').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_modulesback div').css('backgroundColor', '#' + hex);
				$('.box .box-content').css('background', '#' + hex);
				$('.box .box-content-featured').css('background', '#' + hex);
				$('.box-product-bestseller').css('background', '#' + hex);
			}
		});
		$('#unipick_modulesstrip').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_modulesstrip div').css('backgroundColor', '#' + hex);
				$('.economy0-wrapper, .economy1-wrapper, .economy2-wrapper, .economy3-wrapper').css('background', '#' + hex);
			}
		});
		$('#unipick_producthover').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_producthover div').css('backgroundColor', '#' + hex);
				
			}
		});
		$('#unipick_add2cartcolor').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_add2cartcolor div').css('backgroundColor', '#' + hex);
				$('.box-product-bestseller .cart input').css('background', '#' + hex);
			}
		});
		$('#unipick_add2carthover').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_add2carthover div').css('backgroundColor', '#' + hex);
				
			}
		});
		$('#unipick_add2carttext').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_add2carttext div').css('backgroundColor', '#' + hex);
				$('.box-product-bestseller .cart input').css('color', '#' + hex);
			}
		});
		$('#unipick_footerlinks').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_footerlinks div').css('backgroundColor', '#' + hex);
				$('ul.bottom_menu li a span').css('color', '#' + hex);
			}
		});
		$('#unipick_footercontacts').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_footercontacts div').css('backgroundColor', '#' + hex);
				$('#footer .botp1').css('color', '#' + hex);
			}
		});
		$('#unipick_footertext').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_footertext div').css('backgroundColor', '#' + hex);
				$('#footer .globalweb').css('color', '#' + hex);
			}
		});
		$('#unipick_footerundertext').ColorPicker({
			color: '#ffffff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#unipick_footerundertext div').css('backgroundColor', '#' + hex);
				$('#footer .botp2').css('color', '#' + hex);
				$('#footer .botp2 a').css('color', '#' + hex);
			}
		});
	};
	
	var showTab = function(e) {
		var tabIndex = $('ul.navigationTabs a')
							.removeClass('active')
							.index(this);
		$(this)
			.addClass('active')
			.blur();
		$('div.tab')
			.hide()
				.eq(tabIndex)
				.show();
	};
	
	EYE.register(initLayout, 'init');
})(jQuery)

}
/*
     FILE ARCHIVED ON 11:10:49 Apr 17, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:43:48 Dec 05, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.011
  LoadShardBlock: 99.314 (3)
  RedisCDXSource: 3.762
  PetaboxLoader3.resolve: 17.818
  CDXLines.iter: 23.087 (3)
  exclusion.robots: 0.187
  load_resource: 45.824
  PetaboxLoader3.datanode: 87.339 (4)
  captures_list: 130.514
  exclusion.robots.policy: 0.173
*/