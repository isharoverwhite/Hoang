/*!!
 * Matomo - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if (typeof _paq !== "object") {
  _paq = [];
}
if (typeof window.Matomo !== "object") {
  window.Matomo = window.Piwik = (function () {
    var r,
      b = {},
      z = {},
      J = document,
      g = navigator,
      ab = screen,
      W = window,
      h =
        W.performance ||
        W.mozPerformance ||
        W.msPerformance ||
        W.webkitPerformance,
      t = W.encodeURIComponent,
      V = W.decodeURIComponent,
      k = unescape,
      L = [],
      H,
      u,
      al = [],
      y = 0,
      af = 0,
      X = 0,
      m = false;
    function p(at) {
      try {
        return V(at);
      } catch (au) {
        return unescape(at);
      }
    }
    function M(au) {
      var at = typeof au;
      return at !== "undefined";
    }
    function C(at) {
      return typeof at === "function";
    }
    function Z(at) {
      return typeof at === "object";
    }
    function x(at) {
      return typeof at === "string" || at instanceof String;
    }
    function ak(at) {
      return typeof at === "number" || at instanceof Number;
    }
    function ac(at) {
      return M(at) && (ak(at) || (x(at) && at.length));
    }
    function D(au) {
      if (!au) {
        return true;
      }
      var at;
      for (at in au) {
        if (Object.prototype.hasOwnProperty.call(au, at)) {
          return false;
        }
      }
      return true;
    }
    function ao(at) {
      var au = typeof console;
      if (au !== "undefined" && console && console.error) {
        console.error(at);
      }
    }
    function aj() {
      var ay, ax, aA, au, at;
      for (ay = 0; ay < arguments.length; ay += 1) {
        at = null;
        if (arguments[ay] && arguments[ay].slice) {
          at = arguments[ay].slice();
        }
        au = arguments[ay];
        aA = au.shift();
        var az, av;
        var aw = x(aA) && aA.indexOf("::") > 0;
        if (aw) {
          az = aA.split("::");
          av = az[0];
          aA = az[1];
          if ("object" === typeof u[av] && "function" === typeof u[av][aA]) {
            u[av][aA].apply(u[av], au);
          } else {
            if (at) {
              al.push(at);
            }
          }
        } else {
          for (ax = 0; ax < L.length; ax++) {
            if (x(aA)) {
              av = L[ax];
              var aB = aA.indexOf(".") > 0;
              if (aB) {
                az = aA.split(".");
                if (av && "object" === typeof av[az[0]]) {
                  av = av[az[0]];
                  aA = az[1];
                } else {
                  if (at) {
                    al.push(at);
                    break;
                  }
                }
              }
              if (av[aA]) {
                av[aA].apply(av, au);
              } else {
                var aC =
                  "The method '" +
                  aA +
                  '\' was not found in "_paq" variable.  Please have a look at the Matomo tracker documentation: https://developer.matomo.org/api-reference/tracking-javascript';
                ao(aC);
                if (!aB) {
                  throw new TypeError(aC);
                }
              }
              if (aA === "addTracker") {
                break;
              }
              if (aA === "setTrackerUrl" || aA === "setSiteId") {
                break;
              }
            } else {
              aA.apply(L[ax], au);
            }
          }
        }
      }
    }
    function ar(aw, av, au, at) {
      if (aw.addEventListener) {
        aw.addEventListener(av, au, at);
        return true;
      }
      if (aw.attachEvent) {
        return aw.attachEvent("on" + av, au);
      }
      aw["on" + av] = au;
    }
    function n(at) {
      if (J.readyState === "complete") {
        at();
      } else {
        if (W.addEventListener) {
          W.addEventListener("load", at, false);
        } else {
          if (W.attachEvent) {
            W.attachEvent("onload", at);
          }
        }
      }
    }
    function q(aw) {
      var at = false;
      if (J.attachEvent) {
        at = J.readyState === "complete";
      } else {
        at = J.readyState !== "loading";
      }
      if (at) {
        aw();
        return;
      }
      var av;
      if (J.addEventListener) {
        ar(J, "DOMContentLoaded", function au() {
          J.removeEventListener("DOMContentLoaded", au, false);
          if (!at) {
            at = true;
            aw();
          }
        });
      } else {
        if (J.attachEvent) {
          J.attachEvent("onreadystatechange", function au() {
            if (J.readyState === "complete") {
              J.detachEvent("onreadystatechange", au);
              if (!at) {
                at = true;
                aw();
              }
            }
          });
          if (J.documentElement.doScroll && W === W.top) {
            (function au() {
              if (!at) {
                try {
                  J.documentElement.doScroll("left");
                } catch (ax) {
                  setTimeout(au, 0);
                  return;
                }
                at = true;
                aw();
              }
            })();
          }
        }
      }
      ar(
        W,
        "load",
        function () {
          if (!at) {
            at = true;
            aw();
          }
        },
        false
      );
    }
    function ag(au, az, aA) {
      if (!au) {
        return "";
      }
      var at = "",
        aw,
        av,
        ax,
        ay;
      for (aw in b) {
        if (Object.prototype.hasOwnProperty.call(b, aw)) {
          ay = b[aw] && "function" === typeof b[aw][au];
          if (ay) {
            av = b[aw][au];
            ax = av(az || {}, aA);
            if (ax) {
              at += ax;
            }
          }
        }
      }
      return at;
    }
    function am(au) {
      var at;
      m = true;
      ag("unload");
      at = new Date();
      var av = at.getTimeAlias();
      if (r - av > 3000) {
        r = av + 3000;
      }
      if (r) {
        do {
          at = new Date();
        } while (at.getTimeAlias() < r);
      }
    }
    function o(av, au) {
      var at = J.createElement("script");
      at.type = "text/javascript";
      at.src = av;
      if (at.readyState) {
        at.onreadystatechange = function () {
          var aw = this.readyState;
          if (aw === "loaded" || aw === "complete") {
            at.onreadystatechange = null;
            au();
          }
        };
      } else {
        at.onload = au;
      }
      J.getElementsByTagName("head")[0].appendChild(at);
    }
    function N() {
      var at = "";
      try {
        at = W.top.document.referrer;
      } catch (av) {
        if (W.parent) {
          try {
            at = W.parent.document.referrer;
          } catch (au) {
            at = "";
          }
        }
      }
      if (at === "") {
        at = J.referrer;
      }
      return at;
    }
    function s(at) {
      var av = new RegExp("^([a-z]+):"),
        au = av.exec(at);
      return au ? au[1] : null;
    }
    function d(at) {
      var av = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
        au = av.exec(at);
      return au ? au[1] : at;
    }
    function G(at) {
      return /^[0-9][0-9]*(\.[0-9]+)?$/.test(at);
    }
    function Q(av, aw) {
      var at = {},
        au;
      for (au in av) {
        if (av.hasOwnProperty(au) && aw(av[au])) {
          at[au] = av[au];
        }
      }
      return at;
    }
    function B(av) {
      var at = {},
        au;
      for (au in av) {
        if (av.hasOwnProperty(au)) {
          if (G(av[au])) {
            at[au] = Math.round(av[au]);
          } else {
            throw new Error(
              'Parameter "' +
                au +
                '" provided value "' +
                av[au] +
                '" is not valid. Please provide a numeric value.'
            );
          }
        }
      }
      return at;
    }
    function l(au) {
      var av = "",
        at;
      for (at in au) {
        if (au.hasOwnProperty(at)) {
          av += "&" + t(at) + "=" + t(au[at]);
        }
      }
      return av;
    }
    function an(au, at) {
      au = String(au);
      return au.lastIndexOf(at, 0) === 0;
    }
    function U(au, at) {
      au = String(au);
      return au.indexOf(at, au.length - at.length) !== -1;
    }
    function A(au, at) {
      au = String(au);
      return au.indexOf(at) !== -1;
    }
    function f(au, at) {
      au = String(au);
      return au.substr(0, au.length - at);
    }
    function I(aw, av, ay) {
      aw = String(aw);
      if (!ay) {
        ay = "";
      }
      var at = aw.indexOf("#");
      var az = aw.length;
      if (at === -1) {
        at = az;
      }
      var ax = aw.substr(0, at);
      var au = aw.substr(at, az - at);
      if (ax.indexOf("?") === -1) {
        ax += "?";
      } else {
        if (!U(ax, "?")) {
          ax += "&";
        }
      }
      return ax + t(av) + "=" + t(ay) + au;
    }
    function j(au, av) {
      au = String(au);
      if (
        au.indexOf("?" + av + "=") === -1 &&
        au.indexOf("&" + av + "=") === -1
      ) {
        return au;
      }
      var aw = au.indexOf("?");
      if (aw === -1) {
        return au;
      }
      var at = au.substr(aw + 1);
      var aA = au.substr(0, aw);
      if (at) {
        var aB = "";
        var aD = at.indexOf("#");
        if (aD !== -1) {
          aB = at.substr(aD + 1);
          at = at.substr(0, aD);
        }
        var ax;
        var az = at.split("&");
        var ay = az.length - 1;
        for (ay; ay >= 0; ay--) {
          ax = az[ay].split("=")[0];
          if (ax === av) {
            az.splice(ay, 1);
          }
        }
        var aC = az.join("&");
        if (aC) {
          aA = aA + "?" + aC;
        }
        if (aB) {
          aA += "#" + aB;
        }
      }
      return aA;
    }
    function e(av, au) {
      var at = "[\\?&#]" + au + "=([^&#]*)";
      var ax = new RegExp(at);
      var aw = ax.exec(av);
      return aw ? p(aw[1]) : "";
    }
    function a(at) {
      if (at && String(at) === at) {
        return at.replace(/^\s+|\s+$/g, "");
      }
      return at;
    }
    function F(at) {
      return unescape(t(at));
    }
    function aq(aI) {
      var av = function (aO, aN) {
          return (aO << aN) | (aO >>> (32 - aN));
        },
        aJ = function (aQ) {
          var aO = "",
            aP,
            aN;
          for (aP = 7; aP >= 0; aP--) {
            aN = (aQ >>> (aP * 4)) & 15;
            aO += aN.toString(16);
          }
          return aO;
        },
        ay,
        aL,
        aK,
        au = [],
        aC = 1732584193,
        aA = 4023233417,
        az = 2562383102,
        ax = 271733878,
        aw = 3285377520,
        aH,
        aG,
        aF,
        aE,
        aD,
        aM,
        at,
        aB = [];
      aI = F(aI);
      at = aI.length;
      for (aL = 0; aL < at - 3; aL += 4) {
        aK =
          (aI.charCodeAt(aL) << 24) |
          (aI.charCodeAt(aL + 1) << 16) |
          (aI.charCodeAt(aL + 2) << 8) |
          aI.charCodeAt(aL + 3);
        aB.push(aK);
      }
      switch (at & 3) {
        case 0:
          aL = 2147483648;
          break;
        case 1:
          aL = (aI.charCodeAt(at - 1) << 24) | 8388608;
          break;
        case 2:
          aL =
            (aI.charCodeAt(at - 2) << 24) |
            (aI.charCodeAt(at - 1) << 16) |
            32768;
          break;
        case 3:
          aL =
            (aI.charCodeAt(at - 3) << 24) |
            (aI.charCodeAt(at - 2) << 16) |
            (aI.charCodeAt(at - 1) << 8) |
            128;
          break;
      }
      aB.push(aL);
      while ((aB.length & 15) !== 14) {
        aB.push(0);
      }
      aB.push(at >>> 29);
      aB.push((at << 3) & 4294967295);
      for (ay = 0; ay < aB.length; ay += 16) {
        for (aL = 0; aL < 16; aL++) {
          au[aL] = aB[ay + aL];
        }
        for (aL = 16; aL <= 79; aL++) {
          au[aL] = av(au[aL - 3] ^ au[aL - 8] ^ au[aL - 14] ^ au[aL - 16], 1);
        }
        aH = aC;
        aG = aA;
        aF = az;
        aE = ax;
        aD = aw;
        for (aL = 0; aL <= 19; aL++) {
          aM =
            (av(aH, 5) + ((aG & aF) | (~aG & aE)) + aD + au[aL] + 1518500249) &
            4294967295;
          aD = aE;
          aE = aF;
          aF = av(aG, 30);
          aG = aH;
          aH = aM;
        }
        for (aL = 20; aL <= 39; aL++) {
          aM =
            (av(aH, 5) + (aG ^ aF ^ aE) + aD + au[aL] + 1859775393) &
            4294967295;
          aD = aE;
          aE = aF;
          aF = av(aG, 30);
          aG = aH;
          aH = aM;
        }
        for (aL = 40; aL <= 59; aL++) {
          aM =
            (av(aH, 5) +
              ((aG & aF) | (aG & aE) | (aF & aE)) +
              aD +
              au[aL] +
              2400959708) &
            4294967295;
          aD = aE;
          aE = aF;
          aF = av(aG, 30);
          aG = aH;
          aH = aM;
        }
        for (aL = 60; aL <= 79; aL++) {
          aM =
            (av(aH, 5) + (aG ^ aF ^ aE) + aD + au[aL] + 3395469782) &
            4294967295;
          aD = aE;
          aE = aF;
          aF = av(aG, 30);
          aG = aH;
          aH = aM;
        }
        aC = (aC + aH) & 4294967295;
        aA = (aA + aG) & 4294967295;
        az = (az + aF) & 4294967295;
        ax = (ax + aE) & 4294967295;
        aw = (aw + aD) & 4294967295;
      }
      aM = aJ(aC) + aJ(aA) + aJ(az) + aJ(ax) + aJ(aw);
      return aM.toLowerCase();
    }
    function ae(av, at, au) {
      if (!av) {
        av = "";
      }
      if (!at) {
        at = "";
      }
      if (av === "translate.googleusercontent.com") {
        if (au === "") {
          au = at;
        }
        at = e(at, "u");
        av = d(at);
      } else {
        if (
          av === "cc.bingj.com" ||
          av === "webcache.googleusercontent.com" ||
          av.slice(0, 5) === "74.6."
        ) {
          at = J.links[0].href;
          av = d(at);
        }
      }
      return [av, at, au];
    }
    function O(au) {
      var at = au.length;
      if (au.charAt(--at) === ".") {
        au = au.slice(0, at);
      }
      if (au.slice(0, 2) === "*.") {
        au = au.slice(1);
      }
      if (au.indexOf("/") !== -1) {
        au = au.substr(0, au.indexOf("/"));
      }
      return au;
    }
    function ap(au) {
      au = au && au.text ? au.text : au;
      if (!x(au)) {
        var at = J.getElementsByTagName("title");
        if (at && M(at[0])) {
          au = at[0].text;
        }
      }
      return au;
    }
    function S(at) {
      if (!at) {
        return [];
      }
      if (!M(at.children) && M(at.childNodes)) {
        return at.children;
      }
      if (M(at.children)) {
        return at.children;
      }
      return [];
    }
    function Y(au, at) {
      if (!au || !at) {
        return false;
      }
      if (au.contains) {
        return au.contains(at);
      }
      if (au === at) {
        return true;
      }
      if (au.compareDocumentPosition) {
        return !!(au.compareDocumentPosition(at) & 16);
      }
      return false;
    }
    function P(av, aw) {
      if (av && av.indexOf) {
        return av.indexOf(aw);
      }
      if (!M(av) || av === null) {
        return -1;
      }
      if (!av.length) {
        return -1;
      }
      var at = av.length;
      if (at === 0) {
        return -1;
      }
      var au = 0;
      while (au < at) {
        if (av[au] === aw) {
          return au;
        }
        au++;
      }
      return -1;
    }
    function i(av) {
      if (!av) {
        return false;
      }
      function at(ax, ay) {
        if (W.getComputedStyle) {
          return J.defaultView.getComputedStyle(ax, null)[ay];
        }
        if (ax.currentStyle) {
          return ax.currentStyle[ay];
        }
      }
      function aw(ax) {
        ax = ax.parentNode;
        while (ax) {
          if (ax === J) {
            return true;
          }
          ax = ax.parentNode;
        }
        return false;
      }
      function au(az, aF, ax, aC, aA, aD, aB) {
        var ay = az.parentNode,
          aE = 1;
        if (!aw(az)) {
          return false;
        }
        if (9 === ay.nodeType) {
          return true;
        }
        if (
          "0" === at(az, "opacity") ||
          "none" === at(az, "display") ||
          "hidden" === at(az, "visibility")
        ) {
          return false;
        }
        if (!M(aF) || !M(ax) || !M(aC) || !M(aA) || !M(aD) || !M(aB)) {
          aF = az.offsetTop;
          aA = az.offsetLeft;
          aC = aF + az.offsetHeight;
          ax = aA + az.offsetWidth;
          aD = az.offsetWidth;
          aB = az.offsetHeight;
        }
        if (
          av === az &&
          (0 === aB || 0 === aD) &&
          "hidden" === at(az, "overflow")
        ) {
          return false;
        }
        if (ay) {
          if (
            "hidden" === at(ay, "overflow") ||
            "scroll" === at(ay, "overflow")
          ) {
            if (
              aA + aE > ay.offsetWidth + ay.scrollLeft ||
              aA + aD - aE < ay.scrollLeft ||
              aF + aE > ay.offsetHeight + ay.scrollTop ||
              aF + aB - aE < ay.scrollTop
            ) {
              return false;
            }
          }
          if (az.offsetParent === ay) {
            aA += ay.offsetLeft;
            aF += ay.offsetTop;
          }
          return au(ay, aF, ax, aC, aA, aD, aB);
        }
        return true;
      }
      return au(av);
    }
    var ai = {
      htmlCollectionToArray: function (av) {
        var at = [],
          au;
        if (!av || !av.length) {
          return at;
        }
        for (au = 0; au < av.length; au++) {
          at.push(av[au]);
        }
        return at;
      },
      find: function (at) {
        if (!document.querySelectorAll || !at) {
          return [];
        }
        var au = document.querySelectorAll(at);
        return this.htmlCollectionToArray(au);
      },
      findMultiple: function (av) {
        if (!av || !av.length) {
          return [];
        }
        var au, aw;
        var at = [];
        for (au = 0; au < av.length; au++) {
          aw = this.find(av[au]);
          at = at.concat(aw);
        }
        at = this.makeNodesUnique(at);
        return at;
      },
      findNodesByTagName: function (au, at) {
        if (!au || !at || !au.getElementsByTagName) {
          return [];
        }
        var av = au.getElementsByTagName(at);
        return this.htmlCollectionToArray(av);
      },
      makeNodesUnique: function (at) {
        var ay = [].concat(at);
        at.sort(function (aA, az) {
          if (aA === az) {
            return 0;
          }
          var aC = P(ay, aA);
          var aB = P(ay, az);
          if (aC === aB) {
            return 0;
          }
          return aC > aB ? -1 : 1;
        });
        if (at.length <= 1) {
          return at;
        }
        var au = 0;
        var aw = 0;
        var ax = [];
        var av;
        av = at[au++];
        while (av) {
          if (av === at[au]) {
            aw = ax.push(au);
          }
          av = at[au++] || null;
        }
        while (aw--) {
          at.splice(ax[aw], 1);
        }
        return at;
      },
      getAttributeValueFromNode: function (ax, av) {
        if (!this.hasNodeAttribute(ax, av)) {
          return;
        }
        if (ax && ax.getAttribute) {
          return ax.getAttribute(av);
        }
        if (!ax || !ax.attributes) {
          return;
        }
        var aw = typeof ax.attributes[av];
        if ("undefined" === aw) {
          return;
        }
        if (ax.attributes[av].value) {
          return ax.attributes[av].value;
        }
        if (ax.attributes[av].nodeValue) {
          return ax.attributes[av].nodeValue;
        }
        var au;
        var at = ax.attributes;
        if (!at) {
          return;
        }
        for (au = 0; au < at.length; au++) {
          if (at[au].nodeName === av) {
            return at[au].nodeValue;
          }
        }
        return null;
      },
      hasNodeAttributeWithValue: function (au, at) {
        var av = this.getAttributeValueFromNode(au, at);
        return !!av;
      },
      hasNodeAttribute: function (av, at) {
        if (av && av.hasAttribute) {
          return av.hasAttribute(at);
        }
        if (av && av.attributes) {
          var au = typeof av.attributes[at];
          return "undefined" !== au;
        }
        return false;
      },
      hasNodeCssClass: function (av, at) {
        if (av && at && av.className) {
          var au =
            typeof av.className === "string" ? av.className.split(" ") : [];
          if (-1 !== P(au, at)) {
            return true;
          }
        }
        return false;
      },
      findNodesHavingAttribute: function (ax, av, at) {
        if (!at) {
          at = [];
        }
        if (!ax || !av) {
          return at;
        }
        var aw = S(ax);
        if (!aw || !aw.length) {
          return at;
        }
        var au, ay;
        for (au = 0; au < aw.length; au++) {
          ay = aw[au];
          if (this.hasNodeAttribute(ay, av)) {
            at.push(ay);
          }
          at = this.findNodesHavingAttribute(ay, av, at);
        }
        return at;
      },
      findFirstNodeHavingAttribute: function (av, au) {
        if (!av || !au) {
          return;
        }
        if (this.hasNodeAttribute(av, au)) {
          return av;
        }
        var at = this.findNodesHavingAttribute(av, au);
        if (at && at.length) {
          return at[0];
        }
      },
      findFirstNodeHavingAttributeWithValue: function (aw, av) {
        if (!aw || !av) {
          return;
        }
        if (this.hasNodeAttributeWithValue(aw, av)) {
          return aw;
        }
        var at = this.findNodesHavingAttribute(aw, av);
        if (!at || !at.length) {
          return;
        }
        var au;
        for (au = 0; au < at.length; au++) {
          if (this.getAttributeValueFromNode(at[au], av)) {
            return at[au];
          }
        }
      },
      findNodesHavingCssClass: function (ax, aw, at) {
        if (!at) {
          at = [];
        }
        if (!ax || !aw) {
          return at;
        }
        if (ax.getElementsByClassName) {
          var ay = ax.getElementsByClassName(aw);
          return this.htmlCollectionToArray(ay);
        }
        var av = S(ax);
        if (!av || !av.length) {
          return [];
        }
        var au, az;
        for (au = 0; au < av.length; au++) {
          az = av[au];
          if (this.hasNodeCssClass(az, aw)) {
            at.push(az);
          }
          at = this.findNodesHavingCssClass(az, aw, at);
        }
        return at;
      },
      findFirstNodeHavingClass: function (av, au) {
        if (!av || !au) {
          return;
        }
        if (this.hasNodeCssClass(av, au)) {
          return av;
        }
        var at = this.findNodesHavingCssClass(av, au);
        if (at && at.length) {
          return at[0];
        }
      },
      isLinkElement: function (au) {
        if (!au) {
          return false;
        }
        var at = String(au.nodeName).toLowerCase();
        var aw = ["a", "area"];
        var av = P(aw, at);
        return av !== -1;
      },
      setAnyAttribute: function (au, at, av) {
        if (!au || !at) {
          return;
        }
        if (au.setAttribute) {
          au.setAttribute(at, av);
        } else {
          au[at] = av;
        }
      },
    };
    var w = {
      CONTENT_ATTR: "data-track-content",
      CONTENT_CLASS: "matomoTrackContent",
      LEGACY_CONTENT_CLASS: "piwikTrackContent",
      CONTENT_NAME_ATTR: "data-content-name",
      CONTENT_PIECE_ATTR: "data-content-piece",
      CONTENT_PIECE_CLASS: "matomoContentPiece",
      LEGACY_CONTENT_PIECE_CLASS: "piwikContentPiece",
      CONTENT_TARGET_ATTR: "data-content-target",
      CONTENT_TARGET_CLASS: "matomoContentTarget",
      LEGACY_CONTENT_TARGET_CLASS: "piwikContentTarget",
      CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
      CONTENT_IGNOREINTERACTION_CLASS: "matomoContentIgnoreInteraction",
      LEGACY_CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
      location: undefined,
      findContentNodes: function () {
        var au = "." + this.CONTENT_CLASS;
        var av = "." + this.LEGACY_CONTENT_CLASS;
        var at = "[" + this.CONTENT_ATTR + "]";
        var aw = ai.findMultiple([au, av, at]);
        return aw;
      },
      findContentNodesWithinNode: function (aw) {
        if (!aw) {
          return [];
        }
        var au = ai.findNodesHavingCssClass(aw, this.CONTENT_CLASS);
        au = ai.findNodesHavingCssClass(aw, this.LEGACY_CONTENT_CLASS, au);
        var at = ai.findNodesHavingAttribute(aw, this.CONTENT_ATTR);
        if (at && at.length) {
          var av;
          for (av = 0; av < at.length; av++) {
            au.push(at[av]);
          }
        }
        if (ai.hasNodeAttribute(aw, this.CONTENT_ATTR)) {
          au.push(aw);
        } else {
          if (ai.hasNodeCssClass(aw, this.CONTENT_CLASS)) {
            au.push(aw);
          } else {
            if (ai.hasNodeCssClass(aw, this.LEGACY_CONTENT_CLASS)) {
              au.push(aw);
            }
          }
        }
        au = ai.makeNodesUnique(au);
        return au;
      },
      findParentContentNode: function (au) {
        if (!au) {
          return;
        }
        var av = au;
        var at = 0;
        while (av && av !== J && av.parentNode) {
          if (ai.hasNodeAttribute(av, this.CONTENT_ATTR)) {
            return av;
          }
          if (ai.hasNodeCssClass(av, this.CONTENT_CLASS)) {
            return av;
          }
          if (ai.hasNodeCssClass(av, this.LEGACY_CONTENT_CLASS)) {
            return av;
          }
          av = av.parentNode;
          if (at > 1000) {
            break;
          }
          at++;
        }
      },
      findPieceNode: function (au) {
        var at;
        at = ai.findFirstNodeHavingAttribute(au, this.CONTENT_PIECE_ATTR);
        if (!at) {
          at = ai.findFirstNodeHavingClass(au, this.CONTENT_PIECE_CLASS);
        }
        if (!at) {
          at = ai.findFirstNodeHavingClass(au, this.LEGACY_CONTENT_PIECE_CLASS);
        }
        if (at) {
          return at;
        }
        return au;
      },
      findTargetNodeNoDefault: function (at) {
        if (!at) {
          return;
        }
        var au = ai.findFirstNodeHavingAttributeWithValue(
          at,
          this.CONTENT_TARGET_ATTR
        );
        if (au) {
          return au;
        }
        au = ai.findFirstNodeHavingAttribute(at, this.CONTENT_TARGET_ATTR);
        if (au) {
          return au;
        }
        au = ai.findFirstNodeHavingClass(at, this.CONTENT_TARGET_CLASS);
        if (au) {
          return au;
        }
        au = ai.findFirstNodeHavingClass(at, this.LEGACY_CONTENT_TARGET_CLASS);
        if (au) {
          return au;
        }
      },
      findTargetNode: function (at) {
        var au = this.findTargetNodeNoDefault(at);
        if (au) {
          return au;
        }
        return at;
      },
      findContentName: function (au) {
        if (!au) {
          return;
        }
        var ax = ai.findFirstNodeHavingAttributeWithValue(
          au,
          this.CONTENT_NAME_ATTR
        );
        if (ax) {
          return ai.getAttributeValueFromNode(ax, this.CONTENT_NAME_ATTR);
        }
        var at = this.findContentPiece(au);
        if (at) {
          return this.removeDomainIfIsInLink(at);
        }
        if (ai.hasNodeAttributeWithValue(au, "title")) {
          return ai.getAttributeValueFromNode(au, "title");
        }
        var av = this.findPieceNode(au);
        if (ai.hasNodeAttributeWithValue(av, "title")) {
          return ai.getAttributeValueFromNode(av, "title");
        }
        var aw = this.findTargetNode(au);
        if (ai.hasNodeAttributeWithValue(aw, "title")) {
          return ai.getAttributeValueFromNode(aw, "title");
        }
      },
      findContentPiece: function (au) {
        if (!au) {
          return;
        }
        var aw = ai.findFirstNodeHavingAttributeWithValue(
          au,
          this.CONTENT_PIECE_ATTR
        );
        if (aw) {
          return ai.getAttributeValueFromNode(aw, this.CONTENT_PIECE_ATTR);
        }
        var at = this.findPieceNode(au);
        var av = this.findMediaUrlInNode(at);
        if (av) {
          return this.toAbsoluteUrl(av);
        }
      },
      findContentTarget: function (av) {
        if (!av) {
          return;
        }
        var aw = this.findTargetNode(av);
        if (ai.hasNodeAttributeWithValue(aw, this.CONTENT_TARGET_ATTR)) {
          return ai.getAttributeValueFromNode(aw, this.CONTENT_TARGET_ATTR);
        }
        var au;
        if (ai.hasNodeAttributeWithValue(aw, "href")) {
          au = ai.getAttributeValueFromNode(aw, "href");
          return this.toAbsoluteUrl(au);
        }
        var at = this.findPieceNode(av);
        if (ai.hasNodeAttributeWithValue(at, "href")) {
          au = ai.getAttributeValueFromNode(at, "href");
          return this.toAbsoluteUrl(au);
        }
      },
      isSameDomain: function (at) {
        if (!at || !at.indexOf) {
          return false;
        }
        if (0 === at.indexOf(this.getLocation().origin)) {
          return true;
        }
        var au = at.indexOf(this.getLocation().host);
        if (8 >= au && 0 <= au) {
          return true;
        }
        return false;
      },
      removeDomainIfIsInLink: function (av) {
        var au = "^https?://[^/]+";
        var at = "^.*//[^/]+";
        if (
          av &&
          av.search &&
          -1 !== av.search(new RegExp(au)) &&
          this.isSameDomain(av)
        ) {
          av = av.replace(new RegExp(at), "");
          if (!av) {
            av = "/";
          }
        }
        return av;
      },
      findMediaUrlInNode: function (ax) {
        if (!ax) {
          return;
        }
        var av = ["img", "embed", "video", "audio"];
        var at = ax.nodeName.toLowerCase();
        if (
          -1 !== P(av, at) &&
          ai.findFirstNodeHavingAttributeWithValue(ax, "src")
        ) {
          var aw = ai.findFirstNodeHavingAttributeWithValue(ax, "src");
          return ai.getAttributeValueFromNode(aw, "src");
        }
        if (at === "object" && ai.hasNodeAttributeWithValue(ax, "data")) {
          return ai.getAttributeValueFromNode(ax, "data");
        }
        if (at === "object") {
          var ay = ai.findNodesByTagName(ax, "param");
          if (ay && ay.length) {
            var au;
            for (au = 0; au < ay.length; au++) {
              if (
                "movie" === ai.getAttributeValueFromNode(ay[au], "name") &&
                ai.hasNodeAttributeWithValue(ay[au], "value")
              ) {
                return ai.getAttributeValueFromNode(ay[au], "value");
              }
            }
          }
          var az = ai.findNodesByTagName(ax, "embed");
          if (az && az.length) {
            return this.findMediaUrlInNode(az[0]);
          }
        }
      },
      trim: function (at) {
        return a(at);
      },
      isOrWasNodeInViewport: function (ay) {
        if (!ay || !ay.getBoundingClientRect || ay.nodeType !== 1) {
          return true;
        }
        var ax = ay.getBoundingClientRect();
        var aw = J.documentElement || {};
        var av = ax.top < 0;
        if (av && ay.offsetTop) {
          av = ay.offsetTop + ax.height > 0;
        }
        var au = aw.clientWidth;
        if (W.innerWidth && au > W.innerWidth) {
          au = W.innerWidth;
        }
        var at = aw.clientHeight;
        if (W.innerHeight && at > W.innerHeight) {
          at = W.innerHeight;
        }
        return (
          (ax.bottom > 0 || av) &&
          ax.right > 0 &&
          ax.left < au &&
          (ax.top < at || av)
        );
      },
      isNodeVisible: function (au) {
        var at = i(au);
        var av = this.isOrWasNodeInViewport(au);
        return at && av;
      },
      buildInteractionRequestParams: function (at, au, av, aw) {
        var ax = "";
        if (at) {
          ax += "c_i=" + t(at);
        }
        if (au) {
          if (ax) {
            ax += "&";
          }
          ax += "c_n=" + t(au);
        }
        if (av) {
          if (ax) {
            ax += "&";
          }
          ax += "c_p=" + t(av);
        }
        if (aw) {
          if (ax) {
            ax += "&";
          }
          ax += "c_t=" + t(aw);
        }
        if (ax) {
          ax += "&ca=1";
        }
        return ax;
      },
      buildImpressionRequestParams: function (at, au, av) {
        var aw = "c_n=" + t(at) + "&c_p=" + t(au);
        if (av) {
          aw += "&c_t=" + t(av);
        }
        if (aw) {
          aw += "&ca=1";
        }
        return aw;
      },
      buildContentBlock: function (av) {
        if (!av) {
          return;
        }
        var at = this.findContentName(av);
        var au = this.findContentPiece(av);
        var aw = this.findContentTarget(av);
        at = this.trim(at);
        au = this.trim(au);
        aw = this.trim(aw);
        return {
          name: at || "Unknown",
          piece: au || "Unknown",
          target: aw || "",
        };
      },
      collectContent: function (aw) {
        if (!aw || !aw.length) {
          return [];
        }
        var av = [];
        var at, au;
        for (at = 0; at < aw.length; at++) {
          au = this.buildContentBlock(aw[at]);
          if (M(au)) {
            av.push(au);
          }
        }
        return av;
      },
      setLocation: function (at) {
        this.location = at;
      },
      getLocation: function () {
        var at = this.location || W.location;
        if (!at.origin) {
          at.origin =
            at.protocol + "//" + at.hostname + (at.port ? ":" + at.port : "");
        }
        return at;
      },
      toAbsoluteUrl: function (au) {
        if ((!au || String(au) !== au) && au !== "") {
          return au;
        }
        if ("" === au) {
          return this.getLocation().href;
        }
        if (au.search(/^\/\//) !== -1) {
          return this.getLocation().protocol + au;
        }
        if (au.search(/:\/\//) !== -1) {
          return au;
        }
        if (0 === au.indexOf("#")) {
          return this.getLocation().origin + this.getLocation().pathname + au;
        }
        if (0 === au.indexOf("?")) {
          return this.getLocation().origin + this.getLocation().pathname + au;
        }
        if (0 === au.search("^[a-zA-Z]{2,11}:")) {
          return au;
        }
        if (au.search(/^\//) !== -1) {
          return this.getLocation().origin + au;
        }
        var at = "(.*/)";
        var av =
          this.getLocation().origin +
          this.getLocation().pathname.match(new RegExp(at))[0];
        return av + au;
      },
      isUrlToCurrentDomain: function (au) {
        var av = this.toAbsoluteUrl(au);
        if (!av) {
          return false;
        }
        var at = this.getLocation().origin;
        if (at === av) {
          return true;
        }
        if (0 === String(av).indexOf(at)) {
          if (":" === String(av).substr(at.length, 1)) {
            return false;
          }
          return true;
        }
        return false;
      },
      setHrefAttribute: function (au, at) {
        if (!au || !at) {
          return;
        }
        ai.setAnyAttribute(au, "href", at);
      },
      shouldIgnoreInteraction: function (at) {
        if (ai.hasNodeAttribute(at, this.CONTENT_IGNOREINTERACTION_ATTR)) {
          return true;
        }
        if (ai.hasNodeCssClass(at, this.CONTENT_IGNOREINTERACTION_CLASS)) {
          return true;
        }
        if (
          ai.hasNodeCssClass(at, this.LEGACY_CONTENT_IGNOREINTERACTION_CLASS)
        ) {
          return true;
        }
        return false;
      },
    };
    function aa(au, ax) {
      if (ax) {
        return ax;
      }
      au = w.toAbsoluteUrl(au);
      if (A(au, "?")) {
        var aw = au.indexOf("?");
        au = au.slice(0, aw);
      }
      if (U(au, "matomo.php")) {
        au = f(au, "matomo.php".length);
      } else {
        if (U(au, "piwik.php")) {
          au = f(au, "piwik.php".length);
        } else {
          if (U(au, ".php")) {
            var at = au.lastIndexOf("/");
            var av = 1;
            au = au.slice(0, at + av);
          }
        }
      }
      if (U(au, "/js/")) {
        au = f(au, "js/".length);
      }
      return au;
    }
    function R(az) {
      var aB = "Matomo_Overlay";
      var au = new RegExp(
        "index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=[^&]*)?"
      );
      var av = au.exec(J.referrer);
      if (av) {
        var ax = av[1];
        if (ax !== String(az)) {
          return false;
        }
        var ay = av[2],
          at = av[3],
          aw = av[4];
        if (!aw) {
          aw = "";
        } else {
          if (aw.indexOf("&segment=") === 0) {
            aw = aw.substr("&segment=".length);
          }
        }
        W.name = aB + "###" + ay + "###" + at + "###" + aw;
      }
      var aA = W.name.split("###");
      return aA.length === 4 && aA[0] === aB;
    }
    function ad(au, az, av) {
      var ay = W.name.split("###"),
        ax = ay[1],
        at = ay[2],
        aw = ay[3],
        aA = aa(au, az);
      o(aA + "plugins/Overlay/client/client.js?v=1", function () {
        Matomo_Overlay_Client.initialize(aA, av, ax, at, aw);
      });
    }
    function v() {
      var av;
      try {
        av = W.frameElement;
      } catch (au) {
        return true;
      }
      if (M(av)) {
        return av && String(av.nodeName).toLowerCase() === "iframe"
          ? true
          : false;
      }
      try {
        return W.self !== W.top;
      } catch (at) {
        return true;
      }
    }
    function T(co, ci) {
      var bR = this,
        bk = "mtm_consent",
        cT = "mtm_cookie_consent",
        c2 = "mtm_consent_removed",
        cd = ae(J.domain, W.location.href, N()),
        da = O(cd[0]),
        bW = p(cd[1]),
        bw = p(cd[2]),
        c8 = false,
        cs = "GET",
        dt = cs,
        aM = "application/x-www-form-urlencoded; charset=UTF-8",
        cL = aM,
        aI = co || "",
        bQ = "",
        dh = "",
        cy = "",
        cf = ci || "",
        bH = "",
        bX = "",
        bb,
        bq = "",
        dp = [
          "7z",
          "aac",
          "apk",
          "arc",
          "arj",
          "asf",
          "asx",
          "avi",
          "azw3",
          "bin",
          "csv",
          "deb",
          "dmg",
          "doc",
          "docx",
          "epub",
          "exe",
          "flv",
          "gif",
          "gz",
          "gzip",
          "hqx",
          "ibooks",
          "jar",
          "jpg",
          "jpeg",
          "js",
          "mobi",
          "mp2",
          "mp3",
          "mp4",
          "mpg",
          "mpeg",
          "mov",
          "movie",
          "msi",
          "msp",
          "odb",
          "odf",
          "odg",
          "ods",
          "odt",
          "ogg",
          "ogv",
          "pdf",
          "phps",
          "png",
          "ppt",
          "pptx",
          "qt",
          "qtm",
          "ra",
          "ram",
          "rar",
          "rpm",
          "rtf",
          "sea",
          "sit",
          "tar",
          "tbz",
          "tbz2",
          "bz",
          "bz2",
          "tgz",
          "torrent",
          "txt",
          "wav",
          "wma",
          "wmv",
          "wpd",
          "xls",
          "xlsx",
          "xml",
          "z",
          "zip",
        ],
        aC = [da],
        bI = [],
        cM = [".paypal.com"],
        ct = [],
        bU = [],
        bf = [],
        bS = 500,
        dd = true,
        cZ,
        bc,
        b0,
        bY,
        at,
        cC = [
          "pk_campaign",
          "mtm_campaign",
          "piwik_campaign",
          "matomo_campaign",
          "utm_campaign",
          "utm_source",
          "utm_medium",
        ],
        bP = ["pk_kwd", "mtm_kwd", "piwik_kwd", "matomo_kwd", "utm_term"],
        br = "_pk_",
        az = "pk_vid",
        a6 = 180,
        df,
        by,
        b1 = false,
        aN = "Lax",
        bt = false,
        c6,
        bl,
        bE,
        c0 = 33955200000,
        cz = 1800000,
        dn = 15768000000,
        a9 = true,
        bN = false,
        bo = false,
        bZ = false,
        aV = false,
        cl,
        b5 = {},
        cx = {},
        bv = {},
        bC = 200,
        cH = {},
        di = {},
        dq = {},
        aZ = {},
        cj = [],
        bu = false,
        ck = [],
        cp = false,
        cR = false,
        au = false,
        dr = false,
        c3 = false,
        aS = false,
        bj = v(),
        cN = null,
        dg = null,
        aW,
        bK,
        cg = aq,
        bx,
        aQ,
        bJ = false,
        cE = 0,
        bD = ["id", "ses", "cvar", "ref"],
        cQ = false,
        bL = null,
        c1 = [],
        cG = [],
        aB = X++,
        aA = false,
        de = true;
      try {
        bq = J.title;
      } catch (cO) {
        bq = "";
      }
      function aH(dE) {
        if (bt && dE !== c2) {
          return 0;
        }
        var dC = new RegExp("(^|;)[ ]*" + dE + "=([^;]*)"),
          dD = dC.exec(J.cookie);
        return dD ? V(dD[2]) : 0;
      }
      bL = !aH(c2);
      function dx(dG, dH, dK, dJ, dE, dF, dI) {
        if (bt && dG !== c2) {
          return;
        }
        var dD;
        if (dK) {
          dD = new Date();
          dD.setTime(dD.getTime() + dK);
        }
        if (!dI) {
          dI = "Lax";
        }
        J.cookie =
          dG +
          "=" +
          t(dH) +
          (dK ? ";expires=" + dD.toGMTString() : "") +
          ";path=" +
          (dJ || "/") +
          (dE ? ";domain=" + dE : "") +
          (dF ? ";secure" : "") +
          ";SameSite=" +
          dI;
        if ((!dK || dK >= 0) && aH(dG) !== String(dH)) {
          var dC =
            "There was an error setting cookie `" +
            dG +
            "`. Please check domain and path.";
          ao(dC);
        }
      }
      function cb(dC) {
        var dE, dD;
        dC = j(dC, az);
        dC = j(dC, "ignore_referrer");
        dC = j(dC, "ignore_referer");
        for (dD = 0; dD < ct.length; dD++) {
          dC = j(dC, ct[dD]);
        }
        if (bY) {
          dE = new RegExp("#.*");
          return dC.replace(dE, "");
        }
        return dC;
      }
      function b4(dE, dC) {
        var dF = s(dC),
          dD;
        if (dF) {
          return dC;
        }
        if (dC.slice(0, 1) === "/") {
          return s(dE) + "://" + d(dE) + dC;
        }
        dE = cb(dE);
        dD = dE.indexOf("?");
        if (dD >= 0) {
          dE = dE.slice(0, dD);
        }
        dD = dE.lastIndexOf("/");
        if (dD !== dE.length - 1) {
          dE = dE.slice(0, dD + 1);
        }
        return dE + dC;
      }
      function cX(dE, dC) {
        var dD;
        dE = String(dE).toLowerCase();
        dC = String(dC).toLowerCase();
        if (dE === dC) {
          return true;
        }
        if (dC.slice(0, 1) === ".") {
          if (dE === dC.slice(1)) {
            return true;
          }
          dD = dE.length - dC.length;
          if (dD > 0 && dE.slice(dD) === dC) {
            return true;
          }
        }
        return false;
      }
      function cw(dC) {
        var dD = document.createElement("a");
        if (dC.indexOf("//") !== 0 && dC.indexOf("http") !== 0) {
          if (dC.indexOf("*") === 0) {
            dC = dC.substr(1);
          }
          if (dC.indexOf(".") === 0) {
            dC = dC.substr(1);
          }
          dC = "http://" + dC;
        }
        dD.href = w.toAbsoluteUrl(dC);
        if (dD.pathname) {
          return dD.pathname;
        }
        return "";
      }
      function ba(dD, dC) {
        if (!an(dC, "/")) {
          dC = "/" + dC;
        }
        if (!an(dD, "/")) {
          dD = "/" + dD;
        }
        var dE = dC === "/" || dC === "/*";
        if (dE) {
          return true;
        }
        if (dD === dC) {
          return true;
        }
        dC = String(dC).toLowerCase();
        dD = String(dD).toLowerCase();
        if (U(dC, "*")) {
          dC = dC.slice(0, -1);
          dE = !dC || dC === "/";
          if (dE) {
            return true;
          }
          if (dD === dC) {
            return true;
          }
          return dD.indexOf(dC) === 0;
        }
        if (!U(dD, "/")) {
          dD += "/";
        }
        if (!U(dC, "/")) {
          dC += "/";
        }
        return dD.indexOf(dC) === 0;
      }
      function aw(dG, dI) {
        var dD, dC, dE, dF, dH;
        for (dD = 0; dD < aC.length; dD++) {
          dF = O(aC[dD]);
          dH = cw(aC[dD]);
          if (cX(dG, dF) && ba(dI, dH)) {
            return true;
          }
        }
        return false;
      }
      function a2(dF) {
        var dD, dC, dE;
        for (dD = 0; dD < aC.length; dD++) {
          dC = O(aC[dD].toLowerCase());
          if (dF === dC) {
            return true;
          }
          if (dC.slice(0, 1) === ".") {
            if (dF === dC.slice(1)) {
              return true;
            }
            dE = dF.length - dC.length;
            if (dE > 0 && dF.slice(dE) === dC) {
              return true;
            }
          }
        }
        return false;
      }
      function cD(dC) {
        var dD, dF, dH, dE, dG;
        if (!dC.length || !cM.length) {
          return false;
        }
        dF = d(dC);
        dH = cw(dC);
        if (dF.indexOf("www.") === 0) {
          dF = dF.substr(4);
        }
        for (dD = 0; dD < cM.length; dD++) {
          dE = O(cM[dD]);
          dG = cw(cM[dD]);
          if (dE.indexOf("www.") === 0) {
            dE = dE.substr(4);
          }
          if (cX(dF, dE) && ba(dH, dG)) {
            return true;
          }
        }
        return false;
      }
      function cA(dC, dE) {
        dC = dC.replace("send_image=0", "send_image=1");
        var dD = new Image(1, 1);
        dD.onload = function () {
          H = 0;
          if (typeof dE === "function") {
            dE({ request: dC, trackerUrl: aI, success: true });
          }
        };
        dD.onerror = function () {
          if (typeof dE === "function") {
            dE({ request: dC, trackerUrl: aI, success: false });
          }
        };
        dD.src = aI + (aI.indexOf("?") < 0 ? "?" : "&") + dC;
      }
      function cU(dC) {
        if (dt === "POST") {
          return true;
        }
        return dC && (dC.length > 2000 || dC.indexOf('{"requests"') === 0);
      }
      function aP() {
        return (
          "object" === typeof g &&
          "function" === typeof g.sendBeacon &&
          "function" === typeof Blob
        );
      }
      function bd(dG, dJ, dI) {
        var dE = aP();
        if (!dE) {
          return false;
        }
        var dF = { type: "application/x-www-form-urlencoded; charset=UTF-8" };
        var dK = false;
        var dD = aI;
        try {
          var dC = new Blob([dG], dF);
          if (dI && !cU(dG)) {
            dC = new Blob([], dF);
            dD = dD + (dD.indexOf("?") < 0 ? "?" : "&") + dG;
          }
          dK = g.sendBeacon(dD, dC);
        } catch (dH) {
          return false;
        }
        if (dK && typeof dJ === "function") {
          dJ({
            request: dG,
            trackerUrl: aI,
            success: true,
            isSendBeacon: true,
          });
        }
        return dK;
      }
      function dm(dD, dE, dC) {
        if (!M(dC) || null === dC) {
          dC = true;
        }
        if (m && bd(dD, dE, dC)) {
          return;
        }
        setTimeout(function () {
          if (m && bd(dD, dE, dC)) {
            return;
          }
          var dH;
          try {
            var dG = W.XMLHttpRequest
              ? new W.XMLHttpRequest()
              : W.ActiveXObject
              ? new ActiveXObject("Microsoft.XMLHTTP")
              : null;
            dG.open("POST", aI, true);
            dG.onreadystatechange = function () {
              if (
                this.readyState === 4 &&
                !(this.status >= 200 && this.status < 300)
              ) {
                var dI = m && bd(dD, dE, dC);
                if (!dI && dC) {
                  cA(dD, dE);
                } else {
                  if (typeof dE === "function") {
                    dE({
                      request: dD,
                      trackerUrl: aI,
                      success: false,
                      xhr: this,
                    });
                  }
                }
              } else {
                if (this.readyState === 4 && typeof dE === "function") {
                  dE({ request: dD, trackerUrl: aI, success: true, xhr: this });
                }
              }
            };
            dG.setRequestHeader("Content-Type", cL);
            dG.withCredentials = true;
            dG.send(dD);
          } catch (dF) {
            dH = m && bd(dD, dE, dC);
            if (!dH && dC) {
              cA(dD, dE);
            } else {
              if (typeof dE === "function") {
                dE({ request: dD, trackerUrl: aI, success: false });
              }
            }
          }
        }, 50);
      }
      function cq(dD) {
        var dC = new Date();
        var dE = dC.getTime() + dD;
        if (!r || dE > r) {
          r = dE;
        }
      }
      function bh() {
        bj = true;
        cN = new Date().getTime();
      }
      function dw() {
        var dC = new Date().getTime();
        return !cN || dC - cN > bc;
      }
      function aD() {
        if (dw()) {
          b0();
        }
      }
      function a1() {
        if (J.visibilityState === "hidden" && dw()) {
          b0();
        } else {
          if (J.visibilityState === "visible") {
            cN = new Date().getTime();
          }
        }
      }
      function dz() {
        if (aS || !bc) {
          return;
        }
        aS = true;
        ar(W, "focus", bh);
        ar(W, "blur", aD);
        ar(W, "visibilitychange", a1);
        af++;
        u.addPlugin("HeartBeat" + af, {
          unload: function () {
            if (aS && dw()) {
              b0();
            }
          },
        });
      }
      function cS(dG) {
        var dD = new Date();
        var dC = dD.getTime();
        dg = dC;
        if (cR && dC < cR) {
          var dE = cR - dC;
          setTimeout(dG, dE);
          cq(dE + 50);
          cR += 50;
          return;
        }
        if (cR === false) {
          var dF = 800;
          cR = dC + dF;
        }
        dG();
      }
      function aT() {
        if (aH(c2)) {
          bL = false;
        } else {
          if (aH(bk)) {
            bL = true;
          }
        }
      }
      function bT(dE) {
        if (!aZ) {
          return dE;
        }
        var dD,
          dC = "&uadata=" + t(W.JSON.stringify(aZ));
        if (dE instanceof Array) {
          for (dD = 0; dD < dE.length; dD++) {
            dE[dD] += dC;
          }
        } else {
          dE += dC;
        }
        return dE;
      }
      function cB(dC) {
        if (
          !de ||
          !M(g.userAgentData) ||
          !C(g.userAgentData.getHighEntropyValues)
        ) {
          dC();
          return;
        }
        aZ = {
          brands: g.userAgentData.brands,
          platform: g.userAgentData.platform,
        };
        g.userAgentData
          .getHighEntropyValues([
            "brands",
            "model",
            "platform",
            "platformVersion",
            "uaFullVersion",
            "fullVersionList",
          ])
          .then(
            function (dE) {
              var dD;
              if (dE.fullVersionList) {
                delete dE.brands;
                delete dE.uaFullVersion;
              }
              aZ = dE;
              dC();
            },
            function (dD) {
              dC();
            }
          );
      }
      function bO(dD, dC, dE) {
        if (!bu) {
          cj.push(dD);
          return;
        }
        aT();
        if (!bL) {
          c1.push(dD);
          return;
        }
        aA = true;
        if (!c6 && dD) {
          if (cQ && bL) {
            dD += "&consent=1";
          }
          dD = bT(dD);
          cS(function () {
            if (dd && bd(dD, dE, true)) {
              cq(100);
              return;
            }
            if (cU(dD)) {
              dm(dD, dE);
            } else {
              cA(dD, dE);
            }
            cq(dC);
          });
        }
        if (!aS) {
          dz();
        }
      }
      function cv(dC) {
        if (c6) {
          return false;
        }
        return dC && dC.length;
      }
      function dl(dC, dG) {
        if (!dG || dG >= dC.length) {
          return [dC];
        }
        var dD = 0;
        var dE = dC.length;
        var dF = [];
        for (dD; dD < dE; dD += dG) {
          dF.push(dC.slice(dD, dD + dG));
        }
        return dF;
      }
      function dy(dD, dC) {
        if (!cv(dD)) {
          return;
        }
        if (!bu) {
          cj.push(dD);
          return;
        }
        if (!bL) {
          c1.push(dD);
          return;
        }
        aA = true;
        cS(function () {
          var dG = dl(dD, 50);
          var dE = 0,
            dF;
          for (dE; dE < dG.length; dE++) {
            dF =
              '{"requests":["?' +
              bT(dG[dE]).join('","?') +
              '"],"send_image":0}';
            if (dd && bd(dF, null, false)) {
              cq(100);
            } else {
              dm(dF, null, false);
            }
          }
          cq(dC);
        });
      }
      function aY(dC) {
        return br + dC + "." + cf + "." + bx;
      }
      function b8(dE, dD, dC) {
        dx(dE, "", -129600000, dD, dC);
      }
      function ce() {
        if (bt) {
          return "0";
        }
        if (!M(W.showModalDialog) && M(g.cookieEnabled)) {
          return g.cookieEnabled ? "1" : "0";
        }
        var dC = br + "testcookie";
        dx(dC, "1", undefined, by, df, b1, aN);
        var dD = aH(dC) === "1" ? "1" : "0";
        b8(dC);
        return dD;
      }
      function bp() {
        bx = cg((df || da) + (by || "/")).slice(0, 4);
      }
      function cY() {
        cB(function () {
          var dI, dH;
          bu = true;
          for (dI = 0; dI < cj.length; dI++) {
            dH = typeof cj[dI];
            if (dH === "string") {
              bO(cj[dI], bS);
            } else {
              if (dH === "object") {
                dy(cj[dI], bS);
              }
            }
          }
          cj = [];
        });
        if (!de) {
          return {};
        }
        if (M(dq.res)) {
          return dq;
        }
        var dD,
          dF,
          dG = {
            pdf: "application/pdf",
            qt: "video/quicktime",
            realp: "audio/x-pn-realaudio-plugin",
            wma: "application/x-mplayer2",
            fla: "application/x-shockwave-flash",
            java: "application/x-java-vm",
            ag: "application/x-silverlight",
          };
        if (!new RegExp("MSIE").test(g.userAgent)) {
          if (g.mimeTypes && g.mimeTypes.length) {
            for (dD in dG) {
              if (Object.prototype.hasOwnProperty.call(dG, dD)) {
                dF = g.mimeTypes[dG[dD]];
                dq[dD] = dF && dF.enabledPlugin ? "1" : "0";
              }
            }
          }
          if (
            !new RegExp("Edge[ /](\\d+[\\.\\d]+)").test(g.userAgent) &&
            typeof navigator.javaEnabled !== "unknown" &&
            M(g.javaEnabled) &&
            g.javaEnabled()
          ) {
            dq.java = "1";
          }
          if (!M(W.showModalDialog) && M(g.cookieEnabled)) {
            dq.cookie = g.cookieEnabled ? "1" : "0";
          } else {
            dq.cookie = ce();
          }
        }
        var dE = parseInt(ab.width, 10);
        var dC = parseInt(ab.height, 10);
        dq.res = parseInt(dE, 10) + "x" + parseInt(dC, 10);
        return dq;
      }
      function b6() {
        var dD = aY("cvar"),
          dC = aH(dD);
        if (dC && dC.length) {
          dC = W.JSON.parse(dC);
          if (Z(dC)) {
            return dC;
          }
        }
        return {};
      }
      function cV() {
        if (aV === false) {
          aV = b6();
        }
      }
      function c7() {
        var dC = cY();
        return cg(
          (g.userAgent || "") +
            (g.platform || "") +
            W.JSON.stringify(dC) +
            new Date().getTime() +
            Math.random()
        ).slice(0, 16);
      }
      function aF() {
        var dC = cY();
        return cg(
          (g.userAgent || "") + (g.platform || "") + W.JSON.stringify(dC)
        ).slice(0, 6);
      }
      function bm() {
        return Math.floor(new Date().getTime() / 1000);
      }
      function aO() {
        var dD = bm();
        var dE = aF();
        var dC = String(dD) + dE;
        return dC;
      }
      function dk(dE) {
        dE = String(dE);
        var dH = aF();
        var dF = dH.length;
        var dG = dE.substr(-1 * dF, dF);
        var dD = parseInt(dE.substr(0, dE.length - dF), 10);
        if (dD && dG && dG === dH) {
          var dC = bm();
          if (a6 <= 0) {
            return true;
          }
          if (dC >= dD && dC <= dD + a6) {
            return true;
          }
        }
        return false;
      }
      function dA(dC) {
        if (!c3) {
          return "";
        }
        var dG = e(dC, az);
        if (!dG) {
          return "";
        }
        dG = String(dG);
        var dE = new RegExp("^[a-zA-Z0-9]+$");
        if (dG.length === 32 && dE.test(dG)) {
          var dD = dG.substr(16, 32);
          if (dk(dD)) {
            var dF = dG.substr(0, 16);
            return dF;
          }
        }
        return "";
      }
      function c4() {
        if (!bX) {
          bX = dA(bW);
        }
        var dE = new Date(),
          dC = Math.round(dE.getTime() / 1000),
          dD = aY("id"),
          dH = aH(dD),
          dG,
          dF;
        if (dH) {
          dG = dH.split(".");
          dG.unshift("0");
          if (bX.length) {
            dG[1] = bX;
          }
          return dG;
        }
        if (bX.length) {
          dF = bX;
        } else {
          if ("0" === ce()) {
            dF = "";
          } else {
            dF = c7();
          }
        }
        dG = ["1", dF, dC];
        return dG;
      }
      function a5() {
        var dF = c4(),
          dD = dF[0],
          dE = dF[1],
          dC = dF[2];
        return { newVisitor: dD, uuid: dE, createTs: dC };
      }
      function aL() {
        var dF = new Date(),
          dD = dF.getTime(),
          dG = a5().createTs;
        var dC = parseInt(dG, 10);
        var dE = dC * 1000 + c0 - dD;
        return dE;
      }
      function aR(dC) {
        if (!cf) {
          return;
        }
        var dE = new Date(),
          dD = Math.round(dE.getTime() / 1000);
        if (!M(dC)) {
          dC = a5();
        }
        var dF = dC.uuid + "." + dC.createTs + ".";
        dx(aY("id"), dF, aL(), by, df, b1, aN);
      }
      function bV() {
        var dC = aH(aY("ref"));
        if (dC.length) {
          try {
            dC = W.JSON.parse(dC);
            if (Z(dC)) {
              return dC;
            }
          } catch (dD) {}
        }
        return ["", "", 0, ""];
      }
      function bF(dE) {
        var dD = br + "testcookie_domain";
        var dC = "testvalue";
        dx(dD, dC, 10000, null, dE, b1, aN);
        if (aH(dD) === dC) {
          b8(dD, null, dE);
          return true;
        }
        return false;
      }
      function aJ() {
        var dD = bt;
        bt = false;
        var dC, dE;
        for (dC = 0; dC < bD.length; dC++) {
          dE = aY(bD[dC]);
          if (dE !== c2 && dE !== bk && 0 !== aH(dE)) {
            b8(dE, by, df);
          }
        }
        bt = dD;
      }
      function cc(dC) {
        cf = dC;
      }
      function dB(dG) {
        if (!dG || !Z(dG)) {
          return;
        }
        var dF = [];
        var dE;
        for (dE in dG) {
          if (Object.prototype.hasOwnProperty.call(dG, dE)) {
            dF.push(dE);
          }
        }
        var dH = {};
        dF.sort();
        var dC = dF.length;
        var dD;
        for (dD = 0; dD < dC; dD++) {
          dH[dF[dD]] = dG[dF[dD]];
        }
        return dH;
      }
      function cn() {
        dx(aY("ses"), "1", cz, by, df, b1, aN);
      }
      function bn() {
        var dF = "";
        var dD =
          "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var dE = dD.length;
        var dC;
        for (dC = 0; dC < 6; dC++) {
          dF += dD.charAt(Math.floor(Math.random() * dE));
        }
        return dF;
      }
      function aE(dD) {
        if (cy !== "") {
          dD += cy;
          bo = true;
          return dD;
        }
        if (!h) {
          return dD;
        }
        var dE =
          typeof h.timing === "object" && h.timing ? h.timing : undefined;
        if (!dE) {
          dE =
            typeof h.getEntriesByType === "function" &&
            h.getEntriesByType("navigation")
              ? h.getEntriesByType("navigation")[0]
              : undefined;
        }
        if (!dE) {
          return dD;
        }
        var dC = "";
        if (dE.connectEnd && dE.fetchStart) {
          if (dE.connectEnd < dE.fetchStart) {
            return dD;
          }
          dC += "&pf_net=" + Math.round(dE.connectEnd - dE.fetchStart);
        }
        if (dE.responseStart && dE.requestStart) {
          if (dE.responseStart < dE.requestStart) {
            return dD;
          }
          dC += "&pf_srv=" + Math.round(dE.responseStart - dE.requestStart);
        }
        if (dE.responseStart && dE.responseEnd) {
          if (dE.responseEnd < dE.responseStart) {
            return dD;
          }
          dC += "&pf_tfr=" + Math.round(dE.responseEnd - dE.responseStart);
        }
        if (M(dE.domLoading)) {
          if (dE.domInteractive && dE.domLoading) {
            if (dE.domInteractive < dE.domLoading) {
              return dD;
            }
            dC += "&pf_dm1=" + Math.round(dE.domInteractive - dE.domLoading);
          }
        } else {
          if (dE.domInteractive && dE.responseEnd) {
            if (dE.domInteractive < dE.responseEnd) {
              return dD;
            }
            dC += "&pf_dm1=" + Math.round(dE.domInteractive - dE.responseEnd);
          }
        }
        if (dE.domComplete && dE.domInteractive) {
          if (dE.domComplete < dE.domInteractive) {
            return dD;
          }
          dC += "&pf_dm2=" + Math.round(dE.domComplete - dE.domInteractive);
        }
        if (dE.loadEventEnd && dE.loadEventStart) {
          if (dE.loadEventEnd < dE.loadEventStart) {
            return dD;
          }
          dC += "&pf_onl=" + Math.round(dE.loadEventEnd - dE.loadEventStart);
        }
        return dD + dC;
      }
      function cm(dC) {
        return (
          e(dC, "ignore_referrer") === "1" || e(dC, "ignore_referer") === "1"
        );
      }
      function ds() {
        var dM,
          dF = new Date(),
          dG = Math.round(dF.getTime() / 1000),
          dR,
          dE,
          dH = 1024,
          dO,
          dI,
          dD = aY("ses"),
          dL = aY("ref"),
          dK = aH(dD),
          dC = bV(),
          dQ = bb || bW,
          dN,
          dJ,
          dP = {};
        dN = dC[0];
        dJ = dC[1];
        dR = dC[2];
        dE = dC[3];
        if (!cm(dQ) && !dK) {
          if (!bE || !dN.length) {
            for (dM in cC) {
              if (Object.prototype.hasOwnProperty.call(cC, dM)) {
                dN = e(dQ, cC[dM]);
                if (dN.length) {
                  break;
                }
              }
            }
            for (dM in bP) {
              if (Object.prototype.hasOwnProperty.call(bP, dM)) {
                dJ = e(dQ, bP[dM]);
                if (dJ.length) {
                  break;
                }
              }
            }
          }
          dO = d(bw);
          dI = dE.length ? d(dE) : "";
          if (
            dO.length &&
            !a2(dO) &&
            !cD(bw) &&
            (!bE || !dI.length || a2(dI) || cD(dE))
          ) {
            dE = bw;
          }
          if (dE.length || dN.length) {
            dR = dG;
            dC = [dN, dJ, dR, cb(dE.slice(0, dH))];
            dx(dL, W.JSON.stringify(dC), dn, by, df, b1, aN);
          }
        }
        if (dN.length) {
          dP._rcn = t(dN);
        }
        if (dJ.length) {
          dP._rck = t(dJ);
        }
        dP._refts = dR;
        if (String(dE).length) {
          dP._ref = t(cb(dE.slice(0, dH)));
        }
        return dP;
      }
      function cF(dD, dP, dQ) {
        var dO,
          dC = new Date(),
          dN = aV,
          dJ = aY("cvar"),
          dR = bb || bW,
          dE = cm(dR);
        if (bt) {
          aJ();
        }
        if (c6) {
          return "";
        }
        var dK = a5();
        var dH = J.characterSet || J.charset;
        if (!dH || dH.toLowerCase() === "utf-8") {
          dH = null;
        }
        dD +=
          "&idsite=" +
          cf +
          "&rec=1&r=" +
          String(Math.random()).slice(2, 8) +
          "&h=" +
          dC.getHours() +
          "&m=" +
          dC.getMinutes() +
          "&s=" +
          dC.getSeconds() +
          "&url=" +
          t(cb(dR)) +
          (bw.length && !cD(bw) && !dE ? "&urlref=" + t(cb(bw)) : "") +
          (ac(bH) ? "&uid=" + t(bH) : "") +
          "&_id=" +
          dK.uuid +
          "&_idn=" +
          dK.newVisitor +
          (dH ? "&cs=" + t(dH) : "") +
          "&send_image=0";
        var dM = ds();
        for (dO in dM) {
          if (Object.prototype.hasOwnProperty.call(dM, dO)) {
            dD += "&" + dO + "=" + dM[dO];
          }
        }
        var dT = cY();
        for (dO in dT) {
          if (Object.prototype.hasOwnProperty.call(dT, dO)) {
            dD += "&" + dO + "=" + dT[dO];
          }
        }
        var dU = [];
        if (dP) {
          for (dO in dP) {
            if (
              Object.prototype.hasOwnProperty.call(dP, dO) &&
              /^dimension\d+$/.test(dO)
            ) {
              var dF = dO.replace("dimension", "");
              dU.push(parseInt(dF, 10));
              dU.push(String(dF));
              dD += "&" + dO + "=" + t(dP[dO]);
              delete dP[dO];
            }
          }
        }
        if (dP && D(dP)) {
          dP = null;
        }
        for (dO in cH) {
          if (Object.prototype.hasOwnProperty.call(cH, dO)) {
            dD += "&" + dO + "=" + t(cH[dO]);
          }
        }
        for (dO in bv) {
          if (Object.prototype.hasOwnProperty.call(bv, dO)) {
            var dI = -1 === P(dU, dO);
            if (dI) {
              dD += "&dimension" + dO + "=" + t(bv[dO]);
            }
          }
        }
        if (dP) {
          dD += "&data=" + t(W.JSON.stringify(dP));
        } else {
          if (at) {
            dD += "&data=" + t(W.JSON.stringify(at));
          }
        }
        function dG(dV, dW) {
          var dX = W.JSON.stringify(dV);
          if (dX.length > 2) {
            return "&" + dW + "=" + t(dX);
          }
          return "";
        }
        var dS = dB(b5);
        var dL = dB(cx);
        dD += dG(dS, "cvar");
        dD += dG(dL, "e_cvar");
        if (aV) {
          dD += dG(aV, "_cvar");
          for (dO in dN) {
            if (Object.prototype.hasOwnProperty.call(dN, dO)) {
              if (aV[dO][0] === "" || aV[dO][1] === "") {
                delete aV[dO];
              }
            }
          }
          if (bZ) {
            dx(dJ, W.JSON.stringify(aV), cz, by, df, b1, aN);
          }
        }
        if (a9 && bN && !bo) {
          dD = aE(dD);
          bo = true;
        }
        if (aQ) {
          dD += "&pv_id=" + aQ;
        }
        aR(dK);
        cn();
        dD += ag(dQ, { tracker: bR, request: dD });
        if (dh.length) {
          dD += "&" + dh;
        }
        if (C(cl)) {
          dD = cl(dD);
        }
        return dD;
      }
      b0 = function be() {
        var dC = new Date();
        dC = dC.getTime();
        if (!dg) {
          return false;
        }
        if (dg + bc <= dC) {
          bR.ping();
          return true;
        }
        return false;
      };
      function bz(dF, dE, dJ, dG, dC, dM) {
        var dI = "idgoal=0",
          dD = new Date(),
          dK = [],
          dL,
          dH = String(dF).length;
        if (dH) {
          dI += "&ec_id=" + t(dF);
        }
        dI += "&revenue=" + dE;
        if (String(dJ).length) {
          dI += "&ec_st=" + dJ;
        }
        if (String(dG).length) {
          dI += "&ec_tx=" + dG;
        }
        if (String(dC).length) {
          dI += "&ec_sh=" + dC;
        }
        if (String(dM).length) {
          dI += "&ec_dt=" + dM;
        }
        if (di) {
          for (dL in di) {
            if (Object.prototype.hasOwnProperty.call(di, dL)) {
              if (!M(di[dL][1])) {
                di[dL][1] = "";
              }
              if (!M(di[dL][2])) {
                di[dL][2] = "";
              }
              if (!M(di[dL][3]) || String(di[dL][3]).length === 0) {
                di[dL][3] = 0;
              }
              if (!M(di[dL][4]) || String(di[dL][4]).length === 0) {
                di[dL][4] = 1;
              }
              dK.push(di[dL]);
            }
          }
          dI += "&ec_items=" + t(W.JSON.stringify(dK));
        }
        dI = cF(dI, at, "ecommerce");
        bO(dI, bS);
        if (dH) {
          di = {};
        }
      }
      function b7(dC, dG, dF, dE, dD, dH) {
        if (String(dC).length && M(dG)) {
          bz(dC, dG, dF, dE, dD, dH);
        }
      }
      function bB(dC) {
        if (M(dC)) {
          bz("", dC, "", "", "", "");
        }
      }
      function b9(dD, dF, dE) {
        if (!bJ) {
          aQ = bn();
        }
        var dC = cF("action_name=" + t(ap(dD || bq)), dF, "log");
        if (a9 && !bo) {
          dC = aE(dC);
        }
        bO(dC, bS, dE);
      }
      function a7(dE, dD) {
        var dF,
          dC = "(^| )(piwik[_-]" + dD + "|matomo[_-]" + dD;
        if (dE) {
          for (dF = 0; dF < dE.length; dF++) {
            dC += "|" + dE[dF];
          }
        }
        dC += ")( |$)";
        return new RegExp(dC);
      }
      function a0(dC) {
        return aI && dC && 0 === String(dC).indexOf(aI);
      }
      function cJ(dG, dC, dH, dD) {
        if (a0(dC)) {
          return 0;
        }
        var dF = a7(bU, "download"),
          dE = a7(bf, "link"),
          dI = new RegExp("\\.(" + dp.join("|") + ")([?&#]|$)", "i");
        if (dE.test(dG)) {
          return "link";
        }
        if (dD || dF.test(dG) || dI.test(dC)) {
          return "download";
        }
        if (dH) {
          return 0;
        }
        return "link";
      }
      function ay(dD) {
        var dC;
        dC = dD.parentNode;
        while (dC !== null && M(dC)) {
          if (ai.isLinkElement(dD)) {
            break;
          }
          dD = dC;
          dC = dD.parentNode;
        }
        return dD;
      }
      function dv(dH) {
        dH = ay(dH);
        if (!ai.hasNodeAttribute(dH, "href")) {
          return;
        }
        if (!M(dH.href)) {
          return;
        }
        var dG = ai.getAttributeValueFromNode(dH, "href");
        var dD = dH.pathname || cw(dH.href);
        var dI = dH.hostname || d(dH.href);
        var dJ = dI.toLowerCase();
        var dE = dH.href.replace(dI, dJ);
        var dF = new RegExp(
          "^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):",
          "i"
        );
        if (!dF.test(dE)) {
          var dC = cJ(
            dH.className,
            dE,
            aw(dJ, dD),
            ai.hasNodeAttribute(dH, "download")
          );
          if (dC) {
            return { type: dC, href: dE };
          }
        }
      }
      function aU(dC, dD, dE, dF) {
        var dG = w.buildInteractionRequestParams(dC, dD, dE, dF);
        if (!dG) {
          return;
        }
        return cF(dG, null, "contentInteraction");
      }
      function bi(dC, dD) {
        if (!dC || !dD) {
          return false;
        }
        var dE = w.findTargetNode(dC);
        if (w.shouldIgnoreInteraction(dE)) {
          return false;
        }
        dE = w.findTargetNodeNoDefault(dC);
        if (dE && !Y(dE, dD)) {
          return false;
        }
        return true;
      }
      function cI(dE, dD, dG) {
        if (!dE) {
          return;
        }
        var dC = w.findParentContentNode(dE);
        if (!dC) {
          return;
        }
        if (!bi(dC, dE)) {
          return;
        }
        var dF = w.buildContentBlock(dC);
        if (!dF) {
          return;
        }
        if (!dF.target && dG) {
          dF.target = dG;
        }
        return w.buildInteractionRequestParams(
          dD,
          dF.name,
          dF.piece,
          dF.target
        );
      }
      function a3(dD) {
        if (!ck || !ck.length) {
          return false;
        }
        var dC, dE;
        for (dC = 0; dC < ck.length; dC++) {
          dE = ck[dC];
          if (
            dE &&
            dE.name === dD.name &&
            dE.piece === dD.piece &&
            dE.target === dD.target
          ) {
            return true;
          }
        }
        return false;
      }
      function a4(dC) {
        return function (dG) {
          if (!dC) {
            return;
          }
          var dE = w.findParentContentNode(dC);
          var dD;
          if (dG) {
            dD = dG.target || dG.srcElement;
          }
          if (!dD) {
            dD = dC;
          }
          if (!bi(dE, dD)) {
            return;
          }
          if (!dE) {
            return false;
          }
          var dH = w.findTargetNode(dE);
          if (!dH || w.shouldIgnoreInteraction(dH)) {
            return false;
          }
          var dF = dv(dH);
          if (dr && dF && dF.type) {
            return dF.type;
          }
          return bR.trackContentInteractionNode(dD, "click");
        };
      }
      function ca(dE) {
        if (!dE || !dE.length) {
          return;
        }
        var dC, dD;
        for (dC = 0; dC < dE.length; dC++) {
          dD = w.findTargetNode(dE[dC]);
          if (dD && !dD.contentInteractionTrackingSetupDone) {
            dD.contentInteractionTrackingSetupDone = true;
            ar(dD, "click", a4(dD));
          }
        }
      }
      function bG(dE, dF) {
        if (!dE || !dE.length) {
          return [];
        }
        var dC, dD;
        for (dC = 0; dC < dE.length; dC++) {
          if (a3(dE[dC])) {
            dE.splice(dC, 1);
            dC--;
          } else {
            ck.push(dE[dC]);
          }
        }
        if (!dE || !dE.length) {
          return [];
        }
        ca(dF);
        var dG = [];
        for (dC = 0; dC < dE.length; dC++) {
          dD = cF(
            w.buildImpressionRequestParams(
              dE[dC].name,
              dE[dC].piece,
              dE[dC].target
            ),
            undefined,
            "contentImpressions"
          );
          if (dD) {
            dG.push(dD);
          }
        }
        return dG;
      }
      function cP(dD) {
        var dC = w.collectContent(dD);
        return bG(dC, dD);
      }
      function bg(dD) {
        if (!dD || !dD.length) {
          return [];
        }
        var dC;
        for (dC = 0; dC < dD.length; dC++) {
          if (!w.isNodeVisible(dD[dC])) {
            dD.splice(dC, 1);
            dC--;
          }
        }
        if (!dD || !dD.length) {
          return [];
        }
        return cP(dD);
      }
      function aK(dE, dC, dD) {
        var dF = w.buildImpressionRequestParams(dE, dC, dD);
        return cF(dF, null, "contentImpression");
      }
      function du(dF, dD) {
        if (!dF) {
          return;
        }
        var dC = w.findParentContentNode(dF);
        var dE = w.buildContentBlock(dC);
        if (!dE) {
          return;
        }
        if (!dD) {
          dD = "Unknown";
        }
        return aU(dD, dE.name, dE.piece, dE.target);
      }
      function c5(dD, dF, dC, dE) {
        return (
          "e_c=" +
          t(dD) +
          "&e_a=" +
          t(dF) +
          (M(dC) ? "&e_n=" + t(dC) : "") +
          (M(dE) ? "&e_v=" + t(dE) : "") +
          "&ca=1"
        );
      }
      function ax(dE, dG, dC, dF, dI, dH) {
        if (!ac(dE) || !ac(dG)) {
          ao(
            "Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces"
          );
          return false;
        }
        var dD = cF(c5(dE, dG, dC, dF), dI, "event");
        bO(dD, bS, dH);
      }
      function ch(dC, dF, dD, dG) {
        var dE = cF(
          "search=" +
            t(dC) +
            (dF ? "&search_cat=" + t(dF) : "") +
            (M(dD) ? "&search_count=" + dD : ""),
          dG,
          "sitesearch"
        );
        bO(dE, bS);
      }
      function c9(dC, dG, dF, dE) {
        var dD = cF("idgoal=" + dC + (dG ? "&revenue=" + dG : ""), dF, "goal");
        bO(dD, bS, dE);
      }
      function dj(dF, dC, dJ, dI, dE) {
        var dH = dC + "=" + t(cb(dF));
        var dD = cI(dE, "click", dF);
        if (dD) {
          dH += "&" + dD;
        }
        var dG = cF(dH, dJ, "link");
        bO(dG, bS, dI);
      }
      function b3(dD, dC) {
        if (dD !== "") {
          return dD + dC.charAt(0).toUpperCase() + dC.slice(1);
        }
        return dC;
      }
      function cr(dH) {
        var dG,
          dC,
          dF = ["", "webkit", "ms", "moz"],
          dE;
        if (!bl) {
          for (dC = 0; dC < dF.length; dC++) {
            dE = dF[dC];
            if (Object.prototype.hasOwnProperty.call(J, b3(dE, "hidden"))) {
              if (J[b3(dE, "visibilityState")] === "prerender") {
                dG = true;
              }
              break;
            }
          }
        }
        if (dG) {
          ar(J, dE + "visibilitychange", function dD() {
            J.removeEventListener(dE + "visibilitychange", dD, false);
            dH();
          });
          return;
        }
        dH();
      }
      function bA() {
        var dD = bR.getVisitorId();
        var dC = aO();
        return dD + dC;
      }
      function cu(dC) {
        if (!dC) {
          return;
        }
        if (!ai.hasNodeAttribute(dC, "href")) {
          return;
        }
        var dD = ai.getAttributeValueFromNode(dC, "href");
        if (!dD || a0(dD)) {
          return;
        }
        if (!bR.getVisitorId()) {
          return;
        }
        dD = j(dD, az);
        var dE = bA();
        dD = I(dD, az, dE);
        ai.setAnyAttribute(dC, "href", dD);
      }
      function bs(dF) {
        var dG = ai.getAttributeValueFromNode(dF, "href");
        if (!dG) {
          return false;
        }
        dG = String(dG);
        var dD =
          dG.indexOf("//") === 0 ||
          dG.indexOf("http://") === 0 ||
          dG.indexOf("https://") === 0;
        if (!dD) {
          return false;
        }
        var dC = dF.pathname || cw(dF.href);
        var dE = (dF.hostname || d(dF.href)).toLowerCase();
        if (aw(dE, dC)) {
          if (!cX(da, O(dE))) {
            return true;
          }
          return false;
        }
        return false;
      }
      function cW(dC) {
        var dD = dv(dC);
        if (dD && dD.type) {
          dD.href = p(dD.href);
          dj(dD.href, dD.type, undefined, null, dC);
          return;
        }
        if (c3) {
          dC = ay(dC);
          if (bs(dC)) {
            cu(dC);
          }
        }
      }
      function cK() {
        return J.all && !J.addEventListener;
      }
      function db(dC) {
        var dE = dC.which;
        var dD = typeof dC.button;
        if (!dE && dD !== "undefined") {
          if (cK()) {
            if (dC.button & 1) {
              dE = 1;
            } else {
              if (dC.button & 2) {
                dE = 3;
              } else {
                if (dC.button & 4) {
                  dE = 2;
                }
              }
            }
          } else {
            if (dC.button === 0 || dC.button === "0") {
              dE = 1;
            } else {
              if (dC.button & 1) {
                dE = 2;
              } else {
                if (dC.button & 2) {
                  dE = 3;
                }
              }
            }
          }
        }
        return dE;
      }
      function b2(dC) {
        switch (db(dC)) {
          case 1:
            return "left";
          case 2:
            return "middle";
          case 3:
            return "right";
        }
      }
      function a8(dC) {
        return dC.target || dC.srcElement;
      }
      function dc(dC) {
        return dC === "A" || dC === "AREA";
      }
      function aG(dC) {
        function dD(dF) {
          var dG = a8(dF);
          var dH = dG.nodeName;
          var dE = a7(bI, "ignore");
          while (!dc(dH) && dG && dG.parentNode) {
            dG = dG.parentNode;
            dH = dG.nodeName;
          }
          if (dG && dc(dH) && !dE.test(dG.className)) {
            return dG;
          }
        }
        return function (dG) {
          dG = dG || W.event;
          var dH = dD(dG);
          if (!dH) {
            return;
          }
          var dF = b2(dG);
          if (dG.type === "click") {
            var dE = false;
            if (dC && dF === "middle") {
              dE = true;
            }
            if (dH && !dE) {
              cW(dH);
            }
          } else {
            if (dG.type === "mousedown") {
              if (dF === "middle" && dH) {
                aW = dF;
                bK = dH;
              } else {
                aW = bK = null;
              }
            } else {
              if (dG.type === "mouseup") {
                if (dF === aW && dH === bK) {
                  cW(dH);
                }
                aW = bK = null;
              } else {
                if (dG.type === "contextmenu") {
                  cW(dH);
                }
              }
            }
          }
        };
      }
      function av(dF, dE, dC) {
        var dD = typeof dE;
        if (dD === "undefined") {
          dE = true;
        }
        ar(dF, "click", aG(dE), dC);
        if (dE) {
          ar(dF, "mouseup", aG(dE), dC);
          ar(dF, "mousedown", aG(dE), dC);
          ar(dF, "contextmenu", aG(dE), dC);
        }
      }
      function aX(dD, dG, dH) {
        if (cp) {
          return true;
        }
        cp = true;
        var dI = false;
        var dF, dE;
        function dC() {
          dI = true;
        }
        n(function () {
          function dJ(dL) {
            setTimeout(function () {
              if (!cp) {
                return;
              }
              dI = false;
              dH.trackVisibleContentImpressions();
              dJ(dL);
            }, dL);
          }
          function dK(dL) {
            setTimeout(function () {
              if (!cp) {
                return;
              }
              if (dI) {
                dI = false;
                dH.trackVisibleContentImpressions();
              }
              dK(dL);
            }, dL);
          }
          if (dD) {
            dF = ["scroll", "resize"];
            for (dE = 0; dE < dF.length; dE++) {
              if (J.addEventListener) {
                J.addEventListener(dF[dE], dC, false);
              } else {
                W.attachEvent("on" + dF[dE], dC);
              }
            }
            dK(100);
          }
          if (dG && dG > 0) {
            dG = parseInt(dG, 10);
            dJ(dG);
          }
        });
      }
      var bM = {
        enabled: true,
        requests: [],
        timeout: null,
        interval: 2500,
        sendRequests: function () {
          var dC = this.requests;
          this.requests = [];
          if (dC.length === 1) {
            bO(dC[0], bS);
          } else {
            dy(dC, bS);
          }
        },
        canQueue: function () {
          return !m && this.enabled;
        },
        pushMultiple: function (dD) {
          if (!this.canQueue()) {
            dy(dD, bS);
            return;
          }
          var dC;
          for (dC = 0; dC < dD.length; dC++) {
            this.push(dD[dC]);
          }
        },
        push: function (dC) {
          if (!dC) {
            return;
          }
          if (!this.canQueue()) {
            bO(dC, bS);
            return;
          }
          bM.requests.push(dC);
          if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
          }
          this.timeout = setTimeout(function () {
            bM.timeout = null;
            bM.sendRequests();
          }, bM.interval);
          var dD = "RequestQueue" + aB;
          if (!Object.prototype.hasOwnProperty.call(b, dD)) {
            b[dD] = {
              unload: function () {
                if (bM.timeout) {
                  clearTimeout(bM.timeout);
                }
                bM.sendRequests();
              },
            };
          }
        },
      };
      bp();
      this.hasConsent = function () {
        return bL;
      };
      this.getVisitorInfo = function () {
        if (!aH(aY("id"))) {
          aR();
        }
        return c4();
      };
      this.getVisitorId = function () {
        return this.getVisitorInfo()[1];
      };
      this.getAttributionInfo = function () {
        return bV();
      };
      this.getAttributionCampaignName = function () {
        return bV()[0];
      };
      this.getAttributionCampaignKeyword = function () {
        return bV()[1];
      };
      this.getAttributionReferrerTimestamp = function () {
        return bV()[2];
      };
      this.getAttributionReferrerUrl = function () {
        return bV()[3];
      };
      this.setTrackerUrl = function (dC) {
        aI = dC;
      };
      this.getTrackerUrl = function () {
        return aI;
      };
      this.getMatomoUrl = function () {
        return aa(this.getTrackerUrl(), bQ);
      };
      this.getPiwikUrl = function () {
        return this.getMatomoUrl();
      };
      this.addTracker = function (dE, dD) {
        if (!M(dE) || null === dE) {
          dE = this.getTrackerUrl();
        }
        var dC = new T(dE, dD);
        L.push(dC);
        u.trigger("TrackerAdded", [this]);
        return dC;
      };
      this.getSiteId = function () {
        return cf;
      };
      this.setSiteId = function (dC) {
        cc(dC);
      };
      this.resetUserId = function () {
        bH = "";
      };
      this.setUserId = function (dC) {
        if (ac(dC)) {
          bH = dC;
        }
      };
      this.setVisitorId = function (dD) {
        var dC = /[0-9A-Fa-f]{16}/g;
        if (x(dD) && dC.test(dD)) {
          bX = dD;
        } else {
          ao("Invalid visitorId set" + dD);
        }
      };
      this.getUserId = function () {
        return bH;
      };
      this.setCustomData = function (dC, dD) {
        if (Z(dC)) {
          at = dC;
        } else {
          if (!at) {
            at = {};
          }
          at[dC] = dD;
        }
      };
      this.getCustomData = function () {
        return at;
      };
      this.setCustomRequestProcessing = function (dC) {
        cl = dC;
      };
      this.appendToTrackingUrl = function (dC) {
        dh = dC;
      };
      this.getRequest = function (dC) {
        return cF(dC);
      };
      this.addPlugin = function (dC, dD) {
        b[dC] = dD;
      };
      this.setCustomDimension = function (dC, dD) {
        dC = parseInt(dC, 10);
        if (dC > 0) {
          if (!M(dD)) {
            dD = "";
          }
          if (!x(dD)) {
            dD = String(dD);
          }
          bv[dC] = dD;
        }
      };
      this.getCustomDimension = function (dC) {
        dC = parseInt(dC, 10);
        if (dC > 0 && Object.prototype.hasOwnProperty.call(bv, dC)) {
          return bv[dC];
        }
      };
      this.deleteCustomDimension = function (dC) {
        dC = parseInt(dC, 10);
        if (dC > 0) {
          delete bv[dC];
        }
      };
      this.setCustomVariable = function (dD, dC, dG, dE) {
        var dF;
        if (!M(dE)) {
          dE = "visit";
        }
        if (!M(dC)) {
          return;
        }
        if (!M(dG)) {
          dG = "";
        }
        if (dD > 0) {
          dC = !x(dC) ? String(dC) : dC;
          dG = !x(dG) ? String(dG) : dG;
          dF = [dC.slice(0, bC), dG.slice(0, bC)];
          if (dE === "visit" || dE === 2) {
            cV();
            aV[dD] = dF;
          } else {
            if (dE === "page" || dE === 3) {
              b5[dD] = dF;
            } else {
              if (dE === "event") {
                cx[dD] = dF;
              }
            }
          }
        }
      };
      this.getCustomVariable = function (dD, dE) {
        var dC;
        if (!M(dE)) {
          dE = "visit";
        }
        if (dE === "page" || dE === 3) {
          dC = b5[dD];
        } else {
          if (dE === "event") {
            dC = cx[dD];
          } else {
            if (dE === "visit" || dE === 2) {
              cV();
              dC = aV[dD];
            }
          }
        }
        if (!M(dC) || (dC && dC[0] === "")) {
          return false;
        }
        return dC;
      };
      this.deleteCustomVariable = function (dC, dD) {
        if (this.getCustomVariable(dC, dD)) {
          this.setCustomVariable(dC, "", "", dD);
        }
      };
      this.deleteCustomVariables = function (dC) {
        if (dC === "page" || dC === 3) {
          b5 = {};
        } else {
          if (dC === "event") {
            cx = {};
          } else {
            if (dC === "visit" || dC === 2) {
              aV = {};
            }
          }
        }
      };
      this.storeCustomVariablesInCookie = function () {
        bZ = true;
      };
      this.setLinkTrackingTimer = function (dC) {
        bS = dC;
      };
      this.getLinkTrackingTimer = function () {
        return bS;
      };
      this.setDownloadExtensions = function (dC) {
        if (x(dC)) {
          dC = dC.split("|");
        }
        dp = dC;
      };
      this.addDownloadExtensions = function (dD) {
        var dC;
        if (x(dD)) {
          dD = dD.split("|");
        }
        for (dC = 0; dC < dD.length; dC++) {
          dp.push(dD[dC]);
        }
      };
      this.removeDownloadExtensions = function (dE) {
        var dD,
          dC = [];
        if (x(dE)) {
          dE = dE.split("|");
        }
        for (dD = 0; dD < dp.length; dD++) {
          if (P(dE, dp[dD]) === -1) {
            dC.push(dp[dD]);
          }
        }
        dp = dC;
      };
      this.setDomains = function (dC) {
        aC = x(dC) ? [dC] : dC;
        var dG = false,
          dE = 0,
          dD;
        for (dE; dE < aC.length; dE++) {
          dD = String(aC[dE]);
          if (cX(da, O(dD))) {
            dG = true;
            break;
          }
          var dF = cw(dD);
          if (dF && dF !== "/" && dF !== "/*") {
            dG = true;
            break;
          }
        }
        if (!dG) {
          aC.push(da);
        }
      };
      this.setExcludedReferrers = function (dC) {
        cM = x(dC) ? [dC] : dC;
      };
      this.enableCrossDomainLinking = function () {
        c3 = true;
      };
      this.disableCrossDomainLinking = function () {
        c3 = false;
      };
      this.isCrossDomainLinkingEnabled = function () {
        return c3;
      };
      this.setCrossDomainLinkingTimeout = function (dC) {
        a6 = dC;
      };
      this.getCrossDomainLinkingUrlParameter = function () {
        return t(az) + "=" + t(bA());
      };
      this.setIgnoreClasses = function (dC) {
        bI = x(dC) ? [dC] : dC;
      };
      this.setRequestMethod = function (dC) {
        if (dC) {
          dt = String(dC).toUpperCase();
        } else {
          dt = cs;
        }
        if (dt === "GET") {
          this.disableAlwaysUseSendBeacon();
        }
      };
      this.setRequestContentType = function (dC) {
        cL = dC || aM;
      };
      this.setGenerationTimeMs = function (dC) {
        ao(
          "setGenerationTimeMs is no longer supported since Matomo 4. The call will be ignored. The replacement is setPagePerformanceTiming."
        );
      };
      this.setPagePerformanceTiming = function (dG, dI, dH, dD, dJ, dE) {
        var dF = {
          pf_net: dG,
          pf_srv: dI,
          pf_tfr: dH,
          pf_dm1: dD,
          pf_dm2: dJ,
          pf_onl: dE,
        };
        try {
          dF = Q(dF, M);
          dF = B(dF);
          cy = l(dF);
          if (cy === "") {
            ao(
              "setPagePerformanceTiming() called without parameters. This function needs to be called with at least one performance parameter."
            );
            return;
          }
          bo = false;
          bN = true;
        } catch (dC) {
          ao("setPagePerformanceTiming: " + dC.toString());
        }
      };
      this.setReferrerUrl = function (dC) {
        bw = dC;
      };
      this.setCustomUrl = function (dC) {
        bb = b4(bW, dC);
      };
      this.getCurrentUrl = function () {
        return bb || bW;
      };
      this.setDocumentTitle = function (dC) {
        bq = dC;
      };
      this.setPageViewId = function (dC) {
        aQ = dC;
        bJ = true;
      };
      this.setAPIUrl = function (dC) {
        bQ = dC;
      };
      this.setDownloadClasses = function (dC) {
        bU = x(dC) ? [dC] : dC;
      };
      this.setLinkClasses = function (dC) {
        bf = x(dC) ? [dC] : dC;
      };
      this.setCampaignNameKey = function (dC) {
        cC = x(dC) ? [dC] : dC;
      };
      this.setCampaignKeywordKey = function (dC) {
        bP = x(dC) ? [dC] : dC;
      };
      this.discardHashTag = function (dC) {
        bY = dC;
      };
      this.setCookieNamePrefix = function (dC) {
        br = dC;
        if (aV) {
          aV = b6();
        }
      };
      this.setCookieDomain = function (dC) {
        var dD = O(dC);
        if (!bt && !bF(dD)) {
          ao("Can't write cookie on domain " + dC);
        } else {
          df = dD;
          bp();
        }
      };
      this.setExcludedQueryParams = function (dC) {
        ct = x(dC) ? [dC] : dC;
      };
      this.getCookieDomain = function () {
        return df;
      };
      this.hasCookies = function () {
        return "1" === ce();
      };
      this.setSessionCookie = function (dE, dD, dC) {
        if (!dE) {
          throw new Error("Missing cookie name");
        }
        if (!M(dC)) {
          dC = cz;
        }
        bD.push(dE);
        dx(aY(dE), dD, dC, by, df, b1, aN);
      };
      this.getCookie = function (dD) {
        var dC = aH(aY(dD));
        if (dC === 0) {
          return null;
        }
        return dC;
      };
      this.setCookiePath = function (dC) {
        by = dC;
        bp();
      };
      this.getCookiePath = function (dC) {
        return by;
      };
      this.setVisitorCookieTimeout = function (dC) {
        c0 = dC * 1000;
      };
      this.setSessionCookieTimeout = function (dC) {
        cz = dC * 1000;
      };
      this.getSessionCookieTimeout = function () {
        return cz;
      };
      this.setReferralCookieTimeout = function (dC) {
        dn = dC * 1000;
      };
      this.setConversionAttributionFirstReferrer = function (dC) {
        bE = dC;
      };
      this.setSecureCookie = function (dC) {
        if (dC && location.protocol !== "https:") {
          ao("Error in setSecureCookie: You cannot use `Secure` on http.");
          return;
        }
        b1 = dC;
      };
      this.setCookieSameSite = function (dC) {
        dC = String(dC);
        dC = dC.charAt(0).toUpperCase() + dC.toLowerCase().slice(1);
        if (dC !== "None" && dC !== "Lax" && dC !== "Strict") {
          ao(
            "Ignored value for sameSite. Please use either Lax, None, or Strict."
          );
          return;
        }
        if (dC === "None") {
          if (location.protocol === "https:") {
            this.setSecureCookie(true);
          } else {
            ao(
              "sameSite=None cannot be used on http, reverted to sameSite=Lax."
            );
            dC = "Lax";
          }
        }
        aN = dC;
      };
      this.disableCookies = function () {
        bt = true;
        if (cf) {
          aJ();
        }
      };
      this.areCookiesEnabled = function () {
        return !bt;
      };
      this.setCookieConsentGiven = function () {
        if (bt && !c6) {
          bt = false;
          de = true;
          if (cf && aA) {
            aR();
            var dC = cF("ping=1", null, "ping");
            bO(dC, bS);
          }
        }
      };
      this.requireCookieConsent = function () {
        if (this.getRememberedCookieConsent()) {
          return false;
        }
        this.disableCookies();
        return true;
      };
      this.getRememberedCookieConsent = function () {
        return aH(cT);
      };
      this.forgetCookieConsentGiven = function () {
        b8(cT, by, df);
        this.disableCookies();
      };
      this.rememberCookieConsentGiven = function (dD) {
        if (dD) {
          dD = dD * 60 * 60 * 1000;
        } else {
          dD = 30 * 365 * 24 * 60 * 60 * 1000;
        }
        this.setCookieConsentGiven();
        var dC = new Date().getTime();
        dx(cT, dC, dD, by, df, b1, aN);
      };
      this.deleteCookies = function () {
        aJ();
      };
      this.setDoNotTrack = function (dD) {
        var dC = g.doNotTrack || g.msDoNotTrack;
        c6 = dD && (dC === "yes" || dC === "1");
        if (c6) {
          this.disableCookies();
        }
      };
      this.alwaysUseSendBeacon = function () {
        dd = true;
      };
      this.disableAlwaysUseSendBeacon = function () {
        dd = false;
      };
      this.addListener = function (dD, dC) {
        av(dD, dC, false);
      };
      this.enableLinkTracking = function (dD) {
        if (dr) {
          return;
        }
        dr = true;
        var dC = this;
        q(function () {
          au = true;
          var dE = J.body;
          av(dE, dD, true);
        });
      };
      this.enableJSErrorTracking = function () {
        if (c8) {
          return;
        }
        c8 = true;
        var dC = W.onerror;
        W.onerror = function (dH, dF, dE, dG, dD) {
          cr(function () {
            var dI = "JavaScript Errors";
            var dJ = dF + ":" + dE;
            if (dG) {
              dJ += ":" + dG;
            }
            if (P(cG, dI + dJ + dH) === -1) {
              cG.push(dI + dJ + dH);
              ax(dI, dJ, dH);
            }
          });
          if (dC) {
            return dC(dH, dF, dE, dG, dD);
          }
          return false;
        };
      };
      this.disablePerformanceTracking = function () {
        a9 = false;
      };
      this.enableHeartBeatTimer = function (dC) {
        dC = Math.max(dC || 15, 5);
        bc = dC * 1000;
        if (dg !== null) {
          dz();
        }
      };
      this.disableHeartBeatTimer = function () {
        if (bc || aS) {
          if (W.removeEventListener) {
            W.removeEventListener("focus", bh);
            W.removeEventListener("blur", aD);
            W.removeEventListener("visibilitychange", a1);
          } else {
            if (W.detachEvent) {
              W.detachEvent("onfocus", bh);
              W.detachEvent("onblur", aD);
              W.detachEvent("visibilitychange", a1);
            }
          }
        }
        bc = null;
        aS = false;
      };
      this.killFrame = function () {
        if (W.location !== W.top.location) {
          W.top.location = W.location;
        }
      };
      this.redirectFile = function (dC) {
        if (W.location.protocol === "file:") {
          W.location = dC;
        }
      };
      this.setCountPreRendered = function (dC) {
        bl = dC;
      };
      this.trackGoal = function (dC, dF, dE, dD) {
        cr(function () {
          c9(dC, dF, dE, dD);
        });
      };
      this.trackLink = function (dD, dC, dF, dE) {
        cr(function () {
          dj(dD, dC, dF, dE);
        });
      };
      this.getNumTrackedPageViews = function () {
        return cE;
      };
      this.trackPageView = function (dC, dE, dD) {
        ck = [];
        c1 = [];
        cG = [];
        if (R(cf)) {
          cr(function () {
            ad(aI, bQ, cf);
          });
        } else {
          cr(function () {
            cE++;
            b9(dC, dE, dD);
          });
        }
      };
      this.disableBrowserFeatureDetection = function () {
        de = false;
      };
      this.enableBrowserFeatureDetection = function () {
        de = true;
      };
      this.trackAllContentImpressions = function () {
        if (R(cf)) {
          return;
        }
        cr(function () {
          q(function () {
            var dC = w.findContentNodes();
            var dD = cP(dC);
            bM.pushMultiple(dD);
          });
        });
      };
      this.trackVisibleContentImpressions = function (dC, dD) {
        if (R(cf)) {
          return;
        }
        if (!M(dC)) {
          dC = true;
        }
        if (!M(dD)) {
          dD = 750;
        }
        aX(dC, dD, this);
        cr(function () {
          n(function () {
            var dE = w.findContentNodes();
            var dF = bg(dE);
            bM.pushMultiple(dF);
          });
        });
      };
      this.trackContentImpression = function (dE, dC, dD) {
        if (R(cf)) {
          return;
        }
        dE = a(dE);
        dC = a(dC);
        dD = a(dD);
        if (!dE) {
          return;
        }
        dC = dC || "Unknown";
        cr(function () {
          var dF = aK(dE, dC, dD);
          bM.push(dF);
        });
      };
      this.trackContentImpressionsWithinNode = function (dC) {
        if (R(cf) || !dC) {
          return;
        }
        cr(function () {
          if (cp) {
            n(function () {
              var dD = w.findContentNodesWithinNode(dC);
              var dE = bg(dD);
              bM.pushMultiple(dE);
            });
          } else {
            q(function () {
              var dD = w.findContentNodesWithinNode(dC);
              var dE = cP(dD);
              bM.pushMultiple(dE);
            });
          }
        });
      };
      this.trackContentInteraction = function (dE, dF, dC, dD) {
        if (R(cf)) {
          return;
        }
        dE = a(dE);
        dF = a(dF);
        dC = a(dC);
        dD = a(dD);
        if (!dE || !dF) {
          return;
        }
        dC = dC || "Unknown";
        cr(function () {
          var dG = aU(dE, dF, dC, dD);
          if (dG) {
            bM.push(dG);
          }
        });
      };
      this.trackContentInteractionNode = function (dE, dD) {
        if (R(cf) || !dE) {
          return;
        }
        var dC = null;
        cr(function () {
          dC = du(dE, dD);
          if (dC) {
            bM.push(dC);
          }
        });
        return dC;
      };
      this.logAllContentBlocksOnPage = function () {
        var dE = w.findContentNodes();
        var dC = w.collectContent(dE);
        var dD = typeof console;
        if (dD !== "undefined" && console && console.log) {
          console.log(dC);
        }
      };
      this.trackEvent = function (dD, dF, dC, dE, dH, dG) {
        cr(function () {
          ax(dD, dF, dC, dE, dH, dG);
        });
      };
      this.trackSiteSearch = function (dC, dE, dD, dF) {
        ck = [];
        cr(function () {
          ch(dC, dE, dD, dF);
        });
      };
      this.setEcommerceView = function (dG, dC, dE, dD) {
        cH = {};
        if (ac(dE)) {
          dE = String(dE);
        }
        if (!M(dE) || dE === null || dE === false || !dE.length) {
          dE = "";
        } else {
          if (dE instanceof Array) {
            dE = W.JSON.stringify(dE);
          }
        }
        var dF = "_pkc";
        cH[dF] = dE;
        if (M(dD) && dD !== null && dD !== false && String(dD).length) {
          dF = "_pkp";
          cH[dF] = dD;
        }
        if (!ac(dG) && !ac(dC)) {
          return;
        }
        if (ac(dG)) {
          dF = "_pks";
          cH[dF] = dG;
        }
        if (!ac(dC)) {
          dC = "";
        }
        dF = "_pkn";
        cH[dF] = dC;
      };
      this.getEcommerceItems = function () {
        return JSON.parse(JSON.stringify(di));
      };
      this.addEcommerceItem = function (dG, dC, dE, dD, dF) {
        if (ac(dG)) {
          di[dG] = [String(dG), dC, dE, dD, dF];
        }
      };
      this.removeEcommerceItem = function (dC) {
        if (ac(dC)) {
          dC = String(dC);
          delete di[dC];
        }
      };
      this.clearEcommerceCart = function () {
        di = {};
      };
      this.trackEcommerceOrder = function (dC, dG, dF, dE, dD, dH) {
        b7(dC, dG, dF, dE, dD, dH);
      };
      this.trackEcommerceCartUpdate = function (dC) {
        bB(dC);
      };
      this.trackRequest = function (dD, dF, dE, dC) {
        cr(function () {
          var dG = cF(dD, dF, dC);
          bO(dG, bS, dE);
        });
      };
      this.ping = function () {
        this.trackRequest("ping=1", null, null, "ping");
      };
      this.disableQueueRequest = function () {
        bM.enabled = false;
      };
      this.setRequestQueueInterval = function (dC) {
        if (dC < 1000) {
          throw new Error("Request queue interval needs to be at least 1000ms");
        }
        bM.interval = dC;
      };
      this.queueRequest = function (dC) {
        cr(function () {
          var dD = cF(dC);
          bM.push(dD);
        });
      };
      this.isConsentRequired = function () {
        return cQ;
      };
      this.getRememberedConsent = function () {
        var dC = aH(bk);
        if (aH(c2)) {
          if (dC) {
            b8(bk, by, df);
          }
          return null;
        }
        if (!dC || dC === 0) {
          return null;
        }
        return dC;
      };
      this.hasRememberedConsent = function () {
        return !!this.getRememberedConsent();
      };
      this.requireConsent = function () {
        cQ = true;
        bL = this.hasRememberedConsent();
        if (!bL) {
          bt = true;
        }
        y++;
        b["CoreConsent" + y] = {
          unload: function () {
            if (!bL) {
              aJ();
            }
          },
        };
      };
      this.setConsentGiven = function (dD) {
        bL = true;
        de = true;
        b8(c2, by, df);
        var dE, dC;
        for (dE = 0; dE < c1.length; dE++) {
          dC = typeof c1[dE];
          if (dC === "string") {
            bO(c1[dE], bS);
          } else {
            if (dC === "object") {
              dy(c1[dE], bS);
            }
          }
        }
        c1 = [];
        if (!M(dD) || dD) {
          this.setCookieConsentGiven();
        }
      };
      this.rememberConsentGiven = function (dE) {
        if (dE) {
          dE = dE * 60 * 60 * 1000;
        } else {
          dE = 30 * 365 * 24 * 60 * 60 * 1000;
        }
        var dC = true;
        this.setConsentGiven(dC);
        var dD = new Date().getTime();
        dx(bk, dD, dE, by, df, b1, aN);
      };
      this.forgetConsentGiven = function (dC) {
        if (dC) {
          dC = dC * 60 * 60 * 1000;
        } else {
          dC = 30 * 365 * 24 * 60 * 60 * 1000;
        }
        b8(bk, by, df);
        dx(c2, new Date().getTime(), dC, by, df, b1, aN);
        this.forgetCookieConsentGiven();
        this.requireConsent();
      };
      this.isUserOptedOut = function () {
        return !bL;
      };
      this.optUserOut = this.forgetConsentGiven;
      this.forgetUserOptOut = function () {
        this.setConsentGiven(false);
      };
      n(function () {
        setTimeout(function () {
          bN = true;
        }, 0);
      });
      u.trigger("TrackerSetup", [this]);
      u.addPlugin("TrackerVisitorIdCookie" + aB, {
        unload: function () {
          if (!aA) {
            aR();
            ds();
          }
        },
      });
    }
    function K() {
      return { push: aj };
    }
    function c(ay, ax) {
      var az = {};
      var av, aw;
      for (av = 0; av < ax.length; av++) {
        var at = ax[av];
        az[at] = 1;
        for (aw = 0; aw < ay.length; aw++) {
          if (ay[aw] && ay[aw][0]) {
            var au = ay[aw][0];
            if (at === au) {
              aj(ay[aw]);
              delete ay[aw];
              if (
                az[au] > 1 &&
                au !== "addTracker" &&
                au !== "enableLinkTracking"
              ) {
                ao(
                  "The method " +
                    au +
                    ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Matomo trackers documentation: https://developer.matomo.org/guides/tracking-javascript-guide#multiple-piwik-trackers'
                );
              }
              az[au]++;
            }
          }
        }
      }
      return ay;
    }
    var E = [
      "addTracker",
      "forgetCookieConsentGiven",
      "requireCookieConsent",
      "disableBrowserFeatureDetection",
      "disableCookies",
      "setTrackerUrl",
      "setAPIUrl",
      "enableCrossDomainLinking",
      "setCrossDomainLinkingTimeout",
      "setSessionCookieTimeout",
      "setVisitorCookieTimeout",
      "setCookieNamePrefix",
      "setCookieSameSite",
      "setSecureCookie",
      "setCookiePath",
      "setCookieDomain",
      "setDomains",
      "setUserId",
      "setVisitorId",
      "setSiteId",
      "alwaysUseSendBeacon",
      "disableAlwaysUseSendBeacon",
      "enableLinkTracking",
      "setCookieConsentGiven",
      "requireConsent",
      "setConsentGiven",
      "disablePerformanceTracking",
      "setPagePerformanceTiming",
      "setExcludedQueryParams",
      "setExcludedReferrers",
    ];
    function ah(av, au) {
      var at = new T(av, au);
      L.push(at);
      _paq = c(_paq, E);
      for (H = 0; H < _paq.length; H++) {
        if (_paq[H]) {
          aj(_paq[H]);
        }
      }
      _paq = new K();
      u.trigger("TrackerAdded", [at]);
      return at;
    }
    ar(W, "beforeunload", am, false);
    ar(
      W,
      "visibilitychange",
      function () {
        if (m) {
          return;
        }
        if (J.visibilityState === "hidden") {
          ag("unload");
        }
      },
      false
    );
    ar(
      W,
      "online",
      function () {
        if (M(g.serviceWorker)) {
          g.serviceWorker.ready.then(
            function (at) {
              if (at && at.sync) {
                return at.sync.register("matomoSync");
              }
            },
            function () {}
          );
        }
      },
      false
    );
    ar(
      W,
      "message",
      function (ay) {
        if (!ay || !ay.origin) {
          return;
        }
        var aA, aw, au;
        var aB = d(ay.origin);
        var ax = u.getAsyncTrackers();
        for (aw = 0; aw < ax.length; aw++) {
          au = d(ax[aw].getMatomoUrl());
          if (au === aB) {
            aA = ax[aw];
            break;
          }
        }
        if (!aA) {
          return;
        }
        var av = null;
        try {
          av = JSON.parse(ay.data);
        } catch (az) {
          return;
        }
        if (!av) {
          return;
        }
        function at(aE) {
          var aG = J.getElementsByTagName("iframe");
          for (aw = 0; aw < aG.length; aw++) {
            var aF = aG[aw];
            var aC = d(aF.src);
            if (
              aF.contentWindow &&
              M(aF.contentWindow.postMessage) &&
              aC === aB
            ) {
              var aD = JSON.stringify(aE);
              aF.contentWindow.postMessage(aD, ay.origin);
            }
          }
        }
        if (M(av.maq_initial_value)) {
          at({
            maq_opted_in: av.maq_initial_value && aA.hasConsent(),
            maq_url: aA.getMatomoUrl(),
            maq_optout_by_default: aA.isConsentRequired(),
          });
        } else {
          if (M(av.maq_opted_in)) {
            ax = u.getAsyncTrackers();
            for (aw = 0; aw < ax.length; aw++) {
              aA = ax[aw];
              if (av.maq_opted_in) {
                aA.rememberConsentGiven();
              } else {
                aA.forgetConsentGiven();
              }
            }
            at({
              maq_confirm_opted_in: aA.hasConsent(),
              maq_url: aA.getMatomoUrl(),
              maq_optout_by_default: aA.isConsentRequired(),
            });
          }
        }
      },
      false
    );
    Date.prototype.getTimeAlias = Date.prototype.getTime;
    u = {
      initialized: false,
      JSON: W.JSON,
      DOM: {
        addEventListener: function (aw, av, au, at) {
          var ax = typeof at;
          if (ax === "undefined") {
            at = false;
          }
          ar(aw, av, au, at);
        },
        onLoad: n,
        onReady: q,
        isNodeVisible: i,
        isOrWasNodeVisible: w.isNodeVisible,
      },
      on: function (au, at) {
        if (!z[au]) {
          z[au] = [];
        }
        z[au].push(at);
      },
      off: function (av, au) {
        if (!z[av]) {
          return;
        }
        var at = 0;
        for (at; at < z[av].length; at++) {
          if (z[av][at] === au) {
            z[av].splice(at, 1);
          }
        }
      },
      trigger: function (av, aw, au) {
        if (!z[av]) {
          return;
        }
        var at = 0;
        for (at; at < z[av].length; at++) {
          z[av][at].apply(au || W, aw);
        }
      },
      addPlugin: function (at, au) {
        b[at] = au;
      },
      getTracker: function (au, at) {
        if (!M(at)) {
          at = this.getAsyncTracker().getSiteId();
        }
        if (!M(au)) {
          au = this.getAsyncTracker().getTrackerUrl();
        }
        return new T(au, at);
      },
      getAsyncTrackers: function () {
        return L;
      },
      addTracker: function (av, au) {
        var at;
        if (!L.length) {
          at = ah(av, au);
        } else {
          at = L[0].addTracker(av, au);
        }
        return at;
      },
      getAsyncTracker: function (ax, aw) {
        var av;
        if (L && L.length && L[0]) {
          av = L[0];
        } else {
          return ah(ax, aw);
        }
        if (!aw && !ax) {
          return av;
        }
        if ((!M(aw) || null === aw) && av) {
          aw = av.getSiteId();
        }
        if ((!M(ax) || null === ax) && av) {
          ax = av.getTrackerUrl();
        }
        var au,
          at = 0;
        for (at; at < L.length; at++) {
          au = L[at];
          if (
            au &&
            String(au.getSiteId()) === String(aw) &&
            au.getTrackerUrl() === ax
          ) {
            return au;
          }
        }
      },
      retryMissedPluginCalls: function () {
        var au = al;
        al = [];
        var at = 0;
        for (at; at < au.length; at++) {
          aj(au[at]);
        }
      },
    };
    if (typeof define === "function" && define.amd) {
      define("piwik", [], function () {
        return u;
      });
      define("matomo", [], function () {
        return u;
      });
    }
    return u;
  })();
}
/*!!! pluginTrackerHook */

/* GENERATED: tracker.min.js */
(function () {
  var N = 1;
  var aH = 9;
  var o = 10;
  var P = 8;
  var w = 3;
  var ax = ["button", "submit", "reset"];
  /*!!
   * Copyright (C) 2015 Pavel Savshenko
   * Copyright (C) 2011 Google Inc.  All rights reserved.
   * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
   * Copyright (C) 2008 Matt Lilek <webkit@mattlilek.com>
   * Copyright (C) 2009 Joseph Pecoraro
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions
   * are met:
   *
   * 1.  Redistributions of source code must retain the above copyright
   *     notice, this list of conditions and the following disclaimer.
   * 2.  Redistributions in binary form must reproduce the above copyright
   *     notice, this list of conditions and the following disclaimer in the
   *     documentation and/or other materials provided with the distribution.
   * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
   *     its contributors may be used to endorse or promote products derived
   *     from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
   * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
   * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
   * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
   * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
   * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
   * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   */
  var i = {};
  i.cssPath = function (aT, aR) {
    if (aT.nodeType !== N) {
      return "";
    }
    var aQ = [];
    var aP = aT;
    while (aP) {
      var aS = i._cssPathStep(aP, !!aR, aP === aT);
      if (!aS) {
        break;
      }
      aQ.push(aS);
      if (aS.optimized) {
        break;
      }
      aP = aP.parentNode;
    }
    aQ.reverse();
    return aQ.join(" > ");
  };
  i._cssPathStep = function (a4, aW, a3) {
    if (a4.nodeType !== N) {
      return null;
    }
    var a2 = a4.getAttribute("id");
    if (aW) {
      if (a2) {
        return new i.DOMNodePathStep(ba(a2), true);
      }
      var aQ = a4.nodeName.toLowerCase();
      if (aQ === "body" || aQ === "head" || aQ === "html") {
        return new i.DOMNodePathStep(a4.nodeName.toLowerCase(), true);
      }
    }
    var aP = a4.nodeName.toLowerCase();
    if (a2) {
      return new i.DOMNodePathStep(aP.toLowerCase() + ba(a2), true);
    }
    var aX = a4.parentNode;
    if (!aX || aX.nodeType === aH) {
      return new i.DOMNodePathStep(aP.toLowerCase(), true);
    }
    function bg(bi) {
      var bj = bi.getAttribute("class");
      if (!bj) {
        return [];
      }
      return bj
        .split(/\s+/g)
        .filter(Boolean)
        .map(function (bk) {
          return "$" + bk;
        });
    }
    function ba(bi) {
      return "#" + bf(bi);
    }
    function bf(bj) {
      if (bb(bj)) {
        return bj;
      }
      var bi = /^(?:[0-9]|-[0-9-]?)/.test(bj);
      var bk = bj.length - 1;
      return bj.replace(/./g, function (bm, bl) {
        return (bi && bl === 0) || !aR(bm) ? aT(bm, bl === bk) : bm;
      });
    }
    function aT(bj, bi) {
      return "\\" + a1(bj) + (bi ? "" : " ");
    }
    function a1(bj) {
      var bi = bj.charCodeAt(0).toString(16);
      if (bi.length === 1) {
        bi = "0" + bi;
      }
      return bi;
    }
    function aR(bi) {
      if (/[a-zA-Z0-9_\-]/.test(bi)) {
        return true;
      }
      return bi.charCodeAt(0) >= 160;
    }
    function bb(bi) {
      return /^-?[a-zA-Z_][a-zA-Z0-9_\-]*$/.test(bi);
    }
    function a6(bi) {
      var bk = {},
        bj;
      for (bj = 0; bj < bi.length; bj++) {
        bk[bi[bj]] = true;
      }
      return bk;
    }
    var aZ = bg(a4);
    var a0 = false;
    var a8 = false;
    var a9 = -1;
    var aV = aX.children;
    if (aV && aV.length) {
      for (var a7 = 0; (a9 === -1 || !a8) && a7 < aV.length; ++a7) {
        var bc = aV[a7];
        if (bc === a4) {
          a9 = a7;
          continue;
        }
        if (a8) {
          continue;
        }
        if (bc.nodeName.toLowerCase() !== aP.toLowerCase()) {
          continue;
        }
        a0 = true;
        var bh = a6(aZ);
        var aU = aZ.length;
        if (aU === 0) {
          a8 = true;
          continue;
        }
        var be = bg(bc);
        for (var a5 = 0; a5 < be.length; ++a5) {
          var aS = be[a5];
          if (!bh.hasOwnProperty(aS)) {
            continue;
          }
          delete bh[aS];
          aU--;
          if (!aU) {
            a8 = true;
            break;
          }
        }
      }
    }
    var aY = aP.toLowerCase();
    if (
      a3 &&
      aP.toLowerCase() === "input" &&
      a4.getAttribute("type") &&
      !a4.getAttribute("id") &&
      !a4.getAttribute("class")
    ) {
      aY += '[type="' + a4.getAttribute("type") + '"]';
    }
    if (a8) {
      aY += ":nth-child(" + (a9 + 1) + ")";
    } else {
      if (a0) {
        for (var bd = 0; bd < aZ.length; bd++) {
          aY += "." + bf(aZ[bd].substr(1));
        }
      }
    }
    return new i.DOMNodePathStep(aY, false);
  };
  i.DOMNodePathStep = function (aQ, aP) {
    this.value = aQ;
    this.optimized = aP || false;
  };
  i.DOMNodePathStep.prototype = {
    toString: function () {
      return this.value;
    },
  };
  /*!!
   * Copyright 2011 Google Inc.
   *
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var b = function (aS, aP) {
    for (var aR in aP) {
      if (aP.hasOwnProperty(aR)) {
        aS[aR] = aP[aR];
      }
    }
    function aQ() {
      this.constructor = aS;
    }
    aQ.prototype = aP.prototype;
    aS.prototype = new aQ();
  };
  var E;
  if (typeof WebKitMutationObserver !== "undefined") {
    E = WebKitMutationObserver;
  } else {
    if (typeof MutationObserver !== "undefined") {
      E = MutationObserver;
    }
  }
  if (typeof E !== "undefined" && E) {
    var J = (function () {
      function aP() {
        this.nodes = [];
        this.values = [];
      }
      aP.prototype.isIndex = function (aQ) {
        return +aQ === aQ >>> 0;
      };
      aP.prototype.nodeId = function (aQ) {
        var aR = aQ[aP.ID_PROP];
        if (!aR) {
          aR = aQ[aP.ID_PROP] = aP.nextId_++;
        }
        return aR;
      };
      aP.prototype.set = function (aQ, aR) {
        var aS = this.nodeId(aQ);
        this.nodes[aS] = aQ;
        this.values[aS] = aR;
      };
      aP.prototype.get = function (aQ) {
        var aR = this.nodeId(aQ);
        return this.values[aR];
      };
      aP.prototype.has = function (aQ) {
        return this.nodeId(aQ) in this.nodes;
      };
      aP.prototype["delete"] = function (aQ) {
        var aR = this.nodeId(aQ);
        delete this.nodes[aR];
        this.values[aR] = undefined;
      };
      aP.prototype.keys = function () {
        var aQ = [];
        for (var aR in this.nodes) {
          if (!this.isIndex(aR)) {
            continue;
          }
          aQ.push(this.nodes[aR]);
        }
        return aQ;
      };
      aP.ID_PROP = "__mutation_summary_node_map_id__";
      aP.nextId_ = 1;
      return aP;
    })();
    var aC;
    (function (aP) {
      aP[(aP.STAYED_OUT = 0)] = "STAYED_OUT";
      aP[(aP.ENTERED = 1)] = "ENTERED";
      aP[(aP.STAYED_IN = 2)] = "STAYED_IN";
      aP[(aP.REPARENTED = 3)] = "REPARENTED";
      aP[(aP.REORDERED = 4)] = "REORDERED";
      aP[(aP.EXITED = 5)] = "EXITED";
    })(aC || (aC = {}));
    function B(aP) {
      return aP === aC.ENTERED || aP === aC.EXITED;
    }
    var ab = (function () {
      function aP(aW, aV, aR, aT, aS, aU, aQ, aX) {
        if (aV === void 0) {
          aV = false;
        }
        if (aR === void 0) {
          aR = false;
        }
        if (aT === void 0) {
          aT = false;
        }
        if (aS === void 0) {
          aS = null;
        }
        if (aU === void 0) {
          aU = false;
        }
        if (aQ === void 0) {
          aQ = null;
        }
        if (aX === void 0) {
          aX = null;
        }
        this.node = aW;
        this.childList = aV;
        this.attributes = aR;
        this.characterData = aT;
        this.oldParentNode = aS;
        this.added = aU;
        this.attributeOldValues = aQ;
        this.characterDataOldValue = aX;
        this.isCaseInsensitive =
          this.node.nodeType === N &&
          this.node instanceof HTMLElement &&
          this.node.ownerDocument instanceof HTMLDocument;
      }
      aP.prototype.getAttributeOldValue = function (aQ) {
        if (!this.attributeOldValues) {
          return undefined;
        }
        if (this.isCaseInsensitive) {
          aQ = aQ.toLowerCase();
        }
        return this.attributeOldValues[aQ];
      };
      aP.prototype.getAttributeNamesMutated = function () {
        var aR = [];
        if (!this.attributeOldValues) {
          return aR;
        }
        for (var aQ in this.attributeOldValues) {
          aR.push(aQ);
        }
        return aR;
      };
      aP.prototype.attributeMutated = function (aR, aQ) {
        this.attributes = true;
        this.attributeOldValues = this.attributeOldValues || {};
        if (aR in this.attributeOldValues) {
          return;
        }
        this.attributeOldValues[aR] = aQ;
      };
      aP.prototype.characterDataMutated = function (aQ) {
        if (this.characterData) {
          return;
        }
        this.characterData = true;
        this.characterDataOldValue = aQ;
      };
      aP.prototype.removedFromParent = function (aQ) {
        this.childList = true;
        if (this.added || this.oldParentNode) {
          this.added = false;
        } else {
          this.oldParentNode = aQ;
        }
      };
      aP.prototype.insertedIntoParent = function () {
        this.childList = true;
        this.added = true;
      };
      aP.prototype.getOldParent = function () {
        if (this.childList) {
          if (this.oldParentNode) {
            return this.oldParentNode;
          }
          if (this.added) {
            return null;
          }
        }
        return this.node.parentNode;
      };
      return aP;
    })();
    var ao = (function () {
      function aP() {
        this.added = new J();
        this.removed = new J();
        this.maybeMoved = new J();
        this.oldPrevious = new J();
        this.moved = undefined;
      }
      return aP;
    })();
    var W = (function (aQ) {
      b(aP, aQ);
      function aP(aU, aS) {
        aQ.call(this);
        this.rootNode = aU;
        this.reachableCache = undefined;
        this.wasReachableCache = undefined;
        this.anyParentsChanged = false;
        this.anyAttributesChanged = false;
        this.anyCharacterDataChanged = false;
        for (var aR = 0; aR < aS.length; aR++) {
          var aT = aS[aR];
          switch (aT.type) {
            case "childList":
              this.anyParentsChanged = true;
              for (var aV = 0; aV < aT.removedNodes.length; aV++) {
                var aW = aT.removedNodes[aV];
                this.getChange(aW).removedFromParent(aT.target);
              }
              for (var aV = 0; aV < aT.addedNodes.length; aV++) {
                var aW = aT.addedNodes[aV];
                this.getChange(aW).insertedIntoParent();
              }
              break;
            case "attributes":
              this.anyAttributesChanged = true;
              var aX = this.getChange(aT.target);
              aX.attributeMutated(aT.attributeName, aT.oldValue);
              break;
            case "characterData":
              this.anyCharacterDataChanged = true;
              var aX = this.getChange(aT.target);
              aX.characterDataMutated(aT.oldValue);
              break;
          }
        }
      }
      aP.prototype.getChange = function (aR) {
        var aS = this.get(aR);
        if (!aS) {
          aS = new ab(aR);
          this.set(aR, aS);
        }
        return aS;
      };
      aP.prototype.getOldParent = function (aR) {
        var aS = this.get(aR);
        return aS ? aS.getOldParent() : aR.parentNode;
      };
      aP.prototype.getIsReachable = function (aR) {
        if (aR === this.rootNode) {
          return true;
        }
        if (!aR) {
          return false;
        }
        this.reachableCache = this.reachableCache || new J();
        var aS = this.reachableCache.get(aR);
        if (aS === undefined) {
          aS = this.getIsReachable(aR.parentNode);
          this.reachableCache.set(aR, aS);
        }
        return aS;
      };
      aP.prototype.getWasReachable = function (aR) {
        if (aR === this.rootNode) {
          return true;
        }
        if (!aR) {
          return false;
        }
        this.wasReachableCache = this.wasReachableCache || new J();
        var aS = this.wasReachableCache.get(aR);
        if (aS === undefined) {
          aS = this.getWasReachable(this.getOldParent(aR));
          this.wasReachableCache.set(aR, aS);
        }
        return aS;
      };
      aP.prototype.reachabilityChange = function (aR) {
        if (this.getIsReachable(aR)) {
          return this.getWasReachable(aR) ? aC.STAYED_IN : aC.ENTERED;
        }
        return this.getWasReachable(aR) ? aC.EXITED : aC.STAYED_OUT;
      };
      return aP;
    })(J);
    var K = (function () {
      function aP(aR, aQ, aS, aU, aT) {
        this.rootNode = aR;
        this.mutations = aQ;
        this.selectors = aS;
        this.calcReordered = aU;
        this.calcOldPreviousSibling = aT;
        this.treeChanges = new W(aR, aQ);
        this.entered = [];
        this.exited = [];
        this.stayedIn = new J();
        this.visited = new J();
        this.childListChangeMap = undefined;
        this.characterDataOnly = undefined;
        this.matchCache = undefined;
        this.processMutations();
      }
      aP.prototype.processMutations = function () {
        if (
          !this.treeChanges.anyParentsChanged &&
          !this.treeChanges.anyAttributesChanged
        ) {
          return;
        }
        var aQ = this.treeChanges.keys();
        for (var aR = 0; aR < aQ.length; aR++) {
          this.visitNode(aQ[aR], undefined);
        }
      };
      aP.prototype.visitNode = function (aT, aR) {
        if (this.visited.has(aT)) {
          return;
        }
        this.visited.set(aT, true);
        var aV = this.treeChanges.get(aT);
        var aS = aR;
        if ((aV && aV.childList) || aS == undefined) {
          aS = this.treeChanges.reachabilityChange(aT);
        }
        if (aS === aC.STAYED_OUT) {
          return;
        }
        this.matchabilityChange(aT);
        if (aS === aC.ENTERED) {
          this.entered.push(aT);
        } else {
          if (aS === aC.EXITED) {
            this.exited.push(aT);
            this.ensureHasOldPreviousSiblingIfNeeded(aT);
          } else {
            if (aS === aC.STAYED_IN) {
              var aQ = aC.STAYED_IN;
              if (aV && aV.childList) {
                if (aV.oldParentNode !== aT.parentNode) {
                  aQ = aC.REPARENTED;
                  this.ensureHasOldPreviousSiblingIfNeeded(aT);
                } else {
                  if (this.calcReordered && this.wasReordered(aT)) {
                    aQ = aC.REORDERED;
                  }
                }
              }
              this.stayedIn.set(aT, aQ);
            }
          }
        }
        if (aS === aC.STAYED_IN) {
          return;
        }
        for (var aU = aT.firstChild; aU; aU = aU.nextSibling) {
          this.visitNode(aU, aS);
        }
      };
      aP.prototype.ensureHasOldPreviousSiblingIfNeeded = function (aS) {
        if (!this.calcOldPreviousSibling) {
          return;
        }
        this.processChildlistChanges();
        var aQ = aS.parentNode;
        var aR = this.treeChanges.get(aS);
        if (aR && aR.oldParentNode) {
          aQ = aR.oldParentNode;
        }
        var aT = this.childListChangeMap.get(aQ);
        if (!aT) {
          aT = new ao();
          this.childListChangeMap.set(aQ, aT);
        }
        if (!aT.oldPrevious.has(aS)) {
          aT.oldPrevious.set(aS, aS.previousSibling);
        }
      };
      aP.prototype.getChanged = function (aS, aU, aX) {
        this.selectors = aU;
        this.characterDataOnly = aX;
        for (var aT = 0; aT < this.entered.length; aT++) {
          var aV = this.entered[aT];
          var aW = this.matchabilityChange(aV);
          if (aW === aC.ENTERED || aW === aC.STAYED_IN) {
            aS.added.push(aV);
          }
        }
        var aQ = this.stayedIn.keys();
        for (var aT = 0; aT < aQ.length; aT++) {
          var aV = aQ[aT];
          var aW = this.matchabilityChange(aV);
          if (aW === aC.ENTERED) {
            aS.added.push(aV);
          } else {
            if (aW === aC.EXITED) {
              aS.removed.push(aV);
            } else {
              if (aW === aC.STAYED_IN && (aS.reparented || aS.reordered)) {
                var aR = this.stayedIn.get(aV);
                if (aS.reparented && aR === aC.REPARENTED) {
                  aS.reparented.push(aV);
                } else {
                  if (aS.reordered && aR === aC.REORDERED) {
                    aS.reordered.push(aV);
                  }
                }
              }
            }
          }
        }
        for (var aT = 0; aT < this.exited.length; aT++) {
          var aV = this.exited[aT];
          var aW = this.matchabilityChange(aV);
          if (aW === aC.EXITED || aW === aC.STAYED_IN) {
            aS.removed.push(aV);
          }
        }
      };
      aP.prototype.getOldParentNode = function (aR) {
        var aS = this.treeChanges.get(aR);
        if (aS && aS.childList) {
          return aS.oldParentNode ? aS.oldParentNode : null;
        }
        var aQ = this.treeChanges.reachabilityChange(aR);
        if (aQ === aC.STAYED_OUT || aQ === aC.ENTERED) {
          throw Error("getOldParentNode requested on invalid node.");
        }
        return aR.parentNode;
      };
      aP.prototype.getOldPreviousSibling = function (aS) {
        var aQ = aS.parentNode;
        var aR = this.treeChanges.get(aS);
        if (aR && aR.oldParentNode) {
          aQ = aR.oldParentNode;
        }
        var aT = this.childListChangeMap.get(aQ);
        if (!aT) {
          throw Error("getOldPreviousSibling requested on invalid node.");
        }
        return aT.oldPrevious.get(aS);
      };
      aP.prototype.getOldAttribute = function (aR, aQ) {
        var aT = this.treeChanges.get(aR);
        if (!aT || !aT.attributes) {
          throw Error("getOldAttribute requested on invalid node.");
        }
        var aS = aT.getAttributeOldValue(aQ);
        if (aS === undefined) {
          throw Error(
            "getOldAttribute requested for unchanged attribute name."
          );
        }
        return aS;
      };
      aP.prototype.attributeChangedNodes = function (aY) {
        if (!this.treeChanges.anyAttributesChanged) {
          return {};
        }
        var aT;
        var aV;
        if (aY) {
          aT = {};
          aV = {};
          for (var aZ = 0; aZ < aY.length; aZ++) {
            var a0 = aY[aZ];
            aT[a0] = true;
            aV[a0.toLowerCase()] = a0;
          }
        }
        var a2 = {};
        var aR = this.treeChanges.keys();
        for (var aZ = 0; aZ < aR.length; aZ++) {
          var aU = aR[aZ];
          var a1 = this.treeChanges.get(aU);
          if (!a1.attributes) {
            continue;
          }
          if (
            aC.STAYED_IN !== this.treeChanges.reachabilityChange(aU) ||
            aC.STAYED_IN !== this.matchabilityChange(aU)
          ) {
            continue;
          }
          var aX = aU;
          var aS = a1.getAttributeNamesMutated();
          for (var aW = 0; aW < aS.length; aW++) {
            var a0 = aS[aW];
            if (aT && !aT[a0] && !(a1.isCaseInsensitive && aV[a0])) {
              continue;
            }
            var aQ = a1.getAttributeOldValue(a0);
            if (aQ === aX.getAttribute(a0)) {
              continue;
            }
            if (aV && a1.isCaseInsensitive) {
              a0 = aV[a0];
            }
            a2[a0] = a2[a0] || [];
            a2[a0].push(aX);
          }
        }
        return a2;
      };
      aP.prototype.getOldCharacterData = function (aQ) {
        var aR = this.treeChanges.get(aQ);
        if (!aR || !aR.characterData) {
          throw Error("getOldCharacterData requested on invalid node.");
        }
        return aR.characterDataOldValue;
      };
      aP.prototype.getCharacterDataChanged = function () {
        if (!this.treeChanges.anyCharacterDataChanged) {
          return [];
        }
        var aR = this.treeChanges.keys();
        var aQ = [];
        for (var aS = 0; aS < aR.length; aS++) {
          var aT = aR[aS];
          if (aC.STAYED_IN !== this.treeChanges.reachabilityChange(aT)) {
            continue;
          }
          var aU = this.treeChanges.get(aT);
          if (!aU.characterData || aT.textContent == aU.characterDataOldValue) {
            continue;
          }
          aQ.push(aT);
        }
        return aQ;
      };
      aP.prototype.computeMatchabilityChange = function (aR, aT) {
        if (!this.matchCache) {
          this.matchCache = [];
        }
        if (!this.matchCache[aR.uid]) {
          this.matchCache[aR.uid] = new J();
        }
        var aS = this.matchCache[aR.uid];
        var aQ = aS.get(aT);
        if (aQ === undefined) {
          aQ = aR.matchabilityChange(aT, this.treeChanges.get(aT));
          aS.set(aT, aQ);
        }
        return aQ;
      };
      aP.prototype.matchabilityChange = function (aU) {
        var aV = this;
        if (this.characterDataOnly) {
          switch (aU.nodeType) {
            case P:
            case w:
              return aC.STAYED_IN;
            default:
              return aC.STAYED_OUT;
          }
        }
        if (!this.selectors) {
          return aC.STAYED_IN;
        }
        if (aU.nodeType !== N) {
          return aC.STAYED_OUT;
        }
        var aT = aU;
        var aR = this.selectors.map(function (aW) {
          return aV.computeMatchabilityChange(aW, aT);
        });
        var aQ = aC.STAYED_OUT;
        var aS = 0;
        while (aQ !== aC.STAYED_IN && aS < aR.length) {
          switch (aR[aS]) {
            case aC.STAYED_IN:
              aQ = aC.STAYED_IN;
              break;
            case aC.ENTERED:
              if (aQ === aC.EXITED) {
                aQ = aC.STAYED_IN;
              } else {
                aQ = aC.ENTERED;
              }
              break;
            case aC.EXITED:
              if (aQ === aC.ENTERED) {
                aQ = aC.STAYED_IN;
              } else {
                aQ = aC.EXITED;
              }
              break;
          }
          aS++;
        }
        return aQ;
      };
      aP.prototype.getChildlistChange = function (aQ) {
        var aR = this.childListChangeMap.get(aQ);
        if (!aR) {
          aR = new ao();
          this.childListChangeMap.set(aQ, aR);
        }
        return aR;
      };
      aP.prototype.processChildlistChanges = function () {
        if (this.childListChangeMap) {
          return;
        }
        this.childListChangeMap = new J();
        for (var aT = 0; aT < this.mutations.length; aT++) {
          var aR = this.mutations[aT];
          if (aR.type != "childList") {
            continue;
          }
          if (
            this.treeChanges.reachabilityChange(aR.target) !== aC.STAYED_IN &&
            !this.calcOldPreviousSibling
          ) {
            continue;
          }
          var aW = this.getChildlistChange(aR.target);
          var aQ = aR.previousSibling;
          function aV(aY, aX) {
            if (
              !aY ||
              aW.oldPrevious.has(aY) ||
              aW.added.has(aY) ||
              aW.maybeMoved.has(aY)
            ) {
              return;
            }
            if (aX && (aW.added.has(aX) || aW.maybeMoved.has(aX))) {
              return;
            }
            aW.oldPrevious.set(aY, aX);
          }
          for (var aS = 0; aS < aR.removedNodes.length; aS++) {
            var aU = aR.removedNodes[aS];
            aV(aU, aQ);
            if (aW.added.has(aU)) {
              aW.added["delete"](aU);
            } else {
              aW.removed.set(aU, true);
              aW.maybeMoved["delete"](aU);
            }
            aQ = aU;
          }
          aV(aR.nextSibling, aQ);
          for (var aS = 0; aS < aR.addedNodes.length; aS++) {
            var aU = aR.addedNodes[aS];
            if (aW.removed.has(aU)) {
              aW.removed["delete"](aU);
              aW.maybeMoved.set(aU, true);
            } else {
              aW.added.set(aU, true);
            }
          }
        }
      };
      aP.prototype.wasReordered = function (aR) {
        if (!this.treeChanges.anyParentsChanged) {
          return false;
        }
        this.processChildlistChanges();
        var aS = aR.parentNode;
        var aX = this.treeChanges.get(aR);
        if (aX && aX.oldParentNode) {
          aS = aX.oldParentNode;
        }
        var aV = this.childListChangeMap.get(aS);
        if (!aV) {
          return false;
        }
        if (aV.moved) {
          return aV.moved.get(aR);
        }
        aV.moved = new J();
        var aQ = new J();
        function aU(a0) {
          if (!a0) {
            return false;
          }
          if (!aV.maybeMoved.has(a0)) {
            return false;
          }
          var a1 = aV.moved.get(a0);
          if (a1 !== undefined) {
            return a1;
          }
          if (aQ.has(a0)) {
            a1 = true;
          } else {
            aQ.set(a0, true);
            a1 = aZ(a0) !== aY(a0);
          }
          if (aQ.has(a0)) {
            aQ["delete"](a0);
            aV.moved.set(a0, a1);
          } else {
            a1 = aV.moved.get(a0);
          }
          return a1;
        }
        var aW = new J();
        function aY(a1) {
          var a0 = aW.get(a1);
          if (a0 !== undefined) {
            return a0;
          }
          a0 = aV.oldPrevious.get(a1);
          while (a0 && (aV.removed.has(a0) || aU(a0))) {
            a0 = aY(a0);
          }
          if (a0 === undefined) {
            a0 = a1.previousSibling;
          }
          aW.set(a1, a0);
          return a0;
        }
        var aT = new J();
        function aZ(a1) {
          if (aT.has(a1)) {
            return aT.get(a1);
          }
          var a0 = a1.previousSibling;
          while (a0 && (aV.added.has(a0) || aU(a0))) {
            a0 = a0.previousSibling;
          }
          aT.set(a1, a0);
          return a0;
        }
        aV.maybeMoved.keys().forEach(aU);
        return aV.moved.get(aR);
      };
      return aP;
    })();
    var ac = (function () {
      function aP(aQ, aT) {
        var aV = this;
        this.projection = aQ;
        this.added = [];
        this.removed = [];
        this.reparented =
          aT.all || aT.element || aT.characterData ? [] : undefined;
        this.reordered = aT.all ? [] : undefined;
        aQ.getChanged(this, aT.elementFilter, aT.characterData);
        if (aT.all || aT.attribute || aT.attributeList) {
          var aS = aT.attribute ? [aT.attribute] : aT.attributeList;
          var aR = aQ.attributeChangedNodes(aS);
          if (aT.attribute) {
            this.valueChanged = aR[aT.attribute] || [];
          } else {
            this.attributeChanged = aR;
            if (aT.attributeList) {
              aT.attributeList.forEach(function (aW) {
                if (!aV.attributeChanged.hasOwnProperty(aW)) {
                  aV.attributeChanged[aW] = [];
                }
              });
            }
          }
        }
        if (aT.all || aT.characterData) {
          var aU = aQ.getCharacterDataChanged();
          if (aT.characterData) {
            this.valueChanged = aU;
          } else {
            this.characterDataChanged = aU;
          }
        }
        if (this.reordered) {
          this.getOldPreviousSibling = aQ.getOldPreviousSibling.bind(aQ);
        }
      }
      aP.prototype.getOldParentNode = function (aQ) {
        return this.projection.getOldParentNode(aQ);
      };
      aP.prototype.getOldAttribute = function (aR, aQ) {
        return this.projection.getOldAttribute(aR, aQ);
      };
      aP.prototype.getOldCharacterData = function (aQ) {
        return this.projection.getOldCharacterData(aQ);
      };
      aP.prototype.getOldPreviousSibling = function (aQ) {
        return this.projection.getOldPreviousSibling(aQ);
      };
      return aP;
    })();
    var aq = /[a-zA-Z_]+/;
    var aw = /[a-zA-Z0-9_\-]+/;
    function R(aP) {
      return '"' + aP.replace(/"/, '\\"') + '"';
    }
    var ap = (function () {
      function aP() {}
      aP.prototype.matches = function (aQ) {
        if (aQ === null) {
          return false;
        }
        if (this.attrValue === undefined) {
          return true;
        }
        if (!this.contains) {
          return this.attrValue == aQ;
        }
        var aS = aQ.split(" ");
        for (var aR = 0; aR < aS.length; aR++) {
          if (this.attrValue === aS[aR]) {
            return true;
          }
        }
        return false;
      };
      aP.prototype.toString = function () {
        if (this.attrName === "class" && this.contains) {
          return "." + this.attrValue;
        }
        if (this.attrName === "id" && !this.contains) {
          return "#" + this.attrValue;
        }
        if (this.contains) {
          return "[" + this.attrName + "~=" + R(this.attrValue) + "]";
        }
        if ("attrValue" in this) {
          return "[" + this.attrName + "=" + R(this.attrValue) + "]";
        }
        return "[" + this.attrName + "]";
      };
      return aP;
    })();
    var aG = (function () {
      function aP() {
        this.uid = aP.nextUid++;
        this.qualifiers = [];
      }
      Object.defineProperty(aP.prototype, "caseInsensitiveTagName", {
        get: function () {
          return this.tagName.toUpperCase();
        },
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(aP.prototype, "selectorString", {
        get: function () {
          return this.tagName + this.qualifiers.join("");
        },
        enumerable: true,
        configurable: true,
      });
      aP.prototype.isMatching = function (aQ) {
        return aQ[aP.matchesSelector](this.selectorString);
      };
      aP.prototype.wasMatching = function (aS, aY, aV) {
        if (!aY || !aY.attributes) {
          return aV;
        }
        var aT = aY.isCaseInsensitive
          ? this.caseInsensitiveTagName
          : this.tagName;
        if (aT !== "*" && aT !== aS.tagName) {
          return false;
        }
        var aR = [];
        var aW = false;
        for (var aU = 0; aU < this.qualifiers.length; aU++) {
          var aX = this.qualifiers[aU];
          var aQ = aY.getAttributeOldValue(aX.attrName);
          aR.push(aQ);
          aW = aW || aQ !== undefined;
        }
        if (!aW) {
          return aV;
        }
        for (var aU = 0; aU < this.qualifiers.length; aU++) {
          var aX = this.qualifiers[aU];
          var aQ = aR[aU];
          if (aQ === undefined) {
            aQ = aS.getAttribute(aX.attrName);
          }
          if (!aX.matches(aQ)) {
            return false;
          }
        }
        return true;
      };
      aP.prototype.matchabilityChange = function (aQ, aS) {
        var aR = this.isMatching(aQ);
        if (aR) {
          return this.wasMatching(aQ, aS, aR) ? aC.STAYED_IN : aC.ENTERED;
        } else {
          return this.wasMatching(aQ, aS, aR) ? aC.EXITED : aC.STAYED_OUT;
        }
      };
      aP.parseSelectors = function (a3) {
        var aV = [];
        var aX;
        var aZ;
        function a1() {
          if (aX) {
            if (aZ) {
              aX.qualifiers.push(aZ);
              aZ = undefined;
            }
            aV.push(aX);
          }
          aX = new aP();
        }
        function a0() {
          if (aZ) {
            aX.qualifiers.push(aZ);
          }
          aZ = new ap();
        }
        var bf = /\s/;
        var aQ;
        var aR = "Invalid or unsupported selector syntax.";
        var aY = 1;
        var a8 = 2;
        var a2 = 3;
        var a9 = 4;
        var bd = 5;
        var a6 = 6;
        var aS = 7;
        var bb = 8;
        var aT = 9;
        var a7 = 10;
        var be = 11;
        var aW = 12;
        var a5 = 13;
        var a4 = 14;
        var aU = aY;
        var ba = 0;
        while (ba < a3.length) {
          var bc = a3[ba++];
          switch (aU) {
            case aY:
              if (bc.match(aq)) {
                a1();
                aX.tagName = bc;
                aU = a8;
                break;
              }
              if (bc == "*") {
                a1();
                aX.tagName = "*";
                aU = a2;
                break;
              }
              if (bc == ".") {
                a1();
                a0();
                aX.tagName = "*";
                aZ.attrName = "class";
                aZ.contains = true;
                aU = a9;
                break;
              }
              if (bc == "#") {
                a1();
                a0();
                aX.tagName = "*";
                aZ.attrName = "id";
                aU = a9;
                break;
              }
              if (bc == "[") {
                a1();
                a0();
                aX.tagName = "*";
                aZ.attrName = "";
                aU = a6;
                break;
              }
              if (bc.match(bf)) {
                break;
              }
              throw Error(aR);
            case a8:
              if (bc.match(aw)) {
                aX.tagName += bc;
                break;
              }
              if (bc == ".") {
                a0();
                aZ.attrName = "class";
                aZ.contains = true;
                aU = a9;
                break;
              }
              if (bc == "#") {
                a0();
                aZ.attrName = "id";
                aU = a9;
                break;
              }
              if (bc == "[") {
                a0();
                aZ.attrName = "";
                aU = a6;
                break;
              }
              if (bc.match(bf)) {
                aU = a4;
                break;
              }
              if (bc == ",") {
                aU = aY;
                break;
              }
              throw Error(aR);
            case a2:
              if (bc == ".") {
                a0();
                aZ.attrName = "class";
                aZ.contains = true;
                aU = a9;
                break;
              }
              if (bc == "#") {
                a0();
                aZ.attrName = "id";
                aU = a9;
                break;
              }
              if (bc == "[") {
                a0();
                aZ.attrName = "";
                aU = a6;
                break;
              }
              if (bc.match(bf)) {
                aU = a4;
                break;
              }
              if (bc == ",") {
                aU = aY;
                break;
              }
              throw Error(aR);
            case a9:
              if (bc.match(aq)) {
                aZ.attrValue = bc;
                aU = bd;
                break;
              }
              throw Error(aR);
            case bd:
              if (bc.match(aw)) {
                aZ.attrValue += bc;
                break;
              }
              if (bc == ".") {
                a0();
                aZ.attrName = "class";
                aZ.contains = true;
                aU = a9;
                break;
              }
              if (bc == "#") {
                a0();
                aZ.attrName = "id";
                aU = a9;
                break;
              }
              if (bc == "[") {
                a0();
                aU = a6;
                break;
              }
              if (bc.match(bf)) {
                aU = a4;
                break;
              }
              if (bc == ",") {
                aU = aY;
                break;
              }
              throw Error(aR);
            case a6:
              if (bc.match(aq)) {
                aZ.attrName = bc;
                aU = aS;
                break;
              }
              if (bc.match(bf)) {
                break;
              }
              throw Error(aR);
            case aS:
              if (bc.match(aw)) {
                aZ.attrName += bc;
                break;
              }
              if (bc.match(bf)) {
                aU = bb;
                break;
              }
              if (bc == "~") {
                aZ.contains = true;
                aU = aT;
                break;
              }
              if (bc == "=") {
                aZ.attrValue = "";
                aU = be;
                break;
              }
              if (bc == "]") {
                aU = a2;
                break;
              }
              throw Error(aR);
            case bb:
              if (bc == "~") {
                aZ.contains = true;
                aU = aT;
                break;
              }
              if (bc == "=") {
                aZ.attrValue = "";
                aU = be;
                break;
              }
              if (bc == "]") {
                aU = a2;
                break;
              }
              if (bc.match(bf)) {
                break;
              }
              throw Error(aR);
            case aT:
              if (bc == "=") {
                aZ.attrValue = "";
                aU = be;
                break;
              }
              throw Error(aR);
            case a7:
              if (bc == "]") {
                aU = a2;
                break;
              }
              if (bc.match(bf)) {
                break;
              }
              throw Error(aR);
            case be:
              if (bc.match(bf)) {
                break;
              }
              if (bc == '"' || bc == "'") {
                aQ = bc;
                aU = a5;
                break;
              }
              aZ.attrValue += bc;
              aU = aW;
              break;
            case aW:
              if (bc.match(bf)) {
                aU = a7;
                break;
              }
              if (bc == "]") {
                aU = a2;
                break;
              }
              if (bc == "'" || bc == '"') {
                throw Error(aR);
              }
              aZ.attrValue += bc;
              break;
            case a5:
              if (bc == aQ) {
                aU = a7;
                break;
              }
              aZ.attrValue += bc;
              break;
            case a4:
              if (bc.match(bf)) {
                break;
              }
              if (bc == ",") {
                aU = aY;
                break;
              }
              throw Error(aR);
          }
        }
        switch (aU) {
          case aY:
          case a8:
          case a2:
          case bd:
          case a4:
            a1();
            break;
          default:
            throw Error(aR);
        }
        if (!aV.length) {
          throw Error(aR);
        }
        return aV;
      };
      aP.nextUid = 1;
      aP.matchesSelector = (function () {
        var aQ = document.createElement("div");
        if (typeof aQ.webkitMatchesSelector === "function") {
          return "webkitMatchesSelector";
        }
        if (typeof aQ.mozMatchesSelector === "function") {
          return "mozMatchesSelector";
        }
        if (typeof aQ.msMatchesSelector === "function") {
          return "msMatchesSelector";
        }
        return "matchesSelector";
      })();
      return aP;
    })();
    var m = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/;
    function j(aP) {
      if (typeof aP != "string") {
        throw Error(
          "Invalid request opion. attribute must be a non-zero length string."
        );
      }
      aP = aP.trim();
      if (!aP) {
        throw Error(
          "Invalid request opion. attribute must be a non-zero length string."
        );
      }
      if (!aP.match(m)) {
        throw Error("Invalid request option. invalid attribute name: " + aP);
      }
      return aP;
    }
    function az(aV) {
      if (!aV.trim().length) {
        throw Error(
          "Invalid request option: elementAttributes must contain at least one attribute."
        );
      }
      var aU = {};
      var aP = {};
      var aT = aV.split(/\s+/);
      for (var aR = 0; aR < aT.length; aR++) {
        var aQ = aT[aR];
        if (!aQ) {
          continue;
        }
        var aQ = j(aQ);
        var aS = aQ.toLowerCase();
        if (aU[aS]) {
          throw Error(
            "Invalid request option: observing multiple case variations of the same attribute is not supported."
          );
        }
        aP[aQ] = true;
        aU[aS] = true;
      }
      return Object.keys(aP);
    }
    function X(aQ) {
      var aP = {};
      aQ.forEach(function (aR) {
        aR.qualifiers.forEach(function (aS) {
          aP[aS.attrName] = true;
        });
      });
      return Object.keys(aP);
    }
    var d = (function () {
      function aP(aQ) {
        var aR = this;
        this.connected = false;
        this.options = aP.validateOptions(aQ);
        this.observerOptions = aP.createObserverOptions(this.options.queries);
        this.root = this.options.rootNode;
        this.callback = this.options.callback;
        this.elementFilter = Array.prototype.concat.apply(
          [],
          this.options.queries.map(function (aS) {
            return aS.elementFilter ? aS.elementFilter : [];
          })
        );
        if (!this.elementFilter.length) {
          this.elementFilter = undefined;
        }
        this.calcReordered = this.options.queries.some(function (aS) {
          return aS.all;
        });
        this.queryValidators = [];
        if (aP.createQueryValidator) {
          this.queryValidators = this.options.queries.map(function (aS) {
            return aP.createQueryValidator(aR.root, aS);
          });
        }
        this.observer = new E(function (aS) {
          aR.observerCallback(aS);
        });
        this.reconnect();
      }
      aP.createObserverOptions = function (aR) {
        var aT = { childList: true, subtree: true };
        var aQ;
        function aS(aU) {
          if (aT.attributes && !aQ) {
            return;
          }
          aT.attributes = true;
          aT.attributeOldValue = true;
          if (!aU) {
            aQ = undefined;
            return;
          }
          aQ = aQ || {};
          aU.forEach(function (aV) {
            aQ[aV] = true;
            aQ[aV.toLowerCase()] = true;
          });
        }
        aR.forEach(function (aV) {
          if (aV.characterData) {
            aT.characterData = true;
            aT.characterDataOldValue = true;
            return;
          }
          if (aV.all) {
            aS();
            aT.characterData = true;
            aT.characterDataOldValue = true;
            return;
          }
          if (aV.attribute) {
            aS([aV.attribute.trim()]);
            return;
          }
          var aU = X(aV.elementFilter).concat(aV.attributeList || []);
          if (aU.length) {
            aS(aU);
          }
        });
        if (aQ) {
          aT.attributeFilter = Object.keys(aQ);
        }
        return aT;
      };
      aP.validateOptions = function (aQ) {
        for (var aW in aQ) {
          if (!(aW in aP.optionKeys)) {
            throw Error("Invalid option: " + aW);
          }
        }
        if (typeof aQ.callback !== "function") {
          throw Error(
            "Invalid options: callback is required and must be a function"
          );
        }
        if (!aQ.queries || !aQ.queries.length) {
          throw Error(
            "Invalid options: queries must contain at least one query request object."
          );
        }
        var aU = {
          callback: aQ.callback,
          rootNode: aQ.rootNode || document,
          observeOwnChanges: !!aQ.observeOwnChanges,
          oldPreviousSibling: !!aQ.oldPreviousSibling,
          queries: [],
        };
        for (var aR = 0; aR < aQ.queries.length; aR++) {
          var aT = aQ.queries[aR];
          if (aT.all) {
            if (Object.keys(aT).length > 1) {
              throw Error("Invalid request option. all has no options.");
            }
            aU.queries.push({ all: true });
            continue;
          }
          if ("attribute" in aT) {
            var aV = { attribute: j(aT.attribute) };
            aV.elementFilter = aG.parseSelectors("*[" + aV.attribute + "]");
            if (Object.keys(aT).length > 1) {
              throw Error("Invalid request option. attribute has no options.");
            }
            aU.queries.push(aV);
            continue;
          }
          if ("element" in aT) {
            var aS = Object.keys(aT).length;
            var aV = {
              element: aT.element,
              elementFilter: aG.parseSelectors(aT.element),
            };
            if (aT.hasOwnProperty("elementAttributes")) {
              aV.attributeList = az(aT.elementAttributes);
              aS--;
            }
            if (aS > 1) {
              throw Error(
                "Invalid request option. element only allows elementAttributes option."
              );
            }
            aU.queries.push(aV);
            continue;
          }
          if (aT.characterData) {
            if (Object.keys(aT).length > 1) {
              throw Error(
                "Invalid request option. characterData has no options."
              );
            }
            aU.queries.push({ characterData: true });
            continue;
          }
          throw Error("Invalid request option. Unknown query request.");
        }
        return aU;
      };
      aP.prototype.createSummaries = function (aR) {
        if (!aR || !aR.length) {
          return [];
        }
        var aQ = new K(
          this.root,
          aR,
          this.elementFilter,
          this.calcReordered,
          this.options.oldPreviousSibling
        );
        var aT = [];
        for (var aS = 0; aS < this.options.queries.length; aS++) {
          aT.push(new ac(aQ, this.options.queries[aS]));
        }
        return aT;
      };
      aP.prototype.checkpointQueryValidators = function () {
        this.queryValidators.forEach(function (aQ) {
          if (aQ) {
            aQ.recordPreviousState();
          }
        });
      };
      aP.prototype.runQueryValidators = function (aQ) {
        this.queryValidators.forEach(function (aS, aR) {
          if (aS) {
            aS.validate(aQ[aR]);
          }
        });
      };
      aP.prototype.changesToReport = function (aQ) {
        return aQ.some(function (aR) {
          var aU = [
            "added",
            "removed",
            "reordered",
            "reparented",
            "valueChanged",
            "characterDataChanged",
          ];
          if (
            aU.some(function (aV) {
              return aR[aV] && aR[aV].length;
            })
          ) {
            return true;
          }
          if (aR.attributeChanged) {
            var aT = Object.keys(aR.attributeChanged);
            var aS = aT.some(function (aV) {
              return !!aR.attributeChanged[aV].length;
            });
            if (aS) {
              return true;
            }
          }
          return false;
        });
      };
      aP.prototype.observerCallback = function (aQ) {
        if (!this.options.observeOwnChanges) {
          this.observer.disconnect();
        }
        var aR = this.createSummaries(aQ);
        this.runQueryValidators(aR);
        if (this.options.observeOwnChanges) {
          this.checkpointQueryValidators();
        }
        if (this.changesToReport(aR)) {
          this.callback(aR);
        }
        if (!this.options.observeOwnChanges && this.connected) {
          this.checkpointQueryValidators();
          this.observer.observe(this.root, this.observerOptions);
        }
      };
      aP.prototype.reconnect = function () {
        if (this.connected) {
          throw Error("Already connected");
        }
        this.observer.observe(this.root, this.observerOptions);
        this.connected = true;
        this.checkpointQueryValidators();
      };
      aP.prototype.takeSummaries = function () {
        if (!this.connected) {
          throw Error("Not connected");
        }
        var aQ = this.createSummaries(this.observer.takeRecords());
        return this.changesToReport(aQ) ? aQ : undefined;
      };
      aP.prototype.disconnect = function () {
        var aQ = this.takeSummaries();
        this.observer.disconnect();
        this.connected = false;
        return aQ;
      };
      aP.NodeMap = J;
      aP.parseElementFilter = aG.parseSelectors;
      aP.optionKeys = {
        callback: true,
        queries: true,
        rootNode: true,
        oldPreviousSibling: true,
        observeOwnChanges: true,
      };
      return aP;
    })();
    var y = (function () {
      function aP(aV, aW, aQ) {
        var aU = this;
        this.target = aV;
        this.mirror = aW;
        this.nextId = 1;
        this.knownNodes = new d.NodeMap();
        var aX = this.serializeNode(aV).id;
        var aS = [];
        for (var aR = aV.firstChild; aR; aR = aR.nextSibling) {
          aS.push(this.serializeNode(aR, true));
        }
        this.mirror.initialize(aX, aS);
        var aY = this;
        var aT = [{ all: true }];
        if (aQ) {
          aT = aT.concat(aQ);
        }
        this.mutationSummary = new d({
          rootNode: aV,
          callback: function (aZ) {
            aU.applyChanged(aZ);
          },
          queries: aT,
        });
      }
      aP.prototype.disconnect = function () {
        if (this.mutationSummary) {
          this.mutationSummary.disconnect();
          this.mutationSummary = undefined;
        }
      };
      aP.prototype.rememberNode = function (aQ) {
        var aR = this.nextId++;
        this.knownNodes.set(aQ, aR);
        return aR;
      };
      aP.prototype.forgetNode = function (aQ) {
        this.knownNodes["delete"](aQ);
      };
      aP.prototype.serializeNode = function (aT, aU, a3, a1) {
        if (aT === null) {
          return null;
        }
        var aR = this.knownNodes.get(aT);
        if (aR !== undefined) {
          return { id: aR };
        }
        var aX = { nodeType: aT.nodeType, id: this.rememberNode(aT) };
        var a2 = aN.shouldMaskElementRecursive(aT, a3, a1);
        a3 = a2.isIgnoredField;
        a1 = a2.isIgnoredContent;
        switch (aX.nodeType) {
          case o:
            var a0 = aT;
            aX.name = a0.name;
            aX.publicId = a0.publicId;
            aX.systemId = a0.systemId;
            break;
          case P:
            aX.textContent = " ";
            break;
          case w:
            if (aT.textContent && !a1 && aN.shouldMaskContent(aT, true)) {
              aX.textContent = aN.maskFormField(aT.textContent);
            } else {
              aX.textContent = aN.getMaskedTextContent(aT, a3, a1);
            }
            break;
          case N:
            aX.tagName = aT.tagName;
            aX.attributes = {};
            if ("SCRIPT" === aX.tagName || "NOSCRIPT" === aX.tagName) {
              break;
            }
            if (
              "STYLE" === aX.tagName &&
              (("string" === typeof aT.innerText &&
                aT.innerText.trim() === "") ||
                ("string" === typeof aT.innerHTML &&
                  aT.innerHTML.trim() === "")) &&
              O.styleSheets &&
              O.styleSheets.length
            ) {
              var aQ;
              for (var aV = 0; aV < O.styleSheets.length; aV++) {
                if (O.styleSheets[aV]) {
                  var aZ = O.styleSheets[aV];
                  if (
                    aZ &&
                    aZ.ownerNode &&
                    !aZ.href &&
                    aZ.ownerNode === aT &&
                    aZ.cssRules &&
                    aZ.cssRules.length
                  ) {
                    var aY = "";
                    for (var aW = 0; aW < aZ.cssRules.length; aW++) {
                      if (aZ.cssRules[aW].cssText) {
                        aY += aZ.cssRules[aW].cssText + " ";
                      }
                    }
                    aQ = O.createTextNode(aY);
                    aX.childNodes = [this.serializeNode(aQ, false, a3, a1)];
                    break;
                  }
                }
              }
              if (aQ) {
                break;
              }
            }
            aX.attributes = this.getAttributesFromNode(aT, a3, a1);
            if (aU && aT.childNodes.length) {
              aX.childNodes = [];
              for (var aS = aT.firstChild; aS; aS = aS.nextSibling) {
                aX.childNodes.push(this.serializeNode(aS, true, a3, a1));
              }
            }
            break;
        }
        return aX;
      };
      aP.prototype.getAttributesFromNode = function (aU, a4, a0) {
        a0 = a0 || false;
        a4 = a4 || false;
        var aV = {};
        var aY;
        for (var aW = 0; aW < aU.attributes.length; aW++) {
          var aZ = aU.attributes[aW];
          if (aZ && "value" in aZ) {
            aY = aZ.value;
          } else {
            aY = "";
          }
          var aX = false;
          if (
            aZ.name === "value" &&
            aU.tagName === "INPUT" &&
            aU.value &&
            (!aU.type ||
              String(aU.type).toLowerCase() === "text" ||
              String(aU.type).toLowerCase() === "number")
          ) {
            aY = aU.value;
          }
          if (
            aZ.name === "src" &&
            (aU.tagName === "IMG" ||
              (aU.tagName === "INPUT" && aU.type === "image")) &&
            aN.shouldMaskContent(aU, true)
          ) {
            if (!aN.hasAttribute(aU, "height")) {
              aV.height = aN.getHeight(aU);
            }
            if (!aN.hasAttribute(aU, "width")) {
              aV.width = aN.getWidth(aU);
            }
            aY =
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==";
            aV.src = aY;
          }
          if (
            aZ.name === "value" &&
            aU.tagName === "INPUT" &&
            aU.value &&
            String(aU.type).toLowerCase() === "password"
          ) {
            aX = true;
          }
          if (
            "INPUT" === aU.tagName &&
            aU.type &&
            aU.type === "hidden" &&
            "value" === aZ.name
          ) {
            aV[aZ.name] = "";
          } else {
            if (
              "INPUT" === aU.tagName &&
              "value" === aZ.name &&
              (!aI || a4 || aN.shouldMaskField(aU, false))
            ) {
              aV[aZ.name] = aN.maskFormField(aY, aX);
            } else {
              if (
                ("title" === aZ.name ||
                  "alt" === aZ.name ||
                  "label" === aZ.name ||
                  "placeholder" === aZ.name) &&
                (a0 || aN.shouldMaskContent(aU, false))
              ) {
                aV[aZ.name] = aN.maskFormField(aY);
              } else {
                aV[aZ.name] = aY;
              }
            }
          }
          if ("IFRAME" === aU.tagName && aZ.name === "srcdoc") {
            aV[aZ.name] = "";
          }
        }
        if (
          "IFRAME" === aU.tagName &&
          (aU.scrollWidth <= 1 || aU.scrollHeight <= 1)
        ) {
          aV.src = "about:blank";
        } else {
          if ("META" === aU.tagName) {
            if (
              aU.attributes.property &&
              String(aU.attributes.property.value).indexOf("og:") >= 0
            ) {
              aV = {};
            } else {
              if (aU.attributes.name) {
                var a3 = String(aU.attributes.name.value).toLowerCase();
                if (
                  a3.indexOf("twitter:") >= 0 ||
                  a3.indexOf("description") >= 0 ||
                  a3.indexOf("keywords") >= 0
                ) {
                  aV = {};
                }
              }
            }
          } else {
            if ("LINK" === aU.tagName) {
              if (aU.attributes.rel) {
                var a2 = String(aU.attributes.rel.value).toLowerCase();
                var a1 = [
                  "icon",
                  "preload",
                  "preconnect",
                  "dns-prefetch",
                  "next",
                  "prev",
                  "alternate",
                  "search",
                ];
                if (a1.indexOf(a2) >= 0) {
                  aV = {};
                }
              }
              if (aU.attributes.href) {
                var aT = String(aU.attributes.href.value)
                  .toLowerCase()
                  .indexOf(".scr.kaspersky-labs.com");
                if (aT > 5 && aT <= 20) {
                  aV = {};
                }
              }
              if (aU.href) {
                if (typeof I.URL === "function") {
                  var aS = ak.onCssLoaded(aU.href);
                  var aQ = 3;
                  if (!aS) {
                    aR(aU.href);
                    function aR(a5) {
                      if (aQ > 0) {
                        setTimeout(function () {
                          aQ--;
                          aS = ak.onCssLoaded(aU.href);
                          if (!aS) {
                            aR(aU.href);
                          }
                        }, 300);
                      }
                    }
                  }
                }
                aV.url = aU.href;
              }
            }
          }
        }
        return aV;
      };
      aP.prototype.serializeAddedAndMoved = function (aT, aQ, aU) {
        var aW = this;
        var aS = aT.concat(aQ).concat(aU);
        var aV = new d.NodeMap();
        aS.forEach(function (aZ) {
          var aY = aZ.parentNode;
          var aX = aV.get(aY);
          if (!aX) {
            aX = new d.NodeMap();
            aV.set(aY, aX);
          }
          aX.set(aZ, true);
        });
        var aR = [];
        aV.keys().forEach(function (aY) {
          var aX = aV.get(aY);
          var a0 = aX.keys();
          while (a0.length) {
            var aZ = a0[0];
            while (aZ.previousSibling && aX.has(aZ.previousSibling)) {
              aZ = aZ.previousSibling;
            }
            while (aZ && aX.has(aZ)) {
              var a1 = aW.serializeNode(aZ);
              a1.previousSibling = aW.serializeNode(aZ.previousSibling);
              a1.parentNode = aW.serializeNode(aZ.parentNode);
              aR.push(a1);
              aX["delete"](aZ);
              aZ = aZ.nextSibling;
            }
            var a0 = aX.keys();
          }
        });
        return aR;
      };
      aP.prototype.serializeAttributeChanges = function (aQ) {
        var aS = this;
        var aR = new d.NodeMap();
        Object.keys(aQ).forEach(function (aT) {
          aQ[aT].forEach(function (aW) {
            var aU = aR.get(aW);
            if (!aU) {
              aU = aS.serializeNode(aW);
              aU.attributes = {};
              aR.set(aW, aU);
            }
            var aV = aN.shouldMaskElementRecursive(aW);
            var aX = aS.getAttributesFromNode(
              aW,
              aV.isIgnoredField,
              aV.isIgnoredContent
            );
            aU.attributes[aT] = aT in aX ? aX[aT] : null;
          });
        });
        return aR.keys().map(function (aT) {
          return aR.get(aT);
        });
      };
      aP.prototype.applyChanged = function (aT) {
        var aW = this;
        var aR = aT[0];
        var aU = aR.removed.map(function (aX) {
          return aW.serializeNode(aX);
        });
        var aS = this.serializeAddedAndMoved(
          aR.added,
          aR.reparented,
          aR.reordered
        );
        var aQ = this.serializeAttributeChanges(aR.attributeChanged);
        var aV = aR.characterDataChanged.map(function (aY) {
          var aZ = aW.serializeNode(aY);
          if (aY.nodeType === w && aY.parentNode) {
            aY = aY.parentNode;
          }
          var aX = aN.shouldMaskElementRecursive(aY, false, false);
          aZ.textContent = aN.getMaskedTextContent(
            aY,
            aX.isIgnoredField,
            aX.isIgnoredContent
          );
          return aZ;
        });
        this.mirror.applyChanged(aU, aS, aQ, aV);
        aR.removed.forEach(function (aX) {
          aW.forgetNode(aX);
        });
      };
      return aP;
    })();
  }
  /*!!
   * Copyright (C) InnoCraft Ltd - All rights reserved.
   *
   * All information contained herein is, and remains the property of InnoCraft Ltd.
   *
   * @link https://www.innocraft.com/
   * @license For license details see https://www.innocraft.com/license
   */
  var O = document;
  var I = window;
  var F = 0;
  var l = false;
  var L = !u();
  var am = true;
  var n = null;
  var at = false;
  var ad = "";
  var T = false;
  var g = 15 * 60 * 1000;
  var aa = 30 * 60 * 1000;
  var S = 10;
  var av = 5 * 60 * 1000;
  var aA = 2000;
  var C = 1000;
  var H = 100;
  var Y = 500;
  var G = false;
  function u() {
    if ("object" !== typeof JSON) {
      return true;
    }
    if (
      "function" !== typeof Array.prototype.map ||
      "function" !== typeof Array.prototype.filter ||
      "function" !== typeof Array.prototype.indexOf
    ) {
      return true;
    }
    if ("function" !== typeof Element.prototype.getBoundingClientRect) {
      return true;
    }
    var aP = ["cc.bingj.com"];
    if (
      aP.indexOf(O.domain) !== -1 ||
      String(O.domain).indexOf(".googleusercontent.com") !== -1
    ) {
      return true;
    }
    var aR =
      /alexa|baidu|bing|bot|crawler|curl|crawling|duckduckgo|facebookexternalhit|feedburner|googlebot|google web preview|linkdex|nagios|postrank|pingdom|robot|slurp|spider|yahoo!|yandex|wget/i.test(
        navigator.userAgent
      );
    if (aR) {
      return true;
    }
    var aQ = String(O.referrer);
    if (aQ && aQ.indexOf("module=Overlay&action=startOverlaySession") >= 0) {
      return true;
    }
    return false;
  }
  function U() {
    if (l && "object" === typeof console) {
      if (typeof console.debug === "function") {
        console.debug.apply(console, arguments);
      } else {
        if (typeof console.log === "function") {
          console.log.apply(console, arguments);
        }
      }
    }
  }
  var D = function () {
    return true;
  };
  var s = 1;
  var aJ = 2;
  var h = 3;
  var V = 4;
  var aK = 5;
  var ag = 6;
  var a = 7;
  var k = 8;
  var e = 9;
  var ar = 10;
  var p = 11;
  var ay = 12;
  var aF = 13;
  var aD = 0;
  var af = 1;
  var c = 2;
  var aI = true;
  var Q = false;
  var an = false;
  var aO = true;
  var M = null;
  var A = false;
  var ae = {};
  if ("object" === typeof JSON) {
    ae = JSON;
  }
  var aj = false;
  var al = [];
  var aL = {
    hasObserver: function () {
      if (typeof WebKitMutationObserver !== "undefined") {
        return true;
      } else {
        if (typeof MutationObserver !== "undefined") {
          return true;
        }
      }
      return false;
    },
  };
  var ai = aL.hasObserver();
  var r = {
    getScrollLeft: function () {
      return (
        I.document.body.scrollLeft || I.document.documentElement.scrollLeft
      );
    },
    getScrollTop: function () {
      return I.document.body.scrollTop || I.document.documentElement.scrollTop;
    },
    getDocumentHeight: function () {
      return au.safeMathMax([
        O.body.offsetHeight,
        O.body.scrollHeight,
        O.documentElement.offsetHeight,
        O.documentElement.clientHeight,
        O.documentElement.scrollHeight,
        1,
      ]);
    },
    getDocumentWidth: function () {
      return au.safeMathMax([
        O.body.offsetWidth,
        O.body.scrollWidth,
        O.documentElement.offsetWidth,
        O.documentElement.clientWidth,
        O.documentElement.scrollWidth,
        1,
      ]);
    },
    getWindowSize: function () {
      var aP =
        I.innerHeight || O.documentElement.clientHeight || O.body.clientHeight;
      var aQ =
        I.innerWidth || O.documentElement.clientWidth || O.body.clientWidth;
      return { width: aQ, height: aP };
    },
  };
  var t = {
    namespace: "hsr",
    set: function (aR, aV, aT) {
      aV = parseInt(aV, 10);
      aT = parseInt(aT, 10);
      var aU = "";
      var aQ = t.getHsrConfigs(aR);
      var aS = false;
      for (var aP = 0; aP < aQ.length; aP++) {
        if (aQ[aP] && aQ[aP].id === aV) {
          aS = true;
          aQ[aP].value = aT;
        }
        aU += aQ[aP].id + "." + aQ[aP].value + "_";
      }
      if (!aS) {
        aU += aV + "." + aT;
      }
      aR.setSessionCookie(this.namespace, aU);
    },
    get: function (aR, aS) {
      aS = parseInt(aS, 10);
      var aQ = t.getHsrConfigs(aR);
      for (var aP = 0; aP < aQ.length; aP++) {
        if (aQ[aP] && aQ[aP].id === aS) {
          return aQ[aP].value;
        }
      }
      return null;
    },
    getHsrConfigs: function (aS) {
      var aT = aS.getCookie(this.namespace);
      if (!aT) {
        return [];
      }
      var aR = [];
      var aU = String(aT).split("_"),
        aP;
      for (var aQ = 0; aQ < aU.length; aQ++) {
        aP = aU[aQ].split(".");
        if (aP && aP.length === 2) {
          aR.push({ id: parseInt(aP[0], 10), value: parseInt(aP[1], 10) });
        }
      }
      return aR;
    },
  };
  var aN = {
    getAttribute: function (aQ, aP) {
      if (aQ && aQ.getAttribute && aP) {
        return aQ.getAttribute(aP);
      }
      return null;
    },
    hasAttribute: function (aQ, aP) {
      if (aQ && aQ.hasAttribute) {
        return aQ.hasAttribute(aP);
      }
      if (aQ && aQ.attributes) {
        var aR = typeof aQ.attributes[aP];
        return aR !== "undefined";
      }
      return false;
    },
    getTagName: function (aP) {
      if (aP && aP.tagName) {
        return ("" + aP.tagName).toLowerCase();
      }
      return null;
    },
    getCssClasses: function (aQ) {
      if (aQ && aQ.className) {
        var aP =
          typeof aQ.className === "string"
            ? au.trim(aQ.className).split(/\s+/)
            : [];
        return aP;
      }
      return [];
    },
    getHeight: function (aP) {
      if (aP && (aP.nodeType === 9 || aP.tagName === "HTML")) {
        return r.getDocumentHeight();
      }
      if (aP === window) {
        return O.documentElement.clientHeight;
      }
      return au.safeMathMax([aP.scrollHeight, aP.offsetHeight, 0]);
    },
    getWidth: function (aP) {
      if (aP && (aP.nodeType === 9 || aP.tagName === "HTML")) {
        return r.getDocumentWidth();
      }
      if (aP === window) {
        return O.documentElement.clientWidth;
      }
      return au.safeMathMax([aP.scrollWidth, aP.offsetWidth, 0]);
    },
    getOffset: function (aQ) {
      if (!aQ.getBoundingClientRect) {
        return { top: 0, left: 0, width: 0, height: 0 };
      }
      var aP = (aQ && aQ.ownerDocument).documentElement;
      var aR = aQ.getBoundingClientRect();
      return {
        top:
          Math.floor(aR.top) +
          (I.pageYOffset || O.scrollTop || 0) -
          (aP.clientTop || 0),
        left:
          Math.floor(aR.left) +
          (I.pageXOffset || O.scrollLeft || 0) -
          (aP.clientLeft || 0),
        width: au.safeMathMax([aR.width, aN.getWidth(aQ)]),
        height: au.safeMathMax([aR.height, aN.getHeight(aQ)]),
      };
    },
    getSelector: function (aQ, aP) {
      return i.cssPath(aQ, false);
    },
    getMaskedTextContent: function (aQ, aR, aP) {
      if (
        "undefined" !== typeof aQ.parentNode &&
        aQ.parentNode &&
        aQ.parentNode.tagName === "TEXTAREA" &&
        (!aI || aR || aN.shouldMaskField(aQ, false))
      ) {
        return aN.maskFormField(au.trim(aQ.textContent));
      } else {
        if (aP || aN.shouldMaskContent(aQ, false)) {
          return aN.maskFormField(au.trim(aQ.textContent));
        }
      }
      return aQ.textContent;
    },
    maskFormField: function (aR, aQ) {
      if (!aR) {
        return aR;
      }
      aR = String(aR).replace(/./g, "*");
      if (aQ) {
        var aP = Math.floor(Math.random() * 10) + 1;
        aR = aR + new Array(aP + 1).join("*");
      }
      return aR;
    },
    shouldMaskElementRecursive: function (aS, aT, aQ) {
      if (!aQ) {
        aQ = false;
      }
      if (!aT) {
        aT = false;
      }
      if (!aT && aN.shouldMaskField(aS, false)) {
        aT = true;
      } else {
        if (aT && !aN.shouldMaskField(aS, false)) {
          aT = false;
        }
      }
      if (!aQ && aN.shouldMaskContent(aS, false)) {
        aQ = true;
      } else {
        if (aQ && aS.nodeName !== "#text" && !aN.shouldMaskContent(aS, false)) {
          aQ = false;
        }
      }
      var aR = aS && aS.parentNode ? aS.parentNode : null;
      var aP = true;
      while (aR) {
        if (
          !aT &&
          (aR.nodeType === "INPUT" ||
            aR.nodeType === "SELECT" ||
            aR.nodeType === "TEXTAREA") &&
          aN.shouldMaskField(aR, false)
        ) {
          aT = true;
        }
        if (
          !aQ &&
          aP &&
          aS.nodeType !== "INPUT" &&
          aS.nodeType !== "SELECT" &&
          aS.nodeType !== "TEXTAREA" &&
          !aN.hasAttribute(aS, "data-matomo-unmask") &&
          aS.nodeName !== "#text"
        ) {
          if (aN.shouldMaskContent(aR, false)) {
            aQ = true;
          } else {
            if (aN.hasAttribute(aR, "data-matomo-unmask")) {
              aP = false;
            }
          }
        }
        if (aT && aQ) {
          aR = null;
          break;
        } else {
          aR = aR.parentNode ? aR.parentNode : null;
        }
      }
      if (aT && aN.isAllowedInputType(aS)) {
        aT = false;
      }
      return { isIgnoredField: aT, isIgnoredContent: aQ };
    },
    shouldMaskField: function (aP, aY) {
      if (!aP) {
        return false;
      }
      var aV = aN.getAttribute(aP, "type");
      if (!aV) {
        aV = "text";
      } else {
        aV = String(aV).toLowerCase();
      }
      if (aN.isAllowedInputType(aP)) {
        return false;
      }
      var aT =
        aV === "radio" ||
        aV === "checkbox" ||
        (aP.nodeName && aP.nodeName === "SELECT");
      if (!aI) {
        if (aT) {
          return false;
        }
        return true;
      }
      var aW = aN.getAttribute(aP, "name");
      var aR = aN.getAttribute(aP, "id");
      var aS = aN.getAttribute(aP, "autocomplete");
      aW = au
        .trim(String(aW))
        .toLowerCase()
        .replace(/[\s_-]+/g, "");
      aR = au
        .trim(String(aR))
        .toLowerCase()
        .replace(/[\s_-]+/g, "");
      aS = au
        .trim(String(aS))
        .toLowerCase()
        .replace(/[\s_-]+/g, "");
      var aU = [
        "creditcardnumber",
        "off",
        "kreditkarte",
        "debitcard",
        "kreditkort",
        "kredietkaart",
        " kartakredytowa",
        "cvv",
        "cc",
        "ccc",
        "cccsc",
        "cccvc",
        "ccexpiry",
        "ccexpyear",
        "ccexpmonth",
        "cccvv",
        "cctype",
        "cvc",
        "exp",
        "ccname",
        "cardnumber",
        "ccnumber",
        "username",
        "creditcard",
        "name",
        "fullname",
        "familyname",
        "firstname",
        "vorname",
        "nachname",
        "lastname",
        "nickname",
        "surname",
        "login",
        "formlogin",
        "konto",
        "user",
        "website",
        "domain",
        "gender",
        "company",
        "firma",
        "geschlecht",
        "email",
        "emailaddress",
        "emailadresse",
        "mail",
        "epos",
        "ebost",
        "epost",
        "eposta",
        "authpw",
        "token_auth",
        "tokenauth",
        "token",
        "pin",
        "ibanaccountnum",
        "ibanaccountnumber",
        "account",
        "accountnum",
        "auth",
        "age",
        "alter",
        "tel",
        "city",
        "cell",
        "cellphone",
        "bic",
        "iban",
        "swift",
        "kontonummer",
        "konto",
        "kontonr",
        "phone",
        "mobile",
        "mobiili",
        "mobilne",
        "handynummer",
        "tÃ©lÃ©phone",
        "telefono",
        "ssn",
        "socialsecuritynumber",
        "socialsec",
        "socsec",
        "address",
        "addressline1",
        "addressline2",
        "billingaddress",
        "billingaddress1",
        "billingaddress2",
        "shippingaddress",
        "shippingaddress1",
        "shippingaddress2",
        "vat",
        "vatnumber",
        "gst",
        "gstnumber",
        "tax",
        "taxnumber",
        "steuernummer",
        "adresse",
        "indirizzo",
        "adres",
        "direcciÃ³n",
        "osoite",
        "address1",
        "address2",
        "address3",
        "street",
        "strasse",
        "rue",
        "via",
        "ulica",
        "calle",
        "sokak",
        "zip",
        "zipcode",
        "plz",
        "postleitzahl",
        "postalcode",
        "postcode",
        "dateofbirth",
        "dob",
        "telephone",
        "telefon",
        "telefonnr",
        "telefonnummer",
        "password",
        "passwort",
        "kennwort",
        "wachtwoord",
        "contraseÃ±a",
        "passord",
        "hasÅ‚o",
        "heslo",
        "wagwoord",
        "parole",
        "contrasenya",
        "heslo",
        "clientid",
        "identifier",
        "id",
        "consumersecret",
        "webhooksecret",
        "consumerkey",
        "keyconsumersecret",
        "keyconsumerkey",
        "clientsecret",
        "secret",
        "secretq",
        "secretquestion",
        "privatekey",
        "publickey",
        "pw",
        "pwd",
        "pwrd",
        "pword",
        "paword",
        "pasword",
        "paswort",
        "pass",
      ];
      if (
        aV === "password" ||
        aV === "email" ||
        aV === "tel" ||
        aV === "hidden" ||
        aU.indexOf(aW) !== -1 ||
        aU.indexOf(aR) !== -1 ||
        aU.indexOf(aS) !== -1 ||
        aN.hasAttribute(aP, "data-piwik-mask") ||
        aN.hasAttribute(aP, "data-matomo-mask")
      ) {
        return true;
      }
      if (!aT && aP && aP.value) {
        if (
          !aV ||
          aV === "text" ||
          aV === "number" ||
          (aP && aP.nodeName === "TEXTAREA")
        ) {
          if (/^\d{7,24}$/.test(String(aP.value))) {
            return true;
          }
          if (
            String(aP.value).indexOf("@") !== -1 &&
            String(aP.value).length > 2
          ) {
            return true;
          }
        }
      }
      if (aY) {
        var aX = aP.parentNode ? aP.parentNode : null;
        var aQ = false;
        while (aX) {
          if (
            aN.hasAttribute(aX, "data-piwik-mask") ||
            aN.hasAttribute(aX, "data-matomo-mask")
          ) {
            return true;
          } else {
            if (!aQ && aX && aN.hasAttribute(aX, "data-matomo-unmask")) {
              aQ = true;
            }
            aX = aX.parentNode ? aX.parentNode : null;
          }
        }
        if (aQ) {
          return false;
        }
      }
      if (aN.hasAttribute(aP, "data-matomo-unmask")) {
        return false;
      }
      if (aT) {
        return false;
      }
      return true;
    },
    shouldMaskContent: function (aR, aQ) {
      if (!aR) {
        return false;
      }
      if (
        aR.tagName &&
        aR.tagName !== "FORM" &&
        aN.hasAttribute(aR, "data-matomo-mask")
      ) {
        return true;
      }
      if (
        aR.tagName &&
        aR.tagName !== "FORM" &&
        aN.hasAttribute(aR, "data-matomo-unmask")
      ) {
        return false;
      }
      if (aQ) {
        var aP = aR.parentNode ? aR.parentNode : null;
        while (aP) {
          if (
            aR.nodeName === "#text" &&
            aN.hasAttribute(aP, "data-matomo-unmask")
          ) {
            return false;
          } else {
            if (
              aP.tagName !== "FORM" &&
              aN.hasAttribute(aP, "data-matomo-mask")
            ) {
              return true;
            } else {
              aP = aP.parentNode ? aP.parentNode : null;
            }
          }
        }
      }
      return false;
    },
    isAllowedInputType: function (aP) {
      return (
        aP.type &&
        ax.indexOf(aP.type) !== -1 &&
        !aN.hasAttribute(aP, "data-piwik-mask") &&
        !aN.hasAttribute(aP, "data-matomo-mask")
      );
    },
  };
  var au = {
    safeMathMax: function (aP) {
      var aQ = [];
      var aR;
      for (aR = 0; aR < aP.length; aR++) {
        if (this.isNumber(aP[aR])) {
          aQ.push(aP[aR]);
        }
      }
      if (aQ.length === 0) {
        return NaN;
      }
      return Math.max.apply(null, aQ);
    },
    isArray: function (aP) {
      return (
        typeof aP === "object" && aP !== null && typeof aP.length === "number"
      );
    },
    getCurrentTime: function () {
      return new Date().getTime();
    },
    getTimeSincePageReady: function () {
      if (!F) {
        return 0;
      }
      return new Date().getTime() - F;
    },
    roundTimeToSeconds: function (aP) {
      return Math.round(aP / 1000);
    },
    getRandomInt: function (aQ, aP) {
      return Math.round(Math.random() * (aP - aQ) + aQ);
    },
    isNumber: function (aP) {
      return !isNaN(aP);
    },
    trim: function (aP) {
      if (aP && String(aP) === aP) {
        return aP.replace(/^\s+|\s+$/g, "");
      }
      return aP;
    },
    generateUniqueId: function () {
      var aS = "";
      var aQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var aR = aQ.length;
      for (var aP = 0; aP < 6; aP++) {
        aS += aQ.charAt(Math.floor(Math.random() * aR));
      }
      return aS;
    },
  };
  function f(aP) {
    return location.href && location.href.indexOf(aP) > 0;
  }
  function x() {
    return f("pk_hsr_forcesample=1") || f("pk_hsr_capturescreen=1");
  }
  function v() {
    return f("pk_hsr_forcesample=0");
  }
  function Z(aP) {
    if (x()) {
      return true;
    }
    if (v()) {
      return false;
    }
    if (aP >= 100) {
      return true;
    }
    if (aP <= 0) {
      return false;
    }
    if (aP >= 1) {
      return aP >= au.getRandomInt(1, H);
    }
    return aP * 10 >= au.getRandomInt(1, H * 10);
  }
  function q(aP) {
    if ("undefined" !== typeof aP.HeatmapSessionRecording) {
      return;
    }
    aP.HeatmapSessionRecording = {
      myId: au.generateUniqueId(),
      hasReceivedConfig: false,
      hasRequestedConfig: false,
      hasTrackedData: false,
      hasSentStopTrackingEvent: false,
      enabled: true,
      hsrIdsToGetDOM: [],
      disable: function () {
        this.enabled = false;
      },
      enable: function () {
        this.enabled = true;
      },
      isEnabled: function () {
        return L && this.enabled;
      },
      numSentTrackingRequests: 0,
      Heatmap: {
        data: [],
        hsrids: [],
        configs: [],
        addConfig: function (aQ) {
          if ("object" !== typeof aQ || !aQ.id) {
            return;
          }
          aQ.id = parseInt(aQ.id, 10);
          this.configs.push(aQ);
          if ("undefined" === typeof aQ.sample_rate) {
            aQ.sample_rate = H;
          } else {
            aQ.sample_rate = Math.min(parseFloat(aQ.sample_rate), H);
          }
          if (aQ.id && Z(aQ.sample_rate) && D(aQ)) {
            this.addHsrId(aQ.id);
            if (aQ.getdom || f("pk_hsr_capturescreen=1")) {
              aP.HeatmapSessionRecording.hsrIdsToGetDOM.push(aQ.id);
            }
          }
        },
        addHsrId: function (aQ) {
          this.hsrids.push(aQ);
          if (aP.HeatmapSessionRecording.hasTrackedData) {
            z.recordData(af, { ty: a, id: aQ });
          }
        },
      },
      Both: { data: [] },
      Session: {
        data: [],
        hsrids: [],
        configs: [],
        addConfig: function (aS) {
          if ("object" !== typeof aS || !aS.id) {
            return;
          }
          aS.id = parseInt(aS.id, 10);
          if ("undefined" === typeof aS.sample_rate) {
            aS.sample_rate = H;
          } else {
            aS.sample_rate = Math.min(parseFloat(aS.sample_rate), H);
          }
          aS.conditionsMet = false;
          this.configs.push(aS);
          var aR = parseInt(aP.getSiteId(), 10);
          var aT = t.get(aP, aS.id);
          if (1 === aT && !v()) {
            aS.sample_rate = H;
            aS.activity = false;
            aS.min_time = 0;
          } else {
            if (x()) {
            } else {
              if (0 === aT || !Z(aS.sample_rate)) {
                t.set(aP, aS.id, 0);
                return;
              }
            }
          }
          this.checkConditionsMet();
          if (aS.min_time) {
            var aQ = this;
            Piwik.DOM.onReady(function () {
              var aU = aS.min_time * 1000 - au.getTimeSincePageReady() + 120;
              if (aU >= 0) {
                setTimeout(function () {
                  aQ.checkConditionsMet();
                }, aU);
              } else {
                aQ.checkConditionsMet();
              }
            });
          }
        },
        checkConditionsMet: function () {
          var aR;
          for (var aS = 0; aS < this.configs.length; aS++) {
            aR = this.configs[aS];
            if (aR && !aR.conditionsMet) {
              var aQ = true;
              if (
                aR.min_time &&
                aR.min_time >= au.roundTimeToSeconds(au.getTimeSincePageReady())
              ) {
                aQ = false;
              }
              if (aR.activity && !an) {
                an = r.getDocumentHeight() <= r.getWindowSize().height;
              }
              if (aR.activity && (!Q || !an)) {
                aQ = false;
              }
              if (aQ) {
                aR.conditionsMet = true;
                if (D(aR)) {
                  if (
                    "undefined" === typeof aR.keystrokes ||
                    !aR.keystrokes ||
                    aR.keystrokes === "0"
                  ) {
                    aI = false;
                  }
                  this.addHsrId(aR.id);
                }
              }
            }
          }
        },
        addHsrId: function (aQ) {
          this.hsrids.push(aQ);
          if (aP.HeatmapSessionRecording.hasTrackedData) {
            z.recordData(c, { ty: a, id: aQ });
          }
          var aR = parseInt(aP.getSiteId(), 10);
          t.set(aP, aQ, 1);
        },
      },
      addConfig: function (aQ) {
        this.hasRequestedConfig = true;
        this.hasReceivedConfig = true;
        if ("undefined" === typeof aQ || !aQ) {
          aM.checkAllConfigsReceived();
          return;
        }
        if ("object" === typeof aQ.heatmap) {
          this.Heatmap.addConfig(aQ.heatmap);
        }
        var aR;
        if (aQ.heatmaps && au.isArray(aQ.heatmaps) && aQ.heatmaps.length) {
          for (aR = 0; aR < aQ.heatmaps.length; aR++) {
            this.Heatmap.addConfig(aQ.heatmaps[aR]);
          }
        }
        if (ai) {
          if (aQ.sessions && au.isArray(aQ.sessions) && aQ.sessions.length) {
            for (aR = 0; aR < aQ.sessions.length; aR++) {
              this.Session.addConfig(aQ.sessions[aR]);
            }
          }
          if ("object" === typeof aQ.session) {
            this.Session.addConfig(aQ.session);
          }
        }
        aM.checkAllConfigsReceived();
      },
    };
  }
  var aB = r.getWindowSize();
  var z = {
    getPiwikTrackers: function () {
      if (null === n) {
        if ("object" === typeof Piwik && Piwik.getAsyncTrackers) {
          var aP = Piwik.getAsyncTrackers();
          if (!aP || !aP.length) {
            return [];
          }
          return aP;
        }
      }
      if (au.isArray(n)) {
        return n;
      }
      return [];
    },
    sendQueuedData: function (aW, aX) {
      if (!at || !ad) {
        return;
      }
      if (!aW || !aW.HeatmapSessionRecording) {
        return;
      }
      var aT = aW.HeatmapSessionRecording;
      if (!aT.isEnabled()) {
        return;
      }
      var aP = [];
      var aQ = [];
      if (aT.Heatmap.hsrids && aT.Heatmap.hsrids.length) {
        aP = aT.Heatmap.hsrids;
        if (aT.Heatmap.data.length) {
          aQ = aT.Heatmap.data;
          aT.Heatmap.data = [];
        }
      }
      var aV = aT.Session.hsrids && aT.Session.hsrids.length && ak.initialDOM;
      if (aV) {
        aP = aP.concat(aT.Session.hsrids);
        if (aT.Session.data.length) {
          aQ = aQ.concat(aT.Session.data);
          aT.Session.data = [];
          if (!aI) {
            for (var aR = aQ.length - 1; aR >= 0; aR--) {
              if (aQ[aR] && aQ[aR].ty && aQ[aR].ty === e) {
                aQ.splice(aR, 1);
              }
            }
          }
        }
      }
      if (aP.length && aT.Both.data.length) {
        aQ = aQ.concat(aT.Both.data);
        aT.Both.data = [];
      }
      if ("undefined" === typeof aX) {
        aX = this.shouldEndRecording(aW);
      }
      if (aX && aT.hasTrackedData && !aT.hasSentStopTrackingEvent && aV) {
        aQ.push({ ty: p });
        aT.hasSentStopTrackingEvent = true;
      }
      if (!aP || !aP.length || !aQ || !aQ.length) {
        return;
      }
      if (
        aW.HeatmapSessionRecording.hsrIdsToGetDOM &&
        aW.HeatmapSessionRecording.hsrIdsToGetDOM.length
      ) {
        if (!ak.initialDOM && ai) {
          var aU = new y(O, {
            initialize: function (aY, aZ) {
              ak.initialDOM = ae.stringify({ rootId: aY, children: aZ });
            },
          });
          aU.disconnect();
        }
        if (ak.initialDOM && ai) {
          for (
            var aS = 0;
            aS < aW.HeatmapSessionRecording.hsrIdsToGetDOM.length;
            aS++
          ) {
            aQ.push({
              ty: k,
              dom: ak.initialDOM,
              id: aW.HeatmapSessionRecording.hsrIdsToGetDOM[aS],
            });
          }
          aW.HeatmapSessionRecording.hsrIdsToGetDOM = [];
        }
      }
      aT.hasTrackedData = true;
      this.sendQueuedDataRequestNow(aW, aP, aQ);
      if (aX) {
        Piwik.HeatmapSessionRecording.disable();
      }
    },
    shouldEndRecording: function (aR) {
      var aU = au.getTimeSincePageReady();
      if (aa < aU) {
        return true;
      }
      if (g < aU) {
        var aT = aR.HeatmapSessionRecording;
        var aQ = !aT.numSentTrackingRequests || aT.numSentTrackingRequests <= S;
        var aP = 60 * 1000;
        var aS = M && aU < aP + M;
        if (aQ || aS) {
          g = aU + av;
        } else {
          return true;
        }
      }
      return false;
    },
    sendQueuedDataRequestNow: function (aX, aQ, aY) {
      var aR = "";
      for (var aS = 0; aS < aY.length; aS++) {
        for (var aP in aY[aS]) {
          if (Object.prototype.hasOwnProperty.call(aY[aS], aP)) {
            aR +=
              "&hsr_ev[" +
              aS +
              "][" +
              aP +
              "]=" +
              encodeURIComponent(aY[aS][aP]);
          }
        }
      }
      for (var aU = 0; aU < aQ.length; aU++) {
        aR += "&hsr_ids[]=" + encodeURIComponent(aQ[aU]);
      }
      var aV = "hsr_vid=" + ad + aR;
      var aW = r.getWindowSize();
      var aZ = r.getDocumentHeight();
      if (!ak.scrollMaxPercentage) {
        var aT = r.getScrollTop();
        ak.scrollMaxPercentage = parseInt(((aW.height + aT) / aZ) * C, 10);
      }
      aV += "&hsr_vw=" + encodeURIComponent(aW.width);
      aV += "&hsr_vh=" + encodeURIComponent(aW.height);
      aV += "&hsr_ti=" + au.getTimeSincePageReady();
      aV += "&hsr_smp=" + ak.scrollMaxPercentage;
      aV += "&hsr_fyp=" + parseInt((aB.height / aZ) * C, 10);
      aV += "&ca=1";
      aX.HeatmapSessionRecording.numSentTrackingRequests++;
      aX.trackRequest(aV, null, null, "HeatmapSessionRecording");
      U("track: " + aV);
    },
    recordData: function (aP, aQ) {
      if (!aj) {
        al.push({ type: aP, data: aQ });
        return;
      }
      var aR = z.getPiwikTrackers();
      aR.forEach(function (aS) {
        if (
          aS.HeatmapSessionRecording &&
          aS.HeatmapSessionRecording.isEnabled()
        ) {
          if (
            "object" === typeof aQ &&
            "undefined" !== typeof aQ.ti &&
            aQ.ti &&
            (!M || aQ.ti > M) &&
            aQ.ty &&
            aQ.ty !== ag
          ) {
            M = aQ.ti;
          }
          if (aD === aP) {
            aS.HeatmapSessionRecording.Both.data.push(aQ);
          } else {
            if (af === aP) {
              aS.HeatmapSessionRecording.Heatmap.data.push(aQ);
            } else {
              if (c === aP) {
                aS.HeatmapSessionRecording.Session.data.push(aQ);
              }
            }
          }
        }
      });
      if (l) {
        U("recorddata", ae.stringify(aQ));
      }
    },
    stopSendingData: function () {
      var aP = z.getPiwikTrackers();
      aP.forEach(function (aQ) {
        if (aQ.HeatmapSessionRecording) {
          var aR = aQ.HeatmapSessionRecording;
          if ("undefined" !== typeof aR.trackingInterval) {
            clearInterval(aR.trackingInterval);
            delete aR.trackingInterval;
          }
        }
      });
    },
    startSendingData: function () {
      var aP = z.getPiwikTrackers();
      aP.forEach(function (aQ) {
        if (
          aQ.HeatmapSessionRecording &&
          "undefined" === typeof aQ.HeatmapSessionRecording.trackingInterval
        ) {
          var aR = au.getRandomInt(10250, 11250);
          aQ.HeatmapSessionRecording.trackingInterval = setInterval(
            function () {
              z.sendQueuedData(aQ);
            },
            aR
          );
          z.sendQueuedData(aQ);
        }
      });
    },
  };
  function aE() {
    if (
      typeof window === "object" &&
      "function" === typeof I.piwikHeatmapSessionRecordingAsyncInit
    ) {
      I.piwikHeatmapSessionRecordingAsyncInit();
    }
    if (
      typeof window === "object" &&
      "function" === typeof I.matomoHeatmapSessionRecordingAsyncInit
    ) {
      I.matomoHeatmapSessionRecordingAsyncInit();
    }
    var aQ = al;
    al = [];
    aj = true;
    for (var aP = 0; aP < aQ.length; aP++) {
      z.recordData(aQ[aP].type, aQ[aP].data);
    }
    Piwik.DOM.onLoad(function () {
      at = true;
      setTimeout(function () {
        if (L) {
          var aR = z.getPiwikTrackers();
          if (aR && aR.length) {
            Piwik.HeatmapSessionRecording.enable();
          }
        }
      }, 10);
    });
  }
  var ak = {
    moveEvents: ["mousemove", "touchmove"],
    clickEvents: ["mousedown"],
    scrollEvents: ["scroll", "resize"],
    lastScroll: null,
    lastElementScroll: null,
    lastMove: null,
    lastResize: null,
    scrollMaxPercentage: 0,
    lastResizeInterval: null,
    lastScrollInterval: null,
    lastMoveInterval: null,
    isRecording: false,
    isRecordingMutations: false,
    startRecording: function () {
      if (!L || this.isRecording) {
        return;
      }
      this.isRecording = true;
      this.lastScrollInterval = setInterval(function () {
        if (ak.lastScroll) {
          var aP = ak.lastScroll;
          ak.lastScroll = null;
          var aQ = { ti: aP.time, ty: h, x: aP.scrollX, y: aP.scrollY };
          z.recordData(c, aQ);
        }
        if (ak.lastElementScroll) {
          var aP = ak.lastElementScroll;
          ak.lastElementScroll = null;
          var aQ = {
            ti: aP.time,
            ty: ay,
            s: aP.selector,
            x: aP.scrollX,
            y: aP.scrollY,
          };
          z.recordData(c, aQ);
        }
      }, 200);
      this.lastResizeInterval = setInterval(function () {
        if (ak.lastResize) {
          var aP = ak.lastResize;
          ak.lastResize = null;
          var aQ = { ti: aP.ti, ty: V, x: aP.width, y: aP.height };
          z.recordData(c, aQ);
        }
      }, 200);
      this.lastMoveInterval = setInterval(function () {
        if (ak.lastMove) {
          var aP = ak.lastMove;
          ak.lastMove = null;
          var aQ = {
            ti: aP.time,
            ty: s,
            s: aP.selector,
            x: aP.offsetx,
            y: aP.offsety,
          };
          z.recordData(aD, aQ);
        }
      }, 200);
      this.scrollEvents.forEach(function (aP) {
        I.addEventListener(aP, ak.onScroll, true);
      });
      this.clickEvents.forEach(function (aP) {
        I.addEventListener(aP, ak.onClick, true);
      });
      this.moveEvents.forEach(function (aP) {
        I.addEventListener(aP, ak.onMove, true);
      });
    },
    mirror: null,
    initialDOM: null,
    startRecordingMutations: function () {
      if (!L || !ai || this.isRecordingMutations) {
        return;
      }
      this.isRecordingMutations = true;
      I.addEventListener("resize", ak.onResize, true);
      I.addEventListener("change", ak.onFormChange, true);
      try {
        this.mirror = new y(document, {
          initialize: function (aQ, aR) {
            var aS = {
              ty: aK,
              ti: 0,
              te: ae.stringify({ rootId: aQ, children: aR }),
            };
            if (!ak.initialDOM) {
              ak.initialDOM = aS.te;
            }
            z.recordData(c, aS);
          },
          applyChanged: function (aT, aR, aQ, aU) {
            if (aT.length || aR.length || aQ.length || aU.length) {
              var aS = { ti: au.getTimeSincePageReady(), ty: ag, te: {} };
              if (aT.length) {
                aS.te.rem = aT;
              }
              if (aR.length) {
                aS.te.adOrMo = aR;
              }
              if (aQ.length) {
                aS.te.att = aQ;
              }
              if (aU.length) {
                aS.te.text = aU;
              }
              aS.te = ae.stringify(aS.te);
              z.recordData(c, aS);
            }
          },
        });
      } catch (aP) {
        U(aP);
      }
    },
    onResize: function () {
      var aP = r.getWindowSize();
      ak.lastResize = {
        ti: au.getTimeSincePageReady(),
        width: aP.width,
        height: aP.height,
      };
    },
    onFormChange: function (aX) {
      if (!("target" in aX) || !aX.target) {
        return;
      }
      var aS = aX.target;
      var aQ = aN.getTagName(aS);
      if (!aQ) {
        return;
      }
      var aR = au.getTimeSincePageReady();
      var aP = ar;
      var aT = false;
      if (aQ === "input") {
        var aW = aN.getAttribute(aS, "type");
        if (
          String(aW).toLowerCase() === "radio" ||
          String(aW).toLowerCase() === "checkbox"
        ) {
          aT = true;
        } else {
          aP = e;
        }
      } else {
        if (aQ === "textarea") {
          aP = e;
        } else {
          if (aQ !== "select") {
            return;
          }
        }
      }
      if (!aI && aP === e) {
        return;
      }
      var aU = aN.getSelector(aS);
      var aY = "";
      if (aT) {
        aY = aS.checked ? "1" : "0";
      } else {
        if (aP === e && "undefined" !== typeof aS.value) {
          aY = String(aS.value);
          if (aY > Y) {
            aY = aY.substr(0, Y);
          }
          if (aN.shouldMaskField(aS, true)) {
            aY = aN.maskFormField(
              aY,
              aN.getAttribute(aS, "type") === "password"
            );
          }
        } else {
          if (aP === ar && "undefined" !== typeof aS.value) {
            aY = String(aS.value);
          }
        }
      }
      var aV = { ti: aR, ty: aP, s: aU, te: aY };
      if (aU) {
        z.recordData(c, aV);
      } else {
        U("No selector found for text input ", aX);
      }
    },
    onScroll: function (aP) {
      if (!an) {
        an = true;
        ak.checkTrackersIfConditionsMet();
      }
      var aT = au.getTimeSincePageReady();
      if (
        aP &&
        aP.type &&
        aP.type === "scroll" &&
        aP.target &&
        aP.target !== O
      ) {
        var aZ = aP.target;
        if ("undefined" === typeof aZ.scrollTop) {
          return;
        }
        var aR = aZ.scrollTop;
        var aU = aZ.scrollLeft;
        var aS = aN.getWidth(aZ);
        var aQ = aN.getHeight(aZ);
        if (aS <= 0 || aQ <= 0 || !aS || !aQ) {
          return;
        }
        var aV = aN.getSelector(aZ);
        ak.lastElementScroll = {
          time: aT,
          selector: aV,
          scrollY: parseInt((C * aR) / aQ, 10),
          scrollX: parseInt((C * aU) / aS, 10),
        };
        return;
      }
      var aX = parseInt(r.getScrollTop(), 10);
      var aW = parseInt(r.getScrollLeft(), 10);
      var a1 = r.getDocumentHeight();
      var aY = r.getDocumentWidth();
      ak.lastScroll = {
        time: aT,
        scrollY: parseInt((C * aX) / a1, 10),
        scrollX: parseInt((C * aW) / aY, 10),
      };
      var a0 = parseInt((C * (aX + r.getWindowSize().height)) / a1, 10);
      if (a0 > ak.scrollMaxPercentage) {
        ak.scrollMaxPercentage = a0;
      }
    },
    checkTrackersIfConditionsMet: function () {
      var aQ = z.getPiwikTrackers();
      for (var aP = 0; aP < aQ.length; aP++) {
        if (
          aQ[aP] &&
          aQ[aP].HeatmapSessionRecording &&
          aQ[aP].HeatmapSessionRecording.Session
        ) {
          aQ[aP].HeatmapSessionRecording.Session.checkConditionsMet();
        }
      }
    },
    onClick: function (aU) {
      U("click");
      if (!Q) {
        Q = true;
        ak.checkTrackersIfConditionsMet();
      }
      if (
        !("target" in aU) ||
        !("pageY" in aU) ||
        !("pageX" in aU) ||
        !aU.target
      ) {
        return;
      }
      var aT = au.getTimeSincePageReady();
      ak.lastMove = null;
      var aV = aN.getOffset(aU.target);
      var aR = parseInt(((aU.pageX - aV.left) / aV.width) * aA, 10);
      var aQ = parseInt(((aU.pageY - aV.top) / aV.height) * aA, 10);
      var aP = aN.getSelector(aU.target);
      if (aR % 2 === 1) {
        aR++;
      }
      if (aQ % 2 === 1) {
        aQ++;
      }
      if (l && (isNaN(aR) || isNaN(aQ))) {
        U("could not detect x or y coordinate for selector " + aP, aU);
      }
      var aS = { ti: aT, ty: aJ, s: aP, x: aR, y: aQ };
      if (aP) {
        z.recordData(aD, aS);
      } else {
        U("No selector found for click ", aU);
      }
    },
    onCssLoaded: function (aR) {
      var aU = document.styleSheets;
      var aV = false;
      for (var aQ = 0; aQ < aU.length; aQ++) {
        if (aU[aQ].href && aU[aQ].href === aR) {
          aV = true;
          try {
            if (aU[aQ]["cssRules"]) {
              var aT = "";
              for (var aP = 0; aP < aU[aQ]["cssRules"].length; aP++) {
                aT = aT + aU[aQ]["cssRules"][aP]["cssText"] + " ";
              }
              ak.onCssContentFetched(aU[aQ].href, aT);
            }
          } catch (aS) {
            if (aS.code === 18) {
              (function (aW) {
                var aX = new XMLHttpRequest();
                aX.onreadystatechange = function () {
                  if (this.readyState == 4 && this.status == 200) {
                    ak.onCssContentFetched(aU[aW].href, aX.responseText);
                  }
                };
                aX.open("GET", aU[aW].href, true);
                aX.send();
              })(aQ);
            }
            if (l) {
              U("CSS fetching error" + aS.message, aU[aQ].href);
            }
          }
          break;
        }
      }
      return aV;
    },
    onCssContentFetched: function (aP, aQ) {
      if (!aQ) {
        U("CSS Content empty ", aP);
        return;
      }
      aQ = ak.updateAbsoluteUrlsInContent(aP, aQ);
      var aR = { ti: 0, ty: aF, s: aP, te: aQ };
      z.recordData(aD, aR);
    },
    updateAbsoluteUrlsInContent: function (aQ, aP) {
      return aP.replace(
        /url\((?!['"]?(?:data|http|https):)['"]?([^'"\)]*)['"]?\)/gi,
        function (aU, aS, aR) {
          try {
            var aT = new I.URL(aS, aQ);
            return aT.href ? aU.replace(aS, aT.href) : aU;
          } catch (aV) {
            return aU;
          }
        }
      );
    },
    onMove: function (aW) {
      if (!am) {
        return;
      }
      if (
        !("clientY" in aW) ||
        !("clientX" in aW) ||
        !("pageX" in aW) ||
        !("pageY" in aW)
      ) {
        return;
      }
      var aY = aW.clientX;
      var aX = aW.clientY;
      var aS = O.elementFromPoint(aY, aX);
      if (aS) {
        var aR = au.getTimeSincePageReady();
        var aU = aN.getOffset(aS);
        var aQ = parseInt(((aW.pageX - aU.left) / aU.width) * aA, 10);
        var aP = parseInt(((aW.pageY - aU.top) / aU.height) * aA, 10);
        if (aQ % 2 === 1) {
          aQ++;
        }
        if (aP % 2 === 1) {
          aP++;
        }
        var aT = aN.getSelector(aS);
        if (l && (isNaN(aQ) || isNaN(aP))) {
          U("could not detect x or y coordinate for selector " + aT, aW);
        }
        if (aT) {
          if (!G) {
            G = true;
            var aV = { ti: 0, ty: s, s: aT, x: aQ, y: aP };
            z.recordData(aD, aV);
          } else {
            ak.lastMove = { selector: aT, offsetx: aQ, offsety: aP, time: aR };
          }
        } else {
          U("No selector found for click ", aW);
        }
      }
    },
    stopRecording: function () {
      this.isRecording = false;
      if (this.lastResizeInterval !== null) {
        clearInterval(this.lastResizeInterval);
        this.lastResizeInterval = null;
      }
      if (this.lastScrollInterval !== null) {
        clearInterval(this.lastScrollInterval);
        this.lastScrollInterval = null;
      }
      if (this.lastMoveInterval !== null) {
        clearInterval(this.lastMoveInterval);
        this.lastMoveInterval = null;
      }
      this.scrollMaxPercentage = 0;
      this.lastScroll = null;
      this.lastElementScroll = null;
      this.lastMove = null;
      this.lastResize = null;
      this.scrollEvents.forEach(function (aP) {
        I.removeEventListener(aP, ak.onScroll, true);
      });
      this.moveEvents.forEach(function (aP) {
        I.removeEventListener(aP, ak.onMove, true);
      });
      this.clickEvents.forEach(function (aP) {
        I.removeEventListener(aP, ak.onClick, true);
      });
    },
    stopRecordingMutations: function () {
      this.isRecordingMutations = false;
      I.removeEventListener("resize", ak.onResize, true);
      I.removeEventListener("change", ak.onFormChange, true);
      this.initialDOM = null;
      if (this.mirror) {
        this.mirror.disconnect();
        this.mirror = null;
      }
    },
  };
  var aM = {
    fetch: function () {
      var aY = 0;
      var aT = z.getPiwikTrackers();
      if (!aT || !aT.length) {
        return;
      }
      for (var aS = 0; aS < aT.length; aS++) {
        var aX = aT[aS];
        if (
          aX &&
          aX.HeatmapSessionRecording &&
          !aX.HeatmapSessionRecording.hasRequestedConfig &&
          aX.HeatmapSessionRecording.isEnabled()
        ) {
          var aW = aX.getPiwikUrl();
          var aU = aX.getSiteId();
          if (!aW || !aU) {
            U(
              "cannot find piwik url for tracker or site, disabling heatmap & session recording"
            );
            aX.HeatmapSessionRecording.disable();
            aX.HeatmapSessionRecording.hasReceivedConfig = true;
            continue;
          }
          aX.HeatmapSessionRecording.hasRequestedConfig = true;
          if (aW.substr(-1, 1) !== "/") {
            aW += "/";
          }
          aY++;
          var aP;
          if (T) {
            aP = aX.getCurrentUrl();
          } else {
            aP = I.location.href;
            try {
              aP = decodeURIComponent(aP);
            } catch (aV) {
              aP = unescape(aP);
            }
          }
          aW +=
            "plugins/HeatmapSessionRecording/configs.php?idsite=" +
            encodeURIComponent(aU) +
            "&trackerid=" +
            aX.HeatmapSessionRecording.myId +
            "&url=" +
            encodeURIComponent(aP);
          var aQ = t.getHsrConfigs(aX);
          for (var aR = 0; aR < aQ.length; aR++) {
            aW +=
              "&hsr" +
              encodeURIComponent(aQ[aR].id) +
              "=" +
              encodeURIComponent(aQ[aR].value);
          }
          (function (a0) {
            var aZ = O.createElement("script");
            aZ.src = aW;
            aZ.async = true;
            aZ.defer = true;
            aZ.onerror = function () {
              a0.HeatmapSessionRecording.disable();
              a0.HeatmapSessionRecording.hasReceivedConfig = true;
              aM.checkAllConfigsReceived();
            };
            setTimeout(function () {
              var a2 = O.getElementsByTagName("head");
              if (a2 && a2.length && a2[0]) {
                a2[0].appendChild(aZ);
              } else {
                var a1 = O.getElementsByTagName("body");
                if (a1 && a1.length && a1[0]) {
                  a1[0].appendChild(aZ);
                }
              }
            }, 10);
          })(aX);
        }
      }
      if (aY === 0) {
        this.checkAllConfigsReceived();
      }
    },
    assign: function (aP) {
      var aS = z.getPiwikTrackers();
      for (var aQ = 0; aQ < aS.length; aQ++) {
        var aR = aS[aQ];
        if (aR && aR.HeatmapSessionRecording) {
          if (
            aR.getSiteId() == aP.idsite &&
            aR.HeatmapSessionRecording.myId === aP.trackerid
          ) {
            aR.HeatmapSessionRecording.addConfig(aP);
            break;
          }
        }
      }
      this.checkAllConfigsReceived();
    },
    checkAllConfigsReceived: function () {
      var aT = z.getPiwikTrackers();
      var aS = false;
      var aP = false;
      if (!aT || !aT.length) {
        return;
      }
      var aR;
      for (var aQ = 0; aQ < aT.length; aQ++) {
        if (aT[aQ].HeatmapSessionRecording) {
          aR = aT[aQ].HeatmapSessionRecording;
          if (!aR.hasReceivedConfig) {
            return;
          }
          if (aR.Heatmap.configs && aR.Heatmap.configs.length) {
            aS = true;
          }
          if (aR.Session.configs && aR.Session.configs.length) {
            aP = true;
          }
        }
      }
      if (!aS && !aP) {
        Piwik.HeatmapSessionRecording.disable();
        A = true;
      } else {
        if (!aP) {
          Piwik.DOM.onLoad(function () {
            setTimeout(function () {
              ak.stopRecordingMutations();
            }, 20);
          });
        }
      }
    },
  };
  function ah() {
    if (
      "object" === typeof window &&
      "object" === typeof I.Piwik &&
      "object" === typeof I.Piwik.HeatmapSessionRecording
    ) {
      return;
    }
    if ("object" === typeof window && !I.Piwik) {
      return;
    }
    ae = Piwik.JSON;
    Piwik.HeatmapSessionRecording = {
      utils: au,
      element: aN,
      storage: t,
      dom: r,
      tracking: z,
      recording: ak,
      RECORD_TYPE_BOTH: aD,
      RECORD_TYPE_HEATMAP: af,
      RECORD_TYPE_SESSION: c,
      configuration: aM,
      getIdView: function () {
        return ad;
      },
      disableRecordMovements: function () {
        am = false;
      },
      enableRecordMovements: function () {
        am = true;
      },
      isRecordingMovements: function () {
        return am;
      },
      disableAutoDetectNewPageView: function () {
        aO = false;
      },
      enableAutoDetectNewPageView: function () {
        aO = true;
      },
      isAutoDetectingNewPageViews: function () {
        return aO;
      },
      matchTrackerUrl: function () {
        return (T = true);
      },
      setTrigger: function (aQ) {
        if (typeof aQ === "function") {
          D = aQ;
        } else {
          throw Error("trigger needs to be a method");
        }
      },
      setNewPageView: function (aR) {
        if (u()) {
          return;
        }
        U("new pageview");
        var aQ = this.isEnabled();
        if (aQ) {
          this.disable();
        }
        ad = au.generateUniqueId();
        F = new Date().getTime();
        al = [];
        Q = false;
        an = false;
        this._resetTrackers();
        if (aQ || A) {
          this.enable(aR);
        }
      },
      _resetTrackers: function () {
        var aQ = z.getPiwikTrackers();
        aQ.forEach(function (aS) {
          var aR = true;
          if ("undefined" !== typeof aS.HeatmapSessionRecording) {
            aR = aS.HeatmapSessionRecording.enabled;
            delete aS.HeatmapSessionRecording;
          }
          q(aS);
          if (!aR) {
            aS.HeatmapSessionRecording.disable();
          }
        });
      },
      _setDisabled: function () {
        A = false;
        L = false;
      },
      disable: function () {
        if (u()) {
          return;
        }
        var aQ = z.getPiwikTrackers();
        aQ.forEach(function (aS) {
          var aR = false;
          z.sendQueuedData(aS, aR);
        });
        this._setDisabled();
        ak.stopRecording();
        ak.stopRecordingMutations();
        z.stopSendingData();
      },
      enable: function (aQ) {
        if (u()) {
          return;
        }
        L = true;
        A = false;
        if ("undefined" === typeof aQ || aQ === true) {
          aM.fetch();
        } else {
          if ("object" === typeof aQ) {
            var aR = z.getPiwikTrackers();
            aR.forEach(function (aS) {
              aS.HeatmapSessionRecording.addConfig(aQ);
            });
          } else {
            U("manual tracker config required");
          }
        }
        ak.startRecording();
        ak.startRecordingMutations();
        z.startSendingData();
      },
      isEnabled: function () {
        return L;
      },
      setMaxCaptureTime: function (aQ) {
        g = parseInt(aQ, 10) * 1000;
        if (g > aa) {
          g = aa;
        }
      },
      setMaxTextInputLength: function (aQ) {
        Y = aQ;
      },
      disableCaptureKeystrokes: function () {
        aI = false;
      },
      enableCaptureKeystrokes: function () {
        aI = true;
      },
      setMatomoTrackers: function (aQ) {
        this.setPiwikTrackers(aQ);
      },
      setPiwikTrackers: function (aQ) {
        if (aQ === null) {
          n = null;
          return;
        }
        if (!au.isArray(aQ)) {
          aQ = [aQ];
        }
        n = aQ;
        n.forEach(q);
        if (aj) {
          if (A) {
            this.enable();
          } else {
            if (L) {
              aM.fetch();
            }
          }
        }
      },
      enableDebugMode: function () {
        l = true;
      },
    };
    Piwik.DOM.onReady(function () {
      F = new Date().getTime();
    });
    Piwik.addPlugin("HeatmapSessionRecording", {
      log: function (aQ) {
        if (aO) {
          if (
            aQ.tracker &&
            aQ.tracker.getNumTrackedPageViews &&
            aQ.tracker.getNumTrackedPageViews() > 1
          ) {
            setTimeout(function () {
              Piwik.HeatmapSessionRecording.setNewPageView(true);
            }, 10);
          }
        }
        return "";
      },
      unload: function () {
        if (!u()) {
          var aQ = z.getPiwikTrackers();
          z.stopSendingData();
          aQ.forEach(function (aS) {
            var aR = false;
            z.sendQueuedData(aS, aR);
          });
        }
      },
    });
    if (I.Piwik.initialized) {
      var aP = Piwik.getAsyncTrackers();
      aP.forEach(q);
      Piwik.on("TrackerSetup", q);
      Piwik.retryMissedPluginCalls();
      aE();
      aM.fetch();
      Piwik.on("TrackerAdded", function () {
        if (A) {
          Piwik.HeatmapSessionRecording.enable();
        } else {
          aM.fetch();
        }
      });
    } else {
      Piwik.on("TrackerSetup", q);
      Piwik.on("MatomoInitialized", function () {
        aE();
        if (L || A) {
          aM.fetch();
        }
        Piwik.on("TrackerAdded", function () {
          if (L) {
            aM.fetch();
          } else {
            if (A) {
              Piwik.HeatmapSessionRecording.enable();
            }
          }
        });
      });
    }
  }
  ad = au.generateUniqueId();
  if ("object" === typeof I.Piwik) {
    ah();
  } else {
    if ("object" !== typeof I.matomoPluginAsyncInit) {
      I.matomoPluginAsyncInit = [];
    }
    I.matomoPluginAsyncInit.push(ah);
  }
})();
/* END GENERATED: tracker.min.js */

/* GENERATED: tracker.min.js */
/*!!
 * Matomo - free/libre analytics platform
 *
 * @link http://matomo.org
 * @license http://matomo.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
(function () {
  function a() {
    if ("object" === typeof window && !window.Matomo) {
      return;
    }
    Matomo.addPlugin("DevicePixelRatio", {
      log: function () {
        devicePixelRatio = window.devicePixelRatio;
        if (devicePixelRatio === null) {
          return "";
        }
        return "&devicePixelRatio=" + devicePixelRatio;
      },
    });
  }
  if ("object" === typeof window.Matomo) {
    a();
  } else {
    if ("object" !== typeof window.matomoPluginAsyncInit) {
      window.matomoPluginAsyncInit = [];
    }
    window.matomoPluginAsyncInit.push(a);
  }
})();
/* END GENERATED: tracker.min.js */

/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(function () {
  var a = "original";
  var n = false;
  var i = true;
  var h = "PiwikAbTesting";
  function m() {
    if (n && "undefined" !== typeof console && console && console.debug) {
      console.debug.apply(console, arguments);
    }
  }
  function b(o) {
    m(o);
    if (typeof k !== "undefined" && k && k.THROW_ERRORS) {
      throw new Error(o);
    }
  }
  var j = {
    isItpBrowser: function () {
      return (
        navigator.vendor &&
        navigator.vendor.indexOf("Apple") > -1 &&
        navigator.userAgent &&
        navigator.userAgent.indexOf("CriOS") === -1 &&
        navigator.userAgent.indexOf("FxiOS") === -1
      );
    },
    getRandomNumber: function (p, o) {
      return parseInt(Math.round(Math.random() * (o - p) + p, 10));
    },
    hasLocalStorage: function () {
      if (typeof localStorage === "undefined") {
        return false;
      }
      var p = new Date();
      var o;
      try {
        localStorage.setItem(p, p);
        o = localStorage.getItem(p) == p;
        localStorage.removeItem(p);
        return (
          o &&
          localStorage &&
          typeof JSON === "object" &&
          typeof JSON.parse === "function"
        );
      } catch (q) {
        return false;
      }
    },
    decodeSafe: function (p) {
      try {
        return window.decodeURIComponent(p);
      } catch (o) {
        return window.unescape(p);
      }
    },
    getQueryParameter: function (o, s) {
      o = ("" + o).toLowerCase();
      s = ("" + s).toLowerCase();
      var r = new RegExp("[?&]" + s + "(=([^&#]*)|&|#|$)", "i");
      var q = r.exec(o);
      if (!q) {
        return null;
      }
      if (!q[2]) {
        return "";
      }
      var p = q[2].replace(/\+/g, " ");
      return this.decodeSafe(p);
    },
    removeQueryAndHashFromUrl: function (p) {
      var o = p.indexOf("#");
      if (o !== -1) {
        p = p.substr(0, o);
      }
      var q = p.indexOf("?");
      if (q !== -1) {
        p = p.substr(0, q);
      }
      return p;
    },
    removeProtocol: function (p) {
      var o = ("" + p).indexOf("://");
      if (o !== -1 && o < 9) {
        return p.substr(o);
      }
      return p;
    },
    removeWwwSubdomain: function (o) {
      return ("" + o).replace("://www.", "://");
    },
    getVariationTest: function (o) {
      if (o && o.search) {
        var p = j.getQueryParameter(o.search, "pk_ab_test");
        if (p) {
          m("requested variation test " + p);
          return String(p).split(",");
        }
      }
      return [];
    },
  };
  var d = {
    local: function () {
      var p = localStorage.getItem(h) || "{}";
      if (p && p !== "{}") {
        localStorage.setItem(h, p);
      }
      var o = JSON.parse(p) || {};
      this.set = function (s, q, r) {
        q = s + ":" + q;
        o[q] = r;
        localStorage.setItem(h, JSON.stringify(o));
      };
      this.get = function (r, q) {
        q = r + ":" + q;
        if (o && q in o) {
          return o[q];
        }
      };
      this.clearAll = function () {
        o = {};
        localStorage.setItem(h, JSON.stringify({}));
      };
    },
    cookies: function () {
      this.set = function (s, q, r) {
        q = h + ":" + s + ":" + q;
        var t = 365;
        var p = new Date();
        p.setTime(p.getTime() + t * 24 * 60 * 60 * 1000);
        var o = "; expires=" + p.toGMTString();
        document.cookie =
          q +
          "=" +
          encodeURIComponent(r) +
          "; expires=" +
          o +
          "; path=/;SameSite=Lax";
      };
      this.get = function (q, p) {
        p = h + ":" + q + ":" + p;
        var r = p + "=";
        var t = document.cookie.split(";");
        for (var o = 0; o < t.length; o++) {
          var s = t[o];
          s = ("" + s).replace(/^\s+/, "");
          if (s.indexOf(r) == 0) {
            return decodeURIComponent(s.substring(r.length, s.length));
          }
        }
      };
      this.clearAll = function () {};
    },
  };
  var e = {
    location: window.location,
    matchesTarget: function (o) {
      if (!o || !o.type || !o.attribute) {
        return true;
      }
      var p = e._getValueForAttribute(o);
      return e._matchesAttribute(o, p);
    },
    matchesTargets: function (s, q) {
      if (q && q.length) {
        var o;
        for (var p = 0; p < q.length; p++) {
          o = q[p];
          if (this.matchesTarget(o)) {
            return false;
          }
        }
      }
      if (s && s.length) {
        var r;
        for (var p = 0; p < s.length; p++) {
          r = s[p];
          if (this.matchesTarget(r)) {
            return true;
          }
        }
        return false;
      }
      return true;
    },
    matchesDate: function (q, p, r) {
      var s = q.getTime() + q.getTimezoneOffset() * 60000;
      try {
        var u = new Date(p);
      } catch (t) {
        if (p) {
          b("Invalid startDateTime given");
        }
      }
      try {
        var o = new Date(r);
      } catch (t) {
        if (r) {
          b("Invalid startDateTime given");
        }
      }
      if (p && isNaN && isNaN(u.getTime())) {
        b("Invalid startDateTime given");
      }
      if (r && isNaN && isNaN(o.getTime())) {
        b("Invalid endDateTime given");
      }
      if (p && s < u.getTime() + u.getTimezoneOffset() * 60000) {
        return false;
      }
      if (r && s > o.getTime() + o.getTimezoneOffset() * 60000) {
        return false;
      }
      return true;
    },
    _getValueForAttribute: function (p) {
      var o = ("" + p.attribute).toLowerCase();
      switch (o) {
        case k.TARGET_ATTRIBUTE_URL:
          return j.decodeSafe(this.location.href);
        case k.TARGET_ATTRIBUTE_PATH:
          return j.decodeSafe(this.location.pathname);
        case k.TARGET_ATTRIBUTE_URLPARAM:
          return j.getQueryParameter(this.location.search, p.value);
      }
    },
    _matchesAttribute: function (q, o) {
      var p = ("" + q.attribute).toLowerCase();
      switch (p) {
        case k.TARGET_ATTRIBUTE_URL:
        case k.TARGET_ATTRIBUTE_PATH:
          return this._matchesTargetValue(o, q.type, q.inverted, q.value);
        case k.TARGET_ATTRIBUTE_URLPARAM:
          return this._matchesTargetValue(o, q.type, q.inverted, q.value2);
        default:
          b("Invalid target attribute");
      }
      return false;
    },
    _matchesTargetValue: function (q, p, s, o) {
      var r = false;
      var s = !!s && s !== "0";
      if ("string" === typeof q) {
        q = q.toLowerCase();
      }
      if ("string" === typeof o && p !== "regexp") {
        o = o.toLowerCase();
      }
      switch (p) {
        case k.TARGET_TYPE_ANY:
          r = true;
          break;
        case k.TARGET_TYPE_EXISTS:
          if (typeof q !== "undefined" && q !== null) {
            r = true;
          }
          break;
        case k.TARGET_TYPE_EQUALS_SIMPLE:
          if (q && q === String(o)) {
            r = true;
          }
          q = j.removeQueryAndHashFromUrl(q);
          q = j.removeProtocol(q);
          o = j.removeProtocol(o);
          q = j.removeWwwSubdomain(q);
          o = j.removeWwwSubdomain(o);
          if (
            q &&
            (q === String(o) ||
              q + "/" === String(o) ||
              q === "/" + o ||
              q === o + "/" ||
              q === "/" + o + "/")
          ) {
            r = true;
          }
          break;
        case k.TARGET_TYPE_EQUALS_EXACTLY:
          if (q && q === String(o)) {
            r = true;
          }
          if (
            q &&
            q.indexOf("://") > 0 &&
            q.charAt(q.length - 1) === "/" &&
            3 === q.split("/").length - 1 &&
            q === o + "/"
          ) {
            r = true;
          }
          if (
            o &&
            o.indexOf("://") > 0 &&
            o.charAt(o.length - 1) === "/" &&
            3 === o.split("/").length - 1 &&
            o === q + "/"
          ) {
            r = true;
          }
          break;
        case k.TARGET_TYPE_CONTAINS:
          if (q && q.indexOf(String(o)) !== -1) {
            r = true;
          }
          break;
        case k.TARGET_TYPE_STARTS_WITH:
          if (q && q.indexOf(String(o)) === 0) {
            r = true;
          }
          break;
        case k.TARGET_TYPE_REGEXP:
          if (new RegExp(o).test(q)) {
            r = true;
          }
          break;
        default:
          b("Invalid target type given");
      }
      if (s) {
        return !r;
      }
      return r;
    },
  };
  var k = function (p) {
    this.options = p ? p : {};
    m("creating experiment with options", p);
    if (!this.options.name) {
      b(
        'Missing experiment name in options. Use eg: new PiwikAbTesting.Experiment({name: "MyName"})'
      );
    }
    if (!this.options.variations) {
      b(
        'Missing "variations" option. Use eg: new PiwikAbTesting.Experiment({variations: [{...}, {...}]})'
      );
    }
    if (
      typeof this.options.variations !== "object" ||
      !this.options.variations.length
    ) {
      b('"variations" has to be an array');
    }
    var q;
    for (q = 0; q < this.options.variations.length; q++) {
      if (typeof this.options.variations[q] !== "object") {
        b("Each variation has to be an object");
      }
      if (!this.options.variations[q].name) {
        b("Missing variation name");
      }
      if (typeof this.options.variations[q].activate !== "function") {
        b(
          'A variation does not implement the "activate" method' +
            JSON.stringify(p)
        );
      }
    }
    if (this.options.trigger && typeof this.options.trigger !== "function") {
      b('The "trigger" option is not a function');
    }
    if (this.options.matomoTracker && !this.options.piwikTracker) {
      this.options.piwikTracker = this.options.matomoTracker;
    }
    if (this.options.piwikTracker) {
      if (typeof this.options.piwikTracker !== "object") {
        b("The Matomo tracker must be an instance of Piwik");
      }
      if (!this.options.piwikTracker.trackEvent) {
        b(
          "The Matomo instance does not implement the trackEvent method. Maybe a wrong Matomo instance is based as option?"
        );
      }
      if (!this.options.piwikTracker.trackGoal) {
        b(
          "The Matomo instance does not implement the trackGoal method. Maybe a wrong Matomo instance is based as option?"
        );
      }
    }
    if (
      (this.options.percentage && this.options.percentage < 0) ||
      this.options.percentage > 100
    ) {
      b("percentage has to be between 0 and 100");
    }
    this.name = null;
    this.variations = null;
    this.includedTargets = null;
    this.excludedTargets = null;
    this.startDateTime = null;
    this.endDateTime = null;
    this.percentage = 100;
    this.piwikTracker = null;
    this.trigger = function () {
      return true;
    };
    this._cacheForcedVariationName = null;
    if (j.hasLocalStorage()) {
      m("using local storage");
      this.storage = new d.local();
    } else {
      m("using cookies storage");
      this.storage = new d.cookies();
    }
    var o;
    for (o in this.options) {
      if (Object.prototype.hasOwnProperty.call(this.options, o)) {
        this[o] = this.options[o];
      }
    }
    this._track = function (u, t) {
      if (this.piwikTracker) {
        this.piwikTracker[u].apply(this.piwikTracker, t);
      } else {
        if (typeof window._paq === "undefined") {
          window._paq = [];
        }
        t.unshift(u);
        window._paq.push(t);
      }
      m("sent tracking request", u, t);
    };
    this.trackUsedVariation = function (t) {
      this._track("trackEvent", ["abtesting", this.name, t]);
    };
    this.trackGoal = function (t) {
      if (t) {
        this._track("trackGoal", [t]);
      }
    };
    this._getVariationByName = function (u) {
      u = ("" + u).toLowerCase();
      for (var t = 0; t < this.variations.length; t++) {
        if (("" + this.variations[t].name).toLowerCase() === u) {
          return this.variations[t];
        }
      }
    };
    this._makeEvent = function (u) {
      var t = this;
      var v = function (w) {
        w();
      };
      if (
        "undefined" !== typeof Piwik &&
        "undefined" !== typeof Piwik.DOM &&
        Piwik.DOM.onReady
      ) {
        v = Piwik.DOM.onReady;
      }
      return {
        type: "activate",
        experiment: this,
        onReady: v,
        redirect: function (x) {
          var w =
            "pk_abe=" +
            encodeURIComponent(t.name) +
            "&pk_abv=" +
            encodeURIComponent(u.name);
          if (x && x.indexOf("?") !== -1) {
            x += "&" + w;
          } else {
            x += "?" + w;
          }
          var z = Piwik.getAsyncTrackers();
          for (var y = 0; y < z.length; y++) {
            z[y].trackPageView = function () {};
            z[y].trackEvent = function () {};
            z[y].trackGoal = function () {};
          }
          if (window.location.href === x) {
            return;
          }
          window.location.replace(x);
        },
      };
    };
    this.forceVariation = function (w) {
      this._cacheForcedVariationName = w;
      m(this.name, "forcing variation", w);
      var u = this._getVariationByName(w);
      var t = this.storage.set("variation", this.name, w);
      if (u && u.activate) {
        var v = this._makeEvent(u);
        u.activate.apply(u, [v]);
      }
      this.trackUsedVariation(w);
      return t;
    };
    this.getActivatedVariationName = function () {
      var t;
      if (this._cacheForcedVariationName) {
        t = this._cacheForcedVariationName;
      } else {
        t = this.storage.get("variation", this.name);
      }
      if (this._getVariationByName(t)) {
        return t;
      }
    };
    this._doVariationsIncludeOriginal = function () {
      for (var u = 0; u < this.variations.length; u++) {
        var t = this.variations[u];
        if (t && t.name && t.name === a) {
          return true;
        }
      }
      return false;
    };
    this._getVariationDefaultPercentage = function () {
      var u = 100;
      var x = this.variations.length;
      for (var w = 0; w < this.variations.length; w++) {
        var v = this.variations[w];
        if (v && (v.percentage || v.percentage === 0 || v.percentage === "0")) {
          u = u - parseInt(v.percentage, 10);
          x--;
        }
      }
      var t = Math.round(u / x);
      if (t > 100) {
        t = 100;
      }
      if (t < 0) {
        t = 0;
      }
      return t;
    };
    this.getRandomVariationName = function () {
      var z = this._getVariationDefaultPercentage();
      var w = [];
      for (var x = 0; x < this.variations.length; x++) {
        var t = z;
        if (
          this.variations[x].percentage ||
          this.variations[x].percentage === 0 ||
          this.variations[x].percentage === "0"
        ) {
          t = this.variations[x].percentage;
        }
        for (var v = 0; v < t; v++) {
          w.push(x);
        }
      }
      var u = j.getRandomNumber(0, w.length - 1);
      var y = w[u];
      return this.variations[y].name;
    };
    this._isInTestGroup = function () {
      var t = this.storage.get("isInTestGroup", this.name);
      if (typeof t !== "undefined" && t !== null) {
        return t === "1" ? true : false;
      }
      t = j.getRandomNumber(1, 100) <= this.percentage;
      this.storage.set("isInTestGroup", this.name, t ? "1" : "0");
      return t;
    };
    this.selectRandomVariation = function () {
      m(this.name, "select random variation");
      var t = this.getRandomVariationName();
      this.forceVariation(t);
      return t;
    };
    this.shouldTrigger = function () {
      if (!i) {
        m(this.name, "wont run because feature is disabled");
        return false;
      }
      if (!e.matchesDate(new Date(), this.startDateTime, this.endDateTime)) {
        m(this.name, "wont run, scheduled date does not match");
        return false;
      }
      if (!e.matchesTargets(this.includedTargets, this.excludedTargets)) {
        m(this.name, "wont run, targets do not match");
        return false;
      }
      if (!this.trigger()) {
        m(this.name, "wont run, disabled by trigger method");
        return false;
      }
      if (!this._isInTestGroup()) {
        m(this.name, "wont run, not in test group");
        return false;
      }
      return true;
    };
    if (!this._doVariationsIncludeOriginal()) {
      this.variations.push({ name: a, activate: function () {} });
    }
    var r = j.getVariationTest(window.location || null);
    if (r && r.length) {
      for (var q = 0; q < r.length; q++) {
        if (this._getVariationByName(r[q])) {
          m("going to test variation and disable tracking " + r[q]);
          this.trackUsedVariation = function () {};
          this.forceVariation(r[q]);
          return;
        }
      }
    }
    if (!this.shouldTrigger()) {
      m(this.name, "experiment should not trigger");
      return;
    }
    m(this.name, "should trigger");
    var s = this.getActivatedVariationName();
    if (s) {
      this.forceVariation(s);
    } else {
      m(this.name, "no existing variation found");
      this.selectRandomVariation();
    }
  };
  k.NAME_ORIGINAL_VARIATION = a;
  k.TARGET_ATTRIBUTE_URL = "url";
  k.TARGET_ATTRIBUTE_PATH = "path";
  k.TARGET_ATTRIBUTE_URLPARAM = "urlparam";
  k.TARGET_TYPE_ANY = "any";
  k.TARGET_TYPE_EXISTS = "exists";
  k.TARGET_TYPE_EQUALS_SIMPLE = "equals_simple";
  k.TARGET_TYPE_EQUALS_EXACTLY = "equals_exactly";
  k.TARGET_TYPE_CONTAINS = "contains";
  k.TARGET_TYPE_STARTS_WITH = "starts_with";
  k.TARGET_TYPE_REGEXP = "regexp";
  k.THROW_ERRORS = true;
  function f() {
    if (
      typeof window === "object" &&
      "function" === typeof window.piwikAbTestingAsyncInit
    ) {
      window.piwikAbTestingAsyncInit();
    }
    if (
      typeof window === "object" &&
      "function" === typeof window.matomoAbTestingAsyncInit
    ) {
      window.matomoAbTestingAsyncInit();
    }
  }
  var c = false;
  function g() {
    function o() {
      if (c) {
        return;
      }
      if ("object" !== typeof Piwik) {
        return;
      }
      var r = Piwik.getAsyncTrackers();
      if (!r || !r.length) {
        return;
      }
      if (
        window.location &&
        j.getQueryParameter(window.location.search, "pk_abe")
      ) {
        c = true;
        var q = j.getQueryParameter(window.location.search, "pk_abe");
        var p = j.getQueryParameter(window.location.search, "pk_abv");
        Piwik.AbTesting.enter({ experiment: q, variation: p });
        m("entered experiment from url parameters");
      }
    }
    Piwik.DOM.onReady(o);
    Piwik.DOM.onLoad(o);
  }
  function l() {
    if (
      "object" === typeof window &&
      "object" === typeof window.Piwik &&
      "object" === typeof window.Piwik.AbTesting
    ) {
      m("wont initialize, AbTesting already loaded");
      return;
    }
    if ("object" === typeof window && "object" !== typeof window.Piwik) {
      m("wont initialize, Matomo is not yet loaded");
      return;
    }
    Piwik.AbTesting = {
      utils: j,
      target: e,
      storage: d,
      Experiment: k,
      disableWhenItp: function () {
        if (j.isItpBrowser()) {
          this.disable();
          m("disabled because itp browser");
        }
      },
      isEnabled: function () {
        return i;
      },
      disable: function () {
        i = false;
      },
      enable: function () {
        i = true;
      },
      enter: function (o) {
        if (o && o.experiment) {
          window._paq = window._paq || [];
          window._paq.push([
            "trackEvent",
            "abtesting",
            o.experiment,
            o.variation || a,
          ]);
          m("entering user into an experiment", o);
        } else {
          m(
            "not entering user into an experiment, missing parameter experiment"
          );
        }
      },
      create: function (o) {
        return new k(o);
      },
      enableDebugMode: function () {
        n = true;
      },
    };
    if (window.Piwik.initialized) {
      Piwik.retryMissedPluginCalls();
      f();
      g();
    } else {
      Piwik.on("MatomoInitialized", function () {
        f();
        g();
      });
    }
    if (j.isItpBrowser() && j.hasLocalStorage()) {
      new d.local();
    }
  }
  if (
    typeof piwikExposeAbTestingTarget !== "undefined" &&
    piwikExposeAbTestingTarget
  ) {
    window.piwikAbTestingTarget = e;
  }
  if ("object" === typeof window.Piwik) {
    m("matomo was already loaded, initializing abTesting now");
    l();
  } else {
    if ("object" !== typeof window.matomoPluginAsyncInit) {
      window.matomoPluginAsyncInit = [];
    }
    window.matomoPluginAsyncInit.push(l);
    m("matomo not loaded yet, waiting for it to be loaded");
  }
})();

/* END GENERATED: tracker.min.js */

(function () {
  function b() {
    if ("object" !== typeof _paq) {
      return false;
    }
    var c = typeof _paq.length;
    if ("undefined" === c) {
      return false;
    }
    return !!_paq.length;
  }
  if (
    window &&
    "object" === typeof window.matomoPluginAsyncInit &&
    window.matomoPluginAsyncInit.length
  ) {
    var a = 0;
    for (a; a < window.matomoPluginAsyncInit.length; a++) {
      if (typeof window.matomoPluginAsyncInit[a] === "function") {
        window.matomoPluginAsyncInit[a]();
      }
    }
  }
  if (window && window.piwikAsyncInit) {
    window.piwikAsyncInit();
  }
  if (window && window.matomoAsyncInit) {
    window.matomoAsyncInit();
  }
  if (!window.Matomo.getAsyncTrackers().length) {
    if (b()) {
      window.Matomo.addTracker();
    } else {
      _paq = {
        push: function (c) {
          var d = typeof console;
          if (d !== "undefined" && console && console.error) {
            console.error(
              "_paq.push() was used but Matomo tracker was not initialized before the matomo.js file was loaded. Make sure to configure the tracker via _paq.push before loading matomo.js. Alternatively, you can create a tracker via Matomo.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.",
              c
            );
          }
        },
      };
    }
  }
  window.Matomo.trigger("MatomoInitialized", []);
  window.Matomo.initialized = true;
})();
(function () {
  var a = typeof window.AnalyticsTracker;
  if (a === "undefined") {
    window.AnalyticsTracker = window.Matomo;
  }
})();
if (typeof window.piwik_log !== "function") {
  window.piwik_log = function (c, e, g, f) {
    function b(h) {
      try {
        if (window["piwik_" + h]) {
          return window["piwik_" + h];
        }
      } catch (i) {}
      return;
    }
    var d,
      a = window.Matomo.getTracker(g, e);
    a.setDocumentTitle(c);
    a.setCustomData(f);
    d = b("tracker_pause");
    if (d) {
      a.setLinkTrackingTimer(d);
    }
    d = b("download_extensions");
    if (d) {
      a.setDownloadExtensions(d);
    }
    d = b("hosts_alias");
    if (d) {
      a.setDomains(d);
    }
    d = b("ignore_classes");
    if (d) {
      a.setIgnoreClasses(d);
    }
    a.trackPageView();
    if (b("install_tracker")) {
      piwik_track = function (i, j, k, h) {
        a.setSiteId(j);
        a.setTrackerUrl(k);
        a.trackLink(i, h);
      };
      a.enableLinkTracking();
    }
  };
}
/*!! @license-end */
