module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ducks__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlbumList__ = __webpack_require__(15);
var _jsxFileName = '/home/benjamin/WebstormProjects/SCR-V3/src/shared/album/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Albums = function (_Component) {
  _inherits(Albums, _Component);

  function Albums() {
    _classCallCheck(this, Albums);

    return _possibleConstructorReturn(this, (Albums.__proto__ || Object.getPrototypeOf(Albums)).apply(this, arguments));
  }

  _createClass(Albums, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.albums) {
        this.props.dispatch(Albums.initialAction());
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var albums = this.props.albums;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__AlbumList__["a" /* default */], { albums: albums, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      });
    }
  }], [{
    key: 'initialAction',
    value: function initialAction() {
      return Object(__WEBPACK_IMPORTED_MODULE_3__ducks__["b" /* fetchAlbums */])();
    }
  }]);

  return Albums;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    albums: state.albums
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(Albums)));

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchAlbums; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);


// Actions
var FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
var FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
var FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

// Reducer
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case FETCH_ALBUMS_SUCCESS:
      return Object.assign({}, state, { albums: action.payload });

    default:
      return state;
  }
}

// Action Creators
var requestAlbums = function requestAlbums() {
  return { type: FETCH_ALBUMS_REQUEST };
};
var receivedAlbums = function receivedAlbums(albums) {
  return { type: FETCH_ALBUMS_SUCCESS, payload: albums };
};
var albumsError = function albumsError() {
  return { type: FETCH_ALBUMS_FAILURE };
};

var fetchAlbums = function fetchAlbums() {
  return function (dispatch, getState) {
    dispatch(requestAlbums());
    return fetch('http://localhost:4000/graphql?query={products{id,name}}').then(function (response) {
      return response.json();
    }).then(function (albums) {
      return dispatch(receivedAlbums(albums));
    }).catch(function (err) {
      return dispatch(albumsError(err));
    });
  };
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
var _jsxFileName = '/home/benjamin/WebstormProjects/SCR-V3/src/shared/home/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: this
          },
          'Home ayyee'
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serialize_javascript__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_routes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_configureStore__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_App__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_source_map_support_register__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_source_map_support_register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_source_map_support_register__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_body_parser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_express_jwt__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_express_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_graphql__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__schema__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_graphql_server_express__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_graphql_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_graphql_server_express__);
var _jsxFileName = '/home/benjamin/WebstormProjects/SCR-V3/src/server/index.js',
    _this = this;


















var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_1_cors___default()());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('public'));

app.get('/api/albums', function (req, res) {
  res.json([{
    id: 1,
    title: 'Album 1',
    date: new Date('2017-04-14T15:30:00.000Z')
  }, {
    id: 2,
    title: 'Album 2',
    date: new Date('2017-04-14T15:30:00.000Z')
  }]);
});

app.get('*', function (req, res, next) {
  var store = Object(__WEBPACK_IMPORTED_MODULE_8__shared_configureStore__["a" /* default */])();

  var promises = __WEBPACK_IMPORTED_MODULE_7__shared_routes__["a" /* default */].reduce(function (acc, route) {
    if (Object(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__["matchPath"])(req.url, route) && route.component && route.component.initialAction) {
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
    }
    return acc;
  }, []);

  Promise.all(promises).then(function () {
    var context = {};
    var markup = Object(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["StaticRouter"],
      { location: req.url, context: context, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
        { store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__shared_App__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: _this
        })
      )
    ));

    var initialData = store.getState();
    res.send('\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <title>SCR V3</title>\n            <link rel=\'stylesheet\' href=\'/css/main.css\'>\n            <script src=\'/bundle.js\' defer></script>\n            <script>window.__initialData__ = ' + __WEBPACK_IMPORTED_MODULE_6_serialize_javascript___default()(initialData) + '</script>\n          </head>\n\n          <body>\n            <div id=\'root\'>' + markup + '</div>\n          </body>\n        </html>\n      ');
  }).catch(next);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('==> 💻  Application server started on: http://localhost:3000');
});

var server = __WEBPACK_IMPORTED_MODULE_0_express___default()();

server.use('/graphql', __WEBPACK_IMPORTED_MODULE_11_body_parser___default.a.json(), Object(__WEBPACK_IMPORTED_MODULE_15_graphql_server_express__["graphqlExpress"])(function (req) {
  // console.log(req)
  return {
    schema: __WEBPACK_IMPORTED_MODULE_14__schema__["a" /* default */],
    rootValue: req
  };
}));

server.use('/graphiql', Object(__WEBPACK_IMPORTED_MODULE_15_graphql_server_express__["graphiqlExpress"])({
  endpointURL: '/graphql'
}));

server.listen(process.env.PORT || 4000, function () {
  console.log('==> 💻  GraphQL server started on: http://localhost:4000');
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__album__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(5);



var routes = [{
  path: '/',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_1__home__["a" /* default */]
}, {
  path: '/albums',
  component: __WEBPACK_IMPORTED_MODULE_0__album__["a" /* default */]
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AlbumList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/home/benjamin/WebstormProjects/SCR-V3/src/shared/album/AlbumList.js';

//import './NewsList.css';

function AlbumList(_ref) {
  var albums = _ref.albums;

  console.log(albums);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    },
    'Albums'
  );
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ducks__ = __webpack_require__(4);




var configureStore = function configureStore(preloadedState) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__ducks__["a" /* default */], preloadedState, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a));
};

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__album__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(5);
var _jsxFileName = '/home/benjamin/WebstormProjects/SCR-V3/src/shared/App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



//import routes from './routes';
//import './App.css';




var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__home__["a" /* default */], __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/albums', component: __WEBPACK_IMPORTED_MODULE_2__album__["a" /* default */], __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_js__ = __webpack_require__(28);







var getTokenFromUser = function getTokenFromUser(user) {
    if (!user) return null;
    return __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default.a.sign({
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    }, __WEBPACK_IMPORTED_MODULE_5__constants_js__["c" /* jwtSecret */]);
};

var createUser = function createUser(_ref) {
    var name = _ref.name,
        email = _ref.email,
        password = _ref.password;

    console.log(name, email, password);
    return __WEBPACK_IMPORTED_MODULE_1__database_js__["b" /* User */].findOne({ where: { email: email } }).then(function (userExists) {
        if (userExists) return userExists;
        return __WEBPACK_IMPORTED_MODULE_1__database_js__["b" /* User */].count().then(function (length) {
            var user = {
                name: name,
                email: email,
                password: password
            };
            user.id = '' + (length + 1);
            return __WEBPACK_IMPORTED_MODULE_1__database_js__["b" /* User */].findOrCreate({ where: user }).then(function (_) {
                return user;
            });
        });
    });
};

var findUserByEmail = function findUserByEmail(_ref2) {
    var email = _ref2.email,
        password = _ref2.password;

    return __WEBPACK_IMPORTED_MODULE_1__database_js__["b" /* User */].findOne({ where: { email: email } }).then(function (userExists) {
        if (!userExists) return null;
        if (Object(__WEBPACK_IMPORTED_MODULE_5__constants_js__["a" /* decrypt */])(userExists.password) === password) {
            return userExists;
        } else {
            return null;
        }
    });
};

var findUserById = function findUserById(_ref3) {
    var id = _ref3.id;

    return __WEBPACK_IMPORTED_MODULE_1__database_js__["b" /* User */].findOne({ where: { id: id } }).then(function (userExists) {
        return userExists;
    });
};

var User = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLObjectType"]({
    name: 'User',
    description: 'Represent the type of a user',
    fields: function fields() {
        return {
            id: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
            name: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
            email: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] }
        };
    }
});

var TokenResponse = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLObjectType"]({
    name: 'TokenResponse',
    description: 'Represent the type of a token response',
    fields: function fields() {
        return {
            token: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
            user: { type: User }
        };
    }
});

var Product = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLObjectType"]({
    name: 'Product',
    description: 'Represent the type of a Product',
    fields: function fields() {
        return {
            id: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
            name: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
            description: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
            cost: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLInt"] },
            quantity: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLInt"] },
            image: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
            creator: {
                type: User,
                resolve: function resolve(obj, args) {
                    return findUserById({ id: obj.creator });
                }
            }
        };
    }
});

var Query = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLObjectType"]({
    name: 'RootQuery',
    fields: {
        products: { //Plurals
            type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLList"](Product),
            resolve: function resolve(rootValue, args, info) {
                // console.log(rootValue.user);
                /*
                let fields = [];
                let fieldASTs = info.fieldASTs;
                fieldASTs[0].selectionSet.selections.map(function (selection) {
                    fields.push(selection.name.value);
                });
                */
                return __WEBPACK_IMPORTED_MODULE_1__database_js__["a" /* Product */].findAll();
            }
        },
        product: {
            type: Product,
            args: {
                id: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] }
            },
            resolve: function resolve(rootValue, _ref4) {
                var id = _ref4.id;

                console.log(id, 'product');
                return __WEBPACK_IMPORTED_MODULE_1__database_js__["a" /* Product */].findOne({ where: { id: id } });
            }
        }
    }
});

var Mutation = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLObjectType"]({
    name: 'Mutations',
    fields: {
        signup: {
            type: TokenResponse,
            args: {
                name: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
                email: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
                password: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) }
            },
            resolve: function resolve(rootValue, args, info) {
                args.password = Object(__WEBPACK_IMPORTED_MODULE_5__constants_js__["b" /* encrypt */])(args.password);
                return createUser(args).then(function (user) {
                    console.log(user);
                    delete user.password;
                    return {
                        user: user,
                        token: getTokenFromUser(user)
                    };
                });
            }
        },
        login: {
            type: TokenResponse,
            args: {
                email: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
                password: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) }
            },
            resolve: function resolve(rootValue, args, info) {
                return findUserByEmail(args).then(function (user) {
                    console.log(user);
                    delete user.password;
                    return {
                        user: user,
                        token: getTokenFromUser(user)
                    };
                });
            }
        },
        addProduct: {
            type: Product,
            args: {
                name: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
                description: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
                image: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
                cost: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLInt"] },
                quantity: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLInt"] }
            },
            resolve: function resolve(rootValue, args, info, request) {
                var product = Object.assign({}, args);
                if (rootValue.user.user.id) {
                    return __WEBPACK_IMPORTED_MODULE_1__database_js__["a" /* Product */].count().then(function (length) {
                        console.log('length', length);
                        product.id = '' + (length + 1);
                        product.creator = rootValue.user.user.id;
                        return __WEBPACK_IMPORTED_MODULE_1__database_js__["a" /* Product */].findOrCreate({ where: product }).then(function (_) {
                            return product;
                        });
                    });
                } else {
                    return null;
                }
            }
        },
        editProduct: {
            type: Product,
            args: {
                id: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
                name: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) },
                description: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
                image: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"] },
                cost: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLInt"] },
                quantity: { type: __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLInt"] }
            },
            resolve: function resolve(rootValue, args) {
                return __WEBPACK_IMPORTED_MODULE_1__database_js__["a" /* Product */].findOne({ where: { id: args.id } }).then(function (product) {
                    if (rootValue.user.user.id && rootValue.user.user.id == product.creator) {
                        return __WEBPACK_IMPORTED_MODULE_1__database_js__["a" /* Product */].update(args, { where: { id: args.id } }).then(function (_) {
                            return args;
                        });
                    } else {
                        return null;
                    }
                });
            }
        },
        removeProduct: {
            type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLList"](Product),
            args: {
                id: { type: new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLString"]) }
            },
            resolve: function resolve(rootValue, _ref5) {
                var id = _ref5.id;

                return __WEBPACK_IMPORTED_MODULE_1__database_js__["a" /* Product */].findOne({ where: { id: id } }).then(function (product) {
                    if (rootValue.user.user.id && rootValue.user.user.id == product.creator) {
                        return __WEBPACK_IMPORTED_MODULE_1__database_js__["a" /* Product */].destroy({ where: { id: id } }).then(function (_) {
                            return __WEBPACK_IMPORTED_MODULE_1__database_js__["a" /* Product */].find().toArray();
                        });
                    } else {
                        return null;
                    }
                });
            }
        }
    }
});

var Schema = new __WEBPACK_IMPORTED_MODULE_2_graphql__["GraphQLSchema"]({
    query: Query,
    mutation: Mutation
});

/* harmony default export */ __webpack_exports__["a"] = (Schema);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);


var db = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a('scr', null, null, {
  dialect: 'sqlite',
  storage: './scr.sqlite'
});

var UserModel = db.define('user', {
  id: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER, primaryKey: true },
  name: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING },
  email: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING },
  password: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING }
});

var ProductModel = db.define('product', {
  id: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER, primaryKey: true },
  name: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING },
  description: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING },
  cost: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER },
  quantity: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER },
  image: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING },
  creator: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.INTEGER },
  title: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING },
  text: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING }
});

ProductModel.belongsTo(UserModel, { foreignKey: 'creator', targetKey: 'id' });

var User = db.models.user;
var Product = db.models.product;



/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return jwtSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decrypt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return encrypt; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_crypto__);


var algorithm = 'aes-256-ctr';
var privateKey = '37LvDSm4XvjYOh9Y';

var jwtSecret = 'e37cbbf4-62ec-4596-a71d-fad8564ccd84';

var decrypt = function decrypt(password) {
    var decipher = __WEBPACK_IMPORTED_MODULE_0_crypto___default.a.createDecipher(algorithm, privateKey);
    var dec = decipher.update(password, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
};

var encrypt = function encrypt(password) {
    var cipher = __WEBPACK_IMPORTED_MODULE_0_crypto___default.a.createCipher(algorithm, privateKey);
    var crypted = cipher.update(password, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("graphql-server-express");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map