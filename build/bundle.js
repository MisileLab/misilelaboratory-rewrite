var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t){t.parentNode&&t.parentNode.removeChild(t)}let i;function a(t){i=t}const l=[],d=[];let u=[];const f=[],p=Promise.resolve();let h=!1;function $(t){u.push(t)}const x=new Set;let g=0;function v(){if(0!==g)return;const t=i;do{try{for(;g<l.length;){const t=l[g];g++,a(t),m(t.$$)}}catch(t){throw l.length=0,g=0,t}for(a(null),l.length=0,g=0;d.length;)d.pop()();for(let t=0;t<u.length;t+=1){const e=u[t];x.has(e)||(x.add(e),e())}u.length=0}while(l.length);for(;f.length;)f.pop()();h=!1,x.clear(),a(t)}function m(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const b=new Set;function y(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];u.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),u=e}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _(t,e){-1===t.$$.dirty[0]&&(l.push(t),h||(h=!0,p.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function w(c,l,d,u,f,p,h,x=[-1]){const g=i;a(c);const m=c.$$={fragment:null,ctx:[],props:p,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(g?g.$$.context:[])),callbacks:n(),dirty:x,skip_bound:!1,root:l.target||g.$$.root};h&&h(m.root);let y=!1;if(m.ctx=d?d(c,l.props||{},((t,e,...n)=>{const s=n.length?n[0]:e;return m.ctx&&f(m.ctx[t],m.ctx[t]=s)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](s),y&&_(c,t)),e})):[],m.update(),y=!0,s(m.before_update),m.fragment=!!u&&u(m.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(r)}else m.fragment&&m.fragment.c();l.intro&&((w=c.$$.fragment)&&w.i&&(b.delete(w),w.i(k))),function(t,n,c){const{fragment:r,after_update:i}=t.$$;r&&r.m(n,c),$((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):s(n),t.$$.on_mount=[]})),i.forEach($)}(c,l.target,l.anchor),v()}var w,k;a(g)}class k{$$=void 0;$$set=void 0;$destroy(){y(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function E(e){let n;return{c(){var t,e,s,o;t="body",n=document.createElement(t),n.innerHTML='<div class="container justifyit maxit svelte-t1cdxi"><h1 class="svelte-t1cdxi">Hello, Misile</h1></div> <div class="container column-flex maxit svelte-t1cdxi"><h1 class="nottitle svelte-t1cdxi">My purpose</h1> <p class="desc svelte-t1cdxi">- Make and use new things quickly</p> <p class="desc svelte-t1cdxi">- Make open source programs and libraries</p> <p class="desc svelte-t1cdxi">- No unmaintained libraries</p> <p class="desc svelte-t1cdxi">- Making what i want</p> <h1 class="nottitle svelte-t1cdxi">My OS</h1> <p class="desc svelte-t1cdxi">- Arch based Linux</p> <p class="desc svelte-t1cdxi">-   use arch btw</p> <p class="desc svelte-t1cdxi">-   EndeavourOS kde</p> <p class="desc svelte-t1cdxi">- Proxmox OS (Debian Based)</p> <p class="desc svelte-t1cdxi">-   Bedrock Linux based on Void Linux (glibc)</p> <p class="desc svelte-t1cdxi">-   Ubuntu LTS</p> <p class="desc svelte-t1cdxi">-   FreeBSD</p></div>',e=n,s="class",null==(o="svelte-t1cdxi")?e.removeAttribute(s):e.getAttribute(s)!==o&&e.setAttribute(s,o)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&r(n)}}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");return new class extends k{constructor(t){super(),w(this,t,null,E,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
