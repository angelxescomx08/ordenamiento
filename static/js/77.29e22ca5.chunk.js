(this.webpackJsonpordenamiento=this.webpackJsonpordenamiento||[]).push([[77],{110:function(e,t,n){!function(e){"use strict";e.defineMode("oz",(function(e){function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var n=/[\^@!\|<>#~\.\*\-\+\\/,=]/,r=/(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/,a=/(:::)|(\.\.\.)|(=<:)|(>=:)/,o=["in","then","else","of","elseof","elsecase","elseif","catch","finally","with","require","prepare","import","export","define","do"],i=["end"],c=t(["true","false","nil","unit"]),u=t(["andthen","at","attr","declare","feat","from","lex","mod","div","mode","orelse","parser","prod","prop","scanner","self","syn","token"]),s=t(["local","proc","fun","case","class","if","cond","or","dis","choice","not","thread","try","raise","lock","for","suchthat","meth","functor"]),f=t(o),d=t(i);function l(e,t){if(e.eatSpace())return null;if(e.match(/[{}]/))return"bracket";if(e.match("[]"))return"keyword";if(e.match(a)||e.match(r))return"operator";if(e.match(c))return"atom";var o=e.match(s);if(o)return t.doInCurrentLine?t.doInCurrentLine=!1:t.currentIndent++,"proc"==o[0]||"fun"==o[0]?t.tokenize=k:"class"==o[0]?t.tokenize=m:"meth"==o[0]&&(t.tokenize=h),"keyword";if(e.match(f)||e.match(u))return"keyword";if(e.match(d))return t.currentIndent--,"keyword";var i=e.next();if('"'==i||"'"==i)return t.tokenize=z(i),t.tokenize(e,t);if(/[~\d]/.test(i)){if("~"==i){if(!/^[0-9]/.test(e.peek()))return null;if("0"==e.next()&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))return"number"}return"0"==i&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)?"number":null}return"%"==i?(e.skipToEnd(),"comment"):"/"==i&&e.eat("*")?(t.tokenize=p,p(e,t)):n.test(i)?"operator":(e.eatWhile(/\w/),"variable")}function m(e,t){return e.eatSpace()?null:(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/),t.tokenize=l,"variable-3")}function h(e,t){return e.eatSpace()?null:(e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/),t.tokenize=l,"def")}function k(e,t){return e.eatSpace()?null:!t.hasPassedFirstStage&&e.eat("{")?(t.hasPassedFirstStage=!0,"bracket"):t.hasPassedFirstStage?(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/),t.hasPassedFirstStage=!1,t.tokenize=l,"def"):(t.tokenize=l,null)}function p(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=l;break}r="*"==n}return"comment"}function z(e){return function(t,n){for(var r,a=!1,o=!1;null!=(r=t.next());){if(r==e&&!a){o=!0;break}a=!a&&"\\"==r}return!o&&a||(n.tokenize=l),"string"}}function b(){var e=o.concat(i);return new RegExp("[\\[\\]]|("+e.join("|")+")$")}return{startState:function(){return{tokenize:l,currentIndent:0,doInCurrentLine:!1,hasPassedFirstStage:!1}},token:function(e,t){return e.sol()&&(t.doInCurrentLine=0),t.tokenize(e,t)},indent:function(t,n){var r=n.replace(/^\s+|\s+$/g,"");return r.match(d)||r.match(f)||r.match(/(\[])/)?e.indentUnit*(t.currentIndent-1):t.currentIndent<0?0:t.currentIndent*e.indentUnit},fold:"indent",electricInput:b(),lineComment:"%",blockCommentStart:"/*",blockCommentEnd:"*/"}})),e.defineMIME("text/x-oz","oz")}(n(4))}}]);
//# sourceMappingURL=77.29e22ca5.chunk.js.map