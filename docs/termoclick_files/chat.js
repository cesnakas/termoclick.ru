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

var Cloudim = {
	// cloudim settings
	Options: {},
	Chat: {},
	// end user JS API
	Api: {},
	// events callback
	Events: {},
	Utils: {}
}
Cloudim.Options = {
	debug: false,
	Tab: {
		position: 'right',
		margin: '20px'
	},
	Chat: {
		needName: false,
		needEmail: false
	}
}
Cloudim.Chat = {
	iframe: null,
	server: 'cloudim.ru',
	is_init: false,
	user_data: null,
	page_title: null,
	title_index: 0,
	// visibility
	site_visible: true,
	visible: false,

	blink_interval: null,

	init: function (user) {
		if (!Cloudim.Chat.is_init) {
			var user_params = '';
			for (var key in user) {
				user_params += '&'+key+'='+encodeURIComponent(user[key]);
			}
			
			// current init
			Cloudim.Chat.is_init = true;
			
			Cloudim.Chat.iframe = document.createElement("iframe");
			Cloudim.Chat.iframe.id = 'cloudim_chat';
			Cloudim.Chat.iframe.width = '310';
			Cloudim.Chat.iframe.height = '0';
			Cloudim.Chat.iframe.scrolling = 'no';
			Cloudim.Chat.iframe.frameBorder = '0';
			Cloudim.Chat.iframe.style.position = 'fixed';
			Cloudim.Chat.iframe.style.bottom = '0px';
			Cloudim.Chat.iframe.style[Cloudim.Options.Tab.position] = Cloudim.Options.Tab.margin;
			Cloudim.Chat.iframe.style.zIndex = '999';
			Cloudim.Chat.iframe.style.width = '310px';
			Cloudim.Chat.iframe.style.height = '0px';
			Cloudim.Chat.iframe.src = window.location.protocol+"//"+(Cloudim.Options.debug ? 'cloudim.dev' : Cloudim.Chat.server)+"/im/?url="+encodeURIComponent(window.location.href)
				+user_params
				+'&referer='+encodeURIComponent(document.referrer)
				+'&page='+encodeURIComponent(document.title.substr(0,50))
				+'&need[name]='+encodeURIComponent(Cloudim.Options.Chat.needName)
				+'&need[email]='+encodeURIComponent(Cloudim.Options.Chat.needEmail);
			Cloudim.Chat.iframe.allowTransparency = true;
			document.body.appendChild(Cloudim.Chat.iframe);

			Cloudim.Chat.page_title = document.title;
		}
	},
	showChat: function () {
		Cloudim.Chat.iframe.height = '475';
		Cloudim.Chat.iframe.style.height = '475px';
		// эвент
		Cloudim.Events._callEvent('onOpen');
	},
	showPanel: function () {
		if (Cloudim.Chat.iframe.height > 0) {
			// эвент
			Cloudim.Events._callEvent('onClose');
		} else {
			Cloudim.Events._callEvent('onShowTab');
		}
		
		Cloudim.Chat.iframe.height = '40';
		Cloudim.Chat.iframe.style.height = '40px';
	},
	showWelcome: function() {
		Cloudim.Chat.iframe.height = '200';
		Cloudim.Chat.iframe.style.height = '200px';
	},
	scriptMessage: function (event) {
		if (typeof event.data == 'string' && event.data.substr(0, 4) == '!im_') {
			var message = Cloudim.Utils.evalJSON(event.data.substr(4));
			if (typeof Cloudim.Chat[message.callback] != 'undefined') {
				// callback call
				Cloudim.Chat[message.callback](message.data);
			}
		}
	},
	saveChatSession: function (data) {
		var date = new Date( new Date().getTime() + 2*365*24*60*60*1000 );
		document.cookie = "__cloudim="+encodeURIComponent(data)+"; path=/; expires="+date.toUTCString();
	},
	addEvent: function (obj, type, fn){
		if (obj.addEventListener){
		      obj.addEventListener( type, fn, false);
		} else if(obj.attachEvent) {
		      obj.attachEvent( "on"+type, fn );
		} else {
		      obj["on"+type] = fn;
		}
	},
	callMessageEvent: function (message) {
		if ( (!Cloudim.Chat.visible && !Cloudim.Chat.site_visible) && !Cloudim.Chat.blink_interval) {
			// мигание заголовком
			Cloudim.Chat.blink_interval = setInterval(Cloudim.Chat.blinkTitle, 1000);
		}
		
		Cloudim.Events._callEvent('onMessage', message);
	},
	callPreInitEvent: function () {
		Cloudim.Utils.cloudimFunctionCall('sendChatUser', Cloudim.Utils.getCookie('__cloudim'));
	},
	callInitEvent: function (data) {
		Cloudim.Events._callEvent('onInit', data);
	},
	callReadyEvent: function () {
		Cloudim.Events._callEvent('onReady');
	},
	callOnlineEvent: function () {
		// run rules
		Cloudim.Rules._runRules();
		Cloudim.Events._callEvent('onOnline');
	},
	callBlurEvent: function () {
		Cloudim.Chat.visible = false;
	},
	callFocusEvent: function () {
		Cloudim.Chat.visible = true;
	},
	returnCallback: function (data) {
		if (typeof Cloudim.Api.return_callbacks[ data.callback_index ] != 'undefined') {
			if (typeof Cloudim.Api.return_callbacks[data.callback_index] == 'string') {
				window[ Cloudim.Api.return_callbacks[ data.callback_index ] ](data.result);
			} else {
				Cloudim.Api.return_callbacks[ data.callback_index ](data.result);
			}
			
			Cloudim.Api.return_callbacks[ data.callback_index ] = undefined;
		}
	},
	blinkTitle: function () {
		if (Cloudim.Chat.title_index%2) {
			var title = Cloudim.Chat.page_title;

			if (Cloudim.Chat.visible || Cloudim.Chat.site_visible) {
				clearInterval(Cloudim.Chat.blink_interval);
				Cloudim.Chat.blink_interval = null;
			}
		} else {
			var title = "*** Новое сообщение! ***";
		}
		Cloudim.Chat.title_index++;
		document.title = title;
	}
}
Cloudim.Utils = {
	// json parser
	initJSON: function() {
		(function($){$.toJSON=function(o)
		{if(typeof(JSON)=='object'&&JSON.stringify)
		return JSON.stringify(o);var type=typeof(o);if(o===null)
		return"null";if(type=="undefined")
		return undefined;if(type=="number"||type=="boolean")
		return o+"";if(type=="string")
		return $.quoteString(o);if(type=='object')
		{if(typeof o.toJSON=="function")
		return $.toJSON(o.toJSON());if(o.constructor===Date)
		{var month=o.getUTCMonth()+1;if(month<10)month='0'+month;var day=o.getUTCDate();if(day<10)day='0'+day;var year=o.getUTCFullYear();var hours=o.getUTCHours();if(hours<10)hours='0'+hours;var minutes=o.getUTCMinutes();if(minutes<10)minutes='0'+minutes;var seconds=o.getUTCSeconds();if(seconds<10)seconds='0'+seconds;var milli=o.getUTCMilliseconds();if(milli<100)milli='0'+milli;if(milli<10)milli='0'+milli;return'"'+year+'-'+month+'-'+day+'T'+
		hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
		if(o.constructor===Array)
		{var ret=[];for(var i=0;i<o.length;i++)
		ret.push($.toJSON(o[i])||"null");return"["+ret.join(",")+"]";}
		var pairs=[];for(var k in o){var name;var type=typeof k;if(type=="number")
		name='"'+k+'"';else if(type=="string")
		name=$.quoteString(k);else
		continue;if(typeof o[k]=="function")
		continue;var val=$.toJSON(o[k]);pairs.push(name+":"+val);}
		return"{"+pairs.join(", ")+"}";}};$.evalJSON=function(src)
		{if(typeof(JSON)=='object'&&JSON.parse)
		return JSON.parse(src);return eval("("+src+")");};$.secureEvalJSON=function(src)
		{if(typeof(JSON)=='object'&&JSON.parse)
		return JSON.parse(src);var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
		return eval("("+src+")");else
		try{throw new SyntaxError("Error parsing JSON, source is not valid.");}catch(e){};};$.quoteString=function(string)
		{if(string.match(_escapeable))
		{return'"'+string.replace(_escapeable,function(a)
		{var c=_meta[a];if(typeof c==='string')return c;c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
		return'"'+string+'"';};var _escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var _meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};})(this);
	},
	cloudimFunctionCall: function (callback, data) {
		var message = {callback: callback, data: data};
		Cloudim.Chat.iframe.contentWindow.postMessage(Cloudim.Utils.toJSON(message), Cloudim.Chat.iframe.src);
	},
	getCookie: function (name) {
	  var matches = document.cookie.match(new RegExp(
	    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	  ));
	  return matches ? decodeURIComponent(matches[1]) : '';
	}
}
//init json parser
Cloudim.Utils.initJSON();

Cloudim.Events = {
		// user callbacks
		onMessage: [], // принято сообщение
		onOpen: [], // раскрыт чат
		onClose: [], // чат свернут
		onShowTab: [], // вкладка показана (оператор онлайн)
		onInit: [],
		onReady: [],
		onOnline: [],
		
		_callEvent: function (event, data) {
			if (typeof Cloudim.Events[event] != 'undefined' && Cloudim.Events[event].length > 0) {
				for (var i in Cloudim.Events[event]) {
					Cloudim.Events[event][i](data);
				}
			}
		}
}
Cloudim.Rules = {
		rules: {},
		_runRules: function () {
			for (var i in Cloudim.Rules.rules) {
				Cloudim.Rules.rules[i].condition(Cloudim.Rules.rules[i].action);
			}
		}
};
Cloudim.Api = {
		return_callbacks: [],
		/**
		 * Bind callback to cloudim event
		 */
		bind: function (event, callback) {
			if (Cloudim.Events[event]) {
				Cloudim.Events[event][ Cloudim.Events[event].length ] = callback;
			}
		},
		openChat: function () {
			Cloudim.Utils.cloudimFunctionCall('openChat');
		},
		closeChat: function () {
			Cloudim.Utils.cloudimFunctionCall('closeChat');
		},
		toggleChat: function () {
			Cloudim.Utils.cloudimFunctionCall('toggleChat');
		},
		getCurrentOperator: function (returnCallback) {
			var callback_index = Cloudim.Api.return_callbacks.length;
			Cloudim.Api.return_callbacks[ callback_index ] = returnCallback;
			Cloudim.Utils.cloudimFunctionCall('getCurrentOperator', callback_index);
		},
		getVisitor: function (returnCallback) {
			var callback_index = Cloudim.Api.return_callbacks.length;
			Cloudim.Api.return_callbacks[ callback_index ] = returnCallback;
			Cloudim.Utils.cloudimFunctionCall('getVisitor', callback_index);
		},
		defineRule: function (name, rule) {
			Cloudim.Rules.rules[name] = rule;
		},
		sendMessageToOperator: function (message) {
			Cloudim.Utils.cloudimFunctionCall('sendMessageToOperator', message);
		},
		sendMessageToVisitor: function (message) {
			Cloudim.Utils.cloudimFunctionCall('sendMessageToVisitor', message);
		},
		sendUserData: function (data) {
			Cloudim.Utils.cloudimFunctionCall('sendUserData', data);
		}
}
Cloudim.Chat.addEvent(window, 'message', Cloudim.Chat.scriptMessage);
// auto init
Cloudim.Chat.addEvent(window, 'load', Cloudim.Chat.init);
// видимость
Cloudim.Chat.addEvent(window, 'blur', function(){
	Cloudim.Chat.site_visible = false;
});
Cloudim.Chat.addEvent(window, 'focus', function(){
	Cloudim.Chat.site_visible = true;
});

}
/*
     FILE ARCHIVED ON 09:41:21 Feb 23, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:47:43 Dec 05, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.206
  esindex: 0.015
  exclusion.robots: 0.223
  LoadShardBlock: 26.519 (3)
  CDXLines.iter: 22.169 (3)
  RedisCDXSource: 1.745
  captures_list: 68.657
  PetaboxLoader3.datanode: 55.214 (4)
  load_resource: 111.092
  PetaboxLoader3.resolve: 50.021
*/