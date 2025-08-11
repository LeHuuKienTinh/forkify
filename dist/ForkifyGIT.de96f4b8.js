
      var $parcel$global = globalThis;
    
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
'use strict';
'use strict';
var $ca3e1754e676956d$exports = {};
'use strict';
var $3fbf1185731afe2b$exports = {};
'use strict';
var $3fbf1185731afe2b$var$check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
$3fbf1185731afe2b$exports = // eslint-disable-next-line es/no-global-this -- safe
$3fbf1185731afe2b$var$check(typeof globalThis == 'object' && globalThis) || $3fbf1185731afe2b$var$check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
$3fbf1185731afe2b$var$check(typeof self == 'object' && self) || $3fbf1185731afe2b$var$check(typeof $parcel$global == 'object' && $parcel$global) || $3fbf1185731afe2b$var$check(typeof $3fbf1185731afe2b$exports == 'object' && $3fbf1185731afe2b$exports) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function('return this')();


// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var $6d99163b6684d050$export$2d1720544b23b823;
'use strict';
var $ef322a7f89c3ed41$exports = {};
'use strict';
var $6140c9fa18232846$exports = {};
'use strict';
$6140c9fa18232846$exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};


// Detect IE8's incomplete defineProperty implementation
$ef322a7f89c3ed41$exports = !$6140c9fa18232846$exports(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});


var $881ad37dbe259e8f$exports = {};
'use strict';
var $bcbe62e89adc7d37$exports = {};
'use strict';

$bcbe62e89adc7d37$exports = !$6140c9fa18232846$exports(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
});


var $881ad37dbe259e8f$var$call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
$881ad37dbe259e8f$exports = $bcbe62e89adc7d37$exports ? $881ad37dbe259e8f$var$call.bind($881ad37dbe259e8f$var$call) : function() {
    return $881ad37dbe259e8f$var$call.apply($881ad37dbe259e8f$var$call, arguments);
};


// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var $1e0782be6903ea7b$export$2d1720544b23b823;
'use strict';
var $1e0782be6903ea7b$var$$propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $1e0782be6903ea7b$var$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var $1e0782be6903ea7b$var$NASHORN_BUG = $1e0782be6903ea7b$var$getOwnPropertyDescriptor && !$1e0782be6903ea7b$var$$propertyIsEnumerable.call({
    1: 2
}, 1);
$1e0782be6903ea7b$export$2d1720544b23b823 = $1e0782be6903ea7b$var$NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = $1e0782be6903ea7b$var$getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $1e0782be6903ea7b$var$$propertyIsEnumerable;


var $b66966b48674609b$exports = {};
'use strict';
$b66966b48674609b$exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};


var $4d273c9d7e1bdf46$exports = {};
'use strict';
var $8239f4c7c6082668$exports = {};
'use strict';
var $43b18aa2f1faac44$exports = {};
'use strict';

var $43b18aa2f1faac44$var$FunctionPrototype = Function.prototype;
var $43b18aa2f1faac44$var$call = $43b18aa2f1faac44$var$FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var $43b18aa2f1faac44$var$uncurryThisWithBind = $bcbe62e89adc7d37$exports && $43b18aa2f1faac44$var$FunctionPrototype.bind.bind($43b18aa2f1faac44$var$call, $43b18aa2f1faac44$var$call);
$43b18aa2f1faac44$exports = $bcbe62e89adc7d37$exports ? $43b18aa2f1faac44$var$uncurryThisWithBind : function(fn) {
    return function() {
        return $43b18aa2f1faac44$var$call.apply(fn, arguments);
    };
};



var $b0ba63bfbfb16088$exports = {};
'use strict';

var $b0ba63bfbfb16088$var$toString = $43b18aa2f1faac44$exports({}.toString);
var $b0ba63bfbfb16088$var$stringSlice = $43b18aa2f1faac44$exports(''.slice);
$b0ba63bfbfb16088$exports = function(it) {
    return $b0ba63bfbfb16088$var$stringSlice($b0ba63bfbfb16088$var$toString(it), 8, -1);
};


var $8239f4c7c6082668$var$$Object = Object;
var $8239f4c7c6082668$var$split = $43b18aa2f1faac44$exports(''.split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
$8239f4c7c6082668$exports = $6140c9fa18232846$exports(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$8239f4c7c6082668$var$$Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return $b0ba63bfbfb16088$exports(it) === 'String' ? $8239f4c7c6082668$var$split(it, '') : $8239f4c7c6082668$var$$Object(it);
} : $8239f4c7c6082668$var$$Object;


var $c378177673193450$exports = {};
'use strict';
var $7ce250ddf7b42d4d$exports = {};
'use strict';
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
$7ce250ddf7b42d4d$exports = function(it) {
    return it === null || it === undefined;
};


var $c378177673193450$var$$TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
$c378177673193450$exports = function(it) {
    if ($7ce250ddf7b42d4d$exports(it)) throw new $c378177673193450$var$$TypeError("Can't call method on " + it);
    return it;
};


$4d273c9d7e1bdf46$exports = function(it) {
    return $8239f4c7c6082668$exports($c378177673193450$exports(it));
};


var $7f19acfe53927f5c$exports = {};
'use strict';
var $8ffb6b36a733d3c0$exports = {};
'use strict';

var $6a130d390db46c8e$exports = {};
'use strict';
var $70e34a5a2021f756$exports = {};
'use strict';
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var $70e34a5a2021f756$var$documentAll = typeof document == 'object' && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
$70e34a5a2021f756$exports = typeof $70e34a5a2021f756$var$documentAll == 'undefined' && $70e34a5a2021f756$var$documentAll !== undefined ? function(argument) {
    return typeof argument == 'function' || argument === $70e34a5a2021f756$var$documentAll;
} : function(argument) {
    return typeof argument == 'function';
};


$6a130d390db46c8e$exports = function(it) {
    return typeof it == 'object' ? it !== null : $70e34a5a2021f756$exports(it);
};


var $0b429cc7792c7d26$exports = {};
'use strict';
var $a5217dbd1b0d33ce$exports = {};
'use strict';


var $a5217dbd1b0d33ce$var$aFunction = function(argument) {
    return $70e34a5a2021f756$exports(argument) ? argument : undefined;
};
$a5217dbd1b0d33ce$exports = function(namespace, method) {
    return arguments.length < 2 ? $a5217dbd1b0d33ce$var$aFunction($3fbf1185731afe2b$exports[namespace]) : $3fbf1185731afe2b$exports[namespace] && $3fbf1185731afe2b$exports[namespace][method];
};



var $41cc576e850a251e$exports = {};
'use strict';

$41cc576e850a251e$exports = $43b18aa2f1faac44$exports({}.isPrototypeOf);


var $47f18b427c2fbabf$exports = {};
'use strict';
var $4a39565fee8fe980$exports = {};
'use strict';
var $b2a56c1a090208a5$exports = {};
'use strict';

var $34fa2a1382dc63c1$exports = {};
'use strict';

var $34fa2a1382dc63c1$var$navigator = $3fbf1185731afe2b$exports.navigator;
var $34fa2a1382dc63c1$var$userAgent = $34fa2a1382dc63c1$var$navigator && $34fa2a1382dc63c1$var$navigator.userAgent;
$34fa2a1382dc63c1$exports = $34fa2a1382dc63c1$var$userAgent ? String($34fa2a1382dc63c1$var$userAgent) : '';


var $b2a56c1a090208a5$var$process = $3fbf1185731afe2b$exports.process;
var $b2a56c1a090208a5$var$Deno = $3fbf1185731afe2b$exports.Deno;
var $b2a56c1a090208a5$var$versions = $b2a56c1a090208a5$var$process && $b2a56c1a090208a5$var$process.versions || $b2a56c1a090208a5$var$Deno && $b2a56c1a090208a5$var$Deno.version;
var $b2a56c1a090208a5$var$v8 = $b2a56c1a090208a5$var$versions && $b2a56c1a090208a5$var$versions.v8;
var $b2a56c1a090208a5$var$match, $b2a56c1a090208a5$var$version;
if ($b2a56c1a090208a5$var$v8) {
    $b2a56c1a090208a5$var$match = $b2a56c1a090208a5$var$v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    $b2a56c1a090208a5$var$version = $b2a56c1a090208a5$var$match[0] > 0 && $b2a56c1a090208a5$var$match[0] < 4 ? 1 : +($b2a56c1a090208a5$var$match[0] + $b2a56c1a090208a5$var$match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!$b2a56c1a090208a5$var$version && $34fa2a1382dc63c1$exports) {
    $b2a56c1a090208a5$var$match = $34fa2a1382dc63c1$exports.match(/Edge\/(\d+)/);
    if (!$b2a56c1a090208a5$var$match || $b2a56c1a090208a5$var$match[1] >= 74) {
        $b2a56c1a090208a5$var$match = $34fa2a1382dc63c1$exports.match(/Chrome\/(\d+)/);
        if ($b2a56c1a090208a5$var$match) $b2a56c1a090208a5$var$version = +$b2a56c1a090208a5$var$match[1];
    }
}
$b2a56c1a090208a5$exports = $b2a56c1a090208a5$var$version;




var $4a39565fee8fe980$var$$String = $3fbf1185731afe2b$exports.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
$4a39565fee8fe980$exports = !!Object.getOwnPropertySymbols && !$6140c9fa18232846$exports(function() {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$4a39565fee8fe980$var$$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && $b2a56c1a090208a5$exports && $b2a56c1a090208a5$exports < 41;
});


$47f18b427c2fbabf$exports = $4a39565fee8fe980$exports && !Symbol.sham && typeof Symbol.iterator == 'symbol';


var $0b429cc7792c7d26$var$$Object = Object;
$0b429cc7792c7d26$exports = $47f18b427c2fbabf$exports ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    var $Symbol = $a5217dbd1b0d33ce$exports('Symbol');
    return $70e34a5a2021f756$exports($Symbol) && $41cc576e850a251e$exports($Symbol.prototype, $0b429cc7792c7d26$var$$Object(it));
};


var $eb80dcd0b8a5698c$exports = {};
'use strict';
var $ae485921c5498156$exports = {};
'use strict';

var $8f0ebae34f61e14c$exports = {};
'use strict';
var $8f0ebae34f61e14c$var$$String = String;
$8f0ebae34f61e14c$exports = function(argument) {
    try {
        return $8f0ebae34f61e14c$var$$String(argument);
    } catch (error) {
        return 'Object';
    }
};


var $ae485921c5498156$var$$TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
$ae485921c5498156$exports = function(argument) {
    if ($70e34a5a2021f756$exports(argument)) return argument;
    throw new $ae485921c5498156$var$$TypeError($8f0ebae34f61e14c$exports(argument) + ' is not a function');
};



// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
$eb80dcd0b8a5698c$exports = function(V, P) {
    var func = V[P];
    return $7ce250ddf7b42d4d$exports(func) ? undefined : $ae485921c5498156$exports(func);
};


var $b0f812e443807cb5$exports = {};
'use strict';



var $b0f812e443807cb5$var$$TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
$b0f812e443807cb5$exports = function(input, pref) {
    var fn, val;
    if (pref === 'string' && $70e34a5a2021f756$exports(fn = input.toString) && !$6a130d390db46c8e$exports(val = $881ad37dbe259e8f$exports(fn, input))) return val;
    if ($70e34a5a2021f756$exports(fn = input.valueOf) && !$6a130d390db46c8e$exports(val = $881ad37dbe259e8f$exports(fn, input))) return val;
    if (pref !== 'string' && $70e34a5a2021f756$exports(fn = input.toString) && !$6a130d390db46c8e$exports(val = $881ad37dbe259e8f$exports(fn, input))) return val;
    throw new $b0f812e443807cb5$var$$TypeError("Can't convert object to primitive value");
};


var $842f8f0a18746212$exports = {};
'use strict';

var $1946b9b54b48e7fd$exports = {};
'use strict';
var $d00d03e557d638db$exports = {};
'use strict';
var $e0409817d4e03fc4$exports = {};
'use strict';
$e0409817d4e03fc4$exports = false;



var $4ce407c7007beb63$exports = {};
'use strict';

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $4ce407c7007beb63$var$defineProperty = Object.defineProperty;
$4ce407c7007beb63$exports = function(key, value) {
    try {
        $4ce407c7007beb63$var$defineProperty($3fbf1185731afe2b$exports, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        $3fbf1185731afe2b$exports[key] = value;
    }
    return value;
};


var $d00d03e557d638db$var$SHARED = '__core-js_shared__';
var $d00d03e557d638db$var$store = $d00d03e557d638db$exports = $3fbf1185731afe2b$exports[$d00d03e557d638db$var$SHARED] || $4ce407c7007beb63$exports($d00d03e557d638db$var$SHARED, {});
($d00d03e557d638db$var$store.versions || ($d00d03e557d638db$var$store.versions = [])).push({
    version: '3.45.0',
    mode: $e0409817d4e03fc4$exports ? 'pure' : 'global',
    copyright: "\xa9 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: 'https://github.com/zloirock/core-js/blob/v3.45.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
});


$1946b9b54b48e7fd$exports = function(key, value) {
    return $d00d03e557d638db$exports[key] || ($d00d03e557d638db$exports[key] = value || {});
};


var $1f868a26fd901990$exports = {};
'use strict';

var $a2f3ebb5da11db12$exports = {};
'use strict';

var $a2f3ebb5da11db12$var$$Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
$a2f3ebb5da11db12$exports = function(argument) {
    return $a2f3ebb5da11db12$var$$Object($c378177673193450$exports(argument));
};


var $1f868a26fd901990$var$hasOwnProperty = $43b18aa2f1faac44$exports({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
$1f868a26fd901990$exports = Object.hasOwn || function hasOwn(it, key) {
    return $1f868a26fd901990$var$hasOwnProperty($a2f3ebb5da11db12$exports(it), key);
};


var $5e0a1e292f79defc$exports = {};
'use strict';

var $5e0a1e292f79defc$var$id = 0;
var $5e0a1e292f79defc$var$postfix = Math.random();
var $5e0a1e292f79defc$var$toString = $43b18aa2f1faac44$exports(1.1.toString);
$5e0a1e292f79defc$exports = function(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + $5e0a1e292f79defc$var$toString(++$5e0a1e292f79defc$var$id + $5e0a1e292f79defc$var$postfix, 36);
};




var $842f8f0a18746212$var$Symbol = $3fbf1185731afe2b$exports.Symbol;
var $842f8f0a18746212$var$WellKnownSymbolsStore = $1946b9b54b48e7fd$exports('wks');
var $842f8f0a18746212$var$createWellKnownSymbol = $47f18b427c2fbabf$exports ? $842f8f0a18746212$var$Symbol['for'] || $842f8f0a18746212$var$Symbol : $842f8f0a18746212$var$Symbol && $842f8f0a18746212$var$Symbol.withoutSetter || $5e0a1e292f79defc$exports;
$842f8f0a18746212$exports = function(name) {
    if (!$1f868a26fd901990$exports($842f8f0a18746212$var$WellKnownSymbolsStore, name)) $842f8f0a18746212$var$WellKnownSymbolsStore[name] = $4a39565fee8fe980$exports && $1f868a26fd901990$exports($842f8f0a18746212$var$Symbol, name) ? $842f8f0a18746212$var$Symbol[name] : $842f8f0a18746212$var$createWellKnownSymbol('Symbol.' + name);
    return $842f8f0a18746212$var$WellKnownSymbolsStore[name];
};


var $8ffb6b36a733d3c0$var$$TypeError = TypeError;
var $8ffb6b36a733d3c0$var$TO_PRIMITIVE = $842f8f0a18746212$exports('toPrimitive');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
$8ffb6b36a733d3c0$exports = function(input, pref) {
    if (!$6a130d390db46c8e$exports(input) || $0b429cc7792c7d26$exports(input)) return input;
    var exoticToPrim = $eb80dcd0b8a5698c$exports(input, $8ffb6b36a733d3c0$var$TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = $881ad37dbe259e8f$exports(exoticToPrim, input, pref);
        if (!$6a130d390db46c8e$exports(result) || $0b429cc7792c7d26$exports(result)) return result;
        throw new $8ffb6b36a733d3c0$var$$TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return $b0f812e443807cb5$exports(input, pref);
};



// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
$7f19acfe53927f5c$exports = function(argument) {
    var key = $8ffb6b36a733d3c0$exports(argument, 'string');
    return $0b429cc7792c7d26$exports(key) ? key : key + '';
};



var $d45526d8245cb22c$exports = {};
'use strict';


var $15c0c414b89100b1$exports = {};
'use strict';


var $15c0c414b89100b1$var$document = $3fbf1185731afe2b$exports.document;
// typeof document.createElement is 'object' in old IE
var $15c0c414b89100b1$var$EXISTS = $6a130d390db46c8e$exports($15c0c414b89100b1$var$document) && $6a130d390db46c8e$exports($15c0c414b89100b1$var$document.createElement);
$15c0c414b89100b1$exports = function(it) {
    return $15c0c414b89100b1$var$EXISTS ? $15c0c414b89100b1$var$document.createElement(it) : {};
};


// Thanks to IE8 for its funny defineProperty
$d45526d8245cb22c$exports = !$ef322a7f89c3ed41$exports && !$6140c9fa18232846$exports(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty($15c0c414b89100b1$exports('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a !== 7;
});


// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $6d99163b6684d050$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
$6d99163b6684d050$export$2d1720544b23b823 = $ef322a7f89c3ed41$exports ? $6d99163b6684d050$var$$getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = $4d273c9d7e1bdf46$exports(O);
    P = $7f19acfe53927f5c$exports(P);
    if ($d45526d8245cb22c$exports) try {
        return $6d99163b6684d050$var$$getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if ($1f868a26fd901990$exports(O, P)) return $b66966b48674609b$exports(!$881ad37dbe259e8f$exports($1e0782be6903ea7b$export$2d1720544b23b823, O, P), O[P]);
};


var $ca3e1754e676956d$require$getOwnPropertyDescriptor = $6d99163b6684d050$export$2d1720544b23b823;
var $8693737507995841$exports = {};
'use strict';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var $2d0ac3aa5e39584b$export$2d1720544b23b823;
'use strict';


var $161a89d67c436ccf$exports = {};
'use strict';


// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
$161a89d67c436ccf$exports = $ef322a7f89c3ed41$exports && $6140c9fa18232846$exports(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, 'prototype', {
        value: 42,
        writable: false
    }).prototype !== 42;
});


var $c845d421b7b0e630$exports = {};
'use strict';

var $c845d421b7b0e630$var$$String = String;
var $c845d421b7b0e630$var$$TypeError = TypeError;
// `Assert: Type(argument) is Object`
$c845d421b7b0e630$exports = function(argument) {
    if ($6a130d390db46c8e$exports(argument)) return argument;
    throw new $c845d421b7b0e630$var$$TypeError($c845d421b7b0e630$var$$String(argument) + ' is not an object');
};



var $2d0ac3aa5e39584b$var$$TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $2d0ac3aa5e39584b$var$$defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $2d0ac3aa5e39584b$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var $2d0ac3aa5e39584b$var$ENUMERABLE = 'enumerable';
var $2d0ac3aa5e39584b$var$CONFIGURABLE = 'configurable';
var $2d0ac3aa5e39584b$var$WRITABLE = 'writable';
$2d0ac3aa5e39584b$export$2d1720544b23b823 = $ef322a7f89c3ed41$exports ? $161a89d67c436ccf$exports ? function defineProperty(O, P, Attributes) {
    $c845d421b7b0e630$exports(O);
    P = $7f19acfe53927f5c$exports(P);
    $c845d421b7b0e630$exports(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && $2d0ac3aa5e39584b$var$WRITABLE in Attributes && !Attributes[$2d0ac3aa5e39584b$var$WRITABLE]) {
        var current = $2d0ac3aa5e39584b$var$$getOwnPropertyDescriptor(O, P);
        if (current && current[$2d0ac3aa5e39584b$var$WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: $2d0ac3aa5e39584b$var$CONFIGURABLE in Attributes ? Attributes[$2d0ac3aa5e39584b$var$CONFIGURABLE] : current[$2d0ac3aa5e39584b$var$CONFIGURABLE],
                enumerable: $2d0ac3aa5e39584b$var$ENUMERABLE in Attributes ? Attributes[$2d0ac3aa5e39584b$var$ENUMERABLE] : current[$2d0ac3aa5e39584b$var$ENUMERABLE],
                writable: false
            };
        }
    }
    return $2d0ac3aa5e39584b$var$$defineProperty(O, P, Attributes);
} : $2d0ac3aa5e39584b$var$$defineProperty : function defineProperty(O, P, Attributes) {
    $c845d421b7b0e630$exports(O);
    P = $7f19acfe53927f5c$exports(P);
    $c845d421b7b0e630$exports(Attributes);
    if ($d45526d8245cb22c$exports) try {
        return $2d0ac3aa5e39584b$var$$defineProperty(O, P, Attributes);
    } catch (error) {}
    if ('get' in Attributes || 'set' in Attributes) throw new $2d0ac3aa5e39584b$var$$TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};



$8693737507995841$exports = $ef322a7f89c3ed41$exports ? function(object, key, value) {
    return $2d0ac3aa5e39584b$export$2d1720544b23b823(object, key, $b66966b48674609b$exports(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};


var $40e957865125f98f$exports = {};
'use strict';


var $09c56ff2ae09b2d7$exports = {};
'use strict';





var $81c64883d194e3b4$exports = {};
'use strict';


var $81c64883d194e3b4$var$FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $81c64883d194e3b4$var$getDescriptor = $ef322a7f89c3ed41$exports && Object.getOwnPropertyDescriptor;
var $81c64883d194e3b4$var$EXISTS = $1f868a26fd901990$exports($81c64883d194e3b4$var$FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var $81c64883d194e3b4$var$PROPER = $81c64883d194e3b4$var$EXISTS && (function something() {}).name === 'something';
var $81c64883d194e3b4$var$CONFIGURABLE = $81c64883d194e3b4$var$EXISTS && (!$ef322a7f89c3ed41$exports || $ef322a7f89c3ed41$exports && $81c64883d194e3b4$var$getDescriptor($81c64883d194e3b4$var$FunctionPrototype, 'name').configurable);
$81c64883d194e3b4$exports = {
    EXISTS: $81c64883d194e3b4$var$EXISTS,
    PROPER: $81c64883d194e3b4$var$PROPER,
    CONFIGURABLE: $81c64883d194e3b4$var$CONFIGURABLE
};


var $09c56ff2ae09b2d7$require$CONFIGURABLE_FUNCTION_NAME = $81c64883d194e3b4$exports.CONFIGURABLE;
var $9990f6f719f26a96$exports = {};
'use strict';



var $9990f6f719f26a96$var$functionToString = $43b18aa2f1faac44$exports(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!$70e34a5a2021f756$exports($d00d03e557d638db$exports.inspectSource)) $d00d03e557d638db$exports.inspectSource = function(it) {
    return $9990f6f719f26a96$var$functionToString(it);
};
$9990f6f719f26a96$exports = $d00d03e557d638db$exports.inspectSource;


var $3a8bcef306e86159$exports = {};
'use strict';
var $47d53bb84a8f3c5b$exports = {};
'use strict';


var $47d53bb84a8f3c5b$var$WeakMap = $3fbf1185731afe2b$exports.WeakMap;
$47d53bb84a8f3c5b$exports = $70e34a5a2021f756$exports($47d53bb84a8f3c5b$var$WeakMap) && /native code/.test(String($47d53bb84a8f3c5b$var$WeakMap));







var $834abcf0f8f3f871$exports = {};
'use strict';


var $834abcf0f8f3f871$var$keys = $1946b9b54b48e7fd$exports('keys');
$834abcf0f8f3f871$exports = function(key) {
    return $834abcf0f8f3f871$var$keys[key] || ($834abcf0f8f3f871$var$keys[key] = $5e0a1e292f79defc$exports(key));
};


var $9f571a3f3d135e31$exports = {};
'use strict';
$9f571a3f3d135e31$exports = {};


var $3a8bcef306e86159$var$OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var $3a8bcef306e86159$var$TypeError = $3fbf1185731afe2b$exports.TypeError;
var $3a8bcef306e86159$var$WeakMap = $3fbf1185731afe2b$exports.WeakMap;
var $3a8bcef306e86159$var$set, $3a8bcef306e86159$var$get, $3a8bcef306e86159$var$has;
var $3a8bcef306e86159$var$enforce = function(it) {
    return $3a8bcef306e86159$var$has(it) ? $3a8bcef306e86159$var$get(it) : $3a8bcef306e86159$var$set(it, {});
};
var $3a8bcef306e86159$var$getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!$6a130d390db46c8e$exports(it) || (state = $3a8bcef306e86159$var$get(it)).type !== TYPE) throw new $3a8bcef306e86159$var$TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if ($47d53bb84a8f3c5b$exports || $d00d03e557d638db$exports.state) {
    var $3a8bcef306e86159$var$store = $d00d03e557d638db$exports.state || ($d00d03e557d638db$exports.state = new $3a8bcef306e86159$var$WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ $3a8bcef306e86159$var$store.get = $3a8bcef306e86159$var$store.get;
    $3a8bcef306e86159$var$store.has = $3a8bcef306e86159$var$store.has;
    $3a8bcef306e86159$var$store.set = $3a8bcef306e86159$var$store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ $3a8bcef306e86159$var$set = function(it, metadata) {
        if ($3a8bcef306e86159$var$store.has(it)) throw new $3a8bcef306e86159$var$TypeError($3a8bcef306e86159$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $3a8bcef306e86159$var$store.set(it, metadata);
        return metadata;
    };
    $3a8bcef306e86159$var$get = function(it) {
        return $3a8bcef306e86159$var$store.get(it) || {};
    };
    $3a8bcef306e86159$var$has = function(it) {
        return $3a8bcef306e86159$var$store.has(it);
    };
} else {
    var $3a8bcef306e86159$var$STATE = $834abcf0f8f3f871$exports('state');
    $9f571a3f3d135e31$exports[$3a8bcef306e86159$var$STATE] = true;
    $3a8bcef306e86159$var$set = function(it, metadata) {
        if ($1f868a26fd901990$exports(it, $3a8bcef306e86159$var$STATE)) throw new $3a8bcef306e86159$var$TypeError($3a8bcef306e86159$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $8693737507995841$exports(it, $3a8bcef306e86159$var$STATE, metadata);
        return metadata;
    };
    $3a8bcef306e86159$var$get = function(it) {
        return $1f868a26fd901990$exports(it, $3a8bcef306e86159$var$STATE) ? it[$3a8bcef306e86159$var$STATE] : {};
    };
    $3a8bcef306e86159$var$has = function(it) {
        return $1f868a26fd901990$exports(it, $3a8bcef306e86159$var$STATE);
    };
}
$3a8bcef306e86159$exports = {
    set: $3a8bcef306e86159$var$set,
    get: $3a8bcef306e86159$var$get,
    has: $3a8bcef306e86159$var$has,
    enforce: $3a8bcef306e86159$var$enforce,
    getterFor: $3a8bcef306e86159$var$getterFor
};


var $09c56ff2ae09b2d7$var$enforceInternalState = $3a8bcef306e86159$exports.enforce;
var $09c56ff2ae09b2d7$var$getInternalState = $3a8bcef306e86159$exports.get;
var $09c56ff2ae09b2d7$var$$String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $09c56ff2ae09b2d7$var$defineProperty = Object.defineProperty;
var $09c56ff2ae09b2d7$var$stringSlice = $43b18aa2f1faac44$exports(''.slice);
var $09c56ff2ae09b2d7$var$replace = $43b18aa2f1faac44$exports(''.replace);
var $09c56ff2ae09b2d7$var$join = $43b18aa2f1faac44$exports([].join);
var $09c56ff2ae09b2d7$var$CONFIGURABLE_LENGTH = $ef322a7f89c3ed41$exports && !$6140c9fa18232846$exports(function() {
    return $09c56ff2ae09b2d7$var$defineProperty(function() {}, 'length', {
        value: 8
    }).length !== 8;
});
var $09c56ff2ae09b2d7$var$TEMPLATE = String(String).split('String');
var $09c56ff2ae09b2d7$var$makeBuiltIn = $09c56ff2ae09b2d7$exports = function(value, name, options) {
    if ($09c56ff2ae09b2d7$var$stringSlice($09c56ff2ae09b2d7$var$$String(name), 0, 7) === 'Symbol(') name = '[' + $09c56ff2ae09b2d7$var$replace($09c56ff2ae09b2d7$var$$String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!$1f868a26fd901990$exports(value, 'name') || $09c56ff2ae09b2d7$require$CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if ($ef322a7f89c3ed41$exports) $09c56ff2ae09b2d7$var$defineProperty(value, 'name', {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if ($09c56ff2ae09b2d7$var$CONFIGURABLE_LENGTH && options && $1f868a26fd901990$exports(options, 'arity') && value.length !== options.arity) $09c56ff2ae09b2d7$var$defineProperty(value, 'length', {
        value: options.arity
    });
    try {
        if (options && $1f868a26fd901990$exports(options, 'constructor') && options.constructor) {
            if ($ef322a7f89c3ed41$exports) $09c56ff2ae09b2d7$var$defineProperty(value, 'prototype', {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = $09c56ff2ae09b2d7$var$enforceInternalState(value);
    if (!$1f868a26fd901990$exports(state, 'source')) state.source = $09c56ff2ae09b2d7$var$join($09c56ff2ae09b2d7$var$TEMPLATE, typeof name == 'string' ? name : '');
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = $09c56ff2ae09b2d7$var$makeBuiltIn(function toString() {
    return $70e34a5a2021f756$exports(this) && $09c56ff2ae09b2d7$var$getInternalState(this).source || $9990f6f719f26a96$exports(this);
}, 'toString');



$40e957865125f98f$exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if ($70e34a5a2021f756$exports(value)) $09c56ff2ae09b2d7$exports(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else $4ce407c7007beb63$exports(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else $2d0ac3aa5e39584b$export$2d1720544b23b823(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};



var $ef14b437ba65973a$exports = {};
'use strict';

var $339f2419d379e6c2$exports = {};
'use strict';


// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
var $f6c32256739dd9b5$export$2d1720544b23b823;
'use strict';
var $c4fba4611365c4f5$exports = {};
'use strict';



var $f00609c516640f24$exports = {};
'use strict';

var $1ef9432c43157f41$exports = {};
'use strict';
var $b5bb21648546ce5b$exports = {};
'use strict';
var $5395b5a4913a5e32$exports = {};
'use strict';
var $5395b5a4913a5e32$var$ceil = Math.ceil;
var $5395b5a4913a5e32$var$floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
$5395b5a4913a5e32$exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? $5395b5a4913a5e32$var$floor : $5395b5a4913a5e32$var$ceil)(n);
};


// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
$b5bb21648546ce5b$exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : $5395b5a4913a5e32$exports(number);
};


var $1ef9432c43157f41$var$max = Math.max;
var $1ef9432c43157f41$var$min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
$1ef9432c43157f41$exports = function(index, length) {
    var integer = $b5bb21648546ce5b$exports(index);
    return integer < 0 ? $1ef9432c43157f41$var$max(integer + length, 0) : $1ef9432c43157f41$var$min(integer, length);
};


var $04c91bd3815cd64a$exports = {};
'use strict';
var $4aba983aae3daed3$exports = {};
'use strict';

var $4aba983aae3daed3$var$min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
$4aba983aae3daed3$exports = function(argument) {
    var len = $b5bb21648546ce5b$exports(argument);
    return len > 0 ? $4aba983aae3daed3$var$min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
$04c91bd3815cd64a$exports = function(obj) {
    return $4aba983aae3daed3$exports(obj.length);
};


// `Array.prototype.{ indexOf, includes }` methods implementation
var $f00609c516640f24$var$createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = $4d273c9d7e1bdf46$exports($this);
        var length = $04c91bd3815cd64a$exports(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = $1ef9432c43157f41$exports(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
$f00609c516640f24$exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: $f00609c516640f24$var$createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: $f00609c516640f24$var$createMethod(false)
};


var $c4fba4611365c4f5$require$indexOf = $f00609c516640f24$exports.indexOf;

var $c4fba4611365c4f5$var$push = $43b18aa2f1faac44$exports([].push);
$c4fba4611365c4f5$exports = function(object, names) {
    var O = $4d273c9d7e1bdf46$exports(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!$1f868a26fd901990$exports($9f571a3f3d135e31$exports, key) && $1f868a26fd901990$exports(O, key) && $c4fba4611365c4f5$var$push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if ($1f868a26fd901990$exports(O, key = names[i++])) ~$c4fba4611365c4f5$require$indexOf(result, key) || $c4fba4611365c4f5$var$push(result, key);
    return result;
};


var $e73f13f1d8a17cad$exports = {};
'use strict';
// IE8- don't enum bug keys
$e73f13f1d8a17cad$exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];


var $f6c32256739dd9b5$var$hiddenKeys = $e73f13f1d8a17cad$exports.concat('length', 'prototype');
$f6c32256739dd9b5$export$2d1720544b23b823 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $c4fba4611365c4f5$exports(O, $f6c32256739dd9b5$var$hiddenKeys);
};


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
var $0ed66cde5c449819$export$2d1720544b23b823;
'use strict';
$0ed66cde5c449819$export$2d1720544b23b823 = Object.getOwnPropertySymbols;



var $339f2419d379e6c2$var$concat = $43b18aa2f1faac44$exports([].concat);
// all object keys, includes non-enumerable and symbols
$339f2419d379e6c2$exports = $a5217dbd1b0d33ce$exports('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = $f6c32256739dd9b5$export$2d1720544b23b823($c845d421b7b0e630$exports(it));
    var getOwnPropertySymbols = $0ed66cde5c449819$export$2d1720544b23b823;
    return getOwnPropertySymbols ? $339f2419d379e6c2$var$concat(keys, getOwnPropertySymbols(it)) : keys;
};




$ef14b437ba65973a$exports = function(target, source, exceptions) {
    var keys = $339f2419d379e6c2$exports(source);
    var defineProperty = $2d0ac3aa5e39584b$export$2d1720544b23b823;
    var getOwnPropertyDescriptor = $6d99163b6684d050$export$2d1720544b23b823;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!$1f868a26fd901990$exports(target, key) && !(exceptions && $1f868a26fd901990$exports(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};


var $ca268db110e9e457$exports = {};
'use strict';


var $ca268db110e9e457$var$replacement = /#|\.prototype\./;
var $ca268db110e9e457$var$isForced = function(feature, detection) {
    var value = $ca268db110e9e457$var$data[$ca268db110e9e457$var$normalize(feature)];
    return value === $ca268db110e9e457$var$POLYFILL ? true : value === $ca268db110e9e457$var$NATIVE ? false : $70e34a5a2021f756$exports(detection) ? $6140c9fa18232846$exports(detection) : !!detection;
};
var $ca268db110e9e457$var$normalize = $ca268db110e9e457$var$isForced.normalize = function(string) {
    return String(string).replace($ca268db110e9e457$var$replacement, '.').toLowerCase();
};
var $ca268db110e9e457$var$data = $ca268db110e9e457$var$isForced.data = {};
var $ca268db110e9e457$var$NATIVE = $ca268db110e9e457$var$isForced.NATIVE = 'N';
var $ca268db110e9e457$var$POLYFILL = $ca268db110e9e457$var$isForced.POLYFILL = 'P';
$ca268db110e9e457$exports = $ca268db110e9e457$var$isForced;


/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ $ca3e1754e676956d$exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = $3fbf1185731afe2b$exports;
    else if (STATIC) target = $3fbf1185731afe2b$exports[TARGET] || $4ce407c7007beb63$exports(TARGET, {});
    else target = $3fbf1185731afe2b$exports[TARGET] && $3fbf1185731afe2b$exports[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = $ca3e1754e676956d$require$getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = $ca268db110e9e457$exports(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            $ef14b437ba65973a$exports(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) $8693737507995841$exports(sourceProperty, 'sham', true);
        $40e957865125f98f$exports(target, key, sourceProperty, options);
    }
};



var $a393da0e05d61ed1$exports = {};
'use strict';

var $3cdb2ef65d8e3cb5$exports = {};
'use strict';

var $3cdb2ef65d8e3cb5$var$FunctionPrototype = Function.prototype;
var $3cdb2ef65d8e3cb5$var$apply = $3cdb2ef65d8e3cb5$var$FunctionPrototype.apply;
var $3cdb2ef65d8e3cb5$var$call = $3cdb2ef65d8e3cb5$var$FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
$3cdb2ef65d8e3cb5$exports = typeof Reflect == 'object' && Reflect.apply || ($bcbe62e89adc7d37$exports ? $3cdb2ef65d8e3cb5$var$call.bind($3cdb2ef65d8e3cb5$var$apply) : function() {
    return $3cdb2ef65d8e3cb5$var$call.apply($3cdb2ef65d8e3cb5$var$apply, arguments);
});


var $43284f0171045916$exports = {};
'use strict';
var $4828cb1b4c7586c8$exports = {};
'use strict';


$4828cb1b4c7586c8$exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if ($b0ba63bfbfb16088$exports(fn) === 'Function') return $43b18aa2f1faac44$exports(fn);
};




var $43284f0171045916$var$bind = $4828cb1b4c7586c8$exports($4828cb1b4c7586c8$exports.bind);
// optional / simple context binding
$43284f0171045916$exports = function(fn, that) {
    $ae485921c5498156$exports(fn);
    return that === undefined ? fn : $bcbe62e89adc7d37$exports ? $43284f0171045916$var$bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};





var $b8ce1ad1b6b1e7c1$exports = {};
'use strict';

$b8ce1ad1b6b1e7c1$exports = $a5217dbd1b0d33ce$exports('document', 'documentElement');


var $0709cba658bb4ed6$exports = {};
'use strict';

$0709cba658bb4ed6$exports = $43b18aa2f1faac44$exports([].slice);



var $7d824954c5058f7d$exports = {};
'use strict';
var $7d824954c5058f7d$var$$TypeError = TypeError;
$7d824954c5058f7d$exports = function(passed, required) {
    if (passed < required) throw new $7d824954c5058f7d$var$$TypeError('Not enough arguments');
    return passed;
};


var $2d59c67a15180939$exports = {};
'use strict';

// eslint-disable-next-line redos/no-vulnerable -- safe
$2d59c67a15180939$exports = /(?:ipad|iphone|ipod).*applewebkit/i.test($34fa2a1382dc63c1$exports);


var $88d6935be735e2e8$exports = {};
'use strict';
var $87e21695405add0a$exports = {};
'use strict';



var $87e21695405add0a$var$userAgentStartsWith = function(string) {
    return $34fa2a1382dc63c1$exports.slice(0, string.length) === string;
};
$87e21695405add0a$exports = function() {
    if ($87e21695405add0a$var$userAgentStartsWith('Bun/')) return 'BUN';
    if ($87e21695405add0a$var$userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if ($87e21695405add0a$var$userAgentStartsWith('Deno/')) return 'DENO';
    if ($87e21695405add0a$var$userAgentStartsWith('Node.js/')) return 'NODE';
    if ($3fbf1185731afe2b$exports.Bun && typeof Bun.version == 'string') return 'BUN';
    if ($3fbf1185731afe2b$exports.Deno && typeof Deno.version == 'object') return 'DENO';
    if ($b0ba63bfbfb16088$exports($3fbf1185731afe2b$exports.process) === 'process') return 'NODE';
    if ($3fbf1185731afe2b$exports.window && $3fbf1185731afe2b$exports.document) return 'BROWSER';
    return 'REST';
}();


$88d6935be735e2e8$exports = $87e21695405add0a$exports === 'NODE';


var $a393da0e05d61ed1$var$set = $3fbf1185731afe2b$exports.setImmediate;
var $a393da0e05d61ed1$var$clear = $3fbf1185731afe2b$exports.clearImmediate;
var $a393da0e05d61ed1$var$process = $3fbf1185731afe2b$exports.process;
var $a393da0e05d61ed1$var$Dispatch = $3fbf1185731afe2b$exports.Dispatch;
var $a393da0e05d61ed1$var$Function = $3fbf1185731afe2b$exports.Function;
var $a393da0e05d61ed1$var$MessageChannel = $3fbf1185731afe2b$exports.MessageChannel;
var $a393da0e05d61ed1$var$String = $3fbf1185731afe2b$exports.String;
var $a393da0e05d61ed1$var$counter = 0;
var $a393da0e05d61ed1$var$queue = {};
var $a393da0e05d61ed1$var$ONREADYSTATECHANGE = 'onreadystatechange';
var $a393da0e05d61ed1$var$$location, $a393da0e05d61ed1$var$defer, $a393da0e05d61ed1$var$channel, $a393da0e05d61ed1$var$port;
$6140c9fa18232846$exports(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $a393da0e05d61ed1$var$$location = $3fbf1185731afe2b$exports.location;
});
var $a393da0e05d61ed1$var$run = function(id) {
    if ($1f868a26fd901990$exports($a393da0e05d61ed1$var$queue, id)) {
        var fn = $a393da0e05d61ed1$var$queue[id];
        delete $a393da0e05d61ed1$var$queue[id];
        fn();
    }
};
var $a393da0e05d61ed1$var$runner = function(id) {
    return function() {
        $a393da0e05d61ed1$var$run(id);
    };
};
var $a393da0e05d61ed1$var$eventListener = function(event) {
    $a393da0e05d61ed1$var$run(event.data);
};
var $a393da0e05d61ed1$var$globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    $3fbf1185731afe2b$exports.postMessage($a393da0e05d61ed1$var$String(id), $a393da0e05d61ed1$var$$location.protocol + '//' + $a393da0e05d61ed1$var$$location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!$a393da0e05d61ed1$var$set || !$a393da0e05d61ed1$var$clear) {
    $a393da0e05d61ed1$var$set = function setImmediate(handler) {
        $7d824954c5058f7d$exports(arguments.length, 1);
        var fn = $70e34a5a2021f756$exports(handler) ? handler : $a393da0e05d61ed1$var$Function(handler);
        var args = $0709cba658bb4ed6$exports(arguments, 1);
        $a393da0e05d61ed1$var$queue[++$a393da0e05d61ed1$var$counter] = function() {
            $3cdb2ef65d8e3cb5$exports(fn, undefined, args);
        };
        $a393da0e05d61ed1$var$defer($a393da0e05d61ed1$var$counter);
        return $a393da0e05d61ed1$var$counter;
    };
    $a393da0e05d61ed1$var$clear = function clearImmediate(id) {
        delete $a393da0e05d61ed1$var$queue[id];
    };
    // Node.js 0.8-
    if ($88d6935be735e2e8$exports) $a393da0e05d61ed1$var$defer = function(id) {
        $a393da0e05d61ed1$var$process.nextTick($a393da0e05d61ed1$var$runner(id));
    };
    else if ($a393da0e05d61ed1$var$Dispatch && $a393da0e05d61ed1$var$Dispatch.now) $a393da0e05d61ed1$var$defer = function(id) {
        $a393da0e05d61ed1$var$Dispatch.now($a393da0e05d61ed1$var$runner(id));
    };
    else if ($a393da0e05d61ed1$var$MessageChannel && !$2d59c67a15180939$exports) {
        $a393da0e05d61ed1$var$channel = new $a393da0e05d61ed1$var$MessageChannel();
        $a393da0e05d61ed1$var$port = $a393da0e05d61ed1$var$channel.port2;
        $a393da0e05d61ed1$var$channel.port1.onmessage = $a393da0e05d61ed1$var$eventListener;
        $a393da0e05d61ed1$var$defer = $43284f0171045916$exports($a393da0e05d61ed1$var$port.postMessage, $a393da0e05d61ed1$var$port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if ($3fbf1185731afe2b$exports.addEventListener && $70e34a5a2021f756$exports($3fbf1185731afe2b$exports.postMessage) && !$3fbf1185731afe2b$exports.importScripts && $a393da0e05d61ed1$var$$location && $a393da0e05d61ed1$var$$location.protocol !== 'file:' && !$6140c9fa18232846$exports($a393da0e05d61ed1$var$globalPostMessageDefer)) {
        $a393da0e05d61ed1$var$defer = $a393da0e05d61ed1$var$globalPostMessageDefer;
        $3fbf1185731afe2b$exports.addEventListener('message', $a393da0e05d61ed1$var$eventListener, false);
    // IE8-
    } else if ($a393da0e05d61ed1$var$ONREADYSTATECHANGE in $15c0c414b89100b1$exports('script')) $a393da0e05d61ed1$var$defer = function(id) {
        $b8ce1ad1b6b1e7c1$exports.appendChild($15c0c414b89100b1$exports('script'))[$a393da0e05d61ed1$var$ONREADYSTATECHANGE] = function() {
            $b8ce1ad1b6b1e7c1$exports.removeChild(this);
            $a393da0e05d61ed1$var$run(id);
        };
    };
    else $a393da0e05d61ed1$var$defer = function(id) {
        setTimeout($a393da0e05d61ed1$var$runner(id), 0);
    };
}
$a393da0e05d61ed1$exports = {
    set: $a393da0e05d61ed1$var$set,
    clear: $a393da0e05d61ed1$var$clear
};


var $99b55bbd56d52729$require$clearImmediate = $a393da0e05d61ed1$exports.clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$ca3e1754e676956d$exports({
    global: true,
    bind: true,
    enumerable: true,
    forced: $3fbf1185731afe2b$exports.clearImmediate !== $99b55bbd56d52729$require$clearImmediate
}, {
    clearImmediate: $99b55bbd56d52729$require$clearImmediate
});


'use strict';



var $e55ac54d5aaa2e1c$require$setTask = $a393da0e05d61ed1$exports.set;
var $f112a170991e44cc$exports = {};
'use strict';







var $f112a170991e44cc$var$Function = $3fbf1185731afe2b$exports.Function;
// dirty IE9- and Bun 0.3.0- checks
var $f112a170991e44cc$var$WRAP = /MSIE .\./.test($34fa2a1382dc63c1$exports) || $87e21695405add0a$exports === 'BUN' && function() {
    var version = $3fbf1185731afe2b$exports.Bun.version.split('.');
    return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
$f112a170991e44cc$exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return $f112a170991e44cc$var$WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = $7d824954c5058f7d$exports(arguments.length, 1) > firstParamIndex;
        var fn = $70e34a5a2021f756$exports(handler) ? handler : $f112a170991e44cc$var$Function(handler);
        var params = boundArgs ? $0709cba658bb4ed6$exports(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            $3cdb2ef65d8e3cb5$exports(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};


// https://github.com/oven-sh/bun/issues/1633
var $e55ac54d5aaa2e1c$var$setImmediate = $3fbf1185731afe2b$exports.setImmediate ? $f112a170991e44cc$exports($e55ac54d5aaa2e1c$require$setTask, false) : $e55ac54d5aaa2e1c$require$setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$ca3e1754e676956d$exports({
    global: true,
    bind: true,
    enumerable: true,
    forced: $3fbf1185731afe2b$exports.setImmediate !== $e55ac54d5aaa2e1c$var$setImmediate
}, {
    setImmediate: $e55ac54d5aaa2e1c$var$setImmediate
});




var $7238a34a955809b2$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $7238a34a955809b2$var$runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, $7238a34a955809b2$exports));
try {
    regeneratorRuntime = $7238a34a955809b2$var$runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = $7238a34a955809b2$var$runtime;
    else Function("r", "regeneratorRuntime = r")($7238a34a955809b2$var$runtime);
}



const $ba30e20475feac5a$export$923ea8233b386e99 = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
const $ba30e20475feac5a$export$196440f71ed9f601 = 100;
const $ba30e20475feac5a$export$5feaddb1377b7f5e = 10;
const $ba30e20475feac5a$export$7167c830cefcb6b5 = '1f73e9c2-a469-4b9e-a9e3-8cff3a8fd839';
const $ba30e20475feac5a$export$3ce8858248d89a69 = 2.5;


var $beb3fdd66bb756e9$exports = {};
$beb3fdd66bb756e9$exports = JSON.parse("{\"status\":\"success\",\"data\":{\"recipe\":{\"publisher\":\"My Baking Addiction\",\"ingredients\":[{\"quantity\":1,\"unit\":\"\",\"description\":\"tbsp. canola or olive oil\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"chopped sweet onion\"},{\"quantity\":3,\"unit\":\"cups\",\"description\":\"diced fresh red yellow and green bell peppers\"},{\"quantity\":1,\"unit\":\"\",\"description\":\"tube refrigerated pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"salsa\"},{\"quantity\":2,\"unit\":\"cups\",\"description\":\"sargento chefstyle shredded pepper jack cheese\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"Chopped cilantro or dried oregano\"}],\"source_url\":\"http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/\",\"image_url\":\"http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg\",\"title\":\"Spicy Chicken and Pepper Jack Pizza\",\"servings\":4,\"cooking_time\":45,\"id\":\"5ed6604591c37cdc054bc886\"}}}");



const $bd02c871d9c5ba8e$var$timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const $bd02c871d9c5ba8e$export$2b3ff41fecbef7c8 = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            $bd02c871d9c5ba8e$var$timeout((0, $ba30e20475feac5a$export$196440f71ed9f601))
        ]);
        return await res.json();
    } catch (err) {
        throw err;
    }
};


const $0f1d4402dffacf5b$export$ca000e230c0caa3e = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: (0, $ba30e20475feac5a$export$5feaddb1377b7f5e)
    },
    bookmarks: []
};
const $0f1d4402dffacf5b$var$createRecipeObject = function(data) {
    let { recipe: recipe } = data.data;
    $0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        ingredients: recipe.ingredients,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        image: recipe.image_url,
        source: recipe.source_url,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const $0f1d4402dffacf5b$export$b96725c7a035d60b = async function(id) {
    try {
        const url = `${(0, $ba30e20475feac5a$export$923ea8233b386e99)}/${id}?key=${(0, $ba30e20475feac5a$export$7167c830cefcb6b5)}`;
        const data = await (0, $bd02c871d9c5ba8e$export$2b3ff41fecbef7c8)(url);
        $0f1d4402dffacf5b$var$createRecipeObject(data);
        if ($0f1d4402dffacf5b$export$ca000e230c0caa3e.bookmarks.some((bookmark)=>bookmark.id === id)) $0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.bookmarked = true;
        else $0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.bookmarked = false;
    } catch (err) {
        throw err;
    }
};
const $0f1d4402dffacf5b$export$202b8e5cb363a0c4 = async function(query) {
    try {
        $0f1d4402dffacf5b$export$ca000e230c0caa3e.search.query = query;
        const url = `${(0, $ba30e20475feac5a$export$923ea8233b386e99)}?search=${query}&key=${(0, $ba30e20475feac5a$export$7167c830cefcb6b5)}`;
        const data = await (0, $bd02c871d9c5ba8e$export$2b3ff41fecbef7c8)(url);
        $0f1d4402dffacf5b$export$ca000e230c0caa3e.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        $0f1d4402dffacf5b$export$ca000e230c0caa3e.search.page = 1;
    } catch (err) {
        throw err;
    }
};
const $0f1d4402dffacf5b$export$8d7f79465139ab72 = function(page = $0f1d4402dffacf5b$export$ca000e230c0caa3e.search.page) {
    $0f1d4402dffacf5b$export$ca000e230c0caa3e.search.page = page;
    const start = (page - 1) * $0f1d4402dffacf5b$export$ca000e230c0caa3e.search.resultsPerPage;
    const end = page * $0f1d4402dffacf5b$export$ca000e230c0caa3e.search.resultsPerPage;
    return $0f1d4402dffacf5b$export$ca000e230c0caa3e.search.results.slice(start, end);
};
const $0f1d4402dffacf5b$export$5e23f4642ecad5ea = function(newServings) {
    $0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / $0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.servings;
    });
    $0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.servings = newServings;
};
const $0f1d4402dffacf5b$var$persistBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify($0f1d4402dffacf5b$export$ca000e230c0caa3e.bookmarks));
};
const $0f1d4402dffacf5b$export$72009cc673d27d80 = function(recipe) {
    $0f1d4402dffacf5b$export$ca000e230c0caa3e.bookmarks.push(recipe);
    if (recipe.id === $0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.id) $0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.bookmarked = true;
    $0f1d4402dffacf5b$var$persistBookmarks();
};
const $0f1d4402dffacf5b$export$136048bcb9946c75 = function(id) {
    const index = $0f1d4402dffacf5b$export$ca000e230c0caa3e.bookmarks.findIndex((el)=>el.id === id);
    $0f1d4402dffacf5b$export$ca000e230c0caa3e.bookmarks.splice(index, 1);
    if (id === $0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.id) $0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.bookmarked = false;
    $0f1d4402dffacf5b$var$persistBookmarks();
};
const $0f1d4402dffacf5b$var$init = function() {
    const storage = localStorage.getItem('bookmarks');
    if (storage) $0f1d4402dffacf5b$export$ca000e230c0caa3e.bookmarks = JSON.parse(storage);
};
$0f1d4402dffacf5b$var$init();
const $0f1d4402dffacf5b$var$clearBookmarks = function() {
    localStorage.clear('bookmarks');
};
const $0f1d4402dffacf5b$export$d660c2254e74960d = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith('ingredient') && entry[1] !== '').map((ing)=>{
            const ingArr = ing[1].split(',').map((el)=>el.trim());
            if (ingArr.length !== 3) throw new Error('Wrong ingredient format! Please use the correct format :)');
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit: unit,
                description: description
            };
        });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients: ingredients
        };
        const data = await (0, $bd02c871d9c5ba8e$export$2b3ff41fecbef7c8)(`${(0, $ba30e20475feac5a$export$923ea8233b386e99)}/?key=${(0, $ba30e20475feac5a$export$7167c830cefcb6b5)}`, recipe);
        $0f1d4402dffacf5b$var$createRecipeObject(data);
        $0f1d4402dffacf5b$export$72009cc673d27d80($0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe);
    } catch (err) {
        throw err;
    }
};



var $1cd63cfe08530fad$exports = {};
$1cd63cfe08530fad$exports = import.meta.resolve("eyyUD");


var $46f2c80bea895cd4$exports = {};
/*
Fraction.js v5.2.2 3/30/2025
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2025, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/ 'use strict';
(function(E) {
    function C() {
        return Error("Parameters must be integer");
    }
    function w() {
        return Error("Invalid argument");
    }
    function A() {
        return Error("Division by Zero");
    }
    function p(a, b) {
        var d = g, c = h;
        let f = h;
        if (void 0 !== a && null !== a) {
            if (void 0 !== b) {
                if ("bigint" === typeof a) d = a;
                else {
                    if (isNaN(a)) throw w();
                    if (0 !== a % 1) throw C();
                    d = BigInt(a);
                }
                if ("bigint" === typeof b) c = b;
                else {
                    if (isNaN(b)) throw w();
                    if (0 !== b % 1) throw C();
                    c = BigInt(b);
                }
                f = d * c;
            } else if ("object" === typeof a) {
                if ("d" in a && "n" in a) d = BigInt(a.n), c = BigInt(a.d), "s" in a && (d *= BigInt(a.s));
                else if (0 in a) d = BigInt(a[0]), 1 in a && (c = BigInt(a[1]));
                else if ("bigint" === typeof a) d = a;
                else throw w();
                f = d * c;
            } else if ("number" === typeof a) {
                if (isNaN(a)) throw w();
                0 > a && (f = -h, a = -a);
                if (0 === a % 1) d = BigInt(a);
                else {
                    b = 1;
                    var k = 0, l = 1, m = 1;
                    let q = 1;
                    1 <= a && (b = 10 ** Math.floor(1 + Math.log10(a)), a /= b);
                    for(; 1E7 >= l && 1E7 >= q;)if (c = (k + m) / (l + q), a === c) {
                        1E7 >= l + q ? (d = k + m, c = l + q) : q > l ? (d = m, c = q) : (d = k, c = l);
                        break;
                    } else a > c ? (k += m, l += q) : (m += k, q += l), 1E7 < l ? (d = m, c = q) : (d = k, c = l);
                    d = BigInt(d) * BigInt(b);
                    c = BigInt(c);
                }
            } else if ("string" === typeof a) {
                c = 0;
                k = b = d = g;
                l = m = h;
                a = a.replace(/_/g, "").match(/\d+|./g);
                if (null === a) throw w();
                "-" === a[c] ? (f = -h, c++) : "+" === a[c] && c++;
                if (a.length === c + 1) b = v(a[c++], f);
                else if ("." === a[c + 1] || "." === a[c]) {
                    "." !== a[c] && (d = v(a[c++], f));
                    c++;
                    if (c + 1 === a.length || "(" === a[c + 1] && ")" === a[c + 3] || "'" === a[c + 1] && "'" === a[c + 3]) b = v(a[c], f), m = r ** BigInt(a[c].length), c++;
                    if ("(" === a[c] && ")" === a[c + 2] || "'" === a[c] && "'" === a[c + 2]) k = v(a[c + 1], f), l = r ** BigInt(a[c + 1].length) - h, c += 3;
                } else "/" === a[c + 1] || ":" === a[c + 1] ? (b = v(a[c], f), m = v(a[c + 2], h), c += 3) : "/" === a[c + 3] && " " === a[c + 1] && (d = v(a[c], f), b = v(a[c + 2], f), m = v(a[c + 4], h), c += 5);
                if (a.length <= c) c = m * l, f = d = k + c * d + l * b;
                else throw w();
            } else if ("bigint" === typeof a) f = d = a, c = h;
            else throw w();
        }
        if (c === g) throw A();
        e.s = f < g ? -h : h;
        e.n = d < g ? -d : d;
        e.d = c < g ? -c : c;
    }
    function v(a, b) {
        try {
            a = BigInt(a);
        } catch (d) {
            throw w();
        }
        return a * b;
    }
    function t(a) {
        return "bigint" === typeof a ? a : Math.floor(a);
    }
    function n(a, b) {
        if (b === g) throw A();
        const d = Object.create(u.prototype);
        d.s = a < g ? -h : h;
        a = a < g ? -a : a;
        const c = x(a, b);
        d.n = a / c;
        d.d = b / c;
        return d;
    }
    function y(a) {
        const b = {};
        let d = a, c = z, f = B - h;
        for(; f <= d;){
            for(; d % c === g;)d /= c, b[c] = (b[c] || g) + h;
            f += h + z * c++;
        }
        d !== a ? 1 < d && (b[d] = (b[d] || g) + h) : b[a] = (b[a] || g) + h;
        return b;
    }
    function x(a, b) {
        if (!a) return b;
        if (!b) return a;
        for(;;){
            a %= b;
            if (!a) return b;
            b %= a;
            if (!b) return a;
        }
    }
    function u(a, b) {
        p(a, b);
        if (this instanceof u) a = x(e.d, e.n), this.s = e.s, this.n = e.n / a, this.d = e.d / a;
        else return n(e.s * e.n, e.d);
    }
    "undefined" === typeof BigInt && (BigInt = function(a) {
        if (isNaN(a)) throw Error("");
        return a;
    });
    const g = BigInt(0), h = BigInt(1), z = BigInt(2), B = BigInt(5), r = BigInt(10), e = {
        s: h,
        n: g,
        d: h
    };
    u.prototype = {
        s: h,
        n: g,
        d: h,
        abs: function() {
            return n(this.n, this.d);
        },
        neg: function() {
            return n(-this.s * this.n, this.d);
        },
        add: function(a, b) {
            p(a, b);
            return n(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
        },
        sub: function(a, b) {
            p(a, b);
            return n(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
        },
        mul: function(a, b) {
            p(a, b);
            return n(this.s * e.s * this.n * e.n, this.d * e.d);
        },
        div: function(a, b) {
            p(a, b);
            return n(this.s * e.s * this.n * e.d, this.d * e.n);
        },
        clone: function() {
            return n(this.s * this.n, this.d);
        },
        mod: function(a, b) {
            if (void 0 === a) return n(this.s * this.n % this.d, h);
            p(a, b);
            if (g === e.n * this.d) throw A();
            return n(this.s * e.d * this.n % (e.n * this.d), e.d * this.d);
        },
        gcd: function(a, b) {
            p(a, b);
            return n(x(e.n, this.n) * x(e.d, this.d), e.d * this.d);
        },
        lcm: function(a, b) {
            p(a, b);
            return e.n === g && this.n === g ? n(g, h) : n(e.n * this.n, x(e.n, this.n) * x(e.d, this.d));
        },
        inverse: function() {
            return n(this.s * this.d, this.n);
        },
        pow: function(a, b) {
            p(a, b);
            if (e.d === h) return e.s < g ? n((this.s * this.d) ** e.n, this.n ** e.n) : n((this.s * this.n) ** e.n, this.d ** e.n);
            if (this.s < g) return null;
            a = y(this.n);
            b = y(this.d);
            let d = h, c = h;
            for(let f in a)if ("1" !== f) {
                if ("0" === f) {
                    d = g;
                    break;
                }
                a[f] *= e.n;
                if (a[f] % e.d === g) a[f] /= e.d;
                else return null;
                d *= BigInt(f) ** a[f];
            }
            for(let f in b)if ("1" !== f) {
                b[f] *= e.n;
                if (b[f] % e.d === g) b[f] /= e.d;
                else return null;
                c *= BigInt(f) ** b[f];
            }
            return e.s < g ? n(c, d) : n(d, c);
        },
        log: function(a, b) {
            p(a, b);
            if (this.s <= g || e.s <= g) return null;
            var d = {};
            a = y(e.n);
            const c = y(e.d);
            b = y(this.n);
            const f = y(this.d);
            for(var k in c)a[k] = (a[k] || g) - c[k];
            for(var l in f)b[l] = (b[l] || g) - f[l];
            for(var m in a)"1" !== m && (d[m] = !0);
            for(var q in b)"1" !== q && (d[q] = !0);
            l = k = null;
            for(const D in d)if (m = a[D] || g, d = b[D] || g, m === g) {
                if (d !== g) return null;
            } else if (q = x(d, m), d /= q, m /= q, null === k && null === l) k = d, l = m;
            else if (d * l !== k * m) return null;
            return null !== k && null !== l ? n(k, l) : null;
        },
        equals: function(a, b) {
            p(a, b);
            return this.s * this.n * e.d === e.s * e.n * this.d;
        },
        lt: function(a, b) {
            p(a, b);
            return this.s * this.n * e.d < e.s * e.n * this.d;
        },
        lte: function(a, b) {
            p(a, b);
            return this.s * this.n * e.d <= e.s * e.n * this.d;
        },
        gt: function(a, b) {
            p(a, b);
            return this.s * this.n * e.d > e.s * e.n * this.d;
        },
        gte: function(a, b) {
            p(a, b);
            return this.s * this.n * e.d >= e.s * e.n * this.d;
        },
        compare: function(a, b) {
            p(a, b);
            a = this.s * this.n * e.d - e.s * e.n * this.d;
            return (g < a) - (a < g);
        },
        ceil: function(a) {
            a = r ** BigInt(a || 0);
            return n(t(this.s * a * this.n / this.d) + (a * this.n % this.d > g && this.s >= g ? h : g), a);
        },
        floor: function(a) {
            a = r ** BigInt(a || 0);
            return n(t(this.s * a * this.n / this.d) - (a * this.n % this.d > g && this.s < g ? h : g), a);
        },
        round: function(a) {
            a = r ** BigInt(a || 0);
            return n(t(this.s * a * this.n / this.d) + this.s * ((this.s >= g ? h : g) + a * this.n % this.d * z > this.d ? h : g), a);
        },
        roundTo: function(a, b) {
            p(a, b);
            var d = this.n * e.d;
            a = this.d * e.n;
            b = d % a;
            d = t(d / a);
            b + b >= a && d++;
            return n(this.s * d * e.n, e.d);
        },
        divisible: function(a, b) {
            p(a, b);
            return !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
        },
        valueOf: function() {
            return Number(this.s * this.n) / Number(this.d);
        },
        toString: function(a) {
            let b = this.n, d = this.d;
            a = a || 15;
            var c;
            a: {
                for(c = d; c % z === g; c /= z);
                for(; c % B === g; c /= B);
                if (c === h) c = g;
                else {
                    for(var f = r % c, k = 1; f !== h; k++)if (f = f * r % c, 2E3 < k) {
                        c = g;
                        break a;
                    }
                    c = BigInt(k);
                }
            }
            a: {
                f = h;
                k = r;
                var l = c;
                let m = h;
                for(; l > g; k = k * k % d, l >>= h)l & h && (m = m * k % d);
                k = m;
                for(l = 0; 300 > l; l++){
                    if (f === k) {
                        f = BigInt(l);
                        break a;
                    }
                    f = f * r % d;
                    k = k * r % d;
                }
                f = 0;
            }
            k = f;
            f = this.s < g ? "-" : "";
            f += t(b / d);
            (b = b % d * r) && (f += ".");
            if (c) {
                for(a = k; a--;)f += t(b / d), b %= d, b *= r;
                f += "(";
                for(a = c; a--;)f += t(b / d), b %= d, b *= r;
                f += ")";
            } else for(; b && a--;)f += t(b / d), b %= d, b *= r;
            return f;
        },
        toFraction: function(a) {
            let b = this.n, d = this.d, c = this.s < g ? "-" : "";
            if (d === h) c += b;
            else {
                let f = t(b / d);
                a && f > g && (c += f, c += " ", b %= d);
                c = c + b + "/" + d;
            }
            return c;
        },
        toLatex: function(a) {
            let b = this.n, d = this.d, c = this.s < g ? "-" : "";
            if (d === h) c += b;
            else {
                let f = t(b / d);
                a && f > g && (c += f, b %= d);
                c = c + "\\frac{" + b + "}{" + d;
                c += "}";
            }
            return c;
        },
        toContinued: function() {
            let a = this.n, b = this.d, d = [];
            do {
                d.push(t(a / b));
                let c = a % b;
                a = b;
                b = c;
            }while (a !== h);
            return d;
        },
        simplify: function(a) {
            a = BigInt(1 / (a || .001) | 0);
            const b = this.abs(), d = b.toContinued();
            for(let f = 1; f < d.length; f++){
                let k = n(d[f - 1], h);
                for(var c = f - 2; 0 <= c; c--)k = k.inverse().add(d[c]);
                c = k.sub(b);
                if (c.n * a < c.d) return k.mul(this.s);
            }
            return this;
        }
    };
    "function" === typeof define && define.amd ? define([], function() {
        return u;
    }) : (Object.defineProperty(u, "__esModule", {
        value: !0
    }), u["default"] = u, u.Fraction = u, $46f2c80bea895cd4$exports = u);
})($46f2c80bea895cd4$exports);



class $3a07c34e115c11c9$export$2e2bcd8739ae039 {
    _data;
    /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author LHKTinh
   * @todo Finish implementation
   */ render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDom.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') curEl.textContent = newEl.textContent;
            //Updates changed ATTRIBUES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderSpinner() {
        const markup = `
        <div class="spinner">
          <svg>
            <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports)))}#icon-loader"></use>
          </svg>  
        </div>
  `;
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports)))}#icon-alert-triangle"></use>
              </svg>
            </div>  
            <p>${message}</p>
          </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports)))}#icon-smile"></use>
              </svg>
            </div>  
            <p>${message}</p>
          </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}


class $d14dc0f178617192$export$41b9f6ec320e4352 extends (0, $3a07c34e115c11c9$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';
    _data;
    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderSpinner = function() {
        const markup = `
          <div class="spinner">
            <svg>
              <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports)))}#icon-loader"></use>
            </svg>
          </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };
    renderMessage(message = this._message) {
        const markup = `
    <div class="message">
    <div>
    <svg>
    <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports)))}#icon-smile"></use>
    </svg>
    </div>
    <p>${message}</p>
    </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
    <div class="error">
    <div>
    <svg>
    <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports)))}#icon-alert-triangle"></use>
    </svg>
    </div>
    <p>${message}</p>
    </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--update-servings');
            if (!btn) return;
            const { updateTo: updateTo } = btn.dataset;
            if (+updateTo > 0) handler(+updateTo);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--bookmark');
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return ` <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
                <svg>
                  <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))).replace(/^\/+/, '')}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">
                <svg>
                  <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))).replace(/^\/+/, '')}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
            <svg>
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))}#icon-bookmark${this._data.bookmarked ? '-fill' : ''}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map((ing)=>{
            return this._generateMarkupIngredient(ing);
        }).join('')} 
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;
    }
    _generateMarkupIngredient(ing) {
        return `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${ing}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity ? new (0, (/*@__PURE__*/$parcel$interopDefault($46f2c80bea895cd4$exports)))(ing.quantity).toFraction() : ''}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
              ${ing.description}
              </div>
            </li>
    `;
    }
}
var $d14dc0f178617192$export$2e2bcd8739ae039 = new $d14dc0f178617192$export$41b9f6ec320e4352();


class $813cf99795e9ec97$var$SearchView {
    _parentElement = document.querySelector('.search');
    getQuery() {
        const query = this._parentElement.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        return this._parentElement.querySelector('.search__field').value = '';
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
}
var $813cf99795e9ec97$export$2e2bcd8739ae039 = new $813cf99795e9ec97$var$SearchView();






class $a68ceb92eae160df$var$PreviewView extends (0, $3a07c34e115c11c9$export$2e2bcd8739ae039) {
    _parentElement = '';
    _generateMarkup(result) {
        const id = window.location.hash.slice(1);
        return `
          <li class="preview">
            <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key ? '' : 'hidden'}" >
                  <svg>
                  <use href="${0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        `;
    }
}
var $a68ceb92eae160df$export$2e2bcd8739ae039 = new $a68ceb92eae160df$var$PreviewView();


class $dddbd0b30676c4ae$var$ResultView extends (0, $3a07c34e115c11c9$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query! Please try again';
    _message = '';
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const li = e.target.closest('li.preview');
            if (!li) return;
            handler(li);
        });
    }
    _generateMarkup() {
        return this._data.map((result)=>(0, $a68ceb92eae160df$export$2e2bcd8739ae039).render(result, false)).join('');
    }
}
var $dddbd0b30676c4ae$export$2e2bcd8739ae039 = new $dddbd0b30676c4ae$var$ResultView();




class $cfa940594ee109f7$var$PaginationView extends (0, $3a07c34e115c11c9$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        //Page 1, and there are other pages
        if (curPage === 1 & numPages > 1) return `
          <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))}#icon-arrow-right"></use>
            </svg>
            <span>Page ${curPage + 1}</span>
          </button>
    `;
        //Last page
        if (curPage === numPages & numPages > 1) return `
          <button  data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
    `;
        //Other page
        if (curPage < numPages) return `
          <button  data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
          
          
          <button  data-goto="${curPage + 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($1cd63cfe08530fad$exports))}#icon-arrow-right"></use>
            </svg>
            <span>Page ${curPage + 1}</span>
          </button>
    `;
        //Only 1 page
        return '';
    }
}
var $cfa940594ee109f7$export$2e2bcd8739ae039 = new $cfa940594ee109f7$var$PaginationView();





class $c5eab150e9f25972$var$BookmarksView extends (0, $3a07c34e115c11c9$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it';
    _message = '';
    addHandlerRender(handler) {
        window.addEventListener('click', handler);
    }
    addHandlerClickBookmark(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const li = e.target.closest('li.preview');
            if (!li) return;
            handler(li);
        });
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>(0, $a68ceb92eae160df$export$2e2bcd8739ae039).render(bookmark, false)).join('');
    }
}
var $c5eab150e9f25972$export$2e2bcd8739ae039 = new $c5eab150e9f25972$var$BookmarksView();



class $e5dc5dc5ede8bdf4$var$AddRecipeView extends (0, $3a07c34e115c11c9$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector('.upload');
    _originParentHTML = this._parentElement.outerHTML;
    _message = 'Recipe was successfully uploaded :)';
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
    _addHandlerShowWindow() {
        if (this._parentElement.outerHTML !== this._originParentHTML) this._parentElement.innerHTML = this._originParentHTML;
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
    _generateMarkup() {}
    _clearInput() {
        this._parentElement.innerHTML = `
       <form class="upload">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST233" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST233" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST233" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST233" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="src/img/icons.svg#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>`;
    }
}
var $e5dc5dc5ede8bdf4$export$2e2bcd8739ae039 = new $e5dc5dc5ede8bdf4$var$AddRecipeView();


const $f50bd1f2915ed0f2$var$controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1) || '5ed6604591c37cdc054bc886';
        if (!id) return;
        (0, $d14dc0f178617192$export$2e2bcd8739ae039).renderSpinner();
        (0, $dddbd0b30676c4ae$export$2e2bcd8739ae039).update($0f1d4402dffacf5b$export$8d7f79465139ab72());
        await $0f1d4402dffacf5b$export$b96725c7a035d60b(id);
        (0, $d14dc0f178617192$export$2e2bcd8739ae039).render($0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe);
        (0, $c5eab150e9f25972$export$2e2bcd8739ae039).update($0f1d4402dffacf5b$export$ca000e230c0caa3e.bookmarks);
    } catch (err) {
        (0, $d14dc0f178617192$export$2e2bcd8739ae039).renderError();
    }
};
const $f50bd1f2915ed0f2$var$controlSearchResults = async function() {
    try {
        (0, $dddbd0b30676c4ae$export$2e2bcd8739ae039).renderSpinner();
        const query = (0, $813cf99795e9ec97$export$2e2bcd8739ae039).getQuery();
        if (!query) return;
        await $0f1d4402dffacf5b$export$202b8e5cb363a0c4(query);
        (0, $dddbd0b30676c4ae$export$2e2bcd8739ae039).render($0f1d4402dffacf5b$export$8d7f79465139ab72(1));
        (0, $cfa940594ee109f7$export$2e2bcd8739ae039).render($0f1d4402dffacf5b$export$ca000e230c0caa3e.search);
        // Bỏ hidden sau khi đã render xong
        document.querySelector('.results').classList.remove('hidden');
        document.querySelector('.pagination').classList.remove('hidden');
    } catch (err) {
        throw err;
    }
};
const $f50bd1f2915ed0f2$var$controlPagination = function(goToPage) {
    (0, $dddbd0b30676c4ae$export$2e2bcd8739ae039).render($0f1d4402dffacf5b$export$8d7f79465139ab72(goToPage));
    (0, $cfa940594ee109f7$export$2e2bcd8739ae039).render($0f1d4402dffacf5b$export$ca000e230c0caa3e.search);
};
const $f50bd1f2915ed0f2$var$controlServings = function(newServings) {
    $0f1d4402dffacf5b$export$5e23f4642ecad5ea(newServings);
    (0, $d14dc0f178617192$export$2e2bcd8739ae039).update($0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe);
};
const $f50bd1f2915ed0f2$var$controlAddBookmark = function() {
    if (!$0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.bookmarked) $0f1d4402dffacf5b$export$72009cc673d27d80($0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe);
    else $0f1d4402dffacf5b$export$136048bcb9946c75($0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.id);
    (0, $d14dc0f178617192$export$2e2bcd8739ae039).update($0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe);
    (0, $c5eab150e9f25972$export$2e2bcd8739ae039).render($0f1d4402dffacf5b$export$ca000e230c0caa3e.bookmarks);
};
function $f50bd1f2915ed0f2$var$controlBookMarks(li) {
    document.querySelector('.bookmarks__list').classList.remove('hidden');
    document.querySelector('.bookmarks').classList.remove('hidden');
    document.querySelector('.bookmarks').style.opacity = 1;
    (0, $c5eab150e9f25972$export$2e2bcd8739ae039).render($0f1d4402dffacf5b$export$ca000e230c0caa3e.bookmarks);
}
const $f50bd1f2915ed0f2$var$controlAddRecipe = async function(newRecipe) {
    try {
        (0, $e5dc5dc5ede8bdf4$export$2e2bcd8739ae039).renderSpinner();
        await $0f1d4402dffacf5b$export$d660c2254e74960d(newRecipe);
        (0, $d14dc0f178617192$export$2e2bcd8739ae039).render($0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe);
        (0, $e5dc5dc5ede8bdf4$export$2e2bcd8739ae039).renderMessage();
        (0, $c5eab150e9f25972$export$2e2bcd8739ae039).render($0f1d4402dffacf5b$export$ca000e230c0caa3e.bookmarks);
        window.history.pushState(null, '', `#${$0f1d4402dffacf5b$export$ca000e230c0caa3e.recipe.id}`);
        setTimeout(async function() {
            await (0, $e5dc5dc5ede8bdf4$export$2e2bcd8739ae039).toggleWindow();
            (0, $e5dc5dc5ede8bdf4$export$2e2bcd8739ae039)._clearInput();
        }, (0, $ba30e20475feac5a$export$3ce8858248d89a69) * 1000);
    } catch (err) {
        (0, $e5dc5dc5ede8bdf4$export$2e2bcd8739ae039).renderError(err.message);
    }
};
function $f50bd1f2915ed0f2$var$controlHiddenListItem(li) {
    if (window.innerWidth <= 600) {
        li.closest('.results').classList.add('hidden');
        document.querySelector('.pagination').classList.add('hidden');
    }
}
function $f50bd1f2915ed0f2$var$controlHiddenListBookmark(li) {
    li.closest('.bookmarks__list').classList.add('hidden');
    document.querySelector('.bookmarks').classList.add('hidden');
    document.querySelector('.bookmarks').style.opacity = 0;
}
const $f50bd1f2915ed0f2$var$init = function() {
    (0, $c5eab150e9f25972$export$2e2bcd8739ae039).addHandlerRender($f50bd1f2915ed0f2$var$controlBookMarks);
    (0, $c5eab150e9f25972$export$2e2bcd8739ae039).addHandlerClickBookmark($f50bd1f2915ed0f2$var$controlHiddenListBookmark);
    (0, $d14dc0f178617192$export$2e2bcd8739ae039).addHandlerRender($f50bd1f2915ed0f2$var$controlRecipes);
    (0, $d14dc0f178617192$export$2e2bcd8739ae039).addHandlerUpdateServings($f50bd1f2915ed0f2$var$controlServings);
    (0, $d14dc0f178617192$export$2e2bcd8739ae039).addHandlerAddBookmark($f50bd1f2915ed0f2$var$controlAddBookmark);
    (0, $813cf99795e9ec97$export$2e2bcd8739ae039).addHandlerSearch($f50bd1f2915ed0f2$var$controlSearchResults);
    (0, $cfa940594ee109f7$export$2e2bcd8739ae039).addHandlerClick($f50bd1f2915ed0f2$var$controlPagination);
    (0, $e5dc5dc5ede8bdf4$export$2e2bcd8739ae039).addHandlerUpload($f50bd1f2915ed0f2$var$controlAddRecipe);
    (0, $dddbd0b30676c4ae$export$2e2bcd8739ae039).addHandlerClick($f50bd1f2915ed0f2$var$controlHiddenListItem);
};
$f50bd1f2915ed0f2$var$init();


//# sourceMappingURL=ForkifyGIT.de96f4b8.js.map
