function TextWithSubline(t, e) {
    var i = new THREE.Object3D,
        n = new THREE.TextGeometry(e, {
            font: t,
            size: 8,
            height: .5
        });
    n.computeBoundingBox();
    var s = new THREE.MeshBasicMaterial({
            color: "#ffffff",
            transparent: !0
        }),
        r = new THREE.Mesh(n, s),
        a = n.boundingBox.max.x;
    r.position.x = -a / 2, i.add(r);
    var n = new THREE.BoxGeometry(60, 1, .1),
        s = new THREE.MeshBasicMaterial({
            color: "#ff0000",
            transparent: !0
        }),
        o = new THREE.Mesh(n, s);
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
    var s = new THREE.MeshBasicMaterial({
            color: "#ffffff",
            transparent: !0
        }),
        r = new THREE.Mesh(n, s),
        a = n.boundingBox.max.x;
    return r.position.x = -a / 2, i.add(r), i
}

function PointsOnSphere(t) {
    for (var e = [], i = Math.PI * (3 - Math.sqrt(5)), n = 2 / t, s = 0, r = 0, a = 0, o = 0, h = 0, l = 0; t > l; l++) r = l * n - 1 + n / 2, o = Math.sqrt(1 - r * r), h = l * i, s = Math.cos(h) * o, a = Math.sin(h) * o, e.push(new THREE.Vector3(700 * s, 700 * r, 700 * a));
    return e
}

function fibonacci_sphere(t) {
    var e = 1;
    randomize = !1, randomize && (e = Math.random() * t), points = [], offset = 2 / t, increment = Math.PI * (3 - Math.sqrt(5));
    for (var i = 0; t > i; i++) y = i * offset - 1 + offset / 2, r = Math.sqrt(1 - Math.pow(y, 2)), phi = (i + e) % t * increment, x = Math.cos(phi) * r, z = Math.sin(phi) * r, points.push(new THREE.Vector3(x, y, z));
    return points
}! function () {
    function t(t) {
        this.object = t, this.target = new THREE.Vector3, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -(1 / 0), this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .25;
        var e, i, n = this,
            s = 1e-6,
            r = 0,
            a = 0,
            o = 1,
            h = new THREE.Vector3,
            l = !1;
        this.getPolarAngle = function () {
            return i
        }, this.getAzimuthalAngle = function () {
            return e
        }, this.rotateLeft = function (t) {
            a -= t
        }, this.rotateUp = function (t) {
            r -= t
        }, this.panLeft = function () {
            var t = new THREE.Vector3;
            return function (e) {
                var i = this.object.matrix.elements;
                t.set(i[0], i[1], i[2]), t.multiplyScalar(-e), h.add(t)
            }
        }(), this.panUp = function () {
            var t = new THREE.Vector3;
            return function (e) {
                var i = this.object.matrix.elements;
                t.set(i[4], i[5], i[6]), t.multiplyScalar(e), h.add(t)
            }
        }(), this.pan = function (t, e, i, s) {
            if (n.object instanceof THREE.PerspectiveCamera) {
                var r = n.object.position,
                    a = r.clone().sub(n.target),
                    o = a.length();
                o *= Math.tan(n.object.fov / 2 * Math.PI / 180), n.panLeft(2 * t * o / s), n.panUp(2 * e * o / s)
            } else n.object instanceof THREE.OrthographicCamera ? (n.panLeft(t * (n.object.right - n.object.left) / i), n.panUp(e * (n.object.top - n.object.bottom) / s)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")
        }, this.dollyIn = function (t) {
            n.object instanceof THREE.PerspectiveCamera ? o /= t : n.object instanceof THREE.OrthographicCamera ? (n.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * t)), n.object.updateProjectionMatrix(), l = !0) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
        }, this.dollyOut = function (t) {
            n.object instanceof THREE.PerspectiveCamera ? o *= t : n.object instanceof THREE.OrthographicCamera ? (n.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / t)), n.object.updateProjectionMatrix(), l = !0) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
        }, this.update = function () {
            var n = new THREE.Vector3,
                c = (new THREE.Quaternion).setFromUnitVectors(t.up, new THREE.Vector3(0, 1, 0)),
                u = c.clone().inverse(),
                d = new THREE.Vector3,
                _ = new THREE.Quaternion;
            return function () {
                var t = this.object.position;
                n.copy(t).sub(this.target), n.applyQuaternion(c), e = Math.atan2(n.x, n.z), i = Math.atan2(Math.sqrt(n.x * n.x + n.z * n.z), n.y), e += a, i += r, e = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, e)), i = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, i)), i = Math.max(s, Math.min(Math.PI - s, i));
                var p = n.length() * o;
                return p = Math.max(this.minDistance, Math.min(this.maxDistance, p)), this.target.add(h), n.x = p * Math.sin(i) * Math.sin(e), n.y = p * Math.cos(i), n.z = p * Math.sin(i) * Math.cos(e), n.applyQuaternion(u), t.copy(this.target).add(n), this.object.lookAt(this.target), this.enableDamping === !0 ? (a *= 1 - this.dampingFactor, r *= 1 - this.dampingFactor) : (a = 0, r = 0), o = 1, h.set(0, 0, 0), l || d.distanceToSquared(this.object.position) > s || 8 * (1 - _.dot(this.object.quaternion)) > s ? (d.copy(this.object.position), _.copy(this.object.quaternion), l = !1, !0) : !1
            }
        }()
    }
    THREE.OrbitControls = function (e, i) {
        function n(t, e) {
            var i = m.domElement === document ? m.domElement.body : m.domElement;
            f.pan(t, e, i.clientWidth, i.clientHeight)
        }

        function s() {
            return 2 * Math.PI / 60 / 60 * m.autoRotateSpeed
        }

        function r() {
            return Math.pow(.95, m.zoomSpeed)
        }

        function a(t) {
            if (m.enabled !== !1) {
                if (t.preventDefault(), t.button === m.mouseButtons.ORBIT) {
                    if (m.enableRotate === !1) return;
                    k = S.ROTATE, g.set(t.clientX, t.clientY)
                } else if (t.button === m.mouseButtons.ZOOM) {
                    if (m.enableZoom === !1) return;
                    k = S.DOLLY, T.set(t.clientX, t.clientY)
                } else if (t.button === m.mouseButtons.PAN) {
                    if (m.enablePan === !1) return;
                    k = S.PAN, y.set(t.clientX, t.clientY)
                }
                k !== S.NONE && (document.addEventListener("mousemove", o, !1), document.addEventListener("mouseup", h, !1), m.dispatchEvent(R))
            }
        }

        function o(t) {
            if (m.enabled !== !1) {
                t.preventDefault();
                var e = m.domElement === document ? m.domElement.body : m.domElement;
                if (k === S.ROTATE) {
                    if (m.enableRotate === !1) return;
                    v.set(t.clientX, t.clientY), b.subVectors(v, g), f.rotateLeft(2 * Math.PI * b.x / e.clientWidth * m.rotateSpeed), f.rotateUp(2 * Math.PI * b.y / e.clientHeight * m.rotateSpeed), g.copy(v)
                } else if (k === S.DOLLY) {
                    if (m.enableZoom === !1) return;
                    E.set(t.clientX, t.clientY), C.subVectors(E, T), C.y > 0 ? f.dollyIn(r()) : C.y < 0 && f.dollyOut(r()), T.copy(E)
                } else if (k === S.PAN) {
                    if (m.enablePan === !1) return;
                    x.set(t.clientX, t.clientY), w.subVectors(x, y), n(w.x, w.y), y.copy(x)
                }
                k !== S.NONE && m.update()
            }
        }

        function h() {
            m.enabled !== !1 && (document.removeEventListener("mousemove", o, !1), document.removeEventListener("mouseup", h, !1), m.dispatchEvent(A), k = S.NONE)
        }

        function l(t) {
            if (m.enabled !== !1 && m.enableZoom !== !1 && k === S.NONE) {
                t.preventDefault(), t.stopPropagation();
                var e = 0;
                void 0 !== t.wheelDelta ? e = t.wheelDelta : void 0 !== t.detail && (e = -t.detail), e > 0 ? f.dollyOut(r()) : 0 > e && f.dollyIn(r()), m.update(), m.dispatchEvent(R), m.dispatchEvent(A)
            }
        }

        function c(t) {
            if (m.enabled !== !1 && m.enableKeys !== !1 && m.enablePan !== !1) switch (t.keyCode) {
                case m.keys.UP:
                    n(0, m.keyPanSpeed), m.update();
                    break;
                case m.keys.BOTTOM:
                    n(0, -m.keyPanSpeed), m.update();
                    break;
                case m.keys.LEFT:
                    n(m.keyPanSpeed, 0), m.update();
                    break;
                case m.keys.RIGHT:
                    n(-m.keyPanSpeed, 0), m.update()
            }
        }

        function u(t) {
            if (m.enabled !== !1) {
                switch (t.touches.length) {
                    case 1:
                        if (m.enableRotate === !1) return;
                        k = S.TOUCH_ROTATE, g.set(t.touches[0].pageX, t.touches[0].pageY);
                        break;
                    case 2:
                        if (m.enableZoom === !1) return;
                        k = S.TOUCH_DOLLY;
                        var e = t.touches[0].pageX - t.touches[1].pageX,
                            i = t.touches[0].pageY - t.touches[1].pageY,
                            n = Math.sqrt(e * e + i * i);
                        T.set(0, n);
                        break;
                    case 3:
                        if (m.enablePan === !1) return;
                        k = S.TOUCH_PAN, y.set(t.touches[0].pageX, t.touches[0].pageY);
                        break;
                    default:
                        k = S.NONE
                }
                k !== S.NONE && m.dispatchEvent(R)
            }
        }

        function d(t) {
            if (m.enabled !== !1) {
                t.preventDefault(), t.stopPropagation();
                var e = m.domElement === document ? m.domElement.body : m.domElement;
                switch (t.touches.length) {
                    case 1:
                        if (m.enableRotate === !1) return;
                        if (k !== S.TOUCH_ROTATE) return;
                        v.set(t.touches[0].pageX, t.touches[0].pageY), b.subVectors(v, g), f.rotateLeft(2 * Math.PI * b.x / e.clientWidth * m.rotateSpeed), f.rotateUp(2 * Math.PI * b.y / e.clientHeight * m.rotateSpeed), g.copy(v), m.update();
                        break;
                    case 2:
                        if (m.enableZoom === !1) return;
                        if (k !== S.TOUCH_DOLLY) return;
                        var i = t.touches[0].pageX - t.touches[1].pageX,
                            s = t.touches[0].pageY - t.touches[1].pageY,
                            a = Math.sqrt(i * i + s * s);
                        E.set(0, a), C.subVectors(E, T), C.y > 0 ? f.dollyOut(r()) : C.y < 0 && f.dollyIn(r()), T.copy(E), m.update();
                        break;
                    case 3:
                        if (m.enablePan === !1) return;
                        if (k !== S.TOUCH_PAN) return;
                        x.set(t.touches[0].pageX, t.touches[0].pageY), w.subVectors(x, y), n(w.x, w.y), y.copy(x), m.update();
                        break;
                    default:
                        k = S.NONE
                }
            }
        }

        function _() {
            m.enabled !== !1 && (m.dispatchEvent(A), k = S.NONE)
        }

        function p(t) {
            t.preventDefault()
        }
        var f = new t(e);
        this.domElement = void 0 !== i ? i : document, Object.defineProperty(this, "constraint", {
            get: function () {
                return f
            }
        }), this.getPolarAngle = function () {
            return f.getPolarAngle()
        }, this.getAzimuthalAngle = function () {
            return f.getAzimuthalAngle()
        }, this.enabled = !0, this.center = this.target, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            BOTTOM: 40
        }, this.mouseButtons = {
            ORBIT: THREE.MOUSE.LEFT,
            ZOOM: THREE.MOUSE.MIDDLE,
            PAN: THREE.MOUSE.RIGHT
        };
        var m = this,
            g = new THREE.Vector2,
            v = new THREE.Vector2,
            b = new THREE.Vector2,
            y = new THREE.Vector2,
            x = new THREE.Vector2,
            w = new THREE.Vector2,
            T = new THREE.Vector2,
            E = new THREE.Vector2,
            C = new THREE.Vector2,
            S = {
                NONE: -1,
                ROTATE: 0,
                DOLLY: 1,
                PAN: 2,
                TOUCH_ROTATE: 3,
                TOUCH_DOLLY: 4,
                TOUCH_PAN: 5
            },
            k = S.NONE;
        this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom;
        var P = {
                type: "change"
            },
            R = {
                type: "start"
            },
            A = {
                type: "end"
            };
        this.update = function () {
            this.autoRotate && k === S.NONE && f.rotateLeft(s()), f.update() === !0 && this.dispatchEvent(P)
        }, this.reset = function () {
            k = S.NONE, this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(P), this.update()
        }, this.dispose = function () {
            this.domElement.removeEventListener("contextmenu", p, !1), this.domElement.removeEventListener("mousedown", a, !1), this.domElement.removeEventListener("mousewheel", l, !1), this.domElement.removeEventListener("MozMousePixelScroll", l, !1), this.domElement.removeEventListener("touchstart", u, !1), this.domElement.removeEventListener("touchend", _, !1), this.domElement.removeEventListener("touchmove", d, !1), document.removeEventListener("mousemove", o, !1), document.removeEventListener("mouseup", h, !1), window.removeEventListener("keydown", c, !1)
        }, this.domElement.addEventListener("contextmenu", p, !1), this.domElement.addEventListener("mousedown", a, !1), this.domElement.addEventListener("mousewheel", l, !1), this.domElement.addEventListener("MozMousePixelScroll", l, !1), this.domElement.addEventListener("touchstart", u, !1), this.domElement.addEventListener("touchend", _, !1), this.domElement.addEventListener("touchmove", d, !1), window.addEventListener("keydown", c, !1), this.update()
    }, THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.OrbitControls.prototype.constructor = THREE.OrbitControls, Object.defineProperties(THREE.OrbitControls.prototype, {
        object: {
            get: function () {
                return this.constraint.object
            }
        },
        target: {
            get: function () {
                return this.constraint.target
            },
            set: function (t) {
                console.warn("THREE.OrbitControls: target is now immutable. Use target.set() instead."), this.constraint.target.copy(t)
            }
        },
        minDistance: {
            get: function () {
                return this.constraint.minDistance
            },
            set: function (t) {
                this.constraint.minDistance = t
            }
        },
        maxDistance: {
            get: function () {
                return this.constraint.maxDistance
            },
            set: function (t) {
                this.constraint.maxDistance = t
            }
        },
        minZoom: {
            get: function () {
                return this.constraint.minZoom
            },
            set: function (t) {
                this.constraint.minZoom = t
            }
        },
        maxZoom: {
            get: function () {
                return this.constraint.maxZoom
            },
            set: function (t) {
                this.constraint.maxZoom = t
            }
        },
        minPolarAngle: {
            get: function () {
                return this.constraint.minPolarAngle
            },
            set: function (t) {
                this.constraint.minPolarAngle = t
            }
        },
        maxPolarAngle: {
            get: function () {
                return this.constraint.maxPolarAngle
            },
            set: function (t) {
                this.constraint.maxPolarAngle = t
            }
        },
        minAzimuthAngle: {
            get: function () {
                return this.constraint.minAzimuthAngle
            },
            set: function (t) {
                this.constraint.minAzimuthAngle = t
            }
        },
        maxAzimuthAngle: {
            get: function () {
                return this.constraint.maxAzimuthAngle
            },
            set: function (t) {
                this.constraint.maxAzimuthAngle = t
            }
        },
        enableDamping: {
            get: function () {
                return this.constraint.enableDamping
            },
            set: function (t) {
                this.constraint.enableDamping = t
            }
        },
        dampingFactor: {
            get: function () {
                return this.constraint.dampingFactor
            },
            set: function (t) {
                this.constraint.dampingFactor = t
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
                return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), !this.constraint.enableDamping
            },
            set: function (t) {
                console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), this.constraint.enableDamping = !t
            }
        },
        dynamicDampingFactor: {
            get: function () {
                return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.constraint.dampingFactor
            },
            set: function (t) {
                console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.constraint.dampingFactor = t
            }
        }
    })
}();
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
                for (var s = 0, r = e.length; r > s && !(s in e && i.call(n, e[s], s) === this.BREAK); s++);
            else
                for (s in e)
                    if (i.call(n, e[s], s) === this.BREAK) break
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
        s = {
            makeSelectable: function (t, e) {
                void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function () {
                    return !1
                } : function () {}, t.style.MozUserSelect = e ? "auto" : "none", t.style.KhtmlUserSelect = e ? "auto" : "none", t.unselectable = e ? "on" : "off")
            },
            makeFullscreen: function (e, i, n) {
                t.isUndefined(i) && (i = !0), t.isUndefined(n) && (n = !0), e.style.position = "absolute", i && (e.style.left = 0, e.style.right = 0), n && (e.style.top = 0, e.style.bottom = 0)
            },
            fakeEvent: function (e, n, s, r) {
                var s = s || {},
                    a = i[n];
                if (!a) throw Error("Event type " + n + " not supported.");
                var o = document.createEvent(a);
                switch (a) {
                    case "MouseEvents":
                        o.initMouseEvent(n, s.bubbles || !1, s.cancelable || !0, window, s.clickCount || 1, 0, 0, s.x || s.clientX || 0, s.y || s.clientY || 0, !1, !1, !1, !1, 0, null);
                        break;
                    case "KeyboardEvents":
                        a = o.initKeyboardEvent || o.initKeyEvent, t.defaults(s, {
                            cancelable: !0,
                            ctrlKey: !1,
                            altKey: !1,
                            shiftKey: !1,
                            metaKey: !1,
                            keyCode: void 0,
                            charCode: void 0
                        }), a(n, s.bubbles || !1, s.cancelable, window, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.keyCode, s.charCode);
                        break;
                    default:
                        o.initEvent(n, s.bubbles || !1, s.cancelable || !0)
                }
                t.defaults(o, r), e.dispatchEvent(o)
            },
            bind: function (t, e, i, n) {
                return t.addEventListener ? t.addEventListener(e, i, n || !1) : t.attachEvent && t.attachEvent("on" + e, i), s
            },
            unbind: function (t, e, i, n) {
                return t.removeEventListener ? t.removeEventListener(e, i, n || !1) : t.detachEvent && t.detachEvent("on" + e, i), s
            },
            addClass: function (t, e) {
                if (void 0 === t.className) t.className = e;
                else if (t.className !== e) {
                    var i = t.className.split(/ +/); - 1 == i.indexOf(e) && (i.push(e), t.className = i.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                }
                return s
            },
            removeClass: function (t, e) {
                if (e) {
                    if (void 0 !== t.className)
                        if (t.className === e) t.removeAttribute("class");
                        else {
                            var i = t.className.split(/ +/),
                                n = i.indexOf(e); - 1 != n && (i.splice(n, 1), t.className = i.join(" "))
                        }
                } else t.className = void 0;
                return s
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
    return s
}(dat.utils.common), dat.controllers.OptionController = function (t, e, i) {
    var n = function (t, s, r) {
        n.superclass.call(this, t, s);
        var a = this;
        if (this.__select = document.createElement("select"), i.isArray(r)) {
            var o = {};
            i.each(r, function (t) {
                o[t] = t
            }), r = o
        }
        i.each(r, function (t, e) {
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
    var i = function (t, n, s) {
        i.superclass.call(this, t, n), s = s || {}, this.__min = s.min, this.__max = s.max, this.__step = s.step, t = this.__impliedStep = e.isUndefined(this.__step) ? 0 == this.initialValue ? 1 : Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__step, t = t.toString(), this.__precision = t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0
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
    var n = function (t, s, r) {
        function a() {
            var t = parseFloat(c.__input.value);
            i.isNaN(t) || c.setValue(t)
        }

        function o(t) {
            var e = l - t.clientY;
            c.setValue(c.getValue() + e * c.__impliedStep), l = t.clientY
        }

        function h() {
            e.unbind(window, "mousemove", o), e.unbind(window, "mouseup", h)
        }
        this.__truncationSuspended = !1, n.superclass.call(this, t, s, r);
        var l, c = this;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "change", a), e.bind(this.__input, "blur", function () {
            a(), c.__onFinishChange && c.__onFinishChange.call(c, c.getValue())
        }), e.bind(this.__input, "mousedown", function (t) {
            e.bind(window, "mousemove", o), e.bind(window, "mouseup", h), l = t.clientY
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
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.common), dat.controllers.NumberControllerSlider = function (t, e, i, n, s) {
    var r = function (t, i, n, s, a) {
        function o(t) {
            t.preventDefault();
            var i = e.getOffset(l.__background),
                n = e.getWidth(l.__background);
            return l.setValue(l.__min + (l.__max - l.__min) * ((t.clientX - i.left) / (i.left + n - i.left))), !1
        }

        function h() {
            e.unbind(window, "mousemove", o), e.unbind(window, "mouseup", h), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue())
        }
        r.superclass.call(this, t, i, {
            min: n,
            max: s,
            step: a
        });
        var l = this;
        this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), e.bind(this.__background, "mousedown", function (t) {
            e.bind(window, "mousemove", o), e.bind(window, "mouseup", h), o(t)
        }), e.addClass(this.__background, "slider"), e.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
    };
    return r.superclass = t, r.useDefaultStyles = function () {
        i.inject(s)
    }, n.extend(r.prototype, t.prototype, {
        updateDisplay: function () {
            return this.__foreground.style.width = (this.getValue() - this.__min) / (this.__max - this.__min) * 100 + "%", r.superclass.prototype.updateDisplay.call(this)
        }
    }), r
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"), dat.controllers.FunctionController = function (t, e, i) {
    var n = function (t, i, s) {
        n.superclass.call(this, t, i);
        var r = this;
        this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === s ? "Fire" : s, e.bind(this.__button, "click", function (t) {
            return t.preventDefault(), r.fire(), !1
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
        var s = this;
        this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), e.bind(this.__checkbox, "change", function () {
            s.setValue(!s.__prev)
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
    var i, n, s = [{
        litmus: e.isString,
        conversions: {
            THREE_CHAR_HEX: {
                read: function (t) {
                    return t = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i), null === t ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString())
                    }
                },
                write: t
            },
            SIX_CHAR_HEX: {
                read: function (t) {
                    return t = t.match(/^#([A-F0-9]{6})$/i), null === t ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + t[1].toString())
                    }
                },
                write: t
            },
            CSS_RGB: {
                read: function (t) {
                    return t = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/), null === t ? !1 : {
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
                    return t = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/), null === t ? !1 : {
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
                    return 3 != t.length ? !1 : {
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
                    return 4 != t.length ? !1 : {
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
                    return e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) && e.isNumber(t.a) ? {
                        space: "RGB",
                        r: t.r,
                        g: t.g,
                        b: t.b,
                        a: t.a
                    } : !1
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
                    return e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) ? {
                        space: "RGB",
                        r: t.r,
                        g: t.g,
                        b: t.b
                    } : !1
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
                    return e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) && e.isNumber(t.a) ? {
                        space: "HSV",
                        h: t.h,
                        s: t.s,
                        v: t.v,
                        a: t.a
                    } : !1
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
                    return e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) ? {
                        space: "HSV",
                        h: t.h,
                        s: t.s,
                        v: t.v
                    } : !1
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
        return e.each(s, function (s) {
            return s.litmus(t) ? (e.each(s.conversions, function (s, r) {
                return i = s.read(t), n === !1 && i !== !1 ? (n = i, i.conversionName = r, i.conversion = s, e.BREAK) : void 0
            }), e.BREAK) : void 0
        }), n
    }
}(dat.color.toString, dat.utils.common), dat.GUI = dat.gui.GUI = function (t, e, i, n, s, r, a, o, h, l, c, u, d, _, p) {
    function f(t, e, i, r) {
        if (void 0 === e[i]) throw Error("Object " + e + ' has no property "' + i + '"' + JSON.stringify(e));
        r.color ? e = new c(e, i) : (e = [e, i].concat(r.factoryArgs), e = n.apply(t, e)), r.before instanceof s && (r.before = r.before.__li), v(t, e), _.addClass(e.domElement, "c"), i = document.createElement("span"), _.addClass(i, "property-name"), i.innerHTML = e.property;
        var a = document.createElement("div");
        return a.appendChild(i), a.appendChild(e.domElement), r = m(t, a, r.before), _.addClass(r, N.CLASS_CONTROLLER_ROW), _.addClass(r, typeof e.getValue()), g(t, r, e), t.__controllers.push(e), e
    }

    function m(t, e, i) {
        var n = document.createElement("li");
        return e && n.appendChild(e), i ? t.__ul.insertBefore(n, params.before) : t.__ul.appendChild(n), t.onResize(), n
    }

    function g(t, e, i) {
        if (i.__li = e, i.__gui = t, p.extend(i, {
                options: function (e) {
                    return arguments.length > 1 ? (i.remove(), f(t, i.object, i.property, {
                        before: i.__li.nextElementSibling,
                        factoryArgs: [p.toArray(arguments)]
                    })) : p.isArray(e) || p.isObject(e) ? (i.remove(), f(t, i.object, i.property, {
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
            }), i instanceof h) {
            var n = new o(i.object, i.property, {
                min: i.__min,
                max: i.__max,
                step: i.__step
            });
            p.each(["updateDisplay", "onChange", "onFinishChange"], function (t) {
                var e = i[t],
                    s = n[t];
                i[t] = n[t] = function () {
                    var t = Array.prototype.slice.call(arguments);
                    return e.apply(i, t), s.apply(n, t)
                }
            }), _.addClass(e, "has-slider"), i.domElement.insertBefore(n.domElement, i.domElement.firstElementChild)
        } else if (i instanceof o) {
            var s = function (e) {
                return p.isNumber(i.__min) && p.isNumber(i.__max) ? (i.remove(), f(t, i.object, i.property, {
                    before: i.__li.nextElementSibling,
                    factoryArgs: [i.__min, i.__max, i.__step]
                })) : e
            };
            i.min = p.compose(s, i.min), i.max = p.compose(s, i.max)
        } else i instanceof r ? (_.bind(e, "click", function () {
            _.fakeEvent(i.__checkbox, "click")
        }), _.bind(i.__checkbox, "click", function (t) {
            t.stopPropagation()
        })) : i instanceof a ? (_.bind(e, "click", function () {
            _.fakeEvent(i.__button, "click")
        }), _.bind(e, "mouseover", function () {
            _.addClass(i.__button, "hover")
        }), _.bind(e, "mouseout", function () {
            _.removeClass(i.__button, "hover")
        })) : i instanceof c && (_.addClass(e, "color"), i.updateDisplay = p.compose(function (t) {
            return e.style.borderLeftColor = i.__color.toString(), t
        }, i.updateDisplay), i.updateDisplay());
        i.setValue = p.compose(function (e) {
            return t.getRoot().__preset_select && i.isModified() && E(t.getRoot(), !0), e
        }, i.setValue)
    }

    function v(t, e) {
        var i = t.getRoot(),
            n = i.__rememberedObjects.indexOf(e.object);
        if (-1 != n) {
            var s = i.__rememberedObjectIndecesToControllers[n];
            if (void 0 === s && (s = {}, i.__rememberedObjectIndecesToControllers[n] = s), s[e.property] = e, i.load && i.load.remembered) {
                if (i = i.load.remembered, i[t.preset]) i = i[t.preset];
                else {
                    if (!i[k]) return;
                    i = i[k]
                }
                i[n] && void 0 !== i[n][e.property] && (n = i[n][e.property], e.initialValue = n, e.setValue(n))
            }
        }
    }

    function b(t) {
        var e = t.__save_row = document.createElement("li");
        _.addClass(t.domElement, "has-save"), t.__ul.insertBefore(e, t.__ul.firstChild), _.addClass(e, "save-row");
        var i = document.createElement("span");
        i.innerHTML = "&nbsp;", _.addClass(i, "button gears");
        var n = document.createElement("span");
        n.innerHTML = "Save", _.addClass(n, "button"), _.addClass(n, "save");
        var s = document.createElement("span");
        s.innerHTML = "New", _.addClass(s, "button"), _.addClass(s, "save-as");
        var r = document.createElement("span");
        r.innerHTML = "Revert", _.addClass(r, "button"), _.addClass(r, "revert");
        var a = t.__preset_select = document.createElement("select");
        if (t.load && t.load.remembered ? p.each(t.load.remembered, function (e, i) {
                T(t, i, i == t.preset)
            }) : T(t, k, !1), _.bind(a, "change", function () {
                for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].innerHTML = t.__preset_select[e].value;
                t.preset = this.value
            }), e.appendChild(a), e.appendChild(i), e.appendChild(n), e.appendChild(s), e.appendChild(r), S) {
            var e = document.getElementById("dg-save-locally"),
                o = document.getElementById("dg-local-explain");
            e.style.display = "block", e = document.getElementById("dg-local-storage"), "true" === localStorage.getItem(document.location.href + ".isLocal") && e.setAttribute("checked", "checked");
            var h = function () {
                o.style.display = t.useLocalStorage ? "block" : "none"
            };
            h(), _.bind(e, "change", function () {
                t.useLocalStorage = !t.useLocalStorage, h()
            })
        }
        var l = document.getElementById("dg-new-constructor");
        _.bind(l, "keydown", function (t) {
            t.metaKey && (67 === t.which || 67 == t.keyCode) && R.hide()
        }), _.bind(i, "click", function () {
            l.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2), R.show(), l.focus(),
                l.select()
        }), _.bind(n, "click", function () {
            t.save()
        }), _.bind(s, "click", function () {
            var e = prompt("Enter a new preset name.");
            e && t.saveAs(e)
        }), _.bind(r, "click", function () {
            t.revert()
        })
    }

    function y(t) {
        function e(e) {
            return e.preventDefault(), s = e.clientX, _.addClass(t.__closeButton, N.CLASS_DRAG), _.bind(window, "mousemove", i), _.bind(window, "mouseup", n), !1
        }

        function i(e) {
            return e.preventDefault(), t.width += s - e.clientX, t.onResize(), s = e.clientX, !1
        }

        function n() {
            _.removeClass(t.__closeButton, N.CLASS_DRAG), _.unbind(window, "mousemove", i), _.unbind(window, "mouseup", n)
        }
        t.__resize_handle = document.createElement("div"), p.extend(t.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute"
        });
        var s;
        _.bind(t.__resize_handle, "mousedown", e), _.bind(t.__closeButton, "mousedown", e), t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild)
    }

    function x(t, e) {
        t.domElement.style.width = e + "px", t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px"), t.__closeButton && (t.__closeButton.style.width = e + "px")
    }

    function w(t, e) {
        var i = {};
        return p.each(t.__rememberedObjects, function (n, s) {
            var r = {};
            p.each(t.__rememberedObjectIndecesToControllers[s], function (t, i) {
                r[i] = e ? t.initialValue : t.getValue()
            }), i[s] = r
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
    var S, k = "Default";
    try {
        S = "localStorage" in window && null !== window.localStorage
    } catch (P) {
        S = !1
    }
    var R, A, O = !0,
        M = !1,
        D = [],
        N = function (t) {
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
            this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), _.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], t = t || {}, t = p.defaults(t, {
                autoPlace: !0,
                width: N.DEFAULT_WIDTH
            }), t = p.defaults(t, {
                resizable: t.autoPlace,
                hideable: t.autoPlace
            }), p.isUndefined(t.load) ? t.load = {
                preset: k
            } : t.preset && (t.load.preset = t.preset), p.isUndefined(t.parent) && t.hideable && D.push(this), t.resizable = p.isUndefined(t.parent) && t.resizable, t.autoPlace && p.isUndefined(t.scrollable) && (t.scrollable = !0);
            var s = S && "true" === localStorage.getItem(document.location.href + ".isLocal");
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
                            t.closed = e, t.closed ? _.addClass(n.__ul, N.CLASS_CLOSED) : _.removeClass(n.__ul, N.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = e ? N.TEXT_OPEN : N.TEXT_CLOSED)
                        }
                    },
                    load: {
                        get: function () {
                            return t.load
                        }
                    },
                    useLocalStorage: {
                        get: function () {
                            return s
                        },
                        set: function (t) {
                            S && ((s = t) ? _.bind(window, "unload", e) : _.unbind(window, "unload", e), localStorage.setItem(document.location.href + ".isLocal", t))
                        }
                    }
                }), p.isUndefined(t.parent)) {
                if (t.closed = !1, _.addClass(this.domElement, N.CLASS_MAIN), _.makeSelectable(this.domElement, !1), S && s) {
                    n.useLocalStorage = !0;
                    var r = localStorage.getItem(document.location.href + ".gui");
                    r && (t.load = JSON.parse(r))
                }
                this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = N.TEXT_CLOSED, _.addClass(this.__closeButton, N.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), _.bind(this.__closeButton, "click", function () {
                    n.closed = !n.closed
                })
            } else {
                void 0 === t.closed && (t.closed = !0);
                var a = document.createTextNode(t.name);
                _.addClass(a, "controller-name"), r = m(n, a), _.addClass(this.__ul, N.CLASS_CLOSED), _.addClass(r, "title"), _.bind(r, "click", function (t) {
                    return t.preventDefault(), n.closed = !n.closed, !1
                }), t.closed || (this.closed = !1)
            }
            t.autoPlace && (p.isUndefined(t.parent) && (O && (A = document.createElement("div"), _.addClass(A, "dg"), _.addClass(A, N.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(A), O = !1), A.appendChild(this.domElement), _.addClass(this.domElement, N.CLASS_AUTO_PLACE)), this.parent || x(n, t.width)), _.bind(window, "resize", function () {
                n.onResize()
            }), _.bind(this.__ul, "webkitTransitionEnd", function () {
                n.onResize()
            }), _.bind(this.__ul, "transitionend", function () {
                n.onResize()
            }), _.bind(this.__ul, "oTransitionEnd", function () {
                n.onResize()
            }), this.onResize(), t.resizable && y(this), n.getRoot(), t.parent || i()
        };
    return N.toggleHide = function () {
        M = !M, p.each(D, function (t) {
            t.domElement.style.zIndex = M ? -999 : 999, t.domElement.style.opacity = M ? 0 : 1
        })
    }, N.CLASS_AUTO_PLACE = "a", N.CLASS_AUTO_PLACE_CONTAINER = "ac", N.CLASS_MAIN = "main", N.CLASS_CONTROLLER_ROW = "cr", N.CLASS_TOO_TALL = "taller-than-window", N.CLASS_CLOSED = "closed", N.CLASS_CLOSE_BUTTON = "close-button", N.CLASS_DRAG = "drag", N.DEFAULT_WIDTH = 245, N.TEXT_CLOSED = "Close Controls", N.TEXT_OPEN = "Open Controls", _.bind(window, "keydown", function (t) {
        "text" !== document.activeElement.type && (72 === t.which || 72 == t.keyCode) && N.toggleHide()
    }, !1), p.extend(N.prototype, {
        add: function (t, e) {
            return f(this, t, e, {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
            })
        },
        addColor: function (t, e) {
            return f(this, t, e, {
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
            return e.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed, e.load = this.load.folders[t]), e = new N(e), this.__folders[t] = e, t = m(this, e.domElement), _.addClass(t, "folder"), e
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
                var e = _.getOffset(t.__ul).top,
                    i = 0;
                p.each(t.__ul.childNodes, function (e) {
                    t.autoPlace && e === t.__save_row || (i += _.getHeight(e))
                }), window.innerHeight - e - 20 < i ? (_.addClass(t.domElement, N.CLASS_TOO_TALL), t.__ul.style.height = window.innerHeight - e - 20 + "px") : (_.removeClass(t.domElement, N.CLASS_TOO_TALL), t.__ul.style.height = "auto")
            }
            t.__resize_handle && p.defer(function () {
                t.__resize_handle.style.height = t.__ul.offsetHeight + "px"
            }), t.__closeButton && (t.__closeButton.style.width = t.width + "px")
        },
        remember: function () {
            if (p.isUndefined(R) && (R = new d, R.domElement.innerHTML = e), this.parent) throw Error("You can only call remember on a top level GUI.");
            var t = this;
            p.each(Array.prototype.slice.call(arguments), function (e) {
                0 == t.__rememberedObjects.length && b(t), -1 == t.__rememberedObjects.indexOf(e) && t.__rememberedObjects.push(e)
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
            this.load.remembered || (this.load.remembered = {}, this.load.remembered[k] = w(this, !0)), this.load.remembered[t] = w(this), this.preset = t, T(this, t, !0)
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
    }), N
}(dat.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n", dat.controllers.factory = function (t, e, i, n, s, r, a) {
    return function (o, h, l, c) {
        var u = o[h];
        return a.isArray(l) || a.isObject(l) ? new t(o, h, l) : a.isNumber(u) ? a.isNumber(l) && a.isNumber(c) ? new i(o, h, l, c) : new e(o, h, {
            min: l,
            max: c
        }) : a.isString(u) ? new n(o, h) : a.isFunction(u) ? new s(o, h, "") : a.isBoolean(u) ? new r(o, h) : void 0
    }
}(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function (t, e, i) {
    var n = function (t, i) {
        function s() {
            r.setValue(r.__input.value)
        }
        n.superclass.call(this, t, i);
        var r = this;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "keyup", s), e.bind(this.__input, "change", s), e.bind(this.__input, "blur", function () {
            r.__onFinishChange && r.__onFinishChange.call(r, r.getValue())
        }), e.bind(this.__input, "keydown", function (t) {
            13 === t.keyCode && this.blur()
        }), this.updateDisplay(), this.domElement.appendChild(this.__input)
    };
    return n.superclass = t, i.extend(n.prototype, t.prototype, {
        updateDisplay: function () {
            return e.isActive(this.__input) || (this.__input.value = this.getValue()), n.superclass.prototype.updateDisplay.call(this)
        }
    }), n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController, dat.controllers.ColorController = function (t, e, i, n, s) {
    function r(t, e, i, n) {
        t.style.background = "", s.each(h, function (s) {
            t.style.cssText += "background: " + s + "linear-gradient(" + e + ", " + i + " 0%, " + n + " 100%); "
        })
    }

    function a(t) {
        t.style.background = "", t.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", t.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
    }
    var o = function (t, h) {
        function l(t) {
            _(t), e.bind(window, "mousemove", _), e.bind(window, "mouseup", c)
        }

        function c() {
            e.unbind(window, "mousemove", _), e.unbind(window, "mouseup", c)
        }

        function u() {
            var t = n(this.value);
            t !== !1 ? (f.__color.__state = t, f.setValue(f.__color.toOriginal())) : this.value = f.__color.toString()
        }

        function d() {
            e.unbind(window, "mousemove", p), e.unbind(window, "mouseup", d)
        }

        function _(t) {
            t.preventDefault();
            var i = e.getWidth(f.__saturation_field),
                n = e.getOffset(f.__saturation_field),
                s = (t.clientX - n.left + document.body.scrollLeft) / i,
                t = 1 - (t.clientY - n.top + document.body.scrollTop) / i;
            return t > 1 ? t = 1 : 0 > t && (t = 0), s > 1 ? s = 1 : 0 > s && (s = 0), f.__color.v = t, f.__color.s = s, f.setValue(f.__color.toOriginal()), !1
        }

        function p(t) {
            t.preventDefault();
            var i = e.getHeight(f.__hue_field),
                n = e.getOffset(f.__hue_field),
                t = 1 - (t.clientY - n.top + document.body.scrollTop) / i;
            return t > 1 ? t = 1 : 0 > t && (t = 0), f.__color.h = 360 * t, f.setValue(f.__color.toOriginal()), !1
        }
        o.superclass.call(this, t, h), this.__color = new i(this.getValue()), this.__temp = new i(0);
        var f = this;
        this.domElement = document.createElement("div"), e.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", e.bind(this.__input, "keydown", function (t) {
            13 === t.keyCode && u.call(this)
        }), e.bind(this.__input, "blur", u), e.bind(this.__selector, "mousedown", function () {
            e.addClass(this, "drag").bind(window, "mouseup", function () {
                e.removeClass(f.__selector, "drag")
            })
        });
        var m = document.createElement("div");
        s.extend(this.__selector.style, {
            width: "122px",
            height: "102px",
            padding: "3px",
            backgroundColor: "#222",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        }), s.extend(this.__field_knob.style, {
            position: "absolute",
            width: "12px",
            height: "12px",
            border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
            boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            zIndex: 1
        }), s.extend(this.__hue_knob.style, {
            position: "absolute",
            width: "15px",
            height: "2px",
            borderRight: "4px solid #fff",
            zIndex: 1
        }), s.extend(this.__saturation_field.style, {
            width: "100px",
            height: "100px",
            border: "1px solid #555",
            marginRight: "3px",
            display: "inline-block",
            cursor: "pointer"
        }), s.extend(m.style, {
            width: "100%",
            height: "100%",
            background: "none"
        }), r(m, "top", "rgba(0,0,0,0)", "#000"), s.extend(this.__hue_field.style, {
            width: "15px",
            height: "100px",
            display: "inline-block",
            border: "1px solid #555",
            cursor: "ns-resize"
        }), a(this.__hue_field), s.extend(this.__input.style, {
            outline: "none",
            textAlign: "center",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
        }), e.bind(this.__saturation_field, "mousedown", l), e.bind(this.__field_knob, "mousedown", l), e.bind(this.__hue_field, "mousedown", function (t) {
            p(t), e.bind(window, "mousemove", p), e.bind(window, "mouseup", d)
        }), this.__saturation_field.appendChild(m), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
    };
    o.superclass = t, s.extend(o.prototype, t.prototype, {
        updateDisplay: function () {
            var t = n(this.getValue());
            if (t !== !1) {
                var e = !1;
                s.each(i.COMPONENTS, function (i) {
                    return s.isUndefined(t[i]) || s.isUndefined(this.__color.__state[i]) || t[i] === this.__color.__state[i] ? void 0 : (e = !0, {})
                }, this), e && s.extend(this.__color.__state, t)
            }
            s.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
            var a = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                o = 255 - a;
            s.extend(this.__field_knob.style, {
                marginLeft: 100 * this.__color.s - 7 + "px",
                marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                backgroundColor: this.__temp.toString(),
                border: this.__field_knob_border + "rgb(" + a + "," + a + "," + a + ")"
            }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, r(this.__saturation_field, "left", "#fff", this.__temp.toString()), s.extend(this.__input.style, {
                backgroundColor: this.__input.value = this.__color.toString(),
                color: "rgb(" + a + "," + a + "," + a + ")",
                textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)"
            })
        }
    });
    var h = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    return o
}(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function (t, e, i, n) {
    function s(t, e, i) {
        Object.defineProperty(t, e, {
            get: function () {
                return "RGB" === this.__state.space ? this.__state[e] : (a(this, e, i), this.__state[e])
            },
            set: function (t) {
                "RGB" !== this.__state.space && (a(this, e, i), this.__state.space = "RGB"), this.__state[e] = t
            }
        })
    }

    function r(t, e) {
        Object.defineProperty(t, e, {
            get: function () {
                return "HSV" === this.__state.space ? this.__state[e] : (o(this), this.__state[e])
            },
            set: function (t) {
                "HSV" !== this.__state.space && (o(this), this.__state.space = "HSV"), this.__state[e] = t
            }
        })
    }

    function a(t, i, s) {
        if ("HEX" === t.__state.space) t.__state[i] = e.component_from_hex(t.__state.hex, s);
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
    var h = function () {
        if (this.__state = t.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
        this.__state.a = this.__state.a || 1
    };
    return h.COMPONENTS = "r,g,b,h,s,v,hex,a".split(","), n.extend(h.prototype, {
        toString: function () {
            return i(this)
        },
        toOriginal: function () {
            return this.__state.conversion.write(this)
        }
    }), s(h.prototype, "r", 2), s(h.prototype, "g", 1), s(h.prototype, "b", 0), r(h.prototype, "h"), r(h.prototype, "s"), r(h.prototype, "v"), Object.defineProperty(h.prototype, "a", {
        get: function () {
            return this.__state.a
        },
        set: function (t) {
            this.__state.a = t
        }
    }), Object.defineProperty(h.prototype, "hex", {
        get: function () {
            return "HEX" !== !this.__state.space && (this.__state.hex = e.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
        },
        set: function (t) {
            this.__state.space = "HEX", this.__state.hex = t
        }
    }), h
}(dat.color.interpret, dat.color.math = function () {
    var t;
    return {
        hsv_to_rgb: function (t, e, i) {
            var n = t / 60 - Math.floor(t / 60),
                s = i * (1 - e),
                r = i * (1 - n * e),
                e = i * (1 - (1 - n) * e),
                t = [
                    [i, e, s],
                    [r, i, s],
                    [s, i, e],
                    [s, r, i],
                    [e, s, i],
                    [i, s, r]
                ][Math.floor(t / 60) % 6];
            return {
                r: 255 * t[0],
                g: 255 * t[1],
                b: 255 * t[2]
            }
        },
        rgb_to_hsv: function (t, e, i) {
            var n = Math.min(t, e, i),
                s = Math.max(t, e, i),
                n = s - n;
            return 0 == s ? {
                h: NaN,
                s: 0,
                v: 0
            } : (t = t == s ? (e - i) / n : e == s ? 2 + (i - t) / n : 4 + (t - e) / n, t /= 6, 0 > t && (t += 1), {
                h: 360 * t,
                s: n / s,
                v: s / 255
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
var Stats = function () {
    function t(t, e, i) {
        return t = document.createElement(t), t.id = e, t.style.cssText = i, t
    }

    function e(e, i, n) {
        var s = t("div", e, "padding:0 0 3px 3px;text-align:left;background:" + n),
            r = t("div", e + "Text", "font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:" + i);
        for (r.innerHTML = e.toUpperCase(), s.appendChild(r), e = t("div", e + "Graph", "width:74px;height:30px;background:" + i), s.appendChild(e), i = 0; 74 > i; i++) e.appendChild(t("span", "", "width:1px;height:30px;float:left;opacity:0.9;background:" + n));
        return s
    }

    function i(t) {
        for (var e = l.children, i = 0; i < e.length; i++) e[i].style.display = i === t ? "block" : "none";
        h = t
    }

    function n(t, e) {
        t.appendChild(t.firstChild).style.height = Math.min(30, 30 - 30 * e) + "px"
    }
    var s = self.performance && self.performance.now ? self.performance.now.bind(performance) : Date.now,
        r = s(),
        a = r,
        o = 0,
        h = 0,
        l = t("div", "stats", "width:80px;opacity:0.9;cursor:pointer");
    l.addEventListener("mousedown", function (t) {
        t.preventDefault(), i(++h % l.children.length)
    }, !1);
    var c = 0,
        u = 1 / 0,
        d = 0,
        _ = e("fps", "#0ff", "#002"),
        p = _.children[0],
        f = _.children[1];
    l.appendChild(_);
    var m = 0,
        g = 1 / 0,
        v = 0,
        _ = e("ms", "#0f0", "#020"),
        b = _.children[0],
        y = _.children[1];
    if (l.appendChild(_), self.performance && self.performance.memory) {
        var x = 0,
            w = 1 / 0,
            T = 0,
            _ = e("mb", "#f08", "#201"),
            E = _.children[0],
            C = _.children[1];
        l.appendChild(_)
    }
    return i(h), {
        REVISION: 14,
        domElement: l,
        setMode: i,
        begin: function () {
            r = s()
        },
        end: function () {
            var t = s();
            if (m = t - r, g = Math.min(g, m), v = Math.max(v, m), b.textContent = (0 | m) + " MS (" + (0 | g) + "-" + (0 | v) + ")", n(y, m / 200), o++, t > a + 1e3 && (c = Math.round(1e3 * o / (t - a)), u = Math.min(u, c), d = Math.max(d, c), p.textContent = c + " FPS (" + u + "-" + d + ")", n(f, c / 100), a = t, o = 0, void 0 !== x)) {
                var e = performance.memory.usedJSHeapSize,
                    i = performance.memory.jsHeapSizeLimit;
                x = Math.round(9.54e-7 * e), w = Math.min(w, x), T = Math.max(T, x), E.textContent = x + " MB (" + w + "-" + T + ")", n(C, e / i)
            }
            return t
        },
        update: function () {
            r = this.end()
        }
    }
};
"object" == typeof module && (module.exports = Stats), ! function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, s, r, a, o, h = function (t) {
                var e, n = t.split("."),
                    s = i;
                for (e = 0; e < n.length; e++) s[n[e]] = s = s[n[e]] || {};
                return s
            },
            l = h("com.greensock"),
            c = 1e-10,
            u = function (t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            d = function () {},
            _ = function () {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function (i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(),
            p = {},
            f = function (n, s, r, a) {
                this.sc = p[n] ? p[n].sc : [], p[n] = this, this.gsClass = null, this.func = r;
                var o = [];
                this.check = function (l) {
                    for (var c, u, d, _, m, g = s.length, v = g; --g > -1;)(c = p[s[g]] || new f(s[g], [])).gsClass ? (o[g] = c.gsClass, v--) : l && c.sc.push(this);
                    if (0 === v && r)
                        for (u = ("com.greensock." + n).split("."), d = u.pop(), _ = h(u.join("."))[d] = this.gsClass = r.apply(r, o), a && (i[d] = _, m = "undefined" != typeof module && module.exports, !m && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                                return _
                            }) : n === e && m && (module.exports = _)), g = 0; g < this.sc.length; g++) this.sc[g].check()
                }, this.check(!0)
            },
            m = t._gsDefine = function (t, e, i, n) {
                return new f(t, e, i, n)
            },
            g = l._class = function (t, e, i) {
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
                for (var s, r, a, o, h = e.split(","), c = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                    for (r = h[c], s = n ? g("easing." + r, null, !0) : l.easing[r] || {}, a = u.length; --a > -1;) o = u[a], x[r + "." + o] = x[o + r] = s[o] = t.getRatio ? t : t[o] || new t
            };
        for (r = y.prototype, r._calcEnd = !1, r.getRatio = function (t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
            }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = n.length; --s > -1;) r = n[s] + ",Power" + s, w(new y(null, null, 1, s), r, "easeOut", !0), w(new y(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), w(new y(null, null, 3, s), r, "easeInOut");
        x.linear = l.easing.Linear.easeIn, x.swing = l.easing.Quad.easeInOut;
        var T = g("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        r = T.prototype, r.addEventListener = function (t, e, i, n, s) {
            s = s || 0;
            var r, h, l = this._listeners[t],
                c = 0;
            for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) r = l[h], r.c === e && r.s === i ? l.splice(h, 1) : 0 === c && r.pr < s && (c = h + 1);
            l.splice(c, 0, {
                c: e,
                s: i,
                up: n,
                pr: s
            }), this !== a || o || a.wake()
        }, r.removeEventListener = function (t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1;)
                    if (n[i].c === e) return void n.splice(i, 1)
        }, r.dispatchEvent = function (t) {
            var e, i, n, s = this._listeners[t];
            if (s)
                for (e = s.length, i = this._eventTarget; --e > -1;) n = s[e], n && (n.up ? n.c.call(n.s || i, {
                    type: t,
                    target: i
                }) : n.c.call(n.s || i))
        };
        var E = t.requestAnimationFrame,
            C = t.cancelAnimationFrame,
            S = Date.now || function () {
                return (new Date).getTime()
            },
            k = S();
        for (n = ["ms", "moz", "webkit", "o"], s = n.length; --s > -1 && !E;) E = t[n[s] + "RequestAnimationFrame"], C = t[n[s] + "CancelAnimationFrame"] || t[n[s] + "CancelRequestAnimationFrame"];
        g("Ticker", function (t, e) {
            var i, n, s, r, h, l = this,
                u = S(),
                _ = e !== !1 && E ? "auto" : !1,
                p = 500,
                f = 33,
                m = "tick",
                g = function (t) {
                    var e, a, o = S() - k;
                    o > p && (u += o - f), k += o, l.time = (k - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= r ? .004 : r - e), a = !0), t !== !0 && (s = n(g)), a && l.dispatchEvent(m)
                };
            T.call(l), l.time = l.frame = 0, l.tick = function () {
                g(!0)
            }, l.lagSmoothing = function (t, e) {
                p = t || 1 / c, f = Math.min(e, p, 0)
            }, l.sleep = function () {
                null != s && (_ && C ? C(s) : clearTimeout(s), n = d, s = null, l === a && (o = !1))
            }, l.wake = function (t) {
                null !== s ? l.sleep() : t ? u += -k + (k = S()) : l.frame > 10 && (k = S() - p + 5), n = 0 === i ? d : _ && E ? E : function (t) {
                    return setTimeout(t, 1e3 * (h - l.time) + 1 | 0)
                }, l === a && (o = !0), g(2)
            }, l.fps = function (t) {
                return arguments.length ? (i = t, r = 1 / (i || 60), h = this.time + r, void l.wake()) : i
            }, l.useRAF = function (t) {
                return arguments.length ? (l.sleep(), _ = t, void l.fps(i)) : _
            }, l.fps(t), setTimeout(function () {
                "auto" === _ && l.frame < 5 && "hidden" !== document.visibilityState && l.useRAF(!1);
            }, 1500)
        }), r = l.Ticker.prototype = new l.events.EventDispatcher, r.constructor = l.Ticker;
        var P = g("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                o || a.wake();
                var i = this.vars.useFrames ? Y : W;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        a = P.ticker = new l.Ticker, r = P.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var R = function () {
            o && S() - k > 2e3 && a.wake(), setTimeout(R, 2e3)
        };
        R(), r.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, r.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, r.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, r.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, r.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function (t, e, i) {}, r.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, r.isActive = function () {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        }, r._enabled = function (t, e) {
            return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function (t, e) {
            return this._enabled(!1, !1)
        }, r.kill = function (t, e) {
            return this._kill(t, e), this
        }, r._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, r._callback = function (t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || b)
        }, r.eventCallback = function (t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length) return s[t];
                null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = _(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function (t, e, i) {
            if (o || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        s = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                        for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (N.length && Z(), this.render(t, e, !1), N.length && Z())
            }
            return this
        }, r.progress = r.totalProgress = function (t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, r.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, r.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, r.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, r.paused = function (t) {
            if (!arguments.length) return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (o || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var A = g("core.SimpleTimeline", function (t) {
            P.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = A.prototype = new P, r.constructor = A, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function (t, e, i, n) {
            var s, r;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
                for (r = t._startTime; s && s._startTime > r;) s = s._prev;
            return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
        }, r._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, r.render = function (t, e, i) {
            var n, s = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
        }, r.rawTime = function () {
            return o || a.wake(), this._totalTime
        };
        var O = g("TweenLite", function (e, i, n) {
                if (P.call(this, i, n), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                var s, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    h = this.vars.overwrite;
                if (this._overwrite = h = null == h ? q[O.defaultOverwrite] : "number" == typeof h ? h >> 0 : q[h], (o || e instanceof Array || e.push && _(e)) && "number" != typeof e[0])
                    for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], s = 0; s < a.length; s++) r = a[s], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(u(r))) : (this._siblings[s] = Q(r, this, !1), 1 === h && this._siblings[s].length > 1 && J(r, this, null, 1, this._siblings[s])) : (r = a[s--] = O.selector(r), "string" == typeof r && a.splice(s + 1, 1)) : a.splice(s--, 1);
                else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === h && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
            }, !0),
            M = function (e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            D = function (t, e) {
                var i, n = {};
                for (i in t) X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                t.css = n
            };
        r = O.prototype = new P, r.constructor = O, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, O.version = "1.18.2", O.defaultEase = r._ease = new y(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = a, O.autoSleep = 120, O.lagSmoothing = function (t, e) {
            a.lagSmoothing(t, e)
        }, O.selector = t.$ || t.jQuery || function (e) {
            var i = t.$ || t.jQuery;
            return i ? (O.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var N = [],
            z = {},
            H = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            L = function (t) {
                for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            },
            F = function (t, e, i, n) {
                var s, r, a, o, h, l, c, u = [t, e],
                    d = 0,
                    _ = "",
                    p = 0;
                for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, s = t.match(H) || [], r = e.match(H) || [], n && (n._next = null, n.blob = 1, u._firstPT = n), h = r.length, o = 0; h > o; o++) c = r[o], l = e.substr(d, e.indexOf(c, d) - d), _ += l || !o ? l : ",", d += l.length, p ? p = (p + 1) % 5 : "rgba(" === l.substr(-5) && (p = 1), c === s[o] || s.length <= o ? _ += c : (_ && (u.push(_), _ = ""), a = parseFloat(s[o]), u.push(a), u._firstPT = {
                    _next: u._firstPT,
                    t: u,
                    p: u.length - 1,
                    s: a,
                    c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                    f: 0,
                    r: p && 4 > p
                }), d += c.length;
                return _ += e.substr(d), _ && u.push(_), u.setRatio = L, u
            },
            I = function (t, e, i, n, s, r, a, o) {
                var h, l, c = "get" === i ? t[e] : i,
                    u = typeof t[e],
                    d = "string" == typeof n && "=" === n.charAt(1),
                    _ = {
                        t: t,
                        p: e,
                        s: c,
                        f: "function" === u,
                        pg: 0,
                        n: s || e,
                        r: r,
                        pr: 0,
                        c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                    };
                return "number" !== u && ("function" === u && "get" === i && (l = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), _.s = c = a ? t[l](a) : t[l]()), "string" == typeof c && (a || isNaN(c)) ? (_.fp = a, h = F(c, n, o || O.defaultStringFilter, _), _ = {
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: s || e,
                    pr: 0
                }) : d || (_.s = parseFloat(c), _.c = parseFloat(n) - _.s || 0)), _.c ? ((_._next = this._firstPT) && (_._next._prev = _), this._firstPT = _, _) : void 0
            },
            B = O._internals = {
                isArray: _,
                isSelector: M,
                lazyTweens: N,
                blobDif: F
            },
            j = O._plugins = {},
            U = B.tweenLookup = {},
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
            q = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            Y = P._rootFramesTimeline = new A,
            W = P._rootTimeline = new A,
            G = 30,
            Z = B.lazyRender = function () {
                var t, e = N.length;
                for (z = {}; --e > -1;) t = N[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                N.length = 0
            };
        W._startTime = a.time, Y._startTime = a.frame, W._active = Y._active = !0, setTimeout(Z, 1), P._updateRoot = O.render = function () {
            var t, e, i;
            if (N.length && Z(), W.render((a.time - W._startTime) * W._timeScale, !1, !1), Y.render((a.frame - Y._startTime) * Y._timeScale, !1, !1), N.length && Z(), a.frame >= G) {
                G = a.frame + (parseInt(O.autoSleep, 10) || 120);
                for (i in U) {
                    for (e = U[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete U[i]
                }
                if (i = W._first, (!i || i._paused) && O.autoSleep && !Y._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || a.sleep()
                }
            }
        }, a.addEventListener("tick", P._updateRoot);
        var Q = function (t, e, i) {
                var n, s, r = t._gsTweenID;
                if (U[r || (t._gsTweenID = r = "t" + V++)] || (U[r] = {
                        target: t,
                        tweens: []
                    }), e && (n = U[r].tweens, n[s = n.length] = e, i))
                    for (; --s > -1;) n[s] === e && n.splice(s, 1);
                return U[r].tweens
            },
            K = function (t, e, i, n) {
                var s, r, a = t.vars.onOverwrite;
                return a && (s = a(t, e, i, n)), a = O.onOverwrite, a && (r = a(t, e, i, n)), s !== !1 && r !== !1
            },
            J = function (t, e, i, n, s) {
                var r, a, o, h;
                if (1 === n || n >= 4) {
                    for (h = s.length, r = 0; h > r; r++)
                        if ((o = s[r]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                        else if (5 === n) break;
                    return a
                }
                var l, u = e._startTime + c,
                    d = [],
                    _ = 0,
                    p = 0 === e._duration;
                for (r = s.length; --r > -1;)(o = s[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || $(e, 0, p), 0 === $(o, l, p) && (d[_++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && u - o._startTime <= 2e-10 || (d[_++] = o)));
                for (r = _; --r > -1;)
                    if (o = d[r], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
                        if (2 !== n && !K(o, e)) continue;
                        o._enabled(!1, !1) && (a = !0)
                    }
                return a
            },
            $ = function (t, e, i) {
                for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline;) {
                    if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return r /= s, r > e ? r - e : i && r === e || !t._initted && 2 * c > r - e ? c : (r += t.totalDuration() / t._timeScale / s) > e + c ? 0 : r - e - c
            };
        r._init = function () {
            var t, e, i, n, s, r = this.vars,
                a = this._overwrittenProps,
                o = this._duration,
                h = !!r.immediateRender,
                l = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                for (n in r.startAt) s[n] = r.startAt[n];
                if (s.overwrite = !1, s.immediateRender = !0, s.lazy = h && r.lazy !== !1, s.startAt = s.delay = null, this._startAt = O.to(this.target, 0, s), h)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== o) return
            } else if (r.runBackwards && 0 !== o)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (h = !1), i = {};
                    for (n in r) X[n] && "autoCSS" !== n || (i[n] = r[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && r.lazy !== !1, i.immediateRender = h, this._startAt = O.to(this.target, 0, i), h) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = l = l ? l instanceof y ? l : "function" == typeof l ? new y(l, r.easeParams) : x[l] || O.defaultEase : O.defaultEase, r.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && O._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, r._initProps = function (e, i, n, s) {
            var r, a, o, h, l, c;
            if (null == e) return !1;
            z[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && D(this.vars, e);
            for (r in this.vars)
                if (c = this.vars[r], X[r]) c && (c instanceof Array || c.push && _(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[r] = c = this._swapSelfInParams(c, this));
                else if (j[r] && (h = new j[r])._onInitTween(e, this.vars[r], this)) {
                for (this._firstPT = l = {
                        _next: this._firstPT,
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: r,
                        pg: 1,
                        pr: h._priority
                    }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l)
            } else i[r] = I.call(this, e, r, "get", c, r, 0, null, this.vars.stringFilter);
            return s && this._kill(s, e) ? this._initProps(e, i, n, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0), o)
        }, r.render = function (t, e, i) {
            var n, s, r, a, o = this._time,
                h = this._duration,
                l = this._rawPrevTime;
            if (t >= h - 1e-7) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > l || 0 >= t && t >= -1e-7 || l === c && "isPause" !== this.data) && l !== t && (i = !0, l > c && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : c);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : c)), this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / h,
                    d = this._easeType,
                    _ = this._easePower;
                (1 === d || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === _ ? u *= u : 2 === _ ? u *= u * u : 3 === _ ? u *= u * u * u : 4 === _ && (u *= u * u * u * u), 1 === d ? this.ratio = 1 - u : 2 === d ? this.ratio = u : .5 > t / h ? this.ratio = u / 2 : this.ratio = 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / h);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, N.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / h) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || n) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === h && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
            }
        }, r._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
            var n, s, r, a, o, h, l, c, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((_(e) || M(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (h = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;)
                        if (e === this._targets[n]) {
                            o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    o = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (l = t || o, c = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill), i && (O.onOverwrite || this.vars.onOverwrite)) {
                        for (r in l) o[r] && (u || (u = []), u.push(r));
                        if ((u || !t) && !K(this, i, e, u)) return !1
                    }
                    for (r in l)(a = o[r]) && (d && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, h = !0), a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), c && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return h
        }, r.invalidate = function () {
            return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], P.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
        }, r._enabled = function (t, e) {
            if (o || a.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1;) this._siblings[i] = Q(n[i], this, !0);
                else this._siblings = Q(this.target, this, !0)
            }
            return P.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, O.to = function (t, e, i) {
            return new O(t, e, i)
        }, O.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i)
        }, O.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new O(t, e, n)
        }, O.delayedCall = function (t, e, i, n, s) {
            return new O(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: s,
                overwrite: 0
            })
        }, O.set = function (t, e) {
            return new O(t, 0, e)
        }, O.getTweensOf = function (t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : O.selector(t) || t;
            var i, n, s, r;
            if ((_(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(O.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;)
                    for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1)
            } else
                for (n = Q(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, O.killTweensOf = O.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = O.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
        };
        var tt = g("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
        }, !0);
        if (r = tt.prototype, tt.version = "1.18.0", tt.API = 2, r._firstPT = null, r._addTween = I, r.setRatio = L, r._kill = function (t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, r._roundProps = function (t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, O._onPluginEvent = function (t, e) {
                var i, n, s, r, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, n = s; n && n.pr > o.pr;) n = n._next;
                        (o._prev = n ? n._prev : r) ? o._prev._next = o: s = o, (o._next = n) ? n._prev = o : r = o, o = a
                    }
                    o = e._firstPT = s
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, tt.activate = function (t) {
                for (var e = t.length; --e > -1;) t[e].API === tt.API && (j[(new t[e])._propName] = t[e]);
                return !0
            }, m.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    s = t.overwriteProps,
                    r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                        tt.call(this, i, n), this._overwriteProps = s || []
                    }, t.global === !0),
                    o = a.prototype = new tt(i);
                o.constructor = a, a.API = t.API;
                for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                return a.version = t.version, tt.activate([a]), a
            }, n = t._gsQueue) {
            for (s = 0; s < n.length; s++) n[s]();
            for (r in p) p[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
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
                    s = function (t, e, i) {
                        var n, s, r = t.cycle;
                        for (n in r) s = r[n], t[n] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
                        delete t.cycle
                    },
                    r = function (t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    a = 1e-10,
                    o = i._internals,
                    h = o.isSelector,
                    l = o.isArray,
                    c = r.prototype = i.to({}, .1, {}),
                    u = [];
                r.version = "1.18.2", c.constructor = r, c.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, c.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function (t, e) {
                    var n, s = this.ratio,
                        r = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || r)
                        if (e) this._initted = !1, r && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || r)
                        for (var o, h = 1 / (1 - s), l = this._firstPT; l;) o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next;
                    return this
                }, c.render = function (t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, s, r, h, l, c, u, d, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        f = this._totalTime,
                        m = this._cycle,
                        g = this._duration,
                        v = this._rawPrevTime;
                    if (t >= _ - 1e-7 ? (this._totalTime = _, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > v || 0 >= t && t >= -1e-7 || v === a && "isPause" !== this.data) && v !== t && (i = !0, v > a && (s = "onReverseComplete")), this._rawPrevTime = d = !e || t || v === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === g && v > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = d = !e || t || v === t ? t : a)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = g + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (l = this._time / g, c = this._easeType, u = this._easePower, (1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l), 1 === c ? this.ratio = 1 - l : 2 === c ? this.ratio = l : this._time / g < .5 ? this.ratio = l / 2 : this.ratio = 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && m === this._cycle) return void(f !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = f, this._rawPrevTime = v, this._cycle = m, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / g) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === f && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== f || n) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === g && this._rawPrevTime === a && d !== a && (this._rawPrevTime = 0))
                }, r.to = function (t, e, i) {
                    return new r(t, e, i)
                }, r.from = function (t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function (t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
                }, r.staggerTo = r.allTo = function (t, e, a, o, c, d, _) {
                    o = o || 0;
                    var p, f, m, g, v = 0,
                        b = [],
                        y = function () {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), c.apply(_ || a.callbackScope || this, d || u)
                        },
                        x = a.cycle,
                        w = a.startAt && a.startAt.cycle;
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), h(t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t.reverse(), o *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                        f = {};
                        for (g in a) f[g] = a[g];
                        if (x && s(f, t, m), w) {
                            w = f.startAt = {};
                            for (g in a.startAt) w[g] = a.startAt[g];
                            s(f.startAt, t, m)
                        }
                        f.delay = v + (f.delay || 0), m === p && c && (f.onComplete = y), b[m] = new r(t[m], e, f), v += o
                    }
                    return b
                }, r.staggerFrom = r.allFrom = function (t, e, i, n, s, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, a, o)
                }, r.staggerFromTo = r.allFromTo = function (t, e, i, n, s, a, o, h) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, a, o, h)
                }, r.delayedCall = function (t, e, i, n, s) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, r.set = function (t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function (t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var d = function (t, e) {
                        for (var n = [], s = 0, r = t._first; r;) r instanceof i ? n[s++] = r : (e && (n[s++] = r), n = n.concat(d(r, e)), s = n.length), r = r._next;
                        return n
                    },
                    _ = r.getAllTweens = function (e) {
                        return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
                    };
                r.killAll = function (t, i, n, s) {
                    null == i && (i = !0), null == n && (n = !0);
                    var r, a, o, h = _(0 != s),
                        l = h.length,
                        c = i && n && s;
                    for (o = 0; l > o; o++) a = h[o], (c || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function (t, e) {
                    if (null != t) {
                        var s, a, c, u, d, _ = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), h(t) && (t = n(t)), l(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else {
                            s = [];
                            for (c in _)
                                for (a = _[c].target.parentNode; a;) a === t && (s = s.concat(_[c].tweens)), a = a.parentNode;
                            for (d = s.length, u = 0; d > u; u++) e && s[u].totalTime(s[u].totalDuration()), s[u]._enabled(!1, !1)
                        }
                    }
                };
                var p = function (t, i, n, s) {
                    i = i !== !1, n = n !== !1, s = s !== !1;
                    for (var r, a, o = _(s), h = i && n && s, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && a.paused(t)
                };
                return r.pauseAll = function (t, e, i) {
                    p(!0, t, e, i)
                }, r.resumeAll = function (t, e, i) {
                    p(!1, t, e, i)
                }, r.globalTimeScale = function (e) {
                    var n = t._rootTimeline,
                        s = i.ticker.time;
                    return arguments.length ? (e = e || a, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
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
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var n = function (t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, s = this.vars;
                        for (n in s) i = s[n], h(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                        h(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    s = 1e-10,
                    r = i._internals,
                    a = n._internals = {},
                    o = r.isSelector,
                    h = r.isArray,
                    l = r.lazyTweens,
                    c = r.lazyRender,
                    u = _gsScope._gsDefine.globals,
                    d = function (t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    _ = function (t, e, i) {
                        var n, s, r = t.cycle;
                        for (n in r) s = r[n], t[n] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
                        delete t.cycle
                    },
                    p = a.pauseCallback = function () {},
                    f = function (t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    m = n.prototype = new e;
                return n.version = "1.18.2", m.constructor = n, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function (t, e, n, s) {
                    var r = n.repeat && u.TweenMax || i;
                    return e ? this.add(new r(t, e, n), s) : this.set(t, n, s)
                }, m.from = function (t, e, n, s) {
                    return this.add((n.repeat && u.TweenMax || i).from(t, e, n), s)
                }, m.fromTo = function (t, e, n, s, r) {
                    var a = s.repeat && u.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, n, s), r) : this.set(t, s, r)
                }, m.staggerTo = function (t, e, s, r, a, h, l, c) {
                    var u, p, m = new n({
                            onComplete: h,
                            onCompleteParams: l,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = s.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = f(t)), r = r || 0, 0 > r && (t = f(t), t.reverse(), r *= -1), p = 0; p < t.length; p++) u = d(s), u.startAt && (u.startAt = d(u.startAt), u.startAt.cycle && _(u.startAt, t, p)), g && _(u, t, p), m.to(t[p], e, u, p * r);
                    return this.add(m, a)
                }, m.staggerFrom = function (t, e, i, n, s, r, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, r, a, o)
                }, m.staggerFromTo = function (t, e, i, n, s, r, a, o, h) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, r, a, o, h)
                }, m.call = function (t, e, n, s) {
                    return this.add(i.delayedCall(0, t, e, n), s)
                }, m.set = function (t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function (t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var s, r, a = new n(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, s = o._first; s;) r = s._next, e && s instanceof i && s.target === s.vars.onComplete || a.add(s, s._startTime - s._delay), s = r;
                    return o.add(a, 0), a
                }, m.add = function (s, r, a, o) {
                    var l, c, u, d, _, p;
                    if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof t)) {
                        if (s instanceof Array || s && s.push && h(s)) {
                            for (a = a || "normal", o = o || 0, l = r, c = s.length, u = 0; c > u; u++) h(d = s[u]) && (d = new n({
                                tweens: d
                            })), this.add(d, l), "string" != typeof d && "function" != typeof d && ("sequence" === a ? l = d._startTime + d.totalDuration() / d._timeScale : "start" === a && (d._startTime -= d.delay())), l += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof s) return this.addLabel(s, r);
                        if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                        s = i.delayedCall(0, s)
                    }
                    if (e.prototype.add.call(this, s, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (_ = this, p = _.rawTime() > s._startTime; _._timeline;) p && _._timeline.smoothChildTiming ? _.totalTime(_._totalTime, !0) : _._gc && _._enabled(!0, !1), _ = _._timeline;
                    return this
                }, m.remove = function (e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && h(e)) {
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
                }, m.addPause = function (t, e, n, s) {
                    var r = i.delayedCall(0, p, n, s || this);
                    return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
                }, m.removeLabel = function (t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function (t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function (e, i, n, s) {
                    var r;
                    if (s instanceof t && s.timeline === this) this.remove(s);
                    else if (s && (s instanceof Array || s.push && h(s)))
                        for (r = s.length; --r > -1;) s[r] instanceof t && s[r].timeline === this && this.remove(s[r]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (r = e.indexOf("="), -1 === r) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, n) : this.duration()
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
                    var n, r, a, o, h, u, d, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        f = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (t >= _ - 1e-7) this._totalTime = this._time = _, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > s && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = _ + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = r = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (h = !0)
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
                    if (this._time !== p && this._first || i || h || u) {
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
                        this._onUpdate && (e || (l.length && c(), this._callback("onUpdate"))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (r && (l.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, m._hasPausedChild = function () {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function (t, e, n, s) {
                    s = s || -9999999999;
                    for (var r = [], a = this._first, o = 0; a;) a._startTime < s || (a instanceof i ? e !== !1 && (r[o++] = a) : (n !== !1 && (r[o++] = a), t !== !1 && (r = r.concat(a.getChildren(!0, e, n)), o = r.length))), a = a._next;
                    return r
                }, m.getTweensOf = function (t, e) {
                    var n, s, r = this._gc,
                        a = [],
                        o = 0;
                    for (r && this._enabled(!0, !0), n = i.getTweensOf(t), s = n.length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (a[o++] = n[s]);
                    return r && this._enabled(!1, !0), a
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
                    for (var n, s = this._first, r = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                    if (e)
                        for (n in r) r[n] >= i && (r[n] += t);
                    return this._uncache(!0)
                }, m._kill = function (t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
                    return s
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
                    var s = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, s
                }, m.duration = function (t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function (t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, s = this._last, r = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : r = s._startTime, s._startTime < 0 && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), i = s._startTime + s._totalDuration / s._timeScale, i > n && (n = i), s = e;
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
                    s = 1e-10,
                    r = e._internals,
                    a = r.lazyTweens,
                    o = r.lazyRender,
                    h = new i(null, null, 1, 0),
                    l = n.prototype = new t;
                return l.constructor = n, l.kill()._gc = !1, n.version = "1.18.2", l.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, l.addCallback = function (t, i, n, s) {
                    return this.add(e.delayedCall(0, t, n, s), i)
                }, l.removeCallback = function (t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                    return this
                }, l.removePause = function (e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, l.tweenTo = function (t, i) {
                    i = i || {};
                    var n, s, r, a = {
                        ease: h,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (s in i) a[s] = i[s];
                    return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, r = new e(this, n, a), a.onStart = function () {
                        r.target.paused(!0), r.vars.time !== r.target.time() && n === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && r._callback("onStart")
                    }, r
                }, l.tweenFromTo = function (t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, l.render = function (t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, h, l, c, u, d, _, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._startTime,
                        b = this._timeScale,
                        y = this._rawPrevTime,
                        x = this._paused,
                        w = this._cycle;
                    if (t >= p - 1e-7) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > y || y === s) && y !== t && this._first && (c = !0, y > s && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== s && (y > 0 || 0 > t && y >= 0) && !this._locked) && (l = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, l = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (c = !0)
                        }
                    else if (0 === f && 0 > y && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = f + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
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
                            k = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = w * f, this._cycle < w ? T = !T : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = T ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time) return;
                        if (E && (m = T ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = P, this._totalTime = C, this._cycle = S, this._rawPrevTime = k
                    }
                    if (!(this._time !== m && this._first || i || c || d)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), _ = this._time, _ >= m)
                        for (n = this._first; n && (h = n._next, _ === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (d === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = h;
                    else
                        for (n = this._last; n && (h = n._prev, _ === this._time && (!this._paused || x));) {
                            if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                                if (d === n) {
                                    for (d = n._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
                                    d = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = h
                        }
                    this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || (v === this._startTime || b !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (r && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                }, l.getActive = function (t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, s, r = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length;
                    for (n = 0; h > n; n++) s = a[n], s.isActive() && (r[o++] = s);
                    return r
                }, l.getLabelAfter = function (t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, l.getLabelBefore = function (t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, l.getLabelsArray = function () {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function (t, e) {
                        return t.time - e.time
                    }), e
                }, l.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, l.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, l.totalDuration = function (e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, l.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, l.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, l.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function () {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    s = {},
                    r = _gsScope._gsDefine.globals,
                    a = function (t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    h = function (t, e, i, n) {
                        var s = {
                                a: t
                            },
                            r = {},
                            a = {},
                            o = {
                                c: n
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            c = (i + n) / 2,
                            u = (h + l) / 2,
                            d = (l + c) / 2,
                            _ = (d - u) / 8;
                        return s.b = h + (t - h) / 4, r.b = u + _, s.c = r.a = (s.b + r.b) / 2, r.c = a.a = (u + d) / 2, a.b = d - _, o.b = c + (n - c) / 4, a.c = o.a = (a.b + o.b) / 2, [s, r, a, o]
                    },
                    l = function (t, s, r, a, o) {
                        var l, c, u, d, _, p, f, m, g, v, b, y, x, w = t.length - 1,
                            T = 0,
                            E = t[0].a;
                        for (l = 0; w > l; l++) _ = t[T], c = _.a, u = _.d, d = t[T + 1].d, o ? (b = e[l], y = i[l], x = (y + b) * s * .25 / (a ? .5 : n[l] || .5), p = u - (u - c) * (a ? .5 * s : 0 !== b ? x / b : 0), f = u + (d - u) * (a ? .5 * s : 0 !== y ? x / y : 0), m = u - (p + ((f - p) * (3 * b / (b + y) + .5) / 4 || 0))) : (p = u - (u - c) * s * .5, f = u + (d - u) * s * .5, m = u - (p + f) / 2), p += m, f += m, _.c = g = p, 0 !== l ? _.b = E : _.b = E = _.a + .6 * (_.c - _.a), _.da = u - c, _.ca = g - c, _.ba = E - c, r ? (v = h(c, E, g, u), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, E = f;
                        _ = t[T], _.b = E, _.c = E + .4 * (_.d - E), _.da = _.d - _.a, _.ca = _.c - _.a, _.ba = E - _.a, r && (v = h(_.a, E, _.c, _.d), t.splice(T, 1, v[0], v[1], v[2], v[3]))
                    },
                    c = function (t, n, s, r) {
                        var o, h, l, c, u, d, _ = [];
                        if (r)
                            for (t = [r].concat(t), h = t.length; --h > -1;) "string" == typeof (d = t[h][n]) && "=" === d.charAt(1) && (t[h][n] = r[n] + Number(d.charAt(0) + d.substr(2)));
                        if (o = t.length - 2, 0 > o) return _[0] = new a(t[0][n], 0, 0, t[-1 > o ? 0 : 1][n]), _;
                        for (h = 0; o > h; h++) l = t[h][n], c = t[h + 1][n], _[h] = new a(l, 0, 0, c), s && (u = t[h + 2][n], e[h] = (e[h] || 0) + (c - l) * (c - l), i[h] = (i[h] || 0) + (u - c) * (u - c));
                        return _[h] = new a(t[h][n], 0, 0, t[h + 1][n]), _
                    },
                    u = function (t, r, a, h, u, d) {
                        var _, p, f, m, g, v, b, y, x = {},
                            w = [],
                            T = d || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == r && (r = 1);
                        for (p in t[0]) w.push(p);
                        if (t.length > 1) {
                            for (y = t[t.length - 1], b = !0, _ = w.length; --_ > -1;)
                                if (p = w[_], Math.abs(T[p] - y[p]) > .05) {
                                    b = !1;
                                    break
                                }
                            b && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, _ = w.length; --_ > -1;) p = w[_], s[p] = -1 !== u.indexOf("," + p + ","), x[p] = c(t, p, s[p], d);
                        for (_ = e.length; --_ > -1;) e[_] = Math.sqrt(e[_]), i[_] = Math.sqrt(i[_]);
                        if (!h) {
                            for (_ = w.length; --_ > -1;)
                                if (s[p])
                                    for (f = x[w[_]], v = f.length - 1, m = 0; v > m; m++) g = f[m + 1].da / i[m] + f[m].da / e[m], n[m] = (n[m] || 0) + g * g;
                            for (_ = n.length; --_ > -1;) n[_] = Math.sqrt(n[_])
                        }
                        for (_ = w.length, m = a ? 4 : 1; --_ > -1;) p = w[_], f = x[p], l(f, r, a, h, s[p]), b && (f.splice(0, m), f.splice(f.length - m, m));
                        return x
                    },
                    d = function (t, e, i) {
                        e = e || "soft";
                        var n, s, r, o, h, l, c, u, d, _, p, f = {},
                            m = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (d in t[0]) v.push(d);
                        for (l = v.length; --l > -1;) {
                            for (d = v[l], f[d] = h = [], _ = 0, u = t.length, c = 0; u > c; c++) n = null == i ? t[c][d] : "string" == typeof (p = t[c][d]) && "=" === p.charAt(1) ? i[d] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && c > 1 && u - 1 > c && (h[_++] = (n + h[_ - 2]) / 2), h[_++] = n;
                            for (u = _ - m + 1, _ = 0, c = 0; u > c; c += m) n = h[c], s = h[c + 1], r = h[c + 2], o = 2 === m ? 0 : h[c + 3], h[_++] = p = 3 === m ? new a(n, s, r, o) : new a(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                            h.length = _
                        }
                        return f
                    },
                    _ = function (t, e, i) {
                        for (var n, s, r, a, o, h, l, c, u, d, _, p = 1 / i, f = t.length; --f > -1;)
                            for (d = t[f], r = d.a, a = d.d - r, o = d.c - r, h = d.b - r, n = s = 0, c = 1; i >= c; c++) l = p * c, u = 1 - l, n = s - (s = (l * l * a + 3 * u * (l * o + u * h)) * l), _ = f * i + c - 1, e[_] = (e[_] || 0) + n * n
                    },
                    p = function (t, e) {
                        e = e >> 0 || 6;
                        var i, n, s, r, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            c = e - 1,
                            u = [],
                            d = [];
                        for (i in t) _(t[i], a, e);
                        for (s = a.length, n = 0; s > n; n++) h += Math.sqrt(a[n]), r = n % e, d[r] = h, r === c && (l += h, r = n / e >> 0, u[r] = d, o[r] = l, h = 0, d = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        }
                    },
                    f = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function (t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, s, r, a, o, h = e.values || [],
                                l = {},
                                c = h[0],
                                _ = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = _ ? _ instanceof Array ? _ : [
                                ["x", "y", "rotation", _ === !0 ? 0 : Number(_) || 0]
                            ] : null;
                            for (n in c) this._props.push(n);
                            for (r = this._props.length; --r > -1;) n = this._props[r], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], l[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), o || l[n] !== h[0][n] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : d(h, e.type, l), this._segCount = this._beziers[n].length, this._timeRes) {
                                var f = p(this._beziers, this._timeRes);
                                this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (_ = this._autoRotate)
                                for (this._initialRotations = [], _[0] instanceof Array || (this._autoRotate = _ = [_]), r = _.length; --r > -1;) {
                                    for (a = 0; 3 > a; a++) n = _[r][a], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = _[r][2], this._initialRotations[r] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function (e) {
                            var i, n, s, r, a, o, h, l, c, u, d = this._segCount,
                                _ = this._func,
                                p = this._target,
                                f = e !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, u = this._curSeg, e *= this._length, s = this._li, e > this._l2 && d - 1 > s) {
                                    for (l = d - 1; l > s && (this._l2 = c[++s]) <= e;);
                                    this._l1 = c[s - 1], this._li = s, this._curSeg = u = this._segments[s], this._s2 = u[this._s1 = this._si = 0]
                                } else if (e < this._l1 && s > 0) {
                                    for (; s > 0 && (this._l1 = c[--s]) >= e;);
                                    0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = c[s], this._li = s, this._curSeg = u = this._segments[s], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = s, e -= this._l1, s = this._si, e > this._s2 && s < u.length - 1) {
                                    for (l = u.length - 1; l > s && (this._s2 = u[++s]) <= e;);
                                    this._s1 = u[s - 1], this._si = s
                                } else if (e < this._s1 && s > 0) {
                                    for (; s > 0 && (this._s1 = u[--s]) >= e;);
                                    0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = u[s], this._si = s
                                }
                                o = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0, o = (e - i * (1 / d)) * d;
                            for (n = 1 - o, s = this._props.length; --s > -1;) r = this._props[s], a = this._beziers[r][i], h = (o * o * a.da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a, this._round[r] && (h = Math.round(h)), _[r] ? p[r](h) : p[r] = h;
                            if (this._autoRotate) {
                                var m, g, v, b, y, x, w, T = this._autoRotate;
                                for (s = T.length; --s > -1;) r = T[s][2], x = T[s][3] || 0, w = T[s][4] === !0 ? 1 : t, a = this._beziers[T[s][0]], m = this._beziers[T[s][1]], a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, b = a.b + (a.c - a.b) * o, g += (b - g) * o, b += (a.c + (a.d - a.c) * o - b) * o, v = m.a + (m.b - m.a) * o, y = m.b + (m.c - m.b) * o, v += (y - v) * o, y += (m.c + (m.d - m.c) * o - y) * o, h = f ? Math.atan2(y - v, b - g) * w + x : this._initialRotations[s], _[r] ? p[r](h) : p[r] = h)
                            }
                        }
                    }),
                    m = f.prototype;
                f.bezierThrough = u, f.cubicToQuadratic = h, f._autoCSS = !0, f.quadraticToCubic = function (t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, f._cssRegister = function () {
                    var t = r.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            s = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function (t, e, r, a, o, h) {
                                e instanceof Array && (e = {
                                    values: e
                                }), h = new f;
                                var l, c, u, d = e.values,
                                    _ = d.length - 1,
                                    p = [],
                                    m = {};
                                if (0 > _) return o;
                                for (l = 0; _ >= l; l++) u = i(t, d[l], a, o, h, _ !== l), p[l] = u.end;
                                for (c in e) m[c] = e[c];
                                return m.values = p, o = new s(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (l = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", l, !1]
                                ] : !1), m.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, m, a._tween), o
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
                var i, n, s, r, a = function () {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    h = {},
                    l = a.prototype = new t("css");
                l.constructor = a, a.version = "1.18.2", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, l = "px", a.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l,
                    lineHeight: ""
                };
                var c, u, d, _, p, f, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
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
                    k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    P = function (t, e) {
                        return e.toUpperCase()
                    },
                    R = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    D = Math.PI / 180,
                    N = 180 / Math.PI,
                    z = {},
                    H = document,
                    L = function (t) {
                        return H.createElementNS ? H.createElementNS("http://www.w3.org/1999/xhtml", t) : H.createElement(t)
                    },
                    F = L("div"),
                    I = L("img"),
                    B = a._internals = {
                        _specialProps: h
                    },
                    j = navigator.userAgent,
                    U = function () {
                        var t = j.indexOf("Android"),
                            e = L("a");
                        return d = -1 !== j.indexOf("Safari") && -1 === j.indexOf("Chrome") && (-1 === t || Number(j.substr(t + 8, 1)) > 3), p = d && Number(j.substr(j.indexOf("Version/") + 8, 1)) < 6, _ = -1 !== j.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) && (f = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    V = function (t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    X = function (t) {
                        window.console && console.log(t)
                    },
                    q = "",
                    Y = "",
                    W = function (t, e) {
                        e = e || F;
                        var i, n, s = e.style;
                        if (void 0 !== s[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
                        return n >= 0 ? (Y = 3 === n ? "ms" : i[n], q = "-" + Y.toLowerCase() + "-", Y + t) : null
                    },
                    G = H.defaultView ? H.defaultView.getComputedStyle : function () {},
                    Z = a.getStyle = function (t, e, i, n, s) {
                        var r;
                        return U || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || G(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : V(t)
                    },
                    Q = B.convertToPixels = function (t, i, n, s, r) {
                        if ("px" === s || !s) return n;
                        if ("auto" === s || !n) return 0;
                        var o, h, l, c = R.test(i),
                            u = t,
                            d = F.style,
                            _ = 0 > n;
                        if (_ && (n = -n), "%" === s && -1 !== i.indexOf("border")) o = n / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (d.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;", "%" !== s && u.appendChild && "v" !== s.charAt(0) && "rem" !== s) d[c ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                            else {
                                if (u = t.parentNode || H.body, h = u._gsCache, l = e.ticker.frame, h && c && h.time === l) return h.width * n / 100;
                                d[c ? "width" : "height"] = n + s
                            }
                            u.appendChild(F), o = parseFloat(F[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(F), c && "%" === s && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = o / n * 100), 0 !== o || r || (o = Q(t, i, n, s, !0))
                        }
                        return _ ? -o : o
                    },
                    K = B.calculateOffset = function (t, e, i) {
                        if ("absolute" !== Z(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            s = Z(t, "margin" + n, i);
                        return t["offset" + n] - (Q(t, e, parseFloat(s), s.replace(y, "")) || 0)
                    },
                    J = function (t, e) {
                        var i, n, s, r = {};
                        if (e = e || G(t, null))
                            if (i = e.length)
                                for (; --i > -1;) s = e[i], (-1 === s.indexOf("-transform") || Ct === s) && (r[s.replace(S, P)] = e.getPropertyValue(s));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Et === i) && (r[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(S, P)] = e[i]);
                        return U || (r.opacity = V(t)), n = Lt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, kt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
                    },
                    $ = function (t, e, i, n, s) {
                        var r, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (r = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (h[a] = "auto" !== r || "left" !== a && "top" !== a ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[a] || "" === e[a].replace(b, "") ? r : 0 : K(t, a), void 0 !== l[a] && (o = new pt(l, a, l[a], o)));
                        if (n)
                            for (a in n) "className" !== a && (h[a] = n[a]);
                        return {
                            difs: h,
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
                            s = tt[e],
                            r = s.length;
                        for (i = i || G(t, null); --r > -1;) n -= parseFloat(Z(t, "padding" + s[r], i, !0)) || 0, n -= parseFloat(Z(t, "border" + s[r] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function (t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + s + (i.length > 2 ? " " + i[2] : ""),
                            e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(n.replace(b, "")), e.oy = parseFloat(s.replace(b, "")), e.v = t), e || t
                    },
                    st = function (t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    rt = function (t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    at = function (t, e, i, n) {
                        var s, r, a, o, h, l = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (s = 360, r = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (h ? 0 : e), r.length && (n && (n[i] = e + a), -1 !== t.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (a / s | 0) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (a / s | 0) * s)), o = e + a), l > o && o > -l && (o = 0), o
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
                    ht = function (t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    lt = a.parseColor = function (t, e) {
                        var i, n, s, r, a, o, h, l, c, u, d;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t]) i = ot[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), s = t.charAt(2), r = t.charAt(3), t = "#" + n + n + s + s + r + r), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = d = t.match(m), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(g)
                                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, h = Number(i[2]) / 100, s = .5 >= h ? h * (o + 1) : h + o - h * o, n = 2 * h - s, i.length > 3 && (i[3] = Number(t[3])), i[0] = ht(a + 1 / 3, n, s), i[1] = ht(a, n, s), i[2] = ht(a - 1 / 3, n, s);
                                else i = t.match(m) || ot.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ot.black;
                        return e && !d && (n = i[0] / 255, s = i[1] / 255, r = i[2] / 255, l = Math.max(n, s, r), c = Math.min(n, s, r), h = (l + c) / 2, l === c ? a = o = 0 : (u = l - c, o = h > .5 ? u / (2 - l - c) : u / (l + c), a = l === n ? (s - r) / u + (r > s ? 6 : 0) : l === s ? (r - n) / u + 2 : (n - s) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * h + .5 | 0), i
                    },
                    ct = function (t, e) {
                        var i, n, s, r = t.match(ut) || [],
                            a = 0,
                            o = r.length ? "" : t;
                        for (i = 0; i < r.length; i++) n = r[i], s = t.substr(a, t.indexOf(n, a) - a), a += s.length + n.length, n = lt(n, e), 3 === n.length && n.push(1), o += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return o
                    },
                    ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (l in ot) ut += "|" + l + "\\b";
                ut = new RegExp(ut + ")", "gi"), a.colorStringFilter = function (t) {
                    var e, i = t[0] + t[1];
                    ut.lastIndex = 0, ut.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ct(t[0], e), t[1] = ct(t[1], e))
                }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                var dt = function (t, e, i, n) {
                        if (null == t) return function (t) {
                            return t
                        };
                        var s, r = e ? (t.match(ut) || [""])[0] : "",
                            a = t.split(r).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            c = a.length,
                            u = c > 0 ? a[0].replace(m, "") : "";
                        return c ? s = e ? function (t) {
                            var e, d, _, p;
                            if ("number" == typeof t) t += u;
                            else if (n && M.test(t)) {
                                for (p = t.replace(M, "|").split("|"), _ = 0; _ < p.length; _++) p[_] = s(p[_]);
                                return p.join(",")
                            }
                            if (e = (t.match(ut) || [r])[0], d = t.split(e).join("").match(v) || [], _ = d.length, c > _--)
                                for (; ++_ < c;) d[_] = i ? d[(_ - 1) / 2 | 0] : a[_];
                            return o + d.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function (t) {
                            var e, r, d;
                            if ("number" == typeof t) t += u;
                            else if (n && M.test(t)) {
                                for (r = t.replace(M, "|").split("|"), d = 0; d < r.length; d++) r[d] = s(r[d]);
                                return r.join(",")
                            }
                            if (e = t.match(v) || [], d = e.length, c > d--)
                                for (; ++d < c;) e[d] = i ? e[(d - 1) / 2 | 0] : a[d];
                            return o + e.join(l) + h
                        } : function (t) {
                            return t
                        }
                    },
                    _t = function (t) {
                        return t = t.split(","),
                            function (e, i, n, s, r, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return s.parse(e, o, r, a)
                            }
                    },
                    pt = (B._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, s, r, a = this.data, o = a.proxy, h = a.firstMPT, l = 1e-6; h;) e = o[h.v], h.r ? e = Math.round(e) : l > e && e > -l && (e = 0), h.t[h.p] = e, h = h._next;
                        if (a.autoRotate && (a.autoRotate.rotation = o.rotation), 1 === t || 0 === t)
                            for (h = a.firstMPT, r = 1 === t ? "e" : "b"; h;) {
                                if (i = h.t, i.type) {
                                    if (1 === i.type) {
                                        for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                        i[r] = s
                                    }
                                } else i[r] = i.s + i.xs0;
                                h = h._next
                            }
                    }, function (t, e, i, n, s) {
                        this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
                    }),
                    ft = (B._parseToProxy = function (t, e, i, n, s, r) {
                        var a, o, h, l, c, u = n,
                            d = {},
                            _ = {},
                            p = i._transform,
                            f = z;
                        for (i._transform = null, z = e, n = c = i.parse(t, e, n, s), z = f, r && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                            if (n.type <= 1 && (o = n.p, _[o] = n.s + n.c, d[o] = n.s, r || (l = new pt(n, "s", o, l, n.r), n.c = 0), 1 === n.type))
                                for (a = n.l; --a > 0;) h = "xn" + a, o = n.p + "_" + h, _[o] = n.data[h], d[o] = n[h], r || (l = new pt(n, h, o, l, n.rxp[h]));
                            n = n._next
                        }
                        return {
                            proxy: d,
                            end: _,
                            firstMPT: l,
                            pt: c
                        }
                    }, B.CSSPropTween = function (t, e, n, s, a, o, h, l, c, u, d) {
                        this.t = t, this.p = e, this.s = n, this.c = s, this.n = h || e, t instanceof ft || r.push(this.n), this.r = l, this.type = o || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === d ? n + s : d, a && (this._next = a, a._prev = this)
                    }),
                    mt = function (t, e, i, n, s, r) {
                        var a = new ft(t, e, i, n - i, s, -1, r);
                        return a.b = i, a.e = a.xs0 = n, a
                    },
                    gt = a.parseComplex = function (t, e, i, n, s, r, a, o, h, l) {
                        i = i || r || "", a = new ft(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, n), n += "";
                        var u, d, _, p, f, v, b, y, x, w, T, E, C, S = i.split(", ").join(",").split(" "),
                            k = n.split(", ").join(",").split(" "),
                            P = S.length,
                            R = c !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(M, ", ").split(" "), k = k.join(" ").replace(M, ", ").split(" "), P = S.length), P !== k.length && (S = (r || "").split(" "), P = S.length), a.plugin = h, a.setRatio = l, ut.lastIndex = 0, u = 0; P > u; u++)
                            if (p = S[u], f = k[u], y = parseFloat(p), y || 0 === y) a.appendXtra("", y, st(f, y), f.replace(g, ""), R && -1 !== f.indexOf("px"), !0);
                            else if (s && ut.test(p)) E = "," === f.charAt(f.length - 1) ? ")," : ")", C = -1 !== f.indexOf("hsl") && U, p = lt(p, C), f = lt(f, C), x = p.length + f.length > 6, x && !U && 0 === f[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(k[u]).join("transparent")) : (U || (x = !1), C ? a.appendXtra(x ? "hsla(" : "hsl(", p[0], st(f[0], p[0]), ",", !1, !0).appendXtra("", p[1], st(f[1], p[1]), "%,", !1).appendXtra("", p[2], st(f[2], p[2]), x ? "%," : "%" + E, !1) : a.appendXtra(x ? "rgba(" : "rgb(", p[0], f[0] - p[0], ",", !0, !0).appendXtra("", p[1], f[1] - p[1], ",", !0).appendXtra("", p[2], f[2] - p[2], x ? "," : E, !0), x && (p = p.length < 4 ? 1 : p[3], a.appendXtra("", p, (f.length < 4 ? 1 : f[3]) - p, E, !1))), ut.lastIndex = 0;
                        else if (v = p.match(m)) {
                            if (b = f.match(g), !b || b.length !== v.length) return a;
                            for (_ = 0, d = 0; d < v.length; d++) T = v[d], w = p.indexOf(T, _), a.appendXtra(p.substr(_, w - _), Number(T), st(b[d], T), "", R && "px" === p.substr(w + T.length, 2), 0 === d), _ = w + T.length;
                            a["xs" + a.l] += p.substr(_)
                        } else a["xs" + a.l] += a.l ? " " + f : f;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (E = a.xs0 + a.data.s, u = 1; u < a.l; u++) E += a["xs" + u] + a.data["xn" + u];
                            a.e = E + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    vt = 9;
                for (l = ft.prototype, l.l = l.pr = 0; --vt > 0;) l["xn" + vt] = 0, l["xs" + vt] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, i, n, s, r) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += r && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new ft(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (n || ""), a)
                };
                var bt = function (t, e) {
                        e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    yt = B._registerComplexSpecialProp = function (t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, s, r = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || a, s = new bt(r[n], e)
                    },
                    xt = function (t) {
                        if (!h[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            yt(t, {
                                parser: function (t, i, n, s, r, a, l) {
                                    var c = o.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), h[n].parse(t, i, n, s, r, a, l)) : (X("Error: " + e + " js file not loaded."), r)
                                }
                            })
                        }
                    };
                l = bt.prototype, l.parseComplex = function (t, e, i, n, s, r) {
                    var a, o, h, l, c, u, d = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : d && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, d && (c = e.indexOf(d), u = i.indexOf(d), c !== u && (-1 === u ? o[a] = o[a].split(d).join("") : -1 === c && (o[a] += " " + d)));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
                }, l.parse = function (t, e, i, n, r, a, o) {
                    return this.parseComplex(t.style, this.format(Z(t, this.p, s, !1, this.dflt)), this.format(e), r, a)
                }, a.registerSpecialProp = function (t, e, i) {
                    yt(t, {
                        parser: function (t, n, s, r, a, o, h) {
                            var l = new ft(t, s, 0, 0, a, 2, s, !1, i);
                            return l.plugin = o, l.setRatio = e(t, n, r._tween, s), l
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = d || _;
                var wt, Tt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Et = W("transform"),
                    Ct = q + "transform",
                    St = W("transformOrigin"),
                    kt = null !== W("perspective"),
                    Pt = B.Transform = function () {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && kt ? a.defaultForce3D || "auto" : !1
                    },
                    Rt = window.SVGElement,
                    At = function (t, e, i) {
                        var n, s = H.createElementNS("http://www.w3.org/2000/svg", t),
                            r = /([a-z])([A-Z])/g;
                        for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(s), s
                    },
                    Ot = H.documentElement,
                    Mt = function () {
                        var t, e, i, n = f || /Android/i.test(j) && !window.chrome;
                        return H.createElementNS && !n && (t = At("svg", Ot), e = At("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[St] = "50% 50%", e.style[Et] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(_ && kt), Ot.removeChild(t)), n
                    }(),
                    Dt = function (t, e, i, n, s) {
                        var r, o, h, l, c, u, d, _, p, f, m, g, v, b, y = t._gsTransform,
                            x = Ht(t, !0);
                        y && (v = y.xOrigin, b = y.yOrigin), (!n || (r = n.split(" ")).length < 2) && (d = t.getBBox(), e = nt(e).split(" "), r = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = l = parseFloat(r[0]), i.yOrigin = c = parseFloat(r[1]), n && x !== zt && (u = x[0], d = x[1], _ = x[2], p = x[3], f = x[4], m = x[5], g = u * p - d * _, o = l * (p / g) + c * (-_ / g) + (_ * m - p * f) / g, h = l * (-d / g) + c * (u / g) - (u * m - d * f) / g, l = i.xOrigin = r[0] = o, c = i.yOrigin = r[1] = h), y && (s || s !== !1 && a.defaultSmoothOrigin !== !1 ? (o = l - v, h = c - b, y.xOffset += o * x[0] + h * x[2] - o, y.yOffset += o * x[1] + h * x[3] - h) : y.xOffset = y.yOffset = 0), t.setAttribute("data-svg-origin", r.join(" "))
                    },
                    Nt = function (t) {
                        return !!(Rt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    zt = [1, 0, 0, 1, 0, 0],
                    Ht = function (t, e) {
                        var i, n, s, r, a, o = t._gsTransform || new Pt,
                            h = 1e5;
                        if (Et ? n = Z(t, Ct, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(A), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (o.svg || t.getBBox && Nt(t)) && (i && -1 !== (t.style[Et] + "").indexOf("matrix") && (n = t.style[Et], i = 0), s = t.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (n = s, i = 0) : -1 !== s.indexOf("translate") && (n = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return zt;
                        for (s = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = s.length; --vt > -1;) r = Number(s[vt]), s[vt] = (a = r - (r |= 0)) ? (a * h + (0 > a ? -.5 : .5) | 0) / h + r : r;
                        return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                    },
                    Lt = B.getTransform = function (t, i, n, r) {
                        if (t._gsTransform && n && !r) return t._gsTransform;
                        var o, h, l, c, u, d, _ = n ? t._gsTransform || new Pt : new Pt,
                            p = _.scaleX < 0,
                            f = 2e-5,
                            m = 1e5,
                            g = kt ? parseFloat(Z(t, St, i, !1, "0 0 0").split(" ")[2]) || _.zOrigin || 0 : 0,
                            v = parseFloat(a.defaultTransformPerspective) || 0;
                        if (_.svg = !(!t.getBBox || !Nt(t)), _.svg && (Dt(t, Z(t, St, s, !1, "50% 50%") + "", _, t.getAttribute("data-svg-origin")), wt = a.useSVGTransformAttr || Mt), o = Ht(t), o !== zt) {
                            if (16 === o.length) {
                                var b, y, x, w, T, E = o[0],
                                    C = o[1],
                                    S = o[2],
                                    k = o[3],
                                    P = o[4],
                                    R = o[5],
                                    A = o[6],
                                    O = o[7],
                                    M = o[8],
                                    D = o[9],
                                    z = o[10],
                                    H = o[12],
                                    L = o[13],
                                    F = o[14],
                                    I = o[11],
                                    B = Math.atan2(A, z);
                                _.zOrigin && (F = -_.zOrigin, H = M * F - o[12], L = D * F - o[13], F = z * F + _.zOrigin - o[14]), _.rotationX = B * N, B && (w = Math.cos(-B), T = Math.sin(-B), b = P * w + M * T, y = R * w + D * T, x = A * w + z * T, M = P * -T + M * w, D = R * -T + D * w, z = A * -T + z * w, I = O * -T + I * w, P = b, R = y, A = x), B = Math.atan2(-S, z), _.rotationY = B * N, B && (w = Math.cos(-B), T = Math.sin(-B), b = E * w - M * T, y = C * w - D * T, x = S * w - z * T, D = C * T + D * w, z = S * T + z * w, I = k * T + I * w, E = b, C = y, S = x), B = Math.atan2(C, E), _.rotation = B * N, B && (w = Math.cos(-B), T = Math.sin(-B), E = E * w + P * T, y = C * w + R * T, R = C * -T + R * w, A = S * -T + A * w, C = y), _.rotationX && Math.abs(_.rotationX) + Math.abs(_.rotation) > 359.9 && (_.rotationX = _.rotation = 0, _.rotationY = 180 - _.rotationY), _.scaleX = (Math.sqrt(E * E + C * C) * m + .5 | 0) / m, _.scaleY = (Math.sqrt(R * R + D * D) * m + .5 | 0) / m, _.scaleZ = (Math.sqrt(A * A + z * z) * m + .5 | 0) / m, _.skewX = 0, _.perspective = I ? 1 / (0 > I ? -I : I) : 0, _.x = H, _.y = L, _.z = F, _.svg && (_.x -= _.xOrigin - (_.xOrigin * E - _.yOrigin * P), _.y -= _.yOrigin - (_.yOrigin * C - _.xOrigin * R))
                            } else if ((!kt || r || !o.length || _.x !== o[4] || _.y !== o[5] || !_.rotationX && !_.rotationY) && (void 0 === _.x || "none" !== Z(t, "display", i))) {
                                var j = o.length >= 6,
                                    U = j ? o[0] : 1,
                                    V = o[1] || 0,
                                    X = o[2] || 0,
                                    q = j ? o[3] : 1;
                                _.x = o[4] || 0, _.y = o[5] || 0, l = Math.sqrt(U * U + V * V), c = Math.sqrt(q * q + X * X), u = U || V ? Math.atan2(V, U) * N : _.rotation || 0, d = X || q ? Math.atan2(X, q) * N + u : _.skewX || 0, Math.abs(d) > 90 && Math.abs(d) < 270 && (p ? (l *= -1, d += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (c *= -1, d += 0 >= d ? 180 : -180)), _.scaleX = l, _.scaleY = c, _.rotation = u, _.skewX = d, kt && (_.rotationX = _.rotationY = _.z = 0, _.perspective = v, _.scaleZ = 1), _.svg && (_.x -= _.xOrigin - (_.xOrigin * U + _.yOrigin * X), _.y -= _.yOrigin - (_.xOrigin * V + _.yOrigin * q))
                            }
                            _.zOrigin = g;
                            for (h in _) _[h] < f && _[h] > -f && (_[h] = 0)
                        }
                        return n && (t._gsTransform = _, _.svg && (wt && t.style[Et] ? e.delayedCall(.001, function () {
                            jt(t.style, Et)
                        }) : !wt && t.getAttribute("transform") && e.delayedCall(.001, function () {
                            t.removeAttribute("transform")
                        }))), _
                    },
                    Ft = function (t) {
                        var e, i, n = this.data,
                            s = -n.rotation * D,
                            r = s + n.skewX * D,
                            a = 1e5,
                            o = (Math.cos(s) * n.scaleX * a | 0) / a,
                            h = (Math.sin(s) * n.scaleX * a | 0) / a,
                            l = (Math.sin(r) * -n.scaleY * a | 0) / a,
                            c = (Math.cos(r) * n.scaleY * a | 0) / a,
                            u = this.t.style,
                            d = this.t.currentStyle;
                        if (d) {
                            i = h, h = -l, l = -i, e = d.filter, u.filter = "";
                            var _, p, m = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== d.position,
                                b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + c,
                                w = n.x + m * n.xPercent / 100,
                                T = n.y + g * n.yPercent / 100;
                            if (null != n.ox && (_ = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2, p = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2, w += _ - (_ * o + p * h), T += p - (_ * l + p * c)), v ? (_ = m / 2, p = g / 2, b += ", Dx=" + (_ - (_ * o + p * h) + w) + ", Dy=" + (p - (_ * l + p * c) + T) + ")") : b += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(O, b) : u.filter = b + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === c && (v && -1 === b.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var E, C, S, k = 8 > f ? 1 : -1;
                                for (_ = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > h ? -h : h) * g)) / 2 + w), n.ieOffsetY = Math.round((g - ((0 > c ? -c : c) * g + (0 > l ? -l : l) * m)) / 2 + T), vt = 0; 4 > vt; vt++) C = et[vt], E = d[C], i = -1 !== E.indexOf("px") ? parseFloat(E) : Q(this.t, C, parseFloat(E), E.replace(y, "")) || 0, S = i !== n[C] ? 2 > vt ? -n.ieOffsetX : -n.ieOffsetY : 2 > vt ? _ - n.ieOffsetX : p - n.ieOffsetY, u[C] = (n[C] = Math.round(i - S * (0 === vt || 2 === vt ? 1 : k))) + "px"
                            }
                        }
                    },
                    It = B.set3DTransformRatio = B.setTransformRatio = function (t) {
                        var e, i, n, s, r, a, o, h, l, c, u, d, p, f, m, g, v, b, y, x, w, T, E, C = this.data,
                            S = this.t.style,
                            k = C.rotation,
                            P = C.rotationX,
                            R = C.rotationY,
                            A = C.scaleX,
                            O = C.scaleY,
                            M = C.scaleZ,
                            N = C.x,
                            z = C.y,
                            H = C.z,
                            L = C.svg,
                            F = C.perspective,
                            I = C.force3D;
                        if (((1 === t || 0 === t) && "auto" === I && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !I) && !H && !F && !R && !P && 1 === M || wt && L || !kt) return void(k || C.skewX || L ? (k *= D, T = C.skewX * D, E = 1e5, e = Math.cos(k) * A, s = Math.sin(k) * A, i = Math.sin(k - T) * -O, r = Math.cos(k - T) * O, T && "simple" === C.skewType && (v = Math.tan(T), v = Math.sqrt(1 + v * v), i *= v, r *= v, C.skewY && (e *= v, s *= v)), L && (N += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, z += C.yOrigin - (C.xOrigin * s + C.yOrigin * r) + C.yOffset, wt && (C.xPercent || C.yPercent) && (f = this.t.getBBox(), N += .01 * C.xPercent * f.width, z += .01 * C.yPercent * f.height), f = 1e-6, f > N && N > -f && (N = 0), f > z && z > -f && (z = 0)), y = (e * E | 0) / E + "," + (s * E | 0) / E + "," + (i * E | 0) / E + "," + (r * E | 0) / E + "," + N + "," + z + ")", L && wt ? this.t.setAttribute("transform", "matrix(" + y) : S[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + y) : S[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + O + "," + N + "," + z + ")");
                        if (_ && (f = 1e-4, f > A && A > -f && (A = M = 2e-5), f > O && O > -f && (O = M = 2e-5), !F || C.z || C.rotationX || C.rotationY || (F = 0)), k || C.skewX) k *= D, m = e = Math.cos(k), g = s = Math.sin(k), C.skewX && (k -= C.skewX * D, m = Math.cos(k), g = Math.sin(k), "simple" === C.skewType && (v = Math.tan(C.skewX * D), v = Math.sqrt(1 + v * v), m *= v, g *= v, C.skewY && (e *= v, s *= v))), i = -g, r = m;
                        else {
                            if (!(R || P || 1 !== M || F || L)) return void(S[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + N + "px," + z + "px," + H + "px)" + (1 !== A || 1 !== O ? " scale(" + A + "," + O + ")" : ""));
                            e = r = 1, i = s = 0
                        }
                        l = 1, n = a = o = h = c = u = 0, d = F ? -1 / F : 0, p = C.zOrigin, f = 1e-6, x = ",", w = "0", k = R * D, k && (m = Math.cos(k), g = Math.sin(k), o = -g, c = d * -g, n = e * g, a = s * g, l = m, d *= m, e *= m, s *= m), k = P * D, k && (m = Math.cos(k), g = Math.sin(k), v = i * m + n * g, b = r * m + a * g, h = l * g, u = d * g, n = i * -g + n * m, a = r * -g + a * m, l *= m, d *= m, i = v, r = b), 1 !== M && (n *= M, a *= M, l *= M, d *= M), 1 !== O && (i *= O, r *= O, h *= O, u *= O), 1 !== A && (e *= A, s *= A, o *= A, c *= A), (p || L) && (p && (N += n * -p, z += a * -p, H += l * -p + p), L && (N += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, z += C.yOrigin - (C.xOrigin * s + C.yOrigin * r) + C.yOffset), f > N && N > -f && (N = w), f > z && z > -f && (z = w), f > H && H > -f && (H = 0)), y = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", y += (f > e && e > -f ? w : e) + x + (f > s && s > -f ? w : s) + x + (f > o && o > -f ? w : o), y += x + (f > c && c > -f ? w : c) + x + (f > i && i > -f ? w : i) + x + (f > r && r > -f ? w : r), P || R || 1 !== M ? (y += x + (f > h && h > -f ? w : h) + x + (f > u && u > -f ? w : u) + x + (f > n && n > -f ? w : n), y += x + (f > a && a > -f ? w : a) + x + (f > l && l > -f ? w : l) + x + (f > d && d > -f ? w : d) + x) : y += ",0,0,0,0,1,0,", y += N + x + z + x + H + x + (F ? 1 + -H / F : 1) + ")", S[Et] = y
                    };
                l = Pt.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function (t, e, i, n, r, o, h) {
                        if (n._lastParsedTransform === h) return r;
                        n._lastParsedTransform = h;
                        var l, c, u, d, _, p, f, m, g, v, b = t._gsTransform,
                            y = t.style,
                            x = 1e-6,
                            w = Tt.length,
                            T = h,
                            E = {},
                            C = "transformOrigin";
                        if (h.display ? (d = Z(t, "display"), y.display = "block", l = Lt(t, s, !0, h.parseTransform), y.display = d) : l = Lt(t, s, !0, h.parseTransform), n._transform = l, "string" == typeof T.transform && Et) d = F.style, d[Et] = T.transform, d.display = "block", d.position = "absolute", H.body.appendChild(F), c = Lt(F, null, !1), H.body.removeChild(F), c.perspective || (c.perspective = l.perspective), null != T.xPercent && (c.xPercent = rt(T.xPercent, l.xPercent)), null != T.yPercent && (c.yPercent = rt(T.yPercent, l.yPercent));
                        else if ("object" == typeof T) {
                            if (c = {
                                    scaleX: rt(null != T.scaleX ? T.scaleX : T.scale, l.scaleX),
                                    scaleY: rt(null != T.scaleY ? T.scaleY : T.scale, l.scaleY),
                                    scaleZ: rt(T.scaleZ, l.scaleZ),
                                    x: rt(T.x, l.x),
                                    y: rt(T.y, l.y),
                                    z: rt(T.z, l.z),
                                    xPercent: rt(T.xPercent, l.xPercent),
                                    yPercent: rt(T.yPercent, l.yPercent),
                                    perspective: rt(T.transformPerspective, l.perspective)
                                }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (d in m) T[d] = m[d];
                                else T.rotation = m;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (c.x = 0, c.xPercent = rt(T.x, l.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (c.y = 0, c.yPercent = rt(T.y, l.yPercent)), c.rotation = at("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : l.rotation, l.rotation, "rotation", E), kt && (c.rotationX = at("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : l.rotationX || 0, l.rotationX, "rotationX", E), c.rotationY = at("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : l.rotationY || 0, l.rotationY, "rotationY", E)), c.skewX = null == T.skewX ? l.skewX : at(T.skewX, l.skewX), c.skewY = null == T.skewY ? l.skewY : at(T.skewY, l.skewY), (u = c.skewY - l.skewY) && (c.skewX += u, c.rotation += u)
                        }
                        for (kt && null != T.force3D && (l.force3D = T.force3D, f = !0), l.skewType = T.skewType || l.skewType || a.defaultSkewType, p = l.force3D || l.z || l.rotationX || l.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, p || null == T.scale || (c.scaleZ = 1); --w > -1;) i = Tt[w], _ = c[i] - l[i], (_ > x || -x > _ || null != T[i] || null != z[i]) && (f = !0, r = new ft(l, i, l[i], _, r), i in E && (r.e = E[i]), r.xs0 = 0, r.plugin = o, n._overwriteProps.push(r.n));
                        return _ = T.transformOrigin, l.svg && (_ || T.svgOrigin) && (g = l.xOffset, v = l.yOffset, Dt(t, nt(_), c, T.svgOrigin, T.smoothOrigin), r = mt(l, "xOrigin", (b ? l : c).xOrigin, c.xOrigin, r, C), r = mt(l, "yOrigin", (b ? l : c).yOrigin, c.yOrigin, r, C), (g !== l.xOffset || v !== l.yOffset) && (r = mt(l, "xOffset", b ? g : l.xOffset, l.xOffset, r, C), r = mt(l, "yOffset", b ? v : l.yOffset, l.yOffset, r, C)), _ = wt ? null : "0px 0px"), (_ || kt && p && l.zOrigin) && (Et ? (f = !0, i = St, _ = (_ || Z(t, i, s, !1, "50% 50%")) + "", r = new ft(y, i, 0, 0, r, -1, C), r.b = y[i], r.plugin = o, kt ? (d = l.zOrigin, _ = _.split(" "), l.zOrigin = (_.length > 2 && (0 === d || "0px" !== _[2]) ? parseFloat(_[2]) : d) || 0, r.xs0 = r.e = _[0] + " " + (_[1] || "50%") + " 0px", r = new ft(l, "zOrigin", 0, 0, r, -1, r.n), r.b = d, r.xs0 = r.e = l.zOrigin) : r.xs0 = r.e = _) : nt(_ + "", l)), f && (n._transformType = l.svg && wt || !p && 3 !== this._transformType ? 2 : 3), r
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
                    parser: function (t, e, i, r, a, o) {
                        e = this.format(e);
                        var h, l, c, u, d, _, p, f, m, g, v, b, y, x, w, T, E = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), h = e.split(" "), l = 0; l < E.length; l++) this.p.indexOf("border") && (E[l] = W(E[l])), d = u = Z(t, E[l], s, !1, "0px"), -1 !== d.indexOf(" ") && (u = d.split(" "), d = u[0], u = u[1]), _ = c = h[l], p = parseFloat(d), b = d.substr((p + "").length), y = "=" === _.charAt(1), y ? (f = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), f *= parseFloat(_), v = _.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(_), v = _.substr((f + "").length)), "" === v && (v = n[i] || b), v !== b && (x = Q(t, "borderLeft", p, b), w = Q(t, "borderTop", p, b), "%" === v ? (d = x / m * 100 + "%", u = w / g * 100 + "%") : "em" === v ? (T = Q(t, "borderLeft", 1, "em"), d = x / T + "em", u = w / T + "em") : (d = x + "px", u = w + "px"), y && (_ = parseFloat(d) + f + v, c = parseFloat(u) + f + v)), a = gt(C, E[l], d + " " + u, _ + " " + c, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: dt("0px 0px 0px 0px", !1, !0)
                }), yt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (t, e, i, n, r, a) {
                        var o, h, l, c, u, d, _ = "background-position",
                            p = s || G(t, null),
                            m = this.format((p ? f ? p.getPropertyValue(_ + "-x") + " " + p.getPropertyValue(_ + "-y") : p.getPropertyValue(_) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (d = Z(t, "backgroundImage").replace(k, ""), d && "none" !== d)) {
                            for (o = m.split(" "), h = g.split(" "), I.setAttribute("src", d), l = 2; --l > -1;) m = o[l], c = -1 !== m.indexOf("%"), c !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - I.width : t.offsetHeight - I.height, o[l] = c ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                            m = o.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, r, a)
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
                    parser: _t("marginTop,marginRight,marginBottom,marginLeft")
                }), yt("padding", {
                    parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), yt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (t, e, i, n, r, a) {
                        var o, h, l;
                        return 9 > f ? (h = t.currentStyle, l = 8 > f ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Z(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, a)
                    }
                }), yt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), yt("autoRound,strictUnits", {
                    parser: function (t, e, i, n, s) {
                        return s
                    }
                }), yt("border", {
                    defaultValue: "0px solid #000",
                    parser: function (t, e, i, n, r, a) {
                        return this.parseComplex(t.style, this.format(Z(t, "borderTopWidth", s, !1, "0px") + " " + Z(t, "borderTopStyle", s, !1, "solid") + " " + Z(t, "borderTopColor", s, !1, "#000")), this.format(e), r, a)
                    },
                    color: !0,
                    formatter: function (t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
                    }
                }), yt("borderWidth", {
                    parser: _t("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), yt("float,cssFloat,styleFloat", {
                    parser: function (t, e, i, n, s, r) {
                        var a = t.style,
                            o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                        return new ft(a, o, 0, 0, s, -1, i, !1, 0, a[o], e)
                    }
                });
                var Bt = function (t) {
                    var e, i = this.t,
                        n = i.filter || Z(this.data, "filter") || "",
                        s = this.s + this.c * t | 0;
                    100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Z(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(x, "opacity=" + s))
                };
                yt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, i, n, r, a) {
                        var o = parseFloat(Z(t, "opacity", s, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Z(t, "visibility", s) && 0 !== e && (o = 0), U ? r = new ft(h, "opacity", o, e - o, r) : (r = new ft(h, "opacity", 100 * o, 100 * (e - o), r), r.xn1 = l ? 1 : 0, h.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = a, r.setRatio = Bt), l && (r = new ft(h, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                    }
                });
                var jt = function (t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ut = function (t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : jt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                yt("className", {
                    parser: function (t, e, n, r, a, o, h) {
                        var l, c, u, d, _, p = t.getAttribute("class") || "",
                            f = t.style.cssText;
                        if (a = r._classNamePT = new ft(t, n, 0, 0, a, 2), a.setRatio = Ut, a.pr = -11, i = !0, a.b = p, c = J(t, s), u = t._gsClassPT) {
                            for (d = {}, _ = u.data; _;) d[_.p] = 1, _ = _._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), l = $(t, c, J(t), h, d), t.setAttribute("class", p), a.data = l.firstMPT, t.style.cssText = f, a = a.xfirst = r.parse(t, l.difs, a, o)
                    }
                });
                var Vt = function (t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, s, r, a = this.t.style,
                            o = h.transform.parse;
                        if ("all" === this.e) a.cssText = "", s = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], h[i] && (h[i].parse === o ? s = !0 : i = "transformOrigin" === i ? St : h[i].p), jt(a, i);
                        s && (jt(a, Et), r = this.t._gsTransform, r && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (yt("clearProps", {
                        parser: function (t, e, n, s, r) {
                            return r = new ft(t, n, 0, 0, r, 2), r.setRatio = Vt, r.e = e, r.pr = -10, r.data = s._tween, i = !0, r
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), vt = l.length; vt--;) xt(l[vt]);
                l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function (t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, c = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, s = G(t, ""), r = this._overwriteProps;
                    var l, _, f, m, g, v, b, y, x, T = t.style;
                    if (u && "" === T.zIndex && (l = Z(t, "zIndex", s), ("auto" === l || "" === l) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (m = T.cssText, l = J(t, s), T.cssText = m + ";" + e, l = $(t, l, J(t)).difs, !U && w.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, T.cssText = m), e.className ? this._firstPT = _ = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = _ = this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, Et ? d && (u = !0, "" === T.zIndex && (b = Z(t, "zIndex", s), ("auto" === b || "" === b) && this._addLazySet(T, "zIndex", 0)), p && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : T.zoom = 1, f = _; f && f._next;) f = f._next;
                        y = new ft(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, f), y.setRatio = Et ? It : Ft, y.data = this._transform || Lt(t, s, !0), y.tween = o, y.pr = -1, r.pop()
                    }
                    if (i) {
                        for (; _;) {
                            for (v = _._next, f = m; f && f.pr > _.pr;) f = f._next;
                            (_._prev = f ? f._prev : g) ? _._prev._next = _: m = _, (_._next = f) ? f._prev = _ : g = _, _ = v
                        }
                        this._firstPT = m
                    }
                    return !0
                }, l.parse = function (t, e, i, r) {
                    var a, o, l, u, d, _, p, f, m, g, v = t.style;
                    for (a in e) _ = e[a], o = h[a], o ? i = o.parse(t, _, a, this, i, r, e) : (d = Z(t, a, s) + "", m = "string" == typeof _, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && E.test(_) ? (m || (_ = lt(_), _ = (_.length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"), i = gt(v, a, d, _, !0, "transparent", i, 0, r)) : !m || -1 === _.indexOf(" ") && -1 === _.indexOf(",") ? (l = parseFloat(d), p = l || 0 === l ? d.substr((l + "").length) : "", ("" === d || "auto" === d) && ("width" === a || "height" === a ? (l = it(t, a, s), p = "px") : "left" === a || "top" === a ? (l = K(t, a, s), p = "px") : (l = "opacity" !== a ? 0 : 1, p = "")), g = m && "=" === _.charAt(1), g ? (u = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), u *= parseFloat(_), f = _.replace(y, "")) : (u = parseFloat(_), f = m ? _.replace(y, "") : ""), "" === f && (f = a in n ? n[a] : p), _ = u || 0 === u ? (g ? u + l : u) + f : e[a], p !== f && "" !== f && (u || 0 === u) && l && (l = Q(t, a, l, p), "%" === f ? (l /= Q(t, a, 100, "%") / 100, e.strictUnits !== !0 && (d = l + "%")) : "em" === f || "rem" === f || "vw" === f || "vh" === f ? l /= Q(t, a, 1, f) : "px" !== f && (u = Q(t, a, u, f), f = "px"), g && (u || 0 === u) && (_ = u + l + f)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (_ || _ + "" != "NaN" && null != _) ? (i = new ft(v, a, u || l || 0, 0, i, -1, a, !1, 0, d, _), i.xs0 = "none" !== _ || "display" !== a && -1 === a.indexOf("Style") ? _ : d) : X("invalid " + a + " tween value: " + e[a]) : (i = new ft(v, a, l, u - l, i, 0, a, c !== !1 && ("px" === f || "zIndex" === a), 0, d, _), i.xs0 = f)) : i = gt(v, a, d, _, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                    return i
                }, l.setRatio = function (t) {
                    var e, i, n, s = this._firstPT,
                        r = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; s;) {
                                if (e = s.c * t + s.s, s.r ? e = Math.round(e) : r > e && e > -r && (e = 0), s.type)
                                    if (1 === s.type)
                                        if (n = s.l, 2 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                        else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                else s.t[s.p] = e + s.xs0;
                                s = s._next
                            } else
                                for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                        else
                            for (; s;) {
                                if (2 !== s.type)
                                    if (s.r && -1 !== s.type)
                                        if (e = Math.round(s.s + s.c), s.type) {
                                            if (1 === s.type) {
                                                for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                                s.t[s.p] = i
                                            }
                                        } else s.t[s.p] = e + s.xs0;
                                else s.t[s.p] = s.e;
                                else s.setRatio(t);
                                s = s._next
                            }
                }, l._enableTransforms = function (t) {
                    this._transform = this._transform || Lt(this._target, s, !0), this._transformType = this._transform.svg && wt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Xt = function (t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                l._addLazySet = function (t, e, i) {
                    var n = this._firstPT = new ft(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Xt, n.data = this
                }, l._linkCSSP = function (t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, l._kill = function (e) {
                    var i, n, s, r = e;
                    if (e.autoAlpha || e.alpha) {
                        r = {};
                        for (n in e) r[n] = e[n];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, r)
                };
                var qt = function (t, e, i) {
                    var n, s, r, a;
                    if (t.slice)
                        for (s = t.length; --s > -1;) qt(t[s], e, i);
                    else
                        for (n = t.childNodes, s = n.length; --s > -1;) r = n[s], a = r.type, r.style && (e.push(J(r)), i && i.push(r)), 1 !== a && 9 !== a && 11 !== a || !r.childNodes.length || qt(r, e, i)
                };
                return a.cascadeTo = function (t, i, n) {
                    var s, r, a, o, h = e.to(t, i, n),
                        l = [h],
                        c = [],
                        u = [],
                        d = [],
                        _ = e._internals.reservedProps;
                    for (t = h._targets || h.target, qt(t, c, d), h.render(i, !0, !0), qt(t, u), h.render(0, !0, !0), h._enabled(!0), s = d.length; --s > -1;)
                        if (r = $(d[s], c[s], u[s]), r.firstMPT) {
                            r = r.difs;
                            for (a in n) _[a] && (r[a] = n[a]);
                            o = {};
                            for (a in r) o[a] = c[s][a];
                            l.push(e.fromTo(d[s], i, o, r))
                        }
                    return l
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
                    for (var t, i, n, s = this._tween, r = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), a = r.length, o = {}, h = s._propLookup.roundProps; --a > -1;) o[r[a]] = 1;
                    for (a = r.length; --a > -1;)
                        for (t = r[a], i = s._firstPT; i;) n = i._next, i.pg ? i.t._roundProps(o, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : s._firstPT === i && (s._firstPT = n), i._next = i._prev = null, s._propLookup[t] = h)), i = n;
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
                    var n, s, r, a, o, h, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        c = 1e-6;
                    for (n in e) "useRadians" !== n && (h = (e[n] + "").split("_"), s = h[0], r = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), a = this.finals[n] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, o = a - r, h.length && (s = h.join("_"), -1 !== s.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== s.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (o / l | 0) * l : -1 !== s.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (o / l | 0) * l)), (o > c || -c > o) && (this._addTween(t, n, r, r + o, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function (t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                var e, i, n, s = _gsScope.GreenSockGlobals || _gsScope,
                    r = s.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = r._class,
                    l = function (e, i) {
                        var n = h("easing." + e, function () {}, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, n
                    },
                    c = t.register || function () {},
                    u = function (t, e, i, n, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(r, t), r
                    },
                    d = function (t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    _ = function (e, i) {
                        var n = h("easing." + e, function (t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, s.config = function (t) {
                            return new n(t)
                        }, n
                    },
                    p = u("Back", _("BackOut", function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), _("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), _("BackInOut", function (t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    f = h("easing.SlowMo", function (t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    m = f.prototype = new t;
                return m.constructor = f, m.getRatio = function (t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, f.ease = new f(.7, .7), m.config = f.config = function (t, e, i) {
                    return new f(t, e, i)
                }, e = h("easing.SteppedEase", function (t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function (t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, m.config = e.config = function (t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function (e) {
                    e = e || {};
                    for (var i, n, s, r, a, o, h = e.taper || "none", l = [], c = 0, u = 0 | (e.points || 20), _ = u, p = e.randomize !== !1, f = e.clamp === !0, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --_ > -1;) i = p ? Math.random() : 1 / u * _, n = m ? m.getRatio(i) : i, "none" === h ? s = g : "out" === h ? (r = 1 - i, s = r * r * g) : "in" === h ? s = i * i * g : .5 > i ? (r = 2 * i, s = r * r * .5 * g) : (r = 2 * (1 - i), s = r * r * .5 * g), p ? n += Math.random() * s - .5 * s : _ % 2 ? n += .5 * s : n -= .5 * s, f && (n > 1 ? n = 1 : 0 > n && (n = 0)), l[c++] = {
                        x: i,
                        y: n
                    };
                    for (l.sort(function (t, e) {
                            return t.x - e.x
                        }), o = new d(1, 1, null), _ = u; --_ > -1;) a = l[_], o = new d(a.x, a.y, o);
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
                }, i.ease = new i, u("Bounce", l("BounceOut", function (t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function (t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function (t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function (t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function (e, i, n) {
                    var s = h("easing." + e, function (t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        r = s.prototype = new t;
                    return r.constructor = s, r.getRatio = i, r.config = function (t, e) {
                        return new s(t, e)
                    }, s
                }, u("Elastic", n("ElasticOut", function (t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function (t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function (t) {
                    return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), u("Expo", l("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function (t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function (t) {
                    return Math.sin(t * o)
                }), l("SineIn", function (t) {
                    return -Math.cos(t * o) + 1
                }), l("SineInOut", function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function (e) {
                        return t.map[e]
                    }
                }, !0), c(s.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, s, r, a, o, h = function (t) {
                    var e, n = t.split("."),
                        s = i;
                    for (e = 0; e < n.length; e++) s[n[e]] = s = s[n[e]] || {};
                    return s
                },
                l = h("com.greensock"),
                c = 1e-10,
                u = function (t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                d = function () {},
                _ = function () {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function (i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                p = {},
                f = function (n, s, r, a) {
                    this.sc = p[n] ? p[n].sc : [], p[n] = this, this.gsClass = null, this.func = r;
                    var o = [];
                    this.check = function (l) {
                        for (var c, u, d, _, m, g = s.length, v = g; --g > -1;)(c = p[s[g]] || new f(s[g], [])).gsClass ? (o[g] = c.gsClass, v--) : l && c.sc.push(this);
                        if (0 === v && r)
                            for (u = ("com.greensock." + n).split("."), d = u.pop(), _ = h(u.join("."))[d] = this.gsClass = r.apply(r, o), a && (i[d] = _, m = "undefined" != typeof module && module.exports, !m && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                                    return _
                                }) : n === e && m && (module.exports = _)), g = 0; g < this.sc.length; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                m = t._gsDefine = function (t, e, i, n) {
                    return new f(t, e, i, n)
                },
                g = l._class = function (t, e, i) {
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
                    for (var s, r, a, o, h = e.split(","), c = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (r = h[c], s = n ? g("easing." + r, null, !0) : l.easing[r] || {}, a = u.length; --a > -1;) o = u[a], x[r + "." + o] = x[o + r] = s[o] = t.getRatio ? t : t[o] || new t
                };
            for (r = y.prototype, r._calcEnd = !1, r.getRatio = function (t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = n.length; --s > -1;) r = n[s] + ",Power" + s, w(new y(null, null, 1, s), r, "easeOut", !0), w(new y(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), w(new y(null, null, 3, s), r, "easeInOut");
            x.linear = l.easing.Linear.easeIn, x.swing = l.easing.Quad.easeInOut;
            var T = g("events.EventDispatcher", function (t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            r = T.prototype, r.addEventListener = function (t, e, i, n, s) {
                s = s || 0;
                var r, h, l = this._listeners[t],
                    c = 0;
                for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) r = l[h], r.c === e && r.s === i ? l.splice(h, 1) : 0 === c && r.pr < s && (c = h + 1);
                l.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: s
                }), this !== a || o || a.wake()
            }, r.removeEventListener = function (t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, r.dispatchEvent = function (t) {
                var e, i, n, s = this._listeners[t];
                if (s)
                    for (e = s.length, i = this._eventTarget; --e > -1;) n = s[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var E = t.requestAnimationFrame,
                C = t.cancelAnimationFrame,
                S = Date.now || function () {
                    return (new Date).getTime()
                },
                k = S();
            for (n = ["ms", "moz", "webkit", "o"], s = n.length; --s > -1 && !E;) E = t[n[s] + "RequestAnimationFrame"], C = t[n[s] + "CancelAnimationFrame"] || t[n[s] + "CancelRequestAnimationFrame"];
            g("Ticker", function (t, e) {
                var i, n, s, r, h, l = this,
                    u = S(),
                    _ = e !== !1 && E ? "auto" : !1,
                    p = 500,
                    f = 33,
                    m = "tick",
                    g = function (t) {
                        var e, a, o = S() - k;
                        o > p && (u += o - f), k += o, l.time = (k - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= r ? .004 : r - e), a = !0), t !== !0 && (s = n(g)), a && l.dispatchEvent(m)
                    };
                T.call(l), l.time = l.frame = 0, l.tick = function () {
                    g(!0)
                }, l.lagSmoothing = function (t, e) {
                    p = t || 1 / c, f = Math.min(e, p, 0)
                }, l.sleep = function () {
                    null != s && (_ && C ? C(s) : clearTimeout(s), n = d, s = null, l === a && (o = !1))
                }, l.wake = function (t) {
                    null !== s ? l.sleep() : t ? u += -k + (k = S()) : l.frame > 10 && (k = S() - p + 5), n = 0 === i ? d : _ && E ? E : function (t) {
                        return setTimeout(t, 1e3 * (h - l.time) + 1 | 0)
                    }, l === a && (o = !0), g(2)
                }, l.fps = function (t) {
                    return arguments.length ? (i = t, r = 1 / (i || 60), h = this.time + r, void l.wake()) : i
                }, l.useRAF = function (t) {
                    return arguments.length ? (l.sleep(), _ = t, void l.fps(i)) : _
                }, l.fps(t), setTimeout(function () {
                    "auto" === _ && l.frame < 5 && "hidden" !== document.visibilityState && l.useRAF(!1)
                }, 1500)
            }), r = l.Ticker.prototype = new l.events.EventDispatcher, r.constructor = l.Ticker;
            var P = g("core.Animation", function (t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                    o || a.wake();
                    var i = this.vars.useFrames ? Y : W;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = P.ticker = new l.Ticker, r = P.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var R = function () {
                o && S() - k > 2e3 && a.wake(), setTimeout(R, 2e3)
            };
            R(), r.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, r.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, r.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, r.seek = function (t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, r.restart = function (t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, r.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, r.render = function (t, e, i) {}, r.invalidate = function () {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, r.isActive = function () {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
            }, r._enabled = function (t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function (t, e) {
                return this._enabled(!1, !1)
            }, r.kill = function (t, e) {
                return this._kill(t, e), this
            }, r._uncache = function (t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, r._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, r._callback = function (t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || b)
            }, r.eventCallback = function (t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var s = this.vars;
                    if (1 === arguments.length) return s[t];
                    null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = _(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, r.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, r.duration = function (t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function (t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, r.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, r.totalTime = function (t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            s = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (N.length && Z(), this.render(t, e, !1), N.length && Z())
                }
                return this
            }, r.progress = r.totalProgress = function (t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, r.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, r.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, r.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, r.reversed = function (t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (o || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var A = g("core.SimpleTimeline", function (t) {
                P.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            r = A.prototype = new P, r.constructor = A, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function (t, e, i, n) {
                var s, r;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
                    for (r = t._startTime; s && s._startTime > r;) s = s._prev;
                return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
            }, r._remove = function (t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, r.render = function (t, e, i) {
                var n, s = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
            }, r.rawTime = function () {
                return o || a.wake(), this._totalTime
            };
            var O = g("TweenLite", function (e, i, n) {
                    if (P.call(this, i, n), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                    var s, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite;
                    if (this._overwrite = h = null == h ? q[O.defaultOverwrite] : "number" == typeof h ? h >> 0 : q[h], (o || e instanceof Array || e.push && _(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], s = 0; s < a.length; s++) r = a[s], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(u(r))) : (this._siblings[s] = Q(r, this, !1), 1 === h && this._siblings[s].length > 1 && J(r, this, null, 1, this._siblings[s])) : (r = a[s--] = O.selector(r), "string" == typeof r && a.splice(s + 1, 1)) : a.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === h && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                M = function (e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                D = function (t, e) {
                    var i, n = {};
                    for (i in t) X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            r = O.prototype = new P, r.constructor = O, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, O.version = "1.18.2", O.defaultEase = r._ease = new y(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = a, O.autoSleep = 120, O.lagSmoothing = function (t, e) {
                a.lagSmoothing(t, e)
            }, O.selector = t.$ || t.jQuery || function (e) {
                var i = t.$ || t.jQuery;
                return i ? (O.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var N = [],
                z = {},
                H = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                L = function (t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                F = function (t, e, i, n) {
                    var s, r, a, o, h, l, c, u = [t, e],
                        d = 0,
                        _ = "",
                        p = 0;
                    for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, s = t.match(H) || [], r = e.match(H) || [], n && (n._next = null, n.blob = 1, u._firstPT = n), h = r.length, o = 0; h > o; o++) c = r[o], l = e.substr(d, e.indexOf(c, d) - d), _ += l || !o ? l : ",", d += l.length, p ? p = (p + 1) % 5 : "rgba(" === l.substr(-5) && (p = 1), c === s[o] || s.length <= o ? _ += c : (_ && (u.push(_), _ = ""), a = parseFloat(s[o]), u.push(a), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                        f: 0,
                        r: p && 4 > p
                    }), d += c.length;
                    return _ += e.substr(d), _ && u.push(_), u.setRatio = L, u
                },
                I = function (t, e, i, n, s, r, a, o) {
                    var h, l, c = "get" === i ? t[e] : i,
                        u = typeof t[e],
                        d = "string" == typeof n && "=" === n.charAt(1),
                        _ = {
                            t: t,
                            p: e,
                            s: c,
                            f: "function" === u,
                            pg: 0,
                            n: s || e,
                            r: r,
                            pr: 0,
                            c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                        };
                    return "number" !== u && ("function" === u && "get" === i && (l = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), _.s = c = a ? t[l](a) : t[l]()), "string" == typeof c && (a || isNaN(c)) ? (_.fp = a, h = F(c, n, o || O.defaultStringFilter, _), _ = {
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: s || e,
                        pr: 0
                    }) : d || (_.s = parseFloat(c), _.c = parseFloat(n) - _.s || 0)), _.c ? ((_._next = this._firstPT) && (_._next._prev = _), this._firstPT = _, _) : void 0
                },
                B = O._internals = {
                    isArray: _,
                    isSelector: M,
                    lazyTweens: N,
                    blobDif: F
                },
                j = O._plugins = {},
                U = B.tweenLookup = {},
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
                q = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                Y = P._rootFramesTimeline = new A,
                W = P._rootTimeline = new A,
                G = 30,
                Z = B.lazyRender = function () {
                    var t, e = N.length;
                    for (z = {}; --e > -1;) t = N[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    N.length = 0
                };
            W._startTime = a.time, Y._startTime = a.frame, W._active = Y._active = !0, setTimeout(Z, 1), P._updateRoot = O.render = function () {
                var t, e, i;
                if (N.length && Z(), W.render((a.time - W._startTime) * W._timeScale, !1, !1), Y.render((a.frame - Y._startTime) * Y._timeScale, !1, !1), N.length && Z(), a.frame >= G) {
                    G = a.frame + (parseInt(O.autoSleep, 10) || 120);
                    for (i in U) {
                        for (e = U[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete U[i]
                    }
                    if (i = W._first, (!i || i._paused) && O.autoSleep && !Y._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", P._updateRoot);
            var Q = function (t, e, i) {
                    var n, s, r = t._gsTweenID;
                    if (U[r || (t._gsTweenID = r = "t" + V++)] || (U[r] = {
                            target: t,
                            tweens: []
                        }), e && (n = U[r].tweens, n[s = n.length] = e, i))
                        for (; --s > -1;) n[s] === e && n.splice(s, 1);
                    return U[r].tweens
                },
                K = function (t, e, i, n) {
                    var s, r, a = t.vars.onOverwrite;
                    return a && (s = a(t, e, i, n)), a = O.onOverwrite, a && (r = a(t, e, i, n)), s !== !1 && r !== !1
                },
                J = function (t, e, i, n, s) {
                    var r, a, o, h;
                    if (1 === n || n >= 4) {
                        for (h = s.length, r = 0; h > r; r++)
                            if ((o = s[r]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var l, u = e._startTime + c,
                        d = [],
                        _ = 0,
                        p = 0 === e._duration;
                    for (r = s.length; --r > -1;)(o = s[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || $(e, 0, p), 0 === $(o, l, p) && (d[_++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && u - o._startTime <= 2e-10 || (d[_++] = o)));
                    for (r = _; --r > -1;)
                        if (o = d[r], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
                            if (2 !== n && !K(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                $ = function (t, e, i) {
                    for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline;) {
                        if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return r /= s, r > e ? r - e : i && r === e || !t._initted && 2 * c > r - e ? c : (r += t.totalDuration() / t._timeScale / s) > e + c ? 0 : r - e - c
                };
            r._init = function () {
                var t, e, i, n, s, r = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    h = !!r.immediateRender,
                    l = r.ease;
                if (r.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                    for (n in r.startAt) s[n] = r.startAt[n];
                    if (s.overwrite = !1, s.immediateRender = !0, s.lazy = h && r.lazy !== !1, s.startAt = s.delay = null, this._startAt = O.to(this.target, 0, s), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (r.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (h = !1), i = {};
                        for (n in r) X[n] && "autoCSS" !== n || (i[n] = r[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && r.lazy !== !1, i.immediateRender = h, this._startAt = O.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = l = l ? l instanceof y ? l : "function" == typeof l ? new y(l, r.easeParams) : x[l] || O.defaultEase : O.defaultEase, r.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && O._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, r._initProps = function (e, i, n, s) {
                var r, a, o, h, l, c;
                if (null == e) return !1;
                z[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && D(this.vars, e);
                for (r in this.vars)
                    if (c = this.vars[r], X[r]) c && (c instanceof Array || c.push && _(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[r] = c = this._swapSelfInParams(c, this));
                    else if (j[r] && (h = new j[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = l = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: r,
                            pg: 1,
                            pr: h._priority
                        }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l)
                } else i[r] = I.call(this, e, r, "get", c, r, 0, null, this.vars.stringFilter);
                return s && this._kill(s, e) ? this._initProps(e, i, n, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0), o)
            }, r.render = function (t, e, i) {
                var n, s, r, a, o = this._time,
                    h = this._duration,
                    l = this._rawPrevTime;
                if (t >= h - 1e-7) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > l || 0 >= t && t >= -1e-7 || l === c && "isPause" !== this.data) && l !== t && (i = !0, l > c && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : c);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : c)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / h,
                        d = this._easeType,
                        _ = this._easePower;
                    (1 === d || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === _ ? u *= u : 2 === _ ? u *= u * u : 3 === _ ? u *= u * u * u : 4 === _ && (u *= u * u * u * u), 1 === d ? this.ratio = 1 - u : 2 === d ? this.ratio = u : .5 > t / h ? this.ratio = u / 2 : this.ratio = 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, N.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / h) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || n) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === h && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
                }
            }, r._kill = function (t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
                var n, s, r, a, o, h, l, c, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((_(e) || M(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (h = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (l = t || o, c = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill), i && (O.onOverwrite || this.vars.onOverwrite)) {
                            for (r in l) o[r] && (u || (u = []), u.push(r));
                            if ((u || !t) && !K(this, i, e, u)) return !1
                        }
                        for (r in l)(a = o[r]) && (d && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, h = !0), a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), c && (s[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return h
            }, r.invalidate = function () {
                return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], P.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, r._enabled = function (t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = Q(n[i], this, !0);
                    else this._siblings = Q(this.target, this, !0)
                }
                return P.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, O.to = function (t, e, i) {
                return new O(t, e, i)
            }, O.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i)
            }, O.fromTo = function (t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new O(t, e, n)
            }, O.delayedCall = function (t, e, i, n, s) {
                return new O(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, O.set = function (t, e) {
                return new O(t, 0, e)
            }, O.getTweensOf = function (t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : O.selector(t) || t;
                var i, n, s, r;
                if ((_(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(O.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1)
                } else
                    for (n = Q(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, O.killTweensOf = O.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = O.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
            };
            var tt = g("plugins.TweenPlugin", function (t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
            }, !0);
            if (r = tt.prototype, tt.version = "1.18.0", tt.API = 2, r._firstPT = null, r._addTween = I, r.setRatio = L, r._kill = function (t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, r._roundProps = function (t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, O._onPluginEvent = function (t, e) {
                    var i, n, s, r, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, n = s; n && n.pr > o.pr;) n = n._next;
                            (o._prev = n ? n._prev : r) ? o._prev._next = o: s = o, (o._next = n) ? n._prev = o : r = o, o = a
                        }
                        o = e._firstPT = s
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, tt.activate = function (t) {
                    for (var e = t.length; --e > -1;) t[e].API === tt.API && (j[(new t[e])._propName] = t[e]);
                    return !0
                }, m.plugin = function (t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        s = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                            tt.call(this, i, n), this._overwriteProps = s || []
                        }, t.global === !0),
                        o = a.prototype = new tt(i);
                    o.constructor = a, a.API = t.API;
                    for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                    return a.version = t.version, tt.activate([a]), a
                }, n = t._gsQueue) {
                for (s = 0; s < n.length; s++) n[s]();
                for (r in p) p[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), THREE.BokehShader = {
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
var FXScene = function () {
    this.foreground_scene = new THREE.Scene, this.background_scene = new THREE.Scene, this.foreground_camera = new THREE.Camera, this.background_camera = new THREE.Camera, this.animation_bang = !1, this.animation = {
        animation_time: 0,
        vibration: .002
    }, this.clock = new THREE.Clock(!0), this.tick = 0
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
var data_color_picker = ["#e5fbf9", "#effafe", "#f8fefe", "#56b8db", "#3f89ac", "#608ea5", "#83d4f1", "#58b5d6", "#dbffff", "#ebf6fc", "#e5f5f5", "#ffffff"],
    Line = function (t, e, i, n) {
        this.line, this.dots2, this.parent1, this.parent2, this.parent1 = t, this.parent2 = e, this.opacity = .5;
        var s = new THREE.Geometry;
        s.dynamic = !0, s.vertices.push(new THREE.Vector3, new THREE.Vector3), this.line = new THREE.Line(s, i), this.line.visible = !1, this.dots2 = [], this.pointcounts = n > 0 ? n : 3 * Math.random() + 2;
        for (var s = new THREE.SphereGeometry(.1 + .3 * Math.random(), 5, 5), r = new THREE.MeshBasicMaterial({
                fog: !1,
                color: data_color_picker[Math.round(11 * Math.random())],
                transparent: !0,
                opacity: 0
            }), a = 0; a < this.pointcounts; a++) this.dots2.push({
            dot: new THREE.Mesh(s, r),
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
var BranchWeb = function () {
    this.full_object = new THREE.Object3D
};
BranchWeb.prototype.clean = function () {
    this.full_object = new THREE.Object3D
};
var gray_color_picker = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#ffffff"],
    social_color_picker = ["#00aced", "#3b5998", "#dd4b39", "#cb2027", "#007bb6", "#bb0000", "#aad450", "#32506d", "#517fa4", "#ff0084", "#ea4c89", "#a82400", "#0072b1", "#5B9A68", "#45668e", "#21759b", "#EB4823", "#7B0099", "#fb8f3d", "#ff3a00"];
BranchWeb.prototype.generate = function (t, e, i, n, s, r, a) {
    this.dots_velocity = i, this.opacity = .5;
    var n = n ? n : 90,
        o = new THREE.LineBasicMaterial({
            color: gray_color_picker[Math.round(4 * Math.random()) + 8],
            linewidth: 1.5,
            transparent: !0,
            fog: !0,
            opacity: 0
        }),
        h = new THREE.Geometry;
    h.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(t[0] * n, t[1] * n, t[2] * n)), h.computeLineDistances(), this.brazo = new THREE.Line(h, o), this.full_object.add(this.brazo), this.dots = [];
    for (var l = 0; e > l; l++) this.dots.push(new THREE.Mesh(s, r)), this.brazo.add(this.dots[l]);
    this.color = Math.round(19 * Math.random()), this.color_changer = 0, this.color_using = [new THREE.Color("#ffffff"), new THREE.Color("#ffffff")];
    var o = new THREE.MeshBasicMaterial({
        fog: !0,
        color: social_color_picker[this.color],
        transparent: !0,
        opacity: 0
    });
    this.final_sphere = new THREE.Mesh(a, o), this.final_sphere.position.x = t[0] * n, this.final_sphere.position.y = t[1] * n, this.final_sphere.position.z = t[2] * n, size = 1.5 + Math.random(), this.final_sphere.scale.set(size, size, size), this.full_object.add(this.final_sphere), this.visible = !0
}, BranchWeb.prototype.changeMainColour = function (t) {
    this.brazo.material.color.setStyle(t), this.color = 20, this.color_using[0] = new THREE.Color(t)
}, BranchWeb.prototype.changeSecondaryColour = function (t) {
    for (var e = 0; e < this.dots.length; e++) this.dots[e].material.color.setStyle(t);
    this.color = 20, this.color_using[0] = new THREE.Color(t)
}, BranchWeb.prototype.changeMainNodeColour = function (t) {
    this.final_sphere.material.color.setStyle(t), this.color = 20, this.color_using[1] = new THREE.Color(t)
}, BranchWeb.prototype.animate = function () {
    if (working = 0 != quality, working) {
        var t = Math.abs(Math.sin(u_time * this.dots_velocity));
        this.color_changer += .008 + .001 * t, this.color < social_color_picker.length ? (this.color_changer >= 1 && (this.color < social_color_picker.length - 1 ? this.color++ : this.color = 0, this.color_changer = 0), this.final_sphere.material.color.lerp(new THREE.Color(social_color_picker[this.color + 1]), this.color_changer)) : (this.color_changer >= 1 && (this.color = 20 == this.color ? 21 : 20, this.color_changer = 0), this.final_sphere.material.color.lerp(this.color_using[this.color - 20], this.color_changer));
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
        s = new THREE.CylinderGeometry(2, 2, i.length(), 6, 4),
        r = new THREE.Mesh(s, new THREE.MeshBasicMaterial({
            color: 255
        }));
    return r.rotation = n.rotation.clone(), r.position = (new THREE.Vector3).addVectors(t, i.multiplyScalar(.5)), r
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
};
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
Scene02.prototype.setup = function () {
    this.header_text = new TextWithSubline(electrolized_font, "WHAT IS DECENTRALIZATION?"), this.header_text.children[0].material.opacity = 0, this.header_text.children[1].material.opacity = 0, this.scene.add(this.header_text)
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
        middle_branches: this.middle_branches,
        central_sphere: this.central_sphere,
        face_branches: this.face_branches,
        face_lines: this.face_lines,
        quaternary_branches: this.quaternary_branches,
        particle_system: this.particle_system,
        particles: this.particles
    }
}, Scene03.prototype.setup = function (t) {
    this.scene = new THREE.Scene, this.scene.fog = new THREE.FogExp2(1118481, .0025), this.animation_bang = !1, this.animation = {
        branches_opacity: 0,
        animation_time: 0,
        vibration: .002
    }, this.nodes_appear = [], this.nodes_opacity = [], this.clock = new THREE.Clock(!0), this.tick = 0, this.particles = new THREE.Geometry, this.particleCount = 512, pMaterial = new THREE.PointsMaterial({
        color: 16777215,
        fog: !1,
        transparent: !0,
        alphaTest: .5,
        size: 20,
        map: (new THREE.TextureLoader).load(t.particle_path)
    });
    for (var e = PointsOnSphere(this.particleCount), i = 0; i < this.particleCount; i++) {
        var n = e[i].x + 100 * (-Math.random() + Math.random()),
            s = e[i].y + 100 * (-Math.random() + Math.random()),
            r = e[i].z + 100 * (-Math.random() + Math.random()),
            a = new THREE.Vector3(n, s, r);
        a.velocity = new THREE.Vector3(.03 * (-Math.random() + Math.random()), .03 * (-Math.random() + Math.random()), .03 * (-Math.random() + Math.random())), this.particles.vertices.push(a)
    }
    this.particle_system = new THREE.Points(this.particles, pMaterial), this.particle_system.sortParticles = !0, this.scene.add(this.particle_system), this.central_sphere = [];
    var o = new THREE.SphereGeometry(3, 50, 50),
        h = new THREE.MeshBasicMaterial({
            fog: !0,
            color: "#ffffff",
            transparent: !0,
            opacity: 0
        }),
        l = new THREE.MeshBasicMaterial({
            fog: !1,
            alphaTest: .5,
            color: "#ffffff",
            transparent: !0,
            opacity: 1
        }),
        c = new THREE.MeshBasicMaterial({
            fog: !1,
            alphaTest: .01,
            color: "#ffffff",
            transparent: !0,
            opacity: 1
        }),
        u = new THREE.MeshBasicMaterial({
            fog: !1,
            alphaTest: .5,
            color: "#ffffff",
            transparent: !0,
            opacity: 1
        }),
        d = new THREE.MeshBasicMaterial({
            fog: !1,
            alphaTest: .01,
            color: "#ffffff",
            transparent: !0,
            opacity: 1
        });
    this.central_sphere[0] = new THREE.Mesh(o, h), this.central_sphere[1] = new THREE.Mesh(o, l), this.central_sphere[1].scale.set(26, 26, 26), this.central_sphere[1].visible = !1, this.central_sphere[1].material.color.setHex(12918822), this.central_sphere[2] = new THREE.Mesh(o, c), this.central_sphere[2].scale.set(27, 27, 27), this.central_sphere[2].visible = !1, this.central_sphere[2].material.color.setHex(15020593), this.central_sphere[3] = new THREE.Mesh(o, u), this.central_sphere[3].scale.set(27.4, 27.4, 27.4), this.central_sphere[3].visible = !1, this.central_sphere[3].material.color.setHex(16203826), this.central_sphere[4] = new THREE.Mesh(o, d), this.central_sphere[4].scale.set(50, 50, 50), this.central_sphere[4].visible = !1, this.central_sphere[4].material.color.setHex(6225787), this.central_sphere[1].rotation.x += .4, this.central_sphere[2].rotation.x += .4, this.central_sphere[3].rotation.x += .4, this.central_sphere[4].rotation.x += .4, this.central_sphere[1].material.alphaMap = (new THREE.TextureLoader).load(t.spec_path1), this.central_sphere[2].material.alphaMap = (new THREE.TextureLoader).load(t.spec_path2), this.central_sphere[3].material.alphaMap = (new THREE.TextureLoader).load(t.spec_path3), this.central_sphere[4].material.alphaMap = (new THREE.TextureLoader).load(t.spec_path4), this.scene.add(this.central_sphere[0]), this.branches = [], this.middle_branches = [], this.cantidad_branches = this.NODE_COUNT, this.face_branches = [], this.face_lines = [], this.step = 2 * Math.PI / (this.cantidad_branches / this.NODE_SIZE);
    for (var _ = new THREE.SphereGeometry(.5 + .2 * Math.random(), 20, 20), o = new THREE.SphereGeometry(.3 + .1 * Math.random(), 10, 10), p = new THREE.MeshBasicMaterial({
            color: "#FFFFFF",
            transparent: !0,
            opacity: 0
        }), f = 0; f < this.cantidad_branches / this.NODE_SIZE; f++) {
        var m = new BranchWeb;
        m.generate([0, .6, 0], 1 + Math.floor(2 * Math.random()), .01 + .03 * Math.random(), 90 + Math.random(), o, p, _), this.middle_branches.push(m), this.scene.add(this.middle_branches[f].getObject()), this.middle_branches[f].getObject().rotation.z = .1 * Math.random() + f * this.step
    }
    for (var f = 0; f < face_points.length; f++) {
        var m = new BranchWeb;
        m.generate(face_points[f], 1 + Math.floor(2 * Math.random()), .01 + .03 * Math.random(), 98 + Math.random(), o, p, _), this.face_branches.push(m), this.face_branches[f].brazo.material.opacity = 0, this.face_branches[f].brazo.visible = !1
    }
    for (var f = 0; f < this.cantidad_branches; f++) {
        var m = new BranchWeb;
        m.generate(data[f], 1 + Math.floor(2 * Math.random()), .01 + .03 * Math.random(), 90 + Math.random(), o, p, _), this.branches.push(m), this.scene.add(this.branches[f].getObject())
    }
    for (var f = 0; f < this.face_branches.length; f++)
        for (var g = 0; g < face[f].length; g++) {
            var l = new THREE.LineBasicMaterial({
                opacity: 0,
                transparent: !0,
                color: "#7fb7e7",
                fog: !0
            });
            this.whole_line = new Line(this.face_branches[f].final_sphere, this.branches[face[f][g]].final_sphere, l, 1), this.face_lines.push(this.whole_line)
        }
    this.quaternary_branches = [];
    for (var f = 0; f < edge.length; f++) {
        var c = new THREE.LineBasicMaterial({
            opacity: 0,
            transparent: !0,
            color: "#7fb7e7",
            fog: !0
        });
        this.whole_line = new Line(this.branches[edge[f][0]].final_sphere, this.branches[edge[f][1]].final_sphere, c, 2), this.quaternary_branches.push(this.whole_line)
    }
    this.node_preference = [];
    for (var f = 0; f < this.branches.length; f++) this.nodes_appear[f] = !1, this.nodes_opacity[f] = -.2, this.node_preference[f] = data[f][0] * data[f][2] >= 0 ? 1 : -1;
    this.main_color = "", this.secondary_color = "", this.main_color_change = !1, this.secondary_color_change = !1, this.color_change = !1
}, Scene03.prototype.changeMainColour = function (t) {
    this.color_change = !0, this.main_color = t, this.main_color_change = !0
}, Scene03.prototype.changeSecondaryColour = function (t) {
    this.color_change = !0, this.secondary_color = t, this.secondary_color_change = !0
}, Scene03.prototype.changeMainNodeColour = function (t) {
    this.color_change = !0, this.main_node_color = t, this.main_node_color_change = !0
}, Scene03.prototype.loop = function () {
    var t = this.animation.vibration + this.rotation * (this.animation.animation_time * this.animation.animation_time) * .001,
        e = Math.sin(.01 * u_time) * t,
        i = Math.sin(.02 * u_time) * t;
    this.animation_bang === !1 && (this.startAnimationEvents(), this.animation_bang = !0), this.central_sphere[0].material.opacity = this.animation.branches_opacity;
    for (var n = (u_time * this.animation.vibration, 0); n < this.face_branches.length; n++) {
        var s = this.animation.vibration * Math.random();
        this.face_branches[n].getObject().rotation.x += e + s, this.face_branches[n].getObject().rotation.z += i + s
    }
    for (var n = 0; n < this.cantidad_branches; n++) {
        var s = this.animation.vibration * Math.random();
        this.branches[n].getObject().rotation.x += e + s, this.branches[n].getObject().rotation.z += i + s, 1 == this.nodes_appear[n] ? (this.branches[n].final_sphere.display = !0, this.branches[n].fadeIn(.1)) : this.animation.animation_time * this.animation.animation_time * this.animation.animation_time * this.animation.animation_time > Math.random() && (this.animation.animation_time > .2 && (this.nodes_appear[n] = !0), this.branches[n].final_sphere.material.opacity = 1, n < this.middle_branches.length && (this.middle_branches[n].final_sphere.material.opacity = 1)), this.branches[n].animate()
    }
    for (var n = 0; n < this.middle_branches.length; n++) this.middle_branches[n].getObject().rotation.x += e, this.middle_branches[n].getObject().rotation.z += i, 1 == this.nodes_appear[n] && (this.middle_branches[n].final_sphere.display = !0, this.middle_branches[n].fadeIn(.1)), this.middle_branches[n].animate();
    if (s_u_time > .5 || s_u_time < -.5) {
        for (var r = this.particleCount; r--;) {
            var a = this.particles.vertices[r];
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
        this.color_change = !1
    }
};
var gray_color_picker = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#ffffff"],
    Scene04 = function () {
        this.NODE_SIZE = 10, this.HALF_SIZE = this.NODE_SIZE / 2, this.rotation = -.003, this.r3 = .35 * Math.PI
    };
Scene04.prototype.startAnimationEvents = function () {
    TweenMax.fromTo(this.animation, 4, {
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
    this.scene = new THREE.Scene, this.scene.fog = new THREE.FogExp2(1118481, .0025), this.animation_bang = !1, this.animation = {
        animation_time: 0,
        central_sphere_opacity: 0,
        central_sphere_scale: 1,
        branches_opacity: 1,
        new_branches_opacity: 0,
        scale: 1,
        going_to_center: 1,
        vibration: .001
    }, this.main_color = "", this.secondary_color = "", this.main_node_color = "", this.main_color_change = !1, this.secondary_color_change = !1, this.main_node_color_change = !1, this.color_change = !1, this.branches = t.branches, this.central_sphere = t.central_sphere, this.cantidad_branches = this.branches.length, this.secondary_branches = [], this.face_lines = t.face_lines, this.face_branches = t.face_branches, this.middle_branches = t.middle_branches, this.quaternary_branches = t.quaternary_branches, this.particle_system = t.particle_system, this.particles = t.particles, this.scene.add(this.particle_system);
    for (var e = 0; e < this.cantidad_branches; e++) this.scene.add(this.branches[e].getObject());
    for (var e = 0; e < this.middle_branches.length; e++) this.scene.add(this.middle_branches[e].getObject());
    this.scene.add(this.central_sphere[0]);
    for (var i = new THREE.Vector3, n = new THREE.Vector3, s = new THREE.Vector2, r = new THREE.Vector2, e = 0; e < this.branches.length; e++) {
        for (var a = [], o = 0; o < this.middle_branches.length; o++) i.setFromMatrixPosition(this.branches[e].final_sphere.matrixWorld), n.setFromMatrixPosition(this.middle_branches[o].final_sphere.matrixWorld), s.set(i.x, i.y), r.set(n.x, n.y), a[o] = s.distanceToSquared(r);
        for (var h = [], o = 0; o < a.length; o++)(void 0 === h[0] || a[o] < a[h[0]]) && (h[0] = o);
        var l = new THREE.LineBasicMaterial({
                opacity: 0,
                transparent: !0,
                color: "#3ea4d4",
                fog: !0
            }),
            c = new THREE.Geometry;
        c.dynamic = !0, c.vertices.push(new THREE.Vector3, new THREE.Vector3);
        for (var o = 0; o < h.length; o++) this.whole_line = new Line(this.branches[e].final_sphere, this.middle_branches[h[o]].final_sphere, l), this.whole_line.visible = !1, this.secondary_branches.push(this.whole_line), this.scene.add(this.secondary_branches[e].line)
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
}, Scene04.prototype.loop = function () {
    this.r3 = Math.PI * (.45 - .15 * this.animation.animation_time);
    var t = this.animation.animation_time * this.animation.animation_time,
        e = this.rotation * t * .001,
        i = Math.sin(.025 * u_time) * this.animation.vibration / 2 + e,
        n = Math.sin(.01 * u_time) * this.animation.vibration + e;
    this.animation.animation_time * this.branches.length, t * t * this.middle_branches.length;
    this.animation_bang === !1 && (this.startAnimationEvents(), this.animation_bang = !0), 1 != this.animation.animation_time && (this.central_sphere[0].material.opacity = 1 - t);
    for (var s = Math.random(), r = 0; r < this.face_branches.length; r++) this.face_branches[r].getObject().rotation.x += i + this.animation.vibration * s, this.face_branches[r].getObject().rotation.z -= n + this.animation.vibration * s;
    for (var r = 0; r < this.cantidad_branches; r++) this.branches[r].getObject().rotation.y = this.node_preference[r] * (.3 * t) * this.r3, this.branches[r].getObject().rotation.x += i + this.animation.vibration * s, this.branches[r].getObject().rotation.z -= n + this.animation.vibration * s, this.secondary_branches[r].animate(), this.branches[r].animate(), 0 == this.node_changing[r] && this.animation.animation_time > r / this.cantidad_branches && (this.node_changing[r] = !0), this.node_changing[r] && 1 != this.secondary_branches[r].line.material.opacity && (.01 > s ? (this.secondary_branches[r].fadeIn(.2), this.branches[r].fadeOut(.2)) : (this.secondary_branches[r].fadeIn(.1), this.branches[r].fadeOut(.1)));
    for (var r = 0; r < this.middle_branches.length; r++) this.middle_branches[r].getObject().rotation.x -= i, this.middle_branches[r].getObject().rotation.z -= n, this.middle_branches[r].animate(), this.middle_secondary_branches[r].animate(), 0 == this.middle_node_changing[r] && this.animation.animation_time > r / this.middle_branches.length && (this.middle_node_changing[r] = !0), this.middle_node_changing[r] && 1 != this.middle_secondary_branches[r].line.material.opacity && (.01 > s ? (this.middle_branches[r].fadeOut(.2), this.middle_secondary_branches[r].fadeIn(.2)) : (this.middle_branches[r].fadeOut(.1), this.middle_secondary_branches[r].fadeIn(.1)));
    if (s_u_time > .5 || s_u_time < -.5) {
        for (var a = 512; a--;) {
            var o = this.particles.vertices[a];
            o.velocity.y -= .02 * (Math.random() - Math.random()), o.velocity.x -= .05 * (Math.random() - Math.random()), o.velocity.z -= .005 * (Math.random() - Math.random()), o.add(o.velocity)
        }
        this.particle_system.geometry.__dirtyVertices = !0, this.particle_system.geometry.verticesNeedUpdate = !0
    }
    if (this.color_change) {
        if (this.main_color_change) {
            for (var r = 0; r < this.secondary_branches.length; r++) this.secondary_branches[r].changeMainColour(this.main_color);
            for (var r = 0; r < this.cantidad_branches; r++) this.branches[r].changeMainColour(this.main_color);
            this.main_color_change = !1
        }
        if (this.secondary_color_change) {
            for (var r = 0; r < this.secondary_branches.length; r++) this.branches[r].changeSecondaryColour(this.secondary_color);
            this.secondary_color_change = !1
        }
        if (this.main_node_color_change) {
            for (var r = 0; r < this.cantidad_branches; r++) this.branches[r].changeMainNodeColour(this.main_node_color);
            this.main_node_color_change = !1
        }
        this.color_change = !1
    }
};
var gray_color_picker = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#ffffff"],
    Scene06 = function () {
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
}, Scene06.prototype.setup = function (t) {
    this.scene = new THREE.Scene, this.scene.fog = new THREE.FogExp2(1118481, .0025), this.main_color = "", this.secondary_color = "", this.main_color_change = !1, this.secondary_color_change = !1, this.color_change = !1, this.animation_bang = !1, this.animation = {
        animation_time: 0,
        branches_opacity: 1,
        new_branches_opacity: 0,
        vibration: .0012
    }, this.primary_branches = t.branches, this.secondary_branches = t.secondary_branches, this.central_sphere = t.central_sphere, this.middle_branches = t.middle_branches, this.face_branches = t.face_branches, this.quaternary_branches = t.quaternary_branches, this.middle_secondary_branches = t.middle_secondary_branches, this.particle_system = t.particle_system, this.particles = t.particles, this.scene.add(this.particle_system), this.face_lines = t.face_lines, this.central_sphere[0].scale.set(30, 30, 30), this.central_sphere[0].material.color.setHex(3389434), this.central_sphere[0].material.transparent = !0;
    var e = this.scene,
        i = this.central_sphere;
    e.add(i[1]), setTimeout(function () {
        e.add(i[2]), i[2].visible = !0
    }, 500), setTimeout(function () {
        e.add(i[3]), i[3].visible = !0
    }, 1e3);
    for (var n = 0; n < this.face_lines.length; n++) this.scene.add(this.face_lines[n].line);
    for (var n = 0; n < this.primary_branches.length; n++) this.scene.add(this.primary_branches[n].getObject());
    for (var n = 0; n < this.secondary_branches.length; n++) this.scene.add(this.secondary_branches[n].line);
    for (var n = 0; n < this.face_branches.length; n++) this.scene.add(this.face_branches[n].getObject());
    for (var n = 0; n < this.quaternary_branches.length; n++) this.scene.add(this.quaternary_branches[n].line);
    for (var n = 0; n < this.middle_branches.length; n++) this.scene.add(this.middle_branches[n].getObject()), this.scene.add(this.middle_secondary_branches[n].line);
    this.scene.updateMatrixWorld(), this.node_changing = [], this.node_preference = [], this.middle_node_changing = [], this.set = [];
    for (var n = 0; n < this.primary_branches.length; n++) this.node_preference[n] = data[n][0] * data[n][2] >= 0 ? 1 : -1, this.node_changing[n] = !1;
    for (var n = 0; n < this.middle_secondary_branches.length; n++) this.middle_node_changing[n] = !1;
    for (var n = 0; n < this.face_lines.length; n++) this.set[n] = !1;
    this.set[0] = !0, this.times = [0, 0, 0, 0, void 0], this.times_counted = 0, this.activity = this.fadeInFunc
}, Scene06.prototype.changeMainColour = function (t) {
    this.color_change = !0, this.main_color = t, this.main_color_change = !0
}, Scene06.prototype.changeSecondaryColour = function (t) {
    this.color_change = !0, this.secondary_color = t, this.secondary_color_change = !0
}, Scene06.prototype.changeMainNodeColour = function (t) {
    this.color_change = !0, this.main_node_color = t, this.main_node_color_change = !0
}, Scene06.prototype.loop = function () {
    this.activity(), this.r3 = Math.PI * (.35 + .05 * this.animation.animation_time);
    var t = this.animation.animation_time * this.animation.animation_time,
        e = this.rotation * t * 5e-4,
        i = Math.sin(.025 * u_time) * this.animation.vibration / 2 + e,
        n = Math.sin(.01 * u_time) * this.animation.vibration + e;
    u_time * this.animation.vibration, Math.random();
    this.animation_bang === !1 && (this.startAnimationEvents(), this.animation_bang = !0), this.central_sphere[1].rotation.x -= i, this.central_sphere[1].rotation.z += n, this.central_sphere[2].rotation.x -= i, this.central_sphere[2].rotation.z += n, this.central_sphere[3].rotation.x -= i, this.central_sphere[3].rotation.z += n, 1 == this.animation.animation_time && (this.central_sphere[1].rotation.y += .001, this.central_sphere[2].rotation.y += .001, this.central_sphere[3].rotation.y += .001);
    for (var s = 0; s < this.face_branches.length; s++) this.face_branches[s].getObject().rotation.x -= i, this.face_branches[s].getObject().rotation.z += n, 1 == this.animation.animation_time && (this.face_branches[s].getObject().rotation.y += .001), this.face_branches[s].animate();
    if (1 != this.animation.animation_time)
        for (var s = 0; s < this.middle_branches.length; s++) this.middle_branches[s].getObject().rotation.x -= i, this.middle_branches[s].getObject().rotation.z -= n, this.middle_branches[s].animate(), this.middle_secondary_branches[s].animate();
    for (var s = 0; s < this.primary_branches.length; s++) 1 != this.animation.animation_time ? (this.primary_branches[s].getObject().rotation.y = this.node_preference[s] * (1 - t) * .3 * this.r3, this.secondary_branches[s].animate()) : this.primary_branches[s].getObject().rotation.y += .001, this.primary_branches[s].getObject().rotation.x -= i, this.primary_branches[s].getObject().rotation.z += n, this.primary_branches[s].animate();
    for (var s = this.face_lines.length; s--;) this.face_lines[s].animate();
    for (var s = 0; s < this.quaternary_branches.length; s++) this.quaternary_branches[s].animate(), 1 != this.animation.animation_time && this.animation.animation_time > s && (this.node_changing[edge[s][0]] = !0, this.node_changing[edge[s][1]] = !0, this.quaternary_branches[s].fadeIn(.05));
    if (s_u_time > .5 || s_u_time < -.5) {
        for (var r = 512; r--;) {
            var a = this.particles.vertices[r];
            a.velocity.y -= .02 * (Math.random() - Math.random()), a.velocity.x -= .05 * (Math.random() - Math.random()), a.velocity.z -= .01 * (Math.random() - Math.random()), a.add(a.velocity)
        }
        this.particle_system.geometry.__dirtyVertices = !0, this.particle_system.geometry.verticesNeedUpdate = !0
    }
    if (1e3 == this.times_counted && (this.times_counted = 0, console.log("1 " + this.times[0] / 1e3), console.log("2 " + this.times[1] / 1e3), console.log("3 " + this.times[2] / 1e3), console.log("4 " + this.times[3] / 1e3), this.times[0] = 0, this.times[1] = 0, this.times[2] = 0, this.times[3] = 0), this.color_change) {
        if (this.main_color_change) {
            for (var s = 0; s < this.secondary_branches.length; s++) this.secondary_branches[s].changeMainColour(this.main_color);
            for (var s = 0; s < this.quaternary_branches.length; s++) this.quaternary_branches[s].changeMainColour(this.main_color);
            this.main_color_change = !1
        }
        if (this.secondary_color_change) {
            this.central_sphere[0].material.color.setStyle(this.secondary_color);
            for (var s = 0; s < this.face_lines.length; s++) this.face_lines[s].changeMainColour(this.secondary_color);
            for (var s = 0; s < this.secondary_branches.length; s++) this.secondary_branches[s].changeSecondaryColour(this.secondary_color);
            this.secondary_color_change = !1
        }
        if (this.main_node_color_change) {
            for (var s = 0; s < this.primary_branches.length; s++) this.primary_branches[s].changeMainNodeColour(this.main_node_color);
            for (var s = 0; s < this.face_branches.length; s++) this.face_branches[s].changeMainNodeColour(this.main_node_color);
            this.main_node_color_change = !1
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
    this.central_sphere[1].material.opacity -= t, this.central_sphere[2].material.opacity -= t, this.central_sphere[3].material.opacity -= t, this.central_sphere[4].material.opacity -= t
}, Scene06.prototype.fadeInFunc = function () {
    var t = this.animation.animation_time * this.animation.animation_time,
        e = this.animation.animation_time * this.primary_branches.length,
        i = this.animation.animation_time * this.middle_branches.length,
        n = Math.random();
    1 != this.animation.animation_time && (this.central_sphere[1].material.opacity = t * t, this.central_sphere[2].material.opacity = t * t, this.central_sphere[3].material.opacity = t * t);
    for (var s = 0; s < this.face_branches.length; s++) 1 == this.animation.animation_time && 1 != this.face_branches[s].brazo.material.opacity && this.face_branches[s].fadeInSphere(.7);
    if (1 != this.animation.animation_time)
        for (var s = 0; s < this.middle_branches.length; s++) 0 == this.middle_node_changing[s] && i > s && (this.middle_node_changing[s] = !0), this.middle_node_changing[s] && 0 != this.middle_secondary_branches[s].line.material.opacity && (.01 > n ? (this.middle_secondary_branches[s].fadeOut(.3), this.middle_branches[s].fadeOut(.3), this.middle_branches[s].fadeOutSphere(.3)) : (this.middle_secondary_branches[s].fadeOut(.2), this.middle_branches[s].fadeOut(.1), this.middle_branches[s].fadeOutSphere(.1)));
    for (var s = 0; s < this.primary_branches.length; s++) 0 == this.node_changing[s] && e > s && 1 == this.middle_node_changing[Math.floor(s / this.NODE_SIZE)] && (this.node_changing[s] = !0), this.node_changing[s] && (this.animation.animation_time < 1 || 0 != this.secondary_branches[s].opacity) && (.01 > n ? this.secondary_branches[s].fadeOut(.3) : .5 > n && this.secondary_branches[s].fadeOut(.1));
    for (var s = this.face_lines.length; s--;) 1 == this.animation.animation_time && this.face_lines[s].fadeIn(.01);
    for (var s = 0; s < this.quaternary_branches.length; s++) 1 != this.animation.animation_time && this.animation.animation_time > s / this.quaternary_branches.length && (this.node_changing[edge[s][0]] = !0, this.node_changing[edge[s][1]] = !0, this.quaternary_branches[s].fadeIn(.1))
}, quality = 0, u_time = 0, window.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, e) {
        window.setTimeout(t, 1e3 / 60)
    }
}();
var Animation01 = function () {
    this.version = "4.5.3", console.log("VERSION " + this.version)
};
Animation01.prototype.setup = function (t, e, i, n) {
    var s = function () {
        try {
            var t = document.createElement("canvas");
            return !(!window.WebGLRenderingContext || !t.getContext("webgl") && !t.getContext("experimental-webgl"))
        } catch (e) {
            return !1
        }
    };
    if (s()) {
        this.renderer = new THREE.WebGLRenderer({
            antialias: !0,
            alpha: !0
        }), this.running = !1, this.anim_frame, this.scenes = [], this.start_time = [], this.scene_set = [], this.params = t, this.CURRENT_SCENE = 0, this.scenes[0] = new Scene01, this.scenes[1] = new Scene02, this.scenes[2] = new Scene03, this.scenes[3] = new Scene04, this.scenes[4] = new Scene06, this.fx_scene = new FXScene, this.SECONDS = 60, this.container = document.getElementById(this.params.container_id), this.renderer, this.start_time[0] = [0, 5], this.start_time[1] = [5, 10], this.start_time[2] = [10, 17], this.start_time[3] = [17, 24], this.start_time[4] = [24, 30], this.start_time[5] = [30, 31];
        for (var r = 0; r < this.start_time.length; r++) this.start_time[r][0] *= this.SECONDS, this.start_time[r][1] *= this.SECONDS, console.log("scene " + r + " time : " + this.start_time[r]);
        for (var r = 0; r < this.scenes.length; r++) this.scene_set[r] = !1;
        this.setupScenes = function () {
            this.scenes[0].setup(), this.scenes[1].setup(), this.scenes[2].setup(this.params), this.fx_scene.setup(this.params)
        }, this.height = this.container.clientHeight, this.width = this.container.clientWidth, this.aspectRatio = this.width / this.height, this.renderer.setClearColor(655361, 0), this.renderer.setSize(this.container.clientWidth, this.container.clientHeight), this.renderer.autoClear = !1, this.renderer.domElement.setAttribute("id", this.params.renderer_id), this.container.appendChild(this.renderer.domElement), this.main_camera = new THREE.PerspectiveCamera(75, this.aspectRatio, .01, 8e3), this.main_camera.position.z = 220, this.main_camera.position.y = 10, this.controls = new THREE.OrbitControls(this.main_camera, this.renderer.domElement), this.stats = new Stats, this.stats.setMode(0), this.container.appendChild(this.stats.domElement), this.stats.domElement.setAttribute("id", this.params.stats_id), this.postprocessing = {
            enabled: !0
        }, this.shaderSettings = {
            rings: 3,
            samples: 5
        }, this.qualityO = {}, this.qualityO[this.params.quality_name] = 0, this.effectController = {
            fstop: .1,
            maxblur: 2.9,
            focalDepth: 4.3,
            depthblur: !0,
            threshold: .17,
            gain: 29.3,
            bias: .1,
            fringe: .49,
            dithering: 0
        }, 
        //this.params.focal_length_name = 'fln',
        //this params.focal_length_init_val = 0.2,
        this.effectController[this.params.focal_length_name] = this.params.focal_length_init_val, 
        this.material_depth = new THREE.MeshDepthMaterial, this.initpostprocessing = function (t, e) {
            var i = {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    format: THREE.RGBFormat
                },
                n = 0 == this.params.shader_to_use ? THREE.BokehShader : THREE.BokehShader2;
            this.postprocessing.scene = new THREE.Scene, this.postprocessing.camera = new THREE.OrthographicCamera(t / -2, t / 2, e / 2, e / -2, -1e4, 1e4), this.postprocessing.camera.position.z = 100, this.postprocessing.scene.add(this.postprocessing.camera), this.postprocessing.rtTextureDepth = new THREE.WebGLRenderTarget(t, e, i), this.postprocessing.rtTextureColor = new THREE.WebGLRenderTarget(t, e, i), this.postprocessing.bokeh_uniforms = THREE.UniformsUtils.clone(n.uniforms), this.postprocessing.bokeh_uniforms.tColor.value = this.postprocessing.rtTextureColor, this.postprocessing.bokeh_uniforms.tDepth.value = this.postprocessing.rtTextureDepth, this.postprocessing.bokeh_uniforms.textureWidth.value = t, this.postprocessing.bokeh_uniforms.textureHeight.value = e, this.postprocessing.materialBokeh = new THREE.ShaderMaterial({
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
            quality = this.qualityO[this.params.quality_name], 2 == quality || 3 == quality ? (this.renderType = this.renderGl, 2 == quality ? (this.postprocessing.materialBokeh.defines.RINGS = 3, this.postprocessing.materialBokeh.defines.SAMPLES = 5,
                this.postprocessing.bokeh_uniforms.maxblur.value = 2.9, this.postprocessing.bokeh_uniforms.fstop.value = .1, this.postprocessing.bokeh_uniforms.gain.value = 29, this.postprocessing.materialBokeh.needsUpdate = !0) : (this.postprocessing.materialBokeh.defines.RINGS = 7, this.postprocessing.materialBokeh.defines.SAMPLES = 6, this.postprocessing.bokeh_uniforms.maxblur.value = 2.4, this.postprocessing.bokeh_uniforms.fstop.value = 3.2, this.postprocessing.bokeh_uniforms.gain.value = 62, this.postprocessing.materialBokeh.needsUpdate = !0)) : this.renderType = this.renderCanvas
        }, this.themeColorChange = function () {
            for (var t = 2; 4 >= t; t++) this.scenes[t].changeMainColour(this.color.theme[this.color[this.params.color_theme_name]][0]), this.scenes[t].changeSecondaryColour(this.color.theme[this.color[this.params.color_theme_name]][1]), this.scenes[t].changeMainNodeColour(this.color.theme[this.color[this.params.color_theme_name]][2])
        }, this.matChanger = function () {
            for (var t in this.effectController) t in this.postprocessing.bokeh_uniforms && (this.postprocessing.bokeh_uniforms[t].value = this.effectController[t]);
            this.main_camera.setLens(this.effectController[this.params.focal_length_name]), this.postprocessing.bokeh_uniforms.znear.value = this.main_camera.near, this.postprocessing.bokeh_uniforms.zfar.value = this.main_camera.far
        }, this.mainColorChange = function () {
            for (var t = 2; 4 >= t; t++) this.scenes[t].changeMainColour(this.color[this.params.main_color_name])
        }, this.secondaryColorChange = function () {
            for (var t = 2; 4 >= t; t++) this.scenes[t].changeSecondaryColour(this.color[this.params.secondary_color_name])
        }, this.nodeColorChange = function () {
            for (var t = 2; 4 >= t; t++) this.scenes[t].changeMainNodeColour(this.color[this.params.spheres_color_name])
        }, this.color = {
            theme: [
                ["#153243", "#284B63", "#B4B8AB"],
                ["#FFAAAA", "#550000", "#801515"],
                ["#496C89", "#123552", "#042037"]
            ]
        }, this.color[this.params.color_theme_name] = 0, this.color[this.params.spheres_color_name] = "#d29c9c", this.color[this.params.secondary_color_name] = "#8333af", this.color[this.params.main_color_name] = "#966164", this.controls = {}, this.controls[this.params.next_name] = function () {
            anim.run()
        }, this.controls[this.params.play_name] = function () {
            anim.stop()
        }, this.controls[this.params.pause_name] = function () {
            anim.reset()
        }, this.controls[this.params.reset_name] = function () {
            anim.reset()
        }, this.controls[this.params.next_animation_name] = function () {
            anim.reset()
        }, this.gui = new dat.GUI({
            autoPlace: !1
        }), this.folder_general = this.gui.addFolder("General"), 
            this.folder_color = this.gui.addFolder("Color Picker"), 
            this.folder_control = this.gui.addFolder("Animation Control"), 
            console.log("Object " + JSON.stringify(this.params));
            this.folder_general.add(this.effectController, this.params.focal_length_name, 16, 80, .01).onChange(this.matChanger.bind(this)), 
            this.folder_general.add(this.qualityO, this.params.quality_name, 0, 3).step(1).onChange(this.qualityUpdate.bind(this)), 
            this.folder_general.add(this.color, this.params.color_theme_name, 0, 2).step(1).onChange(this.themeColorChange.bind(this)), 
            this.folder_color.addColor(this.color, this.params.main_color_name).onChange(this.mainColorChange.bind(this)), this.folder_color.addColor(this.color, this.params.secondary_color_name).onChange(this.secondaryColorChange.bind(this)), 
            this.folder_color.addColor(this.color, this.params.spheres_color_name).onChange(this.nodeColorChange.bind(this)), this.folder_control.add(this.controls, this.params.next_name), this.folder_control.add(this.controls, this.params.play_name), this.folder_control.add(this.controls, this.params.pause_name), this.folder_control.add(this.controls, this.params.reset_name), this.folder_control.add(this.controls, this.params.next_animation_name), this.matChanger(), this.container.appendChild(this.gui.domElement), this.gui.domElement.setAttribute("id", this.params.gui_id), this.avisar_fin = !0, this.render = function () {
            this.anim_frame = requestAnimationFrame(this.render.bind(this)), this.running = !0, this.stats.begin(), u_time++, s_u_time = Math.sin(u_time), u_time > this.start_time[0][0] && u_time < this.start_time[0][1] && this.scene_set[0] === !1 && (this.CURRENT_SCENE = 0, this.scene_set[this.CURRENT_SCENE] = !0), u_time > this.start_time[1][0] && u_time < this.start_time[1][1] && this.scene_set[1] === !1 && (this.CURRENT_SCENE = 1, this.scene_set[this.CURRENT_SCENE] = !0), u_time > this.start_time[2][0] && u_time < this.start_time[2][1] && this.scene_set[2] === !1 && (this.CURRENT_SCENE = 2, this.scene_set[this.CURRENT_SCENE] = !0), u_time > this.start_time[3][0] && u_time < this.start_time[3][1] && this.scene_set[3] === !1 && (this.CURRENT_SCENE = 3, this.scene_set[this.CURRENT_SCENE] = !0, this.scenes[this.CURRENT_SCENE].setup(this.scenes[2].exporte())), u_time > this.start_time[4][0] && u_time < this.start_time[4][1] && this.scene_set[4] === !1 && (this.CURRENT_SCENE = 4, this.scene_set[this.CURRENT_SCENE] = !0, this.scenes[this.CURRENT_SCENE].setup(this.scenes[3].exporte())), this.avisar_fin && u_time > this.start_time[4][1] && (this.avisar_fin = !1, console.log(u_time), n()), this.fx_scene.loop(), this.renderer.render(this.fx_scene.background_scene, this.fx_scene.background_camera), this.renderType(), this.renderer.render(this.fx_scene.foreground_scene, this.fx_scene.foreground_camera), this.stats.end()
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
    } else i()
}, Animation01.prototype.run = function () {
    this.running || this.render()
}, Animation01.prototype.reset = function () {
    this.stop(), this.main_camera.position.z = 220, this.main_camera.position.y = 10, this.main_camera.position.x = 0, this.main_camera.rotation.set(0, 0, 0), this.avisar_fin = !0, u_time = 0;
    for (var t = this.scenes.length; t--;) this.CURRENT_SCENE = 1, this.scene_set[t] = !1;
    this.scenes[0].reset(), this.scenes[1].reset(), this.scenes[2].setup(this.params), this.run()
}, Animation01.prototype.isRunning = function () {
    return this.running
}, Animation01.prototype.stop = function () {
    this.running && (this.running = !this.running, cancelAnimationFrame(this.anim_frame))
}, Animation01.prototype.updateZoom = function (t) {
    this.effectController[this.params.focal_length_name] = t, this.matChanger()
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
}, Animation01.prototype.updateCanvas = function () {
    this.height = this.container.clientHeight, this.width = this.container.clientWidth, this.aspectRatio = this.width / this.height, this.postprocessing.camera.aspect = this.aspectRatio, this.main_camera.aspect = this.aspectRatio, this.main_camera.updateProjectionMatrix(), this.postprocessing.camera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height), this.postprocessing.bokeh_uniforms.textureWidth.value = this.width, this.postprocessing.bokeh_uniforms.textureHeight.value = this.height
}, Animation01.prototype.version = function () {
    return this.version
};