(this.webpackJsonpordenamiento=this.webpackJsonpordenamiento||[]).push([[122],{52:function(t,e,i){!function(t){"use strict";t.defineMode("yaml",(function(){var t=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(e,i){var n=e.peek(),r=i.escaped;if(i.escaped=!1,"#"==n&&(0==e.pos||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment";if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(i.literal&&e.indentation()>i.keyCol)return e.skipToEnd(),"string";if(i.literal&&(i.literal=!1),e.sol()){if(i.keyCol=0,i.pair=!1,i.pairStart=!1,e.match("---"))return"def";if(e.match("..."))return"def";if(e.match(/\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return"{"==n?i.inlinePairs++:"}"==n?i.inlinePairs--:"["==n?i.inlineList++:i.inlineList--,"meta";if(i.inlineList>0&&!r&&","==n)return e.next(),"meta";if(i.inlinePairs>0&&!r&&","==n)return i.keyCol=0,i.pair=!1,i.pairStart=!1,e.next(),"meta";if(i.pairStart){if(e.match(/^\s*(\||\>)\s*/))return i.literal=!0,"meta";if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==i.inlinePairs&&e.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(i.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(e.match(t))return"keyword"}return!i.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(i.pair=!0,i.keyCol=e.indentation(),"atom"):i.pair&&e.match(/^:\s*/)?(i.pairStart=!0,"meta"):(i.pairStart=!1,i.escaped="\\"==n,e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),t.defineMIME("text/x-yaml","yaml"),t.defineMIME("text/yaml","yaml")}(i(4))}}]);
//# sourceMappingURL=122.aaf880bf.chunk.js.map