/*
 * http://www.StellingKast.nl/
 * Copyright 2007-2016, Stellingkast.nl
 */
/* jQuery JSON Plugin - version: 2.3 (2011-09-17)
 * Simple AJAX Code-Kit (SACK) v1.6.1 - &copy; 2005 Gregory Wild-Smith - www.twilightuniverse.com
 */
/**
 * Stellingkast.nl JS Base
 *
 * Basis JavaScript file for all pages/objects
 *
 *   ____  _       _ _ _             _  __         _           _
 *  / ___|| |_ ___| | (_)_ __   __ _| |/ /__ _ ___| |_   _ __ | |
 *  \___ \| __/ _ \ | | | '_ \ / _` | ' // _` / __| __| | '_ \| |
 *   ___) | ||  __/ | | | | | | (_| | . \ (_| \__ \ |_ _| | | | |
 *  |____/ \__\___|_|_|_|_| |_|\__, |_|\_\__,_|___/\__(_)_| |_|_|
 *                             |___/
 *
 * Stellingkast.nl
 * Ontwikkeld voor ARS-almere / ARS-online.
 *
 * PHP version 5
 * @preserve
 * @category  WebShop
 * @package   Stellingkast
 * @author    ARS Online <info@stellingkast.nl>
 * @copyright 2014 ARS en Stellingkast.nl
 * @link      https://www.stellingkast.nl
 *
 * @license   Copyright (c) 2014-2016 ARS Office & Storage / Stellingkast.nl B.V.
 * We at Stellingkast.nl have really worked hard to create this code.
 * So please do not use it without our permission!
 */
var SKFileStart = (new Date).getTime();
try {
    for (window.SKDummy = window.location.host.split(".").reverse(); 2 < window.SKDummy.length;) window.SKDummy.pop();
    document.domain = window.SKDummy.reverse().join("."), delete window.SKDummy
} catch (ignore) {}

function showBrowserUpdateWarning() {
    var $buoop = {
        vs: {
            i: 9,
            f: 20,
            o: 12,
            s: 5,
            n: 9
        }
    };
    $buoop.ol = window.onload, window.onload = function() {
        try {
            $buoop.ol && $buoop.ol()
        } catch (err) {
            void 0 !== log && void 0 !== log.warn && log.warn(err.Msg)
        }
        var e = document.createElement("script");
        e.setAttribute("type", "text/javascript"), e.setAttribute("src", "http://browser-update.org/update.js"), document.body.appendChild(e), setTimeout(function() {
            "function" == typeof $buo && $buo($buoop)
        }, 1e3)
    }
}

function fnSetRotation(oObj, deg) {
    try {
        var rad = deg * (2 * Math.PI / 360),
            costheta = Math.cos(rad),
            sintheta = Math.sin(rad);
        oObj.style.filter = "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=" + costheta + ", M12=-" + sintheta + ", M21=" + sintheta + ", M22=" + costheta + ")", oObj.style["-ms-filter"] = "progid:DXImageTransform.Microsoft.Matrix(SizingMethod='auto expand', M11=" + costheta + ", M12=-" + sintheta + ", M21=" + sintheta + ", M22=" + costheta + ")", $(oObj).css({
            top: "-10px",
            left: Math.round(20 + (parseInt(Math.abs(deg), 10) - 45) / 1.6) + "px"
        })
    } catch (ignore) {}
}
"undefined" != typeof $ && "undefined" != typeof jQuery || function() {
    var newscript = document.createElement("script");
    newscript.type = "text/javascript", newscript.async = !1, newscript.src = "//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(newscript)
}(), showBrowserUpdateWarning();
var doBlink = function doBlink(obj, start, finish, onComplete) {
    if (jQuery) jQuery(obj).fadeOut(250, function() {
        jQuery(obj).fadeIn(250, function() {
            start !== finish ? doBlink(obj, start += 1, finish, onComplete) : "function" == typeof onComplete && onComplete()
        })
    });
    else var direction = 1,
        blink = setInterval(function() {
            1 === direction && (0 < obj.style.opacity && obj.style.opacity < 1 ? obj.style.opacity = obj.style.opacity - .1 * direction : direction *= -1), finish <= (start += .25) && clearInterval(blink)
        }, 125)
};

function SKBaseClass(name, ancestors) {
    this.License = "We at Stellingkast.nl have really worked hard to create this code. So please do not use it without our permission!", void 0 === SKBaseClass.inheritsFrom && (SKBaseClass.inheritsFrom = function(child, parent) {
        for (var variable in parent.prototype) parent.prototype.hasOwnProperty(variable) && (child.prototype.hasOwnProperty(variable) || (child.prototype[variable] = parent.prototype[variable]))
    }), SKBaseClass.checkJQuery = function(file, line) {
        if ("undefined" == typeof $ || void 0 === $.fn || void 0 === $.fn.blink) try {
            throw new Error("jQuery has been reinitialized! (" + file + ":" + line + " [" + name + "])")
        } catch (err) {
            $ = SKBaseClass.bck$, jQuery = SKBaseClass.bckjQ, void 0 !== this.log && this.log("warn", err)
        } else SKBaseClass.bckjQ = jQuery, SKBaseClass.bck$ = $
    }, SKBaseClass.checkJQuery("skBase", 248, "constructor");
    var property, _file, _getter_SupportsGradient, clientRole, search1, search2, search3, user, self = this,
        busyLogging = !1,
        busyLoopBreak = !1,
        __class__ = "",
        _doc = window.document,
        _getter_file = function() {
            var stack, result, line, len, functionNameFromLine, me = self.__class__;
            try {
                if (functionNameFromLine = function(stackLine) {
                        var match, result;
                        return null !== (match = stackLine.match(/\((.*):[0-9]+:[0-9]+\)/)) ? result = match[1] : -1 < stackLine.indexOf("@") ? result = stackLine.split("@")[1].split(":").slice(0, -1).join(":") : -1 < stackLine.indexOf("at") && (result = stackLine.split("(")[1].split(":").slice(0, -2).join(":")), result
                    }, !(stack = (new Error).stack)) try {
                    return this.undef(), log && log.warn && log.warn("This browser does not handle the call-stack within errors. No Exception was created..."), null
                } catch (err) {
                    stack = err.stack
                }
                if (stack) {
                    if (stack = stack.split("\n"), void 0 === _file) {
                        len = stack.length - 1, line = 0;
                        do {
                            if (!isNaN(line) && 0 <= stack[line].indexOf(me)) {
                                result = functionNameFromLine(stack[line]);
                                break
                            }
                            line++
                        } while (line < len)
                    } else "Error" === stack[0] && 4 <= stack.length ? result = functionNameFromLine(stack[3]) : 2 <= stack.length && (result = functionNameFromLine(stack[2]));
                    void 0 === result && (result = (stack.length, functionNameFromLine(stack[1])))
                } else log && log.warn && log.warn("This browser does not handle the call-stack within errors."), result = null
            } catch (err) {
                void 0 !== window.DEBUG && window.DEBUG && log && log.info && log.warn("Unforseen error in _getter__FILE__  " + err.message), result = null
            }
            return _file || (_file = result), result
        };
    if (self.constructor.name ? __class__ = self.constructor.name : (property = (property = self.constructor.toString()).match(/function\s+([\w\$]+)\s*\(/) || "") && (__class__ = property[1]), __class__ && "SKBaseClass" !== __class__ && self.constructor && SKBaseClass.inheritsFrom(self.constructor, SKBaseClass), void 0 !== ancestors)
        for (var ancestor in ancestors) ancestors.hasOwnProperty(ancestor) && SKBaseClass.inheritsFrom(self.constructor, ancestors[ancestor]);
    if (void 0 === SKBaseClass.isBot) {
        SKBaseClass.prototype.isBot = !1, 0 < window.navigator.userAgent.indexOf("Googlebot") && (SKBaseClass.isBot = !0);
        var search = window.location.search;
        if ("" < search)
            for (search2 in search1 = search.substr(1).split("&")) search1.hasOwnProperty(search2) && (1 === (search3 = search1[search2].split("=")).length ? SKBaseClass[search3[0]] = !0 : 2 === search3.length && (SKBaseClass[search3[0]] = search3[1]));
        SKBaseClass.prototype.isBot = SKBaseClass.isBot
    }
    if (void 0 === SKBaseClass._SupportsGradient && (_getter_SupportsGradient = function() {
            var mStyle, i, fnName = arguments.callee.name,
                tests = ["linear-gradient(left top, #9f9, white)", "-o-linear-gradient(left top, #9f9, white)", "-moz-linear-gradient(left top, #9f9, white)", "-webkit-linear-gradient(left top, #9f9, white)", "-ms-linear-gradient(left top, #9f9, white)", "-webkit-gradient(linear, left top, right bottom, from(#9f9), to(white))"];
            for (mStyle = document.createElement("modern").style, i = 0; i < tests.length; i++) {
                self.loopBreak && self.loopBreak(fnName, 661);
                try {
                    if (mStyle.backgroundImage = tests[i], -1 < mStyle.backgroundImage.indexOf("gradient")) return !0
                } catch (ignore) {}
            }
            return !1
        }, SKBaseClass._SupportsGradient = _getter_SupportsGradient()), Object.defineProperties ? Object.defineProperties(self, {
            _doc: {
                get: function() {
                    return _doc
                },
                set: function(val) {
                    _doc = val
                },
                configurable: !1
            },
            __class__: {
                get: function() {
                    return __class__
                },
                configurable: !1,
                enumerable: !1
            },
            name: {
                get: function() {
                    return name
                },
                set: function(val) {
                    name = val
                },
                configurable: !0
            },
            clientRole: {
                get: function() {
                    return clientRole
                },
                set: function(val) {
                    clientRole = parseInt(val, 10), self.loopBreak && self.loopBreak("_sCR", 739, val)
                },
                configurable: !0
            },
            _file: {
                value: _getter_file(),
                writable: !1,
                enumerable: !1,
                configurable: !1
            },
            supportsGradient: {
                value: SKBaseClass._SupportsGradient,
                writable: !1,
                enumerable: !1,
                configurable: !1
            }
        }) : this.__defineGetter__ ? (this.__defineGetter__("_doc", function() {
            return _doc
        }), this.__defineSetter__("_doc", function(val) {
            _doc = val
        }), this.__defineGetter__("__class__", function() {
            return __class__
        }), this.__defineSetter__("__class__", function(val) {
            __class__ = val
        }), this.__defineGetter__("name", function() {
            return name
        }), this.__defineSetter__("name", function(val) {
            name = val
        }), this.__defineGetter__("clientRole", function() {
            return clientRole
        }), this.__defineSetter__("clientRole", function(val) {
            clientRole = parseInt(val, 10), self.loopBreak(arguments.callee.name, 778, val)
        }), this.__defineGetter__("__file__", function() {
            return _file || _getter_file(), _file
        }), this.__defineGetter__("supportsGradient", function() {
            return SKBaseClass._SupportsGradient
        })) : (self._doc = window.document, self.__class__ = __class__, self.__file__ = _getter_file(), self.supportsGradient = SKBaseClass._SupportsGradient), name && (self.name = name), self.property = function(propertyName, getter, setter, defaultValue, writable, enumerable, configurable) {
            void 0 === configurable && (configurable = !1), void 0 === enumerable && (enumerable = !1), void 0 === writable && (writable = !1), "function" != typeof setter && (setter = void 0), "function" != typeof getter && (getter = void 0);
            var properties = {};
            return Object.defineProperties || Object.defineProperty ? (properties[propertyName] = "function" == typeof getter ? {
                get: getter,
                set: setter,
                enumerable: enumerable,
                configurable: configurable
            } : {
                value: defaultValue,
                writable: writable,
                enumerable: enumerable,
                configurable: configurable
            }, Object.defineProperties ? Object.defineProperties(self, properties) : Object.defineProperty(self, propertyName, properties)) : (Object.__defineGetter__ && (getter && self.__defineGetter__(propertyName, getter), setter && writable && self.__defineGetter__(propertyName, setter)), self[propertyName] = defaultValue), self[propertyName]
        }, void 0 === self.array && (SKBaseClass.prototype.array = function(items) {
            var len, dummy, i = 0,
                result = [];
            self.loopbreak && self.loopBreak(arguments.callee.name, 914);
            try {
                if ("object" == typeof items)
                    for (i in items) null != (dummy = self.array.call(result, items[i])) && result.push(dummy);
                else result = "string" == typeof items ? null != this && "function" == typeof this.push ? items : [items] : isNaN(items) ? "function" == typeof items ? void 0 : Array.prototype.concat.call(items) : null != this && "function" == typeof this.push ? items : [items]
            } catch (ex) {
                for (len = items.length, result = Array(len); i < len;) result[i] = items[i], i++
            }
            return result
        }, SKBaseClass.prototype.assoc = function(items) {
            var len, dummy, i = 0,
                result = {},
                set = 0;
            self.loopbreak && self.loopBreak(arguments.callee.name, 972);
            try {
                if ("object" == typeof items) {
                    for (i in result.length = 0, items) "enabledPlugin" !== i && null != (dummy = self.assoc.call(result, items[i])) && (result[i] = dummy, void 0 === items.length && (result.length += 1, set++));
                    0 === set && (result = null)
                } else result = "string" == typeof items ? null != this && void 0 !== typeof this.length ? items : [items] : isNaN(items) ? "function" == typeof items ? void 0 : void 0 === items ? void 0 : Array.prototype.concat.call(items) : null != this && void 0 !== typeof this.length ? items : [items]
            } catch (ex) {
                for (len = items.length, result = Array(len); i < len;) result[i] = items[i], i++
            }
            return result
        }), void 0 === self.get && (SKBaseClass.prototype.get = function(name, defaultValue) {
            return void 0 === defaultValue && (defaultValue = null), void 0 !== $.jStorage ? $.jStorage.get("SK." + name, defaultValue) : defaultValue
        }, SKBaseClass.prototype.set = function(name, value, TTL) {
            void 0 !== $.jStorage && (void 0 === TTL && (TTL = 864e5), $.jStorage.set("SK." + name, value, {
                TTL: TTL
            }))
        }), void 0 === self.log && (SKBaseClass.prototype.log = function(message_type, message) {
            var ErrorStack, ErrorStacktrace, ErrorName, callerFile, callerLine, tmp, tmp2, i, functionName, fnArgs, fnLoc, fnLine, txt = "",
                thisname = "",
                timestamp = (new Date).getTime();
            if (busyLogging || (busyLogging = !0), this.name ? thisname = (txt = this.name.match(/[A-Z]/g)) ? txt.join("") : this.name.substr(0, 2) : this.__class__ && (thisname = this.__class__.match(/[A-Z]/g).join("")), message instanceof Error) {
                if (message.type && (txt += "[" + message.type + "]"), message.message ? txt += message.message : message.Msg && (txt += message.Msg), ErrorStack = message.stack) try {
                    if (tmp = ErrorStack.split("\n"), "[object Array]" === Object.prototype.toString.call(tmp) && 0 < tmp.length)
                        for (i in ErrorStack = [], tmp) isNaN(i) ? ErrorStack.push(tmp) : (functionName = (tmp2 = tmp[i].split(/\(|\)|@/))[0], fnArgs = tmp2[1], fnLine = (fnLoc = tmp2[tmp2.length - 1]).split(":").reverse()[0], fnLoc = fnLoc.replace(":" + fnLine, ""), ErrorStack.push({
                            function: functionName,
                            arguments: fnArgs,
                            file: fnLoc,
                            line: fnLine,
                            stack: tmp[i]
                        }), fnLoc && fnLine && !callerFile && !callerLine && (callerFile = fnLoc, callerLine = fnLine))
                } catch (ignore) {}
                if (ErrorStacktrace = message.stacktrace) try {
                    for (i in tmp = ErrorStacktrace.split("\n"), ErrorStacktrace = [], tmp) isNaN(i) || (functionName = (tmp2 = tmp[i].split(/\(|\)|@/))[0], fnArgs = tmp2[1], fnLine = (fnLoc = tmp2[tmp2.length - 1]).split(":").reverse()[0], fnLoc = fnLoc.replace(":" + fnLine, ""), ErrorStacktrace.push({
                        function: functionName,
                        arguments: fnArgs,
                        file: fnLoc,
                        line: fnLine,
                        stack: tmp[i]
                    }), fnLoc && fnLine && !callerFile && !callerLine && (callerFile = fnLoc, callerLine = fnLine))
                } catch (ignore) {}
                message.name ? ErrorName = message.name : (ErrorName = [], message instanceof EvalError && ErrorName.push("EvalError"), message instanceof RangeError && ErrorName.push("RangeError"), message instanceof ReferenceError && ErrorName.push("ReferenceError"), message instanceof SyntaxError && ErrorName.push("SyntaxError"), message instanceof TypeError && ErrorName.push("TypeError"), message instanceof URIError && ErrorName.push("URIError"), message instanceof Error && ErrorName.push("Error"), ErrorName = ErrorName.join(", ")), message = txt
            }
            if (void 0 !== log) switch (message_type) {
                case "info":
                    "function" == typeof log.info && log.info(thisname + ": " + message);
                    break;
                case "debug":
                    "function" == typeof log.debug && log.debug(thisname + ": " + message);
                    break;
                case "warn":
                    "function" == typeof log.warn && log.warn(thisname + ": " + message);
                    break;
                case "error":
                    "function" == typeof log.error && log.error(thisname + ": " + message)
            }
            if (void 0 !== ErrorHandler) try {
                void 0 === ErrorHandler.data && (ErrorHandler.data = {}), void 0 === ErrorHandler.data.log && (ErrorHandler.data.log = []), ErrorHandler.data.log && (tmp = {
                    __class__: this.__class__,
                    name: this.name,
                    timestamp: timestamp,
                    time: (new Date).toLocaleTimeString(),
                    message_type: message_type,
                    message: message
                }, ErrorName && (tmp.ErrorName = ErrorName), ErrorStack && (tmp.ErrorStack = ErrorStack), ErrorStacktrace && (tmp.ErrorStacktrace = ErrorStacktrace), ErrorHandler.data.log.push(tmp)), ErrorName && ErrorHandler.call(this, message, callerFile, callerLine)
            } catch (ignore) {}
            try {
                window.DEBUG && "undefined" != typeof console && console.log(((timestamp - SKFileStart) / 1e3).toFixed(1) + "  SK [" + (thisname + "   ").substr(0, 5).toUpperCase() + "] (" + (message_type + " ").substr(0, 5).toUpperCase() + ") " + message)
            } catch (ignore) {}
            this.loopBreak("skLog", 1261, "LOG: " + message_type + " :-> " + message), busyLogging = !1
        }), self.loopBreakCallBack = function() {}, void 0 === self.loopBreak && (self.loopBreak = SKBaseClass.prototype.loopBreak = function(method, line, args) {
            if (window.loopBreak || (window.loopBreak = []), method || (method = "(anonymous)"), busyLoopBreak) return window.loopBreak.push({
                method: method,
                line: line,
                arguments: args,
                loopBreak: "busy"
            }), null;
            busyLoopBreak = !0;
            var role, instance, setRole, object, thisname, instances = SKBaseClass.instances,
                timestamp = (new Date).getTime(),
                file = "skConfig2D";
            for (instance in SKBaseClass.checkJQuery(method, line, "skCallStack"), instances) instances[instance] instanceof SKBaseClass && (void 0 === (role = instances[instance].clientRole) ? setRole = null : (4294967232 & role) != (4294967232 & self.clientRole) && (setRole = 0, object = instances[instance]));
            if (void 0 !== setRole) {
                for (instance in instances) instance instanceof SKBaseClass && void 0 !== (role = instances[instance].clientRole) && (instances[instance].clientRole = setRole);
                throw {
                    name: "clientRole check",
                    message: "Attempt to break security!",
                    object: object,
                    reference: self
                }
            }
            for (self.loopBreakCallBack(); 200 < window.loopBreak.length;) window.loopBreak.splice(0, 1);
            file = self.__file__ ? self.__file__ : _getter_file(), object = [], self.id && (object.id = self.id), isNaN(self.height) || (object.height = self.height), isNaN(self.width) || (object.width = self.width), isNaN(self.depth) || (object.depth = self.depth), isNaN(self.position) || (object.position = self.position), object.length || (object = null), window.loopBreak.push({
                file: file,
                class: self.__class__,
                properties: object,
                method: method,
                arguments: args,
                line: line,
                time: ((timestamp - SKFileStart) / 1e3).toFixed(1)
            });
            try {
                self.name ? ((thisname = self.name.match(/[A-Z]/g)) || (thisname = self.name.replace("_", " ").ucwords().match(/[A-Z]/g)), thisname && (thisname = thisname.join(""))) : self.__class__ && (thisname = self.__class__.match(/[A-Z]/g).join("")), void 0 === args ? args = "" : null === args ? args = "NULL" : !1 === args && (args = "FALSE"), window.DEBUG && "undefined" != typeof console && console.log(((timestamp - SKFileStart) / 1e3).toFixed(1) + "  LOOP BREAK -- [" + (thisname + "   ").substr(0, 5).toUpperCase() + "] " + method + " (" + line + ") - " + args)
            } catch (ignore) {}
            return busyLoopBreak = !1, null
        }, SKBaseClass.prototype.toString = function() {
            return self.name
        }), void 0 !== SKBaseClass.clientRole ? self.clientRole = SKBaseClass.clientRole : (void 0 !== localStorage && void 0 !== localStorage.clientRole && (user = JSON.parse(localStorage.clientRole), isNaN(user) || (SKBaseClass.clientRole = self.clientRole = user), user.clientRole && (SKBaseClass.clientRole = self.clientRole = user.clientRole)), void 0 === SKBaseClass.clientRole && (void 0 === window.SKBaseFolder && (window.SKBaseFolder = ""), jQuery.ajax({
            async: !1,
            cache: !1,
            type: "POST",
            url: window.SKBaseFolder + "/php/config_v3/configurator.php",
            dataType: "text",
            data: {
                ajaxAction: "clientRole"
            },
            error: function(jqXHR, textStatus, errorThrown) {
                jQuery.ajax({
                    async: !1,
                    cache: !1,
                    type: "POST",
                    url: "/clientRole.php",
                    dataType: "text",
                    data: {
                        ajaxAction: "clientRole"
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        self.log("error", "clientRole Ajax Error: " + textStatus + " => " + errorThrown)
                    },
                    success: function(data) {
                        SKBaseClass.clientRole = parseInt(data, 10), localStorage.clientRole = self.clientRole = SKBaseClass.clientRole
                    }
                }), self.log("error", "clientRole Ajax Error: " + textStatus + " => " + errorThrown)
            },
            success: function(data) {
                SKBaseClass.clientRole = parseInt(data, 10), localStorage.clientRole = self.clientRole = SKBaseClass.clientRole
            }
        }))), "SKBaseClass" !== self.__class__ || "Autostart" !== self.name)
        if (void 0 === self.abstrct) try {
            throw "Abstract Error"
        } catch (err) {
            throw self.log("error", err), err
        } else if (self.abstrct) try {
            throw "Abstract Error"
        } catch (err) {
            throw self.log("error", err), err
        }
    delete self.abstrct, void 0 === SKBaseClass.instances && (SKBaseClass.instances = []), SKBaseClass.instances.push(self), void 0 === SKBaseClass.charSupported && (SKBaseClass.charSupported = function(testChar) {
        var unSupportWidth = 0,
            unSupportHeight = 0,
            testWidth = 0,
            testHeight = 0,
            result = !1;
        try {
            var testDiv = document.getElementById("checkCharSupportDiv");
            testDiv || ($("body").append('<div id="checkCharSupportDiv" style="visibility:hidden"><span id="char-to-check">' + testChar + '</span><span id="not-renderable">&#xfffd;</span></div>'), testDiv = document.getElementById("checkCharSupportDiv")), document.getElementById("char-to-check").innerHTML = testChar, unSupportWidth = document.getElementById("not-renderable").offsetWidth, unSupportHeight = document.getElementById("not-renderable").offsetHeight, testWidth = document.getElementById("char-to-check").offsetWidth, testHeight = document.getElementById("char-to-check").offsetHeight, result = (result = unSupportWidth != testWidth) || unSupportHeight != testHeight, 2 * unSupportWidth < testWidth && (result = !1)
        } catch (err) {
            self.log("warn", err)
        }
        return result
    }), self.shareProperties = function() {
        self.loopBreak(arguments.callee.name, 1453);
        var instance, sibling, siblingProperties, property, properties = Object.keys(self),
            instances = SKBaseClass.instances;
        for (instance in Object.getOwnPropertyNames && (properties = properties.concat(Object.getOwnPropertyNames(self)).unique()), instances)
            if ((sibling = instances[instance]) !== self && sibling instanceof SKBaseClass)
                for (property in siblingProperties = Object.keys(sibling).concat(Object.getOwnPropertyNames(sibling)).unique()) property = siblingProperties[property], 0 <= properties.indexOf(property) && (!self[property] && sibling[property] && "function" != typeof sibling[property] && (self[property] = sibling[property]), self[property] && !sibling[property] && "function" != typeof self[property] && (sibling[property] = self[property]))
    }, void 0 === SKBaseClass.compress && (SKBaseClass.compress = function(object, method) {
        var chr, json, compressed, no, fnName = arguments.callee.name;
        self.loopBreak(fnName, 1497), $.ajax({
            async: !1,
            cache: !0,
            url: window.SKBaseFolder + "/blocks/phpjs/functions/url/base64_encode.js",
            dataType: "script"
        }), $.ajax({
            async: !1,
            cache: !0,
            url: window.SKBaseFolder + "/blocks/phpjs/functions/url/base64_decode.js",
            dataType: "script"
        }), self.loopBreak(fnName, 1516), void 0 === method && (method = "lzw"), json = "string" == typeof object ? object : JSON.stringify(object);
        try {
            switch (method.toString()) {
                case "1":
                case "lzw":
                    for ($.ajax({
                            async: !1,
                            cache: !0,
                            url: window.SKBaseFolder + "/js/lzw.js",
                            dataType: "script"
                        }), compressed = LZW.compress(json), chr = "", no = 0; no < compressed.length; no++) chr += String.fromCharCode(compressed[no]);
                    return self.loopBreak(fnName, 1541), base64_encode(chr);
                case "2":
                case "gzencode":
                case "gzdecode":
                case "3":
                case "gzdeflate":
                case "gzinflate":
                case "4":
                case "gzcompress":
                case "gzuncompress":
                case "9":
                case "DB":
                    return $.ajax({
                        async: !1,
                        url: window.SKBaseFolder + "/php/compress.php",
                        data: {
                            object: json,
                            method: method,
                            direction: "deflate"
                        },
                        type: "POST",
                        success: function(data) {
                            chr = data
                        }
                    }), self.loopBreak(fnName, 1568), chr
            }
        } catch (err) {
            this.log("warn", err)
        }
        return self.loopBreak(fnName, 1578), json
    }, SKBaseClass.prototype.decompress = function(object, method) {
        var chr, json, compressed, no, fnName = arguments.callee.name;
        self.loopBreak(fnName, 1583, method), $.ajax({
            async: !1,
            cache: !0,
            url: window.SKBaseFolder + "/blocks/phpjs/functions/url/base64_encode.js",
            dataType: "script"
        }), $.ajax({
            async: !1,
            cache: !0,
            url: window.SKBaseFolder + "/blocks/phpjs/functions/url/base64_decode.js",
            dataType: "script"
        }), void 0 === method && (method = "lzw");
        try {
            switch (method.toString()) {
                case "1":
                case "lzw":
                    for ($.ajax({
                            async: !1,
                            cache: !0,
                            url: window.SKBaseFolder + "/js/lzw.js",
                            dataType: "script"
                        }), compressed = base64_decode(object), chr = [], no = 0; no < compressed.length; no++) chr.push(compressed.charCodeAt(no));
                    return json = LZW.decompress(chr), json = JSON.parse(json), self.loopBreak(fnName, 1623), json;
                case "2":
                case "gzencode":
                case "gzdecode":
                case "gzdeflate":
                case "gzinflate":
                case "3":
                case "gzcompress":
                case "gzuncompress":
                case "4":
                    return $.ajax({
                        async: !1,
                        url: window.SKBaseFolder + "/php/compress.php",
                        data: {
                            object: object,
                            method: method,
                            direction: "inflate"
                        },
                        type: "POST",
                        success: function(data) {
                            json = data
                        }
                    }), self.loopBreak(fnName, 1648), JSON.parse(json)
            }
        } catch (err) {
            this.log("warn", err)
        }
        return self.loopBreak(fnName, 1657), json
    }), void 0 === self.array2json && (SKBaseClass.prototype.array2json = function(arr) {
        var key, value, str, is_list, json, parts = [];
        for (key in is_list = "[object Array]" === Object.prototype.toString.apply(arr), arr) "object" == typeof(value = arr[key]) ? is_list ? parts.push(self.array2json(value)) : parts[key] = self.array2json(value) : (str = "", is_list || (str = '"' + key + '":'), str += "number" == typeof value ? value : !1 === value ? "false" : !0 === value ? "true" : '"' + value + '"', parts.push(str));
        return json = parts.join(","), is_list ? "[" + json + "]" : "{" + json + "}"
    }), void 0 === SKBaseClass.baseConverter && (SKBaseClass.baseConverter = function(number, ob, nb) {
        number = number.toString().toUpperCase();
        var i, amount, list = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            dec = 0;
        for (i = 0; i <= number.length; i++) dec += list.indexOf(number.charAt(i)) * Math.pow(ob, number.length - i - 1);
        for (number = "", i = Math.floor(Math.log(dec) / Math.log(nb)); 0 <= i; i--) amount = Math.floor(dec / Math.pow(nb, i)), number += list.charAt(amount), dec -= amount * Math.pow(nb, i);
        return number
    }), void 0 === SKBaseClass.jsExtensions && (SKBaseClass.jsExtensions = function() {
        void 0 === Object.size && (Object.size = function(obj) {
            var key, size = 0;
            for (key in obj) "" < key && obj.hasOwnProperty(key) && (size += 1);
            return size
        }), Object.create || (Object.create = function() {
            function F() {}
            return function(o) {
                if (1 !== parseInt(arguments.length, 10)) throw new Error("Object.create implementation only accepts one parameter.");
                return F.prototype = o, new F
            }
        }()), Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(obj) {
            var x, keys = [];
            if ("object" == typeof obj && null !== obj)
                for (x in obj) obj.hasOwnProperty(x) && keys.push(x);
            return keys
        }), void 0 === Array.isArray && (Array.isArray = function(test) {
            try {
                return "[object Array]" === Object.prototype.toString.call(test)
            } catch (ignore) {
                return !1
            }
        }), String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "")
        }), String.prototype.ltrim || (String.prototype.ltrim = function() {
            return this.replace(/^\s+/, "")
        }), String.prototype.rtrim || (String.prototype.rtrim = function() {
            return this.replace(/\s+$/, "")
        }), String.prototype.rtrim || (String.prototype.fulltrim = function() {
            return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ")
        }), String.prototype.lpad || (String.prototype.lpad = function(padString, length) {
            for (var str = this; str.length < length;) str = padString + str;
            return str
        }), String.prototype.rpad || (String.prototype.rpad = function(padString, length) {
            for (var str = this; str.length < length;) str += padString;
            return str
        }), Array.prototype.getUnique || (Array.prototype.getUnique = function() {
            var i, l, u = {},
                a = [];
            for (i = 0, l = this.length; i < l; ++i) u.hasOwnProperty(this[i]) || (a.push(this[i]), u[this[i]] = 1);
            return a
        }), Array.prototype.unique || (Array.prototype.unique = function() {
            var i, j, a = this.concat();
            for (i = 0; i < a.length; ++i)
                for (j = i + 1; j < a.length; ++j) a[i] === a[j] && (j--, a.splice(j, 1));
            return a
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(elt) {
            var len = this.length,
                from = Number(arguments[1]) || 0;
            for ((from = from < 0 ? Math.ceil(from) : Math.floor(from)) < 0 && (from += len); from < len;) {
                if (from in this && this[from] === elt) return from;
                from++
            }
            return -1
        }), Array.prototype.sum || (Array.prototype.sum = function() {
            var i, result = 0;
            for (i in this) isNaN(this[i]) || (result += parseFloat(this[i]));
            return result
        }), String.prototype.hashCode || (String.prototype.hashCode = function() {
            var i, hash = 0;
            if (0 === this.length) return hash;
            for (i = 0; i < this.length; i++) hash = (hash << 5) - hash + this.charCodeAt(i), hash &= hash;
            return hash
        }), String.prototype.ucwords || (String.prototype.ucwords = function() {
            return (this + "").replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
                return $1.toUpperCase()
            })
        }), Object.keys || (Object.keys = function() {
            "use strict";
            var hasOwnProperty = Object.prototype.hasOwnProperty,
                hasDontEnumBug = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                dontEnumsLength = dontEnums.length;
            return function(obj) {
                if ("object" != typeof obj && ("function" != typeof obj || null === obj)) throw new TypeError("Object.keys called on non-object");
                var prop, i, result = [];
                for (prop in obj) hasOwnProperty.call(obj, prop) && result.push(prop);
                if (hasDontEnumBug)
                    for (i = 0; i < dontEnumsLength; i++) hasOwnProperty.call(obj, dontEnums[i]) && result.push(dontEnums[i]);
                return result
            }
        }())
    }), self.loopBreak(arguments.callee.name, 2060, self.__class__), SKBaseClass.jsExtensions(), void 0 === SKBaseClass.browserSettingsSend && (SKBaseClass.browserSettingsSend = !0, function() {
        if (!SKBaseClass.SKBrowserDataSend) {
            SKBaseClass.SKBrowserDataSend = 2;
            try {
                var data = {};
                data.navigator = {
                    appCodeName: window.navigator.appCodeName,
                    appMinorVersion: window.navigator.appMinorVersion,
                    appName: window.navigator.appName,
                    appVersion: window.navigator.appVersion,
                    browserLanguage: window.navigator.browserLanguage,
                    cookieEnabled: window.navigator.cookieEnabled,
                    doNotTrack: window.navigator.doNotTrack,
                    language: window.navigator.language,
                    onLine: window.navigator.onLine,
                    platform: window.navigator.platform,
                    userAgent: window.navigator.userAgent
                };
                try {
                    data.navigator.plugins = self.assoc(window.navigator.plugins)
                } catch (ignore) {}
                data.window = {
                    screenLeft: window.screenLeft,
                    screenTop: window.screenTop,
                    screenX: window.screenX,
                    screenY: window.screenY,
                    scrollX: window.scrollX,
                    scrollY: window.scrollY,
                    location: self.assoc(window.location),
                    screen: self.assoc(window.screen),
                    name: window.name
                }, data.history = self.assoc(window.history), $.ajax({
                    async: !0,
                    cache: !1,
                    type: "POST",
                    url: window.SKBaseFolder + "/?noop=data",
                    datatype: "text",
                    data: data,
                    error: function(jqXHR, textStatus) {
                        SKBaseClass.SKBrowserDataSend = 0, self.loopBreak(arguments.callee.name, 572, textStatus)
                    },
                    success: function(data) {
                        var fnName = arguments.callee.name;
                        fnName || (fnName = "bdS6"), SKBaseClass.SKBrowserDataSend = 1, self.loopBreak(fnName, 578, data)
                    }
                })
            } catch (err) {
                self.log("warn", err), SKBaseClass.SKBrowserDataSend = 0
            }
        }
    }())
}
"undefined" != typeof $ && ($.fn.blink || ($.fn.blink = function(start, finish, onComplete) {
    return this.each(function() {
        doBlink(this, start, finish, onComplete)
    })
}));
var base = new SKBaseClass("Autostart"),
    supports = function() {
        var div = document.createElement("div"),
            vendors = ["Khtml", "Ms", "O", "Moz", "Webkit"];
        return function(prop) {
            var s = div.style,
                len = vendors.length;
            try {
                if (void 0 === s.hasOwnProperty) {
                    if (void 0 !== s[prop]) return !0;
                    for (; - 1 < len;)
                        if (void 0 !== s[vendors[len -= 1] + prop]) return !0
                } else if (s.hasOwnProperty(prop)) return !0;
                try {
                    if ("" === s[prop]) return !0
                } catch (ignore) {}
                for (; 0 < len;) {
                    if (len -= 1, s.hasOwnProperty(vendors[len] + prop)) return !0;
                    if (s.hasOwnProperty("-" + vendors[len].toLowerCase() + "-" + prop)) return !0
                }
                for (prop = prop.replace(/^[a-z]/, function(val) {
                        return val.toUpperCase()
                    }), len = vendors.length; 0 < len;) {
                    if (len -= 1, s.hasOwnProperty(vendors[len] + prop)) return !0;
                    if (s.hasOwnProperty(vendors[len].toLowerCase() + prop)) return !0;
                    if (s.hasOwnProperty("-" + vendors[len].toLowerCase() + "-" + prop)) return !0
                }
            } catch (err) {
                try {
                    "undefined" != typeof console && "function" == typeof console.log && console.log('"' + err.Msg + '" fout bij het checken van support voor ' + prop)
                } catch (ignore) {}
            }
            return !1
        }
    }();
/**
 * Stellingkast.nl JS Error Handler
 *
 * Basis JavaScript file for all pages/objects
 *
 *   ____  _       _ _ _             _  __         _           _
 *  / ___|| |_ ___| | (_)_ __   __ _| |/ /__ _ ___| |_   _ __ | |
 *  \___ \| __/ _ \ | | | '_ \ / _` | ' // _` / __| __| | '_ \| |
 *   ___) | ||  __/ | | | | | | (_| | . \ (_| \__ \ |_ _| | | | |
 *  |____/ \__\___|_|_|_|_| |_|\__, |_|\_\__,_|___/\__(_)_| |_|_|
 *                             |___/
 *
 * Stellingkast.nl
 * Ontwikkeld voor ARS-almere / ARS-online.
 *
 * PHP version 5
 * @preserve
 * @category  Common tools
 * @package   Stellingkast
 * @author    ARS Online <info@stellingkast.nl>
 * @copyright 2014 ARS en Stellingkast.nl
 * @link      https://www.stellingkast.nl
 *
 * @license   Copyright (c) 2014-2016 ARS Office & Storage / Stellingkast.nl B.V.
 * We at Stellingkast.nl have really worked hard to create this code.
 * So please do not use it without our permission!
 */
function printStackTrace(options) {
    var ex = (options = options || {
            guess: !0
        }).e || null,
        guess = !!options.guess,
        p = new printStackTrace.implementation,
        result = p.run(ex);
    return guess ? p.guessAnonymousFunctions(result) : result
}

function ajaxError2log() {
    "undefined" != typeof console && "function" == typeof console.log && (console.log("----- ----- ----- ERROR HANDLER ERROR ----- -----"), console.log("textStatus: ".textStatus))
}

function ajaxSuccess2log(data, textStatus) {
    "undefined" != typeof console && "function" == typeof console.log && (console.log("----- ----- ----- ERROR HANDLER SUC6  ----- -----"), console.log("Error [" + data + "] logged on Server: " + textStatus), console.log("----- ----- ----- ----- ------- ----  ----- -----"))
}

function ErrorHandler(msg, file_loc, line_no, column, errorObj) {
    var e_msg, error_d, self = this;
    if (ErrorHandler.isDebugging = !1, ErrorHandler.logJsErrors = !0, void 0 !== log && "function" == typeof log.warn && log.warn(msg), "Uncaught exception: ReferenceError: Undefined variable: extension" == msg) return !1;
    if ("Script error." == msg) return !1;
    if ("https://www.google-analytics.com/ga.js" == file_loc) return !1;
    if (-1 != file_loc.indexOf("file://")) return !1;
    if (5 < file_loc.indexOf("akamaihd.net")) return !1;
    if (void 0 === ErrorHandler.running) ErrorHandler.running = !0;
    else if (!0 === ErrorHandler.running) return !1;
    if (!ErrorHandler.updatedConstructor && SKBaseClass && (ErrorHandler.prototype = Object.create(SKBaseClass.prototype), (ErrorHandler.prototype.constructor = ErrorHandler).updatedConstructor = !0), ErrorHandler.updatedConstructor && self !== window && !self.loopBreak) try {
        self.abstrct = !1, SKBaseClass.call(self, "ErrorHandler")
    } catch (ignore) {}
    if ("function" == typeof self.loopBreak) try {
        console && console.log && console.log("----- ----- ----- ERROR HANDLER ----- ----- -----"), self.loopBreak(arguments.callee.name, 556, {
            msg: msg,
            file_loc: file_loc,
            line_no: line_no
        })
    } catch (ignore) {}
    if ("object" == typeof msg ? (e_msg = msg.type, file_loc = "", line_no = -1) : e_msg = msg, error_d = "Error in file: " + file_loc + "\nline number:" + line_no + "\nMessage:" + e_msg, ErrorHandler.logJsErrors) {
        var i;
        void 0 === ErrorHandler.data && (ErrorHandler.data = {}), ErrorHandler.data.Time = {}, ErrorHandler.data.document = {}, ErrorHandler.data.document.scripts = {}, ErrorHandler.data.window = {}, ErrorHandler.data.navigator = {}, ErrorHandler.data.navigator.plugins = {}, ErrorHandler.data.history = {}, ErrorHandler.data.jsError = 1, ErrorHandler.data.Error = {
            File: file_loc,
            Line: line_no,
            Msg: e_msg
        }, column && column < line_no && (ErrorHandler.data.Error.Column = column), errorObj && (ErrorHandler.data.Error.Object = errorObj).stack && (ErrorHandler.data.Error.Stack = errorObj.stack.split("\n")), ErrorHandler.data.Error.Stack || (ErrorHandler.data.Error.Stack = printStackTrace());
        var d = Date();
        try {
            void 0 !== d.toLocaleString && (ErrorHandler.data.Time.locale = d.toLocaleString()), void 0 !== d.toUTCString && (ErrorHandler.data.Time.UTC = d.toUTCString()), void 0 !== d.getTime && (ErrorHandler.data.Time.Unix = d.getTime()), void 0 !== d.getTimezoneOffset && (ErrorHandler.data.Time.offset = d.getTimezoneOffset())
        } catch (ignore) {
            "function" == typeof self.loopBreak && self.loopBreak(arguments.callee.name, 624, ignore)
        }
        try {
            if (ErrorHandler.data.window.location = window.location.href, ErrorHandler.data.navigator.appCodeName = navigator.appCodeName, ErrorHandler.data.navigator.appName = navigator.appName, ErrorHandler.data.navigator.appVersion = navigator.appVersion, ErrorHandler.data.navigator.browserLanguage = navigator.browserLanguage, ErrorHandler.data.navigator.cookieEnabled = navigator.cookieEnabled, ErrorHandler.data.navigator.doNotTrack = navigator.doNotTrack, ErrorHandler.data.navigator.language = navigator.language, ErrorHandler.data.navigator.onLine = navigator.onLine, ErrorHandler.data.navigator.platform = navigator.platform, ErrorHandler.data.navigator.userAgent = navigator.userAgent, ErrorHandler.data.navigator.userLanguage = navigator.userLanguage, navigator.geolocation && (ErrorHandler.data.navigator.geolocation = navigator.geolocation.lastPosition), navigator.plugins)
                for (i = 0; i < navigator.plugins.length; i++) ErrorHandler.data.navigator.plugins[i] = {}, ErrorHandler.data.navigator.plugins[i].description = navigator.plugins[i].description, ErrorHandler.data.navigator.plugins[i].filename = navigator.plugins[i].filename, ErrorHandler.data.navigator.plugins[i].name = navigator.plugins[i].name
        } catch (e) {
            "function" == typeof self.loopBreak && self.loopBreak(arguments.callee.name, 654, e)
        }
        ErrorHandler.data.window.screen = window.screen, ErrorHandler.data.window.name = window.name, ErrorHandler.data.window.position = {}, window.screenLeft && (ErrorHandler.data.window.position.screenLeft = window.screenLeft), window.screenTop && (ErrorHandler.data.window.position.screenTop = window.screenTop), window.screenX && (ErrorHandler.data.window.position.screenX = window.screenX), window.screenY && (ErrorHandler.data.window.position.screenY = window.screenY), window.scrollX && (ErrorHandler.data.window.position.scrollX = window.scrollX), window.scrollY && (ErrorHandler.data.window.position.scrollY = window.scrollY), window.performance && (ErrorHandler.data.window.performance = {}, window.performance.memory && (ErrorHandler.data.window.performance.memory = {}, window.performance.memory.jsHeapSizeLimit && (ErrorHandler.data.window.performance.memory.jsHeapSizeLimit = window.performance.memory.jsHeapSizeLimit), window.performance.memory.totalJSHeapSize && (ErrorHandler.data.window.performance.memory.totalJSHeapSize = window.performance.memory.totalJSHeapSize), window.performance.memory.usedJSHeapSize && (ErrorHandler.data.window.performance.memory.usedJSHeapSize = window.performance.memory.usedJSHeapSize)), window.performance.timing && (ErrorHandler.data.window.performance.timing = {}, window.performance.timing.connectStart && (ErrorHandler.data.window.performance.timing.connectStart = window.performance.timing.connectStart), window.performance.timing.connectEnd && (ErrorHandler.data.window.performance.timing.connectEnd = window.performance.timing.connectEnd), window.performance.timing.domComplete && (ErrorHandler.data.window.performance.timing.domComplete = window.performance.timing.domComplete)));
        try {
            ErrorHandler.data.history.length = window.history.length, ErrorHandler.data.history.current = window.history.current, ErrorHandler.data.history.next = window.history.next, ErrorHandler.data.history.previous = window.history.previous
        } catch (e) {
            "function" == typeof self.loopBreak && self.loopBreak(arguments.callee.name, 699, e)
        }
        try {
            ErrorHandler.data.document.URL = document.URL, ErrorHandler.data.document.compatMode = document.compatMode, ErrorHandler.data.document.lastModified = document.lastModified, ErrorHandler.data.document.readyState = document.readyState, ErrorHandler.data.document.referrer = document.referrer
        } catch (e) {
            "function" == typeof self.loopBreak && self.loopBreak(arguments.callee.name, 712, e)
        }
        var scripts = document.getElementsByTagName("SCRIPT");
        for (i = 0; i < scripts.length; i++) try {
            ErrorHandler.data.document.scripts[i] = {}, "" < scripts[i].src && (ErrorHandler.data.document.scripts[i].src = scripts[i].src), "" < scripts[i].id && (ErrorHandler.data.document.scripts[i].id = scripts[i].id), "" < scripts[i].name && (ErrorHandler.data.document.scripts[i].name = scripts[i].name), ErrorHandler.data.document.scripts[i].defer = scripts[i].defer ? 1 : 0, ErrorHandler.data.document.scripts[i].type = scripts[i].type, "" < scripts[i].charset && (ErrorHandler.data.document.scripts[i].charset = scripts[i].charset), "" < scripts[i].text && (ErrorHandler.data.document.scripts[i].text = (100 < scripts[i].text.length ? scripts[i].text.substr(0, 100) + "..." : scripts[i].text).replace("\r", " | ").replace("\n", " | "))
        } catch (e) {
            "function" == typeof self.loopBreak && self.loopBreak(arguments.callee.name, 743, e)
        }
        if (window.loopBreak && (ErrorHandler.data.loopBreak = window.loopBreak), ErrorHandler.data.support || (ErrorHandler.data.support = {}), ErrorHandler.data.support.define || (ErrorHandler.data.support.define = {}), Object.defineProperties && (ErrorHandler.data.support.define.Properties = 1), Object.defineProperty && (ErrorHandler.data.support.define.Property = 1), Object.__defineGetter__ && (ErrorHandler.data.support.define.Getter = 1), jQuery) {
            var data, data2, url = "";
            try {
                data = ErrorHandler.data, window.PHPSessID && (url += "&PHPSESSID=" + window.PHPSessID), jQuery.ajax({
                    async: !0,
                    cache: !1,
                    type: "POST",
                    data: data,
                    url: "/?jsError=1&Err=" + e_msg + url,
                    error: ajaxError2log,
                    success: ajaxSuccess2log
                })
            } catch (e) {
                try {
                    jQuery.ajax({
                        async: !0,
                        cache: !1,
                        type: "POST",
                        data: {
                            document: JSON.stringify(data.document),
                            window: JSON.stringify(data.window),
                            Time: JSON.stringify(data.Time),
                            navigator: JSON.stringify(data.navigator),
                            history: JSON.stringify(data.history),
                            Error: JSON.stringify(data.Error),
                            loopBreak: JSON.stringify(data.loopBreak)
                        },
                        url: "/?jsError=1&Err=" + e_msg + url,
                        error: ajaxError2log,
                        success: ajaxSuccess2log
                    })
                } catch (err) {
                    try {
                        "undefined" != typeof JSON && void 0 !== JSON.stringify && (data2 = "json=" + JSON.stringify(data)), jQuery.ajax({
                            async: !0,
                            cache: !1,
                            type: "POST",
                            data: data2,
                            url: "/?jsError=1&Err=" + e_msg + url,
                            error: ajaxError2log,
                            success: ajaxSuccess2log
                        })
                    } catch (err2) {
                        "undefined" != typeof console && "function" == typeof console.log && console.log("textStatus: " + err2.message);
                        try {
                            setTimeout(function() {
                                try {
                                    jQuery.ajax({
                                        async: !0,
                                        cache: !1,
                                        type: "POST",
                                        data: data,
                                        url: "/?jsError=1&Err=" + e_msg + url,
                                        error: ajaxError2log,
                                        success: ajaxSuccess2log
                                    })
                                } catch (err4) {}
                            }, 100)
                        } catch (err3) {}
                    }
                }
            }
        } else {
            ajaxCtrl(function() {
                return !0
            }, "ajxerrorLogger.php", "file=" + file_loc + "&line=" + line_no + "&err=" + e_msg)
        }
    }
    return ErrorHandler.isDebugging && alert("Error Found !!!\n--------------\n" + error_d), ErrorHandler.data = {}, !(ErrorHandler.running = !1)
}
/**
 * Stellingkast.nl JS Cart
 *
 * Basis JavaScript file for all pages/objects
 *
 *   ____  _       _ _ _             _  __         _           _
 *  / ___|| |_ ___| | (_)_ __   __ _| |/ /__ _ ___| |_   _ __ | |
 *  \___ \| __/ _ \ | | | '_ \ / _` | ' // _` / __| __| | '_ \| |
 *   ___) | ||  __/ | | | | | | (_| | . \ (_| \__ \ |_ _| | | | |
 *  |____/ \__\___|_|_|_|_| |_|\__, |_|\_\__,_|___/\__(_)_| |_|_|
 *                             |___/
 *
 * Stellingkast.nl
 * Ontwikkeld voor ARS-almere / ARS-online.
 *
 * PHP version 5
 * @category  WebShop
 * @package   Stellingkast
 * @author    ARS Online <info@stellingkast.nl>
 * @copyright 2014 ARS en Stellingkast.nl
 * @link      https://www.stellingkast.nl
 *
 * @license   Copyright (c) 2014-2016 ARS Office & Storage / Stellingkast.nl B.V.
 * We at Stellingkast.nl have really worked hard to create this code.
 * So please do not use it without our permission!
 */
if ($(document).ready(function() {
        if (void 0 !== $.fancybox) return $(".fancy").fancybox({
            type: "iframe",
            overlayShow: !0,
            hideOnContentClick: !1,
            autoscale: !1,
            width: 1050,
            height: "90%",
            padding: 15
        }), !1
    }), printStackTrace.implementation = function() {}, printStackTrace.implementation.prototype = {
        run: function(ex, mode) {
            return ex = ex || this.createException(), "other" === (mode = mode || this.mode(ex)) ? this.other(arguments.callee) : this[mode](ex)
        },
        createException: function() {
            try {
                return this.undef(), null
            } catch (e) {
                return e
            }
        },
        mode: function(e) {
            return e.arguments && e.stack ? "chrome" : "string" == typeof e.message && "undefined" != typeof window && window.opera ? e.stacktrace ? -1 < e.message.indexOf("\n") && e.message.split("\n").length > e.stacktrace.split("\n").length ? "opera9" : e.stack ? e.stacktrace.indexOf("called from line") < 0 ? "opera10b" : "opera11" : "opera10a" : "opera9" : e.stack ? "firefox" : "other"
        },
        instrumentFunction: function(context, functionName, callback) {
            var original = (context = context || window)[functionName];
            context[functionName] = function() {
                return callback.call(this, printStackTrace().slice(4)), context[functionName]._instrumented.apply(this, arguments)
            }, context[functionName]._instrumented = original
        },
        deinstrumentFunction: function(context, functionName) {
            context[functionName].constructor === Function && context[functionName]._instrumented && context[functionName]._instrumented.constructor === Function && (context[functionName] = context[functionName]._instrumented)
        },
        chrome: function(e) {
            var stack = (e.stack + "\n").replace(/^\S[^\(]+?[\n$]/gm, "").replace(/^\s+(at eval )?at\s+/gm, "").replace(/^([^\(]+?)([\n$])/gm, "{anonymous}()@$1$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, "{anonymous}()@$1").split("\n");
            return stack.pop(), stack
        },
        firefox: function(e) {
            return e.stack.replace(/(?:\n@:0)?\s+$/m, "").replace(/^\(/gm, "{anonymous}(").split("\n")
        },
        opera11: function(e) {
            var i, match, location, fnName, len, lineRE = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/,
                lines = e.stacktrace.split("\n"),
                result = [];
            for (i = 0, len = lines.length; i < len; i += 2)(match = lineRE.exec(lines[i])) && (location = match[4] + ":" + match[1] + ":" + match[2], fnName = (fnName = match[3] || "global code").replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, "{anonymous}"), result.push(fnName + "@" + location + " -- " + lines[i + 1].replace(/^\s+/, "")));
            return result
        },
        opera10b: function(e) {
            var i, len, match, fnName, lineRE = /^(.*)@(.+):(\d+)$/,
                lines = e.stacktrace.split("\n"),
                result = [];
            for (i = 0, len = lines.length; i < len; i++)(match = lineRE.exec(lines[i])) && (fnName = match[1] ? match[1] + "()" : "global code", result.push(fnName + "@" + match[2] + ":" + match[3]));
            return result
        },
        opera10a: function(e) {
            var i, match, fnName, len, lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                lines = e.stacktrace.split("\n"),
                result = [];
            for (i = 0, len = lines.length; i < len; i += 2)(match = lineRE.exec(lines[i])) && (fnName = match[3] || "{anonymous}", result.push(fnName + "()@" + match[2] + ":" + match[1] + " -- " + lines[i + 1].replace(/^\s+/, "")));
            return result
        },
        opera9: function(e) {
            var i, match, len, lineRE = /Line (\d+).*script (?:in )?(\S+)/i,
                lines = e.message.split("\n"),
                result = [];
            for (i = 2, len = lines.length; i < len; i += 2)(match = lineRE.exec(lines[i])) && result.push("{anonymous}()@" + match[2] + ":" + match[1] + " -- " + lines[i + 1].replace(/^\s+/, ""));
            return result
        },
        other: function(curr) {
            for (var fn, args, fnRE = /function\s*([\w\-$]+)?\s*\(/i, stack = []; curr && curr.arguments && stack.length < 10;) fn = fnRE.test(curr.toString()) && RegExp.$1 || "{anonymous}", args = Array.prototype.slice.call(curr.arguments || []), stack[stack.length] = fn + "(" + this.stringifyArguments(args) + ")", curr = curr.caller;
            return stack
        },
        stringifyArguments: function(args) {
            var i, arg, result = [],
                slice = Array.prototype.slice;
            for (i = 0; i < args.length; ++i) void 0 === (arg = args[i]) ? result[i] = "undefined" : null === arg ? result[i] = "null" : arg.constructor && (arg.constructor === Array ? arg.length < 3 ? result[i] = "[" + this.stringifyArguments(arg) + "]" : result[i] = "[" + this.stringifyArguments(slice.call(arg, 0, 1)) + "..." + this.stringifyArguments(slice.call(arg, -1)) + "]" : arg.constructor === Object ? result[i] = "#object" : arg.constructor === Function ? result[i] = "#function" : arg.constructor === String ? result[i] = '"' + arg + '"' : arg.constructor === Number && (result[i] = arg));
            return result.join(",")
        },
        sourceCache: {},
        ajax: function(url) {
            var req = this.createXMLHTTPObject();
            if (req) try {
                return req.open("GET", url, !1), req.send(null), req.responseText
            } catch (ignore) {}
            return ""
        },
        createXMLHTTPObject: function() {
            var i, xmlhttp, XMLHttpFactories = [function() {
                return new XMLHttpRequest
            }, function() {
                return new ActiveXObject("Msxml2.XMLHTTP")
            }, function() {
                return new ActiveXObject("Msxml3.XMLHTTP")
            }, function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }];
            for (i = 0; i < XMLHttpFactories.length; i++) try {
                return xmlhttp = XMLHttpFactories[i](), this.createXMLHTTPObject = XMLHttpFactories[i], xmlhttp
            } catch (ignore) {}
            return null
        },
        isSameDomain: function(url) {
            return "undefined" != typeof location && -1 !== url.indexOf(location.hostname)
        },
        getSource: function(url) {
            return url in this.sourceCache || (this.sourceCache[url] = this.ajax(url).split("\n")), this.sourceCache[url]
        },
        guessAnonymousFunctions: function(stack) {
            var i, reStack, reRef, frame, ref, m, file, lineno, charno, functionName;
            for (i = 0; i < stack.length; ++i) reStack = /\{anonymous\}\(.*\)@(.*)/, reRef = /^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/, frame = stack[i], (ref = reStack.exec(frame)) && (m = reRef.exec(ref[1])) && (file = m[1], lineno = m[2], charno = m[3] || 0, file && this.isSameDomain(file) && lineno && (functionName = this.guessAnonymousFunction(file, lineno, charno), stack[i] = frame.replace("{anonymous}", functionName)));
            return stack
        },
        guessAnonymousFunction: function(url, lineNo) {
            var ret;
            try {
                ret = this.findFunctionName(this.getSource(url), lineNo)
            } catch (e) {
                ret = "getSource failed with url: " + url + ", exception: " + e.toString()
            }
            return ret
        },
        findFunctionName: function(source, lineNo) {
            var line, m, i, commentPos, reFunctionDeclaration = /function\s+([^(]*?)\s*\(([^)]*)\)/,
                reFunctionExpression = /['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*function\b/,
                reFunctionEvaluation = /['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*(?:eval|new Function)\b/,
                code = "",
                maxLines = Math.min(lineNo, 20);
            for (i = 0; i < maxLines; ++i)
                if (0 <= (commentPos = (line = source[lineNo - i - 1]).indexOf("//")) && (line = line.substr(0, commentPos)), line) {
                    if (code = line + code, (m = reFunctionExpression.exec(code)) && m[1]) return m[1];
                    if ((m = reFunctionDeclaration.exec(code)) && m[1]) return m[1];
                    if ((m = reFunctionEvaluation.exec(code)) && m[1]) return m[1]
                }
            return "(?)"
        }
    }, SKBaseClass && (ErrorHandler.prototype = Object.create(SKBaseClass.prototype), ErrorHandler.prototype.constructor = ErrorHandler, ErrorHandler.updatedConstructor = !0), window.onerror = ErrorHandler, window.onabort = ErrorHandler, void 0 === functionName)
function functionName(func) {
    var result = /^function\s+([\w\$]+)\s*\(/.exec(func.toString());
    return result ? result[1] : ""
}
void 0 === "".lpad && (String.prototype.lpad = function(padString, length) {
    for (var str = this; str.length < length;) str = padString + str;
    return str
}), void 0 === "".rpad && (String.prototype.rpad = function(padString, length) {
    for (var str = this; str.length < length;) str += padString;
    return str
}), void 0 === "".ucfirst && (String.prototype.ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}, String.prototype.ucwords = function() {
    return this.replace(/\w+/g, function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
    })
});
var elementSelector = "input, textarea, button, select, checkbox, file, radio, text, submit, password";

function isNode(o) {
    return "object" == typeof Node ? o instanceof Node : o && "object" == typeof o && "number" == typeof o.nodeType && "string" == typeof o.nodeName
}

function isElement(o) {
    return "object" == typeof HTMLElement ? o instanceof HTMLElement : o && "object" == typeof o && null !== o && 1 === o.nodeType && "string" == typeof o.nodeName
}

function CartButton() {
    var self = this,
        $cartBtn = jQuery("#header a.cart"),
        $cartContent = jQuery("#header .cartcontent"),
        $cartOpenBtn = jQuery("#header a.cart span.openbtn"),
        $cartAddBtns = jQuery(".products form input.img.cart, form.bestellen input.cartimg"),
        timoutHandle = null;
    if (self.abstrct = !1, SKBaseClass.call(self, "CartButton", [CartButton]), !(0 < $cartOpenBtn.length)) return !1;
    self.timeout = 6500, self.cartContentClick = function(event) {
        var result = !0;
        try {
            self.loopBreak(arguments.callee.name, 117), "A" !== event.target.tagName && 0 === $(event.target).parents("a").length && (result = !1)
        } catch (err) {
            self.log("warn", err)
        }
        return result
    }, self.bodyClick = function(event) {
        var fnName = arguments.callee.name;
        fnName || (fnName = "bClk");
        try {
            self.loopBreak(fnName, 129), event.target.className.indexOf("fancy") < 0 && event.target.parentElement && event.target.parentElement.className.indexOf("fancy") && 0 === $(event.target).parents(".cartcontent").length && $cartContent.slideUp()
        } catch (err) {
            self.log("warn", err)
        }
    }, self.cartOpenBtnParentClick = function() {
        try {
            var total, fnName = arguments.callee.name;
            fnName || (fnName = "cOpenBPClick"), self.loopBreak(fnName, 143), total = $cartContent.find(".grandtotal .price").text().trim(), $cartContent.find(".empty").css({
                display: "" !== total && 0 !== parseFloat(total) ? "none" : "block"
            }), $cartContent.slideToggle({
                complete: function() {
                    self.loopBreak(arguments.callee.name, 153), $.fancybox && $cartContent.find("a.fancy").fancybox({})
                }
            })
        } catch (err) {
            self.log("warn", err)
        }
    }, self.cartAddBtnClick = function() {
        try {
            self.loopBreak(arguments.callee.name, 163);
            var div = document.createElement("div"),
                input = this,
                tr = $(input).parents("tr").first(),
                fieldsErr = [],
                names = [];
            $(input.form.elements).each(function(index, Element) {
                self.loopBreak(arguments.callee.name, 171), isElement(Element) && "hidden" !== Element.type && "" < Element.name && !$(Element).val() && (fieldsErr.push(Element), 0 < Element.name.indexOf("[") ? names.push(Element.name.split("[", 2)[1].replace(/[\[\]-]/g, "")) : names.push(Element.name), Element.style.color = "#f00", Element.style.backgroundColor = "#ff0")
            }), 1 === fieldsErr.length ? (alert(fieldsErr.length + " verplicht veld is niet (goed) ingevuld.\n" + fieldsErr[0].name), fieldsErr[0].focus()) : 1 < fieldsErr.length ? (alert(fieldsErr.length + " verplichte velden zijn niet (goed) ingevuld.\n" + names.join(", ")), fieldsErr[0].focus()) : ($cartContent.stop(!0), timoutHandle && clearTimeout(timoutHandle), $cartContent.stop().slideDown({
                always: function() {
                    try {
                        self.loopBreak(arguments.callee.name, 205), div.className = "product", $cartContent.find(".parts > .clear.spacer").before(div), $(div).animate({
                            height: 40
                        }, {
                            always: function() {
                                try {
                                    self.loopBreak(arguments.callee.name, 212);
                                    var img = document.createElement("div"),
                                        descr = document.createElement("div"),
                                        price = document.createElement("div");
                                    $(div).append(img), $(div).append(descr), $(descr).append('<span class="count"></span><span class="name">' + tr.find(".name").text() + "</span>"), $(div).append(price), $(tr).find(".img img").clone().appendTo(img), $.ajax({
                                        url: input.form.action,
                                        data: $(input.form).serialize() + "&template=cart",
                                        cache: !1,
                                        success: function(data) {
                                            try {
                                                self.loopBreak(arguments.callee.name, 232);
                                                var div = document.createElement("div"),
                                                    text = "";
                                                $(div).append(data), text = $(div).find(".cartContainer .count").first().html(), $("#header .cartContainer .count").first().html(text), text = $(div).find(".cartContainer .cartcontent").first().html(), $("#header .cartContainer .cartcontent").first().html(text), timoutHandle = setTimeout(function() {
                                                    self.loopBreak(arguments.callee.name, 241), $cartContent.slideUp()
                                                }, self.timeout)
                                            } catch (err) {
                                                self.log("warn", err)
                                            }
                                        },
                                        error: function(jqXHR, textStatus, errorThrown) {
                                            self.loopBreak(arguments.callee.name, 247), alert("error: " + errorThrown)
                                        }
                                    })
                                } catch (err) {
                                    self.log("warn", err)
                                }
                            }
                        })
                    } catch (err) {
                        self.log("warn", err)
                    }
                }
            }))
        } catch (err) {
            self.log("warn", err)
        }
        return !1
    }, $cartBtn.on("click", function() {
        try {
            self.loopBreak(arguments.callee.name, 263)
        } catch (err) {
            self.log("warn", err)
        }
        return !1
    });
    try {
        SKBaseClass.charSupported("&dtrif;") || ($cartOpenBtn.text(""), $cartOpenBtn.css("background", "url('/images/arrowDR30.png') no-repeat center center")), SKBaseClass.charSupported("&rtrif;") || ($cartContent.find(".gotocart a .right").text(""), $cartContent.find(".gotocart a .right").css({
            background: "url('/images/arrowDR30.png') no-repeat center center"
        })), $cartContent.on("click", self.cartContentClick), $cartOpenBtn.parent().on("click", self.cartOpenBtnParentClick), $cartAddBtns.on("click", self.cartAddBtnClick), jQuery("body").on("click", self.bodyClick)
    } catch (err) {
        self.log("warn", err)
    }
    return self
}

function FinalizeOrder() {
    var filled, cartSelectCountryChange, cartDiffDeliveryAddrClick, cartCheckFilled, repairGToolbarHiddenButtons, self = this,
        repairGToolbarHiddenButtonsNeeded = 0;
    self.abstrct = !1, SKBaseClass.call(self, "FinalizeOrder", [FinalizeOrder]), jQuery(".afronden .company").hide(), jQuery(".afronden .private").hide(), cartCheckFilled = function(index, Element) {
        try {
            switch (self.loopBreak(arguments.callee.name, 302), Element.type) {
                case "checkbox":
                    Element.checked && (filled = !0);
                    break;
                case "radio":
                    Element.selected && (filled = !0);
                    break;
                default:
                    "" < jQuery(Element).val() && (filled = !0)
            }
        } catch (err) {
            self.log("warn", err)
        }
    }, jQuery(".afronden .deliveryAddr input").each(cartCheckFilled), filled || jQuery(".afronden .deliveryAddr").hide(), self.cartRadioCpyClick = function() {
        try {
            var jQP = jQuery(".afronden .private"),
                jQC = jQuery(".afronden .company");
            self.loopBreak(arguments.callee.name, 331), jQP.slideUp("fast"), jQC.stop().slideDown("fast"), -1 < $.inArray($("select[name='naw_f[Land]']").val(), ["", "NL"]) ? (jQuery(".afronden .eu").slideUp("fast"), jQuery('input[name="naw_f[btwnr]"]').removeAttr("required").addClass("ignoreValidation")) : (jQuery(".afronden .eu").stop().slideDown("fast", function() {
                $("input.eu").css({
                    display: "inline-block"
                })
            }), jQuery('input[name="naw_f[btwnr]"]').attr("required", "required").removeClass("ignoreValidation")), jQP.find("input[name='naw_f[Bedrijfsnaam]']").removeAttr("required").attr("disabled", !0), jQC.find("input[name='naw_f[Bedrijfsnaam]']").removeAttr("disabled").attr("required", !0)
        } catch (err) {
            self.log("warn", err)
        }
    }, self.cartRadioPrivateClick = function() {
        try {
            var jQP = jQuery(".afronden .private"),
                jQC = jQuery(".afronden .company");
            self.loopBreak(arguments.callee.name, 350), jQuery('input[name="naw_f[btwnr]"]').removeAttr("required"), jQC.stop().slideUp("fast"), jQP.stop().slideDown("fast"), jQC.find("input[name='naw_f[Bedrijfsnaam]']").removeAttr("required").attr("disabled", !0), jQP.find("input[name='naw_f[Bedrijfsnaam]']").removeAttr("disabled").attr("required", !0)
        } catch (err) {
            self.log("warn", err)
        }
    }, self.autoCollapseHideAlways = function() {
        try {
            self.loopBreak(arguments.callee.name, 365), self.debug && console && console.log && console.log("Fieldset " + $(this.parentElement).attr("name") + " hide ALWAYS")
        } catch (err) {
            self.log("warn", err)
        }
    }, self.autoCollapseHideStart = function() {
        try {
            self.loopBreak(arguments.callee.name, 380), self.debug && console && console.log && console.log("Fieldset " + $(this.parentElement).attr("name") + " hide START");
            var $fieldset = $(this).parents("fieldset").first(),
                $elements = $fieldset.find(elementSelector).not(".ignoreValidation"),
                valid = !0,
                useValidator = !1;
            $fieldset.find(".summaryInvalid").slideUp(), $elements.each(function(index, Element) {
                if (self.loopBreak(arguments.callee.name, 393), isElement(Element)) {
                    if (useValidator) {
                        var errorImg, wasValidated = $(Element).hasClass("valid") || $(Element).hasClass("invalid") || 0 < $(Element).parents(".valid").length || 0 < $(Element).parents(".invalid").length;
                        try {
                            valid &= $(Element).valid()
                        } catch (err) {
                            useValidator = !1
                        }
                        wasValidated || ($(Element).removeClass("valid").removeClass("invalid"), $(Element).parents(".valid, .invalid").removeClass("valid").removeClass("invalid"), (errorImg = $(Element).data("errorImg")) && (errorImg.remove(), $(Element).data("errorImg", void 0)))
                    } else if ($(Element).hasClass("required") || $(Element).attr("required")) switch (Element.tagName.toLowerCase()) {
                        case "input":
                            switch (Element.type) {
                                case "radio":
                                case "checkbox":
                                    var jFChk = $(Element.form).find('input[name="' + Element.name + '"]:checked');
                                    if (!jFChk.length) return valid = !1;
                                    if (!jFChk.val()) return valid = !1;
                                    break;
                                default:
                                    if (!$(Element).val()) return valid = !1
                            }
                            break;
                        default:
                            if (!$(Element).val()) return valid = !1
                    }
                    return valid
                }
                return !0
            }), $fieldset.find(".next").stop().slideUp(), $fieldset.find(".edit").stop().slideDown(), valid ? $fieldset.find(".summary").stop().slideDown() : ($fieldset.find(".summaryInvalid").length || $fieldset.append('<div class="summaryInvalid" style="display: none;">Nog niet (volledig) ingevuld</div>'), $fieldset.find(".summaryInvalid").stop().slideDown()), $fieldset.find(elementSelector).each(function(index, Element) {
                self.loopBreak(arguments.callee.name, 473), Element.name && self.fieldChange(Element)
            })
        } catch (err) {
            self.log("warn", err)
        }
    }, self.autoCollapseHideDone = function() {
        try {
            self.loopBreak(arguments.callee.name, 480), self.debug && console && console.log && console.log("Fieldset " + $(this.parentElement).attr("name") + " hide DONE")
        } catch (err) {
            self.log("warn", err)
        }
    }, self.autoCollapseHideFail = function() {
        try {
            self.loopBreak(arguments.callee.name, 492), self.debug && console && console.log && console.log("Fieldset " + $(this.parentElement).attr("name") + " hide FAIL");
            var $fieldset = $(this).parents("fieldset").first();
            $fieldset.find(".summaryInvalid").slideUp(), $fieldset.find(".summary").slideUp()
        } catch (err) {
            self.log("warn", err)
        }
    }, self.autoCollapseHideComplete = function() {
        try {
            self.loopBreak(arguments.callee.name, 507), self.debug && console && console.log && console.log("Fieldset " + $(this.parentElement).attr("name") + " hide complete")
        } catch (err) {
            self.log("warn", err)
        }
    }, self.autoCollapseShowAlways = function() {
        try {
            self.loopBreak(arguments.callee.name, 519), self.debug && console && console.log && console.log("Fieldset " + $(this.parentElement).attr("name") + " show ALLWAYS")
        } catch (err) {
            self.log("warn", err)
        }
    }, self.autoCollapseShowStart = function() {
        try {
            self.loopBreak(arguments.callee.name, 534), self.debug && console && console.log && console.log("Fieldset " + $(this.parentElement).attr("name") + " show START");
            var $fieldset = $(this).parents("fieldset").first();
            $fieldset.find(".summaryInvalid").stop().slideUp(), $fieldset.find(".next").stop().slideDown(), $fieldset.find(".edit").stop().slideUp(), $fieldset.find(".summary").stop().slideUp()
        } catch (err) {
            self.log("warn", err)
        }
    }, self.autoCollapseShowDone = function() {
        try {
            self.loopBreak(arguments.callee.name, 551), self.debug && console && console.log && console.log("Fieldset " + $(this.parentElement).attr("name") + " show DONE")
        } catch (err) {
            self.log("warn", err)
        }
    }, self.autoCollapseShowFail = function() {
        try {
            self.loopBreak(arguments.callee.name, 563), self.debug && console && console.log && console.log("Fieldset " + $(this.parentElement).attr("name") + " show FAIL")
        } catch (err) {
            self.log("warn", err)
        }
    }, self.autoCollapseShowComplete = function() {
        try {
            self.loopBreak(arguments.callee.name, 577), self.debug && console && console.log && console.log("Fieldset " + $(this.parentElement).attr("name") + " show complete"), $(this).css({
                height: "",
                display: "",
                margin: "",
                padding: ""
            })
        } catch (err) {
            self.log("warn", err)
        }
    }, self.editFieldsetClick = function() {
        try {
            self.loopBreak(arguments.callee.name, 590);
            var $fieldset = $(this).parents("fieldset").first();
            $("fieldset.autocollapse .fieldset").slideUp({
                always: self.autoCollapseHideAlways,
                start: self.autoCollapseHideStart,
                done: self.autoCollapseHideDone,
                fail: self.autoCollapseHideFail,
                complete: self.autoCollapseHideComplete
            }), $fieldset.find(".fieldset").stop().slideDown({
                always: self.autoCollapseShowAlways,
                start: self.autoCollapseShowStart,
                done: self.autoCollapseShowDone,
                fail: self.autoCollapseShowFail,
                complete: self.autoCollapseShowComplete
            })
        } catch (err) {
            self.log("warn", err)
        }
    }, self.nextFieldsetClick = function() {
        try {
            self.loopBreak(arguments.callee.name, 610);
            var btn = this,
                fieldset = $(this).parents("fieldset").first(),
                fieldsetElements = fieldset.find(elementSelector),
                valid = !0;
            $.validator && (valid = fieldsetElements.valid()), fieldsetElements.not(".ignoreValidation").filter(".invalid").length || (valid = !0), valid ? (fieldset.find(".fieldset").stop().slideUp({
                always: self.autoCollapseHideAlways,
                start: self.autoCollapseHideStart,
                done: self.autoCollapseHideDone,
                fail: self.autoCollapseHideFail,
                complete: self.autoCollapseHideComplete
            }), fieldset.nextAll(":visible").first().find(".fieldset").stop().slideDown({
                always: self.autoCollapseShowAlways,
                start: self.autoCollapseShowStart,
                done: self.autoCollapseShowDone,
                fail: self.autoCollapseShowFail,
                complete: self.autoCollapseShowComplete
            })) : ($(this.form).find("fieldset").first().find(elementSelector).valid(), $(this).parents("form").find(elementSelector).each(function(ix, Element) {
                try {
                    if (self.loopBreak(arguments.callee.name, 643), Element === btn) return !1;
                    $(Element).valid()
                } catch (err) {
                    self.log("warn", err)
                }
                return !0
            }), $(this).parents("fieldset").first().find(elementSelector).valid(), $(this.form).find("fieldset").find(".valid").removeClass("valid").removeClass("invalid"))
        } catch (err) {
            self.log("warn", err)
        }
    }, self.fieldChange = function(event) {
        try {
            self.loopBreak(arguments.callee.name, 657);
            var element, field, fields, fieldset, classes, i, summaryfield, value = "";
            if (void 0 !== this && isElement(this) ? element = this : void 0 === element && isElement(event) && (element = event), self.debug && console && console.log && console.log("Field " + element.name + " changed"), !(field = $(element).parents(".field").first()).length) return;
            for (i in fields = field.find("input, textarea, select"), fieldset = $(element).parents("fieldset").first(), classes = field[0].className.trim().split(" "), fields)
                if (!isNaN(i) && fields[i] && fields[i].tagName) switch (fields[i].tagName.toLowerCase()) {
                    case "input":
                        switch (fields[i].type) {
                            case "hidden":
                                break;
                            case "radio":
                            case "checkbox":
                                fields[i].checked && (0 < $('label[for="' + fields[i].id + '"]').length ? value += " " + $('label[for="' + fields[i].id + '"]').html().split("<br")[0].replace(/(<([^>]+)>)/gi, "").trim() : value += " " + $(fields[i]).val().trim());
                                break;
                            default:
                                value += " " + $(fields[i]).val().trim()
                        }
                        break;
                    case "select":
                        try {
                            value += " " + fields[i].options[fields[i].selectedIndex].value
                        } catch (err) {
                            value += " " + $(fields[i]).val()
                        }
                        break;
                    case "textarea":
                    default:
                        "" !== value && (value += "<br />"), value += $(fields[i]).val().substr(0, 80)
                }
            for (i in value = value.trim(), classes) isNaN(i) || "string" == typeof classes[i] && "" < classes[i] && 0 < (summaryfield = fieldset.find("span." + classes[i])).length && summaryfield.text(value)
        } catch (err) {
            self.log("warn", err)
        }
    }, cartSelectCountryChange = function() {
        self.loopBreak(arguments.callee.name, 742), jQuery("#rCpy")[0].checked && (-1 < $.inArray($(this).val(), ["", "NL"]) ? jQuery(".afronden .eu").stop().hide("fast") : jQuery(".afronden .eu").stop().show("fast", function() {
            $("input.eu").css({
                display: "inline-block"
            })
        })), reloadDeliveryDates()
    }, repairGToolbarHiddenButtons = function repairGToolbarHiddenButtons() {
        $("fieldset.autocollapse .fieldset").each(function(ix, El) {
            $(El).is(":visible") ? $(El).siblings(".next").is(":visible") || ($(El).siblings(".next").stop().slideDown(), $(El).siblings(".edit").stop().slideUp(), repairGToolbarHiddenButtonsNeeded++) : $(El).siblings(".edit").is(":visible") || ($(El).siblings(".edit").stop().slideDown(), $(El).siblings(".next").stop().slideUp(), repairGToolbarHiddenButtonsNeeded++), $(El).parents(".autocollapse").height() < $(El).height() && $(El).parents(".autocollapse").height("auto")
        }), 0 < repairGToolbarHiddenButtonsNeeded && setTimeout(repairGToolbarHiddenButtons, 800)
    };
    try {
        0 < $("form.afronden fieldset").length && 0 < $(".content").length && $(".pageInfo .cartcontent").css({
            marginTop: Math.round($("form.afronden fieldset").first().offset().top - $(".content").offset().top - parseInt($(".pageInfo").css("margin-top"), 10) - parseInt($(".pageInfo").css("padding-top"), 10))
        }), jQuery("#rCpy").bind("click", self.cartRadioCpyClick), jQuery("#rPrv").bind("click", self.cartRadioPrivateClick), jQuery('input[name="naw_f[Postcode]"], input[name="naw_l[Postcode]"]').on({
            keypress: function(e) {
                self.loopBreak(arguments.callee.name, 792);
                var selectLand = $('select[name="' + this.name.replace("Postcode", "Land") + '"]')[0];
                getSelectionStart(this) < 2 && ("B" === e.key || "b" === e.key ? selectLand.options.value = "BE" : "D" === e.key || "d" === e.key ? selectLand.options.value = "DE" : "N" !== e.key && "n" !== e.key || (selectLand.options.value = "NL"), $(selectLand).change())
            },
            keyup: function() {
                self.loopBreak(arguments.callee.name, 809);
                var element = this,
                    elements = [],
                    selectLand = $('select[name="' + this.name.replace("Postcode", "Land") + '"]')[0];
                validatePostalCode(this.value) && (selectLand.options.value = "NL", $(selectLand).change()), $('input[name="' + this.name + '"]').each(function() {
                    this != element && (this.value = element.value, elements.push(this))
                }), $(elements).change()
            },
            change: function(e) {
                reloadDeliveryDates(e)
            }
        }), jQuery(['input[name="naw_f[HuisNr]"]', 'input[name="naw_f[HuisNrToev]"]', 'input[name="naw_l[HuisNr]"]', 'input[name="naw_l[HuisNrToev]"]'].join(", ")).on({
            keyup: function() {
                var element = this,
                    elements = [];
                $('input[name="' + this.name + '"]').each(function() {
                    this != element && (this.value = element.value, elements.push(this))
                }), $(elements).change()
            }
        }), $("select[name='naw_f[Land]']").on("change", cartSelectCountryChange), $("select[name='naw_l[Land]']").on("change", reloadDeliveryDates), cartDiffDeliveryAddrClick = function() {
            var summary, dda = document.getElementById("dda"),
                fnName = arguments.callee.name;
            fnName || (fnName = "cbDiffDelAddrClck"), self.loopBreak(fnName, 856), dda && ($(dda).parents("fieldset").find("#editshipAddress").click(), summary = $(dda).parents("fieldset").find(".summary"), dda.checked ? (jQuery(".deliveryAddr").stop().show("fast"), $(dda).parents("fieldset").find(".ignoreValidation").removeClass("ignoreValidation"), summary.html(""), summary.append('<span class="address"></span><br />'), summary.append('<span class="postcode"></span>&nbsp;'), summary.append('(<span class="country"></span>)'), summary.append("<br />")) : ($(dda).parents("fieldset").find(elementSelector).addClass("ignoreValidation"), $(dda).removeClass("ignoreValidation"), jQuery('.deliveryAddr input[type="text"]').val(""), jQuery(".deliveryAddr").stop().hide("fast"), summary.html('<span class="otherDeliveryAddr">Als factuuradres...</span>'), summary.show(), setTimeout(function() {
                self.loopBreak(arguments.callee.name, 879), summary.stop().slideDown()
            }, 100)))
        }, jQuery("#dda").bind("click", function() {
            self.loopBreak(arguments.callee.name, 886), cartDiffDeliveryAddrClick(), $("#editshipAddress").click()
        }), cartDiffDeliveryAddrClick(), self.autoCollapseCount = $("fieldset.autocollapse .fieldset").length, $("fieldset.autocollapse .fieldset").each(function(index, Element) {
            var div, button;
            self.loopBreak(arguments.callee.name, 894), (div = document.createElement("div")).className = "next", button = document.createElement("button"), self.autoCollapseCount - 1 === index ? ($(button).text("Bestelling bevestigen"), $(button).attr("type", "submit"), $("input.orderButton").hide()) : ($(button).attr("type", "button"), button.onsubmit = "javascript:return false;", $(button).text("Volgende")), button.name = "submit[" + $(Element).parent().attr("name") + "]", button.value = "true", button.className = "", $(button).on("click", self.nextFieldsetClick), $(div).append(button), $(div).hide(), $(Element).parent().append(div), (div = document.createElement("div")).className = "edit", (button = document.createElement("a")).id = "edit" + $(Element).parent().attr("name"), $(button).text("wijzigen"), button.className = "editBtn", button.href = "javascript:void(" + index + ");", $(button).on("click", self.editFieldsetClick), $(div).append(button), $(div).hide(), $(Element).parent().append(div)
        }), $("fieldset.autocollapse .fieldset").slideUp({
            always: self.autoCollapseHideAlways,
            start: self.autoCollapseHideStart,
            done: self.autoCollapseHideDone,
            fail: self.autoCollapseHideFail,
            complete: self.autoCollapseHideComplete
        }), $("fieldset.autocollapse .fieldset").first().stop().slideDown({
            always: self.autoCollapseShowAlways,
            start: self.autoCollapseShowStart,
            done: self.autoCollapseShowDone,
            fail: self.autoCollapseShowFail,
            complete: self.autoCollapseShowComplete
        }), setTimeout(repairGToolbarHiddenButtons, 800), $("fieldset.autocollapse").on("change", elementSelector, self.fieldChange), 0 < $("#rCpy").length && ($("#rCpy")[0].checked ? $("#rCpy").click() : $("#rPrv")[0].checked && $("#rPrv").click())
    } catch (err) {
        self.log("warn", err)
    }
}

function SKCart() {
    var self = this,
        today = new Date,
        minDate = "+2d";
    self.abstrct = !1, SKBaseClass.call(self, "ShoppingCart", [SKCart]), self.namedFieldChange = function(e) {
        try {
            if (self.loopBreak(arguments.callee.name, 966), $.validator && ("click" !== e.type || "SELECT" !== e.target.tagName)) try {
                if ($(this).valid()) return !0
            } catch (ignore) {}
            e.srcElement && !window.deliveryDatesTimer && (window.deliveryDatesTimer = setTimeout(function() {
                reloadDeliveryDates()
            }, 100))
        } catch (err) {
            self.log("warn", err)
        }
        return !0
    }, self.cartFormSubmit = function() {
        try {
            self.loopBreak(arguments.callee.name, 985);
            var i, selects, $editBtn, waitDlg, invalid = [];
            if (window.inSubmit = !0, $.validator && (jQuery(this).find("fieldset.autocollapse .fieldset").each(function() {
                    $(this).show()
                }), jQuery(this.elements).each(function(index, element) {
                    self.loopBreak(arguments.callee.name, 996), jQuery(this).valid() ? log.debug(element.tagName + "(" + element.name + ") : VALID") : (log.warn(element.tagName + "(" + element.name + ") : INVALID !!!"), invalid.push(element))
                })), jQuery.validator && !jQuery(this).valid()) {
                jQuery(this).find("fieldset.autocollapse .fieldset").each(function() {
                    $(this).hide()
                }), window.inSubmit = !1, SKBaseClass.checkJQuery("cart.js", 1156, arguments.callee.name);
                try {
                    delete window.inSubmit
                } catch (err) {}
                if (0 < invalid.length) {
                    if (0 < ($editBtn = $(invalid[0]).parents("fieldset").find(".editBtn")).length) $editBtn.click();
                    else
                        for (i = 0; i < invalid.length; i++)
                            if ($(invalid[i]).parents(".fieldset") && 0 < ($editBtn = $(invalid[i]).parents("fieldset").find(".editBtn")).length) {
                                $editBtn.click();
                                break
                            } return invalid[0].focus(), !1
                }
                return alert("U hebt de verplichte opties niet (goed) ingevuld"), !1
            }
            if (0 < invalid.length) {
                if (alert("U hebt de volgende opties niet (goed) ingevuld: \n" + invalid.join("\n")), 0 < ($editBtn = $(invalid[0]).parents("fieldset").find(".editBtn")).length) $editBtn.click();
                else
                    for (i = 0; i < invalid.length; i++)
                        if ($(invalid[i]).parents(".fieldset") && 0 < ($editBtn = $(invalid[i]).parents("fieldset").find(".editBtn")).length) {
                            $editBtn.click();
                            break
                        } return invalid[0].focus(), !1
            }
            for (selects = $(this).find(".options select"), i = 0; i < selects.length; i++)
                if (0 === selects[i].selectedIndex) {
                    window.inSubmit = !1;
                    try {
                        delete window.inSubmit
                    } catch (err) {}
                    return alert("U hebt de verplichte opties niet ingevuld"), !1
                }
            try {
                delete window.inSubmit
            } catch (err) {
                window.inSubmit = null
            }
            if ($(this).hasClass("afronden")) try {
                waitDlg = document.createElement("div"), $(waitDlg).hide(), waitDlg.title = "Een moment geduld a.u.b.", $(waitDlg).append('<h2>Uw bestelling wordt verwerkt.</h2><p>Verlaat dit scherm niet<br />U wordt omgeleid naar de volgende pagina...<br /><center><img src="/images/loader.gif" alt="waiting..."/></center></p>'), $(waitDlg).dialog({
                    modal: !0,
                    width: 400
                })
            } catch (ignore) {}
        } catch (err) {
            self.log("warn", err)
        }
        return !0
    }, self.updateField = function() {
        try {
            self.loopBreak(arguments.callee.name, 1098);
            var data_tobepushed = {},
                element = this,
                elementParts = element.name.split("[");
            if (relatedElements = [], !this.form) return !0;
            if (!this.form.action) return !0;
            if (!this.name) return !0;
            data_tobepushed.do = "updatefield", data_tobepushed.debug = 0, data_tobepushed[this.name] = $(this).val(), $(element.nodeName.toLowerCase() + '[name="' + this.name + '"]').val($(this).val()), "naw_f[btwnr]" == this.name ? (relatedElements = $().add($('select[name="naw_f[Land]"]')).add($('input[name="naw_f[Bedrijfsnaam]"]')).add($('input[name="naw_f[Adres]"]')).add($('input[name="naw_f[HuisNr]"]')).add($('input[name="naw_f[HuisNrToev]"]')).add($('input[name="naw_f[Postcode]"]')).add($('input[name="naw_f[Woonplaats]"]')), $(relatedElements).prop("readonly", !0)) : 1 < elementParts.length && "[postcode]" == elementParts[1].toLowerCase() && (relatedElements = $().add($('select[name="' + elementParts[0] + '[Land]"]')).add($('select[name="' + elementParts[0] + '[Postcode]"]')).add($('select[name="' + elementParts[0] + '[Woonplaats]"]')).add($('select[name="' + elementParts[0] + '[Adres]"]')).add($('select[name="' + elementParts[0] + '[HuisNr]"]')).add($('select[name="' + elementParts[0] + '[HuisNrToev]"]')), $(relatedElements).prop("readonly", !0)), $.ajax({
                cache: !1,
                async: !0,
                type: "POST",
                url: "/php/inc_afronden.php?updF=" + this.name,
                data: data_tobepushed,
                success: function(data_returned) {
                    if ("{" === data_returned[0]) {
                        var address = JSON.parse(data_returned),
                            rawAddress = "",
                            val = "",
                            i = 0;
                        if (1 < elementParts.length)
                            if (void 0 !== address.postcode) $('input[name="' + elementParts[0] + '[Postcode]"]').val(address.postcode), $('input[name="' + elementParts[0] + '[Adres]"]').val(address.street).change(), $('input[name="' + elementParts[0] + '[Woonplaats]"]').val(address.city).change(), $(relatedElements).change().prop("readonly", !1);
                            else if (void 0 !== address.requestDate)
                            if (address.valid) {
                                for ($(element).addClass("valid").removeClass("invalid"), $(element).val(address.vatNumber), $('select[name="' + elementParts[0] + '[Land]"]').val(address.countryCode), $('input[name="' + elementParts[0] + '[Bedrijfsnaam]"]').val(address.name.toLowerCase().ucwords()), (rawAddress = address.address.trim().split("\n"))[0] = rawAddress[0].split(" "), rawAddress[1] = rawAddress[1].split(" ", 2), val = "", i = 0; isNaN(rawAddress[0][i]);) val += " " + rawAddress[0][i], i += 1;
                                for ($('input[name="' + elementParts[0] + '[Adres]"]').val(val.trim().ucwords()), $('input[name="' + elementParts[0] + '[HuisNr]"]').val(rawAddress[0][i]), val = "", i += 1; i < rawAddress[0].length; i++) val += " " + rawAddress[0][i];
                                $('input[name="' + elementParts[0] + '[HuisNrToev]"]').val(val), $('input[name="' + elementParts[0] + '[Postcode]"]').val(rawAddress[1][0]), $('input[name="' + elementParts[0] + '[Woonplaats]"]').val(rawAddress[1][1].ucwords()), $(relatedElements).change().prop("readonly", !1)
                            } else $(element).addClass("invalid").removeClass("valid")
                    }
                    $(relatedElements).prop("readonly", !1)
                },
                error: function() {
                    $(relatedElements).prop("readonly", !1)
                }
            })
        } catch (err) {
            self.log("warn", err)
        }
        return !0
    }, $("form").on("blur change click", "input[name], select[name], textarea[name]", self.namedFieldChange), $("form").on("submit", self.cartFormSubmit), $("form.afronden").on("change blur", "input, textarea, select", self.updateField), $("form").on("change blur", "input, textarea, select", function() {
        $(this).hasClass("btwnr") && setTimeout(function() {
            self.refreshCartBlock()
        }, 200)
    }), self.shipDaysChange = function() {
        var country, postcode, i, data, date, weekday, dateVal, nieuwePrijs, row, field, old, vatField, invatField, vat, inVat, costs, json = {},
            toeslag = 0,
            fnName = arguments.callee.name;
        fnName || (fnName = "shipDaysChange");
        try {
            if (self.loopBreak(fnName, 1163), 0 < $("#rl1").length && ($("#rl1")[0].checked ? $(".shipOnly, .shiponly").slideUp() : $(".shipOnly, .shiponly").slideDown()), country = $('select[name="naw_f[Land]"]').val(), postcode = $('input[name="naw_f[Postcode]"]').val(), field = (row = $(".cartcontentTable .ship")).find(".price"), old = parseFloat(field.last().text().replace(",", ".")), vatField = $(".cartcontentTable .vat .price"), invatField = $(".cartcontentTable .grandtotal .price"), vat = parseFloat(vatField.last().text().replace(",", ".")), inVat = parseFloat(invatField.last().text().replace(",", ".")), 0 < $("#dda:checked").length && "" !== $('select[name="naw_l[Land]"]').val() && (country = $('select[name="naw_l[Land]"]').val()), 0 < $("#dda:checked").length && "" !== $('input[name="naw_l[Postcode]"]').val() && (postcode = $('input[name="naw_l[Postcode]"]').val()), country || postcode)
                if ((data = jQuery("input.deliverydate").data(country + postcode)) || (reloadDeliveryDates(country, postcode), data = $(".deliverydate").data(country + postcode)), void 0 !== data) try {
                    json = JSON.parse(data)
                } catch (e) {
                    json = null
                } else json = void 0;
                else json = void 0;
            if (json && (toeslag = 999, (dateVal = jQuery("input.deliverydate").val()) ? (date = new Date(parseInt(dateVal.substr(6, 4), 10), parseInt(dateVal.substr(3, 2), 10) - 1, parseInt(dateVal.substr(0, 2), 10)), weekday = date.getDay(), costs = !1, $.each(json, function(i, item) {
                    Math.pow(2, weekday) & item.days && (toeslag = Math.min(parseFloat(item.toeslag), toeslag), costs = !0)
                }), costs || $.each(json, function(i, item) {
                    toeslag = Math.min(parseFloat(item.toeslag), toeslag)
                })) : $.each(json, function(i, item) {
                    toeslag = Math.min(item.toeslag, toeslag)
                })), 999 == toeslag && (toeslag = 0), nieuwePrijs = parseFloat($("#shipCostBase").val()), nieuwePrijs = toeslag + nieuwePrijs, isNaN(nieuwePrijs) ? nieuwePrijs = costs = 0 : costs = nieuwePrijs, nieuwePrijs = (nieuwePrijs = nieuwePrijs.toFixed(2)).replace(".", ",").replace(",00", ",-"), $("#shipCostTotal").html() != nieuwePrijs && ($("#shipCostTotal").stop(!0, !0), $("#shipCostTotal").effect("pulsate", {}, 10, function() {
                    $(this).html(nieuwePrijs), $(this).effect("pulsate", 100)
                })), 0 < $("#rl1").length)
                if ($("#rl1")[0].checked) $(".ship span.reason.ship").text("Ophalen bij ons magazijn in Lelystad"), costs = 0;
                else if (0 < $('select[name="naw_f[Land]"]').length)
                for (i in $('select[name="naw_f[Land]"]')[0].options) isNaN(i) || $('select[name="naw_f[Land]"]')[0].options[i].value == country && $(".ship span.reason.ship").text("Verzenden naar " + $('select[name="naw_f[Land]"]')[0].options[i].text);
            row.slideDown(), inVat = inVat - vat - old + costs, inVat += vat = vat - .21 * old + .21 * costs, vatField.text(vat.toFixed(2).replace(".", ",")), invatField.text(inVat.toFixed(2).replace(".", ",")), field.text(costs.toFixed(2).replace(".", ",")), row.slideDown()
        } catch (err) {
            self.log("warn", err)
        }
    }, self.refreshCartBlock = function() {
        $.ajax({
            url: "/",
            data: {
                scaffoldType: self.scaffoldType,
                template: "cart"
            },
            cache: !1,
            success: function(data) {
                var i, $cartCount = $("#header .cartContainer").find(".count").first(),
                    $target = jQuery(".pageInfo .cartcontent"),
                    update = [".sub .price", ".ship .price", ".vat .price", ".payment .price", ".discount .price", ".grandtotal .price"];
                self.loopBreak(arguments.callee.name, 1309);
                var $nwContain, $nwCount, $nwContent, div = document.createElement("div");
                for (i in $(div).append(data), $nwCount = ($nwContain = $(div).find(".cartContainer")).find(".count").first(), $nwContent = ($nwContent = $nwContain.find(".cartcontent")).first(), $cartCount.html($nwCount.html()), jQuery("#header .cartcontent").html($nwContent.html()), update) isNaN(i) || $target.find(update[i]).text($nwContent.find(update[i]).text());
                setTimeout(function() {
                    jQuery("#header .cartcontent").slideUp()
                }, 6500)
            },
            error: function(jqXHR, textStatus) {
                self.loopBreak(arguments.callee.name, 1331), alert(textStatus)
            }
        })
    }, self.beforeShowDay = function(date) {
        var check1, check2, noWeekend, Transporter;
        noWeekend = function() {
            SKBaseClass.checkJQuery("cart.js", 1569, "jQdpSD");
            var result = $.datepicker.noWeekends(date),
                dtString = date.getFullYear() + "-" + (date.getMonth() + 1).toString().lpad("0", 2) + "-" + date.getDate().toString().lpad("0", 2);
            return void 0 !== window.natHolidays[dtString] && ("string" == typeof window.natHolidays[dtString] ? (result[0] = !1, result[1] = window.natHolidays[dtString], result[2] = window.natHolidays[dtString]) : (result[0] = result[0] && 1 != window.natHolidays[dtString].free, result[1] = window.natHolidays[dtString].class, result[2] = window.natHolidays[dtString].title)), result
        }, Transporter = function() {
            SKBaseClass.checkJQuery("cart.js", 1593, "Transporter");
            var data, weekday, result, country = $('select[name="naw_f[Land]"]').val(),
                postcode = $('input[name="naw_f[Postcode]"]').val(),
                json = {};
            if (0 < $("#dda:checked").length && "" !== $('select[name="naw_l[Land]"]').val() && (country = $('select[name="naw_l[Land]"]').val()), 0 < $("#dda:checked").length && "" !== $('input[name="naw_l[Postcode]"]').val() && (postcode = $('input[name="naw_l[Postcode]"]').val()), !(data = $(".deliverydate").data(country + postcode))) return reloadDeliveryDates(country, postcode), [!0, "toeslag pcError"];
            weekday = date.getDay(), result = [!1, "noRoute"];
            try {
                json = JSON.parse(data)
            } catch (e) {}
            if (!json) return [!0, "toeslag pcError"];
            $.each(json, function(i, item) {
                var toeslag = parseFloat(item.toeslag);
                Math.pow(2, weekday) & item.days && (result[0] = !0, (void 0 === result.toeslag || toeslag > result.toeslag) && (result[1] = "use" + item.transporteur, result.toeslag = toeslag))
            }), result.toeslag && (result[2] = "Leveren op deze dag kan alleen met een extra toeslag van &euro; " + result.toeslag, result[1] = "toeslag");
            try {
                delete result.toeslag
            } catch (err) {
                result.toeslag = null
            }
            return result
        };
        try {
            self.loopBreak(arguments.callee.name, 1408), (check1 = noWeekend())[0] && (check2 = Transporter(), log.debug(date.toString() + "  == " + check1 + "  ||  " + check2), check1[0] = check2[0], check1[1] += " " + check2[1], check2[2] && (check1[2] = check2[2]))
        } catch (err) {
            self.log("warn", err)
        }
        return check1
    }, self.paymentChange = function() {
        try {
            self.loopBreak(arguments.callee.name, 1424);
            var costs = parseFloat($(this).attr("costs")),
                row = $(".cartcontentTable .payment"),
                field = row.find(".price"),
                old = parseFloat(field.last().text().replace(",", ".")),
                vatField = $(".cartcontentTable .vat .price"),
                invatField = $(".cartcontentTable .grandtotal .price"),
                vat = parseFloat(vatField.last().text().replace(",", ".")),
                inVat = parseFloat(invatField.last().text().replace(",", "."));
            field.text(costs.toFixed(2).replace(".", ",")), row.slideDown(), inVat = inVat - vat - old + costs, inVat += vat = vat - .21 * old + .21 * costs, vatField.text(vat.toFixed(2).replace(".", ",")), invatField.text(inVat.toFixed(2).replace(".", ","))
        } catch (err) {
            self.log("warn", err)
        }
    };
    try {
        switch (today.getDay()) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                minDate = "+2d";
                break;
            case 5:
                minDate = "+4d";
                break;
            default:
                minDate = "+3d"
        }
        jQuery("input.deliverydate").datepicker({
            minDate: minDate,
            maxDate: "+6m",
            dateFormat: "dd-mm-yy",
            showButtonPanel: !0,
            changeMonth: !0,
            changeYear: !0,
            showWeek: !0,
            showAnim: "slideDown",
            altFormat: "dd-mm-jjjj",
            constrainInput: !0,
            showOn: "both",
            buttonImage: "/images/calendar.gif",
            buttonImageOnly: !0,
            title: "Gebruik CTRL-END om het veld te legen...",
            beforeShowDay: self.beforeShowDay
        }).on("change", self.shipDaysChange).attr("readonly", "readonly"), jQuery('input[name="naw_f[Levering]"]').on("change", self.shipDaysChange), jQuery('input[name="naw_f[Betaalwijze]"]').on("change", self.paymentChange), self.shipDaysChange()
    } catch (err) {
        self.log("warn", err)
    }
}

function SKValidation() {
    var i, self = this;
    if (self.abstrct = !1, SKBaseClass.call(self, "SKValidation", [SKValidation]), self.postcode = function(value, element) {
            try {
                return self.loopBreak(arguments.callee.name, 1488), this.optional(element) || /^\d{4}[\s-]?[a-zA-Z]{2}$/i.test(value)
            } catch (err) {
                return self.log("warn", err), !1
            }
        }, self.postcodeLand = function(value, element) {
            try {
                if (self.loopBreak(arguments.callee.name, 1494), void 0 !== this.result) return this.result;
                this.result = !1;
                var r, name = element.name.replace("Postcode", "Land"),
                    landElement = $('*[name="' + name + '"]'),
                    me = this;
                switch (landElement.val()) {
                    case "NL":
                        this.result = this.optional(element) || /^\d{4}[\s-]?[a-zA-Z]{2}$/i.test(value);
                        break;
                    case "BE":
                        this.result = this.optional(element) || /^\d{4}$/i.test(value);
                        break;
                    case "DE":
                        this.result = this.optional(element) || /^\d{5}$/i.test(value);
                        break;
                    default:
                        this.result = !1
                }
                return landElement.valid(), r = this.result, setTimeout(function() {
                    delete me.result
                }, 10), r
            } catch (err) {
                return self.log("warn", err), !1
            }
        }, self.landPostcode = function(value, element) {
            try {
                self.loopBreak(arguments.callee.name, 1528), $(element).removeClass("error").removeClass("invalid");
                var name = element.name.replace("Land", "Postcode");
                return !!$('*[name="' + name + '"]').valid()
            } catch (err) {
                return self.log("warn", err), !1
            }
        }, self.elfProef = function(value) {
            try {
                self.loopBreak(arguments.callee.name, 1539);
                var i, sum = 0;
                for (i = 1; i < 10; i++) sum += value.charAt(i - 1) * (10 - i);
                return sum % 11 == 0 && 9 === value.length
            } catch (err) {
                return self.log("warn", err), !1
            }
        }, self.zipcodeNL = function(value, element) {
            try {
                return self.loopBreak(arguments.callee.name, 1554), this.optional(element) || /^\d{4} ?[a-z]{2}$/i.test(value)
            } catch (err) {
                return self.log("warn", err), !1
            }
        }, self.dateNL = function(value, element) {
            try {
                return self.loopBreak(arguments.callee.name, 1560), this.optional(element) || /^\d\d?\-\d\d?\-\d\d\d?\d?$/.test(value)
            } catch (err) {
                return self.log("warn", err), !1
            }
        }, self.errorPlacement = function(error, element) {
            try {
                self.loopBreak(arguments.callee.name, 1566);
                var elName, errorImg, errorText = error.html(),
                    className = "";
                for ("number" === element.attr("type") && (errorText = "Waarde moet een getal zijn", element.attr("min") && element.attr("max") && (errorText += " tussen " + element.attr("min") + " en " + element.attr("max")), errorText += "."), $(element).attr("id") ? elName = $(element).attr("id") : $(element).attr("name") && (elName = $(element).attr("name")), i = 0; i < element.length; i++) className += " " + element[i].tagName.toLowerCase(), $(element[i]).attr("type") && (className += " " + $(element[i]).attr("type"));
                if (errorImg = $('<img src="/images/error.png" class="jQvalidator ' + className + '" for="' + elName + '" title="' + errorText + '" />'), $(element).data("errorImg")) try {
                    $(element).data("errorImg").remove()
                } catch (ignore) {}
                $(element).parents(".valid").removeClass("valid"), $(element).parent().addClass("invalid"), errorImg.insertAfter(element), $(element).data("errorImg", errorImg)
            } catch (err) {
                self.log("warn", err)
            }
        }, self.fieldSuccess = function(label, element) {
            try {
                self.loopBreak(arguments.callee.name, 1605);
                try {
                    $(element).data("errorImg").remove()
                } catch (ignore) {}
                $(element).parents(".invalid").removeClass("invalid"), $(element).parent().addClass("valid"), $(element).data("errorImg", void 0)
            } catch (err) {
                self.log("warn", err)
            }
        }, self.initialValidation = function(index, Element) {
            try {
                self.loopBreak(arguments.callee.name, 1619), $(Element).val() && ("input" !== Element.tagName.toLowerCase() || "checkbox" !== Element.type && "radio" !== Element.type) && $(Element).valid()
            } catch (err) {
                self.log("warn", err)
            }
        }, $.validator) try {
        $.validator.addMethod("POSTCODE", self.postcode, "Vul een geldig postcode."), $.validator.addMethod("postcodeland", self.postcodeLand, "Vul een geldige postcode in."), $.validator.addMethod("landpostcode", self.landPostcode, "Vul een geldige postcode in."), $.validator.addMethod("elfproef", self.elfProef, "Vul hier een geldige bankrekeningnummer in."), $.validator.addMethod("zipcodeNL", self.zipcodeNL, "Vul alstublieft een geldige postcode in. (1234 AB)"), $.validator.addMethod("dateNL", self.dateNL, "Vul alstublieft een geldige datum in. (dd-mm-jjjj)"), $.validator.addClassRules({
            zipcodeNL: {
                zipcodeNL: !0
            },
            dateNL: {
                dateNL: !0
            }
        }), jQuery.validator.setDefaults({
            debug: !1,
            validClass: "valid",
            errorClass: "invalid",
            errorPlacement: self.errorPlacement,
            success: self.fieldSuccess
        }), jQuery("form").validate({
            rules: {
                "naw_f[type]": {
                    required: !0
                },
                "naw_f[Bedrijfsnaam]": {
                    required: !0
                },
                "naw_f[Email]": {
                    email: !0,
                    required: !0
                },
                "naw_f[Adres]": {
                    required: !0
                },
                "naw_f[HuisNr]": {
                    number: !0,
                    required: !0
                },
                "naw_f[Woonplaats]": {
                    required: !0
                },
                "naw_f[Postcode]": {
                    minlength: 4,
                    required: !0,
                    postcodeland: !0
                },
                "naw_l[Postcode]": {
                    minlength: 4,
                    postcodeland: !0
                },
                "naw_l[Land]": {
                    landpostcode: !0
                },
                "naw[btwnr]": {
                    required: function() {
                        return "NL" !== $("select[name='naw_f[Land]']").val()
                    }
                }
            },
            ignore: ".ignoreValidation"
        }), $.validator.classRuleSettings.date = {
            dateNL: !0
        }, jQuery("form").find("input[name], select[name], textarea[name]").each(self.initialValidation)
    } catch (err) {
        self.log("warn", err)
    }
}

function setPHPSessionID(PHPSESSIONID) {
    SKBaseClass.checkJQuery("cart.js", 2147, "setPHPSessionID"), window.PHPSessID = PHPSESSIONID, "undefined" != typeof sessionStorage && (sessionStorage.PHPSessID = PHPSESSIONID), $("a[href]").each(function(index, Element) {
        "undefined" != typeof Url && (Element.href = new Url(Element.href).replaceQueryParam("PHPSESSID", PHPSESSIONID))
    }), $("form").each(function(index, Element) {
        "undefined" != typeof Url && $(Element).append("<input type='hidden' name='PHPSESSID' value='" + PHPSESSIONID + "' />")
    }), $.ajaxSetup({
        global: !0,
        type: "POST"
    }), jQuery.ajaxPrefilter(function(options, originalOptions) {
        options.data = $.param($.extend(originalOptions.data, {
            PHPSESSID: PHPSESSIONID,
            aangepast: "cart.js"
        }))
    }), window.searchingPHPSessID = !1
}

function EnablePHPSession() {
    if (SKBaseClass.checkJQuery("cart.js", 2185, "EnablePHPSession"), Set_Cookie("test", "OK"), "OK" !== Get_Cookie("test")) {
        if ($("body").prepend("<div class='error' style='color: #225; background: #ccc; font-weight: bold; padding: 5px 15px; border: 4px outset #669; border-radius: 10px; box-shadow: 5x 10px 10px #bbd;'>Uw browser ondersteunt geen COOKIES. <br />COOKIES zijn nodig om uw browser te verbinden met de winkelwagen. <br />Probeer een <a href='http://www.browserchecker.nl/browserchoice-browserkeuze' target='_blank'>andere browser</a> of <a href='http://www.browserchecker.nl/cookies-aanzetten-enable#ie' target='_blank'>schakel COOKIES in</a>.</div>"), void 0 !== window.searchingPHPSessID && window.searchingPHPSessID) return;
        window.searchingPHPSessID = !0, "undefined" != typeof sessionStorage && void 0 !== sessionStorage.PHPSessID ? setPHPSessionID(sessionStorage.PHPSessID) : void 0 !== window.PHPSessID && setPHPSessionID(window.PHPSessID), $.ajax({
            cache: !1,
            data: {
                PHPSESSIONID: window.PHPSessID ? window.PHPSessID : ""
            },
            error: function() {
                alert("Uw browser ondesteunt op dit moment geen cookies. \nDe inhoud van uw winkelwagen wordt opgeslagen m.b.v. cookies. \n\nSchakel cookies in om gebruik te kunnen maken van de winkelwagen!")
            },
            success: function(data) {
                setPHPSessionID(data)
            },
            type: "POST",
            url: "/php/get_phpsessid.php"
        })
    }
    Delete_Cookie("test")
}

function getCaretCharacterOffsetWithin(element) {
    var caretOffset = 0;
    try {
        if (void 0 !== window.getSelection) {
            var range = window.getSelection().getRangeAt(0),
                preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element), preCaretRange.setEnd(range.endContainer, range.endOffset), caretOffset = preCaretRange.toString().length
        } else if (void 0 !== document.selection && "Control" !== document.selection.type) {
            var textRange = document.selection.createRange(),
                preCaretTextRange = document.body.createTextRange();
            preCaretTextRange.moveToElementText(element), preCaretTextRange.setEndPoint("EndToEnd", textRange), caretOffset = preCaretTextRange.text.length
        }
    } catch (err) {}
    return caretOffset
}

function getSelectionStart(o) {
    return o && o.tagName ? getCaretCharacterOffsetWithin(o) : 0
}

function getSelectionEnd(o) {
    if (!o || !o.tagName) return 0;
    if (!o.createTextRange) return o.selectionEnd;
    if (document.selection) {
        var r = document.selection.createRange().duplicate();
        return r.moveStart("character", -o.value.length), r.text.length
    }
}

function validatePostalCode(strPC) {
    return "string" == typeof strPC && strPC.match(/[1-9][0-9]{3} ?[a-zA-Z]{2}/) === strPC
}

function reloadDeliveryDates(country, postcode) {
    SKBaseClass.checkJQuery("cart.js", 2320, "reloadDeliveryDates"), 0 < $(".deliverydate").length && ("string" != typeof country && (country = $('select[name="naw_f[Land]"]').val(), 0 < $("#dda:checked").length && "" !== $('select[name="naw_l[Land]"]').val() && (country = $('select[name="naw_l[Land]"]').val())), "string" != typeof postcode && "number" != typeof postcode && (postcode = $('input[name="naw_f[Postcode]"]').val(), 0 < $("#dda:checked").length && "" !== $('input[name="naw_l[Postcode]"]').val() && (postcode = $('input[name="naw_l[Postcode]"]').val())), void 0 === $(".deliverydate").data(country + postcode) ? (SKBaseClass.checkJQuery("cart.js", 2339, "reloadDeliveryDates"), $(".deliverydate").data(country + postcode, ""), $.ajax({
        url: "/php/getTransportOptions.php",
        data: {
            land: country,
            postcode: postcode
        },
        type: "POST",
        success: function(data) {
            SKBaseClass.checkJQuery("cart.js", 2351, "shipOptS6"), data ? ($(".deliverydate").data(country + postcode, data), $(".deliverydate").change()) : $(".deliverydate").removeData(country + postcode)
        },
        error: function() {
            $(".deliverydate").removeData(country + postcode)
        }
    })) : "" === $(".deliverydate").data(country + postcode) ? $.noop() : $(".deliverydate").change())
}
if ("undefined" == typeof jQuery && alert("jQuery not loaded!"), void 0 === SKBaseClass && $.ajax({
        async: !1,
        url: "/js/skbase.js"
    }), void 0 === ErrorHandler && $.ajax({
        async: !1,
        url: "/js/error_handler.js"
    }), jQuery(document).ready(function() {
        SKBaseClass.checkJQuery("cart.js", 1939, "cartDocReady");
        var hoverThumb, isBot = !1;
        hoverThumb = function(e) {
            $("img.preview").attr("src", e.target.src.replace("_40", "_300"))
        }, 0 < window.navigator.userAgent.indexOf("Googlebot") && (isBot = !0), isBot || (new CartButton, new FinalizeOrder, new SKValidation, new SKCart, EnablePHPSession(), $(".fancyInPage").on("click", function() {
            var url = this.href;
            if (void 0 !== $.fancybox) return $.fancybox({
                type: "ajax",
                ajax: {
                    data: {
                        template: "ajax"
                    }
                },
                overlayShow: !0,
                hideOnContentClick: !1,
                autoScale: !1,
                autoSize: !1,
                padding: 15,
                width: "800px",
                href: url
            }), !1
        })), SKBaseClass.checkJQuery("cart.js", 1983, "cartDocReady"), jQuery('input[name="naw_f[Bedrijfsnaam]"]').on("change", function() {
            jQuery('input[name="naw_f[Bedrijfsnaam]"]').val(this.value)
        }), SKBaseClass.checkJQuery("cart.js", 1990, "cartDocReady"), isBot || $.fancybox && ($('.prdInfo .img .fancy[rel="product"]').removeClass("fancy").on("click", function() {
            return $('.prdInfo .imglist a[rel="product"]').first().click(), !1
        }), $(".fancy").fancybox({
            transitionIn: "elastic",
            transitionOut: "elastic",
            speedIn: 600,
            speedOut: 200,
            opacity: !1,
            overlayShow: !0
        }), $("img.thumb").bind("mouseover", {}, hoverThumb)), "function" == typeof initFieldTypeRestriction && initFieldTypeRestriction(), jQuery(".changeAmounts").on("click", function() {
            this.form.submit()
        }), isBot || $('input[name="naw_f[Email]"]').on("change", function() {
            "herman@stellingkast.nl" === this.value && ($("#rPrv")[0].checked = !1, $("#rCpy")[0].checked = "checked", $("#rCpy")[0].click(), $('input[name="naw_f[Bedrijfsnaam]"]').val("www.Stellingkast.nl").change().blur(), $('input[name="naw_f[btwnr]"]').val("NL820589883 B01").change().blur(), $('input[name="naw_f[Contactpersoon]"]').val("TEST Herman M. Hofman TEST").change().blur(), $('input[name="naw_f[Referentie]"]').val("TEST SK TEST").change().blur(), $('input[name="naw_f[Adres]"]').val("Apolloweg").change().blur(), $('input[name="naw_f[HuisNr]"]').val(32).change().blur(), $('select[name="naw_f[Land]"]').val("NL").change().blur(), $('input[name="naw_f[Postcode]"]').val("8239 DA").change().blur(), $('input[name="naw_f[Woonplaats]"]').val("Lelystad").change().blur(), $('input[name="naw_f[Telefoon]"]').val("0320 - 22 10 11").change().blur(), $('input[name="naw_f[Mobiel]"]').val("0320 - 22 10 00").change().blur(), $('input[name="naw_f[Fax]"]').val("").change().blur(), $('input[name="naw_f[EmailInvoice]"]').val("info@stellingkast.nl").blur().change().blur(), $("#rl1")[0].checked = !1, $("#rl2")[0].checked = "checked", $("#rl2").click().change().blur(), $("#rbc").attr("checked", !1), $("#rbv").attr("checked", "checked"), $("#rbv").click().change().blur(), $('textarea[name="naw_f[Opmerking]"]').val("TEST TEST TEST -- Herman").change().blur(), $('textarea[name="naw_f[f_transptxt]"]').val("TEST TEST TEST -- Stellingkast.nl").change().blur(), $("input, textarea").blur())
        }), loadFancy = function(link, irc, el) {
            $.ajax({
                url: link,
                method: "POST",
                data: {
                    template: "ajax"
                },
                success: function(data) {
                    var dummy = document.createElement("div");
                    $(dummy).append(data), data = $(dummy).find(".prdInfo"), $(data).find("form")[0].action = window.location.pathname, $(data).find(".spacer").remove(), $(data).find(".tabHdrs").remove(), $(data).find(".options").css({
                        height: "auto"
                    }), $(data).find(".imglist").css({
                        width: "270px",
                        height: "auto"
                    }), $(el).find("input").each(function(index, inputElement) {
                        var destElement = null;
                        inputElement.name && ((destElement = $(data).find('input[name="' + inputElement.name + '"]')).length ? $(destElement).val($(inputElement).val()) : $(data).find("form").append($(inputElement).clone()))
                    }), $(data).find("input").each(function(index, inputElement) {
                        var sourceElement = null;
                        inputElement.name && (sourceElement = $(el).find('input[name="' + inputElement.name + '"]')).length && $(inputElement).val(sourceElement.val())
                    }), $(data).find("a.fancy").removeClass("fancy").addClass("loadPreview").attr("target", "_blank"), $(data).find("img.preview").each(function(ix, el) {
                        $(el).attr("default", el.src)
                    }), $(data).find("form").css({
                        height: "auto",
                        width: "300px"
                    }), $(data).find("form").append('<input type="hidden" name="goto" value="/cart/" />'), $(data).find(".imglist").css({
                        clear: "right",
                        float: "left",
                        padding: "0 20px"
                    }), $(data).find(".imglist a").css({
                        border: "1px #eee solid",
                        borderRadius: "5px"
                    }), $(data).find("div.img").css({
                        border: "none"
                    }), $(irc).append(data), $(irc).append('<div class="spacer"></div>'), $(document).on({
                        click: function() {
                            return !1
                        },
                        mouseenter: function() {
                            for (var preview, el = this; void 0 !== el && !(0 < (preview = $(el).find("img.preview")).length);) el = el.parentNode;
                            preview && preview.attr("src", this.href.replace("upload/", "upload/thumb_300/"))
                        },
                        mouseleave: function() {
                            for (var preview, el = this; void 0 !== el && !(0 < (preview = $(el).find("img.preview")).length);) el = el.parentNode;
                            preview && preview.each(function(ix, el) {
                                el.src = $(el).attr("default")
                            })
                        }
                    }, "a.loadPreview"), $.fancybox({
                        padding: 0,
                        title: $(el).find(".title").text(),
                        modal: !1,
                        content: $(irc).html(),
                        type: "inline"
                    })
                }
            })
        }, $(".cart .accessoires .tile").on("click", function() {
            $(".irc_c").hide("slide", {}, 400, function() {
                $(this).remove()
            });
            var link, el, lastElInRow, left, irc = document.createElement("div");
            for (el = this; !(link = $(el).attr("link")) && el.parentElement;) el = el.parentElement;
            if (!link) return !1;
            for (left = $(el).position().left; left <= $(el).position().left && (el = $(lastElInRow = el).next()).length;) el = el[0];
            el = this, irc.className = "irc_c", $(irc).css({
                display: "hidden",
                position: "relative",
                width: "auto",
                height: "auto",
                backgroundColor: "#fff",
                border: "1px #eee solid",
                borderRadius: "5px",
                float: "none",
                clear: "both"
            }), $(lastElInRow).after(irc), $(irc).hide(), loadFancy(link, irc, el)
        }), $(".cart .accessoires .tile form input").on("click", function() {
            if (this.form.options && 0 < JSON.parse(this.form.options.value).length) return $(this.form.parentNode).click(), !1
        })
    }), function($) {
        var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
            meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
        $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function(o) {
            if (null === o) return "null";
            var type = typeof o;
            if ("undefined" !== type) {
                if ("number" === type || "boolean" === type) return "" + o;
                if ("string" === type) return $.quoteString(o);
                if ("object" === type) {
                    if ("function" == typeof o.toJSON) return $.toJSON(o.toJSON());
                    if (o.constructor === Date) {
                        var month = o.getUTCMonth() + 1,
                            day = o.getUTCDate(),
                            year = o.getUTCFullYear(),
                            hours = o.getUTCHours(),
                            minutes = o.getUTCMinutes(),
                            seconds = o.getUTCSeconds(),
                            milli = o.getUTCMilliseconds();
                        return month < 10 && (month = "0" + month), day < 10 && (day = "0" + day), hours < 10 && (hours = "0" + hours), minutes < 10 && (minutes = "0" + minutes), seconds < 10 && (seconds = "0" + seconds), milli < 100 && (milli = "0" + milli), milli < 10 && (milli = "0" + milli), '"' + year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + "." + milli + 'Z"'
                    }
                    if (o.constructor === Array) {
                        for (var ret = [], i = 0; i < o.length; i++) ret.push($.toJSON(o[i]) || "null");
                        return "[" + ret.join(",") + "]"
                    }
                    var name, val, pairs = [];
                    for (var k in o) {
                        if ("number" === (type = typeof k)) name = '"' + k + '"';
                        else {
                            if ("string" !== type) continue;
                            name = $.quoteString(k)
                        }
                        "function" !== (type = typeof o[k]) && "undefined" !== type && (val = $.toJSON(o[k]), pairs.push(name + ":" + val))
                    }
                    return "{" + pairs.join(",") + "}"
                }
            }
        }, $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(src) {
            return eval("(" + src + ")")
        }, $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(src) {
            var filtered = src.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
            if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + src + ")");
            throw new SyntaxError("Error parsing JSON, source is not valid.")
        }, $.quoteString = function(string) {
            return string.match(escapeable) ? '"' + string.replace(escapeable, function(a) {
                var c = meta[a];
                return "string" == typeof c ? c : (c = a.charCodeAt(), "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16))
            }) + '"' : '"' + string + '"'
        }
    }(jQuery), !log) var log = {
    toggle: function() {},
    move: function() {},
    resize: function() {},
    clear: function() {},
    debug: function(msg) {
        (void 0 !== window.DEBUG && window.DEBUG || void 0 !== jQuery.validator && void 0 !== jQuery.validator.defaults.debug && jQuery.validator.defaults.debug) && "undefined" != typeof console && "function" == typeof console.log && (msg ? console.log("DEBUG: " + msg) : console.log("DEBUG: undefined!!"))
    },
    info: function(msg) {
        (void 0 !== window.DEBUG && window.DEBUG || void 0 !== jQuery.validator && void 0 !== jQuery.validator.defaults.debug && jQuery.validator.defaults.debug) && "undefined" != typeof console && "function" == typeof console.log && (msg ? console.log("INFO : " + msg) : console.log("INFO : undefined!!"))
    },
    warn: function(msg) {
        "undefined" != typeof console && "function" == typeof console.log && (msg ? console.log("WARN : " + msg) : console.log("WARN : undefined!!"))
    },
    error: function(msg) {
        "undefined" != typeof console && "function" == typeof console.log && (msg ? console.log("ERROR: " + msg) : console.log("ERROR: undefined!!")), alert(msg)
    },
    profile: function() {}
};

function skMenu(object, name) {
    var eventMenuLinkMouseOver;
    name || (name = "Menu Base Class"), SKBaseClass.inheritsFrom(this.constructor, skMenu), SKBaseClass.call(this, name), eventMenuLinkMouseOver = function(event) {
        $(event.target).children("ul").show(200)
    }, Object.defineProperties ? Object.defineProperties(this, {
        element: {
            get: function() {
                return $(object)
            }
        }
    }) : this.__defineGetter__ ? this.__defineGetter__("element", function() {
        return $(object)
    }) : this.element = $(object), this.element.find("li").on("mouseover", eventMenuLinkMouseOver)
}

function skSiteGroupMenu(object, name) {
    name || (name = "Group Menu Class"), this.abstrct = !1, skMenu.call(this, object, name)
}

function skAffiliatesMenu(object, name) {
    name || (name = "Affiliate Menu Class"), this.abstrct = !1, skMenu.call(this, object, name)
}

function SKMainMenu(object, name) {
    name || (name = "Main Menu Class"), this.abstrct = !1, skMenu.call(this, object, name)
}

function SKCategoryMenu(object, name) {
    var i, onComplete, ul, self = this;
    name || (name = "Category Menu Class"), self.abstrct = !1, skMenu.call(self, object, name), self.element.find("ul ul").hide(100), ul = self.element.find(".active").parents("ul"), i = ul.length, onComplete = function() {
        0 <= (i -= 1) && $(ul[i]).stop().show(200, onComplete)
    }, ul.stop().css({
        height: "",
        padding: "",
        margin: "",
        width: "",
        opacity: ""
    }), ul = self.element.find(".active").find("ul").first().show(200)
}

function getAjaxFile(sack, fileName) {
    sack.requestFile = fileName, sack.runAJAX()
}

function sack(file) {
    this.xmlhttp = null, this.resetData = function() {
        this.method = "POST", this.queryStringSeparator = "?", this.argumentSeparator = "&", this.URLString = "", this.encodeURIString = !0, this.execute = !1, this.element = null, this.elementObj = null, this.requestFile = file, this.vars = new Object, this.responseStatus = new Array(2)
    }, this.resetFunctions = function() {
        this.onLoading = function() {}, this.onLoaded = function() {}, this.onInteractive = function() {}, this.onCompletion = function() {}, this.onError = function() {}, this.onFail = function() {}
    }, this.reset = function() {
        this.resetFunctions(), this.resetData()
    }, this.createAJAX = function() {
        try {
            "undefined" != typeof ActiveXObject && (this.xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"))
        } catch (e1) {
            try {
                this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e2) {
                this.xmlhttp = null
            }
        }
        this.xmlhttp || ("undefined" != typeof XMLHttpRequest ? this.xmlhttp = new XMLHttpRequest : this.failed = !0)
    }, this.setVar = function(name, value) {
        this.vars[name] = Array(value, !1)
    }, this.encVar = function(name, value, returnvars) {
        return !0 === returnvars ? Array(encodeURIComponent(name), encodeURIComponent(value)) : (this.vars[encodeURIComponent(name)] = Array(encodeURIComponent(value), !0), this.vars[encodeURIComponent(name)])
    }, this.processURLString = function(string, encode) {
        for (encoded = encodeURIComponent(this.argumentSeparator), regexp = new RegExp(this.argumentSeparator + "|" + encoded), varArray = string.split(regexp), i = 0; i < varArray.length; i++) urlVars = varArray[i].split("="), !0 === encode ? this.encVar(urlVars[0], urlVars[1]) : this.setVar(urlVars[0], urlVars[1])
    }, this.createURLString = function(urlstring) {
        for (key in this.encodeURIString && this.URLString.length && this.processURLString(this.URLString, !0), urlstring && (this.URLString.length ? this.URLString += this.argumentSeparator + urlstring : this.URLString = urlstring), this.setVar("rndval", (new Date).getTime()), urlstringtemp = new Array, this.vars) {
            if (!1 === this.vars[key][1] && !0 === this.encodeURIString) {
                encoded = this.encVar(key, this.vars[key][0], !0);
                try {
                    delete this.vars[key]
                } catch (ex) {
                    this.vars[key] = null
                }
                this.vars[encoded[0]] = Array(encoded[1], !0), key = encoded[0]
            }
            urlstringtemp[urlstringtemp.length] = key + "=" + this.vars[key][0]
        }
        this.URLString += urlstring ? this.argumentSeparator + urlstringtemp.join(this.argumentSeparator) : urlstringtemp.join(this.argumentSeparator)
    }, this.runResponse = function() {
        eval(this.response)
    }, this.runAJAX = function(urlstring) {
        if (this.failed) this.onFail();
        else if (this.createURLString(urlstring), this.element && (this.elementObj = document.getElementById(this.element)), this.xmlhttp) {
            var self = this;
            if ("GET" == this.method) totalurlstring = this.requestFile + this.queryStringSeparator + this.URLString, this.xmlhttp.open(this.method, totalurlstring, !0);
            else {
                this.xmlhttp.open(this.method, this.requestFile, !0);
                try {
                    this.xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                } catch (e) {}
            }
            this.xmlhttp.onreadystatechange = function() {
                switch (self.xmlhttp.readyState) {
                    case 1:
                        self.onLoading();
                        break;
                    case 2:
                        self.onLoaded();
                        break;
                    case 3:
                        self.onInteractive();
                        break;
                    case 4:
                        self.response = self.xmlhttp.responseText, self.responseXML = self.xmlhttp.responseXML, self.responseStatus[0] = self.xmlhttp.status, self.responseStatus[1] = self.xmlhttp.statusText, self.execute && self.runResponse(), self.elementObj && (elemNodeName = self.elementObj.nodeName, elemNodeName.toLowerCase(), "input" == elemNodeName || "select" == elemNodeName || "option" == elemNodeName || "textarea" == elemNodeName ? self.elementObj.value = self.response : self.elementObj.innerHTML = self.response), "200" == self.responseStatus[0] ? self.onCompletion() : self.onError(), self.URLString = ""
                }
            }, this.xmlhttp.send(this.URLString)
        }
    }, this.reset(), this.createAJAX()
}
Object.size = function(obj) {
    var key, size = 0;
    for (key in obj) "" < key && obj.hasOwnProperty(key) && size++;
    return size
}, Object.create || (Object.create = function() {
    function F() {}
    return function(o) {
        if (1 !== arguments.length) throw new Error("Object.create implementation only accepts one parameter.");
        return F.prototype = o, new F
    }
}()), String.prototype.hashCode = function() {
    var i, hash = 0;
    if (0 === this.length) return hash;
    for (i = 0; i < this.length; i++) hash = (hash << 5) - hash + this.charCodeAt(i), hash &= hash;
    return hash
}, "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "")
}), "function" != typeof String.prototype.ltrim && (String.prototype.ltrim = function() {
    return this.replace(/^\s+/, "")
}), "function" != typeof String.prototype.rtrim && (String.prototype.rtrim = function() {
    return this.replace(/\s+$/, "")
}), "function" != typeof String.prototype.rtrim && (String.prototype.fulltrim = function() {
    return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ")
}), Array.prototype.getUnique = function() {
    var i, l, u = {},
        a = [];
    for (i = 0, l = this.length; i < l; ++i) u.hasOwnProperty(this[i]) || (a.push(this[i]), u[this[i]] = 1);
    return a
}, Array.prototype.indexOf || (Array.prototype.indexOf = function(elt) {
    var len = this.length,
        from = Number(arguments[1]) || 0;
    for ((from = from < 0 ? Math.ceil(from) : Math.floor(from)) < 0 && (from += len); from < len;) {
        if (from in this && this[from] === elt) return from;
        from++
    }
    return -1
}), void 0 === Object.keys && (Object.keys = function(obj) {
    var p, props = [];
    for (p in obj) obj.propertyIsEnumerable(p) && props.push(p);
    return props
}), "undefined" != typeof $ && "undefined" != typeof jQuery || function() {
    var newscript = document.createElement("script");
    newscript.type = "text/javascript", newscript.async = !0, newscript.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(newscript)
}(), void 0 === SKBaseClass && $.ajax({
    async: !1,
    url: "/js/skbase.js"
}), skMenu.prototype = Object.create(SKBaseClass.prototype), skMenu.prototype.constructor = skMenu, skSiteGroupMenu.prototype = Object.create(skMenu.prototype), skSiteGroupMenu.prototype.constructor = skSiteGroupMenu, skAffiliatesMenu.prototype = Object.create(skMenu.prototype), skAffiliatesMenu.prototype.constructor = skAffiliatesMenu, SKCategoryMenu.prototype = Object.create(skMenu.prototype), SKCategoryMenu.prototype.constructor = SKCategoryMenu, jQuery(document).ready(function() {
    var obj, menus = [];
    (obj = document.getElementById("hmenu")) && menus.push(new SKMainMenu(obj)), (obj = $(".catmenu")) && menus.push(new SKCategoryMenu(obj)), $("#hmenu").click(function() {
        $(this).toggleClass("closed"), $(this).toggleClass("open"), $(".stelling").toggleClass("invisible")
    })
});
var clicked = "",
    prevTable = "",
    prevTR = "",
    prevBut = "";

function Get_Cookie(name) {
    var start = document.cookie.indexOf(name + "="),
        len = start + name.length + 1,
        end = "";
    return start || name == document.cookie.substring(0, name.length) ? -1 === start ? null : (-1 == (end = document.cookie.indexOf(";", len)) && (end = document.cookie.length), unescape(document.cookie.substring(len, end))) : null
}

function Delete_Cookie(name, path, domain) {
    Get_Cookie(name) && (document.cookie = name + "=" + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT")
}

function Set_Cookie(name, value, expires, path, domain, secure) {
    var today = new Date;
    today.setTime(today.getTime()), expires && (expires *= 864e5);
    var expiresDate = new Date(today.getTime() + expires);
    document.cookie = name + "=" + escape(value) + (expires ? ";expires=" + expiresDate.toGMTString() : "") + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + (secure ? ";secure" : "")
}

function chgDate(frm, fld) {
    var dt = frm.elements[fld].value,
        ds = dt.split("-");
    return 31 < ds[2] ? ds[2] + "-" + ds[1] + "-" + ds[0] : dt
}

function blurFrame(mode) {
    var bd = document.getElementById("div_blur2"),
        height = document.documentElement.scrollHeight + "px",
        width = document.documentElement.clientWidth + "px";
    bd.style.width = width, bd.style.height = height, bd.style.display = "on" == mode ? "block" : "none"
}

function blurFrames(mode) {
    var frameMenu = window.top.frames.ifr_menu,
        frameMain = window.top.frames.ifr_main.frames.vrd_top;
    frameMenu.blurFrame(mode), frameMain.blurFrame(mode), Set_Cookie("blurredFrames", mode)
}

function replace_komma(theField) {
    var rExp = new RegExp(",", "g"),
        t = theField.value.replace(rExp, ".");
    theField.value = t
}

function color_table(theTable, ordernummer) {
    "" !== prevTable && (prevTable.style.backgroundColor = "", prevTable.style.marginTop = "0", prevTable.style.marginBottom = "15px"), theTable.style.backgroundColor = "#E4F3FA", th = Math.round(theTable.offsetHeight / 2), 1e3 < document.documentElement.scrollHeight && (curPos1 = q_getOffsetXY(theTable), theTable.style.marginTop = "100px", theTable.style.marginBottom = "500px", curPos2 = q_getOffsetXY(theTable), document.documentElement.scrollTop = curPos2.y - 150), prevTable = theTable
}

function getViewportHeight() {
    return window.opera || !document.documentElement || document.compatMode && "CSS1Compat" != document.compatMode ? document.compatMode && !window.opera && document.body ? document.body.clientHeight : screen.zero(self.innerHeight) : document.documentElement.clientHeight
}

function clear_tables() {
    "" !== prevTable && (prevTable.style.backgroundColor = ""), prevTable = ""
}

function ClipBoard(txtObj) {
    var holdtext = document.getElementById("holdtext");
    holdtext.innerText = txtObj.innerText, Copied = holdtext.createTextRange(), Copied.execCommand("Copy")
}

function changePrint(url) {
    obj = document.getElementsByTagName("LINK"), alert(url)
}

function prt_Order(ordernummer) {
    document.getElementById("smframe").src = "set_flags.php?table=bestelling_naw&flagfield=flags&flagvalue=16&field=ordernummer&fieldvalue=" + ordernummer, wopen2("print_bestelling.php?ordernummer=" + ordernummer, "bwin", 1, 800, 450)
}

function changeUser(ordernummer) {
    var uid = document.getElementById("afgehandeld_" + ordernummer).value;
    document.getElementById("smframe").src = "set_bestellijst.php?ordernummer=" + ordernummer + "&aktie=change_user-" + uid
}

function wopen_tabs(url) {
    wopen2(url, "wname000", 0, 950, 580)
}

function wopen2(url, wname, flags, w, h) {
    var par = "",
        left = Math.floor((screen.width - w) / 2),
        top = Math.floor((screen.height - h) / 2);
    par += 1 & flags ? "scrollbars=1," : "scrollbars=0,", par += 2 & flags ? "status=1," : "status=0,", par += 4 & flags ? "resizable=1," : "resizable=0,", par += 8 & flags ? "toolbar=1," : "toolbar=0,", par += 16 & flags ? "location=1," : "location=0,", par += 32 & flags ? "menubar=1," : "menubar=0,", par += 64 & flags ? "directories=1," : "directories=0,", win = window.open(url, wname, "width=" + w + ", height=" + h + "," + par + "top=" + top + ",left=" + left), win.focus()
}

function confirmLink(txt) {
    return !!confirm(txt)
}

function confirmButton(txt, loc) {
    confirm(txt) && (document.location = loc)
}

function clickFlagsCB(theCB, val) {
    flagField = document.getElementById("flags"), theCB.checked ? flagField.value = flagField.value | val : flagField.value = flagField.value & ~val
}

function clickCB(theCB, theForm, val) {
    theCB.checked ? theForm.elements["field[flags]"].value = theForm.elements["field[flags]"].value | val : theForm.elements["field[flags]"].value = theForm.elements["field[flags]"].value & ~val
}

function mClick(theButton) {
    "" !== clicked && (clicked.style.backgroundColor = ""), (clicked = theButton.parentNode.parentNode.parentNode).style.backgroundColor = "#FFCC99"
}

function clickTR(theTR) {
    "" !== prevTR && (prevTR.style.backgroundColor = ""), "" === theTR.style.backgroundColor && (theTR.style.backgroundColor = "lightyellow", prevTR = theTR)
}

function q_getOffsetXY(obj, findID) {
    var xPos = obj.offsetLeft,
        yPos = obj.offsetTop,
        parent = obj.offsetParent;
    for (void 0 === findID && (findID = "!@#$%^&*()"); null !== parent && parent.id != findID;) xPos += parent.offsetLeft, yPos += parent.offsetTop, parent = parent.offsetParent;
    return new q_Point(xPos, yPos)
}

function q_Point(x, y) {
    this.x = x, this.y = y
}

function q_moveTo(obj, x, y) {
    obj.style.left = x + "px", obj.style.top = y + "px"
}

function gup(name) {
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        tmpURL = window.location.href,
        results = regex.exec(tmpURL);
    return null === results ? "" : results[1]
}

function initBestellingen() {
    n = 0, bestelling = [];
    var elts = document.all;
    for (i = 0; i < elts.length; i++) "bestelling" == elts[i].name && alert(elts[i].name)
}

function getAjaxFile(sack, fileName) {
    sack.requestFile = fileName, sack.runAJAX()
}

function sack(file) {
    this.xmlhttp = null, this.resetData = function() {
        this.method = "POST", this.queryStringSeparator = "?", this.argumentSeparator = "&", this.URLString = "", this.encodeURIString = !0, this.execute = !1, this.element = null, this.elementObj = null, this.requestFile = file, this.vars = {}, this.responseStatus = []
    }, this.resetFunctions = function() {
        this.onLoading = function() {}, this.onLoaded = function() {}, this.onInteractive = function() {}, this.onCompletion = function() {}, this.onError = function() {}, this.onFail = function() {}
    }, this.reset = function() {
        this.resetFunctions(), this.resetData()
    }, this.createAJAX = function() {
        if (this.xmlhttp = null, "undefined" != typeof ActiveXObject) try {
            this.xmlhttp = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e1) {
            try {
                this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e2) {
                this.xmlhttp = null
            }
        }
        this.xmlhttp || ("undefined" != typeof XMLHttpRequest ? this.xmlhttp = new XMLHttpRequest : this.failed = !0)
    }, this.setVar = function(name, value) {
        this.vars[name] = Array(value, !1)
    }, this.encVar = function(name, value, returnvars) {
        return !0 === returnvars ? Array(encodeURIComponent(name), encodeURIComponent(value)) : (this.vars[encodeURIComponent(name)] = Array(encodeURIComponent(value), !0), this.vars[encodeURIComponent(name)])
    }, this.processURLString = function(string, encode) {
        for (encoded = encodeURIComponent(this.argumentSeparator), regexp = new RegExp(this.argumentSeparator + "|" + encoded), varArray = string.split(regexp), i = 0; i < varArray.length; i++) urlVars = varArray[i].split("="), !0 === encode ? this.encVar(urlVars[0], urlVars[1]) : this.setVar(urlVars[0], urlVars[1])
    }, this.createURLString = function(urlstring) {
        for (var key in this.encodeURIString && this.URLString.length && this.processURLString(this.URLString, !0), urlstring && (this.URLString.length ? this.URLString += this.argumentSeparator + urlstring : this.URLString = urlstring), this.setVar("rndval", (new Date).getTime()), urlstringtemp = [], this.vars) {
            if (!1 === this.vars[key][1] && !0 === this.encodeURIString) {
                encoded = this.encVar(key, this.vars[key][0], !0);
                try {
                    delete this.vars[key]
                } catch (err) {
                    this.vars[key] = null
                }
                this.vars[encoded[0]] = Array(encoded[1], !0), key = encoded[0]
            }
            urlstringtemp[urlstringtemp.length] = key + "=" + this.vars[key][0]
        }
        this.URLString += urlstring ? this.argumentSeparator + urlstringtemp.join(this.argumentSeparator) : urlstringtemp.join(this.argumentSeparator)
    }, this.runResponse = function() {
        eval(this.response)
    }, this.runAJAX = function(urlstring) {
        if (this.failed) this.onFail();
        else if (this.createURLString(urlstring), this.element && (this.elementObj = document.getElementById(this.element)), this.xmlhttp) {
            var self = this;
            if ("GET" == this.method) totalurlstring = this.requestFile + this.queryStringSeparator + this.URLString, this.xmlhttp.open(this.method, totalurlstring, !0);
            else {
                this.xmlhttp.open(this.method, this.requestFile, !0);
                try {
                    this.xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                } catch (e) {}
            }
            this.xmlhttp.onreadystatechange = function() {
                switch (self.xmlhttp.readyState) {
                    case 1:
                        self.onLoading();
                        break;
                    case 2:
                        self.onLoaded();
                        break;
                    case 3:
                        self.onInteractive();
                        break;
                    default:
                        self.response = self.xmlhttp.responseText, self.responseXML = self.xmlhttp.responseXML, self.responseStatus[0] = self.xmlhttp.status, self.responseStatus[1] = self.xmlhttp.statusText, self.execute && self.runResponse(), self.elementObj && (elemNodeName = self.elementObj.nodeName, elemNodeName.toLowerCase(), "input" == elemNodeName || "select" == elemNodeName || "option" == elemNodeName || "textarea" == elemNodeName ? self.elementObj.value = self.response : self.elementObj.innerHTML = self.response), "200" == self.responseStatus[0] ? self.onCompletion() : self.onError(), self.URLString = ""
                }
            }, this.xmlhttp.send(this.URLString)
        }
    }, this.reset(), this.createAJAX()
}

function JT_init() {
    $("a.jTip").hover(function() {
        JT_show(this.href, this.id, this.name)
    }, function() {
        $("#JT").remove()
    }).click(function() {
        return !1
    }), $(".exVAT").hover(function(e) {
        var div = document.createElement("div");
        $(div).css({
            position: "absolute",
            width: 200,
            height: 70,
            backgroundColor: "#ccc",
            border: "3px outset",
            borderRadius: 7,
            padding: 10,
            zIndex: 30,
            left: e.pageX + 10,
            top: e.pageY + 2
        }), $("body").append(div);
        var price = 0,
            VAT = .21 * (price = void 0 !== this.innerText ? parseFloat(this.innerText.replace(",", ".")) : parseFloat(this.innerHTML.replace(/(<([^>]+)>)/gi, "").replace(",", "."))),
            inVAT = price + VAT;
        div.innerHTML = 'Deze prijs is excl. BTW.<br />BTW: <span class="valuta">&euro;</span> <span class="VAT">' + VAT.toFixed(2).replace(".", ",") + '</span><br />Totaal: <span class="valuta">&euro;</span> <span class="inVAT">' + inVAT.toFixed(2).replace(".", ",") + "</span>", div.id = "explVAT", $(div).show()
    }, function() {
        $("#explVAT").remove()
    }), $(document).on({
        mousemove: function(e) {
            $("#explVAT").css({
                left: e.pageX + 10,
                top: e.pageY + 2
            })
        }
    }), $(".products .tile .title").height("auto").each(function() {
        var h = $(this).height();
        h < 18 ? $(this).css({
            lineHeight: "35px",
            height: "35px"
        }) : h <= 35 ? $(this).css({
            lineHeight: "17px",
            height: "35px"
        }) : h <= 52 && $(this).css({
            lineHeight: "11px",
            height: "35px"
        })
    }), $(".products .tile .img a img").each(function() {
        0 < $(this).height() ? centerImage(this) : $(this).on("load", function() {
            centerImage(this)
        })
    })
}

function centerImage(img) {
    if (0 < $(img).height()) {
        var h = parseInt(($(img.parentNode).height() - $(img).height()) / 2, 10),
            w = parseInt(($(img.parentNode).width() - $(img).width()) / 2, 10);
        h < 0 || w < 0 ? setTimeout(centerImage, 100, img) : $(img).css({
            margin: h + "px " + w + "px " + h + "px " + w + "px "
        })
    }
}

function JT_show(url, linkId, title) {
    !1 === title && (title = "&nbsp;");
    var clickElementx, de = document.documentElement,
        hasArea = (self.innerWidth || de && de.clientWidth || document.body.clientWidth) - getAbsoluteLeft(linkId),
        clickElementy = getAbsoluteTop(linkId) - 3,
        params = parseQuery(url.replace(/^[^\?]+\??/, ""));
    if (void 0 === params.width && (params.width = 250), void 0 !== params.link && ($("#" + linkId).bind("click", function() {
            window.location = params.link
        }), $("#" + linkId).css("cursor", "pointer")), hasArea > Number(params.width) + 75) {
        $("body").append("<div id='JT' style='width:" + Number(params.width) + "px'><div id='JT_arrow_left'></div><div id='JT_close_left'>" + title + "</div><div id='JT_copy'><div class='JT_loader'><div></div></div>");
        var arrowOffset = getElementWidth(linkId) + 11;
        clickElementx = getAbsoluteLeft(linkId) + arrowOffset
    } else $("body").append("<div id='JT' style='width:" + Number(params.width) + "px'><div id='JT_arrow_right' style='left:" + (Number(params.width) + 1) + "px'></div><div id='JT_close_right'>" + title + "</div><div id='JT_copy'><div class='JT_loader'><div></div></div>"), clickElementx = getAbsoluteLeft(linkId) - (Number(params.width) + 15);
    $("#JT").css({
        left: clickElementx + "px",
        top: clickElementy + "px"
    }), $("#JT").show(), $("#JT_copy").load(url)
}

function getElementWidth(objectId) {
    return x = document.getElementById(objectId), x.offsetWidth
}

function getAbsoluteLeft(objectId) {
    for (o = document.getElementById(objectId), oLeft = o.offsetLeft; null !== o.offsetParent;) oParent = o.offsetParent, oLeft += oParent.offsetLeft, o = oParent;
    return oLeft
}

function getAbsoluteTop(objectId) {
    for (o = document.getElementById(objectId), oTop = o.offsetTop; null !== o.offsetParent;) oParent = o.offsetParent, oTop += oParent.offsetTop, o = oParent;
    return oTop
}

function parseQuery(query) {
    var Params = {};
    if (!query) return Params;
    for (var Pairs = query.split(/[;&]/), i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split("=");
        if (KeyVal && 2 == KeyVal.length) {
            var key = unescape(KeyVal[0]),
                val = unescape(KeyVal[1]);
            val = val.replace(/\+/g, " "), Params[key] = val
        }
    }
    return Params
}

function blockEvents(evt) {
    evt.target ? evt.preventDefault() : evt.returnValue = !1
}! function() {
    var CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    Math.uuid = function(len, radix, $use1, $use2) {
        var chars = CHARS,
            uuid = [];
        if (radix = radix || chars.length, len)
            for (var i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        else {
            var r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-", uuid[14] = "4";
            for (var j = 0; j < 36; j++) uuid[j] || (r = 0 | 16 * Math.random(), uuid[j] = chars[19 == j ? 3 & r | 8 : r])
        }
        return uuid.join("")
    }, Math.uuidFast = function() {
        for (var r, chars = CHARS, uuid = new Array(36), rnd = 0, i = 0; i < 36; i++) 8 == i || 13 == i || 18 == i || 23 == i ? uuid[i] = "-" : 14 == i ? uuid[i] = "4" : (rnd <= 2 && (rnd = 33554432 + 16777216 * Math.random() | 0), r = 15 & rnd, rnd >>= 4, uuid[i] = chars[19 == i ? 3 & r | 8 : r]);
        return uuid.join("")
    }, Math.uuidCompact = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = 16 * Math.random() | 0;
            return ("x" == c ? r : 3 & r | 8).toString(16)
        }).toUpperCase()
    }
}(), $(document).ready(JT_init);
var phpSessionKeepAlive = new Image,
    ajax;
setInterval(function() {
    var d = new Date;
    phpSessionKeepAlive.src = "/?noop=" + d.getTime()
}, 3e5);
var fhoogte = document.getElementById("hoogte"),
    fdiepte = document.getElementById("diepte"),
    flegborden = document.getElementById("legborden"),
    flengte = document.getElementById("lengte");

function showData() {
    var xmlValues = null,
        c = 0,
        i = 0,
        i2 = 0,
        blockN = null,
        blockV = null;
    if (!(ajax && ajax.xmlhttp && ajax.xmlhttp.readyState < 4)) {
        if (xmlValues = ajax.responseXML.getElementsByTagName("hoogtedata"), c = 0, xmlValues && 0 < xmlValues.length)
            for (i = 0; i < xmlValues.length; i++) addOption(fhoogte, xmlValues[i].getAttribute("hoogtetxt"), xmlValues[i].getAttribute("hoogteval"), c), c++;
        if (xmlValues = ajax.responseXML.getElementsByTagName("dieptedata"), c = 0, xmlValues && 0 < xmlValues.length)
            for (i = 0; i < xmlValues.length; i++) addOption(fdiepte, xmlValues[i].getAttribute("dieptetxt"), xmlValues[i].getAttribute("diepteval"), c), c++;
        if (xmlValues = ajax.responseXML.getElementsByTagName("lbdata"), c = 0, xmlValues && 0 < xmlValues.length)
            for (i = 0; i < xmlValues.length; i++) addOption(flegborden, xmlValues[i].getAttribute("lbtxt"), xmlValues[i].getAttribute("lbval"), c), c++;
        if (xmlValues = ajax.responseXML.getElementsByTagName("lengtedata"), c = 0, flengte.length = 0, xmlValues && 0 < xmlValues.length)
            for (i = 0; i < xmlValues.length; i++) addOption(flengte, xmlValues[i].getAttribute("lengtetxt"), xmlValues[i].getAttribute("lengteval"), c), c++;
        if (xmlValues = ajax.responseXML.getElementsByTagName("selected"), xmlValues && 0 < xmlValues.length)
            for (i = 0; i < xmlValues.length; i++)
                for (blockN = eval("f" + xmlValues[i].getAttribute("blockname")), blockV = xmlValues[i].getAttribute("blockvalue"), i2 = 0; i2 < blockN.options.length; i2++)
                    if (blockN.options[i2].value == blockV) {
                        blockN.options[i2].selected = !0;
                        break
                    }
    }
}

function init() {
    var h = 0,
        d = 0,
        lb = 0,
        l = 0,
        url = "",
        queryString = "";
    setInterval(function() {
        blinkingText()
    }, 1e3), (ajax = new sack).onCompletion = showData, fhoogte = document.getElementById("hoogte"), fdiepte = document.getElementById("diepte"), flegborden = document.getElementById("legborden"), flengte = document.getElementById("lengte"), (fhoogte || fdiepte || flegborden || flengte) && (h = gup("hoogte"), d = gup("diepte"), lb = gup("legborden"), l = gup("lengte"), gup("page"), h && d && lb && l ? (queryString = {
        mode: "rev_populate",
        hoogte: h,
        diepte: d,
        legborden: lb,
        lengte: l
    }, url = window.SKBaseFolder + "php/xml_configurator.php?" + queryString.join("&"), getAjaxFile(ajax, url)) : getAjaxFile(ajax, window.SKBaseFolder + "php/xml_configurator.php?mode=hoogte"))
}

function getData(mode) {
    var h = 0,
        d = 0,
        lb = 0;
    switch (mode) {
        case "hoogte":
            fdiepte.options.length = 0, flegborden.options.length = 0, flengte.options.length = 0, h = fhoogte.options[fhoogte.selectedIndex].value, getAjaxFile(ajax, window.SKBaseFolder + "php/xml_configurator.php?mode=diepte&hoogte=" + h);
            break;
        case "diepte":
            flegborden.options.length = 0, flengte.options.length = 0, h = fhoogte.options[fhoogte.selectedIndex].value, d = fdiepte.options[fdiepte.selectedIndex].value, getAjaxFile(ajax, window.SKBaseFolder + "php/xml_configurator.php?mode=legborden&hoogte=" + h + "&diepte=" + d);
            break;
        case "legborden":
            flengte.options.length = 0, h = fhoogte.options[fhoogte.selectedIndex].value, d = fdiepte.options[fdiepte.selectedIndex].value, lb = flegborden.options[flegborden.selectedIndex].value, getAjaxFile(ajax, window.SKBaseFolder + "php/xml_configurator.php?mode=lengte&hoogte=" + h + "&diepte=" + d + "&legborden=" + lb);
            break;
        default:
            console && console.log && console.log("Kan geen data vinden voor mode " + mode)
    }
}

function blinkingText() {
    blinkElement = document.getElementById("blink"), blinkElement && (blinkElement.style.visibility = "hidden" == document.getElementById("blink").style.visibility ? "visible" : "hidden")
}

function UpgradeConfigurator(e) {
    var event = null,
        target = null;
    if ("object" == typeof e) {
        if (target = e, window.event) event = window.event;
        else if (document.createEvent) try {
            (event = document.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 0, e.clientLeft, e.clientTop, e.offsetLeft, e.offsetTop, !1, !1, !1, !1, 0, e), event.srcElement = e, event.target = e
        } catch (error) {}
    } else event = e || window.event;
    event.srcElement ? target = event.srcElement : event.target && (target = event.target), e && e.stopPropagation ? e.stopPropagation() : event.cancelBubble = !0, event.charCode && !event.keyCode && (event.keyCode = event.charCode);
    for (var form = target;
        "FORM" != form.nodeName && form.parentNode;) form = form.parentNode;
    "FORM" == form.nodeName && (form.elements.page.value = "configurator_acc", form.elements.do.value = "addAcc", form.submit())
}

function custom_confirm(prompt, action, title) {
    void 0 === title && (title = "Are you sure?"), 0 === $("#confirm").length ? ($("#main div.inner").append('<div id="confirm" title="' + title + '">' + prompt + "</div>"), $("#confirm").dialog({
        buttons: {
            Proceed: function() {
                $(this).dialog("close"), action()
            },
            Cancel: function() {
                $(this).dialog("close")
            }
        }
    })) : ($("#confirm").html(prompt), $("#confirm").dialog("open"))
}
void 0 === window.SKBaseFolder && (window.SKBaseFolder = ""), "adm" === window.location.host.split(".")[0].toLowerCase().substr(0, 3) && (window.SKBaseFolder = "/_site/"), "undefined" != typeof jQuery ? jQuery(document).ready(function() {
        init()
    }) : document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
        alreadyrunflag = 1, init()
    }, !1) : document.attachEvent && document.attachEvent("onload", function() {
        alreadyrunflag = 1, init()
    }), cfgwaitLoad = setInterval(function() {
        document.getElementById("hoogte") && (document.getElementById("hoogte").form.children.length < 5 || (2 < document.getElementById("hoogte").options.length ? clearInterval(cfgwaitLoad) : init()))
    }, 400),
    /**
     * Stellingkast.nl JS Config 2D Base
     *
     * Basis JavaScript file for Config 2D pages
     *
     *   ____  _       _ _ _             _  __         _           _
     *  / ___|| |_ ___| | (_)_ __   __ _| |/ /__ _ ___| |_   _ __ | |
     *  \___ \| __/ _ \ | | | '_ \ / _` | ' // _` / __| __| | '_ \| |
     *   ___) | ||  __/ | | | | | | (_| | . \ (_| \__ \ |_ _| | | | |
     *  |____/ \__\___|_|_|_|_| |_|\__, |_|\_\__,_|___/\__(_)_| |_|_|
     *                             |___/
     *
     * Stellingkast.nl
     * Ontwikkeld voor ARS-almere / ARS-online / Stellingkast.nl
     *
     * PHP version 5
     *
     * @preserve
     * @category  WebShop
     * @package   Stellingkast
     * @author    ARS Online <info@stellingkast.nl>
     * @copyright 2014 ARS en Stellingkast.nl
     * @link      https://www.stellingkast.nl
     *
     * @license Copyright (c) 2014-2016 ARS Office & Storage / Stellingkast.nl B.V.
     * We at Stellingkast.nl have really worked hard to create this code.
     * So please do not use it without our permission!
     */
    "undefined" != typeof $ && "undefined" != typeof jQuery || function() {
        var newscript = document.createElement("script");
        newscript.type = "text/javascript", newscript.async = !1, newscript.src = "//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(newscript)
    }();
var ImageFilters = {
    getPixels: function(img) {
        var c = this.getCanvas(img.width, img.height),
            ctx = c.getContext("2d");
        return ctx.drawImage(img), ctx.getImageData(0, 0, c.width, c.height)
    },
    getCanvas: function(w, h) {
        var c = document.createElement("canvas");
        return c.width = w, c.height = h, c
    },
    filterImage: function(filter, image, var_args) {
        var i, args = [this.getPixels(image)];
        for (i = 2; i < arguments.length; i += 1) args.push(arguments[i]);
        return filter.apply(null, args)
    },
    grayscale: function(pixels, args) {
        var i, v, d = pixels.data;
        for (i = 0; i < d.length; i += 4) v = .2126 * d[i] + .7152 * d[i + 1] + .0722 * d[i + 2], d[i] = d[i + 1] = d[i + 2] = v;
        return pixels
    },
    brightness: function(pixels, adjustment) {
        var i, d = pixels.data;
        for (i = 0; i < d.length; i += 4) d[i] += adjustment, d[i + 1] += adjustment, d[i + 2] += adjustment;
        return pixels
    },
    threshold: function(pixels, threshold) {
        var i, v, d = pixels.data;
        for (i = 0; i < d.length; i += 4) v = threshold <= .2126 * d[i] + .7152 * d[i + 1] + .0722 * d[i + 2] ? 255 : 0, d[i] = d[i + 1] = d[i + 2] = v;
        return pixels
    }
};

function openpopup(e) {
    var winX, winY, w = .9 * $(window).width(),
        h = .9 * $(window).height(),
        url = this.href;
    return w < 1030 && 1030 <= screen.availWidth && (w = 1030), winX = (document.all ? window.screenLeft : window.screenX) + .05 * w, winX = parseInt(winX, 10), winY = (document.all ? window.screenTop : window.screenY) + .05 * h, winY = parseInt(winY, 10), window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), window.open(url, "StellingKast_onderdelen", "height=" + h + ",width=" + w + ",left=" + winX + ",top=" + winY + ",location=yes,menubar=yes,resizable=yes,screenX=" + winX + ",screenY=" + winY + ",scrollbars=yes,status=yes,toolbar=yes"), !1
}

function onPlayerReady(event) {
    !event && window.event && (event = window.event), event.target.playVideo()
}

function onPlayerStateChange(event) {
    !event && window.event && (event = window.event), 0 === event.data && void 0 !== $.fancybox && $.fancybox.close()
}

function showpdfinline() {
    if (void 0 !== $.fancybox) return $(this).fancybox({
        type: "iframe",
        overlayShow: !0,
        hideOnContentClick: !1,
        autoscale: !1,
        width: 1050,
        height: "90%",
        padding: 15,
        href: "http://docs.google.com/gview?url=" + this.href + "&embedded=true"
    }), !1
}
var SKAjaxSend = function(event, jqxhr, settings) {
        var file1, file2, result;
        window.PHPSessID && (0 < settings.url.indexOf("?") ? settings.url.indexOf("PHPSESSID=") < 0 && (settings.url += "&PHPSESSID=" + window.PHPSessID) : settings.url += "?PHPSESSID=" + window.PHPSessID), !$.loaded_scripts || "POST" !== settings.type && !1 !== settings.cache || (file1 = settings.url.replace(/^.*\/|\.[^.]*$/g, ""), file2 = settings.url.replace(/^.*[\\\/]/, ""), -1 !== (result = $.inArray(file1, $.loaded_scripts)) && $.loaded_scripts.splice(result, 1), -1 !== (result = $.inArray(file2, $.loaded_scripts)) && $.loaded_scripts.splice(result, 1))
    },
    SKAjaxError = function(event, jqXHR, ajaxSettings, thrownError) {
        window.skApp && window.skApp.log("warn", thrownError)
    },
    SKAjaxComplete = function(event, XMLHttpRequest, ajaxOptions) {
        if ($.loaded_scripts && "POST" === ajaxOptions.type || !1 === ajaxOptions.cache) {
            var result, file1 = ajaxOptions.url.replace(/^.*\/|\.[^.]*$/g, ""),
                file2 = ajaxOptions.url.replace(/^.*[\\\/]/, ""); - 1 !== (result = $.inArray(file1, $.loaded_scripts)) && $.loaded_scripts.splice(result, 1), -1 !== (result = $.inArray(file2, $.loaded_scripts)) && $.loaded_scripts.splice(result, 1)
        }
        jQuery(document).ajaxSend(SKAjaxSend), jQuery(document).ajaxError(SKAjaxError)
    };

function SKShelvingBaseClass(parent, name, ancestors) {
    this.License = "We at Stellingkast.nl have really worked hard to create this code. So please do not use it without our permission!";
    var property, properties, self = this,
        _shelving, _current, _zoom, _busy = !1,
        _skCanvasBuilder, _skSettingsFormBuilder, _skPriceCalculator, scaffoldType, _getter_shelving = function() {
            if (!_shelving) {
                var i, instances = SKBaseClass.instances;
                if (_busy) return self.loopBreak("_gSh", 407, self.__class__ + " is busy with: " + _busy), _shelving;
                for (i in _busy = "_gSh", instances)
                    if (instances[i] !== self && instances[i] instanceof SKShelvingBaseClass && instances[i]._shelving) {
                        self.loopBreak("_gSh", 415), _shelving = instances[i]._shelving, instances[0]._shelving = _shelving;
                        break
                    }
                _busy = !1
            }
            return _shelving
        },
        _getter_zoom = function() {
            var result = 100;
            return isNaN(_zoom) || (result = parseFloat(_zoom)), result
        },
        _getter_skCanvasBuilder = function() {
            if (!_skCanvasBuilder) {
                var instances = SKBaseClass.instances,
                    i = 0,
                    len = instances.length;
                if (_busy) return self.loopBreak("_gB", 440, self.__class__ + " is busy with: " + _busy), _skCanvasBuilder;
                for (_busy = "_gB", i = 0; i < len; i++)
                    if (instances[i] instanceof SKShelvingBaseClass && instances[i]._skCanvasBuilder) {
                        self.loopBreak("_gB", 447), _skCanvasBuilder = instances[i]._skCanvasBuilder;
                        break
                    }
                _busy = !1
            }
            return _skCanvasBuilder
        },
        _setter_skCanvasBuilder = function(val) {
            _skCanvasBuilder ? self.loopBreak("_sB", 473) : val instanceof SKCanvasBuilder ? (self.loopBreak("_sB", 461), _skCanvasBuilder = val, SKBaseClass.instances[0]._skCanvasBuilder = val) : val instanceof SKBaseClass ? self.loopBreak("_sB", 466, val.__class__) : self.loopBreak("_sB", 469, typeof val)
        },
        _getter_skSettingsFormBuilder = function() {
            if (!_skSettingsFormBuilder) {
                if (_busy) return self.loopBreak("_gF", 480, self.__class__ + " is busy with: " + _busy), _skSettingsFormBuilder;
                _busy = "_gF";
                var instances = SKBaseClass.instances,
                    i = 0,
                    len = instances.length;
                for (i = 0; i < len; i++)
                    if (instances[i] instanceof SKShelvingBaseClass && instances[i]._skSettingsFormBuilder) {
                        self.loopBreak("_gF", 490), _skSettingsFormBuilder = instances[i]._skSettingsFormBuilder;
                        break
                    }
                _busy = !1
            }
            return _skSettingsFormBuilder
        },
        _setter_skSettingsFormBuilder = function(val) {
            _skSettingsFormBuilder ? self.loopBreak("_sF", 516) : val instanceof SKSettingsFormBuilder ? (self.loopBreak("_sF", 504), _skSettingsFormBuilder = val, SKBaseClass.instances[0]._skSettingsFormBuilder = val) : val instanceof SKBaseClass ? self.loopBreak("_sF", 509, val.__class__) : self.loopBreak("_sF", 512, typeof val)
        },
        _getter_skPriceCalculator = function() {
            if (!_skPriceCalculator) {
                var instances = SKBaseClass.instances,
                    i = 0,
                    len = instances.length;
                if (_busy) return self.loopBreak("_gP", 526, self.__class__ + " is busy with: " + _busy), _skPriceCalculator;
                for (_busy = "_gP", i = 0; i < len; i++)
                    if (instances[i] instanceof SKShelvingBaseClass && instances[i]._skPriceCalculator) {
                        self.loopBreak("_gP", 533), _skPriceCalculator = instances[i]._skPriceCalculator;
                        break
                    }
                _busy = !1
            }
            return _skPriceCalculator
        },
        _setter_skPriceCalculator = function(val) {
            _skPriceCalculator ? self.loopBreak("_sP", 559) : val instanceof SKPriceCalculator ? (self.loopBreak("_sP", 547), _skPriceCalculator = val, SKBaseClass.instances[0]._skPriceCalculator = val) : val instanceof SKBaseClass ? self.loopBreak("_sP", 552, val.__class__) : self.loopBreak("_sP", 555, typeof val)
        },
        _getter_scaffoldType = function() {
            if (!scaffoldType) {
                var instances = SKBaseClass.instances,
                    i = 0,
                    len = instances.length;
                if (_busy) return self.loopBreak("_gT", 569, self.__class__ + " is busy with: " + _busy), scaffoldType;
                for (_busy = "_gT", i = 0; i < len; i++)
                    if (instances[i] instanceof SKShelvingBaseClass && instances[i].scaffoldType) {
                        self.loopBreak("_gT", 576), scaffoldType = instances[i].scaffoldType;
                        break
                    }
                _busy = !1
            }
            return scaffoldType
        },
        _setter_scaffoldType = function(val) {
            scaffoldType ? self.loopBreak("_sP", 602) : (self.loopBreak("_sP", 590, val), scaffoldType = val, SKBaseClass.instances[0].scaffoldType = val)
        },
        _getter_scaffoldBusy = function() {
            return void 0 === SKBaseClass.instances.changingFunctionList && (SKBaseClass.instances.changingFunctionList = []), 0 !== SKBaseClass.instances.changingFunctionList.length
        };
    if (void 0 === SKBaseClass && $.ajax({
            async: !1,
            url: "/js/skbase.js"
        }), void 0 === $.fn.select2 && $.ajax({
            async: !1,
            cache: !0,
            url: window.SKBaseFolder + "/blocks/select2/dist/js/select2.full.min.js",
            dataType: "script",
            error: function() {
                $.ajax({
                    url: "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.full.min.js",
                    cache: !0,
                    async: !1,
                    dataType: "script",
                    success: function(data) {
                        eval(data);
                        var url = "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css",
                            css;
                        if (document.createStyleSheet) try {
                            document.createStyleSheet(url)
                        } catch (e) {} else css = document.createElement("link"), css.rel = "stylesheet", css.type = "text/css", css.media = "all", css.href = url, document.getElementsByTagName("head")[0].appendChild(css);
                        $.ajax({
                            url: "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/i18n/nl.js",
                            cache: !0,
                            async: !0,
                            dataType: "script",
                            success: function(data) {
                                eval(data)
                            }
                        })
                    }
                })
            },
            success: function() {
                var css, url = window.SKBaseFolder + "/blocks/select2/dist/css/select2.min.css";
                if (document.createStyleSheet) try {
                    document.createStyleSheet(url)
                } catch (e) {} else(css = document.createElement("link")).rel = "stylesheet", css.type = "text/css", css.media = "all", css.href = url, document.getElementsByTagName("head")[0].appendChild(css)
            }
        }), void 0 === $.fancybox && $.ajax({
            async: !1,
            cache: !0,
            url: window.SKBaseFolder + "/blocks/fancybox/jquery.fancybox.pack.js",
            dataType: "script",
            error: function() {
                $.ajax({
                    url: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.pack.js",
                    cache: !0,
                    async: !1,
                    dataType: "script",
                    success: function(data) {
                        eval(data);
                        var url = "https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css",
                            css;
                        if (document.createStyleSheet) try {
                            document.createStyleSheet(url)
                        } catch (e) {} else css = document.createElement("link"), css.rel = "stylesheet", css.type = "text/css", css.media = "all", css.href = url, document.getElementsByTagName("head")[0].appendChild(css)
                    }
                })
            },
            success: function() {
                var css, url = window.SKBaseFolder + "/blocks/fancybox/jquery.fancybox.css";
                if (document.createStyleSheet) try {
                    document.createStyleSheet(url)
                } catch (e) {} else(css = document.createElement("link")).rel = "stylesheet", css.type = "text/css", css.media = "all", css.href = url, document.getElementsByTagName("head")[0].appendChild(css)
            }
        }), void 0 === ancestors ? ancestors = [SKShelvingBaseClass] : ancestors.unshift(SKShelvingBaseClass), SKBaseClass.call(self, name, ancestors), void 0 === self.name && (self.name = "Shelving Base Class"), name && (self.name = name), self._shelving ? _shelving = self._shelving : parent && parent._shelving && (_shelving = parent._shelving), self.changingFunctionList = [], void 0 === self.changingStart && (SKShelvingBaseClass.prototype.changingStart = function(fnName) {
            self.loopBreak(fnName, 775, "Start Changing Scaffold: (" + fnName + ")"), $.fx.off = !0, void 0 === SKBaseClass.instances.changingFunctionList && (SKBaseClass.instances.changingFunctionList = []), SKBaseClass.instances.changingFunctionList.push(fnName)
        }, SKShelvingBaseClass.prototype.changingStop = function(fnName) {
            for (var fn = SKBaseClass.instances.changingFunctionList.length - 1, removed = null; 0 <= fn; fn--)
                if (SKBaseClass.instances.changingFunctionList[fn] === fnName) {
                    removed = fn, SKBaseClass.instances.changingFunctionList.splice(fn, 1);
                    break
                }
            null === removed ? self.log("warn", "Function " + fnName + " not found in BusyList while Changing Scaffold: " + SKBaseClass.instances.changingFunctionList.join(", ")) : fn !== SKBaseClass.instances.changingFunctionList.length ? self.log("warn", "Function " + fnName + " not the last " + fn + " in Changing Scaffold: " + SKBaseClass.instances.changingFunctionList.join(", ")) : self.loopBreak(fnName, 805, "Stop Changing Scaffold: " + fn + " (" + fnName + ")"), fn || ($.fx.off = !1)
        }), Object.defineProperties ? Object.defineProperties(self, {
            _shelving: {
                get: _getter_shelving,
                set: function(val) {
                    _shelving = val
                }
            },
            _current: {
                get: function() {
                    return _current
                },
                set: function(val) {
                    _current = val
                }
            },
            _zoom: {
                get: _getter_zoom,
                set: function(val) {
                    _zoom = parseFloat(val)
                }
            },
            _skCanvasBuilder: {
                get: _getter_skCanvasBuilder,
                set: _setter_skCanvasBuilder
            },
            _skSettingsFormBuilder: {
                get: _getter_skSettingsFormBuilder,
                set: _setter_skSettingsFormBuilder
            },
            _skPriceCalculator: {
                get: _getter_skPriceCalculator,
                set: _setter_skPriceCalculator
            },
            scaffoldType: {
                get: _getter_scaffoldType,
                set: _setter_scaffoldType
            },
            scaffoldBusy: {
                get: _getter_scaffoldBusy
            }
        }) : self.__defineGetter__ ? (self.__defineGetter__("_shelving", _getter_shelving), self.__defineSetter__("_shelving", function(val) {
            _shelving = val
        }), self.__defineGetter__("_current", function() {
            return _current
        }), self.__defineSetter__("_current", function(val) {
            _current = val
        }), self.__defineGetter__("_zoom", _getter_zoom), self.__defineSetter__("_zoom", function(val) {
            _zoom = val
        }), self.__defineGetter__("_skCanvasBuilder", _getter_skCanvasBuilder), self.__defineSetter__("_skCanvasBuilder", _setter_skCanvasBuilder), self.__defineGetter__("_skSettingsFormBuilder", _getter_skSettingsFormBuilder), self.__defineSetter__("_skSettingsFormBuilder", _setter_skSettingsFormBuilder), self.__defineGetter__("_skPriceCalculator", _getter_skPriceCalculator), self.__defineSetter__("_skPriceCalculator", _setter_skPriceCalculator), self.__defineGetter__("scaffoldType", _getter_scaffoldType), self.__defineSetter__("scaffoldType", _setter_scaffoldType), self.__defineGetter__("scaffoldBusy", _getter_scaffoldBusy)) : (self._shelving = null, self._current = null, self._zoom = 100), isNaN(self._zoom) && (self._zoom = 100), self._debug = {}, self._skCanvasBuilder = self instanceof SKCanvasBuilder ? self : null, self._skSettingsFormBuilder = self instanceof SKSettingsFormBuilder ? self : null, self._skPriceCalculator || (self._skPriceCalculator = self instanceof SKPriceCalculator ? self : null), self._skLoader = self instanceof SKLoader ? self : null, self.loopBreakCallBack = function() {}, parent)
        for (property in properties = Object.keys(self), parent) 0 <= properties.indexOf(property) && (self[property] || null !== parent[property] && void 0 !== parent[property] && (self[property] = parent[property]));
    self.shareProperties(), self._parent = parent, self.setEventsHandlers = function() {}, self.log("debug", "Created new " + self.__class__ + " object.")
}

function SKBaseArticle(parent, name, ancestors) {
    var removeInfoPopups, createArticleInfoPopup, createArticleInfoDetails, height, width, depth, perfo, color, position, htmlElement, count, me = this,
        self = this,
        _getter_id = function() {
            var element = self.htmlElement;
            if (element && element.id) return element.id
        },
        _setter_position = function(val) {
            val !== position && (!val || isNaN(val) ? (position = 0, self.loopBreak(arguments.callee.name, 1005, val)) : (position = parseInt(val, 10), self.loopBreak(arguments.callee.name, 1009, position)))
        };
    void 0 === self.count && (self.count = 1), count = self.count, void 0 === ancestors ? ancestors = [SKBaseArticle] : ancestors.unshift(SKBaseArticle), SKShelvingBaseClass.call(self, parent, name, ancestors), self.htmlElement ? $(self.htmlElement).data("__class__", self) : self.htmlElement = null, self.priceObjectName = null, Object.defineProperties ? Object.defineProperties(self, {
        height: {
            get: function() {
                return parseInt(height, 10)
            },
            set: function(val) {
                height = parseInt(val, 10)
            },
            configurable: !1
        },
        width: {
            get: function() {
                return parseInt(width, 10)
            },
            set: function(val) {
                width = parseInt(val, 10)
            },
            configurable: !1
        },
        depth: {
            get: function() {
                return parseInt(depth, 10)
            },
            set: function(val) {
                depth = parseInt(val, 10)
            },
            configurable: !1
        },
        perfo: {
            get: function() {
                return parseInt(perfo, 10)
            },
            set: function(val) {
                perfo = parseInt(val, 10)
            },
            configurable: !1
        },
        color: {
            get: function() {
                return color
            },
            set: function(val) {
                color = val
            },
            configurable: !1
        },
        position: {
            get: function() {
                return parseInt(position, 10)
            },
            set: _setter_position,
            configurable: !1
        },
        htmlElement: {
            get: function() {
                return htmlElement
            },
            set: function(val) {
                htmlElement = val
            },
            configurable: !1
        },
        id: {
            get: _getter_id
        },
        count: {
            value: count,
            writable: !1
        }
    }) : self.__defineGetter__ && (depth = void 0 === self.depth ? null : self.depth, self.__defineGetter__("height", function() {
        return height
    }), self.__defineSetter__("height", function(val) {
        height = val
    }), self.__defineGetter__("width", function() {
        return width
    }), self.__defineSetter__("width", function(val) {
        width = val
    }), self.__defineGetter__("depth", function() {
        return depth
    }), self.__defineSetter__("depth", function(val) {
        depth = val
    }), self.__defineGetter__("perfo", function() {
        return perfo
    }), self.__defineSetter__("perfo", function(val) {
        perfo = val
    }), self.__defineGetter__("color", function() {
        return color
    }), self.__defineSetter__("color", function(val) {
        color = val
    }), self.__defineGetter__("position", function() {
        return position
    }), self.__defineSetter__("position", _setter_position), self.__defineGetter__("htmlElement", function() {
        return htmlElement
    }), self.__defineSetter__("htmlElement", function(val) {
        htmlElement = val
    }), self.__defineGetter__("id", _getter_id), self.__defineGetter__("count", function() {
        return count
    }), position = color = perfo = width = height = null), self.height = null, self.width = null, void 0 === self.depth && (self.depth = null), self.perfo = null, self.color = null, self.position = null, self.propertyList = {
        scaffoldtype: 0,
        articletype: 1,
        width: 2,
        depth: 3,
        height: 4,
        perfo: 5,
        description: 6,
        color: 7
    };
    try {
        self._skPriceCalculator._dirty = !0
    } catch (err) {
        self.log("warn", err)
    }
    self.margin = 0, parent && (parent instanceof SKCanvasSection ? (self.section = parent, self.sectionNo = parent._getSectionNo(), void 0 === parent.parts && (parent.parts = []), parent.parts.indexOf(self) < 0 && parent.parts.push(self)) : parent instanceof SKArtPillar && (self.pillar = parent, self.sectionNo = parent.sectionNo, void 0 === parent.parts && (parent.parts = []), parent.parts.indexOf(self) < 0 && parent.parts.push(self))), self.DBValues = {}, SKBaseArticle.prototype.articleId = function() {
        var elID = this.htmlElement.id,
            parentSectionNo = this._parent._getSectionNo(),
            priceObjectName = this.priceObjectName;
        return self.loopBreak(arguments.callee.name, 1232, elID), this instanceof SKArtShelve && (elID = $(this.htmlElement).find(".shelve")[0].id), this._shelving.sections[parentSectionNo].parts[priceObjectName][elID].id
    }, self.preventSamePlace = function() {
        var i, chkPart, positions = [],
            originalPosition = this.position,
            parent = this._parent,
            posStart = 0,
            changed = !1,
            newPosition = originalPosition,
            fnName = arguments.callee.name;
        for (self.loopBreak(fnName, 1256), self.changingStart(fnName), this instanceof SKArtShelve && (positions = (positions = this._skCanvasBuilder._get_positions(parent)).positions), originalPosition <= 0 && 0 < positions.length && (newPosition = positions[0]), posStart = -1; posStart < positions.length; posStart++) {
            for (self.loopBreak(fnName, 1269, "Zoek plekje: " + posStart + "/" + positions.length), changed = !1, posStart < 0 && (posStart = 0), i = 0; i < parent.parts.length; i++)(chkPart = parent.parts[i]) !== this && chkPart.__class__ === this.__class__ && (self.loopBreak(fnName, 1278, "naar " + newPosition), newPosition >= chkPart.position && newPosition < chkPart.position + chkPart.height + this.margin ? (newPosition = 0 < positions.length ? positions[posStart] : chkPart.position + chkPart.height + this.margin, changed = !0) : newPosition <= chkPart.position && newPosition + this.height + this.margin > chkPart.position && (newPosition = positions ? positions[posStart] : chkPart.position + chkPart.height + this.margin, changed = !0));
            if (!changed) break
        }
        newPosition !== originalPosition && (me._debug.shelves && me._logging.debug && me.log("debug", "Shelve (" + this.htmlElement.id + ") pos (" + parseInt($(this.htmlElement).css("bottom"), 10) + "/" + originalPosition + ") MOVE (" + newPosition + ")"), this.move(newPosition)), self.changingStop(fnName)
    }, self.move = function(newPosition) {
        var shParts, part, me = this,
            elID = self.htmlElement.id,
            fnName = arguments.callee.name;
        self.loopBreak(fnName, 1348, self.id + " => " + newPosition), self.changingStart(fnName), me instanceof SKArtShelve && (elID = $(me.htmlElement).find(".shelve")[0].id), newPosition < 0 && (newPosition = 0), newPosition + parseInt(me.height, 10) > parseInt(me._parent.height, 10) && (newPosition = parseInt(me._parent.height, 10) - parseInt(me.height, 10)), newPosition = parseInt(newPosition, 10), me._useAnimation ? $(me.htmlElement).addClass("inMotion").animate({
            bottom: newPosition
        }, "fast", function() {
            self.loopBreak(arguments.callee.name, 1364, self.id), $(me.htmlElement).css({
                bottom: newPosition + "px",
                top: ""
            }), $(me.htmlElement).removeAttr("newpos"), me.preventSamePlace(), $(me).removeClass("inMotion"), $(me).css("overflow", "")
        }) : $(me.htmlElement).css({
            bottom: newPosition + "px",
            top: ""
        }), me.position = newPosition;
        try {
            (shParts = me._shelving.sections[me.sectionNo].parts)[me.priceObjectName] && (part = shParts[me.priceObjectName][elID]) && (part.position = newPosition), me.preventSamePlace()
        } catch (err) {
            me.log("warn", err)
        }
        me._skPriceCalculator.showPartList(), self.changingStop(fnName)
    }, self.draggable = function(event, ui) {
        var i, instance, result, pos, shSection, ElID;
        if (self.loopBreak(arguments.callee.name, 1402), void 0 === event) this.draggable(this);
        else if (event instanceof SKBaseArticle)
            if (event.draggableArguments) switch (event.draggableArguments.event.type) {
                case "dragstart":
                case "dragdrag":
                case "drag":
                    result = !0;
                    break;
                case "dragcreate":
                case "dragstop":
                default:
                    result = !1
            } else result = !1;
            else if (event instanceof Object) switch (event.type) {
            case "dragcreate":
            case "dragstart":
            case "dragdrag":
            case "drag":
                me.draggableArguments = {
                    event: event,
                    ui: ui
                };
                break;
            case "dragstop":
                pos = $(me._parent.htmlElement).height() - ui.position.top - me.height - 1, shSection = me._shelving.sections[me.sectionNo], ElID = me.htmlElement.id, me instanceof SKArtShelve && (ElID = $(me.htmlElement).find(".shelve")[0].id, shSection.shelves && 2 < ElID.split("_").length && shSection.shelves[ElID.split("_")[2]] && (shSection.shelves[ElID.split("_")[2]].pos = pos)), shSection.parts[me.priceObjectName] && (shSection.parts[me.priceObjectName][ElID].position = pos), me.position = pos, me.preventSamePlace(), me._skPriceCalculator.showPartList(), me.draggableArguments = {
                    event: event,
                    ui: ui
                }, me.move(pos);
                break;
            default:
                for (i = 0; i < SKBaseClass.instances.length; i++)
                    if ((instance = SKBaseClass.instances[i]) instanceof SKBaseArticle && instance.draggable(instance)) return !0;
                result = !1
        }
        return result
    }, self.remove = function() {
        var i, sectionNo, parts, elID, len, ext, name = self.priceObjectName,
            name_ext = ["", " x", " h"],
            fnName = arguments.callee.name;
        if (self.loopBreak(fnName, 1492), self.changingStart(fnName), (elID = self.htmlElement ? self.htmlElement.id : null) && self instanceof SKArtShelve && (elID = $(self.htmlElement).find(".shelve")[0].id), self.log("debug", "Remove Article " + name + " " + elID), self._parent)
            if (self._parent instanceof SKCanvasSection) {
                if (sectionNo = self._parent._getSectionNo(), self._parent.parts)
                    for (i = 0, len = self._parent.parts.length; i < len;) {
                        if (self._parent.parts[i] instanceof SKBaseArticle) {
                            if (self._parent.parts[i] === self) {
                                self._parent.parts[i] = null, self._parent.parts.splice(i, 1);
                                break
                            }
                            null === self._parent.parts[i] && self._parent.parts.splice(i, 1)
                        }
                        i++
                    }
            } else self._parent instanceof SKArtPillar ? sectionNo = self._parent.sectionNo : self instanceof SKArtPillar && (sectionNo = self.sectionNo);
        if (self.htmlElement && (parts = self._shelving.sections[sectionNo].parts, elID))
            for (ext in name_ext) parts[name + name_ext[ext]] && delete parts[name + name_ext[ext]][elID];
        if (parent && parent.parts)
            for (i = 0, len = parent.parts.length; i < len;) {
                if (parent.parts[i] instanceof SKBaseArticle) {
                    if (parent.parts[i] === self) {
                        parent.parts[i] = null, parent.parts.splice(i, 1);
                        break
                    }
                    null === parent.parts[i] && parent.parts.splice(i, 1)
                }
                i++
            }
        $(self.htmlElement).remove(), self instanceof SKArtBack && (self._parent.removeBraces && self._parent.removeBraces(), self._skCanvasBuilder._addBraces()), self instanceof SKArtShelve && $("select#sShelves_" + sectionNo).val(Object.size(parts[name])), self._skSettingsFormBuilder.updateBaseValues(), self._skPriceCalculator.showPartList(), self._skPriceCalculator._rebuild(), self.changingStop(fnName)
    }, self.getMaxId = function() {
        var i, part, len, maxid = 0,
            partid = 0;
        if (self.loopBreak(arguments.callee.name, 1585), self._parent && self._parent.parts)
            for (i = 0, len = self._parent.parts.length; i < len;)(part = self._parent.parts[i]) !== self && part.__class__ === self.__class__ && part.htmlElement && (partid = part.htmlElement.id, maxid < (partid = parseInt(partid.split("_")[2], 10)) && (maxid = partid)), i++;
        return maxid
    }, removeInfoPopups = function() {
        self.loopBreak(arguments.callee.name, 1614), $(".section, .pillar, .pillar *, .section *").css("zIndex", "").removeClass("hasInfo"), $(".section .info, .pillar .info").fadeOut(200, function() {
            self.loopBreak(arguments.callee.name, 1617), $(this).remove()
        })
    }, createArticleInfoPopup = function(e) {
        var section, div, btn, divheight, width, ttop, ptop, pheight, me = e.data.me,
            target = e.target,
            parent = target,
            fnName = arguments.callee.name;
        if (self.loopBreak(fnName, 1638), !me.draggable(e)) {
            for (; !$(parent).hasClass("section") && !$(parent).hasClass("pillar");) self.loopBreak(fnName, 1645), isNaN($(parent).css("zIndex")) ? parent.style.zIndex = 1 : parent.style.zIndex = parseInt($(parent).css("zIndex"), 10) + 1, parent = (target = parent).parentNode;
            if (isNaN($(parent).css("zIndex")) ? parent.style.zIndex = 20 : parent.style.zIndex = parseInt($(parent).css("zIndex"), 10) + 20, $(parent).find("*").each(function(ix, Element) {
                    self.loopBreak(arguments.callee.name, 1663, ix), isNaN($(Element).css("zIndex")) ? Element.style.zIndex = 20 : $(Element).css("zIndex", parseInt($(Element).css("zIndex"), 10) + 20)
                }), section = me._parent.htmlElement, div = document.createElement("div"), (btn = document.createElement("input")).className = "btn", btn.type = "button", btn.value = "", $(btn).css({
                    float: "right",
                    width: "12px",
                    height: "14px",
                    fontSize: "1.2em",
                    position: "absolute",
                    left: "auto",
                    top: "0px",
                    right: "2px",
                    backgroundImage: "url('/images/bin.gif')",
                    backgroundPosition: "center"
                }), $(btn).on("click", {
                    me: me
                }, function() {
                    var fnName = arguments.callee.name;
                    self.loopBreak(fnName, 1695), self.changingStart(fnName), me.remove(), self.changingStop(fnName)
                }), $(div).append(btn), $(div).css({
                    visibility: "hidden",
                    top: -($(section).height() - parseInt($(target).css("bottom"), 10) - 20)
                }), div.className = "info", me.articleInfoContents(div), "" !== div.innerHTML)
                for ((btn = document.createElement("input")).className = "btn", btn.type = "button", btn.value = "Meer...", $(btn).css({
                        float: "right",
                        width: "40px",
                        fontSize: ".9em"
                    }), $(btn).on("click", {
                        me: me
                    }, createArticleInfoDetails), $(div).append(btn), $(target).addClass("hasInfo").append(div), divheight = $(div).height() + parseInt($(div).css("paddingTop"), 10) + parseInt($(div).css("paddingBottom"), 10) + parseInt($(div).css("marginBottom"), 10) + parseInt($(div).css("marginTop"), 10), ttop = $(target).offset().top, ptop = $(section).offset().top, pheight = $(section).height(), ttop < ptop - 20 ? $(div).css("top", ttop - ptop - 20) : ptop + pheight < ttop + divheight ? $(div).css({
                        top: ptop - ttop + pheight - divheight - 5
                    }) : $(div).css({
                        top: -20
                    }), $(div).css({
                        visibility: "",
                        display: "none"
                    }), $(div).fadeIn(300); $(me._skCanvasBuilder.htmlElement).width() < $(div).width() + $(section).width() + parseInt($(section).css("left"), 10) + 60;) self.loopBreak(fnName, 1758, width), width = $(me._skCanvasBuilder.htmlElement).width(), $(me._skCanvasBuilder.htmlElement).width(width + 60)
        }
    }, createArticleInfoDetails = function() {
        self.loopBreak(arguments.callee.name, 1767);
        for (var skBaseElement = this; skBaseElement.parentNode && !$(skBaseElement).data("__class__");) skBaseElement = skBaseElement.parentNode;
        alert("Geen meer gegevens beschikbaar.")
    }, self.setEvents = function() {
        self.loopBreak(arguments.callee.name, 1803), this.articleInfoContents && $(this.htmlElement).on("click", {
            me: this
        }, createArticleInfoPopup), this.setMarkers && $(this.htmlElement).on("mouseenter", {
            me: this
        }, this.setMarkers), $(this.htmlElement).on("mouseleave", {
            me: this
        }, removeInfoPopups), this.setCustomEvents && this.setCustomEvents()
    }, self.registerItem = function() {
        self.loopBreak(arguments.callee.name, 1821)
    }, self.createDOM = function() {
        throw self.loopBreak(arguments.callee.name, 1829, self.__class__ + " ABSTRACT ERROR"), "Abstract Error!"
    }
}

function SKBlockingArticle(parent, name, properties) {
    SKBaseArticle.call(this, parent, name), SKBaseClass.inheritsFrom(this.constructor, SKBaseArticle), this.zIndex = properties.zIndex, this.glueBottomShelve = function() {}, this.glueTopShelve = function() {}, this.loopBreak(arguments.callee.name, 1882)
}

function SKDroppable(accept) {
    var me = this,
        self = this,
        dropAccept = [];
    ! function() {
        self.loopBreak(arguments.callee.name, 1890);
        var i, acceptParamType = typeof accept;
        if ("object" === acceptParamType && Array.isArray(accept) && (acceptParamType = "array"), void 0 !== accept) switch (acceptParamType) {
            case "string":
            case "array":
                for (i = 0; i < accept.length; i++) switch (accept[i]) {
                    case "b":
                    case "back":
                        dropAccept.push("back");
                        break;
                    case "s":
                    case "side":
                    case "w":
                    case "wall":
                        dropAccept.push("side");
                        break;
                    case "d":
                    case "door":
                        dropAccept.push("door")
                }
        }
    }(), self.dropElementGetType = function(draggable, full) {
        self.loopBreak(arguments.callee.name, 1938), void 0 === full && (full = !1);
        var artType, refElement = "img" === draggable[0].tagName ? draggable[0].parentElement : draggable[0];
        return $(refElement).hasClass("back") && (artType = full ? "back" : "b"), ($(refElement).hasClass("wall") || $(refElement).hasClass("side")) && (artType = full ? "side" : "s"), $(refElement).hasClass("door") && (artType = full ? "door" : "d"), $(refElement).hasClass("slidedoor") && (artType = full ? "slidedoor" : "sd"), artType
    }, self.createDroppable = function(me, htmlElement) {
        self.loopBreak(arguments.callee.name, 1970), void 0 === htmlElement && (htmlElement = me.htmlElement), "function" == typeof $.fn.draggable && "function" == typeof $.fn.droppable && $(htmlElement).droppable({
            addClasses: !0,
            hoverClass: "letMeHaveIt",
            tolerance: this instanceof SKArtPillar ? "pointer" : "intersect",
            activeClass: "ui-state-highlight",
            create: this.dropElementCreate,
            activate: this.dropElementActivate,
            deactivate: this.dropElementDeactivate,
            over: this.dropElementOver,
            out: this.dropElementOut,
            drop: this.dropElementDrop,
            disabled: !0
        })
    }, self.dropElementCreate = function() {
        self.loopBreak(arguments.callee.name, 1999), me.log("info", "DROPPABLE.create " + me.htmlElement.id)
    }, self.dropElementActivate = function() {
        self.loopBreak(arguments.callee.name, 2006), me.log("info", "DROPPABLE.activate " + me.htmlElement.id)
    }, self.dropElementDeactivate = function() {
        self.loopBreak(arguments.callee.name, 2013), me.log("info", "DROPPABLE.deactivate " + me.htmlElement.id)
    }, self.dropElementOver = function(event, ui) {
        self.loopBreak(arguments.callee.name, 2020);
        var w = me.htmlElement.clientWidth;
        me.log("info", "DROPPABLE.over " + me.htmlElement.id), ! function(draggable) {
            self.loopBreak(arguments.callee.name, 1928);
            var artType = me.dropElementGetType(draggable, !0);
            return -1 !== $.inArray(artType, dropAccept)
        }(ui.draggable) ? $(this).css({
            cursor: "no-drop"
        }) : (ui.helper.animate({
            width: w,
            height: 50
        }, 400, "swing", function() {
            $(this).css("overflow", "")
        }), $(this).css({
            cursor: "pointer"
        }))
    }, self.dropElementOut = function(event, ui) {
        self.loopBreak(arguments.callee.name, 2041), me.log("info", "DROPPABLE.out " + me.htmlElement.id), ui.helper.css({
            width: ""
        }), $(this).css({
            cursor: ""
        })
    }, self.dropElementDrop = function(event, ui) {
        var section, width, height, itemKey, check, dim, form, table, tr, td, input, label, select, heightSelector, artType = me.dropElementGetType(ui.draggable),
            dimensions = me._skCanvasBuilder._parent.dimensions,
            depth = me._skCanvasBuilder._depth,
            item = me.dropElementGetType(ui.draggable, !0),
            dlg = document.createElement("div"),
            materiaal = [],
            kleur = [],
            no = null,
            needsBr = !1,
            fnName = arguments.callee.name;
        switch (self.loopBreak(fnName, 2066), self.changingStart(fnName), void 0 !== me._getSectionNo ? section = me._getSectionNo() : void 0 !== me.sectionNo && (section = me.sectionNo), me._getSectionWidth && (width = me._getSectionWidth()), me._getSectionHeight ? height = me._getSectionHeight() : void 0 !== me.height && (height = me.height), $(this).css({
            cursor: ""
        }), artType) {
            case "b":
                dlg.title = "Achterwand toevoegen...", itemKey = 2, check = width;
                break;
            case "d":
                dlg.title = "Deur toevoegen...", itemKey = 2, check = width;
                break;
            case "sd":
                dlg.title = "Schuifdeur toevoegen...", itemKey = 2, check = width;
                break;
            case "s":
                dlg.title = "Zijwand toevoegen...", itemKey = 3, check = depth;
                break;
            default:
                dlg.title = "... toevoegen..."
        }
        for (no in check = parseInt(check, 10), dimensions[item])
            if ("number" != typeof(dim = dimensions[item][no])[itemKey] && (dim[itemKey] = parseInt(dim[itemKey], 10)), 4 < dim.length && dim[itemKey] === check) {
                switch (dim[5].toString()) {
                    case "0":
                        materiaal[0] = "gesloten";
                        break;
                    case "1":
                        materiaal[1] = "geperforeerd"
                }
                7 < dim.length && kleur.push(dim[7])
            }
        if (materiaal = materiaal.getUnique(), kleur = kleur.getUnique(), 0 !== materiaal.length) {
            if (heightSelector = function() {
                    var materiaalKeuze, newID = "trAddArticleHeightSelector",
                        items = me._shelving.sections[section].parts[item],
                        i = 0,
                        hoogtes = [];
                    if (self.loopBreak("hsel", 2144), self.changingStart("hsel"), items)
                        for (i in items) height -= items[i].y;
                    for (no in this === window ? (materiaalKeuze = Object.keys(materiaal)[0], Object.keys(kleur)[0]) : "materiaal" === this.name.toLowerCase() ? (materiaalKeuze = this.value, $('input[name="kleur"]:checked').val() || Object.keys(kleur)[0]) : "kleur" === this.name.toLowerCase() && (this.value, (materiaalKeuze = $('input[name="materiaal"]:checked').val()) || (materiaalKeuze = Object.keys(materiaal)[0])), $("#" + newID).remove(), (tr = document.createElement("tr")).id = newID, (td = document.createElement("td")).innerHTML = "Hoogte: ", tr.appendChild(td), td = document.createElement("td"), (select = document.createElement("select")).name = "height", select.size = 0, $(select).on("change", function() {
                            var dlg = this,
                                fnName = "selHeightChange";
                            for (self.loopBreak(fnName, 2181), self.changingStart(fnName); dlg && !$(dlg).hasClass("ui-dialog-content");) dlg = dlg.parentNode;
                            dlg && me.dropElementDialogOK(dlg), self.changingStop(fnName)
                        }), td.appendChild(select), dimensions[item]) isNaN(no) || parseInt(no, 10) != parseInt(no, 10) || 4 < (dim = dimensions[item][no]).length && dim[itemKey] == check && dim[5].toString() == materiaalKeuze && parseInt(dim[4], 10) <= parseInt(height, 10) && -1 === hoogtes.indexOf(dim[4].toString()) && (hoogtes.push(dim[4].toString()), select.size += 1, select.add(new Option(dim[4] + " cm", dim[4].toString())));
                    tr.appendChild(td), table.appendChild(tr), 1 == select.options.length && (select.selectedIndex = 0, $(select).change()), self.changingStop("hsel")
                }, (form = document.createElement("form")).onsubmit = "return false;", (input = document.createElement("input")).type = "hidden", input.name = "artType", input.value = item, form.appendChild(input), table = document.createElement("table"), form.appendChild(table), tr = document.createElement("tr"), table.appendChild(tr), (td = document.createElement("td")).innerHTML = "Materiaal: ", tr.appendChild(td), td = document.createElement("td"), 1 === materiaal.length)(input = document.createElement("input")).type = "hidden", input.name = "materiaal", materiaal[0] ? (input.value = 0, td.appendChild(document.createTextNode(materiaal[0]))) : materiaal[1] && (input.value = 1, td.appendChild(document.createTextNode(materiaal[1]))), td.appendChild(input);
            else
                for (no in materiaal) !1 === isNaN(no) && (needsBr ? $(td).append("<br />") : needsBr = !0, (input = document.createElement("input")).type = "radio", input.name = "materiaal", input.value = no, input.title = materiaal[no], input.id = "ir_materiaal_" + no, $(input).on("change, click", {
                    table: table,
                    materiaal: materiaal
                }, heightSelector), 1 === materiaal.length && (input.selected = "selected"), (label = document.createElement("label")).htmlFor = input.id, label.innerHTML = materiaal[no], td.appendChild(input), td.appendChild(label));
            if (tr.appendChild(td), 0 < kleur.length && "" !== kleur[0]) {
                if (tr = document.createElement("tr"), table.appendChild(tr), (td = document.createElement("td")).innerHTML = "Kleur: ", tr.appendChild(td), td = document.createElement("td"), 1 === kleur.length)(input = document.createElement("input")).type = "hidden", input.name = "kleur", kleur[0] ? (input.value = 0, td.appendChild(document.createTextNode(kleur[0]))) : kleur[1] && (input.value = 1, td.appendChild(document.createTextNode(kleur[1]))), td.appendChild(input);
                else
                    for (no in kleur) !1 === isNaN(no) && (needsBr ? $(td).append("<br />") : needsBr = !0, (input = document.createElement("input")).type = "radio", input.name = "kleur", input.value = kleur[no], input.title = kleur[no], input.id = "ir_kleur_" + no, $(input).on("change, click", {
                        table: table,
                        kleur: kleur
                    }, heightSelector), 1 === kleur.length && (input.selected = "selected"), (label = document.createElement("label")).htmlFor = input.id, label.innerHTML = kleur[no], td.appendChild(input), td.appendChild(label));
                tr.appendChild(td)
            }
            1 === materiaal.length && heightSelector(), $(dlg).append(form), $(dlg).dialog({
                modal: !0,
                buttons: {
                    OK: function() {
                        me.dropElementDialogOK(dlg, form)
                    }
                }
            }), self.changingStop(fnName)
        } else $(dlg).append("Geen onderdelen gevonden die hier ingevoegd kunnen worden...")
    }, self.dropElementDialogOK = function(dlg, form) {
        var h, article, artType, kleur, mat = null,
            depth = me._skCanvasBuilder._depth,
            fnName = arguments.callee.name;
        if (self.loopBreak(fnName, 2365), self.changingStart(fnName), void 0 === form && (form = void 0 !== (form = $(dlg).find("form")) && 0 < form.length ? form[0] : void 0), 'input[name="materiaal"]:checked', form && (mat = parseInt($(form).find('input[name="materiaal"]:checked').val(), 10), isNaN(mat) && (mat = parseInt($(form).find('input[name="materiaal"]').val(), 10)), (kleur = $('input[name="kleur"]:checked').val()) || (kleur = $('input[name="kleur"]').val()), artType = $(form).find('input[name="artType"]').val(), 0 < (h = parseInt(form.elements.height.value, 10)))) {
            switch (artType) {
                case "back":
                    me.back || (me.back = []), article = new SKBaseArticle.back(me, {
                        width: me._getSectionWidth(),
                        height: h,
                        perfo: mat
                    }), me.back.indexOf(article) < 0 && me.back.push(article);
                    break;
                case "side":
                    me.side || (me.side = []), article = new SKBaseArticle.side(me, h, depth, mat), me.side.indexOf(article) < 0 && me.side.push(article);
                    break;
                case "slidedoor":
                    me.door || (me.door = []), article = new SKBaseArticle.slidingDoor(me, {
                        height: h,
                        color: kleur
                    }), me.door.indexOf(article) < 0 && me.door.push(article)
            }
            $(dlg).dialog("close"), $(dlg).remove()
        }
        self.changingStop(fnName)
    }
}

function SKDraggable() {
    var me = this,
        self = this;
    self.dragStart = function(event, ui) {
        self.loopBreak(arguments.callee.name, 2438), this.log("debug", "START dragging"), !event && window.event && (event = window.event), "function" == typeof this._shelveDragStart && this._shelveDragStart(event, ui)
    }, self.drag = function(event, ui) {
        self.loopBreak(arguments.callee.name, 2449), this.log("debug", "START dragging"), "function" == typeof this._shelveDrag && this._shelveDrag(event, ui)
    }, void 0 === self.draggable && (this.draggable = function() {}), self.makeDraggable = function() {
        self.loopBreak(arguments.callee.name, 2463), $.fn.draggable && $.fn.droppable && $(me.htmlElement).draggable({
            axis: "y",
            cancel: ".info",
            scroll: !1,
            containment: me._parent.htmlElement,
            create: me.draggable,
            snapTolerance: 5,
            start: function(event, ui) {
                self.loopBreak(arguments.callee.name, 2476), !event && window.event && (event = window.event), me.draggable(event, ui), ui.__class__ = me, ui.element = me.htmlElement, me.dragStart(event, ui), me._debug.dragging && me.log("debug", me.htmlElement.id + " dragStart")
            },
            drag: function(event, ui) {
                self.loopBreak(arguments.callee.name, 2487), !event && window.event && (event = window.event), me.draggable(event, ui), ui.__class__ = me, ui.element = this.htmlElement, me.drag(event, ui), me._debug.dragging_ && me.log("debug", me.htmlElement.id + " dragging")
            },
            stop: me.draggable
        })
    }
}

function SKCanvasBuilder(parent, htmlCanvasElement, ancestors) {
    var me = this,
        self = this,
        _set_height = function(height) {
            if (void 0 !== height && !isNaN(height)) {
                var elHeight, nwHeight, fnName = arguments.callee.name;
                return self.loopBreak(fnName, 2522, height), self.changingStart(fnName), height !== self._height && (elHeight = $(self.htmlElement).height(), nwHeight = height * self._zoom / 100 + self._paddingTop + 20, $(self.htmlElement).height(Math.max(elHeight, nwHeight)), self._height = Math.max(self._height, height), self._shelving && (self._shelving.height = height, void 0 === self._shelving.base && (self._shelving.base = {}), self._shelving.base.height = height), self._debug.size && self._logging.debug && self.log("debug", "Updating Height (" + height + ")")), self.changingStop(fnName), self._height
            }
        };

    function bindSettingsFormBuilderEvents() {
        self.loopBreak(arguments.callee.name, 2665), $(me._skSettingsFormBuilder).on("click", {
            me: me
        }, me.click), $(me._skSettingsFormBuilder).on("basechange", {
            me: me
        }, me.baseChange), $(me._skSettingsFormBuilder).on("heightchange", {
            me: me
        }, me.heightChange), $(me._skSettingsFormBuilder).on("widthchange", {
            me: me
        }, me.widthChange), $(me._skSettingsFormBuilder).on("depthchange", {
            me: me
        }, me.depthChange), $(me._skSettingsFormBuilder).on("shelvecountchange", {
            me: me
        }, me.shelveCountChange), $(me._skSettingsFormBuilder).on("removesection", {
            me: me
        }, me.removeSection)
    }
    void 0 === ancestors ? ancestors = [SKCanvasBuilder] : ancestors.unshift(SKCanvasBuilder), SKShelvingBaseClass.call(self, parent, "Shelving Canvas", ancestors), (self._skCanvasBuilder = self).htmlElement = htmlCanvasElement, $(self.htmlElement).data("__class__", self), self._debug = {
        shelves: !1,
        size: !1,
        newitem: !0,
        delitem: !0,
        dragging: !1,
        dragging_: !1
    }, void 0 === self._height && (self._height = 0), void 0 === self._paddingTop && (self._paddingTop = 35), void 0 === self._paddingLeft && (self._paddingLeft = 50), void 0 === self._pillarWidth && (self._pillarWidth = 4), void 0 === self._shelveMargin && (self._shelveMargin = .3), void 0 === self._shelveHeight && (self._shelveHeight = 3), void 0 === self._shelveMountSteps && (self._shelveMountSteps = 2.5), void 0 === self._shelveMinDistance && (self._shelveMinDistance = 5), void 0 === self._useTopCarrier && (self._useTopCarrier = !0), void 0 === self._depth && (self._depth = 0), void 0 === self._listeners && (self._listeners = {}), void 0 === self._useAnimation && (self._useAnimation = !0), void 0 === self._useInfoPopups && (self._useInfoPopups = !0), void 0 === self._positions && (self._positions = {}), void 0 === self._useBrace && (self._useBrace = "h"), self.sections = {}, Object.defineProperties ? Object.defineProperties(self, {
        height: {
            get: function() {
                return self._height
            },
            set: _set_height
        }
    }) : self.height = _set_height, self.skShelving = function(skCurrent, skShelving) {
        self.loopBreak(arguments.callee.name, 2693), this.log("info", "Initializing shelving"), this._current = skCurrent, this._shelving = skShelving, this._depth = this._shelving.depth
    }, self.skCanvas = function(skHtmlCanvasElement) {
        self.loopBreak(arguments.callee.name, 2704), this.htmlElement = skHtmlCanvasElement, $(this.htmlElement).data("__class__", this),
            function() {
                self.loopBreak(arguments.callee.name, 2627), $(me.htmlElement).on("click", {
                    me: me
                }, me._canvasEvents._canvasClick), $(me.htmlElement).on("click", ".addsection.right", {
                    me: me
                }, me._canvasEvents._onAddSectionRightClick), $(me.htmlElement).on("mouseenter", ".section", {
                    me: me
                }, me._canvasEvents._onSectionEnter), $(me.htmlElement).on("mouseleave", ".section", {
                    me: me
                }, me._canvasEvents._onSectionLeave), $(me.htmlElement).on("mouseenter", ".pillar", {
                    me: me
                }, me._canvasEvents._onPillarEnter), $(me.htmlElement).on("mouseenter", ".shelveholder", {
                    me: me
                }, me._canvasEvents._onShelveEnter), $(me.htmlElement.parentNode).on("click", "#cfgShowMarkers", {
                    me: me
                }, me.setAllMarkers), $(me.htmlElement.parentNode).on("click", "#cfgShowMaxLoad", {
                    me: me
                }, me.setAllLoads)
            }()
    }, self.skSettingsFormBuilder = function(skSettingsFormBuilderObject) {
        self.loopBreak(arguments.callee.name, 2715), this._skSettingsFormBuilder = skSettingsFormBuilderObject, bindSettingsFormBuilderEvents()
    }, self.zoom = function(pZoom) {
        if (self.loopBreak(arguments.callee.name, 2724, pZoom), pZoom) {
            this.log("info", "Ajust zoom level to: " + pZoom + "%"), this._zoom = pZoom, this.onZoom && this.onZoom(pZoom);
            try {
                $(this).trigger("zoom", [pZoom])
            } catch (err) {
                this.log("warn", err)
            }
            this.newBase()
        }
        return this._zoom
    }, self._empty = function() {
        self.loopBreak(arguments.callee.name, 2745), $(this.htmlElement).empty();
        try {
            $(this).trigger("empty")
        } catch (err) {
            this.log("warn", err)
        }
    }, self.buildSpeedConfig = function(elementid, fieldTitle, items, sectionFieldSelector) {
        var i, option, element = document.getElementById(elementid);
        if (element) {
            for (i in (option = new Option).text = "Kies " + fieldTitle, option.value = "", element.add(option), items) isNaN(i) || ((option = new Option).text = items[i], option.value = option.text, element.add(option));
            $(element).on("change", {}, function(e) {
                var i, newValue = parseInt($(this).val(), 10),
                    fnName = "sel" + fieldTitle + "Change";
                if (self.changingStart(fnName), newValue)
                    for (i in self.sections) switch (fieldTitle) {
                        case "hoogte":
                            self.heightChange(e, self.sections[i]._sectionNo, newValue);
                            break;
                        case "breedte":
                            self._widthChange(e, self.sections[i]._sectionNo, newValue);
                            break;
                        case "diepte":
                            self.depthChange(e, self.sections[i], newValue);
                            break;
                        case "legborden":
                            self.shelveCountChange(e, self.sections[i], newValue)
                    }
                $(".configurator " + sectionFieldSelector).each(function(ix, el) {
                    var c = 0;
                    for (c = 0; c < el.options.length; c++)
                        if (el.options[c].value == newValue) {
                            el.selectedIndex = c;
                            break
                        }
                }), self.changingStop(fnName)
            }), $(".configurator").on("change", sectionFieldSelector, function() {
                var c, h = this.options[this.selectedIndex].value;
                if ($(".configurator " + sectionFieldSelector).each(function(ix, el) {
                        if (0 === $(el).parents("form").length && el.options[el.selectedIndex].value != h) return h = 0, !1
                    }), 0 === h) element.selectedIndex = 0;
                else
                    for (c = 0; c < element.options.length; c++)
                        if (element.options[c].value == h) {
                            element.selectedIndex = c;
                            break
                        }
            }), setTimeout(function() {
                $(".configurator " + sectionFieldSelector).first().change()
            }, 100)
        }
    }, self.build = function() {
        self.loopBreak(arguments.callee.name, 2839), self.log("debug", "Start building"), $("form.settings").hide();
        var i, j, hsizebar, vsizebar, hsizebarText, vsizebarText, secties, addSectionRight, left, props, s, element, option, items, overlay = document.createElement("div"),
            pos = 0,
            me = self,
            paddingLeft = self._paddingLeft,
            pillarWidth = self._pillarWidth,
            zoom = self._zoom,
            dim = self._skLoader.dimensions,
            fnName = arguments.callee.name;
        if (self.changingStart(fnName), self._skPriceCalculator.rebuilding += 100, overlay.className = "overlay", self._empty(), $(self.htmlElement).append('<div class="wall" id="cvWall"></div><div class="floor" id="cvFloor"></div>'), $(self.htmlElement).prepend(overlay), $(self.htmlElement).css({
                overflow: "visible"
            }), $(self.htmlElement).append('<div class="hsizebar"><div class="left"></div><div class="center"></div><div class="right"></div><div class="size"></div></div>'), $(self.htmlElement).append('<div class="vsizebar left"><div class="top"></div><div class="center"></div><div class="bottom"></div><div class="size"></div></div>'), hsizebar = $(self.htmlElement).find(".hsizebar")[0], vsizebar = $(self.htmlElement).find(".vsizebar")[0], hsizebarText = $(hsizebar).find(".size")[0], vsizebarText = $(vsizebar).find(".size")[0], $(".speedconfig").css({
                position: "relative",
                width: 700,
                margin: 20
            }), $(".configHolder").prepend($(".speedconfig")), self.buildSpeedConfig("sSpeedHeight", "hoogte", dim.pillar.h.sort(function(a, b) {
                return a - b
            }), "select.base.height"), self.buildSpeedConfig("sSpeedWidth", "breedte", dim.shelve.l.sort(function(a, b) {
                return a - b
            }), "select.base.width"), self.buildSpeedConfig("sSpeedDepth", "diepte", dim.shelve.w.sort(function(a, b) {
                return a - b
            }), "select.base.depth"), self.buildSpeedConfig("sSpeedShelves", "legborden", [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 26], "select.base.shelves"), element = document.getElementById("sSpeedSections")) {
            for ((option = new Option).text = "Kies secties", option.value = "", element.add(option), i = 1; i < 10; i++) isNaN(i) || ((option = new Option).text = i, option.value = option.text, element.add(option));
            $(element).on("change", {}, function() {
                var i, newValue = parseInt($(this).val(), 10),
                    sections = [];
                if (self.changingStart("selSectionChange"), newValue) {
                    for (i in self.sections) self.sections[i] instanceof SKCanvasSection && sections.push(self.sections[i]);
                    if (sections.length > newValue)
                        for (; sections.length > newValue;) sections.pop().remove();
                    else if (newValue > sections.length)
                        for (i = sections.length; i < newValue; i++) self.newSection(99)
                }
                self.changingStop("selSectionChange")
            })
        }
        if (element = document.getElementById("sSpeedLength")) {
            for ((option = new Option).text = "Kies lengte (m)", option.value = "", element.add(option), items = dim.shelve.l.sort(function(a, b) {
                    return a - b
                }), secties = [], s = 0; s < 10; s++)
                for (i in items)
                    if (!isNaN(i))
                        for (j in items)
                            if (!isNaN(j))
                                for (left in items) isNaN(left) || (secties.push((items[i] + items[j] + items[left]) * s), secties.push(items[i] * s + items[j] + items[left]), secties.push(items[i] + items[j] * s + items[left]), secties.push((items[i] * i + items[j] + items[left]) * s), secties.push(items[i] * s + items[j] * i + items[left]), secties.push(items[i] + items[j] * s + items[left] * i), secties.push((items[i] * i + items[j] * j + items[left]) * s), secties.push(items[i] * s + items[j] * i + items[left] * j), secties.push(items[i] * j + items[j] * s + items[left] * i));
            for (i in s = secties.getUnique().sort(function(a, b) {
                    return a - b
                }), secties = null, s) !isNaN(i) && s[i] && ((option = new Option).value = s[i], option.text = (option.value / 100).toFixed(1) + " m", element.add(option));
            $(element).on("change", {}, function() {
                var i, j, k, val = parseInt($(this).val(), 10),
                    solution = [],
                    sections = [],
                    tryfit = function() {
                        if (1 <= solution.length)
                            for (i in items)
                                if (!isNaN(i)) {
                                    if (solution[solution.length - 1] = items[i], 2 <= solution.length)
                                        for (j in items)
                                            if (!isNaN(j)) {
                                                if (solution[solution.length - 2] = items[j], 3 <= solution.length)
                                                    for (k in items)
                                                        if (!isNaN(k) && (solution[solution.length - 3] = items[k], solution.sum() == val)) break;
                                                if (solution.sum() == val) break
                                            }
                                    if (solution.sum() == val) break
                                }
                    };
                if (self.changingStart("selLengthChange"), val) {
                    for (i in self.sections) self.sections[i] instanceof SKCanvasSection && sections.push(self.sections[i]);
                    for (j in items = dim.shelve.l.sort())
                        if (!isNaN(j) && val / items[j] == Math.floor(val / items[j])) {
                            for (i = val; 0 < i; i -= items[j]) solution.push(items[j]);
                            break
                        }
                    if (!solution.length) {
                        for (; solution.sum() < val;) solution.push(items[0]);
                        solution.sum() > val && (solution.pop(), tryfit()), solution.sum() != val && (solution.push(items[0]), tryfit()), solution.sum() != val && (solution = [])
                    }
                    if (solution.length) {
                        if (sections.length > solution.length)
                            for (; sections.length > solution.length;) sections.pop().remove();
                        else if (solution.length > sections.length)
                            for (i = sections.length; i < solution.length; i++) self.newSection(99);
                        for (i in sections = [], self.sections) self.sections[i] instanceof SKCanvasSection && sections.push(self.sections[i]);
                        for (i in solution) isNaN(i) || self._widthChange(sections[i], solution[i])
                    } else self.log("error", "Configuratie met lengte " + val + " te moeilijk!"), alert("Sorry!\nKan deze configuratie niet geautomatiseerd maken. \nWult u het zelf proberen?")
                }
                self.changingStop("selLengthChange")
            })
        }
        for (secties = Object.size(self._shelving.sections), void 0 !== self._shelving.height && !isNaN(self._shelving.height) && 0 < self._shelving.height && (self._height = self._shelving.height), i = 0; i < secties; i += 1) 10 < self._shelving.sections[i].width && (self.log("info", "Build Section " + (i + 1) + " (" + i + ") of " + secties), props = {
            height: self._shelving.sections[i].height,
            left: pos - self._pillarWidth / 2,
            width: self._shelving.sections[i].width
        }, self.sections[i] = new SKBaseArticle.section(self, i, props), pos += self.sections[i].build(parseInt(i, 10), self._shelving.sections[i].height, self._shelving.sections[i].width, pos - self._pillarWidth / 2), $(hsizebar).width((pos + 2 * self._pillarWidth) * self._zoom / 100), $(hsizebarText).html(pos + self._pillarWidth + " cm"), $(vsizebarText).html(self._height + " cm"), self.loopBreak(arguments.callee.name, 3141));
        $(".depthHelp").hover(function() {
            self.loopBreak(arguments.callee.name, 3147), s = document.createElement("div"), $(this.parentElement).append(s), $(s).css({
                display: "block",
                backgroundColor: "#fff",
                border: "3px outset #058ED2",
                left: "195px",
                margin: "0px",
                padding: "5px",
                position: "absolute",
                zIndex: 30,
                top: "250px",
                width: "350px"
            }), s.className = "explainShelveDepth", $(s).append('<img style="width: 100%" src="' + window.SKBaseFolder + "/images/legborden/Stellingkast_legbord_diep_" + me._depth + '-1.jpg" /><p>De diepte van de kast wordt 2,5cm groter dan de legbord-diepte.</p>')
        }, function() {
            self.loopBreak(arguments.callee.name, 3173), $(s).remove()
        }), $(this.htmlElement).append('<div class="addsection right"><div class="txt">Nieuwe sectie</div></div>'), addSectionRight = $(this.htmlElement).find(".addsection.right")[0], left = (pos + paddingLeft + pillarWidth) * zoom / 100 + 10, $(addSectionRight).css({
            left: left + "px"
        });
        try {
            supports("rotation") || (supports("transform") ? ($(addSectionRight).find(".txt").css({
                transform: "rotate(90deg)",
                "-o-transform": "rotate(90deg)",
                "-moz-transform": "rotate(90deg)",
                "-ms-transform": "rotate(90deg)",
                "-webkit-transform": "rotate(90deg)",
                "-khtml-transform": "rotate(90deg)"
            }), $(vsizebarText).css({
                transform: "rotate(90deg)",
                "-o-transform": "rotate(90deg)",
                "-moz-transform": "rotate(90deg)",
                "-ms-transform": "rotate(90deg)",
                "-webkit-transform": "rotate(90deg)",
                "-khtml-transform": "rotate(90deg)"
            })) : supports("writingMode") ? ($(addSectionRight).find(".txt").css({
                writingMode: "tb-rl",
                height: 100,
                width: 15,
                margin: "-50px 10px 0 0"
            }), $(vsizebarText).css({
                writingMode: "tb-rl",
                height: 50,
                width: 15,
                margin: "-15px 0 0 15px"
            })) : supports("filter") && ($(addSectionRight).find(".txt").css({
                filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"
            }), $(vsizebarText).css({
                filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"
            })))
        } catch (err) {
            this.log("warn", err)
        }
        try {
            this._skPriceCalculator._dirty = !1
        } catch (err) {
            this.log("warn", err)
        }
        $("#cvWall, #cvFloor").append('<form action="#" method="GET" onsubmit="return false;"></form>'), "function" == typeof $("#cvWall").colorpicker && ($("#cvWall form, #cvFloor form").append('<input type="image" class="colorPicker" src="/images/color-picker.png" title="Klik op de kleurenwaaier om de achtergrondkleur te wijzigen." width="16" alt="Kies een kleur..." />'), $("#cvWall .colorPicker").colorpicker({
            alpha: !0,
            autoOpen: !1,
            minWidth: 500,
            modal: !1,
            inline: !1,
            color: $("#cvWall").css("background-color"),
            title: "Kies een kleur...",
            revert: !0,
            init: function(event, color) {
                var wallColor = $("#cvWall").css("background-color");
                self.loopBreak(arguments.callee.name, 3264, wallColor), void 0 !== color.colorPicker && "function" == typeof color.colorPicker.setColor && color.colorPicker.setColor(wallColor)
            },
            select: function(event, color) {
                self.loopBreak(arguments.callee.name, 3272, color ? color.formatted : "")
            },
            close: function(event, color) {
                self.loopBreak(arguments.callee.name, 3275, color ? color.formatted : "")
            },
            ok: function(event, color) {
                self.loopBreak(arguments.callee.name, 3278, color ? color.formatted : "");
                $("div.configurator .wall, div.configurator div.hsizebar .size, div.configurator div.section .width .size, div.configurator div.vsizebar .size").css({
                    backgroundColor: "#" + color.formatted
                })
            },
            open: function(event, color) {
                $(".section.active").removeClass("active"), self.loopBreak(arguments.callee.name, 3290, color ? color.formatted : "")
            },
            cancel: function(event, color) {
                self.loopBreak(arguments.callee.name, 3293, color ? color.formatted : "")
            }
        }), $("#cvFloor .colorPicker").colorpicker({
            alpha: !0,
            autoOpen: !1,
            minWidth: 500,
            modal: !1,
            inline: !1,
            color: $("#cvFloor").css("background-color"),
            title: "Kies een kleur...",
            revert: !0,
            init: function(event, color) {
                self.loopBreak(arguments.callee.name, 3306, color ? color.formatted : "");
                var floorColor = $("#cvFloor").css("background-color");
                void 0 !== color.colorPicker && "function" == typeof color.colorPicker.setColor && color.colorPicker.setColor(floorColor)
            },
            select: function(event, color) {
                self.loopBreak(arguments.callee.name, 3315, color ? color.formatted : "")
            },
            close: function(event, color) {
                self.loopBreak(arguments.callee.name, 3319, color ? color.formatted : "")
            },
            ok: function(event, color) {
                self.loopBreak(arguments.callee.name, 3323, color ? color.formatted : ""), $("#cvFloor").css({
                    backgroundColor: "#" + color.formatted
                }), $("div.configurator div.fixBackStartHeight").css({
                    backgroundColor: "#" + color.formatted
                }), self.loopBreak(arguments.callee.name, 3330, color ? color.formatted : "")
            },
            open: function(event, color) {
                self.loopBreak(arguments.callee.name, 3333, color ? color.formatted : ""), $(".section.active").removeClass("active")
            },
            cancel: function(event, color) {
                self.loopBreak(arguments.callee.name, 3337, color ? color.formatted : "")
            }
        })), self.loopBreak(arguments.callee.name, 3342), 0 != (64 & me.clientRole) && ($("#cvWall form").append('<input type="image" class="save" src="/images/save16.png" width="16" height="16" alt="Opslaan" title="Sla de configuratie op voor later gebruik" />'), $("#cvWall form .save").on("click", function() {
            var section, sectionNo, part, item, itemID, save = {},
                fnName = arguments.callee.name;
            for (sectionNo in self.loopBreak(fnName, 3354), self.changingStart(fnName), save.bg = $("#cvWall").css("background-color"), save.flr = $("#cvFloor").css("background-color"), save.w = me._shelving.width, save.h = me._shelving.height, save.d = me._shelving.depth, save.s = me._shelving.shelves, me._shelving.sections)
                if (self.loopBreak(arguments.callee.name, 3364, sectionNo), !isNaN(sectionNo))
                    for (part in section = me._shelving.sections[sectionNo], save["s" + sectionNo] = {}, save["s" + sectionNo].w = section.width, save["s" + sectionNo].h = section.height, save["s" + sectionNo].p = [], section.parts) switch (typeof section.parts[part]) {
                        case "string":
                        case "number":
                        case "function":
                            break;
                        case "object":
                        case "array":
                            for (itemID in section.parts[part]) switch (typeof(item = section.parts[part][itemID])) {
                                case "object":
                                case "array":
                                    save["s" + sectionNo].p.push([parseInt(item.id, 10), parseInt(item.position, 10), parseInt(item.count, 10)])
                            }
                    }
            section = self.compress(save, 9), me._skPriceCalculator.uploadImage('{"id":"' + section + '"}', this, !1), me.set("SK.Saved." + section, save), alert("Met de volgende link kunt u de configuratie heropenen: \n" + window.location.protocol + "//" + window.location.hostname + window.location.pathname + "?build=" + encodeURIComponent(section)), self.changingStop(fnName)
        })), this._updateSizeText(), this._skPriceCalculator.rebuilding -= 100, this._addBraces(), $(overlay).remove(), $(".section.active").removeClass("active"), $(this).trigger("ready");
        try {
            this._skPriceCalculator._dirty = !1
        } catch (err) {
            this.log("warn", err)
        }
        self.changingStop(fnName)
    }, self.newSection = function(pos, height, width, left) {
        self.loopBreak(arguments.callee.name, 3441, pos);
        var section, leftSection, s, sectionRightPos, sectionLeftPos = 0,
            props = {
                height: height,
                width: width,
                left: left
            };
        for (s in leftSection = (section = new SKBaseArticle.section(this, pos, props)).getLeftSection(), this.sections) sectionLeftPos += this.sections[s]._getSectionWidth();
        return sectionRightPos = sectionLeftPos, pos = section._getSectionNo(), this.sections[pos] = section, sectionRightPos += this.sections[pos].build(parseInt(pos, 10), leftSection.height, leftSection.width, sectionLeftPos - this._pillarWidth / 2), this.log("debug", "New Right pos: " + sectionRightPos), width
    }, self.newPillar = function(pos, height, left, id, object, callback) {
        self.loopBreak(arguments.callee.name, 3472, pos);
        var pillar;
        return pillar = new SKBaseArticle.pillar(self, pos, height, left, id, object, callback), this._debug.newitem && this.log("debug", "New Pillar (" + pos + "); " + height + "cm at " + left + "px."), pillar._pillarWidth
    }, self.newShelve = function(section, no, bottom, set) {
        self.loopBreak(arguments.callee.name, 3493, no), "number" == typeof section && (section = this.sections[section]), this.shelves || (this.shelves = []), this.shelves.push(new SKBaseArticle.shelve(section, {
            no: no,
            position: bottom,
            set: set
        }))
    }, self._get_positions = function(section, shelvecount) {
        self.loopBreak(arguments.callee.name, 3506, shelvecount);
        var height, maxHeight, h, positions, i, sectionNo, mountSteps = self._shelveMountSteps;
        if (isNaN(section) ? sectionNo = section._getSectionNo() : (sectionNo = parseInt(section, 10), section = self.sections[sectionNo]), (void 0 === shelvecount || shelvecount < 1) && (self._shelving && self._shelving.sections && self._shelving.sections[sectionNo] && self._shelving.sections[sectionNo].parts && self._shelving.sections[sectionNo].parts.shelve ? (shelvecount = self._shelving.sections[sectionNo].parts.shelve, shelvecount = Object.size(shelvecount)) : shelvecount = $("#section_" + sectionNo + ".shelveholder").length), height = self._shelving && self._shelving.sections[sectionNo] && self._shelving.sections[sectionNo].height ? self._shelving.sections[sectionNo].height : 100 * $("#section_" + sectionNo).height() / self._zoom, maxHeight = 5 * Math.ceil((height - (5 + self._shelveHeight + 3)) / 5), h = self._useTopCarrier ? height - self._shelveHeight : height - self._shelveHeight - self._shelveMinDistance, maxHeight = Math.floor(h / mountSteps), maxHeight = Math.floor(maxHeight * mountSteps), self._positions && self._positions.eq && self._positions.eq[height] && self._positions.eq[height][shelvecount]) return {
            height: height,
            maxHeight: maxHeight,
            positions: self._positions.eq[height][shelvecount]
        };
        for ((positions = []).push(Math.ceil(mountSteps), maxHeight), shelvecount < $("#section_" + sectionNo + " .shelveholder").length && (shelvecount = $("#section_" + sectionNo + " .shelveholder").length), i = Math.ceil(mountSteps); i < maxHeight; i += (maxHeight - mountSteps) / (shelvecount - 1)) try {
            h = Math.ceil(Math.floor(i / mountSteps) * mountSteps), -1 === positions.indexOf(h) && positions.push(h)
        } catch (err) {
            self.log("warn", err)
        }
        return self._positions || (self._positions = {}), self._positions.eq || (self._positions.eq = {}), self._positions.eq[height] || (self._positions.eq[height] = {}), {
            height: height,
            maxHeight: maxHeight,
            positions: self._positions.eq[height][shelvecount] = positions
        }
    }, self.setAllMarkers = function(e) {
        self.loopBreak(arguments.callee.name, 3618), 0 < $(e.data.me.htmlElement).find(".marker").length ? ($(e.data.me.htmlElement).find(".marker").remove(), $(e.data.me.htmlElement).find(".maxload").remove()) : ($(e.data.me.htmlElement).find(".shelveholder").each(function(index, Element) {
            self.loopBreak(arguments.callee.name, 3625), $(Element).data("nodouble", 1), $(Element).trigger("mouseenter", {
                me: e.data.me,
                shelve: Element,
                nodouble: !0
            }), $(Element).removeData("nodouble")
        }), $(".shelveInfo").remove(), $(".shelveholder.hasInfo").removeClass("hasInfo"))
    }, self.setAllLoads = function(e) {
        self.loopBreak(arguments.callee.name, 3642), 0 < $(e.data.me.htmlElement).find(".maxload").length && $(e.data.me.htmlElement).find(".maxload").remove()
    }, self._widthChange = function(section, newValue) {
        var sectionNo, diff, me = this,
            fnName = arguments.callee.name;
        if (self.loopBreak(fnName, 3654, newValue), self.changingStart(fnName), section instanceof SKCanvasSection ? sectionNo = section._getSectionNo() : isNaN(section) || (sectionNo = parseInt(section, 10), section = this.sections[sectionNo]), diff = section.changeWidth(newValue), !isNaN(diff) && 0 !== diff) {
            $(this.htmlElement).find(".section, .pillar").each(function(index, Element) {
                self.loopBreak(arguments.callee.name, 3668, index);
                var newLeft, no = parseInt(Element.id.split("_")[1], 10),
                    oldLeft = $(Element).css("left");
                if (sectionNo < no && (newLeft = parseInt($(Element).css("left"), 10) - diff, this._useAnimation ? $(Element).animate({
                        left: newLeft + "px"
                    }, 400, "swing", function() {
                        self.loopBreak(arguments.callee.name, 3682), $(this).css("overflow", "")
                    }) : $(Element).css({
                        left: newLeft + "px"
                    }), $(Element).hasClass("section"))) try {
                    $(me).trigger("sectionleftchange", [no, oldLeft - me._paddingLeft, newLeft - me._paddingLeft])
                } catch (err) {
                    me.log("warn", err)
                }
            }), $(this.htmlElement).find(".addsection.right").css({
                left: parseInt($(this.htmlElement).find(".addsection.right").css("left"), 10) - diff + "px"
            }), this._updateSizeText();
            try {
                $(this).trigger("sectionresize", [sectionNo, newValue + diff, newValue])
            } catch (err) {
                this.log("warn", err)
            }
        }
        self.changingStop(fnName)
    }, self._shelveDragStart = function() {
        self.loopBreak(arguments.callee.name, 3724)
    }, self._shelveDrag = function(event, ui) {
        var pos, s = $(ui.shelveholder).find(".shelve")[0].id.split("_"),
            clientH = this._shelveHeight,
            fnName = arguments.callee.name;
        self.loopBreak(fnName, 3734), self.changingStart(fnName), ui.shelveholder.clientHeight && (clientH = ui.shelveholder.clientHeight), pos = $(ui.shelveholder.parentNode).height() - ui.position.top - clientH - 1, $("input[name='shelving[" + ui.canvas._current + "][" + s[1] + "][shelves][" + s[2] + "]']").val(pos), ui.canvas._shelving ? (ui.canvas._shelving.sections[s[1]] || (ui.canvas._shelving.sections[s[1]] = []), ui.canvas._shelving.sections[s[1]].shelves || (ui.canvas._shelving.sections[s[1]].shelves = []), ui.canvas._shelving.sections[s[1]].shelves[s[2]] || (ui.canvas._shelving.sections[s[1]].shelves[s[2]] = []), ui.canvas._shelving.sections[s[1]].shelves[s[2]].pos = pos) : ui.canvas._logging.error && ui.canvas.log("error", "No shelving setup connected to change these settings");
        try {
            $(ui.canvas).trigger("shelvedrag", [s[1], s[2], pos])
        } catch (err) {
            this.log("warn", err)
        }
        try {
            $(ui.shelveholder).find(".info .pos").text(pos)
        } catch (err) {
            this.log("warn", err)
        }
        self.changingStop(fnName)
    }, self.delShelve = function(section, no, bottom) {
        self.loopBreak(arguments.callee.name, 3819, no);
        var shelve, shelveholder = $("#shelveholder_" + section + "_" + no);
        if (0 < $(shelveholder).length) {
            shelveholder = $(shelveholder)[0], shelve = $(shelveholder).find(".shelve")[0];
            try {
                $(this).trigger("delarticle", ["shelve", shelve.id, section, parseInt($(shelveholder).css("bottom"), 10), $(shelveholder).width(), this._shelveHeight, this._depth]), $(this).trigger("delshelve", [section, no, bottom])
            } catch (err) {
                this.log("warn", err)
            }
            $(shelveholder).data("__class__").remove()
        }
    }, self.moveWall = function() {
        self.loopBreak(arguments.callee.name, 3855)
    }, self._addShelves = function(section) {
        self.loopBreak(arguments.callee.name, 3861, section);
        var s, prevSection, positions, sectionNo, shelveList, bottom = 0,
            minShelves = 2,
            maxShelves = 20,
            shelves = 0;
        if (section instanceof SKCanvasSection ? sectionNo = section._getSectionNo() : (sectionNo = section, section = this.sections[sectionNo]), this._shelving && this._shelving.sections[sectionNo])
            if (0 < this._shelving.sections[sectionNo].height && (maxShelves = this._shelving.sections[sectionNo].height / 15), this._shelving.sections[sectionNo].shelves) shelves = Object.size(this._shelving.sections[sectionNo].shelves);
            else if (this._shelving.sections[sectionNo] && this._shelving.sections[sectionNo].parts && this._shelving.sections[sectionNo].parts.shelve) shelves = Object.size(this._shelving.sections[sectionNo].parts.shelve);
        else if (this._shelving.sections[sectionNo]["#shelves"]) shelves = parseInt(this._shelving.sections[sectionNo]["#shelves"], 10);
        else try {
            if (prevSection = sectionNo - 1, this._shelving.sections) {
                for (; 0 <= prevSection && (!this._shelving.sections[prevSection] || !this._shelving.sections[prevSection].parts || !this._shelving.sections[prevSection].parts.shelve);) this.loopBreak(arguments.callee.name, 3901), prevSection--;
                this._shelving.sections[prevSection] && this._shelving.sections[prevSection].parts && this._shelving.sections[prevSection].parts.shelve && (minShelves = Object.size(this._shelving.sections[prevSection].parts.shelve))
            }
        } catch (err) {
            this.log("warn", err)
        }
        shelves || (shelves = Math.ceil(this._shelving.shelves)), maxShelves < shelves && (shelves = Math.floor(maxShelves)), this._debug.shelves && this.log("debug", "Adding " + shelves + " shelves for section " + sectionNo), positions = this._get_positions(sectionNo, Math.max(shelves, minShelves)).positions;
        try {
            void 0 === (shelveList = this._shelving.sections[sectionNo].shelves) && (shelveList = this._shelving.sections[sectionNo].parts.shelve)
        } catch (ignore) {}
        for (s in shelveList) {
            switch (typeof shelveList[s]) {
                case "object":
                case "array":
                    break;
                default:
                    continue
            }
            if ($("#section_" + sectionNo).find(".shelve").length > shelves) break;
            shelveList[s] && shelveList[s].pos ? (bottom = shelveList[s].pos / this._shelveMountSteps * this._shelveMountSteps, 1) : (bottom = positions[$("#section_" + sectionNo).find(".shelve").length], 0), bottom < positions[0] && (bottom = positions[0]);
            try {
                new SKBaseArticle.shelve(section, shelveList[s], s)
            } catch (err) {
                this._logging.warn && this.log("warn", err)
            }
        }
        for (s = $("#section_" + sectionNo).find(".shelve").length; s < shelves; s++) try {
            new SKBaseArticle.shelve(section, {
                no: s,
                position: positions[s],
                set: 0
            }, "shelve_" + sectionNo + "_" + s)
        } catch (err) {
            this.log("warn", err)
        }
        for (s = shelves; s < minShelves; s++) try {
            new SKBaseArticle.shelve(section, {
                no: s,
                position: positions[s],
                set: 0
            }, "shelve_" + sectionNo + "_" + s)
        } catch (err) {
            this.log("warn", err)
        }
        if (section.parts)
            for (s = 0; s < section.parts.length; s++) section.parts[s] instanceof SKArtShelve && section.parts[s].preventSamePlace()
    }, self._addBacks = function(section) {
        var back, backNo, sectionNo;
        if (self.loopBreak(arguments.callee.name, 4008, section), section instanceof SKCanvasSection ? sectionNo = section._getSectionNo() : (sectionNo = section, section = this.sections[sectionNo]), this._shelving && this._shelving.sections && this._shelving.sections[sectionNo] && this._shelving.sections[sectionNo].parts && this._shelving.sections[sectionNo].parts.back)
            for (backNo in this._shelving.sections[sectionNo].parts.back) back = this._shelving.sections[sectionNo].parts.back[backNo], SKBaseArticle.back ? new SKBaseArticle.back(section, back, backNo) : new SKArtBack(section, back, backNo)
    }, self._addDoors = function(section) {
        var door, doorNo, sectionNo;
        if (self.loopBreak(arguments.callee.name, 4060, section), section instanceof SKCanvasSection ? sectionNo = section._getSectionNo() : (sectionNo = section, section = this.sections[sectionNo]), this._shelving && this._shelving.sections && this._shelving.sections[sectionNo] && this._shelving.sections[sectionNo].parts) {
            if (this._shelving.sections[sectionNo].parts.door)
                for (doorNo in this._shelving.sections[sectionNo].parts.door)
                    if (door = this._shelving.sections[sectionNo].parts.door[doorNo], SKBaseArticle.door) new SKBaseArticle.door(section, door, doorNo);
                    else try {
                        new SKCanvasBuilderDoor(section, door.x, door.y, door.perfo, door.pos | door.position)
                    } catch (ignore) {}
            if (this._shelving.sections[sectionNo].parts.slidingDoor)
                for (doorNo in this._shelving.sections[sectionNo].parts.slidingDoor)
                    if (door = this._shelving.sections[sectionNo].parts.slidingDoor[doorNo], SKBaseArticle.slidingdoor) new SKBaseArticle.slidingdoor(section, door, doorNo);
                    else try {
                        new SKArtSlidingDoor(section, door, doorNo)
                    } catch (ignore) {}
        }
    }, self._addBraces = function(section, width) {
        self.loopBreak(arguments.callee.name, 4111, section);
        var sectionNo, brace, needed, sectHeight, parts, part, braces = [],
            braceList = [],
            braceCount = 0;
        if (void 0 === section) {
            for (section in this._shelving.sections)
                for (part in section = parseInt(section, 10), braceCount += this._addBraces(section), $(me._skCanvasBuilder).trigger("delarticle", ["foot", "pillar_" + section, section, 0, me._skCanvasBuilder._pillarWidth, 0, me._skCanvasBuilder._depth]), parts = [], me.sections.hasOwnProperty(section) && (parts = me.sections[section].parts), parts) console.log(parts[part].__class__), parts[part].__class__;
            return braceCount ? ($(".geenSchoor").hide(), $("ul.kiesSchoor").show()) : ($(".geenSchoor").show(), $("ul.kiesSchoor").hide()), braceCount
        }
        if (section instanceof SKCanvasSection) sectionNo = section._getSectionNo();
        else if (sectionNo = section, void 0 === (section = this.sections[sectionNo])) return 0;
        for (brace in void 0 === width && (width = section._getSectionWidth()), section.parts) section.parts[brace] instanceof SKArtBrace && braces.push(section.parts[brace]);
        for (brace in this._shelving.sections[sectionNo].parts)
            if ("brace" === brace.substr(0, 5).toLowerCase()) {
                for (braceCount in (parts = this._shelving.sections[sectionNo].parts)[brace]) switch (typeof parts[brace][braceCount]) {
                    case "object":
                    case "array":
                        braceList.push(parts[brace][braceCount]), braceList[braceList.length - 1].objId = braceCount, needed = 1 < (needed = brace.split(" ")).length ? needed[1] : brace.substr(5), braceList[braceList.length - 1].objGroup = needed, needed = void 0
                }
                parts[brace] = null
            }
        if (braces.length < braceList.length) {
            for (; 0 < braces.length;)(brace = braces.pop()).remove();
            for (; 0 < braceList.length;) {
                if (braceCount = (brace = braceList.pop()).objGroup.toUpperCase(), void 0 !== brace.item) switch (brace.item.type) {
                    case "16":
                        braceCount = "X";
                        break;
                    case "17":
                        braceCount = "H"
                }
                switch (void 0 === SKArtBraceH && (braceCount = "X"), braceCount) {
                    case "X":
                        new SKArtBraceX(section, brace, brace.objId);
                        break;
                    case "H":
                        new SKArtBraceH(section, brace, brace.objId)
                }
            }
        } else if (me._skPriceCalculator.rebuilding < 10) {
            if (section.removeBraces(), !(needed = section.needsBrace())) return 0;
            sectHeight = this._getSectionHeight(section), brace = ("h" === this._useBrace || sectHeight < 110) && void 0 !== SKArtBraceH ? new SKArtBraceH(section) : new SKArtBraceX(section)
        }
        return void 0 === brace ? 0 : ($(".geenSchoor").hide(), $("ul.kiesSchoor").show(), 1)
    }, self._updateSizeText = function() {
        var sectionLength, targetWidth, hsizebar = $(this.htmlElement).find(".hsizebar")[0],
            vsizebar = $(this.htmlElement).find(".vsizebar")[0],
            hsizebarText = $(hsizebar).find(".size")[0],
            vsizebarText = $(vsizebar).find(".size")[0],
            height = this._height,
            width = 0,
            me = this;
        self.loopBreak(arguments.callee.name, 4239), $(this.htmlElement).find(".pillar, .section").each(function(index, Element) {
            self.loopBreak(arguments.callee.name, 4242, index), $(Element).hasClass("section") && (width += parseInt($(Element).find(".width .size").text(), 10))
        }), height = 5 * parseInt(height / 5, 10), width += this._pillarWidth, $(hsizebar).width((width + this._pillarWidth) * this._zoom / 100), targetWidth = $(hsizebar).width() + this._paddingLeft + 60, .99 * parseInt($(this.htmlElement.parentNode).width(), 10) < targetWidth ? $(this.htmlElement).width(targetWidth) : $(this.htmlElement).width(""), $(this.htmlElement.parentNode).width(Math.max(Math.max($(hsizebar).width() + this._paddingLeft + 52, this._containerWidth), 500)), sectionLength = $(this.htmlElement).find(".section").length, this._debug.size && this.log("debug", "Bereken breedte op: " + (width + sectionLength * this._shelveMargin)), $(hsizebarText).html(parseInt(width + sectionLength * this._shelveMargin, 10) + ' cm&nbsp; <a class="infoWidth" href="#" fancybox>i</a>'), $(vsizebar).css({
            top: "auto",
            height: height * me._zoom / 100
        }), 0 < height && ($(vsizebarText).html(height + " cm"), $(this.htmlElement).stop(!0, !1), $(this.htmlElement).animate({
            height: parseInt(height, 10) + 60
        }, "slow", function() {
            self.loopBreak(arguments.callee.name, 4282), $(me.htmlElement).css({
                overflow: "visible"
            })
        })), this._shelving.width = width, this._shelving.height = height, $("table.specs td.width").html('<span class="value">' + parseInt(width + sectionLength * this._shelveMargin, 10) + '</span><span class="unit"> cm</span>'), $("table.specs td.height").html('<span class="value">' + height + '</span><span class="unit"> cm</span>'), $("table.specs td.depth").html('<span class="value" title="Inclusief 2.5 cm voor schroeven en staanders">' + (me._depth + 2.5) + '</span><span class="unit"> cm</span>')
    }, self._getSectionHeight = function(section) {
        var sectionNo;
        if (self.loopBreak(arguments.callee.name, 4303, section), section instanceof SKCanvasSection) sectionNo = section._getSectionNo();
        else if (sectionNo = section, void 0 === (section = this.sections[sectionNo])) return 0;
        return this._shelving && this._shelving.sections[sectionNo] && this._shelving.sections[sectionNo].height ? this._shelving.sections[sectionNo].height : 0
    }, self._skSettingsFormBuilder && bindSettingsFormBuilderEvents(), self.click = function() {
        self.loopBreak(arguments.callee.name, 4331)
    }, self.baseChange = function(e, basetype, section, newValue) {
        var i = 0,
            j = 0,
            sum = 0,
            sections = [],
            fnName = arguments.callee.name;
        for (i in self.loopBreak(fnName, 4339, basetype + " := " + newValue), self.changingStart(fnName), self.sections) self.sections[i] instanceof SKCanvasSection && (sections.push(self.sections[i]), sum += self.sections[i].width);
        switch ($("#sSpeedSections").val(sections.length), $("#sSpeedLength").val(sum), sum = 0, basetype) {
            case "height":
                for (i in sections)
                    if (!isNaN(i) && sections[i]._sectionNo != section && sections[i].height != newValue) {
                        newValue = 0;
                        break
                    }
                $("#sSpeedHeight").val(newValue);
                break;
            case "width":
                for (i in sections)
                    if (!isNaN(i) && sections[i]._sectionNo != section && sections[i].width != newValue) {
                        newValue = 0;
                        break
                    }
                $("#sSpeedWidth").val(newValue);
                break;
            case "depth":
                $("#sSpeedDepth").val(newValue);
                break;
            case "shelves":
                for (i in sections)
                    if (!isNaN(i))
                        if (sections[i]._sectionNo == section) sum += parseInt(newValue, 10);
                        else
                            for (j in sections[i].parts) !isNaN(j) && sections[i].parts[j] instanceof SKArtShelve && sum++;
                $("#sSpeedShelves").val(Math.floor(sum / sections.length))
        }
        self.changingStop(fnName)
    }, self.heightChange = function(e, section, newValue) {
        var me = null,
            fnName = arguments.callee.name;
        if (self.loopBreak(fnName, 4420, newValue), self.changingStart(fnName), e && e.data && e.data.me ? me = e.data.me : void 0 !== this.htmlElement ? me = this : e && e.htmlElement && (me = e), newValue < 0) {
            if (!(me._shelving && me._shelving.sections && me._shelving.sections[section] && me._shelving.sections[section].height)) return void self.changingStop(fnName);
            newValue = me._shelving.sections[section].height
        }
        newValue = parseFloat(newValue), me.sections && me.sections[section] && 0 < newValue && parseFloat(me.sections[section].height) !== newValue && me.sections[section].heightChange(newValue), self.changingStop(fnName)
    }, self.widthChange = function(e, section, newValue) {
        var fnName = arguments.callee.name;
        self.loopBreak(fnName, 4459, newValue), self.changingStart(fnName), e.data.me._widthChange(section, newValue), self.changingStop(fnName)
    }, self.depthChange = function(e, section, newValue) {
        var sectionNo, partNo, part, parts, article, changingFnId, me = e.data.me,
            fnName = "scSeDepth";
        for (changingFnId in self.loopBreak && self.loopBreak(fnName, 4471, newValue), SKBaseClass.instances.changingFunctionList)
            if (SKBaseClass.instances.changingFunctionList[changingFnId] == fnName) return void!0;
        for (sectionNo in self.changingStart(fnName), me || (me = self), me instanceof SKCanvasSection && (me = me._skCanvasBuilder), me._depth = parseInt(newValue, 10), me.depth = newValue, me.sections)
            if (self.loopBreak(arguments.callee.name, 4493, sectionNo), me.sections[sectionNo] instanceof SKCanvasSection) {
                for (partNo in parts = [], me.sections[sectionNo].parts) self.loopBreak(arguments.callee.name, 4497, partNo), (part = me.sections[sectionNo].parts[partNo]) instanceof SKArtShelve && parts.push(part);
                for (partNo in parts) self.loopBreak(arguments.callee.name, 4504, partNo), parts[partNo] instanceof SKArtShelve && parseInt(parts[partNo].depth, 10) !== me._depth && ((part = parts[partNo]).remove(), part = new SKBaseArticle.shelve(me.sections[sectionNo], {
                    no: part.no,
                    position: part.position,
                    set: part.set
                }))
            }
        for (sectionNo in $("select.base.depth").each(function(index, Element) {
                self.loopBreak(arguments.callee.name, 4519, index);
                var outer = $(Element).parents(".settings.outer"),
                    oldval = $(Element).val(),
                    visualElement = Element;
                $(outer).show(), oldval != newValue && $(Element).val(newValue).change(), $(Element).data("select2") && (visualElement = $(Element).data("select2").$container), void 0 !== $.fn.blink ? $(visualElement).blink(0, 3, function() {
                    self.loopBreak(arguments.callee.name, 4552), setTimeout(function() {
                        $(outer).hide(), $(outer).css({
                            display: ""
                        })
                    }, 500)
                }) : setTimeout(function() {
                    $(outer).hide(), $(outer).css({
                        display: ""
                    })
                }, 500)
            }), $(me.htmlElement).find(".shelveholder").each(function(index, Element) {
                self.loopBreak(arguments.callee.name, 4571, index);
                var bottom = $(Element).css("bottom"),
                    s = parseInt(Element.id.split("_")[1], 10),
                    selector = "#section_" + s + " .width .size";
                $(Element).attr("shelvepos") && (bottom = $(Element).attr("shelvepos"));
                try {
                    $(me._skCanvasBuilder).trigger("changearticle", ["shelve", $(Element).find(".shelve")[0].id, s, bottom, parseInt($(me.htmlElement).find(selector).text(), 10), me._shelveHeight, newValue])
                } catch (err) {
                    me.log("warn", err)
                }
            }), me._shelving.depth = newValue, me.sections) me.sections[sectionNo].depth = newValue, me._shelving.sections[sectionNo].depth = newValue;
        $(me.htmlElement).find(".side").each(function(index, Element) {
            self.loopBreak(arguments.callee.name, 4599, index);
            var side = $(Element).data("__class__"),
                pillar = side._parent;
            side.remove(), pillar.side || (pillar.side = []), article = new SKArtSide(pillar, side.height, newValue, side.perfo, side.position), pillar.side.push(article)
        }), $(me.htmlElement).find(".pillar").each(function(index, Element) {
            var s = parseInt(Element.id.split("_")[1], 10);
            self.loopBreak(arguments.callee.name, 4611, index);
            try {
                $(me._skCanvasBuilder).trigger("changearticle", ["pillar", Element.id, s, 0, self._pillarWidth, Object.defineProperties ? self.height : self._height, newValue])
            } catch (err) {
                me.log("warn", err)
            }
        }), this._updateSizeText(), self.changingStop(fnName)
    }, self.shelveCountChange = function(e, section, newValue) {
        var eSection, shelveCount, holder, me = e.data.me,
            sectionNo = section,
            i = 0,
            fnName = arguments.callee.name;
        if (self.loopBreak(fnName, 4636, newValue), self.changingStart(fnName), me || (me = section), me instanceof SKCanvasSection ? me = (section = me)._skCanvasBuilder : me instanceof SKCanvasBuilder && (section = me.sections[sectionNo]), isNaN(sectionNo) && (sectionNo = section._sectionNo), eSection = section.htmlElement, (shelveCount = $(eSection).find(".shelveholder").length) < newValue)
            for (i = shelveCount; i < newValue; i++) me.newShelve(sectionNo, i);
        else if (newValue < shelveCount)
            for (i = shelveCount; newValue <= i; i--) 0 < (holder = $("#shelveholder_" + sectionNo + "_" + i)).length && !holder.hasClass("set") && $(holder[0]).data("__class__").remove();
        $(eSection).find(".shelveholder").each(function(index, Element) {
            self.loopBreak(arguments.callee.name, 4669, index), parseInt($(Element).css("bottom"), 10) > section._height - 5 && $(Element).data("__class__").preventSamePlace(), $(Element).hasClass("set") || $(Element).data("__class__").move(-10)
        }), $(eSection).find(".shelveholder").each(function(index, Element) {
            self.loopBreak(arguments.callee.name, 4679, index), $(Element).data("__class__").preventSamePlace()
        }), self.changingStop(fnName)
    }, self.removeSection = function(e, pSection) {
        var me = e.data.me,
            section = null,
            fnName = arguments.callee.name;
        self.loopBreak(fnName, 4690), self.changingStart(fnName), me._sections && me._sections[pSection] ? section = me._sections[pSection] : me.sections && me.sections[pSection] && (section = me.sections[pSection]);
        try {
            null === section ? (section = new SKBaseArticle.section(me, pSection)).remove(me, pSection) : section.remove()
        } catch (err) {
            me.log("warn", err)
        }
        self.changingStop(fnName)
    }
}

function SKCanvasSection(parent, sectionNo, properties, ancestors) {
    var _me, self, height = parseInt(properties.height, 10),
        width = properties.width,
        left = properties.left;
    return _me = self = this, void 0 === ancestors ? ancestors = [SKCanvasSection] : ancestors.unshift(SKCanvasSection), SKShelvingBaseClass.call(self, parent, "Shelving Section", ancestors), SKDroppable.call(self, ["back", "door"]), self.pos = sectionNo, self.width = width, Object.defineProperties ? Object.defineProperties(self, {
        height: {
            get: function() {
                return parseInt(height, 10)
            },
            set: function(val) {
                height = parseInt(val, 10)
            }
        },
        width: {
            get: function() {
                return parseInt(width, 10)
            },
            set: function(val) {
                width = parseInt(val, 10)
            }
        },
        left: {
            get: function() {
                return parseInt(left, 10)
            },
            set: function(val) {
                left = parseInt(val, 10)
            }
        }
    }) : null == height || isNaN(height) ? self._height = self._skCanvasBuilder._height : self.height = height, self._shelving = self._skCanvasBuilder._shelving, self._debug = self._skCanvasBuilder._debug, self._sectionNo = sectionNo, self.parts = [], self._getSectionNo = function(pos) {
        if (self.loopBreak(arguments.callee.name, 4776, pos), void 0 !== pos || isNaN(this.pos) || (pos = this.pos), pos < 0) this.log("error", "Heb je al geprobeerd rechts toe te voegen? ");
        else if (0 < pos)
            for (; 0 < pos && !document.getElementById("pillar_" + pos) && !document.getElementById("pillar_" + pos + "_0");) this.loopBreak(arguments.callee.name, 4789), pos -= 1;
        return pos
    }, self._getSectionHeight = function(height) {
        if (self.loopBreak(arguments.callee.name, 4796, height), !height)
            if (0 < this.height) height = this.height;
            else {
                var pos = this._getSectionNo();
                height = this._shelving && this._shelving.sections[pos] && this._shelving.sections[pos].height ? this._shelving.sections[pos].height : this._height
            }
        return height
    }, self._getSectionWidth = function(width) {
        return self.loopBreak(arguments.callee.name, 4816, width), void 0 === width && (this._shelving && void 0 !== this._shelving.sections[this._pos] && this._shelving.sections[this._pos].width ? width = this._shelving.sections[this._pos].width : this.width ? (width = this.width, this._shelving.sections[this._pos].width = this.width) : width = 100), parseInt(width, 10)
    }, self._getSectionLeft = function(left) {
        self.loopBreak(arguments.callee.name, 4835, left);
        var pillarWidth = this._skCanvasBuilder._pillarWidth;
        return void 0 === left && (left = -pillarWidth, $(this._skCanvasBuilder.htmlElement).find(".section").each(function(index, Element) {
            left += $(Element).width()
        }), left += pillarWidth / 2), left
    }, self.getLeftSection = function() {
        self.loopBreak(arguments.callee.name, 4848);
        var i = 0,
            left = i;
        for (i in this._parent.sections) {
            if (this._parent.sections[i].pos == this.pos) return this._parent.sections[left];
            left = i
        }
        return this._parent.sections[left]
    }, self.appendLeftPillar = function() {
        self.loopBreak(arguments.callee.name, 4861);
        var pillar, base, basename, pos = this._pos,
            height = this.height,
            pillarWidth = this._skCanvasBuilder._pillarWidth;
        return this._shelving && this._shelving.sections[pos] && this._shelving.sections[pos].parts && this._shelving.sections[pos].parts.pillar && ((base = this._shelving.sections[pos].parts.pillar).pillar_0_0 ? basename = "pillar_0_0" : base.pillar_0 && (basename = "pillar_0"), basename && ((height = base[basename].y) || (height = base[basename].z), pillar = this._skCanvasBuilder.newPillar(pos, height, left - pillarWidth / 2, basename, base[basename]))), pillar || (pillar = this._skCanvasBuilder.newPillar(pos, height, left - pillarWidth / 2)), pillar
    }, self.build = function(pos, height, width, left) {
        self._skCanvasBuilder._useAnimation = !1;
        var pillarid, pillarobject, pillarheight, copyFromLeft = 99 === pos,
            builder = self._skCanvasBuilder,
            canvas = self._skCanvasBuilder.htmlElement,
            section = self._skCanvasBuilder._doc.createElement("DIV"),
            me = self,
            heightLeft = 0,
            zoom = self._skCanvasBuilder._zoom,
            pillarWidth = self._skCanvasBuilder._pillarWidth,
            fnName = arguments.callee.name;
        return self.loopBreak(fnName, 4905, pos), self.changingStart(fnName), pos = self._getSectionNo(pos), null, self.width = width, self._pos = pos, self.height = height, 0 === pos && me.appendLeftPillar(), height = self._getSectionHeight(height), width = self._getSectionWidth(width), left = self._getSectionLeft(left), self._debug.newitem && self.log("debug", "New Section (" + pos + "); " + height + "x" + width + "cm (hxw) at " + left + "px. "), self._shelving && (self._shelving.sections[pos] || (self._shelving.sections[pos] = {}), self._shelving.sections[pos].height = height, self._shelving.sections[pos].width = width), $(canvas).append(section), self.htmlElement = section, $(self.htmlElement).data("__class__", self), section.id = "section_" + pos, section.className = "section w_" + width + " h_" + height, $(section).css({
            height: height * zoom / 100,
            left: left * zoom / 100 + self._skCanvasBuilder._paddingLeft
        }), $(section).append("<div class='width'><div class='left'></div><div class='center'></div><div class='right'></div><span class='size' >" + width + "cm</span></div>"), $(section).append('<div class="fixBackStartHeight"></div>'), 0 < pos && (self._shelving.sections[pos - 1] && (heightLeft = self._shelving.sections[pos - 1].height), $("#pillar_" + pos).height(Math.max(heightLeft, height) * self._zoom / 100), self._debug.newitem && self.log("debug", "New Section Pillar (" + pos + "); " + Math.max(heightLeft, height))), Object.defineProperties ? self._skCanvasBuilder.height = height : self._skCanvasBuilder.height(height), $(section).css({
            width: width * self._zoom / 100
        }), pillarobject = pillarid = null, pillarheight = height, self._shelving && self._shelving.sections && self._shelving.sections[pos + 1] && self._shelving.sections[pos + 1].parts && self._shelving.sections[pos + 1].parts.pillar && (self._shelving.sections[pos + 1].parts.pillar["pillar_" + (pos + 1)] ? (pillarid = "pillar_" + (pos + 1), pillarobject = self._shelving.sections[pos + 1].parts.pillar[pillarid]) : self._shelving.sections[pos + 1].parts.pillar["pillar_" + (pos + 1) + "_0"] && (pillarid = "pillar_" + (pos + 1) + "_0", pillarobject = self._shelving.sections[pos + 1].parts.pillar[pillarid]), pillarobject && (pillarheight = pillarobject.y)), self._skCanvasBuilder.newPillar(pos + 1, pillarheight, left + width - pillarWidth / 2, pillarid, pillarobject, function() {
            var nwLeft;
            self.loopBreak(arguments.callee.name, 4997), me._skCanvasBuilder._addShelves(me), me._skCanvasBuilder._addBacks(me), me._skCanvasBuilder._addDoors(me), me._skCanvasBuilder._addBraces(me, width), nwLeft = left + width + me._skCanvasBuilder._paddingLeft + me._skCanvasBuilder._pillarWidth, $(me._skCanvasBuilder.htmlElement).find(".addsection.right").remove().css({
                left: nwLeft * me._skCanvasBuilder._zoom / 100 + 10 + "px"
            }).appendTo(me._skCanvasBuilder.htmlElement);
            try {
                $(me._skCanvasBuilder).trigger("addsection", [pos, height, width, left]), copyFromLeft && $(me._skCanvasBuilder).trigger("copyfromleft", [pos])
            } catch (err) {
                me.log("warn", err)
            }
            $(section).removeClass("inMotion"), me.appendSettings()
        }), self.onNewSection && self.onNewSection(), self._skCanvasBuilder._updateSizeText(), $(canvas).height() < height + builder._paddingTop && $(canvas).height(height + builder._paddingTop + 10), self._skCanvasBuilder._useAnimation = !0, self.createDroppable(me, section), self._pos = pos, self.section = section, me._skCanvasBuilder._updateSizeText(), self.changingStop(fnName), width
    }, self.appendSettings = function() {
        var settingsOuter, settingsInner, base, element, i, option, shelveCount, s, dim = this._skLoader.dimensions.section,
            me = this;
        for (i in self.loopBreak(arguments.callee.name, 5041), (settingsOuter = document.createElement("div")).className = "settings outer", 1 === $(".configSpecs .specs .width").length && $(this.htmlElement).prepend(settingsOuter), $(settingsOuter).css({
                top: me.height + "px"
            }), (element = document.createElement("img")).src = "/images/configurator/this.png", element.className = "this", $(settingsOuter).append(element), (settingsInner = document.createElement("div")).className = "settings inner", $(settingsOuter).prepend(settingsInner), $(settingsInner).append("<h4>Wijzig sectie " + (this._sectionNo + 1) + "</h4><em>(indien gewenst)</em>"), (element = document.createElement("img")).id = "btnDelSection_" + this._sectionNo, element.className = "btnDelSection", element.alt = "Del", element.src = "/images/bin16.png", element.style.backgroundImage = "", 1 <= this._sectionNo ? (element.title = "Wis deze sectie", element.style.cursor = "pointer", $(element).on("click", {}, function() {
                me.remove()
            })) : element.title = "U kunt de eerste sectie niet wissen.", $(settingsInner).append(element), (base = document.createElement("div")).className = "base height", $(base).append('<label for="sHeight_' + this._sectionNo + '">Hoogte:</label>'), element = document.createElement("select"), dim.h) isNaN(i) || ((option = new Option).text = dim.h[i], option.value = option.text, option.selected = parseInt(option.value, 10) == this.height, element.add(option));
        for (i in element.id = "sHeight_" + this._sectionNo, element.className = "base height", $(element).on("change", {}, function(e) {
                var sectionNo = me._sectionNo,
                    newVal = 0 <= this.selectedIndex ? this.options[this.selectedIndex].value : 0,
                    fnName = "baseHeightChange";
                if (self.loopBreak(fnName, 5129), self.changingStart(fnName), 0 === newVal) return 0;
                me._skCanvasBuilder.baseChange(e, "height", sectionNo, newVal), me._skPriceCalculator._baseChange(e, "height", sectionNo, newVal), me._skCanvasBuilder.heightChange(e, sectionNo, newVal), me._skSettingsFormBuilder.updateBaseValues(), self.changingStop(fnName)
            }), $(base).append(element), $(settingsInner).append(base), (base = document.createElement("div")).className = "base width", $(base).append("<span>Breedte:</span>"), (element = document.createElement("select")).id = "sWidth_" + this._sectionNo, element.className = "base width", dim.l) isNaN(i) || ((option = new Option).text = dim.l[i], option.value = option.text, option.selected = parseInt(option.value, 10) == this.width, element.add(option));
        for (i in $(element).on("change", {}, function(e) {
                var sectionNo = me._sectionNo,
                    newVal = this.options[this.selectedIndex].value,
                    fnName = arguments.callee.name;
                self.loopBreak(fnName, 5164), self.changingStart(fnName), me._skCanvasBuilder.baseChange(e, "width", sectionNo, newVal), me._skPriceCalculator._baseChange(e, "width", sectionNo, newVal), me._skCanvasBuilder._widthChange(sectionNo, newVal), me._skSettingsFormBuilder.updateBaseValues(), self.changingStop(fnName)
            }), $(base).append(element), $(settingsInner).append(base), (base = document.createElement("div")).className = "base depth", $(base).append("<span>Diepte:</span>"), (element = document.createElement("img")).alt = "i", element.width = 16, element.height = 16, element.className = "depthShelveInfo", element.src = "/images/info.png", $(base).append(element), $(element).hover(function() {
                self.loopBreak(arguments.callee.name, 5190), s = document.createElement("div"), $(this.parentElement).append(s), $(s).css({
                    display: "block",
                    backgroundColor: "#fff",
                    border: "3px outset #058ED2",
                    left: "65px",
                    margin: "0px",
                    padding: "5px",
                    position: "absolute",
                    zIndex: 30,
                    top: "-200px",
                    width: "350px"
                }), s.className = "explainShelveDepth", $(s).append('<img style="width: 100%" src="' + window.SKBaseFolder + "/images/legborden/Stellingkast_legbord_diep_" + me._parent._depth + '-1.jpg" /><p>De diepte van de kast wordt 2,5cm groter dan de legbord-diepte.</p>')
            }, function() {
                $(s).remove()
            }), (element = document.createElement("select")).id = "sDepth_" + this._sectionNo, element.className = "base depth", dim.w) isNaN(i) || ((option = new Option).text = dim.w[i], option.value = option.text, option.selected = option.value == this._parent._depth, element.add(option));
        for (i in $(element).on("change", {
                me: me
            }, function(e) {
                var sectionNo = me._sectionNo,
                    newVal = parseInt(this.options[this.selectedIndex].value, 10),
                    fnName = arguments.callee.name;
                self.loopBreak(fnName, 5233), self.changingStart(fnName), me._skCanvasBuilder.baseChange(e, "depth", sectionNo, newVal), me._skPriceCalculator._baseChange(e, "depth", sectionNo, newVal), me._skCanvasBuilder.depthChange(e, sectionNo, newVal), me._skSettingsFormBuilder.updateBaseValues(), self.changingStop(fnName)
            }), $(base).append(element), $(settingsInner).append(base), (base = document.createElement("div")).className = "base shelves", $(base).append("<span>Legborden:</span>"), (element = document.createElement("select")).id = "sShelves_" + this._sectionNo, element.className = "base shelves", shelveCount = 0, this.parts) this.parts[i] instanceof SKArtShelve && (shelveCount += 1);
        for (i = Math.max(Math.ceil(this.height / 100), 3); i < this.height / 10; i++) option = new Option(i, i, i == shelveCount, i == shelveCount), element.add(option);
        $(element).on("change", {
            me: me
        }, function(e) {
            var sectionNo = me._sectionNo,
                newVal = this.options[this.selectedIndex].value,
                fnName = arguments.callee.name;
            self.loopBreak(fnName, 5266, sectionNo), self.changingStart(fnName), me._skCanvasBuilder.baseChange(e, "shelves", sectionNo, newVal), me._skPriceCalculator._baseChange(e, "shelves", sectionNo, newVal), me._skCanvasBuilder.shelveCountChange(e, sectionNo, newVal), me._skSettingsFormBuilder.updateBaseValues(), me._skCanvasBuilder._updateSizeText(), self.changingStop(fnName)
        }), $(base).append(element), $(settingsInner).append(base), $(settingsInner).append('<div class="spacer"></div>'), 0 === $(".configSpecs .specs .width").length ? $("form.settings").show() : ($(settingsOuter).css({
            display: "block"
        }), $(this.htmlElement).on("mouseenter", {}, function() {
            self.loopBreak(arguments.callee.name, 5284), me.log("debug", "enter " + me.htmlElement.id), $(".settings.outer").stop(!0, !0).not(settingsOuter).hide({
                easing: "swing"
            }), $(settingsOuter).stop(!0, !0).show({
                easing: "swing"
            })
        }), $(this.htmlElement).on("mouseleave", {}, function(e) {
            self.loopBreak(arguments.callee.name, 5299), !e && window.event && (e = window.event);
            var fromElement = this || e.fromElement || e.currentTarget,
                toElement = e.toElement || e.relatedTarget || e.target;
            return fromElement && toElement && me.log("debug", "leave " + fromElement.id + " (on " + e.currentTarget.id + ") ==>> " + toElement.nodeName + " " + (toElement.id || toElement.className)), null != toElement && "BODY" != toElement.nodeName && ($(toElement).parent(fromElement) ? me.log("debug", "leave " + fromElement + " => " + toElement.id + " IGNORE (child)!") : $(toElement).hasClass("select2-container") || $(toElement).parent(".select2-container") ? me.log("debug", "leave " + fromElement + " => " + toElement.id + " IGNORE (child)!") : ($(".settings.outer").stop(!0, !0), $(settingsOuter).delay(500).hide({
                easing: "swing"
            })), !0)
        }), $(settingsOuter).mouseenter(), $(settingsOuter).delay(100).hide({
            easing: "swing"
        })), $.fn.select2 && $(settingsInner).find("select").css({
            width: "65px",
            height: "24px"
        }).select2({
            minimumResultsForSearch: 20
        })
    }, self.heightChange = function(newValue) {
        var hLeft, hRight, sect, shelveHolders, parts, rightParts, topDopName, topDopNames, p, pillarIDLeft, pillarIDRight, td, me = this,
            section = me._sectionNo,
            oldValue = 0,
            sectionIDLeft = section - 1,
            sectionIDRight = section + 1,
            h = 0,
            fnName = arguments.callee.name;
        for (self.loopBreak(fnName, 5410, newValue), self.changingStart(fnName); 0 < sectionIDLeft && (!me._shelving.sections[sectionIDLeft] || !me._shelving.sections[sectionIDLeft].height);) self.loopBreak(arguments.callee.name, 5415, sectionIDLeft), sectionIDLeft--;
        for (; sectionIDRight < 1e3 && !me._shelving.sections[sectionIDRight];) self.loopBreak(arguments.callee.name, 5419, sectionIDRight), sectionIDRight++;
        if (1e3 <= sectionIDRight && (sectionIDRight = section + 1), hLeft = 0 <= sectionIDLeft ? Math.max(me._skCanvasBuilder._getSectionHeight(sectionIDLeft), newValue) : newValue, hRight = Math.max(me._skCanvasBuilder._getSectionHeight(sectionIDRight), newValue), (parts = me._shelving.sections[section].parts).topdop) try {
            for (topDopName in section < sectionIDRight && void 0 !== me._shelving.sections[sectionIDRight] && (rightParts = me._shelving.sections[sectionIDRight].parts), topDopNames = ["pillar_", "topdop_"])
                if (parts.topdop[topDopNames[topDopName] + section]) {
                    parts.topdop[topDopNames[topDopName] + section].position = hLeft - me._pillarWidth, parts.topdop[topDopNames[topDopName] + section].height = me._pillarWidth, void 0 !== rightParts && void 0 !== rightParts.topdop && (td = topDopNames[topDopName] + sectionIDRight, rightParts.topdop[td].position = hRight - me._pillarWidth, rightParts.topdop[td].height = me._pillarWidth);
                    break
                }
        } catch (err) {
            me.log("error", err)
        }
        pillarIDLeft = "pillar_" + section, void 0 === parts.pillar[pillarIDLeft] && (pillarIDLeft += "_0"), pillarIDRight = "pillar_" + sectionIDRight, rightParts && void 0 === rightParts.pillar[pillarIDRight] && (pillarIDRight += "_0");
        try {
            $(me._skCanvasBuilder).trigger("changearticle", ["pillar", pillarIDLeft, section, 0, me._pillarWidth, hLeft, me._depth || self._parent._depth]), $(me._skCanvasBuilder).trigger("changearticle", ["pillar", pillarIDRight, sectionIDRight, 0, me._pillarWidth, hRight, me._depth || self._parent._depth]), me._shelving.sections[sectionIDRight].width < 5 && (me._shelving.sections[sectionIDRight].height = hRight)
        } catch (err) {
            me.log("error", err)
        }
        if (me._debug.size && me.log("debug", "Setting HEIGHT for section " + section + " to " + newValue + " ( " + hLeft + " | " + hRight + " )"), $(me.htmlElement).find(".shelves").each(function(index, Element) {
                self.loopBreak(arguments.callee.name, 5544, index), Element.vast && newValue < Element.bottom && void 0 !== $.fn.blink && $(Element).blink(0, 4)
            }), me._useAnimation ? ($("#" + pillarIDLeft).addClass("inMotion").animate({
                height: hLeft
            }, function() {
                self.loopBreak(arguments.callee.name, 5556), $(this).removeClass("inMotion")
            }), $("#" + pillarIDRight).addClass("inMotion").animate({
                height: hRight
            }, function() {
                self.loopBreak(arguments.callee.name, 5562), $(this).removeClass("inMotion")
            })) : ($("#" + pillarIDLeft).css({
                height: hLeft
            }), $("#" + pillarIDRight).css({
                height: hRight
            })), $("#" + pillarIDLeft).data("__class__").height = hLeft, 0 < $("#" + pillarIDRight).length && $("#" + pillarIDRight).data("__class__") && ($("#" + pillarIDRight).data("__class__").height = hRight), oldValue = 0, me._shelving) {
            me._shelving.sections[section] || (me._shelving.sections[section] = {}), oldValue = me._shelving.sections[section].height;
            try {
                me._height = newValue, me.height = newValue, me._shelving.sections[section].height = newValue
            } catch (err) {
                me.log("warn", err)
            }
        }
        if (newValue > me._skCanvasBuilder._height) me._skCanvasBuilder._height = newValue, me._shelving.height = newValue, $(me.htmlElement).height(newValue * me._zoom / 100 + me._paddingTop + 20), h = me._skCanvasBuilder._height;
        else {
            for (sect in h = 0, me._shelving.sections) {
                if (0 === me._shelving.sections[sect].width && me._shelving.sections[sect].parts && me._shelving.sections[sect].parts.shelve && 0 < Object.size(me._shelving.sections[sect].parts.shelve))
                    for (p in parts = me._shelving.sections[sect].parts.shelve)
                        if (0 < parts[p].x) {
                            me._shelving.sections[sect].width = parseInt(parts[p].x, 10);
                            break
                        }
                me._shelving.sections[sect].height && 4 < me._shelving.sections[sect].width && me._shelving.sections[sect].height > h && (h = me._shelving.sections[sect].height)
            }
            me._skCanvasBuilder._height = h
        }
        $(me._skCanvasBuilder.htmlElement).find(".section").height(h), $("div.configurator .section div.settings.outer").css({
            top: h + "px"
        }), shelveHolders = $(me.htmlElement).find(".shelveholder"), me._skCanvasBuilder._updateSizeText(), $(shelveHolders).each(function(index, Element) {
            self.loopBreak(arguments.callee.name, 5632, index), parseInt($(Element).css("bottom"), 10) > newValue - me._skCanvasBuilder._shelveHeight ? ($(Element).data("__class__").move(0), $(Element).data("__class__").preventSamePlace()) : $(Element).hasClass("set") || (oldValue != newValue && ($(Element).removeAttr("shelvepos"), $(Element).data("__class__").move(0)), $(Element).data("__class__").preventSamePlace())
        }), me._skCanvasBuilder._addBraces(section), me._skCanvasBuilder._addBraces(), self.changingStop(fnName)
    }, self.changeWidth = function(newValue) {
        var children, width, me = this,
            section = this._getSectionNo(),
            eSection = this.htmlElement,
            oldwidth = this._getSectionWidth(),
            dimensions = this._parent._parent.dimensions,
            fnName = arguments.callee.name;
        if (self.loopBreak(fnName, 5657, newValue), self.changingStart(fnName), 100 !== (newValue = parseInt(newValue, 10)) && 0 < $(eSection).find(".door").length && !confirm("Let op! Er zijn deuren geconfigureerd in deze sectie. Deze deuren worden verwijderd als u doorgaat. Wilt u doorgaan? ")) return !1;
        me._shelving && (me._shelving.sections[section] || (me._shelving.sections[section] = {}), me._shelving.sections[section].width = newValue);
        try {
            children = $(eSection).find(".shelveholder"), $.merge(children, $(eSection).find(".back")), $.merge(children, $(eSection).find(".brace")), $.merge(children, $(eSection).find(".door")), $.merge(children, $(eSection).find(".side")), $.merge(children, $(eSection).find(".wall"))
        } catch (err) {
            me.log("error", err)
        }
        for (width in dimensions.section.l) $(eSection).removeClass("w_" + width).removeClass("w_" + dimensions.section.l[width]);
        if ($(eSection).addClass("w_" + newValue), me._useAnimation) {
            try {
                $(this).trigger("preanimate")
            } catch (err) {
                me.log("warn", err)
            }
            $(children).addClass("inMotion").animate({
                width: newValue
            }, function() {
                self.loopBreak(arguments.callee.name, 5706), $(this).removeClass("inMotion");
                try {
                    $(this).css("overflow", ""), $(this).trigger("postanimate"), $(children).each(function(index, Element) {
                        self.loopBreak(arguments.callee.name, 5712, index), $(Element).hasClass("brace") && $(Element).css("width", "")
                    })
                } catch (err) {
                    me.log("warn", err)
                }
            })
        } else $(children).css({
            width: newValue
        });
        try {
            $.merge(children, $(eSection).find(".slidingDoor")), $.merge(children, $(eSection).find(".slidingdoor"))
        } catch (err) {
            me.log("error", err)
        }

        function scWidthChildrUpd(index, Element) {
            var bottom, height, article, ElementID, dummy, dimensions, artWidth, depth = 0,
                artType = "",
                fnName = arguments.callee.name;
            if (self.loopBreak(fnName, 5743, index), self.changingStart(fnName), Element instanceof SKBaseArticle ? (bottom = (article = Element).position, height = Element.height, ElementID = Element.htmlElement.id) : (bottom = $(Element).css("bottom"), height = $(Element).height(), article = $(Element).data("__class__"), ElementID = Element.id), article) dimensions = article._skLoader.dimensions, artWidth = article.width, article instanceof SKArtShelve ? dummy = "SKArtShelve" : article instanceof SKArtBack ? dummy = "SKArtBack" : article instanceof SKArtSlidingDoor ? dummy = "SKArtSlidingDoor" : article instanceof SKArtBraceX ? dummy = "SKArtBraceX" : article instanceof SKArtBraceH ? dummy = "SKArtBraceH" : article instanceof SKArtSide ? dummy = "SKArtSide" : article instanceof SKArtPillar && (dummy = "SKArtPillar");
            else {
                dimensions = me._skLoader.dimensions;
                try {
                    artWidth = Element instanceof Node ? parseInt($(Element).css("width"), 10) : null
                } catch (err) {
                    try {
                        void 0 !== Element.style ? artWidth = parseInt($(Element).css("width"), 10) : void 0 !== Element.__class__ && (artWidth = parseInt(Element.width, 10))
                    } catch (err2) {
                        me.log("warn", err), me.log("warn", "Element == " + typeof Element), me.log("warn", "Element.__class__ == " + Element.__class__), me.log("warn", "Element.style.width == " + Element.style.width), artWidth = null
                    }
                }
                dummy = ""
            }
            if (artWidth !== oldwidth || artWidth !== newValue) switch (dummy) {
                case "SKArtShelve":
                    article.remove();
                    try {
                        dummy = new SKBaseArticle.shelve(me, {
                            no: article.no,
                            position: article.position,
                            set: article.set
                        }, article.id)
                    } catch (err) {
                        me.log("warn", err), dummy = null
                    }
                    dummy && dummy.htmlElement ? me.parts.indexOf(dummy) < 0 && me.parts.push(dummy) : alert("Voor deze afmeting is geen legbord beschikbaar.");
                    break;
                case "SKArtBack":
                    if (article.remove(), -1 < dimensions.back.l.indexOf(newValue)) try {
                        dummy = new SKBaseArticle.back(me, {
                            width: newValue,
                            height: article.height,
                            perfo: article.perfo,
                            position: article.position
                        })
                    } catch (err) {
                        me.log("warn", err), dummy = null
                    } else dummy = null;
                    dummy && dummy.htmlElement ? me.parts.indexOf(dummy) < 0 && me.parts.push(dummy) : alert("Voor deze afmeting is geen achterwand beschikbaar.");
                    break;
                case "SKArtSlidingDoor":
                    if (article.remove(), -1 < dimensions.slidedoor.l.indexOf(newValue)) try {
                        dummy = new SKBaseArticle.slidingDoor(me, {
                            width: newValue,
                            height: article.height,
                            perfo: article.perfo,
                            position: article.position
                        })
                    } catch (err) {
                        me.log("warn", err), dummy = null
                    } else dummy = null;
                    dummy && dummy.htmlElement ? me.parts.indexOf(dummy) < 0 && me.parts.push(dummy) : alert("Voor deze afmeting is geen schuifdeur beschikbaar.");
                    break;
                case "SKArtBrace":
                case "SKArtBraceX":
                    article.remove();
                    try {
                        dummy = new SKArtBraceX(me)
                    } catch (err) {
                        me.log("warn", err), dummy = null
                    }
                    dummy && dummy.htmlElement ? me.parts.indexOf(dummy) < 0 && me.parts.push(dummy) : alert("Voor deze afmeting is geen kruisschoor beschikbaar.");
                    break;
                case "SKArtBraceH":
                    article.remove();
                    try {
                        dummy = new SKArtBraceH(me)
                    } catch (err) {
                        me.log("warn", err), dummy = null
                    }
                    dummy && dummy.htmlElement ? me.parts.indexOf(dummy) < 0 && me.parts.push(dummy) : alert("Voor deze afmeting is geen H-schoor beschikbaar.");
                    break;
                case "SKArtSide":
                case "SKArtPillar":
                    break;
                default:
                    if ($(Element).attr("shelvepos") && (bottom = $(Element).attr("shelvepos")), artType = $(Element).hasClass("shelveholder") ? "shelve" : Element.className.split(" ")[0], 0 < $(Element).find(".shelve").length && (ElementID = $(Element).find(".shelve")[0].id, height = me._skCanvasBuilder._shelveHeight, depth = me._skCanvasBuilder._depth), "brace" === artType && (artType += " " + Element.className.split(" ")[1], depth = 4), 0 < newValue) try {
                        $(me._skCanvasBuilder).trigger("changearticle", [artType, ElementID, section, bottom, newValue, height, depth])
                    } catch (err) {
                        me.log("warn", err)
                    }
            }
            self.changingStop(fnName)
        }
        return this.width = newValue, this._shelving.sections[this._pos].width = newValue, $(this.parts).each(scWidthChildrUpd), $(children).each(scWidthChildrUpd), $(eSection).css({
            width: newValue
        }), $(eSection).find(".width .size").text(newValue + "cm").css({
            fontSize: (newValue < 70 ? 8 : 10) + "px",
            width: parseInt(50 * newValue / 100, 10) + "px",
            marginLeft: "-" + parseInt(50 * newValue / 200, 10) + "px"
        }), self.changingStop(fnName), oldwidth - newValue
    }, self.dropElementOver = function(event, ui) {
        self.loopBreak(arguments.callee.name, 5969), !event && window.event && (event = window.event);
        var artType = _me.dropElementGetType(ui.draggable),
            allow = "b" === artType || "d" === artType || "sd" === artType,
            w = $(this).css("width");
        switch (allow ? (ui.helper.animate({
            width: w
        }), $(this).css({
            cursor: "pointer"
        })) : $(this).css({
            cursor: "no-drop"
        }), _me.log("info", "DROPPABLE.over - " + _me.htmlElement.id), artType) {
            case "b":
                _me.dropOverBack(event, ui, this);
                break;
            case "s":
                _me.dropOverSide(event, ui, this);
                break;
            case "d":
                _me.dropOverDoor(event, ui, this);
                break;
            default:
                _me.dropOverOther(event, ui, this)
        }
    }, self.dropOverSide = function() {
        self.loopBreak(arguments.callee.name, 6002)
    }, self.dropOverDoor = function() {
        self.loopBreak(arguments.callee.name, 6005)
    }, self.dropOverOther = function() {
        self.loopBreak(arguments.callee.name, 6008)
    }, self.findNearestPillar = function() {
        self.loopBreak(arguments.callee.name, 6011)
    }, self.findNearestSection = function() {
        self.loopBreak(arguments.callee.name, 6014)
    }, self.dropOverBack = function() {
        self.loopBreak(arguments.callee.name, 6024)
    }, self.removeBraces = function() {
        self.loopBreak(arguments.callee.name, 6028);
        var parts, artType, me = this;
        for (artType in this._shelving && (this._shelving.sections ? this._shelving.sections[this._getSectionNo()] && (parts = this._shelving.sections[this._getSectionNo()].parts) : this._shelving.section && this._shelving.section[this._getSectionNo()] && (parts = this._shelving.section[this._getSectionNo()].parts)), parts || ((artType = this.__class__) || "function" != typeof this.toString || 50 < (artType = this.toString()).length && (artType = void 0), !artType && this.name && 50 < (artType = this.name.toString()).length && (artType = void 0), artType || (artType = function(thing) {
                var result = typeof thing;
                if ("function" == result || "object" == result || "Object" == result) try {
                    return null === thing ? "[object Null]" : Object.prototype.toString.call(thing)
                } catch (ignore) {}
                return result
            }(this)) && 50 < artType.length && (artType = void 0), self.log("warn", "No parts found! " + artType), artType = void 0), $(this.htmlElement).find(".brace").each(function(index, Element) {
                self.loopBreak(arguments.callee.name, 6076, index);
                try {
                    $(me).trigger("delarticle", [Element.className, Element.id, sectionNo, parseInt($(Element).css("bottom"), 10), $(Element).width(), $(Element).height(), me._depth]), $(me).trigger("delbrace", [sectionNo, 0, $(Element).css("bottom")])
                } catch (err) {
                    me.log("warn", err)
                }
                $(Element).data("__class__") ? $(Element).data("__class__").remove() : $(Element).remove()
            }), parts) - 1 < artType.split(" ").indexOf("brace") && (parts[artType] = {}, delete parts[artType]);
        try {
            this._skPriceCalculator.showPartList(), this._skPriceCalculator._rebuild()
        } catch (err) {
            me.log("error", err)
        }
    }, self.braceFactorHeight = function(goLeft, goRight) {
        self.loopBreak(arguments.callee.name, 6119, goLeft);
        var i, sectionsLeft, sectionsRight, factor = 0;
        for (void 0 === goLeft && (goLeft = 0), void 0 === goRight && (goRight = 0), 0 < goLeft && 0 < (sectionsLeft = $(this.htmlElement).prevAll(".section")).length && (factor += $(sectionsLeft[0]).data("__class__").braceFactorHeight(goLeft - 1, 0) / 3), 0 < goRight && 0 < (sectionsRight = $(this.htmlElement).nextAll(".section")).length && (factor += $(sectionsRight[0]).data("__class__").braceFactorHeight(0, goRight - 1) / 3), i = 0; i < this.parts.length; i++) this.parts[i] instanceof SKArtBack ? factor += 2 * parseInt(this.parts[i].height, 10) : this.parts[i] instanceof SKArtBrace && (factor += this.parts[i].height);
        return factor
    }, self.needsBrace = function() {
        return self.loopBreak(arguments.callee.name, 6159), this.braceFactorHeight(2, 2) / this._getSectionHeight() < .12
    }, self.remove = function() {
        var me = this,
            canvas = this._skCanvasBuilder.htmlElement,
            sectionDiv = $(canvas).find("#section_" + this._sectionNo),
            prevsection = me._sectionNo - 1,
            nextsection = me._sectionNo + 1,
            fnName = arguments.callee.name;
        for (self.loopBreak(fnName, 6170), self.changingStart(fnName); 0 < me.parts.length;) try {
            me.parts.pop().remove()
        } catch (err) {
            me.log("warn", err)
        }
        $(sectionDiv).find(".shelveholder, .brace, .door, .wall, .back, .side").each(function(ix, Element) {
            self.loopBreak(arguments.callee.name, 6179, ix);
            var classNm = Element.className.split(" ")[0],
                id = Element.id,
                zoom = me._skCanvasBuilder._zoom;
            "shelveholder" === classNm && (classNm = "shelve", id = $(Element).find(".shelve")[0].id), "brace" === classNm && (classNm += " " + Element.className.split(" ")[1]), me._skCanvasBuilder._debug.delitem && me._skCanvasBuilder.log("debug", "Remove item (" + classNm + "/" + id + ")");
            try {
                $(me._skCanvasBuilder).trigger("delarticle", [classNm, id, me._sectionNo, 100 * $(Element).css("bottom") / zoom])
            } catch (err) {
                me.log("warn", err)
            }
        });
        try {
            $(sectionDiv).remove(), $(me._skCanvasBuilder).trigger("delarticle", ["foot", "pillar_" + me._sectionNo, me._sectionNo, 0, me._skCanvasBuilder._pillarWidth, $(canvas).find("#pillar_" + me._sectionNo).height(), me._skCanvasBuilder._depth]), me._skCanvasBuilder._debug.delitem && me.log("debug", "Remove item (foot/pillar_" + me._sectionNo + ")"), $(me._skCanvasBuilder).trigger("delarticle", ["topdop", "pillar_" + me._sectionNo, me._sectionNo, 0, me._skCanvasBuilder._pillarWidth, $(canvas).find("#pillar_" + me._sectionNo).height(), me._skCanvasBuilder._depth]), me._skCanvasBuilder._debug.delitem && me.log("debug", "Remove item (topdop/pillar_" + me._sectionNo + ")"), $(me._skCanvasBuilder).trigger("delarticle", ["pillar", "pillar_" + me._sectionNo, me._sectionNo, 0, me._skCanvasBuilder._pillarWidth, $(canvas).find("#pillar_" + me._sectionNo).height(), me._skCanvasBuilder._depth]), me._skCanvasBuilder._debug.delitem && me.log("debug", "Remove item (pillar/pillar_" + me._sectionNo + ")"), $(canvas).find("#pillar_" + me._sectionNo).remove(), this._skCanvasBuilder._widthChange(this._sectionNo, 0), me._skCanvasBuilder._shelving.sections[me._sectionNo] = {};
            try {
                delete me._skCanvasBuilder._shelving.sections[me._sectionNo]
            } catch (err) {
                try {
                    me._skCanvasBuilder._shelving.sections[me._sectionNo] = null
                } catch (err2) {
                    me.log("warn", err), me.log("warn", err2)
                }
            }
        } catch (err) {
            me.log("warn", err)
        }
        for (prevsection = me._sectionNo - 1, nextsection = me._sectionNo + 1; 0 <= prevsection && !me._skCanvasBuilder._shelving.sections[prevsection];) self.loopBreak(arguments.callee.name, 6268), prevsection -= 1;
        for (; nextsection <= 1e3 && !me._skCanvasBuilder._shelving.sections[nextsection];) self.loopBreak(arguments.callee.name, 6273), nextsection += 1;
        0 <= prevsection && me._skCanvasBuilder.heightChange(me._skCanvasBuilder, prevsection, -1), nextsection < 1e3 && me._skCanvasBuilder.heightChange(me._skCanvasBuilder, nextsection, -1), me._skCanvasBuilder._updateSizeText();
        try {
            delete me._skCanvasBuilder._shelving.sections[me._sectionNo], delete me._skCanvasBuilder.sections[me._sectionNo]
        } catch (err) {
            me._sectionNo && (me._skCanvasBuilder._shelving.sections[me._sectionNo] && (me._skCanvasBuilder._shelving.sections[me._sectionNo] = null), me._skCanvasBuilder.sections[me._sectionNo] && (me._skCanvasBuilder.sections[me._sectionNo] = null))
        }
        this._skCanvasBuilder._addBraces(), self.changingStop(fnName)
    }, self._sectionNo = self._getSectionNo(), self.pos = self._sectionNo, sectionNo = self._sectionNo, self
}

function SKArtShelve(SKCanvasSection, properties, id) {
    var me = this,
        self = this,
        no = properties.no,
        bottom = properties.position,
        set = properties.set;
    SKBaseArticle.call(self, SKCanvasSection, "Shelving Shelve"), SKDraggable.call(self), self.priceObjectName = "shelve", self._shelving = self._skCanvasBuilder._shelving, self._debug = self._skCanvasBuilder._debug, self.no = no, self.position = bottom, self.set = set, self.margin = 5, self.height = 0, self.shelveHeight = self._skCanvasBuilder._shelveHeight, SKCanvasSection && (self._sectionNo = SKCanvasSection._getSectionNo()), self._shelveDragStart = function() {
        self.loopBreak(arguments.callee.name, 6358)
    }, self._shelveDrag = function(event, ui) {
        self.loopBreak(arguments.callee.name, 6361);
        var pos, s = $(ui.shelveholder).find(".shelve")[0].id.split("_"),
            clientH = self.height;
        ui.shelveholder.clientHeight && (clientH = ui.shelveholder.clientHeight), pos = $(ui.shelveholder.parentNode).height() - ui.position.top - clientH - 1, $("input[name='shelving[" + ui.canvas._current + "][" + s[1] + "][shelves][" + s[2] + "]']").val(pos), ui.canvas._shelving ? (ui.canvas._shelving.sections[s[1]] || (ui.canvas._shelving.sections[s[1]] = []), ui.canvas._shelving.sections[s[1]].shelves || (ui.canvas._shelving.sections[s[1]].shelves = []), ui.canvas._shelving.sections[s[1]].shelves[s[2]] || (ui.canvas._shelving.sections[s[1]].shelves[s[2]] = []), ui.canvas._shelving.sections[s[1]].shelves[s[2]].pos = pos) : ui.canvas._logging.error && ui.canvas.log("error", "No shelving setup connected to change these settings");
        try {
            $(ui.canvas).trigger("shelvedrag", [s[1], s[2], pos])
        } catch (err) {
            me.log("warn", err)
        }
        try {
            $(ui.shelveholder).find(".info .pos").text(pos)
        } catch (err) {
            me.log("warn", err)
        }
    }, self._onDrag = function(event, ui) {
        self.loopBreak(arguments.callee.name, 6399), !event && window.event && (event = window.event);
        var s, pos, me = event.data.me;
        ui.shelveholder = this, ui.canvas = event.data.me._skCanvasBuilder, me.nextShelve(this), s = $(ui.shelveholder).find(".shelve")[0].id.split("_"), pos = $(this).data("position"), $("input[name='shelving[" + ui.canvas._current + "][" + s[1] + "][shelves][" + s[2] + "]']").val(pos), me._updateInfoPopup(this), me._updateMarkers(this), me._updateShelving(this);
        try {
            $(ui.canvas).trigger("shelvedrag", [s[1], s[2], pos])
        } catch (err) {
            ui.canvas.log("warn", err)
        }
    }, self._onDragCreate = function(event, ui) {
        self.loopBreak(arguments.callee.name, 6423), ui.shelveholder = this
    }, self._onDragStart = function(event, ui) {
        self.loopBreak(arguments.callee.name, 6427), ui.shelveholder = this, $(ui.shelveholder).find(".info").hide("fast")
    }, self._onDragStop = function(event, ui) {
        self.loopBreak(arguments.callee.name, 6432), !event && window.event && (event = window.event), ui.shelveholder = this, ui.canvas = event.data.me;
        var pos, selector, shelve = $(ui.shelveholder).find(".shelve")[0],
            s = shelve.id.split("_"),
            clientH = this.height,
            sectionDiv = ui.shelveholder.parentNode,
            canvas = ui.canvas,
            shelving = canvas._shelving;
        ui.shelveholder.clientHeight && (clientH = ui.shelveholder.clientHeight), pos = $(sectionDiv).height() - ui.position.top - clientH - 1, selector = "shelving[" + canvas._current + "][" + s[1] + "][shelves][" + s[2] + "]", $("input[name='" + selector + "']").val(pos), canvas._shelving ? (shelving.sections[s[1]] || (shelving.sections[s[1]] = {}), shelving.sections[s[1]].shelves || (shelving.sections[s[1]].shelves = {}), shelving.sections[s[1]].shelves[s[2]] || (shelving.sections[s[1]].shelves[s[2]] = {}), shelving.sections[s[1]].height < pos && (pos = parseInt(shelving.sections[s[1]].height / canvas._shelveMountSteps, 10) * canvas._shelveMountSteps - canvas._shelveMountSteps), shelving.sections[s[1]].shelves[s[2]].pos = pos, shelving.sections[s[1]].parts.shelve[shelve.id].position = pos) : canvas.log("error", "No shelving setup connected to change these settings");
        try {
            $(canvas).trigger("movearticle", ["shelve", shelve.id, s[1], 0, pos])
        } catch (err) {
            canvas.log("warn", err)
        }
        $(ui.shelveholder).css({
            bottom: pos,
            top: ""
        }), $(ui.shelveholder).find(".info").show("fast")
    }, self.getMaxLoad = function() {
        self.loopBreak(arguments.callee.name, 6528);
        var items, i = 0,
            shelveSettings = this._shelving.sections[this._sectionNo].parts.shelve[this.htmlElement.childNodes[0].id],
            id = shelveSettings.id;
        if (!shelveSettings.maxload)
            if (shelveSettings.maxload = "??", null !== (items = void 0 === this.get ? this.parent.get("items", null) : this.get("items", null)) && id && items[id]) shelveSettings.maxload = parseInt(items[id].maxload, 10);
            else
                for (i in items)
                    if (parseInt(items[i].x, 10) == shelveSettings.x && (parseInt(items[i].y, 10) == shelveSettings.y || parseInt(items[i].y, 10) == shelveSettings.z) && "shelve" === items[i].artType) {
                        shelveSettings.maxload = parseInt(items[i].maxload, 10);
                        break
                    }
        return shelveSettings.maxload
    }, self.getPosition = function() {
        return self.loopBreak(arguments.callee.name, 6561), "auto" !== $(this.htmlElement).css("top") ? $(this.htmlElement.parentNode).height() - parseInt($(this.htmlElement).css("top"), 10) - this.htmlElement.clientHeight : parseInt($(this.htmlElement).css("bottom"), 10)
    }, self.nextShelve = function(Shelve, direction) {
        for (self.loopBreak(arguments.callee.name, 6572, direction); !$(Shelve).hasClass("shelveholder");) {
            if (this.loopBreak(arguments.callee.name, 6574), !Shelve.parentNode) return !1;
            Shelve = Shelve.parentNode
        }
        var pos = this.getPosition(),
            spaceB = $(Shelve.parentNode.parentNode).height(),
            spaceT = spaceB;
        return $(Shelve).data("position", pos), $(Shelve).data("element.above", null), $(Shelve).data("element.below", null), $(Shelve).data("space.below", pos), $(Shelve).data("space.above", 0), $(Shelve).siblings(".shelveholder").each(function(index, Element) {
            if (self.loopBreak(arguments.callee.name, 6595, index), Shelve !== Element) {
                var eBottom = $(Element).data().__class__.getPosition(),
                    diff = pos - eBottom - 3;
                0 < diff && diff < spaceB && (spaceB = diff, $(Shelve).data("element.below", Element), $(Shelve).data("space.below", diff)), 0 < (diff = eBottom - pos - 3) && diff < spaceT && (spaceT = diff, $(Shelve).data("element.above", Element), $(Shelve).data("space.above", diff))
            }
        }), $(Shelve).data("space.below", 2 * Math.floor(parseInt($(Shelve).data("space.below"), 10) / 2)), $(Shelve).data("space.above", 2 * Math.floor(parseInt($(Shelve).data("space.above"), 10) / 2)), 0 === direction ? Shelve : 0 < direction ? $(Shelve).data("element.above") : direction < 0 && $(Shelve).data("element.above")
    }, self.setMarkers = function(e) {
        if (self.loopBreak(arguments.callee.name, 6634), !(0 < $(this).find(".marker").length || e.data.me.draggable(e))) {
            e.data.me.nextShelve(this);
            var markerB, markerT, me = e.data.me,
                above = $(this).data("element.above");
            void 0 !== $(this).data("nodouble") && $(this).data("nodouble") && (above = !1), above && ((markerT = document.createElement("div")).className = "marker top", $(markerT).css({
                top: -$(this).data("space.above") - 3,
                bottom: 0,
                height: "auto"
            }), $(markerT).append('<div class="top" /><div class="center" /><div class="bottom" /><div class="size">' + $(this).data("space.above") + "</div>"), $(this).append(markerT)), (markerB = document.createElement("div")).className = "marker bottom", $(markerB).css({
                bottom: -$(this).data("space.below") - 3,
                top: 0,
                height: "auto"
            }), $(markerB).append('<div class="top" /><div class="center" /><div class="bottom" /><div class="size">' + $(this).data("space.below") + "</div>"), $(this).append(markerB), parseInt($(this).data("space.below"), 10) < 10 && $(markerB).hide(), $(this).append('<div class="maxload"><span>' + me.getMaxLoad() + "</span></div>")
        }
    }, self.removeMarkers = function() {
        self.loopBreak(arguments.callee.name, 6697), $(this).find(".marker").remove(), $(this).find(".maxload").remove()
    }, self._updateInfoPopup = function(Shelve) {
        self.loopBreak(arguments.callee.name, 6702);
        var pos = this.getPosition();
        try {
            $(Shelve).find(".info .pos").text(pos)
        } catch (err) {
            me.log("warn", err)
        }
    }, self._updateMarkers = function(Shelve) {
        self.loopBreak(arguments.callee.name, 6712);
        var above = $(Shelve).data("element.above"),
            below = $(Shelve).data("element.below"),
            thisBottom = $(Shelve).data("position"),
            markerB = $(Shelve).find(".marker.bottom")[0],
            markerT = $(Shelve).find(".marker.top")[0];
        above && ($(markerT).find(".size").text($(Shelve).data("space.above")), $(markerT).css("top", -$(Shelve).data("space.above") - 3)), below ? ($(markerB).find(".size").text($(Shelve).data("space.below")), $(markerB).css("bottom", -$(Shelve).data("space.below") - 3)) : ($(markerB).find(".size").text(2 * parseInt((thisBottom - 2) / 2, 10)), $(this).data("space.below", thisBottom), $(markerB).css("bottom", -thisBottom)), parseInt($(this).data("space.below"), 10) < 10 ? $(markerB).hide() : $(markerB).show()
    }, self._updateShelving = function(Shelve) {
        self.loopBreak(arguments.callee.name, 6742);
        var s = $(Shelve).find(".shelve")[0].id.split("_"),
            pos = $(Shelve).data("position");
        this._shelving ? (this._shelving.sections[s[1]] || (this._shelving.sections[s[1]] = []), this._shelving.sections[s[1]].shelves || (this._shelving.sections[s[1]].shelves = []), this._shelving.sections[s[1]].shelves[s[2]] || (this._shelving.sections[s[1]].shelves[s[2]] = []), this._shelving.sections[s[1]].shelves[s[2]].pos = pos) : this.log("error", "No shelving setup connected to change these settings")
    }, self.articleInfoContents = function(HTMLDivElement) {
        self.loopBreak(arguments.callee.name, 6762), $(HTMLDivElement).append("<h3>Legbord informatie</h3>"), $(HTMLDivElement).append("Belastbaarheid: " + this.getMaxLoad() + ' kg <br /><span style="font-size: 0.87em">(bij gelijkmatige verdeling)</span><br />')
    }, self.setCustomEvents = function() {
        self.loopBreak(arguments.callee.name, 6786), $(this.htmlElement).on("dragcreate", {
            me: this
        }, this._onDragCreate), $(this.htmlElement).on("dragstart", {
            me: this
        }, this._onDragStart), $(this.htmlElement).on("drag", {
            me: this
        }, this._onDrag), $(this.htmlElement).on("dragstop", {
            me: this
        }, this._onDragStop), $(this.htmlElement).on("mouseleave", {
            me: this
        }, this.removeMarkers)
    }, self.createDOM = function() {
        var paddingBottom, me, mb, i, shelveholder, shelve, subshelve, subShelveCount, shadowTop, shadowBottom;
        for (self.loopBreak(arguments.callee.name, 6794), void 0 === this.set && (this.set = !1), void 0 === this.position && (this.position = -1), this.depth = this._shelving.depth, void 0 !== this.width && this.width || (this.width = this._parent._getSectionWidth()), void 0 !== this.no && null !== this.no || ("string" == typeof id ? this.no = id.split("_")[2] : (this.no = 0, $("#section_" + this._sectionNo).find(".shelveholder").each(function(index, Element) {
                self.loopBreak(arguments.callee.name, 6814, index);
                var n = Element.id.split("_")[2];
                n >= this.no && (this.no = n + 1)
            }))), this._debug.newitem && this.log("debug", "New Shelve (" + this.no + ") in section (" + this._sectionNo + "); " + this.position + "cm"), shelveholder = this._doc.createElement("DIV"), shelve = this._doc.createElement("DIV"), this._doc.createElement("HR"), shadowTop = this._doc.createElement("DIV"), shadowBottom = this._doc.createElement("DIV"), $(shelveholder).data("__class__", this), $(shelve).data("__class__", this), shelveholder.className = "shelveholder", shelveholder.id = "shelveholder_" + this._sectionNo + "_" + this.no, shadowTop.className = "shadow top", shadowBottom.className = "shadow bottom", $(shelveholder).append(shelve), $(shelveholder).append(shadowTop), $(shelveholder).append(shadowBottom), shadowTop.style.height = Math.floor(this._skCanvasBuilder._depth * this._zoom / 400) + "px", subShelveCount = Math.ceil(this._skCanvasBuilder._depth / 41), i = 0; i < subShelveCount; i++)(subshelve = this._doc.createElement("DIV")).className = "subshelve", subshelve.style.height = 100 / subShelveCount + "%", $(shadowTop).append(subshelve);
        $("#section_" + this._sectionNo).append(shelveholder), shelve.id = "shelve_" + this._sectionNo + "_" + this.no, shelve.className = "shelve", this.set && (shelve.className = shelve.className + " set"), $(shelve).append("<span class='dragHandle'></span>"), paddingBottom = parseInt($(shelveholder).css("padding-bottom"), 10), $(shelve).css({
            height: this._skCanvasBuilder._shelveHeight * this._zoom / 100,
            bottom: paddingBottom + "px"
        }), me = this, mb = parseInt($(shelveholder).css("margin-bottom"), 10), isNaN(mb) && (mb = 0), 0 <= this.position && $(shelveholder).attr({
            shelvepos: this.position * this._zoom / 100 - mb - paddingBottom
        }), this.htmlElement = shelveholder, $(this.htmlElement).data("__class__", this), this._useAnimation ? $(shelveholder).addClass("inMotion").animate({
            bottom: this.position * this._zoom / 100 - mb - paddingBottom,
            height: this.shelveHeight * this._zoom / 100,
            left: 0,
            width: "100%"
        }, "fast", function() {
            self.loopBreak(arguments.callee.name, 6897), 0 <= this.position && me.preventSamePlace(), me.makeDraggable(shelveholder), $(this).removeClass("inMotion")
        }) : ($(shelveholder).css({
            bottom: this.position * this._zoom / 100 - mb - paddingBottom,
            height: this.shelveHeight * this._zoom / 100,
            left: 0,
            width: "100%"
        }), me.makeDraggable(shelveholder));
        try {
            if (self.registerItem(), $(this._skCanvasBuilder).trigger("newarticle", [this, shelve.id]), $(this._skCanvasBuilder).trigger("newshelve", [this._sectionNo, this.no, this.position, this.set]), 0 < $("#sShelves_" + this._sectionNo).length)
                for (mb in subShelveCount = Object.size(this._shelving.sections[this._sectionNo].parts.shelve), $("#sShelves_" + this._sectionNo)[0].options)
                    if (!isNaN(mb) && $("#sShelves_" + this._sectionNo)[0].options[mb].value == subShelveCount) {
                        $("#sShelves_" + this._sectionNo)[0].selectedIndex = mb;
                        break
                    }
        } catch (err) {
            this.log("warn", err)
        }
        this.setEvents(), this._skPriceCalculator._rebuild()
    }, self.postponeCreate || self.createDOM()
}

function SKArtPillar(parent, sectionNo, height, left, id, object, callback) {
    var baseRemove, self = this;
    this.name || (this.name = "ABSTRACT Shelving Pillar"), SKBaseArticle.call(this, parent, this.name), SKDroppable.call(this, ["side"]), self.loopBreak(arguments.callee.name, 6962, height), self.priceObjectName = "pillar", self.sectionNo = sectionNo, height = parseInt(height, 10), self.height = height, !isNaN(self.height) && self.height || null == object || (self.height = object.y, !(height = object.y) && object.z && (self.height = height = object.z)), self._skLoader.dimensions.pillar.h.indexOf(self.height) < 0 && (self.height = self._skLoader.dimensions.pillar.h[0]), self.left = left, self.parent = parent, (void(self.position = 0) === self.width || isNaN(self.width)) && (self.width = 0), (void 0 === self.depth || isNaN(self.depth)) && (self.depth = 0), self._pillarWidth = parseInt(self.parent._pillarWidth, 10), self._paddingTop = parseInt(self.parent._paddingTop, 10), self.canvasElement = self.parent.htmlElement, self._paddingLeft = parseInt(self.parent._paddingLeft, 10), self._shelveHeight = parseInt(self.parent._shelveHeight, 10), self.addChildren = function() {
        self.loopBreak(arguments.callee.name, 6999);
        var side, sideNo, sectionNo = self.sectionNo;
        if (self._shelving && self._shelving.sections && self._shelving.sections[sectionNo] && self._shelving.sections[sectionNo].parts && self._shelving.sections[sectionNo].parts.side)
            for (sideNo in self._shelving.sections[sectionNo].parts.side) side = self._shelving.sections[sectionNo].parts.side[sideNo], new SKBaseArticle.side(self, side, sideNo)
    }, self.addFoot = function() {}, self.addTopdop = function() {}, self.createDOM = function() {
        self.loopBreak(arguments.callee.name, 7018);
        var parts, pillars, me = self,
            sysSection = null,
            id_ext = "",
            zoom = parseInt(self._zoom, 10) / 100;
        if (me._shelving && me._shelving.sections && (sysSection = me._shelving.sections[self.sectionNo]), self.htmlElement = self._doc.createElement("DIV"), $(self.htmlElement).data("__class__", self), $(self.parent.htmlElement).append(self.htmlElement), id) id_ext = (self.htmlElement.id = id).replace("pillar", "");
        else {
            id_ext = "_" + self.sectionNo, self.htmlElement.id = "pillar" + id_ext;
            try {
                sysSection && (parts = sysSection.parts) && parts.pillar && ((pillars = parts.pillar)["pillar_" + self.sectionNo] ? id_ext = "_" + self.sectionNo : pillars["pillar_" + self.sectionNo + "_0"] && (id_ext = "_" + self.sectionNo + "_0"), self.htmlElement.id = "pillar" + id_ext)
            } catch (ignore) {}
        }
        if (self.htmlElement.className = "pillar", $(self.htmlElement).css({
                height: (height + self._shelveHeight / 2) * zoom,
                width: self._pillarWidth * zoom
            }), self.parent._useAnimation) $(self.htmlElement).addClass("inMotion").animate({
            left: left * zoom + self._paddingLeft
        }, 200, function() {
            if (self.loopBreak(arguments.callee.name, 7066), $(self).removeClass("inMotion"), callback) try {
                callback()
            } catch (err) {
                self.log("error", err)
            }
        });
        else if ($(self.htmlElement).css({
                left: left * zoom + self._paddingLeft
            }), callback) try {
            callback()
        } catch (err) {
            me.log("error", err)
        }
        $(self.parent.htmlElement).height() < height + self._paddingTop && $(self.parent.htmlElement).height(height + self._paddingTop + 10);
        try {
            self.registerItem(), $(self.parent).trigger("newarticle", [self])
        } catch (err) {
            self.log("error", "New Pillar: " + err)
        }
        $(self.htmlElement).data("__class__", self), self.topdop = self.addTopdop(id_ext), self.foot = self.addFoot(id_ext), self.createDroppable(self, self.htmlElement), self.setEvents(), self.addChildren(), self._skPriceCalculator._rebuild()
    }, baseRemove = self.remove, self.remove = function() {
        self.loopBreak(arguments.callee.name, 7122), baseRemove()
    }, this.postponeCreate || self.createDOM()
}

function SKArtBrace(SKCanvasSection, name) {
    var self;
    self = this, SKBaseArticle.call(this, SKCanvasSection, name), this.priceObjectName = "brace", this.width = this._parent._getSectionWidth(), self.loopBreak(arguments.callee.name, 7140, name), this.appendToSection = function() {
        self.loopBreak(arguments.callee.name, 7143), $(this._parent.htmlElement).append(this.htmlElement);
        var b, h, sectHeight = this._parent._getSectionHeight();
        sectHeight < (b = parseInt($(this.htmlElement).css("bottom"), 10)) + (h = parseInt($(this.htmlElement).css("height"), 10)) + 2 ? (this.position = 5 * Math.floor((sectHeight - h - 2) / 5), this.move(this.position)) : this.position = b;
        try {
            self.registerItem(), $(this._skCanvasBuilder).trigger("newarticle", [this])
        } catch (err) {
            this.log("warn", err)
        }
        $(this.htmlElement).data("__class__", this), this._skPriceCalculator._rebuild()
    }
}

function SKArtBraceX(SKCanvasSection, info, id) {
    var self = this;
    self.abstrct = !1, SKArtBrace.call(self, SKCanvasSection, "Shelving X Brace"), self.loopBreak(arguments.callee.name, 7184, id), self.height = 105, self.createDOM = function() {
        self.loopBreak(arguments.callee.name, 7187), self.htmlElement = document.createElement("div"), $(self.htmlElement).data("__class__", self), self.htmlElement.id = void 0 !== id ? id : "brace_" + self._parent._getSectionNo(), self.htmlElement.className = "brace x";
        var braceLT2RB = document.createElement("hr"),
            braceRT2LB = document.createElement("hr"),
            rotate = 45,
            section = self._parent;
        if (braceLT2RB.className = "lt2rb", braceRT2LB.className = "rt2lb", $(self.htmlElement).append(braceLT2RB), $(self.htmlElement).append(braceRT2LB), !supports("transform")) try {
            switch (section._getSectionWidth()) {
                case 55:
                    rotate = 61;
                    break;
                case 70:
                    rotate = 56;
                    break;
                case 85:
                    rotate = 49;
                    break;
                case 100:
                    rotate = 45;
                    break;
                case 115:
                    rotate = 41;
                    break;
                case 130:
                    rotate = 38;
                    break;
                default:
                    rotate = 45
            }
            fnSetRotation(braceLT2RB, rotate), fnSetRotation(braceRT2LB, -rotate)
        } catch (err) {
            self.log("error", err);
            try {
                $(braceLT2RB).remove(), $(braceRT2LB).remove(), braceLT2RB = document.createElement("div"), braceRT2LB = document.createElement("div"), braceLT2RB.className = "lt2rb", braceRT2LB.className = "rt2lb", $(self.htmlElement).append(braceLT2RB), $(self.htmlElement).append(braceRT2LB), fnSetRotation(braceLT2RB, rotate), fnSetRotation(braceRT2LB, -rotate)
            } catch (err2) {
                self.log("error", err2)
            }
        }
        self.appendToSection()
    }, self.postponeCreate || self.createDOM()
}

function SKArtBack(SKCanvasSection, name) {
    SKBaseArticle.call(this, SKCanvasSection, name), this.priceObjectName = "back", this.loopBreak(arguments.callee.name, 7352, name)
}

function SKArtSlidingDoor(skCanvasBuilderSection) {
    SKBlockingArticle.call(this, skCanvasBuilderSection, "Shelving Sliding Door", {}), SKDraggable.call(this), this.priceObjectName = "slidingDoor"
}

function SKSettingsFormBuilder(parent, ancestors) {
    void 0 === ancestors ? ancestors = [SKSettingsFormBuilder] : ancestors.unshift(SKSettingsFormBuilder), SKShelvingBaseClass.call(this, parent, "Shelving Settings", ancestors);
    var self = this;
    self.canvasElement = null, self._settings = null, self._height = 0, self._depth = 0, self._allow = {
        pillar: !0,
        shelve: !0,
        side: !1,
        back: !1,
        door: !1
    }, self.initialize = function(shelving, settings, current) {
        self.loopBreak(arguments.callee.name, 7390), this.log("info", this.name + ": Initializing..."), this._shelving = shelving, this._settings = settings, this._current = current, this._depth = this._shelving.depth, $(this._settings).find(".spacer").length < 1 && $(this._settings).append('<div class="spacer" id="sBtmSpacer">&nbsp;</div>')
    }, self.zoom = function(pZoom) {
        if (self.loopBreak(arguments.callee.name, 7401, pZoom), pZoom) {
            this.log("info", "Ajust zoom level to: " + pZoom + "%");
            var me = this;
            $(this._settings).find("section").each(function(index) {
                self.loopBreak(arguments.callee.name, 7406, index), $(this).width($(this).width() * pZoom / me._zoom)
            }), this._zoom = pZoom
        }
        return this._zoom
    }, self.bindCanvas = function(canvas) {
        self.loopBreak(arguments.callee.name, 7415), this.canvasElement = canvas, $(this.canvasElement).on("click", {
            me: this
        }, this._canvasEvents.click), $(this.canvasElement).on("moveshelve", {
            me: this
        }, this._canvasEvents.moveShelve), $(this.canvasElement).on("zoom", {
            me: this
        }, this._canvasEvents.zoom), $(this.canvasElement).on("empty", {
            me: this
        }, this._canvasEvents.empty), $(this.canvasElement).on("addsection", {
            me: this
        }, this._canvasEvents.addSection), $(this.canvasElement).on("pillarenter", {
            me: this
        }, this._canvasEvents.pillarEnter), $(this.canvasElement).on("pillarleave", {
            me: this
        }, this._canvasEvents.pillarLeave), $(this.canvasElement).on("sectionenter", {
            me: this
        }, this._canvasEvents.sectionEnter), $(this.canvasElement).on("sectionleave", {
            me: this
        }, this._canvasEvents.sectionLeave), $(this.canvasElement).on("shelveenter", {
            me: this
        }, this._canvasEvents.shelveEnter), $(this.canvasElement).on("shelveleave", {
            me: this
        }, this._canvasEvents.shelveLeave), $(this.canvasElement).on("newshelve", {
            me: this
        }, this._canvasEvents.newShelve), $(this.canvasElement).on("delarticle", {
            me: this
        }, this._canvasEvents.delArticle), $(this.canvasElement).on("delshelve", {
            me: this
        }, this._canvasEvents.delShelve), $(this.canvasElement).on("sectionresize", {
            me: this
        }, this._canvasEvents.sectionResize), $(this.canvasElement).on("sectionleftchange", {
            me: this
        }, this._canvasEvents.sectionLeftChange), $(this.canvasElement).on("copyfromleft", {
            me: this
        }, this._canvasEvents.copyFromLeft), $(this.canvasElement).on("preanimate", {
            me: this
        }, this._canvasEvents.preAnimate), $(this.canvasElement).on("postanimate", {
            me: this
        }, this._canvasEvents.postAnimate), $(this.canvasElement).on("empty", {
            me: this
        }, this._canvasEvents.empty), $(this.canvasElement).on("ready", {
            me: this
        }, this._canvasEvents.ready)
    }, self._addElement = function(parent, tagname, ptype, id, className, value, title) {
        var newElement = document.createElement(tagname);
        if (self.loopBreak(arguments.callee.name, 7483, id), "string" == typeof ptype && "" < ptype) try {
            newElement.type = ptype
        } catch (err) {
            this.log("warn", err)
        }
        return id && (newElement.id = id), className && (newElement.className = className), value && (newElement.value = value), title && (newElement.title = title), $(parent).append(newElement), newElement
    }, self._addGroupProperty = function(section, parent, className, label, values) {
        var div, btn, array, s, el, ucClass;
        if (self.loopBreak(arguments.callee.name, 7501, label), ucClass = className.charAt(0).toUpperCase() + className.substr(1).toLowerCase(), div = this._addElement(parent, "div", !1, "sGroup" + ucClass + "_" + section, "group " + className), this._allow[className.substr(0, className.length - 1)] || $(div).css({
                display: "none"
            }), $(div).append(label + ": <br />"), array = this._addElement(div, "div", !1, "sGrp" + ucClass + "_" + section), btn = this._addElement(array, "a", !1, "sGrp" + ucClass + "Add_" + section, "btnAdd", "Toevoegen", "Toevoegen"), 0 <= ["array", "object"].indexOf(typeof values))
            for (s = $(values).length - 1; 0 <= s; s--) div = this._addElement(array, "div", !1, "sGrp" + ucClass + "_" + section + "_" + s), $(div).append("pos: "), (el = this._addElement(div, "input", "text", !1, !1)).name = "shelving[" + this._current + "][" + section + "][" + className + "][" + s + "]", el.style.width = "30px", values[s].pos && (el.value = values[s].pos);
        switch (className) {
            case "shelves":
                $(btn).on("click", {
                    me: this
                }, this._onBtnShelvesAddClick);
                break;
            case "sides":
                $(btn).on("click", {
                    me: this
                }, this._onBtnSidesAddClick);
                break;
            case "backs":
                $(btn).on("click", {
                    me: this
                }, this._onBtnBacksAddClick);
                break;
            case "doors":
                $(btn).on("click", {
                    me: this
                }, this._onBtnDoorsAddClick)
        }
        this._addElement(array, "div", !1, !1, "spacer")
    }, self._addBaseProperty = function(section, parent, className, label, name, values, current) {
        var div, select, s, img, me = this;
        for (self.loopBreak(arguments.callee.name, 7567, label), div = this._addElement(parent, "div", !1, !1, "base " + className), $(div).append(label + ": "), (select = this._addElement(div, "select", !1, "s" + className.charAt(0).toUpperCase() + className.substr(1).toLowerCase() + "_" + section, "base " + className)).name = name, s = 0; s < $(values).length; s++) select[select.length] = new Option(values[s], values[s], values[s] == current, values[s] == current);
        switch ((select.selectedIndex < -1 || select.options[select.selectedIndex].value != current) && (select[select.length] = new Option(current, current, !0, !0)), $(select).on("change", {
            me: this,
            base: className,
            section: section
        }, this._onBaseChange), className) {
            case "depth":
                img = this._addElement(div, "div"), $(img).css({
                    backgroundImage: "url('" + window.SKBaseFolder + "/images/info.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top left",
                    width: "25px",
                    height: "20px",
                    margin: "-20px 0 0 50px"
                }), $(img).hover(function() {
                    self.loopBreak(arguments.callee.name, 7615), $(div).parents().css("overflow", ""), (s = me._addElement(img, "div")).className = "explainShelveDepth", $(s).css({
                        display: "block",
                        backgroundColor: "#fff",
                        border: "3px outset #058ED2",
                        left: "22px",
                        margin: "0px",
                        padding: "5px",
                        position: "relative",
                        top: "5px",
                        width: "350px"
                    }), $(s).append('<img style="width: 100%" src="' + window.SKBaseFolder + "/images/legborden/Stellingkast_legbord_diep_" + me._depth + '-1.jpg" /><p>De diepte van de kast wordt 2,5cm groter dan de legbord-diepte.</p>')
                }, function() {
                    self.loopBreak(arguments.callee.name, 7638), $(s).remove()
                })
        }
        $(div).append("<div class='spacer'></div>")
    }, self._copyFromLeft = function(e, sectionno) {
        var sectionDest, srcno = sectionno - 1,
            fnName = arguments.callee.name;
        for (self.loopBreak(fnName, 7654, sectionno), self.changingStart(fnName), sectionDest = $(this._settings).find("#dSectionProperties_" + sectionno)[0]; !$(this._settings).find("#dSectionProperties_" + srcno).length;)
            if (this.loopBreak(arguments.callee.name, 7658), (srcno -= 1) < 0) return void this.log("warn", "Unable to copy. Source Section not found!");
        $(sectionDest).find(".base select").each(function(index, Element) {
            Element.disabled || (Element.selectedIndex = $("#" + Element.id.replace(sectionno, srcno))[0].selectedIndex, $(Element).hasClass("depth") || $(Element).change())
        }), self.changingStop(fnName)
    }, self._addSection = function(sectionno, height, width, left) {
        var section, shSections, btn, sectionProps, s, spacer, prevSection, artType, element, name, shelvecount = null,
            sides = null,
            doors = null,
            backs = null,
            shelves = [],
            fnName = arguments.callee.name;
        for (self.loopBreak(fnName, 7693, sectionno), self.changingStart(fnName), 0 < $(this._settings).find("#sSection_" + sectionno).length && ($(Element).data("__class__") && $(this._settings).find("#sSection_" + sectionno).data("__class__").remove(), $(this._settings).find("#sSection_" + sectionno).remove()), section = document.createElement("div"), $(this._settings).append(section), $(this._settings).append($("#sBtmSpacer")), section.className = "section", section.id = "sSection_" + sectionno, $(section).animate({
                left: left,
                width: (width + 4 - parseInt($(section).css("paddingLeft"), 10) - parseInt($(section).css("paddingRight"), 10)) * this._zoom / 100,
                height: 50
            }, 200, "swing", function() {
                $(this).css("overflow", "")
            }), btn = this._addElement(section, "input", "button", "btnDelSection_" + sectionno, "btnDelSection", "", "Complete sectie wissen"), this._addElement(section, "div", !1, !1, "spacer"), $(btn).on("click", {
                me: this,
                sectionno: sectionno,
                sectionElement: section
            }, this._removeSection), sectionno || (btn.disabled = "disabled"), $(section).append("<br />"), sectionProps = this._addElement(section, "div", !1, "dSectionProperties_" + sectionno, "sectionProperties"), $(sectionProps).hide(), $(sectionProps).append("<h3>Sectie " + (sectionno + 1) + "</h3>"), this._addBaseProperty(sectionno, sectionProps, "height", "Hoogte", "shelving[" + this._current + "][" + sectionno + "][height]", this._parent.dimensions.section.h, height), this._addBaseProperty(sectionno, sectionProps, "width", "Breedte", "shelving[" + this._current + "][" + sectionno + "][width]", this._parent.dimensions.section.l, width), this._addBaseProperty(sectionno, sectionProps, "depth", "Diepte", "shelving[" + this._current + "][" + sectionno + "][depth]", this._parent.dimensions.section.w, this._depth), s = Math.max(Math.ceil(height / 100), 3); s < height / 20; s++) shelves[shelves.length] = s;
        if ((shSections = this._shelving.sections)[sectionno] ? (shSections[sectionno].parts.shelve || (shSections[sectionno].parts.shelve = {}), shelvecount = Object.size(shSections[sectionno].parts.shelve), sides = shSections[sectionno].parts.sides, backs = shSections[sectionno].parts.backs, doors = shSections[sectionno].parts.doors) : (shelvecount = Math.max(Math.ceil(height / 100), 3), doors = backs = sides = 0), shelvecount < 3) {
            for (prevSection = sectionno - 1; 0 <= prevSection && (this.loopBreak(arguments.callee.name, 7770), !(shSections[prevSection] && shSections[prevSection].parts && 2 < Object.size(shSections[prevSection].parts.shelve)));) prevSection--;
            if (0 <= prevSection) {
                for (artType in shSections[prevSection].parts)
                    for (element in shSections[prevSection].parts[artType]) "" < element && ((name = element.split("_"))[1] = sectionno, name = name.join("_"), shSections[sectionno].parts[artType] || (shSections[sectionno].parts[artType] = {}), shSections[sectionno].parts[artType][name] = jQuery.extend(!0, {}, shSections[prevSection].parts[artType][element]));
                shelvecount = Object.size(shSections[sectionno].parts.shelve)
            }
        }
        this._addBaseProperty(sectionno, sectionProps, "shelves", "Legborden", "shelving[" + this._current + "][" + sectionno + "][#shelves]", shelves, shelvecount), this._addGroupProperty(sectionno, sectionProps, "shelves", "Legborden", shelvecount), this._addGroupProperty(sectionno, sectionProps, "sides", "Zijwanden", sides), this._addGroupProperty(sectionno, sectionProps, "backs", "Achterwanden", backs), this._addGroupProperty(sectionno, sectionProps, "doors", "Deuren", doors), (spacer = document.createElement("DIV")).className = "spacer", spacer.id = "s_" + sectionno + "_spacer", $(section).append(spacer), $(section).on("mouseenter", {
            me: this
        }, this._onMakeActive), $(section).on("mouseleave", {
            me: this
        }, this._onMakeInActive), this._onMakeActive(null, sectionno), self.changingStop(fnName)
    }, self._addShelve = function(sectionno, shelveno) {
        var btn, shelve, lbl, sel, fnName = arguments.callee.name;
        self.loopBreak(fnName, 7824, shelveno), self.changingStart(fnName), shelveno || (shelveno = $("#sGrpShelves_" + sectionno).find(".sShelve").length), (shelve = document.createElement("DIV")).className = "sShelve", shelve.id = "sShelve_" + sectionno + "_" + shelveno, $(shelve).on("mouseenter", {
            me: this
        }, this._onShelveEnter), lbl = document.createElement("label"), $(lbl).attr("for", "ssw_" + sectionno + "_" + shelveno), lbl.textContent = "Draagvermogen", $(shelve).append(lbl), sel = document.createElement("select"), $(shelve).append(sel), sel.id = "ssw_" + sectionno + "_" + shelveno, sel.className = "sShelveWeight", sel.name = "shelving[" + this._current + "][" + sectionno + "]['shelves'][" + shelveno + "][weight]", (btn = document.createElement("input")).type = "button", btn.value = "", btn.className = "btnDel", $(shelve).append(btn), $("#sGrpShelves_" + sectionno).find(".spacer").before(shelve), self.changingStop(fnName)
    }, self._moveShelve = function(e, section, shelveno) {
        self.loopBreak(arguments.callee.name, 7856, shelveno);
        var shelves = document.getElementById("sGrpShelves_" + section);
        $(shelves).find("#sShelve_" + section + "_" + shelveno).length <= 0 && e.data.me._addShelve(section, shelveno)
    }, self._removeSection = function(e) {
        var width = $(e.data.sectionElement).width(),
            fnName = arguments.callee.name;
        self.loopBreak(fnName, 7865), self.changingStart(fnName), $(e.data.sectionElement).data("__class__") && $(e.data.sectionElement).data("__class__").remove(), $(e.data.sectionElement).remove();
        try {
            $(e.data.me).trigger("removesection", [e.data.sectionno])
        } catch (err) {
            e.data.me.log("warn", err)
        }
        $(e.data.me._settings).find(".section").each(function(index, Element) {
            parseInt(Element.id.split("_")[1], 10) > parseInt(e.data.sectionno, 10) && $(Element).css({
                left: $(Element).css("left") - width
            })
        }), self.changingStop(fnName)
    }, self._onCopyFromLeft = function() {
        self.loopBreak(arguments.callee.name, 7888), alert("Zo snel kan ik niet .. :(")
    }, self._onMakeActive = function(e, sectionno) {
        self.loopBreak(arguments.callee.name, 7893, sectionno);
        var section = null;
        if (!this) throw "Zo snel kan ik niet .. :(";
        this instanceof SKSettingsFormBuilder ? section = document.getElementById("sSection_" + sectionno) : $(this).hasClass("section") && (section = this), $(".section").removeClass("active"), $(section).addClass("active"), sectionno || (sectionno = section.id.split("_")[1]), $("#section_" + sectionno).addClass("active"), section && ($(".section .sectionProperties").each(function(index, Element) {
            Element.parentNode != section && $(Element).stop()
        }), $(".section .sectionProperties").css({
            height: "auto"
        }).removeClass("animating"), $(section).find(".sectionProperties").addClass("animating"), $(".section .sectionProperties").each(function(index, Element) {
            $(Element).hasClass("animating") || ($(Element).slideUp("fast"), $(Element.parentNode).removeClass("active"))
        }), $(section).addClass("active").find(".sectionProperties").removeClass("animating").slideDown())
    }, self._onMakeInActive = function() {
        self.loopBreak(arguments.callee.name, 7931), $(".section").removeClass("active")
    }, self._onMouseEnter = function() {
        self.loopBreak(arguments.callee.name, 7936);
        for (var section = this; section.parentNode && !$(section).hasClass("section");) section = section.parentNode;
        if ($(section).hasClass("section")) section = parseInt(section.id.substr(8), 10);
        else {
            for (section = this; section.parentNode && !$(section).hasClass("pillar");) section = section.parentNode;
            section = $(section).hasClass("pillar") ? parseInt(section.id.substr(7), 10) - 1 : -1
        }
        $(this._settings).find("#sSection_" + section).mouseenter()
    }, self._onBaseChange = function(e) {
        var section, base, sectDiv, classNm, newValue, val, el, s, width, timer, fnName = arguments.callee.name;
        if (self.loopBreak(fnName, 7961), self.changingStart(fnName), e.data.section) section = parseInt(e.data.section, 10);
        else {
            for (sectDiv = e.target; !$(sectDiv).hasClass("section");) sectDiv = sectDiv.parentNode;
            e.data.section = section = parseInt(sectDiv.id.split("_")[1], 10)
        }
        e.data.base ? base = e.data.base : (classNm = this.className.replace("base", "").trim().split(" "), base = e.data.base = classNm[0]), newValue = parseInt(e.target.options[e.target.selectedIndex].value, 10);
        try {
            $(e.data.me).trigger("basechange", [base, section, newValue])
        } catch (err) {
            e.data.me.log("warn", err)
        }
        switch (base) {
            case "height":
                if (val = $("#sShelves_" + section).val()) {
                    el = $("#sShelves_" + section)[0];
                    try {
                        for (el.options.length = 0; 0 < el.options.length;) el.options.remove(0)
                    } catch (err) {
                        e.data.me.log("warn", err)
                    }
                    for (s = Math.max(Math.ceil(newValue / 100), 3); s < newValue / 20; s++) el.options.add(new Option(s, s, s == val, s == val));
                    parseInt(val, 10) > parseInt(s, 10) - 1 && (el.selectedIndex = el.length - 1, $(el).change(), setTimeout("$('#" + el.id + "').change();", 100 * val))
                }
                try {
                    $(e.data.me).trigger("heightchange", [section, newValue])
                } catch (err) {
                    e.data.me.log("warn", err)
                }
                break;
            case "width":
                width = $(e.data.me._settings).find("#sSection_" + section).width();
                try {
                    $(e.data.me).trigger("widthchange", [section, newValue])
                } catch (err) {
                    e.data.me.log("warn", err)
                }
                $(e.data.me._settings).find(".section").each(function(index, Element) {
                    self.loopBreak(arguments.callee.name, 8029, index), parseInt(Element.id.split("_")[1], 10) > parseInt(section, 10) && $(Element).css({
                        left: $(Element).css("left") - width
                    })
                });
                break;
            case "depth":
                timer = 0, $(e.data.me._settings).find("select.base.depth").each(function(index, Element) {
                    if (self.loopBreak(arguments.callee.name, 8040, index), Element != e.target) {
                        var section = $("#sSection_" + Element.id.split("_")[1])[0];
                        setTimeout(function() {
                            self.loopBreak(arguments.callee.name, 8044), $(section).css({
                                zIndex: timer
                            }).find(".sectionProperties").slideDown("fast", function() {
                                self.loopBreak(arguments.callee.name, 8048), void 0 !== $.fn.blink ? $(Element).blink(1, 2, function() {
                                    self.loopBreak(arguments.callee.name, 8051), Element.selectedIndex = e.target.selectedIndex, $(Element).blink(3, 4, function() {
                                        self.loopBreak(arguments.callee.name, 8054), $(section).css({
                                            zIndex: ""
                                        }).find(".sectionProperties").slideUp("fast")
                                    })
                                }) : (Element.selectedIndex = e.target.selectedIndex, $(section).css({
                                    zIndex: ""
                                }).find(".sectionProperties").slideUp("fast"))
                            })
                        }, 200 * timer), timer++
                    }
                });
                try {
                    $(e.data.me).trigger("depthchange", [section, newValue])
                } catch (err) {
                    e.data.me.log("warn", err)
                }
                e.data.me._shelving && (e.data.me._shelving.depth = newValue), e.data.me._depth = newValue;
                break;
            case "shelves":
                try {
                    $(e.data.me).trigger("shelvecountchange", [section, newValue])
                } catch (err) {
                    e.data.me.log("warn", err)
                }
        }
        e.data.me.updateBaseValues(), self.changingStop(fnName)
    }, self.updateBaseValues = function() {
        var sectionNo, sectionInfo, shelvecount, height = 0,
            width = 0,
            shelves = 0,
            sectionCount = 0,
            fnName = arguments.callee.name;
        for (sectionNo in self.loopBreak(fnName, 8105), self.changingStart(fnName), this._shelving.sections) sectionInfo = this._shelving.sections[sectionNo], isNaN(sectionInfo.height) || (height = Math.max(height, sectionInfo.height)), isNaN(sectionInfo.width) || (width += sectionInfo.width, sectionInfo.parts && sectionInfo.parts.shelve && (shelvecount = Object.size(sectionInfo.parts.shelve)) && (shelves += shelvecount, sectionCount++));
        this._shelving.height = height, this._shelving.width = width, this._shelving.shelves = shelves / sectionCount, self.changingStop(fnName)
    }, self._onBtnShelvesAddClick = function() {
        var fnName = arguments.callee.name;
        self.loopBreak(fnName, 8133), self.changingStart(fnName), $("#sShelves_" + section)[0].selectedIndex = $("#sShelves_" + section)[0].selectedIndex + 1, $("#sShelves_" + section).change(), self.changingStop(fnName)
    }, self._onBtnSidesAddClick = function() {
        var frmDiv = document.createElement("div"),
            fnName = arguments.callee.name;
        self.loopBreak(fnName, 8142), self.changingStart(fnName), $(frmDiv).append('<form method="post"><h3>Positie</h3><div style="float: left"><input type="radio" id="chkLeft" /><label for="chkLeft">Links</label></div><div style="float: right"><input type="radio" id="chkRight" /><label for="chkRight">Rechts</label></div><div class="spacer" /><h3>Geperforeerd</h3><div><input type="radio" id="chkPerf" /><label for="chkPerf">Geperforeerd</label><img style="float: right" src="/images/frontmini/backperf.png" alt="Geperforeerd"></div><div><input type="radio" id="chkClose" /><label for="chkClose">Gesloten</label><img style="float: right" src="/images/frontmini/back.png" alt="Gesloten"></div></form>'), $(frmDiv).dialog({
            autoOpen: !0,
            closeOnEscape: !0,
            modal: !0,
            title: "Maak een nieuwe zijwand",
            buttons: {
                OK: function() {
                    self.loopBreak(arguments.callee.name, 8180), $(this).dialog("close"), $(frmDiv).remove()
                },
                Annuleren: function() {
                    self.loopBreak(arguments.callee.name, 8187), $(this).dialog("close"), $(frmDiv).remove()
                }
            }
        }), self.changingStop(fnName)
    }, self._onBtnBacksAddClick = function() {
        self.loopBreak(arguments.callee.name, 8196)
    }, self._onBtnDoorsAddClick = function() {
        self.loopBreak(arguments.callee.name, 8199)
    }
}

function SKPriceCalculator(parent, ancestors) {
    var self = this,
        priceErrorCount = 0;
    self._settings = null, self.canvasElement = null, self._shelving = null, self._current = 0, self._fieldElement = null, self._items = {}, self._price = 0, self._dirty = !1, self.rebuilding = 0, self.rebuildTimer = null, self._debug = {
        newArt: !1,
        change: !0
    }, self._skPriceCalculator = self, void 0 === ancestors ? ancestors = [SKPriceCalculator] : ancestors.unshift(SKPriceCalculator), SKShelvingBaseClass.call(self, parent, "Shelving Pricing", ancestors), self.save = function() {
        self.loopBreak(arguments.callee.name, 8331)
    }, self.shelving2array = function() {
        return self.loopBreak(arguments.callee.name, 8334), self._shelving
    }, self.initialize = function(shelving, current) {
        self.loopBreak(arguments.callee.name, 8347), self.log("info", self.name + ": Initializing"), self._shelving = shelving, self._depth = self._shelving.depth, self._current = current
    }, self.bindCanvas = function(canvas) {
        self.loopBreak(arguments.callee.name, 8354), this.canvasElement = canvas, $(this.canvasElement).on("newarticle", {
            me: this
        }, this._canvasNewArticle), $(this.canvasElement).on("changearticle", {
            me: this
        }, this._canvasChangeArticle), $(this.canvasElement).on("movearticle", {
            me: this
        }, this._canvasMoveArticle), $(this.canvasElement).on("delarticle", {
            me: this
        }, this._canvasDelArticle), $(this.canvasElement).on("delshelve", {
            me: this
        }, this._canvasDelShelve), $(this.canvasElement).on("empty", {
            me: this
        }, this._canvasEmpty), $(this.canvasElement).on("ready", {
            me: this
        }, this._canvasReady)
    }, self.bindSettings = function(settings) {
        self.loopBreak(arguments.callee.name, 8379), this._settings = settings, $(this._settings).on("basechange", {
            me: this
        }, this._baseChange)
    }, self.bindField = function(Element) {
        self.loopBreak(arguments.callee.name, 8386), this._fieldElement = Element
    }, self._buildShelvingPath = function(section, artType, id, x, y, z, perfo, color) {
        if (self.loopBreak(arguments.callee.name, 8390), self._items || (self._items = {}), self._items[artType] || (self._items[artType] = {}), self._items[artType][x] || (self._items[artType][x] = {}), self._items[artType][x][y] || (self._items[artType][x][y] = {}), self._items[artType][x][y][z] || (self._items[artType][x][y][z] = {}), self._items[artType][x][y][z][perfo] || (self._items[artType][x][y][z][perfo] = {}), self._items[artType][x][y][z][perfo][color] || (self._items[artType][x][y][z][perfo][color] = {}), self._shelving) {
            self._shelving.sections || (self._shelving.sections = {}), self._shelving.sections[section] || (self._shelving.sections[section] = {}), self._shelving.sections[section].parts || (self._shelving.sections[section].parts = {});
            var sectionDetails = self._shelving.sections[section];
            (!sectionDetails.parts[artType] || sectionDetails.parts[artType] instanceof Array && 0 === sectionDetails.parts[artType].length) && (sectionDetails.parts[artType] = {}), self._shelving.sections[section].parts[artType][id] || (self._shelving.sections[section].parts[artType][id] = {})
        }
    }, self._rebuild = function(e) {
        var me, fnName = arguments.callee.name;
        if (self.loopBreak(fnName, 8435), e && e.data && void 0 !== e.data.me ? me = e.data.me : void 0 !== this && void 0 !== this._rebuild && (me = this), me.rebuilding) return me.rebuildTimer && clearTimeout(me.rebuildTimer), void(me.rebuildTimer = setTimeout(function() {
            me._rebuild()
        }, 50));
        me.rebuildTimer && (clearTimeout(me.rebuildTimer), me.rebuildTimer = null), me.rebuilding += 1, self.loopBreak(fnName, 8456), self.changingStart(fnName), 10 < priceErrorCount && alert("Teveel foutmeldingen bij het berekenen van de prijs"), $.ajax({
            cache: !1,
            data: {
                mode: "calcall",
                scaffoldType: self.scaffoldType,
                sections: me._shelving.sections.length - 1,
                current: me._current,
                shelving: $.param(me._shelving)
            },
            error: function(jqXHR, textStatus) {
                self.loopBreak(arguments.callee.name, 8472, textStatus), me._debug.change && me.log("warn", ": -------------------------- ERROR recalc  " + me._price.toFixed(2)), alert("Berekenen van een prijs is niet mogelijk."), me.rebuilding = 0, self.changingStop(fnName)
            },
            success: function(data, textStatus) {
                self.loopBreak(arguments.callee.name, 8486, textStatus), me._debug.change && me.log("debug", ": ++++++++++++++++++++++++++++++++ recalc  " + parseFloat(data).toFixed(2)), isNaN(data) ? (priceErrorCount += 1, me.updatePrice("-,--")) : (me._price = parseFloat(data), me.updatePrice(me._price)), me.showPartList(), me.rebuilding = 0, self.changingStop(fnName), $("#prijs").show()
            },
            type: "POST",
            url: window.SKBaseFolder + "/php/config_v3/calcprice.php?all"
        }), $("#prijs").show()
    }, self.updatePrice = function(price) {
        self.loopBreak(arguments.callee.name, 8516, price);
        var me = this;
        me._fieldElement && ("function" == typeof $(me._fieldElement).blink && $(me._fieldElement).blink(0, 2), $(me._fieldElement).text(me._price.toFixed(2).replace(".", ",")), "function" == typeof $(me._fieldElement).blink && $(me._fieldElement).blink(0, 1));
        try {
            $(window).trigger("price", me._price), $(me).trigger("price", me._price)
        } catch (err) {
            me.log("warn", err)
        }
        isNaN(price) && me._rebuild()
    }, self.addtocart = function(event, existoption, count) {
        self.loopBreak(arguments.callee.name, 8556, existoption), existoption || (existoption = 2);
        var spinner, t, me = null,
            async = void 0 === event || void 0 === event.type || "unload" !== event.type;
        if (me = event && event.data && event.data.me ? event.data.me : this, self.loopBreak(arguments.callee.name, 8574), self.scaffoldBusy && me.log("warn", "Er is nog een berekening bezig..."), (spinner = document.createElement("DIV")).className = "spinner", spinner.id = "CartSpinner", $(spinner).css({
                width: "99%",
                height: "99%",
                backgroundUrl: window.SKBaseFolder + "/images/loader.gif",
                backgroundRepeat: "none",
                backgroundPosition: "50% 50%",
                backgroundColor: "#fff",
                position: "absolute",
                zIndex: 20
            }), $("#dialog.ui-dialog").dialog("destroy"), "number" != typeof count && 0 < $("#bestelaantal").length && (count = parseInt($("#bestelaantal").val(), 10)), "number" != typeof count) return $("body").append('<div id="dialog-confirm" title="Configuratie bestellen"><p><span class="ui-icon ui-icon-info" style="float:left; margin:0 7px 20px 0;"></span>Hoe vaak wilt u deze configuratie bestellen?</p><input type="number" id="bestelaantal" value="1" width="6" maxlength="2" style="width:60px;" /></div>'), void $("#dialog-confirm").dialog({
            resizable: !1,
            height: 240,
            width: 350,
            modal: !0,
            buttons: {
                Bestellen: function() {
                    self.loopBreak(arguments.callee.name, 8617), $(this).dialog("close"), me.addtocart(event, 2, parseInt($("#bestelaantal").val(), 10)), $(this).dialog("destroy"), $(this).remove()
                },
                Annuleren: function() {
                    self.loopBreak(arguments.callee.name, 8625), $(this).dialog("close"), $(this).dialog("destroy"), $(this).remove()
                }
            }
        });
        count && !isNaN(count) ? ((me._dirty || "new" === me._current) && (t = (new Date).getTime(), t -= Math.floor(t / 31556926), me._current = window.navigator.appName.substr(0, 1) + "_" + SKBaseClass.baseConverter(t, 10, 36) + "_" + SKBaseClass.baseConverter((new Date).getMilliseconds(), 10, 36), window.current = me.canvasElement._current = me._settings._current = me._current, me._dirty = !1), self.loopBreak(arguments.callee.name, 8653), $.ajax({
            url: window.SKBaseFolder + "/php/config_v3/cart.php",
            async: async,
            type: "POST",
            cache: !1,
            data: {
                mode: "add",
                scaffoldType: self.scaffoldType,
                sections: Object.size(me._shelving),
                current: me._current,
                onexist: existoption,
                count: count,
                settings: $("form.settings, form.edit").serialize(),
                shelving: $.param(me._shelving)
            },
            success: function(data, textStatus) {
                if (self.loopBreak(arguments.callee.name, 8672, textStatus), $(spinner).remove(), "exists" !== data) {
                    "SPAN" === event.target.tagName && (event.target = event.target.parentNode);
                    var startcount, ShelvingId = data.split(/\r\n|\r|\n/g);
                    if (ShelvingId = ShelvingId[0], data = data.substr(ShelvingId.length), me._goto = "", event && event.target && event.target.id && ("btnSave" === event.target.id.substr(0, 7) || 2 < window.OFFSET.length) && (me._goto = "cart"), "<form" === data.trim().substr(0, 5) && (me._goto = "form"), me.uploadImage(ShelvingId), startcount = parseInt($(".cart .count").text().replace("(", "").replace(")", "").trim(), 10), isNaN(startcount) && (startcount = 0), $(".cart .count").text("(" + (startcount + count) + ")"), "<form" === data.trim().substr(0, 5) && ($("body").append('<div style="display: none" id="spCartAddjQAS6DivForm">' + data + "<div>"), $("#spCartAddjQAS6DivForm").find("form").each(function(index, Element) {
                            self.loopBreak(arguments.callee.name, 8709), Element.submit()
                        })), !async)
                        for (self.loopBreak(arguments.callee.name, 8716), startcount = 0; startcount < 3; startcount++) $.ajax({
                            async: !1,
                            url: window.SKBaseFolder + "/php/config_v3/calcprice.php?noop",
                            type: "POST",
                            cache: !1,
                            data: {
                                scaffoldType: self.scaffoldType,
                                mode: "noop"
                            }
                        })
                } else confirm("Deze stelling staat al in de winkelwagen.\nWilt u die stelling bijwerken?\n'Annuleren' plaatst een nieuwe stelling in de winkelwagen") ? me.addtocart(null, 1) : me.addtocart(null, 2)
            }
        })) : alert("Toevoegen aan de winkelwagen geannuleerd. \nGeen geldig aantal opgegeven.")
    }, self.replaceCartItem = function(e, existoption) {
        self.loopBreak(arguments.callee.name, 8734, existoption), e.data.me.addtocart(e, 3)
    }, self.cancelEdit = function(e, existoption) {
        self.loopBreak(arguments.callee.name, 8738, existoption), window.location.href = window.SKBaseFolder + "cart/"
    }, self.animateRenderedCanvas = function() {
        self.loopBreak(arguments.callee.name, 8742)
    }, self.uploadImage = function(data, target, whiteBackGround) {
        var gotoX, gotoY, newImageWidth, newImageHeight, spHandleOrder, me = this,
            cvWallColor = $("#cvWall").css("background-color"),
            cvFloorColor = $("#cvFloor").css("background-color"),
            $cartContainer = $("#header .cartContainer").first(),
            $cartContent = $cartContainer.find(".cartcontent").first(),
            $cartCount = $cartContainer.find(".count").first();

        function renderError(pCanvas) {
            self.loopBreak(arguments.callee.name, 8825), spHandleOrder(pCanvas)
        }

        function resetCSS(oldwidth) {
            self.loopBreak(arguments.callee.name, 8829), $("html, body, #container, #main, .content").css("background-color", ""), $("div.configurator .addsection, div.configurator .brace, div.configurator .shelveInfo").css("display", ""), $("div.configurator .section.active").css("background", ""), $("div.configurator .slidingDoor").removeClass("open"), $("div.configurator").width("auto"), $(".colorPicker").show(), $(".save").show(), $("#cvWall").css("background-color", cvWallColor), $("#cvFloor").css("background-color", cvFloorColor), oldwidth ? $("div.configurator").width(oldwidth) : ($("div.configurator .info").css("display", ""), $("div.configurator").width("")), $(".fixBackStartHeight").hide(), $("div.configurator back.perfo").css({
                "background-color": "",
                "background-image": "",
                "background-repeat": "",
                "background-position": "",
                "background-size": ""
            }), $("div.configurator .side.perfo").css({
                "background-image": "",
                "background-position": "",
                "background-size": "",
                border: "",
                width: ""
            }), $(".vsizebar.left .size").css({
                transform: $(".vsizebar.left .size").data("transform"),
                width: "",
                "text-align": ""
            }), $(".vsizebar.left div").css("background", "")
        }

        function spImgRendered(pCanvas) {
            self.loopBreak(arguments.callee.name, 8880), $(window).unbind("error", renderError);
            var productX, productY, basketX, basketY, ctx, imageData, pixel, p, canvasBackup, filename, oldwidth = $("div.configurator").width(),
                preview = !1;
            if (preview && (preview = document.createElement("img"), $(preview).css({
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: pCanvas.width,
                    height: pCanvas.height
                }), preview.src = pCanvas.toDataURL("image/png"), document.body.appendChild(preview)), resetCSS(oldwidth), pCanvas.getContext) {
                for (pixel = (imageData = (ctx = pCanvas.getContext("2d")).getImageData(0, 0, pCanvas.width, pCanvas.height)).data, p = 0; p < pixel.length; p += 4) 255 == pixel[p + 0] && 255 == pixel[p + 1] && 255 == pixel[p + 2] && (pixel[p + 3] = 0);
                ctx.putImageData(imageData, 0, 0), preview && (preview.src = pCanvas.toDataURL("image/png")), (canvasBackup = document.createElement("canvas")).height = pCanvas.height, canvasBackup.width = pCanvas.width, canvasBackup.getContext("2d").drawImage(pCanvas, 0, 0), ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height), $("div.configurator .brace.x").each(function(index, Element) {
                    self.loopBreak(arguments.callee.name, 8934, index);
                    var bottom = parseInt($(Element).css("bottom"), 10),
                        height = parseInt($(Element).height(), 10),
                        width = parseInt($(Element).width(), 10),
                        left = parseInt($(Element.parentNode).css("left"), 10);
                    ctx.lineWidth = 2, ctx.lineCap = "round", ctx.lineJoin = "round", ctx.beginPath(), ctx.moveTo(left, pCanvas.height - (bottom + height)), ctx.lineTo(left + width, pCanvas.height - bottom), ctx.moveTo(left + width, pCanvas.height - (bottom + height)), ctx.lineTo(left, pCanvas.height - bottom), ctx.stroke()
                }), ctx.drawImage(canvasBackup, 0, 0), preview && (preview.src = pCanvas.toDataURL("image/png"))
            }
            if (void 0 !== pCanvas.toDataURL) {
                try {
                    filename = data.indexOf("{") ? JSON.parse(data).id : data
                } catch (err) {
                    me.log("error", err)
                }
                self.loopBreak(arguments.callee.name, 8969), $.ajax({
                    url: window.SKBaseFolder + "/php/config_v3/cart.php",
                    cache: !1,
                    type: "POST",
                    data: {
                        mode: "img",
                        scaffoldType: self.scaffoldType,
                        file: data,
                        img: pCanvas.toDataURL("image/png")
                    },
                    success: function(data, textStatus) {
                        self.loopBreak(arguments.callee.name, 8981, textStatus), $.ajax({
                            cache: !1,
                            url: window.SKBaseFolder + "/images/orders_2d/" + filename + ".png"
                        })
                    }
                })
            }
            productX = $(me.canvasElement.htmlElement).offset().left, productY = $(me.canvasElement.htmlElement).offset().top, null != target && 0 !== $(target).length || (target = "#header .cart"), 0 < $(target).length ? (basketX = $(target).offset().left, basketY = $(target).offset().top) : 0 < $("#btnCartAdd").length ? (basketX = $("#btnCartAdd").offset().left, basketY = $("#btnCartAdd").offset().top) : 0 < $("#btnSave2").length && (basketX = $("#btnSave2").offset().left, basketY = $("#btnSave2").offset().top), gotoX = basketX - productX, gotoY = basketY - productY, newImageWidth = 225, newImageHeight = 26, $(pCanvas).css({
                opacity: .8,
                position: "absolute",
                left: productX,
                top: productY,
                zIndex: 100
            }).appendTo(document.body), spHandleOrder(pCanvas)
        }
        if (self.loopBreak(arguments.callee.name, 8769), $cartContent.slideDown(), null == whiteBackGround && (whiteBackGround = !0), whiteBackGround ? ($("html, #cvWall, #cvFloor").css("background-color", "#fff"), $(".fixBackStartHeight").hide()) : $("html").css("background-color", "#fff"), $(".colorPicker").hide(), $(".save").hide(), $("div.configurator .addsection, div.configurator .brace, div.configurator .shelveInfo").css("display", "none"), $("div.configurator .info").css("display", "none"), $("div.configurator").width(parseInt($("div.configurator .addsection").css("left"), 10) + 30), $("div.configurator .active").removeClass("active"), $("div.configurator .slidingDoor").addClass("open"), $("div.configurator .slidingDoor.wit").find(".left, .right").css({
                background: "#f9f9f9"
            }), $("div.configurator .slidingDoor.metaal").find(".left, .right").css({
                background: "#d0d0d0"
            }), $("div.configurator .slidingDoor.transparant").find(".left, .right").css({
                background: "#e9e9e9"
            }), $("div.configurator .back.solid").css({
                background: "#ccc"
            }), $("div.configurator .back.perfo").css({
                "background-color": "#eee",
                "background-image": "url('/images/frontmini/perfoCCC.png')",
                "background-repeat": "repeat",
                "background-position": "top left",
                "background-size": "auto"
            }), $("div.configurator .side.perfo").css({
                "background-image": 'url("/images/frontmini/perfo444.png")',
                "background-position": "5px 0px",
                "background-size": "8px 8px",
                "background-repeat": "repeat",
                border: "0px none",
                width: "2px"
            }), $('img[src*="googleadpackes.g.doubleclick.net"]').remove(), $(".vsizebar.left .size").data("transform", $(".vsizebar.left .size").css("transform")), $(".vsizebar.left .size").css({
                transform: "",
                width: 50,
                "text-align": "left"
            }), $(".vsizebar.left div").css("background", "none"), spHandleOrder = function(pCanvas) {
                self.loopBreak(arguments.callee.name, 9029);
                var winParent = window,
                    winCount = 0;
                if ($cartContent.slideDown(), resetCSS(), $(window).unbind("error", renderError), "cart" === me._goto) {
                    if (window.opener) {
                        try {
                            $(window.opener).trigger("saved"), $(window.opener).trigger("closeme")
                        } catch (err) {}
                        if (window.opener.postMessage) try {
                            window.opener.postMessage("saved", "*"), window.opener.postMessage("closeMe", "*")
                        } catch (err) {
                            me.log("error", err)
                        }
                    }
                    if (window !== window.top) {
                        for (; winParent && winCount < 10;) {
                            winCount++;
                            try {
                                $(winParent).trigger("saved"), $(winParent).trigger("closeme")
                            } catch (err) {
                                me.log("error", err)
                            }
                            if (winParent.postMessage) try {
                                winParent.postMessage("saved", "*"), winParent.postMessage("closeMe", "*")
                            } catch (err) {
                                me.log("error", err)
                            }
                            winParent = winParent != winParent.parent && winParent.parent
                        }
                        setTimeout(function() {
                            self.loopBreak(arguments.callee.name, 9081), window.location.href = window.SKBaseFolder + "cart/"
                        }, 25)
                    } else window.location.href = window.SKBaseFolder + "cart/"
                } else pCanvas && (self.loopBreak(arguments.callee.name, 9093), setTimeout(function() {
                    self.loopBreak(arguments.callee.name, 9095), $(pCanvas).animate({
                        opacity: .1,
                        marginLeft: gotoX,
                        marginTop: gotoY,
                        width: newImageWidth,
                        height: newImageHeight
                    }, 400, function() {
                        $(pCanvas).remove()
                    })
                }, 100)), "/" === window.SKBaseFolder ? setTimeout(function() {
                    self.loopBreak(arguments.callee.name, 9109);
                    var div = document.createElement("div");
                    $(div).load("/php/config_v3/cart.php", {
                        mode: "shortsum"
                    }), 0 < $(".ConfigPrice .pointers, .ConfigPrice .shopcart").length && $(".ConfigPrice .pointers, .ConfigPrice .shopcart").fadeOut(function() {
                        $(this).remove()
                    }), setTimeout(function() {
                        self.loopBreak(arguments.callee.name, 9120), $(div.children[0]).hide(), $(".ConfigPrice").append(div.children[0]), $(".ConfigPrice .spacer").appendTo($(".ConfigPrice")), $(".ConfigPrice .shopcart").fadeIn()
                    }, 500)
                }, 600) : "form" !== me._goto && setTimeout(function() {
                    self.loopBreak(arguments.callee.name, 9134), $.ajax({
                        url: "/",
                        data: {
                            scaffoldType: self.scaffoldType,
                            template: "cart"
                        },
                        cache: !1,
                        success: function(data) {
                            self.loopBreak(arguments.callee.name, 9143);
                            var $nwContain, $nwCount, $nwContent, div = document.createElement("div");
                            $(div).append(data), $nwCount = ($nwContain = $(div).find(".cartContainer")).find(".count").first(), $nwContent = ($nwContent = $nwContain.find(".cartcontent")).first(), $cartCount.html($nwCount.html()), $cartContent.html($nwContent.html()), setTimeout(function() {
                                $cartContent.slideUp()
                            }, 6500)
                        },
                        error: function(jqXHR, textStatus) {
                            self.loopBreak(arguments.callee.name, 9160), alert(textStatus)
                        }
                    })
                }, 250)
            }, $(window).bind("error", {}, renderError), void 0 !== $.html2canvas || void 0 !== $.fn.html2canvas) try {
            $(me.canvasElement.htmlElement).html2canvas({
                flashcanvas: window.SKBaseFolder + "/blocks/html2canvas/external/flashcanvas.min.js",
                logging: !0,
                profile: !0,
                useCORS: !0,
                allowTaint: !0,
                onrendered: spImgRendered
            })
        } catch (err) {
            me.log("error", err)
        } else "function" == typeof html2canvas && html2canvas.Renderer ? html2canvas(me.canvasElement.htmlElement, {
            onrendered: spImgRendered
        }) : "function" == typeof html2canvas && html2canvas.CanvasRenderer ? html2canvas(me.canvasElement.htmlElement).then(spHandleOrder) : spHandleOrder(null)
    }, self.showPartList = function() {
        self.loopBreak(arguments.callee.name, 9204);
        try {
            if (0 < $("#partList").length) {
                $("#partList").empty(), $("#partList").append("<h2>Formaat: (" + this._shelving.width + "x" + this._shelving.height + "x" + this._shelving.depth + ")</h2>"), $("#partList").append('<div class="line hdr"><span class="cnt">#</span><span class="tms">&nbsp;</span><span class="nm">Naam</span><span class="tp">Type</span><span class="sz">Grootte</span><span class="art">art</span><span class="pos">Pos</span><span class="prc">Prijs</span></div>');
                var sectionprice, i, artType, id, price, cls, item, x, y, z, perfo, illegalIDS = ["getUnique", "indexOf", "unique", "sum"];
                for (i in this._shelving.sections)
                    if (-1 === $.inArray(i, illegalIDS)) {
                        for (artType in $("#partList").append("<h2>Section " + i + "</h2>"), sectionprice = 0, this._shelving.sections[i].parts)
                            if (-1 === $.inArray(artType, illegalIDS))
                                for (id in this._shelving.sections[i].parts[artType])
                                    if (-1 === $.inArray(id, illegalIDS) && "object" == typeof(item = this._shelving.sections[i].parts[artType][id]))
                                        if (0 < Object.size(item)) {
                                            switch (price = isNaN(item.price) ? NaN : item.price, cls = "", price || (price = 0, cls = " error"), x = item.x ? item.x : " &nbsp; ", y = item.y ? item.y : " &nbsp; ", z = item.z ? item.z : " &nbsp; ", "undefined" === x && (x = "&minus;"), "undefined" === y && (y = "&minus;"), "undefined" === z && (z = "&minus;"), item.perfo) {
                                                case 0:
                                                    perfo = " &#9673; ";
                                                    break;
                                                case 1:
                                                    perfo = " &#9675; ";
                                                    break;
                                                default:
                                                    perfo = " &nbsp; "
                                            }
                                            $("#partList").append('<div class="line' + cls + '"><span class="cnt">' + item.count + '</span><span class="tms">x</span><span class="nm">' + id + '</span><span class="tp">' + ("slidingDoor" === artType ? "sl.door" : artType) + '</span><span class="sz">' + x + "x" + y + "x" + z + perfo + '</span><span class="art">' + item.id + '&nbsp;</span><span class="pos">' + item.position + '</span><span class="prc">' + price.toFixed(2) + "</span></div>"), sectionprice += parseFloat(item.count) * parseFloat(price)
                                        } else $("#partList").append('<div class="line"><span class="cnt">-</span><span class="tms">x</span><span class="nm">' + id + '&nbsp;</span><span class="tp">' + artType + '</span><span class="sz">---</span><span class="art">-</span><span class="pos">-</span><span class="prc">-</span></div>');
                        $("#partList").append('<div class="secttotal">' + sectionprice.toFixed(2) + "</div>")
                    }
            }
        } catch (err) {
            this.log("warn", err)
        }
    }, self._getItemPrice = function(artType, x, y, z, perfo, color, callback) {
        self.loopBreak(arguments.callee.name, 9312, artType);
        var itemProps, me = this;
        if (null == perfo && (perfo = -1), null == color && (color = 0), me._items || (me._items = {}), me._items[artType] || (me._items[artType] = {}), me._items[artType][x] || (me._items[artType][x] = {}), me._items[artType][x][y] || (me._items[artType][x][y] = {}), me._items[artType][x][y][perfo] || (me._items[artType][x][y][perfo] = {}), me._items[artType][x][y][perfo] || (me._items[artType][x][y][perfo] = {}), me._items[artType][x][y][perfo][color] || (me._items[artType][x][y][perfo][color] = {}), me._items[artType][x][y][z][perfo][color] || (me._items[artType][x][y][z][perfo][color] = {
                price: 0,
                maxload: 0,
                id: 0
            }), void 0 !== (itemProps = me._items[artType][x][y][z][perfo][color]).price && itemProps.price) {
            if (callback) try {
                callback(me._items[artType][x][y][z][perfo][color].price)
            } catch (err) {
                me.log("error", err)
            }
        } else me.rebuilding += 1, self.loopBreak(arguments.callee.name, 9355, me.rebuilding), 10 < priceErrorCount && alert("Teveel foutmeldingen bij het berekenen van de prijs"), $.ajax({
            cache: !0,
            async: !1,
            data: {
                shelving: me._current,
                mode: "properties",
                scaffoldType: self.scaffoldType,
                artType: artType,
                width: x,
                hasdoors: 0,
                height: y,
                depth: z,
                perfo: perfo,
                color: color
            },
            error: function(jqXHR, textStatus) {
                self.loopBreak(arguments.callee.name, 9375, textStatus), me.log("warn", "Berekenen van een prijs is niet mogelijk (" + textStatus + ")"), me.rebuilding = Math.max(me.rebuilding - 1, 0)
            },
            success: function(data, textStatus) {
                self.loopBreak(arguments.callee.name, 9381, textStatus);
                var pd, i, pricelist = data.split("\n"),
                    productdata = {};
                if (0 < pricelist.length) {
                    if (isNaN(pricelist[0]) && "" < pricelist[0])
                        if (0 < pricelist[0].indexOf("=")) {
                            for (i = 0; i < pricelist.length; i++) 1 < (pd = pricelist[i].split("=", 2)).length && (productdata[pd[0]] = pd[1]);
                            isNaN(productdata.price) || (pricelist[0] = productdata.price), void 0 === me._itemProperties && (me._itemProperties = {}), me._itemProperties[productdata.id] = productdata, me._items[artType][x][y][z][perfo][color].id = productdata.id, me._items[artType][x][y][z][perfo][color].article = productdata, me.set("items", me._itemProperties)
                        } else me.log("error", "Opgehaalde prijs is geen getal waarde: " + pricelist[0]);
                    isNaN(pricelist[0]) ? (priceErrorCount += 1, me.log("error", "Opgehaalde prijs is geen getal waarde: " + pricelist[0])) : me._items[artType][x][y][z][perfo][color].price = Math.round(1e3 * parseFloat(pricelist[0])) / 1e3, callback && (void 0 !== productdata.id ? callback(me._items[artType][x][y][z][perfo][color].price, productdata) : callback(me._items[artType][x][y][z][perfo][color].price))
                } else me.log("error", "Berekenen van een prijs is niet mogelijk.");
                me.updatePrice(me._price), me.rebuilding = Math.max(me.rebuilding - 1, 0), me.rebuildTimer && (clearTimeout(me.rebuildTimer), me.rebuildTimer = setTimeout(function() {
                    self.loopBreak(arguments.callee.name, 9446), me._rebuild()
                }, 50))
            },
            type: "POST",
            url: window.SKBaseFolder + "/php/config_v3/calcprice.php?" + artType.split(" ")[0]
        });
        return !isNaN(me._items[artType][x][y][z][perfo][color].price) && 0 < me._items[artType][x][y][z][perfo][color].price ? me._items[artType][x][y][z][perfo][color].price : 0
    }, self._baseChange = function(e, baseType, section, newValue) {
        self.loopBreak(arguments.callee.name, 9475, newValue), self._dirty = !0
    }, self._canvasEmpty = function(e) {
        self.loopBreak(arguments.callee.name, 9479), e.data.me._price = 0
    }, self._canvasReady = function(e) {
        self.loopBreak(arguments.callee.name, 9483), e.data.me._rebuild()
    }, self._canvasNewArticle = function(e, artType, id, section, position, x, y, z, perfo, color) {
        var element, oldPrice, sParts, me = e.data.me,
            doubleArticles = ["pillar", "foot", "topdop"],
            fnName = arguments.callee.name;
        self.loopBreak(fnName, 9490, artType), self.changingStart(fnName);
        try {
            self._dirty = !0, $(e.data.me._fieldElement).text("..."), artType instanceof SKBaseArticle && (artType = (element = artType).priceObjectName, id || void 0 !== element.htmlElement && null !== element.htmlElement && (id = element.htmlElement.id), "brace" === artType && element instanceof SKArtBrace && (artType = element.htmlElement.className), section = element.sectionNo, x = element.width, y = element.height, z = element.depth, perfo = element.perfo, position = element.position, color = element.color), null == perfo && (perfo = -1), null == color && (color = 0), me._buildShelvingPath(section, artType, id, x, y, z, perfo, color), sParts = me._shelving.sections[section].parts, me._shelving && (void 0 === sParts[artType][id] || void 0 === sParts[artType][id].id ? sParts[artType][id] = {
                price: 0,
                position: position,
                x: x,
                y: y,
                z: z,
                count: 1,
                perfo: perfo,
                color: color
            } : isNaN(sParts[artType][id].id) || isNaN(sParts[artType][id].price) || (me._items[artType][x][y][z][perfo][color] = {
                id: parseInt(sParts[artType][id].id, 10),
                price: parseFloat(sParts[artType][id].price)
            })), me._items[artType][x][y][z][perfo][color].price ? (element && (element.DBValues = me._items[artType][x][y][z][perfo][color].article), sParts[artType][id].price = me._items[artType][x][y][z][perfo][color].price, me._items[artType][x][y][z][perfo][color].id && (sParts[artType][id].id = me._items[artType][x][y][z][perfo][color].id), element && element.count ? sParts[artType][id].count = element.count : 0 <= $.inArray(artType, doubleArticles) ? sParts[artType][id].count = 2 : sParts[artType][id].count = 1, isNaN(x) || (sParts[artType][id].x = x), isNaN(y) || (sParts[artType][id].y = y), isNaN(z) || (sParts[artType][id].z = z), isNaN(position) || (sParts[artType][id].position = position), isNaN(perfo) || (sParts[artType][id].perfo = perfo), sParts[artType][id].color = color, me._price += me._items[artType][x][y][z][perfo][color].price * sParts[artType][id].count, me.updatePrice(me._price), me._debug.newArt && me.log("debug", "Know Price (" + artType + " (" + id + ") | " + section + " \\ " + position + ") - (" + me._items[artType][x][y][z][perfo][color].price + "*" + e.data.sParts[artType][id].count + ") => " + e.data.me._price.toFixed(2)), me.showPartList()) : (self.loopBreak(arguments.callee.name, 9592), me._getItemPrice(artType, x, y, z, perfo, color, function(price, article) {
                self.loopBreak(arguments.callee.name, 9594, price), element && (element.DBValues = article), sParts[artType][id].price = price, article && (sParts[artType][id].id = parseInt(article.id, 10), sParts[artType][id].maxload = parseFloat(article.belastbaarheid), sParts[artType][id].x || (sParts[artType][id].x = article.x), sParts[artType][id].y || (sParts[artType][id].y = article.y), sParts[artType][id].z || (sParts[artType][id].z = article.z)), sParts[artType][id].position || (sParts[artType][id].position = position), element && element.count ? sParts[artType][id].count = element.count : 0 <= $.inArray(artType, doubleArticles) ? sParts[artType][id].count = 2 : sParts[artType][id].count = 1, oldPrice = me._price, me._price += price * sParts[artType][id].count, me._debug.newArt && me.log("debug", "Ajax Price (" + artType + " (" + id + ") ) " + oldPrice.toFixed(2) + " +  (" + price + "*" + sParts[artType][id].count + ") => " + me._price.toFixed(2)), me.updatePrice(me._price), me.showPartList()
            })), me.updatePrice(me._price)
        } catch (err) {
            self.log("error", err)
        }
        self.changingStop(fnName)
    }, self._canvasChangeArticle = function(e, artType, id, section, position, x, y, z, perfo, color) {
        var t, parts, px, py, me = e.data.me,
            oldprice = 0,
            part = null,
            fnName = arguments.callee.name;
        if (self.loopBreak(fnName, 9652, id), self.changingStart(fnName), null == perfo && (perfo = -1), null == color && (color = 0), me._dirty = !0, me._debug.change && me.log("warn", "Updating! function(e, " + artType + ", " + id + ", " + section + ", " + position + ", " + x + "," + y + "," + z + ")"), void 0 !== me._shelving && void 0 !== me._shelving.sections[section] && void 0 !== me._shelving.sections[section].parts && void 0 !== me._shelving.sections[section].parts[artType] && void 0 !== me._shelving.sections[section].parts[artType][id]) try {
            me._buildShelvingPath(section, artType, id, x, y, z, perfo, color), parts = me._shelving.sections[section].parts, (part = parts[artType][id]).count || (part.count = 1), part.price ? oldprice = part.price * part.count : part.artType && part.x && part.y && part.z && (t = part.artType, px = part.x, py = part.y, oldprice = me._items[t][px][py][part.z][perfo][color].price, oldprice *= part.count);
            try {
                part.id = "", part.maxload = "", part.position = position, part.x = x, part.y = y, part.z = z
            } catch (err) {
                me.log("warn", err)
            }
            me.log("debug", "change " + artType + ", " + id + ", " + section + ", " + position + ", " + x + ", " + y + ", " + z), me._items && me._items[artType] && me._items[artType][x] && me._items[artType][x][y] && me._items[artType][x][y][z] && void 0 !== me._items[artType][x][y][z][perfo][color].price && 0 < me._items[artType][x][y][z][perfo][color].price ? (me._debug.change && me.log("debug", "NEW PRICE (M:" + artType + " " + x + "x" + y + "x" + z + ") = " + me._price.toFixed(2) + " - " + oldprice + " + " + me._items[artType][x][y][z][perfo][color].price + " * " + part.count), me._price = me._price - oldprice + me._items[artType][x][y][z][perfo][color].price * part.count, part.price = me._items[artType][x][y][z][perfo][color].price, part.id = me._items[artType][x][y][z][perfo][color].id, void 0 !== part.item && (part.item = void 0, delete part.item), me.updatePrice(me._price), me.showPartList()) : me._getItemPrice(artType, x, y, z, perfo, color, function(price, article) {
                self.loopBreak(arguments.callee.name, 9739, price);
                var maxload, parts = me._shelving.sections[section].parts;
                article ? (maxload = article.belastbaarheid, parts[artType][id].id = parseInt(article.id, 10), parts[artType][id].maxload = parseInt(maxload, 10), void 0 !== parts[artType][id].item && (parts[artType][id].item = void 0, delete parts[artType][id].item), void 0 !== parts[artType][id].DBItem && (parts[artType][id].DBItem = void 0, delete parts[artType][id].DBItem)) : (parts[artType][id].id = "", parts[artType][id].maxload = ""), part.price && (oldprice = part.price * part.count), parts[artType][id].price = price, me._debug.change && me.log("debug", "NEW PRICE (A: " + artType + " " + x + "x" + y + "x" + z + ") = " + me._price.toFixed(2) + " - " + oldprice + " + " + price + " * " + parts[artType][id].count), me._price = me._price - oldprice + price * parts[artType][id].count, me.updatePrice(me._price), me.showPartList()
            })
        } catch (err) {
            me.log("warn", err)
        }
        self.changingStop(fnName)
    }, self._canvasMoveArticle = function(e, artType, id, section, from, to) {
        self.loopBreak(arguments.callee.name, 9797, id), e.data.me._shelving.sections[section].parts[artType][id].position = to, e.data.me._dirty = !0
    }, self._canvasDelArticle = function(e, artType, itemID, sectionNo, bottom, x, y, z, perfo, color) {
        $(e.data.me._fieldElement).text("..."), null == perfo && (perfo = -1), null == color && (color = 0);
        var price, count, parts, me = e.data.me,
            fnName = arguments.callee.name;
        self.loopBreak(fnName, 9816, itemID), self.changingStart(fnName), this !== me ? me._canvasDelArticle(e, artType, itemID, sectionNo, bottom, x, y, z) : (this._dirty = !0, this._buildShelvingPath(sectionNo, artType, itemID, x, y, z, perfo, color), (price = (parts = this._shelving.sections[sectionNo].parts)[artType][itemID].price) || (price = this._getItemPrice(artType, x, y, z, perfo, color, null), parts[artType][itemID].price = price), count = 1, parts[artType][itemID].count && (count = parts[artType][itemID].count), this.log("debug", "Remove item (" + artType + "::" + itemID + ") " + this._price + " - " + count + "*" + price), this._price -= price * count, parts[artType][itemID] = {}, me.updatePrice(me._price), this.showPartList()), self.changingStop(fnName)
    }, self._canvasDelShelve = function(e, sectionNo, No) {
        var me = e.data.me,
            fnName = arguments.callee.name;
        self.loopBreak(fnName, 9851, No), self.changingStart(fnName), me._dirty = !0, me._buildShelvingPath(sectionNo, "shelve", ""), me.showPartList(), self.changingStop(fnName)
    }
}

function SKLoader() {
    var _me, me, self;
    _me = me = self = this, self.abstrct = !1, SKShelvingBaseClass.call(this, null, "Shelving Loader", [SKLoader]), self.skCanvasBuilder = null, self.settings = null, self.price = null, self.dimensions = null, $("body").hasClass("hout") ? self.scaffoldType = "wood" : $("body").hasClass("wood") ? self.scaffoldType = "wood" : $("body").hasClass("G3") ? self.scaffoldType = "GS3" : $("body").hasClass("GS3") ? self.scaffoldType = "GS3" : $("body").hasClass("M3") ? self.scaffoldType = "GS3" : self.scaffoldType = "SK", Object.defineProperties || (SKShelvingBaseClass.scaffoldType = self.scaffoldType), self.current = !1, self.loopBreak(arguments.callee.name, 9910, "skConfig2DBase"), self.checkRequirements = function checkRequirements() {
        var version = null,
            gitCommitID = "",
            scripts, i, flushed = !1,
            fnName = arguments.callee.name;
        switch ($("div.configurator").html("Bezig met het controleren van de browser ondersteuning.<br />"), this.log("debug", "checkRequirements..."), "undefined" != typeof sessionStorage || $(".sessionStorageError").length || $("body").prepend('<div class="sessionStorageError">Uw browser ondersteunt geen sessie-opslag. Sommige functies werken mogelijk niet. <br />Probeer een nieuwere browser: <a href="http://chrome.google.com">Chrome</a> of <a href="http://getfirefox.com">Firefox</a></div>'), showBrowserUpdateWarning(), void 0 === window.SKBaseFolder && (window.SKBaseFolder = ""), self.loopBreak(fnName, 9935, window.SKBaseFolder), $.ajax({
            async: !1,
            cache: !0,
            url: window.SKBaseFolder + "/blocks/JSON-js/json2.pck.js",
            dataType: "script",
            error: function() {
                $.ajax({
                    url: "https://cdnjs.cloudflare.com/ajax/libs/json2/20160511/json2.min.js",
                    cache: !0,
                    async: !1,
                    dataType: "script",
                    success: function(data) {
                        eval(data)
                    }
                })
            }
        }), void 0 === $.jStorage && (self.loopBreak(fnName, 9956, "jStorage"), $.ajax({
            async: !1,
            cache: !0,
            url: window.SKBaseFolder + "/blocks/jStorage/jstorage.min.js",
            dataType: "script",
            error: function() {
                self.loopBreak(fnName, 9963, "jStorage (CDN)"), $.ajax({
                    async: !1,
                    cache: !0,
                    url: "https://cdnjs.cloudflare.com/ajax/libs/jStorage/0.4.12/jstorage.min.js",
                    dataType: "script",
                    success: function(data) {
                        eval(data)
                    }
                })
            }
        })), self.scaffoldType) {
            case "wood":
            case "hout":
                void 0 === SKCanvasBuilderWood && (self.loopBreak(fnName, 9982, "Wood"), $.ajax({
                    async: !1,
                    cache: !0,
                    url: window.SKBaseFolder + "/js/configuratorW.js",
                    dataType: "script"
                }));
                break;
            default:
                void 0 === SKCanvasBuilderGS3 && (self.loopBreak(fnName, 9997, "GS3"), $.ajax({
                    async: !1,
                    cache: !0,
                    url: window.SKBaseFolder + "/js/configuratorGS3.js",
                    dataType: "script",
                    error: function(jqXHR, textStatus) {
                        self.loopBreak(arguments.callee.name, 10005, textStatus), alert(textStatus)
                    },
                    success: function GS3LoadS6(data, textStatus) {
                        self.loopBreak(arguments.callee.name, 10009, textStatus), eval(data)
                    }
                }))
        }
        if (void 0 === "".hashCode && (self.loopBreak(fnName, 10019, "trim"), $.ajax({
                async: !1,
                cache: !0,
                url: window.SKBaseFolder + "/js/trim.pck.js",
                dataType: "script"
            })), void 0 === $.colorpicker && (self.loopBreak(fnName, 10028, "color"), $.ajax({
                async: !1,
                cache: !0,
                url: window.SKBaseFolder + "/blocks/colorpicker/jquery.colorpicker.js",
                dataType: "script"
            }), $("head").append("<link rel='stylesheet' type='text/css' href='" + window.SKBaseFolder + "/blocks/colorpicker/jquery.colorpicker.css'>")), void 0 !== $.jStorage && $.jStorage.storageAvailable()) {
            if (0 < $.jStorage.index().length) {
                for (self.loopBreak(fnName, 10058, "versionCheck"), version = this.get("version", null), scripts = $("script"), i = 0; i < scripts.length; i++)
                    if (scripts[i].src && 0 <= scripts[i].src.indexOf("?v=")) {
                        gitCommitID = scripts[i].src.split("?v=")[1];
                        break
                    }
                if (self.loopBreak(fnName, 10067, gitCommitID), 1 < $.jStorage.index().length && !self.get("gitCommitID")) try {
                    self.log("debug", "gitCommitID not set :: flush jStorage"), flushed || self.flushStorage(version, gitCommitID)
                } catch (err) {
                    self.log("error", err)
                }
                if (gitCommitID !== self.get("gitCommitID")) try {
                    self.log("debug", "gitCommitID changed :: flush jStorage"), flushed || self.flushStorage(version, gitCommitID)
                } catch (err) {
                    self.log("error", err)
                }
            }
        } else self.loopBreak(fnName, 10043, "jStorage"), $(".sessionStorageError").length < 1 && $("body").prepend('<div class="sessionStorageError">Uw browser ondersteunt geen gegevensopslag. Sommige functies werken mogelijk niet. <br />Probeer een nieuwere browser: <a href="http://chrome.google.com">Chrome</a> of <a href="http://getfirefox.com">Firefox</a></div>')
    }, self.flushStorage = function(version, gitCommitID) {
        self.loopBreak(arguments.callee.name, 10122, version + " != " + gitCommitID), $("div.configurator").append("Er is een nieuwe versie. De cache wordt geleegd. <br />");
        var i = 0,
            items = $.jStorage.index();
        for (i in items) try {
            "string" == typeof items[i] && "SK." === items[i].substr(0, 3) && $.jStorage.deleteKey(items[i])
        } catch (err) {
            _me.log("warn", err)
        }
        _me.set("version", version), _me.set("gitCommitID", gitCommitID)
    }, self.isBot || (self.setFancyInPage = function() {
        self.loopBreak(arguments.callee.name, 10144), $(".fancyInPage").on("click", function() {
            self.loopBreak(arguments.callee.name, 10147);
            var url = this.href;
            if (void 0 !== $.fancybox) return $.fancybox({
                type: "ajax",
                ajax: {
                    data: {
                        template: "ajax"
                    }
                },
                overlayShow: !0,
                hideOnContentClick: !1,
                autoScale: !1,
                autoSize: !1,
                padding: 15,
                width: "800px",
                href: url
            }), !1
        })
    }, self.loadDimensions = function skLDim() {
        self.loopBreak(arguments.callee.name, 10170);
        var result = null,
            varName = "dimensions." + this.scaffoldType;
        result = this.get(varName, null), null === result ? ($("div.configurator").append("Beschikbare onderdelen en afmetingen worden geladen <br />"), jQuery.ajax({
            cache: !1,
            dataType: "script",
            data: {
                scaffoldType: self.scaffoldType,
                ajaxAction: "dimensions"
            },
            error: function(jqXHR, textStatus, errorThrown) {
                self.log("warn", "loadDimensions Ajax Error: " + textStatus), self.log("error", errorThrown), alert("De onderdelen en hun afmetingen kunnen niet geladen worden.\nProbeer het later nog eens...")
            },
            success: function dimS6(data) {
                self.log("debug", "Dimensions loaded from the server: " + data.length + " bytes"), data ? eval(data) : $("div.configurator").append("Geen beschikbare onderdelen gevonden!<br />"), self.set(varName, data), self.loadCurrent()
            },
            type: "POST",
            url: window.SKBaseFolder + "/php/config_v3/configurator.php"
        })) : (self.log("debug", "Dimensions loaded from cache"), eval(result), self.dimensions && self.dimensions.pillar ? self.loadCurrent() : (self.dimensions = null, self.set(varName, null), self.loadDimensions()))
    }, self.loadCurrent = function skLCur() {
        self.loopBreak(arguments.callee.name, 10230);
        var result = null,
            _me = this,
            varName;
        if (0 < $("input[name='current']").length && (this.current = $("input[name='current']").val()), varName = "shelving." + this.scaffoldType + "." + this.current, result) eval(result), window.current && !_me.current && (_me.current = window.current), _me.startShelving();
        else try {
            SKBaseClass.checkJQuery("skConfigBase", 9850, "skLCur"), $("div.configurator").append("Huidige configuratie wordt geladen <br />"), this.log("debug", "loadCurrent"), jQuery.ajax({
                url: window.SKBaseFolder + "/php/config_v3/configurator.php",
                dataType: "script",
                data: {
                    current: this.current,
                    scaffoldType: self.scaffoldType,
                    ajaxAction: "current"
                },
                cache: !1,
                type: "POST",
                error: function(jqXHR, textStatus, errorThrown) {
                    self.log("error", "loadCurrent Ajax Error: " + textStatus + " => " + errorThrown), alert("Afmetingen ophalen is niet mogelijk.")
                },
                success: function curS6(data) {
                    self.log("debug", "Loaded current shelving from Server: " + data.length + " bytes"), SKBaseClass.checkJQuery("skConfig2DBase.js", 9873, "curS6"), self.set(varName, data);
                    try {
                        eval(data)
                    } catch (err) {
                        _me.log("warn", err)
                    }
                    window.current && !_me.current && (_me.current = window.current), _me.startShelving()
                }
            })
        } catch (err) {
            _me.log("warn", err)
        }
    }, self.startShelving = function() {
        self.loopBreak(arguments.callee.name, 10299), $("div.configurator").append("Bezig met het plaatsen van de onderdelen. <br />"), this.log("info", "Document Ready! Start Configurator..."), _me.shelving[_me.current].sections.length < 4 ? $("#sZoom").attr("selectedIndex", 3) : _me.shelving[_me.current].sections.length < 9 ? $("#sZoom").attr("selectedIndex", 2) : _me.shelving[_me.current].sections.length < 18 && $("#sZoom").attr("selectedIndex", 1);
        try {
            "" === $(".pageInfo").text().trim() && ($(".pageInfo").css({
                display: "none"
            }), $(".content.small").removeClass("small").addClass("wide"))
        } catch (err) {
            this.log("warn", err)
        }
        this.createBuilders(), setInterval(function() {
            self.loopBreak(arguments.callee.name, 10327, "noop"), $.ajax({
                url: window.SKBaseFolder + "/php/config_v3/calcprice.php?noop",
                type: "POST",
                cache: !1,
                data: {
                    scaffoldType: self.scaffoldType,
                    mode: "noop"
                }
            })
        }, 6e4), $("#btnClear").on("click", function() {
            self.loopBreak(arguments.callee.name, 10340);
            var url = "";
            url = "Annuleren" === $("#btnClear").val() ? window.SKBaseFolder + "/cart/" : location.protocol + "//" + location.host + location.pathname + "?current=new", window.PHPSessID && (url += "&PHPSESSID=" + window.PHPSessID), window.location.href = url
        }), $("#btnGoCart").on("click", function() {
            self.loopBreak(arguments.callee.name, 10355);
            var url = window.SKBaseFolder + "cart/";
            window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), window.location.href = url
        })
    }, self.createBuilders = function() {
        var fnName = arguments.callee.name;
        switch (self.loopBreak(fnName, 10365), self.log("debug", "Create Builders"), self.scaffoldType.toUpperCase()) {
            case "H":
            case "W":
            case "HOUT":
            case "WOOD":
                self.loopBreak(fnName, 10385, self.scaffoldType.toUpperCase()), self.skCanvasBuilder || (self.skCanvasBuilder = new SKCanvasBuilderWood(self, $("div.configurator")[0]), self.skCanvasBuilder.scaffoldType = self.scaffoldType), self.settings || (self.settings = new SKSettingsFormBuilderWood(self)), self._skPriceCalculator || (self._skPriceCalculator = new SKPriceCalculatorWood(self));
                break;
            default:
                self.loopBreak(fnName, 10405, self.scaffoldType.toUpperCase()), self.skCanvasBuilder || (self.skCanvasBuilder = new SKCanvasBuilderGS3(self, $("div.configurator")[0]), self.skCanvasBuilder.scaffoldType = self.scaffoldType), self.settings || (self.settings = new SKSettingsFormBuilderGS3(self)), self._skPriceCalculator || (self._skPriceCalculator = new SKPriceCalculatorGS3(self))
        }
        self.skCanvasBuilder || (self.loopBreak(fnName, 10421, self.scaffoldType.toUpperCase()), self.skCanvasBuilder = new SKCanvasBuilder(self, $("div.configurator")[0]), self.skCanvasBuilder.scaffoldType = self.scaffoldType), self.settings || (self.loopBreak(fnName, 10428, self.scaffoldType.toUpperCase()), self.settings = new SKSettingsFormBuilder(self)), self._skPriceCalculator || (self.loopBreak(fnName, 10432, self.scaffoldType.toUpperCase()), self._skPriceCalculator = new SKPriceCalculator(self)), self.shareProperties(), self.setEventsHandlers && self.setEventsHandlers(), $("#sZoom").on("change", {
            me: self
        }, function() {
            self.loopBreak(arguments.callee.name, 10443), me.skCanvasBuilder.zoom($(this).val()), me.settings.zoom($(this).val())
        }), self._skPriceCalculator.bindCanvas(self.skCanvasBuilder), self._skPriceCalculator.bindSettings(self.settings), self._skPriceCalculator.bindField(document.getElementById("prijs")), $(self._skPriceCalculator).on("price", function(e, newprice) {
            self.loopBreak(arguments.callee.name, 10452, newprice), newprice = newprice.toFixed(2).replace(".", ","), $("#prijs").text(newprice), $("#prijs2").text(newprice)
        }), $("#prijs").on("click", {
            me: self._skPriceCalculator
        }, self._skPriceCalculator._rebuild), $("#prijs2").on("click", {
            me: self._skPriceCalculator
        }, self._skPriceCalculator._rebuild), $("#btnCartAdd").on("click", {
            me: self._skPriceCalculator
        }, self._skPriceCalculator.addtocart), $("#btnSave, #btnSave2").on("click", {
            me: self._skPriceCalculator
        }, self._skPriceCalculator.replaceCartItem), $("#btnCancel, form.edit button.Cancel").on("click", {
            me: self._skPriceCalculator
        }, self._skPriceCalculator.cancelEdit), self._skPriceCalculator.scaffoldType = self.scaffoldType, self.settings.bindCanvas(self.skCanvasBuilder), self.skCanvasBuilder.skSettingsFormBuilder(self.settings), self.initBuilders()
    }, this.initBuilders = function() {
        self.loopBreak(arguments.callee.name, 10486), this.log("debug", "Init Builders"), this._skPriceCalculator.initialize(this.shelving[this.current], this.current), this.skCanvasBuilder.skShelving(this.current, this.shelving[this.current]), this.skCanvasBuilder.skCanvas($("div.configurator")[0]), this.settings.initialize(this.shelving[this.current], $(".settings")[0], this.current), $("#partList").on({
            click: function() {
                return self.loopBreak(arguments.callee.name, 10509), $("#partList").hasClass("small") ? $("#partList").removeClass("small").addClass("large") : $("#partList").removeClass("large").addClass("small"), !1
            }
        }), $(".kiesSchoor input[type='radio']").on({
            change: function() {
                var fnName = arguments.callee.name;
                self.loopBreak(fnName, 10522), self.changingStart(fnName), this.checked && (me.skCanvasBuilder._useBrace = this.value.toLowerCase(), me.skCanvasBuilder._addBraces()), self.changingStop(fnName)
            },
            click: function() {
                var se, section, fnName = arguments.callee.name;
                for (se in self.loopBreak(fnName, 10532), self.changingStart(fnName), me.skCanvasBuilder._useBrace = this.value.toLowerCase(), me.skCanvasBuilder.sections)(section = me.skCanvasBuilder.sections[se]) instanceof SKCanvasSection && section.removeBraces();
                me.skCanvasBuilder._addBraces(), self.changingStop(fnName)
            }
        }), $('.kiesSchoor select[name="schoor"]').on({
            change: function() {
                var fnName = arguments.callee.name;
                self.loopBreak(fnName, 10522), self.changingStart(fnName), me.skCanvasBuilder._useBrace = $(this).val().toLowerCase(), me.skCanvasBuilder._addBraces(), self.changingStop(fnName)
            }
        }), $('.kiesSchoor select[name="foot"]').on({
            change: function() {
                var fnName = arguments.callee.name;
                self.loopBreak(fnName, 10522), self.changingStart(fnName), me.skCanvasBuilder._useFoot = $(this).val().toLowerCase(), me.skCanvasBuilder._addBraces(), self.changingStop(fnName)
            }
        }), this.skCanvasBuilder._useBrace = $(".kiesSchoor input[type='radio']").val(), this.startBuilding()
    }, this.loopHints = function() {
        self.loopBreak(arguments.callee.name, 10549), $(".config2D_hints > *").each(function(index, block) {
            self.loopBreak(arguments.callee.name, 10551, index);
            var clone, gotoX, gotoY, blockName = block.className.split(" ")[1];
            0 < $("a." + blockName).length && ($(block).find("span").hide(), $(block).css({
                float: "left",
                width: "auto",
                margin: "0 10px"
            }), setTimeout(function() {
                self.loopBreak(arguments.callee.name, 10564), $(block).fadeIn(function() {
                    setTimeout(function() {
                        self.loopBreak(arguments.callee.name, 10567), clone = $(block).clone(), gotoX = $("a." + blockName).offset().left, gotoY = $("a." + blockName).offset().top, setTimeout(function() {
                            self.loopBreak(arguments.callee.name, 10572), $(clone).css({
                                position: "absolute",
                                left: $(block).offset().left,
                                top: $(block).offset().top
                            }), $("body").append(clone), $(block).css({
                                visibility: "hidden"
                            }), $(clone).show(), $(clone).animate({
                                opacity: .1,
                                left: gotoX,
                                top: gotoY,
                                width: 100,
                                height: 20
                            }, 400, function() {
                                self.loopBreak(arguments.callee.name, 10589), $("a." + blockName).effect("pulsate", {}, 500, function() {
                                    $("a." + blockName).effect("highlight", {}, 500)
                                }), $(clone).remove(), $(block).hide(), $(block).find("*").show(), $(block).css({
                                    float: "",
                                    width: "",
                                    visibility: ""
                                })
                            })
                        }, 80 + 1200 * (index - 1))
                    }, 1e3)
                })
            }, 500 + 160 * (index - 1)))
        }), setTimeout(function() {
            var fnName = arguments.callee.name,
                busyWithThis = !1;
            self.loopBreak(fnName, 10626), $(".config2D_hints .default").fadeIn(), setInterval(function() {
                if (!busyWithThis) try {
                    if (busyWithThis = !1, !$(".settings.outer:visible").length) try {
                        busyWithThis = !0, $(this).show({
                            easing: "swing",
                            duration: "fast",
                            complete: function() {
                                $(".settings.outer").first().show({
                                    easing: "swing",
                                    duration: "slow",
                                    complete: function() {
                                        busyWithThis = !1
                                    }
                                })
                            }
                        })
                    } catch (ignore) {}
                } catch (ignore) {}
            }, 200)
        }, 5200)
    }, this.startBuilding = function() {
        self.loopBreak(arguments.callee.name, 10666), this.log("debug", "Start Building"), this.skCanvasBuilder.build(), setTimeout(function() {
            self.loopBreak(arguments.callee.name, 10670), self.loopHints()
        }, 1e3)
    }), this.checkRequirements(), this.setFancyInPage(), $("a.pdf").on("click", showpdfinline), self.isBot || this.loadDimensions(), $(".appConfig2D .accessoires").show({})
}
jQuery(document).ajaxSend(SKAjaxSend), jQuery(document).ajaxError(SKAjaxError), jQuery(document).ajaxComplete(SKAjaxComplete), SKShelvingBaseClass.prototype = Object.create(SKBaseClass.prototype), SKShelvingBaseClass.prototype.constructor = SKShelvingBaseClass, SKBaseArticle.prototype = Object.create(SKShelvingBaseClass.prototype), SKBaseArticle.prototype.constructor = SKBaseArticle, SKBlockingArticle.prototype = Object.create(SKBaseArticle.prototype), SKBlockingArticle.prototype.constructor = SKBlockingArticle, SKCanvasBuilder.prototype = Object.create(SKShelvingBaseClass.prototype), SKCanvasBuilder.prototype.constructor = SKCanvasBuilder, SKCanvasSection.prototype = Object.create(SKShelvingBaseClass.prototype), SKCanvasSection.prototype.constructor = SKCanvasSection, SKArtShelve.prototype = Object.create(SKBaseArticle.prototype), SKArtShelve.prototype.constructor = SKArtShelve, SKArtPillar.prototype = Object.create(SKBaseArticle.prototype), SKArtPillar.prototype.constructor = SKArtPillar, SKArtBrace.prototype = Object.create(SKBaseArticle.prototype), SKArtBrace.prototype.constructor = SKArtBrace, SKArtBraceX.prototype = Object.create(SKArtBrace.prototype), SKArtBraceX.prototype.constructor = SKArtBraceX, SKCanvasBuilder.prototype._canvasEvents = {
    _canvasClick: function(e) {
        try {
            $(e.data.me).trigger("click")
        } catch (err) {
            void 0 !== log && "function" == typeof log.warn && log.warn(err.Msg)
        }
    },
    _onAddSectionLeftClick: function() {
        this.log("error", "Moment... probeer eerst aan de rechterkant toe te voegen!")
    },
    _onAddSectionRightClick: function(e) {
        var fnName = arguments.callee.name,
            self = e.data.me;
        self.changingStart(fnName), e.data.me.newSection(99), self.changingStop(fnName)
    },
    _onPillarEnter: function(e) {
        try {
            var section = this.id.substr(7);
            $(e.data.me).trigger("pillarenter", [section])
        } catch (err) {
            e.data.me.log("warn", err)
        }
    },
    _onPillarLeave: function(e) {
        try {
            var section = this.id.substr(7);
            $(e.data.me).trigger("pillarleave", [section])
        } catch (err) {
            e.data.me.log("warn", err)
        }
    },
    _onSectionEnter: function(e) {
        try {
            var section = this.id.substr(8);
            $(e.data.me).trigger("sectionenter", [section])
        } catch (err) {
            e.data.log("warn", err)
        }
    },
    _onSectionLeave: function(e) {
        try {
            var section = this.id.substr(8);
            $(e.data.me).trigger("sectionleave", [section])
        } catch (err) {
            e.data.log("warn", err)
        }
    },
    _onShelveEnter: function(e) {
        var id, s = this.id.split("_"),
            section = 0,
            shelveid = 0,
            shelvepos = 0;
        $("#sGrpShelves_" + s[1]).slideDown(), $("#sGrpShelves_" + s[1] + "_" + s[2]).addClass("active"), $(this).hasClass("shelveholder") && (section = (id = this.id.split("_"))[1], shelveid = id[2], shelvepos = parseInt($(this).css("bottom"), 10));
        try {
            $(e.data.me).trigger("shelveenter", [section, shelveid, shelvepos])
        } catch (err) {
            e.data.me.log("warn", err)
        }
    },
    _onShelveLeave: function(e) {
        var id, section = 0,
            shelveid = 0,
            shelvepos = 0,
            s = this.id.split("_");
        $("#sGrpShelves_" + s[1] + "_" + s[2]).removeClass("active"), $(this).hasClass("shelveholder") && (section = (id = this.id.split("_"))[1], shelveid = id[2], shelvepos = parseInt($(this).css("bottom"), 10));
        try {
            $(e.data.me).trigger("shelveleave", [section, shelveid, shelvepos])
        } catch (err) {
            e.data.me.log("warn", err)
        }
    }
}, SKArtBack.prototype = Object.create(SKBaseArticle.prototype), SKArtBack.prototype.constructor = SKArtBack, SKArtSlidingDoor.prototype = Object.create(SKBaseArticle.prototype), SKArtSlidingDoor.prototype.constructor = SKArtSlidingDoor, SKSettingsFormBuilder.prototype = Object.create(SKShelvingBaseClass.prototype), SKSettingsFormBuilder.prototype.constructor = SKSettingsFormBuilder, SKSettingsFormBuilder.prototype._canvasEvents = {
    click: function() {},
    moveShelve: function(e, shelve, oldPosistion, newPosition) {
        var section = shelve.id.split("_")[1],
            shelveno = shelve.id.split("_")[2];
        e.data.me && e.data.me._moveShelve(e, section, shelveno, oldPosistion, newPosition)
    },
    empty: function() {
        $(this._settings).empty(), $(this._settings).css({
            "margin-left": this._paddingLeft
        })
    },
    addSection: function(e, sectionno, height, width, left) {
        e.data.me._addSection(sectionno, height, width, left)
    },
    pillarEnter: function(e, sectionno) {
        e.data.me._onMakeActive(e, sectionno)
    },
    pillarLeave: function(e, sectionno) {
        e.data.me._onMakeInActive(e, sectionno)
    },
    sectionEnter: function(e, sectionno) {
        e.data.me._onMakeActive(e, sectionno)
    },
    sectionLeave: function(e, sectionno) {
        e.data.me._onMakeInActive(e, sectionno)
    },
    shelveEnter: function() {},
    shelveLeave: function() {},
    sectionResize: function(e, sectionno, oldVal, newVal) {
        var self, fnName = arguments.callee.name;
        (self = e.data.me).changingStart(fnName), $(e.data.me._settings).find("#sSection_" + sectionno).animate({
            width: newVal
        }, 400, "swing", function() {
            $(this).css("overflow", ""), self.changingStop(fnName)
        })
    },
    sectionLeftChange: function(e, sectionno, oldVal, newVal) {
        $(e.data.me._settings).find("#sSection_" + sectionno).animate({
            left: newVal
        }, 400, "swing", function() {
            $(this).css("overflow", "")
        }), e.data.me.log("debug", "Move Section " + sectionno + " from " + oldVal + " => " + newVal)
    },
    copyFromLeft: function(e, sectionno) {
        e.data.me._copyFromLeft(e, sectionno)
    },
    newShelve: function(e, section, no, bottom) {
        var shelves = document.getElementById("sGrpShelves_" + section);
        $(shelves).find("#sShelve_" + section + "_" + no).length <= 0 && e.data.me._addShelve(section, no), e.data.me._moveShelve(e, section, no, -1, bottom)
    },
    delArticle: function() {},
    delShelve: function() {},
    preAnimate: function(e) {
        e.data.me._settings && $(e.data.me._settings).find(".sectionProperties").css({
            disabled: "disabled"
        })
    },
    postAnimate: function(e) {
        e.data.me._settings && $(e.data.me._settings).find(".sectionProperties").css({
            disabled: ""
        })
    },
    ready: function() {}
}, SKPriceCalculator.prototype = Object.create(SKShelvingBaseClass.prototype), SKPriceCalculator.prototype.constructor = SKPriceCalculator, SKLoader.prototype = Object.create(SKShelvingBaseClass.prototype), SKLoader.prototype.constructor = SKLoader;
var skdocReady3 = function() {
    if ("number" == typeof window.skdocReady3Timer) {
        var accImgDraggableCreate, accImgDraggableStart, accImgDraggableStop, accImgDraggableDrag, go = !1;
        if (document.readyState && "complete" === document.readyState && (go = !0), document.getElementsByTagName && document.getElementById && document.body && jQuery && 0 < $(".appConfig2D").length && (go = !0), go) {
            clearInterval(window.skdocReady3Timer);
            try {
                delete window.skdocReady3Timer
            } catch (err) {
                window.skdocReady3Timer = null
            }
            if (0 === $(".appConfig2D").length) void 0 !== window.DEBUG && window.DEBUG && void 0 !== log && log.info && log.warn("HTML not Loaded correctly!");
            else if (!self.isBot) {
                $(".geenSchoor").hide(), window.skApp = new SKLoader, $("div.configurator").append("Bezig met laden van benodigde scripts...<br/>");
                try {
                    $(".ConfigPrice .Buttons input[type=button]").button()
                } catch (err) {
                    window.skApp.log("warn", err)
                }
                self.isBot || (void 0 !== $.fn.draggable && void 0 !== $.fn.droppable ? (accImgDraggableCreate = function() {}, accImgDraggableStart = function(event, ui) {
                    var s, section, artType, pillars, pillar, canvas = window.skApp._skCanvasBuilder;
                    switch (artType = this.className.split(" ")[2]) {
                        case "back":
                        case "door":
                        case "slidedoor":
                            for (s in canvas.sections) section = canvas.sections[s], $(section.htmlElement).droppable("enable");
                            break;
                        case "side":
                            for (pillars = $(canvas.htmlElement).find(".pillar"), s = 0; s < pillars.length; s++) pillar = pillars[s], $(pillar).droppable("enable").css({
                                width: 20,
                                left: parseInt($(pillar).css("left"), 10) - 10
                            })
                    }
                    ui.helper.css("zIndex", 100), window.skApp.log("debug", "draggable.start " + artType)
                }, accImgDraggableStop = function(event, ui) {
                    var s, canvas = window.skApp._skCanvasBuilder,
                        pillars = $(canvas.htmlElement).find(".pillar");
                    setTimeout(function() {
                        var alt, pillar, section;
                        for (s in this.alt ? alt = this.alt : ui && ui.helper && ui.helper[0] && ui.helper[0].alt && (alt = ui.helper[0].alt), ui.helper.css("zIndex", ""), window.skApp.log("debug", "draggable.stop " + alt), canvas.sections) section = window.skApp._skCanvasBuilder.sections[s], $(section.htmlElement).droppable("disable").removeClass("ui-droppable-disabled").removeClass("ui-state-disabled");
                        for (s = 0; s < pillars.length; s++) pillar = pillars[s], $(pillar).droppable("option", "disabled") || $(pillar).css({
                            margin: "",
                            padding: "",
                            width: canvas._pillarWidth,
                            left: parseInt($(pillar).css("left"), 10) + 10
                        }), $(pillar).droppable("disable").removeClass("ui-droppable-disabled").removeClass("ui-state-disabled")
                    }, 100)
                }, accImgDraggableDrag = function() {}, $(".accessoires img").each(function(ix, Element) {
                    var snap = $(Element.parentElement).hasClass("side") ? ".pillar" : ".section";
                    $.support.leadingWhitespace || (snap = !1), $(Element.parentNode).draggable({
                        cursor: "move",
                        helper: function() {
                            return $(Element).clone()
                        },
                        snap: snap,
                        snapMode: "inner",
                        snapTolerance: 25,
                        revert: "invalid",
                        cursorAt: {
                            top: Math.round($(Element).height() / 2),
                            left: Math.round($(Element).width() / 2)
                        },
                        create: accImgDraggableCreate,
                        start: accImgDraggableStart,
                        stop: accImgDraggableStop,
                        drag: accImgDraggableDrag
                    })
                })) : $(".accessoires").hide()), $(".accessoires .products .catGroup .cat a").on("click", openpopup), "function" == typeof $.fn.draggable && void 0 !== $.fancybox && 0 < $('a.video[href*="youtube"]').length && $.getScript("http://www.youtube.com/player_api", function() {
                    $('a.video[href*="youtube"]').fancybox({
                        openEffect: "elastic",
                        closeEffect: "elastic",
                        nextEffect: "none",
                        prevEffect: "none",
                        padding: 0,
                        margin: 50,
                        beforeShow: function() {
                            var id;
                            id = $.fancybox.inner.find("iframe").attr("id"), new YT.Player(id, {
                                events: {
                                    onReady: onPlayerReady,
                                    onStateChange: onPlayerStateChange
                                }
                            })
                        }
                    })
                }), $(".control .Cancel").on("click", {}, function() {
                    if (window !== window.top) {
                        try {
                            $(window).trigger("cancelled"), $(window).trigger("closeme")
                        } catch (ignore) {}
                        try {
                            $(parent).trigger("cancelled"), $(parent).trigger("closeme")
                        } catch (ignore) {}
                        if (parent.postMessage) try {
                            parent.postMessage("cancelled", "*"), parent.postMessage("closeMe", "*")
                        } catch (ignore) {}
                    }
                }), $(window).on("beforeunload unload", function(event) {
                    !event && window.event && (event = window.event);
                    try {
                        window.skApp && window.skApp._skPriceCalculator && window.skApp._skPriceCalculator._dirty && (confirm("U gaat de configuratie verlaten. \nWilt u de huidige configuratie eerst opslaan in de winkelwagen?") ? window.skApp._skPriceCalculator.addtocart(event, 2, 1) : window.skApp._skPriceCalculator._dirty = !1)
                    } catch (err) {
                        window.skApp.log("warn", err)
                    }
                }), $(document).on("click", "a", function() {
                    try {
                        $("a").each(function() {
                            "undefined" != typeof console && console.log("a  --" + this.id + ": " + this.className + " ++ " + this.href)
                        });
                        this.href;
                        "javascript:;" === this.href && !1, $(this).hasClass("video") && "function" == typeof $.fn.draggable && void 0 !== $.fancybox && !1, $(this).hasClass("ajax fancyInPage") && void 0 !== $.fancybox && !1
                    } catch (err) {
                        window.skApp.log("warn", err)
                    }
                    return !0
                })
            }
        } else void 0 !== window.DEBUG && window.DEBUG && void 0 !== log && log.info && log.debug("Configuration not Ready YET! Retry later!")
    } else void 0 !== window.DEBUG && window.DEBUG && void 0 !== log && log.info && log.debug("DocReady Timer not active; ignoring")
};
jQuery(document).ready(function() {
    try {
        skdocReady3()
    } catch (ignore) {}
}), window.skdocReady3Timer = setInterval(function() {
    skdocReady3()
}, 200), void 0 !== window.DEBUG && window.DEBUG && void 0 !== log && log.info && log.debug("Configuration JS loaded!");
var imgBlinkSizes = [];

function init() {
    if (fhoogte = document.getElementById("hoogte"), fdiepte = document.getElementById("diepte"), flegborden = document.getElementById("legborden"), flengte = document.getElementById("lengte"), "undefined" != typeof jQuery) $("#hoogte, #diepte, #legborden, #lengte").on("change", function() {
        $.ajax({
            url: ("string" == typeof window.SKBaseFolder ? window.SKBaseFolder : "") + "/php/xml_configurator.php",
            data: {
                mode: fhoogte.selectedIndex <= 0 ? "hoogte" : fdiepte.selectedIndex <= 0 ? "diepte" : flegborden.selectedIndex <= 0 ? "legborden" : "lengte",
                hoogte: 0 <= fhoogte.selectedIndex ? $("#hoogte").val() : "",
                diepte: 0 <= fdiepte.selectedIndex ? $("#diepte").val() : "",
                legborden: 0 <= flegborden.selectedIndex ? $("#legborden").val() : "",
                lengte: 0 <= flengte.selectedIndex ? $("#lengte").val() : ""
            },
            success: function(data, textStatus, jqXHR) {
                showData(data)
            }
        })
    }), $("#hoogte").change();
    else if (void 0 !== sack) {
        if ((ajax = new sack).onCompletion = showData, fhoogte || fdiepte || flegborden || flengte) {
            var h = gup("hoogte"),
                d = gup("diepte"),
                lb = gup("legborden"),
                l = gup("lengte");
            if (gup("page"), h && d && lb && l) {
                var url = window.SKBaseFolder + "php/xml_configurator.php?mode=rev_populate&hoogte=" + h + "&diepte=" + d + "&legborden=" + lb + "&lengte=" + l;
                getAjaxFile(ajax, url)
            } else getAjaxFile(ajax, window.SKBaseFolder + "php/xml_configurator.php?mode=hoogte")
        }
    } else alert("Kan geen afmetingen laden...")
}

function setPicture(i) {
    var pi = 0;
    try {
        for (pi = 0; pi < 5; pi++) document.getElementById("stap" + pi) && (document.getElementById("stap" + pi).style.display = "none");
        pi = i + 1, document.getElementById("stellingImg") && (document.getElementById("stellingImg").src = imgBlinkSizes[pi].src, document.getElementById("stellingImg").className = imgBlinkSizes[pi].className, document.getElementById("stap" + pi) && (document.getElementById("stap" + pi).style.display = "block"))
    } catch (ignore) {}
}

function addOption(input, txt, val, pos) {
    var elOptNew = document.createElement("option");
    elOptNew.text = txt, elOptNew.value = val;
    try {
        input.add(elOptNew, pos)
    } catch (ex) {
        try {
            input.add(elOptNew, null)
        } catch (ex2) {
            input.add(elOptNew)
        }
    }
}

function getData(mode) {
    if (void 0 !== getAjaxFile && void 0 !== ajax && void 0 !== ajax.runAJAX) switch (mode) {
        case "hoogte":
            fdiepte.options.length = 0, flegborden.options.length = 0, flengte.options.length = 0, h = 0 <= fhoogte.selectedIndex ? fhoogte.options[fhoogte.selectedIndex].value : 0, getAjaxFile(ajax, window.SKBaseFolder + "php/xml_configurator.php?mode=diepte&hoogte=" + h);
            break;
        case "diepte":
            flegborden.options.length = 0, flengte.options.length = 0, h = fhoogte.options[fhoogte.selectedIndex].value, d = fdiepte.options[fdiepte.selectedIndex].value, getAjaxFile(ajax, window.SKBaseFolder + "php/xml_configurator.php?mode=legborden&hoogte=" + h + "&diepte=" + d);
            break;
        case "legborden":
            flengte.options.length = 0, h = fhoogte.options[fhoogte.selectedIndex].value, d = fdiepte.options[fdiepte.selectedIndex].value, lb = flegborden.options[flegborden.selectedIndex].value, getAjaxFile(ajax, window.SKBaseFolder + "php/xml_configurator.php?mode=lengte&hoogte=" + h + "&diepte=" + d + "&legborden=" + lb)
    }
}

function showData(data) {
    if (data && !(void 0 !== ajax && ajax.xmlhttp && ajax.xmlhttp.readyState < 4)) {
        var xmlValues = null,
            c = 0,
            i = 0;
        if (data || (data = ajax.responseXML), xmlValues = data.getElementsByTagName("hoogtedata"), c = 0, xmlValues && 0 < xmlValues.length)
            for (fhoogte.options.length = 0, setPicture(0), i = 0; i < xmlValues.length; i++) addOption(fhoogte, xmlValues[i].getAttribute("hoogtetxt"), xmlValues[i].getAttribute("hoogteval"), c), c++;
        if (xmlValues = data.getElementsByTagName("dieptedata"), c = 0, xmlValues && 0 < xmlValues.length)
            for (setPicture(1), fdiepte.options.length = 0, i = 0; i < xmlValues.length; i++) addOption(fdiepte, xmlValues[i].getAttribute("dieptetxt"), xmlValues[i].getAttribute("diepteval"), c), c++;
        if (xmlValues = data.getElementsByTagName("lbdata"), c = 0, xmlValues && 0 < xmlValues.length)
            for (setPicture(2), flegborden.options.length = 0, i = 0; i < xmlValues.length; i++) addOption(flegborden, xmlValues[i].getAttribute("lbtxt"), xmlValues[i].getAttribute("lbval"), c), c++;
        if (xmlValues = data.getElementsByTagName("lengtedata"), c = 0, xmlValues && 0 < xmlValues.length)
            for (setPicture(3), flengte.options.length = 0, i = 0; i < xmlValues.length; i++) addOption(flengte, xmlValues[i].getAttribute("lengtetxt"), xmlValues[i].getAttribute("lengteval"), c), c++;
        if (xmlValues = data.getElementsByTagName("selected"), xmlValues && 0 < xmlValues.length)
            for (i = 0; i < xmlValues.length; i++) {
                var blockN = eval("f" + xmlValues[i].getAttribute("blockname")),
                    blockV = xmlValues[i].getAttribute("blockvalue");
                for (i2 = 0; i2 < blockN.options.length; i2++)
                    if (blockN.options[i2].value == blockV) {
                        blockN.options[i2].selected = !0;
                        break
                    }
            }
    }
}

function SKdocReady1() {
    if ("number" == typeof window.SKdocReady1Timer) {
        var go = !1;
        if (void 0 !== document.readyState && "complete" == document.readyState && (go = !0), document && document.getElementsByTagName && document.getElementById && document.body && jQuery && (go = !0), go) {
            clearInterval(window.SKdocReady1Timer);
            try {
                delete window.SKdocReady1Timer
            } catch (err) {
                window.SKdocReady1Timer = null
            }
            init()
        }
    }
}
imgBlinkSizes[1] = new Image, imgBlinkSizes[2] = new Image, imgBlinkSizes[3] = new Image, imgBlinkSizes[4] = new Image, imgBlinkSizes[1].className = "stellingHoogte", imgBlinkSizes[2].className = "stellingDiepte", imgBlinkSizes[3].className = "stellingLegborden", imgBlinkSizes[4].className = "stellingLengte", "string" == typeof window.SKBaseFolder ? (imgBlinkSizes[1].src = window.SKBaseFolder + "/images/stellingen/hoogte.gif", imgBlinkSizes[2].src = window.SKBaseFolder + "/images/stellingen/diepte.gif", imgBlinkSizes[3].src = window.SKBaseFolder + "/images/stellingen/legborden.gif", imgBlinkSizes[4].src = window.SKBaseFolder + "/images/stellingen/lengte.gif") : (imgBlinkSizes[1].src = "/images/stellingen/hoogte.gif", imgBlinkSizes[2].src = "/images/stellingen/diepte.gif", imgBlinkSizes[3].src = "/images/stellingen/legborden.gif", imgBlinkSizes[4].src = "/images/stellingen/lengte.gif"), prevBut = document.getElementById("but_hoogte"), void 0 === window.SKBaseFolder && (window.SKBaseFolder = ""), "admin" == window.location.host.split(".")[0].toLowerCase() && (window.SKBaseFolder = "/_site/"), "undefined" != typeof jQuery ? (jQuery(document).ready(function() {
    SKdocReady1()
}), window.SKdocReady1Timer = setInterval(SKdocReady1, 200)) : document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
    alreadyrunflag = 1, init()
}, !1) : document.attachEvent && document.attachEvent("onload", function() {
    alreadyrunflag = 1, init()
}), cfg1waitLoad = setInterval(function() {
    document.getElementById("hoogte") && (document.getElementById("hoogte").form.children.length < 5 || (2 < document.getElementById("hoogte").options.length ? clearInterval(cfg1waitLoad) : init()))
}, 300);
var usedialogs = 1,
    configuratorPath;

function basename(path) {
    return path.replace(/\\/g, "/").replace(/.*\//, "")
}

function dirname(path) {
    return path.replace(/\\/g, "/").replace(/\/[^\/]*$/, "")
}

function json_decode(str_json) {
    var json = this.window.JSON;
    if ("object" == typeof json && "function" == typeof json.parse) try {
        return json.parse(str_json)
    } catch (err) {
        if (!(err instanceof SyntaxError)) throw new Error("Unexpected error type in json_decode()");
        return this.php_js = this.php_js || {}, this.php_js.last_error_json = 4, null
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        j, text = str_json;
    return cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? (j = eval("(" + text + ")"), j) : (this.php_js = this.php_js || {}, this.php_js.last_error_json = 4, null)
}

function resizeDlg(Element) {
    if (void 0 !== Element) {
        for (; !jQuery(Element).hasClass("ui-dialog-content") && Element.parentNode;) Element = Element.parentNode;
        if (jQuery(Element).hasClass("ui-dialog-content")) {
            jQuery(Element).dialog("moveToTop");
            var innerW = jQuery(window).width(),
                width = 0,
                tabswidth = 0;
            jQuery(Element).find("table").each(function(index, item) {
                width < jQuery(item).width() && (width = jQuery(item).width() + 35)
            }), jQuery(Element).find("ul").each(function(index, item) {
                width < jQuery(item).width() && (width = jQuery(item).width() + parseInt(jQuery(item).css("marginLeft")) + parseInt(jQuery(item).css("paddingLeft")))
            }), jQuery(Element).find(".ui-tabs-nav").each(function(index, item) {
                tabswidth = 0, jQuery(item).find("li").each(function(idx, tab) {
                    tabswidth = tabswidth + jQuery(tab).width() + parseInt(jQuery(tab).css("marginRight")) + parseInt(jQuery(tab).css("marginLeft"))
                }), tabswidth = tabswidth + parseInt(jQuery(item).css("paddingRight")) + parseInt(jQuery(item).css("paddingLeft")) + parseInt(jQuery(item).css("marginRight")) + parseInt(jQuery(item).css("marginLeft")) + 45, width < tabswidth && (width = tabswidth)
            }), width > jQuery(Element).width() && (width + 40 < innerW ? jQuery(Element).dialog("option", "width", width + 30) : jQuery(Element).dialog("option", "width", innerW - 80)), jQuery(Element).height() > jQuery(window).height() - 40 && jQuery(Element).dialog("option", "height", jQuery(window).height() - 60), jQuery(Element).dialog("option", "position", "center")
        }
    } else {
        Element = jQuery(".ui-dialog-content");
        for (var i = 0; i < Element.length; i++) jQuery(Element[i]).dialog("isOpen") && resizeDlg(Element[i])
    }
}

function clickRemoveConfiguration(e) {
    var event = e || window.event;
    event.srcElement && !event.target && (event.target = event.srcElement);
    var url = "";
    window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
        success: function(data, textStatus, XMLHttpRequest) {
            window.location.href = "/" + url
        },
        type: "POST",
        url: configuratorPath + "configurator.remove.php" + url
    })
}

function reloadIMG() {
    var image = jQuery("img#imgStelling");
    if (0 < image.length) {
        (image = image[0]).src = "images/transp.gif", jQuery(image).addClass("preload"), jQuery(image).attr("title", "Even geduld! Er wordt een voorbeeld van uw stelling gemaakt."), jQuery(image).before("<div class='buildImageWait'><span class='hdr'>Even geduld! </span><br /><span class='txt'>Er wordt een voorbeeld van uw stelling gemaakt.<br />Dit kan een minuutje duren...</span></div>");
        var img = new Image;
        jQuery(img).bind("error", {}, function(e) {
            alert("Kan de afbeelding niet laden. Er is een onbekende fout opgetreden. "), jQuery(image).removeClass("preload"), jQuery(image).removeAttr("title")
        }), jQuery(img).bind("load", {}, function() {
            image.src = img.src, 700 < img.width ? (jQuery(image).css("height", "auto"), jQuery(image).css("width", "700px")) : (jQuery(image).css("height", "615px"), jQuery(image).css("width", "auto")), jQuery(image).removeClass("preload"), jQuery(image).removeAttr("title"), jQuery(".buildImageWait").remove()
        }), img.src = configuratorPath + "buildImage.php?export=img&time=" + (new Date).getTime()
    }
}

function clickBtnAttrDel(e) {
    var event = e || window.event;
    event.srcElement && !event.target && (event.target = event.srcElement), e && e.stopPropagation ? e.stopPropagation() : event.cancelBubble = !0;
    for (var tab = event.target; null !== tab.parentNode && !jQuery(tab).hasClass("ui-tabs-panel");) tab = tab.parentNode;
    for (var td = event.target; null !== td.parentNode && !jQuery(td).hasClass("hasAttr");) td = td.parentNode;
    for (var prd = td.className.split(" "), i = 0; i < prd.length; i++)
        if ("prd" == prd[i].substr(0, 3)) {
            prd = prd[i].substr(3);
            break
        }
    var attr = td.id.split("_"),
        url = "";
    window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
        beforeSend: function(XMLHttpRequest) {
            XMLHttpRequest.cell = td
        },
        data: {
            mode: tab.id,
            pos: attr[2],
            mtr: attr[1],
            item: prd
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus)
        },
        success: function(data, textStatus, XMLHttpRequest) {
            td.className = td.className.substr(0, td.className.indexOf(" ")), jQuery(td).addClass("empty").removeClass("hasAttr prd" + prd + " back door backperf").html(""), sect = td.id.split("_"), sect.pop(), sect = sect.join("_"), sect = jQuery(td.parentNode.parentNode).find('[id^="' + sect + '"]'), tdh = td.id.split("_");
            for (var i = sect.length - 1; 0 <= i; i--) {
                var sh = sect[i].id.split("_");
                if (parseInt(sh[2]) > parseInt(tdh[2])) {
                    if (!jQuery(sect[i]).hasClass("blocked")) break;
                    jQuery(sect[i]).attr("className", td.className).addClass("empty").html(""), jQuery(sect[i]).bind("click", {}, clickAccDlgSectEmpty)
                }
            }
            jQuery(td).bind("click", {}, clickAccDlgSectEmpty)
        },
        type: "POST",
        url: configuratorPath + "accessory.delete.php" + url
    })
}

function clickBtnAttrOpt(e) {
    var event = e || window.event;
    event.srcElement && !event.target && (event.target = event.srcElement), e && e.stopPropagation ? e.stopPropagation() : event.cancelBubble = !0
}

function clickTDPickItem(e) {
    var event = e || window.event;
    event.srcElement && !event.target && (event.target = event.srcElement), e && e.stopPropagation ? e.stopPropagation() : event.cancelBubble = !0;
    for (var tr = event.target; null !== tr.parentNode && "tr" !== tr.tagName.toLowerCase();) tr = tr.parentNode;
    for (var tb = event.target; null !== tb.parentNode && "table" !== tb.tagName.toLowerCase();) tb = tb.parentNode;
    jQuery(this.parentNode.parentNode.parentNode).find("tr").removeClass("picked"), jQuery(this.parentNode.parentNode.parentNode).find('input[type="radio"]').removeAttr("checked"), jQuery(tr).addClass("picked").find('input[type="radio"]').attr("checked", "checked"), mouseenterTDPickItem(e)
}

function updateOtherAcc(e) {
    var event = e || window.event;
    event.srcElement && !event.target && (event.target = event.srcElement), e && e.stopPropagation ? e.stopPropagation() : event.cancelBubble = !0;
    var url = "";
    window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
        data: {
            mode: "other",
            element: e.target.name,
            amount: e.target.value,
            product: parseInt(e.target.name.split("[")[1])
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus)
        },
        success: function(data, textStatus, XMLHttpRequest) {},
        type: "POST",
        url: configuratorPath + "accessory.dialog.save.php" + url
    })
}

function dlgAccessoriesTabLoad(e, ui) {
    jQuery(".dlgAccessoriesTabLoad div *").unbind();
    var url = "";
    window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
        data: {},
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus)
        },
        success: function(data, textStatus, XMLHttpRequest) {
            jQuery(ui.panel).html(data), jQuery(ui.panel).find("td.empty").bind("click", {}, clickAccDlgSectEmpty), jQuery("#back td.empty").attr("title", "Klik hier om hier een achterwand te selecteren"), jQuery("#side td.empty").attr("title", "Klik hier om hier een zijwand te selecteren"), jQuery("#door td.empty").attr("title", "Klik hier om hier een deur te selecteren"), jQuery(ui.panel).find(".btnDel").bind("click", {}, clickBtnAttrDel), jQuery(ui.panel).find(".btnDel").attr("title", "Klik hier om dit artikel te wissen."), jQuery(".accordion tr.cat").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), jQuery(".accordion tr.prd").addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"), jQuery(".accordion div.cat").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), jQuery(".accordion div.prd").addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"), jQuery("table.accordion tr.cat0").show(), jQuery(".accordion tr.cat").bind("click", {}, clickAccordionCat), jQuery(".accordion div.cat").bind("click", {}, clickAccordionCat), jQuery(".accordion input.amount").bind("change", {}, updateOtherAcc), "undefined" != typeof initFieldTypeRestriction && initFieldTypeRestriction(), setTimeout(function() {
                resizeDlg()
            }, 10)
        },
        type: "POST",
        url: configuratorPath + "accessory.dialog." + ui.tab.hash.substr(1) + ".php" + url
    })
}

function addAccSaveSuccess(data, textStatus, XMLHttpRequest) {
    var sel = XMLHttpRequest.input[0],
        dlg = XMLHttpRequest.dialog,
        td = XMLHttpRequest.cell,
        type = jQuery(dlg).find('input[name="type"]').val(),
        h = parseInt(jQuery("#prd_h_" + jQuery(sel).val()).val()),
        sect = parseInt(jQuery(dlg).find('input[name="section"]').val()),
        hght = parseInt(jQuery(dlg).find('input[name="height"]').val()),
        tds = "side" == type ? "s" : "td";
    switch (jQuery(td).addClass("hasAttr").addClass(type).addClass("prd" + jQuery(sel).val()).removeClass("empty").unbind("click"), jQuery(dlg).find('*[name^="option"][checked]').each(function() {
        jQuery(td).addClass("c" + jQuery(this).val())
    }), type) {
        case "back":
            0 < jQuery("#prd" + jQuery(sel).val() + "_perf").val() ? jQuery(td).addClass("backperf") : jQuery(td).addClass("back");
            break;
        case "side":
            0 < jQuery("#prd" + jQuery(sel).val() + "_perf").val() ? jQuery(td).addClass("perf") : jQuery(td).addClass("fill");
            break;
        default:
            log.warn("addAccSaveSuccess " + type + ": Geen actie")
    }
    for (var h2 = 50; h2 < h; h2 += 50) jQuery("#" + type + " td#" + tds + "_" + sect + "_" + (hght + h2)).addClass(jQuery(td).attr("className")).addClass("blocked").removeClass("empty").removeClass("hasAttr").unbind("click"), jQuery("#" + type + " td#ib_" + sect + "_" + (hght + h2)).addClass(jQuery(td).attr("className")).addClass("blocked").removeClass("empty").removeClass("hasAttr").unbind("click");
    jQuery(td).append('<input type="button" class="btn btnDel" />'), jQuery(td).find(".btnDel").bind("click", {}, clickBtnAttrDel), jQuery(dlg).dialog("close")
}

function mouseenterTDPickItem(e) {
    var event = e || window.event;
    event.srcElement && !event.target && (event.target = event.srcElement), e && e.stopPropagation ? e.stopPropagation() : event.cancelBubble = !0;
    for (var ui = event.target; null !== ui.parentNode && !jQuery(ui).hasClass("ui-dialog-content");) ui = ui.parentNode;
    var id = jQuery(e.target.parentNode).find('*[name^="product"]').val();
    jQuery("#tdopt").find("fieldset").removeClass("shw").hide(), jQuery("#tdopt fieldset.prd" + id).addClass("shw").fadeIn("normal", function() {})
}

function mouseleaveTDPickItem(e) {
    var event = e || window.event;
    event.srcElement && !event.target && (event.target = event.srcElement), e && e.stopPropagation ? e.stopPropagation() : event.cancelBubble = !0, 0 < jQuery(e.target.parentNode.parentNode).find(".picked").length ? jQuery(e.target.parentNode.parentNode).find(".picked td").last().mouseenter() : jQuery("#tdopt").find("fieldset").removeClass("shw").fadeOut("fast")
}

function afterShowAccordionCategory() {
    for (var dlg = this; null !== dlg.parentNode && !jQuery(dlg).hasClass("ui-dialog-content");) dlg = dlg.parentNode;
    jQuery(dlg).hasClass("ui-dialog-content") && (jQuery(dlg.parentNode).height() > jQuery(window).height() && jQuery(dlg).dialog("option", "height", jQuery(window).height() - 60), jQuery(dlg).dialog("option", "position", "center"))
}

function clickAccordionCat(e) {
    jQuery(this).hasClass("ui-state-active") ? (jQuery(".accordion tr." + this.id).each(function() {
        jQuery(".accordion tr." + this.id).each(function() {
            jQuery(".accordion tr." + this.id).each(function() {
                jQuery(".accordion tr." + this.id).each(function() {
                    jQuery(".accordion tr." + this.id).each(function() {
                        jQuery(".accordion tr." + this.id).each(function() {
                            jQuery(".accordion tr." + this.id).each(function() {
                                jQuery(".accordion tr." + this.id).each(function() {
                                    jQuery(".accordion tr." + this.id).each(function() {
                                        jQuery(".accordion tr." + this.id).each(function() {
                                            jQuery(".accordion tr." + this.id).each(function() {
                                                jQuery(".accordion tr." + this.id).hide("blind")
                                            }), jQuery(".accordion tr." + this.id).hide("blind")
                                        }), jQuery(".accordion tr." + this.id).hide("blind")
                                    }), jQuery(".accordion tr." + this.id).hide("blind")
                                }), jQuery(".accordion tr." + this.id).hide("blind")
                            }), jQuery(".accordion tr." + this.id).hide("blind")
                        }), jQuery(".accordion tr." + this.id).hide("blind")
                    }), jQuery(".accordion tr." + this.id).hide("blind")
                }), jQuery(".accordion tr." + this.id).hide("blind")
            }), jQuery(".accordion tr." + this.id).hide("blind")
        }), jQuery(".accordion tr." + this.id).hide("blind")
    }), jQuery(this.parentNode).find("ul").hide("blind"), jQuery(this).find("span.ui-icon").addClass("ui-icon-triangle-1-e").removeClass("ui-icon-triangle-1-s"), jQuery(".accordion tr." + this.id).hide("blind"), jQuery(this).removeClass("ui-state-active ui-corner-top ui-state-hover").addClass("ui-corner-all"), jQuery(this.parentNode).find("span.ui-icon").addClass("ui-icon-triangle-1-e").removeClass("ui-icon-triangle-1-s")) : (jQuery(this.parentNode).find("ul").first().show("blind", afterShowAccordionCategory), jQuery("table.accordion tr." + this.id).show("blind"), jQuery(this).addClass("ui-state-active ui-corner-top ui-state-hover").removeClass("ui-corner-all"), jQuery(this).find("span.ui-icon").removeClass("ui-icon-triangle-1-e").addClass("ui-icon-triangle-1-s"))
}

function clickAttrOpt(e) {
    var event = e || window.event;
    event.srcElement && !event.target && (event.target = event.srcElement), event && event.stopPropagation ? event.stopPropagation() : event.cancelBubble = !0;
    for (var div = event.target; null !== div.parentNode && !jQuery(div).hasClass("opt");) div = div.parentNode;
    jQuery(div.parentNode).find('input[type="radio"]').removeAttr("checked"), jQuery(div).addClass("picked").find('input[type="radio"]').attr("checked", "checked")
}

function clickAccDlgSectEmpty(e) {
    var event = e || window.event;
    event.srcElement && !event.target && (event.target = event.srcElement), event && event.stopPropagation ? event.stopPropagation() : event.cancelBubble = !0, event.charCode && !event.keyCode && (event.keyCode = event.charCode);
    for (var p = event.target.id.split("_"), pos_x = p[1], pos_y = p[2], obj = event.target; null !== obj.parentNode && void 0 !== obj.parentNode && jQuery.inArray(obj.id, ["door", "back", "side", "other"]) < 0;) obj = obj.parentNode;
    0 === jQuery(".dlgNewAccessory").length && (jQuery("body").append('<div class="dlgNewAccessory closable" title="Accessoire kiezen"></div>'), jQuery(".dlgNewAccessory").dialog({
        modal: !0,
        autoOpen: !1,
        width: 560,
        minWidth: 475,
        height: 500,
        buttons: {
            Opslaan: function() {
                var td = "",
                    dlg = this;
                td = "side" == jQuery(this).find('input[name="type"]').val() ? "s_" + jQuery(this).find('input[name="section"]').val() + "_" + jQuery(this).find('input[name="height"]').val() : "td_" + jQuery(this).find('input[name="section"]').val() + "_" + jQuery(this).find('input[name="height"]').val(), td = jQuery("#" + jQuery(this).find('input[name="type"]').val() + " #" + td)[0];
                var sel = jQuery(dlg).find('input[name="product"][checked]');
                if (0 === sel.length && (sel = jQuery(dlg).find('select[name="product"]')), 1 == sel.length) {
                    var url = "";
                    window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
                        url: configuratorPath + "accessory.dialog.save.php" + url,
                        data: jQuery(this).find("form").serialize(),
                        success: addAccSaveSuccess,
                        beforeSend: function(XMLHttpRequest) {
                            XMLHttpRequest.dialog = dlg, XMLHttpRequest.input = sel, XMLHttpRequest.cell = td
                        }
                    })
                }
            },
            Annuleren: function() {
                jQuery(this).dialog("close")
            }
        },
        open: function(event, ui) {
            jQuery(this).find("div.buttons").hide()
        },
        resize: function(event, ui) {
            jQuery("#tdopt fieldset").css("width", jQuery(event.target).width() - jQuery(event.target).find(".pick").width() - 30)
        }
    })), jQuery(".dlgNewAccessory").html('<div style="font-weight: bold; font-size: large; color: #00f; height: 5em; margin-top: 30%; width: 100%; text-align: center; vertical-align: middle;">Productenlijst wordt geladen...</div>'), jQuery(".dlgNewAccessory").load(configuratorPath + "accessory.dialog.choose.php", {
        section: pos_x,
        height: pos_y,
        type: obj.id
    }, function(responseText, textStatus, XMLHttpRequest) {
        jQuery(this).find(".pick tr").bind({
            click: clickTDPickItem
        });
        var id = 0;
        jQuery(this).find('.pick *[name^="product"]').each(function(index, Element) {
            if (id = jQuery(Element.parentNode).find('*[name^="product"]').val()) {
                var opt = jQuery("input#prd_o_" + id).val();
                if (opt) {
                    try {
                        opt = json_decode(opt)
                    } catch (error) {
                        opt = ""
                    }
                    for (var option in opt)
                        for (var code in jQuery("#tdopt").append('<fieldset class="' + option + " prd" + id + '" style="display:none"><legend>' + option + '</legend><div class="scroll" ></div></fielset>'), opt[option]) jQuery("#tdopt fieldset." + option + ".prd" + id + " .scroll").append('<div class="opt" style="clear:both;float:none;"><input type="radio" name="option[kleur]" value="' + code + '" /><img height="30" width="50" src="/images/kleuren/' + code + '.png" alt="' + code + '"  /><span>' + opt[option][code] + "</span></div>");
                    jQuery("#tdopt div.opt").bind("click", {}, clickAttrOpt)
                }
            }
        })
    }), jQuery(".dlgNewAccessory").dialog("open")
}

function addAccessories_v2(e) {
    var event = e || window.event;
    if (event && (event.srcElement && !event.target && (event.target = event.srcElement), event && event.stopPropagation ? event.stopPropagation() : event.cancelBubble = !0, event.charCode && !event.keyCode && (event.keyCode = event.charCode)), 1 == usedialogs) {
        if (0 === jQuery(".dlgAccessories").length) {
            jQuery("body").append('<div class="dlgAccessories closable" title="Accessoires toevoegen"></div>');
            screen.availWidth;
            window.innerWidth ? window.innerWidth : document.documentElement.clientWidth && document.documentElement.clientWidth, jQuery(".dlgAccessories").dialog({
                modal: !0,
                autoOpen: !1,
                width: 800,
                minWidth: 425,
                height: 470,
                buttons: {
                    "Opslaan en sluiten": function() {
                        jQuery(this).dialog("close")
                    }
                },
                open: function(event, ui) {
                    jQuery(this).find("div.buttons").hide(), jQuery(this).dialog("option", "height", "auto")
                },
                close: function(eevnt, ui) {
                    reloadIMG(), clickLoadLimit(eevnt)
                }
            })
        }
        var url = "";
        window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
            data: {},
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus)
            },
            success: function(data, textStatus, XMLHttpRequest) {
                jQuery(".dlgAccessories").html(data), jQuery(".dlgAccessories").dialog("open"), jQuery(".dlgAccessories .tabs").tabs({
                    cache: !1,
                    load: dlgAccessoriesTabLoad,
                    show: dlgAccessoriesTabLoad
                })
            },
            type: "POST",
            url: configuratorPath + "accessory.dialog.php" + url
        })
    }
}

function loadInputsFromCookies() {
    jQuery("input").each(function(Element, Index) {
        if (jQuery(Element).attr("name")) switch (Element.type) {
            case "checkbox":
            case "radio":
                break;
            default:
                "" === jQuery(Element).val() && jQuery(Element).val(jQuery.cookie(Element.name))
        }
    })
}

function saveInputsToCookies() {
    jQuery("input").each(function(Element, Index) {
        if (jQuery(Element).attr("name")) switch (Element.type) {
            case "checkbox":
            case "radio":
                break;
            default:
                "" !== jQuery(Element).val() && jQuery(Element).val(jQuery.cookie(Element.name, jQuery(Element).val(), {
                    expires: 7,
                    path: "/",
                    domain: window.location.host
                }))
        }
    })
}

function SKCanvasBuilderGS3(parent, htmlCanvasElement) {
    var self;
    (self = this).name = "Canvas GS3", self.abstrct = !1, self._height = 0, self._paddingTop = 35, self._paddingLeft = 50, self._pillarWidth = 4, self.sections = {}, self._shelveMargin = .3, self._shelveHeight = 3, self._shelveMountSteps = 2.5, self._shelveMinDistance = 5, self._useTopCarrier = !0, self._depth = 0, self._listeners = {}, self._useAnimation = !0, self._useInfoPopups = !0, self._positions = {}, self._useBrace = "h", self._canvasEvents = SKCanvasBuilder.prototype._canvasEvents, SKCanvasBuilder.call(self, parent, htmlCanvasElement), SKBaseArticle.section = SKCanvasSectionGS3, SKBaseArticle.shelve = SKArtShelveGS3, SKBaseArticle.pillar = SKArtPillarGS3, SKBaseArticle.slidingDoor = SKArtSlidingDoorG3, SKBaseArticle.side = SKArtSide, SKBaseArticle.back = SKArtBackGS3, SKBaseArticle.slidingdoor = SKArtSlidingDoorG3, self.loopBreak(arguments.callee.name, 122)
}

function SKArtPillarGS3(parent, sectionNo, height, left, id, object, callback) {
    var self = this,
        me = self;
    self.name = "Shelving Pillar GS3", self.postponeCreate = !0, self.abstrct = !1, self.count = 2, SKArtPillar.call(self, parent, sectionNo, height, left, id, object, callback), self.count = 2, self.depth = 0, self.addFoot = function(id_ext) {
        var foot, sysSection, parts, pillars;
        self._shelving && self._shelving.sections && (sysSection = self._shelving.sections[self.sectionNo]), (foot = self._doc.createElement("DIV")).id = "foot" + id_ext;
        try {
            sysSection && (parts = sysSection.parts) && parts.pillar && (void 0 !== (pillars = parts.foot) ? pillars["foot_" + self.sectionNo] ? foot.id = "foot_" + self.sectionNo : pillars["foot_" + self.sectionNo + "_0"] ? foot.id = "foot_" + self.sectionNo + "_0" : pillars["pillar_" + self.sectionNo] ? foot.id = "pillar_" + self.sectionNo : pillars["pillar_" + self.sectionNo + "_0"] && (foot.id = "pillar_" + self.sectionNo + "_0") : foot.id = "foot_" + self.sectionNo)
        } catch (ignore) {}
        foot.className = "foot", $(self.htmlElement).append(foot);
        try {
            $(self.parent).trigger("newarticle", ["foot", foot.id, self.sectionNo, 0, self._pillarWidth, self._pillarWidth, self._pillarWidth])
        } catch (err) {
            self.log("error", err)
        }
        return foot
    }, self.addTopdop = function(id_ext) {
        var topdop, sysSection, parts, pillars;
        me._shelving && me._shelving.sections && (sysSection = me._shelving.sections[self.sectionNo]), (topdop = self._doc.createElement("DIV")).id = "topdop" + id_ext;
        try {
            sysSection && (parts = sysSection.parts) && parts.pillar && ((pillars = parts.topdop) ? pillars["topdop_" + self.sectionNo] ? topdop.id = "topdop_" + self.sectionNo : pillars["topdop_" + self.sectionNo + "_0"] ? topdop.id = "topdop_" + self.sectionNo + "_0" : pillars["pillar_" + self.sectionNo] ? topdop.id = "pillar_" + self.sectionNo : pillars["pillar_" + self.sectionNo + "_0"] && (topdop.id = "pillar_" + self.sectionNo + "_0") : topdop.id = "topdop_" + self.sectionNo)
        } catch (ignore) {}
        topdop.className = "topdop", $(self.htmlElement).append(topdop);
        try {
            $(self.parent).trigger("newarticle", ["topdop", topdop.id, self.sectionNo, height - self._pillarWidth, self._pillarWidth, self._pillarWidth, self._pillarWidth])
        } catch (err) {
            self.log("error", err)
        }
        return topdop
    }, self.createDOM()
}

function SKCanvasSectionGS3(parent, sectionNo, properties) {
    var self;
    (self = this).name = "Section GS3", self.abstrct = !1, SKCanvasSection.call(self, parent, sectionNo, properties)
}

function SKArtShelveGS3(SKCanvasSection, properties, id) {
    var self, skBAmove, doorAbove, doorBelow;
    self = this, self.name = "Shelve GS3", self.abstrct = !1, SKArtShelve.call(self, SKCanvasSection, properties, id), Object.defineProperties ? Object.defineProperties(self, {
        doorAbove: {
            get: function() {
                return doorAbove
            },
            set: function(val) {
                (!val || val instanceof SKBaseArticle) && (doorAbove = val)
            }
        },
        doorBelow: {
            get: function() {
                return doorBelow
            },
            set: function(val) {
                (!val || val instanceof SKBaseArticle) && (doorBelow = val)
            }
        }
    }) : self.__defineGetter__ && (self.__defineGetter__("doorAbove", function() {
        return doorAbove
    }), self.__defineSetter__("doorAbove", function(val) {
        val instanceof SKBaseArticle && (doorAbove = val)
    }), self.__defineGetter__("doorBelow", function() {
        return doorBelow
    }), self.__defineSetter__("doorBelow", function(val) {
        val instanceof SKBaseArticle && (doorBelow = val)
    })), skBAmove = self.move, self.move = function(position) {
        self.doorAbove = null, self.doorBelow = null, skBAmove.call(self, position)
    }, self.doorAbove = null, self.doorBelow = null
}

function SKArtBraceH(skCanvasBuilderSection, info, id) {
    var self;
    self = this, self.name = "Brace H GS3", self.abstrct = !1, SKArtBrace.call(self, skCanvasBuilderSection, "Shelving H Brace"), self.height = 30, self.createDOM = function() {
        self.htmlElement = document.createElement("div"), $(self.htmlElement).data("__class__", self), self.htmlElement.id = void 0 !== id ? id : "brace_" + self._parent._getSectionNo(), self.htmlElement.className = "brace h", $(self.htmlElement).append('<div class="left" /><div class="center" /><div class="right" />'), self.appendToSection()
    }, self.createDOM()
}

function SKArtBackGS3(skCBSection, properties, id) {
    var _me = this,
        self = this,
        width = properties.width | properties.x,
        height = properties.height | properties.y | properties.z,
        perfo = properties.perfo,
        position = properties.position | properties.pos,
        sectionHeight = skCBSection._getSectionHeight();
    self.abstrct = !1, SKArtBack.call(self, skCBSection, "Shelving Back"), SKDraggable.call(self), self.priceObjectName = "back", isNaN(perfo) && properties.item && properties.item.perfo && (perfo = properties.item.perfo), self.height = parseInt(height, 10), self.width = parseInt(width, 10), self.perfo = parseInt(perfo, 10), self.position = 0, position && (self.position = parseInt(position, 10)), self.position < 0 && (self.position = sectionHeight + self.position), self.position + self.height > sectionHeight && (self.position = sectionHeight - self.height, self.position < 0 && (self.position = 0)), self.drag = function(event, ui) {
        var sectionHeight = self._parent._getSectionHeight(),
            backHeight = self.height,
            pos = sectionHeight - ui.position.top - backHeight,
            sectionNo = self._parent._getSectionNo();
        self._shelving.sections[sectionNo].parts.back[self.htmlElement.id].position = pos
    }, self.createDOM = function() {
        var back, part, partid, height, option, perfo, width, i = 0,
            maxid = -1,
            me = self,
            pos = 0,
            options = [],
            solution = [],
            htmlElement = self._parent.htmlElement,
            siblings = [],
            found = !1;
        if (999 === self.height && self._parent) {
            if (self._parent.parts)
                for (i in self._parent.parts)(part = self._parent.parts[i]) !== self && (part instanceof SKArtBrace ? part.remove() : part instanceof SKArtBack && part.remove());
            for (i in htmlElement && ($(htmlElement).find(".brace").each(function(ix, Element) {
                    $(me._skCanvasBuilder).trigger("delarticle", [Element.className, Element.id, me.sectionNo, parseInt($(Element).css("bottom"), 10), $(Element).width(), $(Element).height(), me._depth]), $(Element).data("__class__") ? $(Element).data("__class__").remove() : $(Element).remove()
                }), $(htmlElement).find(".back").each(function(ix, Element) {
                    $(me._skCanvasBuilder).trigger("delarticle", [Element.className, Element.id, me.sectionNo, parseInt($(Element).css("bottom"), 10), $(Element).width(), $(Element).height(), me._depth]), $(Element).data("__class__") ? $(Element).data("__class__").remove() : $(Element).remove()
                })), height = self._parent._getSectionHeight(), self._skLoader.dimensions.back) 5 < (option = self._skLoader.dimensions.back[i]).length && option[4] == self.perfo && options.push(option);
            switch (height) {
                case 100:
                    solution = [100];
                    break;
                case 120:
                    solution = [120];
                    break;
                case 150:
                    solution = [100, 50];
                    break;
                case 200:
                    solution = [100, 100];
                    break;
                case 220:
                    solution = [120, 100];
                    break;
                case 250:
                    solution = [100, 100, 50];
                    break;
                case 300:
                    solution = [100, 100, 100];
                    break;
                case 400:
                    solution = [100, 100, 100, 100];
                    break;
                default:
                    solution = []
            }
            for (i in self.children = [], solution) self.children.push(new SKArtBackGS3(self._parent, {
                width: self.width,
                height: solution[i],
                perfo: self.perfo
            }))
        }
        if (999 !== self.height) {
            for (i in self._skLoader.dimensions.back)
                if (!isNaN(i) && (i = parseInt(i, 10), back = self._skLoader.dimensions.back[i], perfo = parseInt(back[self.propertyList.perfo], 10), height = parseInt(back[self.propertyList.height], 10), width = parseInt(back[self.propertyList.width], 10), perfo == self.perfo && height == self.height && width == self.width)) {
                    for (pos in found = !0, self.propertyList) partid = back[self.propertyList[pos]], self.DBValues[pos] = parseInt(partid, 10);
                    break
                }
            if (!found) return void self.remove();
            back = document.createElement("div"), self.htmlElement = back, $(self.htmlElement).data("__class__", self), back.className = "back", self.perfo ? back.className += " perfo" : back.className += " solid"
        }
        if (self._parent) {
            if (self._parent.parts)
                for (i in self._parent.parts)(part = self._parent.parts[i]) !== self && (part instanceof SKArtBrace ? part.remove() : part instanceof SKArtBack && part.htmlElement && (partid = part.htmlElement.id, maxid < (partid = parseInt(partid.split("_")[2], 10)) && (maxid = partid), 999 === self.height ? part.remove() : siblings.push(part)));
            htmlElement && ($(htmlElement).find(".brace").each(function(ix, Element) {
                $(this._skCanvasBuilder).trigger("delarticle", [Element.className, Element.id, this.sectionNo, parseInt($(Element).css("bottom"), 10), $(Element).width(), $(Element).height(), me._depth]), $(Element).data("__class__") ? $(Element).data("__class__").remove() : $(Element).remove()
            }), 999 !== self.height && htmlElement.appendChild(back))
        }
        if (999 !== self.height) {
            back.id = "back_" + self.sectionNo + "_" + (maxid + 1), back.style.height = self.height + "px", back.style.bottom = self._parent._getSectionHeight() + "px", 1 !== self.perfo || self.supportsGradient || $(self.htmlElement).css({
                "background-image": "url('/images/frontmini/backperf.png')",
                "background-repeat": "repeat",
                "background-size": "auto",
                "background-position": "center"
            }), $(back).data.__class__ = self;
            try {
                $(self._skCanvasBuilder).trigger("newarticle", [self, back.id])
            } catch (err) {
                self.log("error", err)
            }
            self.move(self.position), self.makeDraggable(), self.setEvents(), self.preventSamePlace(), $(self.htmlElement).data("__class__", self)
        }
        self._parent.removeBraces(), self._skCanvasBuilder._addBraces()
    }, self.articleInfoContents = function(HTMLDivElement) {
        $(HTMLDivElement).append("<h3>Achterwand</h3>"), $(HTMLDivElement).append("Geperforeerd: " + (this.perfo ? "Ja" : "Nee") + '<br /><span style="font-size: 0.87em">' + _me.width + " cm breed x " + _me.height + " cm hoog</span><br />")
    }, self.showInfoButtons = function() {
        var btn = document.createElement("input");
        $(btn).on("click", {
            me: _me
        }, function() {
            _me.remove()
        }), btn.type = "image", btn.value = "", btn.className = "btn bin info", $(btn).css({
            position: "absolute",
            left: "auto",
            right: 5,
            top: 5,
            width: 15,
            height: 15,
            backgroundImage: "url('/images/bin.gif')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            border: "none",
            padding: 0,
            cursor: "pointer",
            borderRadius: "none",
            boxShadow: "none"
        }), $(_me.htmlElement).append(btn)
    }, self.setCustomEvents = function() {
        $(this.htmlElement).on("mouseenter", {
            me: this
        }, this.showInfoButtons)
    }, self.createDOM()
}

function SKArtSide(skPillar, height, depth, perfo, position) {
    var id, obj, me = this;
    this.abstrct = !1, SKBaseArticle.call(this, skPillar, "Shelving Side"), SKDraggable.call(this), position && (this.position = parseInt(position, 10)), isNaN(height) && null !== height && "object" == typeof height && (id = depth, height = (obj = height).y, depth = obj.z, void 0 === (perfo = obj.perfo) && void 0 !== obj.item && void 0 !== obj.item.perfo && (perfo = obj.item.perfo), position = obj.position), this.priceObjectName = "side", this.height = parseInt(height, 10), this.width = 0, this.depth = parseInt(depth, 10), this.perfo = parseInt(perfo, 10), this.position = void 0 !== position ? position : 0, this.createDOM = function() {
        this.htmlElement = document.createElement("div"), $(this.htmlElement).data("__class__", this), this.htmlElement.className = "side", this.perfo && (this.htmlElement.className += " perfo"), this.htmlElement.style.height = this.height - 2 + "px", $(this._parent.htmlElement).append(this.htmlElement), this.htmlElement.id = void 0 !== id ? id : "side_" + this.sectionNo + "_" + (this.getMaxId() + 1), this.htmlElement.style.bottom = this.position + "px";
        try {
            $(this._skCanvasBuilder).trigger("newarticle", [this])
        } catch (err) {
            this.log("error", err)
        }
        this.move(this.position), this.makeDraggable(), this.setEvents(), this.preventSamePlace(), $(this.htmlElement).data("__class__", this)
    }, this.articleInfoContents = function(HTMLDivElement) {
        $(HTMLDivElement).append("<h3>Zijwand</h3>"), $(HTMLDivElement).append("Geperforeerd: " + (this.perfo ? "Ja" : "Nee") + '<br /><span style="font-size: 0.87em">' + me.depth + " cm breed x " + me.height + " cm hoog</span><br />")
    }, this.createDOM()
}

function SKArtSlidingDoorG3(skCanvasBuilderSection, properties, id) {
    var me = this,
        _me = me,
        skBAmove = me.move,
        self = this,
        height = properties.height | properties.y,
        color = properties.color;
    self.abstrct = !1, SKArtSlidingDoor.call(self, skCanvasBuilderSection, "Shelving Sliding Door", {}), self.priceObjectName = "slidingDoor", isNaN(color) || properties.item && properties.item.kleur && (color = properties.item.kleur), self.color = color, self.height = height, self.margin = -3, self.width = skCanvasBuilderSection.width, self.depth = 0, self.position = 6, (properties.position || properties.pos) && (self.position = parseInt(properties.position || properties.pos, 10)), skBAmove = self.move, self.move = function(position) {
        var bottomShelve, bottomShelveDiff, topShelve, topShelveDiff, meTop = position + self.height - 6;
        self.loopBreak(arguments.callee.name, 752), self.position = position;
        try {
            if ($(this.htmlElement).css({
                    top: ""
                }), skBAmove && (this.bottomShelve && (this.bottomShelve.doorAbove = null, this.bottomShelve = null), this.topShelve && (this.topShelve.doorBelow = null, this.topShelve = null), skBAmove.call(this, position), position = self.position, this.bottomShelve)) return;
            $(this._parent.parts).each(function(index, Element) {
                self.loopBreak(arguments.callee.name, 780);
                var top = Element.position + Element.height;
                if (Element instanceof SKArtShelve) {
                    if (Element.doorAbove) return !0;
                    void 0 === bottomShelve ? (bottomShelve = Element, bottomShelveDiff = Math.abs(bottomShelve.position + bottomShelve.height - position)) : Math.abs(position - top) < bottomShelveDiff && (bottomShelve = Element, bottomShelveDiff = Math.abs(bottomShelve.position + bottomShelve.height - position))
                }
                return !0
            }), bottomShelve && (this.bottomShelve && (this.bottomShelve.doorAbove = null), (this.bottomShelve = bottomShelve).doorAbove = this, bottomShelve.position + bottomShelve.shelveHeight !== position && skBAmove && (position = bottomShelve.position + bottomShelve.shelveHeight, skBAmove.call(this, position), position = this.position)), meTop = position + self.height - 6, $(this._parent.parts).each(function(index, Element) {
                if (self.loopBreak(arguments.callee.name, 825), Element == bottomShelve) return !0;
                if (Element instanceof SKArtShelve) {
                    if (Element.doorAbove) return !0;
                    if (Element.doorBelow) return !0;
                    void 0 === topShelve ? (topShelve = Element, topShelveDiff = Math.abs(meTop - topShelve.position)) : Math.abs(meTop - Element.position) < topShelveDiff && (topShelve = Element, topShelveDiff = Math.abs(meTop - topShelve.position))
                }
                return !0
            }), skBAmove && ((this.topShelve = topShelve).doorBelow = this, topShelve.move(meTop)), $(this._parent.parts).each(function(index, Element) {
                self.loopBreak(arguments.callee.name, 869)
            })
        } catch (err) {
            me.log("warn", err)
        }
    }, self.createDOM = function() {
        self.htmlElement = document.createElement("DIV"), self.htmlElement.id = null != id && "string" == typeof id ? id : self.priceObjectName + "_" + self._parent._sectionNo + "_" + (self.getMaxId() + 1), $(self.htmlElement).data("__class__", self), self.htmlElement.className = "slidingDoor " + self.color, $(self._parent.htmlElement).append(self.htmlElement);
        var leftDoor = document.createElement("DIV"),
            rightDoor = document.createElement("DIV"),
            leftDoorHandle = document.createElement("DIV"),
            rightDoorHandle = document.createElement("DIV"),
            topStrip = document.createElement("DIV"),
            bottomStrip = document.createElement("DIV");
        leftDoor.className = "left", rightDoor.className = "right", leftDoorHandle.className = rightDoorHandle.className = "handle", $(leftDoor).append(leftDoorHandle), $(rightDoor).append(rightDoorHandle), topStrip.className = "strip top", bottomStrip.className = "strip bottom", $(self.htmlElement).append(topStrip), $(self.htmlElement).append(bottomStrip), $(self.htmlElement).append(leftDoor), $(self.htmlElement).append(rightDoor);
        try {
            $(self._skCanvasBuilder).trigger("newarticle", self)
        } catch (err) {
            self.log("warn", err)
        }
        self.move(self.position), self.makeDraggable(), self.preventSamePlace(), self.setEvents(), $(self.htmlElement).data("__class__", self)
    }, self.articleInfoContents = function(HTMLDivElement) {
        $(HTMLDivElement).append("<h3>Achterwand</h3>"), $(HTMLDivElement).append("Geperforeerd: " + (this.perfo ? "Ja" : "Nee") + '<br /><span style="font-size: 0.87em">' + _me.width + " cm breed x " + _me.height + " cm hoog</span><br />")
    }, self.showInfoButtons = function() {
        var btn = document.createElement("input");
        $(btn).on("click", {
            me: _me
        }, function() {
            _me.remove()
        }), btn.type = "image", btn.value = "", btn.className = "btn bin info", $(btn).css({
            position: "absolute",
            left: "auto",
            right: 5,
            top: 5,
            width: 15,
            height: 15,
            backgroundImage: "url('/images/bin.gif')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            border: "none",
            padding: 0,
            cursor: "pointer",
            borderRadius: "none",
            boxShadow: "none"
        }), $(_me.htmlElement).append(btn)
    }, self.setCustomEvents = function() {
        $(this.htmlElement).on("mouseenter", {
            me: this
        }, this.showInfoButtons)
    }, self.createDOM()
}

function SKSettingsFormBuilderGS3(parent) {
    this.name = "Settings Wood", this.abstrct = !1, SKSettingsFormBuilder.call(this, parent), this._canvasEvents = SKSettingsFormBuilder.prototype._canvasEvents, this.loopBreak(arguments.callee.name, 973)
}

function SKPriceCalculatorGS3(parent) {
    this.name = "Price Calculator GS3", this.abstrct = !1, SKPriceCalculator.call(this, parent), this.loopBreak(arguments.callee.name, 984)
}

function SKCanvasBuilderWood(parent, htmlCanvasElement) {
    var self, txt;
    (self = this).name = "Canvas Wood", self.abstrct = !1, txt = 'Dit is nog de oude versie van onze houten configuratie. \nAlleen om compatible te blijven met stellingen die u eerder van ons hebt gekocht.\n\nWilt u meer mogelijkheden, klik "OK"!', confirm(txt) ? window.location = "https://www.stellingkast-hout.nl/" : (alert('Wilt u later alsnog onze nieuwe configurator gebruiken, klik in de menubalk op "Hout"!'), self._paddingLeft = 50, self._pillarWidth = 3, self._shelveMargin = .3, self._shelveHeight = 1.8, self._shelveMountSteps = 5, self._shelveMinDistance = 5, self._listeners = {}, self._useAnimation = !0, self._useInfoPopups = !0, self._positions = {}, self._useBrace = "X", SKCanvasBuilder.call(self, parent, htmlCanvasElement), SKBaseArticle.section = SKCanvasSectionWood, SKBaseArticle.pillar = SKArtPillarWood, SKBaseArticle.shelve = SKArtShelveWood, txt = '<div class="hint" style="margin: 10px 30px"><p style="font-size: 14px; font-weight: bold; width: auto;">Beweeg met de muis over de stelling <br />en pas hoogte, diepte en aantal secties naar wens aan.</p></div>', $(htmlCanvasElement).before(txt))
}

function SKSettingsFormBuilderWood(parent) {
    var self;
    (self = this).name = "Settings Wood", self.abstrct = !1, SKSettingsFormBuilder.call(self, parent)
}

function SKPriceCalculatorWood(parent) {
    var self;
    (self = this).name = "Price Calculator Wood", self.abstrct = !1, SKPriceCalculator.call(self, parent)
}

function SKCanvasSectionWood(parent, sectionNo, properties) {
    var self;
    (self = this).name = "Section Wood", self.abstrct = !1, SKCanvasSection.call(self, parent, sectionNo, properties)
}

function SKArtPillarWood(parent, sectionNo, height, left, id, object, callback) {
    var self;
    (self = this).name = "Pillar Wood", self.count = 1, self.depth = parent._depth, self.abstrct = !1, self.postponeCreate = !0, SKArtPillar.call(self, parent, sectionNo, height, left, id, object, callback), self.depth = parent._depth, self.createDOM()
}

function SKArtShelvePinWood(SKShelve, side) {
    var self;
    (self = this).name = "Pillar Wood", self.count = 2, SKBaseArticle.call(this, parent, self.name)
}

function SKArtShelvePinEndWood(SKShelve, side) {
    var self;
    (self = this).name = "Pillar Wood", self.abstrct = !1, SKArtShelvePinWood.call(this, parent, self.name)
}

function SKArtShelvePinContinuationWood(SKShelve, side) {
    var self;
    (self = this).name = "Pillar Wood", self.abstrct = !1, SKArtShelvePinWood.call(this, parent, self.name)
}

function SKArtShelveWood(SKCanvasSection, properties, id) {
    var self;
    (self = this).name = "Shelve Wood", self.count = 1, self.abstrct = !1, SKArtShelve.call(self, SKCanvasSection, properties, id), self.leftPin = new SKArtShelvePinEndWood(self, "L"), self.rightPin = new SKArtShelvePinEndWood(self, "R")
}
configuratorPath = "undefined" != typeof OFFSET ? OFFSET + "php/config_v2/" : "/php/config_v2/", closeMe = function(e) {
        var event = window.event || e;
        event.srcElement && !event.target && (event.target = event.srcElement);
        for (var div = event.target; void 0 !== div && "null" != div && ("DIV" != div.tagName || !jQuery(div).hasClass("closable"));) div = div.parentNode;
        jQuery(div).hide("fast")
    }, clickAccessoryAdd = function(e) {
        var event = window.event || e;
        event.srcElement && !event.target && (event.target = event.srcElement);
        var mode = jQuery(".dlgaccessories").find('input[name="mode"]')[0].value;
        if ("door" == mode && 0 === jQuery(".dlgaccessories").find(".btnDelete").length && alert("Door te kiezen voor een deur in uw configuratie, waorden de standaard plastic voetjes nu vervangen door verstelbare voetjes."), 1 == usedialogs) {
            if (0 === jQuery(".dlgNewAccessory").length) {
                jQuery("body").append('<div class="dlgNewAccessory closable" title="Accessoire toevoegen"></div>');
                var innerW = screen.availWidth;
                window.innerWidth ? innerW = window.innerWidth : document.documentElement.clientWidth && (innerW = document.documentElement.clientWidth), jQuery(".dlgNewAccessory").dialog({
                    modal: !0,
                    autoOpen: !1,
                    width: Math.min(innerW, Math.max(430, 65 * jQuery("select#lengte").val() + 100)),
                    minWidth: 425,
                    buttons: {
                        Opslaan: function(e) {
                            var mode = jQuery(this).find('input[name="mode"]')[0].value;
                            jQuery.ajax({
                                data: jQuery(this).find("form").serialize() + "&amp;result=none" + url,
                                error: function(XMLHttpRequest, textStatus, errorThrown) {
                                    alert(textStatus)
                                },
                                success: function(data, textStatus, XMLHttpRequest) {
                                    jQuery(".dlgaccessories").load(configuratorPath + "accessory.summary.php", {
                                        mode: mode
                                    }, function(responseText, textStatus, XMLHttpRequest) {
                                        jQuery(".dlgaccessories .buttons").hide(), jQuery(".dlgaccessories").find(".btnEdit").bind("click", clickAccessoriesGroupEdit), jQuery(".dlgaccessories").find(".btnDelete").bind("click", clickAccessoriesGroupDelete), jQuery(".dlgNewAccessory").dialog("close")
                                    })
                                },
                                type: jQuery(this).find("form")[0].method.toUpperCase(),
                                url: jQuery(this).find("form")[0].action
                            })
                        },
                        Annuleren: function() {
                            jQuery(this).dialog("close")
                        }
                    },
                    open: function(event, ui) {
                        jQuery(this).find("div.buttons").hide(), jQuery(this).find("td.allow").bind("click", clickHeightAdd), resizeDlg(this)
                    }
                })
            }
        } else 0 === jQuery(".dlgaccessories").find(".dlgNewAccessory").length && jQuery(".dlgaccessories fieldset").append('<div class="dlgNewAccessory closable"></div>');
        jQuery(".dlgNewAccessory").is(":hidden") ? jQuery(".dlgNewAccessory").load(configuratorPath + "accessory.new.php", {
            mode: mode
        }, function(responseText, textStatus, XMLHttpRequest) {
            1 == usedialogs ? jQuery(".dlgNewAccessory").dialog("open") : jQuery(".dlgNewAccessory").show("normal"), jQuery(".dlgNewAccessory").find(".btnNewHeight").unbind("click", clickHeightAdd), jQuery(".dlgNewAccessory").find(".btnNewHeight").bind("click", clickHeightAdd), jQuery(".dlgNewAccessory").find(".allow").unbind("click", clickHeightAdd), jQuery(".dlgNewAccessory").find(".allow").bind("click", clickHeightAdd)
        }) : jQuery(".dlgNewAccessory").hide("fast")
    }, clickAccessoriesGroupEdit = function(e) {
        var event = window.event || e;
        event.srcElement && !event.target && (event.target = event.srcElement);
        var id = event.target.id.substr(9),
            mode = jQuery(event.target.parentNode.parentNode).find('input[name="mode"]');
        if (mode = 0 < mode.length ? mode[0].value : 1 == usedialogs && 0 < jQuery(".dlgaccessories").find('input[name="mode"]').length ? jQuery(".dlgaccessories").find('input[name="mode"]')[0].value : "", 0 === jQuery(".dlgEditAccessory").length)
            if (1 == usedialogs) {
                jQuery("body").append('<div class="dlgEditAccessory closable" title="Accesoires toevoegen / bewerken"></div>');
                var innerW = screen.availWidth;
                window.innerWidth ? innerW = window.innerWidth : document.documentElement.clientWidth && (innerW = document.documentElement.clientWidth), jQuery(".dlgEditAccessory").dialog({
                    modal: !0,
                    autoOpen: !1,
                    width: Math.min(innerW, Math.max(430, 65 * jQuery("select#lengte").val() + 100)),
                    minWidth: 420,
                    buttons: {
                        Opslaan: function(e) {
                            var mode = jQuery(this).find('input[name="mode"]')[0].value,
                                url = "";
                            window.PHPSessID && (url += "&amp;PHPSESSID=" + window.PHPSessID), jQuery.ajax({
                                data: jQuery(this).find("form").serialize() + "&amp;result=none" + url,
                                error: function(XMLHttpRequest, textStatus, errorThrown) {
                                    alert(textStatus)
                                },
                                success: function(data, textStatus, XMLHttpRequest) {
                                    jQuery(".dlgaccessories").load(configuratorPath + "accessory.summary.php", {
                                        mode: mode
                                    }, function(responseText, textStatus, XMLHttpRequest) {
                                        jQuery(".dlgaccessories .buttons").hide(), jQuery(".dlgaccessories").find(".btnEdit").bind("click", clickAccessoriesGroupEdit), jQuery(".dlgaccessories").find(".btnDelete").bind("click", clickAccessoriesGroupDelete), jQuery(".dlgEditAccessory").dialog("close")
                                    })
                                },
                                type: jQuery(this).find("form")[0].method.toUpperCase(),
                                url: jQuery(this).find("form")[0].action
                            })
                        },
                        Sluiten: function() {
                            jQuery(this).dialog("close")
                        }
                    },
                    open: function(event, ui) {
                        resizeDlg(this), jQuery(this).find("div.buttons").hide(), jQuery(this).find("td.allow").unbind("click", clickHeightAdd), jQuery(this).find("td.allow").bind("click", clickHeightAdd)
                    }
                })
            } else jQuery(".dlgaccessories fieldset").append('<div class="dlgEditAccessory closable"></div>'), jQuery(".dlgEditAccessory").hide();
        jQuery(".dlgEditAccessory").is(":hidden") ? jQuery(".dlgEditAccessory").load(configuratorPath + "accessory.edit.php", {
            mode: mode,
            item: id
        }, function(responseText, textStatus, XMLHttpRequest) {
            1 == usedialogs ? jQuery(".dlgEditAccessory").dialog("open") : jQuery(".dlgEditAccessory").show("normal"), jQuery(".dlgEditAccessory").find(".btnNewHeight").unbind("click", clickHeightAdd), jQuery(".dlgEditAccessory").find(".btnNewHeight").bind("click", clickHeightAdd), jQuery(".dlgEditAccessory").find(".btnDelete").unbind("click", clickHeightDelete), jQuery(".dlgEditAccessory").find(".btnDelete").bind("click", clickHeightDelete)
        }) : jQuery(".dlgEditAccessory").hide("fast")
    }, clickAccessoriesGroupDelete = function(e) {
        var event = window.event || e;
        event.srcElement && !event.target && (event.target = event.srcElement);
        var mode = jQuery(event.target.parentNode.parentNode).find('input[name="mode"]');
        mode = 0 < mode.length ? mode[0].value : 1 == usedialogs && 0 < jQuery(".dlgaccessories").find('input[name="mode"]').length ? jQuery(".dlgaccessories").find('input[name="mode"]')[0].value : "";
        var id = event.target.id.substr(9),
            url = "";
        window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
            url: configuratorPath + "accessory.delete.php" + url,
            data: {
                mode: mode,
                item: id
            },
            success: function(data, textStatus, XMLHttpRequest) {
                if (0 < data) {
                    var el = event.target.parentNode;
                    "TD" == el.tagName && (el = el.parentNode), "DIV" != el.tagName && "TR" != el.tagName || jQuery(el).remove()
                }
            }
        })
    }, clickHeightAdd = function(e) {
        var event = window.event || e;
        event.srcElement && !event.target && (event.target = event.srcElement), void 0 === event.target && void 0 !== this && (event.target = this), event && event.stopPropagation ? event.stopPropagation() : event.cancelBubble = !0;
        for (var div = event.target; !jQuery(div).hasClass("closable") && div.parentNode;) div = div.parentNode;
        var mode = jQuery(div).find('input[name="mode"]');
        mode = 0 < mode.length ? mode[0].value : "";
        var content = "",
            uuid = "h" + Math.uuid(4, 36),
            mtr = 0;
        if ("TD" == event.target.tagName) {
            if ("" < jQuery(event.target).html()) return;
            content += '<input type="hidden" name="pos[' + (mtr = event.target.id.split("_")[1]) + "][" + uuid + ']" value="' + jQuery(event.target.parentNode).find("td").first().html() + '">', content += '<input type="button" id="d' + uuid + '" class="btnDelete" >', jQuery(event.target).html(content).removeClass("allow")
        } else {
            if ("INPUT" != event.target.tagName) return;
            mtr = event.target.parentNode.parentNode.id.substr(5), content += '<div class="height" id="' + uuid + '">', content += '<select name="pos[' + mtr + "][" + uuid + ']"><option value="0">grond</option>';
            for (var i = 1; 50 * i < jQuery("select#hoogte").val(); i++) content += '<option value="' + 50 * i + '">' + 50 * i + " cm</option>";
            content += "</select>", content += '<input type="button" id="d' + uuid + '" class="btnDelete" >', content += "</div>", jQuery(event.target).before(content)
        }
        var url = "";
        window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
            url: configuratorPath + "accessory.options.php" + url,
            data: {
                mode: mode,
                item: jQuery(div).find(".item").val()
            },
            success: function(data, textStatus, XMLHttpRequest) {
                if ("" < data) {
                    data = data.split("\n");
                    var url = "";
                    window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.each(data, function(key, optie) {
                        "" < jQuery.trim(optie) && jQuery.ajax({
                            url: configuratorPath + "accessory.options.php" + url,
                            data: {
                                mode: mode,
                                item: jQuery(div).find(".item").val(),
                                optie: optie
                            },
                            success: function(data, textStatus, XMLHttpRequest) {
                                "" < data && (data = data.split("\n"), jQuery.each(data, function(key, value) {
                                    "" < jQuery.trim(value) && (value = value.split("="), "TD" == event.target.tagName ? 1 < value.length && (0 === jQuery(event.target).find("select." + optie).length && jQuery(event.target).find(".btnDelete").before('<select class="' + optie + '" name="option[' + mtr + "][" + uuid + "][" + optie + ']">'), jQuery(event.target).find("select." + optie).append($("<option value='" + value[0] + "'>" + value[1] + "</option>"))) : 1 < value.length && (0 === jQuery("#" + uuid).find("select." + optie).length && jQuery("#" + uuid + " .btnDelete").before('<select class="' + optie + '" name="option[' + mtr + "][" + uuid + "][" + optie + ']">'), jQuery("#" + uuid).find("select." + optie).append($("<option value='" + value[0] + "'>" + value[1] + "</option>"))))
                                })), resizeDlg(event.target)
                            }
                        })
                    }), jQuery("select.newoptionlist").removeClass("newoptionlist").show("fast")
                } else jQuery("select.newoptionlist").remove()
            }
        }), jQuery(event.target.parentNode).find(".btnDelete").bind("click", clickHeightDelete), jQuery(event.target.parentNode.parentNode).find("input")[0].checked = !0
    }, clickHeightDelete = function(e) {
        var event = window.event || e;
        event.srcElement && !event.target && (event.target = event.srcElement), event && event.stopPropagation ? event.stopPropagation() : event.cancelBubble = !0;
        for (var div = event.target, td = event.target; !jQuery(div).hasClass("closable");) "TD" == (div = div.parentNode).tagName && "TD" != td.tagName && (td = div);
        td = td.id.split("_");
        var mode = jQuery(div).find('input[name="mode"]').val(),
            id = jQuery(div).find("select.item").val(),
            mtr = td[1],
            height = td[2],
            url = "";
        window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
            url: configuratorPath + "accessory.delete.php" + url,
            data: {
                mode: mode,
                item: id,
                mtr: mtr,
                pos: height
            },
            success: function() {
                "TD" == event.target.parentNode.tagName ? jQuery(event.target.parentNode).html("").addClass("allow") : jQuery(event.target.parentNode).remove()
            }
        })
    }, changeMeasureSelect = function(e) {
        var event = window.event || e;
        if (event.srcElement && !event.target && (event.target = event.srcElement), "diepte" == event.target.id && 0 !== jQuery(".accessories .zijwand .count").html() && !confirm("Er zijn zijwanden gespecificeerd voor de stelling. \nAls u doorgaat worden deze verwijderd. \nWilt u doorgaan?")) return jQuery(event.target).val(jQuery("#currentDepth").val()), !1;
        var url = "";
        return window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
            url: configuratorPath + "measure.update.php" + url,
            data: {
                name: this.name,
                value: this.options[this.selectedIndex].value
            },
            success: function() {
                for (i = 1; i <= jQuery("#lengte").val(); i++) 0 < jQuery('input[name="formdata[' + i + '][meters]"]').length && (jQuery('input[name="formdata[' + i + '][meters]"]')[0].checked = !0);
                for (i = parseInt(jQuery("#lengte").val()) + 1; i <= 25; i++) 0 < jQuery('input[name="formdata[' + i + '][meters]"]').length && (jQuery('input[name="formdata[' + i + '][meters]"]')[0].checked = !1);
                0 < jQuery("#conf").length ? jQuery("#conf")[0].submit() : reloadIMG()
            }
        }), !1
    }, changeMeasureHoogteSelect = function(e) {
        var event = window.event || e;
        event.srcElement && !event.target && (event.target = event.srcElement), 0 === jQuery("#legborden").val() && jQuery("#legborden").val(jQuery(this).val() / 50 + 1)
    }, clickEditAccessory = function(e) {
        var event = window.event || e;
        event.srcElement && !event.target && (event.target = event.srcElement);
        var mode = "";
        switch (this.parentNode.className) {
            case "achterwand":
                mode = "back";
                break;
            case "zijwand":
                mode = "sidewall";
                break;
            case "deur":
                mode = "door";
                break;
            default:
                alert("Error: Option not found")
        }
        1 == usedialogs ? (0 === jQuery(".dlgaccessories").length && (jQuery("body").append('<div class="dlgaccessories closable" title="Accesoires toevoegen / bewerken"></div>'), jQuery(".dlgaccessories").dialog({
            modal: !0,
            autoOpen: !1,
            width: 500,
            minWidth: 300,
            buttons: {
                Toevoegen: function(e) {
                    var evt = window.event || e;
                    clickAccessoryAdd(evt)
                },
                Sluiten: function() {
                    jQuery(this).dialog("close")
                }
            },
            close: function(event, ui) {
                var tel = 0;
                jQuery(".dlgaccessories td.tel").each(function() {
                    tel += parseInt(this.innerHTML)
                });
                var accClassName = "";
                switch (jQuery(this).find('input[name="mode"]').val()) {
                    case "back":
                        accClassName = "achterwand";
                        break;
                    case "sidewall":
                        accClassName = "zijwand";
                        break;
                    case "door":
                        accClassName = "deur";
                        break;
                    default:
                        log.warn("Geen accesoire naam voor: " + jQuery(this).find('input[name="mode"]').val())
                }
                jQuery("fieldset.accessories div span." + accClassName + " span.count").html(tel), reloadIMG()
            },
            open: function(event, ui) {
                0 === jQuery(".dlgaccessories").find("td.tel").length && clickAccessoryAdd(event)
            }
        })), jQuery(".dlgaccessories").load(configuratorPath + "accessory.summary.php", {
            mode: mode
        }, function(responseText, textStatus, XMLHttpRequest) {
            jQuery(".dlgaccessories .buttons").hide(), jQuery(".dlgaccessories").dialog("open"), jQuery(".dlgaccessories").show("normal"), jQuery(".dlgaccessories").find(".btnEdit").bind("click", clickAccessoriesGroupEdit), jQuery(".dlgaccessories").find(".btnDelete").bind("click", clickAccessoriesGroupDelete)
        })) : (0 === jQuery("fieldset.accessories").find(".dlgaccessories").length && (jQuery("fieldset.accessories").append('<div class="dlgaccessories closable"></div>'), jQuery("fieldset.accessories .dlgaccessories").hide("fast")), jQuery("fieldset.accessories .dlgaccessories").is(":hidden") ? jQuery("fieldset.accessories .dlgaccessories").load(dirname(window.location.pathname) + "/accessory.summary.php", {
            mode: mode
        }, function(responseText, textStatus, XMLHttpRequest) {
            jQuery("fieldset.accessories .dlgaccessories").show("normal"), jQuery("fieldset.accessories .dlgaccessories").find(".btnEdit").bind("click", clickAccessoriesGroupEdit), jQuery("fieldset.accessories .dlgaccessories").find(".btnDelete").bind("click", clickAccessoriesGroupDelete), jQuery("fieldset.accessories .dlgaccessories").find(".btnAdd").bind("click", clickAccessoryAdd), jQuery("fieldset.accessories .dlgaccessories").find(".btnClose").bind("click", closeMe)
        }) : jQuery("fieldset.accessories .dlgaccessories").hide("fast"))
    }, clickSummaryDetails = function(e) {
        var event = window.event || e;
        event.srcElement && !event.target && (event.target = event.srcElement), 0 === jQuery(".dlgSummary").length && (jQuery("body").append('<div class="dlgSummary closable" title="Stellingconfiguratie"></div>'), jQuery(".dlgSummary").dialog({
            modal: !0,
            autoOpen: !1,
            width: 420,
            minWidth: 400,
            buttons: {
                Sluiten: function() {
                    jQuery(this).dialog("close")
                }
            },
            open: function() {
                jQuery(this).find("table").css("white-space", "nowrap"), resizeDlg(this), jQuery(this).find("table").css("white-space", "")
            }
        })), jQuery(".dlgSummary").load("classes/shelving.php", {
            mode: "summary",
            width: "wide"
        }, function(responseText, textStatus, XMLHttpRequest) {
            jQuery(".dlgSummary").dialog("open")
        })
    }, clickLoadLimit = function(e) {
        var event = e || window.event;
        event.srcElement && !event.target && (event.target = event.srcElement), void 0 === event.data && (event.data = []), void 0 === event.data.step && (event.data.step = 0);
        var url = "";
        window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
            cache: !1,
            data: {
                mode: "loadlimit",
                step: event.data.step
            },
            dataType: "text",
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus)
            },
            success: function(data, textStatus, XMLHttpRequest) {
                var data2 = data.split("\n"),
                    d = [];
                data = [];
                for (var i = 0; i < data2.length; i++) data[(d = data2[i].split("="))[0]] = d[1];
                0 === parseInt(data.hasLess) ? jQuery("table.summary tr.load input.btnLess").attr("disabled", "disabled") : jQuery("table.summary tr.load input.btnLess").removeAttr("disabled"), 0 === parseInt(data.hasMore) ? jQuery("table.summary tr.load input.btnMore").attr("disabled", "disabled") : jQuery("table.summary tr.load input.btnMore").removeAttr("disabled"), jQuery("table.summary tr.load span.load").html(Math.round(data.load)), jQuery("table.summary tr.price td.sum").html('<span class="valuta">&euro;</span> <span class="exVAT">' + data.price + "</span>")
            },
            type: "POST",
            url: "classes/shelving.php" + url
        })
    }, clickAddConfigurationToCart = function(e) {
        var event = e || window.event;
        event.srcElement && !event.target && (event.target = event.srcElement);
        var url = "";
        window.PHPSessID && (url += "?PHPSESSID=" + window.PHPSessID), jQuery.ajax({
            data: {
                aantal: jQuery(event.target.parentNode).find('input[name="aantal"]').val()
            },
            success: function(data, textStatus, XMLHttpRequest) {
                window.location.href = "/" + url
            },
            type: "POST",
            url: configuratorPath + "configurator.addtocart.php" + url
        })
    }, jQuery(document).ready(function() {
        jQuery(".measure select").bind("change", {}, changeMeasureSelect), jQuery(".measure select#hoogte").bind("change", {}, changeMeasureHoogteSelect), jQuery(".editAccessory").bind("click", {}, clickEditAccessory), jQuery("table.summary tr.price").bind("click", {}, clickSummaryDetails), jQuery(".btnRmCnfg").bind("click", {}, clickRemoveConfiguration), jQuery(".btnAddCart").bind("click", {}, clickAddConfigurationToCart), jQuery(".btnAddAcc").bind("click", {}, addAccessories_v2), jQuery(".load .btnLess").bind("click", {
            step: "-1"
        }, clickLoadLimit), jQuery(".load .btnMore").bind("click", {
            step: "+1"
        }, clickLoadLimit), void 0 === Math.uuid && jQuery.getScript(OFFSET + "js/math.uuid.js"), loadInputsFromCookies(), window.onbeforeunload = function() {
            saveInputsToCookies()
        }
    }), jQuery.cookie = function(key, value, options) {
        if (1 < arguments.length && (null === value || "object" != typeof value)) {
            if (options = jQuery.extend({}, options), null === value && (options.expires = -1), "number" == typeof options.expires) {
                var days = options.expires,
                    t = options.expires = new Date;
                t.setDate(t.getDate() + days)
            }
            return document.cookie = [encodeURIComponent(key), "=", options.raw ? String(value) : encodeURIComponent(String(value)), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
        }
        var result, decode = (options = value || {}).raw ? function(s) {
            return s
        } : decodeURIComponent;
        return (result = new RegExp("(?:^|; )" + encodeURIComponent(key) + "=([^;]*)").exec(document.cookie)) ? decode(result[1]) : null
    },
    /**
     * Stellingkast.nl JS Config 2D GS3
     *
     * JavaScript file for Config 2D pages with G3/GS-3/M3  shelvings
     *
     *   ____  _       _ _ _             _  __         _           _
     *  / ___|| |_ ___| | (_)_ __   __ _| |/ /__ _ ___| |_   _ __ | |
     *  \___ \| __/ _ \ | | | '_ \ / _` | ' // _` / __| __| | '_ \| |
     *   ___) | ||  __/ | | | | | | (_| | . \ (_| \__ \ |_ _| | | | |
     *  |____/ \__\___|_|_|_|_| |_|\__, |_|\_\__,_|___/\__(_)_| |_|_|
     *                             |___/
     *
     * Stellingkast.nl
     * Ontwikkeld voor ARS-almere / ARS-online.
     *
     * PHP version 5
     *
     * @category  WebShop
     * @package   Stellingkast
     * @author    ARS Online <info@stellingkast.nl>
     * @copyright 2014 ARS en Stellingkast.nl
     * @link      https://www.stellingkast.nl
     *
     * @license   Copyright (c) 2014-2016 ARS Office & Storage / Stellingkast.nl B.V.
     * We at Stellingkast.nl have really worked hard to create this code.
     * So please do not use it without our permission!
     */
    void 0 === SKBaseClass && $.ajax({
        async: !1,
        url: "/js/skbase.js"
    }), void 0 === SKBaseArticle && $.ajax({
        async: !1,
        url: "/js/skconfig2dbase.js"
    }), SKCanvasBuilderGS3.prototype = Object.create(SKCanvasBuilder.prototype), SKCanvasBuilderGS3.prototype.constructor = SKCanvasBuilderGS3, SKArtPillarGS3.prototype = Object.create(SKArtPillar.prototype), SKArtPillarGS3.prototype.constructor = SKArtPillarGS3, SKCanvasSectionGS3.prototype = Object.create(SKCanvasSection.prototype), SKCanvasSectionGS3.prototype.constructor = SKCanvasSectionGS3, SKArtShelveGS3.prototype = Object.create(SKArtShelve.prototype), SKArtShelveGS3.prototype.constructor = SKArtShelveGS3, SKArtBraceH.prototype = Object.create(SKArtBrace.prototype), SKArtBraceH.prototype.constructor = SKArtBraceH, SKArtBackGS3.prototype = Object.create(SKArtBack.prototype), SKArtBackGS3.prototype.constructor = SKArtBack, SKArtSide.prototype = Object.create(SKBaseArticle.prototype), SKArtSide.prototype.constructor = SKArtSide, SKArtSlidingDoorG3.prototype = Object.create(SKArtSlidingDoor.prototype), SKArtSlidingDoorG3.prototype.constructor = SKArtSlidingDoorG3, SKSettingsFormBuilderGS3.prototype = Object.create(SKSettingsFormBuilder.prototype), SKSettingsFormBuilderGS3.prototype.constructor = SKSettingsFormBuilderGS3, SKPriceCalculatorGS3.prototype = Object.create(SKPriceCalculator.prototype), SKPriceCalculatorGS3.prototype.constructor = SKPriceCalculatorGS3,
    /**
     * Stellingkast.nl JS Config 2D Wood
     *
     * JavaScript file for Config 2D pages with Wood shelvings
     *
     *   ____  _       _ _ _             _  __         _           _
     *  / ___|| |_ ___| | (_)_ __   __ _| |/ /__ _ ___| |_   _ __ | |
     *  \___ \| __/ _ \ | | | '_ \ / _` | ' // _` / __| __| | '_ \| |
     *   ___) | ||  __/ | | | | | | (_| | . \ (_| \__ \ |_ _| | | | |
     *  |____/ \__\___|_|_|_|_| |_|\__, |_|\_\__,_|___/\__(_)_| |_|_|
     *                             |___/
     *
     * Stellingkast.nl
     * Ontwikkeld voor ARS-almere / ARS-online.
     *
     * PHP version 5
     *
     * @category  WebShop
     * @package   Stellingkast
     * @author    ARS Online <info@stellingkast.nl>
     * @copyright 2014 ARS en Stellingkast.nl
     * @link      https://www.stellingkast.nl
     *
     * @license   Copyright (c) 2014-2016 ARS Office & Storage / Stellingkast.nl B.V.
     * We at Stellingkast.nl have really worked hard to create this code.
     * So please do not use it without our permission!
     */
    void 0 === SKBaseClass && $.ajax({
        async: !1,
        url: "/js/skbase.js"
    }), void 0 === SKShelvingBaseClass && $.ajax({
        async: !1,
        url: "/js/skconfig2dbase.js"
    }), SKCanvasBuilderWood.prototype = Object.create(SKCanvasBuilder.prototype), SKCanvasBuilderWood.prototype.constructor = SKCanvasBuilderWood, SKSettingsFormBuilderWood.prototype = Object.create(SKSettingsFormBuilder.prototype), SKSettingsFormBuilderWood.prototype.constructor = SKSettingsFormBuilderWood, SKPriceCalculatorWood.prototype = Object.create(SKPriceCalculator.prototype), SKPriceCalculatorWood.prototype.constructor = SKPriceCalculatorWood, SKCanvasSectionWood.prototype = Object.create(SKCanvasSection.prototype), SKCanvasSectionWood.prototype.constructor = SKCanvasSectionWood, SKArtPillarWood.prototype = Object.create(SKArtPillar.prototype), SKArtPillarWood.prototype.constructor = SKArtPillarWood, SKArtShelveWood.prototype = Object.create(SKArtShelve.prototype), SKArtShelveWood.prototype.constructor = SKArtShelveWood, SKArtShelvePinWood.prototype = Object.create(SKArtShelve.prototype), SKArtShelvePinWood.prototype.constructor = SKArtShelvePinWood, SKArtShelvePinEndWood.prototype = Object.create(SKArtShelvePinWood.prototype), SKArtShelvePinEndWood.prototype.constructor = SKArtShelvePinEndWood, SKArtShelvePinContinuationWood.prototype = Object.create(SKArtShelvePinWood.prototype), SKArtShelvePinContinuationWood.prototype.constructor = SKArtShelvePinContinuationWood;s