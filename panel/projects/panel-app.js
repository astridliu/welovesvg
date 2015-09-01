!function(e){"use strict";var t=e.module("panel.extensions",[]);t.directive("spinner",[function(){return{restrict:"E",templateUrl:"components/spinner.html"}}]),t.directive("highlightText",[function(){return{restrict:"A",link:function(e,t,n){function o(){var e,o,i,c;e=String(n.highlightText||""),o=String(n.highlightTextNeedle||""),c=String(n.highlightTextFromWordStart||"").toLowerCase(),c=c&&-1==["false","null","f","0"].indexOf(c),o&&(i=o.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}=!<>\|:])/g,"\\$1"),c&&(i="\\b"+i),e=e.replace(new RegExp(i,"gi"),function(e){return'<span class="ng-highlight">'+e+"</span>"})),t.html(e)}n.$observe("highlightText",o),n.$observe("highlightTextNeedle",o)}}}]),t.filter("unescape",function(){return function(e){return unescape(String(e||""))}}),t.service("UID",[function(){var e=0;this.b36=function(){return"A"+(Date.now().toString(36)+Math.random().toString(36).slice(2)).toUpperCase()},this.inc=function(){return++e}}]),t.factory("humanize",[function(){return function(e){return String(e||"").replace(/[-_]/g," ").replace(/\s+/g," ").replace(/\b[a-z]/gi,function(e){return e.toUpperCase()})}}]),t.factory("jQuery",function(){return jQuery}),e.module("panel.extensions").run(["$templateCache",function(e){e.put("components/spinner.html",'<div class="spinner">Loading...</div>')}])}(angular),!function(e){"use strict";var t=e.module("panel.panel",["common.common","panel.extensions","common.popover","webicon","hljs","btford.markdown"]);e.module("panel.panel").config(["configProvider",function(e){e.defaults({debug:{enabled:!1},page:{baseUrl:"",title:"We Love SVG"}})}]),e.module("panel.panel").config(["localeProvider",function(e){e.locale("en"),e.dictionary({Hello:"Hello","%s cat":{one:"%s cat",other:"%s %n cats"}})}]),t.config(["configProvider",function(e){e({collections:{names:["fa","win10","color-icons","foundation","material","glyphicons","icomoon","ion","webhostinghub","entypo","elusive","wpf","mfglabs","raphael","simple-line","weather","lsf","linecons","meteocons","metrize","octicons","iconic","maki","openwebicons","stroke7","typicons","zocial","brandico","fontelico","stateface"],licenses:{fa:"This excellent icon font was taken from [Font Awesome](http://fontawesome.io/). Feel free to use it in your projects under the [SIL Open Font License 1.1 (OFL)](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).",win10:"This stunning icon font was taken from [Icons8](https://icons8.com/c/windows-10-icons/). Feel free to use it in your projects under the [Good Boy License](https://icons8.com/good-boy-license).","color-icons":"This exceptional icon font was taken from [Icons8](https://icons8.com/c/flat-color-icons/). Feel free to use it in your projects under the [Good Boy License](https://icons8.com/good-boy-license).",foundation:"This great icon font was taken from [Foundation](http://foundation.zurb.com/icon-fonts.html). Feel free to use it in your projects under the [MIT Open Source License](http://opensource.org/licenses/MIT).",material:"This perfect icon font was taken from [Material Icons](https://www.google.com/design/icons/). Feel free to use it in your projects under the [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/).",glyphicons:"This cool icon font was taken from [Glyphions](http://glyphicons.com/). Feel free to use it in your projects under the [Creative Commons Attribution 3.0 Unported (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/).",icomoon:"This great icon font was taken from [IcoMoon](https://icomoon.io/). Feel free to use it in your projects under the [GPL](http://www.gnu.org/licenses/gpl.html) and the [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/).",ion:"This fanstastic icon font was taken from [Ionicons](http://ionicons.com/). Feel free to use it in your projects under the [MIT Open Source License](http://opensource.org/licenses/MIT).",webhostinghub:"This excellent icon font was taken from [WebHostingHub Glyphs](http://www.webhostinghub.com/glyphs/). Feel free to use it in your projects under the [SIL Open Font License 1.1 (OFL)](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).",entypo:"This amazing icon font was taken from [Entypo+](http://www.entypo.com/). Feel free to use it in your projects under the [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/).",elusive:"This excellent icon font was taken from [Elusive Icons](http://elusiveicons.com/). Feel free to use it in your projects under the [SIL Open Font License 1.1 (OFL)](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).",wpf:"This perfect icon font was taken from [Icons8](https://icons8.com/wpf). Feel free to use it in your projects under the [Good Boy License](https://icons8.com/good-boy-license).",mfglabs:"This excellent icon font was taken from [MFG Labs](https://mfglabs.github.io/mfglabs-iconset/). Feel free to use it in your projects under the [Creative Commons Attribution 3.0 Unported (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/).",raphael:"This great icon font was taken from [Raphaël](http://raphaeljs.com/icons/). Feel free to use it in your projects under the [MIT Open Source License](http://opensource.org/licenses/MIT).","simple-line":"This great icon font was taken from [Simple Line Icons](http://thesabbir.github.io/simple-line-icons/). Feel free to use it in your projects under the [MIT Open Source License](http://opensource.org/licenses/MIT).",weather:"This wonderful icon font was taken from [Weather Icons](http://erikflowers.github.io/weather-icons/). Feel free to use it in your projects under the [Creative Commons Attribution 3.0 Unported (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/).",lsf:"This fascinating icon font was taken from [Ligature Symbols](http://kudakurage.com/ligature_symbols/). Feel free to use it in your projects under the [SIL Open Font License 1.1 (OFL)](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).",linecons:"This elegant icon font was taken from [Linecons](http://designmodo.com/linecons-free/). Feel free to use it in your projects under the [Creative Commons Attribution 3.0 Unported (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/).",meteocons:"This excellent icon font was taken from [Meteocons](http://www.alessioatzeni.com/meteocons/). Feel free to use it in your projects under the conditions listed on [Meteocons website](http://www.alessioatzeni.com/meteocons/).",metrize:"This excellent icon font was taken from [Metrize Icons](http://www.alessioatzeni.com/metrize-icons/). Feel free to use it in your projects under the conditions listed on the [Alessio Atzeni's website](http://www.alessioatzeni.com/meteocons/).",octicons:"This fabulous icon font was taken from [Octicons](https://octicons.github.com/). Feel free to use it in your projects under the [SIL Open Font License 1.1 (OFL)](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).",iconic:"This gorgeous icon font was taken from [Iconic](https://useiconic.com/open/). Feel free to use it in your projects under the [SIL Open Font License 1.1 (OFL)](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).",maki:"This beautiful icon font was taken from [Maki](https://www.mapbox.com/maki/). Feel free to use it in your projects under the [CC0 1.0 Universal license (CC0 1.0)](http://creativecommons.org/publicdomain/zero/1.0/).",openwebicons:"This cute icon font was taken from [OpenWeb Icons](http://pfefferle.github.io/openwebicons/). Feel free to use it in your projects under the [Creative Commons Attribution 3.0 Unported (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/).",stroke7:"This excellent icon font was taken from [Stroke 7 Icon Font Set](http://www.pixeden.com/icon-fonts/stroke-7-icon-font-set). Feel free to use it in your projects under the [Pixeden license terms](http://www.pixeden.com/license).",typicons:"This excellent icon font was taken from [Typicons](http://www.typicons.com/). Feel free to use it in your projects under the [SIL Open Font License 1.1 (OFL)](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).",zocial:"This lovely icon font was taken from [Zocial](http://zocial.smcllns.com/). Feel free to use it in your projects under the [MIT Open Source License](http://opensource.org/licenses/MIT).",brandico:"This nice icon font was taken from [Brandico](http://fontello.github.io/brandico.font/demo.html). Feel free to use it in your projects under the [SIL Open Font License 1.1 (OFL)](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).",fontelico:"This nice icon font was taken from [Fontelico](http://fontello.github.io/fontelico.font/demo.html). Feel free to use it in your projects under the [SIL Open Font License 1.1 (OFL)](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).",stateface:"This outstanding icon font was taken from [StateFace](http://propublica.github.io/stateface/). Feel free to use it in your projects under the conditions listed on the [ProPublica website](http://propublica.github.io/stateface/)."}}})}]),t.directive("collectionIcons",["jQuery",function(e){return{restrict:"E",scope:{collection:"=",search:"="},templateUrl:"components/collectionIcons.html",link:function(t,n){var o;t.popover=o={opened:!1,handler:null,icon:null,color:"#32c24d"},Object.defineProperty(o,"element",{get:function(){return e(n).find("[popover]:eq(0)")}}),t.showIconPopover=function(t,n){var i;i=e(n.target),o.handler=i.hasClass("icon")?i:i.parent(".icon"),o.icon=t},t.$watch("popover.opened",function(t){var n,i,c;t&&(n=o.element,i=o.handler.offset(),c=e(n).offset(),n.css({left:i.left-c.left,top:i.top-c.top}))}),t.$watch("collection",function(){o.opened=!1})}}}]),t.directive("collectionSelect",[function(){return{restrict:"E",templateUrl:"components/collectionSelect.html",scope:{collections:"="}}}]),t.directive("page",[function(){return{restrict:"E",templateUrl:"components/page.html"}}]),t.directive("searchIconsPanel",["ViewIconCollections","config",function(e,t){return{restrict:"E",templateUrl:"components/searchIconsPanel.html",link:function(n){n.search="",n.collections=new e(t.collections.names),n.$watch("search",function(){n.collections.search(n.search)})}}}]),t.directive("searchInput",[function(){return{restrict:"E",scope:{search:"="},templateUrl:"components/searchInput.html"}}]),t.factory("Icon",["humanize",function(e){var t=function(){function t(e){this.id=e,this.init()}return $traceurRuntime.createClass(t,{init:function(){this.label=e(this.id)}},{})}();return t}]),t.factory("IconCollection",["EventEmitterFactory","humanize","lunr",function(e,t,n){var o=function(e){function o(e){$traceurRuntime.superConstructor(o).call(this),this.id=e,this.icons=[],this.idIndex=new Map,this.init()}return $traceurRuntime.createClass(o,{init:function(){this.label=t(this.id),this.initSearchIndex()},initSearchIndex:function(){this.searchIndex=n(function(){this.field("label"),this.ref("id"),this.pipeline.remove(n.stopWordFilter)})},clear:function(){this.icons.length=0},addIcons:function(){var e,t=void 0!==arguments[0]?arguments[0]:[],n=this;(e=this.icons).push.apply(e,$traceurRuntime.spread(t)),t.forEach(function(e){n.searchIndex.add(e),n.idIndex.set(e.id,e)}),this.emit("update")},search:function(e){var t=this;return e||0===e?this.searchIndex.search(e).map(function(e){return t.idIndex.get(e.ref)}):this.icons.slice()}},{},e)}(e);return o}]),t.factory("IconCollectionRemote",["IconCollection","Icon","$webicon","$q",function(e,t,n,o){var i=function(e){function i(e){$traceurRuntime.superConstructor(i).call(this,e)}return $traceurRuntime.createClass(i,{init:function(){$traceurRuntime.superGet(this,i.prototype,"init").call(this),this.promise=o.when(),this.initialized=!1,this.pending=!1},loadCollection:function(){var e,i=this;return this.promise.cancel&&this.promise.cancel(),this.pending=!0,e=this.promise=o.when(n.preload(this.id).iconSets[this.id]).then(function(n){var o,c;return e&&e.cancelled?i:(i.pending=!1,o=n&&n.hasOwnProperty("collection")?n.collection:n||[],c=Array.from(o.filter(function(e){return e&&e._resource&&e._resource.icons}).map(function(e){return Object.keys(e._resource.icons)}).reduce(function(e,t){return(t||[]).forEach(function(t){return e.add(t)}),e},new Set)).map(function(e){return new t(e)}),i.clear(),i.addIcons(c),i.initialized=!0,i)}),e.cancel=function(){return e.cancelled=!0},e}},{},e)}(e);return i}]),t.factory("ViewIcon",[function(){var e=function(){function e(e){this.icon=e,this.init()}return $traceurRuntime.createClass(e,{init:function(){this.visible=!0}},{})}();return e}]),t.factory("ViewIconCollection",["ViewIcon","IconCollection","IconCollectionRemote",function(e,t,n){var o=function(){function o(e){this.init(),this.setCollection(e)}return $traceurRuntime.createClass(o,{setCollection:function(e){var o=this;e instanceof t||(e=new n(e)),this.collection=e,this.clearViews(),this.addIcons(e.icons),this.collection.on("update",function(){o.clearViews(),o.addIcons(o.collection.icons)})},clearViews:function(){this.views.length=0},addIcons:function(t){this.addViews(t.map(function(t){return new e(t)}))},addViews:function(e){var t;(t=this.views).push.apply(t,$traceurRuntime.spread(e))},init:function(){this.collection=null,this.views=[],this.visible=!0},search:function(e){var t,n;return t=this.collection.search(e),n=new Set(t.map(function(e){return e.id})),this.views.forEach(function(e){e.visible=n.has(e.icon.id)}),this}},{})}();return o}]),t.factory("ViewIconCollections",["ViewIconCollection","IconCollectionRemote",function(e,t){var n=function(){function n(e){this.init(),this.setCollections(e)}return $traceurRuntime.createClass(n,{init:function(){this.views=[],this.current=null,this.searchText=null},clear:function(){this.views.length=0,this.current=null},setCollections:function(e){var t=this;this.clear(),(e||[]).forEach(function(e){return t.addCollection(e)})},addCollection:function(t){var n;n=new e(t),this.views.push(n),this.current||this.setCurrent(n)},isCurrent:function(e){return this.current===e},setCurrent:function(e){var n=this;this.current=e,e.collection instanceof t&&!e.collection.initialized?e.collection.loadCollection().then(function(){n.searchText&&e.search(n.searchText)}):this.searchText&&this.current.search(this.searchText)},search:function(e){this.searchText=e,this.current&&this.current.search(e)}},{})}();return n}]),t.config(["$provide",function(e){e.decorator("page",["$delegate",function(e){var t=e;return t}])}]),t.factory("lunr",function(){return lunr}),e.module("panel.panel").run(["$templateCache",function(e){e.put("components/collectionIcons.html",'<div ng-if="collection.collection.pending"><center><spinner></spinner></center></div><div ng-if="!collection.collection.pending" shift="collection" popover-manager="popover.opened"><div ng-repeat="icon in ::collection.views track by icon.icon.id" ng-show="icon.visible" popover-open="" ng-click="showIconPopover(icon, $event)" class="icon"><webicon icon="{{::collection.collection.id}}:{{::icon.icon.id}}"></webicon><div style="font-size: .7em" highlight-text="{{::icon.icon.label}}" highlight-text-needle="{{$parent.search}}" highlight-text-from-word-start="true" class="icon-label"></div></div><div popover="" class="icon-popover"><div class="icon-popover-icon-box"><webicon icon="{{collection.collection.id}}:{{::popover.icon.icon.id}}" ng-style="{color: popover.color}"></webicon></div><div hljs="" language="html" source="\'%3Cwebicon%20icon%3D%22{{collection.collection.id}}:{{::popover.icon.icon.id}}&quot;/&gt;\' | unescape" class="icon-popover-code"></div></div></div>'),e.put("components/collectionSelect.html",'<button ng-repeat="item in collections.views track by item.collection.id" ng-class="{\'btn-primary\': collections.isCurrent(item), \'btn-default\': !collections.isCurrent(item)}" ng-click="collections.setCurrent(item)">{{::item.collection.label}}</button>'),e.put("components/page.html",'<search-icons-panel></search-icons-panel><center><span>by</span> <a href="https://icons8.com">Icons8</a><br/><br/></center>'),e.put("components/searchIconsPanel.html",'<div class="header"><h1>We Love SVG<sup>β</sup></h1><div class="row"><div class="col-md-10 col-md-offset-1"><collection-select collections="collections"></collection-select></div><div class="col-md-6 col-md-offset-3"><search-input search="search"></search-input></div></div></div><div class="body"><div class="col-md-10 col-md-offset-1"><collection-icons search="search" collection="collections.current"></collection-icons></div><div inject-service="config" class="col-md-8 col-md-offset-2"><br/><div btf-markdown="config.collections.licenses[collections.current.collection.id]"></div></div></div>'),e.put("components/searchInput.html",'<input type="text" ng-model="search" placeholder="Search"/>')}])}(angular),document.addEventListener("DOMContentLoaded",function(){angular.bootstrap(document.getElementsByTagName("html")[0],["panel.panel"])});