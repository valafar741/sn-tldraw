(this["webpackJsonpsn-tldraw"]=this["webpackJsonpsn-tldraw"]||[]).push([[0],{25:function(t){t.exports=JSON.parse('{"a":{"id":"doc","name":"New Document","version":15.3,"pages":{"page":{"id":"page","name":"Page 1","childIndex":1,"shapes":{},"bindings":{}}},"pageStates":{"page":{"id":"page","selectedIds":[],"camera":{"point":[0,0],"zoom":1}}},"assets":{}}}')},46:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var o,a,i=n(23),s=n(0),r=n.n(s),c=n(21),u=n.n(c),d=(n(46),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),o(t),a(t),i(t),s(t)}))}),l=n(8),p=n(9),g=n(16),f=n(12),h=n(13),m=n(29),x=n(38),v=n(25);!function(t){t.snComponent="sn-component",t.textarea="textarea"}(o||(o={})),function(t){t.snComponent="sn-component",t.textarea="sk-input contrast textarea"}(a||(a={}));var w={printUrl:!1,text:JSON.stringify(v.a)},b=new Map,O=function(t){Object(f.a)(n,t);var e=Object(h.a)(n);function n(t){var o;return Object(p.a)(this,n),(o=e.call(this,t)).editorKit=void 0,o.configureEditorKit=function(){var t=new m.EditorKitDelegate({setEditorRawText:function(t){o.setState(Object(l.a)(Object(l.a)({},w),{},{text:t}))},clearUndoHistory:function(){},getElementsBySelector:function(){return[]}});o.editorKit=new m.EditorKit({delegate:t,mode:"plaintext",supportsFilesafe:!1})},o.handleChange=function(t,e){e&&["session:complete","updated_shapes"].includes(e)&&o.saveText("tldraw content \n"+JSON.stringify(t.document))},o.saveText=function(t){o.saveNote(t)},o.saveNote=function(t){try{o.editorKit.onEditorValueChanged(t)}catch(e){console.log("Error saving note:",e)}},o.onBlur=function(t){},o.onFocus=function(t){},o.onKeyDown=function(t){b.set(t.key,!0),b.get("Control")&&b.get("s")&&t.preventDefault()},o.onKeyUp=function(t){b.delete(t.key)},o.getDocument=function(t){if(!t)return v.a;var e=v.a;try{t=t.substring(t.indexOf("{")),e=JSON.parse(t)}catch(n){e=v.a}return e},o.configureEditorKit(),o.state=w,o}return Object(g.a)(n,[{key:"render",value:function(){var t=this.state.text;return Object(i.jsx)("div",{className:o.snComponent+(this.state.printUrl?" print-url":""),id:o.snComponent,tabIndex:0,children:Object(i.jsx)(x.a,{showUI:!0,showMenu:!0,showPages:!1,showStyles:!0,showTools:!0,showZoom:!0,darkMode:!0,onChange:this.handleChange,document:this.getDocument(t)})})}}]),n}(r.a.Component);n(49);u.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),d()}},[[50,1,2]]]);
//# sourceMappingURL=main.a7a071d0.chunk.js.map