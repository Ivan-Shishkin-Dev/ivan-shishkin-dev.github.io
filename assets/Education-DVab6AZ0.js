import{r as l,j as e}from"./index-gqFghqiI.js";import{S as D}from"./Section-B_rYLnP2.js";import{a as W}from"./ScrollFloat-B8uIaH5-.js";import{R as H,T as G,P as N,C as E,M as V}from"./Triangle--UM621jO.js";import{E as K}from"./ElectricBorder-CD1cwFS8.js";const Y=`
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,q=`
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
uniform bool uTransparent;

varying vec2 vUv;

#define NUM_LAYER 4.0
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float tris(float x) {
  float t = fract(x);
  return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
}

float trisn(float x) {
  float t = fract(x);
  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}

vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);

  vec2 gv = fract(uv) - 0.5; 
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);
      
      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      hue = fract(hue + uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));

      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;

      float star = Star(gv - offset - pad, flareSize);
      vec3 color = base;

      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;
      
      col += star * size * color;
    }
  }

  return col;
}

void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

  vec2 mouseNorm = uMouse - vec2(0.5);
  
  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0);
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } else if (uMouseRepulsion) {
    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
    float mouseDist = length(uv - mousePosUV);
    vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
    uv += repulsion * 0.05 * uMouseActiveFactor;
  } else {
    vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
    uv += mouseOffset;
  }

  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;

  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }

  if (uTransparent) {
    float alpha = length(col);
    alpha = smoothstep(0.0, 0.3, alpha);
    alpha = min(alpha, 1.0);
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`;function J({focal:a=[.5,.5],rotation:y=[1,0],starSpeed:c=.5,density:R=1,hueShift:S=180,disableAnimation:b=!1,speed:A=1,mouseInteraction:f=!1,glowIntensity:C=.5,saturation:w=.5,mouseRepulsion:j=!1,repulsionStrength:F=2,twinkleIntensity:M=.5,rotationSpeed:T=.05,autoCenterRepulsion:z=0,transparent:u=!0,...P}){const m=l.useRef(null),d=l.useRef({x:.5,y:.5}),n=l.useRef({x:.5,y:.5}),v=l.useRef(0),h=l.useRef(0);return l.useEffect(()=>{if(!m.current)return;const o=m.current,g=new H({alpha:u,premultipliedAlpha:!1}),t=g.gl;u?(t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.clearColor(0,0,0,0)):t.clearColor(0,0,0,1);let r;function x(){g.setSize(o.offsetWidth*1,o.offsetHeight*1),r&&(r.uniforms.uResolution.value=new E(t.canvas.width,t.canvas.height,t.canvas.width/t.canvas.height))}window.addEventListener("resize",x,!1),x();const _=new G(t);r=new N(t,{vertex:Y,fragment:q,uniforms:{uTime:{value:0},uResolution:{value:new E(t.canvas.width,t.canvas.height,t.canvas.width/t.canvas.height)},uFocal:{value:new Float32Array(a)},uRotation:{value:new Float32Array(y)},uStarSpeed:{value:c},uDensity:{value:R},uHueShift:{value:S},uSpeed:{value:A},uMouse:{value:new Float32Array([n.current.x,n.current.y])},uGlowIntensity:{value:C},uSaturation:{value:w},uMouseRepulsion:{value:j},uTwinkleIntensity:{value:M},uRotationSpeed:{value:T},uRepulsionStrength:{value:F},uMouseActiveFactor:{value:0},uAutoCenterRepulsion:{value:z},uTransparent:{value:u}}});const B=new V(t,{geometry:_,program:r});let p;function I(s){p=requestAnimationFrame(I),b||(r.uniforms.uTime.value=s*.001,r.uniforms.uStarSpeed.value=s*.001*c/10);const i=.05;n.current.x+=(d.current.x-n.current.x)*i,n.current.y+=(d.current.y-n.current.y)*i,h.current+=(v.current-h.current)*i,r.uniforms.uMouse.value[0]=n.current.x,r.uniforms.uMouse.value[1]=n.current.y,r.uniforms.uMouseActiveFactor.value=h.current,g.render({scene:B})}p=requestAnimationFrame(I),o.appendChild(t.canvas);function L(s){const i=o.getBoundingClientRect(),O=(s.clientX-i.left)/i.width,k=1-(s.clientY-i.top)/i.height;d.current={x:O,y:k},v.current=1}function U(){v.current=0}return f&&(o.addEventListener("mousemove",L),o.addEventListener("mouseleave",U)),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",x),f&&(o.removeEventListener("mousemove",L),o.removeEventListener("mouseleave",U)),o.contains(t.canvas)&&o.removeChild(t.canvas),t.getExtension("WEBGL_lose_context")?.loseContext()}},[a,y,c,R,S,b,A,f,C,w,j,M,T,F,z,u]),e.jsx("div",{ref:m,className:"galaxy-container",...P})}function te(){return e.jsxs("div",{style:{position:"relative",minHeight:"100vh"},children:[e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,width:"100%",height:"100vh",zIndex:0,backgroundColor:"#000000"},children:e.jsx(J,{glowIntensity:.5,saturation:.5,hueShift:180,twinkleIntensity:.5,rotationSpeed:.05,mouseRepulsion:!1,mouseInteraction:!1})}),e.jsx(D,{style:{background:"transparent",position:"relative",zIndex:1},contentPosition:"top",children:e.jsxs("div",{className:"section-content",children:[e.jsx(W,{stagger:.04,children:"Education"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",maxWidth:"1100px",margin:"0 auto",width:"100%",alignItems:"center"},children:e.jsx(K,{color:"#809fff",speed:1,chaos:.03,borderRadius:12,style:{width:"100%",maxWidth:"1100px"},children:e.jsxs("div",{style:{background:"#0a0a0a",padding:"3rem",borderRadius:"12px",width:"100%"},children:[e.jsx("h3",{style:{color:"#fff",fontSize:"1.5rem",marginBottom:"0.5rem",fontWeight:600},children:"B.S. Computer Science"}),e.jsx("p",{style:{color:"#aaa",fontSize:"1rem",marginBottom:"0.5rem",fontStyle:"italic"},children:e.jsx("a",{href:"https://uci.edu/",target:"_blank",rel:"noopener noreferrer",style:{color:"#809fff",textDecoration:"none",transition:"color 0.3s ease"},onMouseEnter:a=>a.target.style.color="#a8bfff",onMouseLeave:a=>a.target.style.color="#809fff",children:"University of California, Irvine"})}),e.jsx("p",{style:{color:"#888",fontSize:"0.9rem",marginBottom:"1.5rem"},children:"Expected Graduation: June 2028 • GPA: 3.9"}),e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h4",{style:{color:"#fff",fontSize:"1.2rem",marginBottom:"1rem",fontWeight:600},children:"Relevant Coursework:"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",marginBottom:"1rem"},children:[e.jsx("div",{style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",padding:"1rem 1.5rem",color:"#fff",fontSize:"1rem",fontWeight:500,textAlign:"center",minWidth:"fit-content",flex:"1 1 auto"},children:"Data Structures and Algorithms"}),e.jsx("div",{style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",padding:"1rem 1.5rem",color:"#fff",fontSize:"1rem",fontWeight:500,textAlign:"center",minWidth:"fit-content",flex:"1 1 auto"},children:"Advanced Programming In Python"}),e.jsx("div",{style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",padding:"1rem 1.5rem",color:"#fff",fontSize:"1rem",fontWeight:500,textAlign:"center",minWidth:"fit-content",flex:"1 1 auto"},children:"Programming In C++"}),e.jsx("div",{style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",padding:"1rem 1.5rem",color:"#fff",fontSize:"1rem",fontWeight:500,textAlign:"center",minWidth:"fit-content",flex:"1 1 auto"},children:"Discrete Math"})]})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{color:"#fff",fontSize:"1.2rem",marginBottom:"0.75rem",fontWeight:600,textAlign:"center"},children:"Leadership & Activities:"}),e.jsxs("ul",{style:{fontSize:"1rem",lineHeight:"1.8",paddingLeft:0,margin:"0 auto",textAlign:"center",listStyle:"none",display:"inline-block"},children:[e.jsx("li",{style:{color:"#fff",marginBottom:"0.5rem"},children:"Director Of Housing — Sigma Pi (Eta-Upsilon Chapter)"}),e.jsx("li",{style:{color:"#fff",marginBottom:"0.5rem"},children:"ICS Student Council (ICSSC)"}),e.jsx("li",{style:{color:"#fff",marginBottom:"0.5rem"},children:"Artificial Intelligence @ UCI"}),e.jsx("li",{style:{color:"#fff",marginBottom:"0.5rem"},children:"Claude Builder Club"}),e.jsx("li",{style:{color:"#fff",marginBottom:"0.5rem"},children:"Cyber @ UCI"}),e.jsx("li",{style:{color:"#fff",marginBottom:"0.5rem"},children:"Hack @ UCI"}),e.jsx("li",{style:{color:"#fff",marginBottom:"0.5rem"},children:"F1 Tenth @ UCI"}),e.jsx("li",{style:{color:"#fff",marginBottom:"0.5rem"},children:"ReForm Design Project @ UCI"})]})]})]})})})]})})]})}export{te as default};
