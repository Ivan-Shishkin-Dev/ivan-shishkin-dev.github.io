import{r as C,j as u}from"./index-BfUMJu93.js";import{S as oe}from"./Section-BR6HQRlv.js";import{a as re}from"./ScrollFloat-ClW763ZU.js";import{R as ae,T as le,P as ce,C as X,M as ue}from"./Triangle--UM621jO.js";import{e as fe,V as de,g as me,r as pe,h as he,j as ge,k as ee,l as ve,n as ye,o as xe,p as _e,s as be,q as Ae,t as we,v as Pe,S as Se,H as Ee,w as F,x as Ce,y as je,z as Me,u as Re,m as $}from"./use-motion-value-D-Bc_LFq.js";const Ve=(e,t,n)=>{const i=t-e;return((n-e)%i+i)%i+e};function te(e,t){return fe(e)?e[Ve(0,e.length,t)]:e}class ze{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>t.finished))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=n}attachTimeline(t){const n=this.animations.map(i=>i.attachTimeline(t));return()=>{n.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Q(this.animations,"duration")}get iterationDuration(){return Q(this.animations,"iterationDuration")}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Q(e,t){let n=0;for(let i=0;i<e.length;i++){const o=e[i][t];o!==null&&o>n&&(n=o)}return n}class Ie extends ze{then(t,n){return this.finished.finally(t).then(()=>{})}}function Te(e,t){return e in t}class De extends de{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,n){if(Te(n,t)){const i=t[n];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(t,n){delete n.output[t]}measureInstanceViewportBox(){return me()}build(t,n){Object.assign(t.output,n)}renderInstance(t,{output:n}){Object.assign(t,n)}sortInstanceNodePosition(){return 0}}function W(e){return typeof e=="object"&&!Array.isArray(e)}function ne(e,t,n,i){return typeof e=="string"&&W(t)?pe(e,n,i):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function Le(e,t,n){return e*(t+1)}function Y(e,t,n,i){return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?n:t.startsWith("<")?Math.max(0,n+parseFloat(t.slice(1))):i.get(t)??e}function ke(e,t,n){for(let i=0;i<e.length;i++){const o=e[i];o.at>t&&o.at<n&&(ge(e,o),i--)}}function Fe(e,t,n,i,o,c){ke(e,o,c);for(let r=0;r<t.length;r++)e.push({value:t[r],at:he(o,c,i[r]),easing:te(n,r)})}function Ne(e,t){for(let n=0;n<e.length;n++)e[n]=e[n]/(t+1)}function Oe(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const We="easeInOut";function Be(e,{defaultTransition:t={},...n}={},i,o){const c=t.duration||.3,r=new Map,a=new Map,m={},s=new Map;let p=0,l=0,M=0;for(let A=0;A<e.length;A++){const d=e[A];if(typeof d=="string"){s.set(d,l);continue}else if(!Array.isArray(d)){s.set(d.name,Y(l,d.at,p,s));continue}let[_,x,h={}]=d;h.at!==void 0&&(l=Y(l,h.at,p,s));let y=0;const g=(f,b,w,R=0,V=0)=>{const v=Ge(f),{delay:N=0,times:P=ve(v),type:O="keyframes",repeat:D,repeatType:st,repeatDelay:ot=0,...se}=b;let{ease:E=t.ease||"easeOut",duration:S}=b;const B=typeof N=="function"?N(R,V):N,G=v.length,H=_e(O)?O:o?.[O||"keyframes"];if(G<=2&&H){let z=100;if(G===2&&qe(v)){const I=v[1]-v[0];z=Math.abs(I)}const L={...se};S!==void 0&&(L.duration=be(S));const k=ye(L,z,H);E=k.ease,S=k.duration}S??(S=c);const K=l+B;P.length===1&&P[0]===0&&(P[1]=1);const q=P.length-v.length;if(q>0&&xe(P,q),v.length===1&&v.unshift(null),D){S=Le(S,D);const z=[...v],L=[...P];E=Array.isArray(E)?[...E]:[E];const k=[...E];for(let I=0;I<D;I++){v.push(...z);for(let T=0;T<z.length;T++)P.push(L[T]+(I+1)),E.push(T===0?"linear":te(k,T-1))}Ne(P,D)}const U=K+S;Fe(w,v,E,P,K,U),y=Math.max(B+S,y),M=Math.max(U,M)};if(ee(_)){const f=J(_,a);g(x,h,Z("default",f))}else{const f=ne(_,x,i,m),b=f.length;for(let w=0;w<b;w++){x=x,h=h;const R=f[w],V=J(R,a);for(const v in x)g(x[v],He(h,v),Z(v,V),w,b)}}p=l,l+=y}return a.forEach((A,d)=>{for(const _ in A){const x=A[_];x.sort(Oe);const h=[],y=[],g=[];for(let b=0;b<x.length;b++){const{at:w,value:R,easing:V}=x[b];h.push(R),y.push(Ae(0,M,w)),g.push(V||"easeOut")}y[0]!==0&&(y.unshift(0),h.unshift(h[0]),g.unshift(We)),y[y.length-1]!==1&&(y.push(1),h.push(null)),r.has(d)||r.set(d,{keyframes:{},transition:{}});const f=r.get(d);f.keyframes[_]=h,f.transition[_]={...t,duration:M,ease:g,times:y,...n}}}),r}function J(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function Z(e,t){return t[e]||(t[e]=[]),t[e]}function Ge(e){return Array.isArray(e)?e:[e]}function He(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const Ke=e=>typeof e=="number",qe=e=>e.every(Ke);function Ue(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=we(e)&&!Pe(e)?new Se(t):new Ee(t);n.mount(e),F.set(e,n)}function Xe(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new De(t);n.mount(e),F.set(e,n)}function $e(e,t){return ee(e)||typeof e=="number"||typeof e=="string"&&!W(t)}function ie(e,t,n,i){const o=[];if($e(e,t))o.push(Ce(e,W(t)&&t.default||t,n&&(n.default||n)));else{const c=ne(e,t,i),r=c.length;for(let a=0;a<r;a++){const m=c[a],s=m instanceof Element?Ue:Xe;F.has(m)||s(m);const p=F.get(m),l={...n};"delay"in l&&typeof l.delay=="function"&&(l.delay=l.delay(a,r)),o.push(...je(p,{...t,transition:l},{}))}}return o}function Qe(e,t,n){const i=[];return Be(e,t,n,{spring:Me}).forEach(({keyframes:c,transition:r},a)=>{i.push(...ie(a,c,r))}),i}function Ye(e){return Array.isArray(e)&&e.some(Array.isArray)}function Je(e){function t(n,i,o){let c=[],r;if(Ye(n))c=Qe(n,i,e);else{const{onComplete:m,...s}=o||{};typeof m=="function"&&(r=m),c=ie(n,i,s,e)}const a=new Ie(c);return r&&a.finished.then(r),a}return t}const Ze=Je(),et=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,tt=`
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 40;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    fragColor = vec4(uColor * colorVal, colorVal);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`,nt=({color:e=[1,1,1],amplitude:t=1,distance:n=0,enableMouseInteraction:i=!1,...o})=>{const c=C.useRef(null),r=C.useRef();return C.useEffect(()=>{if(!c.current)return;const a=c.current,m=new ae({alpha:!0}),s=m.gl;s.clearColor(0,0,0,0),s.enable(s.BLEND),s.blendFunc(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA),a.appendChild(s.canvas);const p=new le(s),l=new ce(s,{vertex:et,fragment:tt,uniforms:{iTime:{value:0},iResolution:{value:new X(s.canvas.width,s.canvas.height,s.canvas.width/s.canvas.height)},uColor:{value:new X(...e)},uAmplitude:{value:t},uDistance:{value:n},uMouse:{value:new Float32Array([.5,.5])}}}),M=new ue(s,{geometry:p,program:l});function A(){const{clientWidth:g,clientHeight:f}=a;m.setSize(g,f),l.uniforms.iResolution.value.r=g,l.uniforms.iResolution.value.g=f,l.uniforms.iResolution.value.b=g/f}window.addEventListener("resize",A),A();let d=[.5,.5],_=[.5,.5];function x(g){const f=a.getBoundingClientRect(),b=(g.clientX-f.left)/f.width,w=1-(g.clientY-f.top)/f.height;_=[b,w]}function h(){_=[.5,.5]}i&&(a.addEventListener("mousemove",x),a.addEventListener("mouseleave",h));function y(g){i?(d[0]+=.05*(_[0]-d[0]),d[1]+=.05*(_[1]-d[1]),l.uniforms.uMouse.value[0]=d[0],l.uniforms.uMouse.value[1]=d[1]):(l.uniforms.uMouse.value[0]=.5,l.uniforms.uMouse.value[1]=.5),l.uniforms.iTime.value=g*.001,m.render({scene:M}),r.current=requestAnimationFrame(y)}return r.current=requestAnimationFrame(y),()=>{r.current&&cancelAnimationFrame(r.current),window.removeEventListener("resize",A),i&&(a.removeEventListener("mousemove",x),a.removeEventListener("mouseleave",h)),a.contains(s.canvas)&&a.removeChild(s.canvas),s.getExtension("WEBGL_lose_context")?.loseContext()}},[e,t,n,i]),u.jsx("div",{ref:c,className:"threads-container",...o})},j=[{id:1,title:"Full-Stack Developer",company:"Pacific Coast Industrial Installer",location:"Irvine, CA",period:"Oct. 2025 – Present",responsibilities:["Architected and deployed a full-stack mobile compliance platform using React Native and PostgreSQL, enabling real-time verification of worker insurance and certifications for high-stakes construction sites.","Engineered a secure authentication system with robust password validation and granular access control policies to protect sensitive contractor and worker data.","Integrated third-party Clearinghouse APIs to perform automated insurance policy validation, reducing manual compliance overhead and ensuring site safety standards.","Streamlined document management by designing a camera-based upload workflow that utilizes metadata extraction to automate certificate tracking and expiration alerts.","Optimized media storage by implementing AWS S3 for reliable, scalable document hosting, ensuring high availability of compliance records for on-site audits."]},{id:2,title:"Arroyo Vista Center Attendant",company:"University of California, Irvine",location:"Irvine, CA",period:"Aug. 2025 – Present",responsibilities:["Manage facility operations across multiple public spaces including housing offices, mailrooms, fitness centers, and study areas, ensuring consistent service delivery for undergraduate residential community","Administer digital housing management systems (OSCAR, Roompact) to process data entry, track operational records, and coordinate service requests across residential facilities","Provide first-point-of-contact support for residents and visitors, addressing inquiries, troubleshooting facility issues, and maintaining welcoming environment aligned with inclusive housing standards","Maintain operational compliance by organizing digital documentation, processing information requests, and ensuring accuracy of housing system data and facility records"]}];function it({item:e}){return u.jsxs("div",{style:{background:"#0a0a0a",padding:"2rem",borderRadius:"12px",border:"1px solid #fff",width:"100%",flexShrink:0},children:[u.jsx("h3",{className:"experience-title",style:{color:"#fff",fontSize:"1.5rem",marginBottom:"0.5rem",fontWeight:600},children:e.title}),u.jsxs("p",{className:"experience-subtitle",style:{color:"#aaa",fontSize:"1rem",marginBottom:"1rem",fontStyle:"italic"},children:[e.company," • ",e.location," • ",e.period]}),u.jsx("ul",{className:"experience-list",style:{color:"#ccc",fontSize:"1.1rem",lineHeight:"1.6",paddingLeft:"1.25rem",listStylePosition:"outside",margin:0},children:e.responsibilities.map((t,n)=>u.jsx("li",{style:{marginBottom:n===e.responsibilities.length-1?0:"1.2rem",fontWeight:500,paddingLeft:0,textAlign:"left"},children:t},n))})]})}function ft(){const[e,t]=C.useState(0),[n,i]=C.useState(800),o=Re(0),c=C.useRef(null),r=32;C.useEffect(()=>{if(!c.current)return;const s=()=>{if(c.current){const l=c.current.offsetWidth;i(l)}};s();const p=new ResizeObserver(()=>{s()});return p.observe(c.current),window.addEventListener("resize",s),()=>{p.disconnect(),window.removeEventListener("resize",s)}},[]),C.useEffect(()=>{Ze(o,-e*(n+r),{type:"spring",stiffness:300,damping:30})},[e,o,n]);const a=()=>{t(s=>Math.max(0,s-1))},m=()=>{t(s=>Math.min(j.length-1,s+1))};return u.jsxs("div",{style:{position:"relative",minHeight:"100vh"},children:[u.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,width:"100%",height:"100vh",zIndex:0,backgroundColor:"#050508"},children:u.jsx(nt,{amplitude:3.2,distance:.8,enableMouseInteraction:!1})}),u.jsx(oe,{style:{background:"transparent",position:"relative",zIndex:1},contentPosition:"top",children:u.jsxs("div",{className:"section-content",children:[u.jsx(re,{stagger:.04,children:"Experience"}),u.jsxs("div",{style:{maxWidth:"800px",width:"100%",margin:"0 auto",position:"relative",padding:"0 1rem"},children:[u.jsx("div",{ref:c,style:{overflow:"hidden",position:"relative",width:"100%"},children:u.jsx($.div,{style:{display:"flex",gap:`${r}px`,x:o,width:"fit-content"},children:j.map(s=>u.jsx("div",{style:{width:`${n}px`,flexShrink:0},children:u.jsx(it,{item:s})},s.id))})}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",padding:"0 1rem"},children:[u.jsx("button",{onClick:a,disabled:e===0,style:{background:e===0?"#333":"#809fff",color:"#fff",border:"none",borderRadius:"8px",padding:"0.75rem 1.5rem",fontSize:"1rem",fontWeight:500,cursor:e===0?"not-allowed":"pointer",opacity:e===0?.5:1,transition:"opacity 0.2s"},children:"← Previous"}),u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem"},children:j.map((s,p)=>u.jsx($.div,{onClick:()=>t(p),style:{height:"8px",width:"8px",borderRadius:"50%",cursor:"pointer",backgroundColor:e===p?"#fff":"#555",transition:"background-color 0.15s"},animate:{scale:e===p?1.2:1},transition:{duration:.15}},p))}),u.jsx("button",{onClick:m,disabled:e===j.length-1,style:{background:e===j.length-1?"#333":"#809fff",color:"#fff",border:"none",borderRadius:"8px",padding:"0.75rem 1.5rem",fontSize:"1rem",fontWeight:500,cursor:e===j.length-1?"not-allowed":"pointer",opacity:e===j.length-1?.5:1,transition:"opacity 0.2s"},children:"Next →"})]})]})]})})]})}export{ft as default};
