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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var schema = {};

var userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema(schema, { timestamps: true });

userSchema.methods = {
  authenticate: function authenticate(plaintTextPassword) {
    return bcrypt.compareSync(plainTextPword, this.password);
  },
  hashPassword: function hashPassword(plaintTextPassword) {
    if (!plaintTextPassword) {
      throw new Error('Could not save user');
    }

    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plaintTextPassword, salt);
  }
};

var User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('user', userSchema);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return controllers; });
/* unused harmony export createOne */
/* unused harmony export updateOne */
/* unused harmony export deleteOne */
/* unused harmony export getOne */
/* unused harmony export getAll */
/* unused harmony export findByParam */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateControllers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_merge__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_merge__);





var _this = this;


var testData = { message: 'hello'

  // These are generic methods used in the generic controllers for all models
};var controllers = {
  createOne: function createOne(model, body) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  },
  updateOne: function updateOne(docToUpdate, update) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  },
  deleteOne: function deleteOne(docToDelete) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  },
  getOne: function getOne(docToGet) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  },
  getAll: function getAll(model) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  },
  findByParam: function findByParam(model, id) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  }
};

// return controllers.createOne(model, req.body)
//     .then(result => res.json(result))
//     .catch(err => res.status(500).send('Things are not looking good'));

var createOne = function createOne(model) {
  return function (req, res, next) {
    return controllers.createOne(model, req.body).then(function (doc) {
      return res.status(201).json(doc);
    }).catch(function (err) {
      return next(err);
    });
  };
};

var updateOne = function updateOne(model) {
  return function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
      var docToUpdate, update;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              docToUpdate = req.docFromId;
              update = req.body;
              return _context.abrupt('return', controllers.updateOne(docToUpdate, update).then(function (doc) {
                return res.status(201).json(doc);
              }).catch(function (err) {
                return next(err);
              }));

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var deleteOne = function deleteOne(model) {
  return function (req, res, next) {
    return controllers.deleteOne(req.docFromId).then(function (doc) {
      return res.status(201).json(doc);
    }).catch(function (err) {
      return next(err);
    });
  };
};

//res.json(), res.status(), res.send(), res.sendFile(), res.render()
var getOne = function getOne(model) {
  return function (req, res, next) {
    return controllers.getOne(req.docFromId).then(function (doc) {
      return res.status(200).json(doc);
    }).catch(function (err) {
      return next(err);
    });
  };
};

var getAll = function getAll(model) {
  return function (req, res, next) {
    return controllers.getAll(model).then(function (docs) {
      return res.json(docs);
    }).catch(function (err) {
      return next(err);
    });
  };
};

var findByParam = function findByParam(model) {
  return function (req, res, next, id) {
    return controllers.findByParam(model, id).then(function (doc) {
      if (!doc) {
        next(new Error('Not Found Error'));
      } else {
        req.docFromId = doc;
        next();
      }
    }).catch(function (err) {
      return next(err);
    });
  };
};

var generateControllers = function generateControllers(model) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model)
  };

  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, defaults, overrides);
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playlist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var schema = {};

var playlistSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema(schema);

var Playlist = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('playlist', playlistSchema);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Song; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var schema = {};

var songSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema(schema);

var Song = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('song', songSchema);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chai__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chai_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chai_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chai_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_server__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_api_modules_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_api_resources_user_user_model__ = __webpack_require__(0);



var _this = this;








__WEBPACK_IMPORTED_MODULE_2_chai___default.a.use(__WEBPACK_IMPORTED_MODULE_3_chai_http___default.a);

var createApiSpec = function createApiSpec(model, resourceName, newResource) {
  describe('/' + resourceName, function () {
    var jwt = void 0;

    beforeEach(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var user;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* dropDb */])();

            case 2:
              _context.next = 4;
              return __WEBPACK_IMPORTED_MODULE_7__src_api_resources_user_user_model__["a" /* User */].create({ username: 'stu1', passwordHash: '123' });

            case 4:
              user = _context.sent;

              jwt = Object(__WEBPACK_IMPORTED_MODULE_6__src_api_modules_auth__["a" /* signToken */])(user.id);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    })));

    afterEach(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* dropDb */])();

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    })));

    describe('GET /' + resourceName, function () {
      it('should get all ' + resourceName, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2_chai___default.a.request(__WEBPACK_IMPORTED_MODULE_5__src_server__["a" /* default */]).get('/api/' + resourceName).set('Authorization', 'Bearer ' + jwt);

              case 2:
                result = _context3.sent;


                Object(__WEBPACK_IMPORTED_MODULE_2_chai__["expect"])(result).to.have.status(200);
                Object(__WEBPACK_IMPORTED_MODULE_2_chai__["expect"])(result).to.be.json;

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      })));
    });

    describe('POST /' + resourceName, function () {
      it('should create a ' + resourceName, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2_chai___default.a.request(__WEBPACK_IMPORTED_MODULE_5__src_server__["a" /* default */]).post('/api/' + resourceName).set('Authorization', 'Bearer ' + jwt).send(newResource);

              case 2:
                result = _context4.sent;


                Object(__WEBPACK_IMPORTED_MODULE_2_chai__["expect"])(result).to.have.status(201);
                Object(__WEBPACK_IMPORTED_MODULE_2_chai__["expect"])(result).to.be.json;

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this);
      })));
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (createApiSpec);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export removeModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dropDb; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_api_resources_user_user_model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_api_resources_playlist_playlist_model__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_api_resources_song_song_model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);






__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.Promise = global.Promise;

var removeModel = function removeModel(modelName) {
  var model = __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.model(modelName);
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    if (!model) {
      return resolve();
    }
    model.remove(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

var dropDb = function dropDb() {
  return __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect('mongodb://localhost/jams-test', {
    useMongoClient: true
  }).then(function () {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.modelNames().map(removeModel));
  });
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return signin; });
/* unused harmony export decodeToken */
/* unused harmony export getFreshUser */
/* unused harmony export verifyUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signToken; });
/* unused harmony export protect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resources_user_user_model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_jwt__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express_jwt__);



var jwtSecret = 'blueRhinoJumps';

var checkToken = __WEBPACK_IMPORTED_MODULE_2_express_jwt___default()({ secret: jwtSecret });
var disableAuth = false;

var signin = function signin(req, res, next) {
  // req.user will be there from the middleware
  // verify user. Then we can just create a token
  // and send it back for the client to consume
  var token = signToken(req.user.id);
  res.json({ token: token });
};

var decodeToken = function decodeToken() {
  return function (req, res, next) {
    if (disableAuth) {
      return next();
    }
    // make it optional to place token on query string
    // if it is, place it on the headers where it should be
    // so checkToken can see it. See follow the 'Bearer 034930493' format
    // so checkToken can see it and decode it
    if (req.query && req.query.hasOwnProperty('access_token')) {
      req.headers.authorization = 'Bearer ' + req.query.access_token;
    }

    // this will call next if token is valid
    // and send error if its not. It will attached
    // the decoded token to req.user
    checkToken(req, res, next);
  };
};

var getFreshUser = function getFreshUser() {
  return function (req, res, next) {
    return __WEBPACK_IMPORTED_MODULE_0__resources_user_user_model__["a" /* User */].findById(req.user.id).then(function (user) {
      if (!user) {
        // if no user is found it was not
        // it was a valid JWT but didn't decode
        // to a real user in our DB. Either the user was deleted
        // since the client got the JWT, or
        // it was a JWT from some other source
        res.status(401).send('Unauthorized');
      } else {
        // update req.user with fresh user from
        // stale token data
        req.user = user;
        next();
      }
    }).catch(function (error) {
      return next(error);
    });
  };
};

var verifyUser = function verifyUser() {
  return function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // if no username or password then send
    if (!username || !password) {
      res.status(400).send('You need a username and password');
      return;
    }

    // look user up in the DB so we can check
    // if the passwords match for the username
    __WEBPACK_IMPORTED_MODULE_0__resources_user_user_model__["a" /* User */].findOne({ username: username }).then(function (user) {
      if (!user) {
        res.status(401).send('No user with the given username');
      } else {
        // checking the passowords here
        if (!user.authenticate(password)) {
          res.status(401).send('Wrong password');
        } else {
          // if everything is good,
          // then attach to req.user
          // and call next so the controller
          // can sign a token from the req.user._id
          req.user = user;
          next();
        }
      }
    }).catch(function (error) {
      return next(err);
    });
  };
};

var signToken = function signToken(id) {
  return __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.sign({ id: id }, jwtSecret, { expiresIn: '30d' });
};

var protect = [decodeToken(), getFreshUser()];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


var testsContext = __webpack_require__(14);

var runnable = testsContext.keys();

runnable.forEach(testsContext);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./api/modules/query.spec.js": 15,
	"./api/resources/playlist/playlist.spec.js": 18,
	"./api/resources/song/song.spec.js": 38,
	"./api/resources/user/user.spec.js": 39
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 14;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chai__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testhelpers__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__query__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_user_user_model__ = __webpack_require__(0);




var _this = this;






describe('Modules', function () {
  beforeEach(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_4__testhelpers__["a" /* dropDb */])();

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  })));

  afterEach(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(__WEBPACK_IMPORTED_MODULE_4__testhelpers__["a" /* dropDb */])();

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  })));

  xdescribe('query', function () {
    describe('createOne', function () {
      it('should create a document', __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__query__["a" /* controllers */].createOne(__WEBPACK_IMPORTED_MODULE_6__resources_user_user_model__["a" /* User */], {
                  username: 'student12',
                  passwordHash: '1234abcd'
                });

              case 2:
                result = _context3.sent;

                Object(__WEBPACK_IMPORTED_MODULE_3_chai__["expect"])(result).to.be.ok;
                Object(__WEBPACK_IMPORTED_MODULE_3_chai__["expect"])(result.id).to.be.ok;
                Object(__WEBPACK_IMPORTED_MODULE_3_chai__["expect"])(result.username).to.equal('student12');

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this);
      })));
    });
    describe('updateOne', function () {
      it('should update a document', __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var user, newUsername, updatedUser;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__query__["a" /* controllers */].createOne(__WEBPACK_IMPORTED_MODULE_6__resources_user_user_model__["a" /* User */], {
                  username: 'studentx',
                  passwordHash: '1234sdkfj'
                });

              case 2:
                user = _context4.sent;
                newUsername = 'newStudentZ';
                _context4.next = 6;
                return __WEBPACK_IMPORTED_MODULE_5__query__["a" /* controllers */].updateOne(user, { username: newUsername });

              case 6:
                updatedUser = _context4.sent;


                Object(__WEBPACK_IMPORTED_MODULE_3_chai__["expect"])(updatedUser.username).to.equal(newUsername);
                Object(__WEBPACK_IMPORTED_MODULE_3_chai__["expect"])(updatedUser.id).to.equal(user.id);

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this);
      })));
    });

    describe('deleteOne', function () {
      it('should delete a document', __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var user, deletedUser;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__query__["a" /* controllers */].createOne(__WEBPACK_IMPORTED_MODULE_6__resources_user_user_model__["a" /* User */], {
                  username: 'studentx',
                  passwordHash: '1234sdkfj'
                });

              case 2:
                user = _context5.sent;
                _context5.next = 5;
                return __WEBPACK_IMPORTED_MODULE_5__query__["a" /* controllers */].deleteOne(user);

              case 5:
                deletedUser = _context5.sent;


                Object(__WEBPACK_IMPORTED_MODULE_3_chai__["expect"])(deletedUser.id).to.equal(user.id);
                _context5.t0 = __WEBPACK_IMPORTED_MODULE_3_chai__["expect"];
                _context5.next = 10;
                return __WEBPACK_IMPORTED_MODULE_6__resources_user_user_model__["a" /* User */].findById(user.id);

              case 10:
                _context5.t1 = _context5.sent;
                (0, _context5.t0)(_context5.t1).to.equal(null);

              case 12:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this);
      })));
    });

    describe('getOne', function () {
      it('should get one document', __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
        var user, foundUser;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__query__["a" /* controllers */].createOne(__WEBPACK_IMPORTED_MODULE_6__resources_user_user_model__["a" /* User */], {
                  username: 'studentx',
                  passwordHash: '1234sdkfj'
                });

              case 2:
                user = _context6.sent;
                _context6.next = 5;
                return __WEBPACK_IMPORTED_MODULE_5__query__["a" /* controllers */].getOne(user);

              case 5:
                foundUser = _context6.sent;


                Object(__WEBPACK_IMPORTED_MODULE_3_chai__["expect"])(foundUser).to.equal(user);

              case 7:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this);
      })));
    });

    describe('getAll', function () {
      it('should get all documnets', __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee8() {
        var usernames, users, allUsers;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                usernames = ['student1', 'student2'];
                _context8.next = 3;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(usernames.map(function () {
                  var _ref8 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7(username) {
                    var user;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_5__query__["a" /* controllers */].createOne(__WEBPACK_IMPORTED_MODULE_6__resources_user_user_model__["a" /* User */], { username: username, passwordHash: '1234qwer' });

                          case 2:
                            user = _context7.sent;
                            return _context7.abrupt('return', user.toJSON());

                          case 4:
                          case 'end':
                            return _context7.stop();
                        }
                      }
                    }, _callee7, _this);
                  }));

                  return function (_x) {
                    return _ref8.apply(this, arguments);
                  };
                }()));

              case 3:
                users = _context8.sent;
                _context8.next = 6;
                return __WEBPACK_IMPORTED_MODULE_5__query__["a" /* controllers */].getAll(__WEBPACK_IMPORTED_MODULE_6__resources_user_user_model__["a" /* User */]);

              case 6:
                _context8.t0 = function (user) {
                  return user.toJSON();
                };

                allUsers = _context8.sent.map(_context8.t0);


                Object(__WEBPACK_IMPORTED_MODULE_3_chai__["expect"])(allUsers).to.have.length(users.length);

              case 9:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this);
      })));
    });

    describe('findByParam', function () {
      it('should find model my id', __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee9() {
        var user, foundUser;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__query__["a" /* controllers */].createOne(__WEBPACK_IMPORTED_MODULE_6__resources_user_user_model__["a" /* User */], {
                  username: 'student1',
                  passwordHash: '1234qwe'
                });

              case 2:
                user = _context9.sent.toJSON();
                _context9.next = 5;
                return __WEBPACK_IMPORTED_MODULE_5__query__["a" /* controllers */].findByParam(__WEBPACK_IMPORTED_MODULE_6__resources_user_user_model__["a" /* User */], user._id);

              case 5:
                foundUser = _context9.sent.toJSON();


                Object(__WEBPACK_IMPORTED_MODULE_3_chai__["expect"])(foundUser).to.deep.eql(user);

              case 7:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this);
      })));
    });
  });
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("lodash.merge");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiSpecs__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chai__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist_model__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);





describe('Playlist Model', function () {
  it('should have tilte', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["b" /* schema */].title).to.exist;
    Object(__WEBPACK_IMPORTED_MODULE_1_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["b" /* schema */].title.type).to.eql(String);
    Object(__WEBPACK_IMPORTED_MODULE_1_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["b" /* schema */].title.required).to.be.an('array');
  });

  it('should have songs', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["b" /* schema */].songs).to.exist;
    Object(__WEBPACK_IMPORTED_MODULE_1_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["b" /* schema */].songs).to.be.an('array');
    Object(__WEBPACK_IMPORTED_MODULE_1_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["b" /* schema */].songs[0].type).to.eql(__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.Schema.Types.ObjectId);
    Object(__WEBPACK_IMPORTED_MODULE_1_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["b" /* schema */].songs[0].ref).to.eql('song');
  });

  it('should have favorite', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["b" /* schema */].favorite).to.exist;
    Object(__WEBPACK_IMPORTED_MODULE_1_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["b" /* schema */].favorite.type).to.eql(Boolean);
    Object(__WEBPACK_IMPORTED_MODULE_1_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["b" /* schema */].favorite.required).to.equal(true);
    Object(__WEBPACK_IMPORTED_MODULE_1_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["b" /* schema */].favorite.default).to.equal(false);
  });
});
Object(__WEBPACK_IMPORTED_MODULE_0__apiSpecs__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__playlist_model__["a" /* Playlist */], 'playlist', { title: 'study jams', favorite: true });

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("chai-http");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middleware__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_modules_auth__ = __webpack_require__(12);





// Declare an app from express
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

Object(__WEBPACK_IMPORTED_MODULE_1__middleware__["a" /* default */])(app);
Object(__WEBPACK_IMPORTED_MODULE_3__db__["a" /* connect */])();
// setup basic routing for index route

app.use('/signin', __WEBPACK_IMPORTED_MODULE_4__api_modules_auth__["b" /* signin */]);
app.use('/api', __WEBPACK_IMPORTED_MODULE_2__api__["a" /* restRouter */]);
// catch all
app.all('*', function (req, res) {
  res.json({ ok: true });
});

/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);


var setGlobalMiddleware = function setGlobalMiddleware(app) {};

/* harmony default export */ __webpack_exports__["a"] = (setGlobalMiddleware);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restRouter__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__restRouter__["a"]; });


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return restRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_song__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources_playlist__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_errorHandler__ = __webpack_require__(34);






var restRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

restRouter.use('/user', __WEBPACK_IMPORTED_MODULE_1__resources_user__["a" /* userRouter */]);
restRouter.use('/song', __WEBPACK_IMPORTED_MODULE_2__resources_song__["a" /* songRouter */]);
restRouter.use('/playlist', __WEBPACK_IMPORTED_MODULE_3__resources_playlist__["a" /* playlistRouter */]);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_restRouter__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_restRouter__["a"]; });


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_controller__ = __webpack_require__(27);



var userRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

//id will be ran has a fourth argument to findByParam

userRouter.param('id', __WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* default */].findByParam);

userRouter.route('/').get(__WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* default */].getAll).post(__WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* default */].createOne);

userRouter.route('/:id').get(__WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* default */].getOne).put(__WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* default */].updateOne).delete(__WEBPACK_IMPORTED_MODULE_1__user_controller__["a" /* default */].createOne);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_query__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_model__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__modules_query__["b" /* generateControllers */])(__WEBPACK_IMPORTED_MODULE_1__user_model__["a" /* User */]));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__song_restRouter__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__song_restRouter__["a"]; });


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return songRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__song_controller__ = __webpack_require__(30);



var songRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

songRouter.param('id', __WEBPACK_IMPORTED_MODULE_1__song_controller__["a" /* default */].findByParam);

songRouter.route('/').get(__WEBPACK_IMPORTED_MODULE_1__song_controller__["a" /* default */].getAll).post(__WEBPACK_IMPORTED_MODULE_1__song_controller__["a" /* default */].createOne);

songRouter.route('/:id').get(__WEBPACK_IMPORTED_MODULE_1__song_controller__["a" /* default */].getOne).put(__WEBPACK_IMPORTED_MODULE_1__song_controller__["a" /* default */].updateOne).delete(__WEBPACK_IMPORTED_MODULE_1__song_controller__["a" /* default */].createOne);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_query__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__song_model__ = __webpack_require__(9);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__modules_query__["b" /* generateControllers */])(__WEBPACK_IMPORTED_MODULE_1__song_model__["a" /* Song */]));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playlist_restRouter__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__playlist_restRouter__["a"]; });


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return playlistRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playlist_controller__ = __webpack_require__(33);



var playlistRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

playlistRouter.param('id', __WEBPACK_IMPORTED_MODULE_1__playlist_controller__["a" /* default */].findByParam);

playlistRouter.route('/').get(__WEBPACK_IMPORTED_MODULE_1__playlist_controller__["a" /* default */].getAll).post(__WEBPACK_IMPORTED_MODULE_1__playlist_controller__["a" /* default */].createOne);

playlistRouter.route('/:id').get(__WEBPACK_IMPORTED_MODULE_1__playlist_controller__["a" /* default */].getOne).put(__WEBPACK_IMPORTED_MODULE_1__playlist_controller__["a" /* default */].updateOne).delete(__WEBPACK_IMPORTED_MODULE_1__playlist_controller__["a" /* default */].createOne);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_query__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playlist_model__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__modules_query__["b" /* generateControllers */])(__WEBPACK_IMPORTED_MODULE_1__playlist_model__["a" /* Playlist */]));

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export apiErrorHandler */
var apiErrorHandler = function apiErrorHandler(error, req, res, next) {};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = global.Promise;

var connect = function connect() {
  return __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect('mongodb://localhost/jams', {
    useMongoClient: true
  });
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apiSpecs__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__song_model__ = __webpack_require__(9);




describe('Song model', function () {
  it('should have tilte', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__song_model__["b" /* schema */].title).to.exist;
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__song_model__["b" /* schema */].title.required).to.be.an('array');
  });

  it('should have url', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__song_model__["b" /* schema */].url).to.exist;
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__song_model__["b" /* schema */].url.unique).to.equal(true);
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__song_model__["b" /* schema */].url.required).to.be.an('array');
  });

  it('should have album', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__song_model__["b" /* schema */].album).to.exist;
  });

  it('should have artist', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__song_model__["b" /* schema */].artist).to.exist;
  });

  it('should have rating', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__song_model__["b" /* schema */].rating).to.exist;
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__song_model__["b" /* schema */].rating.type).to.eql(Number);
  });

  it('should have favorite', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__song_model__["b" /* schema */].favorite).to.exist;
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__song_model__["b" /* schema */].favorite.type).to.eql(Boolean);
  });
});

Object(__WEBPACK_IMPORTED_MODULE_1__apiSpecs__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__song_model__["a" /* Song */], 'song', { title: 'downtown jamming', url: 'http://music.mp3' });

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apiSpecs__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_model__ = __webpack_require__(0);




describe('User Model', function () {
  it('should have username', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__user_model__["b" /* schema */].username).to.exist;
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__user_model__["b" /* schema */].username.type).to.eql(String);
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__user_model__["b" /* schema */].username.required).to.equal(true);
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__user_model__["b" /* schema */].username.unique).to.equal(true);
  });

  it('should have passwordHash', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__user_model__["b" /* schema */].passwordHash).to.exist;
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__user_model__["b" /* schema */].username.type).to.eql(String);
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(__WEBPACK_IMPORTED_MODULE_2__user_model__["b" /* schema */].username.required).to.equal(true);
  });
});

Object(__WEBPACK_IMPORTED_MODULE_1__apiSpecs__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__user_model__["a" /* User */], 'user', { username: 'stu', passwordHash: '1223saf' });

/***/ })
/******/ ]);
//# sourceMappingURL=28f6cff140b14ff2c470dd12e9faca25-output.js.map