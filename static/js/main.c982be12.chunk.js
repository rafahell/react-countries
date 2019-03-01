(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){},43:function(e,t,a){e.exports=a(72)},48:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(38),l=a.n(c),i=a(78),o=(a(48),a(5)),s=a(4),u=a(8),m=a(6),p=a(2),h=a(7),d=a(79),f=a(76),v=a(22),E=a.n(v),g=a(73),b=function(e){var t=e.message;return r.a.createElement(g.a,null,r.a.createElement("div",{className:"flex"}),r.a.createElement("div",{className:"loader"}),r.a.createElement("div",{className:"load-text"},t))},y=a(74),w=a(75);a(28);var k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isLoaded:!1,searchTerm:"",countries:[]},a.searchValue=a.searchValue.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getAllcountries",value:function(){var e=this;E.a.get("https://restcountries.eu/rest/v2/all").then(function(t){var a=t.data;e.setState({countries:a,isLoaded:!0})}),this.setState({isLoaded:!1})}},{key:"searchValue",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"componentDidMount",value:function(){this.getAllcountries()}},{key:"render",value:function(){var e=this.state,t=e.countries,a=e.isLoaded,n=e.searchTerm,c=this.props.handleClick;return a?r.a.createElement("div",null,r.a.createElement(g.a,{fluid:!0},r.a.createElement(y.a,null,r.a.createElement("div",{className:"wrapper-search"},r.a.createElement("form",null,r.a.createElement("input",{type:"search",placeholder:"Search",onChange:this.searchValue})))),r.a.createElement(y.a,null,t.filter(function(e){return function(t){return!e||t.name.toLowerCase().includes(e.toLowerCase())}}(n)).map(function(e,t){return r.a.createElement(w.a,{className:"countries",sm:2,key:"countries-".concat(t),onClick:function(){return c(e)}},r.a.createElement(f.a,{to:"/details"},r.a.createElement("p",null," ",e.name," "),r.a.createElement("img",{className:"flag",src:e.flag,alt:e.name})))})))):r.a.createElement(b,{message:"Loading..."})}}]),t}(n.Component),j=a(77),O=a(25),C=a(41),x={cursor:"pointer",fill:"#d00",stroke:"none"},N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.size,t=void 0===e?20:e;return r.a.createElement("svg",{height:t,viewBox:"0 0 24 24",style:Object(C.a)({},x,{transform:"translate(".concat(-t/2,"px,").concat(-t,"px)")})},r.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))}}]),t}(n.PureComponent),S=(a(70),{position:"absolute",top:0,left:0,padding:"10px"}),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={details:[],viewport:{latitude:-10,longitude:-35,zoom:2,bearing:0,pitch:0},markers:[]},a._updateViewport=function(e){a.setState({viewport:e})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getSingleCountry",value:function(e){var t=this;E.a.get("https://restcountries.eu/rest/v2/name/"+e).then(function(e){var a=e.data;t.setState({details:a})}).catch(function(e){void 0===e.status&&(window.location="/")})}},{key:"componentDidMount",value:function(){var e=this.props.cName;this.getSingleCountry(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.details,n=t.viewport;return r.a.createElement(g.a,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Item,{href:"/"},"Home"),a.map(function(e,t){return r.a.createElement(j.a.Item,{active:!0,key:"get-".concat(t)},e.name)})),r.a.createElement(y.a,null,a.map(function(t,a){return r.a.createElement(w.a,{xs:9,key:"details-".concat(a)},r.a.createElement("p",null,"Country: ",t.name),r.a.createElement("p",null,"Capital: ",t.capital),r.a.createElement("p",null,"Population: ",parseInt(t.population).toLocaleString()),r.a.createElement("p",null,"Region: ",t.region),r.a.createElement(O.c,Object.assign({},n,{width:"100%",height:"400px",mapStyle:"mapbox://styles/mapbox/streets-v10",onViewportChange:e._updateViewport,longitude:t.latlng[1],latitude:t.latlng[0],mapboxApiAccessToken:"pk.eyJ1IjoicmFmYWhlbGwiLCJhIjoiY2pzMzJ1MnZ2MjQxYjQ0bHh4amQyczJyMSJ9.-iEWBE9bMBsJvf5uUtFiAw"}),r.a.createElement(O.a,{longitude:t.latlng[1],latitude:t.latlng[0]},r.a.createElement(N,{size:20})),r.a.createElement("div",{className:"nav",style:S},r.a.createElement(O.b,{onViewportChange:function(t){return e.setState({viewport:t})}}))))}),a.map(function(e,t){return r.a.createElement(w.a,{className:"countries",xs:3,key:"flag-".concat(t)},r.a.createElement("img",{className:"flag",src:e.flag,alt:e.name}))})))}}]),t}(r.a.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isLoaded:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=e.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").toLowerCase();this.setState({cName:t})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{fluid:!0},r.a.createElement(y.a,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(k,{cName:e.state.cName,handleClick:e.handleClick})}}),r.a.createElement(d.a,{path:"/details/",render:function(t){t.history;return r.a.createElement(L,{cName:e.state.cName})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,{basename:"/react-countries"},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.c982be12.chunk.js.map