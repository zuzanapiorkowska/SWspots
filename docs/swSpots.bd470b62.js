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
  function CustomMap(divId, objectToMark, mapZoom) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: mapZoom,
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
        content: objectToMark.markerContent(objectToMark)
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
  return "\n<div class=\"info-box\">\n                <div class=\"left-info\">\n                    <h1 class=\"spot-name\">".concat(spot.placeName, "</h1>\n                    <div class=\"photo-container\">\n                    <img class=\"photo\" src=").concat(spot.imgSrc, ">\n                    </div>\n                </div>\n                <div class=\"right-info\">\n                    <div class=\"info-part equipment\">\n                        <h3 class=\"subtitle\">Wyposa\u017Cenie:</h3>\n                        <table>\n                            <tr>\n                                <td class=\"equipment\">dr\u0105\u017Cek</td>\n                                <td class=\"availability ").concat(spot.equipment.bar, "\">").concat(spot.equipment.bar, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">szeroki dr\u0105\u017Cek</td>\n                                <td class=\"availability ").concat(spot.equipment.highWideBar, "\">").concat(spot.equipment.highWideBar, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">niski dr\u0105\u017Cek</td>\n                                <td class=\"availability ").concat(spot.equipment.lowBar, "\">").concat(spot.equipment.lowBar, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">por\u0119cze r\xF3wnoleg\u0142e</td>\n                                <td class=\"availability ").concat(spot.equipment.parallelBars, "\">").concat(spot.equipment.parallelBars, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">niskie por\u0119cze r\xF3wnoleg\u0142e</td>\n                                <td class=\"availability ").concat(spot.equipment.lowParallelBars, "\">").concat(spot.equipment.lowParallelBars, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">drabinka</td>\n                                <td class=\"availability ").concat(spot.equipment.ladder, "\">").concat(spot.equipment.ladder, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">drabinka pozioma</td>\n                                <td class=\"availability ").concat(spot.equipment.horizontalLadder, "\">").concat(spot.equipment.horizontalLadder, "</td>\n                            </tr>\n                            <tr>\n                                <td class=\"equipment\">pionowa rurka</td>\n                                <td class=\"availability ").concat(spot.equipment.pipe, "\">").concat(spot.equipment.pipe, "</td>\n                            </tr>\n                            <tr class=\"last\">\n                                <td class=\"equipment\">ko\u0142a gimnastyczne</td>\n                                <td class=\"availability ").concat(spot.equipment.rings, "\">").concat(spot.equipment.rings, "</td>\n                            </tr>\n                        </table>\n                    </div>\n                    <div class=\"info-part surface\">\n                        <h3 class=\"subtitle\">Nawierzchnia:</h3><span class=text>").concat(spot.surface, "</span>\n                    </div>\n                </div>\n            </div>\n            ");
}

exports.createSpotInfo = createSpotInfo;
},{}],"KRyg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWSpot = exports.Equipment = exports.Location = void 0;

var HTMLTemplate_1 = require("./HTMLTemplate");

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
  function Equipment(bar, highWideBar, lowBar, parallelBars, lowParallelBars, ladder, horizontalLadder, pipe, rings) {
    this.bar = bar;
    this.highWideBar = highWideBar;
    this.lowBar = lowBar;
    this.parallelBars = parallelBars;
    this.lowParallelBars = lowParallelBars;
    this.ladder = ladder;
    this.horizontalLadder = horizontalLadder;
    this.pipe = pipe;
    this.rings = rings;
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

  SWSpot.prototype.markerContent = function (spot) {
    // return `<div><h1 class="label">${this.placeName}</h1></div>`;
    return (0, HTMLTemplate_1.createSpotInfo)(spot);
  };

  return SWSpot;
}();

exports.SWSpot = SWSpot;
},{"./HTMLTemplate":"cXf9"}],"FId5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spots = void 0;

var SWSpot_1 = require("./SWSpot");

exports.spots = [new SWSpot_1.SWSpot("Osiedle Leśne", new SWSpot_1.Location(52.254343, 20.933834), "Bemowo", "piasek", new SWSpot_1.Equipment("o", "o", "o", "o", "o", "o", "o", "o", "x"), "https://www.bydgoszcz.pl/fileadmin/_processed_/3/6/csm_flisy_street_fe874f1935.jpg"), new SWSpot_1.SWSpot("Ratusz Bemowo", new SWSpot_1.Location(52.23855969507622, 20.915941942381), "Bemowo", "guma", new SWSpot_1.Equipment("o", "o", "x", "o", "o", "o", "o", "o", "o"), "https://lh5.googleusercontent.com/p/AF1QipPioz1n-INN86SUFiAu-z9cjcYaUWcAfub-Inz5=w408-h261-k-no"), new SWSpot_1.SWSpot("Park Sowińskiego", new SWSpot_1.Location(52.23855969507622, 20.915941942381), "Wola", "żwir", new SWSpot_1.Equipment("o", "o", "o", "o", "o", "o", "o", "x", "x"), "https://tvn24.pl/tvnwarszawa/najnowsze/cdn-zdjecie-xyq8lb-park-powstancow-warszawy-593352/8407d3e1-2a85-42bb-ac17-ee40e2773584.jpg")];
},{"./SWSpot":"KRyg"}],"D87I":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalizeFirstLetter = void 0;

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

exports.capitalizeFirstLetter = capitalizeFirstLetter;
},{}],"QCba":[function(require,module,exports) {
"use strict"; ///<reference types="@types/google.maps"/>

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showNewMap = exports.showSpots = void 0;

var CustomMap_1 = require("./CustomMap");

var HTMLTemplate_1 = require("./HTMLTemplate");

var spots_1 = require("./spots");

var CapitalizeFirstLetter_1 = require("./CapitalizeFirstLetter");

var mapRoot = document.getElementById("root");
var customMap = new CustomMap_1.CustomMap("root", spots_1.spots[0], 11);
var query = document.getElementById("query");
var areaInput = document.getElementById("input");
areaInput.addEventListener("change", function () {
  query.innerHTML = "";
  spots_1.spots.forEach(function (spot) {
    var querySpots = [];
    if (spot.area === (0, CapitalizeFirstLetter_1.capitalizeFirstLetter)(areaInput.value)) querySpots.push(spot);
    showSpots(querySpots);
  });
  areaInput.value = "";
});

function showSpots(spots) {
  spots.forEach(function (spot) {
    customMap.addMarker(spot);
    var spotInfo = (0, HTMLTemplate_1.createSpotInfo)(spot);
    var spotEl = document.createElement("div");
    spotEl.innerHTML = spotInfo;
    query.appendChild(spotEl);
  });
}

exports.showSpots = showSpots;
showSpots(spots_1.spots);
var spotsNames = document.querySelectorAll(".spot-name");
spotsNames.forEach(function (spotName) {
  spotName.addEventListener("click", function () {
    showNewMap(spotName);
  });
});

function showNewMap(spotName) {
  mapRoot.innerHTML = "";
  var clickedSpot = spots_1.spots.find(function (spot) {
    return spot.placeName === spotName.textContent;
  });
  var customMap = new CustomMap_1.CustomMap("root", clickedSpot, 18);
  customMap.addMarker(clickedSpot);
}

exports.showNewMap = showNewMap;
},{"./CustomMap":"MtoT","./HTMLTemplate":"cXf9","./spots":"FId5","./CapitalizeFirstLetter":"D87I"}]},{},["QCba"], null)
//# sourceMappingURL=swSpots.bd470b62.js.map