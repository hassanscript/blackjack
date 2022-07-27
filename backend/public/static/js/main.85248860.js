/*! For license information please see main.85248860.js.LICENSE.txt */
!(function () {
  var e = {
      4463: function (e, t, n) {
        "use strict";
        var r = n(2791),
          o = n(5296);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var y = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            y[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            y[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              y[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            y[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              y[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            y[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            y[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            y[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            y[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = y.hasOwnProperty(t) ? y[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, g);
            y[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, g);
              y[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, g);
            y[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            y[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (y.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            y[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          E = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          A = Symbol.for("react.context"),
          R = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          I = Symbol.for("react.memo"),
          N = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var M = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var P = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (P && e[P]) || e["@@iterator"])
            ? e
            : null;
        }
        var L,
          j = Object.assign;
        function B(e) {
          if (void 0 === L)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              L = (t && t[1]) || "";
            }
          return "\n" + L + e;
        }
        var F = !1;
        function D(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var o = s.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var u = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? B(e) : "";
        }
        function Q(e) {
          switch (e.tag) {
            case 5:
              return B(e.type);
            case 16:
              return B("Lazy");
            case 13:
              return B("Suspense");
            case 19:
              return B("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = D(e.type, !1));
            case 11:
              return (e = D(e.type.render, !1));
            case 1:
              return (e = D(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case S:
              return "Portal";
            case C:
              return "Profiler";
            case x:
              return "StrictMode";
            case T:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case A:
                return (e.displayName || "Context") + ".Consumer";
              case _:
                return (e._context.displayName || "Context") + ".Provider";
              case R:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case I:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case N:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function J(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return U(t);
            case 8:
              return t === x ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function Y(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function K(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function V(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = K(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = K(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function W(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Z(e, t) {
          var n = t.checked;
          return j({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function H(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Y(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function G(e, t) {
          X(e, t);
          var n = Y(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, Y(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && W(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + Y(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return j({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: Y(n) };
        }
        function ae(e, t) {
          var n = Y(t.value),
            r = Y(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ye(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = j(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var ke = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          Ee = null,
          xe = null;
        function Ce(e) {
          if ((e = ko(e))) {
            if ("function" !== typeof Se) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = So(t)), Se(e.stateNode, e.type, t));
          }
        }
        function _e(e) {
          Ee ? (xe ? xe.push(e) : (xe = [e])) : (Ee = e);
        }
        function Ae() {
          if (Ee) {
            var e = Ee,
              t = xe;
            if (((xe = Ee = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Re(e, t) {
          return e(t);
        }
        function Te() {}
        var Oe = !1;
        function Ie(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Re(e, t, n);
          } finally {
            (Oe = !1), (null !== Ee || null !== xe) && (Te(), Ae());
          }
        }
        function Ne(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = So(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Me = !1;
        if (c)
          try {
            var Pe = {};
            Object.defineProperty(Pe, "passive", {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener("test", Pe, Pe),
              window.removeEventListener("test", Pe, Pe);
          } catch (ce) {
            Me = !1;
          }
        function ze(e, t, n, r, o, a, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Le = !1,
          je = null,
          Be = !1,
          Fe = null,
          De = {
            onError: function (e) {
              (Le = !0), (je = e);
            },
          };
        function Qe(e, t, n, r, o, a, i, l, u) {
          (Le = !1), (je = null), ze.apply(De, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Je(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ye(e) {
          if (Ue(e) !== e) throw Error(a(188));
        }
        function Ke(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return Ye(o), e;
                    if (i === r) return Ye(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, u = o.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ve(e)
            : null;
        }
        function Ve(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ve(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = o.unstable_scheduleCallback,
          We = o.unstable_cancelCallback,
          Ze = o.unstable_shouldYield,
          He = o.unstable_requestPaint,
          Xe = o.unstable_now,
          Ge = o.unstable_getCurrentPriorityLevel,
          $e = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? (r = ft(l)) : 0 !== (a &= i) && (r = ft(a));
          } else 0 !== (i = n & ~o) ? (r = ft(i)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function yt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function kt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          St,
          Et,
          xt,
          Ct,
          _t = !1,
          At = [],
          Rt = null,
          Tt = null,
          Ot = null,
          It = new Map(),
          Nt = new Map(),
          Mt = [],
          Pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Rt = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              It.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nt.delete(t.pointerId);
          }
        }
        function Lt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = ko(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function jt(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Je(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      Et(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Bt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ko(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (ke = r), n.target.dispatchEvent(r), (ke = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Bt(e) && n.delete(t);
        }
        function Dt() {
          (_t = !1),
            null !== Rt && Bt(Rt) && (Rt = null),
            null !== Tt && Bt(Tt) && (Tt = null),
            null !== Ot && Bt(Ot) && (Ot = null),
            It.forEach(Ft),
            Nt.forEach(Ft);
        }
        function Qt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            _t ||
              ((_t = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Dt)));
        }
        function Ut(e) {
          function t(t) {
            return Qt(t, e);
          }
          if (0 < At.length) {
            Qt(At[0], e);
            for (var n = 1; n < At.length; n++) {
              var r = At[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Rt && Qt(Rt, e),
              null !== Tt && Qt(Tt, e),
              null !== Ot && Qt(Ot, e),
              It.forEach(t),
              Nt.forEach(t),
              n = 0;
            n < Mt.length;
            n++
          )
            (r = Mt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn; )
            jt(n), null === n.blockedOn && Mt.shift();
        }
        var Jt = k.ReactCurrentBatchConfig,
          Yt = !0;
        function Kt(e, t, n, r) {
          var o = bt,
            a = Jt.transition;
          Jt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = o), (Jt.transition = a);
          }
        }
        function Vt(e, t, n, r) {
          var o = bt,
            a = Jt.transition;
          Jt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = o), (Jt.transition = a);
          }
        }
        function qt(e, t, n, r) {
          if (Yt) {
            var o = Zt(e, t, n, r);
            if (null === o) Yr(e, t, r, Wt, n), zt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Rt = Lt(Rt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Tt = Lt(Tt, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Ot = Lt(Ot, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return It.set(a, Lt(It.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      Nt.set(a, Lt(Nt.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < Pt.indexOf(e))) {
              for (; null !== o; ) {
                var a = ko(o);
                if (
                  (null !== a && wt(a),
                  null === (a = Zt(e, t, n, r)) && Yr(e, t, r, Wt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Yr(e, t, r, null, n);
          }
        }
        var Wt = null;
        function Zt(e, t, n, r) {
          if (((Wt = null), null !== (e = bo((e = we(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Je(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Wt = e), null;
        }
        function Ht(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ge()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Gt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Gt,
            r = n.length,
            o = "value" in Xt ? Xt.value : Xt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return ($t = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            j(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(sn),
          fn = j({}, sn, { view: 0, detail: 0 }),
          dn = on(fn),
          pn = j({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((an = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = an = 0),
                    (un = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = on(pn),
          mn = on(j({}, pn, { dataTransfer: 0 })),
          yn = on(j({}, fn, { relatedTarget: 0 })),
          vn = on(
            j({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = j({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(gn),
          kn = on(j({}, sn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Cn() {
          return xn;
        }
        var _n = j({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          An = on(_n),
          Rn = on(
            j({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tn = on(
            j({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          On = on(
            j({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          In = j({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Nn = on(In),
          Mn = [9, 13, 27, 32],
          Pn = c && "CompositionEvent" in window,
          zn = null;
        c && "documentMode" in document && (zn = document.documentMode);
        var Ln = c && "TextEvent" in window && !zn,
          jn = c && (!Pn || (zn && 8 < zn && 11 >= zn)),
          Bn = String.fromCharCode(32),
          Fn = !1;
        function Dn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Qn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Jn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Yn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Jn[e.type] : "textarea" === t;
        }
        function Kn(e, t, n, r) {
          _e(r),
            0 < (t = Vr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Vn = null,
          qn = null;
        function Wn(e) {
          Br(e, 0);
        }
        function Zn(e) {
          if (q(wo(e))) return e;
        }
        function Hn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Gn;
          if (c) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Gn = $n;
          } else Gn = !1;
          Xn = Gn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Vn && (Vn.detachEvent("onpropertychange", nr), (qn = Vn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Zn(qn)) {
            var t = [];
            Kn(t, qn, e, we(e)), Ie(Wn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Vn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Zn(qn);
        }
        function ar(e, t) {
          if ("click" === e) return Zn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Zn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!f.call(t, o) || !lr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = W(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = W((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = cr(n, a));
                var i = cr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          yr = null,
          vr = null,
          gr = null,
          br = !1;
        function kr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == yr ||
            yr !== W(r) ||
            ("selectionStart" in (r = yr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && ur(gr, r)) ||
              ((gr = r),
              0 < (r = Vr(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Sr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Er = {},
          xr = {};
        function Cr(e) {
          if (Er[e]) return Er[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xr) return (Er[e] = n[t]);
          return e;
        }
        c &&
          ((xr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var _r = Cr("animationend"),
          Ar = Cr("animationiteration"),
          Rr = Cr("animationstart"),
          Tr = Cr("transitionend"),
          Or = new Map(),
          Ir =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Nr(e, t) {
          Or.set(e, t), u(t, [e]);
        }
        for (var Mr = 0; Mr < Ir.length; Mr++) {
          var Pr = Ir[Mr];
          Nr(Pr.toLowerCase(), "on" + (Pr[0].toUpperCase() + Pr.slice(1)));
        }
        Nr(_r, "onAnimationEnd"),
          Nr(Ar, "onAnimationIteration"),
          Nr(Rr, "onAnimationStart"),
          Nr("dblclick", "onDoubleClick"),
          Nr("focusin", "onFocus"),
          Nr("focusout", "onBlur"),
          Nr(Tr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Lr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr)
          );
        function jr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, u, s) {
              if ((Qe.apply(this, arguments), Le)) {
                if (!Le) throw Error(a(198));
                var c = je;
                (Le = !1), (je = null), Be || ((Be = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Br(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== a && o.isPropagationStopped()))
                    break e;
                  jr(o, l, s), (a = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== a && o.isPropagationStopped())
                  )
                    break e;
                  jr(o, l, s), (a = u);
                }
            }
          }
          if (Be) throw ((e = Fe), (Be = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[yo];
          void 0 === n && (n = t[yo] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Jr(t, e, 2, !1), n.add(r));
        }
        function Dr(e, t, n) {
          var r = 0;
          t && (r |= 4), Jr(n, e, r, t);
        }
        var Qr = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[Qr]) {
            (e[Qr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Lr.has(t) || Dr(t, !1, e), Dr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Qr] || ((t[Qr] = !0), Dr("selectionchange", !1, t));
          }
        }
        function Jr(e, t, n, r) {
          switch (Ht(t)) {
            case 1:
              var o = Kt;
              break;
            case 4:
              o = Vt;
              break;
            default:
              o = qt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Me ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Yr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === o ||
                        (8 === u.nodeType && u.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = bo(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Ie(function () {
            var r = a,
              o = we(n),
              i = [];
            e: {
              var l = Or.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = An;
                    break;
                  case "focusin":
                    (s = "focus"), (u = yn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = yn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = yn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Tn;
                    break;
                  case _r:
                  case Ar:
                  case Rr:
                    u = vn;
                    break;
                  case Tr:
                    u = On;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Nn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Rn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Ne(h, d)) &&
                        c.push(Kr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, o)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === ke ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!bo(s) && !s[mo])) &&
                  (u || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? bo(s)
                          : null) &&
                        (s !== (f = Ue(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Rn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : wo(u)),
                  (p = null == s ? l : wo(s)),
                  ((l = new c(m, h + "leave", u, n, o)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(d, h + "enter", s, n, o)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, m = d; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Wr(i, l, u, c, !1),
                  null !== s && null !== f && Wr(i, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? wo(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var y = Hn;
              else if (Yn(l))
                if (Xn) y = ir;
                else {
                  y = or;
                  var v = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (y = ar);
              switch (
                (y && (y = y(e, r))
                  ? Kn(i, y, n, o)
                  : (v && v(e, l, r),
                    "focusout" === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (v = r ? wo(r) : window),
                e)
              ) {
                case "focusin":
                  (Yn(v) || "true" === v.contentEditable) &&
                    ((yr = v), (vr = r), (gr = null));
                  break;
                case "focusout":
                  gr = vr = yr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), kr(i, n, o);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  kr(i, n, o);
              }
              var g;
              if (Pn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? Dn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (jn &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Un && (g = en())
                    : ((Gt = "value" in (Xt = o) ? Xt.value : Xt.textContent),
                      (Un = !0))),
                0 < (v = Vr(r, b)).length &&
                  ((b = new kn(b, e, null, n, o)),
                  i.push({ event: b, listeners: v }),
                  g ? (b.data = g) : null !== (g = Qn(n)) && (b.data = g))),
                (g = Ln
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Qn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Bn);
                        case "textInput":
                          return (e = t.data) === Bn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!Pn && Dn(e, t))
                          ? ((e = en()), ($t = Gt = Xt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return jn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Vr(r, "onBeforeInput")).length &&
                  ((o = new kn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = g));
            }
            Br(i, t);
          });
        }
        function Kr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Vr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Ne(e, n)) && r.unshift(Kr(e, a, o)),
              null != (a = Ne(e, t)) && r.push(Kr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Wr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              o
                ? null != (u = Ne(n, a)) && i.unshift(Kr(n, u, l))
                : o || (null != (u = Ne(n, a)) && i.push(Kr(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Zr = /\r\n?/g,
          Hr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Zr, "\n")
            .replace(Hr, "");
        }
        function Gr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(a(425));
        }
        function $r() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" === typeof setTimeout ? setTimeout : void 0,
          oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ao = "function" === typeof Promise ? Promise : void 0,
          io =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ao
              ? function (e) {
                  return ao.resolve(null).then(e).catch(lo);
                }
              : ro;
        function lo(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function uo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Ut(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Ut(t);
        }
        function so(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + fo,
          ho = "__reactProps$" + fo,
          mo = "__reactContainer$" + fo,
          yo = "__reactEvents$" + fo,
          vo = "__reactListeners$" + fo,
          go = "__reactHandles$" + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ko(e) {
          return !(e = e[po] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function So(e) {
          return e[ho] || null;
        }
        var Eo = [],
          xo = -1;
        function Co(e) {
          return { current: e };
        }
        function _o(e) {
          0 > xo || ((e.current = Eo[xo]), (Eo[xo] = null), xo--);
        }
        function Ao(e, t) {
          xo++, (Eo[xo] = e.current), (e.current = t);
        }
        var Ro = {},
          To = Co(Ro),
          Oo = Co(!1),
          Io = Ro;
        function No(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ro;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Mo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Po() {
          _o(Oo), _o(To);
        }
        function zo(e, t, n) {
          if (To.current !== Ro) throw Error(a(168));
          Ao(To, t), Ao(Oo, n);
        }
        function Lo(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, J(e) || "Unknown", o));
          return j({}, n, r);
        }
        function jo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ro),
            (Io = To.current),
            Ao(To, e),
            Ao(Oo, Oo.current),
            !0
          );
        }
        function Bo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Lo(e, t, Io)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              _o(Oo),
              _o(To),
              Ao(To, e))
            : _o(Oo),
            Ao(Oo, n);
        }
        var Fo = null,
          Do = !1,
          Qo = !1;
        function Uo(e) {
          null === Fo ? (Fo = [e]) : Fo.push(e);
        }
        function Jo() {
          if (!Qo && null !== Fo) {
            Qo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fo = null), (Do = !1);
            } catch (o) {
              throw (null !== Fo && (Fo = Fo.slice(e + 1)), qe($e, Jo), o);
            } finally {
              (bt = t), (Qo = !1);
            }
          }
          return null;
        }
        var Yo = [],
          Ko = 0,
          Vo = null,
          qo = 0,
          Wo = [],
          Zo = 0,
          Ho = null,
          Xo = 1,
          Go = "";
        function $o(e, t) {
          (Yo[Ko++] = qo), (Yo[Ko++] = Vo), (Vo = e), (qo = t);
        }
        function ea(e, t, n) {
          (Wo[Zo++] = Xo), (Wo[Zo++] = Go), (Wo[Zo++] = Ho), (Ho = e);
          var r = Xo;
          e = Go;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Xo = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Go = a + e);
          } else (Xo = (1 << a) | (n << o) | r), (Go = e);
        }
        function ta(e) {
          null !== e.return && ($o(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === Vo; )
            (Vo = Yo[--Ko]), (Yo[Ko] = null), (qo = Yo[--Ko]), (Yo[Ko] = null);
          for (; e === Ho; )
            (Ho = Wo[--Zo]),
              (Wo[Zo] = null),
              (Go = Wo[--Zo]),
              (Wo[Zo] = null),
              (Xo = Wo[--Zo]),
              (Wo[Zo] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function la(e, t) {
          var n = Is(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ua(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ra = e), (oa = so(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ho ? { id: Xo, overflow: Go } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Is(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sa(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ca(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!ua(e, t)) {
                if (sa(e)) throw Error(a(418));
                t = so(n.nextSibling);
                var r = ra;
                t && ua(e, t)
                  ? la(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (sa(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function fa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ra = e;
        }
        function da(e) {
          if (e !== ra) return !1;
          if (!aa) return fa(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (sa(e)) throw (pa(), Error(a(418)));
            for (; t; ) la(e, t), (t = so(t.nextSibling));
          }
          if ((fa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oa = so(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? so(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = so(e.nextSibling);
        }
        function ha() {
          (oa = ra = null), (aa = !1);
        }
        function ma(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ya = k.ReactCurrentBatchConfig;
        function va(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = j({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ga = Co(null),
          ba = null,
          ka = null,
          wa = null;
        function Sa() {
          wa = ka = ba = null;
        }
        function Ea(e) {
          var t = ga.current;
          _o(ga), (e._currentValue = t);
        }
        function xa(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ca(e, t) {
          (ba = e),
            (wa = ka = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (kl = !0), (e.firstContext = null));
        }
        function _a(e) {
          var t = e._currentValue;
          if (wa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === ka)
            ) {
              if (null === ba) throw Error(a(308));
              (ka = e), (ba.dependencies = { lanes: 0, firstContext: e });
            } else ka = ka.next = e;
          return t;
        }
        var Aa = null;
        function Ra(e) {
          null === Aa ? (Aa = [e]) : Aa.push(e);
        }
        function Ta(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), Ra(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Oa(e, r)
          );
        }
        function Oa(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ia = !1;
        function Na(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ma(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Pa(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function za(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ru))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Oa(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Ra(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Oa(e, n)
          );
        }
        function La(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function ja(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ba(e, t, n, r) {
          var o = e.updateQueue;
          Ia = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var u = l,
              s = u.next;
            (u.next = null), null === i ? (a = s) : (i.next = s), (i = u);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== a) {
            var f = o.baseState;
            for (i = 0, c = s = u = null, l = a; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = j({}, f, d);
                      break e;
                    case 2:
                      Ia = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = o.effects) ? (o.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (o.lastBaseUpdate = d),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (o.baseState = u),
              (o.firstBaseUpdate = s),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Lu |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Fa(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Da = new r.Component().refs;
        function Qa(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : j({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ua = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              o = ts(e),
              a = Pa(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = za(e, a, o)) && (ns(t, e, o, r), La(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              o = ts(e),
              a = Pa(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = za(e, a, o)) && (ns(t, e, o, r), La(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = es(),
              r = ts(e),
              o = Pa(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = za(e, o, r)) && (ns(t, e, r, n), La(t, e, r));
          },
        };
        function Ja(e, t, n, r, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(o, a);
        }
        function Ya(e, t, n) {
          var r = !1,
            o = Ro,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = _a(a))
              : ((o = Mo(t) ? Io : To.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? No(e, o)
                  : Ro)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ua),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function Ka(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ua.enqueueReplaceState(t, t.state, null);
        }
        function Va(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Da), Na(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (o.context = _a(a))
            : ((a = Mo(t) ? Io : To.current), (o.context = No(e, a))),
            (o.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (Qa(e, t, a, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Ua.enqueueReplaceState(o, o.state, null),
              Ba(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function qa(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Da && (t = o.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Wa(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Za(e) {
          return (0, e._init)(e._payload);
        }
        function Ha(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Ms(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = js(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var a = n.type;
            return a === E
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === N &&
                    Za(a) === t.type))
              ? (((r = o(t, n.props)).ref = qa(e, t, n)), (r.return = e), r)
              : (((r = Ps(n.type, n.key, n.props, null, e.mode, r)).ref = qa(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bs(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = zs(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = js("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Ps(t.type, t.key, t.props, null, e.mode, n)).ref = qa(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Bs(t, e.mode, n)).return = e), t;
                case N:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = zs(t, e.mode, n, null)).return = e), t;
              Wa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === o ? s(e, t, n, r) : null;
                case S:
                  return n.key === o ? c(e, t, n, r) : null;
                case N:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== o ? null : f(e, t, n, r, null);
              Wa(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case N:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || z(r))
                return f(t, (e = e.get(n) || null), r, o, null);
              Wa(t, r);
            }
            return null;
          }
          function m(o, a, l, u) {
            for (
              var s = null, c = null, f = a, m = (a = 0), y = null;
              null !== f && m < l.length;
              m++
            ) {
              f.index > m ? ((y = f), (f = null)) : (y = f.sibling);
              var v = p(o, f, l[m], u);
              if (null === v) {
                null === f && (f = y);
                break;
              }
              e && f && null === v.alternate && t(o, f),
                (a = i(v, a, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v),
                (f = y);
            }
            if (m === l.length) return n(o, f), aa && $o(o, m), s;
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(o, l[m], u)) &&
                  ((a = i(f, a, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return aa && $o(o, m), s;
            }
            for (f = r(o, f); m < l.length; m++)
              null !== (y = h(f, o, m, l[m], u)) &&
                (e &&
                  null !== y.alternate &&
                  f.delete(null === y.key ? m : y.key),
                (a = i(y, a, m)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              aa && $o(o, m),
              s
            );
          }
          function y(o, l, u, s) {
            var c = z(u);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (u = c.call(u))) throw Error(a(151));
            for (
              var f = (c = null), m = l, y = (l = 0), v = null, g = u.next();
              null !== m && !g.done;
              y++, g = u.next()
            ) {
              m.index > y ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(o, m, g.value, s);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (l = i(b, l, y)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = v);
            }
            if (g.done) return n(o, m), aa && $o(o, y), c;
            if (null === m) {
              for (; !g.done; y++, g = u.next())
                null !== (g = d(o, g.value, s)) &&
                  ((l = i(g, l, y)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return aa && $o(o, y), c;
            }
            for (m = r(o, m); !g.done; y++, g = u.next())
              null !== (g = h(m, o, y, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  m.delete(null === g.key ? y : g.key),
                (l = i(g, l, y)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              aa && $o(o, y),
              c
            );
          }
          return function e(r, a, i, u) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === E &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var s = i.key, c = a; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === E) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = o(c, i.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === N &&
                            Za(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, i.props)).ref = qa(r, c, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === E
                      ? (((a = zs(i.props.children, r.mode, u, i.key)).return =
                          r),
                        (r = a))
                      : (((u = Ps(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          u
                        )).ref = qa(r, a, i)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case S:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Bs(i, r.mode, u)).return = r), (r = a);
                  }
                  return l(r);
                case N:
                  return e(r, a, (c = i._init)(i._payload), u);
              }
              if (te(i)) return m(r, a, i, u);
              if (z(i)) return y(r, a, i, u);
              Wa(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = js(i, r.mode, u)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var Xa = Ha(!0),
          Ga = Ha(!1),
          $a = {},
          ei = Co($a),
          ti = Co($a),
          ni = Co($a);
        function ri(e) {
          if (e === $a) throw Error(a(174));
          return e;
        }
        function oi(e, t) {
          switch ((Ao(ni, t), Ao(ti, e), Ao(ei, $a), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          _o(ei), Ao(ei, t);
        }
        function ai() {
          _o(ei), _o(ti), _o(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = ue(t, e.type);
          t !== n && (Ao(ti, e), Ao(ei, n));
        }
        function li(e) {
          ti.current === e && (_o(ei), _o(ti));
        }
        var ui = Co(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = k.ReactCurrentDispatcher,
          pi = k.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          yi = null,
          vi = null,
          gi = !1,
          bi = !1,
          ki = 0,
          wi = 0;
        function Si() {
          throw Error(a(321));
        }
        function Ei(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function xi(e, t, n, r, o, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, o)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (ki = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (vi = yi = null),
                (t.updateQueue = null),
                (di.current = sl),
                (e = n(r, o));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== yi && null !== yi.next),
            (hi = 0),
            (vi = yi = mi = null),
            (gi = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Ci() {
          var e = 0 !== ki;
          return (ki = 0), e;
        }
        function _i() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vi ? (mi.memoizedState = vi = e) : (vi = vi.next = e), vi
          );
        }
        function Ai() {
          if (null === yi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = yi.next;
          var t = null === vi ? mi.memoizedState : vi.next;
          if (null !== t) (vi = t), (yi = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (yi = e).memoizedState,
              baseState: yi.baseState,
              baseQueue: yi.baseQueue,
              queue: yi.queue,
              next: null,
            }),
              null === vi ? (mi.memoizedState = vi = e) : (vi = vi.next = e);
          }
          return vi;
        }
        function Ri(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ti(e) {
          var t = Ai(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = yi,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var u = (l = null),
              s = null,
              c = i;
            do {
              var f = c.lane;
              if ((hi & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (l = r)) : (s = s.next = d),
                  (mi.lanes |= f),
                  (Lu |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === s ? (l = r) : (s.next = u),
              lr(r, t.memoizedState) || (kl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (mi.lanes |= i), (Lu |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Oi(e) {
          var t = Ai(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            lr(i, t.memoizedState) || (kl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ii() {}
        function Ni(e, t) {
          var n = mi,
            r = Ai(),
            o = t(),
            i = !lr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (kl = !0)),
            (r = r.queue),
            Yi(zi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== vi && 1 & vi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fi(9, Pi.bind(null, n, r, o, t), void 0, null),
              null === Tu)
            )
              throw Error(a(349));
            0 !== (30 & hi) || Mi(n, t, o);
          }
          return o;
        }
        function Mi(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Pi(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Li(t) && ji(e);
        }
        function zi(e, t, n) {
          return n(function () {
            Li(t) && ji(e);
          });
        }
        function Li(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function ji(e) {
          var t = Oa(e, 1);
          null !== t && ns(t, e, 1, -1);
        }
        function Bi(e) {
          var t = _i();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ri,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Fi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Di() {
          return Ai().memoizedState;
        }
        function Qi(e, t, n, r) {
          var o = _i();
          (mi.flags |= e),
            (o.memoizedState = Fi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ui(e, t, n, r) {
          var o = Ai();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== yi) {
            var i = yi.memoizedState;
            if (((a = i.destroy), null !== r && Ei(r, i.deps)))
              return void (o.memoizedState = Fi(t, n, a, r));
          }
          (mi.flags |= e), (o.memoizedState = Fi(1 | t, n, a, r));
        }
        function Ji(e, t) {
          return Qi(8390656, 8, e, t);
        }
        function Yi(e, t) {
          return Ui(2048, 8, e, t);
        }
        function Ki(e, t) {
          return Ui(4, 2, e, t);
        }
        function Vi(e, t) {
          return Ui(4, 4, e, t);
        }
        function qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Wi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ui(4, 4, qi.bind(null, t, e), n)
          );
        }
        function Zi() {}
        function Hi(e, t) {
          var n = Ai();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ei(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = Ai();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ei(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Gi(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (kl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (mi.lanes |= n), (Lu |= n), (e.baseState = !0)),
              t);
        }
        function $i(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return Ai().memoizedState;
        }
        function tl(e, t, n) {
          var r = ts(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            ol(t, n);
          else if (null !== (n = Ta(e, t, n, r))) {
            ns(n, e, r, es()), al(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = ts(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) ol(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), lr(l, i))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((o.next = o), Ra(t))
                      : ((o.next = u.next), (u.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (s) {}
            null !== (n = Ta(e, t, o, r)) &&
              (ns(n, e, r, (o = es())), al(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function ol(e, t) {
          bi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function al(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var il = {
            readContext: _a,
            useCallback: Si,
            useContext: Si,
            useEffect: Si,
            useImperativeHandle: Si,
            useInsertionEffect: Si,
            useLayoutEffect: Si,
            useMemo: Si,
            useReducer: Si,
            useRef: Si,
            useState: Si,
            useDebugValue: Si,
            useDeferredValue: Si,
            useTransition: Si,
            useMutableSource: Si,
            useSyncExternalStore: Si,
            useId: Si,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: _a,
            useCallback: function (e, t) {
              return (_i().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: _a,
            useEffect: Ji,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Qi(4194308, 4, qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Qi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Qi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = _i();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = _i();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (_i().memoizedState = e);
            },
            useState: Bi,
            useDebugValue: Zi,
            useDeferredValue: function (e) {
              return (_i().memoizedState = e);
            },
            useTransition: function () {
              var e = Bi(!1),
                t = e[0];
              return (
                (e = $i.bind(null, e[1])), (_i().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                o = _i();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Tu)) throw Error(a(349));
                0 !== (30 & hi) || Mi(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Ji(zi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Fi(9, Pi.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = _i(),
                t = Tu.identifierPrefix;
              if (aa) {
                var n = Go;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xo & ~(1 << (32 - it(Xo) - 1))).toString(32) + n)),
                  0 < (n = ki++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: _a,
            useCallback: Hi,
            useContext: _a,
            useEffect: Yi,
            useImperativeHandle: Wi,
            useInsertionEffect: Ki,
            useLayoutEffect: Vi,
            useMemo: Xi,
            useReducer: Ti,
            useRef: Di,
            useState: function () {
              return Ti(Ri);
            },
            useDebugValue: Zi,
            useDeferredValue: function (e) {
              return Gi(Ai(), yi.memoizedState, e);
            },
            useTransition: function () {
              return [Ti(Ri)[0], Ai().memoizedState];
            },
            useMutableSource: Ii,
            useSyncExternalStore: Ni,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: _a,
            useCallback: Hi,
            useContext: _a,
            useEffect: Yi,
            useImperativeHandle: Wi,
            useInsertionEffect: Ki,
            useLayoutEffect: Vi,
            useMemo: Xi,
            useReducer: Oi,
            useRef: Di,
            useState: function () {
              return Oi(Ri);
            },
            useDebugValue: Zi,
            useDeferredValue: function (e) {
              var t = Ai();
              return null === yi
                ? (t.memoizedState = e)
                : Gi(t, yi.memoizedState, e);
            },
            useTransition: function () {
              return [Oi(Ri)[0], Ai().memoizedState];
            },
            useMutableSource: Ii,
            useSyncExternalStore: Ni,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += Q(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Pa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Yu || ((Yu = !0), (Ku = r)), dl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Pa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === Vu ? (Vu = new Set([this])) : Vu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function yl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
        }
        function vl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gl(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Pa(-1, 1)).tag = 2), za(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bl = k.ReactCurrentOwner,
          kl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? Ga(t, null, n, r) : Xa(t, e.child, n, r);
        }
        function Sl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Ca(t, o),
            (r = xi(e, t, n, r, a, o)),
            (n = Ci()),
            null === e || kl
              ? (aa && n && ta(t), (t.flags |= 1), wl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Yl(e, t, o))
          );
        }
        function El(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Ns(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ps(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), xl(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(i, r) &&
              e.ref === t.ref
            )
              return Yl(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Ms(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function xl(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (ur(a, r) && e.ref === t.ref) {
              if (((kl = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), Yl(e, t, o);
              0 !== (131072 & e.flags) && (kl = !0);
            }
          }
          return Al(e, t, n, r, o);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ao(Mu, Nu),
                (Nu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ao(Mu, Nu),
                  (Nu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Ao(Mu, Nu),
                (Nu |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ao(Mu, Nu),
              (Nu |= r);
          return wl(e, t, o, n), t.child;
        }
        function _l(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Al(e, t, n, r, o) {
          var a = Mo(n) ? Io : To.current;
          return (
            (a = No(t, a)),
            Ca(t, o),
            (n = xi(e, t, n, r, a, o)),
            (r = Ci()),
            null === e || kl
              ? (aa && r && ta(t), (t.flags |= 1), wl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Yl(e, t, o))
          );
        }
        function Rl(e, t, n, r, o) {
          if (Mo(n)) {
            var a = !0;
            jo(t);
          } else a = !1;
          if ((Ca(t, o), null === t.stateNode))
            Jl(e, t), Ya(t, n, r), Va(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = _a(s))
              : (s = No(t, (s = Mo(n) ? Io : To.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== s) && Ka(t, i, r, s)),
              (Ia = !1);
            var d = t.memoizedState;
            (i.state = d),
              Ba(t, r, i, o),
              (u = t.memoizedState),
              l !== r || d !== u || Oo.current || Ia
                ? ("function" === typeof c &&
                    (Qa(t, n, c, r), (u = t.memoizedState)),
                  (l = Ia || Ja(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Ma(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : va(t.type, l)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = _a(u))
                : (u = No(t, (u = Mo(n) ? Io : To.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && Ka(t, i, r, u)),
              (Ia = !1),
              (d = t.memoizedState),
              (i.state = d),
              Ba(t, r, i, o);
            var h = t.memoizedState;
            l !== f || d !== h || Oo.current || Ia
              ? ("function" === typeof p &&
                  (Qa(t, n, p, r), (h = t.memoizedState)),
                (s = Ia || Ja(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, u),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = u),
                (r = s))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Tl(e, t, n, r, a, o);
        }
        function Tl(e, t, n, r, o, a) {
          _l(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && Bo(t, n, !1), Yl(e, t, a);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xa(t, e.child, null, a)),
                (t.child = Xa(t, null, l, a)))
              : wl(e, t, l, a),
            (t.memoizedState = r.state),
            o && Bo(t, n, !0),
            t.child
          );
        }
        function Ol(e) {
          var t = e.stateNode;
          t.pendingContext
            ? zo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && zo(0, t.context, !1),
            oi(e, t.containerInfo);
        }
        function Il(e, t, n, r, o) {
          return ha(), ma(o), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Nl,
          Ml,
          Pl,
          zl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ll(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function jl(e, t, n) {
          var r,
            o = t.pendingProps,
            i = ui.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ao(ui, 1 & i),
            null === e)
          )
            return (
              ca(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = Ls(u, o, 0, null)),
                      (e = zs(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Ll(n)),
                      (t.memoizedState = zl),
                      e)
                    : Bl(t, u))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fl(e, t, l, (r = fl(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (o = t.mode),
                    (r = Ls(
                      { mode: "visible", children: r.children },
                      o,
                      0,
                      null
                    )),
                    ((i = zs(i, o, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xa(t, e.child, null, l),
                    (t.child.memoizedState = Ll(l)),
                    (t.memoizedState = zl),
                    i);
              if (0 === (1 & t.mode)) return Fl(e, t, l, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Fl(e, t, l, (r = fl((i = Error(a(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (l & e.childLanes)), kl || u)) {
                if (null !== (r = Tu)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), Oa(e, o), ns(r, e, o, -1));
                }
                return ms(), Fl(e, t, l, (r = fl(Error(a(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = As.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = so(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Wo[Zo++] = Xo),
                    (Wo[Zo++] = Go),
                    (Wo[Zo++] = Ho),
                    (Xo = e.id),
                    (Go = e.overflow),
                    (Ho = t)),
                  ((t = Bl(t, r.children)).flags |= 4096),
                  t);
            })(e, t, u, o, r, i, n);
          if (l) {
            (l = o.fallback), (u = t.mode), (r = (i = e.child).sibling);
            var s = { mode: "hidden", children: o.children };
            return (
              0 === (1 & u) && t.child !== i
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = s),
                  (t.deletions = null))
                : ((o = Ms(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Ms(r, l))
                : ((l = zs(l, u, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Ll(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = zl),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = Ms(l, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Bl(e, t) {
          return (
            ((t = Ls(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fl(e, t, n, r) {
          return (
            null !== r && ma(r),
            Xa(t, e.child, null, n),
            ((e = Bl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Dl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), xa(e.return, t, n);
        }
        function Ql(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Ul(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = ui.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Dl(e, n, t);
                else if (19 === e.tag) Dl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ao(ui, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Ql(t, !1, o, n, a);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === si(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Ql(t, !0, n, null, a);
                break;
              case "together":
                Ql(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Jl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Yl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Lu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Ms((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ms(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Kl(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Vl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function ql(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Vl(t), null;
            case 1:
            case 17:
              return Mo(t.type) && Po(), Vl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                _o(Oo),
                _o(To),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (da(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ia && (is(ia), (ia = null)))),
                Vl(t),
                null
              );
            case 5:
              li(t);
              var o = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ml(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Vl(t), null;
                }
                if (((e = ri(ei.current)), da(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[po] = t), (r[ho] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < zr.length; o++) Fr(zr[o], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      H(r, i), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      oe(r, i), Fr("invalid", r);
                  }
                  for (var u in (ge(n, i), (o = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Gr(r.textContent, s, e),
                            (o = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Gr(r.textContent, s, e),
                            (o = ["children", "" + s]))
                        : l.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      V(r), $(r, i, !0);
                      break;
                    case "textarea":
                      V(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = $r);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Nl(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < zr.length; o++) Fr(zr[o], e);
                        o = r;
                        break;
                      case "source":
                        Fr("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (o = r);
                        break;
                      case "details":
                        Fr("toggle", e), (o = r);
                        break;
                      case "input":
                        H(e, r), (o = Z(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = j({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Fr("invalid", e);
                    }
                    for (i in (ge(n, o), (s = o)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        "style" === i
                          ? ye(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Fr("scroll", e)
                              : null != c && b(e, i, c, u));
                      }
                    switch (n) {
                      case "input":
                        V(e), $(e, r, !1);
                        break;
                      case "textarea":
                        V(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + Y(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Vl(t), null;
            case 6:
              if (e && null != t.stateNode) Pl(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = ri(ni.current)), ri(ei.current), da(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[po] = t),
                    (t.stateNode = r);
              }
              return Vl(t), null;
            case 13:
              if (
                (_o(ui),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  aa &&
                  null !== oa &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pa(), ha(), (t.flags |= 98560), (i = !1);
                else if (((i = da(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[po] = t;
                  } else
                    ha(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Vl(t), (i = !1);
                } else null !== ia && (is(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ui.current)
                        ? 0 === Pu && (Pu = 3)
                        : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Vl(t),
                  null);
            case 4:
              return (
                ai(), null === e && Ur(t.stateNode.containerInfo), Vl(t), null
              );
            case 10:
              return Ea(t.type._context), Vl(t), null;
            case 19:
              if ((_o(ui), null === (i = t.memoizedState))) return Vl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
                if (r) Kl(i, !1);
                else {
                  if (0 !== Pu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = si(e))) {
                        for (
                          t.flags |= 128,
                            Kl(i, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ao(ui, (1 & ui.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Uu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Kl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Kl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !u.alternate &&
                        !aa)
                    )
                      return Vl(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Uu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Kl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u),
                    (i.last = u));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ui.current),
                  Ao(ui, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Vl(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Nu) &&
                    (Vl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Vl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Wl(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                Mo(t.type) && Po(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                _o(Oo),
                _o(To),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (_o(ui),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return _o(ui), null;
            case 4:
              return ai(), null;
            case 10:
              return Ea(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Nl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ml = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ri(ei.current);
              var a,
                i = null;
              switch (n) {
                case "input":
                  (o = Z(e, o)), (r = Z(e, r)), (i = []);
                  break;
                case "select":
                  (o = j({}, o, { value: void 0 })),
                    (r = j({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (ge(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                    var u = o[c];
                    for (a in u)
                      u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (a in u)
                        !u.hasOwnProperty(a) ||
                          (s && s.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in s)
                        s.hasOwnProperty(a) &&
                          u[a] !== s[a] &&
                          (n || (n = {}), (n[a] = s[a]));
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (i = i || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (i = i || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Fr("scroll", e),
                            i || u === s || (i = []))
                          : (i = i || []).push(c, s));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Pl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Zl = !1,
          Hl = !1,
          Xl = "function" === typeof WeakSet ? WeakSet : Set,
          Gl = null;
        function $l(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                xs(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            xs(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && eu(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function au(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), au(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[ho],
              delete t[yo],
              delete t[vo],
              delete t[go]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function lu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var cu = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Hl || $l(n, t);
            case 6:
              var r = cu,
                o = fu;
              (cu = null),
                du(e, t, n),
                (fu = o),
                null !== (cu = r) &&
                  (fu
                    ? ((e = cu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cu.removeChild(n.stateNode));
              break;
            case 18:
              null !== cu &&
                (fu
                  ? ((e = cu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? uo(e.parentNode, n)
                      : 1 === e.nodeType && uo(e, n),
                    Ut(e))
                  : uo(cu, n.stateNode));
              break;
            case 4:
              (r = cu),
                (o = fu),
                (cu = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (cu = r),
                (fu = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Hl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      eu(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (
                !Hl &&
                ($l(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  xs(n, t, l);
                }
              du(e, t, n);
              break;
            case 21:
              du(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Hl = (r = Hl) || null !== n.memoizedState),
                  du(e, t, n),
                  (Hl = r))
                : du(e, t, n);
              break;
            default:
              du(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xl()),
              t.forEach(function (t) {
                var r = Rs.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(a(160));
                pu(i, l, o), (cu = null), (fu = !1);
                var s = o.alternate;
                null !== s && (s.return = null), (o.return = null);
              } catch (c) {
                xs(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
        }
        function yu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(t, e), vu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (y) {
                  xs(e, e.return, y);
                }
                try {
                  nu(5, e, e.return);
                } catch (y) {
                  xs(e, e.return, y);
                }
              }
              break;
            case 1:
              mu(t, e), vu(e), 512 & r && null !== n && $l(n, n.return);
              break;
            case 5:
              if (
                (mu(t, e),
                vu(e),
                512 & r && null !== n && $l(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  de(o, "");
                } catch (y) {
                  xs(e, e.return, y);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(o, i),
                      be(u, l);
                    var c = be(u, i);
                    for (l = 0; l < s.length; l += 2) {
                      var f = s[l],
                        d = s[l + 1];
                      "style" === f
                        ? ye(o, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(o, d)
                        : "children" === f
                        ? de(o, d)
                        : b(o, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        G(o, i);
                        break;
                      case "textarea":
                        ae(o, i);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[ho] = i;
                  } catch (y) {
                    xs(e, e.return, y);
                  }
              }
              break;
            case 6:
              if ((mu(t, e), vu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (y) {
                  xs(e, e.return, y);
                }
              }
              break;
            case 3:
              if (
                (mu(t, e),
                vu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (y) {
                  xs(e, e.return, y);
                }
              break;
            case 4:
            default:
              mu(t, e), vu(e);
              break;
            case 13:
              mu(t, e),
                vu(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Qu = Xe())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Hl = (c = Hl) || f), mu(t, e), (Hl = c))
                  : mu(t, e),
                vu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Gl = e, f = e.child; null !== f; ) {
                    for (d = Gl = f; null !== Gl; ) {
                      switch (((h = (p = Gl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          $l(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (y) {
                              xs(r, n, y);
                            }
                          }
                          break;
                        case 5:
                          $l(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            wu(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Gl = h)) : wu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (o = d.stateNode),
                          c
                            ? "function" === typeof (i = o.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((u = d.stateNode),
                              (l =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", l)));
                      } catch (y) {
                        xs(e, e.return, y);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (y) {
                        xs(e, e.return, y);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(t, e), vu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function vu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (iu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (de(o, ""), (r.flags &= -33)),
                    su(e, lu(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  uu(e, lu(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              xs(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gu(e, t, n) {
          (Gl = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Gl; ) {
            var o = Gl,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Zl;
              if (!i) {
                var l = o.alternate,
                  u = (null !== l && null !== l.memoizedState) || Hl;
                l = Zl;
                var s = Hl;
                if (((Zl = i), (Hl = u) && !s))
                  for (Gl = o; null !== Gl; )
                    (u = (i = Gl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Su(o)
                        : null !== u
                        ? ((u.return = i), (Gl = u))
                        : Su(o);
                for (; null !== a; ) (Gl = a), bu(a, t, n), (a = a.sibling);
                (Gl = o), (Zl = l), (Hl = s);
              }
              ku(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), (Gl = a))
                : ku(e);
          }
        }
        function ku(e) {
          for (; null !== Gl; ) {
            var t = Gl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hl || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Hl)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : va(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Fa(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Fa(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ut(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Hl || (512 & t.flags && ou(t));
              } catch (p) {
                xs(t, t.return, p);
              }
            }
            if (t === e) {
              Gl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Gl = n);
              break;
            }
            Gl = t.return;
          }
        }
        function wu(e) {
          for (; null !== Gl; ) {
            var t = Gl;
            if (t === e) {
              Gl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Gl = n);
              break;
            }
            Gl = t.return;
          }
        }
        function Su(e) {
          for (; null !== Gl; ) {
            var t = Gl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    xs(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      xs(t, o, u);
                    }
                  }
                  var a = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    xs(t, a, u);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    xs(t, i, u);
                  }
              }
            } catch (u) {
              xs(t, t.return, u);
            }
            if (t === e) {
              Gl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Gl = l);
              break;
            }
            Gl = t.return;
          }
        }
        var Eu,
          xu = Math.ceil,
          Cu = k.ReactCurrentDispatcher,
          _u = k.ReactCurrentOwner,
          Au = k.ReactCurrentBatchConfig,
          Ru = 0,
          Tu = null,
          Ou = null,
          Iu = 0,
          Nu = 0,
          Mu = Co(0),
          Pu = 0,
          zu = null,
          Lu = 0,
          ju = 0,
          Bu = 0,
          Fu = null,
          Du = null,
          Qu = 0,
          Uu = 1 / 0,
          Ju = null,
          Yu = !1,
          Ku = null,
          Vu = null,
          qu = !1,
          Wu = null,
          Zu = 0,
          Hu = 0,
          Xu = null,
          Gu = -1,
          $u = 0;
        function es() {
          return 0 !== (6 & Ru) ? Xe() : -1 !== Gu ? Gu : (Gu = Xe());
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ru) && 0 !== Iu
            ? Iu & -Iu
            : null !== ya.transition
            ? (0 === $u && ($u = mt()), $u)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Ht(e.type));
        }
        function ns(e, t, n, r) {
          if (50 < Hu) throw ((Hu = 0), (Xu = null), Error(a(185)));
          vt(e, n, r),
            (0 !== (2 & Ru) && e === Tu) ||
              (e === Tu && (0 === (2 & Ru) && (ju |= n), 4 === Pu && ls(e, Iu)),
              rs(e, r),
              1 === n &&
                0 === Ru &&
                0 === (1 & t.mode) &&
                ((Uu = Xe() + 500), Do && Jo()));
        }
        function rs(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                l = 1 << i,
                u = o[i];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (o[i] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Tu ? Iu : 0);
          if (0 === r)
            null !== n && We(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && We(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Do = !0), Uo(e);
                  })(us.bind(null, e))
                : Uo(us.bind(null, e)),
                io(function () {
                  0 === (6 & Ru) && Jo();
                }),
                (n = null);
            else {
              switch (kt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ts(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Gu = -1), ($u = 0), 0 !== (6 & Ru))) throw Error(a(327));
          var n = e.callbackNode;
          if (Ss() && e.callbackNode !== n) return null;
          var r = dt(e, e === Tu ? Iu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var o = Ru;
            Ru |= 2;
            var i = hs();
            for (
              (Tu === e && Iu === t) ||
              ((Ju = null), (Uu = Xe() + 500), ds(e, t));
              ;

            )
              try {
                gs();
                break;
              } catch (u) {
                ps(e, u);
              }
            Sa(),
              (Cu.current = i),
              (Ru = o),
              null !== Ou ? (t = 0) : ((Tu = null), (Iu = 0), (t = Pu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = as(e, o))),
              1 === t)
            )
              throw ((n = zu), ds(e, 0), ls(e, r), rs(e, Xe()), n);
            if (6 === t) ls(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!lr(a(), o)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = ys(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = as(e, i))),
                  1 === t))
              )
                throw ((n = zu), ds(e, 0), ls(e, r), rs(e, Xe()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  ws(e, Du, Ju);
                  break;
                case 3:
                  if (
                    (ls(e, r),
                    (130023424 & r) === r && 10 < (t = Qu + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(ws.bind(null, e, Du, Ju), t);
                    break;
                  }
                  ws(e, Du, Ju);
                  break;
                case 4:
                  if ((ls(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * xu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(ws.bind(null, e, Du, Ju), r);
                    break;
                  }
                  ws(e, Du, Ju);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return rs(e, Xe()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function as(e, t) {
          var n = Fu;
          return (
            e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256),
            2 !== (e = ys(e, t)) && ((t = Du), (Du = n), null !== t && is(t)),
            e
          );
        }
        function is(e) {
          null === Du ? (Du = e) : Du.push.apply(Du, e);
        }
        function ls(e, t) {
          for (
            t &= ~Bu,
              t &= ~ju,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function us(e) {
          if (0 !== (6 & Ru)) throw Error(a(327));
          Ss();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rs(e, Xe()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = as(e, r)));
          }
          if (1 === n) throw ((n = zu), ds(e, 0), ls(e, t), rs(e, Xe()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ws(e, Du, Ju),
            rs(e, Xe()),
            null
          );
        }
        function ss(e, t) {
          var n = Ru;
          Ru |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ru = n) && ((Uu = Xe() + 500), Do && Jo());
          }
        }
        function cs(e) {
          null !== Wu && 0 === Wu.tag && 0 === (6 & Ru) && Ss();
          var t = Ru;
          Ru |= 1;
          var n = Au.transition,
            r = bt;
          try {
            if (((Au.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Au.transition = n), 0 === (6 & (Ru = t)) && Jo();
          }
        }
        function fs() {
          (Nu = Mu.current), _o(Mu);
        }
        function ds(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Ou))
            for (n = Ou.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Po();
                  break;
                case 3:
                  ai(), _o(Oo), _o(To), fi();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  _o(ui);
                  break;
                case 10:
                  Ea(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Tu = e),
            (Ou = e = Ms(e.current, null)),
            (Iu = Nu = t),
            (Pu = 0),
            (zu = null),
            (Bu = ju = Lu = 0),
            (Du = Fu = null),
            null !== Aa)
          ) {
            for (t = 0; t < Aa.length; t++)
              if (null !== (r = (n = Aa[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            Aa = null;
          }
          return e;
        }
        function ps(e, t) {
          for (;;) {
            var n = Ou;
            try {
              if ((Sa(), (di.current = il), gi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((hi = 0),
                (vi = yi = mi = null),
                (bi = !1),
                (ki = 0),
                (_u.current = null),
                null === n || null === n.return)
              ) {
                (Pu = 1), (zu = t), (Ou = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Iu),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = vl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      gl(h, l, u, 0, t),
                      1 & h.mode && yl(i, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var y = new Set();
                      y.add(s), (t.updateQueue = y);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    yl(i, c, t), ms();
                    break e;
                  }
                  s = Error(a(426));
                } else if (aa && 1 & u.mode) {
                  var v = vl(l);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      gl(v, l, u, 0, t),
                      ma(cl(s, u));
                    break e;
                  }
                }
                (i = s = cl(s, u)),
                  4 !== Pu && (Pu = 2),
                  null === Fu ? (Fu = [i]) : Fu.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        ja(i, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var g = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Vu || !Vu.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          ja(i, ml(i, u, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              ks(n);
            } catch (k) {
              (t = k), Ou === n && null !== n && (Ou = n = n.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Cu.current;
          return (Cu.current = il), null === e ? il : e;
        }
        function ms() {
          (0 !== Pu && 3 !== Pu && 2 !== Pu) || (Pu = 4),
            null === Tu ||
              (0 === (268435455 & Lu) && 0 === (268435455 & ju)) ||
              ls(Tu, Iu);
        }
        function ys(e, t) {
          var n = Ru;
          Ru |= 2;
          var r = hs();
          for ((Tu === e && Iu === t) || ((Ju = null), ds(e, t)); ; )
            try {
              vs();
              break;
            } catch (o) {
              ps(e, o);
            }
          if ((Sa(), (Ru = n), (Cu.current = r), null !== Ou))
            throw Error(a(261));
          return (Tu = null), (Iu = 0), Pu;
        }
        function vs() {
          for (; null !== Ou; ) bs(Ou);
        }
        function gs() {
          for (; null !== Ou && !Ze(); ) bs(Ou);
        }
        function bs(e) {
          var t = Eu(e.alternate, e, Nu);
          (e.memoizedProps = e.pendingProps),
            null === t ? ks(e) : (Ou = t),
            (_u.current = null);
        }
        function ks(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = ql(n, t, Nu))) return void (Ou = n);
            } else {
              if (null !== (n = Wl(n, t)))
                return (n.flags &= 32767), void (Ou = n);
              if (null === e) return (Pu = 6), void (Ou = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ou = t);
            Ou = t = e;
          } while (null !== t);
          0 === Pu && (Pu = 5);
        }
        function ws(e, t, n) {
          var r = bt,
            o = Au.transition;
          try {
            (Au.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ss();
                } while (null !== Wu);
                if (0 !== (6 & Ru)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === Tu && ((Ou = Tu = null), (Iu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Ts(tt, function () {
                      return Ss(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Au.transition), (Au.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = Ru;
                  (Ru |= 4),
                    (_u.current = null),
                    (function (e, t) {
                      if (((eo = Yt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== o && 3 !== d.nodeType) ||
                                    (u = l + o),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === o && (u = l),
                                    p === i && ++f === r && (s = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Yt = !1,
                          Gl = t;
                        null !== Gl;

                      )
                        if (
                          ((e = (t = Gl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Gl = e);
                        else
                          for (; null !== Gl; ) {
                            t = Gl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var y = m.memoizedProps,
                                        v = m.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? y
                                            : va(t.type, y),
                                          v
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var k = t.stateNode.containerInfo;
                                    1 === k.nodeType
                                      ? (k.textContent = "")
                                      : 9 === k.nodeType &&
                                        k.documentElement &&
                                        k.removeChild(k.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              xs(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Gl = e);
                              break;
                            }
                            Gl = t.return;
                          }
                      (m = tu), (tu = !1);
                    })(e, n),
                    yu(n, e),
                    hr(to),
                    (Yt = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    gu(n, e, o),
                    He(),
                    (Ru = u),
                    (bt = l),
                    (Au.transition = i);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Wu = e), (Zu = o)),
                  0 === (i = e.pendingLanes) && (Vu = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rs(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((o = t[n]).value, {
                      componentStack: o.stack,
                      digest: o.digest,
                    });
                if (Yu) throw ((Yu = !1), (e = Ku), (Ku = null), e);
                0 !== (1 & Zu) && 0 !== e.tag && Ss(),
                  0 !== (1 & (i = e.pendingLanes))
                    ? e === Xu
                      ? Hu++
                      : ((Hu = 0), (Xu = e))
                    : (Hu = 0),
                  Jo();
              })(e, t, n, r);
          } finally {
            (Au.transition = o), (bt = r);
          }
          return null;
        }
        function Ss() {
          if (null !== Wu) {
            var e = kt(Zu),
              t = Au.transition,
              n = bt;
            try {
              if (((Au.transition = null), (bt = 16 > e ? 16 : e), null === Wu))
                var r = !1;
              else {
                if (((e = Wu), (Wu = null), (Zu = 0), 0 !== (6 & Ru)))
                  throw Error(a(331));
                var o = Ru;
                for (Ru |= 4, Gl = e.current; null !== Gl; ) {
                  var i = Gl,
                    l = i.child;
                  if (0 !== (16 & Gl.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Gl = c; null !== Gl; ) {
                          var f = Gl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Gl = d);
                          else
                            for (; null !== Gl; ) {
                              var p = (f = Gl).sibling,
                                h = f.return;
                              if ((au(f), f === c)) {
                                Gl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Gl = p);
                                break;
                              }
                              Gl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var y = m.child;
                        if (null !== y) {
                          m.child = null;
                          do {
                            var v = y.sibling;
                            (y.sibling = null), (y = v);
                          } while (null !== y);
                        }
                      }
                      Gl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Gl = l);
                  else
                    e: for (; null !== Gl; ) {
                      if (0 !== (2048 & (i = Gl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, i, i.return);
                        }
                      var g = i.sibling;
                      if (null !== g) {
                        (g.return = i.return), (Gl = g);
                        break e;
                      }
                      Gl = i.return;
                    }
                }
                var b = e.current;
                for (Gl = b; null !== Gl; ) {
                  var k = (l = Gl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== k)
                    (k.return = l), (Gl = k);
                  else
                    e: for (l = b; null !== Gl; ) {
                      if (0 !== (2048 & (u = Gl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (S) {
                          xs(u, u.return, S);
                        }
                      if (u === l) {
                        Gl = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Gl = w);
                        break e;
                      }
                      Gl = u.return;
                    }
                }
                if (
                  ((Ru = o),
                  Jo(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Au.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = za(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = es()),
            null !== e && (vt(e, 1, t), rs(e, t));
        }
        function xs(e, t, n) {
          if (3 === e.tag) Es(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Es(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Vu || !Vu.has(r)))
                ) {
                  (t = za(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = es()),
                    null !== t && (vt(t, 1, e), rs(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = es()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Tu === e &&
              (Iu & n) === n &&
              (4 === Pu ||
              (3 === Pu && (130023424 & Iu) === Iu && 500 > Xe() - Qu)
                ? ds(e, 0)
                : (Bu |= n)),
            rs(e, t);
        }
        function _s(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = es();
          null !== (e = Oa(e, t)) && (vt(e, t, n), rs(e, n));
        }
        function As(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), _s(e, n);
        }
        function Rs(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), _s(e, n);
        }
        function Ts(e, t) {
          return qe(e, t);
        }
        function Os(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Is(e, t, n, r) {
          return new Os(e, t, n, r);
        }
        function Ns(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ms(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Is(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ps(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Ns(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case E:
                return zs(n.children, o, i, t);
              case x:
                (l = 8), (o |= 8);
                break;
              case C:
                return (
                  ((e = Is(12, n, t, 2 | o)).elementType = C), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = Is(13, n, t, o)).elementType = T), (e.lanes = i), e
                );
              case O:
                return (
                  ((e = Is(19, n, t, o)).elementType = O), (e.lanes = i), e
                );
              case M:
                return Ls(n, o, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case _:
                      l = 10;
                      break e;
                    case A:
                      l = 9;
                      break e;
                    case R:
                      l = 11;
                      break e;
                    case I:
                      l = 14;
                      break e;
                    case N:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Is(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function zs(e, t, n, r) {
          return ((e = Is(7, e, r, t)).lanes = n), e;
        }
        function Ls(e, t, n, r) {
          return (
            ((e = Is(22, e, r, t)).elementType = M),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function js(e, t, n) {
          return ((e = Is(6, e, null, t)).lanes = n), e;
        }
        function Bs(e, t, n) {
          return (
            ((t = Is(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fs(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = yt(0)),
            (this.expirationTimes = yt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = yt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ds(e, t, n, r, o, a, i, l, u) {
          return (
            (e = new Fs(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Is(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Na(a),
            e
          );
        }
        function Qs(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: S,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Us(e) {
          if (!e) return Ro;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Mo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Mo(n)) return Lo(e, n, t);
          }
          return t;
        }
        function Js(e, t, n, r, o, a, i, l, u) {
          return (
            ((e = Ds(n, r, !0, e, 0, a, 0, l, u)).context = Us(null)),
            (n = e.current),
            ((a = Pa((r = es()), (o = ts(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            za(n, a, o),
            (e.current.lanes = o),
            vt(e, o, r),
            rs(e, r),
            e
          );
        }
        function Ys(e, t, n, r) {
          var o = t.current,
            a = es(),
            i = ts(o);
          return (
            (n = Us(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Pa(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = za(o, t, i)) && (ns(e, o, i, a), La(e, o, i)),
            i
          );
        }
        function Ks(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Vs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qs(e, t) {
          Vs(e, t), (e = e.alternate) && Vs(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oo.current) kl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (kl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ol(t), ha();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Mo(t.type) && jo(t);
                        break;
                      case 4:
                        oi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        Ao(ga, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ao(ui, 1 & ui.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? jl(e, t, n)
                            : (Ao(ui, 1 & ui.current),
                              null !== (e = Yl(e, t, n)) ? e.sibling : null);
                        Ao(ui, 1 & ui.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Ul(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          Ao(ui, ui.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Yl(e, t, n);
                  })(e, t, n)
                );
              kl = 0 !== (131072 & e.flags);
            }
          else (kl = !1), aa && 0 !== (1048576 & t.flags) && ea(t, qo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Jl(e, t), (e = t.pendingProps);
              var o = No(t, To.current);
              Ca(t, n), (o = xi(null, t, r, e, o, n));
              var i = Ci();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Mo(r) ? ((i = !0), jo(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    Na(t),
                    (o.updater = Ua),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    Va(t, r, e, n),
                    (t = Tl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    aa && i && ta(t),
                    wl(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Jl(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ns(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === R) return 11;
                        if (e === I) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = va(r, e)),
                  o)
                ) {
                  case 0:
                    t = Al(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Rl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Sl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = El(null, t, r, va(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Al(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Rl(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 3:
              e: {
                if ((Ol(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  Ma(e, t),
                  Ba(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Il(e, t, r, n, (o = cl(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Il(e, t, r, n, (o = cl(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = so(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = Ga(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === o)) {
                    t = Yl(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && ca(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                no(r, o)
                  ? (l = null)
                  : null !== i && no(r, i) && (t.flags |= 32),
                _l(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ca(t), null;
            case 13:
              return jl(e, t, n);
            case 4:
              return (
                oi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xa(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Sl(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  Ao(ga, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === o.children && !Oo.current) {
                      t = Yl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        l = i.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = Pa(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              xa(i.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          xa(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                wl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ca(t, n),
                (r = r((o = _a(o)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = va((r = t.type), t.pendingProps)),
                El(e, t, r, (o = va(r.type, o)), n)
              );
            case 15:
              return xl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : va(r, o)),
                Jl(e, t),
                (t.tag = 1),
                Mo(r) ? ((e = !0), jo(t)) : (e = !1),
                Ca(t, n),
                Ya(t, r, o),
                Va(t, r, o, n),
                Tl(null, t, r, !0, e, n)
              );
            case 19:
              return Ul(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Ws =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Zs(e) {
          this._internalRoot = e;
        }
        function Hs(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Gs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $s() {}
        function ec(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" === typeof o) {
              var l = o;
              o = function () {
                var e = Ks(i);
                l.call(e);
              };
            }
            Ys(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Ks(i);
                    a.call(e);
                  };
                }
                var i = Js(t, r, e, 0, null, !1, 0, "", $s);
                return (
                  (e._reactRootContainer = i),
                  (e[mo] = i.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Ks(u);
                  l.call(e);
                };
              }
              var u = Ds(e, 0, !1, null, 0, !1, 0, "", $s);
              return (
                (e._reactRootContainer = u),
                (e[mo] = u.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Ys(t, u, n, r);
                }),
                u
              );
            })(n, t, e, o, r);
          return Ks(i);
        }
        (Hs.prototype.render = Zs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Ys(e, t, null, null);
          }),
          (Hs.prototype.unmount = Zs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cs(function () {
                  Ys(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Hs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Mt.length && 0 !== t && t < Mt[n].priority;
                n++
              );
              Mt.splice(n, 0, e), 0 === n && jt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    rs(t, Xe()),
                    0 === (6 & Ru) && ((Uu = Xe() + 500), Jo()));
                }
                break;
              case 13:
                cs(function () {
                  var t = Oa(e, 1);
                  if (null !== t) {
                    var n = es();
                    ns(t, e, 1, n);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Oa(e, 134217728);
              if (null !== t) ns(t, e, 134217728, es());
              qs(e, 134217728);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = ts(e),
                n = Oa(e, t);
              if (null !== n) ns(n, e, t, es());
              qs(e, t);
            }
          }),
          (xt = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((G(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = So(r);
                      if (!o) throw Error(a(90));
                      q(r), G(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Re = ss),
          (Te = cs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ko, wo, So, _e, Ae, ss],
          },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: k.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ke(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(rc)), (at = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xs(t)) throw Error(a(200));
            return Qs(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xs(e)) throw Error(a(299));
            var n = !1,
              r = "",
              o = Ws;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Ds(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Zs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = Ke(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Gs(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xs(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = "",
              l = Ws;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Js(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
              (e[mo] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Hs(t);
          }),
          (t.render = function (e, t, n) {
            if (!Gs(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Gs(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Gs(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      1250: function (e, t, n) {
        "use strict";
        var r = n(4164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      4164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4463));
      },
      6374: function (e, t, n) {
        "use strict";
        var r = n(2791),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            a = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: s,
            ref: c,
            props: a,
            _owner: l.current,
          };
        }
        (t.Fragment = a), (t.jsx = s), (t.jsxs = s);
      },
      9117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          y = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = v.prototype);
        var k = (b.prototype = new g());
        (k.constructor = b), m(k, v.prototype), (k.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          E = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              S.call(t, o) && !x.hasOwnProperty(o) && (a[o] = t[o]);
          var u = arguments.length - 2;
          if (1 === u) a.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (o in (u = e.defaultProps)) void 0 === a[o] && (a[o] = u[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: E.current,
          };
        }
        function _(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var A = /\/+/g;
        function R(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, t, o, a, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === a ? "." + R(u, 0) : a),
              w(i)
                ? ((o = ""),
                  null != e && (o = e.replace(A, "$&/") + "/"),
                  T(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (_(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(A, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (a = "" === a ? "." : a + ":"), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = a + R((l = e[s]), s);
              u += T(l, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += T((l = l.value), t, o, (c = a + R(l, s++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function I(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N = { current: null },
          M = { transition: null },
          P = {
            ReactCurrentDispatcher: N,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: E,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = E.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                S.call(t, s) &&
                  !x.hasOwnProperty(s) &&
                  (o[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) o.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              o.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = _),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: I,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return N.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return N.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return N.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return N.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return N.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return N.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return N.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return N.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return N.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return N.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return N.current.useRef(e);
          }),
          (t.useState = function (e) {
            return N.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return N.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return N.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      2791: function (e, t, n) {
        "use strict";
        e.exports = n(9117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(6374);
      },
      6813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > a(u, n))
                s < o && 0 > a(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(s < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          y = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function k(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((y = !1), k(e), !m))
            if (null !== r(s)) (m = !0), M(S);
            else {
              var t = r(c);
              null !== t && P(w, t.startTime - e);
            }
        }
        function S(e, n) {
          (m = !1), y && ((y = !1), g(_), (_ = -1)), (h = !0);
          var a = p;
          try {
            for (
              k(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !T()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(s) && o(s),
                  k(n);
              } else o(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && P(w, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          x = !1,
          C = null,
          _ = -1,
          A = 5,
          R = -1;
        function T() {
          return !(t.unstable_now() - R < A);
        }
        function O() {
          if (null !== C) {
            var e = t.unstable_now();
            R = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? E() : ((x = !1), (C = null));
            }
          } else x = !1;
        }
        if ("function" === typeof b)
          E = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var I = new MessageChannel(),
            N = I.port2;
          (I.port1.onmessage = O),
            (E = function () {
              N.postMessage(null);
            });
        } else
          E = function () {
            v(O, 0);
          };
        function M(e) {
          (C = e), x || ((x = !0), E());
        }
        function P(e, n) {
          _ = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), M(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (A = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (y ? (g(_), (_ = -1)) : (y = !0), P(w, a - i)))
                : ((e.sortIndex = l), n(s, e), m || h || ((m = !0), M(S))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      5296: function (e, t, n) {
        "use strict";
        e.exports = n(6813);
      },
      3646: function (e, t, n) {
        var r = {
          "./10_of_clubs.png": 2758,
          "./10_of_diamonds.png": 9815,
          "./10_of_hearts.png": 8995,
          "./10_of_spades.png": 86,
          "./2_of_clubs.png": 9333,
          "./2_of_diamonds.png": 8450,
          "./2_of_hearts.png": 7920,
          "./2_of_spades.png": 5385,
          "./3_of_clubs.png": 6460,
          "./3_of_diamonds.png": 3452,
          "./3_of_hearts.png": 8098,
          "./3_of_spades.png": 1284,
          "./4_of_clubs.png": 1757,
          "./4_of_diamonds.png": 7832,
          "./4_of_hearts.png": 847,
          "./4_of_spades.png": 8745,
          "./5_of_clubs.png": 2451,
          "./5_of_diamonds.png": 5564,
          "./5_of_hearts.png": 1498,
          "./5_of_spades.png": 2188,
          "./6_of_clubs.png": 5517,
          "./6_of_diamonds.png": 2057,
          "./6_of_hearts.png": 3254,
          "./6_of_spades.png": 5923,
          "./7_of_clubs.png": 537,
          "./7_of_diamonds.png": 5102,
          "./7_of_hearts.png": 1745,
          "./7_of_spades.png": 153,
          "./8_of_clubs.png": 3815,
          "./8_of_diamonds.png": 7970,
          "./8_of_hearts.png": 2291,
          "./8_of_spades.png": 5160,
          "./9_of_clubs.png": 4361,
          "./9_of_diamonds.png": 142,
          "./9_of_hearts.png": 1899,
          "./9_of_spades.png": 6414,
          "./A_of_clubs.png": 4816,
          "./A_of_diamonds.png": 3662,
          "./A_of_hearts.png": 992,
          "./A_of_spades.png": 3455,
          "./J_of_clubs.png": 3158,
          "./J_of_diamonds.png": 4129,
          "./J_of_hearts.png": 5546,
          "./J_of_spades.png": 9475,
          "./K_of_clubs.png": 8685,
          "./K_of_diamonds.png": 7149,
          "./K_of_hearts.png": 3568,
          "./K_of_spades.png": 4805,
          "./Q_of_clubs.png": 1816,
          "./Q_of_diamonds.png": 9197,
          "./Q_of_hearts.png": 6887,
          "./Q_of_spades.png": 2497,
          "./back.png": 7630,
        };
        function o(e) {
          var t = a(e);
          return n(t);
        }
        function a(e) {
          if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return r[e];
        }
        (o.keys = function () {
          return Object.keys(r);
        }),
          (o.resolve = a),
          (e.exports = o),
          (o.id = 3646);
      },
      2758: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/10_of_clubs.85249d77cfbd31d41d4a.png";
      },
      9815: function (e, t, n) {
        "use strict";
        e.exports =
          n.p + "static/media/10_of_diamonds.46f9f284580698ac9ce3.png";
      },
      8995: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/10_of_hearts.2e90975c1e2b9a531452.png";
      },
      86: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/10_of_spades.e1b097c7c13eb1bcd373.png";
      },
      9333: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/2_of_clubs.cf07e6d3b7fbdb2f9d46.png";
      },
      8450: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/2_of_diamonds.8d44f621021e37ba020b.png";
      },
      7920: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/2_of_hearts.045c9b2bd4029a0a9ab8.png";
      },
      5385: function (e) {
        "use strict";
        e.exports =
          "data:image/png;base64,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";
      },
      6460: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/3_of_clubs.4ed3044a49ea2a081b77.png";
      },
      3452: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/3_of_diamonds.0ae7fd2d857460aeb9db.png";
      },
      8098: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/3_of_hearts.19f0f0568b06415ee003.png";
      },
      1284: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/3_of_spades.9ac0ff23009fe25ece9f.png";
      },
      1757: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/4_of_clubs.cf118819e8114207257c.png";
      },
      7832: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/4_of_diamonds.2732b707bac0c51be1cb.png";
      },
      847: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/4_of_hearts.641110a556515a96bd05.png";
      },
      8745: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/4_of_spades.6495851ac6f541155938.png";
      },
      2451: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/5_of_clubs.f5ad04ba10e74e30b6a0.png";
      },
      5564: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/5_of_diamonds.62a2045b7000fe3a667f.png";
      },
      1498: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/5_of_hearts.ea1e41f7caffba5d1216.png";
      },
      2188: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/5_of_spades.c506f17af5e25ccd2f76.png";
      },
      5517: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/6_of_clubs.b6a505768a5e91c3adb3.png";
      },
      2057: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/6_of_diamonds.363b74ccb2ddf8ec11de.png";
      },
      3254: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/6_of_hearts.6db3997b59d4270a9075.png";
      },
      5923: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/6_of_spades.0d2d7c5a41ac128ee131.png";
      },
      537: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/7_of_clubs.d9ac2a91ea641b30451f.png";
      },
      5102: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/7_of_diamonds.38b1f75f3a8035499033.png";
      },
      1745: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/7_of_hearts.4bf1e7186c98107e8ba5.png";
      },
      153: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/7_of_spades.ff189935ab9b0ae60b1e.png";
      },
      3815: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/8_of_clubs.cb4857143275dc9f3b34.png";
      },
      7970: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/8_of_diamonds.8e2acf668e1f8a4001d6.png";
      },
      2291: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/8_of_hearts.ad2484ff0ddec9eef220.png";
      },
      5160: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/8_of_spades.a0f2a70ca88183636eec.png";
      },
      4361: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/9_of_clubs.88b051a2d2c4e188412d.png";
      },
      142: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/9_of_diamonds.862b096c6f6091c24c49.png";
      },
      1899: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/9_of_hearts.93db76654e6e182261f8.png";
      },
      6414: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/9_of_spades.993e6a7cd2006e46f75d.png";
      },
      4816: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/A_of_clubs.5065f3937441984c5c4a.png";
      },
      3662: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/A_of_diamonds.eb8accae56b835d54aa0.png";
      },
      992: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/A_of_hearts.a8425136c4e017106abe.png";
      },
      3455: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/A_of_spades.7068c25feeee497bc2a7.png";
      },
      3158: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/J_of_clubs.0db0599c159bb676fd6a.png";
      },
      4129: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/J_of_diamonds.cb027d40d9b908644d63.png";
      },
      5546: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/J_of_hearts.ee04c614e164dc8c2ba1.png";
      },
      9475: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/J_of_spades.3bfb4a13a7e29c02c06c.png";
      },
      8685: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/K_of_clubs.d53bb67471fa288ecd0d.png";
      },
      7149: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/K_of_diamonds.b29f56f68d1fd2b7b84f.png";
      },
      3568: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/K_of_hearts.e25cb965380a7e9b3719.png";
      },
      4805: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/K_of_spades.e7002555fc8644b099e1.png";
      },
      1816: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/Q_of_clubs.9fb58dd5b5ea32cdda32.png";
      },
      9197: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/Q_of_diamonds.6f83c8c279da1664fac2.png";
      },
      6887: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/Q_of_hearts.063f7dc681590bcce7fd.png";
      },
      2497: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/Q_of_spades.2b716e8360baf2507fdc.png";
      },
      7630: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/back.784ad58114d4702d8aba.png";
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.d = function (e, t) {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          Decoder: function () {
            return mt;
          },
          Encoder: function () {
            return ht;
          },
          PacketType: function () {
            return dt;
          },
          protocol: function () {
            return pt;
          },
        });
      var t = n(2791),
        r = n(1250);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t) {
        if (e) {
          if ("string" === typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function s(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a = [],
                i = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (a.push(r.value), !t || a.length !== t);
                  i = !0
                );
              } catch (u) {
                (l = !0), (o = u);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (l) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          u(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var c = "Footer_footer__-Juh8",
        f = n(184),
        d = function () {
          return (0, f.jsxs)("footer", {
            className: c,
            children: [
              "Created By Hassan / Check on",
              " ",
              (0, f.jsx)("a", {
                target: "__blank",
                href: "https://github.com/hassanscript/blackjack",
                children: "Github",
              }),
            ],
          });
        },
        p = "Header_header__pH8o3",
        h = function () {
          return (0, f.jsx)("header", {
            className: p,
            children: (0, f.jsx)("h1", {
              children: "Welcome to BlackJack Online",
            }),
          });
        };
      function m(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = u(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          i = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (l = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (l) throw a;
            }
          },
        };
      }
      var y = Symbol(),
        v = function (e) {
          return !!e[y];
        },
        g = function (e) {
          var t, n;
          null == (n = (t = e[y]).c) || n.call(t);
        },
        b = function e(t, n) {
          var r = t[y].o,
            o = n[y].o;
          return r === o || t === o || (v(r) && e(r, n));
        },
        k = function (e) {
          var t = { o: e, c: null },
            n = new Promise(function (n) {
              (t.c = function () {
                (t.c = null), n();
              }),
                e.then(t.c, t.c);
            });
          return (n[y] = t), n;
        },
        w = function (e) {
          return "init" in e;
        },
        S = "r",
        E = "w",
        x = "c",
        C = "s",
        _ = function (e) {
          var t,
            n,
            r = new WeakMap(),
            a = new WeakMap(),
            l = new Map();
          if (((t = new Set()), (n = new Set()), e)) {
            var u,
              c = m(e);
            try {
              for (c.s(); !(u = c.n()).done; ) {
                var f = s(u.value, 2),
                  d = f[0],
                  p = { v: f[1], r: 0, d: new Map() };
                Object.freeze(p),
                  w(d) ||
                    console.warn(
                      "Found initial value for derived atom which can cause unexpected behavior",
                      d
                    ),
                  r.set(d, p);
              }
            } catch (Z) {
              c.e(Z);
            } finally {
              c.f();
            }
          }
          var h,
            _ = new WeakMap(),
            A = new WeakMap(),
            R = function (e) {
              var t = A.get(e);
              return t || ((t = new Map()), A.set(e, t)), t;
            },
            T = function e(t, n) {
              if (t) {
                var o = R(t),
                  a = o.get(n);
                return a || ((a = e(t.p, n)) && o.set(n, a)), a;
              }
              return r.get(n);
            },
            O = function (e, t, n) {
              if ((Object.freeze(n), e)) {
                R(e).set(t, n);
              } else {
                var o = r.get(t);
                r.set(t, n), l.has(t) || l.set(t, o);
              }
            },
            I = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : new Map(),
                n = arguments.length > 2 ? arguments[2] : void 0;
              if (!n) return t;
              var r = new Map(),
                o = !1;
              return (
                n.forEach(function (n) {
                  var a,
                    i = (null == (a = T(e, n)) ? void 0 : a.r) || 0;
                  r.set(n, i), t.get(n) !== i && (o = !0);
                }),
                t.size !== r.size || o ? r : t
              );
            },
            N = function (e, t, n, r, o) {
              var a = T(e, t);
              if (a) {
                if (o && (!("p" in a) || !b(a.p, o))) return a;
                "p" in a && g(a.p);
              }
              var i = {
                  v: n,
                  r: (null == a ? void 0 : a.r) || 0,
                  d: I(e, null == a ? void 0 : a.d, r),
                },
                l = !1;
              return (
                a && "v" in a && Object.is(a.v, n)
                  ? (!("i" in a) &&
                      (i.d === a.d ||
                        (i.d.size === a.d.size &&
                          Array.from(i.d.keys()).every(function (e) {
                            return a.d.has(e);
                          })))) ||
                    ((l = !0),
                    Promise.resolve().then(function () {
                      K(e);
                    }))
                  : ((l = !0),
                    ++i.r,
                    i.d.has(t) && (i.d = new Map(i.d).set(t, i.r))),
                a && !l ? a : (O(e, t, i), i)
              );
            },
            M = function (e, t, n, r, o) {
              var a = T(e, t);
              if (a) {
                if (o && (!("p" in a) || !b(a.p, o))) return a;
                "p" in a && g(a.p);
              }
              var i = {
                e: n,
                r: (null == a ? void 0 : a.r) || 0,
                d: I(e, null == a ? void 0 : a.d, r),
              };
              return O(e, t, i), i;
            },
            P = function (e, t, n, r) {
              var o = T(e, t);
              if (o && "p" in o) {
                if (b(o.p, n)) return o;
                g(o.p);
              }
              !(function (e, t, n) {
                var r = _.get(t);
                r || ((r = new Map()), _.set(t, r)),
                  n.then(function () {
                    r.get(e) === n && (r.delete(e), r.size || _.delete(t));
                  }),
                  r.set(e, n);
              })(e, t, n);
              var a = {
                p: n,
                r: (null == o ? void 0 : o.r) || 0,
                d: I(e, null == o ? void 0 : o.d, r),
              };
              return O(e, t, a), a;
            },
            z = function (e, t, n, r) {
              if (n instanceof Promise) {
                var o = k(
                  n
                    .then(function (n) {
                      N(e, t, n, r, o);
                    })
                    .catch(function (n) {
                      if (n instanceof Promise)
                        return v(n)
                          ? n.then(function () {
                              L(e, t, !0);
                            })
                          : n;
                      M(e, t, n, r, o);
                    })
                );
                return P(e, t, o, r);
              }
              return N(e, t, n, r);
            },
            L = function e(t, n, r) {
              if (!r) {
                var o = T(t, n);
                if (o) {
                  if (
                    o.r !== o.i &&
                    "p" in o &&
                    !(function (e) {
                      return !e[y].c;
                    })(o.p)
                  )
                    return o;
                  if (
                    (o.d.forEach(function (r, o) {
                      if (o !== n)
                        if (a.has(o)) {
                          var i = T(t, o);
                          i && i.r === i.i && e(t, o);
                        } else e(t, o);
                    }),
                    Array.from(o.d).every(function (e) {
                      var n = s(e, 2),
                        r = n[0],
                        o = n[1],
                        a = T(t, r);
                      return a && "v" in a && a.r === o;
                    }))
                  )
                    return o;
                }
              }
              var i = new Set();
              try {
                var l = n.read(function (r) {
                  i.add(r);
                  var o = r === n ? T(t, r) : e(t, r);
                  if (o) {
                    if ("e" in o) throw o.e;
                    if ("p" in o) throw o.p;
                    return o.v;
                  }
                  if (w(r)) return r.init;
                  throw new Error("no atom init");
                });
                return z(t, n, l, i);
              } catch (c) {
                if (c instanceof Promise) {
                  var u = k(c);
                  return P(t, n, u, i);
                }
                return M(t, n, c, i);
              }
            },
            j = function (e, t) {
              return L(t, e);
            },
            B = function (e, t) {
              return !t.l.size && (!t.t.size || (1 === t.t.size && t.t.has(e)));
            },
            F = function e(t, n) {
              var r = a.get(n);
              null == r ||
                r.t.forEach(function (r) {
                  r !== n &&
                    (!(function (e, t) {
                      var n = T(e, t);
                      if (n) {
                        var r = i(i({}, n), {}, { i: n.r });
                        O(e, t, r);
                      } else
                        console.warn(
                          "[Bug] could not invalidate non existing atom",
                          t
                        );
                    })(t, r),
                    e(t, r));
                });
            },
            D = function e(t, n, r) {
              var o = !0,
                a = n.write(
                  function e(n, r) {
                    var o = L(t, n);
                    if ("e" in o) throw o.e;
                    if ("p" in o) {
                      if (null == r ? void 0 : r.unstable_promise)
                        return o.p.then(function () {
                          return e(n, r);
                        });
                      throw (
                        (console.info(
                          "Reading pending atom state in write operation. We throw a promise for now.",
                          n
                        ),
                        o.p)
                      );
                    }
                    if ("v" in o) return o.v;
                    throw (
                      (console.warn(
                        "[Bug] no value found while reading atom in write operation. This is probably a bug.",
                        n
                      ),
                      new Error("no value found"))
                    );
                  },
                  function (r, a) {
                    var i;
                    if (r === n) {
                      if (!w(r)) throw new Error("atom not writable");
                      var l = (function (e) {
                        var t = new Set(),
                          n = _.get(e);
                        return (
                          n &&
                            (_.delete(e),
                            n.forEach(function (e, n) {
                              g(e), t.add(n);
                            })),
                          t
                        );
                      })(r);
                      l.forEach(function (e) {
                        e !== t && z(e, r, a);
                      }),
                        T(t, r) !== z(t, r, a) && F(t, r);
                    } else i = e(t, r, a);
                    return o || K(t), i;
                  },
                  r
                );
              return (o = !1), a;
            },
            Q = function (e, t, n) {
              var r = D(n, e, t);
              return K(n), r;
            },
            U = function e(t, r, o) {
              var i = { t: new Set(o && [o]), l: new Set() };
              if (
                (a.set(r, i),
                n.add(r),
                L(void 0, r).d.forEach(function (n, o) {
                  var i = a.get(o);
                  i ? i.t.add(r) : o !== r && e(t, o, r);
                }),
                (function (e) {
                  return !!e.write;
                })(r) && r.onMount)
              ) {
                var l = r.onMount(function (e) {
                  return Q(r, e, t);
                });
                (t = void 0), l && (i.u = l);
              }
              return i;
            },
            J = function e(t, r) {
              var o,
                i = null == (o = a.get(r)) ? void 0 : o.u;
              i && i(), a.delete(r), n.delete(r);
              var l = T(t, r);
              l
                ? l.d.forEach(function (n, o) {
                    if (o !== r) {
                      var i = a.get(o);
                      i && (i.t.delete(r), B(o, i) && e(t, o));
                    }
                  })
                : console.warn("[Bug] could not find atom state to unmount", r);
            },
            Y = function (e, t, n, r) {
              var o = new Set(n.d.keys());
              null == r ||
                r.forEach(function (n, r) {
                  if (o.has(r)) o.delete(r);
                  else {
                    var i = a.get(r);
                    i && (i.t.delete(t), B(r, i) && J(e, r));
                  }
                }),
                o.forEach(function (n) {
                  var r = a.get(n);
                  r ? r.t.add(t) : a.has(t) && U(e, n, t);
                });
            },
            K = function (e) {
              if (e) {
                R(e).forEach(function (t, n) {
                  if (t !== r.get(n)) {
                    var o = a.get(n);
                    null == o ||
                      o.l.forEach(function (t) {
                        return t(e);
                      });
                  }
                });
              } else {
                for (; l.size; ) {
                  var n = Array.from(l);
                  l.clear(),
                    n.forEach(function (e) {
                      var t = s(e, 2),
                        n = t[0],
                        r = t[1],
                        o = T(void 0, n);
                      if (
                        (o &&
                          o.d !== (null == r ? void 0 : r.d) &&
                          Y(void 0, n, o, null == r ? void 0 : r.d),
                        !(r && "i" in r && o) || "i" in o)
                      ) {
                        var i = a.get(n);
                        null == i ||
                          i.l.forEach(function (e) {
                            return e();
                          });
                      }
                    });
                }
                t.forEach(function (e) {
                  return e();
                });
              }
            },
            V = function (e, t) {
              t &&
                (function (e) {
                  R(e).forEach(function (t, n) {
                    var o = r.get(n);
                    (!o ||
                      t.r > o.r ||
                      ("v" in t && t.r === o.r && t.d !== o.d)) &&
                      (r.set(n, t),
                      t.d !== (null == o ? void 0 : o.d) &&
                        Y(e, n, t, null == o ? void 0 : o.d));
                  });
                })(t),
                K(void 0);
            },
            q = function (e, t, n) {
              var r = (function (e, t) {
                  var n = a.get(t);
                  return n || (n = U(e, t)), n;
                })(n, e),
                o = r.l;
              return (
                o.add(t),
                function () {
                  o.delete(t),
                    (function (e, t) {
                      var n = a.get(t);
                      n && B(t, n) && J(e, t);
                    })(n, e);
                }
              );
            },
            W = function (e, t) {
              var n,
                r = m(e);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var o = s(n.value, 2),
                    a = o[0],
                    i = o[1];
                  w(a) && (z(t, a, i), F(t, a));
                }
              } catch (Z) {
                r.e(Z);
              } finally {
                r.f();
              }
              K(t);
            };
          return (
            o((h = {}), S, j),
            o(h, E, Q),
            o(h, x, V),
            o(h, C, q),
            o(h, "h", W),
            o(h, "n", function (e) {
              return (
                t.add(e),
                function () {
                  t.delete(e);
                }
              );
            }),
            o(h, "l", function () {
              return n.values();
            }),
            o(h, "a", function (e) {
              return r.get(e);
            }),
            o(h, "m", function (e) {
              return a.get(e);
            }),
            h
          );
        },
        A = function (e, t) {
          return { s: t ? t(e).SECRET_INTERNAL_store : _(e) };
        },
        R = new Map(),
        T = function (e) {
          return R.has(e) || R.set(e, (0, t.createContext)(A())), R.get(e);
        },
        O = 0;
      function I(e, t) {
        var n = "atom".concat(++O),
          r = {
            toString: function () {
              return n;
            },
          };
        return (
          "function" === typeof e
            ? (r.read = e)
            : ((r.init = e),
              (r.read = function (e) {
                return e(r);
              }),
              (r.write = function (e, t, n) {
                return t(r, "function" === typeof n ? n(e(r)) : n);
              })),
          t && (r.write = t),
          r
        );
      }
      function N(e, n) {
        var r = T(n),
          o = (0, t.useContext)(r),
          a = o.s,
          i = o.v,
          l = function (t) {
            var n = a.r(e, t);
            if ("e" in n) throw n.e;
            if ("p" in n) throw n.p;
            if ("v" in n) return n.v;
            throw new Error("no atom value");
          },
          u = (0, t.useReducer)(
            function (t, n) {
              var r = l(n);
              return Object.is(t[1], r) && t[2] === e ? t : [n, r, e];
            },
            i,
            function (t) {
              return [t, l(t), e];
            }
          ),
          c = s(u, 2),
          f = s(c[0], 3),
          d = f[0],
          p = f[1],
          h = f[2],
          m = c[1],
          y = p;
        return (
          h !== e && (m(d), (y = l(d))),
          (0, t.useEffect)(
            function () {
              var t = o.v;
              t && a.c(e, t);
              var n = a.s(e, m, t);
              return m(t), n;
            },
            [a, e, o]
          ),
          (0, t.useEffect)(function () {
            a.c(e, d);
          }),
          (0, t.useDebugValue)(y),
          y
        );
      }
      function M(e, n) {
        var r = T(n),
          o = (0, t.useContext)(r),
          a = o.s,
          i = o.w;
        return (0, t.useCallback)(
          function (t) {
            if (!("write" in e)) throw new Error("not writable atom");
            var n = function (n) {
              return a.w(e, t, n);
            };
            return i ? i(n) : n();
          },
          [a, i, e]
        );
      }
      function P(e, t) {
        return (
          "scope" in e &&
            (console.warn(
              "atom.scope is deprecated. Please do useAtom(atom, scope) instead."
            ),
            (t = e.scope)),
          [N(e, t), M(e, t)]
        );
      }
      var z = I({ loading: !0, connected: !1, gameCode: null }),
        L = I({ waiting: !0, started: !1, ready: !1 }),
        j = "AppLoader_appLoader__GLfV6",
        B = {
          loader: "Loader_loader__S2fPp",
          small: "Loader_small__iruyX",
          medium: "Loader_medium__FAfLi",
          large: "Loader_large__8cAoe",
          spin: "Loader_spin__T+nlw",
        },
        F = function (e) {
          var t = e.size,
            n = void 0 === t ? "large" : t;
          return (0, f.jsx)("div", {
            className: B.loader + " " + B[n],
            children: (0, f.jsx)("img", {
              src: "data:image/png;base64,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",
            }),
          });
        },
        D = "Divider_divider__4yB5M",
        Q = function (e) {
          var t = e.text;
          return (0, f.jsx)("div", {
            className: D,
            children: t && (0, f.jsx)("span", { children: t }),
          });
        },
        U = { button: "Button_button__rpVEI" },
        J = function (e) {
          var t = e.label,
            n = e.onClick,
            r = e.variant;
          return (0, f.jsx)("button", {
            onClick: n,
            className: "".concat(U.button, " ").concat(U[r]),
            children: t,
          });
        },
        Y = function () {
          return (0, f.jsx)("div", {
            className: j,
            children: (0, f.jsx)(F, {}),
          });
        },
        K = function (e) {
          var t = e.children,
            n = (e.loading, s(P(z), 1)[0]);
          return (0, f.jsxs)(f.Fragment, {
            children: [
              n.loading && (0, f.jsx)(Y, {}),
              (0, f.jsx)(h, {}),
              (0, f.jsx)("main", { id: "main", children: t }),
              (0, f.jsx)(d, {}),
            ],
          });
        };
      function V(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function W(e, t, n) {
        return (
          t && q(e.prototype, t),
          n && q(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function Z(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function H(e, t) {
        return (
          (H = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          H(e, t)
        );
      }
      function X(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && H(e, t);
      }
      function G(e) {
        return (
          (G = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          G(e)
        );
      }
      function $() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function ee(e) {
        return (
          (ee =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          ee(e)
        );
      }
      function te(e, t) {
        if (t && ("object" === ee(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return Z(e);
      }
      function ne(e) {
        var t = $();
        return function () {
          var n,
            r = G(e);
          if (t) {
            var o = G(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return te(this, n);
        };
      }
      function re(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = G(e));

        );
        return e;
      }
      function oe() {
        return (
          (oe =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = re(e, t);
                  if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? e : n)
                      : o.value;
                  }
                }),
          oe.apply(this, arguments)
        );
      }
      function ae(e, t, n) {
        return (
          (ae = $()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(e, r))();
                return n && H(o, n.prototype), o;
              }),
          ae.apply(null, arguments)
        );
      }
      function ie(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (ie = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return ae(e, arguments, G(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              H(r, e)
            );
          }),
          ie(e)
        );
      }
      var le = Object.create(null);
      (le.open = "0"),
        (le.close = "1"),
        (le.ping = "2"),
        (le.pong = "3"),
        (le.message = "4"),
        (le.upgrade = "5"),
        (le.noop = "6");
      var ue = Object.create(null);
      Object.keys(le).forEach(function (e) {
        ue[le[e]] = e;
      });
      for (
        var se = { type: "error", data: "parser error" },
          ce =
            "function" === typeof Blob ||
            ("undefined" !== typeof Blob &&
              "[object BlobConstructor]" ===
                Object.prototype.toString.call(Blob)),
          fe = "function" === typeof ArrayBuffer,
          de = function (e, t) {
            var n = new FileReader();
            return (
              (n.onload = function () {
                var e = n.result.split(",")[1];
                t("b" + e);
              }),
              n.readAsDataURL(e)
            );
          },
          pe = function (e, t, n) {
            var r,
              o = e.type,
              a = e.data;
            return ce && a instanceof Blob
              ? t
                ? n(a)
                : de(a, n)
              : fe &&
                (a instanceof ArrayBuffer ||
                  ((r = a),
                  "function" === typeof ArrayBuffer.isView
                    ? ArrayBuffer.isView(r)
                    : r && r.buffer instanceof ArrayBuffer))
              ? t
                ? n(a)
                : de(new Blob([a]), n)
              : n(le[o] + (a || ""));
          },
          he =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          me = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256),
          ye = 0;
        ye < he.length;
        ye++
      )
        me[he.charCodeAt(ye)] = ye;
      var ve = "function" === typeof ArrayBuffer,
        ge = function (e, t) {
          if (ve) {
            var n = (function (e) {
              var t,
                n,
                r,
                o,
                a,
                i = 0.75 * e.length,
                l = e.length,
                u = 0;
              "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
              var s = new ArrayBuffer(i),
                c = new Uint8Array(s);
              for (t = 0; t < l; t += 4)
                (n = me[e.charCodeAt(t)]),
                  (r = me[e.charCodeAt(t + 1)]),
                  (o = me[e.charCodeAt(t + 2)]),
                  (a = me[e.charCodeAt(t + 3)]),
                  (c[u++] = (n << 2) | (r >> 4)),
                  (c[u++] = ((15 & r) << 4) | (o >> 2)),
                  (c[u++] = ((3 & o) << 6) | (63 & a));
              return s;
            })(e);
            return be(n, t);
          }
          return { base64: !0, data: e };
        },
        be = function (e, t) {
          return "blob" === t && e instanceof ArrayBuffer ? new Blob([e]) : e;
        },
        ke = function (e, t) {
          if ("string" !== typeof e) return { type: "message", data: be(e, t) };
          var n = e.charAt(0);
          return "b" === n
            ? { type: "message", data: ge(e.substring(1), t) }
            : ue[n]
            ? e.length > 1
              ? { type: ue[n], data: e.substring(1) }
              : { type: ue[n] }
            : se;
        },
        we = String.fromCharCode(30);
      function Se(e) {
        if (e)
          return (function (e) {
            for (var t in Se.prototype) e[t] = Se.prototype[t];
            return e;
          })(e);
      }
      (Se.prototype.on = Se.prototype.addEventListener =
        function (e, t) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
            this
          );
        }),
        (Se.prototype.once = function (e, t) {
          function n() {
            this.off(e, n), t.apply(this, arguments);
          }
          return (n.fn = t), this.on(e, n), this;
        }),
        (Se.prototype.off =
          Se.prototype.removeListener =
          Se.prototype.removeAllListeners =
          Se.prototype.removeEventListener =
            function (e, t) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var n,
                r = this._callbacks["$" + e];
              if (!r) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + e], this;
              for (var o = 0; o < r.length; o++)
                if ((n = r[o]) === t || n.fn === t) {
                  r.splice(o, 1);
                  break;
                }
              return 0 === r.length && delete this._callbacks["$" + e], this;
            }),
        (Se.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {};
          for (
            var t = new Array(arguments.length - 1),
              n = this._callbacks["$" + e],
              r = 1;
            r < arguments.length;
            r++
          )
            t[r - 1] = arguments[r];
          if (n) {
            r = 0;
            for (var o = (n = n.slice(0)).length; r < o; ++r)
              n[r].apply(this, t);
          }
          return this;
        }),
        (Se.prototype.emitReserved = Se.prototype.emit),
        (Se.prototype.listeners = function (e) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + e] || []
          );
        }),
        (Se.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length;
        });
      var Ee =
        "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
          ? window
          : Function("return this")();
      function xe(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return n.reduce(function (t, n) {
          return e.hasOwnProperty(n) && (t[n] = e[n]), t;
        }, {});
      }
      var Ce = setTimeout,
        _e = clearTimeout;
      function Ae(e, t) {
        t.useNativeTimers
          ? ((e.setTimeoutFn = Ce.bind(Ee)), (e.clearTimeoutFn = _e.bind(Ee)))
          : ((e.setTimeoutFn = setTimeout.bind(Ee)),
            (e.clearTimeoutFn = clearTimeout.bind(Ee)));
      }
      var Re,
        Te = (function (e) {
          X(n, e);
          var t = ne(n);
          function n(e, r, o) {
            var a;
            return (
              V(this, n),
              ((a = t.call(this, e)).description = r),
              (a.context = o),
              (a.type = "TransportError"),
              a
            );
          }
          return W(n);
        })(ie(Error)),
        Oe = (function (e) {
          X(n, e);
          var t = ne(n);
          function n(e) {
            var r;
            return (
              V(this, n),
              ((r = t.call(this)).writable = !1),
              Ae(Z(r), e),
              (r.opts = e),
              (r.query = e.query),
              (r.readyState = ""),
              (r.socket = e.socket),
              r
            );
          }
          return (
            W(n, [
              {
                key: "onError",
                value: function (e, t, r) {
                  return (
                    oe(G(n.prototype), "emitReserved", this).call(
                      this,
                      "error",
                      new Te(e, t, r)
                    ),
                    this
                  );
                },
              },
              {
                key: "open",
                value: function () {
                  return (
                    ("closed" !== this.readyState && "" !== this.readyState) ||
                      ((this.readyState = "opening"), this.doOpen()),
                    this
                  );
                },
              },
              {
                key: "close",
                value: function () {
                  return (
                    ("opening" !== this.readyState &&
                      "open" !== this.readyState) ||
                      (this.doClose(), this.onClose()),
                    this
                  );
                },
              },
              {
                key: "send",
                value: function (e) {
                  "open" === this.readyState && this.write(e);
                },
              },
              {
                key: "onOpen",
                value: function () {
                  (this.readyState = "open"),
                    (this.writable = !0),
                    oe(G(n.prototype), "emitReserved", this).call(this, "open");
                },
              },
              {
                key: "onData",
                value: function (e) {
                  var t = ke(e, this.socket.binaryType);
                  this.onPacket(t);
                },
              },
              {
                key: "onPacket",
                value: function (e) {
                  oe(G(n.prototype), "emitReserved", this).call(
                    this,
                    "packet",
                    e
                  );
                },
              },
              {
                key: "onClose",
                value: function (e) {
                  (this.readyState = "closed"),
                    oe(G(n.prototype), "emitReserved", this).call(
                      this,
                      "close",
                      e
                    );
                },
              },
            ]),
            n
          );
        })(Se),
        Ie =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        Ne = {},
        Me = 0,
        Pe = 0;
      function ze(e) {
        var t = "";
        do {
          (t = Ie[e % 64] + t), (e = Math.floor(e / 64));
        } while (e > 0);
        return t;
      }
      function Le() {
        var e = ze(+new Date());
        return e !== Re ? ((Me = 0), (Re = e)) : e + "." + ze(Me++);
      }
      for (; Pe < 64; Pe++) Ne[Ie[Pe]] = Pe;
      function je(e) {
        var t = "";
        for (var n in e)
          e.hasOwnProperty(n) &&
            (t.length && (t += "&"),
            (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
        return t;
      }
      function Be(e) {
        for (var t = {}, n = e.split("&"), r = 0, o = n.length; r < o; r++) {
          var a = n[r].split("=");
          t[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        }
        return t;
      }
      var Fe = !1;
      try {
        Fe =
          "undefined" !== typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (Lt) {}
      var De = Fe;
      function Qe(e) {
        var t = e.xdomain;
        try {
          if ("undefined" !== typeof XMLHttpRequest && (!t || De))
            return new XMLHttpRequest();
        } catch (n) {}
        if (!t)
          try {
            return new Ee[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (n) {}
      }
      function Ue() {}
      var Je = null != new Qe({ xdomain: !1 }).responseType,
        Ye = (function (e) {
          X(n, e);
          var t = ne(n);
          function n(e) {
            var r;
            if (
              (V(this, n),
              ((r = t.call(this, e)).polling = !1),
              "undefined" !== typeof location)
            ) {
              var o = "https:" === location.protocol,
                a = location.port;
              a || (a = o ? "443" : "80"),
                (r.xd =
                  ("undefined" !== typeof location &&
                    e.hostname !== location.hostname) ||
                  a !== e.port),
                (r.xs = e.secure !== o);
            }
            var i = e && e.forceBase64;
            return (r.supportsBinary = Je && !i), r;
          }
          return (
            W(n, [
              {
                key: "name",
                get: function () {
                  return "polling";
                },
              },
              {
                key: "doOpen",
                value: function () {
                  this.poll();
                },
              },
              {
                key: "pause",
                value: function (e) {
                  var t = this;
                  this.readyState = "pausing";
                  var n = function () {
                    (t.readyState = "paused"), e();
                  };
                  if (this.polling || !this.writable) {
                    var r = 0;
                    this.polling &&
                      (r++,
                      this.once("pollComplete", function () {
                        --r || n();
                      })),
                      this.writable ||
                        (r++,
                        this.once("drain", function () {
                          --r || n();
                        }));
                  } else n();
                },
              },
              {
                key: "poll",
                value: function () {
                  (this.polling = !0), this.doPoll(), this.emitReserved("poll");
                },
              },
              {
                key: "onData",
                value: function (e) {
                  var t = this;
                  (function (e, t) {
                    for (
                      var n = e.split(we), r = [], o = 0;
                      o < n.length;
                      o++
                    ) {
                      var a = ke(n[o], t);
                      if ((r.push(a), "error" === a.type)) break;
                    }
                    return r;
                  })(e, this.socket.binaryType).forEach(function (e) {
                    if (
                      ("opening" === t.readyState &&
                        "open" === e.type &&
                        t.onOpen(),
                      "close" === e.type)
                    )
                      return (
                        t.onClose({
                          description: "transport closed by the server",
                        }),
                        !1
                      );
                    t.onPacket(e);
                  }),
                    "closed" !== this.readyState &&
                      ((this.polling = !1),
                      this.emitReserved("pollComplete"),
                      "open" === this.readyState && this.poll());
                },
              },
              {
                key: "doClose",
                value: function () {
                  var e = this,
                    t = function () {
                      e.write([{ type: "close" }]);
                    };
                  "open" === this.readyState ? t() : this.once("open", t);
                },
              },
              {
                key: "write",
                value: function (e) {
                  var t = this;
                  (this.writable = !1),
                    (function (e, t) {
                      var n = e.length,
                        r = new Array(n),
                        o = 0;
                      e.forEach(function (e, a) {
                        pe(e, !1, function (e) {
                          (r[a] = e), ++o === n && t(r.join(we));
                        });
                      });
                    })(e, function (e) {
                      t.doWrite(e, function () {
                        (t.writable = !0), t.emitReserved("drain");
                      });
                    });
                },
              },
              {
                key: "uri",
                value: function () {
                  var e = this.query || {},
                    t = this.opts.secure ? "https" : "http",
                    n = "";
                  !1 !== this.opts.timestampRequests &&
                    (e[this.opts.timestampParam] = Le()),
                    this.supportsBinary || e.sid || (e.b64 = 1),
                    this.opts.port &&
                      (("https" === t && 443 !== Number(this.opts.port)) ||
                        ("http" === t && 80 !== Number(this.opts.port))) &&
                      (n = ":" + this.opts.port);
                  var r = je(e);
                  return (
                    t +
                    "://" +
                    (-1 !== this.opts.hostname.indexOf(":")
                      ? "[" + this.opts.hostname + "]"
                      : this.opts.hostname) +
                    n +
                    this.opts.path +
                    (r.length ? "?" + r : "")
                  );
                },
              },
              {
                key: "request",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    Object.assign(e, { xd: this.xd, xs: this.xs }, this.opts),
                    new Ke(this.uri(), e)
                  );
                },
              },
              {
                key: "doWrite",
                value: function (e, t) {
                  var n = this,
                    r = this.request({ method: "POST", data: e });
                  r.on("success", t),
                    r.on("error", function (e, t) {
                      n.onError("xhr post error", e, t);
                    });
                },
              },
              {
                key: "doPoll",
                value: function () {
                  var e = this,
                    t = this.request();
                  t.on("data", this.onData.bind(this)),
                    t.on("error", function (t, n) {
                      e.onError("xhr poll error", t, n);
                    }),
                    (this.pollXhr = t);
                },
              },
            ]),
            n
          );
        })(Oe),
        Ke = (function (e) {
          X(n, e);
          var t = ne(n);
          function n(e, r) {
            var o;
            return (
              V(this, n),
              Ae(Z((o = t.call(this))), r),
              (o.opts = r),
              (o.method = r.method || "GET"),
              (o.uri = e),
              (o.async = !1 !== r.async),
              (o.data = void 0 !== r.data ? r.data : null),
              o.create(),
              o
            );
          }
          return (
            W(n, [
              {
                key: "create",
                value: function () {
                  var e = this,
                    t = xe(
                      this.opts,
                      "agent",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "autoUnref"
                    );
                  (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
                  var r = (this.xhr = new Qe(t));
                  try {
                    r.open(this.method, this.uri, this.async);
                    try {
                      if (this.opts.extraHeaders)
                        for (var o in (r.setDisableHeaderCheck &&
                          r.setDisableHeaderCheck(!0),
                        this.opts.extraHeaders))
                          this.opts.extraHeaders.hasOwnProperty(o) &&
                            r.setRequestHeader(o, this.opts.extraHeaders[o]);
                    } catch (a) {}
                    if ("POST" === this.method)
                      try {
                        r.setRequestHeader(
                          "Content-type",
                          "text/plain;charset=UTF-8"
                        );
                      } catch (a) {}
                    try {
                      r.setRequestHeader("Accept", "*/*");
                    } catch (a) {}
                    "withCredentials" in r &&
                      (r.withCredentials = this.opts.withCredentials),
                      this.opts.requestTimeout &&
                        (r.timeout = this.opts.requestTimeout),
                      (r.onreadystatechange = function () {
                        4 === r.readyState &&
                          (200 === r.status || 1223 === r.status
                            ? e.onLoad()
                            : e.setTimeoutFn(function () {
                                e.onError(
                                  "number" === typeof r.status ? r.status : 0
                                );
                              }, 0));
                      }),
                      r.send(this.data);
                  } catch (a) {
                    return void this.setTimeoutFn(function () {
                      e.onError(a);
                    }, 0);
                  }
                  "undefined" !== typeof document &&
                    ((this.index = n.requestsCount++),
                    (n.requests[this.index] = this));
                },
              },
              {
                key: "onError",
                value: function (e) {
                  this.emitReserved("error", e, this.xhr), this.cleanup(!0);
                },
              },
              {
                key: "cleanup",
                value: function (e) {
                  if ("undefined" !== typeof this.xhr && null !== this.xhr) {
                    if (((this.xhr.onreadystatechange = Ue), e))
                      try {
                        this.xhr.abort();
                      } catch (t) {}
                    "undefined" !== typeof document &&
                      delete n.requests[this.index],
                      (this.xhr = null);
                  }
                },
              },
              {
                key: "onLoad",
                value: function () {
                  var e = this.xhr.responseText;
                  null !== e &&
                    (this.emitReserved("data", e),
                    this.emitReserved("success"),
                    this.cleanup());
                },
              },
              {
                key: "abort",
                value: function () {
                  this.cleanup();
                },
              },
            ]),
            n
          );
        })(Se);
      if (
        ((Ke.requestsCount = 0),
        (Ke.requests = {}),
        "undefined" !== typeof document)
      )
        if ("function" === typeof attachEvent) attachEvent("onunload", Ve);
        else if ("function" === typeof addEventListener) {
          addEventListener("onpagehide" in Ee ? "pagehide" : "unload", Ve, !1);
        }
      function Ve() {
        for (var e in Ke.requests)
          Ke.requests.hasOwnProperty(e) && Ke.requests[e].abort();
      }
      var qe =
          "function" === typeof Promise && "function" === typeof Promise.resolve
            ? function (e) {
                return Promise.resolve().then(e);
              }
            : function (e, t) {
                return t(e, 0);
              },
        We = Ee.WebSocket || Ee.MozWebSocket,
        Ze =
          "undefined" !== typeof navigator &&
          "string" === typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase(),
        He = (function (e) {
          X(n, e);
          var t = ne(n);
          function n(e) {
            var r;
            return (
              V(this, n),
              ((r = t.call(this, e)).supportsBinary = !e.forceBase64),
              r
            );
          }
          return (
            W(n, [
              {
                key: "name",
                get: function () {
                  return "websocket";
                },
              },
              {
                key: "doOpen",
                value: function () {
                  if (this.check()) {
                    var e = this.uri(),
                      t = this.opts.protocols,
                      n = Ze
                        ? {}
                        : xe(
                            this.opts,
                            "agent",
                            "perMessageDeflate",
                            "pfx",
                            "key",
                            "passphrase",
                            "cert",
                            "ca",
                            "ciphers",
                            "rejectUnauthorized",
                            "localAddress",
                            "protocolVersion",
                            "origin",
                            "maxPayload",
                            "family",
                            "checkServerIdentity"
                          );
                    this.opts.extraHeaders &&
                      (n.headers = this.opts.extraHeaders);
                    try {
                      this.ws = Ze
                        ? new We(e, t, n)
                        : t
                        ? new We(e, t)
                        : new We(e);
                    } catch (Lt) {
                      return this.emitReserved("error", Lt);
                    }
                    (this.ws.binaryType =
                      this.socket.binaryType || "arraybuffer"),
                      this.addEventListeners();
                  }
                },
              },
              {
                key: "addEventListeners",
                value: function () {
                  var e = this;
                  (this.ws.onopen = function () {
                    e.opts.autoUnref && e.ws._socket.unref(), e.onOpen();
                  }),
                    (this.ws.onclose = function (t) {
                      return e.onClose({
                        description: "websocket connection closed",
                        context: t,
                      });
                    }),
                    (this.ws.onmessage = function (t) {
                      return e.onData(t.data);
                    }),
                    (this.ws.onerror = function (t) {
                      return e.onError("websocket error", t);
                    });
                },
              },
              {
                key: "write",
                value: function (e) {
                  var t = this;
                  this.writable = !1;
                  for (
                    var n = function (n) {
                        var r = e[n],
                          o = n === e.length - 1;
                        pe(r, t.supportsBinary, function (e) {
                          try {
                            t.ws.send(e);
                          } catch (n) {}
                          o &&
                            qe(function () {
                              (t.writable = !0), t.emitReserved("drain");
                            }, t.setTimeoutFn);
                        });
                      },
                      r = 0;
                    r < e.length;
                    r++
                  )
                    n(r);
                },
              },
              {
                key: "doClose",
                value: function () {
                  "undefined" !== typeof this.ws &&
                    (this.ws.close(), (this.ws = null));
                },
              },
              {
                key: "uri",
                value: function () {
                  var e = this.query || {},
                    t = this.opts.secure ? "wss" : "ws",
                    n = "";
                  this.opts.port &&
                    (("wss" === t && 443 !== Number(this.opts.port)) ||
                      ("ws" === t && 80 !== Number(this.opts.port))) &&
                    (n = ":" + this.opts.port),
                    this.opts.timestampRequests &&
                      (e[this.opts.timestampParam] = Le()),
                    this.supportsBinary || (e.b64 = 1);
                  var r = je(e);
                  return (
                    t +
                    "://" +
                    (-1 !== this.opts.hostname.indexOf(":")
                      ? "[" + this.opts.hostname + "]"
                      : this.opts.hostname) +
                    n +
                    this.opts.path +
                    (r.length ? "?" + r : "")
                  );
                },
              },
              {
                key: "check",
                value: function () {
                  return !!We;
                },
              },
            ]),
            n
          );
        })(Oe),
        Xe = { websocket: He, polling: Ye },
        Ge =
          /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        $e = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function et(e) {
        var t = e,
          n = e.indexOf("["),
          r = e.indexOf("]");
        -1 != n &&
          -1 != r &&
          (e =
            e.substring(0, n) +
            e.substring(n, r).replace(/:/g, ";") +
            e.substring(r, e.length));
        for (var o = Ge.exec(e || ""), a = {}, i = 14; i--; )
          a[$e[i]] = o[i] || "";
        return (
          -1 != n &&
            -1 != r &&
            ((a.source = t),
            (a.host = a.host
              .substring(1, a.host.length - 1)
              .replace(/;/g, ":")),
            (a.authority = a.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (a.ipv6uri = !0)),
          (a.pathNames = (function (e, t) {
            var n = /\/{2,9}/g,
              r = t.replace(n, "/").split("/");
            ("/" != t.substr(0, 1) && 0 !== t.length) || r.splice(0, 1);
            "/" == t.substr(t.length - 1, 1) && r.splice(r.length - 1, 1);
            return r;
          })(0, a.path)),
          (a.queryKey = (function (e, t) {
            var n = {};
            return (
              t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
                t && (n[t] = r);
              }),
              n
            );
          })(0, a.query)),
          a
        );
      }
      var tt = (function (e) {
        X(n, e);
        var t = ne(n);
        function n(e) {
          var r,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            V(this, n),
            (r = t.call(this)),
            e && "object" === typeof e && ((o = e), (e = null)),
            e
              ? ((e = et(e)),
                (o.hostname = e.host),
                (o.secure = "https" === e.protocol || "wss" === e.protocol),
                (o.port = e.port),
                e.query && (o.query = e.query))
              : o.host && (o.hostname = et(o.host).host),
            Ae(Z(r), o),
            (r.secure =
              null != o.secure
                ? o.secure
                : "undefined" !== typeof location &&
                  "https:" === location.protocol),
            o.hostname && !o.port && (o.port = r.secure ? "443" : "80"),
            (r.hostname =
              o.hostname ||
              ("undefined" !== typeof location
                ? location.hostname
                : "localhost")),
            (r.port =
              o.port ||
              ("undefined" !== typeof location && location.port
                ? location.port
                : r.secure
                ? "443"
                : "80")),
            (r.transports = o.transports || ["polling", "websocket"]),
            (r.readyState = ""),
            (r.writeBuffer = []),
            (r.prevBufferLen = 0),
            (r.opts = Object.assign(
              {
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !0,
              },
              o
            )),
            (r.opts.path = r.opts.path.replace(/\/$/, "") + "/"),
            "string" === typeof r.opts.query &&
              (r.opts.query = Be(r.opts.query)),
            (r.id = null),
            (r.upgrades = null),
            (r.pingInterval = null),
            (r.pingTimeout = null),
            (r.pingTimeoutTimer = null),
            "function" === typeof addEventListener &&
              (r.opts.closeOnBeforeunload &&
                addEventListener(
                  "beforeunload",
                  function () {
                    r.transport &&
                      (r.transport.removeAllListeners(), r.transport.close());
                  },
                  !1
                ),
              "localhost" !== r.hostname &&
                ((r.offlineEventListener = function () {
                  r.onClose("transport close", {
                    description: "network connection lost",
                  });
                }),
                addEventListener("offline", r.offlineEventListener, !1))),
            r.open(),
            r
          );
        }
        return (
          W(n, [
            {
              key: "createTransport",
              value: function (e) {
                var t = Object.assign({}, this.opts.query);
                (t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id);
                var n = Object.assign(
                  {},
                  this.opts.transportOptions[e],
                  this.opts,
                  {
                    query: t,
                    socket: this,
                    hostname: this.hostname,
                    secure: this.secure,
                    port: this.port,
                  }
                );
                return new Xe[e](n);
              },
            },
            {
              key: "open",
              value: function () {
                var e,
                  t = this;
                if (
                  this.opts.rememberUpgrade &&
                  n.priorWebsocketSuccess &&
                  -1 !== this.transports.indexOf("websocket")
                )
                  e = "websocket";
                else {
                  if (0 === this.transports.length)
                    return void this.setTimeoutFn(function () {
                      t.emitReserved("error", "No transports available");
                    }, 0);
                  e = this.transports[0];
                }
                this.readyState = "opening";
                try {
                  e = this.createTransport(e);
                } catch (r) {
                  return this.transports.shift(), void this.open();
                }
                e.open(), this.setTransport(e);
              },
            },
            {
              key: "setTransport",
              value: function (e) {
                var t = this;
                this.transport && this.transport.removeAllListeners(),
                  (this.transport = e),
                  e
                    .on("drain", this.onDrain.bind(this))
                    .on("packet", this.onPacket.bind(this))
                    .on("error", this.onError.bind(this))
                    .on("close", function (e) {
                      return t.onClose("transport close", e);
                    });
              },
            },
            {
              key: "probe",
              value: function (e) {
                var t = this,
                  r = this.createTransport(e),
                  o = !1;
                n.priorWebsocketSuccess = !1;
                var a = function () {
                  o ||
                    (r.send([{ type: "ping", data: "probe" }]),
                    r.once("packet", function (e) {
                      if (!o)
                        if ("pong" === e.type && "probe" === e.data) {
                          if (
                            ((t.upgrading = !0),
                            t.emitReserved("upgrading", r),
                            !r)
                          )
                            return;
                          (n.priorWebsocketSuccess = "websocket" === r.name),
                            t.transport.pause(function () {
                              o ||
                                ("closed" !== t.readyState &&
                                  (f(),
                                  t.setTransport(r),
                                  r.send([{ type: "upgrade" }]),
                                  t.emitReserved("upgrade", r),
                                  (r = null),
                                  (t.upgrading = !1),
                                  t.flush()));
                            });
                        } else {
                          var a = new Error("probe error");
                          (a.transport = r.name),
                            t.emitReserved("upgradeError", a);
                        }
                    }));
                };
                function i() {
                  o || ((o = !0), f(), r.close(), (r = null));
                }
                var l = function (e) {
                  var n = new Error("probe error: " + e);
                  (n.transport = r.name),
                    i(),
                    t.emitReserved("upgradeError", n);
                };
                function u() {
                  l("transport closed");
                }
                function s() {
                  l("socket closed");
                }
                function c(e) {
                  r && e.name !== r.name && i();
                }
                var f = function () {
                  r.removeListener("open", a),
                    r.removeListener("error", l),
                    r.removeListener("close", u),
                    t.off("close", s),
                    t.off("upgrading", c);
                };
                r.once("open", a),
                  r.once("error", l),
                  r.once("close", u),
                  this.once("close", s),
                  this.once("upgrading", c),
                  r.open();
              },
            },
            {
              key: "onOpen",
              value: function () {
                if (
                  ((this.readyState = "open"),
                  (n.priorWebsocketSuccess =
                    "websocket" === this.transport.name),
                  this.emitReserved("open"),
                  this.flush(),
                  "open" === this.readyState &&
                    this.opts.upgrade &&
                    this.transport.pause)
                )
                  for (var e = 0, t = this.upgrades.length; e < t; e++)
                    this.probe(this.upgrades[e]);
              },
            },
            {
              key: "onPacket",
              value: function (e) {
                if (
                  "opening" === this.readyState ||
                  "open" === this.readyState ||
                  "closing" === this.readyState
                )
                  switch (
                    (this.emitReserved("packet", e),
                    this.emitReserved("heartbeat"),
                    e.type)
                  ) {
                    case "open":
                      this.onHandshake(JSON.parse(e.data));
                      break;
                    case "ping":
                      this.resetPingTimeout(),
                        this.sendPacket("pong"),
                        this.emitReserved("ping"),
                        this.emitReserved("pong");
                      break;
                    case "error":
                      var t = new Error("server error");
                      (t.code = e.data), this.onError(t);
                      break;
                    case "message":
                      this.emitReserved("data", e.data),
                        this.emitReserved("message", e.data);
                  }
              },
            },
            {
              key: "onHandshake",
              value: function (e) {
                this.emitReserved("handshake", e),
                  (this.id = e.sid),
                  (this.transport.query.sid = e.sid),
                  (this.upgrades = this.filterUpgrades(e.upgrades)),
                  (this.pingInterval = e.pingInterval),
                  (this.pingTimeout = e.pingTimeout),
                  (this.maxPayload = e.maxPayload),
                  this.onOpen(),
                  "closed" !== this.readyState && this.resetPingTimeout();
              },
            },
            {
              key: "resetPingTimeout",
              value: function () {
                var e = this;
                this.clearTimeoutFn(this.pingTimeoutTimer),
                  (this.pingTimeoutTimer = this.setTimeoutFn(function () {
                    e.onClose("ping timeout");
                  }, this.pingInterval + this.pingTimeout)),
                  this.opts.autoUnref && this.pingTimeoutTimer.unref();
              },
            },
            {
              key: "onDrain",
              value: function () {
                this.writeBuffer.splice(0, this.prevBufferLen),
                  (this.prevBufferLen = 0),
                  0 === this.writeBuffer.length
                    ? this.emitReserved("drain")
                    : this.flush();
              },
            },
            {
              key: "flush",
              value: function () {
                if (
                  "closed" !== this.readyState &&
                  this.transport.writable &&
                  !this.upgrading &&
                  this.writeBuffer.length
                ) {
                  var e = this.getWritablePackets();
                  this.transport.send(e),
                    (this.prevBufferLen = e.length),
                    this.emitReserved("flush");
                }
              },
            },
            {
              key: "getWritablePackets",
              value: function () {
                if (
                  !(
                    this.maxPayload &&
                    "polling" === this.transport.name &&
                    this.writeBuffer.length > 1
                  )
                )
                  return this.writeBuffer;
                for (var e, t = 1, n = 0; n < this.writeBuffer.length; n++) {
                  var r = this.writeBuffer[n].data;
                  if (
                    (r &&
                      (t +=
                        "string" === typeof (e = r)
                          ? (function (e) {
                              for (
                                var t = 0, n = 0, r = 0, o = e.length;
                                r < o;
                                r++
                              )
                                (t = e.charCodeAt(r)) < 128
                                  ? (n += 1)
                                  : t < 2048
                                  ? (n += 2)
                                  : t < 55296 || t >= 57344
                                  ? (n += 3)
                                  : (r++, (n += 4));
                              return n;
                            })(e)
                          : Math.ceil(1.33 * (e.byteLength || e.size))),
                    n > 0 && t > this.maxPayload)
                  )
                    return this.writeBuffer.slice(0, n);
                  t += 2;
                }
                return this.writeBuffer;
              },
            },
            {
              key: "write",
              value: function (e, t, n) {
                return this.sendPacket("message", e, t, n), this;
              },
            },
            {
              key: "send",
              value: function (e, t, n) {
                return this.sendPacket("message", e, t, n), this;
              },
            },
            {
              key: "sendPacket",
              value: function (e, t, n, r) {
                if (
                  ("function" === typeof t && ((r = t), (t = void 0)),
                  "function" === typeof n && ((r = n), (n = null)),
                  "closing" !== this.readyState && "closed" !== this.readyState)
                ) {
                  (n = n || {}).compress = !1 !== n.compress;
                  var o = { type: e, data: t, options: n };
                  this.emitReserved("packetCreate", o),
                    this.writeBuffer.push(o),
                    r && this.once("flush", r),
                    this.flush();
                }
              },
            },
            {
              key: "close",
              value: function () {
                var e = this,
                  t = function () {
                    e.onClose("forced close"), e.transport.close();
                  },
                  n = function n() {
                    e.off("upgrade", n), e.off("upgradeError", n), t();
                  },
                  r = function () {
                    e.once("upgrade", n), e.once("upgradeError", n);
                  };
                return (
                  ("opening" !== this.readyState &&
                    "open" !== this.readyState) ||
                    ((this.readyState = "closing"),
                    this.writeBuffer.length
                      ? this.once("drain", function () {
                          e.upgrading ? r() : t();
                        })
                      : this.upgrading
                      ? r()
                      : t()),
                  this
                );
              },
            },
            {
              key: "onError",
              value: function (e) {
                (n.priorWebsocketSuccess = !1),
                  this.emitReserved("error", e),
                  this.onClose("transport error", e);
              },
            },
            {
              key: "onClose",
              value: function (e, t) {
                ("opening" !== this.readyState &&
                  "open" !== this.readyState &&
                  "closing" !== this.readyState) ||
                  (this.clearTimeoutFn(this.pingTimeoutTimer),
                  this.transport.removeAllListeners("close"),
                  this.transport.close(),
                  this.transport.removeAllListeners(),
                  "function" === typeof removeEventListener &&
                    removeEventListener(
                      "offline",
                      this.offlineEventListener,
                      !1
                    ),
                  (this.readyState = "closed"),
                  (this.id = null),
                  this.emitReserved("close", e, t),
                  (this.writeBuffer = []),
                  (this.prevBufferLen = 0));
              },
            },
            {
              key: "filterUpgrades",
              value: function (e) {
                for (var t = [], n = 0, r = e.length; n < r; n++)
                  ~this.transports.indexOf(e[n]) && t.push(e[n]);
                return t;
              },
            },
          ]),
          n
        );
      })(Se);
      tt.protocol = 4;
      tt.protocol;
      var nt = "function" === typeof ArrayBuffer,
        rt = Object.prototype.toString,
        ot =
          "function" === typeof Blob ||
          ("undefined" !== typeof Blob &&
            "[object BlobConstructor]" === rt.call(Blob)),
        at =
          "function" === typeof File ||
          ("undefined" !== typeof File &&
            "[object FileConstructor]" === rt.call(File));
      function it(e) {
        return (
          (nt &&
            (e instanceof ArrayBuffer ||
              (function (e) {
                return "function" === typeof ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e.buffer instanceof ArrayBuffer;
              })(e))) ||
          (ot && e instanceof Blob) ||
          (at && e instanceof File)
        );
      }
      function lt(e, t) {
        if (!e || "object" !== typeof e) return !1;
        if (Array.isArray(e)) {
          for (var n = 0, r = e.length; n < r; n++) if (lt(e[n])) return !0;
          return !1;
        }
        if (it(e)) return !0;
        if (
          e.toJSON &&
          "function" === typeof e.toJSON &&
          1 === arguments.length
        )
          return lt(e.toJSON(), !0);
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o) && lt(e[o])) return !0;
        return !1;
      }
      function ut(e) {
        var t = [],
          n = e.data,
          r = e;
        return (
          (r.data = st(n, t)),
          (r.attachments = t.length),
          { packet: r, buffers: t }
        );
      }
      function st(e, t) {
        if (!e) return e;
        if (it(e)) {
          var n = { _placeholder: !0, num: t.length };
          return t.push(e), n;
        }
        if (Array.isArray(e)) {
          for (var r = new Array(e.length), o = 0; o < e.length; o++)
            r[o] = st(e[o], t);
          return r;
        }
        if ("object" === typeof e && !(e instanceof Date)) {
          var a = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (a[i] = st(e[i], t));
          return a;
        }
        return e;
      }
      function ct(e, t) {
        return (e.data = ft(e.data, t)), (e.attachments = void 0), e;
      }
      function ft(e, t) {
        if (!e) return e;
        if (e && !0 === e._placeholder) {
          if ("number" === typeof e.num && e.num >= 0 && e.num < t.length)
            return t[e.num];
          throw new Error("illegal attachments");
        }
        if (Array.isArray(e))
          for (var n = 0; n < e.length; n++) e[n] = ft(e[n], t);
        else if ("object" === typeof e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (e[r] = ft(e[r], t));
        return e;
      }
      var dt,
        pt = 5;
      !(function (e) {
        (e[(e.CONNECT = 0)] = "CONNECT"),
          (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
          (e[(e.EVENT = 2)] = "EVENT"),
          (e[(e.ACK = 3)] = "ACK"),
          (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
      })(dt || (dt = {}));
      var ht = (function () {
          function e(t) {
            V(this, e), (this.replacer = t);
          }
          return (
            W(e, [
              {
                key: "encode",
                value: function (e) {
                  return (e.type !== dt.EVENT && e.type !== dt.ACK) || !lt(e)
                    ? [this.encodeAsString(e)]
                    : ((e.type =
                        e.type === dt.EVENT ? dt.BINARY_EVENT : dt.BINARY_ACK),
                      this.encodeAsBinary(e));
                },
              },
              {
                key: "encodeAsString",
                value: function (e) {
                  var t = "" + e.type;
                  return (
                    (e.type !== dt.BINARY_EVENT && e.type !== dt.BINARY_ACK) ||
                      (t += e.attachments + "-"),
                    e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
                    null != e.id && (t += e.id),
                    null != e.data &&
                      (t += JSON.stringify(e.data, this.replacer)),
                    t
                  );
                },
              },
              {
                key: "encodeAsBinary",
                value: function (e) {
                  var t = ut(e),
                    n = this.encodeAsString(t.packet),
                    r = t.buffers;
                  return r.unshift(n), r;
                },
              },
            ]),
            e
          );
        })(),
        mt = (function (e) {
          X(n, e);
          var t = ne(n);
          function n(e) {
            var r;
            return V(this, n), ((r = t.call(this)).reviver = e), r;
          }
          return (
            W(
              n,
              [
                {
                  key: "add",
                  value: function (e) {
                    var t;
                    if ("string" === typeof e) {
                      if (this.reconstructor)
                        throw new Error(
                          "got plaintext data when reconstructing a packet"
                        );
                      (t = this.decodeString(e)).type === dt.BINARY_EVENT ||
                      t.type === dt.BINARY_ACK
                        ? ((this.reconstructor = new yt(t)),
                          0 === t.attachments &&
                            oe(G(n.prototype), "emitReserved", this).call(
                              this,
                              "decoded",
                              t
                            ))
                        : oe(G(n.prototype), "emitReserved", this).call(
                            this,
                            "decoded",
                            t
                          );
                    } else {
                      if (!it(e) && !e.base64)
                        throw new Error("Unknown type: " + e);
                      if (!this.reconstructor)
                        throw new Error(
                          "got binary data when not reconstructing a packet"
                        );
                      (t = this.reconstructor.takeBinaryData(e)) &&
                        ((this.reconstructor = null),
                        oe(G(n.prototype), "emitReserved", this).call(
                          this,
                          "decoded",
                          t
                        ));
                    }
                  },
                },
                {
                  key: "decodeString",
                  value: function (e) {
                    var t = 0,
                      r = { type: Number(e.charAt(0)) };
                    if (void 0 === dt[r.type])
                      throw new Error("unknown packet type " + r.type);
                    if (
                      r.type === dt.BINARY_EVENT ||
                      r.type === dt.BINARY_ACK
                    ) {
                      for (
                        var o = t + 1;
                        "-" !== e.charAt(++t) && t != e.length;

                      );
                      var a = e.substring(o, t);
                      if (a != Number(a) || "-" !== e.charAt(t))
                        throw new Error("Illegal attachments");
                      r.attachments = Number(a);
                    }
                    if ("/" === e.charAt(t + 1)) {
                      for (var i = t + 1; ++t; ) {
                        if ("," === e.charAt(t)) break;
                        if (t === e.length) break;
                      }
                      r.nsp = e.substring(i, t);
                    } else r.nsp = "/";
                    var l = e.charAt(t + 1);
                    if ("" !== l && Number(l) == l) {
                      for (var u = t + 1; ++t; ) {
                        var s = e.charAt(t);
                        if (null == s || Number(s) != s) {
                          --t;
                          break;
                        }
                        if (t === e.length) break;
                      }
                      r.id = Number(e.substring(u, t + 1));
                    }
                    if (e.charAt(++t)) {
                      var c = this.tryParse(e.substr(t));
                      if (!n.isPayloadValid(r.type, c))
                        throw new Error("invalid payload");
                      r.data = c;
                    }
                    return r;
                  },
                },
                {
                  key: "tryParse",
                  value: function (e) {
                    try {
                      return JSON.parse(e, this.reviver);
                    } catch (t) {
                      return !1;
                    }
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.reconstructor &&
                      this.reconstructor.finishedReconstruction();
                  },
                },
              ],
              [
                {
                  key: "isPayloadValid",
                  value: function (e, t) {
                    switch (e) {
                      case dt.CONNECT:
                        return "object" === typeof t;
                      case dt.DISCONNECT:
                        return void 0 === t;
                      case dt.CONNECT_ERROR:
                        return "string" === typeof t || "object" === typeof t;
                      case dt.EVENT:
                      case dt.BINARY_EVENT:
                        return Array.isArray(t) && t.length > 0;
                      case dt.ACK:
                      case dt.BINARY_ACK:
                        return Array.isArray(t);
                    }
                  },
                },
              ]
            ),
            n
          );
        })(Se),
        yt = (function () {
          function e(t) {
            V(this, e),
              (this.packet = t),
              (this.buffers = []),
              (this.reconPack = t);
          }
          return (
            W(e, [
              {
                key: "takeBinaryData",
                value: function (e) {
                  if (
                    (this.buffers.push(e),
                    this.buffers.length === this.reconPack.attachments)
                  ) {
                    var t = ct(this.reconPack, this.buffers);
                    return this.finishedReconstruction(), t;
                  }
                  return null;
                },
              },
              {
                key: "finishedReconstruction",
                value: function () {
                  (this.reconPack = null), (this.buffers = []);
                },
              },
            ]),
            e
          );
        })();
      function vt(e, t, n) {
        return (
          e.on(t, n),
          function () {
            e.off(t, n);
          }
        );
      }
      var gt = Object.freeze({
          connect: 1,
          connect_error: 1,
          disconnect: 1,
          disconnecting: 1,
          newListener: 1,
          removeListener: 1,
        }),
        bt = (function (e) {
          X(n, e);
          var t = ne(n);
          function n(e, r, o) {
            var a;
            return (
              V(this, n),
              ((a = t.call(this)).connected = !1),
              (a.receiveBuffer = []),
              (a.sendBuffer = []),
              (a.ids = 0),
              (a.acks = {}),
              (a.flags = {}),
              (a.io = e),
              (a.nsp = r),
              o && o.auth && (a.auth = o.auth),
              a.io._autoConnect && a.open(),
              a
            );
          }
          return (
            W(n, [
              {
                key: "disconnected",
                get: function () {
                  return !this.connected;
                },
              },
              {
                key: "subEvents",
                value: function () {
                  if (!this.subs) {
                    var e = this.io;
                    this.subs = [
                      vt(e, "open", this.onopen.bind(this)),
                      vt(e, "packet", this.onpacket.bind(this)),
                      vt(e, "error", this.onerror.bind(this)),
                      vt(e, "close", this.onclose.bind(this)),
                    ];
                  }
                },
              },
              {
                key: "active",
                get: function () {
                  return !!this.subs;
                },
              },
              {
                key: "connect",
                value: function () {
                  return (
                    this.connected ||
                      (this.subEvents(),
                      this.io._reconnecting || this.io.open(),
                      "open" === this.io._readyState && this.onopen()),
                    this
                  );
                },
              },
              {
                key: "open",
                value: function () {
                  return this.connect();
                },
              },
              {
                key: "send",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return t.unshift("message"), this.emit.apply(this, t), this;
                },
              },
              {
                key: "emit",
                value: function (e) {
                  if (gt.hasOwnProperty(e))
                    throw new Error('"' + e + '" is a reserved event name');
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  n.unshift(e);
                  var o = { type: dt.EVENT, data: n, options: {} };
                  if (
                    ((o.options.compress = !1 !== this.flags.compress),
                    "function" === typeof n[n.length - 1])
                  ) {
                    var a = this.ids++,
                      i = n.pop();
                    this._registerAckCallback(a, i), (o.id = a);
                  }
                  var l =
                      this.io.engine &&
                      this.io.engine.transport &&
                      this.io.engine.transport.writable,
                    u = this.flags.volatile && (!l || !this.connected);
                  return (
                    u ||
                      (this.connected
                        ? (this.notifyOutgoingListeners(o), this.packet(o))
                        : this.sendBuffer.push(o)),
                    (this.flags = {}),
                    this
                  );
                },
              },
              {
                key: "_registerAckCallback",
                value: function (e, t) {
                  var n = this,
                    r = this.flags.timeout;
                  if (void 0 !== r) {
                    var o = this.io.setTimeoutFn(function () {
                      delete n.acks[e];
                      for (var r = 0; r < n.sendBuffer.length; r++)
                        n.sendBuffer[r].id === e && n.sendBuffer.splice(r, 1);
                      t.call(n, new Error("operation has timed out"));
                    }, r);
                    this.acks[e] = function () {
                      n.io.clearTimeoutFn(o);
                      for (
                        var e = arguments.length, r = new Array(e), a = 0;
                        a < e;
                        a++
                      )
                        r[a] = arguments[a];
                      t.apply(n, [null].concat(r));
                    };
                  } else this.acks[e] = t;
                },
              },
              {
                key: "packet",
                value: function (e) {
                  (e.nsp = this.nsp), this.io._packet(e);
                },
              },
              {
                key: "onopen",
                value: function () {
                  var e = this;
                  "function" == typeof this.auth
                    ? this.auth(function (t) {
                        e.packet({ type: dt.CONNECT, data: t });
                      })
                    : this.packet({ type: dt.CONNECT, data: this.auth });
                },
              },
              {
                key: "onerror",
                value: function (e) {
                  this.connected || this.emitReserved("connect_error", e);
                },
              },
              {
                key: "onclose",
                value: function (e, t) {
                  (this.connected = !1),
                    delete this.id,
                    this.emitReserved("disconnect", e, t);
                },
              },
              {
                key: "onpacket",
                value: function (e) {
                  if (e.nsp === this.nsp)
                    switch (e.type) {
                      case dt.CONNECT:
                        if (e.data && e.data.sid) {
                          var t = e.data.sid;
                          this.onconnect(t);
                        } else
                          this.emitReserved(
                            "connect_error",
                            new Error(
                              "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                            )
                          );
                        break;
                      case dt.EVENT:
                      case dt.BINARY_EVENT:
                        this.onevent(e);
                        break;
                      case dt.ACK:
                      case dt.BINARY_ACK:
                        this.onack(e);
                        break;
                      case dt.DISCONNECT:
                        this.ondisconnect();
                        break;
                      case dt.CONNECT_ERROR:
                        this.destroy();
                        var n = new Error(e.data.message);
                        (n.data = e.data.data),
                          this.emitReserved("connect_error", n);
                    }
                },
              },
              {
                key: "onevent",
                value: function (e) {
                  var t = e.data || [];
                  null != e.id && t.push(this.ack(e.id)),
                    this.connected
                      ? this.emitEvent(t)
                      : this.receiveBuffer.push(Object.freeze(t));
                },
              },
              {
                key: "emitEvent",
                value: function (e) {
                  if (this._anyListeners && this._anyListeners.length) {
                    var t,
                      r = m(this._anyListeners.slice());
                    try {
                      for (r.s(); !(t = r.n()).done; ) {
                        t.value.apply(this, e);
                      }
                    } catch (Lt) {
                      r.e(Lt);
                    } finally {
                      r.f();
                    }
                  }
                  oe(G(n.prototype), "emit", this).apply(this, e);
                },
              },
              {
                key: "ack",
                value: function (e) {
                  var t = this,
                    n = !1;
                  return function () {
                    if (!n) {
                      n = !0;
                      for (
                        var r = arguments.length, o = new Array(r), a = 0;
                        a < r;
                        a++
                      )
                        o[a] = arguments[a];
                      t.packet({ type: dt.ACK, id: e, data: o });
                    }
                  };
                },
              },
              {
                key: "onack",
                value: function (e) {
                  var t = this.acks[e.id];
                  "function" === typeof t &&
                    (t.apply(this, e.data), delete this.acks[e.id]);
                },
              },
              {
                key: "onconnect",
                value: function (e) {
                  (this.id = e),
                    (this.connected = !0),
                    this.emitBuffered(),
                    this.emitReserved("connect");
                },
              },
              {
                key: "emitBuffered",
                value: function () {
                  var e = this;
                  this.receiveBuffer.forEach(function (t) {
                    return e.emitEvent(t);
                  }),
                    (this.receiveBuffer = []),
                    this.sendBuffer.forEach(function (t) {
                      e.notifyOutgoingListeners(t), e.packet(t);
                    }),
                    (this.sendBuffer = []);
                },
              },
              {
                key: "ondisconnect",
                value: function () {
                  this.destroy(), this.onclose("io server disconnect");
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.subs &&
                    (this.subs.forEach(function (e) {
                      return e();
                    }),
                    (this.subs = void 0)),
                    this.io._destroy(this);
                },
              },
              {
                key: "disconnect",
                value: function () {
                  return (
                    this.connected && this.packet({ type: dt.DISCONNECT }),
                    this.destroy(),
                    this.connected && this.onclose("io client disconnect"),
                    this
                  );
                },
              },
              {
                key: "close",
                value: function () {
                  return this.disconnect();
                },
              },
              {
                key: "compress",
                value: function (e) {
                  return (this.flags.compress = e), this;
                },
              },
              {
                key: "volatile",
                get: function () {
                  return (this.flags.volatile = !0), this;
                },
              },
              {
                key: "timeout",
                value: function (e) {
                  return (this.flags.timeout = e), this;
                },
              },
              {
                key: "onAny",
                value: function (e) {
                  return (
                    (this._anyListeners = this._anyListeners || []),
                    this._anyListeners.push(e),
                    this
                  );
                },
              },
              {
                key: "prependAny",
                value: function (e) {
                  return (
                    (this._anyListeners = this._anyListeners || []),
                    this._anyListeners.unshift(e),
                    this
                  );
                },
              },
              {
                key: "offAny",
                value: function (e) {
                  if (!this._anyListeners) return this;
                  if (e) {
                    for (var t = this._anyListeners, n = 0; n < t.length; n++)
                      if (e === t[n]) return t.splice(n, 1), this;
                  } else this._anyListeners = [];
                  return this;
                },
              },
              {
                key: "listenersAny",
                value: function () {
                  return this._anyListeners || [];
                },
              },
              {
                key: "onAnyOutgoing",
                value: function (e) {
                  return (
                    (this._anyOutgoingListeners =
                      this._anyOutgoingListeners || []),
                    this._anyOutgoingListeners.push(e),
                    this
                  );
                },
              },
              {
                key: "prependAnyOutgoing",
                value: function (e) {
                  return (
                    (this._anyOutgoingListeners =
                      this._anyOutgoingListeners || []),
                    this._anyOutgoingListeners.unshift(e),
                    this
                  );
                },
              },
              {
                key: "offAnyOutgoing",
                value: function (e) {
                  if (!this._anyOutgoingListeners) return this;
                  if (e) {
                    for (
                      var t = this._anyOutgoingListeners, n = 0;
                      n < t.length;
                      n++
                    )
                      if (e === t[n]) return t.splice(n, 1), this;
                  } else this._anyOutgoingListeners = [];
                  return this;
                },
              },
              {
                key: "listenersAnyOutgoing",
                value: function () {
                  return this._anyOutgoingListeners || [];
                },
              },
              {
                key: "notifyOutgoingListeners",
                value: function (e) {
                  if (
                    this._anyOutgoingListeners &&
                    this._anyOutgoingListeners.length
                  ) {
                    var t,
                      n = m(this._anyOutgoingListeners.slice());
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        t.value.apply(this, e.data);
                      }
                    } catch (Lt) {
                      n.e(Lt);
                    } finally {
                      n.f();
                    }
                  }
                },
              },
            ]),
            n
          );
        })(Se);
      function kt(e) {
        (e = e || {}),
          (this.ms = e.min || 100),
          (this.max = e.max || 1e4),
          (this.factor = e.factor || 2),
          (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
          (this.attempts = 0);
      }
      (kt.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
          e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
        }
        return 0 | Math.min(e, this.max);
      }),
        (kt.prototype.reset = function () {
          this.attempts = 0;
        }),
        (kt.prototype.setMin = function (e) {
          this.ms = e;
        }),
        (kt.prototype.setMax = function (e) {
          this.max = e;
        }),
        (kt.prototype.setJitter = function (e) {
          this.jitter = e;
        });
      var wt = (function (t) {
          X(r, t);
          var n = ne(r);
          function r(t, o) {
            var a, i;
            V(this, r),
              ((a = n.call(this)).nsps = {}),
              (a.subs = []),
              t && "object" === typeof t && ((o = t), (t = void 0)),
              ((o = o || {}).path = o.path || "/socket.io"),
              (a.opts = o),
              Ae(Z(a), o),
              a.reconnection(!1 !== o.reconnection),
              a.reconnectionAttempts(o.reconnectionAttempts || 1 / 0),
              a.reconnectionDelay(o.reconnectionDelay || 1e3),
              a.reconnectionDelayMax(o.reconnectionDelayMax || 5e3),
              a.randomizationFactor(
                null !== (i = o.randomizationFactor) && void 0 !== i ? i : 0.5
              ),
              (a.backoff = new kt({
                min: a.reconnectionDelay(),
                max: a.reconnectionDelayMax(),
                jitter: a.randomizationFactor(),
              })),
              a.timeout(null == o.timeout ? 2e4 : o.timeout),
              (a._readyState = "closed"),
              (a.uri = t);
            var l = o.parser || e;
            return (
              (a.encoder = new l.Encoder()),
              (a.decoder = new l.Decoder()),
              (a._autoConnect = !1 !== o.autoConnect),
              a._autoConnect && a.open(),
              a
            );
          }
          return (
            W(r, [
              {
                key: "reconnection",
                value: function (e) {
                  return arguments.length
                    ? ((this._reconnection = !!e), this)
                    : this._reconnection;
                },
              },
              {
                key: "reconnectionAttempts",
                value: function (e) {
                  return void 0 === e
                    ? this._reconnectionAttempts
                    : ((this._reconnectionAttempts = e), this);
                },
              },
              {
                key: "reconnectionDelay",
                value: function (e) {
                  var t;
                  return void 0 === e
                    ? this._reconnectionDelay
                    : ((this._reconnectionDelay = e),
                      null === (t = this.backoff) ||
                        void 0 === t ||
                        t.setMin(e),
                      this);
                },
              },
              {
                key: "randomizationFactor",
                value: function (e) {
                  var t;
                  return void 0 === e
                    ? this._randomizationFactor
                    : ((this._randomizationFactor = e),
                      null === (t = this.backoff) ||
                        void 0 === t ||
                        t.setJitter(e),
                      this);
                },
              },
              {
                key: "reconnectionDelayMax",
                value: function (e) {
                  var t;
                  return void 0 === e
                    ? this._reconnectionDelayMax
                    : ((this._reconnectionDelayMax = e),
                      null === (t = this.backoff) ||
                        void 0 === t ||
                        t.setMax(e),
                      this);
                },
              },
              {
                key: "timeout",
                value: function (e) {
                  return arguments.length
                    ? ((this._timeout = e), this)
                    : this._timeout;
                },
              },
              {
                key: "maybeReconnectOnOpen",
                value: function () {
                  !this._reconnecting &&
                    this._reconnection &&
                    0 === this.backoff.attempts &&
                    this.reconnect();
                },
              },
              {
                key: "open",
                value: function (e) {
                  var t = this;
                  if (~this._readyState.indexOf("open")) return this;
                  this.engine = new tt(this.uri, this.opts);
                  var n = this.engine,
                    r = this;
                  (this._readyState = "opening"), (this.skipReconnect = !1);
                  var o = vt(n, "open", function () {
                      r.onopen(), e && e();
                    }),
                    a = vt(n, "error", function (n) {
                      r.cleanup(),
                        (r._readyState = "closed"),
                        t.emitReserved("error", n),
                        e ? e(n) : r.maybeReconnectOnOpen();
                    });
                  if (!1 !== this._timeout) {
                    var i = this._timeout;
                    0 === i && o();
                    var l = this.setTimeoutFn(function () {
                      o(), n.close(), n.emit("error", new Error("timeout"));
                    }, i);
                    this.opts.autoUnref && l.unref(),
                      this.subs.push(function () {
                        clearTimeout(l);
                      });
                  }
                  return this.subs.push(o), this.subs.push(a), this;
                },
              },
              {
                key: "connect",
                value: function (e) {
                  return this.open(e);
                },
              },
              {
                key: "onopen",
                value: function () {
                  this.cleanup(),
                    (this._readyState = "open"),
                    this.emitReserved("open");
                  var e = this.engine;
                  this.subs.push(
                    vt(e, "ping", this.onping.bind(this)),
                    vt(e, "data", this.ondata.bind(this)),
                    vt(e, "error", this.onerror.bind(this)),
                    vt(e, "close", this.onclose.bind(this)),
                    vt(this.decoder, "decoded", this.ondecoded.bind(this))
                  );
                },
              },
              {
                key: "onping",
                value: function () {
                  this.emitReserved("ping");
                },
              },
              {
                key: "ondata",
                value: function (e) {
                  this.decoder.add(e);
                },
              },
              {
                key: "ondecoded",
                value: function (e) {
                  this.emitReserved("packet", e);
                },
              },
              {
                key: "onerror",
                value: function (e) {
                  this.emitReserved("error", e);
                },
              },
              {
                key: "socket",
                value: function (e, t) {
                  var n = this.nsps[e];
                  return n || ((n = new bt(this, e, t)), (this.nsps[e] = n)), n;
                },
              },
              {
                key: "_destroy",
                value: function (e) {
                  for (
                    var t = 0, n = Object.keys(this.nsps);
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (this.nsps[r].active) return;
                  }
                  this._close();
                },
              },
              {
                key: "_packet",
                value: function (e) {
                  for (var t = this.encoder.encode(e), n = 0; n < t.length; n++)
                    this.engine.write(t[n], e.options);
                },
              },
              {
                key: "cleanup",
                value: function () {
                  this.subs.forEach(function (e) {
                    return e();
                  }),
                    (this.subs.length = 0),
                    this.decoder.destroy();
                },
              },
              {
                key: "_close",
                value: function () {
                  (this.skipReconnect = !0),
                    (this._reconnecting = !1),
                    this.onclose("forced close"),
                    this.engine && this.engine.close();
                },
              },
              {
                key: "disconnect",
                value: function () {
                  return this._close();
                },
              },
              {
                key: "onclose",
                value: function (e, t) {
                  this.cleanup(),
                    this.backoff.reset(),
                    (this._readyState = "closed"),
                    this.emitReserved("close", e, t),
                    this._reconnection &&
                      !this.skipReconnect &&
                      this.reconnect();
                },
              },
              {
                key: "reconnect",
                value: function () {
                  var e = this;
                  if (this._reconnecting || this.skipReconnect) return this;
                  var t = this;
                  if (this.backoff.attempts >= this._reconnectionAttempts)
                    this.backoff.reset(),
                      this.emitReserved("reconnect_failed"),
                      (this._reconnecting = !1);
                  else {
                    var n = this.backoff.duration();
                    this._reconnecting = !0;
                    var r = this.setTimeoutFn(function () {
                      t.skipReconnect ||
                        (e.emitReserved(
                          "reconnect_attempt",
                          t.backoff.attempts
                        ),
                        t.skipReconnect ||
                          t.open(function (n) {
                            n
                              ? ((t._reconnecting = !1),
                                t.reconnect(),
                                e.emitReserved("reconnect_error", n))
                              : t.onreconnect();
                          }));
                    }, n);
                    this.opts.autoUnref && r.unref(),
                      this.subs.push(function () {
                        clearTimeout(r);
                      });
                  }
                },
              },
              {
                key: "onreconnect",
                value: function () {
                  var e = this.backoff.attempts;
                  (this._reconnecting = !1),
                    this.backoff.reset(),
                    this.emitReserved("reconnect", e);
                },
              },
            ]),
            r
          );
        })(Se),
        St = {};
      function Et(e, t) {
        "object" === typeof e && ((t = e), (e = void 0));
        var n,
          r = (function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = e;
            (n = n || ("undefined" !== typeof location && location)),
              null == e && (e = n.protocol + "//" + n.host),
              "string" === typeof e &&
                ("/" === e.charAt(0) &&
                  (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e),
                /^(https?|wss?):\/\//.test(e) ||
                  (e =
                    "undefined" !== typeof n
                      ? n.protocol + "//" + e
                      : "https://" + e),
                (r = et(e))),
              r.port ||
                (/^(http|ws)$/.test(r.protocol)
                  ? (r.port = "80")
                  : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
              (r.path = r.path || "/");
            var o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
            return (
              (r.id = r.protocol + "://" + o + ":" + r.port + t),
              (r.href =
                r.protocol +
                "://" +
                o +
                (n && n.port === r.port ? "" : ":" + r.port)),
              r
            );
          })(e, (t = t || {}).path || "/socket.io"),
          o = r.source,
          a = r.id,
          i = r.path,
          l = St[a] && i in St[a].nsps;
        return (
          t.forceNew || t["force new connection"] || !1 === t.multiplex || l
            ? (n = new wt(o, t))
            : (St[a] || (St[a] = new wt(o, t)), (n = St[a])),
          r.query && !t.query && (t.query = r.queryKey),
          n.socket(r.path, t)
        );
      }
      Object.assign(Et, { Manager: wt, Socket: bt, io: Et, connect: Et });
      var xt = Et("/"),
        Ct = function () {
          var e = s((0, t.useState)(""), 2),
            n = e[0],
            r = e[1];
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)("input", {
                placeholder: "GAME CODE",
                value: n,
                onChange: function (e) {
                  return r(e.target.value);
                },
              }),
              (0, f.jsx)("button", {
                onClick: function () {
                  n && xt.emit("JOIN_GAME", n);
                },
                children: "Join Game",
              }),
            ],
          });
        },
        _t = function () {
          return (0, f.jsx)("button", {
            onClick: function () {
              return xt.emit("JOIN_GAME");
            },
            children: "Create New Game",
          });
        },
        At = function () {
          var e = s(P(z), 2),
            n = (e[0], e[1]),
            r = s(P(L), 2);
          r[0], r[1];
          return (
            (0, t.useEffect)(function () {
              return (
                xt.on("GAME_JOINED", function (e) {
                  n({ connected: !0, loading: !1, gameCode: e });
                }),
                function () {
                  xt.off("GAME_JOINED");
                }
              );
            }, []),
            (0, f.jsxs)("div", {
              id: "welcome-view",
              children: [
                (0, f.jsx)(_t, {}),
                (0, f.jsx)(Q, { text: "OR" }),
                (0, f.jsx)(Ct, {}),
              ],
            })
          );
        },
        Rt = function () {
          return (0, f.jsxs)("div", {
            className: "game-info-box",
            children: [
              (0, f.jsx)(F, { size: "small" }),
              (0, f.jsx)("span", {
                className: "text md",
                children: "Waiting for the other player 2 to join",
              }),
              (0, f.jsx)(Q, {}),
              (0, f.jsx)("span", {
                className: "text",
                children:
                  "Share the game code with the other player if you haven't already",
              }),
            ],
          });
        },
        Tt = function () {
          var e = s(P(z), 1)[0],
            n = s(P(L), 2),
            r = n[0],
            o = n[1];
          (0, t.useEffect)(function () {}, []);
          return r.ready
            ? (0, f.jsxs)("div", {
                className: "game-info-box",
                children: [
                  (0, f.jsx)(F, { size: "small" }),
                  (0, f.jsx)("span", {
                    className: "text md",
                    children: "Waiting for the other player to be ready",
                  }),
                ],
              })
            : (0, f.jsxs)("div", {
                className: "game-info-box",
                children: [
                  (0, f.jsx)("div", {
                    className: "text",
                    style: { paddingBottom: "10px" },
                    children:
                      "Please click on the button below once you are ready to start",
                  }),
                  (0, f.jsx)(J, {
                    label: "READY",
                    onClick: function () {
                      var t = e.gameCode;
                      xt.emit("PLAYER_READY", t),
                        o(i(i({}, r), {}, { ready: !0 }));
                    },
                  }),
                ],
              });
        },
        Ot = {
          playerBox: "PlayerPositions_playerBox__C3fSQ",
          player1: "PlayerPositions_player1__te73-",
          player2: "PlayerPositions_player2__vHf5E",
          dealer: "PlayerPositions_dealer__aJy-J",
          cards: "PlayerPositions_cards__9Snq5",
        },
        It = function () {
          var e = s(P(L), 1)[0],
            r = s((0, t.useState)([]), 2),
            o = r[0],
            a = r[1];
          return (
            (0, t.useEffect)(function () {
              var t = e.dealerExposedCard;
              a([null, t]);
            }, []),
            (0, f.jsxs)("div", {
              className: Ot.dealer,
              children: [
                (0, f.jsx)("h3", { children: "Dealer" }),
                (0, f.jsx)("div", {
                  className: Ot.cards,
                  children: o.map(function (e, t) {
                    var r = null,
                      o = { left: 11 * t + "%", zIndex: t };
                    if (e) {
                      var a = e.id,
                        i = e.suit;
                      r = n(3646)("./".concat(a, "_of_").concat(i, ".png"));
                    } else r = n(7630);
                    return (0,
                    f.jsx)("img", { style: o, src: r }, "dealer-cards-" + t);
                  }),
                }),
              ],
            })
          );
        },
        Nt = function (e) {
          var r = e.number,
            o = s(P(L), 1)[0],
            a = s((0, t.useState)(!1), 2),
            i = a[0],
            l = a[1],
            u = s((0, t.useState)([]), 2),
            c = u[0],
            d = u[1];
          return (
            (0, t.useEffect)(function () {
              var e,
                t = o.myInfo.playerNumber == r;
              l(t),
                (e = t
                  ? (e = o.myInfo.cards).reverse()
                  : Array(o.allPlayersInfo[0].cardCount).fill(null)),
                d(e);
            }, []),
            (0, f.jsxs)("div", {
              className: Ot["player".concat(r)],
              children: [
                (0, f.jsx)("h3", { children: i ? "You" : "Player ".concat(r) }),
                (0, f.jsx)("div", {
                  className: Ot.cards,
                  children: c.reverse().map(function (e, t) {
                    var r = null,
                      o = { left: 11 * t + "%", zIndex: 1 };
                    if (e) {
                      var a = e.id,
                        i = e.suit;
                      r = n(3646)("./".concat(a, "_of_").concat(i, ".png"));
                    } else r = n(7630);
                    return (0,
                    f.jsx)("img", { style: o, src: r }, "dealer-cards-" + t);
                  }),
                }),
              ],
            })
          );
        },
        Mt = function () {
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(Nt, { number: 1 }),
              (0, f.jsx)(Nt, { number: 2 }),
              (0, f.jsx)(It, {}),
            ],
          });
        },
        Pt = function () {
          var e = s(P(z), 1)[0],
            n = s(P(L), 2),
            r = n[0],
            o = n[1];
          return (
            (0, t.useEffect)(function () {
              return (
                xt.on("GAME_READY", function () {
                  o(i(i({}, r), {}, { waiting: !1 }));
                }),
                xt.on("GAME_STARTED", function (e) {
                  o(
                    i(i({}, r), {}, { waiting: !1, ready: !0, started: !0 }, e)
                  );
                }),
                function () {
                  xt.off("GAME_READY"), xt.off("GAME_STARTED");
                }
              );
            }, []),
            (0, f.jsxs)("div", {
              id: "playing-view",
              children: [
                r.started && (0, f.jsx)(Mt, {}),
                (0, f.jsx)("div", {
                  id: "table",
                  children: (0, f.jsxs)("div", {
                    id: "mat",
                    children: [
                      (0, f.jsxs)("div", {
                        id: "game-code-box",
                        children: [
                          (0, f.jsx)("span", { children: "GAME CODE" }),
                          (0, f.jsx)("h3", { children: e.gameCode }),
                        ],
                      }),
                      r.waiting && (0, f.jsx)(Rt, {}),
                      !r.waiting && !r.started && (0, f.jsx)(Tt, {}),
                    ],
                  }),
                }),
              ],
            })
          );
        };
      var zt = function () {
        var e = s(P(z), 2),
          n = e[0],
          r = e[1],
          o = n.gameCode;
        return (
          (0, t.useEffect)(function () {
            return (
              xt.on("connect", function () {
                r(i(i({}, n), {}, { loading: !1, connected: !0 }));
              }),
              function () {
                xt.off("connect");
              }
            );
          }, []),
          (0, f.jsx)(K, {
            children: o ? (0, f.jsx)(Pt, {}) : (0, f.jsx)(At, {}),
          })
        );
      };
      r.createRoot(document.getElementById("root")).render(
        (0, f.jsx)(t.StrictMode, { children: (0, f.jsx)(zt, {}) })
      );
    })();
})();
//# sourceMappingURL=main.85248860.js.map
