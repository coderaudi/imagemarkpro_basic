(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1006:function(e,t,a){"use strict";a.r(t);var n=a(127),r=a(57),o=a(129),l=a(128),c=a(130),i=a(3),s=a.n(i),h=a(730),d=a(966),u=a(967),p=a(669),m=a(984),y=a(1007),b=a(405),f=a(423),g=a.n(f),E=a(941),w=a(24),v=a(553),M=a.n(v);function O(e){return Object(w.a)(new Date(1e3*e),"MMMM d, p yyyy")}function S(e,t,a){var n=Number.POSITIVE_INFINITY;return Object.values(e).forEach(function(e){n>e[t]&&(n=e[t])}),Math.round(n-n*a)}var k=["1 Week","1 Month","6 Months"],C=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={anchorEl:null,selectedOption:"1 Month"},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.getSeconds=function(){switch(a.state.selectedOption){case"1 Week":return 604800;case"1 Month":return 18748800;case"6 Months":return 112492800;default:throw new Error("No branch selected in switch-statement")}},a.getSubtitle=function(){switch(a.state.selectedOption){case"1 Week":return"Last week";case"1 Month":return"Last month";case"6 Months":return"Last 6 months";default:throw new Error("No branch selected in switch-statement")}},a.processData=function(){for(var e=a.props.data,t=a.getSeconds(),n=new Date/1e3-t,r=[],o=0;o<e.length;o+=1)n<e[o].timestamp&&r.unshift(e[o]);return r},a.selectOption=function(e){a.setState({selectedOption:e,anchorEl:null})},a.handleClose=function(){a.setState({anchorEl:null})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.color,n=t.data,r=t.title,o=t.classes,l=t.theme,c=t.height,i=t.yKey,b=this.state,f=b.anchorEl,w=b.selectedOption,v=Boolean(f);return s.a.createElement(h.a,null,s.a.createElement("div",{className:"p-2"},s.a.createElement("div",{className:"d-flex justify-content-between mb-1"},s.a.createElement("div",null,s.a.createElement(d.a,{variant:"subtitle1"},r),s.a.createElement(d.a,{variant:"body2",className:"text-secondary-greyed"},this.getSubtitle())),s.a.createElement("div",null,s.a.createElement(u.a,{"aria-label":"More","aria-owns":v?"long-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},s.a.createElement(M.a,null)),s.a.createElement(p.a,{id:"long-menu",anchorEl:f,open:v,onClose:this.handleClose,PaperProps:{style:{maxHeight:216,width:200}}},k.map(function(t){return s.a.createElement(m.a,{key:t,selected:t===w,onClick:function(){e.selectOption(t)},name:t},t)}))))),s.a.createElement(y.a,null,s.a.createElement("div",{className:g()(o.cardContentInner,"w-100"),style:{height:c}},s.a.createElement(E.c,{width:"100%",height:"100%"},s.a.createElement(E.b,{data:this.processData(),type:"number"},s.a.createElement(E.e,{dataKey:"timestamp",type:"number",domain:["dataMin","dataMax"],hide:!0}),s.a.createElement(E.f,{domain:[S(n,i,.05),"dataMax"],hide:!0}),s.a.createElement(E.a,{type:"monotone",dataKey:i,stroke:a,fill:a}),s.a.createElement(E.d,{labelFormatter:O,cursor:!1,contentStyle:{border:"none",padding:l.spacing(1),borderRadius:l.shape.borderRadius,boxShadow:l.shadows[1]},labelStyle:l.typography.body1,itemStyle:{fontSize:l.typography.body1.fontSize,letterSpacing:l.typography.body1.letterSpacing,fontFamily:l.typography.body1.fontFamily,lineHeight:l.typography.body1.lineHeight,fontWeight:l.typography.body1.fontWeight}}))))))}}]),t}(i.PureComponent);t.default=Object(b.a)(function(e){return{cardContentInner:{marginTop:-1*e.spacing(4)}}},{withTheme:!0})(C)}}]);
//# sourceMappingURL=13.9213d264.chunk.js.map