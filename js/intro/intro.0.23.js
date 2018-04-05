function TextWithSubline(t, e) {
    var i = new THREE.Object3D,
        n = new THREE.TextGeometry(e, {
            font: t,
            size: 8,
            height: .5
        });
    n.computeBoundingBox();
    var r = new THREE.MeshBasicMaterial({
            color: "#ffffff",
            transparent: !0
        }),
        s = new THREE.Mesh(n, r),
        a = n.boundingBox.max.x;
    s.position.x = -a / 2, i.add(s);
    var n = new THREE.BoxGeometry(60, 1, .1),
        r = new THREE.MeshBasicMaterial({
            color: "#ff0000",
            transparent: !0
        }),
        o = new THREE.Mesh(n, r);
    return o.position.y = -20, i.add(o), i
}

function Text(t, e) {
    var i = new THREE.Object3D,
        n = new THREE.TextGeometry(e, {
            font: t,
            size: 8,
            height: .5
        });
    n.computeBoundingBox();
    var r = new THREE.MeshBasicMaterial({
            color: "#ffffff",
            transparent: !0
        }),
        s = new THREE.Mesh(n, r),
        a = n.boundingBox.max.x;
    return s.position.x = -a / 2, i.add(s), i
}

function PointsOnSphere(t) {
    for (var e = [], i = Math.PI * (3 - Math.sqrt(5)), n = 2 / t, r = 0, s = 0, a = 0, o = 0, l = 0, h = 0; h < t; h++) s = h * n - 1 + n / 2, o = Math.sqrt(1 - s * s), l = h * i, r = Math.cos(l) * o, a = Math.sin(l) * o, e.push(new THREE.Vector3(700 * r, 700 * s, 700 * a));
    return e
}

function fibonacci_sphere(t) {
    var e = 1;
    randomize = !1, randomize && (e = Math.random() * t), points = [], offset = 2 / t, increment = Math.PI * (3 - Math.sqrt(5));
    for (var i = 0; i < t; i++) y = i * offset - 1 + offset / 2, r = Math.sqrt(1 - Math.pow(y, 2)), phi = (i + e) % t * increment, x = Math.cos(phi) * r, z = Math.sin(phi) * r, points.push(new THREE.Vector3(x, y, z));
    return points
}
var dat = dat || {};
dat.gui = dat.gui || {}, dat.utils = dat.utils || {}, dat.controllers = dat.controllers || {}, dat.dom = dat.dom || {}, dat.color = dat.color || {}, dat.utils.css = function () {
    return {
        load: function (t, e) {
            var e = e || document,
                i = e.createElement("link");
            i.type = "text/css", i.rel = "stylesheet", i.href = t, e.getElementsByTagName("head")[0].appendChild(i)
        },
        inject: function (t, e) {
            var e = e || document,
                i = document.createElement("style");
            i.type = "text/css", i.innerHTML = t, e.getElementsByTagName("head")[0].appendChild(i)
        }
    }
}(), dat.utils.common = function () {
    var t = Array.prototype.forEach,
        e = Array.prototype.slice;
    return {
        BREAK: {},
        extend: function (t) {
            return this.each(e.call(arguments, 1), function (e) {
                for (var i in e) this.isUndefined(e[i]) || (t[i] = e[i])
            }, this), t
        },
        defaults: function (t) {
            return this.each(e.call(arguments, 1), function (e) {
                for (var i in e) this.isUndefined(t[i]) && (t[i] = e[i])
            }, this), t
        },
        compose: function () {
            var t = e.call(arguments);
            return function () {
                for (var i = e.call(arguments), n = t.length - 1; n >= 0; n--) i = [t[n].apply(this, i)];
                return i[0]
            }
        },
        each: function (e, i, n) {
            if (t && e.forEach === t) e.forEach(i, n);
            else if (e.length === e.length + 0)
                for (var r = 0, s = e.length; r < s && !(r in e && i.call(n, e[r], r) === this.BREAK); r++);
            else
                for (r in e)
                    if (i.call(n, e[r], r) === this.BREAK) break
        },
        defer: function (t) {
            setTimeout(t, 0)
        },
        toArray: function (t) {
            return t.toArray ? t.toArray() : e.call(t)
        },
        isUndefined: function (t) {
            return void 0 === t
        },
        isNull: function (t) {
            return null === t
        },
        isNaN: function (t) {
            return t !== t
        },
        isArray: Array.isArray || function (t) {
            return t.constructor === Array
        },
        isObject: function (t) {
            return t === Object(t)
        },
        isNumber: function (t) {
            return t === t + 0
        },
        isString: function (t) {
            return t === t + ""
        },
        isBoolean: function (t) {
            return t === !1 || t === !0
        },
        isFunction: function (t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }
}(), dat.controllers.Controller = function (t) {
    var e = function (t, e) {
        this.initialValue = t[e], this.domElement = document.createElement("div"), this.object = t, this.property = e, this.__onFinishChange = this.__onChange = void 0
    };
    return t.extend(e.prototype, {
        onChange: function (t) {
            return this.__onChange = t, this
        },
        onFinishChange: function (t) {
            return this.__onFinishChange = t, this
        },
        setValue: function (t) {
            return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this
        },
        getValue: function () {
            return this.object[this.property]
        },
        updateDisplay: function () {
            return this
        },
        isModified: function () {
            return this.initialValue !== this.getValue()
        }
    }), e
}(dat.utils.common), dat.dom.dom = function (t) {
    function e(e) {
        return "0" === e || t.isUndefined(e) ? 0 : (e = e.match(n), t.isNull(e) ? 0 : parseFloat(e[1]))
    }
    var i = {};
    t.each({
        HTMLEvents: ["change"],
        MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
        KeyboardEvents: ["keydown"]
    }, function (e, n) {
        t.each(e, function (t) {
            i[t] = n
        })
    });
    var n = /(\d+(\.\d+)?)px/,
        r = {
            makeSelectable: function (t, e) {
                void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function () {
                    return !1
                } : function () {}, t.style.MozUserSelect = e ? "auto" : "none", t.style.KhtmlUserSelect = e ? "auto" : "none", t.unselectable = e ? "on" : "off")
            },
            makeFullscreen: function (e, i, n) {
                t.isUndefined(i) && (i = !0), t.isUndefined(n) && (n = !0), e.style.position = "absolute", i && (e.style.left = 0, e.style.right = 0), n && (e.style.top = 0, e.style.bottom = 0)
            },
            fakeEvent: function (e, n, r, s) {
                var r = r || {},
                    a = i[n];
                if (!a) throw Error("Event type " + n + " not supported.");
                var o = document.createEvent(a);
                switch (a) {
                    case "MouseEvents":
                        o.initMouseEvent(n, r.bubbles || !1, r.cancelable || !0, window, r.clickCount || 1, 0, 0, r.x || r.clientX || 0, r.y || r.clientY || 0, !1, !1, !1, !1, 0, null);
                        break;
                    case "KeyboardEvents":
                        a = o.initKeyboardEvent || o.initKeyEvent, t.defaults(r, {
                            cancelable: !0,
                            ctrlKey: !1,
                            altKey: !1,
                            shiftKey: !1,
                            metaKey: !1,
                            keyCode: void 0,
                            charCode: void 0
                        }), a(n, r.bubbles || !1, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);
                        break;
                    default:
                        o.initEvent(n, r.bubbles || !1, r.cancelable || !0)
                }
                t.defaults(o, s), e.dispatchEvent(o)
            },
            bind: function (t, e, i, n) {
                return t.addEventListener ? t.addEventListener(e, i, n || !1) : t.attachEvent && t.attachEvent("on" + e, i), r
            },
            unbind: function (t, e, i, n) {
                return t.removeEventListener ? t.removeEventListener(e, i, n || !1) : t.detachEvent && t.detachEvent("on" + e, i), r
            },
            addClass: function (t, e) {
                if (void 0 === t.className) t.className = e;
                else if (t.className !== e) {
                    var i = t.className.split(/ +/);
                    i.indexOf(e) == -1 && (i.push(e), t.className = i.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                }
                return r
            },
            removeClass: function (t, e) {
                if (e) {
                    if (void 0 !== t.className)
                        if (t.className === e) t.removeAttribute("class");
                        else {
                            var i = t.className.split(/ +/),
                                n = i.indexOf(e);
                            n != -1 && (i.splice(n, 1), t.className = i.join(" "))
                        }
                } else t.className = void 0;
                return r
            },
            hasClass: function (t, e) {
                return RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)").test(t.className) || !1
            },
            getWidth: function (t) {
                return t = getComputedStyle(t), e(t["border-left-width"]) + e(t["border-right-width"]) + e(t["padding-left"]) + e(t["padding-right"]) + e(t.width)
            },
            getHeight: function (t) {
                return t = getComputedStyle(t), e(t["border-top-width"]) + e(t["border-bottom-width"]) + e(t["padding-top"]) + e(t["padding-bottom"]) + e(t.height)
            },
            getOffset: function (t) {
                var e = {
                    left: 0,
                    top: 0
                };
                if (t.offsetParent)
                    do e.left += t.offsetLeft, e.top += t.offsetTop; while (t = t.offsetParent);
                return e
            },
            isActive: function (t) {
                return t === document.activeElement && (t.type || t.href)
            }
        };
    return r
}(dat.utils.common), dat.controllers.OptionController = function (t, e, i) {
    var n = function (t, r, s) {
        n.superclass.call(this, t, r);
        var a = this;
        if (this.__select = document.createElement("select"), i.isArray(s)) {
            var o = {};
            i.each(s, function (t) {
                o[t] = t
            }), s = o
        }
        i.each(s, function (t, e) {
            var i = document.createElement("option");
            i.innerHTML = e, i.setAttribute("value", t), a.__select.appendChild(i)
        }), this.updateDisplay(), e.bind(this.__select, "change", function () {
            a.setValue(this.options[this.selectedIndex].value)
        }), this.domElement.appendChild(this.__select)
    };
    return n.superclass = t, i.extend(n.prototype, t.prototype, {
        setValue: function (t) {
            return t = n.superclass.prototype.setValue.call(this, t), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), t
        },
        updateDisplay: function () {
            return this.__select.value = this.getValue(), n.superclass.prototype.updateDisplay.call(this)
        }
    }), n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.NumberController = function (t, e) {
    var i = function (t, n, r) {
        i.superclass.call(this, t, n), r = r || {}, this.__min = r.min, this.__max = r.max, this.__step = r.step, t = this.__impliedStep = e.isUndefined(this.__step) ? 0 == this.initialValue ? 1 : Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__step, t = t.toString(), this.__precision = t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0
    };
    return i.superclass = t, e.extend(i.prototype, t.prototype, {
        setValue: function (t) {
            return void 0 !== this.__min && t < this.__min ? t = this.__min : void 0 !== this.__max && t > this.__max && (t = this.__max), void 0 !== this.__step && t % this.__step != 0 && (t = Math.round(t / this.__step) * this.__step), i.superclass.prototype.setValue.call(this, t)
        },
        min: function (t) {
            return this.__min = t, this
        },
        max: function (t) {
            return this.__max = t, this
        },
        step: function (t) {
            return this.__step = t, this
        }
    }), i
}(dat.controllers.Controller, dat.utils.common), dat.controllers.NumberControllerBox = function (t, e, i) {
    var n = function (t, r, s) {
        function a() {
            var t = parseFloat(c.__input.value);
            i.isNaN(t) || c.setValue(t)
        }

        function o(t) {
            var e = h - t.clientY;
            c.setValue(c.getValue() + e * c.__impliedStep), h = t.clientY
        }

        function l() {
            e.unbind(window, "mousemove", o), e.unbind(window, "mouseup", l)
        }
        this.__truncationSuspended = !1, n.superclass.call(this, t, r, s);
        var h, c = this;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "change", a), e.bind(this.__input, "blur", function () {
            a(), c.__onFinishChange && c.__onFinishChange.call(c, c.getValue())
        }), e.bind(this.__input, "mousedown", function (t) {
            e.bind(window, "mousemove", o), e.bind(window, "mouseup", l), h = t.clientY
        }), e.bind(this.__input, "keydown", function (t) {
            13 === t.keyCode && (c.__truncationSuspended = !0, this.blur(), c.__truncationSuspended = !1)
        }), this.updateDisplay(), this.domElement.appendChild(this.__input)
    };
    return n.superclass = t, i.extend(n.prototype, t.prototype, {
        updateDisplay: function () {
            var t, e = this.__input;
            if (this.__truncationSuspended) t = this.getValue();
            else {
                t = this.getValue();
                var i = Math.pow(10, this.__precision);
                t = Math.round(t * i) / i
            }
            return e.value = t, n.superclass.prototype.updateDisplay.call(this)
        }
    }), n
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.common), dat.controllers.NumberControllerSlider = function (t, e, i, n, r) {
    var s = function (t, i, n, r, a) {
        function o(t) {
            t.preventDefault();
            var i = e.getOffset(h.__background),
                n = e.getWidth(h.__background);
            return h.setValue(h.__min + (h.__max - h.__min) * ((t.clientX - i.left) / (i.left + n - i.left))), !1
        }

        function l() {
            e.unbind(window, "mousemove", o), e.unbind(window, "mouseup", l), h.__onFinishChange && h.__onFinishChange.call(h, h.getValue())
        }
        s.superclass.call(this, t, i, {
            min: n,
            max: r,
            step: a
        });
        var h = this;
        this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), e.bind(this.__background, "mousedown", function (t) {
            e.bind(window, "mousemove", o), e.bind(window, "mouseup", l), o(t)
        }), e.addClass(this.__background, "slider"), e.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
    };
    return s.superclass = t, s.useDefaultStyles = function () {
        i.inject(r)
    }, n.extend(s.prototype, t.prototype, {
        updateDisplay: function () {
            return this.__foreground.style.width = (this.getValue() - this.__min) / (this.__max - this.__min) * 100 + "%", s.superclass.prototype.updateDisplay.call(this)
        }
    }), s
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"), dat.controllers.FunctionController = function (t, e, i) {
    var n = function (t, i, r) {
        n.superclass.call(this, t, i);
        var s = this;
        this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === r ? "Fire" : r, e.bind(this.__button, "click", function (t) {
            return t.preventDefault(), s.fire(), !1
        }), e.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
    };
    return n.superclass = t, i.extend(n.prototype, t.prototype, {
        fire: function () {
            this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object)
        }
    }), n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.BooleanController = function (t, e, i) {
    var n = function (t, i) {
        n.superclass.call(this, t, i);
        var r = this;
        this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), e.bind(this.__checkbox, "change", function () {
            r.setValue(!r.__prev)
        }, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
    };
    return n.superclass = t, i.extend(n.prototype, t.prototype, {
        setValue: function (t) {
            return t = n.superclass.prototype.setValue.call(this, t), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), t
        },
        updateDisplay: function () {
            return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, n.superclass.prototype.updateDisplay.call(this)
        }
    }), n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.color.toString = function (t) {
    return function (e) {
        if (1 == e.a || t.isUndefined(e.a)) {
            for (e = e.hex.toString(16); e.length < 6;) e = "0" + e;
            return "#" + e
        }
        return "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + e.a + ")"
    }
}(dat.utils.common), dat.color.interpret = function (t, e) {
    var i, n, r = [{
        litmus: e.isString,
        conversions: {
            THREE_CHAR_HEX: {
                read: function (t) {
                    return t = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i), null !== t && {
                        space: "HEX",
                        hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString())
                    }
                },
                write: t
            },
            SIX_CHAR_HEX: {
                read: function (t) {
                    return t = t.match(/^#([A-F0-9]{6})$/i), null !== t && {
                        space: "HEX",
                        hex: parseInt("0x" + t[1].toString())
                    }
                },
                write: t
            },
            CSS_RGB: {
                read: function (t) {
                    return t = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/), null !== t && {
                        space: "RGB",
                        r: parseFloat(t[1]),
                        g: parseFloat(t[2]),
                        b: parseFloat(t[3])
                    }
                },
                write: t
            },
            CSS_RGBA: {
                read: function (t) {
                    return t = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/), null !== t && {
                        space: "RGB",
                        r: parseFloat(t[1]),
                        g: parseFloat(t[2]),
                        b: parseFloat(t[3]),
                        a: parseFloat(t[4])
                    }
                },
                write: t
            }
        }
    }, {
        litmus: e.isNumber,
        conversions: {
            HEX: {
                read: function (t) {
                    return {
                        space: "HEX",
                        hex: t,
                        conversionName: "HEX"
                    }
                },
                write: function (t) {
                    return t.hex
                }
            }
        }
    }, {
        litmus: e.isArray,
        conversions: {
            RGB_ARRAY: {
                read: function (t) {
                    return 3 == t.length && {
                        space: "RGB",
                        r: t[0],
                        g: t[1],
                        b: t[2]
                    }
                },
                write: function (t) {
                    return [t.r, t.g, t.b]
                }
            },
            RGBA_ARRAY: {
                read: function (t) {
                    return 4 == t.length && {
                        space: "RGB",
                        r: t[0],
                        g: t[1],
                        b: t[2],
                        a: t[3]
                    }
                },
                write: function (t) {
                    return [t.r, t.g, t.b, t.a]
                }
            }
        }
    }, {
        litmus: e.isObject,
        conversions: {
            RGBA_OBJ: {
                read: function (t) {
                    return !!(e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) && e.isNumber(t.a)) && {
                        space: "RGB",
                        r: t.r,
                        g: t.g,
                        b: t.b,
                        a: t.a
                    }
                },
                write: function (t) {
                    return {
                        r: t.r,
                        g: t.g,
                        b: t.b,
                        a: t.a
                    }
                }
            },
            RGB_OBJ: {
                read: function (t) {
                    return !!(e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b)) && {
                        space: "RGB",
                        r: t.r,
                        g: t.g,
                        b: t.b
                    }
                },
                write: function (t) {
                    return {
                        r: t.r,
                        g: t.g,
                        b: t.b
                    }
                }
            },
            HSVA_OBJ: {
                read: function (t) {
                    return !!(e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) && e.isNumber(t.a)) && {
                        space: "HSV",
                        h: t.h,
                        s: t.s,
                        v: t.v,
                        a: t.a
                    }
                },
                write: function (t) {
                    return {
                        h: t.h,
                        s: t.s,
                        v: t.v,
                        a: t.a
                    }
                }
            },
            HSV_OBJ: {
                read: function (t) {
                    return !!(e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v)) && {
                        space: "HSV",
                        h: t.h,
                        s: t.s,
                        v: t.v
                    }
                },
                write: function (t) {
                    return {
                        h: t.h,
                        s: t.s,
                        v: t.v
                    }
                }
            }
        }
    }];
    return function () {
        n = !1;
        var t = arguments.length > 1 ? e.toArray(arguments) : arguments[0];
        return e.each(r, function (r) {
            if (r.litmus(t)) return e.each(r.conversions, function (r, s) {
                if (i = r.read(t), n === !1 && i !== !1) return n = i, i.conversionName = s, i.conversion = r, e.BREAK
            }), e.BREAK
        }), n
    }
}(dat.color.toString, dat.utils.common), dat.GUI = dat.gui.GUI = function (t, e, i, n, r, s, a, o, l, h, c, u, d, f, p) {
    function _(t, e, i, s) {
        if (void 0 === e[i]) throw Error("Object " + e + ' has no property "' + i + '"');
        s.color ? e = new c(e, i) : (e = [e, i].concat(s.factoryArgs), e = n.apply(t, e)), s.before instanceof r && (s.before = s.before.__li), v(t, e), f.addClass(e.domElement, "c"), i = document.createElement("span"), f.addClass(i, "property-name"), i.innerHTML = e.property;
        var a = document.createElement("div");
        return a.appendChild(i), a.appendChild(e.domElement), s = m(t, a, s.before), f.addClass(s, H.CLASS_CONTROLLER_ROW), f.addClass(s, typeof e.getValue()), g(t, s, e), t.__controllers.push(e), e
    }

    function m(t, e, i) {
        var n = document.createElement("li");
        return e && n.appendChild(e), i ? t.__ul.insertBefore(n, params.before) : t.__ul.appendChild(n), t.onResize(), n
    }

    function g(t, e, i) {
        if (i.__li = e, i.__gui = t, p.extend(i, {
                options: function (e) {
                    return arguments.length > 1 ? (i.remove(), _(t, i.object, i.property, {
                        before: i.__li.nextElementSibling,
                        factoryArgs: [p.toArray(arguments)]
                    })) : p.isArray(e) || p.isObject(e) ? (i.remove(), _(t, i.object, i.property, {
                        before: i.__li.nextElementSibling,
                        factoryArgs: [e]
                    })) : void 0
                },
                name: function (t) {
                    return i.__li.firstElementChild.firstElementChild.innerHTML = t, i
                },
                listen: function () {
                    return i.__gui.listen(i), i
                },
                remove: function () {
                    return i.__gui.remove(i), i
                }
            }), i instanceof l) {
            var n = new o(i.object, i.property, {
                min: i.__min,
                max: i.__max,
                step: i.__step
            });
            p.each(["updateDisplay", "onChange", "onFinishChange"], function (t) {
                var e = i[t],
                    r = n[t];
                i[t] = n[t] = function () {
                    var t = Array.prototype.slice.call(arguments);
                    return e.apply(i, t), r.apply(n, t)
                }
            }), f.addClass(e, "has-slider"), i.domElement.insertBefore(n.domElement, i.domElement.firstElementChild)
        } else if (i instanceof o) {
            var r = function (e) {
                return p.isNumber(i.__min) && p.isNumber(i.__max) ? (i.remove(), _(t, i.object, i.property, {
                    before: i.__li.nextElementSibling,
                    factoryArgs: [i.__min, i.__max, i.__step]
                })) : e
            };
            i.min = p.compose(r, i.min), i.max = p.compose(r, i.max)
        } else i instanceof s ? (f.bind(e, "click", function () {
            f.fakeEvent(i.__checkbox, "click")
        }), f.bind(i.__checkbox, "click", function (t) {
            t.stopPropagation()
        })) : i instanceof a ? (f.bind(e, "click", function () {
            f.fakeEvent(i.__button, "click")
        }), f.bind(e, "mouseover", function () {
            f.addClass(i.__button, "hover")
        }), f.bind(e, "mouseout", function () {
            f.removeClass(i.__button, "hover")
        })) : i instanceof c && (f.addClass(e, "color"), i.updateDisplay = p.compose(function (t) {
            return e.style.borderLeftColor = i.__color.toString(), t
        }, i.updateDisplay), i.updateDisplay());
        i.setValue = p.compose(function (e) {
            return t.getRoot().__preset_select && i.isModified() && E(t.getRoot(), !0), e
        }, i.setValue)
    }

    function v(t, e) {
        var i = t.getRoot(),
            n = i.__rememberedObjects.indexOf(e.object);
        if (n != -1) {
            var r = i.__rememberedObjectIndecesToControllers[n];
            if (void 0 === r && (r = {}, i.__rememberedObjectIndecesToControllers[n] = r), r[e.property] = e, i.load && i.load.remembered) {
                if (i = i.load.remembered, i[t.preset]) i = i[t.preset];
                else {
                    if (!i[R]) return;
                    i = i[R]
                }
                i[n] && void 0 !== i[n][e.property] && (n = i[n][e.property], e.initialValue = n, e.setValue(n))
            }
        }
    }

    function b(t) {
        var e = t.__save_row = document.createElement("li");
        f.addClass(t.domElement, "has-save"), t.__ul.insertBefore(e, t.__ul.firstChild), f.addClass(e, "save-row");
        var i = document.createElement("span");
        i.innerHTML = "&nbsp;", f.addClass(i, "button gears");
        var n = document.createElement("span");
        n.innerHTML = "Save", f.addClass(n, "button"), f.addClass(n, "save");
        var r = document.createElement("span");
        r.innerHTML = "New", f.addClass(r, "button"), f.addClass(r, "save-as");
        var s = document.createElement("span");
        s.innerHTML = "Revert", f.addClass(s, "button"), f.addClass(s, "revert");
        var a = t.__preset_select = document.createElement("select");
        if (t.load && t.load.remembered ? p.each(t.load.remembered, function (e, i) {
                T(t, i, i == t.preset)
            }) : T(t, R, !1), f.bind(a, "change", function () {
                for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].innerHTML = t.__preset_select[e].value;
                t.preset = this.value
            }), e.appendChild(a), e.appendChild(i), e.appendChild(n), e.appendChild(r), e.appendChild(s), S) {
            var e = document.getElementById("dg-save-locally"),
                o = document.getElementById("dg-local-explain");
            e.style.display = "block", e = document.getElementById("dg-local-storage"), "true" === localStorage.getItem(document.location.href + ".isLocal") && e.setAttribute("checked", "checked");
            var l = function () {
                o.style.display = t.useLocalStorage ? "block" : "none"
            };
            l(), f.bind(e, "change", function () {
                t.useLocalStorage = !t.useLocalStorage, l()
            })
        }
        var h = document.getElementById("dg-new-constructor");
        f.bind(h, "keydown", function (t) {
            t.metaKey && (67 === t.which || 67 == t.keyCode) && P.hide()
        }), f.bind(i, "click", function () {
            h.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2), P.show(), h.focus(), h.select()
        }), f.bind(n, "click", function () {
            t.save()
        }), f.bind(r, "click", function () {
            var e = prompt("Enter a new preset name.");
            e && t.saveAs(e)
        }), f.bind(s, "click", function () {
            t.revert()
        })
    }

    function y(t) {
        function e(e) {
            return e.preventDefault(), r = e.clientX, f.addClass(t.__closeButton, H.CLASS_DRAG), f.bind(window, "mousemove", i), f.bind(window, "mouseup", n), !1
        }

        function i(e) {
            return e.preventDefault(), t.width += r - e.clientX, t.onResize(), r = e.clientX, !1
        }

        function n() {
            f.removeClass(t.__closeButton, H.CLASS_DRAG), f.unbind(window, "mousemove", i), f.unbind(window, "mouseup", n)
        }
        t.__resize_handle = document.createElement("div"), p.extend(t.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute"
        });
        var r;
        f.bind(t.__resize_handle, "mousedown", e), f.bind(t.__closeButton, "mousedown", e), t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild)
    }

    function x(t, e) {
        t.domElement.style.width = e + "px", t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px"), t.__closeButton && (t.__closeButton.style.width = e + "px")
    }

    function w(t, e) {
        var i = {};
        return p.each(t.__rememberedObjects, function (n, r) {
            var s = {};
            p.each(t.__rememberedObjectIndecesToControllers[r], function (t, i) {
                s[i] = e ? t.initialValue : t.getValue()
            }), i[r] = s
        }), i
    }

    function T(t, e, i) {
        var n = document.createElement("option");
        n.innerHTML = e, n.value = e, t.__preset_select.appendChild(n), i && (t.__preset_select.selectedIndex = t.__preset_select.length - 1)
    }

    function E(t, e) {
        var i = t.__preset_select[t.__preset_select.selectedIndex];
        i.innerHTML = e ? i.value + "*" : i.value
    }

    function C(t) {
        0 != t.length && u(function () {
            C(t)
        }), p.each(t, function (t) {
            t.updateDisplay()
        })
    }
    t.inject(i);
    var S, R = "Default";
    try {
        S = "localStorage" in window && null !== window.localStorage
    } catch (k) {
        S = !1
    }
    var P, A, O = !0,
        M = !1,
        D = [],
        H = function (t) {
            function e() {
                localStorage.setItem(document.location.href + ".gui", JSON.stringify(n.getSaveObject()))
            }

            function i() {
                var t = n.getRoot();
                t.width += 1, p.defer(function () {
                    t.width -= 1
                })
            }
            var n = this;
            this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), f.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], t = t || {}, t = p.defaults(t, {
                autoPlace: !0,
                width: H.DEFAULT_WIDTH
            }), t = p.defaults(t, {
                resizable: t.autoPlace,
                hideable: t.autoPlace
            }), p.isUndefined(t.load) ? t.load = {
                preset: R
            } : t.preset && (t.load.preset = t.preset), p.isUndefined(t.parent) && t.hideable && D.push(this), t.resizable = p.isUndefined(t.parent) && t.resizable, t.autoPlace && p.isUndefined(t.scrollable) && (t.scrollable = !0);
            var r = S && "true" === localStorage.getItem(document.location.href + ".isLocal");
            if (Object.defineProperties(this, {
                    parent: {
                        get: function () {
                            return t.parent
                        }
                    },
                    scrollable: {
                        get: function () {
                            return t.scrollable
                        }
                    },
                    autoPlace: {
                        get: function () {
                            return t.autoPlace
                        }
                    },
                    preset: {
                        get: function () {
                            return n.parent ? n.getRoot().preset : t.load.preset
                        },
                        set: function (e) {
                            for (n.parent ? n.getRoot().preset = e : t.load.preset = e, e = 0; e < this.__preset_select.length; e++) this.__preset_select[e].value == this.preset && (this.__preset_select.selectedIndex = e);
                            n.revert()
                        }
                    },
                    width: {
                        get: function () {
                            return t.width
                        },
                        set: function (e) {
                            t.width = e, x(n, e)
                        }
                    },
                    name: {
                        get: function () {
                            return t.name
                        },
                        set: function (e) {
                            t.name = e, a && (a.innerHTML = t.name)
                        }
                    },
                    closed: {
                        get: function () {
                            return t.closed
                        },
                        set: function (e) {
                            t.closed = e, t.closed ? f.addClass(n.__ul, H.CLASS_CLOSED) : f.removeClass(n.__ul, H.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = e ? H.TEXT_OPEN : H.TEXT_CLOSED)
                        }
                    },
                    load: {
                        get: function () {
                            return t.load
                        }
                    },
                    useLocalStorage: {
                        get: function () {
                            return r
                        },
                        set: function (t) {
                            S && ((r = t) ? f.bind(window, "unload", e) : f.unbind(window, "unload", e), localStorage.setItem(document.location.href + ".isLocal", t))
                        }
                    }
                }), p.isUndefined(t.parent)) {
                if (t.closed = !1, f.addClass(this.domElement, H.CLASS_MAIN), f.makeSelectable(this.domElement, !1), S && r) {
                    n.useLocalStorage = !0;
                    var s = localStorage.getItem(document.location.href + ".gui");
                    s && (t.load = JSON.parse(s))
                }
                this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = H.TEXT_CLOSED, f.addClass(this.__closeButton, H.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), f.bind(this.__closeButton, "click", function () {
                    n.closed = !n.closed
                })
            } else {
                void 0 === t.closed && (t.closed = !0);
                var a = document.createTextNode(t.name);
                f.addClass(a, "controller-name"), s = m(n, a), f.addClass(this.__ul, H.CLASS_CLOSED), f.addClass(s, "title"), f.bind(s, "click", function (t) {
                    return t.preventDefault(), n.closed = !n.closed, !1
                }), t.closed || (this.closed = !1)
            }
            t.autoPlace && (p.isUndefined(t.parent) && (O && (A = document.createElement("div"), f.addClass(A, "dg"), f.addClass(A, H.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(A), O = !1), A.appendChild(this.domElement), f.addClass(this.domElement, H.CLASS_AUTO_PLACE)), this.parent || x(n, t.width)), f.bind(window, "resize", function () {
                n.onResize()
            }), f.bind(this.__ul, "webkitTransitionEnd", function () {
                n.onResize()
            }), f.bind(this.__ul, "transitionend", function () {
                n.onResize()
            }), f.bind(this.__ul, "oTransitionEnd", function () {
                n.onResize()
            }), this.onResize(), t.resizable && y(this), n.getRoot(), t.parent || i()
        };
    return H.toggleHide = function () {
        M = !M, p.each(D, function (t) {
            t.domElement.style.zIndex = M ? -999 : 999, t.domElement.style.opacity = M ? 0 : 1
        })
    }, H.CLASS_AUTO_PLACE = "a", H.CLASS_AUTO_PLACE_CONTAINER = "ac", H.CLASS_MAIN = "main", H.CLASS_CONTROLLER_ROW = "cr", H.CLASS_TOO_TALL = "taller-than-window", H.CLASS_CLOSED = "closed", H.CLASS_CLOSE_BUTTON = "close-button", H.CLASS_DRAG = "drag", H.DEFAULT_WIDTH = 245, H.TEXT_CLOSED = "Close Controls", H.TEXT_OPEN = "Open Controls", f.bind(window, "keydown", function (t) {
        "text" !== document.activeElement.type && (72 === t.which || 72 == t.keyCode) && H.toggleHide()
    }, !1), p.extend(H.prototype, {
        add: function (t, e) {
            return _(this, t, e, {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
            })
        },
        addColor: function (t, e) {
            return _(this, t, e, {
                color: !0
            })
        },
        remove: function (t) {
            this.__ul.removeChild(t.__li), this.__controllers.slice(this.__controllers.indexOf(t), 1);
            var e = this;
            p.defer(function () {
                e.onResize()
            })
        },
        destroy: function () {
            this.autoPlace && A.removeChild(this.domElement)
        },
        addFolder: function (t) {
            if (void 0 !== this.__folders[t]) throw Error('You already have a folder in this GUI by the name "' + t + '"');
            var e = {
                name: t,
                parent: this
            };
            return e.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed, e.load = this.load.folders[t]), e = new H(e), this.__folders[t] = e, t = m(this, e.domElement), f.addClass(t, "folder"), e
        },
        open: function () {
            this.closed = !1
        },
        close: function () {
            this.closed = !0
        },
        onResize: function () {
            var t = this.getRoot();
            if (t.scrollable) {
                var e = f.getOffset(t.__ul).top,
                    i = 0;
                p.each(t.__ul.childNodes, function (e) {
                    t.autoPlace && e === t.__save_row || (i += f.getHeight(e))
                }), window.innerHeight - e - 20 < i ? (f.addClass(t.domElement, H.CLASS_TOO_TALL), t.__ul.style.height = window.innerHeight - e - 20 + "px") : (f.removeClass(t.domElement, H.CLASS_TOO_TALL), t.__ul.style.height = "auto")
            }
            t.__resize_handle && p.defer(function () {
                t.__resize_handle.style.height = t.__ul.offsetHeight + "px"
            }), t.__closeButton && (t.__closeButton.style.width = t.width + "px")
        },
        remember: function () {
            if (p.isUndefined(P) && (P = new d, P.domElement.innerHTML = e), this.parent) throw Error("You can only call remember on a top level GUI.");
            var t = this;
            p.each(Array.prototype.slice.call(arguments), function (e) {
                0 == t.__rememberedObjects.length && b(t), t.__rememberedObjects.indexOf(e) == -1 && t.__rememberedObjects.push(e)
            }), this.autoPlace && x(this, this.width)
        },
        getRoot: function () {
            for (var t = this; t.parent;) t = t.parent;
            return t
        },
        getSaveObject: function () {
            var t = this.load;
            return t.closed = this.closed, this.__rememberedObjects.length > 0 && (t.preset = this.preset, t.remembered || (t.remembered = {}), t.remembered[this.preset] = w(this)), t.folders = {}, p.each(this.__folders, function (e, i) {
                t.folders[i] = e.getSaveObject()
            }), t
        },
        save: function () {
            this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = w(this), E(this, !1)
        },
        saveAs: function (t) {
            this.load.remembered || (this.load.remembered = {}, this.load.remembered[R] = w(this, !0)), this.load.remembered[t] = w(this), this.preset = t, T(this, t, !0)
        },
        revert: function (t) {
            p.each(this.__controllers, function (e) {
                this.getRoot().load.remembered ? v(t || this.getRoot(), e) : e.setValue(e.initialValue)
            }, this), p.each(this.__folders, function (t) {
                t.revert(t)
            }), t || E(this.getRoot(), !1)
        },
        listen: function (t) {
            var e = 0 == this.__listening.length;
            this.__listening.push(t), e && C(this.__listening)
        }
    }), H
}(dat.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n", dat.controllers.factory = function (t, e, i, n, r, s, a) {
    return function (o, l, h, c) {
        var u = o[l];
        return a.isArray(h) || a.isObject(h) ? new t(o, l, h) : a.isNumber(u) ? a.isNumber(h) && a.isNumber(c) ? new i(o, l, h, c) : new e(o, l, {
            min: h,
            max: c
        }) : a.isString(u) ? new n(o, l) : a.isFunction(u) ? new r(o, l, "") : a.isBoolean(u) ? new s(o, l) : void 0
    }
}(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function (t, e, i) {
    var n = function (t, i) {
        function r() {
            s.setValue(s.__input.value)
        }
        n.superclass.call(this, t, i);
        var s = this;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "keyup", r), e.bind(this.__input, "change", r), e.bind(this.__input, "blur", function () {
            s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
        }), e.bind(this.__input, "keydown", function (t) {
            13 === t.keyCode && this.blur()
        }), this.updateDisplay(), this.domElement.appendChild(this.__input)
    };
    return n.superclass = t, i.extend(n.prototype, t.prototype, {
        updateDisplay: function () {
            return e.isActive(this.__input) || (this.__input.value = this.getValue()), n.superclass.prototype.updateDisplay.call(this)
        }
    }), n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController, dat.controllers.ColorController = function (t, e, i, n, r) {
    function s(t, e, i, n) {
        t.style.background = "", r.each(l, function (r) {
            t.style.cssText += "background: " + r + "linear-gradient(" + e + ", " + i + " 0%, " + n + " 100%); "
        })
    }

    function a(t) {
        t.style.background = "", t.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", t.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
    }
    var o = function (t, l) {
        function h(t) {
            f(t), e.bind(window, "mousemove", f), e.bind(window, "mouseup", c)
        }

        function c() {
            e.unbind(window, "mousemove", f), e.unbind(window, "mouseup", c)
        }

        function u() {
            var t = n(this.value);
            t !== !1 ? (_.__color.__state = t, _.setValue(_.__color.toOriginal())) : this.value = _.__color.toString()
        }

        function d() {
            e.unbind(window, "mousemove", p), e.unbind(window, "mouseup", d)
        }

        function f(t) {
            t.preventDefault();
            var i = e.getWidth(_.__saturation_field),
                n = e.getOffset(_.__saturation_field),
                r = (t.clientX - n.left + document.body.scrollLeft) / i,
                t = 1 - (t.clientY - n.top + document.body.scrollTop) / i;
            return t > 1 ? t = 1 : t < 0 && (t = 0), r > 1 ? r = 1 : r < 0 && (r = 0), _.__color.v = t, _.__color.s = r, _.setValue(_.__color.toOriginal()), !1
        }

        function p(t) {
            t.preventDefault();
            var i = e.getHeight(_.__hue_field),
                n = e.getOffset(_.__hue_field),
                t = 1 - (t.clientY - n.top + document.body.scrollTop) / i;
            return t > 1 ? t = 1 : t < 0 && (t = 0), _.__color.h = 360 * t, _.setValue(_.__color.toOriginal()), !1
        }
        o.superclass.call(this, t, l), this.__color = new i(this.getValue()), this.__temp = new i(0);
        var _ = this;
        this.domElement = document.createElement("div"), e.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", e.bind(this.__input, "keydown", function (t) {
            13 === t.keyCode && u.call(this)
        }), e.bind(this.__input, "blur", u), e.bind(this.__selector, "mousedown", function () {
            e.addClass(this, "drag").bind(window, "mouseup", function () {
                e.removeClass(_.__selector, "drag")
            })
        });
        var m = document.createElement("div");
        r.extend(this.__selector.style, {
            width: "122px",
            height: "102px",
            padding: "3px",
            backgroundColor: "#222",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        }), r.extend(this.__field_knob.style, {
            position: "absolute",
            width: "12px",
            height: "12px",
            border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
            boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            zIndex: 1
        }), r.extend(this.__hue_knob.style, {
            position: "absolute",
            width: "15px",
            height: "2px",
            borderRight: "4px solid #fff",
            zIndex: 1
        }), r.extend(this.__saturation_field.style, {
            width: "100px",
            height: "100px",
            border: "1px solid #555",
            marginRight: "3px",
            display: "inline-block",
            cursor: "pointer"
        }), r.extend(m.style, {
            width: "100%",
            height: "100%",
            background: "none"
        }), s(m, "top", "rgba(0,0,0,0)", "#000"), r.extend(this.__hue_field.style, {
            width: "15px",
            height: "100px",
            display: "inline-block",
            border: "1px solid #555",
            cursor: "ns-resize"
        }), a(this.__hue_field), r.extend(this.__input.style, {
            outline: "none",
            textAlign: "center",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
        }), e.bind(this.__saturation_field, "mousedown", h), e.bind(this.__field_knob, "mousedown", h), e.bind(this.__hue_field, "mousedown", function (t) {
            p(t), e.bind(window, "mousemove", p), e.bind(window, "mouseup", d)
        }), this.__saturation_field.appendChild(m), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
    };
    o.superclass = t, r.extend(o.prototype, t.prototype, {
        updateDisplay: function () {
            var t = n(this.getValue());
            if (t !== !1) {
                var e = !1;
                r.each(i.COMPONENTS, function (i) {
                    if (!r.isUndefined(t[i]) && !r.isUndefined(this.__color.__state[i]) && t[i] !== this.__color.__state[i]) return e = !0, {}
                }, this), e && r.extend(this.__color.__state, t)
            }
            r.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
            var a = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                o = 255 - a;
            r.extend(this.__field_knob.style, {
                marginLeft: 100 * this.__color.s - 7 + "px",
                marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                backgroundColor: this.__temp.toString(),
                border: this.__field_knob_border + "rgb(" + a + "," + a + "," + a + ")"
            }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, s(this.__saturation_field, "left", "#fff", this.__temp.toString()), r.extend(this.__input.style, {
                backgroundColor: this.__input.value = this.__color.toString(),
                color: "rgb(" + a + "," + a + "," + a + ")",
                textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)"
            })
        }
    });
    var l = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    return o
}(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function (t, e, i, n) {
    function r(t, e, i) {
        Object.defineProperty(t, e, {
            get: function () {
                return "RGB" === this.__state.space ? this.__state[e] : (a(this, e, i), this.__state[e])
            },
            set: function (t) {
                "RGB" !== this.__state.space && (a(this, e, i), this.__state.space = "RGB"), this.__state[e] = t
            }
        })
    }

    function s(t, e) {
        Object.defineProperty(t, e, {
            get: function () {
                return "HSV" === this.__state.space ? this.__state[e] : (o(this), this.__state[e])
            },
            set: function (t) {
                "HSV" !== this.__state.space && (o(this), this.__state.space = "HSV"), this.__state[e] = t
            }
        })
    }

    function a(t, i, r) {
        if ("HEX" === t.__state.space) t.__state[i] = e.component_from_hex(t.__state.hex, r);
        else {
            if ("HSV" !== t.__state.space) throw "Corrupted color state";
            n.extend(t.__state, e.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v))
        }
    }

    function o(t) {
        var i = e.rgb_to_hsv(t.r, t.g, t.b);
        n.extend(t.__state, {
            s: i.s,
            v: i.v
        }), n.isNaN(i.h) ? n.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = i.h
    }
    var l = function () {
        if (this.__state = t.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
        this.__state.a = this.__state.a || 1
    };
    return l.COMPONENTS = "r,g,b,h,s,v,hex,a".split(","), n.extend(l.prototype, {
        toString: function () {
            return i(this)
        },
        toOriginal: function () {
            return this.__state.conversion.write(this)
        }
    }), r(l.prototype, "r", 2), r(l.prototype, "g", 1), r(l.prototype, "b", 0), s(l.prototype, "h"), s(l.prototype, "s"), s(l.prototype, "v"), Object.defineProperty(l.prototype, "a", {
        get: function () {
            return this.__state.a
        },
        set: function (t) {
            this.__state.a = t
        }
    }), Object.defineProperty(l.prototype, "hex", {
        get: function () {
            return "HEX" !== !this.__state.space && (this.__state.hex = e.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
        },
        set: function (t) {
            this.__state.space = "HEX", this.__state.hex = t
        }
    }), l
}(dat.color.interpret, dat.color.math = function () {
    var t;
    return {
        hsv_to_rgb: function (t, e, i) {
            var n = t / 60 - Math.floor(t / 60),
                r = i * (1 - e),
                s = i * (1 - n * e),
                e = i * (1 - (1 - n) * e),
                t = [
                    [i, e, r],
                    [s, i, r],
                    [r, i, e],
                    [r, s, i],
                    [e, r, i],
                    [i, r, s]
                ][Math.floor(t / 60) % 6];
            return {
                r: 255 * t[0],
                g: 255 * t[1],
                b: 255 * t[2]
            }
        },
        rgb_to_hsv: function (t, e, i) {
            var n = Math.min(t, e, i),
                r = Math.max(t, e, i),
                n = r - n;
            return 0 == r ? {
                h: NaN,
                s: 0,
                v: 0
            } : (t = t == r ? (e - i) / n : e == r ? 2 + (i - t) / n : 4 + (t - e) / n, t /= 6, t < 0 && (t += 1), {
                h: 360 * t,
                s: n / r,
                v: r / 255
            })
        },
        rgb_to_hex: function (t, e, i) {
            return t = this.hex_with_component(0, 2, t), t = this.hex_with_component(t, 1, e), t = this.hex_with_component(t, 0, i)
        },
        component_from_hex: function (t, e) {
            return t >> 8 * e & 255
        },
        hex_with_component: function (e, i, n) {
            return n << (t = 8 * i) | e & ~(255 << t)
        }
    }
}(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
        window.setTimeout(t, 1e3 / 60)
    }
}(), dat.dom.CenteredDiv = function (t, e) {
    var i = function () {
        this.backgroundElement = document.createElement("div"), e.extend(this.backgroundElement.style, {
            backgroundColor: "rgba(0,0,0,0.8)",
            top: 0,
            left: 0,
            display: "none",
            zIndex: "1000",
            opacity: 0,
            WebkitTransition: "opacity 0.2s linear"
        }), t.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), e.extend(this.domElement.style, {
            position: "fixed",
            display: "none",
            zIndex: "1001",
            opacity: 0,
            WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
        }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
        var i = this;
        t.bind(this.backgroundElement, "click", function () {
            i.hide()
        })
    };
    return i.prototype.show = function () {
        var t = this;
        this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), e.defer(function () {
            t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)"
        })
    }, i.prototype.hide = function () {
        var e = this,
            i = function () {
                e.domElement.style.display = "none", e.backgroundElement.style.display = "none", t.unbind(e.domElement, "webkitTransitionEnd", i), t.unbind(e.domElement, "transitionend", i), t.unbind(e.domElement, "oTransitionEnd", i)
            };
        t.bind(this.domElement, "webkitTransitionEnd", i), t.bind(this.domElement, "transitionend", i), t.bind(this.domElement, "oTransitionEnd", i), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
    }, i.prototype.layout = function () {
        this.domElement.style.left = window.innerWidth / 2 - t.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - t.getHeight(this.domElement) / 2 + "px"
    }, i
}(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);
var Detector = {
    canvas: !!window.CanvasRenderingContext2D,
    webgl: function () {
        try {
            var t = document.createElement("canvas");
            return !(!window.WebGLRenderingContext || !t.getContext("webgl") && !t.getContext("experimental-webgl"))
        } catch (e) {
            return !1
        }
    }(),
    workers: !!window.Worker,
    fileapi: window.File && window.FileReader && window.FileList && window.Blob,
    getWebGLErrorMessage: function () {
        var t = document.createElement("div");
        return t
    },
    addGetWebGLMessage: function (t) {
        var e, i, n;
        t = t || {}, e = void 0 !== t.parent ? t.parent : document.body, i = void 0 !== t.id ? t.id : "oldie", n = Detector.getWebGLErrorMessage(), n.id = i, e.appendChild(n)
    }
};
"object" == typeof module && (module.exports = Detector), THREE.OrbitControls = function (t, e) {
    function i() {
        return 2 * Math.PI / 60 / 60 * D.autoRotateSpeed
    }

    function n() {
        return Math.pow(.95, D.zoomSpeed)
    }

    function r(t) {
        I.theta -= t
    }

    function s(t) {
        I.phi -= t
    }

    function a(t) {
        D.object instanceof THREE.PerspectiveCamera ? j /= t : D.object instanceof THREE.OrthographicCamera ? (D.object.zoom = Math.max(D.minZoom, Math.min(D.maxZoom, D.object.zoom * t)), D.object.updateProjectionMatrix(), X = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), D.enableZoom = !1)
    }

    function o(t) {
        D.object instanceof THREE.PerspectiveCamera ? j *= t : D.object instanceof THREE.OrthographicCamera ? (D.object.zoom = Math.max(D.minZoom, Math.min(D.maxZoom, D.object.zoom / t)), D.object.updateProjectionMatrix(), X = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), D.enableZoom = !1)
    }

    function l(t) {
        W.set(t.clientX, t.clientY)
    }

    function h(t) {
        Q.set(t.clientX, t.clientY)
    }

    function c(t) {
        Y.set(t.clientX, t.clientY)
    }

    function u(t) {
        G.set(t.clientX, t.clientY), q.subVectors(G, W);
        var e = D.domElement === document ? D.domElement.body : D.domElement;
        r(2 * Math.PI * q.x / e.clientWidth * D.rotateSpeed), s(2 * Math.PI * q.y / e.clientHeight * D.rotateSpeed), W.copy(G), D.update()
    }

    function d(t) {
        J.set(t.clientX, t.clientY), $.subVectors(J, Q), $.y > 0 ? a(n()) : $.y < 0 && o(n()), Q.copy(J), D.update()
    }

    function f(t) {
        Z.set(t.clientX, t.clientY), K.subVectors(Z, Y), it(K.x, K.y), Y.copy(Z), D.update()
    }

    function p(t) {}

    function _(t) {
        t.deltaY < 0 ? o(n()) : t.deltaY > 0 && a(n()), D.update()
    }

    function m(t) {
        switch (t.keyCode) {
            case D.keys.UP:
                it(0, D.keyPanSpeed), D.update();
                break;
            case D.keys.BOTTOM:
                it(0, -D.keyPanSpeed), D.update();
                break;
            case D.keys.LEFT:
                it(D.keyPanSpeed, 0), D.update();
                break;
            case D.keys.RIGHT:
                it(-D.keyPanSpeed, 0), D.update()
        }
    }

    function g(t) {
        W.set(t.touches[0].pageX, t.touches[0].pageY)
    }

    function v(t) {
        var e = t.touches[0].pageX - t.touches[1].pageX,
            i = t.touches[0].pageY - t.touches[1].pageY,
            n = Math.sqrt(e * e + i * i);
        Q.set(0, n)
    }

    function b(t) {
        Y.set(t.touches[0].pageX, t.touches[0].pageY)
    }

    function y(t) {
        G.set(t.touches[0].pageX, t.touches[0].pageY), q.subVectors(G, W);
        var e = D.domElement === document ? D.domElement.body : D.domElement;
        r(2 * Math.PI * q.x / e.clientWidth * D.rotateSpeed), s(2 * Math.PI * q.y / e.clientHeight * D.rotateSpeed), W.copy(G), D.update()
    }

    function x(t) {
        var e = t.touches[0].pageX - t.touches[1].pageX,
            i = t.touches[0].pageY - t.touches[1].pageY,
            r = Math.sqrt(e * e + i * i);
        J.set(0, r), $.subVectors(J, Q), $.y > 0 ? o(n()) : $.y < 0 && a(n()), Q.copy(J), D.update()
    }

    function w(t) {
        Z.set(t.touches[0].pageX, t.touches[0].pageY), K.subVectors(Z, Y), it(K.x, K.y), Y.copy(Z), D.update()
    }

    function T(t) {}

    function E(t) {
        if (D.enabled !== !1) {
            if (t.preventDefault(), t.button === D.mouseButtons.ORBIT) {
                if (D.enableRotate === !1) return;
                l(t), L = N.ROTATE
            } else if (t.button === D.mouseButtons.ZOOM) {
                if (D.enableZoom === !1) return;
                h(t), L = N.DOLLY
            } else if (t.button === D.mouseButtons.PAN) {
                if (D.enablePan === !1) return;
                c(t), L = N.PAN
            }
            L !== N.NONE && (document.addEventListener("mousemove", C, !1), document.addEventListener("mouseup", S, !1), D.dispatchEvent(z))
        }
    }

    function C(t) {
        if (D.enabled !== !1)
            if (t.preventDefault(), L === N.ROTATE) {
                if (D.enableRotate === !1) return;
                u(t)
            } else if (L === N.DOLLY) {
            if (D.enableZoom === !1) return;
            d(t)
        } else if (L === N.PAN) {
            if (D.enablePan === !1) return;
            f(t)
        }
    }

    function S(t) {
        D.enabled !== !1 && (p(t), document.removeEventListener("mousemove", C, !1), document.removeEventListener("mouseup", S, !1), D.dispatchEvent(F), L = N.NONE)
    }

    function R(t) {
        D.enabled === !1 || D.enableZoom === !1 || L !== N.NONE && L !== N.ROTATE || (t.preventDefault(), _(t), D.dispatchEvent(z), D.dispatchEvent(F))
    }

    function k(t) {
        D.enabled !== !1 && D.enableKeys !== !1 && D.enablePan !== !1 && m(t)
    }

    function P(t) {
        if (D.enabled !== !1) {
            switch (t.touches.length) {
                case 1:
                    if (D.enableRotate === !1) return;
                    g(t), L = N.TOUCH_ROTATE;
                    break;
                case 2:
                    if (D.enableZoom === !1) return;
                    v(t), L = N.TOUCH_DOLLY;
                    break;
                case 3:
                    if (D.enablePan === !1) return;
                    b(t), L = N.TOUCH_PAN;
                    break;
                default:
                    L = N.NONE
            }
            L !== N.NONE && D.dispatchEvent(z)
        }
    }

    function A(t) {
        if (D.enabled !== !1) switch (t.preventDefault(), t.stopPropagation(), t.touches.length) {
            case 1:
                if (D.enableRotate === !1) return;
                if (L !== N.TOUCH_ROTATE) return;
                y(t);
                break;
            case 2:
                if (D.enableZoom === !1) return;
                if (L !== N.TOUCH_DOLLY) return;
                x(t);
                break;
            case 3:
                if (D.enablePan === !1) return;
                if (L !== N.TOUCH_PAN) return;
                w(t);
                break;
            default:
                L = N.NONE
        }
    }

    function O(t) {
        D.enabled !== !1 && (T(t), D.dispatchEvent(F), L = N.NONE)
    }

    function M(t) {
        t.preventDefault()
    }
    this.object = t, this.domElement = void 0 !== e ? e : document, this.enabled = !0, this.target = new THREE.Vector3, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -(1 / 0), this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .25, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = .2, this.enableKeys = !0, this.keys = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        BOTTOM: 40
    }, this.mouseButtons = {
        ORBIT: THREE.MOUSE.LEFT,
        ZOOM: THREE.MOUSE.MIDDLE,
        PAN: THREE.MOUSE.RIGHT
    }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function () {
        return B.phi
    }, this.getAzimuthalAngle = function () {
        return B.theta
    }, this.reset = function () {
        D.target.copy(D.target0), D.object.position.copy(D.position0), D.object.zoom = D.zoom0, D.object.updateProjectionMatrix(), D.dispatchEvent(H), D.update(), L = N.NONE
    }, this.update = function () {
        var e = new THREE.Vector3,
            n = (new THREE.Quaternion).setFromUnitVectors(t.up, new THREE.Vector3(0, 1, 0)),
            s = n.clone().inverse(),
            a = new THREE.Vector3,
            o = new THREE.Quaternion;
        return function () {
            var t = D.object.position;
            return e.copy(t).sub(D.target), e.applyQuaternion(n), B.setFromVector3(e), D.autoRotate && L === N.NONE && r(i()), B.theta += I.theta, B.phi += I.phi, B.theta = Math.max(D.minAzimuthAngle, Math.min(D.maxAzimuthAngle, B.theta)), B.phi = Math.max(D.minPolarAngle, Math.min(D.maxPolarAngle, B.phi)), B.makeSafe(), B.radius *= j, B.radius = Math.max(D.minDistance, Math.min(D.maxDistance, B.radius)), D.target.add(V), e.setFromSpherical(B), e.applyQuaternion(s), t.copy(D.target).add(e), D.object.lookAt(D.target), D.enableDamping === !0 ? (I.theta *= 1 - D.dampingFactor, I.phi *= 1 - D.dampingFactor) : I.set(0, 0, 0), j = 1, V.set(0, 0, 0), !!(X || a.distanceToSquared(D.object.position) > U || 8 * (1 - o.dot(D.object.quaternion)) > U) && (D.dispatchEvent(H), a.copy(D.object.position), o.copy(D.object.quaternion), X = !1, !0)
        }
    }(), this.dispose = function () {
        D.domElement.removeEventListener("contextmenu", M, !1), D.domElement.removeEventListener("mousedown", E, !1), D.domElement.removeEventListener("wheel", R, !1), D.domElement.removeEventListener("touchstart", P, !1), D.domElement.removeEventListener("touchend", O, !1), D.domElement.removeEventListener("touchmove", A, !1), document.removeEventListener("mousemove", C, !1), document.removeEventListener("mouseup", S, !1), window.removeEventListener("keydown", k, !1)
    };
    var D = this,
        H = {
            type: "change"
        },
        z = {
            type: "start"
        },
        F = {
            type: "end"
        },
        N = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_DOLLY: 4,
            TOUCH_PAN: 5
        },
        L = N.NONE,
        U = 1e-6,
        B = new THREE.Spherical,
        I = new THREE.Spherical,
        j = 1,
        V = new THREE.Vector3,
        X = !1,
        W = new THREE.Vector2,
        G = new THREE.Vector2,
        q = new THREE.Vector2,
        Y = new THREE.Vector2,
        Z = new THREE.Vector2,
        K = new THREE.Vector2,
        Q = new THREE.Vector2,
        J = new THREE.Vector2,
        $ = new THREE.Vector2,
        tt = function () {
            var t = new THREE.Vector3;
            return function (e, i) {
                t.setFromMatrixColumn(i, 0), t.multiplyScalar(-e), V.add(t)
            }
        }(),
        et = function () {
            var t = new THREE.Vector3;
            return function (e, i) {
                t.setFromMatrixColumn(i, 1), t.multiplyScalar(e), V.add(t)
            }
        }(),
        it = function () {
            var t = new THREE.Vector3;
            return function (e, i) {
                var n = D.domElement === document ? D.domElement.body : D.domElement;
                if (D.object instanceof THREE.PerspectiveCamera) {
                    var r = D.object.position;
                    t.copy(r).sub(D.target);
                    var s = t.length();
                    s *= Math.tan(D.object.fov / 2 * Math.PI / 180), tt(2 * e * s / n.clientHeight, D.object.matrix), et(2 * i * s / n.clientHeight, D.object.matrix)
                } else D.object instanceof THREE.OrthographicCamera ? (tt(e * (D.object.right - D.object.left) / D.object.zoom / n.clientWidth, D.object.matrix), et(i * (D.object.top - D.object.bottom) / D.object.zoom / n.clientHeight, D.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), D.enablePan = !1)
            }
        }();
    D.domElement.addEventListener("contextmenu", M, !1), D.domElement.addEventListener("mousedown", E, !1), D.domElement.addEventListener("wheel", R, !1), D.domElement.addEventListener("touchstart", P, !1), D.domElement.addEventListener("touchend", O, !1), D.domElement.addEventListener("touchmove", A, !1), window.addEventListener("keydown", k, !1), this.update()
}, THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.OrbitControls.prototype.constructor = THREE.OrbitControls, Object.defineProperties(THREE.OrbitControls.prototype, {
    center: {
        get: function () {
            return console.warn("THREE.OrbitControls: .center has been renamed to .target"), this.target
        }
    },
    noZoom: {
        get: function () {
            return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), !this.enableZoom
        },
        set: function (t) {
            console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), this.enableZoom = !t
        }
    },
    noRotate: {
        get: function () {
            return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), !this.enableRotate
        },
        set: function (t) {
            console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), this.enableRotate = !t
        }
    },
    noPan: {
        get: function () {
            return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), !this.enablePan
        },
        set: function (t) {
            console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), this.enablePan = !t
        }
    },
    noKeys: {
        get: function () {
            return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), !this.enableKeys
        },
        set: function (t) {
            console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), this.enableKeys = !t
        }
    },
    staticMoving: {
        get: function () {
            return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), !this.enableDamping
        },
        set: function (t) {
            console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), this.enableDamping = !t
        }
    },
    dynamicDampingFactor: {
        get: function () {
            return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor
        },
        set: function (t) {
            console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor = t
        }
    }
});
var Stats = function () {
    function t(t) {
        return n.appendChild(t.dom), t
    }

    function e(t) {
        for (var e = 0; e < n.children.length; e++) n.children[e].style.display = e === t ? "block" : "none";
        i = t
    }
    var i = 0,
        n = document.createElement("div");
    n.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", n.addEventListener("click", function (t) {
        t.preventDefault(), e(++i % n.children.length)
    }, !1);
    var r = (performance || Date).now(),
        s = r,
        a = 0,
        o = t(new Stats.Panel("FPS", "#0ff", "#002")),
        l = t(new Stats.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory) var h = t(new Stats.Panel("MB", "#f08", "#201"));
    return e(0), {
        REVISION: 16,
        dom: n,
        addPanel: t,
        showPanel: e,
        begin: function () {
            r = (performance || Date).now()
        },
        end: function () {
            a++;
            var t = (performance || Date).now();
            if (l.update(t - r, 200), t > s + 1e3 && (o.update(1e3 * a / (t - s), 100), s = t, a = 0, h)) {
                var e = performance.memory;
                h.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576)
            }
            return t
        },
        update: function () {
            r = this.end()
        },
        domElement: n,
        setMode: e
    }
};
Stats.Panel = function (t, e, i) {
    var n = 1 / 0,
        r = 0,
        s = Math.round,
        a = s(window.devicePixelRatio || 1),
        o = 80 * a,
        l = 48 * a,
        h = 3 * a,
        c = 2 * a,
        u = 3 * a,
        d = 15 * a,
        f = 74 * a,
        p = 30 * a,
        _ = document.createElement("canvas");
    _.width = o, _.height = l, _.style.cssText = "width:80px;height:48px";
    var m = _.getContext("2d");
    return m.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", m.textBaseline = "top", m.fillStyle = i, m.fillRect(0, 0, o, l), m.fillStyle = e, m.fillText(t, h, c), m.fillRect(u, d, f, p), m.fillStyle = i, m.globalAlpha = .9, m.fillRect(u, d, f, p), {
        dom: _,
        update: function (l, g) {
            n = Math.min(n, l), r = Math.max(r, l), m.fillStyle = i, m.globalAlpha = 1, m.fillRect(0, 0, o, d), m.fillStyle = e, m.fillText(s(l) + " " + t + " (" + s(n) + "-" + s(r) + ")", h, c), m.drawImage(_, u + a, d, f - a, p, u, d, f - a, p), m.fillRect(u + f - a, d, a, p), m.fillStyle = i, m.globalAlpha = .9, m.fillRect(u + f - a, d, a, s((1 - l / g) * p))
        }
    }
}, "object" == typeof module && (module.exports = Stats), ! function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, r, s, a, o, l = function (t) {
                var e, n = t.split("."),
                    r = i;
                for (e = 0; e < n.length; e++) r[n[e]] = r = r[n[e]] || {};
                return r
            },
            h = l("com.greensock"),
            c = 1e-10,
            u = function (t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            d = function () {},
            f = function () {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function (i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(),
            p = {},
            _ = function (n, r, s, a) {
                this.sc = p[n] ? p[n].sc : [], p[n] = this, this.gsClass = null, this.func = s;
                var o = [];
                this.check = function (h) {
                    for (var c, u, d, f, m, g = r.length, v = g; --g > -1;)(c = p[r[g]] || new _(r[g], [])).gsClass ? (o[g] = c.gsClass, v--) : h && c.sc.push(this);
                    if (0 === v && s)
                        for (u = ("com.greensock." + n).split("."), d = u.pop(), f = l(u.join("."))[d] = this.gsClass = s.apply(s, o), a && (i[d] = f, m = "undefined" != typeof module && module.exports, !m && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                                return f
                            }) : n === e && m && (module.exports = f)), g = 0; g < this.sc.length; g++) this.sc[g].check()
                }, this.check(!0)
            },
            m = t._gsDefine = function (t, e, i, n) {
                return new _(t, e, i, n)
            },
            g = h._class = function (t, e, i) {
                return e = e || function () {}, m(t, [], function () {
                    return e
                }, i), e
            };
        m.globals = i;
        var v = [0, 0, 1, 1],
            b = [],
            y = g("easing.Ease", function (t, e, i, n) {
                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
            }, !0),
            x = y.map = {},
            w = y.register = function (t, e, i, n) {
                for (var r, s, a, o, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                    for (s = l[c], r = n ? g("easing." + s, null, !0) : h.easing[s] || {}, a = u.length; --a > -1;) o = u[a], x[s + "." + o] = x[o + s] = r[o] = t.getRatio ? t : t[o] || new t
            };
        for (s = y.prototype, s._calcEnd = !1, s.getRatio = function (t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
            }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, w(new y(null, null, 1, r), s, "easeOut", !0), w(new y(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), w(new y(null, null, 3, r), s, "easeInOut");
        x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
        var T = g("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = T.prototype, s.addEventListener = function (t, e, i, n, r) {
            r = r || 0;
            var s, l, h = this._listeners[t],
                c = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) s = h[l], s.c === e && s.s === i ? h.splice(l, 1) : 0 === c && s.pr < r && (c = l + 1);
            h.splice(c, 0, {
                c: e,
                s: i,
                up: n,
                pr: r
            }), this !== a || o || a.wake()
        }, s.removeEventListener = function (t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1;)
                    if (n[i].c === e) return void n.splice(i, 1)
        }, s.dispatchEvent = function (t) {
            var e, i, n, r = this._listeners[t];
            if (r)
                for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                    type: t,
                    target: i
                }) : n.c.call(n.s || i))
        };
        var E = t.requestAnimationFrame,
            C = t.cancelAnimationFrame,
            S = Date.now || function () {
                return (new Date).getTime()
            },
            R = S();
        for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !E;) E = t[n[r] + "RequestAnimationFrame"], C = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
        g("Ticker", function (t, e) {
            var i, n, r, s, l, h = this,
                u = S(),
                f = !(e === !1 || !E) && "auto",
                p = 500,
                _ = 33,
                m = "tick",
                g = function (t) {
                    var e, a, o = S() - R;
                    o > p && (u += o - _), R += o, h.time = (R - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= s ? .004 : s - e), a = !0), t !== !0 && (r = n(g)), a && h.dispatchEvent(m)
                };
            T.call(h), h.time = h.frame = 0, h.tick = function () {
                g(!0)
            }, h.lagSmoothing = function (t, e) {
                p = t || 1 / c, _ = Math.min(e, p, 0)
            }, h.sleep = function () {
                null != r && (f && C ? C(r) : clearTimeout(r), n = d, r = null, h === a && (o = !1))
            }, h.wake = function (t) {
                null !== r ? h.sleep() : t ? u += -R + (R = S()) : h.frame > 10 && (R = S() - p + 5), n = 0 === i ? d : f && E ? E : function (t) {
                    return setTimeout(t, 1e3 * (l - h.time) + 1 | 0)
                }, h === a && (o = !0), g(2)
            }, h.fps = function (t) {
                return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void h.wake()) : i
            }, h.useRAF = function (t) {
                return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
            }, h.fps(t), setTimeout(function () {
                "auto" === f && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1)
            }, 1500)
        }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
        var k = g("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, q) {
                o || a.wake();
                var i = this.vars.useFrames ? G : q;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        a = k.ticker = new h.Ticker, s = k.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var P = function () {
            o && S() - R > 2e3 && a.wake(), setTimeout(P, 2e3)
        };
        P(), s.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, s.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, s.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, s.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, s.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function (t, e, i) {}, s.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, s.isActive = function () {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        }, s._enabled = function (t, e) {
            return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function (t, e) {
            return this._enabled(!1, !1)
        }, s.kill = function (t, e) {
            return this._kill(t, e), this
        }, s._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, s._callback = function (t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || b)
        }, s.eventCallback = function (t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function (t, e, i) {
            if (o || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        r = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale,
                        r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (H.length && Z(), this.render(t, e, !1), H.length && Z())
            }
            return this
        }, s.progress = s.totalProgress = function (t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, s.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, s.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, s.paused = function (t) {
            if (!arguments.length) return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (o || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var A = g("core.SimpleTimeline", function (t) {
            k.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = A.prototype = new k, s.constructor = A, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function (t, e, i, n) {
            var r, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                for (s = t._startTime; r && r._startTime > s;) r = r._prev;
            return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
        }, s._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, s.render = function (t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, s.rawTime = function () {
            return o || a.wake(), this._totalTime
        };
        var O = g("TweenLite", function (e, i, n) {
                if (k.call(this, i, n), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                var r, s, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? W[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                    for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++) s = a[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(s))) : (this._siblings[r] = K(s, this, !1), 1 === l && this._siblings[r].length > 1 && J(s, this, null, 1, this._siblings[r])) : (s = a[r--] = O.selector(s), "string" == typeof s && a.splice(r + 1, 1)) : a.splice(r--, 1);
                else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
            }, !0),
            M = function (e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            D = function (t, e) {
                var i, n = {};
                for (i in t) X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                t.css = n
            };
        s = O.prototype = new k, s.constructor = O, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, O.version = "1.18.2", O.defaultEase = s._ease = new y(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = a, O.autoSleep = 120, O.lagSmoothing = function (t, e) {
            a.lagSmoothing(t, e)
        }, O.selector = t.$ || t.jQuery || function (e) {
            var i = t.$ || t.jQuery;
            return i ? (O.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var H = [],
            z = {},
            F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            N = function (t) {
                for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            },
            L = function (t, e, i, n) {
                var r, s, a, o, l, h, c, u = [t, e],
                    d = 0,
                    f = "",
                    p = 0;
                for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(F) || [], s = e.match(F) || [], n && (n._next = null, n.blob = 1, u._firstPT = n), l = s.length, o = 0; l > o; o++) c = s[o], h = e.substr(d, e.indexOf(c, d) - d), f += h || !o ? h : ",", d += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), c === r[o] || r.length <= o ? f += c : (f && (u.push(f), f = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                    _next: u._firstPT,
                    t: u,
                    p: u.length - 1,
                    s: a,
                    c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                    f: 0,
                    r: p && 4 > p
                }), d += c.length;
                return f += e.substr(d), f && u.push(f), u.setRatio = N, u
            },
            U = function (t, e, i, n, r, s, a, o) {
                var l, h, c = "get" === i ? t[e] : i,
                    u = typeof t[e],
                    d = "string" == typeof n && "=" === n.charAt(1),
                    f = {
                        t: t,
                        p: e,
                        s: c,
                        f: "function" === u,
                        pg: 0,
                        n: r || e,
                        r: s,
                        pr: 0,
                        c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                    };
                return "number" !== u && ("function" === u && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), f.s = c = a ? t[h](a) : t[h]()), "string" == typeof c && (a || isNaN(c)) ? (f.fp = a, l = L(c, n, o || O.defaultStringFilter, f), f = {
                    t: l,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || e,
                    pr: 0
                }) : d || (f.s = parseFloat(c), f.c = parseFloat(n) - f.s || 0)), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
            },
            B = O._internals = {
                isArray: f,
                isSelector: M,
                lazyTweens: H,
                blobDif: L
            },
            I = O._plugins = {},
            j = B.tweenLookup = {},
            V = 0,
            X = B.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1
            },
            W = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            G = k._rootFramesTimeline = new A,
            q = k._rootTimeline = new A,
            Y = 30,
            Z = B.lazyRender = function () {
                var t, e = H.length;
                for (z = {}; --e > -1;) t = H[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                H.length = 0
            };
        q._startTime = a.time, G._startTime = a.frame, q._active = G._active = !0, setTimeout(Z, 1), k._updateRoot = O.render = function () {
            var t, e, i;
            if (H.length && Z(), q.render((a.time - q._startTime) * q._timeScale, !1, !1), G.render((a.frame - G._startTime) * G._timeScale, !1, !1), H.length && Z(), a.frame >= Y) {
                Y = a.frame + (parseInt(O.autoSleep, 10) || 120);
                for (i in j) {
                    for (e = j[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete j[i]
                }
                if (i = q._first, (!i || i._paused) && O.autoSleep && !G._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || a.sleep()
                }
            }
        }, a.addEventListener("tick", k._updateRoot);
        var K = function (t, e, i) {
                var n, r, s = t._gsTweenID;
                if (j[s || (t._gsTweenID = s = "t" + V++)] || (j[s] = {
                        target: t,
                        tweens: []
                    }), e && (n = j[s].tweens, n[r = n.length] = e, i))
                    for (; --r > -1;) n[r] === e && n.splice(r, 1);
                return j[s].tweens
            },
            Q = function (t, e, i, n) {
                var r, s, a = t.vars.onOverwrite;
                return a && (r = a(t, e, i, n)), a = O.onOverwrite, a && (s = a(t, e, i, n)), r !== !1 && s !== !1
            },
            J = function (t, e, i, n, r) {
                var s, a, o, l;
                if (1 === n || n >= 4) {
                    for (l = r.length, s = 0; l > s; s++)
                        if ((o = r[s]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                        else if (5 === n) break;
                    return a
                }
                var h, u = e._startTime + c,
                    d = [],
                    f = 0,
                    p = 0 === e._duration;
                for (s = r.length; --s > -1;)(o = r[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || $(e, 0, p), 0 === $(o, h, p) && (d[f++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && u - o._startTime <= 2e-10 || (d[f++] = o)));
                for (s = f; --s > -1;)
                    if (o = d[s], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
                        if (2 !== n && !Q(o, e)) continue;
                        o._enabled(!1, !1) && (a = !0)
                    }
                return a
            },
            $ = function (t, e, i) {
                for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                    if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * c > s - e ? c : (s += t.totalDuration() / t._timeScale / r) > e + c ? 0 : s - e - c
            };
        s._init = function () {
            var t, e, i, n, r, s = this.vars,
                a = this._overwrittenProps,
                o = this._duration,
                l = !!s.immediateRender,
                h = s.ease;
            if (s.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (n in s.startAt) r[n] = s.startAt[n];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = O.to(this.target, 0, r), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== o) return
            } else if (s.runBackwards && 0 !== o)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (l = !1), i = {};
                    for (n in s) X[n] && "autoCSS" !== n || (i[n] = s[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = O.to(this.target, 0, i), l) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, s.easeParams) : x[h] || O.defaultEase : O.defaultEase, s.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && O._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, s._initProps = function (e, i, n, r) {
            var s, a, o, l, h, c;
            if (null == e) return !1;
            z[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && D(this.vars, e);
            for (s in this.vars)
                if (c = this.vars[s], X[s]) c && (c instanceof Array || c.push && f(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                else if (I[s] && (l = new I[s])._onInitTween(e, this.vars[s], this)) {
                for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: s,
                        pg: 1,
                        pr: l._priority
                    }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
            } else i[s] = U.call(this, e, s, "get", c, s, 0, null, this.vars.stringFilter);
            return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0), o)
        }, s.render = function (t, e, i) {
            var n, r, s, a, o = this._time,
                l = this._duration,
                h = this._rawPrevTime;
            if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === c && "isPause" !== this.data) && h !== t && (i = !0, h > c && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : c);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : c)), this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l,
                    d = this._easeType,
                    f = this._easePower;
                (1 === d || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), 1 === d ? this.ratio = 1 - u : 2 === d ? this.ratio = u : .5 > t / l ? this.ratio = u / 2 : this.ratio = 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, H.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
            }
        }, s._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
            var n, r, s, a, o, l, h, c, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((f(e) || M(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;)
                        if (e === this._targets[n]) {
                            o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (h = t || o, c = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (O.onOverwrite || this.vars.onOverwrite)) {
                        for (s in h) o[s] && (u || (u = []), u.push(s));
                        if ((u || !t) && !Q(this, i, e, u)) return !1
                    }
                    for (s in h)(a = o[s]) && (d && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), c && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, s.invalidate = function () {
            return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], k.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
        }, s._enabled = function (t, e) {
            if (o || a.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1;) this._siblings[i] = K(n[i], this, !0);
                else this._siblings = K(this.target, this, !0)
            }
            return k.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && O._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, O.to = function (t, e, i) {
            return new O(t, e, i)
        }, O.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i)
        }, O.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new O(t, e, n)
        }, O.delayedCall = function (t, e, i, n, r) {
            return new O(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, O.set = function (t, e) {
            return new O(t, 0, e)
        }, O.getTweensOf = function (t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : O.selector(t) || t;
            var i, n, r, s;
            if ((f(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(O.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;)
                    for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
            } else
                for (n = K(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, O.killTweensOf = O.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = O.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
        };
        var tt = g("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
        }, !0);
        if (s = tt.prototype, tt.version = "1.18.0", tt.API = 2, s._firstPT = null, s._addTween = U, s.setRatio = N, s._kill = function (t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, s._roundProps = function (t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, O._onPluginEvent = function (t, e) {
                var i, n, r, s, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, n = r; n && n.pr > o.pr;) n = n._next;
                        (o._prev = n ? n._prev : s) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : s = o, o = a
                    }
                    o = e._firstPT = r
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, tt.activate = function (t) {
                for (var e = t.length; --e > -1;) t[e].API === tt.API && (I[(new t[e])._propName] = t[e]);
                return !0
            }, m.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    r = t.overwriteProps,
                    s = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                        tt.call(this, i, n), this._overwriteProps = r || []
                    }, t.global === !0),
                    o = a.prototype = new tt(i);
                o.constructor = a, a.API = t.API;
                for (e in s) "function" == typeof t[e] && (o[s[e]] = t[e]);
                return a.version = t.version, tt.activate([a]), a
            }, n = t._gsQueue) {
            for (r = 0; r < n.length; r++) n[r]();
            for (s in p) p[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        o = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var n = function (t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function (t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    s = function (t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    a = 1e-10,
                    o = i._internals,
                    l = o.isSelector,
                    h = o.isArray,
                    c = s.prototype = i.to({}, .1, {}),
                    u = [];
                s.version = "1.18.2", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function (t, e) {
                    var n, r = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || s)
                        for (var o, l = 1 / (1 - r), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next;
                    return this
                }, c.render = function (t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, s, l, h, c, u, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        _ = this._totalTime,
                        m = this._cycle,
                        g = this._duration,
                        v = this._rawPrevTime;
                    if (t >= f - 1e-7 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > v || 0 >= t && t >= -1e-7 || v === a && "isPause" !== this.data) && v !== t && (i = !0, v > a && (r = "onReverseComplete")), this._rawPrevTime = d = !e || t || v === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === g && v > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = d = !e || t || v === t ? t : a)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / g, c = this._easeType, u = this._easePower, (1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), 1 === c ? this.ratio = 1 - h : 2 === c ? this.ratio = h : this._time / g < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && m === this._cycle) return void(_ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = _, this._rawPrevTime = v, this._cycle = m, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / g) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === _ && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== _ || n) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === a && d !== a && (this._rawPrevTime = 0))
                }, s.to = function (t, e, i) {
                    return new s(t, e, i)
                }, s.from = function (t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                }, s.fromTo = function (t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                }, s.staggerTo = s.allTo = function (t, e, a, o, c, d, f) {
                    o = o || 0;
                    var p, _, m, g, v = 0,
                        b = [],
                        y = function () {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), c.apply(f || a.callbackScope || this, d || u)
                        },
                        x = a.cycle,
                        w = a.startAt && a.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t.reverse(), o *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                        _ = {};
                        for (g in a) _[g] = a[g];
                        if (x && r(_, t, m), w) {
                            w = _.startAt = {};
                            for (g in a.startAt) w[g] = a.startAt[g];
                            r(_.startAt, t, m)
                        }
                        _.delay = v + (_.delay || 0), m === p && c && (_.onComplete = y), b[m] = new s(t[m], e, _), v += o
                    }
                    return b
                }, s.staggerFrom = s.allFrom = function (t, e, i, n, r, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, a, o)
                }, s.staggerFromTo = s.allFromTo = function (t, e, i, n, r, a, o, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, a, o, l)
                }, s.delayedCall = function (t, e, i, n, r) {
                    return new s(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, s.set = function (t, e) {
                    return new s(t, 0, e)
                }, s.isTweening = function (t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var d = function (t, e) {
                        for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(d(s, e)), r = n.length), s = s._next;
                        return n
                    },
                    f = s.getAllTweens = function (e) {
                        return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
                    };
                s.killAll = function (t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, a, o, l = f(0 != r),
                        h = l.length,
                        c = i && n && r;
                    for (o = 0; h > o; o++) a = l[o], (c || a instanceof e || (s = a.target === a.vars.onComplete) && n || i && !s) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, s.killChildTweensOf = function (t, e) {
                    if (null != t) {
                        var r, a, c, u, d, f = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), h(t))
                            for (u = t.length; --u > -1;) s.killChildTweensOf(t[u], e);
                        else {
                            r = [];
                            for (c in f)
                                for (a = f[c].target.parentNode; a;) a === t && (r = r.concat(f[c].tweens)), a = a.parentNode;
                            for (d = r.length, u = 0; d > u; u++) e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                        }
                    }
                };
                var p = function (t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var s, a, o = f(r), l = i && n && r, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (s = a.target === a.vars.onComplete) && n || i && !s) && a.paused(t)
                };
                return s.pauseAll = function (t, e, i) {
                    p(!0, t, e, i)
                }, s.resumeAll = function (t, e, i) {
                    p(!1, t, e, i)
                }, s.globalTimeScale = function (e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || a, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, c.progress = function (t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, c.totalProgress = function (t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, c.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.duration = function (e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, c.totalDuration = function (t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var n = function (t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    s = i._internals,
                    a = n._internals = {},
                    o = s.isSelector,
                    l = s.isArray,
                    h = s.lazyTweens,
                    c = s.lazyRender,
                    u = _gsScope._gsDefine.globals,
                    d = function (t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = function (t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    p = a.pauseCallback = function () {},
                    _ = function (t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    m = n.prototype = new e;
                return n.version = "1.18.2", m.constructor = n, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function (t, e, n, r) {
                    var s = n.repeat && u.TweenMax || i;
                    return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                }, m.from = function (t, e, n, r) {
                    return this.add((n.repeat && u.TweenMax || i).from(t, e, n), r)
                }, m.fromTo = function (t, e, n, r, s) {
                    var a = r.repeat && u.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, n, r), s) : this.set(t, r, s)
                }, m.staggerTo = function (t, e, r, s, a, l, h, c) {
                    var u, p, m = new n({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = _(t)), s = s || 0, 0 > s && (t = _(t), t.reverse(), s *= -1), p = 0; p < t.length; p++) u = d(r), u.startAt && (u.startAt = d(u.startAt), u.startAt.cycle && f(u.startAt, t, p)), g && f(u, t, p), m.to(t[p], e, u, p * s);
                    return this.add(m, a)
                }, m.staggerFrom = function (t, e, i, n, r, s, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, a, o)
                }, m.staggerFromTo = function (t, e, i, n, r, s, a, o, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, a, o, l)
                }, m.call = function (t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, m.set = function (t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function (t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, a = new n(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = s;
                    return o.add(a, 0), a
                }, m.add = function (r, s, a, o) {
                    var h, c, u, d, f, p;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (a = a || "normal", o = o || 0, h = s, c = r.length, u = 0; c > u; u++) l(d = r[u]) && (d = new n({
                                tweens: d
                            })), this.add(d, h), "string" != typeof d && "function" != typeof d && ("sequence" === a ? h = d._startTime + d.totalDuration() / d._timeScale : "start" === a && (d._startTime -= d.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, p = f.rawTime() > r._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, m.remove = function (e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function (t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function (t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function (t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, m.appendMultiple = function (t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, m.addLabel = function (t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function (t, e, n, r) {
                    var s = i.delayedCall(0, p, n, r || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                }, m.removeLabel = function (t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function (t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function (e, i, n, r) {
                    var s;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, m.seek = function (t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, m.stop = function () {
                    return this.paused(!0)
                }, m.gotoAndPlay = function (t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function (t, e) {
                    return this.pause(t, e)
                }, m.render = function (t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, a, o, l, u, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        _ = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (t >= f - 1e-7) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (s = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                            u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || i || l || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), d = this._time, d >= p)
                            for (n = this._first; n && (a = n._next, d === this._time && (!this._paused || g));)(n._active || n._startTime <= d && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, d === this._time && (!this._paused || g));) {
                                if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                    if (u === n) {
                                        for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = a
                            }
                        this._onUpdate && (e || (h.length && c(), this._callback("onUpdate"))), o && (this._gc || (_ === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, m._hasPausedChild = function () {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function (t, e, n, r) {
                    r = r || -9999999999;
                    for (var s = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof i ? e !== !1 && (s[o++] = a) : (n !== !1 && (s[o++] = a), t !== !1 && (s = s.concat(a.getChildren(!0, e, n)), o = s.length))), a = a._next;
                    return s
                }, m.getTweensOf = function (t, e) {
                    var n, r, s = this._gc,
                        a = [],
                        o = 0;
                    for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (a[o++] = n[r]);
                    return s && this._enabled(!1, !0), a
                }, m.recent = function () {
                    return this._recent
                }, m._contains = function (t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function (t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in s) s[n] >= i && (s[n] += t);
                    return this._uncache(!0)
                }, m._kill = function (t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, m.clear = function (t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function () {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function (t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function (e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, m.duration = function (t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function (t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, m.paused = function (e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function () {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function () {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
                var n = function (e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    s = e._internals,
                    a = s.lazyTweens,
                    o = s.lazyRender,
                    l = new i(null, null, 1, 0),
                    h = n.prototype = new t;
                return h.constructor = n, h.kill()._gc = !1, n.version = "1.18.2", h.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, h.addCallback = function (t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, h.removeCallback = function (t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, h.removePause = function (e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, h.tweenTo = function (t, i) {
                    i = i || {};
                    var n, r, s, a = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, s = new e(this, n, a), a.onStart = function () {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
                    }, s
                }, h.tweenFromTo = function (t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, h.render = function (t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, l, h, c, u, d, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        _ = this._duration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._startTime,
                        b = this._timeScale,
                        y = this._rawPrevTime,
                        x = this._paused,
                        w = this._cycle;
                    if (t >= p - 1e-7) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > y || y === r) && y !== t && this._first && (c = !0, y > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = _, t = _ + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === _ && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (h = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = s = !0, h = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = _ || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (c = !0)
                        }
                    else if (0 === _ && 0 > y && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = _ + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? (this._time = _, t = _ + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= m)
                            for (n = this._first; n && n._startTime <= t && !d;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !d;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n), n = n._prev;
                        d && (this._time = t = d._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== w && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & w),
                            E = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            C = this._totalTime,
                            S = this._cycle,
                            R = this._rawPrevTime,
                            k = this._time;
                        if (this._totalTime = w * _, this._cycle < w ? T = !T : this._totalTime += _, this._time = m, this._rawPrevTime = 0 === _ ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = T ? 0 : _, this.render(m, e, 0 === _), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time) return;
                        if (E && (m = T ? _ + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = k, this._totalTime = C, this._cycle = S, this._rawPrevTime = R
                    }
                    if (!(this._time !== m && this._first || i || c || d)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), f = this._time, f >= m)
                        for (n = this._first; n && (l = n._next, f === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (d === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, f === this._time && (!this._paused || x));) {
                            if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                                if (d === n) {
                                    for (d = n._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
                                    d = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = l
                        }
                    this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), h && (this._locked || this._gc || (v === this._startTime || b !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                }, h.getActive = function (t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, s = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        l = a.length;
                    for (n = 0; l > n; n++) r = a[n], r.isActive() && (s[o++] = r);
                    return s
                }, h.getLabelAfter = function (t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, h.getLabelBefore = function (t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, h.getLabelsArray = function () {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function (t, e) {
                        return t.time - e.time
                    }), e
                }, h.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, h.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function (e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, h.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function () {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    s = _gsScope._gsDefine.globals,
                    a = function (t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function (t, e, i, n) {
                        var r = {
                                a: t
                            },
                            s = {},
                            a = {},
                            o = {
                                c: n
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            c = (i + n) / 2,
                            u = (l + h) / 2,
                            d = (h + c) / 2,
                            f = (d - u) / 8;
                        return r.b = l + (t - l) / 4, s.b = u + f, r.c = s.a = (r.b + s.b) / 2, s.c = a.a = (u + d) / 2, a.b = d - f, o.b = c + (n - c) / 4, a.c = o.a = (a.b + o.b) / 2, [r, s, a, o]
                    },
                    h = function (t, r, s, a, o) {
                        var h, c, u, d, f, p, _, m, g, v, b, y, x, w = t.length - 1,
                            T = 0,
                            E = t[0].a;
                        for (h = 0; w > h; h++) f = t[T], c = f.a, u = f.d, d = t[T + 1].d, o ? (b = e[h], y = i[h], x = (y + b) * r * .25 / (a ? .5 : n[h] || .5), p = u - (u - c) * (a ? .5 * r : 0 !== b ? x / b : 0), _ = u + (d - u) * (a ? .5 * r : 0 !== y ? x / y : 0), m = u - (p + ((_ - p) * (3 * b / (b + y) + .5) / 4 || 0))) : (p = u - (u - c) * r * .5, _ = u + (d - u) * r * .5, m = u - (p + _) / 2), p += m, _ += m, f.c = g = p, 0 !== h ? f.b = E : f.b = E = f.a + .6 * (f.c - f.a), f.da = u - c, f.ca = g - c, f.ba = E - c, s ? (v = l(c, E, g, u), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, E = _;
                        f = t[T], f.b = E, f.c = E + .4 * (f.d - E), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = E - f.a, s && (v = l(f.a, E, f.c, f.d), t.splice(T, 1, v[0], v[1], v[2], v[3]))
                    },
                    c = function (t, n, r, s) {
                        var o, l, h, c, u, d, f = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof (d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = s[n] + Number(d.charAt(0) + d.substr(2)));
                        if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][n], 0, 0, t[-1 > o ? 0 : 1][n]), f;
                        for (l = 0; o > l; l++) h = t[l][n], c = t[l + 1][n], f[l] = new a(h, 0, 0, c), r && (u = t[l + 2][n], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
                        return f[l] = new a(t[l][n], 0, 0, t[l + 1][n]), f
                    },
                    u = function (t, s, a, l, u, d) {
                        var f, p, _, m, g, v, b, y, x = {},
                            w = [],
                            T = d || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == s && (s = 1);
                        for (p in t[0]) w.push(p);
                        if (t.length > 1) {
                            for (y = t[t.length - 1], b = !0, f = w.length; --f > -1;)
                                if (p = w[f], Math.abs(T[p] - y[p]) > .05) {
                                    b = !1;
                                    break
                                }
                            b && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, f = w.length; --f > -1;) p = w[f], r[p] = -1 !== u.indexOf("," + p + ","), x[p] = c(t, p, r[p], d);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!l) {
                            for (f = w.length; --f > -1;)
                                if (r[p])
                                    for (_ = x[w[f]], v = _.length - 1, m = 0; v > m; m++) g = _[m + 1].da / i[m] + _[m].da / e[m], n[m] = (n[m] || 0) + g * g;
                            for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
                        }
                        for (f = w.length, m = a ? 4 : 1; --f > -1;) p = w[f], _ = x[p], h(_, s, a, l, r[p]), b && (_.splice(0, m), _.splice(_.length - m, m));
                        return x
                    },
                    d = function (t, e, i) {
                        e = e || "soft";
                        var n, r, s, o, l, h, c, u, d, f, p, _ = {},
                            m = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (d in t[0]) v.push(d);
                        for (h = v.length; --h > -1;) {
                            for (d = v[h], _[d] = l = [], f = 0, u = t.length, c = 0; u > c; c++) n = null == i ? t[c][d] : "string" == typeof (p = t[c][d]) && "=" === p.charAt(1) ? i[d] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && c > 1 && u - 1 > c && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                            for (u = f - m + 1, f = 0, c = 0; u > c; c += m) n = l[c], r = l[c + 1], s = l[c + 2], o = 2 === m ? 0 : l[c + 3], l[f++] = p = 3 === m ? new a(n, r, s, o) : new a(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            l.length = f
                        }
                        return _
                    },
                    f = function (t, e, i) {
                        for (var n, r, s, a, o, l, h, c, u, d, f, p = 1 / i, _ = t.length; --_ > -1;)
                            for (d = t[_], s = d.a, a = d.d - s, o = d.c - s, l = d.b - s, n = r = 0, c = 1; i >= c; c++) h = p * c, u = 1 - h, n = r - (r = (h * h * a + 3 * u * (h * o + u * l)) * h), f = _ * i + c - 1, e[f] = (e[f] || 0) + n * n
                    },
                    p = function (t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, s, a = [],
                            o = [],
                            l = 0,
                            h = 0,
                            c = e - 1,
                            u = [],
                            d = [];
                        for (i in t) f(t[i], a, e);
                        for (r = a.length, n = 0; r > n; n++) l += Math.sqrt(a[n]), s = n % e, d[s] = l, s === c && (h += l, s = n / e >> 0, u[s] = d, o[s] = h, l = 0, d = []);
                        return {
                            length: h,
                            lengths: o,
                            segments: u
                        }
                    },
                    _ = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function (t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, s, a, o, l = e.values || [],
                                h = {},
                                c = l[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (n in c) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), o || h[n] !== l[0][n] && (o = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : d(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                                var _ = p(this._beziers, this._timeRes);
                                this._length = _.length, this._lengths = _.lengths, this._segments = _.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1;) {
                                    for (a = 0; 3 > a; a++) n = f[s][a], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                    n = f[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function (e) {
                            var i, n, r, s, a, o, l, h, c, u, d = this._segCount,
                                f = this._func,
                                p = this._target,
                                _ = e !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && d - 1 > r) {
                                    for (h = d - 1; h > r && (this._l2 = c[++r]) <= e;);
                                    this._l1 = c[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = c[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < u.length - 1) {
                                    for (h = u.length - 1; h > r && (this._s2 = u[++r]) <= e;);
                                    this._s1 = u[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0, o = (e - i * (1 / d)) * d;
                            for (n = 1 - o, r = this._props.length; --r > -1;) s = this._props[r], a = this._beziers[s][i], l = (o * o * a.da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a, this._round[s] && (l = Math.round(l)), f[s] ? p[s](l) : p[s] = l;
                            if (this._autoRotate) {
                                var m, g, v, b, y, x, w, T = this._autoRotate;
                                for (r = T.length; --r > -1;) s = T[r][2], x = T[r][3] || 0, w = T[r][4] === !0 ? 1 : t, a = this._beziers[T[r][0]], m = this._beziers[T[r][1]], a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, b = a.b + (a.c - a.b) * o, g += (b - g) * o, b += (a.c + (a.d - a.c) * o - b) * o, v = m.a + (m.b - m.a) * o, y = m.b + (m.c - m.b) * o, v += (y - v) * o, y += (m.c + (m.d - m.c) * o - y) * o, l = _ ? Math.atan2(y - v, b - g) * w + x : this._initialRotations[r], f[s] ? p[s](l) : p[s] = l)
                            }
                        }
                    }),
                    m = _.prototype;
                _.bezierThrough = u, _.cubicToQuadratic = l, _._autoCSS = !0, _.quadraticToCubic = function (t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, _._cssRegister = function () {
                    var t = s.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function (t, e, s, a, o, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new _;
                                var h, c, u, d = e.values,
                                    f = d.length - 1,
                                    p = [],
                                    m = {};
                                if (0 > f) return o;
                                for (h = 0; f >= h; h++) u = i(t, d[h], a, o, l, f !== h), p[h] = u.end;
                                for (c in e) m[c] = e[c];
                                return m.values = p, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = l, o.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != u.end.x && [
                                    ["x", "y", "rotation", h, !1]
                                ]), m.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), l._onInitTween(u.proxy, m, a._tween), o
                            }
                        })
                    }
                }, m._roundProps = function (t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, m._kill = function (t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                var i, n, r, s, a = function () {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    l = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.18.2", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var c, u, d, f, p, _, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    y = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    T = /alpha\(opacity *=.+?\)/i,
                    E = /^(rgb|hsl)/,
                    C = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    k = function (t, e) {
                        return e.toUpperCase()
                    },
                    P = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    D = Math.PI / 180,
                    H = 180 / Math.PI,
                    z = {},
                    F = document,
                    N = function (t) {
                        return F.createElementNS ? F.createElementNS("http://www.w3.org/1999/xhtml", t) : F.createElement(t)
                    },
                    L = N("div"),
                    U = N("img"),
                    B = a._internals = {
                        _specialProps: l
                    },
                    I = navigator.userAgent,
                    j = function () {
                        var t = I.indexOf("Android"),
                            e = N("a");
                        return d = -1 !== I.indexOf("Safari") && -1 === I.indexOf("Chrome") && (-1 === t || Number(I.substr(t + 8, 1)) > 3), p = d && Number(I.substr(I.indexOf("Version/") + 8, 1)) < 6, f = -1 !== I.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(I)) && (_ = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    V = function (t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    X = function (t) {
                        window.console && console.log(t)
                    },
                    W = "",
                    G = "",
                    q = function (t, e) {
                        e = e || L;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (G = 3 === n ? "ms" : i[n], W = "-" + G.toLowerCase() + "-", G + t) : null
                    },
                    Y = F.defaultView ? F.defaultView.getComputedStyle : function () {},
                    Z = a.getStyle = function (t, e, i, n, r) {
                        var s;
                        return j || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || Y(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : V(t)
                    },
                    K = B.convertToPixels = function (t, i, n, r, s) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var o, l, h, c = P.test(i),
                            u = t,
                            d = L.style,
                            f = 0 > n;
                        if (f && (n = -n), "%" === r && -1 !== i.indexOf("border")) o = n / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (d.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) d[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (u = t.parentNode || F.body, l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * n / 100;
                                d[c ? "width" : "height"] = n + r
                            }
                            u.appendChild(L), o = parseFloat(L[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), c && "%" === r && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = o / n * 100), 0 !== o || s || (o = K(t, i, n, r, !0))
                        }
                        return f ? -o : o
                    },
                    Q = B.calculateOffset = function (t, e, i) {
                        if ("absolute" !== Z(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = Z(t, "margin" + n, i);
                        return t["offset" + n] - (K(t, e, parseFloat(r), r.replace(y, "")) || 0)
                    },
                    J = function (t, e) {
                        var i, n, r, s = {};
                        if (e = e || Y(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || Ct === r) && (s[r.replace(S, k)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Et === i) && (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(S, k)] = e[i]);
                        return j || (s.opacity = V(t)), n = Nt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Rt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    $ = function (t, e, i, n, r) {
                        var s, a, o, l = {},
                            h = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(b, "") ? s : 0 : Q(t, a), void 0 !== h[a] && (o = new pt(h, a, h[a], o)));
                        if (n)
                            for (a in n) "className" !== a && (l[a] = n[a]);
                        return {
                            difs: l,
                            firstMPT: o
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function (t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = tt[e],
                            s = r.length;
                        for (i = i || Y(t, null); --s > -1;) n -= parseFloat(Z(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(Z(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function (t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(b, "")), e.oy = parseFloat(r.replace(b, "")), e.v = t), e || t
                    },
                    rt = function (t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    st = function (t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    at = function (t, e, i, n) {
                        var r, s, a, o, l, h = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : H) - (l ? 0 : e), s.length && (n && (n[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), o = e + a), h > o && o > -h && (o = 0), o
                    },
                    ot = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    lt = function (t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ht = a.parseColor = function (t, e) {
                        var i, n, r, s, a, o, l, h, c, u, d;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t]) i = ot[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = d = t.match(m), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(g)
                                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (o + 1) : l + o - l * o, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(a + 1 / 3, n, r), i[1] = lt(a, n, r), i[2] = lt(a - 1 / 3, n, r);
                                else i = t.match(m) || ot.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ot.black;
                        return e && !d && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, h = Math.max(n, r, s), c = Math.min(n, r, s), l = (h + c) / 2, h === c ? a = o = 0 : (u = h - c, o = l > .5 ? u / (2 - h - c) : u / (h + c), a = h === n ? (r - s) / u + (s > r ? 6 : 0) : h === r ? (s - n) / u + 2 : (n - r) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    ct = function (t, e) {
                        var i, n, r, s = t.match(ut) || [],
                            a = 0,
                            o = s.length ? "" : t;
                        for (i = 0; i < s.length; i++) n = s[i], r = t.substr(a, t.indexOf(n, a) - a), a += r.length + n.length, n = ht(n, e), 3 === n.length && n.push(1), o += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return o
                    },
                    ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in ot) ut += "|" + h + "\\b";
                ut = new RegExp(ut + ")", "gi"), a.colorStringFilter = function (t) {
                    var e, i = t[0] + t[1];
                    ut.lastIndex = 0, ut.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ct(t[0], e), t[1] = ct(t[1], e))
                }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                var dt = function (t, e, i, n) {
                        if (null == t) return function (t) {
                            return t
                        };
                        var r, s = e ? (t.match(ut) || [""])[0] : "",
                            a = t.split(s).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            c = a.length,
                            u = c > 0 ? a[0].replace(m, "") : "";
                        return c ? r = e ? function (t) {
                            var e, d, f, p;
                            if ("number" == typeof t) t += u;
                            else if (n && M.test(t)) {
                                for (p = t.replace(M, "|").split("|"), f = 0; f < p.length; f++) p[f] = r(p[f]);
                                return p.join(",")
                            }
                            if (e = (t.match(ut) || [s])[0],
                                d = t.split(e).join("").match(v) || [], f = d.length, c > f--)
                                for (; ++f < c;) d[f] = i ? d[(f - 1) / 2 | 0] : a[f];
                            return o + d.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function (t) {
                            var e, s, d;
                            if ("number" == typeof t) t += u;
                            else if (n && M.test(t)) {
                                for (s = t.replace(M, "|").split("|"), d = 0; d < s.length; d++) s[d] = r(s[d]);
                                return s.join(",")
                            }
                            if (e = t.match(v) || [], d = e.length, c > d--)
                                for (; ++d < c;) e[d] = i ? e[(d - 1) / 2 | 0] : a[d];
                            return o + e.join(h) + l
                        } : function (t) {
                            return t
                        }
                    },
                    ft = function (t) {
                        return t = t.split(","),
                            function (e, i, n, r, s, a, o) {
                                var l, h = (i + "").split(" ");
                                for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return r.parse(e, o, s, a)
                            }
                    },
                    pt = (B._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s, a = this.data, o = a.proxy, l = a.firstMPT, h = 1e-6; l;) e = o[l.v], l.r ? e = Math.round(e) : h > e && e > -h && (e = 0), l.t[l.p] = e, l = l._next;
                        if (a.autoRotate && (a.autoRotate.rotation = o.rotation), 1 === t || 0 === t)
                            for (l = a.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i[s] = r
                                    }
                                } else i[s] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function (t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    _t = (B._parseToProxy = function (t, e, i, n, r, s) {
                        var a, o, l, h, c, u = n,
                            d = {},
                            f = {},
                            p = i._transform,
                            _ = z;
                        for (i._transform = null, z = e, n = c = i.parse(t, e, n, r), z = _, s && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                            if (n.type <= 1 && (o = n.p, f[o] = n.s + n.c, d[o] = n.s, s || (h = new pt(n, "s", o, h, n.r), n.c = 0), 1 === n.type))
                                for (a = n.l; --a > 0;) l = "xn" + a, o = n.p + "_" + l, f[o] = n.data[l], d[o] = n[l], s || (h = new pt(n, l, o, h, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: d,
                            end: f,
                            firstMPT: h,
                            pt: c
                        }
                    }, B.CSSPropTween = function (t, e, n, r, a, o, l, h, c, u, d) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof _t || s.push(this.n), this.r = h, this.type = o || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === d ? n + r : d, a && (this._next = a, a._prev = this)
                    }),
                    mt = function (t, e, i, n, r, s) {
                        var a = new _t(t, e, i, n - i, r, (-1), s);
                        return a.b = i, a.e = a.xs0 = n, a
                    },
                    gt = a.parseComplex = function (t, e, i, n, r, s, a, o, l, h) {
                        i = i || s || "", a = new _t(t, e, 0, 0, a, h ? 2 : 1, null, (!1), o, i, n), n += "";
                        var u, d, f, p, _, v, b, y, x, w, T, E, C, S = i.split(", ").join(",").split(" "),
                            R = n.split(", ").join(",").split(" "),
                            k = S.length,
                            P = c !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), k = S.length), k !== R.length && (S = (s || "").split(" "), k = S.length), a.plugin = l, a.setRatio = h, ut.lastIndex = 0, u = 0; k > u; u++)
                            if (p = S[u], _ = R[u], y = parseFloat(p), y || 0 === y) a.appendXtra("", y, rt(_, y), _.replace(g, ""), P && -1 !== _.indexOf("px"), !0);
                            else if (r && ut.test(p)) E = "," === _.charAt(_.length - 1) ? ")," : ")", C = -1 !== _.indexOf("hsl") && j, p = ht(p, C), _ = ht(_, C), x = p.length + _.length > 6, x && !j && 0 === _[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (j || (x = !1), C ? a.appendXtra(x ? "hsla(" : "hsl(", p[0], rt(_[0], p[0]), ",", !1, !0).appendXtra("", p[1], rt(_[1], p[1]), "%,", !1).appendXtra("", p[2], rt(_[2], p[2]), x ? "%," : "%" + E, !1) : a.appendXtra(x ? "rgba(" : "rgb(", p[0], _[0] - p[0], ",", !0, !0).appendXtra("", p[1], _[1] - p[1], ",", !0).appendXtra("", p[2], _[2] - p[2], x ? "," : E, !0), x && (p = p.length < 4 ? 1 : p[3], a.appendXtra("", p, (_.length < 4 ? 1 : _[3]) - p, E, !1))), ut.lastIndex = 0;
                        else if (v = p.match(m)) {
                            if (b = _.match(g), !b || b.length !== v.length) return a;
                            for (f = 0, d = 0; d < v.length; d++) T = v[d], w = p.indexOf(T, f), a.appendXtra(p.substr(f, w - f), Number(T), rt(b[d], T), "", P && "px" === p.substr(w + T.length, 2), 0 === d), f = w + T.length;
                            a["xs" + a.l] += p.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + _ : _;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (E = a.xs0 + a.data.s, u = 1; u < a.l; u++) E += a["xs" + u] + a.data["xn" + u];
                            a.e = E + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    vt = 9;
                for (h = _t.prototype, h.l = h.pr = 0; --vt > 0;) h["xn" + vt] = 0, h["xs" + vt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (t, e, i, n, r, s) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += s && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new _t(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (n || ""), a)
                };
                var bt = function (t, e) {
                        e = e || {}, this.p = e.prefix ? q(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    yt = B._registerComplexSpecialProp = function (t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, s = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || a, r = new bt(s[n], e)
                    },
                    xt = function (t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            yt(t, {
                                parser: function (t, i, n, r, s, a, h) {
                                    var c = o.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[n].parse(t, i, n, r, s, a, h)) : (X("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                h = bt.prototype, h.parseComplex = function (t, e, i, n, r, s) {
                    var a, o, l, h, c, u, d = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : d && (o = [e], l = [i])), l) {
                        for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, d && (c = e.indexOf(d), u = i.indexOf(d), c !== u && (-1 === u ? o[a] = o[a].split(d).join("") : -1 === c && (o[a] += " " + d)));
                        e = o.join(", "), i = l.join(", ")
                    }
                    return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                }, h.parse = function (t, e, i, n, s, a, o) {
                    return this.parseComplex(t.style, this.format(Z(t, this.p, r, !1, this.dflt)), this.format(e), s, a)
                }, a.registerSpecialProp = function (t, e, i) {
                    yt(t, {
                        parser: function (t, n, r, s, a, o, l) {
                            var h = new _t(t, r, 0, 0, a, 2, r, (!1), i);
                            return h.plugin = o, h.setRatio = e(t, n, s._tween, r), h
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = d || f;
                var wt, Tt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Et = q("transform"),
                    Ct = W + "transform",
                    St = q("transformOrigin"),
                    Rt = null !== q("perspective"),
                    kt = B.Transform = function () {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(a.defaultForce3D === !1 || !Rt) && (a.defaultForce3D || "auto")
                    },
                    Pt = window.SVGElement,
                    At = function (t, e, i) {
                        var n, r = F.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    Ot = F.documentElement,
                    Mt = function () {
                        var t, e, i, n = _ || /Android/i.test(I) && !window.chrome;
                        return F.createElementNS && !n && (t = At("svg", Ot), e = At("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[St] = "50% 50%", e.style[Et] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && Rt), Ot.removeChild(t)), n
                    }(),
                    Dt = function (t, e, i, n, r) {
                        var s, o, l, h, c, u, d, f, p, _, m, g, v, b, y = t._gsTransform,
                            x = Ft(t, !0);
                        y && (v = y.xOrigin, b = y.yOrigin), (!n || (s = n.split(" ")).length < 2) && (d = t.getBBox(), e = nt(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = h = parseFloat(s[0]), i.yOrigin = c = parseFloat(s[1]), n && x !== zt && (u = x[0], d = x[1], f = x[2], p = x[3], _ = x[4], m = x[5], g = u * p - d * f, o = h * (p / g) + c * (-f / g) + (f * m - p * _) / g, l = h * (-d / g) + c * (u / g) - (u * m - d * _) / g, h = i.xOrigin = s[0] = o, c = i.yOrigin = s[1] = l), y && (r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - v, l = c - b, y.xOffset += o * x[0] + l * x[2] - o, y.yOffset += o * x[1] + l * x[3] - l) : y.xOffset = y.yOffset = 0), t.setAttribute("data-svg-origin", s.join(" "))
                    },
                    Ht = function (t) {
                        return !!(Pt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    zt = [1, 0, 0, 1, 0, 0],
                    Ft = function (t, e) {
                        var i, n, r, s, a, o = t._gsTransform || new kt,
                            l = 1e5;
                        if (Et ? n = Z(t, Ct, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(A), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (o.svg || t.getBBox && Ht(t)) && (i && -1 !== (t.style[Et] + "").indexOf("matrix") && (n = t.style[Et], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return zt;
                        for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = r.length; --vt > -1;) s = Number(r[vt]), r[vt] = (a = s - (s |= 0)) ? (a * l + (0 > a ? -.5 : .5) | 0) / l + s : s;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Nt = B.getTransform = function (t, i, n, s) {
                        if (t._gsTransform && n && !s) return t._gsTransform;
                        var o, l, h, c, u, d, f = n ? t._gsTransform || new kt : new kt,
                            p = f.scaleX < 0,
                            _ = 2e-5,
                            m = 1e5,
                            g = Rt ? parseFloat(Z(t, St, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            v = parseFloat(a.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getBBox || !Ht(t)), f.svg && (Dt(t, Z(t, St, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), wt = a.useSVGTransformAttr || Mt), o = Ft(t), o !== zt) {
                            if (16 === o.length) {
                                var b, y, x, w, T, E = o[0],
                                    C = o[1],
                                    S = o[2],
                                    R = o[3],
                                    k = o[4],
                                    P = o[5],
                                    A = o[6],
                                    O = o[7],
                                    M = o[8],
                                    D = o[9],
                                    z = o[10],
                                    F = o[12],
                                    N = o[13],
                                    L = o[14],
                                    U = o[11],
                                    B = Math.atan2(A, z);
                                f.zOrigin && (L = -f.zOrigin, F = M * L - o[12], N = D * L - o[13], L = z * L + f.zOrigin - o[14]), f.rotationX = B * H, B && (w = Math.cos(-B), T = Math.sin(-B), b = k * w + M * T, y = P * w + D * T, x = A * w + z * T, M = k * -T + M * w, D = P * -T + D * w, z = A * -T + z * w, U = O * -T + U * w, k = b, P = y, A = x), B = Math.atan2(-S, z), f.rotationY = B * H, B && (w = Math.cos(-B), T = Math.sin(-B), b = E * w - M * T, y = C * w - D * T, x = S * w - z * T, D = C * T + D * w, z = S * T + z * w, U = R * T + U * w, E = b, C = y, S = x), B = Math.atan2(C, E), f.rotation = B * H, B && (w = Math.cos(-B), T = Math.sin(-B), E = E * w + k * T, y = C * w + P * T, P = C * -T + P * w, A = S * -T + A * w, C = y), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), f.scaleX = (Math.sqrt(E * E + C * C) * m + .5 | 0) / m, f.scaleY = (Math.sqrt(P * P + D * D) * m + .5 | 0) / m, f.scaleZ = (Math.sqrt(A * A + z * z) * m + .5 | 0) / m, f.skewX = 0, f.perspective = U ? 1 / (0 > U ? -U : U) : 0, f.x = F, f.y = N, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * E - f.yOrigin * k), f.y -= f.yOrigin - (f.yOrigin * C - f.xOrigin * P))
                            } else if ((!Rt || s || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) && (void 0 === f.x || "none" !== Z(t, "display", i))) {
                                var I = o.length >= 6,
                                    j = I ? o[0] : 1,
                                    V = o[1] || 0,
                                    X = o[2] || 0,
                                    W = I ? o[3] : 1;
                                f.x = o[4] || 0, f.y = o[5] || 0, h = Math.sqrt(j * j + V * V), c = Math.sqrt(W * W + X * X), u = j || V ? Math.atan2(V, j) * H : f.rotation || 0, d = X || W ? Math.atan2(X, W) * H + u : f.skewX || 0, Math.abs(d) > 90 && Math.abs(d) < 270 && (p ? (h *= -1, d += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (c *= -1, d += 0 >= d ? 180 : -180)), f.scaleX = h, f.scaleY = c, f.rotation = u, f.skewX = d, Rt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * j + f.yOrigin * X), f.y -= f.yOrigin - (f.xOrigin * V + f.yOrigin * W))
                            }
                            f.zOrigin = g;
                            for (l in f) f[l] < _ && f[l] > -_ && (f[l] = 0)
                        }
                        return n && (t._gsTransform = f, f.svg && (wt && t.style[Et] ? e.delayedCall(.001, function () {
                            It(t.style, Et)
                        }) : !wt && t.getAttribute("transform") && e.delayedCall(.001, function () {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Lt = function (t) {
                        var e, i, n = this.data,
                            r = -n.rotation * D,
                            s = r + n.skewX * D,
                            a = 1e5,
                            o = (Math.cos(r) * n.scaleX * a | 0) / a,
                            l = (Math.sin(r) * n.scaleX * a | 0) / a,
                            h = (Math.sin(s) * -n.scaleY * a | 0) / a,
                            c = (Math.cos(s) * n.scaleY * a | 0) / a,
                            u = this.t.style,
                            d = this.t.currentStyle;
                        if (d) {
                            i = l, l = -h, h = -i, e = d.filter, u.filter = "";
                            var f, p, m = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== d.position,
                                b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                                w = n.x + m * n.xPercent / 100,
                                T = n.y + g * n.yPercent / 100;
                            if (null != n.ox && (f = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2, p = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2, w += f - (f * o + p * l), T += p - (f * h + p * c)), v ? (f = m / 2, p = g / 2, b += ", Dx=" + (f - (f * o + p * l) + w) + ", Dy=" + (p - (f * h + p * c) + T) + ")") : b += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(O, b) : u.filter = b + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === c && (v && -1 === b.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var E, C, S, R = 8 > _ ? 1 : -1;
                                for (f = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w), n.ieOffsetY = Math.round((g - ((0 > c ? -c : c) * g + (0 > h ? -h : h) * m)) / 2 + T), vt = 0; 4 > vt; vt++) C = et[vt], E = d[C], i = -1 !== E.indexOf("px") ? parseFloat(E) : K(this.t, C, parseFloat(E), E.replace(y, "")) || 0, S = i !== n[C] ? 2 > vt ? -n.ieOffsetX : -n.ieOffsetY : 2 > vt ? f - n.ieOffsetX : p - n.ieOffsetY, u[C] = (n[C] = Math.round(i - S * (0 === vt || 2 === vt ? 1 : R))) + "px"
                            }
                        }
                    },
                    Ut = B.set3DTransformRatio = B.setTransformRatio = function (t) {
                        var e, i, n, r, s, a, o, l, h, c, u, d, p, _, m, g, v, b, y, x, w, T, E, C = this.data,
                            S = this.t.style,
                            R = C.rotation,
                            k = C.rotationX,
                            P = C.rotationY,
                            A = C.scaleX,
                            O = C.scaleY,
                            M = C.scaleZ,
                            H = C.x,
                            z = C.y,
                            F = C.z,
                            N = C.svg,
                            L = C.perspective,
                            U = C.force3D;
                        if (((1 === t || 0 === t) && "auto" === U && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !U) && !F && !L && !P && !k && 1 === M || wt && N || !Rt) return void(R || C.skewX || N ? (R *= D, T = C.skewX * D, E = 1e5, e = Math.cos(R) * A, r = Math.sin(R) * A, i = Math.sin(R - T) * -O, s = Math.cos(R - T) * O, T && "simple" === C.skewType && (v = Math.tan(T), v = Math.sqrt(1 + v * v), i *= v, s *= v, C.skewY && (e *= v, r *= v)), N && (H += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, z += C.yOrigin - (C.xOrigin * r + C.yOrigin * s) + C.yOffset, wt && (C.xPercent || C.yPercent) && (_ = this.t.getBBox(), H += .01 * C.xPercent * _.width, z += .01 * C.yPercent * _.height), _ = 1e-6, _ > H && H > -_ && (H = 0), _ > z && z > -_ && (z = 0)), y = (e * E | 0) / E + "," + (r * E | 0) / E + "," + (i * E | 0) / E + "," + (s * E | 0) / E + "," + H + "," + z + ")", N && wt ? this.t.setAttribute("transform", "matrix(" + y) : S[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + y) : S[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + O + "," + H + "," + z + ")");
                        if (f && (_ = 1e-4, _ > A && A > -_ && (A = M = 2e-5), _ > O && O > -_ && (O = M = 2e-5), !L || C.z || C.rotationX || C.rotationY || (L = 0)), R || C.skewX) R *= D, m = e = Math.cos(R), g = r = Math.sin(R), C.skewX && (R -= C.skewX * D, m = Math.cos(R), g = Math.sin(R), "simple" === C.skewType && (v = Math.tan(C.skewX * D), v = Math.sqrt(1 + v * v), m *= v, g *= v, C.skewY && (e *= v, r *= v))), i = -g, s = m;
                        else {
                            if (!(P || k || 1 !== M || L || N)) return void(S[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + z + "px," + F + "px)" + (1 !== A || 1 !== O ? " scale(" + A + "," + O + ")" : ""));
                            e = s = 1, i = r = 0
                        }
                        h = 1, n = a = o = l = c = u = 0, d = L ? -1 / L : 0, p = C.zOrigin, _ = 1e-6, x = ",", w = "0", R = P * D, R && (m = Math.cos(R), g = Math.sin(R), o = -g, c = d * -g, n = e * g, a = r * g, h = m, d *= m, e *= m, r *= m), R = k * D, R && (m = Math.cos(R), g = Math.sin(R), v = i * m + n * g, b = s * m + a * g, l = h * g, u = d * g, n = i * -g + n * m, a = s * -g + a * m, h *= m, d *= m, i = v, s = b), 1 !== M && (n *= M, a *= M, h *= M, d *= M), 1 !== O && (i *= O, s *= O, l *= O, u *= O), 1 !== A && (e *= A, r *= A, o *= A, c *= A), (p || N) && (p && (H += n * -p, z += a * -p, F += h * -p + p), N && (H += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, z += C.yOrigin - (C.xOrigin * r + C.yOrigin * s) + C.yOffset), _ > H && H > -_ && (H = w), _ > z && z > -_ && (z = w), _ > F && F > -_ && (F = 0)), y = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", y += (_ > e && e > -_ ? w : e) + x + (_ > r && r > -_ ? w : r) + x + (_ > o && o > -_ ? w : o), y += x + (_ > c && c > -_ ? w : c) + x + (_ > i && i > -_ ? w : i) + x + (_ > s && s > -_ ? w : s), k || P || 1 !== M ? (y += x + (_ > l && l > -_ ? w : l) + x + (_ > u && u > -_ ? w : u) + x + (_ > n && n > -_ ? w : n), y += x + (_ > a && a > -_ ? w : a) + x + (_ > h && h > -_ ? w : h) + x + (_ > d && d > -_ ? w : d) + x) : y += ",0,0,0,0,1,0,", y += H + x + z + x + F + x + (L ? 1 + -F / L : 1) + ")", S[Et] = y
                    };
                h = kt.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function (t, e, i, n, s, o, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var h, c, u, d, f, p, _, m, g, v, b = t._gsTransform,
                            y = t.style,
                            x = 1e-6,
                            w = Tt.length,
                            T = l,
                            E = {},
                            C = "transformOrigin";
                        if (l.display ? (d = Z(t, "display"), y.display = "block", h = Nt(t, r, !0, l.parseTransform), y.display = d) : h = Nt(t, r, !0, l.parseTransform), n._transform = h, "string" == typeof T.transform && Et) d = L.style, d[Et] = T.transform, d.display = "block", d.position = "absolute", F.body.appendChild(L), c = Nt(L, null, !1), F.body.removeChild(L), c.perspective || (c.perspective = h.perspective), null != T.xPercent && (c.xPercent = st(T.xPercent, h.xPercent)), null != T.yPercent && (c.yPercent = st(T.yPercent, h.yPercent));
                        else if ("object" == typeof T) {
                            if (c = {
                                    scaleX: st(null != T.scaleX ? T.scaleX : T.scale, h.scaleX),
                                    scaleY: st(null != T.scaleY ? T.scaleY : T.scale, h.scaleY),
                                    scaleZ: st(T.scaleZ, h.scaleZ),
                                    x: st(T.x, h.x),
                                    y: st(T.y, h.y),
                                    z: st(T.z, h.z),
                                    xPercent: st(T.xPercent, h.xPercent),
                                    yPercent: st(T.yPercent, h.yPercent),
                                    perspective: st(T.transformPerspective, h.perspective)
                                }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (d in m) T[d] = m[d];
                                else T.rotation = m;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (c.x = 0, c.xPercent = st(T.x, h.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (c.y = 0, c.yPercent = st(T.y, h.yPercent)), c.rotation = at("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : h.rotation, h.rotation, "rotation", E), Rt && (c.rotationX = at("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : h.rotationX || 0, h.rotationX, "rotationX", E), c.rotationY = at("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : h.rotationY || 0, h.rotationY, "rotationY", E)), c.skewX = null == T.skewX ? h.skewX : at(T.skewX, h.skewX), c.skewY = null == T.skewY ? h.skewY : at(T.skewY, h.skewY), (u = c.skewY - h.skewY) && (c.skewX += u, c.rotation += u)
                        }
                        for (Rt && null != T.force3D && (h.force3D = T.force3D, _ = !0), h.skewType = T.skewType || h.skewType || a.defaultSkewType, p = h.force3D || h.z || h.rotationX || h.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, p || null == T.scale || (c.scaleZ = 1); --w > -1;) i = Tt[w], f = c[i] - h[i], (f > x || -x > f || null != T[i] || null != z[i]) && (_ = !0, s = new _t(h, i, h[i], f, s), i in E && (s.e = E[i]), s.xs0 = 0, s.plugin = o, n._overwriteProps.push(s.n));
                        return f = T.transformOrigin, h.svg && (f || T.svgOrigin) && (g = h.xOffset, v = h.yOffset, Dt(t, nt(f), c, T.svgOrigin, T.smoothOrigin), s = mt(h, "xOrigin", (b ? h : c).xOrigin, c.xOrigin, s, C), s = mt(h, "yOrigin", (b ? h : c).yOrigin, c.yOrigin, s, C), (g !== h.xOffset || v !== h.yOffset) && (s = mt(h, "xOffset", b ? g : h.xOffset, h.xOffset, s, C), s = mt(h, "yOffset", b ? v : h.yOffset, h.yOffset, s, C)), f = wt ? null : "0px 0px"), (f || Rt && p && h.zOrigin) && (Et ? (_ = !0, i = St, f = (f || Z(t, i, r, !1, "50% 50%")) + "", s = new _t(y, i, 0, 0, s, (-1), C), s.b = y[i], s.plugin = o, Rt ? (d = h.zOrigin, f = f.split(" "), h.zOrigin = (f.length > 2 && (0 === d || "0px" !== f[2]) ? parseFloat(f[2]) : d) || 0, s.xs0 = s.e = f[0] + " " + (f[1] || "50%") + " 0px", s = new _t(h, "zOrigin", 0, 0, s, (-1), s.n), s.b = d, s.xs0 = s.e = h.zOrigin) : s.xs0 = s.e = f) : nt(f + "", h)), _ && (n._transformType = h.svg && wt || !p && 3 !== this._transformType ? 2 : 3), s
                    },
                    prefix: !0
                }), yt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), yt("borderRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, s, a, o) {
                        e = this.format(e);
                        var l, h, c, u, d, f, p, _, m, g, v, b, y, x, w, T, E = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < E.length; h++) this.p.indexOf("border") && (E[h] = q(E[h])), d = u = Z(t, E[h], r, !1, "0px"), -1 !== d.indexOf(" ") && (u = d.split(" "), d = u[0], u = u[1]), f = c = l[h], p = parseFloat(d), b = d.substr((p + "").length), y = "=" === f.charAt(1), y ? (_ = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), _ *= parseFloat(f), v = f.substr((_ + "").length - (0 > _ ? 1 : 0)) || "") : (_ = parseFloat(f), v = f.substr((_ + "").length)), "" === v && (v = n[i] || b), v !== b && (x = K(t, "borderLeft", p, b), w = K(t, "borderTop", p, b), "%" === v ? (d = x / m * 100 + "%", u = w / g * 100 + "%") : "em" === v ? (T = K(t, "borderLeft", 1, "em"), d = x / T + "em", u = w / T + "em") : (d = x + "px", u = w + "px"), y && (f = parseFloat(d) + _ + v, c = parseFloat(u) + _ + v)), a = gt(C, E[h], d + " " + u, f + " " + c, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: dt("0px 0px 0px 0px", !1, !0)
                }), yt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (t, e, i, n, s, a) {
                        var o, l, h, c, u, d, f = "background-position",
                            p = r || Y(t, null),
                            m = this.format((p ? _ ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (d = Z(t, "backgroundImage").replace(R, ""), d && "none" !== d)) {
                            for (o = m.split(" "), l = g.split(" "), U.setAttribute("src", d), h = 2; --h > -1;) m = o[h], c = -1 !== m.indexOf("%"), c !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - U.width : t.offsetHeight - U.height, o[h] = c ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                            m = o.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, s, a)
                    },
                    formatter: nt
                }), yt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: nt
                }), yt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), yt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), yt("transformStyle", {
                    prefix: !0
                }), yt("backfaceVisibility", {
                    prefix: !0
                }), yt("userSelect", {
                    prefix: !0
                }), yt("margin", {
                    parser: ft("marginTop,marginRight,marginBottom,marginLeft")
                }), yt("padding", {
                    parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), yt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (t, e, i, n, s, a) {
                        var o, l, h;
                        return 9 > _ ? (l = t.currentStyle, h = 8 > _ ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Z(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, s, a)
                    }
                }), yt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), yt("autoRound,strictUnits", {
                    parser: function (t, e, i, n, r) {
                        return r
                    }
                }), yt("border", {
                    defaultValue: "0px solid #000",
                    parser: function (t, e, i, n, s, a) {
                        return this.parseComplex(t.style, this.format(Z(t, "borderTopWidth", r, !1, "0px") + " " + Z(t, "borderTopStyle", r, !1, "solid") + " " + Z(t, "borderTopColor", r, !1, "#000")), this.format(e), s, a)
                    },
                    color: !0,
                    formatter: function (t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
                    }
                }), yt("borderWidth", {
                    parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), yt("float,cssFloat,styleFloat", {
                    parser: function (t, e, i, n, r, s) {
                        var a = t.style,
                            o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                        return new _t(a, o, 0, 0, r, (-1), i, (!1), 0, a[o], e)
                    }
                });
                var Bt = function (t) {
                    var e, i = this.t,
                        n = i.filter || Z(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Z(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(x, "opacity=" + r))
                };
                yt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, i, n, s, a) {
                        var o = parseFloat(Z(t, "opacity", r, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Z(t, "visibility", r) && 0 !== e && (o = 0), j ? s = new _t(l, "opacity", o, e - o, s) : (s = new _t(l, "opacity", 100 * o, 100 * (e - o), s), s.xn1 = h ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = a, s.setRatio = Bt), h && (s = new _t(l, "visibility", 0, 0, s, (-1), null, (!1), 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var It = function (t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    jt = function (t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : It(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                yt("className", {
                    parser: function (t, e, n, s, a, o, l) {
                        var h, c, u, d, f, p = t.getAttribute("class") || "",
                            _ = t.style.cssText;
                        if (a = s._classNamePT = new _t(t, n, 0, 0, a, 2), a.setRatio = jt, a.pr = -11, i = !0, a.b = p, c = J(t, r), u = t._gsClassPT) {
                            for (d = {}, f = u.data; f;) d[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = $(t, c, J(t), l, d), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = _, a = a.xfirst = s.parse(t, h.difs, a, o)
                    }
                });
                var Vt = function (t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, s, a = this.t.style,
                            o = l.transform.parse;
                        if ("all" === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? St : l[i].p), It(a, i);
                        r && (It(a, Et), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (yt("clearProps", {
                        parser: function (t, e, n, r, s) {
                            return s = new _t(t, n, 0, 0, s, 2), s.setRatio = Vt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), vt = h.length; vt--;) xt(h[vt]);
                h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function (t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, c = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, r = Y(t, ""), s = this._overwriteProps;
                    var h, f, _, m, g, v, b, y, x, T = t.style;
                    if (u && "" === T.zIndex && (h = Z(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (m = T.cssText, h = J(t, r), T.cssText = m + ";" + e, h = $(t, h, J(t)).difs, !j && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, T.cssText = m), e.className ? this._firstPT = f = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = f = this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, Et ? d && (u = !0, "" === T.zIndex && (b = Z(t, "zIndex", r), ("auto" === b || "" === b) && this._addLazySet(T, "zIndex", 0)), p && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : T.zoom = 1, _ = f; _ && _._next;) _ = _._next;
                        y = new _t(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, _), y.setRatio = Et ? Ut : Lt, y.data = this._transform || Nt(t, r, !0), y.tween = o, y.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (v = f._next, _ = m; _ && _.pr > f.pr;) _ = _._next;
                            (f._prev = _ ? _._prev : g) ? f._prev._next = f: m = f, (f._next = _) ? _._prev = f : g = f, f = v
                        }
                        this._firstPT = m
                    }
                    return !0
                }, h.parse = function (t, e, i, s) {
                    var a, o, h, u, d, f, p, _, m, g, v = t.style;
                    for (a in e) f = e[a], o = l[a], o ? i = o.parse(t, f, a, this, i, s, e) : (d = Z(t, a, r) + "", m = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && E.test(f) ? (m || (f = ht(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = gt(v, a, d, f, !0, "transparent", i, 0, s)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(d), p = h || 0 === h ? d.substr((h + "").length) : "", ("" === d || "auto" === d) && ("width" === a || "height" === a ? (h = it(t, a, r), p = "px") : "left" === a || "top" === a ? (h = Q(t, a, r), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), g = m && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), _ = f.replace(y, "")) : (u = parseFloat(f), _ = m ? f.replace(y, "") : ""), "" === _ && (_ = a in n ? n[a] : p), f = u || 0 === u ? (g ? u + h : u) + _ : e[a], p !== _ && "" !== _ && (u || 0 === u) && h && (h = K(t, a, h, p), "%" === _ ? (h /= K(t, a, 100, "%") / 100, e.strictUnits !== !0 && (d = h + "%")) : "em" === _ || "rem" === _ || "vw" === _ || "vh" === _ ? h /= K(t, a, 1, _) : "px" !== _ && (u = K(t, a, u, _), _ = "px"), g && (u || 0 === u) && (f = u + h + _)), g && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== v[a] && (f || f + "" != "NaN" && null != f) ? (i = new _t(v, a, u || h || 0, 0, i, (-1), a, (!1), 0, d, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : d) : X("invalid " + a + " tween value: " + e[a]) : (i = new _t(v, a, h, u - h, i, 0, a, c !== !1 && ("px" === _ || "zIndex" === a), 0, d, f), i.xs0 = _)) : i = gt(v, a, d, f, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                    return i
                }, h.setRatio = function (t) {
                    var e, i, n, r = this._firstPT,
                        s = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, h._enableTransforms = function (t) {
                    this._transform = this._transform || Nt(this._target, r, !0), this._transformType = this._transform.svg && wt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Xt = function (t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function (t, e, i) {
                    var n = this._firstPT = new _t(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Xt, n.data = this
                }, h._linkCSSP = function (t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function (e) {
                    var i, n, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (n in e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
                };
                var Wt = function (t, e, i) {
                    var n, r, s, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Wt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], a = s.type, s.style && (e.push(J(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || Wt(s, e, i)
                };
                return a.cascadeTo = function (t, i, n) {
                    var r, s, a, o, l = e.to(t, i, n),
                        h = [l],
                        c = [],
                        u = [],
                        d = [],
                        f = e._internals.reservedProps;
                    for (t = l._targets || l.target, Wt(t, c, d), l.render(i, !0, !0), Wt(t, u), l.render(0, !0, !0), l._enabled(!0), r = d.length; --r > -1;)
                        if (s = $(d[r], c[r], u[r]), s.firstMPT) {
                            s = s.difs;
                            for (a in n) f[a] && (s[a] = n[a]);
                            o = {};
                            for (a in s) o[a] = c[r][a];
                            h.push(e.fromTo(d[r], i, o, s))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function () {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function (t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function (t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function () {
                    for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = s.length, o = {}, l = r._propLookup.roundProps; --a > -1;) o[s[a]] = 1;
                    for (a = s.length; --a > -1;)
                        for (t = s[a], i = r._firstPT; i;) n = i._next, i.pg ? i.t._roundProps(o, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                    return !1
                }, i._add = function (t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function () {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function (t, e, i) {
                        var n;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (n in e) this._addTween(t, "setAttribute", t.getAttribute(n) + "", e[n] + "", n, !1, n), this._overwriteProps.push(n);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function (t, e, i) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n, r, s, a, o, l, h = e.useRadians === !0 ? 2 * Math.PI : 360,
                        c = 1e-6;
                    for (n in e) "useRadians" !== n && (l = (e[n] + "").split("_"), r = l[0], s = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), a = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? s + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, o = a - s, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (o %= h, o !== o % (h / 2) && (o = 0 > o ? o + h : o - h)), -1 !== r.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * h) % h - (o / h | 0) * h : -1 !== r.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * h) % h - (o / h | 0) * h)), (o > c || -c > o) && (this._addTween(t, n, s, s + o, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function (t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    s = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    l = s._class,
                    h = function (e, i) {
                        var n = l("easing." + e, function () {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    c = t.register || function () {},
                    u = function (t, e, i, n, r) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(s, t), s
                    },
                    d = function (t, e, i) {
                        this.t = t,
                            this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function (e, i) {
                        var n = l("easing." + e, function (t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function (t) {
                            return new n(t)
                        }, n
                    },
                    p = u("Back", f("BackOut", function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function (t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    _ = l("easing.SlowMo", function (t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    m = _.prototype = new t;
                return m.constructor = _, m.getRatio = function (t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, _.ease = new _(.7, .7), m.config = _.config = function (t, e, i) {
                    return new _(t, e, i)
                }, e = l("easing.SteppedEase", function (t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function (t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, m.config = e.config = function (t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function (e) {
                    e = e || {};
                    for (var i, n, r, s, a, o, l = e.taper || "none", h = [], c = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, _ = e.clamp === !0, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / u * f, n = m ? m.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (s = 1 - i, r = s * s * g) : "in" === l ? r = i * i * g : .5 > i ? (s = 2 * i, r = s * s * .5 * g) : (s = 2 * (1 - i), r = s * s * .5 * g), p ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, _ && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[c++] = {
                        x: i,
                        y: n
                    };
                    for (h.sort(function (t, e) {
                            return t.x - e.x
                        }), o = new d(1, 1, null), f = u; --f > -1;) a = h[f], o = new d(a.x, a.y, o);
                    this._prev = new d(0, 0, 0 !== o.t ? o : o.next)
                }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function (t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, m.config = function (t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", h("BounceOut", function (t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function (t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function (t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", h("CircOut", function (t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function (e, i, n) {
                    var r = l("easing." + e, function (t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = i, s.config = function (t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", n("ElasticOut", function (t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function (t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function (t) {
                    return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), u("Expo", h("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function (t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", h("SineOut", function (t) {
                    return Math.sin(t * o)
                }), h("SineIn", function (t) {
                    return -Math.cos(t * o) + 1
                }), h("SineInOut", function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function (e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, r, s, a, o, l = function (t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; e < n.length; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                h = l("com.greensock"),
                c = 1e-10,
                u = function (t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                d = function () {},
                f = function () {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function (i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                p = {},
                _ = function (n, r, s, a) {
                    this.sc = p[n] ? p[n].sc : [], p[n] = this, this.gsClass = null, this.func = s;
                    var o = [];
                    this.check = function (h) {
                        for (var c, u, d, f, m, g = r.length, v = g; --g > -1;)(c = p[r[g]] || new _(r[g], [])).gsClass ? (o[g] = c.gsClass, v--) : h && c.sc.push(this);
                        if (0 === v && s)
                            for (u = ("com.greensock." + n).split("."), d = u.pop(), f = l(u.join("."))[d] = this.gsClass = s.apply(s, o), a && (i[d] = f, m = "undefined" != typeof module && module.exports, !m && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                                    return f
                                }) : n === e && m && (module.exports = f)), g = 0; g < this.sc.length; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                m = t._gsDefine = function (t, e, i, n) {
                    return new _(t, e, i, n)
                },
                g = h._class = function (t, e, i) {
                    return e = e || function () {}, m(t, [], function () {
                        return e
                    }, i), e
                };
            m.globals = i;
            var v = [0, 0, 1, 1],
                b = [],
                y = g("easing.Ease", function (t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
                }, !0),
                x = y.map = {},
                w = y.register = function (t, e, i, n) {
                    for (var r, s, a, o, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (s = l[c], r = n ? g("easing." + s, null, !0) : h.easing[s] || {}, a = u.length; --a > -1;) o = u[a], x[s + "." + o] = x[o + s] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (s = y.prototype, s._calcEnd = !1, s.getRatio = function (t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, w(new y(null, null, 1, r), s, "easeOut", !0), w(new y(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), w(new y(null, null, 3, r), s, "easeInOut");
            x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
            var T = g("events.EventDispatcher", function (t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            s = T.prototype, s.addEventListener = function (t, e, i, n, r) {
                r = r || 0;
                var s, l, h = this._listeners[t],
                    c = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) s = h[l], s.c === e && s.s === i ? h.splice(l, 1) : 0 === c && s.pr < r && (c = l + 1);
                h.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== a || o || a.wake()
            }, s.removeEventListener = function (t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, s.dispatchEvent = function (t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var E = t.requestAnimationFrame,
                C = t.cancelAnimationFrame,
                S = Date.now || function () {
                    return (new Date).getTime()
                },
                R = S();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !E;) E = t[n[r] + "RequestAnimationFrame"], C = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function (t, e) {
                var i, n, r, s, l, h = this,
                    u = S(),
                    f = !(e === !1 || !E) && "auto",
                    p = 500,
                    _ = 33,
                    m = "tick",
                    g = function (t) {
                        var e, a, o = S() - R;
                        o > p && (u += o - _), R += o, h.time = (R - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= s ? .004 : s - e), a = !0), t !== !0 && (r = n(g)), a && h.dispatchEvent(m)
                    };
                T.call(h), h.time = h.frame = 0, h.tick = function () {
                    g(!0)
                }, h.lagSmoothing = function (t, e) {
                    p = t || 1 / c, _ = Math.min(e, p, 0)
                }, h.sleep = function () {
                    null != r && (f && C ? C(r) : clearTimeout(r), n = d, r = null, h === a && (o = !1))
                }, h.wake = function (t) {
                    null !== r ? h.sleep() : t ? u += -R + (R = S()) : h.frame > 10 && (R = S() - p + 5), n = 0 === i ? d : f && E ? E : function (t) {
                        return setTimeout(t, 1e3 * (l - h.time) + 1 | 0)
                    }, h === a && (o = !0), g(2)
                }, h.fps = function (t) {
                    return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void h.wake()) : i
                }, h.useRAF = function (t) {
                    return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
                }, h.fps(t), setTimeout(function () {
                    "auto" === f && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1)
                }, 1500)
            }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
            var k = g("core.Animation", function (t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, q) {
                    o || a.wake();
                    var i = this.vars.useFrames ? G : q;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = k.ticker = new h.Ticker, s = k.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var P = function () {
                o && S() - R > 2e3 && a.wake(), setTimeout(P, 2e3)
            };
            P(), s.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, s.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, s.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, s.seek = function (t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, s.restart = function (t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, s.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, s.render = function (t, e, i) {}, s.invalidate = function () {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, s.isActive = function () {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
            }, s._enabled = function (t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function (t, e) {
                return this._enabled(!1, !1)
            }, s.kill = function (t, e) {
                return this._kill(t, e), this
            }, s._uncache = function (t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, s._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, s._callback = function (t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || b)
            }, s.eventCallback = function (t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, s.duration = function (t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function (t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, s.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, s.totalTime = function (t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (H.length && Z(), this.render(t, e, !1), H.length && Z())
                }
                return this
            }, s.progress = s.totalProgress = function (t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, s.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, s.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, s.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function (t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (o || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var A = g("core.SimpleTimeline", function (t) {
                k.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = A.prototype = new k, s.constructor = A, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function (t, e, i, n) {
                var r, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, s._remove = function (t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, s.render = function (t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, s.rawTime = function () {
                return o || a.wake(), this._totalTime
            };
            var O = g("TweenLite", function (e, i, n) {
                    if (k.call(this, i, n), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                    var r, s, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++) s = a[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(s))) : (this._siblings[r] = K(s, this, !1), 1 === l && this._siblings[r].length > 1 && J(s, this, null, 1, this._siblings[r])) : (s = a[r--] = O.selector(s), "string" == typeof s && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                M = function (e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                D = function (t, e) {
                    var i, n = {};
                    for (i in t) X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            s = O.prototype = new k, s.constructor = O, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, O.version = "1.18.2", O.defaultEase = s._ease = new y(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = a, O.autoSleep = 120, O.lagSmoothing = function (t, e) {
                a.lagSmoothing(t, e)
            }, O.selector = t.$ || t.jQuery || function (e) {
                var i = t.$ || t.jQuery;
                return i ? (O.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var H = [],
                z = {},
                F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                N = function (t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                L = function (t, e, i, n) {
                    var r, s, a, o, l, h, c, u = [t, e],
                        d = 0,
                        f = "",
                        p = 0;
                    for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(F) || [], s = e.match(F) || [], n && (n._next = null, n.blob = 1, u._firstPT = n), l = s.length, o = 0; l > o; o++) c = s[o], h = e.substr(d, e.indexOf(c, d) - d), f += h || !o ? h : ",", d += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), c === r[o] || r.length <= o ? f += c : (f && (u.push(f), f = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                        f: 0,
                        r: p && 4 > p
                    }), d += c.length;
                    return f += e.substr(d), f && u.push(f), u.setRatio = N, u
                },
                U = function (t, e, i, n, r, s, a, o) {
                    var l, h, c = "get" === i ? t[e] : i,
                        u = typeof t[e],
                        d = "string" == typeof n && "=" === n.charAt(1),
                        f = {
                            t: t,
                            p: e,
                            s: c,
                            f: "function" === u,
                            pg: 0,
                            n: r || e,
                            r: s,
                            pr: 0,
                            c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                        };
                    return "number" !== u && ("function" === u && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), f.s = c = a ? t[h](a) : t[h]()), "string" == typeof c && (a || isNaN(c)) ? (f.fp = a, l = L(c, n, o || O.defaultStringFilter, f), f = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0
                    }) : d || (f.s = parseFloat(c), f.c = parseFloat(n) - f.s || 0)), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
                },
                B = O._internals = {
                    isArray: f,
                    isSelector: M,
                    lazyTweens: H,
                    blobDif: L
                },
                I = O._plugins = {},
                j = B.tweenLookup = {},
                V = 0,
                X = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                W = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                G = k._rootFramesTimeline = new A,
                q = k._rootTimeline = new A,
                Y = 30,
                Z = B.lazyRender = function () {
                    var t, e = H.length;
                    for (z = {}; --e > -1;) t = H[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    H.length = 0
                };
            q._startTime = a.time, G._startTime = a.frame, q._active = G._active = !0, setTimeout(Z, 1), k._updateRoot = O.render = function () {
                var t, e, i;
                if (H.length && Z(), q.render((a.time - q._startTime) * q._timeScale, !1, !1), G.render((a.frame - G._startTime) * G._timeScale, !1, !1), H.length && Z(), a.frame >= Y) {
                    Y = a.frame + (parseInt(O.autoSleep, 10) || 120);
                    for (i in j) {
                        for (e = j[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete j[i]
                    }
                    if (i = q._first, (!i || i._paused) && O.autoSleep && !G._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", k._updateRoot);
            var K = function (t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (j[s || (t._gsTweenID = s = "t" + V++)] || (j[s] = {
                            target: t,
                            tweens: []
                        }), e && (n = j[s].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return j[s].tweens
                },
                Q = function (t, e, i, n) {
                    var r, s, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, n)), a = O.onOverwrite, a && (s = a(t, e, i, n)), r !== !1 && s !== !1
                },
                J = function (t, e, i, n, r) {
                    var s, a, o, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((o = r[s]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var h, u = e._startTime + c,
                        d = [],
                        f = 0,
                        p = 0 === e._duration;
                    for (s = r.length; --s > -1;)(o = r[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || $(e, 0, p), 0 === $(o, h, p) && (d[f++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && u - o._startTime <= 2e-10 || (d[f++] = o)));
                    for (s = f; --s > -1;)
                        if (o = d[s], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
                            if (2 !== n && !Q(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                $ = function (t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * c > s - e ? c : (s += t.totalDuration() / t._timeScale / r) > e + c ? 0 : s - e - c
                };
            s._init = function () {
                var t, e, i, n, r, s = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!s.immediateRender,
                    h = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in s.startAt) r[n] = s.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = O.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (s.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in s) X[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = O.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, s.easeParams) : x[h] || O.defaultEase : O.defaultEase, s.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && O._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function (e, i, n, r) {
                var s, a, o, l, h, c;
                if (null == e) return !1;
                z[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && D(this.vars, e);
                for (s in this.vars)
                    if (c = this.vars[s], X[s]) c && (c instanceof Array || c.push && f(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                    else if (I[s] && (l = new I[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: s,
                            pg: 1,
                            pr: l._priority
                        }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                } else i[s] = U.call(this, e, s, "get", c, s, 0, null, this.vars.stringFilter);
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0), o)
            }, s.render = function (t, e, i) {
                var n, r, s, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === c && "isPause" !== this.data) && h !== t && (i = !0, h > c && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : c);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : c)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        d = this._easeType,
                        f = this._easePower;
                    (1 === d || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), 1 === d ? this.ratio = 1 - u : 2 === d ? this.ratio = u : .5 > t / l ? this.ratio = u / 2 : this.ratio = 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, H.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
                }
            }, s._kill = function (t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
                var n, r, s, a, o, l, h, c, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || M(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, c = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (O.onOverwrite || this.vars.onOverwrite)) {
                            for (s in h) o[s] && (u || (u = []), u.push(s));
                            if ((u || !t) && !Q(this, i, e, u)) return !1
                        }
                        for (s in h)(a = o[s]) && (d && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, s.invalidate = function () {
                return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], k.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, s._enabled = function (t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = K(n[i], this, !0);
                    else this._siblings = K(this.target, this, !0)
                }
                return k.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && O._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, O.to = function (t, e, i) {
                return new O(t, e, i)
            }, O.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i)
            }, O.fromTo = function (t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new O(t, e, n)
            }, O.delayedCall = function (t, e, i, n, r) {
                return new O(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, O.set = function (t, e) {
                return new O(t, 0, e)
            }, O.getTweensOf = function (t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : O.selector(t) || t;
                var i, n, r, s;
                if ((f(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(O.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else
                    for (n = K(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, O.killTweensOf = O.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = O.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var tt = g("plugins.TweenPlugin", function (t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
            }, !0);
            if (s = tt.prototype, tt.version = "1.18.0", tt.API = 2, s._firstPT = null, s._addTween = U, s.setRatio = N, s._kill = function (t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function (t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, O._onPluginEvent = function (t, e) {
                    var i, n, r, s, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, n = r; n && n.pr > o.pr;) n = n._next;
                            (o._prev = n ? n._prev : s) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : s = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, tt.activate = function (t) {
                    for (var e = t.length; --e > -1;) t[e].API === tt.API && (I[(new t[e])._propName] = t[e]);
                    return !0
                }, m.plugin = function (t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                            tt.call(this, i, n), this._overwriteProps = r || []
                        }, t.global === !0),
                        o = a.prototype = new tt(i);
                    o.constructor = a, a.API = t.API;
                    for (e in s) "function" == typeof t[e] && (o[s[e]] = t[e]);
                    return a.version = t.version, tt.activate([a]), a
                }, n = t._gsQueue) {
                for (r = 0; r < n.length; r++) n[r]();
                for (s in p) p[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), THREE.BokehShader = {
        uniforms: {
            tColor: {
                value: null
            },
            tDepth: {
                value: null
            },
            focus: {
                value: 1
            },
            aspect: {
                value: 1
            },
            aperture: {
                value: .025
            },
            maxblur: {
                value: 1
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["varying vec2 vUv;", "uniform sampler2D tColor;", "uniform sampler2D tDepth;", "uniform float maxblur;", "uniform float aperture;", "uniform float focus;", "uniform float aspect;", "void main() {", "vec2 aspectcorrect = vec2( 1.0, aspect );", "vec4 depth1 = texture2D( tDepth, vUv );", "float factor = depth1.x - focus;", "vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );", "vec2 dofblur9 = dofblur * 0.9;", "vec2 dofblur7 = dofblur * 0.7;", "vec2 dofblur4 = dofblur * 0.4;", "vec4 col = vec4( 0.0 );", "col += texture2D( tColor, vUv.xy );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );", "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );", "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );", "gl_FragColor = col / 41.0;", "gl_FragColor.a = 1.0;", "}"].join("\n")
    }, THREE.BokehShader = {
        uniforms: {
            textureWidth: {
                type: "f",
                value: 1
            },
            textureHeight: {
                type: "f",
                value: 1
            },
            focalDepth: {
                type: "f",
                value: 1
            },
            focalLength: {
                type: "f",
                value: 24
            },
            fstop: {
                type: "f",
                value: .9
            },
            tColor: {
                type: "t",
                value: null
            },
            tDepth: {
                type: "t",
                value: null
            },
            maxblur: {
                type: "f",
                value: 1
            },
            showFocus: {
                type: "i",
                value: 0
            },
            manualdof: {
                type: "i",
                value: 0
            },
            vignetting: {
                type: "i",
                value: 0
            },
            depthblur: {
                type: "i",
                value: 0
            },
            threshold: {
                type: "f",
                value: .5
            },
            gain: {
                type: "f",
                value: 2
            },
            bias: {
                type: "f",
                value: .5
            },
            fringe: {
                type: "f",
                value: .7
            },
            znear: {
                type: "f",
                value: .1
            },
            zfar: {
                type: "f",
                value: 100
            },
            noise: {
                type: "i",
                value: 1
            },
            dithering: {
                type: "f",
                value: 1e-4
            },
            pentagon: {
                type: "i",
                value: 0
            },
            shaderFocus: {
                type: "i",
                value: 1
            },
            focusCoords: {
                type: "v2",
                value: new THREE.Vector2
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["varying vec2 vUv;", "uniform sampler2D tColor;", "uniform sampler2D tDepth;", "uniform float textureWidth;", "uniform float textureHeight;", "const float PI = 3.14159265;", "uniform float focalDepth;  //focal distance value in meters, but you may use autofocus option below", "uniform float focalLength; //focal length in mm", "uniform float fstop; //f-stop value", "uniform bool showFocus; //show debug focus point and focal range (red = focal point, green = focal range)", "/*", "make sure that these two values are the same for your camera, otherwise distances will be wrong.", "*/", "uniform float znear; // camera clipping start", "uniform float zfar; // camera clipping end", "//------------------------------------------", "//user variables", "const int samples = SAMPLES; //samples on the first ring", "const int rings = RINGS; //ring count", "const int maxringsamples = rings * samples;", "uniform bool manualdof; // manual dof calculation", "float ndofstart = 1.0; // near dof blur start", "float ndofdist = 2.0; // near dof blur falloff distance", "float fdofstart = 1.0; // far dof blur start", "float fdofdist = 3.0; // far dof blur falloff distance", "float CoC = 0.03; //circle of confusion size in mm (35mm film = 0.03mm)", "uniform bool vignetting; // use optical lens vignetting", "float vignout = 1.3; // vignetting outer border", "float vignin = 0.0; // vignetting inner border", "float vignfade = 22.0; // f-stops till vignete fades", "uniform bool shaderFocus;", "// disable if you use external focalDepth value", "uniform vec2 focusCoords;", "// autofocus point on screen (0.0,0.0 - left lower corner, 1.0,1.0 - upper right)", "// if center of screen use vec2(0.5, 0.5);", "uniform float maxblur;", "//clamp value of max blur (0.0 = no blur, 1.0 default)", "uniform float threshold; // highlight threshold;", "uniform float gain; // highlight gain;", "uniform float bias; // bokeh edge bias", "uniform float fringe; // bokeh chromatic aberration / fringing", "uniform bool noise; //use noise instead of pattern for sample dithering", "uniform float dithering;", "uniform bool depthblur; // blur the depth buffer", "float dbsize = 1.25; // depth blur size", "/*", "next part is experimental", "not looking good with small sample and ring count", "looks okay starting from samples = 4, rings = 4", "*/", "uniform bool pentagon; //use pentagon as bokeh shape?", "float feather = 0.4; //pentagon shape feather", "//------------------------------------------", "float penta(vec2 coords) {", "//pentagonal shape", "float scale = float(rings) - 1.3;", "vec4  HS0 = vec4( 1.0,         0.0,         0.0,  1.0);", "vec4  HS1 = vec4( 0.309016994, 0.951056516, 0.0,  1.0);", "vec4  HS2 = vec4(-0.809016994, 0.587785252, 0.0,  1.0);", "vec4  HS3 = vec4(-0.809016994,-0.587785252, 0.0,  1.0);", "vec4  HS4 = vec4( 0.309016994,-0.951056516, 0.0,  1.0);", "vec4  HS5 = vec4( 0.0        ,0.0         , 1.0,  1.0);", "vec4  one = vec4( 1.0 );", "vec4 P = vec4((coords),vec2(scale, scale));", "vec4 dist = vec4(0.0);", "float inorout = -4.0;", "dist.x = dot( P, HS0 );", "dist.y = dot( P, HS1 );", "dist.z = dot( P, HS2 );", "dist.w = dot( P, HS3 );", "dist = smoothstep( -feather, feather, dist );", "inorout += dot( dist, one );", "dist.x = dot( P, HS4 );", "dist.y = HS5.w - abs( P.z );", "dist = smoothstep( -feather, feather, dist );", "inorout += dist.x;", "return clamp( inorout, 0.0, 1.0 );", "}", "float bdepth(vec2 coords) {", "// Depth buffer blur", "float d = 0.0;", "float kernel[9];", "vec2 offset[9];", "vec2 wh = vec2(1.0/textureWidth,1.0/textureHeight) * dbsize;", "offset[0] = vec2(-wh.x,-wh.y);", "offset[1] = vec2( 0.0, -wh.y);", "offset[2] = vec2( wh.x -wh.y);", "offset[3] = vec2(-wh.x,  0.0);", "offset[4] = vec2( 0.0,   0.0);", "offset[5] = vec2( wh.x,  0.0);", "offset[6] = vec2(-wh.x, wh.y);", "offset[7] = vec2( 0.0,  wh.y);", "offset[8] = vec2( wh.x, wh.y);", "//kernel[0] = 1.0/16.0;   kernel[1] = 2.0/16.0;   kernel[2] = 1.0/16.0;", "//kernel[3] = 2.0/16.0;   kernel[4] = 4.0/16.0;   kernel[5] = 2.0/16.0;", "//kernel[6] = 1.0/16.0;   kernel[7] = 2.0/16.0;   kernel[8] = 1.0/16.0;", "kernel[0] = 0.0625;   kernel[1] = 0.125;   kernel[2] = 0.0625;", "kernel[3] = 0.125;   kernel[4] = 0.25;   kernel[5] = 0.125;", "kernel[6] = 0.0625;   kernel[7] = 0.125;   kernel[8] = 0.0625;", "for( int i=0; i<9; i++ ) {", "float tmp = texture2D(tDepth, coords + offset[i]).r;", "d += tmp * kernel[i];", "}", "return d;", "}", "vec3 color(vec2 coords,float blur) {", "//processing the sample", "vec3 col = vec3(0.0);", "vec2 texel = vec2(1.0/textureWidth,1.0/textureHeight);", "col.r = texture2D(tColor,coords + vec2(0.0,1.0)*texel*fringe*blur).r;", "col.g = texture2D(tColor,coords + vec2(-0.866,-0.5)*texel*fringe*blur).g;", "col.b = texture2D(tColor,coords + vec2(0.866,-0.5)*texel*fringe*blur).b;", "vec3 lumcoeff = vec3(0.299,0.587,0.114);", "float lum = dot(col.rgb, lumcoeff);", "float thresh = max((lum-threshold)*gain, 0.0);", "return col+mix(vec3(0.0),col,thresh*blur);", "}", "vec2 rand(vec2 coord) {", "// generating noise / pattern texture for dithering", "float noiseX = ((fract(1.0-coord.s*(textureWidth/2.0))*0.25)+(fract(coord.t*(textureHeight/2.0))*0.75))*2.0-1.0;", "float noiseY = ((fract(1.0-coord.s*(textureWidth/2.0))*0.75)+(fract(coord.t*(textureHeight/2.0))*0.25))*2.0-1.0;", "return vec2(noiseX,noiseY);", "}", "vec3 debugFocus(vec3 col, float blur, float depth) {", "float edge = 0.002*depth; //distance based edge smoothing", "float m = clamp(smoothstep(0.0,edge,blur),0.0,1.0);", "float e = clamp(smoothstep(1.0-edge,1.0,blur),0.0,1.0);", "col = mix(col,vec3(1.0,0.5,0.0),(1.0-m)*0.6);", "col = mix(col,vec3(0.0,0.5,1.0),((1.0-e)-(1.0-m))*0.2);", "return col;", "}", "float linearize(float depth) {", "return -zfar * znear / (depth * (zfar - znear) - zfar);", "}", "float vignette() {", "float dist = distance(vUv.xy, vec2(0.5,0.5));", "dist = smoothstep(vignout+(fstop/vignfade), vignin+(fstop/vignfade), dist);", "return clamp(dist,0.0,1.0);", "}", "float gather(float i, float j, int ringsamples, inout vec3 col, float w, float h, float blur) {", "float rings2 = float(rings);", "float step = PI*2.0 / float(ringsamples);", "float pw = cos(j*step)*i;", "float ph = sin(j*step)*i;", "float p = 1.0;", "col += color(vUv.xy + vec2(pw*w,ph*h), blur) * mix(1.0, i/rings2, bias) * p;", "return 1.0 * mix(1.0, i /rings2, bias) * p;", "}", "void main() {", "//scene depth calculation", "//float depth = linearize(texture2D(tDepth,vUv.xy).x);", "// Blur depth?", "float depth = linearize(bdepth(vUv.xy));", "//focal plane calculation", "float fDepth = focalDepth;", "// dof blur factor calculation", "float blur = 0.0;", "float f = focalLength; // focal length in mm", "float d = fDepth*1000.0; // focal plane in mm", "float o = depth*1000.0; // depth in mm", "float a = (o*f)/(o-f);", "float b = (d*f)/(d-f);", "float c = (d-f)/(d*fstop*CoC);", "blur = abs(a-b)*c;", "blur = clamp(blur,0.0,1.0);", "// calculation of pattern for dithering", "vec2 noise = rand(vUv.xy)*dithering*blur;", "// getting blur x and y step factor", "float w = (1.0/textureWidth)*blur*maxblur+noise.x;", "float h = (1.0/textureHeight)*blur*maxblur+noise.y;", "// calculation of final color", "vec3 col = vec3(0.0);", "if(blur < 0.05) {", "//some optimization thingy", "col = texture2D(tColor, vUv.xy).rgb;", "} else {", "col = texture2D(tColor, vUv.xy).rgb;", "float s = 1.0;", "int ringsamples;", "for (int i = 1; i <= rings; i++) {", "/*unboxstart*/", "ringsamples = i * samples;", "for (int j = 0 ; j < maxringsamples ; j++) {", "if (j >= ringsamples) break;", "s += gather(float(i), float(j), ringsamples, col, w, h, blur);", "}", "/*unboxend*/", "}", "col /= s; //divide by sample count", "}", "float curva_eval_y = pow((gl_FragCoord.x/textureWidth - 0.6),2.0)*10.0-0.20;", "float clampe  = clamp(  (gl_FragCoord.y/textureHeight)*2.0 - curva_eval_y,0.01,1.0);", "gl_FragColor.rgb = mix(col , texture2D(tColor, vUv.xy).rgb + col*(0.1), clampe);", "if ( gl_FragColor.a > 0.0 ) {gl_FragColor.a = 1.0;};", "if ( gl_FragColor.a <= 0.0 ) {gl_FragColor.a = 0.0;};", "} "].join("\n")
    }, THREE.BokehShader2 = {
        uniforms: {
            textureWidth: {
                type: "f",
                value: 1
            },
            textureHeight: {
                type: "f",
                value: 1
            },
            focalDepth: {
                type: "f",
                value: 1
            },
            focalLength: {
                type: "f",
                value: 24
            },
            fstop: {
                type: "f",
                value: .9
            },
            tColor: {
                type: "t",
                value: null
            },
            tDepth: {
                type: "t",
                value: null
            },
            maxblur: {
                type: "f",
                value: 1
            },
            showFocus: {
                type: "i",
                value: 0
            },
            manualdof: {
                type: "i",
                value: 0
            },
            vignetting: {
                type: "i",
                value: 0
            },
            depthblur: {
                type: "i",
                value: 0
            },
            threshold: {
                type: "f",
                value: .5
            },
            gain: {
                type: "f",
                value: 2
            },
            bias: {
                type: "f",
                value: .5
            },
            fringe: {
                type: "f",
                value: .7
            },
            znear: {
                type: "f",
                value: .1
            },
            zfar: {
                type: "f",
                value: 100
            },
            noise: {
                type: "i",
                value: 1
            },
            dithering: {
                type: "f",
                value: 1e-4
            },
            pentagon: {
                type: "i",
                value: 0
            },
            shaderFocus: {
                type: "i",
                value: 1
            },
            focusCoords: {
                type: "v2",
                value: new THREE.Vector2
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["varying vec2 vUv;", "uniform sampler2D tColor;", "uniform sampler2D tDepth;", "uniform float textureWidth;", "uniform float textureHeight;", "const float PI = 3.14159265;", "uniform float focalDepth;  //focal distance value in meters, but you may use autofocus option below", "uniform float focalLength; //focal length in mm", "uniform float fstop; //f-stop value", "uniform bool showFocus; //show debug focus point and focal range (red = focal point, green = focal range)", "/*", "make sure that these two values are the same for your camera, otherwise distances will be wrong.", "*/", "uniform float znear; // camera clipping start", "uniform float zfar; // camera clipping end", "//------------------------------------------", "//user variables", "const int samples = SAMPLES; //samples on the first ring", "const int rings = RINGS; //ring count", "const int maxringsamples = rings * samples;", "uniform bool manualdof; // manual dof calculation", "float ndofstart = 1.0; // near dof blur start", "float ndofdist = 2.0; // near dof blur falloff distance", "float fdofstart = 1.0; // far dof blur start", "float fdofdist = 3.0; // far dof blur falloff distance", "float CoC = 0.03; //circle of confusion size in mm (35mm film = 0.03mm)", "uniform bool vignetting; // use optical lens vignetting", "float vignout = 1.3; // vignetting outer border", "float vignin = 0.0; // vignetting inner border", "float vignfade = 22.0; // f-stops till vignete fades", "uniform bool shaderFocus;", "// disable if you use external focalDepth value", "uniform vec2 focusCoords;", "// autofocus point on screen (0.0,0.0 - left lower corner, 1.0,1.0 - upper right)", "// if center of screen use vec2(0.5, 0.5);", "uniform float maxblur;", "//clamp value of max blur (0.0 = no blur, 1.0 default)", "uniform float threshold; // highlight threshold;", "uniform float gain; // highlight gain;", "uniform float bias; // bokeh edge bias", "uniform float fringe; // bokeh chromatic aberration / fringing", "uniform bool noise; //use noise instead of pattern for sample dithering", "uniform float dithering;", "uniform bool depthblur; // blur the depth buffer", "float dbsize = 1.25; // depth blur size", "/*", "next part is experimental", "not looking good with small sample and ring count", "looks okay starting from samples = 4, rings = 4", "*/", "uniform bool pentagon; //use pentagon as bokeh shape?", "float feather = 0.4; //pentagon shape feather", "//------------------------------------------", "float penta(vec2 coords) {", "//pentagonal shape", "float scale = float(rings) - 1.3;", "vec4  HS0 = vec4( 1.0,         0.0,         0.0,  1.0);", "vec4  HS1 = vec4( 0.309016994, 0.951056516, 0.0,  1.0);", "vec4  HS2 = vec4(-0.809016994, 0.587785252, 0.0,  1.0);", "vec4  HS3 = vec4(-0.809016994,-0.587785252, 0.0,  1.0);", "vec4  HS4 = vec4( 0.309016994,-0.951056516, 0.0,  1.0);", "vec4  HS5 = vec4( 0.0        ,0.0         , 1.0,  1.0);", "vec4  one = vec4( 1.0 );", "vec4 P = vec4((coords),vec2(scale, scale));", "vec4 dist = vec4(0.0);", "float inorout = -4.0;", "dist.x = dot( P, HS0 );", "dist.y = dot( P, HS1 );", "dist.z = dot( P, HS2 );", "dist.w = dot( P, HS3 );", "dist = smoothstep( -feather, feather, dist );", "inorout += dot( dist, one );", "dist.x = dot( P, HS4 );", "dist.y = HS5.w - abs( P.z );", "dist = smoothstep( -feather, feather, dist );", "inorout += dist.x;", "return clamp( inorout, 0.0, 1.0 );", "}", "float bdepth(vec2 coords) {", "// Depth buffer blur", "float d = 0.0;", "float kernel[9];", "vec2 offset[9];", "vec2 wh = vec2(1.0/textureWidth,1.0/textureHeight) * dbsize;", "offset[0] = vec2(-wh.x,-wh.y);", "offset[1] = vec2( 0.0, -wh.y);", "offset[2] = vec2( wh.x -wh.y);", "offset[3] = vec2(-wh.x,  0.0);", "offset[4] = vec2( 0.0,   0.0);", "offset[5] = vec2( wh.x,  0.0);", "offset[6] = vec2(-wh.x, wh.y);", "offset[7] = vec2( 0.0,  wh.y);", "offset[8] = vec2( wh.x, wh.y);", "//kernel[0] = 1.0/16.0;   kernel[1] = 2.0/16.0;   kernel[2] = 1.0/16.0;", "//kernel[3] = 2.0/16.0;   kernel[4] = 4.0/16.0;   kernel[5] = 2.0/16.0;", "//kernel[6] = 1.0/16.0;   kernel[7] = 2.0/16.0;   kernel[8] = 1.0/16.0;", "kernel[0] = 0.0625;   kernel[1] = 0.125;   kernel[2] = 0.0625;", "kernel[3] = 0.125;   kernel[4] = 0.25;   kernel[5] = 0.125;", "kernel[6] = 0.0625;   kernel[7] = 0.125;   kernel[8] = 0.0625;", "for( int i=0; i<9; i++ ) {", "float tmp = texture2D(tDepth, coords + offset[i]).r;", "d += tmp * kernel[i];", "}", "return d;", "}", "vec3 color(vec2 coords,float blur) {", "//processing the sample", "vec3 col = vec3(0.0);", "vec2 texel = vec2(1.0/textureWidth,1.0/textureHeight);", "col.r = texture2D(tColor,coords + vec2(0.0,1.0)*texel*fringe*blur).r;", "col.g = texture2D(tColor,coords + vec2(-0.866,-0.5)*texel*fringe*blur).g;", "col.b = texture2D(tColor,coords + vec2(0.866,-0.5)*texel*fringe*blur).b;", "vec3 lumcoeff = vec3(0.299,0.587,0.114);", "float lum = dot(col.rgb, lumcoeff);", "float thresh = max((lum-threshold)*gain, 0.0);", "return col+mix(vec3(0.0),col,thresh*blur);", "}", "vec2 rand(vec2 coord) {", "// generating noise / pattern texture for dithering", "float noiseX = ((fract(1.0-coord.s*(textureWidth/2.0))*0.25)+(fract(coord.t*(textureHeight/2.0))*0.75))*2.0-1.0;", "float noiseY = ((fract(1.0-coord.s*(textureWidth/2.0))*0.75)+(fract(coord.t*(textureHeight/2.0))*0.25))*2.0-1.0;", "return vec2(noiseX,noiseY);", "}", "vec3 debugFocus(vec3 col, float blur, float depth) {", "float edge = 0.002*depth; //distance based edge smoothing", "float m = clamp(smoothstep(0.0,edge,blur),0.0,1.0);", "float e = clamp(smoothstep(1.0-edge,1.0,blur),0.0,1.0);", "col = mix(col,vec3(1.0,0.5,0.0),(1.0-m)*0.6);", "col = mix(col,vec3(0.0,0.5,1.0),((1.0-e)-(1.0-m))*0.2);", "return col;", "}", "float linearize(float depth) {", "return -zfar * znear / (depth * (zfar - znear) - zfar);", "}", "float vignette() {", "float dist = distance(vUv.xy, vec2(0.5,0.5));", "dist = smoothstep(vignout+(fstop/vignfade), vignin+(fstop/vignfade), dist);", "return clamp(dist,0.0,1.0);", "}", "float gather(float i, float j, int ringsamples, inout vec3 col, float w, float h, float blur) {", "float rings2 = float(rings);", "float step = PI*2.0 / float(ringsamples);", "float pw = cos(j*step)*i;", "float ph = sin(j*step)*i;", "float p = 1.0;", "col += color(vUv.xy + vec2(pw*w,ph*h), blur) * mix(1.0, i/rings2, bias) * p;", "return 1.0 * mix(1.0, i /rings2, bias) * p;", "}", "void main() {", "//scene depth calculation", "//float depth = linearize(texture2D(tDepth,vUv.xy).x);", "// Blur depth?", "float depth = linearize(bdepth(vUv.xy));", "//focal plane calculation", "float fDepth = focalDepth;", "// dof blur factor calculation", "float blur = 0.0;", "float f = focalLength; // focal length in mm", "float d = fDepth*1000.0; // focal plane in mm", "float o = depth*1000.0; // depth in mm", "float a = (o*f)/(o-f);", "float b = (d*f)/(d-f);", "float c = (d-f)/(d*fstop*CoC);", "blur = abs(a-b)*c;", "blur = clamp(blur,0.0,1.0);", "// calculation of pattern for dithering", "vec2 noise = rand(vUv.xy)*dithering*blur;", "// getting blur x and y step factor", "float w = (1.0/textureWidth)*blur*maxblur+noise.x;", "float h = (1.0/textureHeight)*blur*maxblur+noise.y;", "// calculation of final color", "vec3 col = vec3(0.0);", "if(blur < 0.05) {", "//some optimization thingy", "col = texture2D(tColor, vUv.xy).rgb;", "} else {", "col = texture2D(tColor, vUv.xy).rgb;", "float s = 1.0;", "int ringsamples;", "for (int i = 1; i <= rings; i++) {", "/*unboxstart*/", "ringsamples = i * samples;", "for (int j = 0 ; j < maxringsamples ; j++) {", "if (j >= ringsamples) break;", "s += gather(float(i), float(j), ringsamples, col, w, h, blur);", "}", "/*unboxend*/", "}", "col /= s; //divide by sample count", "}", "float curva_eval_y = pow((gl_FragCoord.x/textureWidth - 0.6),2.0)*10.0-0.20;", "float clampe  = clamp(  (gl_FragCoord.y/textureHeight)*2.0 - curva_eval_y,0.01,1.0);", "gl_FragColor.rgb = mix(col , texture2D(tColor, vUv.xy).rgb + col*(0.1), clampe);", "gl_FragColor.a = 1.0;", "} "].join("\n")
    }, THREE.ConvolutionShader = {
        defines: {
            KERNEL_SIZE_FLOAT: "25.0",
            KERNEL_SIZE_INT: "25"
        },
        uniforms: {
            tDiffuse: {
                type: "t",
                value: null
            },
            uImageIncrement: {
                type: "v2",
                value: new THREE.Vector2(953125e-9, 0)
            },
            cKernel: {
                type: "fv1",
                value: []
            }
        },
        vertexShader: ["uniform vec2 uImageIncrement;", "varying vec2 vUv;", "void main() {", "vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["uniform float cKernel[ KERNEL_SIZE_INT ];", "uniform sampler2D tDiffuse;", "uniform vec2 uImageIncrement;", "varying vec2 vUv;", "void main() {", "vec2 imageCoord = vUv;", "vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );", "for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {", "sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];", "imageCoord += uImageIncrement;", "}", "gl_FragColor = sum;", "}"].join("\n"),
        buildKernel: function (t) {
            function e(t, e) {
                return Math.exp(-(t * t) / (2 * e * e))
            }
            var i, n, r, s, a = 25,
                o = 2 * Math.ceil(3 * t) + 1;
            for (o > a && (o = a), s = .5 * (o - 1), n = new Array(o), r = 0, i = 0; i < o; ++i) n[i] = e(i - s, t), r += n[i];
            for (i = 0; i < o; ++i) n[i] /= r;
            return n
        }
    }, THREE.CopyShader = {
        uniforms: {
            tDiffuse: {
                value: null
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
    }, THREE.EffectComposer = function (t, e) {
        if (this.renderer = t, void 0 === e) {
            var i = {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    format: THREE.RGBAFormat,
                    stencilBuffer: !1
                },
                n = t.getSize();
            e = new THREE.WebGLRenderTarget(n.width, n.height, i)
        }
        this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.passes = [], void 0 === THREE.CopyShader && console.error("THREE.EffectComposer relies on THREE.CopyShader"), this.copyPass = new THREE.ShaderPass(THREE.CopyShader)
    }, Object.assign(THREE.EffectComposer.prototype, {
        swapBuffers: function () {
            var t = this.readBuffer;
            this.readBuffer = this.writeBuffer, this.writeBuffer = t
        },
        addPass: function (t) {
            this.passes.push(t);
            var e = this.renderer.getSize();
            t.setSize(e.width, e.height)
        },
        insertPass: function (t, e) {
            this.passes.splice(e, 0, t)
        },
        render: function (t) {
            var e, i, n = !1,
                r = this.passes.length;
            for (i = 0; i < r; i++)
                if (e = this.passes[i], e.enabled !== !1) {
                    if (e.render(this.renderer, this.writeBuffer, this.readBuffer, t, n), e.needsSwap) {
                        if (n) {
                            var s = this.renderer.context;
                            s.stencilFunc(s.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, t), s.stencilFunc(s.EQUAL, 1, 4294967295)
                        }
                        this.swapBuffers()
                    }
                    void 0 !== THREE.MaskPass && (e instanceof THREE.MaskPass ? n = !0 : e instanceof THREE.ClearMaskPass && (n = !1))
                }
        },
        reset: function (t) {
            if (void 0 === t) {
                var e = this.renderer.getSize();
                t = this.renderTarget1.clone(), t.setSize(e.width, e.height)
            }
            this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
        },
        setSize: function (t, e) {
            this.renderTarget1.setSize(t, e), this.renderTarget2.setSize(t, e);
            for (var i = 0; i < this.passes.length; i++) this.passes[i].setSize(t, e)
        }
    }), THREE.Pass = function () {
        this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
    }, Object.assign(THREE.Pass.prototype, {
        setSize: function (t, e) {},
        render: function (t, e, i, n, r) {
            console.error("THREE.Pass: .render() must be implemented in derived pass.")
        }
    }), THREE.FocusShader = {
        uniforms: {
            tDiffuse: {
                type: "t",
                value: !1
            },
            screenWidth: {
                type: "f",
                value: 1024
            },
            screenHeight: {
                type: "f",
                value: 1024
            },
            sampleDistance: {
                type: "f",
                value: .02
            },
            waveFactor: {
                type: "f",
                value: .00125
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["uniform float screenWidth;", "uniform float screenHeight;", "uniform float sampleDistance;", "uniform float waveFactor;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 color, org, tmp, add;", "float sample_dist, f;", "vec2 vin;", "vec2 uv = vUv;", "add = color = org = texture2D( tDiffuse, uv );", "vin = ( uv - vec2( 0.5 ) ) * vec2( 1.4 );", "sample_dist = dot( vin, vin ) * 2.0;", "f = ( waveFactor * 100.0 + sample_dist ) * sampleDistance * 4.0;", "vec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2( f );", "add += tmp = texture2D( tDiffuse, uv + vec2( 0.111964, 0.993712 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( 0.846724, 0.532032 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( 0.943883, -0.330279 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( 0.330279, -0.943883 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( -0.532032, -0.846724 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( -0.993712, -0.111964 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( -0.707107, 0.707107 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "color = color * vec4( 2.0 ) - ( add / vec4( 8.0 ) );", "color = color + ( add / vec4( 8.0 ) - color ) * ( vec4( 1.0 ) - vec4( sample_dist * 0.5 ) );", "gl_FragColor = vec4( color.rgb * color.rgb * vec3( 0.95 ) + color.rgb, 1.0 );", "}"].join("\n")
    }, THREE.BloomPass = function (t, e, i, n) {
        THREE.Pass.call(this), t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 25, i = void 0 !== i ? i : 4, n = void 0 !== n ? n : 256;
        var r = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat
        };
        this.renderTargetX = new THREE.WebGLRenderTarget(n, n, r), this.renderTargetY = new THREE.WebGLRenderTarget(n, n, r), void 0 === THREE.CopyShader && console.error("THREE.BloomPass relies on THREE.CopyShader");
        var s = THREE.CopyShader;
        this.copyUniforms = THREE.UniformsUtils.clone(s.uniforms), this.copyUniforms.opacity.value = t, this.materialCopy = new THREE.ShaderMaterial({
            uniforms: this.copyUniforms,
            vertexShader: s.vertexShader,
            fragmentShader: s.fragmentShader,
            blending: THREE.AdditiveBlending,
            transparent: !0
        }), void 0 === THREE.ConvolutionShader && console.error("THREE.BloomPass relies on THREE.ConvolutionShader");
        var a = THREE.ConvolutionShader;
        this.convolutionUniforms = THREE.UniformsUtils.clone(a.uniforms), this.convolutionUniforms.uImageIncrement.value = THREE.BloomPass.blurX, this.convolutionUniforms.cKernel.value = THREE.ConvolutionShader.buildKernel(i), this.materialConvolution = new THREE.ShaderMaterial({
            uniforms: this.convolutionUniforms,
            vertexShader: a.vertexShader,
            fragmentShader: a.fragmentShader,
            defines: {
                KERNEL_SIZE_FLOAT: e.toFixed(1),
                KERNEL_SIZE_INT: e.toFixed(0)
            }
        }), this.needsSwap = !1, this.camera = new THREE.OrthographicCamera((-1), 1, 1, (-1), 0, 1), this.scene = new THREE.Scene, this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null), this.scene.add(this.quad)
    }, THREE.BloomPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
        constructor: THREE.BloomPass,
        render: function (t, e, i, n, r) {
            r && t.context.disable(t.context.STENCIL_TEST), this.quad.material = this.materialConvolution, this.convolutionUniforms.tDiffuse.value = i.texture, this.convolutionUniforms.uImageIncrement.value = THREE.BloomPass.blurX, t.render(this.scene, this.camera, this.renderTargetX, !0), this.convolutionUniforms.tDiffuse.value = this.renderTargetX.texture, this.convolutionUniforms.uImageIncrement.value = THREE.BloomPass.blurY, t.render(this.scene, this.camera, this.renderTargetY, !0), this.quad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetY.texture, r && t.context.enable(t.context.STENCIL_TEST), t.render(this.scene, this.camera, i, this.clear)
        }
    }), THREE.BloomPass.blurX = new THREE.Vector2(.001953125, 0), THREE.BloomPass.blurY = new THREE.Vector2(0, .001953125), THREE.BokehPass = function (t, e, i) {
        THREE.Pass.call(this), this.scene = t, this.camera = e;
        var n = void 0 !== i.focus ? i.focus : 1,
            r = void 0 !== i.aspect ? i.aspect : e.aspect,
            s = void 0 !== i.aperture ? i.aperture : .025,
            a = void 0 !== i.maxblur ? i.maxblur : 1,
            o = i.width || window.innerWidth || 1,
            l = i.height || window.innerHeight || 1;
        this.renderTargetColor = new THREE.WebGLRenderTarget(o, l, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBFormat
        }), this.renderTargetDepth = this.renderTargetColor.clone(), this.materialDepth = new THREE.MeshDepthMaterial, void 0 === THREE.BokehShader && console.error("THREE.BokehPass relies on THREE.BokehShader");
        var h = THREE.BokehShader,
            c = THREE.UniformsUtils.clone(h.uniforms);
        c.tDepth.value = this.renderTargetDepth.texture, c.focus.value = n, c.aspect.value = r, c.aperture.value = s, c.maxblur.value = a, this.materialBokeh = new THREE.ShaderMaterial({
            uniforms: c,
            vertexShader: h.vertexShader,
            fragmentShader: h.fragmentShader
        }), this.uniforms = c, this.needsSwap = !1, this.camera2 = new THREE.OrthographicCamera((-1), 1, 1, (-1), 0, 1), this.scene2 = new THREE.Scene, this.quad2 = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null), this.scene2.add(this.quad2)
    }, THREE.BokehPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
        constructor: THREE.BokehPass,
        render: function (t, e, i, n, r) {
            this.quad2.material = this.materialBokeh, this.scene.overrideMaterial = this.materialDepth, t.render(this.scene, this.camera, this.renderTargetDepth, !0), this.uniforms.tColor.value = i.texture, this.renderToScreen ? t.render(this.scene2, this.camera2) : t.render(this.scene2, this.camera2, e, this.clear), this.scene.overrideMaterial = null
        }
    }), THREE.ManualMSAARenderPass = function (t, e, i, n) {
        THREE.Pass.call(this), this.scene = t, this.camera = e, this.sampleLevel = 4, this.unbiased = !0, this.clearColor = void 0 !== i ? i : 0, this.clearAlpha = void 0 !== n ? n : 0, void 0 === THREE.CopyShader && console.error("THREE.ManualMSAARenderPass relies on THREE.CopyShader");
        var r = THREE.CopyShader;
        this.copyUniforms = THREE.UniformsUtils.clone(r.uniforms), this.copyMaterial = new THREE.ShaderMaterial({
            uniforms: this.copyUniforms,
            vertexShader: r.vertexShader,
            fragmentShader: r.fragmentShader,
            premultipliedAlpha: !0,
            transparent: !0,
            blending: THREE.AdditiveBlending,
            depthTest: !1,
            depthWrite: !1
        }), this.camera2 = new THREE.OrthographicCamera((-1), 1, 1, (-1), 0, 1), this.scene2 = new THREE.Scene, this.quad2 = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.copyMaterial), this.scene2.add(this.quad2)
    }, THREE.ManualMSAARenderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
        constructor: THREE.ManualMSAARenderPass,
        dispose: function () {
            this.sampleRenderTarget && (this.sampleRenderTarget.dispose(), this.sampleRenderTarget = null)
        },
        setSize: function (t, e) {
            this.sampleRenderTarget && this.sampleRenderTarget.setSize(t, e)
        },
        render: function (t, e, i, n, r) {
            this.sampleRenderTarget || (this.sampleRenderTarget = new THREE.WebGLRenderTarget(i.width, i.height, {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat
            }));
            var s = THREE.ManualMSAARenderPass.JitterVectors[Math.max(0, Math.min(this.sampleLevel, 5))],
                a = t.autoClear;
            t.autoClear = !1;
            var o = t.getClearColor().getHex(),
                l = t.getClearAlpha(),
                h = 1 / s.length,
                c = 1 / 32;
            this.copyUniforms.tDiffuse.value = this.sampleRenderTarget.texture;
            for (var u = i.width, d = i.height, f = 0; f < s.length; f++) {
                var p = s[f];
                this.camera.setViewOffset && this.camera.setViewOffset(u, d, .0625 * p[0], .0625 * p[1], u, d);
                var _ = h;
                if (this.unbiased) {
                    var m = -.5 + (f + .5) / s.length;
                    _ += c * m
                }
                this.copyUniforms.opacity.value = _, t.setClearColor(this.clearColor, this.clearAlpha), t.render(this.scene, this.camera, this.sampleRenderTarget, !0), 0 === f && t.setClearColor(0, 0), t.render(this.scene2, this.camera2, this.renderToScreen ? null : e, 0 === f)
            }
            this.camera.clearViewOffset && this.camera.clearViewOffset(), t.autoClear = a, t.setClearColor(o, l)
        }
    }), THREE.ManualMSAARenderPass.JitterVectors = [
        [
            [0, 0]
        ],
        [
            [4, 4],
            [-4, -4]
        ],
        [
            [-2, -6],
            [6, -2],
            [-6, 2],
            [2, 6]
        ],
        [
            [1, -3],
            [-1, 3],
            [5, 1],
            [-3, -5],
            [-5, 5],
            [-7, -1],
            [3, 7],
            [7, -7]
        ],
        [
            [1, 1],
            [-1, -3],
            [-3, 2],
            [4, -1],
            [-5, -2],
            [2, 5],
            [5, 3],
            [3, -5],
            [-2, 6],
            [0, -7],
            [-4, -6],
            [-6, 4],
            [-8, 0],
            [7, -4],
            [6, 7],
            [-7, -8]
        ],
        [
            [-4, -7],
            [-7, -5],
            [-3, -5],
            [-5, -4],
            [-1, -4],
            [-2, -2],
            [-6, -1],
            [-4, 0],
            [-7, 1],
            [-1, 2],
            [-6, 3],
            [-3, 3],
            [-7, 6],
            [-3, 6],
            [-5, 7],
            [-1, 7],
            [5, -7],
            [1, -6],
            [6, -5],
            [4, -4],
            [2, -3],
            [7, -2],
            [1, -1],
            [4, -1],
            [2, 1],
            [6, 2],
            [0, 4],
            [4, 4],
            [2, 5],
            [7, 5],
            [5, 6],
            [3, 7]
        ]
    ], THREE.MaskPass = function (t, e) {
        THREE.Pass.call(this), this.scene = t, this.camera = e, this.clear = !0, this.needsSwap = !1, this.inverse = !1
    }, THREE.MaskPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
        constructor: THREE.MaskPass,
        render: function (t, e, i, n, r) {
            var s = t.context,
                a = t.state;
            a.buffers.color.setMask(!1), a.buffers.depth.setMask(!1), a.buffers.color.setLocked(!0), a.buffers.depth.setLocked(!0);
            var o, l;
            this.inverse ? (o = 0, l = 1) : (o = 1, l = 0), a.buffers.stencil.setTest(!0), a.buffers.stencil.setOp(s.REPLACE, s.REPLACE, s.REPLACE), a.buffers.stencil.setFunc(s.ALWAYS, o, 4294967295), a.buffers.stencil.setClear(l), t.render(this.scene, this.camera, i, this.clear), t.render(this.scene, this.camera, e, this.clear), a.buffers.color.setLocked(!1), a.buffers.depth.setLocked(!1), a.buffers.stencil.setFunc(s.EQUAL, 1, 4294967295), a.buffers.stencil.setOp(s.KEEP, s.KEEP, s.KEEP)
        }
    }), THREE.ClearMaskPass = function () {
        THREE.Pass.call(this), this.needsSwap = !1
    }, THREE.ClearMaskPass.prototype = Object.create(THREE.Pass.prototype), Object.assign(THREE.ClearMaskPass.prototype, {
        render: function (t, e, i, n, r) {
            t.state.buffers.stencil.setTest(!1)
        }
    }), THREE.RenderPass = function (t, e, i, n, r) {
        THREE.Pass.call(this), this.scene = t, this.camera = e, this.overrideMaterial = i, this.clearColor = n, this.clearAlpha = void 0 !== r ? r : 0, this.clear = !0, this.needsSwap = !1
    }, THREE.RenderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
        constructor: THREE.RenderPass,
        render: function (t, e, i, n, r) {
            var s = t.autoClear;
            t.autoClear = !1, this.scene.overrideMaterial = this.overrideMaterial;
            var a, o;
            this.clearColor && (a = t.getClearColor().getHex(), o = t.getClearAlpha(), t.setClearColor(this.clearColor, this.clearAlpha)), t.render(this.scene, this.camera, this.renderToScreen ? null : i, this.clear), this.clearColor && t.setClearColor(a, o), this.scene.overrideMaterial = null, t.autoClear = s
        }
    }), THREE.ShaderPass = function (t, e) {
        THREE.Pass.call(this), this.textureID = void 0 !== e ? e : "tDiffuse", t instanceof THREE.ShaderMaterial ? (this.uniforms = t.uniforms, this.material = t) : t && (this.uniforms = THREE.UniformsUtils.clone(t.uniforms), this.material = new THREE.ShaderMaterial({
            defines: t.defines || {},
            uniforms: this.uniforms,
            vertexShader: t.vertexShader,
            fragmentShader: t.fragmentShader
        })), this.camera = new THREE.OrthographicCamera((-1), 1, 1, (-1), 0, 1), this.scene = new THREE.Scene, this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null), this.scene.add(this.quad)
    }, THREE.ShaderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
        constructor: THREE.ShaderPass,
        render: function (t, e, i, n, r) {
            this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture), this.quad.material = this.material, this.renderToScreen ? t.render(this.scene, this.camera) : t.render(this.scene, this.camera, e, this.clear)
        }
    });
var BranchWeb = function () {
    this.full_object = new THREE.Object3D
};
BranchWeb.prototype.clean = function () {
    this.full_object = new THREE.Object3D
};
var gray_color_picker = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#ffffff"],
    social_color_picker = ["#00aced", "#3b5998", "#dd4b39", "#cb2027", "#007bb6", "#bb0000", "#aad450", "#32506d", "#517fa4", "#ff0084", "#ea4c89", "#a82400", "#0072b1", "#5B9A68", "#45668e", "#21759b", "#EB4823", "#7B0099", "#fb8f3d", "#ff3a00"];
BranchWeb.prototype.generate = function (t, e, i, n, r, s, a) {
    this.dots_velocity = i, this.opacity = .5;
    var n = n ? n : 90,
        o = new THREE.LineBasicMaterial({
            color: gray_color_picker[Math.round(4 * Math.random()) + 8],
            linewidth: 1.5,
            transparent: !0,
            fog: !0,
            opacity: 0
        }),
        l = new THREE.Geometry;
    l.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(t[0] * n, t[1] * n, t[2] * n)), l.computeLineDistances(), this.brazo = new THREE.Line(l, o), this.full_object.add(this.brazo), this.dots = [];
    for (var h = 0; h < e; h++) this.dots.push(new THREE.Mesh(r, s)), this.brazo.add(this.dots[h]);
    this.color = Math.round(19 * Math.random()), this.color_using = [], this.color_using[1] = new THREE.Color("#ffffff"), this.color_using[0] = new THREE.Color("#ffffff"), this.color_theme = !1, this.color_theme_selector = 0, this.color_changer = 0;
    var o = new THREE.MeshBasicMaterial({
        fog: !0,
        color: social_color_picker[this.color],
        transparent: !0,
        opacity: 0
    });
    this.final_sphere = new THREE.Mesh(a, o), this.final_sphere.position.x = t[0] * n, this.final_sphere.position.y = t[1] * n, this.final_sphere.position.z = t[2] * n, size = 1.5 + Math.random(), this.final_sphere.scale.set(size, size, size), this.full_object.add(this.final_sphere), this.visible = !0
}, BranchWeb.prototype.resetColour = function () {
    this.color_theme = !1, this.color_changer = 0
}, BranchWeb.prototype.changeMainColour = function (t) {
    this.brazo.material.color.setStyle(t), this.color_using[1] = new THREE.Color(t)
}, BranchWeb.prototype.changeSecondaryColour = function (t) {
    for (var e = 0; e < this.dots.length; e++) this.dots[e].material.color.setStyle(t);
    this.color_using[1] = new THREE.Color(t)
}, BranchWeb.prototype.changeMainNodeColour = function (t) {
    this.final_sphere.material.color.setStyle(t), this.color_theme = !0, this.color_using[0] = new THREE.Color(t), this.color_changer = 0
}, BranchWeb.prototype.animate = function () {
    if (working = 0 != quality, working) {
        var t = Math.abs(Math.sin(u_time * this.dots_velocity));
        this.color_changer += .008 + .001 * t, this.color_theme ? (this.color_changer >= 1 && (this.color_theme_selector = 1 == this.color_theme_selector ? 0 : 1, this.color_changer = 0), this.final_sphere.material.color.lerp(this.color_using[this.color_theme_selector], this.color_changer)) : (this.color_changer >= 1 && (this.color < social_color_picker.length - 1 ? this.color++ : this.color = 0, this.color_changer = 0), this.final_sphere.material.color.lerp(new THREE.Color(social_color_picker[this.color + 1]), this.color_changer));
        for (var e = 0; e < this.dots.length; e++) this.dots[e].position.lerpVectors(this.brazo.geometry.vertices[0], this.brazo.geometry.vertices[1], t);
        if (!this.visible) {
            for (var e = 0; e < this.dots.length; e++) this.dots[e].visible = !0;
            this.visible = !0
        }
    } else if (this.visible) {
        for (var e = 0; e < this.dots.length; e++) this.dots[e].visible = !1;
        this.visible = !1
    }
}, BranchWeb.prototype.getObject = function () {
    var t = this.full_object;
    return t
};
var cylinderMesh = function (t, e) {
    var i = (new THREE.Vector3).subVectors(e, t),
        n = new THREE.ArrowHelper(i, t),
        r = new THREE.CylinderGeometry(2, 2, i.length(), 6, 4),
        s = new THREE.Mesh(r, new THREE.MeshBasicMaterial({
            color: 255
        }));
    return s.rotation = n.rotation.clone(), s.position = (new THREE.Vector3).addVectors(t, i.multiplyScalar(.5)), s
};
BranchWeb.prototype.fadeIn = function (t) {
    if (this.opacity < 1)
        if (this.opacity + t < 1) {
            this.brazo.visible = !0, this.brazo.material.opacity += t, this.opacity = this.brazo.material.opacity;
            for (var e = 0; e < this.dots.length; e++) this.dots[e].visible = !0, this.dots[e].material.opacity += t
        } else {
            this.brazo.material.opacity = 1, this.opacity = this.brazo.material.opacity;
            for (var e = 0; e < this.dots.length; e++) this.dots[e].material.opacity = 1
        }
}, BranchWeb.prototype.fadeOut = function (t) {
    if (this.opacity > 0)
        if (this.opacity - t > 0) {
            this.brazo.material.opacity -= t, this.opacity = this.brazo.material.opacity;
            for (var e = 0; e < this.dots.length; e++) this.dots[e].material.opacity -= t
        } else {
            this.brazo.material.opacity = 0, this.brazo.visible = !1, this.opacity = this.brazo.material.opacity;
            for (var e = 0; e < this.dots.length; e++) this.dots[e].material.opacity = 0, this.dots[e].visible = !1
        }
}, BranchWeb.prototype.fadeInSphere = function (t) {
    s_u_time > 0 && (this.final_sphere.material.opacity + t <= 1 ? (this.final_sphere.visible = !0, this.final_sphere.material.opacity += t) : 1 != this.final_sphere.material.opacity && (this.final_sphere.material.opacity = 1))
}, BranchWeb.prototype.fadeOutSphere = function (t) {
    s_u_time > 0 && (this.final_sphere.material.opacity - t >= 0 ? this.final_sphere.material.opacity -= t : 0 != this.final_sphere.material.opacity && (this.final_sphere.material.opacity = 0, this.final_sphere.visible = !1))
}, data = [
    [0, 0, 1.021],
    [.4035482, 0, .9378643],
    [-.2274644, .3333333, .9378643],
    [-.1471226, -.375774, .9378643],
    [.579632, .3333333, .7715933],
    [.5058321, -.375774, .8033483],
    [-.6020514, .2908927, .7715933],
    [-.05138057, .6666667, .7715933],
    [.1654988, -.6080151, .8033483],
    [-.5217096, -.4182147, .7715933],
    [.8579998, .2908927, .4708062],
    [.3521676, .6666667, .6884578],
    [.7841999, -.4182147, .5025612],
    [-.657475, .5979962, .5025612],
    [-.749174, -.08488134, .6884578],
    [-.3171418, .8302373, .5025612],
    [.1035333, -.8826969, .5025612],
    [-.5836751, -.6928964, .4708062],
    [.8025761, .5979962, .2017741],
    [.9602837, -.08488134, .3362902],
    [.4899547, .8302373, .3362902],
    [.7222343, -.6928964, .2017741],
    [-.8600213, .5293258, .1503935],
    [-.9517203, -.1535518, .3362902],
    [-.1793548, .993808, .1503935],
    [.381901, -.9251375, .2017741],
    [-.2710537, -.9251375, .3362902],
    [-.8494363, -.5293258, .2017741],
    [.8494363, .5293258, -.2017741],
    [1.007144, -.1535518, -.06725804],
    [.2241935, .993808, .06725804],
    [.8600213, -.5293258, -.1503935],
    [-.7222343, .6928964, -.2017741],
    [-1.007144, .1535518, .06725804],
    [-.381901, .9251375, -.2017741],
    [.1793548, -.993808, -.1503935],
    [-.2241935, -.993808, -.06725804],
    [-.8025761, -.5979962, -.2017741],
    [.5836751, .6928964, -.4708062],
    [.9517203, .1535518, -.3362902],
    [.2710537, .9251375, -.3362902],
    [.657475, -.5979962, -.5025612],
    [-.7841999, .4182147, -.5025612],
    [-.9602837, .08488134, -.3362902],
    [-.1035333, .8826969, -.5025612],
    [.3171418, -.8302373, -.5025612],
    [-.4899547, -.8302373, -.3362902],
    [-.8579998, -.2908927, -.4708062],
    [.5217096, .4182147, -.7715933],
    [.749174, .08488134, -.6884578],
    [.6020514, -.2908927, -.7715933],
    [-.5058321, .375774, -.8033483],
    [-.1654988, .6080151, -.8033483],
    [.05138057, -.6666667, -.7715933],
    [-.3521676, -.6666667, -.6884578],
    [-.579632, -.3333333, -.7715933],
    [.1471226, .375774, -.9378643],
    [.2274644, -.3333333, -.9378643],
    [-.4035482, 0, -.9378643],
    [0, 0, -1.021]
], edge = [
    [0, 3],
    [3, 8],
    [8, 5],
    [5, 1],
    [1, 0],
    [2, 7],
    [7, 15],
    [15, 13],
    [13, 6],
    [6, 2],
    [4, 10],
    [10, 18],
    [18, 20],
    [20, 11],
    [11, 4],
    [9, 14],
    [14, 23],
    [23, 27],
    [27, 17],
    [17, 9],
    [12, 21],
    [21, 31],
    [31, 29],
    [29, 19],
    [19, 12],
    [16, 26],
    [26, 36],
    [36, 35],
    [35, 25],
    [25, 16],
    [22, 32],
    [32, 42],
    [42, 43],
    [43, 33],
    [33, 22],
    [24, 30],
    [30, 40],
    [40, 44],
    [44, 34],
    [34, 24],
    [28, 39],
    [39, 49],
    [49, 48],
    [48, 38],
    [38, 28],
    [37, 47],
    [47, 55],
    [55, 54],
    [54, 46],
    [46, 37],
    [41, 45],
    [45, 53],
    [53, 57],
    [57, 50],
    [50, 41],
    [51, 52],
    [52, 56],
    [56, 59],
    [59, 58],
    [58, 51],
    [1, 4],
    [11, 7],
    [2, 0],
    [6, 14],
    [9, 3],
    [5, 12],
    [19, 10],
    [17, 26],
    [16, 8],
    [25, 21],
    [13, 22],
    [33, 23],
    [20, 30],
    [24, 15],
    [29, 39],
    [28, 18],
    [34, 32],
    [27, 37],
    [46, 36],
    [38, 40],
    [35, 45],
    [41, 31],
    [43, 47],
    [50, 49],
    [44, 52],
    [51, 42],
    [54, 53],
    [48, 56],
    [58, 55],
    [57, 59]
], face = [
    [0, 3, 8, 5, 1],
    [2, 7, 15, 13, 6],
    [4, 10, 18, 20, 11],
    [9, 14, 23, 27, 17],
    [12, 21, 31, 29, 19],
    [16, 26, 36, 35, 25],
    [22, 32, 42, 43, 33],
    [24, 30, 40, 44, 34],
    [28, 39, 49, 48, 38],
    [37, 47, 55, 54, 46],
    [41, 45, 53, 57, 50],
    [51, 52, 56, 59, 58],
    [0, 1, 4, 11, 7, 2],
    [0, 2, 6, 14, 9, 3],
    [1, 5, 12, 19, 10, 4],
    [3, 9, 17, 26, 16, 8],
    [5, 8, 16, 25, 21, 12],
    [6, 13, 22, 33, 23, 14],
    [7, 11, 20, 30, 24, 15],
    [10, 19, 29, 39, 28, 18],
    [13, 15, 24, 34, 32, 22],
    [17, 27, 37, 46, 36, 26],
    [18, 28, 38, 40, 30, 20],
    [21, 25, 35, 45, 41, 31],
    [23, 33, 43, 47, 37, 27],
    [29, 31, 41, 50, 49, 39],
    [32, 34, 44, 52, 51, 42],
    [35, 36, 46, 54, 53, 45],
    [38, 48, 56, 52, 44, 40],
    [42, 51, 58, 55, 47, 43],
    [48, 49, 50, 57, 59, 56],
    [53, 54, 55, 58, 59, 57]
], face_points = [
    [.18555130000000003, -.27191262000000005, .9006850400000002],
    [-.371102634, .54382524, .6972346600000001],
    [.61646604, .54382524, .49378432000000005],
    [-.7311430600000001, -.37577400800000005, .49378432000000005],
    [.8667766400000001, -.375774008, .16459479200000002],
    [.03390838000000001, -.94411758, .16459479200000002],
    [-.8667766400000001, .375774008, -.16459479200000002],
    [-.03390838, .9441175800000001, -.16459479200000002],
    [.7311430600000001, .375774008, -.49378432000000005],
    [-.61646604, -.54382524, -.49378432000000005],
    [.371102634, -.54382524, -.6972346600000001],
    [-.18555130000000003, .27191262000000005, -.9006850399999999],
    [.17608380499999998, .33333333333333326, .8547288333333334],
    [-.374587, -.04244067333333332, .8547288333333334],
    [.6819159499999999, -.04244067333333333, .63707725],
    [-.20908814999999997, -.6504557666666667, .6370772499999999],
    [.44386656666666663, -.6504557666666666, .5025612],
    [-.8045976666666667, .22222222666666663, .41942567333333336],
    [.08640643833333335, .8302373333333333, .4194256733333333],
    [.9048600333333333, .22222222666666663, .06725802666666666],
    [-.5196880333333334, .7615668666666666, .15039353333333336],
    [-.5368149, -.7615668666666666, .06725802666666666],
    [.5368149, .7615668666666666, -.06725802666666666],
    [.5196880333333334, -.7615668666666666, -.15039353333333336],
    [-.9048600333333332, -.22222222666666663, -.06725802666666666],
    [.8045976666666667, -.22222222666666663, -.41942567333333336],
    [-.4438665666666667, .6504557666666667, -.5025612],
    [-.08640643833333335, -.8302373333333332, -.4194256733333333],
    [.20908814999999997, .6504557666666666, -.63707725],
    [-.6819159499999998, .04244067333333333, -.63707725],
    [.37458699999999995, .042440673333333324, -.8547288333333332],
    [-.176083805, -.3333333333333333, -.8547288333333332]
];
var data_color_picker = ["#e5fbf9", "#effafe", "#f8fefe", "#56b8db", "#3f89ac", "#608ea5", "#83d4f1", "#58b5d6", "#dbffff", "#ebf6fc", "#e5f5f5", "#ffffff"],
    Line = function (t, e, i, n) {
        this.line, this.dots2, this.parent1, this.parent2, this.parent1 = t, this.parent2 = e, this.opacity = .5;
        var r = new THREE.Geometry;
        r.dynamic = !0, r.vertices.push(new THREE.Vector3, new THREE.Vector3), this.line = new THREE.Line(r, i), this.line.visible = !1, this.dots2 = [], this.pointcounts = n > 0 ? n : 3 * Math.random() + 2;
        for (var r = new THREE.SphereGeometry(.1 + .2 * Math.random(), 5, 5), s = new THREE.MeshBasicMaterial({
                fog: !1,
                color: data_color_picker[Math.round(11 * Math.random())],
                transparent: !0,
                opacity: 0
            }), a = 0; a < this.pointcounts; a++) this.dots2.push({
            dot: new THREE.Mesh(r, s),
            speed: .02 * Math.random()
        }), this.dots2[a].dot.visible = !1, this.line.add(this.dots2[a].dot)
    };
Line.prototype.changeMainColour = function (t) {
    this.line.material.color.setStyle(t)
}, Line.prototype.changeSecondaryColour = function (t) {
    for (var e = 0; e < this.dots2.length; e++) this.dots2[e].dot.material.color.setStyle(t)
}, Line.prototype.animate = function () {
    if (this.line.geometry.vertices[0].setFromMatrixPosition(this.parent1.matrixWorld), this.line.geometry.vertices[1].setFromMatrixPosition(this.parent2.matrixWorld), this.line.geometry.verticesNeedUpdate = !0, working = 0 != quality, working) {
        for (var t = 0; t < this.dots2.length; t++) {
            var e = Math.abs(Math.sin(u_time * this.dots2[t].speed));
            this.dots2[t].dot.position.lerpVectors(this.line.geometry.vertices[1], this.line.geometry.vertices[0], e)
        }
        if (!this.visible) {
            for (var t = 0; t < this.dots2.length; t++) this.dots2[t].dot.visible = !0;
            this.visible = !0
        }
    } else if (this.visible) {
        for (var t = 0; t < this.dots2.length; t++) this.dots2[t].dot.visible = !1;
        this.visible = !1
    }
}, Line.prototype.fadeIn = function (t) {
    if (1 == t) {
        this.line.visible = !0, this.opacity = 1, this.line.material.opacity = 1;
        for (var e = 0; e < this.dots2.length; e++) this.dots2[e].dot.visible = !0, this.dots2[e].dot.material.opacity = t
    }
    if (this.opacity < 1)
        if (this.opacity + t < 1) {
            this.line.visible = !0, this.line.material.opacity += t, this.opacity = this.line.material.opacity;
            for (var e = 0; e < this.dots2.length; e++) this.dots2[e].dot.visible = !0, this.dots2[e].dot.material.opacity = this.opacity
        } else {
            this.line.material.opacity = 1, this.opacity = 1;
            for (var e = 0; e < this.dots2.length; e++) this.dots2[e].dot.material.opacity = 1
        }
}, Line.prototype.updateMat = function () {
    this.line.material.needsUpdate = !0;
    for (var t = 0; t < this.dots2.length; t++) this.dots2[t].dot.material.needsUpdate
}, Line.prototype.fadeOut = function (t) {
    if (this.opacity > 0)
        if (this.opacity - t > 0) {
            this.line.material.opacity -= t, this.opacity = this.line.material.opacity;
            for (var e = 0; e < this.dots2.length; e++) this.dots2[e].dot.material.opacity -= t
        } else {
            this.line.material.opacity = 0, this.line.visible = !1, this.opacity = 0;
            for (var e = 0; e < this.dots2.length; e++) this.dots2[e].dot.material.opacity = 0, this.dots2[e].dot.visible = !1
        }
};
var WireframedRectangle = function () {
        var t = [];
        t[0] = new THREE.SphereGeometry(.1, 8, 8), t[1] = t[0].clone(), t[2] = t[0].clone(), t[3] = t[0].clone(), t[4] = t[0].clone(), t[5] = t[0].clone(), t[6] = t[0].clone(), t[7] = t[0].clone(), t[0].translate(1, 1, 1), t[1].translate(1, 1, -1), t[2].translate(-1, 1, 1), t[3].translate(-1, 1, -1), t[4].translate(1, -1, 1), t[5].translate(1, -1, -1), t[6].translate(-1, -1, 1), t[7].translate(-1, -1, -1);
        var e = [];
        e[0] = new THREE.CylinderGeometry(.05, .05, 2, 8), e[1] = e[0].clone(), e[2] = e[0].clone(), e[3] = e[0].clone(), e[4] = e[0].clone(), e[4].rotateX(Math.PI / 2), e[5] = e[4].clone(), e[6] = e[4].clone(), e[7] = e[4].clone(), e[8] = e[4].clone(), e[8].rotateY(Math.PI / 2), e[9] = e[8].clone(), e[10] = e[8].clone(), e[11] = e[8].clone(), e[0].translate(1, 0, 1), e[1].translate(1, 0, -1), e[2].translate(-1, 0, 1), e[3].translate(-1, 0, -1), e[4].translate(1, 1, 0), e[5].translate(1, -1, 0), e[6].translate(-1, 1, 0), e[7].translate(-1, -1, 0), e[8].translate(0, 1, -1), e[9].translate(0, -1, -1), e[10].translate(0, 1, 1), e[11].translate(0, -1, 1);
        for (var i = 1; i < t.length; i++) t[0].merge(t[i]);
        for (var i = 0; i < e.length; i++) t[0].merge(e[i]);
        return t[0]
    },
    FXScene = function () {
        this.foreground_scene = new THREE.Scene, this.background_scene = new THREE.Scene, this.foreground_camera = new THREE.Camera, this.background_camera = new THREE.Camera, this.animation_bang = !1, this.animation = {
            animation_time: 0,
            vibration: .002
        }, this.clock = new THREE.Clock((!0)), this.tick = 0
    };
FXScene.prototype.startAnimationEvents = function () {
    TweenMax.fromTo(this.animation, 5, {
        animation_time: 0,
        vibration: .001
    }, {
        animation_time: 1,
        vibration: 8e-4,
        yoyo: !0
    })
}, FXScene.prototype.setup = function () {
    this.background_scene.add(this.background_camera), this.foreground_scene.add(this.foreground_camera);
    new THREE.TextureLoader
}, FXScene.prototype.loop = function () {};
var Scene01 = function () {
    this.scene = new THREE.Scene, this.animation_bang = !1, this.animation_text = {
        opacity: 0
    }
};
Scene01.prototype.setup = function () {
    this.header_text = new TextWithSubline(electrolized_font, "CASCADING DISRUPTION"), this.header_text.children[0].material.opacity = 0, this.header_text.children[1].material.opacity = 0, this.scene.add(this.header_text)
}, Scene01.prototype.reset = function () {
    this.animation_text = {
        opacity: 0
    }, this.header_text.children[0].material.opacity = 0, this.header_text.children[1].material.opacity = 0, this.animation_bang = !1
}, Scene01.prototype.loop = function () {
    this.animation_bang === !1 && (this.startAnimationEvents(), this.animation_bang = !0), this.header_text.children[0].material.opacity = this.animation_text.opacity, this.header_text.children[1].material.opacity = this.animation_text.opacity
}, Scene01.prototype.startAnimationEvents = function () {
    TweenMax.fromTo(this.animation_text, 2, {
        opacity: 0
    }, {
        repeat: 1,
        opacity: 1,
        yoyo: !0
    })
};
var Scene02 = function () {
    this.scene = new THREE.Scene, this.animation_bang = !1, this.animation_text = {
        opacity: 0
    }
};
Scene02.prototype.setup = function (t) {
    this.header_text = new TextWithSubline(electrolized_font, t.first_scene_text), this.header_text.children[0].material.opacity = 0, this.header_text.children[1].material.opacity = 0, this.scene.add(this.header_text)
}, Scene02.prototype.reset = function () {
    this.animation_text = {
        opacity: 0
    }, this.header_text.children[0].material.opacity = 0, this.header_text.children[1].material.opacity = 0, this.animation_bang = !1
}, Scene02.prototype.loop = function () {
    this.animation_bang === !1 && (this.startAnimationEvents(), this.animation_bang = !0), this.header_text.children[0].material.opacity = this.animation_text.opacity, this.header_text.children[1].material.opacity = this.animation_text.opacity
}, Scene02.prototype.startAnimationEvents = function () {
    TweenMax.fromTo(this.animation_text, 2, {
        opacity: 0
    }, {
        opacity: 1,
        repeat: 1,
        yoyo: !0
    })
};
var Scene03 = function () {
    this.rotation = 6e-4, this.r3 = .3 * Math.PI, this.NODE_COUNT = 60, this.NODE_SIZE = 10, this.HALF_SIZE = this.NODE_SIZE / 2
};
Scene03.prototype.startAnimationEvents = function () {
    TweenMax.fromTo(this.animation, 6, {
        animation_time: 0,
        branches_opacity: 0,
        vibration: .001
    }, {
        animation_time: 1,
        branches_opacity: 1,
        vibration: 8e-4,
        yoyo: !0
    })
}, Scene03.prototype.exporte = function () {
    return {
        branches: this.branches,
        stars_count: this.stars_count,
        middle_branches: this.middle_branches,
        central_sphere: this.central_sphere,
        face_branches: this.face_branches,
        face_lines: this.face_lines,
        quaternary_branches: this.quaternary_branches,
        particle_system: this.particle_system,
        particles: this.particles
    }
}, Scene03.prototype.setup = function (t) {
    this.scene = new THREE.Scene, this.scene.fog = new THREE.FogExp2(1118481, .002), this.animation_bang = !1, this.animation = {
        branches_opacity: 0,
        animation_time: 0,
        vibration: .002
    }, this.nodes_appear = [], this.nodes_opacity = [], this.clock = new THREE.Clock((!0)), this.tick = 0, this.particles = new THREE.Geometry, this.stars_count = t.background_stars_count, this.particleCount = this.stars_count, pMaterial = new THREE.PointsMaterial({
        color: 16777215,
        fog: !1,
        transparent: !0,
        alphaTest: .5,
        size: 20,
        map: (new THREE.TextureLoader).load(t.particle_path)
    });
    for (var e = PointsOnSphere(this.particleCount), i = 0; i < this.particleCount; i++) {
        var n = e[i].x + 100 * (-Math.random() + Math.random()),
            r = e[i].y + 100 * (-Math.random() + Math.random()),
            s = e[i].z + 100 * (-Math.random() + Math.random()),
            a = new THREE.Vector3(n, r, s);
        a.velocity = new THREE.Vector3(.03 * (-Math.random() + Math.random()), .03 * (-Math.random() + Math.random()), .03 * (-Math.random() + Math.random())), this.particles.vertices.push(a)
    }
    this.particle_system = new THREE.Points(this.particles, pMaterial), this.particle_system.sortParticles = !0, this.scene.add(this.particle_system), this.central_sphere = [];
    var o = new THREE.SphereGeometry(3, 32, 32),
        l = new THREE.MeshBasicMaterial({
            fog: !0,
            color: "#ffffff",
            transparent: !0,
            opacity: 0
        });
    this.central_sphere[0] = new THREE.Mesh(o, l), this.scene.add(this.central_sphere[0]), this.branches = [], this.middle_branches = [], this.cantidad_branches = this.NODE_COUNT, this.face_branches = [], this.face_lines = [], this.step = 2 * Math.PI / (this.cantidad_branches / this.NODE_SIZE);
    for (var h = new THREE.SphereGeometry(.5 + .2 * Math.random(), 20, 20), o = new THREE.SphereGeometry(.25 + .1 * Math.random(), 10, 10), c = new THREE.MeshBasicMaterial({
            color: "#FFFFFF",
            transparent: !0,
            opacity: 0
        }), u = 0; u < this.cantidad_branches / this.NODE_SIZE; u++) {
        var d = new BranchWeb;
        d.generate([0, .6, 0], 1 + Math.floor(2 * Math.random()), .01 + .03 * Math.random(), 90 + Math.random(), o, c, h), this.middle_branches.push(d), this.scene.add(this.middle_branches[u].getObject()), this.middle_branches[u].getObject().rotation.z = .1 * Math.random() + u * this.step
    }
    for (var u = 0; u < face_points.length; u++) {
        var d = new BranchWeb;
        d.generate(face_points[u], 1 + Math.floor(2 * Math.random()), .01 + .03 * Math.random(), 98 + Math.random(), o, c, h), this.face_branches.push(d), this.face_branches[u].brazo.material.opacity = 0, this.face_branches[u].brazo.visible = !1
    }
    for (var u = 0; u < this.cantidad_branches; u++) {
        var d = new BranchWeb;
        d.generate(data[u], 1 + Math.floor(2 * Math.random()), .01 + .03 * Math.random(), 90 + Math.random(), o, c, h), this.branches.push(d), this.scene.add(this.branches[u].getObject())
    }
    for (var u = 0; u < this.face_branches.length; u++)
        for (var f = 0; f < face[u].length; f++) {
            var p = new THREE.LineBasicMaterial({
                opacity: 0,
                transparent: !0,
                color: "#7fb7e7",
                fog: !0
            });
            this.whole_line = new Line(this.face_branches[u].final_sphere, this.branches[face[u][f]].final_sphere, p, 2), this.face_lines.push(this.whole_line)
        }
    this.quaternary_branches = [];
    for (var u = 0; u < edge.length; u++) {
        var _ = new THREE.LineBasicMaterial({
            opacity: 0,
            transparent: !0,
            color: "#7fb7e7",
            fog: !0
        });
        this.whole_line = new Line(this.branches[edge[u][0]].final_sphere, this.branches[edge[u][1]].final_sphere, _, 3), this.quaternary_branches.push(this.whole_line)
    }
    this.node_preference = [];
    for (var u = 0; u < this.branches.length; u++) this.nodes_appear[u] = !1, this.nodes_opacity[u] = -.2, this.node_preference[u] = data[u][0] * data[u][2] >= 0 ? 1 : -1;
    this.main_color = "", this.secondary_color = "", this.main_color_change = !1, this.secondary_color_change = !1, this.color_change = !1, this.reset_colors = !1
}, Scene03.prototype.changeMainColour = function (t) {
    this.color_change = !0, this.main_color = t, this.main_color_change = !0
}, Scene03.prototype.changeSecondaryColour = function (t) {
    this.color_change = !0, this.secondary_color = t, this.secondary_color_change = !0
}, Scene03.prototype.changeMainNodeColour = function (t) {
    this.color_change = !0, this.main_node_color = t, this.main_node_color_change = !0
}, Scene03.prototype.resetColor = function () {
    this.color_change = !0, this.reset_colors = !0
}, Scene03.prototype.loop = function () {
    var t = this.animation.vibration + this.rotation * (this.animation.animation_time * this.animation.animation_time) * .001,
        e = Math.sin(.01 * u_time) * t,
        i = Math.sin(.02 * u_time) * t;
    this.animation_bang === !1 && (this.startAnimationEvents(), this.animation_bang = !0), this.central_sphere[0].material.opacity = this.animation.branches_opacity;
    for (var n = (u_time * this.animation.vibration, 0); n < this.face_branches.length; n++) {
        var r = this.animation.vibration * Math.random();
        this.face_branches[n].getObject().rotation.x += e + r, this.face_branches[n].getObject().rotation.z += i + r
    }
    for (var n = 0; n < this.cantidad_branches; n++) {
        var r = this.animation.vibration * Math.random();
        this.branches[n].getObject().rotation.x += e + r, this.branches[n].getObject().rotation.z += i + r, 1 == this.nodes_appear[n] ? (this.branches[n].final_sphere.display = !0, this.branches[n].fadeIn(.1)) : this.animation.animation_time * this.animation.animation_time * this.animation.animation_time * this.animation.animation_time > Math.random() && (this.animation.animation_time > .2 && (this.nodes_appear[n] = !0), this.branches[n].final_sphere.material.opacity = 1, n < this.middle_branches.length && (this.middle_branches[n].final_sphere.material.opacity = 1)), this.branches[n].animate()
    }
    for (var n = 0; n < this.middle_branches.length; n++) this.middle_branches[n].getObject().rotation.x += e, this.middle_branches[n].getObject().rotation.z += i, 1 == this.nodes_appear[n] && (this.middle_branches[n].final_sphere.display = !0, this.middle_branches[n].fadeIn(.1)), this.middle_branches[n].animate();
    if (s_u_time > .5 || s_u_time < -.5) {
        for (var s = this.particleCount; s--;) {
            var a = this.particles.vertices[s];
            a.velocity.y -= .02 * (Math.random() - Math.random()), a.velocity.x -= .05 * (Math.random() - Math.random()), a.velocity.z -= .005 * (Math.random() - Math.random()), a.add(a.velocity)
        }
        this.particle_system.geometry.__dirtyVertices = !0, this.particle_system.geometry.verticesNeedUpdate = !0
    }
    if (this.color_change) {
        if (this.main_color_change) {
            for (var n = 0; n < this.cantidad_branches; n++) this.branches[n].changeMainColour(this.main_color);
            this.main_color_change = !1
        }
        if (this.secondary_color_change) {
            for (var n = 0; n < this.cantidad_branches; n++) this.branches[n].changeSecondaryColour(this.secondary_color);
            this.secondary_color_change = !1
        }
        if (this.main_node_color_change) {
            for (var n = 0; n < this.cantidad_branches; n++) this.branches[n].changeMainNodeColour(this.main_node_color);
            this.main_node_color_change = !1
        }
        if (this.reset_colors) {
            for (var n = 0; n < this.cantidad_branches; n++) this.branches[n].resetColour();
            this.reset_colors = !1
        }
        this.color_change = !1
    }
};
var gray_color_picker = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#ffffff"],
    Scene04 = function () {
        this.NODE_SIZE = 10, this.HALF_SIZE = this.NODE_SIZE / 2, this.rotation = -.003, this.r3 = .35 * Math.PI
    };
Scene04.prototype.startAnimationEvents = function () {
    TweenMax.fromTo(this.animation, 6, {
        animation_time: 0,
        central_sphere_scale: 1,
        central_sphere_opacity: 1,
        going_to_center: 1,
        branches_opacity: 1,
        dots_opacity: 1,
        scale: 1,
        new_branches_opacity: 0,
        vibration: .0025
    }, {
        animation_time: 1,
        central_sphere_scale: .8,
        central_sphere_opacity: 0,
        going_to_center: .95,
        branches_opacity: 0,
        dots_opacity: 1,
        scale: 1.5,
        new_branches_opacity: 1,
        vibration: .002,
        yoyo: !0
    })
}, Scene04.prototype.exporte = function () {
    return {
        branches: this.branches,
        stars_count: this.stars_count,
        middle_branches: this.middle_branches,
        central_sphere: this.central_sphere,
        secondary_branches: this.secondary_branches,
        middle_secondary_branches: this.middle_secondary_branches,
        face_branches: this.face_branches,
        face_lines: this.face_lines,
        quaternary_branches: this.quaternary_branches,
        particle_system: this.particle_system,
        particles: this.particles
    }
}, Scene04.prototype.setup = function (t) {
    this.scene = new THREE.Scene, this.scene.fog = new THREE.FogExp2(1118481, .002), this.animation_bang = !1, this.animation = {
        animation_time: 0,
        central_sphere_opacity: 0,
        central_sphere_scale: 1,
        branches_opacity: 1,
        new_branches_opacity: 0,
        scale: 1,
        going_to_center: 1,
        vibration: .001
    }, this.main_color = "", this.secondary_color = "", this.main_node_color = "", this.main_color_change = !1, this.secondary_color_change = !1, this.main_node_color_change = !1, this.color_change = !1, this.stars_count = t.stars_count, this.branches = t.branches, this.central_sphere = t.central_sphere, this.cantidad_branches = this.branches.length, this.secondary_branches = [], this.face_lines = t.face_lines, this.face_branches = t.face_branches, this.middle_branches = t.middle_branches, this.quaternary_branches = t.quaternary_branches, this.particle_system = t.particle_system, this.particles = t.particles, this.scene.add(this.particle_system);
    for (var e = 0; e < this.cantidad_branches; e++) this.scene.add(this.branches[e].getObject());
    for (var e = 0; e < this.middle_branches.length; e++) this.scene.add(this.middle_branches[e].getObject());
    this.scene.add(this.central_sphere[0]);
    for (var i = new THREE.Vector3, n = new THREE.Vector3, r = new THREE.Vector2, s = new THREE.Vector2, e = 0; e < this.branches.length; e++) {
        for (var a = [], o = 0; o < this.middle_branches.length; o++) i.setFromMatrixPosition(this.branches[e].final_sphere.matrixWorld), n.setFromMatrixPosition(this.middle_branches[o].final_sphere.matrixWorld), r.set(i.x, i.y), s.set(n.x, n.y), a[o] = r.distanceToSquared(s);
        for (var l = [], o = 0; o < a.length; o++)(void 0 === l[0] || a[o] < a[l[0]]) && (l[0] = o);
        var h = new THREE.LineBasicMaterial({
                opacity: 0,
                transparent: !0,
                color: "#3ea4d4",
                fog: !0
            }),
            c = new THREE.Geometry;
        c.dynamic = !0, c.vertices.push(new THREE.Vector3, new THREE.Vector3);
        for (var o = 0; o < l.length; o++) this.whole_line = new Line(this.branches[e].final_sphere, this.middle_branches[l[o]].final_sphere, h), this.whole_line.visible = !1, this.secondary_branches.push(this.whole_line), this.scene.add(this.secondary_branches[e].line)
    }
    this.middle_secondary_branches = [];
    for (var o = 0; o < this.middle_branches.length; o++) {
        var u = new THREE.LineBasicMaterial({
            opacity: 0,
            transparent: !0,
            color: 16777215,
            fog: !0
        });
        this.whole_line = new Line(this.middle_branches[o].final_sphere, this.middle_branches[o == this.middle_branches.length - 1 ? 0 : o + 1].final_sphere, u), this.whole_line.visible = !1, this.middle_secondary_branches.push(this.whole_line), this.scene.add(this.middle_secondary_branches[o].line)
    }
    this.node_changing = [], this.node_preference = [], this.middle_node_changing = [];
    for (var e = 0; e < this.branches.length; e++) this.node_preference[e] = data[e][0] * data[e][2] >= 0 ? 1 : -1, this.node_changing[e] = !1;
    for (var e = 0; e < this.middle_secondary_branches.length; e++) this.middle_node_changing[e] = !1
}, Scene04.prototype.changeMainColour = function (t) {
    this.color_change = !0, this.main_color = t, this.main_color_change = !0
}, Scene04.prototype.changeSecondaryColour = function (t) {
    this.color_change = !0, this.secondary_color = t, this.secondary_color_change = !0
}, Scene04.prototype.changeMainNodeColour = function (t) {
    this.color_change = !0, this.main_node_color = t, this.main_node_color_change = !0
}, Scene04.prototype.resetColor = function () {
    this.color_change = !0, this.reset_colors = !0
}, Scene04.prototype.loop = function () {
    this.r3 = Math.PI * (.45 - .15 * this.animation.animation_time);
    var t = this.animation.animation_time * this.animation.animation_time,
        e = this.rotation * t * .001,
        i = Math.sin(.025 * u_time) * this.animation.vibration / 2 + e,
        n = Math.sin(.01 * u_time) * this.animation.vibration + e;
    this.animation.animation_time * this.branches.length, t * t * this.middle_branches.length;
    this.animation_bang === !1 && (this.startAnimationEvents(), this.animation_bang = !0), 1 != this.animation.animation_time && (this.central_sphere[0].material.opacity = 1 - t);
    for (var r = Math.random(), s = 0; s < this.face_branches.length; s++) this.face_branches[s].getObject().rotation.x += i + this.animation.vibration * r, this.face_branches[s].getObject().rotation.z -= n + this.animation.vibration * r;
    for (var s = 0; s < this.cantidad_branches; s++) this.branches[s].getObject().rotation.y = this.node_preference[s] * (.3 * t) * this.r3, this.branches[s].getObject().rotation.x += i + this.animation.vibration * r, this.branches[s].getObject().rotation.z -= n + this.animation.vibration * r, this.secondary_branches[s].animate(), this.branches[s].animate(), 0 == this.node_changing[s] && this.animation.animation_time > s / this.cantidad_branches && (this.node_changing[s] = !0), this.node_changing[s] && 1 != this.secondary_branches[s].line.material.opacity && (r < .01 ? (this.secondary_branches[s].fadeIn(.2), this.branches[s].fadeOut(.2)) : (this.secondary_branches[s].fadeIn(.1), this.branches[s].fadeOut(.1)));
    for (var s = 0; s < this.middle_branches.length; s++) this.middle_branches[s].getObject().rotation.x -= i, this.middle_branches[s].getObject().rotation.z -= n, this.middle_branches[s].animate(), this.middle_secondary_branches[s].animate(), 0 == this.middle_node_changing[s] && this.animation.animation_time > s / this.middle_branches.length && (this.middle_node_changing[s] = !0), this.middle_node_changing[s] && 1 != this.middle_secondary_branches[s].line.material.opacity && (r < .01 ? (this.middle_branches[s].fadeOut(.2), this.middle_secondary_branches[s].fadeIn(.2)) : (this.middle_branches[s].fadeOut(.1), this.middle_secondary_branches[s].fadeIn(.1)));
    if (s_u_time > .5 || s_u_time < -.5) {
        for (var a = this.stars_count; a--;) {
            var o = this.particles.vertices[a];
            o.velocity.y -= .02 * (Math.random() - Math.random()), o.velocity.x -= .05 * (Math.random() - Math.random()), o.velocity.z -= .005 * (Math.random() - Math.random()), o.add(o.velocity)
        }
        this.particle_system.geometry.__dirtyVertices = !0, this.particle_system.geometry.verticesNeedUpdate = !0
    }
    if (this.color_change) {
        if (this.main_color_change) {
            for (var s = 0; s < this.secondary_branches.length; s++) this.secondary_branches[s].changeMainColour(this.main_color);
            for (var s = 0; s < this.cantidad_branches; s++) this.branches[s].changeMainColour(this.main_color);
            this.main_color_change = !1
        }
        if (this.secondary_color_change) {
            for (var s = 0; s < this.secondary_branches.length; s++) this.branches[s].changeSecondaryColour(this.secondary_color);
            this.secondary_color_change = !1
        }
        if (this.main_node_color_change) {
            for (var s = 0; s < this.cantidad_branches; s++) this.branches[s].changeMainNodeColour(this.main_node_color);
            this.main_node_color_change = !1
        }
        if (this.reset_colors) {
            for (var s = 0; s < this.cantidad_branches; s++) this.branches[s].resetColour();
            this.reset_colors = !1
        }
        this.color_change = !1
    }
};
var gray_color_picker = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#ffffff"],
    Scene06 = function (t) {
        this.NODE_SIZE = 10, this.HALF_SIZE = this.NODE_SIZE / 2, this.rotation = .002, this.r3 = .35 * Math.PI
    };
Scene06.prototype.startAnimationEvents = function () {
    TweenMax.fromTo(this.animation, 6, {
        branches_opacity: 1,
        animation_time: 0,
        new_branches_opacity: 0,
        vibration: .0012
    }, {
        branches_opacity: 0,
        animation_time: 1,
        new_branches_opacity: 1,
        yoyo: !0,
        vibration: 9e-4
    })
}, Scene06.prototype.exporte = function () {
    return {
        primary_branches: this.primary_branches,
        central_sphere: this.central_sphere,
        secondary_branches: this.secondary_branches,
        middle_branches: this.middle_branches,
        quaternary_branches: this.quaternary_branches
    }
}, Scene06.prototype.setup = function (t, e) {
    this.central_sphere = [];
    var i = new THREE.SphereGeometry(3, 32, 32),
        n = new THREE.MeshBasicMaterial({
            fog: !1,
            color: "#ffffff",
            transparent: !0,
            opacity: 1
        });
    this.central_sphere[2] = new THREE.Mesh(i, n), this.central_sphere[2].scale.set(27, 27, 27), this.central_sphere[2].visible = !1, this.central_sphere[2].material.color.setHex(15020593), this.central_sphere[2].rotation.x += .4, this.scene = new THREE.Scene, this.scene.fog = new THREE.FogExp2(1118481, .002), this.main_color = "", this.secondary_color = "",
        this.main_color_change = !1, this.secondary_color_change = !1, this.color_change = !1, this.animation_bang = !1, this.animation = {
            animation_time: 0,
            branches_opacity: 1,
            new_branches_opacity: 0,
            vibration: .0012
        }, this.primary_branches = t.branches, this.secondary_branches = t.secondary_branches, this.middle_branches = t.middle_branches, this.face_branches = t.face_branches, this.quaternary_branches = t.quaternary_branches, this.middle_secondary_branches = t.middle_secondary_branches, this.particle_system = t.particle_system, this.particles = t.particles, this.scene.add(this.particle_system), this.face_lines = t.face_lines;
    this.scene, this.central_sphere;
    this.scene.add(this.central_sphere[2]), this.central_sphere[2].visible = !0;
    for (var r = 0; r < this.face_lines.length; r++) this.scene.add(this.face_lines[r].line);
    for (var r = 0; r < this.primary_branches.length; r++) this.scene.add(this.primary_branches[r].getObject());
    for (var r = 0; r < this.secondary_branches.length; r++) this.scene.add(this.secondary_branches[r].line);
    for (var r = 0; r < this.face_branches.length; r++) this.scene.add(this.face_branches[r].getObject());
    for (var r = 0; r < this.quaternary_branches.length; r++) this.scene.add(this.quaternary_branches[r].line);
    for (var r = 0; r < this.middle_branches.length; r++) this.scene.add(this.middle_branches[r].getObject()), this.scene.add(this.middle_secondary_branches[r].line);
    this.scene.updateMatrixWorld(), this.node_changing = [], this.node_preference = [], this.middle_node_changing = [], this.set = [];
    for (var r = 0; r < this.primary_branches.length; r++) this.node_preference[r] = data[r][0] * data[r][2] >= 0 ? 1 : -1, this.node_changing[r] = !1;
    for (var r = 0; r < this.middle_secondary_branches.length; r++) this.middle_node_changing[r] = !1;
    for (var r = 0; r < this.face_lines.length; r++) this.set[r] = !1;
    this.set[0] = !0, this.times = [0, 0, 0, 0, void 0], this.times_counted = 0, this.activity = this.fadeInFunc, this.central_sphere[2].material.alphaMap = (new THREE.TextureLoader).load(e.spec_path), this.central_sphere[2].material.bumpMap = (new THREE.TextureLoader).load(e.spec_path), this.stars_count = t.stars_count
}, Scene06.prototype.changeMainColour = function (t) {
    this.color_change = !0, this.main_color = t, this.main_color_change = !0
}, Scene06.prototype.changeSecondaryColour = function (t) {
    this.color_change = !0, this.secondary_color = t, this.secondary_color_change = !0
}, Scene06.prototype.changeMainNodeColour = function (t) {
    this.color_change = !0, this.main_node_color = t, this.main_node_color_change = !0
}, Scene06.prototype.resetColor = function () {
    this.color_change = !0, this.reset_colors = !0
}, Scene06.prototype.loop = function () {
    this.activity(), this.r3 = Math.PI * (.35 + .05 * this.animation.animation_time);
    var t = this.animation.animation_time * this.animation.animation_time,
        e = this.rotation * t * 5e-4,
        i = Math.sin(.025 * u_time) * this.animation.vibration / 2 + e,
        n = Math.sin(.01 * u_time) * this.animation.vibration + e;
    u_time * this.animation.vibration, Math.random();
    this.animation_bang === !1 && (this.startAnimationEvents(), this.animation_bang = !0), this.central_sphere[2].rotation.x -= i, this.central_sphere[2].rotation.z += n, 1 == this.animation.animation_time && (this.central_sphere[2].rotation.y += .001);
    for (var r = 0; r < this.face_branches.length; r++) this.face_branches[r].getObject().rotation.x -= i, this.face_branches[r].getObject().rotation.z += n, 1 == this.animation.animation_time && (this.face_branches[r].getObject().rotation.y += .001), this.face_branches[r].animate();
    if (1 != this.animation.animation_time)
        for (var r = 0; r < this.middle_branches.length; r++) this.middle_branches[r].getObject().rotation.x -= i, this.middle_branches[r].getObject().rotation.z -= n, this.middle_branches[r].animate(), this.middle_secondary_branches[r].animate();
    for (var r = 0; r < this.primary_branches.length; r++) 1 != this.animation.animation_time ? (this.primary_branches[r].getObject().rotation.y = this.node_preference[r] * (1 - t) * .3 * this.r3, this.secondary_branches[r].animate()) : this.primary_branches[r].getObject().rotation.y += .001, this.primary_branches[r].getObject().rotation.x -= i, this.primary_branches[r].getObject().rotation.z += n, this.primary_branches[r].animate();
    for (var r = this.face_lines.length; r--;) this.face_lines[r].animate();
    for (var r = 0; r < this.quaternary_branches.length; r++) this.quaternary_branches[r].animate(), 1 != this.animation.animation_time && this.animation.animation_time > r && (this.node_changing[edge[r][0]] = !0, this.node_changing[edge[r][1]] = !0, this.quaternary_branches[r].fadeIn(.05));
    if (s_u_time > .5 || s_u_time < -.5) {
        for (var s = this.stars_count; s--;) {
            var a = this.particles.vertices[s];
            a.velocity.y -= .02 * (Math.random() - Math.random()), a.velocity.x -= .05 * (Math.random() - Math.random()), a.velocity.z -= .01 * (Math.random() - Math.random()), a.add(a.velocity)
        }
        this.particle_system.geometry.__dirtyVertices = !0, this.particle_system.geometry.verticesNeedUpdate = !0
    }
    if (1e3 == this.times_counted && (this.times_counted = 0, console.log("1 " + this.times[0] / 1e3), console.log("2 " + this.times[1] / 1e3), console.log("3 " + this.times[2] / 1e3), console.log("4 " + this.times[3] / 1e3), this.times[0] = 0, this.times[1] = 0, this.times[2] = 0, this.times[3] = 0), this.color_change) {
        if (this.main_color_change) {
            for (var r = 0; r < this.secondary_branches.length; r++) this.secondary_branches[r].changeMainColour(this.main_color);
            for (var r = 0; r < this.quaternary_branches.length; r++) this.quaternary_branches[r].changeMainColour(this.main_color);
            this.main_color_change = !1
        }
        if (this.secondary_color_change) {
            for (var r = 0; r < this.face_lines.length; r++) this.face_lines[r].changeMainColour(this.secondary_color);
            for (var r = 0; r < this.secondary_branches.length; r++) this.secondary_branches[r].changeSecondaryColour(this.secondary_color);
            this.secondary_color_change = !1
        }
        if (this.main_node_color_change) {
            for (var r = 0; r < this.primary_branches.length; r++) this.primary_branches[r].changeMainNodeColour(this.main_node_color);
            for (var r = 0; r < this.face_branches.length; r++) this.face_branches[r].changeMainNodeColour(this.main_node_color);
            this.main_node_color_change = !1
        }
        if (this.reset_colors) {
            for (var r = 0; r < this.cantidad_branches; r++) this.branches[r].resetColour();
            for (var r = 0; r < this.face_branches.length; r++) this.face_branches[r].resetColour();
            this.reset_colors = !1
        }
        this.color_change = !1
    }
}, Scene06.prototype.fadeOut = function () {
    this.activity = this.fadeOutFunc
}, Scene06.prototype.fadeOutFunc = function () {
    for (var t = .06, e = this.quaternary_branches.length; e--;) this.quaternary_branches[e].fadeOut(t);
    for (var e = this.face_lines.length; e--;) this.face_lines[e].fadeOut(t);
    for (var e = this.primary_branches.length; e--;) this.primary_branches[e].fadeOutSphere(t);
    for (var e = this.face_branches.length; e--;) this.face_branches[e].fadeOutSphere(t);
    this.central_sphere[2].material.opacity -= t
}, Scene06.prototype.fadeInFunc = function () {
    var t = this.animation.animation_time * this.animation.animation_time,
        e = this.animation.animation_time * this.primary_branches.length,
        i = this.animation.animation_time * this.middle_branches.length,
        n = Math.random();
    1 != this.animation.animation_time && (this.central_sphere[2].material.opacity = t * t);
    for (var r = 0; r < this.face_branches.length; r++) 1 == this.animation.animation_time && 1 != this.face_branches[r].brazo.material.opacity && this.face_branches[r].fadeInSphere(.7);
    if (1 != this.animation.animation_time)
        for (var r = 0; r < this.middle_branches.length; r++) 0 == this.middle_node_changing[r] && i > r && (this.middle_node_changing[r] = !0), this.middle_node_changing[r] && 0 != this.middle_secondary_branches[r].line.material.opacity && (n < .01 ? (this.middle_secondary_branches[r].fadeOut(.3), this.middle_branches[r].fadeOut(.3), this.middle_branches[r].fadeOutSphere(.3)) : (this.middle_secondary_branches[r].fadeOut(.2), this.middle_branches[r].fadeOut(.1), this.middle_branches[r].fadeOutSphere(.1)));
    for (var r = 0; r < this.primary_branches.length; r++) 0 == this.node_changing[r] && e > r && 1 == this.middle_node_changing[Math.floor(r / this.NODE_SIZE)] && (this.node_changing[r] = !0), this.node_changing[r] && (this.animation.animation_time < 1 || 0 != this.secondary_branches[r].opacity) && (n < .01 ? this.secondary_branches[r].fadeOut(.3) : n < .5 && this.secondary_branches[r].fadeOut(.1));
    for (var r = this.face_lines.length; r--;) 1 == this.animation.animation_time && this.face_lines[r].fadeIn(.01);
    for (var r = 0; r < this.quaternary_branches.length; r++) 1 != this.animation.animation_time && this.animation.animation_time > r / this.quaternary_branches.length && (this.node_changing[edge[r][0]] = !0, this.node_changing[edge[r][1]] = !0, this.quaternary_branches[r].fadeIn(.1))
};
var SceneCubes = function () {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor), isMobile = !1, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (isMobile = !0);
    var t = window.matchMedia("only screen and (max-width: 760px)");
    t.matches && (isMobile = !0)
};
SceneCubes.prototype.setup = function (t) {
    function e() {
        function e() {
            p = {
                sampleDistance: .75,
                waveFactor: .0021
            }, effectBloom = new THREE.BloomPass(.7, 32, 32, 1024);
            var t = new THREE.RenderPass(o, a);
            effectFocus = new THREE.ShaderPass(THREE.FocusShader), msaaRenderPassP = new THREE.ManualMSAARenderPass(o, a), msaaRenderPassP.sampleLevel = isChrome ? 2 : 1, effectFocus.uniforms.screenWidth.value = D, effectFocus.uniforms.screenHeight.value = H, effectFocus.uniforms.sampleDistance.value = p.sampleDistance, effectFocus.uniforms.waveFactor.value = p.waveFactor;
            var e = new THREE.EffectComposer(l);
            e.addPass(t), e.addPass(msaaRenderPassP), e.addPass(effectBloom), e.addPass(effectFocus), effectFocus.renderToScreen = !0, A.composer = e
        }
        R = new THREE.Vector2, P = new THREE.Raycaster, l = t.renderer, a = new THREE.PerspectiveCamera(45, D / H, 1, 7e3), a.position.set(-170, 100, -170), controls = new THREE.OrbitControls(a, l.domElement), controls.target = new THREE.Vector3(0, 0, 0), controls.autoRotate = !0, controls.minDistance = 60, controls.maxDistance = 450, controls.enablePan = !1, controls.enableZoom = !0, controls.enableDamping = !0, controls.dampingFactor = .03, controls.rotateSpeed = .1, controls.zoomSpeed = .8, o = new THREE.Scene, o.vector5 = new THREE.Vector3(5, 5, 5), o.vector1 = new THREE.Vector3(1, 1, 1), o.vector0 = new THREE.Vector3(.001, .001, .001), o.vector01 = new THREE.Vector3(.5, .5, .5), light = new THREE.SpotLight(16717647, 1), light.position.set(0, 900, 2e3), light.castShadow = !0, o.add(light), light2 = new THREE.SpotLight(16764735, 1), light2.position.set(0, -900, -1800), light2.castShadow = !0, o.add(light2), fov = 75, side = isMobile ? 5 : isChrome ? 8 : 6, size = 10, _ = !1, m = !1, lon = 45, onMouseDownLon = 0, lat = 45, onMouseDownLat = 0, phi = 0, theta = 0;
        var i, n = new THREE.CubeGeometry(size, size, size),
            r = new WireframedRectangle;
        r.scale(.5 * size, .5 * size, .5 * size);
        for (var s = new THREE.MeshLambertMaterial({
                fog: !1,
                color: 16777215,
                transparent: !0,
                opacity: .99,
                side: THREE.FrontSide
            }), h = 0; h < side; h++)
            for (var T = 0; T < side; T++)
                for (var E = 0; E < side; E++) {
                    i = new THREE.Mesh(Math.random() > .3 ? n : r, s.clone()), i.position.x = (E - .5 * side) * size, i.position.y = (T - .5 * side) * size, i.position.z = (h - .5 * side) * size, i.position0 = new THREE.Vector3, i.position0.copy(i.position), i.position1 = new THREE.Vector3, i.position1.copy(i.position), i.matrixAutoUpdate = !1;
                    var C = Math.random() < .1;
                    i.conway = !1, o.add(i), O.push(i), M.push({
                        status: C
                    })
                }
        for (var k = O.length, z = O.length; k--;) O[k].material.color.setHSL(k / z, .99, .6);
        new THREE.TextureLoader;
        g = new THREE.Mesh(new THREE.SphereGeometry(500, 6, 6), new THREE.MeshBasicMaterial({
            fog: !1,
            side: THREE.BackSide,
            color: "#333333"
        })), v = new THREE.Mesh(new THREE.SphereGeometry(3e3, 128, 128), new THREE.MeshLambertMaterial({
            fog: !1,
            side: THREE.BackSide,
            color: "#777777"
        })), v.visible = !1, o.add(v), o.add(g), c = !1, f = !1, running = !1, x = function () {
            if (c) c = !1, v.material.map = void 0, v.material.needsUpdate = !0, g.visible = !0, v.visible = !1, track.getVideoTracks()[0].stop();
            else {
                d = document.createElement("video"), d.width = 320, d.height = 240, d.autoplay = !0, d.controls = !0;
                !!navigator.getUserMedia;
                navigator.getUserMedia({
                    audio: !1,
                    video: !0
                }, function (t) {
                    track = t, d.src = URL.createObjectURL(t), d.oncanplay = function () {
                        u = new THREE.Texture(this), u.minFilter = THREE.LinearFilter, u.wrapS = THREE.ClampToEdgeWrapping, u.wrapT = THREE.ClampToEdgeWrapping, v.material.map = u, v.material.map.needsUpdate = !0, v.material.needsUpdate = !0, g.visible = !1, v.visible = !0, c = !0
                    }
                }, function (t) {
                    console.log("Failed to get a stream due to", t)
                })
            }
        }, e(), o.matrixAutoUpdate = !1;
        var F = function () {
                effectFocus.uniforms.sampleDistance.value = p.sampleDistance, effectFocus.uniforms.waveFactor.value = p.waveFactor, m = !0
            },
            N = {
                color0: t.initial_primary_color || "#bb4773",
                color1: t.initial_secondary_color || "#8e669b",
                colorScene: t.initial_background_color || "#333333"
            },
            L = function () {
                light.color.setStyle(N.color0), light2.color.setStyle(N.color1), v.material.color.setStyle(N.colorScene), g.material.color.setStyle(N.colorScene)
            };
        L(), effects = {
            expand: 1,
            size: 1,
            "selfie mode": x
        }, b = function () {
            for (var t = O.length; t--;) O[t].position0.x = O[t].position1.x * effects.expand, O[t].position0.y = O[t].position1.y * effects.expand, O[t].position0.z = O[t].position1.z * effects.expand
        }, y = function () {
            o.vector1 = new THREE.Vector3(effects.size, effects.size, effects.size)
        };
        var U = {
            pause: function () {
                _ = !_, controls.autoRotate = !controls.autoRotate
            }
        };
        themes_to_pick = {
            "compact red": {
                wave: [1e-4, 2e-4],
                expand: .7,
                size: 1.5,
                sample: [1e-4, 2e-4],
                c1: {
                    r: .4,
                    g: 0,
                    b: 0
                },
                c2: {
                    r: .1,
                    g: 0,
                    b: 0
                },
                c3: t.initial_background_color || "#ff0000"
            },
            radioactive: {
                wave: [0, 0],
                expand: 1.7,
                size: .95,
                sample: [1e-4, 2e-4],
                c1: {
                    r: .2823529411764706,
                    g: 1,
                    b: .36470588235294116
                },
                c2: {
                    r: .9215686274509803,
                    g: .9176470588235294,
                    b: .1607843137254902
                },
                c3: t.initial_background_color || "#2a2a2a"
            },
            sky: {
                wave: [0, 0],
                expand: 3,
                size: 1.1,
                sample: [0, 0],
                c1: {
                    r: .72,
                    g: .83,
                    b: .99
                },
                c2: {
                    r: .72,
                    g: .77,
                    b: .9
                },
                c3: t.initial_background_color || "#334466"
            },
            oasis: {
                wave: [.001, .002],
                expand: 1.3,
                size: .9,
                c2: {
                    r: .36,
                    g: .13,
                    b: .13
                },
                c1: {
                    r: .949,
                    g: .776,
                    b: .224
                },
                sample: [.001, .002],
                c3: t.initial_background_color || "#5c431e"
            },
            "black & blue": {
                wave: [.001, .1],
                size: 1.1,
                expand: 1.1,
                sample: [1.7, 2.3],
                c1: {
                    r: .2627450980392157,
                    g: .0196078431372549,
                    b: .0196078431372549
                },
                c2: {
                    r: .1411764705882353,
                    g: 0,
                    b: .6078431372549019
                },
                c3: t.initial_background_color || "#d7a7c7"
            },
            hallucination: {
                wave: [.001, .2],
                expand: 1.5,
                size: 1,
                sample: [.001, .1],
                c1: {
                    r: .8509803921568627,
                    g: .5686274509803921,
                    b: .9098039215686274
                },
                c2: {
                    r: .9803921568627451,
                    g: .3058823529411765,
                    b: .3058823529411765
                },
                c3: t.initial_background_color || "#060616"
            },
            berry: {
                wave: [.08, .08],
                expand: 1.2,
                size: 1.1,
                sample: [3, 3],
                c1: {
                    r: .59375,
                    g: .59375,
                    b: .7421875
                },
                c2: {
                    r: .69921875,
                    g: .578125,
                    b: .5625
                },
                c3: t.initial_background_color || "#2a2a2a"
            }
        }, themes_to_pick_names = {
            "compact red": "compact red",
            radioactive: "radioactive",
            sky: "sky",
            "black & blue": "black & blue",
            hallucination: "hallucination",
            berry: "berry"
        }, possible_rules = {
            "prime number": 0,
            exponentiation: 3,
            inversion: 4,
            "standard life": 5
        }, theme = {
            rule: 5,
            theme: themes_to_pick_names[t.initial_theme]
        }, w = function (t) {
            m = !1, light.color.copy(themes_to_pick[theme.theme].c1), N.color0 = "#" + light.color.getHexString(), light2.color.copy(themes_to_pick[theme.theme].c2), N.color1 = "#" + light2.color.getHexString(), t !== !0 && (console.log(t), v.material.color.setStyle(themes_to_pick[theme.theme].c3), g.material.color.setStyle(themes_to_pick[theme.theme].c3)), N.colorScene = "#" + v.material.color.getHexString(), effects.expand = themes_to_pick[theme.theme].expand, b(), effects.size = themes_to_pick[theme.theme].size, y(), void 0 != themes_to_pick[theme.theme].wave ? effectFocus.uniforms.waveFactor.value = themes_to_pick[theme.theme].wave : effectFocus.uniforms.waveFactor.value = .003
        }, w(!0), S = t.gui, S.add(p, "sampleDistance", 0, 3, .001).listen().onChange(F), S.add(p, "waveFactor", 0, .6, .0025).listen().onChange(F), S.addColor(N, "color0").onChange(L).listen(), S.addColor(N, "color1").onChange(L).listen(), S.addColor(N, "colorScene").onChange(L).listen(), S.add(effects, "expand", 1, 3, .1).listen().onChange(b), S.add(effects, "size", 1, 2, .1).listen().onChange(y), S.add(effects, "selfie mode"), S.add(U, "pause"), S.add(theme, "rule", possible_rules), S.add(theme, "theme", themes_to_pick_names).onChange(w), S.close()
    }

    function i(t) {
        for (var e = M[t].status, i = 0, n = -1; n <= 1; n++)
            for (var r = -1; r <= 1; r++)
                for (var s = -1; s <= 1; s++) {
                    var a = t + n * side * side + r * side + s;
                    M[a] && M[a].status && i++
                }
        return e ? !(i < rules[theme.rule][1] - 1) && (!(i > rules[theme.rule][0] + 1) && e) : !(i > rules[theme.rule][0]) && (!(i < rules[theme.rule][1]) && (i > rules[theme.rule][1] && i <= rules[theme.rule][0] || e))
    }

    function n() {
        if (_ || z) z = !1;
        else {
            for (var t = !1, e = [], r = 0, s = 0; s < side; s++)
                for (var a = 0; a < side; a++)
                    for (var o = 0; o < side; o++) e[r] = {
                        status: i(r)
                    }, 0 == t && 1 == e[r].status && (t = !0), r++;
            M = e;
            for (var r = 0, l = M.length; r < l; r++) M[r].conway = M[r].status, O[r].conway = M[r].status;
            t || F()
        }
        timeout = setTimeout(n, 3500)
    }

    function r() {
        if (!m) {
            var t = Math.abs(Math.sin(N / 100));
            effectFocus.uniforms.sampleDistance.value = (1 - t) * themes_to_pick[theme.theme].sample[1] + t * themes_to_pick[theme.theme].sample[0], effectFocus.uniforms.waveFactor.value = (1 - t) * themes_to_pick[theme.theme].wave[1] + t * themes_to_pick[theme.theme].wave[0], p.sampleDistance = effectFocus.uniforms.sampleDistance.value, p.waveFactor = effectFocus.uniforms.waveFactor.value
        }
    }

    function s() {
        A.composer.render(), controls.update(), r(), c && d.readyState === d.HAVE_ENOUGH_DATA && (u.needsUpdate = !0);
        var t = Date.now();
        N++;
        var e = N / 1e3,
            i = 400,
            n = 3e-4 * t;
        light.position.set(a.position.x, a.position.y + 50, a.position.z);
        var n = 25e-5 * t;
        light2.position.set(i * Math.sin(n) * Math.cos(n), i * Math.sin(n), i * Math.cos(n));
        for (var s = O.length; s--;) O[s].conway && (O[s].material.opacity < 1 && (O[s].material.opacity += .02), O[s].scale.lerp(o.vector1, .2), O[s].rotation.y *= .9, O[s].rotation.z *= .9, O[s].position.y += .05 * Math.sin(e), O[s].position.lerp(O[s].position0, .1), O[s].updateMatrix()), !O[s].conway && O[s].material.opacity > 0 && (O[s].scale.lerp(o.vector0, .05), _ ? (O[s].scale.lerp(o.vector01, .1), O[s].material.opacity < .8 && (O[s].material.opacity += .01)) : (O[s].scale.lerp(o.vector0, .1), O[s].material.opacity *= .9, O[s].rotation.y += .008, O[s].rotation.z += .005), O[s].position.lerp(O[s].position0, .01), O[s].updateMatrix());
        var l = O.length,
            p = .51 + .1 * Math.abs(Math.sin(N / 50));
        for (console.log(p), s = 0; s < O.length; s++) h = s / l, O[s].material.color.setHSL(h, .99, p);
        P.setFromCamera(R, a);
        var m = P.intersectObjects(O);
        m.length > 0 ? (controls.autoRotate = !1, k != m[0].object ? (k && k.material.emissive.setHex(k.currentHex), k = m[0].object, k.currentHex = k.material.emissive.getHex(), k.material.emissive.setHex(16711680), _ || (k.scale.x *= 1.1, k.scale.y *= 1.1, k.scale.z *= 1.1)) : (1 == f && (k.conway = !k.conway), _ ? k.scale.lerp(o.vector1, .1) : k.scale.lerp(o.vector5, .1))) : (k && k.material.emissive.setHex(k.currentHex), k = null, controls.autoRotate = !0), f = !1
    }
    console.log(t);
    var a, o, l, c, u, d, f, p, _, m, g, v, b, y, x, w, T, E, C, S, R, k, P, A = {},
        O = [],
        M = [],
        D = t.width,
        H = t.height,
        z = !1;
    e(), rules = [
        [4, 3],
        [2, 1],
        [6, 3],
        [20, 3],
        [2, -1],
        [8, 5]
    ], this.reset = function () {
        z = !0;
        for (var t = 0; t < side; t++)
            for (var e = 0; e < side; e++)
                for (var i = 0; i < side; i++) {
                    var n = t * side * side + e * side + i;
                    M[n].conway = Math.random() < .2, M[n].status = M[n].conway, O[n].conway = M[n].conway, O[n].position.x = (i - .5 * side) * size * 5, O[n].position.y = (e - .5 * side) * size * 5, O[n].position.z = (t - .5 * side) * size * 5
                }
    };
    var F = this.reset;
    n(), this.animate = function () {};
    var N = 0;
    this.render = function () {
        s()
    }, T = function (t) {
        t.preventDefault();
        var e = l.domElement.getBoundingClientRect();
        R.x = (t.clientX - e.left) / (e.right - e.left) * 2 - 1, R.y = -(t.clientY - e.top) / (e.bottom - e.top) * 2 + 1
    }, E = function (t) {
        f = !0
    }, C = function () {
        D = container.clientWidth, H = container.clientHeight, effectFocus.uniforms.screenWidth.value = D, effectFocus.uniforms.screenHeight.value = H, a.aspect = D / H, a.updateProjectionMatrix(), l.setPixelRatio(window.devicePixelRatio), l.setSize(D, H), A.composer.setSize(D, H)
    }, window.addEventListener("mousemove", T, !1), document.addEventListener("mouseup", E, !1), window.addEventListener("resize", C, !1), this.updateZoom = function (t) {
        a.setFocalLength(t)
    }, this.changeColorMain = function (t) {
        light.color.setStyle(t)
    }, this.changeColorSecondary = function (t) {
        light2.color.setStyle(t)
    }, this.changeColorBackground = function (t) {
        v.material.color.setStyle(t), g.material.color.setStyle(t)
    }, this.stop = function () {}, this.changeSampleDistance = function (t) {
        m = !0, effectFocus.uniforms.sampleDistance.value = t
    }, this.changeWaveFactor = function (t) {
        m = !0, effectFocus.uniforms.waveFactor.value = t
    }, this.expandTo = function (t) {
        (t < .5 || t > 5) && console.warn("recommended values are between 0.5 and 5"), effects.expand = t, b()
    }, this.resizeTo = function (t) {
        (t < .5 || t > 5) && console.warn("recommended values are between 0.5 and 5"), effects.size = t, y()
    }, this.toggleSelfieMode = function () {
        x()
    }, this.changeRuleTo = function (t) {
        void 0 != possible_rules[t] ? theme.rule = possible_rules[t] : console.error(newTheme, " not defined as a valid rule")
    }, this.changeThemeTo = function (t) {
        void 0 != themes_to_pick_names[t] ? (theme.theme = t, w()) : console.error(t, " not defined as a valid theme")
    }, this.stop = function () {
        running && (running = !running, cancelAnimationFrame(anim_frame))
    }, this.start = function () {
        running || (running = !0, this.animate())
    }, this.pause = function () {
        _ = !_, running = !running, controls.autoRotate = !controls.autoRotate
    }
}, quality = 0, u_time = 0, window.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, e) {
        window.setTimeout(t, 1e3 / 60)
    }
}();
var Animation01 = function (t) {
    this.version = "6.0", this.author = "Tibaldo Juan AgustÃ­n", 
    this.link = "tibaldo.io", 
    console.log("VERSION " + this.version + " author " + this.author + " " + this.link);

    var e = function () {
        try {
            var t = document.createElement("canvas");
            return !(!window.WebGLRenderingContext || !t.getContext("webgl") && !t.getContext("experimental-webgl"))
        } catch (e) {
            return !1
        }
    };
    Detector.webgl && e() || t()
};
Animation01.prototype.setup = function (t, e, i) {
    this.container = {
        clientHeigth: 600,
        clientWidth: 600
    },this.renderer = new THREE.WebGLRenderer({
        antialias: !0,
        alpha: !0
    }), this.running = !1, this.anim_frame, this.scenes = [], this.start_time = [], this.scene_set = [], this.params = t, this.CURRENT_SCENE = 0, this.scenes[0] = new Scene01, this.scenes[1] = new Scene02, this.scenes[2] = new Scene03, this.scenes[3] = new Scene04, this.scenes[4] = new Scene06, this.scenes[5] = new SceneCubes, this.fx_scene = new FXScene, this.SECONDS = 60, this.container = document.getElementById(this.params.container_id), this.renderer, this.start_time[0] = [1, 0], this.start_time[1] = [1, 0], this.start_time[2] = [0, 6], this.start_time[3] = [6, 11], this.start_time[4] = [11, 16], this.start_time[5] = [16, 21];
    for (var n = 0; n < this.start_time.length; n++) this.start_time[n][0] *= this.SECONDS, this.start_time[n][1] *= this.SECONDS, console.log("scene " + n + " time : " + this.start_time[n]);
    for (var n = 0; n < this.scenes.length; n++) this.scene_set[n] = !1;
    this.setupScenes = function () {
        this.scenes[0].setup(), this.scenes[1].setup(this.params), this.scenes[2].setup(this.params), this.scenes[5].setup(this.params), this.fx_scene.setup(this.params)
    }, 
    console.log("AAAAAAAA: ", JSON.stringify(this)),
    this.height = this.container.clientHeight, this.width = this.container.clientWidth, this.aspectRatio = this.width / this.height, this.params.renderer = this.renderer, this.params.width = this.height, this.params.height = this.width, this.renderer.setClearColor(655361, 0), this.renderer.setSize(this.container.clientWidth, this.container.clientHeight), this.renderer.autoClear = !1, this.renderer.domElement.setAttribute("id", this.params.renderer_id), this.gui = new dat.GUI({
        autoPlace: !1
    }), this.params.gui = this.gui, this.container.appendChild(this.renderer.domElement), this.main_camera = new THREE.PerspectiveCamera(75, this.aspectRatio, .01, 8e3), this.main_camera.position.z = 375, this.main_camera.position.y = 10, this.control = new THREE.OrbitControls(this.main_camera, this.renderer.domElement), this.control.target = new THREE.Vector3(0, 0, 0), this.control.autoRotate = !1, this.control.minDistance = 60, this.control.maxDistance = 450, this.control.minPolarAngle = .9, this.control.maxPolarAngle = 3, this.control.enablePan = !1, this.control.enableZoom = !0, this.control.enableDamping = !0, this.control.dampingFactor = .03, this.control.rotateSpeed = .2, this.control.zoomSpeed = .8, this.stats = new Stats, this.stats.setMode(0), this.container.appendChild(this.stats.domElement), this.stats.domElement.setAttribute("id", this.params.stats_id), this.postprocessing = {
        enabled: !0
    }, this.shaderSettings = {
        rings: 3,
        samples: 5
    }, this.qualityO = {}, this.qualityO[this.params.quality_name] = 0, 
    this.effectController = {
        fstop: .1,
        maxblur: 2.9,
        focalDepth: 4.3,
        depthblur: !0,
        threshold: .17,
        gain: 29.3,
        bias: .1,
        fringe: .49,
        dithering: 0
    }, this.effectController[this.params.focal_length_name] = this.params.focal_length_init_val, this.material_depth = new THREE.MeshDepthMaterial, this.initpostprocessing = function (t, e) {
        var i = {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBFormat
            },
            n = 0 == this.params.shader_to_use ? THREE.BokehShader : THREE.BokehShader2;
        this.postprocessing.scene = new THREE.Scene, this.postprocessing.camera = new THREE.OrthographicCamera(t / -2, t / 2, e / 2, e / -2, (-1e4), 1e4), this.postprocessing.camera.position.z = 100, this.postprocessing.scene.add(this.postprocessing.camera), this.postprocessing.rtTextureDepth = new THREE.WebGLRenderTarget(t, e, i), this.postprocessing.rtTextureColor = new THREE.WebGLRenderTarget(t, e, i), this.postprocessing.bokeh_uniforms = THREE.UniformsUtils.clone(n.uniforms), this.postprocessing.bokeh_uniforms.tColor.value = this.postprocessing.rtTextureColor, this.postprocessing.bokeh_uniforms.tDepth.value = this.postprocessing.rtTextureDepth, this.postprocessing.bokeh_uniforms.textureWidth.value = t, this.postprocessing.bokeh_uniforms.textureHeight.value = e, this.postprocessing.materialBokeh = new THREE.ShaderMaterial({
            uniforms: this.postprocessing.bokeh_uniforms,
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            defines: {
                RINGS: this.shaderSettings.rings,
                SAMPLES: this.shaderSettings.samples
            }
        }), this.postprocessing.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(t, e), this.postprocessing.materialBokeh), this.postprocessing.quad.position.z = -500, this.postprocessing.scene.add(this.postprocessing.quad)
    }, this.initpostprocessing(this.width, this.height), this.shaderUpdate = function () {
        this.postprocessing.materialBokeh.defines.RINGS = this.shaderSettings.rings, this.postprocessing.materialBokeh.defines.SAMPLES = this.shaderSettings.samples, this.postprocessing.materialBokeh.needsUpdate = !0
    }, this.qualityUpdate = function () {
        quality = this.qualityO[this.params.quality_name], 2 == quality || 3 == quality ? (this.renderType = this.renderGl, 2 == quality ? (this.postprocessing.materialBokeh.defines.RINGS = 3, this.postprocessing.materialBokeh.defines.SAMPLES = 5, this.postprocessing.bokeh_uniforms.maxblur.value = 2.9, this.postprocessing.bokeh_uniforms.fstop.value = .1, this.postprocessing.bokeh_uniforms.gain.value = 29, this.postprocessing.materialBokeh.needsUpdate = !0) : (this.postprocessing.materialBokeh.defines.RINGS = 7, this.postprocessing.materialBokeh.defines.SAMPLES = 6, this.postprocessing.bokeh_uniforms.maxblur.value = 2.4, this.postprocessing.bokeh_uniforms.fstop.value = 3.2, this.postprocessing.bokeh_uniforms.gain.value = 62, this.postprocessing.materialBokeh.needsUpdate = !0)) : this.renderType = this.renderCanvas
    }, this.themeColorChange = function () {
        if (5 == this.color[this.params.color_theme_name])
            for (var t = 2; t <= 4; t++) this.scenes[t].resetColor();
        else
            for (var t = 2; t <= 4; t++) this.scenes[t].changeMainColour(this.color.theme[this.color[this.params.color_theme_name]][0]), this.scenes[t].changeSecondaryColour(this.color.theme[this.color[this.params.color_theme_name]][1]), this.scenes[t].changeMainNodeColour(this.color.theme[this.color[this.params.color_theme_name]][2])
    }, this.matChanger = function () {
        for (var t in this.effectController) t in this.postprocessing.bokeh_uniforms && (this.postprocessing.bokeh_uniforms[t].value = this.effectController[t]);
        this.main_camera.setFocalLength(this.effectController[this.params.focal_length_name]), this.postprocessing.bokeh_uniforms.znear.value = this.main_camera.near, this.postprocessing.bokeh_uniforms.zfar.value = this.main_camera.far
    }, this.mainColorChange = function () {
        for (var t = 2; t <= 4; t++) this.scenes[t].changeMainColour(this.color[this.params.main_color_name])
    }, this.secondaryColorChange = function () {
        for (var t = 2; t <= 4; t++) this.scenes[t].changeSecondaryColour(this.color[this.params.secondary_color_name])
    }, this.nodeColorChange = function () {
        for (var t = 2; t <= 4; t++) this.scenes[t].changeMainNodeColour(this.color[this.params.spheres_color_name])
    }, this.color = {
        theme: [
            ["#153243", "#284B63", "#B4B8AB"],
            ["#FFAAAA", "#550000", "#801515"],
            ["#496C89", "#123552", "#042037"]
        ]
    }, this.color[this.params.color_theme_name] = 0, this.color[this.params.spheres_color_name] = "#d29c9c", this.color[this.params.secondary_color_name] = "#8333af", this.color[this.params.main_color_name] = "#966164";
    var r = this;
    this.controls = {}, this.controls[this.params.next_name] = function () {
        r.next()
    }, this.controls[this.params.play_name] = function () {
        r.run()
    }, this.controls[this.params.pause_name] = function () {
        r.pause()
    }, this.controls[this.params.stop_name] = function () {
        r.stop()
    }, this.controls[this.params.reset_name] = function () {
        r.reset()
    }, this.controls[this.params.next_animation_name] = function () {
        r.next()
    }, this.folder_general = this.gui.addFolder("General"), this.folder_color = this.gui.addFolder("Color Picker"), this.folder_control = this.gui.addFolder("Animation Control"), this.folder_general.add(this.effectController, this.params.focal_length_name, 16, 80, .01).onChange(this.matChanger.bind(this)), this.folder_general.add(this.qualityO, this.params.quality_name, 0, 3).step(1).onChange(this.qualityUpdate.bind(this)), this.folder_general.add(this.color, this.params.color_theme_name, 0, 2).step(1).onChange(this.themeColorChange.bind(this)), this.folder_color.addColor(this.color, this.params.main_color_name).onChange(this.mainColorChange.bind(this)), this.folder_color.addColor(this.color, this.params.secondary_color_name).onChange(this.secondaryColorChange.bind(this)), this.folder_color.addColor(this.color, this.params.spheres_color_name).onChange(this.nodeColorChange.bind(this)), this.folder_control.add(this.controls, this.params.next_name), this.folder_control.add(this.controls, this.params.play_name), this.folder_control.add(this.controls, this.params.pause_name), this.folder_control.add(this.controls, this.params.stop_name), this.folder_control.add(this.controls, this.params.reset_name), this.matChanger(), this.container.appendChild(this.gui.domElement), this.gui.domElement.setAttribute("id", this.params.gui_id), this.avisar_fin = !0, this.anim_playing = this.params.now_playing, this.render = function () {
        this.anim_frame = requestAnimationFrame(this.render.bind(this)), this.running = !0, this.stats.begin(), 0 == this.anim_playing ? (this.control.update(), u_time++, s_u_time = Math.sin(u_time), u_time > this.start_time[0][0] && u_time < this.start_time[0][1] && this.scene_set[0] === !1 && (this.CURRENT_SCENE = 0, this.scene_set[this.CURRENT_SCENE] = !0), u_time > this.start_time[1][0] && u_time < this.start_time[1][1] && this.scene_set[1] === !1 && (this.CURRENT_SCENE = 1, this.scene_set[this.CURRENT_SCENE] = !0), u_time > this.start_time[2][0] && u_time < this.start_time[2][1] && this.scene_set[2] === !1 && (this.CURRENT_SCENE = 2,
            this.scene_set[this.CURRENT_SCENE] = !0), u_time > this.start_time[3][0] && u_time < this.start_time[3][1] && this.scene_set[3] === !1 && (this.CURRENT_SCENE = 3, this.scene_set[this.CURRENT_SCENE] = !0, this.scenes[this.CURRENT_SCENE].setup(this.scenes[2].exporte())), u_time > this.start_time[4][0] && u_time < this.start_time[4][1] && this.scene_set[4] === !1 && (this.CURRENT_SCENE = 4, this.scene_set[this.CURRENT_SCENE] = !0, this.scenes[this.CURRENT_SCENE].setup(this.scenes[3].exporte(), this.params)), this.avisar_fin && u_time > this.start_time[4][1] && (this.avisar_fin = !1, console.log(u_time), i()), this.fx_scene.loop(), this.renderer.render(this.fx_scene.background_scene, this.fx_scene.background_camera), this.renderType(), this.renderer.render(this.fx_scene.foreground_scene, this.fx_scene.foreground_camera), this.stats.end()) : this.scenes[5].render(), this.loopCallback && this.loopCallback()
    }, this.renderGl = function () {
        0 === this.CURRENT_SCENE || 1 === this.CURRENT_SCENE ? (this.scenes[this.CURRENT_SCENE].scene.overrideMaterial = null, this.scenes[this.CURRENT_SCENE].loop(), this.renderer.render(this.scenes[this.CURRENT_SCENE].scene, this.main_camera)) : (this.scenes[this.CURRENT_SCENE].scene.overrideMaterial = null, this.scenes[this.CURRENT_SCENE].loop(), this.renderer.render(this.scenes[this.CURRENT_SCENE].scene, this.main_camera, this.postprocessing.rtTextureColor, !0), this.scenes[this.CURRENT_SCENE].scene.overrideMaterial = this.material_depth, this.renderer.render(this.scenes[this.CURRENT_SCENE].scene, this.main_camera, this.postprocessing.rtTextureDepth, !0), this.renderer.render(this.postprocessing.scene, this.postprocessing.camera))
    }, this.renderCanvas = function () {
        this.scenes[this.CURRENT_SCENE].scene.overrideMaterial = null, this.scenes[this.CURRENT_SCENE].loop(), this.renderer.render(this.scenes[this.CURRENT_SCENE].scene, this.main_camera)
    }, this.renderType = this.renderCanvas, this.loadFont = function (t) {
        var i = new THREE.FontLoader;
        i.load(this.params.electrolized_path, function (i) {
            electrolized_font = i, t.setupScenes(), e()
        })
    }, this.loadFont(this)
}, Animation01.prototype.run = function () {
    this.running || this.render()
}, Animation01.prototype.reset = function () {
    this.stop(), this.main_camera.position.z = 220, this.main_camera.position.y = 10, this.main_camera.position.x = 0, this.main_camera.rotation.set(0, 0, 0), this.avisar_fin = !0, u_time = 0;
    for (var t = this.scenes.length; t--;) this.CURRENT_SCENE = 1, this.scene_set[t] = !1;
    this.scenes[0].reset(), this.scenes[1].reset(), this.scenes[2].setup(this.params), this.scenes[5].reset(), this.run()
}, Animation01.prototype.isRunning = function () {
    return this.running
}, Animation01.prototype.stop = function () {
    this.running && (this.running = !this.running, cancelAnimationFrame(this.anim_frame))
}, Animation01.prototype.pause = function () {
    this.scenes[5].pause()
}, Animation01.prototype.updateZoom = function (t) {
    0 == this.anim_playing ? this.effectController[this.params.focal_length_name] = t : this.scenes[5].updateZoom(t), this.matChanger()
}, Animation01.prototype.updateQuality = function (t) {
    this.qualityO[this.params.quality_name] = t, this.qualityUpdate()
}, Animation01.prototype.updateTheme = function (t) {
    this.color[this.params.color_theme_name] = t, this.themeColorChange()
}, Animation01.prototype.updateColorMain = function (t) {
    this.color[this.params.main_color_name] = t, this.mainColorChange()
}, Animation01.prototype.updateColorSecondary = function (t) {
    this.color[this.params.secondary_color_name] = t, this.secondaryColorChange()
}, Animation01.prototype.updateColorSphere = function (t) {
    this.color[this.params.spheres_color_name] = t, this.nodeColorChange()
}, Animation01.prototype.setLoopCallback = function (t) {
    this.loopCallback = t
}, Animation01.prototype.updateCanvas = function () {
    this.height = this.container.clientHeight, this.width = this.container.clientWidth, this.aspectRatio = this.width / this.height, this.postprocessing.camera.aspect = this.aspectRatio, this.main_camera.aspect = this.aspectRatio, this.main_camera.updateProjectionMatrix(), this.postprocessing.camera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height), this.postprocessing.bokeh_uniforms.textureWidth.value = this.width, this.postprocessing.bokeh_uniforms.textureHeight.value = this.height, this.scenes[5].updateCanvas()
}, Animation01.prototype.version = function () {
    return this.version
}, Animation01.prototype.next = function () {
    this.anim_playing = 0 == this.anim_playing ? 1 : 0, 1 == this.anim_playing && this.scenes[5].start()
}, Animation01.prototype.changeColorMain = function (t) {
    this.scenes[5].changeColorMain(t), light.color.setStyle(t)
}, Animation01.prototype.changeColorSecondary = function (t) {
    this.scenes[5].changeColorSecondary(t)
}, Animation01.prototype.changeColorBackground = function (t) {
    this.scenes[5].changeColorBackground(t)
}, Animation01.prototype.changeSampleDistance = function (t) {
    this.scenes[5].changeSampleDistance(t)
}, Animation01.prototype.changeWaveFactor = function (t) {
    this.scenes[5].changeWaveFactor(t)
}, Animation01.prototype.expandTo = function (t) {
    this.scenes[5].expandTo(t)
}, Animation01.prototype.resizeTo = function (t) {
    this.scenes[5].resizeTo(t)
}, Animation01.prototype.toggleSelfieMode = function () {
    this.scenes[5].toggleSelfieMode()
}, Animation01.prototype.changeRuleTo = function (t) {
    this.scenes[5].changeRuleTo(t)
}, Animation01.prototype.changeThemeTo = function (t) {
    this.scenes[5].changeThemeTo(t)
};