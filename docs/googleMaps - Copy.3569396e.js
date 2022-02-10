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
})({"MtoT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomMap = void 0;

var CustomMap =
/** @class */
function () {
  function CustomMap(divId, objectToMark) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 13,
      center: {
        lat: objectToMark.location.lat,
        lng: objectToMark.location.lng
      }
    });
  }

  CustomMap.prototype.addMarker = function (objectToMark) {
    var _this = this;

    var marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: objectToMark.location.lat,
        lng: objectToMark.location.lng
      }
    });
    marker.addListener("click", function () {
      var infoWindow = new google.maps.InfoWindow({
        content: objectToMark.markerContent()
      });
      infoWindow.open(_this.googleMap, marker);
    });
  };

  return CustomMap;
}();

exports.CustomMap = CustomMap;
},{}],"cXf9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSpotInfo = void 0;

function createSpotInfo(spot) {
  return "\n<div class=\"info-box\">\n                <div class=\"left-info\">\n                    <h1 class=\"spot-name\">".concat(spot.placeName, "</h1>\n                    <img class=\"photo\"\n                        src=").concat(spot.imgSrc, ">\n                </div>\n                <div class=\"right-info\">\n                    <div class=\"info-part equipment\">\n                        <h3 class=\"subtitle\">Wyposa\u017Cenie:</h3>\n                        <table>\n                            <tr>\n                                <td class=\"equipment\">dr\u0105\u017Cek</td>\n                                <td class=\"availability ").concat(spot.equipment.bar, "\">").concat(spot.equipment.bar, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">szeroki dr\u0105\u017Cek</td>\n                                <td class=\"availability ").concat(spot.equipment.highWideBar, "\">").concat(spot.equipment.highWideBar, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">niski dr\u0105\u017Cek</td>\n                                <td class=\"availability ").concat(spot.equipment.lowBar, "\">").concat(spot.equipment.lowBar, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">por\u0119cze r\xF3wnoleg\u0142e</td>\n                                <td class=\"availability ").concat(spot.equipment.parallelBars, "\">").concat(spot.equipment.parallelBars, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">drabinka</td>\n                                <td class=\"availability ").concat(spot.equipment.ladder, "\">").concat(spot.equipment.ladder, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">drabinka pozioma</td>\n                                <td class=\"availability ").concat(spot.equipment.horizontalLadder, "\">").concat(spot.equipment.horizontalLadder, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">pionowa rurka</td>\n                                <td class=\"availability ").concat(spot.equipment.pipe, "\">").concat(spot.equipment.pipe, "</td>\n                            </tr>\n                        </table>\n                    </div>\n                    <div class=\"info-part\">\n                        <h2 class=\"subtitle\">Nawierzchnia:<span class=text>").concat(spot.surface, "</span></h2>\n                    </div>\n                </div>\n            </div>\n            ");
}

exports.createSpotInfo = createSpotInfo;
},{}],"KRyg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWSpot = exports.Equipment = exports.Location = void 0;

var Location =
/** @class */
function () {
  function Location(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }

  return Location;
}();

exports.Location = Location;

var Equipment =
/** @class */
function () {
  function Equipment(bar, highWideBar, lowBar, parallelBars, ladder, horizontalLadder, pipe) {
    this.bar = bar;
    this.highWideBar = highWideBar;
    this.lowBar = lowBar;
    this.parallelBars = parallelBars;
    this.ladder = ladder;
    this.horizontalLadder = horizontalLadder;
    this.pipe = pipe;
  }

  return Equipment;
}();

exports.Equipment = Equipment;

var SWSpot =
/** @class */
function () {
  function SWSpot(placeName, location, area, surface, equipment, imgSrc) {
    this.placeName = placeName;
    this.location = location;
    this.area = area;
    this.surface = surface;
    this.equipment = equipment;
    this.imgSrc = imgSrc;
  }

  SWSpot.prototype.markerContent = function () {
    return "<h1 class=\"label\">".concat(this.placeName, "</h1>");
  };

  return SWSpot;
}();

exports.SWSpot = SWSpot;
},{}],"QCba":[function(require,module,exports) {
"use strict"; ///<reference types="@types/google.maps"/>

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CustomMap_1 = require("./CustomMap");

var HTMLTemplate_1 = require("./HTMLTemplate");

var SWSpot_1 = require("./SWSpot");

var spots = [new SWSpot_1.SWSpot("Osiedle Leśne", new SWSpot_1.Location(52.254343, 20.933834), "Bemowo", "piasek", new SWSpot_1.Equipment("o", "o", "o", "o", "o", "o", "o"), "https://www.bydgoszcz.pl/fileadmin/_processed_/3/6/csm_flisy_street_fe874f1935.jpg")];
var customMap = new CustomMap_1.CustomMap("root", spots[0]);
var query = document.getElementById("query");
console.log(spots);
spots.forEach(function (spot) {
  customMap.addMarker(spot);
  var spotInfo = (0, HTMLTemplate_1.createSpotInfo)(spot);
  query.innerHTML = spotInfo;
});
},{"./CustomMap":"MtoT","./HTMLTemplate":"cXf9","./SWSpot":"KRyg"}]},{},["QCba"], null)
//# sourceMappingURL=googleMaps%20-%20Copy.3569396e.js.map