(this.webpackJsonpordenamiento=this.webpackJsonpordenamiento||[]).push([[29,122],{159:function(t,e,n){!function(t){var e=0,n=1,a=2;t.defineMode("yaml-frontmatter",(function(i,r){var s=t.getMode(i,"yaml"),o=t.getMode(i,r&&r.base||"gfm");function l(t){return t.state==n?{mode:s,state:t.yaml}:{mode:o,state:t.inner}}return{startState:function(){return{state:e,yaml:null,inner:t.startState(o)}},copyState:function(e){return{state:e.state,yaml:e.yaml&&t.copyState(s,e.yaml),inner:t.copyState(o,e.inner)}},token:function(i,r){if(r.state==e)return i.match("---",!1)?(r.state=n,r.yaml=t.startState(s),s.token(i,r.yaml)):(r.state=a,o.token(i,r.inner));if(r.state==n){var l=i.sol()&&i.match(/(---|\.\.\.)/,!1),m=s.token(i,r.yaml);return l&&(r.state=a,r.yaml=null),m}return o.token(i,r.inner)},innerMode:l,indent:function(e,n,a){var i=l(e);return i.mode.indent?i.mode.indent(i.state,n,a):t.Pass},blankLine:function(t){var e=l(t);if(e.mode.blankLine)return e.mode.blankLine(e.state)}}}))}(n(4),n(52))},52:function(t,e,n){!function(t){"use strict";t.defineMode("yaml",(function(){var t=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(e,n){var a=e.peek(),i=n.escaped;if(n.escaped=!1,"#"==a&&(0==e.pos||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment";if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(n.literal&&e.indentation()>n.keyCol)return e.skipToEnd(),"string";if(n.literal&&(n.literal=!1),e.sol()){if(n.keyCol=0,n.pair=!1,n.pairStart=!1,e.match("---"))return"def";if(e.match("..."))return"def";if(e.match(/\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return"{"==a?n.inlinePairs++:"}"==a?n.inlinePairs--:"["==a?n.inlineList++:n.inlineList--,"meta";if(n.inlineList>0&&!i&&","==a)return e.next(),"meta";if(n.inlinePairs>0&&!i&&","==a)return n.keyCol=0,n.pair=!1,n.pairStart=!1,e.next(),"meta";if(n.pairStart){if(e.match(/^\s*(\||\>)\s*/))return n.literal=!0,"meta";if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==n.inlinePairs&&e.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(n.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(e.match(t))return"keyword"}return!n.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(n.pair=!0,n.keyCol=e.indentation(),"atom"):n.pair&&e.match(/^:\s*/)?(n.pairStart=!0,"meta"):(n.pairStart=!1,n.escaped="\\"==a,e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),t.defineMIME("text/x-yaml","yaml"),t.defineMIME("text/yaml","yaml")}(n(4))}}]);
//# sourceMappingURL=29.c9226712.chunk.js.map