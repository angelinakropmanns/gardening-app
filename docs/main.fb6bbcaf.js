// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/label.png":[function(require,module,exports) {
module.exports = "/label.8955eba0.png";
},{}],"js/cards.js":[function(require,module,exports) {
"use strict";

var _label = _interopRequireDefault(require("../images/label.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cards = [{
  title: 'Sandkraut',
  text: "<ul class=\"card__list\">\n    <li>Lat.: Arenaria montana</li>\n    <li>Bodendecker</li>\n    <li>wird bis zu 10 cm hoch</li>\n    <li>immergr\xFCn</li>\n    <li>frosthart</li>\n    <li>wei\xDFe Bl\xFCten</li>\n    <li>Bl\xFCtezeit von Mai bis Juli</li>\n    <li>geeignet f\xFCr Steingarten, oder Dachbegr\xFCnung</li>\n    <li>beliebt auch als Grabbepflanzung</li>\n    <li>auch Hangbepflanzung m\xF6glich</li>\n    <li>kann mit anderen Stauden kultiviert werden</li>\n  </ul>",
  isBookmarked: false
}, {
  title: 'Moossteinbrech',
  text: "<ul class=\"card__list\">\n    <li>Lat.: Saxifraga arendsii</li>\n    <li>Pflanzengattung: Steinbrech (Saxifraga)</li>\n    <li>Bezeichnung der Art: Moossteinbrech (Saxifraga arendsii)</li>\n    <li>Nat\xFCrliches Vorkommen in den Alpen und Pyren\xE4en</li>\n    <li>Krautige, wintergr\xFCne Pflanze mit kriechendem Wuchs</li>\n    <li>Wuchsh\xF6he 3 bis 10 cm, selten bis 20 cm</li>\n    <li>Wei\xDFe, gelbe, rosa oder rote Bl\xFCten</li>\n    <li>von M\xE4rz/April bis Mai/Juni</li>\n    <li>Runde bis lanzettliche Bl\xE4tter in Rosettenanordnung</li>\n    <li>Winterhart und mehrj\xE4hrig</li>\n    <li>Trivialnamen: Moosartiger Steinbrech</li>\n</ul>",
  isBookmarked: false
}, {
  title: 'Königsfarn',
  text: "<ul class=\"card__list\">\n    <li>Lat.: Osmunda regalis</li>\n    <li>urspr\xFCnglich an hiesigen K\xFCsten beheimatet</li>\n    <li>kann bis zu 180 cm hoch werden</li>\n    <li>Solit\xE4rpflanze</li>\n    <li>lange, zweifach gefiederte Wedel</li>\n    <li>sommergr\xFCn</li>\n    <li>Bl\xE4tter \xE4ndern im Herbst die Farbe zu goldgelb</li>\n    <li>vertr\xE4gt Staun\xE4sse</li>\n    <li>auch im K\xFCbel kultivierbar</li>\n    <li>sehr frosthart, vertr\xE4gt Temperaturen bis -45\xB0 Celsius</li>\n  </ul>",
  isBookmarked: false
}];
var container = document.querySelector('[data-js = "card-container"]');
var submitForm = document.querySelector('form');

function renderAllCards(cards) {
  container.innerHTML = '';
  cards.forEach(renderSingleCard);
}

submitForm.addEventListener('submit', function (event) {
  event.preventDefault();
  onSubmit(event);
  submitForm.reset();
});

function onSubmit(event) {
  event.preventDefault();
  var titleInput = submitForm.title,
      textInput = submitForm.text;
  var newCard = {
    title: titleInput.value,
    text: textInput.value
  };
  cards = [].concat(_toConsumableArray(cards), [newCard]);
  renderAllCards(cards);
}

renderAllCards(cards);

function renderSingleCard(card) {
  var el = document.createElement('section');
  el.className = 'card__style';
  el.innerHTML = "\n    <img src=\"".concat(_label.default, "\" class=\"card__bookmark ").concat(card.isBookmarked ? ' card__bookmark--active' : '', "\"\n    alt=\"Bookmark\" />\n    <header class=\"card__header\">\n      <h2>").concat(card.title, "</h2>\n    </header>\n    <p class=\"card\">").concat(card.text, "</p>\n    ");
  var bookmark = el.querySelector('.card__bookmark');
  bookmark.addEventListener('click', function () {
    toggleBookmark(card);
  });
  var buttonDelete = document.createElement('button');
  buttonDelete.className = 'card__delete';
  buttonDelete.textContent = 'x';
  el.appendChild(buttonDelete);
  buttonDelete.addEventListener('click', function () {
    deleteCard(card);
  });
  container.appendChild(el);
}

function toggleBookmark(card) {
  var index = cards.indexOf(card);
  cards = [].concat(_toConsumableArray(cards.slice(0, index)), [_objectSpread({}, card, {
    isBookmarked: !card.isBookmarked
  })], _toConsumableArray(cards.slice(index + 1)));
  renderAllCards(cards);
}

function deleteCard(card) {
  var index = cards.indexOf(card);
  cards = [].concat(_toConsumableArray(cards.slice(0, index)), _toConsumableArray(cards.slice(index + 1)));
  renderAllCards(cards);
}
},{"../images/label.png":"images/label.png"}],"js/home.js":[function(require,module,exports) {
var home = document.querySelector('.home');
var create = document.querySelector('.create');
var profile = document.querySelector('.profile');
var settings = document.querySelector('.settings');
var homeBtn = document.querySelector('.home-btn');
var createBtn = document.querySelector('.create-btn');
var profileBtn = document.querySelector('.profile-btn');
var settingsBtn = document.querySelector('.settings-btn');
homeBtn.addEventListener('click', function (event) {
  event.preventDefault();
  home.classList.remove('hidden');
  create.classList.add('hidden');
  profile.classList.add('hidden');
  settings.classList.add('hidden');
});
createBtn.addEventListener('click', function (event) {
  event.preventDefault();
  home.classList.add('hidden');
  create.classList.remove('hidden');
  profile.classList.add('hidden');
  settings.classList.add('hidden');
});
profileBtn.addEventListener('click', function (event) {
  event.preventDefault();
  home.classList.add('hidden');
  create.classList.add('hidden');
  profile.classList.remove('hidden');
  settings.classList.add('hidden');
});
settingsBtn.addEventListener('click', function (event) {
  event.preventDefault();
  home.classList.add('hidden');
  create.classList.add('hidden');
  profile.classList.add('hidden');
  settings.classList.remove('hidden');
});
},{}],"js/darkmode.js":[function(require,module,exports) {
console.log('Hello World');
var slider = document.getElementById('slider');
var body = document.querySelector('body');

if (sessionStorage.getItem('mode') == 'dark') {
  darkmode();
} else {
  nodark();
}

slider.addEventListener('change', function () {
  if (slider.checked) {
    darkmode();
  } else {
    nodark();
  }
});

function darkmode() {
  body.classList.add('darkmode');
  slider.checked = true;
  sessionStorage.setItem('mode', 'dark');
}

function nodark() {
  body.classList.remove('darkmode');
  slider.checked = false;
  sessionStorage.setItem('mode', 'light');
}
},{}],"js/button.js":[function(require,module,exports) {
var formButton = document.querySelector('form');
formButton.addEventListener('submit', reset);

function reset() {
  formButton.reset();
}
},{}],"js/navigation.js":[function(require,module,exports) {
var homeButton = document.querySelector('.home-btn');
var createButton = document.querySelector('.create-btn');
var profileButton = document.querySelector('.profile-btn');
var settingsButton = document.querySelector('.settings-btn');
homeButton.addEventListener('click', function () {
  homeButton.classList.add('active');
  createButton.classList.remove('active');
  profileButton.classList.remove('active');
  settingsButton.classList.remove('active');
});
createButton.addEventListener('click', function () {
  homeButton.classList.remove('active');
  createButton.classList.add('active');
  profileButton.classList.remove('active');
  settingsButton.classList.remove('active');
});
profileButton.addEventListener('click', function () {
  homeButton.classList.remove('active');
  createButton.classList.remove('active');
  profileButton.classList.add('active');
  settingsButton.classList.remove('active');
});
settingsButton.addEventListener('click', function () {
  homeButton.classList.remove('active');
  createButton.classList.remove('active');
  profileButton.classList.remove('active');
  settingsButton.classList.add('active');
});
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

require("./cards.js");

require("./home.js");

require("./darkmode.js");

require("./button.js");

require("./navigation.js");
},{"./cards.js":"js/cards.js","./home.js":"js/home.js","./darkmode.js":"js/darkmode.js","./button.js":"js/button.js","./navigation.js":"js/navigation.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60126" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map