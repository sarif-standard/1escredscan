import { c as createCommonjsModule, a as commonjsGlobal } from '../../common/_commonjsHelpers-4f955397.js';

var utc = createCommonjsModule(function (module, exports) {
!function(t,i){module.exports=i();}(commonjsGlobal,function(){return function(t,i,e){var s=i.prototype;e.utc=function(t){return new i({date:t,utc:!0,args:arguments})},s.utc=function(t){var i=e(this.toDate(),{locale:this.$L,utc:!0});return t?i.add(this.utcOffset(),"minute"):i},s.local=function(){return e(this.toDate(),{locale:this.$L,utc:!1})};var f=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),f.call(this,t);};var n=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds();}else n.call(this);};var u=s.utcOffset;s.utcOffset=function(t,i){var e=this.$utils().u;if(e(t))return this.$u?0:e(this.$offset)?u.call(this):this.$offset;var s=Math.abs(t)<=16?60*t:t,f=this;if(i)return f.$offset=s,f.$u=0===t,f;if(0!==t){var n=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(f=this.local().add(s+n,"minute")).$offset=s,f.$x.$localOffset=n;}else f=this.utc();return f};var o=s.format;s.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return o.call(this,i)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return !!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var r=s.toDate;s.toDate=function(t){return "s"===t&&this.$offset?e(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():r.call(this)};var a=s.diff;s.diff=function(t,i,s){if(t&&this.$u===t.$u)return a.call(this,t,i,s);var f=this.local(),n=e(t).local();return a.call(f,n,i,s)};}});
});

export default utc;
