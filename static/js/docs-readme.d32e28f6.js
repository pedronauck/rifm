(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./docs/readme.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),r=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js"),l=a("./node_modules/docz/dist/index.m.js"),m=a("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),c=a("./node_modules/@babel/runtime/helpers/builtin/es6/inheritsLoose.js"),s=function(e){function n(n){var a;return(a=e.call(this,n)||this)._state=null,a._handleChange=function(e){var n=e.target.value,t=e.target,r=n.length<a.props.value.length;a.setState({value:n,local:!0},function(){var e=t.selectionStart,o=a.props.refuse||/[^\d]+/gi,l=n.substr(0,e).replace(o,"");if(a._state={input:t,before:l,del:r},a.props.mask){for(var m=-1,c=0;c!==l.length;++c)m=Math.max(m,n.indexOf(l[c],m+1));var s=n.substr(m+1).replace(o,"")[0];m=n.indexOf(s,m+1),n=""+n.substr(0,m)+n.substr(m+1)}a.props.onChange(a.props.format(n))})},a.state={value:n.value,local:!1},a}Object(c.a)(n,e),n.getDerivedStateFromProps=function(e,n){return{value:n.local?n.value:e.value,local:!1}};var a=n.prototype;return a.render=function(){var e=this._handleChange,n=this.state.value;return(0,this.props.children)({value:n,onChange:e})},a.componentDidUpdate=function(){var e=this._state;if(e){for(var n=this.state.value,a=-1,t=0;t!==e.before.length;++t)a=Math.max(a,n.indexOf(e.before[t],a+1));if(this.props.mask&&!e.del)for(;n[a+1]&&(this.props.refuse||/[^\d]+/gi).test(n[a+1]);)a+=1;e.input.selectionStart=a+1,e.input.selectionEnd=a+1}this._state=null},n}(t.Component);function i(e){return function(e){if(Array.isArray(e)){for(var n=0,a=new Array(e.length);n<e.length;n++)a[n]=e[n];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=function(e){var n=parseInt(e.replace(/[^\d]+/gi,""),10);return n?n.toLocaleString("en"):""},u=function(e){var n=e.replace(/[^\d-]+/gi,"");if("-"===n)return"-";var a=parseInt(n,10);return a?a.toLocaleString("en"):""},g=function(e){var n=e.replace(/[^\d.]+/gi,""),a=n.length>2?-1===n.indexOf(".")?"".concat(n.substr(0,n.length-2),".").concat(n.substr(-2)):"".concat(n.split(".")[0],".").concat(n.split(".")[1].substr(0,2)):n,t=parseFloat(a);return t?t.toLocaleString("de-CH",{minimumFractionDigits:2,maximumFractionDigits:2}):""},d=function(e){return i(e.replace(/[^\d]+/gi,"")).reduce(function(e,n,a){return(2===a||4===a?"".concat(e,"-").concat(n):"".concat(e).concat(n)).substr(0,10)},"")},h=function(e){var n=i(e.replace(/[^\d]+/gi,"")).reduce(function(e,n,a){return(2===a||4===a?"".concat(e,"-").concat(n):"".concat(e).concat(n)).substr(0,10)},"");return 0===n.length?n:"".concat(n).concat("__-__-____".substr(n.length))},f=new(a("./node_modules/libphonenumber-js/index.es6.js").a)("US"),v=function(e){var n=e.replace(/[^\d]+/gi,"").substr(0,10),a=f.input(n);return f.reset(),a},E=a("./node_modules/@material-ui/core/TextField/index.js"),b=a.n(E),C=a("./node_modules/emotion/dist/index.es.js");n.default=function(e){var n=e.components;return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"rifm---react-input-format--mask"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#rifm---react-input-format--mask"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"RIFM - React Input Format & Mask"),"\n",r.a.createElement(o.MDXTag,{name:"p",components:n},"Is a tiny (\u2248 650-750b) component to transform any input component\ninto formatted or masked input."),"\n","\n",r.a.createElement(o.MDXTag,{name:"p",components:n},"In all examples:"),"\n",r.a.createElement(o.MDXTag,{name:"ul",components:n},"\n",r.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},"\n",r.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/renatorib/react-powerplug/blob/master/docs/components/Value.md"}},"Value"),"\nfrom react-powerplug is used as State management Component."),"\n"),"\n",r.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},"\n",r.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},"formatters is placed ",r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/istarkov/rifm/blob/master/docs/format.js"}},"here")),"\n"),"\n"),"\n",r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"simple-input-number-format"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#simple-input-number-format"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Simple input number format"),"\n",r.a.createElement(l.d,{__code:function(e){return e&&r.a.createElement(e.pre,{className:"react-prism language-jsx"},r.a.createElement("code",null,"<Value initial={''}>\n  {text => (\n    <Rifm value={text.value} onChange={text.set} format={numberFormat}>\n      {({ value, onChange }) => (\n        <>\n          Int&nbsp;&nbsp;\n          <input\n            value={value}\n            onChange={onChange}\n            className={css({ textAlign: 'right' })}\n            type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>"))}},r.a.createElement(m.a,{initial:""},function(e){return r.a.createElement(s,{value:e.value,onChange:e.set,format:p},function(e){var n=e.value,a=e.onChange;return r.a.createElement(r.a.Fragment,null,"Int\xa0\xa0",r.a.createElement("input",{value:n,onChange:a,className:Object(C.a)({textAlign:"right"}),type:"tel"}))})})),"\n",r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// numberFormat from example above\nconst numberFormat = (str: string) => {\n  const r = parseInt(str.replace(/[^d]+/gi, ''), 10);\n  return r ? r.toLocaleString('en') : '';\n};\n")),"\n",r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"input-number-format-with-fractional-part"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#input-number-format-with-fractional-part"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Input number format with fractional part"),"\n",r.a.createElement(l.d,{__code:function(e){return e&&r.a.createElement(e.pre,{className:"react-prism language-jsx"},r.a.createElement("code",null,"<Value initial={''}>\n  {text => (\n    <Rifm\n      refuse={/[^d.]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={currencyFormat}\n    >\n      {({ value, onChange }) => (\n        <>\n          Float&nbsp;&nbsp;\n          <input\n            value={value}\n            onChange={onChange}\n            className={css({ textAlign: 'right' })}\n            type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>"))}},r.a.createElement(m.a,{initial:""},function(e){return r.a.createElement(s,{refuse:/[^\d.]/gi,value:e.value,onChange:e.set,format:g},function(e){var n=e.value,a=e.onChange;return r.a.createElement(r.a.Fragment,null,"Float\xa0\xa0",r.a.createElement("input",{value:n,onChange:a,className:Object(C.a)({textAlign:"right"}),type:"tel"}))})})),"\n",r.a.createElement(o.MDXTag,{name:"p",components:n},"By default all non digit symbols are refused to enter,\nproperty ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"refuse"),' allows you to change this behaviour.\nIn later example "." is also added to ',r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"refuse")," so input will accept ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"."),"\nand allows you to split numbers."),"\n",r.a.createElement(o.MDXTag,{name:"p",components:n},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/istarkov/rifm/blob/master/docs/format.js"}},"currencyFormat and other formatters source")),"\n",r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"material-ui"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#material-ui"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Material UI"),"\n",r.a.createElement(o.MDXTag,{name:"p",components:n},"It can work with 3rd party Inputs without pain"),"\n",r.a.createElement(l.d,{__code:function(e){return e&&r.a.createElement(e.pre,{className:"react-prism language-jsx"},r.a.createElement("code",null,"<Value initial={''}>\n  {text => (\n    <Rifm\n      refuse={/[^d.]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={currencyFormat}\n    >\n      {({ value, onChange }) => (\n        <TextField\n          value={value}\n          label={'Float'}\n          onChange={onChange}\n          className={css({ input: { textAlign: 'right' } })}\n          type=\"tel\"\n        />\n      )}\n    </Rifm>\n  )}\n</Value>"))}},r.a.createElement(m.a,{initial:""},function(e){return r.a.createElement(s,{refuse:/[^\d.]/gi,value:e.value,onChange:e.set,format:g},function(e){var n=e.value,a=e.onChange;return r.a.createElement(b.a,{value:n,label:"Float",onChange:a,className:Object(C.a)({input:{textAlign:"right"}}),type:"tel"})})})),"\n",r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"masked-date-input"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#masked-date-input"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Masked date input"),"\n",r.a.createElement(o.MDXTag,{name:"p",components:n},"Mask is a little bit different in formatting, add ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mask")," property"),"\n",r.a.createElement(l.d,{__code:function(e){return e&&r.a.createElement(e.pre,{className:"react-prism language-jsx"},r.a.createElement("code",null,'<Value initial={\'18-08-1978\'}>\n  {text => (\n    <Rifm mask value={text.value} onChange={text.set} format={dateFormat}>\n      {({ value, onChange }) => (\n        <>\n          Date&nbsp;&nbsp;\n          <input\n            placeholder="dd-mm-yyyy"\n            value={value}\n            onChange={onChange}\n            type="tel"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>'))}},r.a.createElement(m.a,{initial:"18-08-1978"},function(e){return r.a.createElement(s,{mask:!0,value:e.value,onChange:e.set,format:d},function(e){var n=e.value,a=e.onChange;return r.a.createElement(r.a.Fragment,null,"Date\xa0\xa0",r.a.createElement("input",{placeholder:"dd-mm-yyyy",value:n,onChange:a,type:"tel"}))})})),"\n",r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"masked-date-input-2"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#masked-date-input-2"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Masked date input 2"),"\n",r.a.createElement(l.d,{__code:function(e){return e&&r.a.createElement(e.pre,{className:"react-prism language-jsx"},r.a.createElement("code",null,'<Value initial={\'\'}>\n  {text => (\n    <Rifm\n      mask\n      refuse={/[^d_]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={dateFormatSym}\n    >\n      {({ value, onChange }) => (\n        <>\n          Date&nbsp;&nbsp;\n          <input\n            placeholder="__-__-____"\n            value={value}\n            onChange={onChange}\n            type="tel"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>'))}},r.a.createElement(m.a,{initial:""},function(e){return r.a.createElement(s,{mask:!0,refuse:/[^\d_]/gi,value:e.value,onChange:e.set,format:h},function(e){var n=e.value,a=e.onChange;return r.a.createElement(r.a.Fragment,null,"Date\xa0\xa0",r.a.createElement("input",{placeholder:"__-__-____",value:n,onChange:a,type:"tel"}))})})),"\n",r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"masked-phone-input"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#masked-phone-input"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Masked Phone Input"),"\n",r.a.createElement(o.MDXTag,{name:"p",components:n},"Example of usage with\n",r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/catamphetamine/libphonenumber-js"}},"libphonenumber-js")," formatter"),"\n",r.a.createElement(l.d,{__code:function(e){return e&&r.a.createElement(e.pre,{className:"react-prism language-jsx"},r.a.createElement("code",null,"<Value initial={''}>\n  {text => (\n    <Rifm mask value={text.value} onChange={text.set} format={formatPhone}>\n      {({ value, onChange }) => (\n        <>\n          Phone&nbsp;&nbsp;+1&nbsp;\n          <input value={value} onChange={onChange} type=\"tel\" />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>"))}},r.a.createElement(m.a,{initial:""},function(e){return r.a.createElement(s,{mask:!0,value:e.value,onChange:e.set,format:v},function(e){var n=e.value,a=e.onChange;return r.a.createElement(r.a.Fragment,null,"Phone\xa0\xa0+1\xa0",r.a.createElement("input",{value:n,onChange:a,type:"tel"}))})})),"\n",r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"react-async-ready"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#react-async-ready"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"React async ready"),"\n",r.a.createElement(o.MDXTag,{name:"p",components:n},"Check that it will work with new async React ",r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://reactjs.org/docs/strict-mode.html"}},"see strict-mode")),"\n",r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"format-async-ready"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#format-async-ready"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Format Async Ready"),"\n",r.a.createElement(l.d,{__code:function(e){return e&&r.a.createElement(e.pre,{className:"react-prism language-jsx"},r.a.createElement("code",null,"<React.StrictMode>\n  <Value initial={''}>\n    {text => (\n      <Rifm\n        refuse={/[^d.]/gi}\n        value={text.value}\n        onChange={text.set}\n        format={currencyFormat}\n      >\n        {({ value, onChange }) => (\n          <>\n            Format&nbsp;&nbsp;\n            <input\n              value={value}\n              onChange={onChange}\n              className={css({ textAlign: 'right' })}\n              type=\"tel\"\n            />\n          </>\n        )}\n      </Rifm>\n    )}\n  </Value>\n</React.StrictMode>"))}},r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{initial:""},function(e){return r.a.createElement(s,{refuse:/[^\d.]/gi,value:e.value,onChange:e.set,format:g},function(e){var n=e.value,a=e.onChange;return r.a.createElement(r.a.Fragment,null,"Format\xa0\xa0",r.a.createElement("input",{value:n,onChange:a,className:Object(C.a)({textAlign:"right"}),type:"tel"}))})}))),"\n",r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"mask-async-ready"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#mask-async-ready"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Mask Async Ready"),"\n",r.a.createElement(l.d,{__code:function(e){return e&&r.a.createElement(e.pre,{className:"react-prism language-jsx"},r.a.createElement("code",null,'<React.StrictMode>\n  <Value initial={\'18-08-1978\'}>\n    {text => (\n      <Rifm mask value={text.value} onChange={text.set} format={dateFormat}>\n        {({ value, onChange }) => (\n          <>\n            Parse&nbsp;&nbsp;\n            <input\n              placeholder="dd-mm-yyyy"\n              value={value}\n              onChange={onChange}\n              type="tel"\n            />\n          </>\n        )}\n      </Rifm>\n    )}\n  </Value>\n</React.StrictMode>'))}},r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{initial:"18-08-1978"},function(e){return r.a.createElement(s,{mask:!0,value:e.value,onChange:e.set,format:d},function(e){var n=e.value,a=e.onChange;return r.a.createElement(r.a.Fragment,null,"Parse\xa0\xa0",r.a.createElement("input",{placeholder:"dd-mm-yyyy",value:n,onChange:a,type:"tel"}))})}))),"\n",r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"negative-numbers"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#negative-numbers"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Negative numbers"),"\n",r.a.createElement(l.d,{__code:function(e){return e&&r.a.createElement(e.pre,{className:"react-prism language-jsx"},r.a.createElement("code",null,"<Value initial={''}>\n  {text => (\n    <Rifm\n      refuse={/[^d-]/gi}\n      value={text.value}\n      onChange={text.set}\n      format={negNumberFormat}\n    >\n      {({ value, onChange }) => (\n        <>\n          Int&nbsp;&nbsp;\n          <input\n            value={value}\n            onChange={onChange}\n            className={css({ textAlign: 'right' })}\n            // type=\"tel\"\n          />\n        </>\n      )}\n    </Rifm>\n  )}\n</Value>"))}},r.a.createElement(m.a,{initial:""},function(e){return r.a.createElement(s,{refuse:/[^\d-]/gi,value:e.value,onChange:e.set,format:u},function(e){var n=e.value,a=e.onChange;return r.a.createElement(r.a.Fragment,null,"Int\xa0\xa0",r.a.createElement("input",{value:n,onChange:a,className:Object(C.a)({textAlign:"right"})}))})})))}}}]);