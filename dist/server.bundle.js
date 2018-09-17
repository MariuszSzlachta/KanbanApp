/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Webpack Requirements


	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(2);

	var _compression2 = _interopRequireDefault(_compression);

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bodyParser = __webpack_require__(4);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(5);

	var _path2 = _interopRequireDefault(_path);

	var _IntlWrapper = __webpack_require__(6);

	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

	var _webpack = __webpack_require__(10);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(11);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(15);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(16);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _store = __webpack_require__(17);

	var _reactRedux = __webpack_require__(9);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(46);

	var _reactRouter = __webpack_require__(47);

	var _reactHelmet = __webpack_require__(48);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(49);

	var _routes2 = _interopRequireDefault(_routes);

	var _fetchData = __webpack_require__(64);

	var _lane = __webpack_require__(66);

	var _lane2 = _interopRequireDefault(_lane);

	var _note = __webpack_require__(71);

	var _note2 = _interopRequireDefault(_note);

	var _config = __webpack_require__(40);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Initialize the Express App
	var app = new _express2.default();

	// Set Development modes checks
	var isDevMode = process.env.NODE_ENV === 'development' || false;
	var isProdMode = process.env.NODE_ENV === 'production' || false;

	// Run Webpack dev server in development mode
	if (isDevMode) {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}

	// React And Redux Setup


	// Import required modules


	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;

	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	});

	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));
	app.use('/api', _lane2.default);
	app.use('/api', _note2.default);

	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();

	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (isProdMode ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (isProdMode ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (isProdMode ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};

	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = isProdMode ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};

	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }

	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }

	    if (!renderProps) {
	      return next();
	    }

	    var store = (0, _store.configureStore)();

	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
	      var finalState = store.getState();

	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});

	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});

	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactIntl = __webpack_require__(8);

	var _reactRedux = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function IntlWrapper(props) {
	  return _react2.default.createElement(
	    _reactIntl.IntlProvider,
	    props.intl,
	    props.children
	  );
	}

	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(10);
	var cssnext = __webpack_require__(12);
	var postcssFocus = __webpack_require__(13);
	var postcssReporter = __webpack_require__(14);

	module.exports = {
	  devtool: 'cheap-module-eval-source-map',

	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },

	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },

	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },

	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },

	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],

	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(18);

	var _reduxThunk = __webpack_require__(19);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _DevTools = __webpack_require__(20);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _reducers = __webpack_require__(24);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }

	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(21);

	var _reduxDevtoolsLogMonitor = __webpack_require__(22);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(23);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(18);

	var _IntlReducer = __webpack_require__(25);

	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

	var _LaneReducer = __webpack_require__(36);

	var _LaneReducer2 = _interopRequireDefault(_LaneReducer);

	var _NoteReducer = __webpack_require__(45);

	var _NoteReducer2 = _interopRequireDefault(_NoteReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Combine all reducers into one root reducer
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  lanes: _LaneReducer2.default,
	  notes: _NoteReducer2.default,
	  intl: _IntlReducer2.default
	});

	// Import Reducers

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _setup = __webpack_require__(26);

	var _IntlActions = __webpack_require__(35);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var initLocale = global.navigator && global.navigator.language || 'en';

	var initialState = _extends({
	  locale: initLocale,
	  enabledLanguages: _setup.enabledLanguages
	}, _setup.localizationData[initLocale] || {});

	var IntlReducer = function IntlReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _IntlActions.SWITCH_LANGUAGE:
	      {
	        var type = action.type,
	            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line


	        return _extends({}, state, actionWithoutType);
	      }

	    default:
	      return state;
	  }
	};

	exports.default = IntlReducer;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;

	var _reactIntl = __webpack_require__(8);

	var _intl = __webpack_require__(27);

	var _intl2 = _interopRequireDefault(_intl);

	var _intlLocalesSupported = __webpack_require__(28);

	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

	__webpack_require__(29);

	var _en = __webpack_require__(30);

	var _en2 = _interopRequireDefault(_en);

	var _en3 = __webpack_require__(31);

	var _en4 = _interopRequireDefault(_en3);

	__webpack_require__(32);

	var _fr = __webpack_require__(33);

	var _fr2 = _interopRequireDefault(_fr);

	var _fr3 = __webpack_require__(34);

	var _fr4 = _interopRequireDefault(_fr3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// list of available languages
	var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];

	// this object will have language-specific data added to it which will be placed in the state when that language is active
	// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
	var localizationData = exports.localizationData = {};

	// here you bring in 'intl' browser polyfill and language-specific polyfills
	// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	// as well as react-intl's language-specific data
	// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)


	// need Intl polyfill, Intl not supported in Safari


	if (global.Intl) {
	  // Determine if the built-in `Intl` has the locale data we need.
	  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
	    // `Intl` exists, but it doesn't have the data we need, so load the
	    // polyfill and patch the constructors we need with the polyfill's.
	    global.Intl.NumberFormat = _intl2.default.NumberFormat;
	    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
	  }
	} else {
	  // No `Intl`, so use and load the polyfill.
	  global.Intl = _intl2.default;
	}

	// use this to allow nested messages, taken from docs:
	// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
	function flattenMessages() {
	  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  return Object.keys(nestedMessages).reduce(function (messages, key) {
	    var value = nestedMessages[key];
	    var prefixedKey = prefix ? prefix + '.' + key : key;

	    if (typeof value === 'string') {
	      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
	    } else {
	      Object.assign(messages, flattenMessages(value, prefixedKey));
	    }

	    return messages;
	  }, {});
	}

	// bring in intl polyfill, react-intl, and app-specific language data

	(0, _reactIntl.addLocaleData)(_en2.default);
	localizationData.en = _en4.default;
	localizationData.en.messages = flattenMessages(localizationData.en.messages);

	(0, _reactIntl.addLocaleData)(_fr2.default);
	localizationData.fr = _fr4.default;
	localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'en',
	  messages: {
	    siteTitle: 'Kanban',
	    addPost: 'Add Post',
	    switchLanguage: 'Switch Language',
	    twitterMessage: 'We are on Twitter',
	    by: 'By',
	    deletePost: 'Delete Post',
	    createNewPost: 'Create new post',
	    authorName: 'Author\'s Name',
	    postTitle: 'Post Title',
	    postContent: 'Post Content',
	    submit: 'Submit',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
	    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/fr");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/fr");

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'fr',
	  messages: {
	    siteTitle: 'MERN blog de démarrage',
	    addPost: 'Ajouter Poster',
	    switchLanguage: 'Changer de langue',
	    twitterMessage: 'Nous sommes sur Twitter',
	    by: 'Par',
	    deletePost: 'Supprimer le message',
	    createNewPost: 'Créer un nouveau message',
	    authorName: 'Nom de l\'auteur',
	    postTitle: 'Titre de l\'article',
	    postContent: 'Contenu après',
	    submit: 'Soumettre',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
	    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.switchLanguage = switchLanguage;

	var _setup = __webpack_require__(26);

	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = lanes;

	var _LaneActions = __webpack_require__(37);

	var _NoteActions = __webpack_require__(43);

	var _omit = __webpack_require__(44);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var initialState = {};

	function moveNotes(array, sourceNoteId, targetNoteId) {
	  var sourceIndex = array.indexOf(sourceNoteId);
	  var targetIndex = array.indexOf(targetNoteId);
	  var arrayCopy = [].concat(_toConsumableArray(array));

	  arrayCopy.splice(targetIndex, 0, arrayCopy.splice(sourceIndex, 1)[0]);
	  return arrayCopy;
	}

	function lanes() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {

	    case _LaneActions.CREATE_LANE:
	    case _LaneActions.UPDATE_LANE:
	      return _extends({}, state, _defineProperty({}, action.lane.id, action.lane));

	    case _LaneActions.EDIT_LANE:
	      {
	        var lane = _extends({}, state[action.laneId], { editing: true });
	        return _extends({}, state, _defineProperty({}, action.laneId, lane));
	      }

	    case _LaneActions.CREATE_LANES:
	      return _extends({}, action.lanes);

	    case _NoteActions.DELETE_NOTE:
	      {
	        var newLane = _extends({}, state[action.laneId]);
	        newLane.notes = newLane.notes.filter(function (noteId) {
	          return noteId !== action.noteId;
	        });
	        return _extends({}, state, _defineProperty({}, action.laneId, newLane));
	      }

	    case _NoteActions.CREATE_NOTE:
	      {
	        var _newLane = _extends({}, state[action.laneId]);
	        _newLane.notes = _newLane.notes.concat(action.note.id);
	        return _extends({}, state, _defineProperty({}, action.laneId, _newLane));
	      }

	    case _LaneActions.DELETE_LANE:
	      return (0, _omit2.default)(state, action.laneId);

	    case _NoteActions.MOVE_WITHIN_LANE:
	      {
	        var _newLane2 = _extends({}, state[action.laneId]);
	        _newLane2.notes = moveNotes(_newLane2.notes, action.sourceId, action.targetId);
	        return _extends({}, state, _defineProperty({}, action.laneId, _newLane2));
	      }

	    case _LaneActions.MOVE_BETWEEN_LANES:
	      {
	        var _extends7;

	        var targetLane = _extends({}, state[action.targetLaneId]);
	        targetLane.notes = [].concat(_toConsumableArray(targetLane.notes), [action.noteId]);
	        var sourceLane = _extends({}, state[action.sourceLaneId]);
	        sourceLane.notes = sourceLane.notes.filter(function (noteId) {
	          return noteId !== action.noteId;
	        });
	        return _extends({}, state, (_extends7 = {}, _defineProperty(_extends7, action.targetLaneId, targetLane), _defineProperty(_extends7, action.sourceLaneId, sourceLane), _extends7));
	      }

	    case _LaneActions.REMOVE_FROM_LANE:
	      {
	        var _sourceLane = _extends({}, state[action.sourceLaneId]);
	        _sourceLane.notes = _sourceLane.notes.filter(function (noteId) {
	          return noteId !== action.noteId;
	        });
	        return _extends({}, state, _defineProperty({}, action.sourceLaneId, _sourceLane));
	      }

	    case _LaneActions.PUSH_TO_LANE:
	      {
	        var _targetLane = _extends({}, state[action.targetLaneId]);
	        _targetLane.notes = [].concat(_toConsumableArray(_targetLane.notes), [action.noteId]);
	        return _extends({}, state, _defineProperty({}, action.targetLaneId, _targetLane));
	      }

	    default:
	      return state;
	  }
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.REMOVE_FROM_LANE = exports.PUSH_TO_LANE = exports.MOVE_BETWEEN_LANES = exports.CREATE_LANES = exports.EDIT_LANE = exports.DELETE_LANE = exports.UPDATE_LANE = exports.CREATE_LANE = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createLane = createLane;
	exports.createLaneRequest = createLaneRequest;
	exports.updateLane = updateLane;
	exports.updateLaneRequest = updateLaneRequest;
	exports.deleteLane = deleteLane;
	exports.deleteLaneRequest = deleteLaneRequest;
	exports.editLane = editLane;
	exports.createLanes = createLanes;
	exports.fetchLanes = fetchLanes;
	exports.moveBetweenLanes = moveBetweenLanes;
	exports.removeFromLane = removeFromLane;
	exports.pushToLane = pushToLane;
	exports.changeLanesRequest = changeLanesRequest;

	var _apiCaller = __webpack_require__(38);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	var _schema = __webpack_require__(41);

	var _normalizr = __webpack_require__(42);

	var _NoteActions = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var CREATE_LANE = exports.CREATE_LANE = 'CREATE_LANE';
	var UPDATE_LANE = exports.UPDATE_LANE = 'UPDATE_LANE';
	var DELETE_LANE = exports.DELETE_LANE = 'DELETE_LANE';
	var EDIT_LANE = exports.EDIT_LANE = 'EDIT_LANE';
	var CREATE_LANES = exports.CREATE_LANES = 'CREATE_LANES';
	var MOVE_BETWEEN_LANES = exports.MOVE_BETWEEN_LANES = 'MOVE_BETWEEN_LANES';
	var PUSH_TO_LANE = exports.PUSH_TO_LANE = 'PUSH_TO_LANE';
	var REMOVE_FROM_LANE = exports.REMOVE_FROM_LANE = 'REMOVE_FROM_LANE';

	// Export Actions
	function createLane(lane) {
	  return {
	    type: CREATE_LANE,
	    lane: _extends({
	      notes: []
	    }, lane)
	  };
	}

	function createLaneRequest(lane) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lanes', 'post', lane).then(function (res) {
	      dispatch(createLane(res));
	    });
	  };
	}

	function updateLane(lane) {
	  return {
	    type: UPDATE_LANE,
	    lane: lane
	  };
	}

	function updateLaneRequest(lane) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lanes/' + lane.id, 'put', { name: lane.name, editing: lane.editing }).then(function () {
	      dispatch(updateLane(lane));
	    });
	  };
	}

	function deleteLane(laneId) {
	  return {
	    type: DELETE_LANE,
	    laneId: laneId
	  };
	}

	function deleteLaneRequest(laneId) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lanes/' + laneId, 'delete').then(function () {
	      dispatch(deleteLane(laneId));
	    });
	  };
	}

	function editLane(laneId) {
	  return {
	    type: EDIT_LANE,
	    laneId: laneId
	  };
	}

	function createLanes(lanesData) {
	  return {
	    type: CREATE_LANES,
	    lanes: lanesData
	  };
	}

	function fetchLanes() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lanes').then(function (res) {
	      var normalized = (0, _normalizr.normalize)(res.lanes, _schema.lanes);
	      var _normalized$entities = normalized.entities,
	          normalizedLanes = _normalized$entities.lanes,
	          notes = _normalized$entities.notes;


	      dispatch(createLanes(normalizedLanes));
	      dispatch((0, _NoteActions.createNotes)(notes));
	    });
	  };
	}

	function moveBetweenLanes(targetLaneId, noteId, sourceLaneId) {
	  return {
	    type: MOVE_BETWEEN_LANES,
	    targetLaneId: targetLaneId,
	    noteId: noteId,
	    sourceLaneId: sourceLaneId
	  };
	}

	function removeFromLane(sourceLaneId, noteId) {
	  return {
	    type: REMOVE_FROM_LANE,
	    sourceLaneId: sourceLaneId,
	    noteId: noteId
	  };
	}

	function pushToLane(targetLaneId, noteId) {
	  return {
	    type: PUSH_TO_LANE,
	    targetLaneId: targetLaneId,
	    noteId: noteId
	  };
	}

	function changeLanesRequest(sourceLaneId, targetLaneId, noteId, newTask) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('notes/' + noteId, 'delete').then(function () {
	      (0, _apiCaller2.default)('notes', 'post', { note: { id: noteId, task: newTask }, laneId: targetLaneId });
	    }).then(function () {
	      dispatch(removeFromLane(sourceLaneId, noteId));
	      dispatch(pushToLane(targetLaneId, noteId));
	    });
	  };
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;

	var _isomorphicFetch = __webpack_require__(39);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _config = __webpack_require__(40);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];

	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;

	    if (!response.ok) {
	      return Promise.reject(json);
	    }

	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://admin:admin1234@ds249092.mlab.com:49092/kanban',
	  port: process.env.PORT || 8000
	};

	exports.default = config;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.lanes = undefined;

	var _normalizr = __webpack_require__(42);

	var note = new _normalizr.schema.Entity('notes');

	var lane = new _normalizr.schema.Entity('lanes', {
	  notes: [note]
	});

	var lanes = exports.lanes = [lane];

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("normalizr");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MOVE_WITHIN_LANE = exports.CREATE_NOTES = exports.EDIT_NOTE = exports.DELETE_NOTE = exports.UPDATE_NOTE = exports.CREATE_NOTE = undefined;
	exports.createNote = createNote;
	exports.createNoteRequest = createNoteRequest;
	exports.updateNote = updateNote;
	exports.updateNoteRequest = updateNoteRequest;
	exports.deleteNote = deleteNote;
	exports.deleteNoteRequest = deleteNoteRequest;
	exports.editNote = editNote;
	exports.createNotes = createNotes;
	exports.moveWithinLane = moveWithinLane;

	var _apiCaller = __webpack_require__(38);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var CREATE_NOTE = exports.CREATE_NOTE = 'CREATE_NOTE';
	var UPDATE_NOTE = exports.UPDATE_NOTE = 'UPDATE_NOTE';
	var DELETE_NOTE = exports.DELETE_NOTE = 'DELETE_NOTE';
	var EDIT_NOTE = exports.EDIT_NOTE = 'EDIT_NOTE';
	var CREATE_NOTES = exports.CREATE_NOTES = 'CREATE_NOTES';
	var MOVE_WITHIN_LANE = exports.MOVE_WITHIN_LANE = 'MOVE_NOTES';

	// Export Actions
	function createNote(note, laneId) {
	  return {
	    type: CREATE_NOTE,
	    laneId: laneId,
	    note: note
	  };
	}

	function createNoteRequest(note, laneId) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('notes', 'post', { note: note, laneId: laneId }).then(function (noteResp) {
	      dispatch(createNote(noteResp, laneId));
	    });
	  };
	}

	function updateNote(note) {
	  return {
	    type: UPDATE_NOTE,
	    note: note
	  };
	}

	function updateNoteRequest(note) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('notes/' + note.id, 'put', note).then(function (noteResp) {
	      dispatch(updateNote(noteResp));
	    });
	  };
	}

	function deleteNote(noteId, laneId) {
	  return {
	    type: DELETE_NOTE,
	    noteId: noteId,
	    laneId: laneId
	  };
	}

	function deleteNoteRequest(noteId, laneId) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('notes/' + noteId, 'delete').then(function () {
	      dispatch(deleteNote(noteId, laneId));
	    });
	  };
	}

	function editNote(noteId) {
	  return {
	    type: EDIT_NOTE,
	    noteId: noteId
	  };
	}

	function createNotes(notesData) {
	  return {
	    type: CREATE_NOTES,
	    notes: notesData
	  };
	}

	function moveWithinLane(laneId, targetId, sourceId) {
	  return {
	    type: MOVE_WITHIN_LANE,
	    laneId: laneId,
	    targetId: targetId,
	    sourceId: sourceId
	  };
	}

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("lodash/omit");

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = notes;

	var _NoteActions = __webpack_require__(43);

	var _omit = __webpack_require__(44);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	// Initial State
	var initialState = {};

	function notes() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {

	    case _NoteActions.CREATE_NOTE:
	    case _NoteActions.UPDATE_NOTE:
	      return _extends({}, state, _defineProperty({}, action.note.id, action.note));

	    case _NoteActions.EDIT_NOTE:
	      var note = _extends({}, state[action.noteId], { editing: true });
	      console.log(_extends({}, state));
	      return _extends({}, state, _defineProperty({}, action.noteId, note));

	    case _NoteActions.DELETE_NOTE:
	      return (0, _omit2.default)(state, action.noteId);

	    case _NoteActions.CREATE_NOTES:
	      return _extends({}, action.notes);

	    default:
	      return state;
	  }
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(47);

	var _App = __webpack_require__(50);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}

	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(52);
	}

	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    !/* require.ensure */(function (require) {
	      cb(null, __webpack_require__(52).default);
	    }(__webpack_require__));
	  }
	}));

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(9);

	var _App = {
	  "container": "_15uqt7TaQcflNYjiD0-re1"
	};

	var _App2 = _interopRequireDefault(_App);

	var _reactHelmet = __webpack_require__(48);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _DevTools = __webpack_require__(20);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _Header = __webpack_require__(51);

	var _Header2 = _interopRequireDefault(_Header);

	var _IntlActions = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style


	// Import Components


	// Import Actions


	var _ref = _jsx(_DevTools2.default, {});

	var _ref2 = _jsx(_Header2.default, {});

	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = { isMounted: false };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'Kanban',
	        titleTemplate: '%s - Mern App',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _ref2, _jsx('div', {
	        className: _App2.default.container
	      }, void 0, this.props.children)));
	    }
	  }]);

	  return App;
	}(_react.Component);

	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Style


	exports.Header = Header;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(47);

	var _reactIntl = __webpack_require__(8);

	var _Header = {
	  "header": "_3EGjKVGKCGTGQn_m_YASdF",
	  "content": "_391cv5n_RFU0K9SBOjXDEt",
	  "site-title": "_11V45Tl3_Hdy_ARI53CW9g"
	};

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_reactRouter.Link, {
	  to: '/'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'siteTitle'
	}));

	function Header(props, context) {

	  return _jsx('div', {
	    className: _Header2.default.header
	  }, void 0, _jsx('div', {
	    className: _Header2.default.content
	  }, void 0, _jsx('h1', {
	    className: _Header2.default['site-title']
	  }, void 0, _ref)));
	}

	exports.default = Header;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(53);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactRedux = __webpack_require__(9);

	var _Lanes = __webpack_require__(54);

	var _Lanes2 = _interopRequireDefault(_Lanes);

	var _Lane = {
	  "AddLane": "_2Msbkmis0P-o-hcRA-XpQ3",
	  "Lane": "E9f3tcAtlbzZIgOcGyfn9",
	  "LaneHeader": "_11M_ALj1hYYM2fq2bd6Z1r",
	  "LaneName": "_1H6sdUyNzRy2Te_awt2TKp",
	  "LaneDelete": "_37tSUDnBkcKA1LlMion6JO",
	  "LaneAddNote": "_2kcuhH88DMyZVnh58jopS6"
	};

	var _Lane2 = _interopRequireDefault(_Lane);

	var _LaneActions = __webpack_require__(37);

	var _reactDnd = __webpack_require__(60);

	var _reactDndHtml5Backend = __webpack_require__(63);

	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

	var _redux = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Kanban = function Kanban(props) {
	  return _jsx('div', {
	    className: _Lane2.default.Kanban
	  }, void 0, _jsx(_Lanes2.default, {
	    lanes: props.lanes
	  }), _jsx('button', {
	    className: _Lane2.default.AddLane,
	    onClick: function onClick() {
	      return props.createLane({
	        name: 'Click and type new name'
	      });
	    }
	  }, void 0, 'New list...'));
	};

	Kanban.need = [function () {
	  return (0, _LaneActions.fetchLanes)();
	}];

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    lanes: Object.values(state.lanes)
	  };
	};

	var mapDispatchToProps = {
	  createLane: _LaneActions.createLaneRequest,
	  fetchLanes: _LaneActions.fetchLanes
	};

	exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default))(Kanban);

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("prop-types");

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _LaneContainer = __webpack_require__(55);

	var _LaneContainer2 = _interopRequireDefault(_LaneContainer);

	var _Lane = {
	  "AddLane": "_2Msbkmis0P-o-hcRA-XpQ3",
	  "Lane": "E9f3tcAtlbzZIgOcGyfn9",
	  "LaneHeader": "_11M_ALj1hYYM2fq2bd6Z1r",
	  "LaneName": "_1H6sdUyNzRy2Te_awt2TKp",
	  "LaneDelete": "_37tSUDnBkcKA1LlMion6JO",
	  "LaneAddNote": "_2kcuhH88DMyZVnh58jopS6"
	};

	var _Lane2 = _interopRequireDefault(_Lane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Lanes = function Lanes(_ref) {
	  var lanes = _ref.lanes;

	  return _jsx('div', {
	    className: 'lanes'
	  }, void 0, lanes.map(function (lane) {
	    return _jsx(_LaneContainer2.default, {
	      className: 'lane',
	      lane: lane
	    }, lane.id);
	  }));
	};

	exports.default = Lanes;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(9);

	var _Lane = __webpack_require__(56);

	var _Lane2 = _interopRequireDefault(_Lane);

	var _redux = __webpack_require__(18);

	var _reactDnd = __webpack_require__(60);

	var _itemTypes = __webpack_require__(61);

	var _itemTypes2 = _interopRequireDefault(_itemTypes);

	var _LaneActions = __webpack_require__(37);

	var _NoteActions = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var noteTarget = {
	  drop: function drop(targetProps, monitor) {
	    var sourceProps = monitor.getItem();
	    var noteId = sourceProps.id,
	        sourceLaneId = sourceProps.laneId,
	        task = sourceProps.task;

	    if (targetProps.lane.id !== sourceLaneId) {
	      targetProps.changeLanesRequest(sourceLaneId, targetProps.lane.id, noteId, task);
	    }
	  }
	};

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    laneNotes: ownProps.lane.notes.map(function (noteId) {
	      return state.notes[noteId];
	    })
	  };
	};

	var mapDispatchToProps = {
	  editLane: _LaneActions.editLane,
	  deleteLane: _LaneActions.deleteLaneRequest,
	  updateLane: _LaneActions.updateLaneRequest,
	  addNote: _NoteActions.createNoteRequest,
	  createLane: _LaneActions.createLaneRequest,
	  moveBetweenLanes: _LaneActions.moveBetweenLanes,
	  removeFromLane: _LaneActions.removeFromLane,
	  pushToLane: _LaneActions.pushToLane,
	  changeLanesRequest: _LaneActions.changeLanesRequest
	};

	exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactDnd.DropTarget)(_itemTypes2.default.NOTE, noteTarget, function (dragConnect) {
	  return {
	    connectDropTarget: dragConnect.dropTarget()
	  };
	}))(_Lane2.default);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _NoteContainer = __webpack_require__(57);

	var _NoteContainer2 = _interopRequireDefault(_NoteContainer);

	var _Edit = __webpack_require__(62);

	var _Edit2 = _interopRequireDefault(_Edit);

	var _Lane = {
	  "AddLane": "_2Msbkmis0P-o-hcRA-XpQ3",
	  "Lane": "E9f3tcAtlbzZIgOcGyfn9",
	  "LaneHeader": "_11M_ALj1hYYM2fq2bd6Z1r",
	  "LaneName": "_1H6sdUyNzRy2Te_awt2TKp",
	  "LaneDelete": "_37tSUDnBkcKA1LlMion6JO",
	  "LaneAddNote": "_2kcuhH88DMyZVnh58jopS6"
	};

	var _Lane2 = _interopRequireDefault(_Lane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Lane = function Lane(props) {
	  var connectDropTarget = props.connectDropTarget,
	      lane = props.lane,
	      laneNotes = props.laneNotes,
	      updateLane = props.updateLane,
	      addNote = props.addNote,
	      deleteLane = props.deleteLane,
	      editLane = props.editLane;

	  var laneId = lane.id;

	  return connectDropTarget(_jsx('div', {
	    className: _Lane2.default.Lane
	  }, void 0, _jsx('div', {
	    className: _Lane2.default.LaneHeader
	  }, void 0, _jsx(_Edit2.default, {
	    className: _Lane2.default.LaneName,
	    editing: lane.editing,
	    value: lane.name,
	    onValueClick: function onValueClick() {
	      return editLane(lane.id);
	    },
	    onUpdate: function onUpdate(name) {
	      return updateLane(_extends({}, lane, { name: name, editing: false }));
	    }
	  }), _jsx('div', {
	    className: _Lane2.default.LaneDelete
	  }, void 0, _jsx('button', {
	    onClick: function onClick() {
	      return deleteLane(laneId);
	    }
	  }, void 0, '\xD7')), _jsx('div', {
	    className: _Lane2.default.LaneAddNote
	  }, void 0, _jsx('button', {
	    onClick: function onClick() {
	      return addNote({ task: 'New note' }, laneId);
	    }
	  }, void 0, 'Add note'))), _jsx(_NoteContainer2.default, {
	    notes: laneNotes,
	    laneId: laneId
	  })));
	};

	exports.default = Lane;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(9);

	var _Notes = __webpack_require__(58);

	var _Notes2 = _interopRequireDefault(_Notes);

	var _NoteActions = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapDispatchToProps = {
	  editNote: _NoteActions.editNote,
	  updateNote: _NoteActions.updateNoteRequest,
	  deleteNote: _NoteActions.deleteNoteRequest,
	  moveWithinLane: _NoteActions.moveWithinLane
	};

	exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_Notes2.default);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _Note = __webpack_require__(59);

	var _Note2 = _interopRequireDefault(_Note);

	var _Edit = __webpack_require__(62);

	var _Edit2 = _interopRequireDefault(_Edit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import styles from './Note.css';

	var Notes = function Notes(_ref) {
	  var notes = _ref.notes,
	      laneId = _ref.laneId,
	      editNote = _ref.editNote,
	      updateNote = _ref.updateNote,
	      deleteNote = _ref.deleteNote,
	      moveWithinLane = _ref.moveWithinLane;

	  return _jsx('ul', {}, void 0, notes.map(function (note) {
	    return _jsx(_Note2.default, {
	      id: note.id,
	      editing: note.editing,
	      laneId: laneId,
	      task: note.task,
	      moveWithinLane: moveWithinLane,
	      _id: note._id
	    }, note.id, _jsx(_Edit2.default, {
	      editing: note.editing,
	      value: note.task,
	      onValueClick: function onValueClick() {
	        return editNote(note.id);
	      },
	      onUpdate: function onUpdate(task) {
	        return updateNote(_extends({}, note, {
	          task: task,
	          editing: false
	        }));
	      },
	      onDelete: function onDelete() {
	        return deleteNote(note.id, laneId);
	      }
	    }));
	  }));
	};

	exports.default = Notes;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDnd = __webpack_require__(60);

	var _redux = __webpack_require__(18);

	var _itemTypes = __webpack_require__(61);

	var _itemTypes2 = _interopRequireDefault(_itemTypes);

	var _Note = {
	  "Note": "_1-dD9tf_83sG-5AqTFjByw"
	};

	var _Note2 = _interopRequireDefault(_Note);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Note = function (_React$Component) {
	  _inherits(Note, _React$Component);

	  function Note(props) {
	    _classCallCheck(this, Note);

	    var _this = _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this, props));

	    _this.props = props;
	    return _this;
	  }

	  _createClass(Note, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          connectDragSource = _props.connectDragSource,
	          connectDropTarget = _props.connectDropTarget,
	          isDragging = _props.isDragging,
	          editing = _props.editing,
	          task = _props.task,
	          children = _props.children;

	      // jeśli edytujemy to przepuszczamy komponent (uniemożliwiamy tym samym przeciąganie komponentu edytowanego)

	      var dragSource = editing ? function (a) {
	        return a;
	      } : connectDragSource;

	      return dragSource(connectDropTarget(_jsx('li', {
	        className: _Note2.default.Note,
	        style: {
	          opacity: isDragging ? 0 : 1
	        }
	      }, void 0, children)));
	    }
	  }]);

	  return Note;
	}(_react2.default.Component);

	var noteSource = {
	  beginDrag: function beginDrag(props) {
	    return {
	      id: props.id,
	      laneId: props.laneId,
	      task: props.task
	    };
	  },
	  isDragging: function isDragging(props, monitor) {
	    return props.id === monitor.getItem().id;
	  }
	};

	var noteTarget = {
	  hover: function hover(targetProps, monitor) {
	    var sourceProps = monitor.getItem();

	    if (targetProps.id !== sourceProps.id && targetProps.laneId === sourceProps.laneId) {
	      targetProps.moveWithinLane(targetProps.laneId, targetProps.id, sourceProps.id);
	    }
	  }
	};

	exports.default = (0, _redux.compose)((0, _reactDnd.DragSource)(_itemTypes2.default.NOTE, noteSource, function (connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging()
	  };
	}), (0, _reactDnd.DropTarget)(_itemTypes2.default.NOTE, noteTarget, function (connect) {
	  return {
	    connectDropTarget: connect.dropTarget()
	  };
	}))(Note);

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("react-dnd");

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  NOTE: 'note'
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _Edit = {
	  "value": "_12Ja4q9QuLy3SRX2G-6L7s"
	};

	var _Edit2 = _interopRequireDefault(_Edit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Edit = function (_Component) {
	  _inherits(Edit, _Component);

	  function Edit() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Edit);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Edit.__proto__ || Object.getPrototypeOf(Edit)).call.apply(_ref, [this].concat(args))), _this), _this.checkEnter = function (e) {
	      if (e.key === 'Enter') {
	        _this.finishEdit(e);
	      }
	    }, _this.finishEdit = function (e) {
	      var value = e.target.value;
	      _this.props.onUpdate(value);
	    }, _this.renderDelete = function () {
	      return _jsx('button', {
	        className: _Edit2.default.delete,
	        onClick: _this.props.onDelete
	      }, void 0, '\xD7');
	    }, _this.renderValue = function () {
	      var _this$props = _this.props,
	          value = _this$props.value,
	          onDelete = _this$props.onDelete,
	          onValueClick = _this$props.onValueClick;


	      return _jsx('div', {}, void 0, onDelete ? _this.renderDelete() : null, _jsx('span', {
	        className: _Edit2.default.value,
	        onClick: onValueClick
	      }, void 0, value));
	    }, _this.renderEdit = function () {
	      return _jsx('input', {
	        type: 'text',
	        autoFocus: true,
	        defaultValue: _this.props.value,
	        onBlur: _this.finishEdit,
	        onKeyPress: _this.checkEnter
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Edit, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: this.props.className
	      }, void 0, this.props.editing ? this.renderEdit() : this.renderValue());
	    }
	  }]);

	  return Edit;
	}(_react.Component);

	exports.default = Edit;

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("react-dnd-html5-backend");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;

	var _promiseUtils = __webpack_require__(65);

	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);

	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }

	    return Promise.resolve(results);
	  };

	  return runner();
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(1);

	var _lane = __webpack_require__(67);

	var LaneController = _interopRequireWildcard(_lane);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	// Get all Lanes
	router.route('/lanes').get(LaneController.getLanes);

	// Add a new Lane
	router.route('/lanes').post(LaneController.addLane);

	// Delete a lane by laneId
	router.route('/lanes/:laneId').delete(LaneController.deleteLane);

	//Edit a lane 
	router.route('/lanes/:laneId').put(LaneController.editLane);

	exports.default = router;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSomething = getSomething;
	exports.addLane = addLane;
	exports.deleteLane = deleteLane;
	exports.editLane = editLane;
	exports.getLanes = getLanes;

	var _lane = __webpack_require__(68);

	var _lane2 = _interopRequireDefault(_lane);

	var _note = __webpack_require__(69);

	var _note2 = _interopRequireDefault(_note);

	var _uuid = __webpack_require__(70);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getSomething(req, res) {
	  return res.status(200).end();
	}

	function addLane(req, res) {
	  if (!req.body.name) {
	    res.status(403).end();
	  }

	  var newLane = new _lane2.default(req.body);

	  newLane.id = (0, _uuid2.default)();
	  newLane.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json(saved);
	  });
	}

	function deleteLane(req, res) {
	  _lane2.default.findOne({ id: req.params.laneId }).exec(function (err, lane) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    var notes = lane.notes;
	    console.log(notes);
	    notes.forEach(function (note) {
	      _note2.default.findByIdAndRemove(note._id).exec(function () {
	        console.log(note._id);
	      });
	    });
	    lane.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

	function editLane(req, res) {
	  _lane2.default.findOne({ id: req.params.laneId }).exec(function (err, lane) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    lane.name = req.body.name;
	    lane.save(function (err, saved) {
	      if (err) {
	        res.status(500).send(err);
	      }
	      res.json(saved);
	    });
	  });
	}

	function getLanes(req, res) {
	  _lane2.default.find().exec(function (err, lanes) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ lanes: lanes });
	  });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _note = __webpack_require__(69);

	var _note2 = _interopRequireDefault(_note);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	_mongoose2.default.plugin(function (schema) {
	  schema.options.usePushEach = true;
	});

	var laneSchema = new Schema({
	  name: { type: 'String', required: true },
	  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
	  id: { type: 'String', required: true, unique: true }
	});

	function populateNotes(next) {
	  this.populate('notes');
	  next();
	}

	laneSchema.pre('find', populateNotes);
	laneSchema.pre('findOne', populateNotes);

	exports.default = _mongoose2.default.model('Lane', laneSchema);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var noteSchema = new Schema({
	  task: { type: 'String', required: true },
	  id: { type: 'String', required: true, unique: true }
	});

	exports.default = _mongoose2.default.model('Note', noteSchema);

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = require("uuid");

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(1);

	var _note = __webpack_require__(72);

	var NoteController = _interopRequireWildcard(_note);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	// Add a new Note
	router.route('/notes').post(NoteController.addNote);

	// Delete a note by noteId
	router.route('/notes/:noteId').delete(NoteController.deleteNote);

	//Edit a Note
	router.route('/notes/:noteId').put(NoteController.editNote);

	exports.default = router;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addNote = addNote;
	exports.deleteNote = deleteNote;
	exports.editNote = editNote;

	var _note = __webpack_require__(69);

	var _note2 = _interopRequireDefault(_note);

	var _lane = __webpack_require__(68);

	var _lane2 = _interopRequireDefault(_lane);

	var _uuid = __webpack_require__(70);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addNote(req, res) {
	  var _req$body = req.body,
	      note = _req$body.note,
	      laneId = _req$body.laneId;


	  if (!note || !note.task || !laneId) {
	    res.status(400).end();
	  }

	  var newNote = new _note2.default({
	    task: note.task
	  });

	  newNote.id = (0, _uuid2.default)();
	  newNote.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    _lane2.default.findOne({ id: laneId }).then(function (lane) {
	      lane.notes.push(saved);
	      return lane.save();
	    }).then(function () {
	      res.json(saved);
	    });
	  });
	}

	function deleteNote(req, res) {
	  _note2.default.findOne({ id: req.params.noteId }).exec(function (err, note) {
	    var noteId = req.params.noteId;

	    if (!note || !noteId || note === 'null') {
	      res.status(400).end();
	      return;
	    }

	    if (err) {
	      res.status(500).send(err);
	    }

	    _lane2.default.findOne({ notes: note._id }).then(function (lane) {
	      var updatedNotes = lane.notes.filter(function (note) {
	        return note.id !== noteId;
	      });
	      lane.update({ notes: updatedNotes }, function (error) {
	        if (error) {
	          res.status(500).send(error);
	        }
	      });
	    }).then(function () {
	      note.remove();
	    }).then(function () {
	      res.status(200).end();
	    });
	  });
	}

	function editNote(req, res) {
	  _note2.default.findOne({ id: req.params.noteId }).exec(function (err, note) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    note.task = req.body.task;
	    note.save(function (error, saved) {
	      if (err) {
	        res.status(500).send(error);
	      }
	      res.json(saved);
	    });
	  });
	}

/***/ }
/******/ ]);