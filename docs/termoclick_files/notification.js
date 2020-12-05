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


		$(function() {
			$("#monContainer").notify({
				speed: 200,
				expires: false
			});
		})


		function notifShop(xml){
			var id=$(xml).find('id').text();
			var name=$(xml).find('name').text();
			var image=$(xml).find('image').text();

			$("#monContainer").notify("create", "templateShop", {
				title: '<div class="pictureProduct"><img class="pictureP" src="/image/cache/'+image+'"/></div><div class="nameP">',
				text: '<h3 class="namePtext">Вы успешно добавили '+ name +' в свою <a href="/index.php?route=checkout/cart">корзину</a>.</h3></div>'
			},{
				expires: 15000,
				speed: 400
			});
		}

		function notifWishList(xml){
			var id=$(xml).find('id').text();
			var name=$(xml).find('name').text();
			var image=$(xml).find('image').text();

			$("#monContainer").notify("create", "templateWishList", {
				title: '<div class="pictureProduct"><img class="pictureP" src="/image/cache/'+image+'"/></div><div class="nameP">',
				text: '<h3 class="namePtext"> '+name+' успешно добавлен в <a href="/index.php?route=account/wishlist">закладки</a>.</h3></div>'
			},{
				expires: 15000,
				speed: 400
			});
		}

		function notifCompare(xml){
			var id=$(xml).find('id').text();
			var name=$(xml).find('name').text();
			var image=$(xml).find('image').text();

			$("#monContainer").notify("create", "templateCompare", {
				title: '<div class="pictureProduct"><img class="pictureP" src="/image/cache/'+image+'"/></div><div class="nameP">',
				text: '<h3 class="namePtext"> '+name+' успешно отложен для <a href="/index.php?route=product/compare">сравнения</a>.</h3></div>'
			},{
				expires: 15000,
				speed: 400
			});
		}

}
/*
     FILE ARCHIVED ON 08:27:13 Apr 17, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:43:48 Dec 05, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 37.125
  esindex: 0.014
  captures_list: 86.907
  RedisCDXSource: 0.765
  LoadShardBlock: 60.767 (3)
  PetaboxLoader3.datanode: 79.759 (4)
  exclusion.robots.policy: 0.179
  load_resource: 93.23
  CDXLines.iter: 21.364 (3)
  exclusion.robots: 0.194
*/