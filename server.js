require("source-map-support").install();
module.exports =
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  var _this2 = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  __webpack_require__(61);

  var _path = __webpack_require__(11);

  var _path2 = _interopRequireDefault(_path);

  var _express = __webpack_require__(10);

  var _express2 = _interopRequireDefault(_express);

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDomServer = __webpack_require__(72);

  var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

  var _routes = __webpack_require__(33);

  var _routes2 = _interopRequireDefault(_routes);

  var _componentsHtml = __webpack_require__(22);

  var _componentsHtml2 = _interopRequireDefault(_componentsHtml);

  var server = global.server = (0, _express2['default'])();

  server.set('port', process.env.PORT || 5000);
  server.use(_express2['default']['static'](_path2['default'].join(__dirname, 'public')));

  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  server.use('/api/content', __webpack_require__(15));

  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  server.get('*', function callee$0$0(req, res, next) {
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      var _this = this;

      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          context$1$0.next = 3;
          return regeneratorRuntime.awrap((function callee$1$0() {
            var statusCode, data, css, context, html;
            return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
              while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                  statusCode = 200;
                  data = { title: '', description: '', css: '', body: '' };
                  css = [];
                  context = {
                    onInsertCss: function onInsertCss(value) {
                      return css.push(value);
                    },
                    onSetTitle: function onSetTitle(value) {
                      return data.title = value;
                    },
                    onSetMeta: function onSetMeta(key, value) {
                      return data[key] = value;
                    },
                    onPageNotFound: function onPageNotFound() {
                      return statusCode = 404;
                    }
                  };
                  context$2$0.next = 6;
                  return regeneratorRuntime.awrap(_routes2['default'].dispatch({ path: req.path, context: context }, function (state, component) {
                    data.body = _reactDomServer2['default'].renderToString(component);
                    data.css = css.join('');
                  }));

                case 6:
                  html = _reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(_componentsHtml2['default'], data));

                  res.status(statusCode).send('<!doctype html>\n' + html);

                case 8:
                case 'end':
                  return context$2$0.stop();
              }
            }, null, _this);
          })());

        case 3:
          context$1$0.next = 8;
          break;

        case 5:
          context$1$0.prev = 5;
          context$1$0.t0 = context$1$0['catch'](0);

          next(context$1$0.t0);

        case 8:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this2, [[0, 5]]);
  });

  //
  // Launch the server
  // -----------------------------------------------------------------------------

  server.listen(server.get('port'), function () {
    /* eslint-disable no-console */
    console.log('The server is running at http://localhost:' + server.get('port'));
    if (process.send) {
      process.send('online');
    }
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  // eslint-disable-line no-unused-vars

  var _fbjsLibInvariant = __webpack_require__(64);

  var _fbjsLibInvariant2 = _interopRequireDefault(_fbjsLibInvariant);

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  var count = 0;

  function withStyles(styles) {
    return function (ComposedComponent) {
      return (function (_Component) {
        _inherits(WithStyles, _Component);

        _createClass(WithStyles, null, [{
          key: 'contextTypes',
          value: {
            onInsertCss: _react.PropTypes.func
          },
          enumerable: true
        }]);

        function WithStyles() {
          _classCallCheck(this, WithStyles);

          _get(Object.getPrototypeOf(WithStyles.prototype), 'constructor', this).call(this);
          this.refCount = 0;
          ComposedComponent.prototype.renderCss = (function render(css) {
            var style = undefined;
            if (_fbjsLibExecutionEnvironment.canUseDOM) {
              style = this.styleId && document.getElementById(this.styleId);
              if (style) {
                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }
              } else {
                this.styleId = 'dynamic-css-' + count++;
                style = document.createElement('style');
                style.setAttribute('id', this.styleId);
                style.setAttribute('type', 'text/css');

                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }

                document.getElementsByTagName('head')[0].appendChild(style);
                this.refCount++;
              }
            } else {
              this.context.onInsertCss(css);
            }
          }).bind(this);
        }

        _createClass(WithStyles, [{
          key: 'componentWillMount',
          value: function componentWillMount() {
            if (_fbjsLibExecutionEnvironment.canUseDOM) {
              (0, _fbjsLibInvariant2['default'])(styles.use, 'The style-loader must be configured with reference-counted API.');
              styles.use();
            } else {
              this.context.onInsertCss(styles.toString());
            }
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            styles.unuse();
            if (this.styleId) {
              this.refCount--;
              if (this.refCount < 1) {
                var style = document.getElementById(this.styleId);
                if (style) {
                  style.parentNode.removeChild(style);
                }
              }
            }
          }
        }, {
          key: 'render',
          value: function render() {
            return _react2['default'].createElement(ComposedComponent, this.props);
          }
        }]);

        return WithStyles;
      })(_react.Component);
    };
  }

  exports['default'] = withStyles;
  module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _coreLocation = __webpack_require__(30);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function () {
    function Link() {
      _classCallCheck(this, Link);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({ onClick: Link.handleClick.bind(this) }, props),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })();

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = {
    GA_ID: 'UA-15474234-1',
    DB: 'https://luminous-heat-5784.firebaseio.com/',
    URL: 'https://paulmg@paulgraffix.scm.azurewebsites.net:443/paulgraffix.git',
    WEBSITE: 'http://paulgraffix.azurewebsites.net',
    ANIM_TIME: 0.6
  };
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _ProjectInfoCss = __webpack_require__(46);

  var _ProjectInfoCss2 = _interopRequireDefault(_ProjectInfoCss);

  var _ProjectContent = __webpack_require__(27);

  var _ProjectContent2 = _interopRequireDefault(_ProjectContent);

  var ProjectInfo = (function (_React$Component) {
    _inherits(ProjectInfo, _React$Component);

    function ProjectInfo() {
      _classCallCheck(this, _ProjectInfo);

      _get(Object.getPrototypeOf(_ProjectInfo.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ProjectInfo, [{
      key: 'render',
      value: function render() {
        var sections = null;
        //console.log(this.props.project)

        if (this.props.isActive) {
          sections = this.props.project.content.map(function (section, index) {
            //console.log(section);

            return _react2['default'].createElement(_ProjectContent2['default'], { key: index, section: section });
          });
        }

        var stack = [];
        if (this.props.project.stack) {
          var keys = Object.keys(this.props.project.stack);

          for (var i = 0; i < keys.length; i++) {
            var stackItems = this.props.project.stack[keys[i]].map(function (el) {
              return ' ' + el;
            });

            stack.push(_react2['default'].createElement(
              'p',
              { key: i },
              _react2['default'].createElement(
                'span',
                { className: 'ProjectInfo-cardStackTitle' },
                keys[i]
              ),
              ' -' + stackItems + '.'
            ));
          }
        }

        var award = null;
        if (this.props.project.awards) {
          award = this.props.project.awards.map(function (award, index) {
            //console.log(section);

            return _react2['default'].createElement(
              'p',
              { key: index },
              _react2['default'].createElement(
                'span',
                { className: 'ProjectInfo-cardAwardTitle' },
                award.title
              ),
              ' - ',
              award.award
            );
          });
        }

        return _react2['default'].createElement(
          'div',
          { className: 'ProjectInfo columns hide' },
          _react2['default'].createElement(
            'div',
            { className: 'ProjectInfo-card', ref: 'projectInfoCard' },
            _react2['default'].createElement(
              'div',
              { className: 'ProjectInfo-cardInfo' },
              _react2['default'].createElement(
                'h2',
                null,
                this.props.project.name
              ),
              _react2['default'].createElement(
                'h5',
                null,
                'Client: ',
                this.props.project.client
              ),
              _react2['default'].createElement(
                'p',
                null,
                this.props.project.long_description
              ),
              this.props.project.link ? _react2['default'].createElement(
                'p',
                null,
                'Link: ',
                _react2['default'].createElement(
                  'a',
                  { href: this.props.project.link, target: '_blank' },
                  this.props.project.link
                )
              ) : null,
              stack ? _react2['default'].createElement(
                'h4',
                null,
                'Stack:'
              ) : null,
              stack,
              award ? _react2['default'].createElement(
                'h4',
                null,
                'Awards:'
              ) : null,
              award
            ),
            _react2['default'].createElement(
              'div',
              { className: 'ProjectInfo-cardSections' },
              sections
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        project: _react2['default'].PropTypes.object.isRequired,
        isActive: _react2['default'].PropTypes.string
      },
      enumerable: true
    }]);

    var _ProjectInfo = ProjectInfo;
    ProjectInfo = (0, _decoratorsWithStyles2['default'])(_ProjectInfoCss2['default'])(ProjectInfo) || ProjectInfo;
    return ProjectInfo;
  })(_react2['default'].Component);

  exports['default'] = ProjectInfo;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var hideAnim = function hideAnim(el, t) {
    var tween = TweenLite.to(el, t, {
      scale: 0.8,
      autoAlpha: 0,
      transformOrigin: 'center bottom',
      ease: Expo.easeInOut
    });

    return tween;
  };

  var showAnim = function showAnim(el) {
    var tween = TweenLite.to(el, 0.4, {
      scale: 1,
      autoAlpha: 1,
      clearProps: 'all',
      ease: Expo.easeInOut
    });

    return tween;
  };

  var floatContainer = function floatContainer(el) {
    document.body.classList.add('body--hidden');

    var rect = el.parentElement.getBoundingClientRect();
    var windowW = window.innerWidth;

    var tl = new TimelineLite();

    tl.set(el, {
      width: rect.width,
      height: rect.height,
      x: rect.left,
      y: rect.top,
      position: 'fixed',
      overflow: 'hidden'
    });

    tl.to(el, 1.2, {
      width: windowW,
      height: '100%',
      x: windowW / 2,
      y: 0,
      xPercent: -50,
      ease: Expo.easeInOut,
      clearProps: 'all',
      className: '-=ProjectWrapper-container--closed'
    });

    return tl;
  };

  var floatCloseContainer = function floatCloseContainer(el) {
    var tl = new TimelineLite();

    var windowW = window.innerWidth;
    var rect = el.parentElement.getBoundingClientRect();

    tl.set(el, {
      width: rect.width,
      height: rect.height,
      x: rect.left,
      y: rect.top,
      position: 'fixed',
      overflow: 'hidden'
    });

    tl.set([el.parentElement], {
      clearProps: 'all'
    });

    tl.to([el], 1.2, {
      width: windowW,
      height: '100%',
      x: windowW / 2,
      y: 0,
      xPercent: -50,
      clearProps: 'all',
      ease: Expo.easeInOut
    });

    tl.eventCallback('onReverseComplete', function () {
      el.classList.add('ProjectWrapper-container--closed');

      TweenLite.set([el], {
        clearProps: 'all'
      });
    });

    return tl;
  };

  var floatNextContainer = function floatNextContainer(el) {
    var tl = new TimelineLite();

    var windowW = window.innerWidth;

    tl.set([el], {
      width: windowW,
      height: '100%',
      x: windowW / 2,
      y: 0,
      xPercent: -50,
      ease: Expo.easeInOut,
      clearProps: 'all',
      className: '-=ProjectWrapper-container--closed'
    });

    return tl;
  };

  var slideContentUp = function slideContentUp(el, t) {
    var tween = TweenLite.to(el, t, {
      y: 0,
      clearProps: 'all',
      ease: Expo.easeInOut,
      className: '-=hide'
    });

    return tween;
  };

  var slideContentDown = function slideContentDown(el, t) {
    var tween = TweenLite.to(el, t, {
      y: window.innerHeight,
      ease: Expo.easeInOut,
      className: '-=hide'
    });

    return tween;
  };

  var clipImageIn = function clipImageIn(el, t, r) {
    var tween = TweenLite.to(el, t, {
      attr: {
        r: r
      },
      ease: Expo.easeInOut
    });

    return tween;
  };

  var clipImageOut = function clipImageOut(el, t) {
    var tween = TweenLite.to(el, t, {
      attr: {
        r: 992
      },
      ease: Expo.easeInOut
    });

    return tween;
  };

  var resetWrapper = function resetWrapper(el) {
    var tween = TweenLite.set([el.parentElement], {
      clearProps: 'all'
    });

    return tween;
  };

  exports['default'] = {
    hideAnim: hideAnim,
    showAnim: showAnim,
    floatContainer: floatContainer,
    floatCloseContainer: floatCloseContainer,
    floatNextContainer: floatNextContainer,
    slideContentUp: slideContentUp,
    slideContentDown: slideContentDown,
    clipImageIn: clipImageIn,
    clipImageOut: clipImageOut,
    resetWrapper: resetWrapper
  };
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 12 */
/***/ function(module, exports) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Match = function Match(route, path, keys, match) {
    _classCallCheck(this, Match);

    this.route = route;
    this.path = path;
    this.params = Object.create(null);
    for (var i = 1; i < match.length; i++) {
      this.params[keys[i - 1].name] = decodeParam(match[i]);
    }
  };

  function decodeParam(val) {
    if (!(typeof val === 'string' || val instanceof String)) {
      return val;
    }

    try {
      return decodeURIComponent(val);
    } catch (e) {
      var err = new TypeError('Failed to decode param \'' + val + '\'');
      err.status = 400;
      throw err;
    }
  }

  exports['default'] = Match;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _pathToRegexp = __webpack_require__(48);

  var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

  var _Match = __webpack_require__(12);

  var _Match2 = _interopRequireDefault(_Match);

  var Route = (function () {
    function Route(path, handlers) {
      _classCallCheck(this, Route);

      this.path = path;
      this.handlers = handlers;
      this.regExp = (0, _pathToRegexp2['default'])(path, this.keys = []);
    }

    _createClass(Route, [{
      key: 'match',
      value: function match(path) {
        var match = this.regExp.exec(path);
        return match ? new _Match2['default'](this, path, this.keys, match) : null;
      }
    }]);

    return Route;
  })();

  exports['default'] = Route;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Route = __webpack_require__(13);

  var _Route2 = _interopRequireDefault(_Route);

  var emptyFunction = function emptyFunction() {};

  var Router = (function () {

    /**
     * Creates a new instance of the `Router` class.
     */

    function Router(initialize) {
      _classCallCheck(this, Router);

      this.routes = [];
      this.events = Object.create(null);

      if (typeof initialize === 'function') {
        initialize(this.on.bind(this));
      }
    }

    /**
     * Adds a new route to the routing table or registers an event listener.
     *
     * @param {String} path A string in the Express format, an array of strings, or a regular expression.
     * @param {Function|Array} handlers Asynchronous route handler function(s).
     */

    _createClass(Router, [{
      key: 'on',
      value: function on(path) {
        for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          handlers[_key - 1] = arguments[_key];
        }

        if (path === 'error') {
          this.events[path] = handlers[0];
        } else {
          this.routes.push(new _Route2['default'](path, handlers));
        }
      }
    }, {
      key: 'dispatch',
      value: function dispatch(state, cb) {
        var routes, handlers, value, result, done, next;
        return regeneratorRuntime.async(function dispatch$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              next = function next() {
                var _handlers$next;

                var _value, _value2, match, handler;

                return regeneratorRuntime.async(function next$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      if (!((_handlers$next = handlers.next(), value = _handlers$next.value, done = _handlers$next.done, _handlers$next) && !done)) {
                        context$3$0.next = 16;
                        break;
                      }

                      _value = value;
                      _value2 = _slicedToArray(_value, 2);
                      match = _value2[0];
                      handler = _value2[1];

                      state.params = match.params;

                      if (!(handler.length > 1)) {
                        context$3$0.next = 12;
                        break;
                      }

                      context$3$0.next = 9;
                      return regeneratorRuntime.awrap(handler(state, next));

                    case 9:
                      context$3$0.t0 = context$3$0.sent;
                      context$3$0.next = 15;
                      break;

                    case 12:
                      context$3$0.next = 14;
                      return regeneratorRuntime.awrap(handler(state));

                    case 14:
                      context$3$0.t0 = context$3$0.sent;

                    case 15:
                      return context$3$0.abrupt('return', context$3$0.t0);

                    case 16:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, null, this);
              };

              if (typeof state === 'string' || state instanceof String) {
                state = { path: state };
              }
              cb = cb || emptyFunction;
              routes = this.routes;
              handlers = regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, route, match, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, handler;

                return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _iteratorError = undefined;
                      context$3$0.prev = 3;
                      _iterator = routes[Symbol.iterator]();

                    case 5:
                      if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        context$3$0.next = 38;
                        break;
                      }

                      route = _step.value;
                      match = route.match(state.path);

                      if (!match) {
                        context$3$0.next = 35;
                        break;
                      }

                      _iteratorNormalCompletion2 = true;
                      _didIteratorError2 = false;
                      _iteratorError2 = undefined;
                      context$3$0.prev = 12;
                      _iterator2 = match.route.handlers[Symbol.iterator]();

                    case 14:
                      if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        context$3$0.next = 21;
                        break;
                      }

                      handler = _step2.value;
                      context$3$0.next = 18;
                      return [match, handler];

                    case 18:
                      _iteratorNormalCompletion2 = true;
                      context$3$0.next = 14;
                      break;

                    case 21:
                      context$3$0.next = 27;
                      break;

                    case 23:
                      context$3$0.prev = 23;
                      context$3$0.t0 = context$3$0['catch'](12);
                      _didIteratorError2 = true;
                      _iteratorError2 = context$3$0.t0;

                    case 27:
                      context$3$0.prev = 27;
                      context$3$0.prev = 28;

                      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                      }

                    case 30:
                      context$3$0.prev = 30;

                      if (!_didIteratorError2) {
                        context$3$0.next = 33;
                        break;
                      }

                      throw _iteratorError2;

                    case 33:
                      return context$3$0.finish(30);

                    case 34:
                      return context$3$0.finish(27);

                    case 35:
                      _iteratorNormalCompletion = true;
                      context$3$0.next = 5;
                      break;

                    case 38:
                      context$3$0.next = 44;
                      break;

                    case 40:
                      context$3$0.prev = 40;
                      context$3$0.t1 = context$3$0['catch'](3);
                      _didIteratorError = true;
                      _iteratorError = context$3$0.t1;

                    case 44:
                      context$3$0.prev = 44;
                      context$3$0.prev = 45;

                      if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                      }

                    case 47:
                      context$3$0.prev = 47;

                      if (!_didIteratorError) {
                        context$3$0.next = 50;
                        break;
                      }

                      throw _iteratorError;

                    case 50:
                      return context$3$0.finish(47);

                    case 51:
                      return context$3$0.finish(44);

                    case 52:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, callee$2$0, this, [[3, 40, 44, 52], [12, 23, 27, 35], [28,, 30, 34], [45,, 47, 51]]);
              })();
              value = undefined, result = undefined, done = false;

            case 6:
              if (done) {
                context$2$0.next = 16;
                break;
              }

              context$2$0.next = 9;
              return regeneratorRuntime.awrap(next());

            case 9:
              result = context$2$0.sent;

              if (!result) {
                context$2$0.next = 14;
                break;
              }

              state.statusCode = 200;
              cb(state, result);
              return context$2$0.abrupt('return');

            case 14:
              context$2$0.next = 6;
              break;

            case 16:
              if (!this.events.error) {
                context$2$0.next = 32;
                break;
              }

              context$2$0.prev = 17;

              state.statusCode = 404;
              context$2$0.next = 21;
              return regeneratorRuntime.awrap(this.events.error(state, new Error('Cannot found a route matching \'' + state.path + '\'.')));

            case 21:
              result = context$2$0.sent;

              cb(state, result);
              context$2$0.next = 32;
              break;

            case 25:
              context$2$0.prev = 25;
              context$2$0.t0 = context$2$0['catch'](17);

              state.statusCode = 500;
              context$2$0.next = 30;
              return regeneratorRuntime.awrap(this.events.error(state, context$2$0.t0));

            case 30:
              result = context$2$0.sent;

              cb(state, result);

            case 32:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this, [[17, 25]]);
      }
    }]);

    return Router;
  })();

  exports['default'] = Router;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _path = __webpack_require__(11);

  var _express = __webpack_require__(10);

  var _jade = __webpack_require__(69);

  var _jade2 = _interopRequireDefault(_jade);

  var _frontMatter = __webpack_require__(65);

  var _frontMatter2 = _interopRequireDefault(_frontMatter);

  var _utilsFs = __webpack_require__(35);

  var _utilsFs2 = _interopRequireDefault(_utilsFs);

  // A folder with Jade/Markdown/HTML content pages
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');

  // Extract 'front matter' metadata and generate HTML
  var parseJade = function parseJade(path, jadeContent) {
    var fmContent = (0, _frontMatter2['default'])(jadeContent);
    var htmlContent = _jade2['default'].render(fmContent.body);
    return Object.assign({ path: path, content: htmlContent }, fmContent.attributes);
  };

  var router = new _express.Router();

  router.get('/', function callee$0$0(req, res, next) {
    var path, fileName, source, content;
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          path = req.query.path;

          if (!(!path || path === 'undefined')) {
            context$1$0.next = 5;
            break;
          }

          res.status(400).send({ error: 'The \'path\' query parameter cannot be empty.' });
          return context$1$0.abrupt('return');

        case 5:
          fileName = (0, _path.join)(CONTENT_DIR, (path === '/' ? '/index' : path) + '.jade');
          context$1$0.next = 8;
          return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));

        case 8:
          if (context$1$0.sent) {
            context$1$0.next = 10;
            break;
          }

          fileName = (0, _path.join)(CONTENT_DIR, path + '/index.jade');

        case 10:
          context$1$0.next = 12;
          return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));

        case 12:
          if (context$1$0.sent) {
            context$1$0.next = 16;
            break;
          }

          res.status(404).send({ error: 'The page \'' + path + '\' is not found.' });
          context$1$0.next = 21;
          break;

        case 16:
          context$1$0.next = 18;
          return regeneratorRuntime.awrap(_utilsFs2['default'].readFile(fileName, { encoding: 'utf8' }));

        case 18:
          source = context$1$0.sent;
          content = parseJade(path, source);

          res.status(200).send(content);

        case 21:
          context$1$0.next = 26;
          break;

        case 23:
          context$1$0.prev = 23;
          context$1$0.t0 = context$1$0['catch'](0);

          next(context$1$0.t0);

        case 26:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this, [[0, 23]]);
  });

  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _decoratorsWithContext = __webpack_require__(31);

  var _decoratorsWithContext2 = _interopRequireDefault(_decoratorsWithContext);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _utilsDOMUtilsJs = __webpack_require__(34);

  var _Header = __webpack_require__(21);

  var _Header2 = _interopRequireDefault(_Header);

  var _Footer = __webpack_require__(20);

  var _Footer2 = _interopRequireDefault(_Footer);

  var _Portfolio = __webpack_require__(25);

  var _Portfolio2 = _interopRequireDefault(_Portfolio);

  var _Contact = __webpack_require__(17);

  var _Contact2 = _interopRequireDefault(_Contact);

  var _AppCss = __webpack_require__(36);

  var _AppCss2 = _interopRequireDefault(_AppCss);

  var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      _classCallCheck(this, _App);

      _get(Object.getPrototypeOf(_App.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(App, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var overlay = this.refs.overlay;
        overlay.classList.remove('overlay--show');

        var transitionEvent = (0, _utilsDOMUtilsJs.whichTransitionEvent)(overlay);

        if (transitionEvent) {
          overlay.addEventListener(transitionEvent, this.listenerDone.bind(this));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'listenerDone',
      value: function listenerDone() {
        this.refs.overlay.classList.add('overlay--hidden');
      }
    }, {
      key: 'render',
      value: function render() {
        return !this.props.error ? _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_Header2['default'], null),
          this.props.children,
          _react2['default'].createElement('div', { className: 'overlay overlay--show', ref: 'overlay' }),
          _react2['default'].createElement(_Portfolio2['default'], null),
          _react2['default'].createElement(_Contact2['default'], null),
          _react2['default'].createElement(
            'div',
            { className: 'row' },
            _react2['default'].createElement(
              'div',
              { className: 'columns' },
              _react2['default'].createElement(
                'div',
                { className: 'columns' },
                _react2['default'].createElement('div', { className: 'columns divider' })
              )
            )
          ),
          _react2['default'].createElement(_Footer2['default'], null)
        ) : this.props.children;
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired,
        error: _react.PropTypes.object
      },
      enumerable: true
    }]);

    var _App = App;
    App = (0, _decoratorsWithStyles2['default'])(_AppCss2['default'])(App) || App;
    App = (0, _decoratorsWithContext2['default'])(App) || App;
    return App;
  })(_react2['default'].Component);

  exports['default'] = App;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _ContactCss = __webpack_require__(37);

  var _ContactCss2 = _interopRequireDefault(_ContactCss);

  var Contact = (function (_React$Component) {
    _inherits(Contact, _React$Component);

    function Contact() {
      _classCallCheck(this, _Contact);

      _get(Object.getPrototypeOf(_Contact.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Contact, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'section',
          { id: 'contact', className: 'Contact' },
          _react2['default'].createElement(
            'div',
            { className: 'Contact-container row' },
            _react2['default'].createElement(
              'div',
              { className: 'columns' },
              _react2['default'].createElement(
                'div',
                { className: 'Contact-leftSection small-12 medium-6 columns' },
                _react2['default'].createElement(
                  'div',
                  { className: 'medium-9 large-6 columns' },
                  _react2['default'].createElement(
                    'h2',
                    null,
                    'Contact Me'
                  ),
                  _react2['default'].createElement(
                    'a',
                    { className: 'text-link text-link-icon', target: '_blank', href: 'mailto:paulgraffix@gmail.com' },
                    _react2['default'].createElement(
                      'span',
                      {
                        className: 'icon-social' },
                      _react2['default'].createElement('img', { src: __webpack_require__(50) })
                    ),
                    'paulgraffix@gmail.com'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'Contact-leftSectionImg medium-3 large-6 columns' },
                  _react2['default'].createElement('img', { className: 'small-5 medium-12 large-4', src: 'https://res.cloudinary.com/dp1pal3mi/image/upload/v1442042607/me_kod5c8.png' })
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Contact-rightSection small-12 medium-6 columns' },
                _react2['default'].createElement(
                  'h2',
                  null,
                  'Connect'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: 'https://github.com/paulmg/', target: '_blank', className: 'text-link text-link-icon' },
                  _react2['default'].createElement(
                    'span',
                    {
                      className: 'icon-social' },
                    _react2['default'].createElement('img', { src: __webpack_require__(52) })
                  ),
                  'Github'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: 'http://stackoverflow.com/users/803841/paul-graffam', target: '_blank',
                    className: 'text-link text-link-icon' },
                  _react2['default'].createElement(
                    'span',
                    { className: 'icon-social' },
                    _react2['default'].createElement('img', { src: __webpack_require__(54) })
                  ),
                  'StackOverflow'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: 'http://www.linkedin.com/pub/paul-graffam/38/983/16a', target: '_blank',
                    className: 'text-link text-link-icon' },
                  _react2['default'].createElement(
                    'span',
                    { className: 'icon-social' },
                    _react2['default'].createElement('img', { src: __webpack_require__(53) })
                  ),
                  'LinkedIn'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: 'https://secure.flickr.com/photos/paulmgr/', target: '_blank', className: 'text-link text-link-icon' },
                  _react2['default'].createElement(
                    'span',
                    {
                      className: 'icon-social' },
                    _react2['default'].createElement('img', { src: __webpack_require__(51) })
                  ),
                  'Flickr'
                )
              )
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {},
      enumerable: true
    }]);

    var _Contact = Contact;
    Contact = (0, _decoratorsWithStyles2['default'])(_ContactCss2['default'])(Contact) || Contact;
    return Contact;
  })(_react2['default'].Component);

  exports['default'] = Contact;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _utilsAnimations = __webpack_require__(9);

  var _utilsAnimations2 = _interopRequireDefault(_utilsAnimations);

  var _ContentPageCss = __webpack_require__(38);

  var _ContentPageCss2 = _interopRequireDefault(_ContentPageCss);

  var ContentPage = (function (_React$Component) {
    _inherits(ContentPage, _React$Component);

    function ContentPage() {
      _classCallCheck(this, _ContentPage);

      _get(Object.getPrototypeOf(_ContentPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ContentPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var itemContent = this.refs.contentPageContainer;

        //let tl = new TimelineLite({paused: true});
        //
        //tl.add(animations.slideContentDown(itemContent, 0), 0);
        //tl.add(animations.slideContentUp(itemContent, 0.8), 0.8);
        //
        //tl.play();
      }
    }, {
      key: 'render',
      value: function render() {
        this.context.onSetTitle(this.props.title);
        return _react2['default'].createElement(
          'section',
          { className: 'ContentPage' },
          _react2['default'].createElement(
            'div',
            { className: 'ContentPage-container', ref: 'contentPageContainer' },
            this.props.path === '/' ? null : _react2['default'].createElement(
              'h1',
              null,
              this.props.title
            ),
            _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content || '' } })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        path: _react.PropTypes.string.isRequired,
        content: _react.PropTypes.string.isRequired,
        title: _react.PropTypes.string
      },
      enumerable: true
    }, {
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    var _ContentPage = ContentPage;
    ContentPage = (0, _decoratorsWithStyles2['default'])(_ContentPageCss2['default'])(ContentPage) || ContentPage;
    return ContentPage;
  })(_react2['default'].Component);

  exports['default'] = ContentPage;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _ErrorPageCss = __webpack_require__(39);

  var _ErrorPageCss2 = _interopRequireDefault(_ErrorPageCss);

  var ErrorPage = (function (_React$Component) {
    _inherits(ErrorPage, _React$Component);

    function ErrorPage() {
      _classCallCheck(this, _ErrorPage);

      _get(Object.getPrototypeOf(_ErrorPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ErrorPage, [{
      key: 'render',
      value: function render() {
        var title = 'Error';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Sorry, a critical error occurred on this page.'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    var _ErrorPage = ErrorPage;
    ErrorPage = (0, _decoratorsWithStyles2['default'])(_ErrorPageCss2['default'])(ErrorPage) || ErrorPage;
    return ErrorPage;
  })(_react2['default'].Component);

  exports['default'] = ErrorPage;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _decoratorsWithViewport = __webpack_require__(32);

  var _decoratorsWithViewport2 = _interopRequireDefault(_decoratorsWithViewport);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _config = __webpack_require__(5);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _FooterCss = __webpack_require__(40);

  var _FooterCss2 = _interopRequireDefault(_FooterCss);

  var Footer = (function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
      _classCallCheck(this, _Footer);

      _get(Object.getPrototypeOf(_Footer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Footer, [{
      key: 'handleClick',
      value: function handleClick(event) {
        TweenLite.to(window, _config.ANIM_TIME, {
          scrollTo: {
            y: 0
          },
          ease: Power2.easeOut
        });
      }
    }, {
      key: 'render',
      value: function render() {
        // This is just an example how one can render CSS
        var _props$viewport = this.props.viewport;
        var width = _props$viewport.width;
        var height = _props$viewport.height;

        this.renderCss('.Footer-viewport:after {content:\'' + width + 'x' + height + '\';}');

        return _react2['default'].createElement(
          'footer',
          { className: 'Footer' },
          _react2['default'].createElement(
            'div',
            { className: 'Footer-container row' },
            _react2['default'].createElement(
              'div',
              { className: 'columns' },
              _react2['default'].createElement(
                'div',
                { className: 'small-8 columns' },
                _react2['default'].createElement(
                  'span',
                  { className: 'Footer-text' },
                  '© 2015 paulGraffix'
                ),
                _react2['default'].createElement(
                  'span',
                  { className: 'Footer-spacer' },
                  '· '
                ),
                _react2['default'].createElement('span', { ref: 'viewport', className: 'Footer-viewport' }),
                'px'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'small-4 columns text-right' },
                _react2['default'].createElement(
                  'a',
                  { className: 'Footer-link text-link text-link-icon', 'data-target': 'info', onClick: this.handleClick.bind(this) },
                  'Back to Top',
                  _react2['default'].createElement(
                    'span',
                    { className: 'icon-arrow arrow-up' },
                    _react2['default'].createElement('img', { src: __webpack_require__(55) })
                  )
                )
              )
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        viewport: _react.PropTypes.shape({
          width: _react.PropTypes.number.isRequired,
          height: _react.PropTypes.number.isRequired
        }).isRequired
      },
      enumerable: true
    }]);

    var _Footer = Footer;
    Footer = (0, _decoratorsWithStyles2['default'])(_FooterCss2['default'])(Footer) || Footer;
    Footer = (0, _decoratorsWithViewport2['default'])(Footer) || Footer;
    return Footer;
  })(_react2['default'].Component);

  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _Navigation = __webpack_require__(23);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _HeaderCss = __webpack_require__(41);

  var _HeaderCss2 = _interopRequireDefault(_HeaderCss);

  var body = undefined,
      html = undefined;

  var Header = (function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
      _classCallCheck(this, _Header);

      _get(Object.getPrototypeOf(_Header.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Header, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.didScroll = false;
        this.headerInterval = null;
        this.lastScrollTop = 0;
        this.height = 0;
      }

      // Hide Header on on scroll down
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;

        body = document.body;
        html = document.documentElement;
        this.header = this.refs.header;
        this.navbarHeight = this.header.offsetHeight;

        window.onscroll = function () {
          _this.didScroll = true;
        };

        this.headerInterval = setInterval(function () {
          if (_this.didScroll) {
            _this.hasScrolled();
            _this.didScroll = false;
          }
        }, 250);

        setTimeout(function () {
          _this.header.classList.remove('Header--up');
        }, 500);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearInterval(this.headerInterval);
      }
    }, {
      key: 'hasScrolled',
      value: function hasScrolled() {
        this.height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var scrollTop = window.scrollY || window.pageYOffset;

        if (Math.abs(this.lastScrollTop - scrollTop) > 80) {

          if (scrollTop > this.lastScrollTop && scrollTop > this.navbarHeight) {
            // Scroll Down
            this.header.classList.add('Header--up');
          } else {
            // Scroll Up
            if (scrollTop + window.innerHeight < this.height) {
              this.header.classList.remove('Header--up');
            }
          }
        }

        if (scrollTop > 1200) {
          document.getElementById('container').classList.add('container--below');
        } else {
          document.getElementById('container').classList.remove('container--below');
        }

        this.lastScrollTop = scrollTop;
        /*console.log('ls: ' + lastScrollTop)
         console.log('st: ' + (scrollTop + window.innerHeight))
         console.log('he: ' + this.height)*/
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'header',
          { id: 'header', className: 'Header Header--up', 'data-scroll-header': true, ref: 'header' },
          _react2['default'].createElement(
            'div',
            { className: 'Header-container row' },
            _react2['default'].createElement(
              'div',
              { className: 'columns' },
              _react2['default'].createElement(
                'div',
                { className: 'Header-brand small-8 medium-5 columns' },
                _react2['default'].createElement(
                  'a',
                  { className: '', href: '/', onClick: _Link2['default'].handleClick },
                  _react2['default'].createElement('img', { className: 'Header-brandImg', src: __webpack_require__(56), width: '205', height: '27',
                    alt: 'PaulGraffix' })
                )
              ),
              _react2['default'].createElement(_Navigation2['default'], { className: 'Header-nav text-right small-4 medium-7 columns' })
            )
          )
        );
      }
    }]);

    var _Header = Header;
    Header = (0, _decoratorsWithStyles2['default'])(_HeaderCss2['default'])(Header) || Header;
    return Header;
  })(_react2['default'].Component);

  exports['default'] = Header;
  module.exports = exports['default'];
  /*<span className="Header-brandTxt">PaulGraffix</span>*/

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _config = __webpack_require__(5);

  var Html = (function (_Component) {
    _inherits(Html, _Component);

    function Html() {
      _classCallCheck(this, Html);

      _get(Object.getPrototypeOf(Html.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Html, [{
      key: 'trackingCode',
      value: function trackingCode() {
        return { __html: '(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=' + 'function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;' + 'e=o.createElement(i);r=o.getElementsByTagName(i)[0];' + 'e.src=\'https://www.google-analytics.com/analytics.js\';' + 'r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));' + ('ga(\'create\',\'' + _config.GA_ID + '\',\'auto\');ga(\'send\',\'pageview\');')
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var comments = '\n    <!--\n    8888888b.                   888       .d8888b.                   .d888  .d888 d8b\n    888   Y88b                  888      d88P  Y88b                 d88P"  d88P"  Y8P\n    888    888                  888      888    888                 888    888\n    888   d88P 8888b.  888  888 888      888        888d888 8888b.  888888 888888 888 888  888\n    8888888P"     "88b 888  888 888      888  88888 888P"      "88b 888    888    888  Y8bd8P\n    888       .d888888 888  888 888      888    888 888    .d888888 888    888    888   X88K\n    888       888  888 Y88b 888 888      Y88b  d88P 888    888  888 888    888    888  d8""8b\n    888       "Y888888  "Y88888 888       "Y8888P88 888    "Y888888 888    888    888 888  888\n    -->\n    ';

        return _react2['default'].createElement(
          'html',
          { className: 'no-js', lang: 'en' },
          _react2['default'].createElement(
            'head',
            null,
            _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: comments } }),
            _react2['default'].createElement('meta', { charSet: 'utf-8' }),
            _react2['default'].createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
            _react2['default'].createElement(
              'title',
              null,
              this.props.title
            ),
            _react2['default'].createElement('meta', { name: 'description', content: this.props.description }),
            _react2['default'].createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            _react2['default'].createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
            _react2['default'].createElement('link', { href: 'https://fonts.googleapis.com/css?family=Oxygen:300,400,700', rel: 'stylesheet', type: 'text/css' }),
            _react2['default'].createElement('link', { href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,700', rel: 'stylesheet', type: 'text/css' }),
            _react2['default'].createElement('link', { href: 'css/foundation.min.css', rel: 'stylesheet', type: 'text/css' }),
            _react2['default'].createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: this.props.css } }),
            _react2['default'].createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js' })
          ),
          _react2['default'].createElement(
            'body',
            null,
            _react2['default'].createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: this.props.body } }),
            _react2['default'].createElement('div', { id: 'container' }),
            _react2['default'].createElement('script', { src: '/app.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/ScrollToPlugin.min.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r76/three.min.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'http://threejs.org/examples/js/postprocessing/EffectComposer.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'http://threejs.org/examples/js/shaders/CopyShader.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'http://threejs.org/examples/js/shaders/ConvolutionShader.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'http://threejs.org/examples/js/shaders/FXAAShader.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'http://threejs.org/examples/js/postprocessing/ShaderPass.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'http://threejs.org/examples/js/postprocessing/MaskPass.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'http://threejs.org/examples/js/postprocessing/RenderPass.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'http://threejs.org/examples/js/postprocessing/BloomPass.js' }),
            _react2['default'].createElement('script', { defer: true, src: 'js/lightWaves.js' }),
            _react2['default'].createElement('script', { dangerouslySetInnerHTML: this.trackingCode() })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        title: _react.PropTypes.string,
        description: _react.PropTypes.string,
        css: _react.PropTypes.string,
        body: _react.PropTypes.string.isRequired
      },
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        title: '',
        description: ''
      },
      enumerable: true
    }]);

    return Html;
  })(_react.Component);

  exports['default'] = Html;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _classnames = __webpack_require__(6);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _config = __webpack_require__(5);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _NavigationCss = __webpack_require__(42);

  var _NavigationCss2 = _interopRequireDefault(_NavigationCss);

  var Navigation = (function (_React$Component) {
    _inherits(Navigation, _React$Component);

    function Navigation() {
      _classCallCheck(this, _Navigation);

      _get(Object.getPrototypeOf(_Navigation.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Navigation, [{
      key: 'toggleMobileMenu',
      value: function toggleMobileMenu() {
        this.refs.navigationMobileIcon.classList.toggle('Navigation-mobileIcon--clicked');

        var dropDownMenu = this.refs.dropDownMenu;
        dropDownMenu.classList.toggle('Navigation-mobile-list--reveal');
      }
    }, {
      key: 'handleClick',
      value: function handleClick(event) {
        this.toggleMobileMenu();

        TweenLite.to(window, _config.ANIM_TIME, {
          scrollTo: {
            y: Math.abs(document.body.getBoundingClientRect().top - document.querySelector('#' + event.target.getAttribute('data-target')).getBoundingClientRect().top),
            onComplete: function onComplete() {
              document.querySelector('header').classList.remove('Header--down');
            }
          },
          ease: Power2.easeOut
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'nav',
          { className: (0, _classnames2['default'])(this.props.className, 'Navigation'), role: 'navigation' },
          _react2['default'].createElement(
            'div',
            { className: 'Navigation-mobile hide-for-medium-up text-right' },
            _react2['default'].createElement('a', { className: 'Navigation-mobileIcon', onClick: this.toggleMobileMenu.bind(this), ref: 'navigationMobileIcon' }),
            _react2['default'].createElement(
              'div',
              { className: 'Navigation-mobile-list', ref: 'dropDownMenu' },
              _react2['default'].createElement(
                'a',
                { className: 'Navigation-link text-link', 'data-target': 'skills', onClick: this.handleClick.bind(this) },
                'Skills'
              ),
              _react2['default'].createElement(
                'a',
                { className: 'Navigation-link text-link', 'data-target': 'portfolio', onClick: this.handleClick.bind(this) },
                'Portfolio'
              ),
              _react2['default'].createElement(
                'a',
                { className: 'Navigation-link text-link', 'data-target': 'contact', onClick: this.handleClick.bind(this) },
                'Contact'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Navigation-desktop hide-for-small' },
            _react2['default'].createElement(
              'a',
              { className: 'Navigation-link text-link', 'data-target': 'skills', onClick: this.handleClick.bind(this) },
              'Skills'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'Navigation-link text-link', 'data-target': 'portfolio', onClick: this.handleClick.bind(this) },
              'Portfolio'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'Navigation-link text-link', 'data-target': 'contact', onClick: this.handleClick.bind(this) },
              'Contact'
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        className: _react.PropTypes.string
      },
      enumerable: true
    }]);

    var _Navigation = Navigation;
    Navigation = (0, _decoratorsWithStyles2['default'])(_NavigationCss2['default'])(Navigation) || Navigation;
    return Navigation;
  })(_react2['default'].Component);

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _NotFoundPageCss = __webpack_require__(43);

  var _NotFoundPageCss2 = _interopRequireDefault(_NotFoundPageCss);

  var NotFoundPage = (function (_React$Component) {
    _inherits(NotFoundPage, _React$Component);

    function NotFoundPage() {
      _classCallCheck(this, _NotFoundPage);

      _get(Object.getPrototypeOf(_NotFoundPage.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(NotFoundPage, [{
      key: 'render',
      value: function render() {
        var title = 'Page Not Found';
        this.context.onSetTitle(title);
        this.context.onPageNotFound();
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Sorry, but the page you were trying to view does not exist.'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);

    var _NotFoundPage = NotFoundPage;
    NotFoundPage = (0, _decoratorsWithStyles2['default'])(_NotFoundPageCss2['default'])(NotFoundPage) || NotFoundPage;
    return NotFoundPage;
  })(_react2['default'].Component);

  exports['default'] = NotFoundPage;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reBase = __webpack_require__(70);

  var _reBase2 = _interopRequireDefault(_reBase);

  var _classnames = __webpack_require__(6);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _reactLoader = __webpack_require__(74);

  var _reactLoader2 = _interopRequireDefault(_reactLoader);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _utilsAnimations = __webpack_require__(9);

  var _utilsAnimations2 = _interopRequireDefault(_utilsAnimations);

  var _configJs = __webpack_require__(5);

  var _ProjectInfo = __webpack_require__(8);

  var _ProjectInfo2 = _interopRequireDefault(_ProjectInfo);

  var _ProjectWrapper = __webpack_require__(28);

  var _ProjectWrapper2 = _interopRequireDefault(_ProjectWrapper);

  var _PortfolioCss = __webpack_require__(44);

  var _PortfolioCss2 = _interopRequireDefault(_PortfolioCss);

  var body = undefined;

  var base = _reBase2['default'].createClass(_configJs.DB);

  var Portfolio = (function (_React$Component) {
    _inherits(Portfolio, _React$Component);

    function Portfolio(props) {
      _classCallCheck(this, _Portfolio);

      _get(Object.getPrototypeOf(_Portfolio.prototype), 'constructor', this).call(this, props);

      this.state = {
        data: [],
        activeProjectID: '',
        wrapperClass: 'closed'
      };
    }

    _createClass(Portfolio, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.init();

        this.el = this.refs.projects;
        this.isOpen = false;
        this.loaded = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        base.removeBinding(this.ref);
        this.init();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        //console.log('update');

        if (!this.loaded) {
          this.items = this.el.children;

          this.imageClips = [];
          this.itemContainers = [];
          this.itemContentContainers = [];

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;

              this.imageClips.push(item.querySelector('#clip'));
              this.itemContainers.push(item.querySelector('.ProjectWrapper-container'));
              this.itemContentContainers.push(item.querySelector('.ProjectInfo'));
            }

            //console.log(this.imageClips, this.itemContainers, this.itemContentContainers)
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.loaded = true;
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        base.removeBinding(this.ref);
        this.loaded = false;
      }
    }, {
      key: 'init',
      value: function init() {
        body = document.body;

        this.ref = base.bindToState('portfolio', {
          context: this,
          asArray: true,
          state: 'data'
        });
      }
    }, {
      key: 'handleOpen',
      value: function handleOpen(i) {
        var hideTl = new TimelineLite({ paused: true });
        var tweenOtherProjects = this.showHideOtherProjects(i);

        hideTl.add(tweenOtherProjects);
        hideTl.play();

        var openTl = new TimelineLite({ paused: true });
        var openProjectAnim = this.openProjectTimeline(i);

        openTl.add(openProjectAnim);
        openTl.play();

        this.setState({
          activeProjectID: i
        });

        document.querySelector('.Header').classList.add('Header--up');
        body.classList.add('body--hidden');
        this.itemContainers[i].classList.remove('ProjectWrapper-container--hoverable');

        this.isOpen = true;
      }
    }, {
      key: 'handleClose',
      value: function handleClose(i) {
        var _this = this;

        var itemContainer = this.itemContainers[i];
        var itemContent = this.itemContentContainers[i];

        TweenLite.to(itemContainer, _configJs.ANIM_TIME, {
          scrollTo: {
            y: 0
          },
          onComplete: function onComplete() {
            itemContainer.style.overflow = 'hidden';
          },
          ease: Power2.easeOut
        });

        var closeTl = new TimelineLite({ paused: true });
        var openProjectAnim = this.closeProjectTimeline(i);

        closeTl.add(openProjectAnim);

        closeTl.eventCallback('onReverseComplete', function () {
          TweenLite.set([itemContainer, itemContent], {
            clearProps: 'all'
          });

          TweenLite.to(window, _configJs.ANIM_TIME, {
            scrollTo: {
              y: Math.abs(document.body.getBoundingClientRect().top - _this.items[i].getBoundingClientRect().top)
            },
            ease: Power2.easeOut
          });

          var tl = new TimelineLite({ paused: true });
          var tweenOtherProjects = _this.showHideOtherProjects(i);

          tl.add(tweenOtherProjects);
          tl.play();

          document.body.classList.remove('body--hidden');
          _this.itemContainers[i].classList.add('ProjectWrapper-container--hoverable');

          _this.isOpen = false;

          _this.setState({
            activeProjectID: ''
          });
        });

        closeTl.reverse(0);
      }
    }, {
      key: 'handleNext',
      value: function handleNext(i) {
        var projectLength = this.state.data.length;

        var nextProjectID = (i + 1) % projectLength;

        this.setNextProject(i, nextProjectID);
      }
    }, {
      key: 'handlePrev',
      value: function handlePrev(i) {
        var projectLength = this.state.data.length;

        var nextProjectID = (i + projectLength - 1) % projectLength;

        this.setNextProject(i, nextProjectID);
      }
    }, {
      key: 'showHideOtherProjects',
      value: function showHideOtherProjects(id) {
        var tl = new TimelineLite();
        var i = 0;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (id != i && !this.isOpen) {
              tl.add(_utilsAnimations2['default'].hideAnim(item, _configJs.ANIM_TIME), 0);
            }

            if (id != i && this.isOpen) {
              tl.add(_utilsAnimations2['default'].showAnim(item), 0);
            }

            i++;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return tl;
      }
    }, {
      key: 'openProjectTimeline',
      value: function openProjectTimeline(i) {
        var itemContainer = this.itemContainers[i];
        var itemContent = this.itemContentContainers[i];
        var imageClip = this.imageClips[i];

        var tl = new TimelineLite();

        tl.add(_utilsAnimations2['default'].slideContentDown(itemContent, 0.01), 0);
        tl.add(_utilsAnimations2['default'].clipImageIn(imageClip, _configJs.ANIM_TIME, 50), 0);
        tl.add(_utilsAnimations2['default'].floatContainer(itemContainer), '-=' + _configJs.ANIM_TIME * 0.6);
        tl.add(_utilsAnimations2['default'].clipImageOut(imageClip, _configJs.ANIM_TIME), '-=' + _configJs.ANIM_TIME * 0.3);
        tl.add(_utilsAnimations2['default'].slideContentUp(itemContent, _configJs.ANIM_TIME), '-=' + _configJs.ANIM_TIME * 0.6);

        return tl;
      }
    }, {
      key: 'closeProjectTimeline',
      value: function closeProjectTimeline(i) {
        var itemContainer = this.itemContainers[i];
        var itemContent = this.itemContentContainers[i];
        var imageClip = this.imageClips[i];

        var tl = new TimelineLite();

        tl.add(_utilsAnimations2['default'].slideContentDown(itemContent, 0.01), 0);
        tl.add(_utilsAnimations2['default'].clipImageIn(imageClip, _configJs.ANIM_TIME, 50), 0);
        tl.add(_utilsAnimations2['default'].floatCloseContainer(itemContainer), '-=' + _configJs.ANIM_TIME * 0.6);
        tl.add(_utilsAnimations2['default'].clipImageOut(imageClip, _configJs.ANIM_TIME), '-=' + _configJs.ANIM_TIME * 0.3);
        tl.add(_utilsAnimations2['default'].slideContentUp(itemContent, _configJs.ANIM_TIME), '-=' + _configJs.ANIM_TIME * 0.6);

        return tl;
      }
    }, {
      key: 'setNextProject',
      value: function setNextProject(i, nextProjectID) {
        var _this2 = this;

        var animTime = 0;

        animTime = this.itemContainers[i].scrollTop > 0 ? 0.8 : 0;

        TweenLite.to(this.itemContainers[i], animTime, {
          scrollTo: {
            y: 0
          },
          onComplete: function onComplete() {
            var itemContainer = _this2.itemContainers[i];
            var itemContent = _this2.itemContentContainers[i];
            var imageClip = _this2.imageClips[i];

            var tl = new TimelineLite({
              paused: true,
              onComplete: _this2.setNewContent.bind(_this2),
              onCompleteParams: [nextProjectID, itemContainer, itemContent]
            });

            tl.add(_utilsAnimations2['default'].slideContentDown(itemContent, _configJs.ANIM_TIME), 0);
            tl.add(_utilsAnimations2['default'].clipImageIn(imageClip, _configJs.ANIM_TIME, 0), 0);
            tl.add(_utilsAnimations2['default'].hideAnim(_this2.items[i], 0.01));
            tl.add(_utilsAnimations2['default'].clipImageOut(imageClip, 0.01));

            tl.play();
          },
          ease: Power2.easeOut
        });
      }
    }, {
      key: 'setNewContent',
      value: function setNewContent(i, oldItemContainer, oldItemContentContainer) {
        this.setState({
          activeProjectID: i
        });

        oldItemContainer.classList.add('ProjectWrapper-container--closed', 'ProjectWrapper-container--hoverable');
        oldItemContentContainer.classList.add('hide');

        var itemContainer = this.itemContainers[i];
        var itemContent = this.itemContentContainers[i];
        var imageClip = this.imageClips[i];

        itemContainer.classList.remove('ProjectWrapper-container--hoverable');

        var tl = new TimelineLite({ paused: true });

        // switch to new one
        tl.add(_utilsAnimations2['default'].resetWrapper(itemContainer), 0);
        tl.add(_utilsAnimations2['default'].slideContentDown(itemContent, 0), 0);
        tl.add(_utilsAnimations2['default'].clipImageIn(imageClip, 0, 0), 0);
        tl.add(_utilsAnimations2['default'].floatNextContainer(itemContainer), 0);
        tl.add(_utilsAnimations2['default'].clipImageOut(imageClip, _configJs.ANIM_TIME * 2), '-=' + _configJs.ANIM_TIME * 0.3);
        tl.add(_utilsAnimations2['default'].slideContentUp(itemContent, _configJs.ANIM_TIME), '-=' + _configJs.ANIM_TIME * 1.5);

        tl.play();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var projects = this.state.data.map(function (project, index) {
          return _react2['default'].createElement(_ProjectWrapper2['default'], { key: index, onClick: _this3.handleOpen.bind(_this3, index),
            closeClick: _this3.handleClose.bind(_this3, index),
            nextClick: _this3.handleNext.bind(_this3, index), prevClick: _this3.handlePrev.bind(_this3, index),
            id: index, active: index === _this3.state.activeProjectID ? 'active' : null,
            project: project, ref: 'projectWrapper', isOpen: _this3.isOpen });
        });

        return _react2['default'].createElement(
          'section',
          { id: 'portfolio', className: (0, _classnames2['default'])('Portfolio', this.state.wrapperClass), ref: 'portfolio' },
          _react2['default'].createElement(
            'div',
            { className: 'Portfolio-container' },
            _react2['default'].createElement(
              'div',
              { className: 'row' },
              _react2['default'].createElement(
                'div',
                { className: 'small-12 columns' },
                _react2['default'].createElement(
                  'h2',
                  { className: 'Portfolio-title section-title columns' },
                  'Portfolio'
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: '' },
              _react2['default'].createElement(
                'ul',
                { className: 'Portfolio-grid small-block-grid-1 medium-block-grid-2 large-block-grid-3 xlarge-block-grid-4', ref: 'projects' },
                projects
              )
            )
          )
        );
      }
    }]);

    var _Portfolio = Portfolio;
    Portfolio = (0, _decoratorsWithStyles2['default'])(_PortfolioCss2['default'])(Portfolio) || Portfolio;
    return Portfolio;
  })(_react2['default'].Component);

  exports['default'] = Portfolio;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _classnames = __webpack_require__(6);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _ProjectCaptionCss = __webpack_require__(45);

  var _ProjectCaptionCss2 = _interopRequireDefault(_ProjectCaptionCss);

  var ProjectImage = (function (_React$Component) {
    _inherits(ProjectImage, _React$Component);

    _createClass(ProjectImage, null, [{
      key: 'propTypes',
      value: {
        src: _react2['default'].PropTypes.string,
        alt: _react2['default'].PropTypes.string,
        project: _react2['default'].PropTypes.object.isRequired
      },
      enumerable: true
    }]);

    function ProjectImage(props) {
      _classCallCheck(this, _ProjectImage);

      _get(Object.getPrototypeOf(_ProjectImage.prototype), 'constructor', this).call(this, props);

      this.state = {
        loaded: false
      };
    }

    _createClass(ProjectImage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;

        var img = document.createElement('img');

        img.src = this.props.src;

        img.onload = function () {
          _this.setState({ loaded: true });
        };
      }
    }, {
      key: 'handleClick',
      value: function handleClick() {
        this.props.onClick(this);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'figure',
          { onClick: this.handleClick.bind(this), className: 'ProjectImage-wrapper' },
          _react2['default'].createElement('img', { className: (0, _classnames2['default'])(this.state.loaded ? 'loaded' : 'loading', 'hide'), src: this.props.src, alt: this.props.alt }),
          _react2['default'].createElement(
            'figcaption',
            null,
            _react2['default'].createElement(
              'h2',
              null,
              this.props.project.name
            ),
            _react2['default'].createElement(
              'p',
              { className: 'description' },
              this.props.project.description
            )
          )
        );
      }
    }]);

    var _ProjectImage = ProjectImage;
    ProjectImage = (0, _decoratorsWithStyles2['default'])(_ProjectCaptionCss2['default'])(ProjectImage) || ProjectImage;
    return ProjectImage;
  })(_react2['default'].Component);

  exports['default'] = ProjectImage;
  module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactLazyLoad = __webpack_require__(73);

  var _reactLazyLoad2 = _interopRequireDefault(_reactLazyLoad);

  var ProjectContent = (function (_React$Component) {
    _inherits(ProjectContent, _React$Component);

    _createClass(ProjectContent, null, [{
      key: 'propTypes',
      value: {
        section: _react2['default'].PropTypes.object.isRequired
      },
      enumerable: true
    }]);

    function ProjectContent(props) {
      _classCallCheck(this, ProjectContent);

      _get(Object.getPrototypeOf(ProjectContent.prototype), 'constructor', this).call(this, props);

      this.state = {
        loaded: false
      };
    }

    _createClass(ProjectContent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;

        var img = document.createElement('img');

        img.src = this.props.section.images[0];

        img.onload = function () {
          _this.setState({ loaded: true });
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var imageArr = this.props.section.images.map(function (image, index) {
          if (index == 0) return _react2['default'].createElement(
            _reactLazyLoad2['default'],
            { height: 300, key: index },
            _react2['default'].createElement('img', { src: image })
          );else return _react2['default'].createElement(
            _reactLazyLoad2['default'],
            { threshold: 10, key: index },
            _react2['default'].createElement('img', { src: image })
          );
        });
        var text = this.props.section.text;

        return _react2['default'].createElement(
          'div',
          { className: 'ProjectContent' },
          _react2['default'].createElement(
            'div',
            { className: 'ProjectContent-section' },
            _react2['default'].createElement(
              'div',
              { className: 'ProjectContent-text' },
              _react2['default'].createElement(
                'p',
                null,
                text
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'ProjectContent-images' },
              imageArr
            )
          )
        );
      }
    }]);

    return ProjectContent;
  })(_react2['default'].Component);

  exports['default'] = ProjectContent;
  module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(71);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _classnames = __webpack_require__(6);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _decoratorsWithStyles = __webpack_require__(2);

  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _ProjectWrapperCss = __webpack_require__(47);

  var _ProjectWrapperCss2 = _interopRequireDefault(_ProjectWrapperCss);

  var _ProjectCaption = __webpack_require__(26);

  var _ProjectCaption2 = _interopRequireDefault(_ProjectCaption);

  var _ProjectInfo = __webpack_require__(8);

  var _ProjectInfo2 = _interopRequireDefault(_ProjectInfo);

  var ANIM_TIME = 0.2;
  var LEFT_X = 200;
  var RIGHT_X = -200;
  var RIGHT_Y = 180;

  var ProjectWrapper = (function (_React$Component) {
    _inherits(ProjectWrapper, _React$Component);

    function ProjectWrapper() {
      _classCallCheck(this, _ProjectWrapper);

      _get(Object.getPrototypeOf(_ProjectWrapper.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ProjectWrapper, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.headerInterval = null;
        this.didScroll = false;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;

        this.wrapper = this.refs.projectWrapperContainer;
        this.nextBtn = this.refs.nextBtn;
        this.prevBtn = this.refs.prevBtn;
        this.closeBtn = this.refs.closeBtn;
        this.upBtn = this.refs.upBtn;

        this.disableButtons();

        this.wrapper.onscroll = function () {
          _this.didScroll = true;
        };

        this.headerInterval = setInterval(function () {
          if (_this.didScroll) {
            _this.hasScrolled();
            _this.didScroll = false;
          }
        }, 250);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var _this2 = this;

        this.isLoaded = false;

        if (this.props.active) {
          setTimeout(function () {
            TweenLite.to(_this2.prevBtn, ANIM_TIME, { x: LEFT_X, ease: Power2.easeOut,

              onComplete: function onComplete() {
                TweenLite.to(_this2.nextBtn, ANIM_TIME, { x: RIGHT_X, ease: Power2.easeOut,

                  onComplete: function onComplete() {
                    TweenLite.to(_this2.closeBtn, ANIM_TIME, { y: RIGHT_Y, ease: Power2.easeOut,

                      onComplete: function onComplete() {
                        _this2.isLoaded = true;
                        _this2.enableButtons();
                      }
                    });
                  }
                });
              }
            });
          }, 1000);
        }
      }
    }, {
      key: 'handleClick',
      value: function handleClick() {
        this.props.onClick(this);
      }
    }, {
      key: 'handleClose',
      value: function handleClose() {
        var _this3 = this;

        this.disableButtons();

        TweenLite.to(this.nextBtn, ANIM_TIME, { x: 0, ease: Power2.easeOut,

          onComplete: function onComplete() {
            TweenLite.to(_this3.prevBtn, ANIM_TIME, { x: 0, ease: Power2.easeOut,

              onComplete: function onComplete() {
                TweenLite.to(_this3.closeBtn, ANIM_TIME, { y: 0, ease: Power2.easeOut,

                  onComplete: function onComplete() {
                    _this3.props.closeClick(_this3);
                  }
                });
              }
            });
          }
        });
      }
    }, {
      key: 'handleNext',
      value: function handleNext() {
        var _this4 = this;

        this.disableButtons();

        this.props.nextClick(this);

        TweenLite.to(this.nextBtn, ANIM_TIME, { x: 0, ease: Power2.easeOut,

          onComplete: function onComplete() {
            TweenLite.to(_this4.prevBtn, ANIM_TIME, {
              x: 0, ease: Power2.easeOut,

              onComplete: function onComplete() {
                TweenLite.to(_this4.closeBtn, ANIM_TIME, { y: 0, ease: Power2.easeOut });
              }
            });
          }
        });
      }
    }, {
      key: 'handlePrev',
      value: function handlePrev() {
        var _this5 = this;

        this.disableButtons();

        this.props.prevClick(this);

        TweenLite.to(this.prevBtn, ANIM_TIME, { x: 0, ease: Power2.easeOut,

          onComplete: function onComplete() {
            TweenLite.to(_this5.nextBtn, ANIM_TIME, { x: 0, ease: Power2.easeOut,

              onComplete: function onComplete() {
                TweenLite.to(_this5.closeBtn, ANIM_TIME, { y: 0, ease: Power2.easeOut });
              }
            });
          }
        });
      }
    }, {
      key: 'handleUp',
      value: function handleUp() {
        this.scrollToTop(this.wrapper);
      }
    }, {
      key: 'scrollToTop',
      value: function scrollToTop(el) {
        TweenLite.to(el, 0.8, {
          scrollTo: { y: 0 },
          ease: Power2.easeOut
        });
      }
    }, {
      key: 'hasScrolled',
      value: function hasScrolled() {
        var scrollTop = this.wrapper.scrollTop;

        if (scrollTop > 100) {
          this.upBtn.classList.add('button-bottom--show');
        } else {
          this.upBtn.classList.remove('button-bottom--show');
        }

        this.lastScrollTop = scrollTop;
      }
    }, {
      key: 'enableButtons',
      value: function enableButtons() {
        this.nextBtn.style.pointerEvents = 'all';
        this.prevBtn.style.pointerEvents = 'all';
        this.closeBtn.style.pointerEvents = 'all';
        this.upBtn.style.pointerEvents = 'all';
      }
    }, {
      key: 'disableButtons',
      value: function disableButtons() {
        this.nextBtn.style.pointerEvents = 'none';
        this.prevBtn.style.pointerEvents = 'none';
        this.closeBtn.style.pointerEvents = 'none';
        this.upBtn.style.pointerEvents = 'none';
      }
    }, {
      key: 'render',
      value: function render() {
        var src = this.props.project.thumb;
        var id = this.props.id;

        function svgMarkup() {
          return {
            __html: '<svg class="ProjectWrapper-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice"><defs><clipPath id="clipPath' + id + '"><circle id="clip" class="clip" cx="600" cy="200" r="632"></circle></clipPath></defs><image clip-path="url(#clipPath' + id + ')" width="1200" height="400" xlink:href="' + src + '"}></image></svg>'
          };
        }

        return _react2['default'].createElement(
          'li',
          { className: (0, _classnames2['default'])(this.props.active, 'ProjectWrapper') },
          _react2['default'].createElement(
            'a',
            { className: 'close button-fixed button-top button-right', onClick: this.handleClose.bind(this), ref: 'closeBtn' },
            _react2['default'].createElement('img', {
              src: __webpack_require__(57) })
          ),
          _react2['default'].createElement(
            'a',
            { className: 'prev button-fixed button-side button-left', onClick: this.handlePrev.bind(this), ref: 'prevBtn' },
            _react2['default'].createElement('img', {
              src: __webpack_require__(58) })
          ),
          _react2['default'].createElement(
            'a',
            { className: 'next button-fixed button-side button-right', onClick: this.handleNext.bind(this), ref: 'nextBtn' },
            _react2['default'].createElement('img', {
              src: __webpack_require__(59) })
          ),
          _react2['default'].createElement(
            'a',
            { className: 'up button-fixed button-bottom button-right', onClick: this.handleUp.bind(this), ref: 'upBtn' },
            _react2['default'].createElement('img', { src: __webpack_require__(60) })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'ProjectWrapper-container ProjectWrapper-container--closed ProjectWrapper-container--hoverable', ref: 'projectWrapperContainer' },
            _react2['default'].createElement('div', { className: 'ProjectWrapper-svgContainer', dangerouslySetInnerHTML: svgMarkup() }),
            _react2['default'].createElement(_ProjectInfo2['default'], { project: this.props.project, isActive: this.props.active })
          ),
          _react2['default'].createElement(_ProjectCaption2['default'], { onClick: this.handleClick.bind(this), src: src, alt: this.props.project.name, project: this.props.project })
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        project: _react2['default'].PropTypes.object.isRequired,
        onClick: _react2['default'].PropTypes.func.isRequired,
        closeClick: _react2['default'].PropTypes.func.isRequired,
        nextClick: _react2['default'].PropTypes.func.isRequired,
        prevClick: _react2['default'].PropTypes.func.isRequired,
        id: _react2['default'].PropTypes.number.isRequired,
        active: _react2['default'].PropTypes.string
      },
      enumerable: true
    }]);

    var _ProjectWrapper = ProjectWrapper;
    ProjectWrapper = (0, _decoratorsWithStyles2['default'])(_ProjectWrapperCss2['default'])(ProjectWrapper) || ProjectWrapper;
    return ProjectWrapper;
  })(_react2['default'].Component);

  exports['default'] = ProjectWrapper;
  module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _superagent = __webpack_require__(75);

  var _superagent2 = _interopRequireDefault(_superagent);

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  function getUrl(path) {
    if (path.startsWith('http') || _fbjsLibExecutionEnvironment.canUseDOM) {
      return path;
    }

    return process.env.WEBSITE_HOSTNAME ? 'http://' + process.env.WEBSITE_HOSTNAME + path : 'http://127.0.0.1:' + global.server.get('port') + path;
  }

  var HttpClient = {

    get: function get(path) {
      return new Promise(function (resolve, reject) {
        _superagent2['default'].get(getUrl(path)).accept('application/json').end(function (err, res) {
          if (err) {
            if (err.status === 404) {
              resolve(null);
            } else {
              reject(err);
            }
          } else {
            resolve(res.body);
          }
        });
      });
    }

  };

  exports['default'] = HttpClient;
  module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  var _historyLibCreateBrowserHistory = __webpack_require__(67);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(68);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])({}) : {};

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  // eslint-disable-line no-unused-vars

  var _fbjsLibEmptyFunction = __webpack_require__(63);

  var _fbjsLibEmptyFunction2 = _interopRequireDefault(_fbjsLibEmptyFunction);

  function withContext(ComposedComponent) {
    return (function (_Component) {
      _inherits(WithContext, _Component);

      function WithContext() {
        _classCallCheck(this, WithContext);

        _get(Object.getPrototypeOf(WithContext.prototype), 'constructor', this).apply(this, arguments);
      }

      _createClass(WithContext, [{
        key: 'getChildContext',
        value: function getChildContext() {
          var context = this.props.context;
          return {
            onInsertCss: context.onInsertCss || _fbjsLibEmptyFunction2['default'],
            onSetTitle: context.onSetTitle || _fbjsLibEmptyFunction2['default'],
            onSetMeta: context.onSetMeta || _fbjsLibEmptyFunction2['default'],
            onPageNotFound: context.onPageNotFound || _fbjsLibEmptyFunction2['default']
          };
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props;
          var context = _props.context;

          var other = _objectWithoutProperties(_props, ['context']);

          // eslint-disable-line no-unused-vars
          return _react2['default'].createElement(ComposedComponent, other);
        }
      }], [{
        key: 'propTypes',
        value: {
          context: _react.PropTypes.shape({
            onInsertCss: _react.PropTypes.func,
            onSetTitle: _react.PropTypes.func,
            onSetMeta: _react.PropTypes.func,
            onPageNotFound: _react.PropTypes.func
          })
        },
        enumerable: true
      }, {
        key: 'childContextTypes',
        value: {
          onInsertCss: _react.PropTypes.func.isRequired,
          onSetTitle: _react.PropTypes.func.isRequired,
          onSetMeta: _react.PropTypes.func.isRequired,
          onPageNotFound: _react.PropTypes.func.isRequired
        },
        enumerable: true
      }]);

      return WithContext;
    })(_react.Component);
  }

  exports['default'] = withContext;
  module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  // eslint-disable-line no-unused-vars

  var _eventemitter3 = __webpack_require__(62);

  var _eventemitter32 = _interopRequireDefault(_eventemitter3);

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  var EE = undefined;
  var viewport = { width: 1366, height: 768 }; // Default size for server-side rendering
  var RESIZE_EVENT = 'resize';

  function handleWindowResize() {
    if (viewport.width !== window.innerWidth || viewport.height !== window.innerHeight) {
      viewport = { width: window.innerWidth, height: window.innerHeight };
      EE.emit(RESIZE_EVENT, viewport);
    }
  }

  function withViewport(ComposedComponent) {
    return (function (_Component) {
      _inherits(WithViewport, _Component);

      function WithViewport() {
        _classCallCheck(this, WithViewport);

        _get(Object.getPrototypeOf(WithViewport.prototype), 'constructor', this).call(this);

        this.state = {
          viewport: _fbjsLibExecutionEnvironment.canUseDOM ? { width: window.innerWidth, height: window.innerHeight } : viewport
        };
      }

      _createClass(WithViewport, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (!EE) {
            EE = new _eventemitter32['default']();
            window.addEventListener('resize', handleWindowResize);
            window.addEventListener('orientationchange', handleWindowResize);
          }

          EE.on(RESIZE_EVENT, this.handleResize, this);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          EE.removeListener(RESIZE_EVENT, this.handleResize, this);
          if (!EE.listeners(RESIZE_EVENT, true)) {
            window.removeEventListener('resize', handleWindowResize);
            window.removeEventListener('orientationchange', handleWindowResize);
            EE = null;
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2['default'].createElement(ComposedComponent, _extends({}, this.props, { viewport: this.state.viewport }));
        }
      }, {
        key: 'handleResize',
        value: function handleResize(value) {
          this.setState({ viewport: value }); // eslint-disable-line react/no-set-state
        }
      }]);

      return WithViewport;
    })(_react.Component);
  }

  exports['default'] = withViewport;
  module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactRoutingSrcRouter = __webpack_require__(14);

  var _reactRoutingSrcRouter2 = _interopRequireDefault(_reactRoutingSrcRouter);

  var _coreHttpClient = __webpack_require__(29);

  var _coreHttpClient2 = _interopRequireDefault(_coreHttpClient);

  var _componentsApp = __webpack_require__(16);

  var _componentsApp2 = _interopRequireDefault(_componentsApp);

  var _componentsContentPage = __webpack_require__(18);

  var _componentsContentPage2 = _interopRequireDefault(_componentsContentPage);

  var _componentsNotFoundPage = __webpack_require__(24);

  var _componentsNotFoundPage2 = _interopRequireDefault(_componentsNotFoundPage);

  var _componentsErrorPage = __webpack_require__(19);

  var _componentsErrorPage2 = _interopRequireDefault(_componentsErrorPage);

  var router = new _reactRoutingSrcRouter2['default'](function (on) {
    on('*', function callee$1$0(state, next) {
      var component;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(next());

          case 2:
            component = context$2$0.sent;
            return context$2$0.abrupt('return', component && _react2['default'].createElement(
              _componentsApp2['default'],
              { context: state.context },
              component
            ));

          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    //on('/contact', async () => <ContactPage />);

    on('*', function callee$1$0(state) {
      var content;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(_coreHttpClient2['default'].get('/api/content?path=' + state.path));

          case 2:
            content = context$2$0.sent;
            return context$2$0.abrupt('return', content && _react2['default'].createElement(_componentsContentPage2['default'], content));

          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });

    on('error', function (state, error) {
      return state.statusCode === 404 ? _react2['default'].createElement(
        _componentsApp2['default'],
        { context: state.context, error: error },
        _react2['default'].createElement(_componentsNotFoundPage2['default'], null)
      ) : _react2['default'].createElement(
        _componentsApp2['default'],
        { context: state.context, error: error },
        _react2['default'].createElement(_componentsErrorPage2['default'], null)
      );
    });
  });

  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.addEventListener = addEventListener;
  exports.removeEventListener = removeEventListener;
  exports.whichTransitionEvent = whichTransitionEvent;
  exports.whichAnimationEvent = whichAnimationEvent;

  function addEventListener(node, event, listener) {
    if (node.addEventListener) {
      node.addEventListener(event, listener, false);
    } else {
      node.attachEvent('on' + event, listener);
    }
  }

  function removeEventListener(node, event, listener) {
    if (node.removeEventListener) {
      node.removeEventListener(event, listener, false);
    } else {
      node.detachEvent('on' + event, listener);
    }
  }

  function whichTransitionEvent(el) {
    var t;
    var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  function whichAnimationEvent(el) {
    var a;
    var animations = {
      'animation': 'animationend',
      'OAnimation': 'oAnimationEnd',
      'MozAnimation': 'animationend',
      'WebkitAnimation': 'webkitAnimationEnd'
    };

    for (a in animations) {
      if (el.style[a] !== undefined) {
        return animations[a];
      }
    }
  }

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fs = __webpack_require__(66);

  var _fs2 = _interopRequireDefault(_fs);

  var exists = function exists(filename) {
    return new Promise(function (resolve) {
      _fs2['default'].exists(filename, resolve);
    });
  };

  var readFile = function readFile(filename) {
    return new Promise(function (resolve, reject) {
      _fs2['default'].readFile(filename, 'utf8', function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };

  exports['default'] = { exists: exists, readFile: readFile };
  module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n\n  /*\n   * Elements\n   * ======================================================================== */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Noto Sans', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  margin: 1em 0;\n  padding: 0;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\nfigure {\n  margin: 1em 0;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  padding: 0.2em 0;\n  background: #ccc;\n  color: #000;\n}\n\n/*\n * Personal changes\n * ========================================================================== */\n\nhtml {\n  /*overflow-x: hidden;*/\n}\n\nbody {\n  overflow-x: hidden;\n  padding-top: calc(82px - 3rem);\n  background-color: rgb(0, 0, 0);\n  font-family: 'Noto Sans', sans-serif;\n}\n\n@media only screen and (min-width: 40.0625em) {\n  body {\n\n  }\n}\n\nbody.body--hidden {\n  overflow-y: hidden;\n}\n\n.ContentPage, .Footer, .ProjectImage-wrapper, .Portfolio-title, .Contact, .divider {\n  -webkit-transition: opacity 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n          transition: opacity 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n}\n\nbody.body--hidden .ContentPage, body.body--hidden .Footer, body.body--hidden .Contact, body.body--hidden .ProjectImage-wrapper {\n  pointer-events: none;\n}\n\nbody.body--hidden .ProjectImage-wrapper, body.body--hidden .Portfolio-title, body.body--hidden .Footer, body.body--hidden .Contact, body.body--hidden .divider {\n  opacity: 0;\n}\n\nh1, h2, h3, h4, h5 {\n  font-family: 'Oxygen', sans-serif\n}\n\nsection {\n  padding: 16px 0;\n  padding: 1rem 0;\n}\n\n@media only screen and (min-width: 40.0625em) {\n  section {\n    padding: 3rem 0;\n  }\n}\n\n.divider {\n  height: 1px;\n  background-color: rgb(196, 196, 196);\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgb(0, 0, 0);\n  opacity: 0;\n\n  -webkit-transition: opacity 1s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n\n          transition: opacity 1s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n  pointer-events: none;\n}\n\n.overlay--show {\n  visibility: visible;\n  opacity: 1;\n}\n\n.overlay--hidden {\n  visibility: hidden;\n}\n\n.body--hidden .overlay {\n  visibility: visible;\n  opacity: 1;\n}\n\n.section-title {\n  margin: 0 0 16px;\n  margin: 0 0 1rem;\n  text-align: center;\n}\n\n@media only screen and (min-width: 40.0625em) {\n  .section-title {\n    margin: 0 0 2rem;\n    text-align: left;\n  }\n}\n\n.text-link,\n.text-link:active,\n.text-link:visited {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, 0.7000000000000001);\n\n  -webkit-transition: color 0.35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n\n          transition: color 0.35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n}\n\n.text-link:hover {\n  color: rgb(255, 255, 255);\n}\n\n.text-link:hover .icon-social {\n  opacity: 1;\n}\n\n.text-link--active {\n  color: rgb(255, 255, 255);\n}\n\n.text-link-icon {\n  display: inline-block;\n}\n\n.icon-social, .icon-arrow {\n  display: inline-block;\n  margin: 0 8px;\n  width: 20px;\n  vertical-align: text-bottom;\n  opacity: 0.8;\n\n  -webkit-transition: opacity 0.35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n\n          transition: opacity 0.35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n}\n\n.button-fixed {\n  position: fixed;\n  z-index: 1001;\n  visibility: hidden;\n  width: 30px;\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.4);\n\n  -webkit-transition: opacity 1.35s cubic-bezier(0.455, 0.030, 0.515, 0.955), background-color .35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n\n          transition: opacity 1.35s cubic-bezier(0.455, 0.030, 0.515, 0.955), background-color .35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n  pointer-events: none;\n}\n\n.button-fixed img {\n  -webkit-transition: -webkit-transform .25s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n          transition: transform .25s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n}\n\n.active .button-fixed {\n  /*opacity: 0;*/\n}\n\n.body--hidden .button-fixed {\n  visibility: visible;\n  pointer-events: all;\n}\n\n.button-fixed:hover {\n  background-color: rgb(196, 196, 196);\n}\n\n.button-fixed:active {\n  background-color: rgb(87, 87, 87);\n}\n\n.button-fixed:active img {\n  -webkit-transform: scale(0.8);\n      -ms-transform: scale(0.8);\n          transform: scale(0.8);\n}\n\n.button-side {\n  top: calc(60vh - 55px);\n  line-height: 1;\n  opacity: 1;\n}\n\n.button-top {\n  top: -168px;\n  top: -10.5rem;\n}\n\n.touch .button-top {\n  top: -179px;\n  top: -11.2rem;\n}\n\n.button-bottom {\n  bottom: 0;\n  -webkit-transition: bottom .35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n          transition: bottom .35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n}\n\n.button-right {\n  right: 19px;\n  right: 1.2rem;\n}\n\n.touch .button-right {\n  right: 0;\n}\n\n.button-left {\n  left: 0;\n}\n\n.touch .button-left {\n  left: 0;\n}\n\n.button-side.button-right {\n  right: -180px;\n  right: -11.3rem;\n}\n\n.touch .button-side.button-right {\n  right: -200px;\n  right: -12.5rem;\n}\n\n.button-side.button-left {\n  left: -200px;\n  left: -12.5rem;\n}\n\n@media only screen and (min-width: 40.0625em) {\n  .button-fixed:hover img {\n    -webkit-transform: scale(1.4);\n        -ms-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n\n  .button-top {\n    top: -10.5rem;\n  }\n\n  .button-bottom {\n    bottom: -2rem;\n  }\n\n  .button-bottom--show {\n    bottom: 1rem;\n  }\n\n  .button-right {\n    right: 2rem;\n  }\n\n  .button-left {\n    left: 1rem;\n  }\n\n  .button-side {\n    /* (lh = 80 w = 30) / 2 */\n    top: calc(50vh - 55px);\n    line-height: 5;\n  }\n\n  .button-side.button-right {\n    right: -10.5rem;\n  }\n\n  .button-side.button-left {\n    left: -11.5rem;\n  }\n}\n\n#container {\n  position: absolute;\n  top: 20vh;\n  z-index: -1;\n  overflow: hidden;\n}\n\n#container.container--below {\n  position: fixed;\n  top: -15vh;\n}\n\n.no-webgl #container {\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-image: url('https://res.cloudinary.com/dp1pal3mi/image/upload/v1442463714/Form_React_Wallpaper_3_-_1280x800_lcuotl.jpg');\n  background-position: bottom center;\n  background-size: cover;\n}\n\n@media only screen and (min-width: 40.0625em) {\n  #container {\n    top: 5rem;\n  }\n}\n\n/*\n * Overrides\n * ========================================================================== */\n.row {\n  max-width: 75em;\n}\n\n.column,\n.columns {\n  padding-right: 13px;\n  padding-right: 0.83333rem;\n  padding-left: 13px;\n  padding-left: 0.83333rem;\n}\n\nbutton:hover, button:focus, .button:hover, .button:focus {\n  background-color: #FFFFFF;\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #000000;\n  color: rgba(0, 0, 0, 0.85);\n}\n\nbutton, .button {\n  margin: 0;\n  border: 1px solid #FFFFFF;\n  border: 1px solid rgba(255, 255, 255, 0.85);\n  background-color: transparent;\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, 0.85);\n  text-transform: uppercase;\n  font-family: 'Noto Sans', sans-serif;\n\n  -webkit-transition: background-color 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955), color 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955);\n\n          transition: background-color 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955), color 300ms cubic-bezier(0.455, 0.030, 0.515, 0.955);\n}\n\n@media only screen and (min-width: 90.063em) {\n  .xlarge-block-grid-1 > li {\n    width: 100%;\n    list-style: none;\n  }\n\n  .xlarge-block-grid-1 > li:nth-of-type(n) {\n    clear: none;\n  }\n\n  .xlarge-block-grid-1 > li:nth-of-type(1n+1) {\n    clear: both;\n  }\n\n  .xlarge-block-grid-2 > li {\n    width: 50%;\n    list-style: none;\n  }\n\n  .xlarge-block-grid-2 > li:nth-of-type(n) {\n    clear: none;\n  }\n\n  .xlarge-block-grid-2 > li:nth-of-type(2n+1) {\n    clear: both;\n  }\n\n  .xlarge-block-grid-3 > li {\n    width: 33.33333%;\n    list-style: none;\n  }\n\n  .xlarge-block-grid-3 > li:nth-of-type(n) {\n    clear: none;\n  }\n\n  .xlarge-block-grid-3 > li:nth-of-type(3n+1) {\n    clear: both;\n  }\n\n  .xlarge-block-grid-4 > li {\n    width: 25%;\n    list-style: none;\n  }\n\n  .xlarge-block-grid-4 > li:nth-of-type(n) {\n    clear: none;\n  }\n\n  .xlarge-block-grid-4 > li:nth-of-type(4n+1) {\n    clear: both;\n  }\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    box-shadow: none !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    color: #000 !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", ""]);

  // exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n\n  /*\n   * Elements\n   * ======================================================================== */\n}\r\n\r\n.Contact {\r\n  text-align: center;\r\n  padding-bottom: 48px;\r\n  padding-bottom: 3rem;\r\n  background-color: rgb(0, 0, 0);\r\n}\r\n\r\n@media only screen and (min-width: 40.0625em) {\r\n  .Contact {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n.Contact h2 {\r\n  color: #FFFFFF;\r\n  color: rgba(255, 255, 255, 0.85);\r\n}\r\n\r\n.Contact-leftSection .columns {\r\n  padding: 0;\r\n}\r\n\r\n.Contact-leftSection .icon-social {\r\n  margin-left: 0;\r\n}\r\n\r\n.Contact-leftSectionImg {\r\n  margin-top: 32px;\r\n  margin-top: 2rem;\r\n}\r\n\r\n@media only screen and (min-width: 40.0625em) {\r\n  .Contact-leftSectionImg {\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n.Contact-rightSection {\r\n  margin: 32px 0 0;\r\n  margin: 2rem 0 0;\r\n  text-align: center;\r\n}\r\n\r\n@media only screen and (min-width: 40.0625em) {\r\n  .Contact-rightSection {\r\n    margin: 0;\r\n    text-align: right;\r\n  }\r\n}\r\n", ""]);

  // exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n\n  /*\n   * Elements\n   * ======================================================================== */\n}\n\n.ContentPage {\n  padding-bottom: 0;\n}\n\n.ContentPage-container {\n\n}\n\n.ContentPage-info {\n  height: 100vh;\n  /*background-image: url('https://res.cloudinary.com/dp1pal3mi/image/upload/v1442463714/Form_React_Wallpaper_3_-_1280x800_lcuotl.jpg');*/\n  background-position: bottom center;\n  background-size: cover;\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.ContentPage-info h1 {\n  margin: 48px 0 10px;\n  margin: 3rem 0 10px;\n  color: rgb(255, 255, 255);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 3em;\n  line-height: 1;\n}\n\n@media only screen and (min-width: 40.0625em) {\n  .ContentPage-info h1 {\n    margin: 2rem 0 10px;\n    font-size: 5.2em;\n  }\n}\n\n.ContentPage-info h2 {\n  margin: 0 0 10vh;\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, 0.85);\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\n.ContentPage-info img {\n  width: 200px;\n}\n\n.ContentPage-skills {\n  background: -webkit-linear-gradient(top, #000 0, #034060 100%);\n  background: linear-gradient(to bottom, #000 0, #034060 100%);\n  text-align: center;\n}\n\n@media only screen and (min-width: 40.0625em) {\n  .ContentPage-skills {\n    text-align: left;\n  }\n}\n\n.ContentPage-skills h2, h3 {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.ContentPage-skills .ContentPage-skillsContainer {\n  margin-bottom: 16px;\n  margin-bottom: 1rem;\n}\n\n@media only screen and (min-width: 40.0625em) {\n  .ContentPage-skills .ContentPage-skillsContainer {\n    margin-bottom: 2rem;\n  }\n}\n\n.ContentPage-skills .ContentPage-skillsContainerItem > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-weight: bold;\n}\n\n.ContentPage-skills .ContentPage-skillsContainerItem > ul > li {\n  margin-top: 0.25em;\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.ContentPage-skills .ContentPage-skillsContainerItem > ul li > ul {\n  margin-left: 0;\n}\n\n@media only screen and (min-width: 40.0625em) {\n  .ContentPage-skills .ContentPage-skillsContainerItem > ul li > ul {\n    margin-left: 1.25rem;\n  }\n}\n\n.ContentPage-skills .ContentPage-skillsContainerItem > ul li > ul li {\n  list-style: none;\n  font-weight: normal;\n  font-size: 0.85em;\n}\n", ""]);

  // exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: #555;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\n@media only screen and (max-width: 280px) {\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n\n  }\n}\n", ""]);

  // exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n\n  /*\n   * Elements\n   * ======================================================================== */\n}\n\n.Footer {\n  background-color: rgb(0, 0, 0);\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.Footer-container {\n  padding: 32px 0;\n  padding: 2rem 0;\n}\n\n.Footer-text {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.Footer-text--muted {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, 0.33);\n}\n\n.Footer-spacer {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.Footer-text {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-text:first-child {\n  padding-left: 0;\n}\n\n.Footer-link:first-child {\n  padding-right: 0;\n}\n\n.Footer-link .icon-arrow {\n  margin-right: 0;\n  margin-left: 0.2em;\n}\n", ""]);

  // exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n\n  /*\n   * Elements\n   * ======================================================================== */\n}\n\n.Header {\n  position: fixed;\n  top: 0;\n  z-index: 1000;\n  width: 100%;\n  background: rgb(36, 36, 36);\n  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);\n\n  -webkit-transition: top 0.25s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n\n          transition: top 0.25s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n}\n\n.Header.Header--up {\n  top: -82px;\n}\n\n.Header-container {\n  padding: 10px 0;\n}\n\n@media only screen and (min-width: 40.0625em) {\n  .Header-container {\n    padding: 20px 0;\n  }\n}\n\n.Header-brand {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.Header-brandTxt {\n  margin-left: 10px;\n}\n\n.Header-nav {\n  float: right;\n  margin-top: 6px;\n}\n\n.Header-banner {\n  text-align: center;\n}\n\n.Header-bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.Header-bannerDesc {\n  margin: 0;\n  padding: 0;\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .5);\n  font-size: 1.25em;\n}\n", ""]);

  // exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n\n  /*\n   * Elements\n   * ======================================================================== */\n}\n\n.Navigation {\n}\n\n.Navigation-link {\n  display: inline-block;\n  padding: 3px 12px;\n  text-decoration: none;\n  text-transform: uppercase; /* ~18px */\n  font-size: 1.125em;\n}\n\n@media (min-width: 40.0625em) {\n  .Navigation-link:last-child {\n    padding-right: 0;\n  }\n}\n\n.Navigation-link--highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: #000000;\n  background: rgba(0, 0, 0, .15);\n  color: rgb(255, 255, 255);\n}\n\n.Navigation-link--highlight:hover {\n  background: #000000;\n  background: rgba(0, 0, 0, .3);\n}\n\n.Navigation-mobileIcon {\n  display: inline-block;\n  width: 32px;\n  width: 2rem;\n  height: 4px;\n  height: .3rem;\n  background: rgb(255, 255, 255);\n\n}\n\n.Navigation-mobileIcon:before, .Navigation-mobileIcon:after {\n  display: block;\n  width: 32px;\n  width: 2rem;\n  height: 4px;\n  height: .3rem;\n  background: rgb(255, 255, 255);\n  content: '';\n\n  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n\n          transition: transform 0.25s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n}\n\n.Navigation-mobileIcon:before {\n  -webkit-transform: translateY(-0.55rem);\n      -ms-transform: translateY(-0.55rem);\n          transform: translateY(-0.55rem);\n}\n\n.Navigation-mobileIcon:after {\n  -webkit-transform: translateY(0.25rem);\n      -ms-transform: translateY(0.25rem);\n          transform: translateY(0.25rem);\n}\n\n.Navigation-mobileIcon.Navigation-mobileIcon--clicked {\n  background: transparent;\n}\n\n.Navigation-mobileIcon.Navigation-mobileIcon--clicked:before {\n  -webkit-transform: translateY(0rem) rotate(-45deg);\n      -ms-transform: translateY(0rem) rotate(-45deg);\n          transform: translateY(0rem) rotate(-45deg);\n}\n\n.Navigation-mobileIcon.Navigation-mobileIcon--clicked:after {\n  -webkit-transform: translateY(-0.3rem) translateX(0rem) rotate(45deg);\n      -ms-transform: translateY(-0.3rem) translateX(0rem) rotate(45deg);\n          transform: translateY(-0.3rem) translateX(0rem) rotate(45deg);\n}\n\n.Navigation-mobile-list {\n  position: fixed;\n  top: 62px;\n  top: 3.9rem;\n  left: 100vw;\n  width: 100%;\n  background-color: rgb(36, 36, 36);\n  text-align: center;\n  opacity: 0;\n\n  -webkit-transition: left 0.25s cubic-bezier(0.455, 0.030, 0.515, 0.955), opacity 0.25s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n\n          transition: left 0.25s cubic-bezier(0.455, 0.030, 0.515, 0.955), opacity 0.25s cubic-bezier(0.455, 0.030, 0.515, 0.955);\n}\n\n.Navigation-mobile-list--reveal {\n  left: 0;\n  opacity: 1;\n}\n\n.Header--up .Navigation-mobile-list {\n  top: -38px;\n  top: -2.4rem;\n  opacity: 0;\n}\n\n.Navigation-desktop {\n  background-color: rgb(36, 36, 36);\n  text-align: right;\n}\n\n.Navigation-mobile .Navigation-link {\n  padding: 2px 0 8px 8px;\n}\n\n.Navigation-mobile .Navigation-link .icon-social {\n  margin: 0;\n}\n", ""]);

  // exports


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "\n\n* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: #555;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n\n}\n", ""]);

  // exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n\n  /*\n   * Elements\n   * ======================================================================== */\n}\r\n\r\n.Portfolio {\r\n  background: -webkit-linear-gradient(top, #034060 0, rgb(196, 196, 196) 100%);\r\n  background: linear-gradient(to bottom, #034060 0, rgb(196, 196, 196) 100%);\r\n  margin-bottom: 70vh;\r\n}\r\n\r\n.webgl .Portfolio {\r\n  margin-bottom: 70vh;\r\n}\r\n\r\n.Portfolio h2 {\r\n  color: #FFFFFF;\r\n  color: rgba(255, 255, 255, 0.85);\r\n}\r\n\r\n.Portfolio-grid {\r\n  margin: 0;\r\n}\r\n", ""]);

  // exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n\n  /*\n   * Elements\n   * ======================================================================== */\n}\r\n\r\n.ProjectImage-wrapper {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url('https://commons.wikimedia.org/wiki/File%3ATransparent.gif');\r\n  /*box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.7) inset;*/\r\n  text-align: center;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n\r\n          transform: translate3d(0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n/*.ProjectCaption-wrapper img {*/\r\n/*position: relative;*/\r\n/*opacity: 0.8;*/\r\n\r\n/*transition: transform 0.35s var(--animation-swift), opacity 0.25s var(--animation-swift);*/\r\n/*}*/\r\n\r\n/*.ProjectCaption-wrapper:hover img {*/\r\n/*opacity: 0.4;*/\r\n\r\n/*transform: translate3d(0, -20%, 0);*/\r\n/*}*/\r\n\r\n.ProjectImage-wrapper figcaption {\r\n  position: absolute;\r\n  top: auto;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 3em;\r\n  background: rgb(0, 0, 0);\r\n  text-transform: uppercase;\r\n\r\n  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\r\n\r\n          transition: transform 0.35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\r\n  -webkit-transform: translate3d(0, 100%, 0);\r\n          transform: translate3d(0, 100%, 0);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n.ProjectImage-wrapper h2 {\r\n  display: inline-block;\r\n  float: left;\r\n  margin: 0;\r\n  padding: 12px 32px;\r\n  padding: 0.75rem 2rem;\r\n  color: rgb(255, 255, 255);\r\n  text-align: left;\r\n  font-weight: 700;\r\n  font-size: 1em;\r\n\r\n  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\r\n\r\n          transition: transform 0.35s cubic-bezier(0.455, 0.030, 0.515, 0.955);\r\n  -webkit-transform: translate3d(0, 200%, 0);\r\n          transform: translate3d(0, 200%, 0);\r\n}\r\n\r\n.ProjectImage-wrapper p.description {\r\n  position: absolute;\r\n  bottom: 32px;\r\n  bottom: 2rem;\r\n  padding: 32px;\r\n  padding: 2rem;\r\n  width: 100%;\r\n  color: rgb(255, 255, 255);\r\n  text-transform: none;\r\n  text-shadow: 0 1px 2px rgb(0, 0, 0);\r\n  font-size: 90%;\r\n  opacity: 0;\r\n\r\n  -webkit-transition: opacity 0.25s cubic-bezier(0.455, 0.030, 0.515, 0.955);\r\n\r\n          transition: opacity 0.25s cubic-bezier(0.455, 0.030, 0.515, 0.955);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n@media screen and (min-width: 40.0625em) {\r\n  .ProjectImage-wrapper p.description {\r\n    bottom: 3rem;\r\n    padding: 2rem;\r\n  }\r\n}\r\n\r\n.ProjectImage-wrapper:hover p.description {\r\n  opacity: 1;\r\n}\r\n\r\n.ProjectImage-wrapper:hover figcaption,\r\n.ProjectImage-wrapper:hover h2 {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.ProjectImage-wrapper:hover h2 {\r\n  -webkit-transition-delay: 0.05s;\r\n          transition-delay: 0.05s;\r\n}\r\n\r\n.touch .ProjectImage-wrapper p.description {\r\n  /*opacity: 1;*/\r\n}\r\n\r\n.touch .ProjectImage-wrapper figcaption,\r\n.touch .ProjectImage-wrapper h2 {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n}\r\n\r\n", ""]);

  // exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n\n  /*\n   * Elements\n   * ======================================================================== */\n}\n\n.ProjectInfo {\n  padding: 0 16px;\n  padding: 0 1rem;\n  background: rgb(196, 196, 196);\n}\n\n@media only screen and (min-width: 40.0625em) {\n  .ProjectInfo {\n    padding: 0 4rem;\n  }\n}\n\n.ProjectInfo-card {\n  margin: 0 auto;\n  padding: 16px 0;\n  padding: 1rem 0;\n  /*max-width: 1200px;*/\n  /*background-color: var(--white);*/\n}\n\n@media only screen and (min-width: 40.0625em) {\n  .ProjectInfo-card {\n    /*padding: 3rem 0;*/\n  }\n}\n\n.ProjectInfo-card h2, .ProjectInfo-card h3, .ProjectInfo-card h4, .ProjectInfo-card h5, .ProjectInfo-card p {\n  margin: 0;\n  color: #000000;\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.ProjectInfo-card h2 {\n  font-weight: 700;\n}\n\n.ProjectInfo-card h4 {\n  margin: 4px 0 0;\n  margin: 0.3rem 0 0;\n  font-weight: 700;\n}\n\n.ProjectInfo-card h5 {\n  margin: 0 0 6px;\n  margin: 0 0 0.4rem;\n  line-height: 1.2;\n}\n\n.ProjectInfo-card p {\n  margin: 0;\n}\n\n.ProjectInfo-card img {\n  margin: 16px 0;\n  margin: 1rem 0;\n  width: 100%;\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);\n}\n\n.ProjectInfo-cardInfo {\n  margin: 0 auto;\n  padding: 16px 0;\n  padding: 1rem 0;\n  max-width: 1200px;\n  width: 90%;\n}\n\n.ProjectInfo-cardStackTitle {\n  text-transform: capitalize;\n  font-weight: 700;\n}\n\n.ProjectInfo-cardAwardTitle {\n  font-weight: 700;\n}\n\n.ProjectInfo-cardSections {\n  margin: 16px auto;\n  margin: 1rem auto;\n  max-width: 1400px;\n  background-color: rgb(196, 196, 196);\n  /*box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.3);*/\n}\n", ""]);

  // exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n\n  /*\n   * Elements\n   * ======================================================================== */\n}\r\n\r\n.ProjectWrapper {\r\n  position: relative;\r\n  overflow: hidden;\r\n  padding-bottom: 56% !important;\r\n  margin: 8px 0;\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n@media only screen and (min-width: 40.0625em) {\r\n  .ProjectWrapper {\r\n    margin: 0;\r\n    padding-bottom: 30% !important;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 64.0625em) {\r\n  .ProjectWrapper {\r\n    padding-bottom: 19% !important;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 90.063em) {\r\n  .ProjectWrapper {\r\n    padding-bottom: 14.5% !important;\r\n  }\r\n}\r\n\r\n.ProjectWrapper-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  z-index: 2;\r\n\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n\r\n          transform: translate3d(0, 0, 0);\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.ProjectWrapper-container--closed {\r\n  position: absolute;\r\n  overflow: hidden;\r\n}\r\n\r\n.ProjectWrapper-container--hoverable {\r\n  background-color: rgb(0, 0, 0);\r\n}\r\n\r\n.ProjectWrapper-container--closed .ProjectWrapper-svgContainer {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.ProjectWrapper-svgContainer {\r\n  max-height: 200px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 40.0625em) {\r\n  .ProjectWrapper-svgContainer {\r\n    max-height: 400px;\r\n  }\r\n}\r\n\r\n.ProjectWrapper-svg {\r\n  position: relative;\r\n  left: 50%;\r\n  display: block;\r\n  max-height: 400px;\r\n  height: 100%;\r\n\r\n  -webkit-transition: -webkit-transform .4s cubic-bezier(0.455, 0.030, 0.515, 0.955);\r\n\r\n          transition: transform .4s cubic-bezier(0.455, 0.030, 0.515, 0.955);\r\n  -webkit-transform: translateX(-50%);\r\n      -ms-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n}\r\n\r\n.ProjectWrapper-svg image {\r\n  -webkit-transition: opacity .4s cubic-bezier(0.455, 0.030, 0.515, 0.955);\r\n          transition: opacity .4s cubic-bezier(0.455, 0.030, 0.515, 0.955);\r\n}\r\n\r\n.ProjectWrapper:hover .ProjectWrapper-container--hoverable .ProjectWrapper-svg {\r\n  -webkit-transform: translateX(-50%) translateY(-10%);\r\n      -ms-transform: translateX(-50%) translateY(-10%);\r\n          transform: translateX(-50%) translateY(-10%);\r\n}\r\n\r\n.ProjectWrapper:hover .ProjectWrapper-container--hoverable .ProjectWrapper-svg image {\r\n  opacity: 0.5;\r\n}\r\n\r\n.touch .ProjectWrapper .ProjectWrapper-container--hoverable .ProjectWrapper-svg {\r\n  -webkit-transform: translateX(-50%) translateY(-10%);\r\n      -ms-transform: translateX(-50%) translateY(-10%);\r\n          transform: translateX(-50%) translateY(-10%);\r\n}\r\n.touch .ProjectWrapper .ProjectWrapper-container--hoverable .ProjectWrapper-svg image {\r\n  opacity: 1;\r\n}\r\n", ""]);

  // exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  var isarray = __webpack_require__(49)

  /**
   * Expose `pathToRegexp`.
   */
  module.exports = pathToRegexp
  module.exports.parse = parse
  module.exports.compile = compile
  module.exports.tokensToFunction = tokensToFunction
  module.exports.tokensToRegExp = tokensToRegExp

  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
  ].join('|'), 'g')

  /**
   * Parse a string for the raw tokens.
   *
   * @param  {String} str
   * @return {Array}
   */
  function parse (str) {
    var tokens = []
    var key = 0
    var index = 0
    var path = ''
    var res

    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0]
      var escaped = res[1]
      var offset = res.index
      path += str.slice(index, offset)
      index = offset + m.length

      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1]
        continue
      }

      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path)
        path = ''
      }

      var prefix = res[2]
      var name = res[3]
      var capture = res[4]
      var group = res[5]
      var suffix = res[6]
      var asterisk = res[7]

      var repeat = suffix === '+' || suffix === '*'
      var optional = suffix === '?' || suffix === '*'
      var delimiter = prefix || '/'
      var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        pattern: escapeGroup(pattern)
      })
    }

    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index)
    }

    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path)
    }

    return tokens
  }

  /**
   * Compile a string to a template function for the path.
   *
   * @param  {String}   str
   * @return {Function}
   */
  function compile (str) {
    return tokensToFunction(parse(str))
  }

  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length)

    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^' + tokens[i].pattern + '$')
      }
    }

    return function (obj) {
      var path = ''
      var data = obj || {}

      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]

        if (typeof token === 'string') {
          path += token

          continue
        }

        var value = data[token.name]
        var segment

        if (value == null) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined')
          }
        }

        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
          }

          if (value.length === 0) {
            if (token.optional) {
              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }
          }

          for (var j = 0; j < value.length; j++) {
            segment = encodeURIComponent(value[j])

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment
          }

          continue
        }

        segment = encodeURIComponent(value)

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
        }

        path += token.prefix + segment
      }

      return path
    }
  }

  /**
   * Escape a regular expression string.
   *
   * @param  {String} str
   * @return {String}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
  }

  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {String} group
   * @return {String}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$\/()])/g, '\\$1')
  }

  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {RegExp} re
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function attachKeys (re, keys) {
    re.keys = keys
    return re
  }

  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {String}
   */
  function flags (options) {
    return options.sensitive ? '' : 'i'
  }

  /**
   * Pull out keys from a regexp.
   *
   * @param  {RegExp} path
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function regexpToRegexp (path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g)

    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          pattern: null
        })
      }
    }

    return attachKeys(path, keys)
  }

  /**
   * Transform an array into a regexp.
   *
   * @param  {Array}  path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = []

    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source)
    }

    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

    return attachKeys(regexp, keys)
  }

  /**
   * Create a path regexp from string input.
   *
   * @param  {String} path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function stringToRegexp (path, keys, options) {
    var tokens = parse(path)
    var re = tokensToRegExp(tokens, options)

    // Attach keys back to the regexp.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] !== 'string') {
        keys.push(tokens[i])
      }
    }

    return attachKeys(re, keys)
  }

  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {Array}  tokens
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function tokensToRegExp (tokens, options) {
    options = options || {}

    var strict = options.strict
    var end = options.end !== false
    var route = ''
    var lastToken = tokens[tokens.length - 1]
    var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        route += escapeString(token)
      } else {
        var prefix = escapeString(token.prefix)
        var capture = token.pattern

        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*'
        }

        if (token.optional) {
          if (prefix) {
            capture = '(?:' + prefix + '(' + capture + '))?'
          } else {
            capture = '(' + capture + ')?'
          }
        } else {
          capture = prefix + '(' + capture + ')'
        }

        route += capture
      }
    }

    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
    }

    if (end) {
      route += '$'
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithSlash ? '' : '(?=\\/|$)'
    }

    return new RegExp('^' + route, flags(options))
  }

  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(String|RegExp|Array)} path
   * @param  {Array}                 [keys]
   * @param  {Object}                [options]
   * @return {RegExp}
   */
  function pathToRegexp (path, keys, options) {
    keys = keys || []

    if (!isarray(keys)) {
      options = keys
      keys = []
    } else if (!options) {
      options = {}
    }

    if (path instanceof RegExp) {
      return regexpToRegexp(path, keys, options)
    }

    if (isarray(path)) {
      return arrayToRegexp(path, keys, options)
    }

    return stringToRegexp(path, keys, options)
  }


/***/ },
/* 49 */
/***/ function(module, exports) {

  module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };


/***/ },
/* 50 */
/***/ function(module, exports) {

  module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsiPjxnIGlkPSJtYWlsIj48cGF0aCBzdHlsZT0ib3BhY2l0eTogMC44NTsgZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpOyIgZD0iTTIwLDRINEMyLjksNCwyLDQuOSwyLDZsMCwxMmMwLDEuMSwwLjksMiwyLDJoMTZjMS4xLDAsMi0wLjksMi0yVjZDMjIsNC45LDIxLjEsNCwyMCw0eiBNMjAsOGwtOCw1TDQsOFY2bDgsNWw4LTVWOHoiPjwvcGF0aD48L2c+PC9zdmc+DQo="

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyMHB4IiBpZD0iZmxpY2tyIiBjbGFzcz0iY3VzdG9tLWljb24iIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7Ij4NCgk8cGF0aCBjbGFzcz0iaW5uZXItc2hhcGUiIHN0eWxlPSJvcGFjaXR5OiAwLjg1OyBmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIHNjYWxlKDEpIiBkPSJNMSw1MGMwLTExLjgzOSw5LjU5OC0yMS40MzgsMjEuNDM4LTIxLjQzOFM0My44NzUsMzguMTYxLDQzLjg3NSw1MHMtOS41OTgsMjEuNDM4LTIxLjQzOCwyMS40MzhTMSw2MS44MzksMSw1MHogTTU2LjEyNSw1MCBjMC0xMS44MzksOS41OTgtMjEuNDM4LDIxLjQzOC0yMS40MzhTOTksMzguMTYxLDk5LDUwcy05LjU5OCwyMS40MzgtMjEuNDM4LDIxLjQzOFM1Ni4xMjUsNjEuODM5LDU2LjEyNSw1MHoiPjwvcGF0aD4NCjwvc3ZnPg0KDQo="

/***/ },
/* 52 */
/***/ function(module, exports) {

  module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyMHB4IiBpZD0iZ2l0aHViIiBjbGFzcz0iY3VzdG9tLWljb24iIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHN0eWxlPSJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogYmxvY2s7Ij4NCgk8cGF0aCBjbGFzcz0iaW5uZXItc2hhcGUiIHN0eWxlPSJvcGFjaXR5OiAwLjg1OyBmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIHNjYWxlKDEpIiBkPSJNNTAsMUMyMi45MzgsMSwxLDIyLjkzOCwxLDUwczIxLjkzOCw0OSw0OSw0OXM0OS0yMS45MzgsNDktNDlTNzcuMDYyLDEsNTAsMXogTTc5LjA5OSw3OS4wOTkgYy0zLjc4MiwzLjc4Mi04LjE4NCw2Ljc1LTEzLjA4Myw4LjgyM2MtMS4yNDUsMC41MjYtMi41MDksMC45ODktMy43OSwxLjM4N3YtNy4zNDRjMC0zLjg2LTEuMzI0LTYuNjk5LTMuOTcyLTguNTE3IGMxLjY1OS0wLjE2LDMuMTgyLTAuMzgzLDQuNTctMC42N2MxLjM4OC0wLjI4NywyLjg1NS0wLjcwMiw0LjQwMi0xLjI0NWMxLjU0Ny0wLjU0MywyLjkzNS0xLjE4OSw0LjE2My0xLjkzOCBjMS4yMjgtMC43NSwyLjQwOS0xLjcyMywzLjU0MS0yLjkxOXMyLjA4Mi0yLjU1MiwyLjg0Ny00LjA2N3MxLjM3Mi0zLjMzNCwxLjgxOC01LjQ1NWMwLjQ0Ni0yLjEyMSwwLjY3LTQuNDU4LDAuNjctNy4wMSBjMC00Ljk0NS0xLjYxMS05LjE1NS00LjgzMy0xMi42MzNjMS40NjctMy44MjgsMS4zMDgtNy45OTEtMC40NzgtMTIuNDg5bC0xLjE5Ny0wLjE0M2MtMC44MjktMC4wOTYtMi4zMjEsMC4yNTUtNC40NzQsMS4wNTMgYy0yLjE1MywwLjc5OC00LjU3LDIuMTA1LTcuMjQ5LDMuOTI0Yy0zLjc5Ny0xLjA1My03LjczNi0xLjU3OS0xMS44Mi0xLjU3OWMtNC4xMTUsMC04LjAzOSwwLjUyNi0xMS43NzIsMS41NzkgYy0xLjY5LTEuMTQ5LTMuMjk0LTIuMDk3LTQuODA5LTIuODQ3Yy0xLjUxNS0wLjc1LTIuNzI3LTEuMjYtMy42MzctMS41MzJjLTAuOTA5LTAuMjcxLTEuNzU0LTAuNDM5LTIuNTM2LTAuNTAzIGMtMC43ODItMC4wNjQtMS4yODQtMC4wNzktMS41MDctMC4wNDhjLTAuMjIzLDAuMDMxLTAuMzgzLDAuMDY0LTAuNDc4LDAuMDk2Yy0xLjc4Nyw0LjUzLTEuOTQ2LDguNjk0LTAuNDc4LDEyLjQ4OSBjLTMuMjIyLDMuNDc3LTQuODMzLDcuNjg4LTQuODMzLDEyLjYzM2MwLDIuNTUyLDAuMjIzLDQuODg5LDAuNjcsNy4wMWMwLjQ0NywyLjEyMSwxLjA1MywzLjk0LDEuODE4LDUuNDU1IGMwLjc2NSwxLjUxNSwxLjcxNSwyLjg3MSwyLjg0Nyw0LjA2N3MyLjMxMywyLjE2OSwzLjU0MSwyLjkxOWMxLjIyOCwwLjc1MSwyLjYxNiwxLjM5Niw0LjE2MywxLjkzOCBjMS41NDcsMC41NDMsMy4wMTQsMC45NTcsNC40MDIsMS4yNDVjMS4zODgsMC4yODcsMi45MTEsMC41MTEsNC41NywwLjY3Yy0yLjYxNiwxLjc4Ny0zLjkyNCw0LjYyNi0zLjkyNCw4LjUxN3Y3LjQ4NyBjLTEuNDQ1LTAuNDMtMi44NjktMC45MzgtNC4yNjgtMS41M2MtNC44OTktMi4wNzMtOS4zMDEtNS4wNDEtMTMuMDgzLTguODIzYy0zLjc4Mi0zLjc4Mi02Ljc1LTguMTg0LTguODIzLTEzLjA4MyBDOS45MzQsNjAuOTQ4LDguODQ3LDU1LjU2LDguODQ3LDUwczEuMDg3LTEwLjk0OCwzLjIzMS0xNi4wMTZjMi4wNzMtNC44OTksNS4wNDEtOS4zMDEsOC44MjMtMTMuMDgzczguMTg0LTYuNzUsMTMuMDgzLTguODIzIEMzOS4wNTIsOS45MzQsNDQuNDQsOC44NDcsNTAsOC44NDdzMTAuOTQ4LDEuMDg3LDE2LjAxNiwzLjIzMWM0LjksMi4wNzMsOS4zMDEsNS4wNDEsMTMuMDgzLDguODIzIGMzLjc4MiwzLjc4Miw2Ljc1LDguMTg0LDguODIzLDEzLjA4M2MyLjE0Myw1LjA2OSwzLjIzLDEwLjQ1NywzLjIzLDE2LjAxNnMtMS4wODcsMTAuOTQ4LTMuMjMxLDE2LjAxNiBDODUuODQ4LDcwLjkxNSw4Mi44OCw3NS4zMTcsNzkuMDk5LDc5LjA5OUw3OS4wOTksNzkuMDk5eiI+PC9wYXRoPg0KPC9zdmc+DQoNCg=="

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyMHB4IiBpZD0ibGlua2VkaW4iIGNsYXNzPSJjdXN0b20taWNvbiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsiPg0KCTxwYXRoIGNsYXNzPSJpbm5lci1zaGFwZSIgc3R5bGU9Im9wYWNpdHk6IDAuODU7IGZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkgc2NhbGUoMSkiIGQ9Ik04Mi41MzksMUgxNy40NjFDOC40MDgsMSwxLDguNDA4LDEsMTcuNDYxdjY1LjA3OEMxLDkxLjU5Miw4LjQwOCw5OSwxNy40NjEsOTloNjUuMDc4QzkxLjU5Miw5OSw5OSw5MS41OTIsOTksODIuNTM5IFYxNy40NjFDOTksOC40MDgsOTEuNTkyLDEsODIuNTM5LDF6IE0zNy43NSw4MC42MjVIMjUuNVYzNy43NWgxMi4yNVY4MC42MjV6IE0zMS42MjUsMzEuNjI1Yy0zLjM4MywwLTYuMTI1LTIuNzQyLTYuMTI1LTYuMTI1IHMyLjc0Mi02LjEyNSw2LjEyNS02LjEyNXM2LjEyNSwyLjc0Miw2LjEyNSw2LjEyNVMzNS4wMDgsMzEuNjI1LDMxLjYyNSwzMS42MjV6IE04MC42MjUsODAuNjI1aC0xMi4yNXYtMjQuNSBjMC0zLjM4My0yLjc0Mi02LjEyNS02LjEyNS02LjEyNXMtNi4xMjUsMi43NDItNi4xMjUsNi4xMjV2MjQuNWgtMTIuMjVWMzcuNzVoMTIuMjV2Ny42MDZjMi41MjYtMy40Nyw2LjM4OS03LjYwNiwxMC43MTktNy42MDYgYzcuNjEyLDAsMTMuNzgyLDYuODU2LDEzLjc4MiwxNS4zMTJMODAuNjI1LDgwLjYyNUw4MC42MjUsODAuNjI1eiI+PC9wYXRoPg0KPC9zdmc+DQoNCg=="

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyMHB4IiBpZD0ic3RhY2tvdmVyZmxvdyIgY2xhc3M9ImN1c3RvbS1pY29uIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0icG9pbnRlci1ldmVudHM6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyI+DQoJPHBhdGggY2xhc3M9ImlubmVyLXNoYXBlIiBzdHlsZT0ib3BhY2l0eTogMC44NTsgZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpOyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSBzY2FsZSgxKSIgZD0iTTYyLjMxNyw4NS44OWwtMzguNjc5LDAuMDE4bC0wLjAwNC04LjI2MWwzOC42NzgtMC4wMTlMNjIuMzE3LDg1Ljg5eiBNODguNDUzLDM5LjEwN0w4MS44MzcsMWwtOC4xNCwxLjQxM2w2LjYxNSwzOC4xMDcgTDg4LjQ1MywzOS4xMDd6IE02My4yNDgsNjcuMDM3bC0zOC41MTQtMy41NDlsLTAuNzU4LDguMjI3bDM4LjUxNCwzLjU0Nkw2My4yNDgsNjcuMDM3eiBNNjUuNzg5LDU2LjI1N0wyOC40MzcsNDYuMjE2bC0yLjE0Niw3Ljk3OCBsMzcuMzUzLDEwLjA0MUw2NS43ODksNTYuMjU3eiBNNzAuNjY0LDQ2LjgwOEwzNy4zNSwyNy4xNThsLTQuMTk5LDcuMTE0bDMzLjMxNywxOS42NTFMNzAuNjY0LDQ2LjgwOHogTTc4LjgzMyw0MS4wMjFMNTcuMDQxLDkuMDY1IGwtNi44MjYsNC42NTRsMjEuNzkzLDMxLjk1NUw3OC44MzMsNDEuMDIxeiBNNjguODg1LDU4LjcxNnYzMy43NzJIMTguMTU0VjU4LjcxNmgtNi42MDd2NDAuMjUzaDAuMDY2IEMxMS42MTIsOTksMTMuNTQxLDk5LDEzLjU0MSw5OWg2MS44ODZ2LTAuMDMxYzAuMDY1LDAsMC4wNjUtMS45MywwLjA2NS0xLjkzVjU4LjcxNkg2OC44ODV6Ij48L3BhdGg+DQo8L3N2Zz4NCg0K"

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsiPjxnIGlkPSJrZXlib2FyZC1hcnJvdy11cCI+PHBvbHlnb24gc3R5bGU9Im9wYWNpdHk6IDAuODU7IGZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsiIHBvaW50cz0iNy40LDE1LjQgMTIsMTAuOCAxNi42LDE1LjQgMTgsMTQgMTIsOCA2LDE0ICI+PC9wb2x5Z29uPjwvZz48L3N2Zz4NCg=="

/***/ },
/* 56 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAAbCAYAAADf2wtbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA4NjMyRjFDRDQ4NTExRTE5MTQwODlCQjM0OUYwOTYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA4NjMyRjFERDQ4NTExRTE5MTQwODlCQjM0OUYwOTYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDg2MzJGMUFENDg1MTFFMTkxNDA4OUJCMzQ5RjA5NjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDg2MzJGMUJENDg1MTFFMTkxNDA4OUJCMzQ5RjA5NjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz63qas1AAAG4ElEQVR42uxc/3XiSAxW8vJ/fBXEW8GSCjAVhFRgU0FIBSEVQCoAKoBUgFNBfBXgVLBOBRxzT76dFRpb88Mb4FbvzQsQjz2jkTSfPsu+2O12EQD0oF1ycJfxvs0sjo/3rQQ/UXMqAp/TNFbVIvxe4XVsriVdg/r8RYBxZzhuJROLfonHNfMA/SW6KphjCtSdrdDxFhd7p1E/pvv2ITjB9b59ogNUFsY73bdnC8ebWC4kJ5t9GwQ+p+4oD/s21AyPM+71vi0F805wvGDhOAvUaeU4/q32fYTnk8jOQ28XAfpLdHWBx+gGr9bi3vJ6Uwz4uuMNQDkNNhC2eN/m+9YTHj9Vuxn+lV5jYnGsqW06OGeEc7eVTYu+kp2b/LBcO10XdHzSvj4Son8iPC5G/egytpgnd51/1/DSwdtLjEypYJvUIUukfT9FUXN9R1jjssW79m3T78YB8qTM+GI4L6ntVJcnIQxWel2R3x5rWHzlMSh1kjkzMF2GCE+UvKDRzE7UYTaM09cQ7E3LYZTxfTdAtzn+bYNCiwa4fMM4n1rgb0KoZoKUmQN8zXHuPoa99FybpjGsUZeZ5gxzhO1NulqRtc5/sVsHeKa3rKXvquX7KcAzBcm2zFY9wf+16Wdr2uYboEAigMjvpE8mnM/KAGm2DvDMRaeusNCkq4nD+k0toOsPus6Xnl6uvPiuITrTCPDqyZ58hUxJZFYR6hajciXQzy3Dds07gB6pkAAYksTW9L9zkYohAMaGufYQwulyT9f5MsCgPhtw84LZLtMTUnjMQKGBJeVbMXCgFyB4FISVk5yPzmVExpXCeUqB6QQNXHFLHjPjmM/LDgcaMZG4IgTBsQuNOs/gdo+kYhYthIHa5hMp2a0KEtiGZ0gImBwgIjs+dSLO0Tp1mgyhGCfLDlikrmRIDN+HxFjjotUtROC4sZxLTNYBmEQ8g/MVCrUShNkZs9ZGgiuE01wzv/XRSExsR/9EGLOIGH3lcb4aptXtPsAYE7JzSHcZncErSN/0jJ2Gc4YnzFt1eWxCFFcBDOtvJg9oM643OCxzOcZ8xgcKdS0TMsbckgAoSUAYk2PXgjH0QUZTl8DT7LFnf9cdfwa/3umnwbHxWr5O88B4rvrtRTDwJ2i+x3MMOw1YRPLf6cwPZNHrfEtKACyZ72Oy20icJhESEHmD0zx59HeVRxw3t8atNunjNKa8JRYYWNlAFvyRn/pNWyCjnuSWDtBM33n0IschdFfgeizyAofU/4vEHl1zmjEu3tqCAKDyCudzX0BBjJ1Di1p2lIQ07vgFGFgeAwFgys3+T4RAhLs1MPlNK0Fjs9MkqPw+mCt3+y0LSCHaKvC2G1JyAh164Pd4hCkxNYnaPe7AXCtVoq7bYFTKOJGk0jgV5BsLkJXBmOZZCO0lNBqZGvRa36sZSJwmFWDTEg55fS5xtplgecSEQMkEhFmH5zcxPbTmrb7DLXHg2GM3lxACH56BpOogEElgb8Y4ZKRtDpOmgHGlbc15gMF8gF3R36eBTDgWpym1YNCE8yW6o4WWkkBRoINsSDSU7nq+EEtKCJyKxMDTyyXR8RPOuwhNBHBG4WL8qyMmBJYEopkYv1xgxHMmp5PCxBHpP8WFtoVmz0JHkQSKUxRavbzQkNMzWWt17C1rl55VznUbWlTZSvpOA1Q5zwNUOXMPMg0DVOZuHaqc50z1ba9Fr7pIK8zHLVXEp1blrNsUXQNapf4u0VmoMpo7j4R+DeErBCKQPb4tgWgvzI6RWJyjB/wDTbYygsPaqVUD25O2sGNNyX3TeU5R1HrR+1r3zC5CfxtyEDeE08QBoNUHoUU/wa9wUHpHWyITgm3rpyUnAnpSHfPOQALXsd3DYTn/RkAAlBbXrIjj+JAJxyCNT2EyQXLUxrSFyGmG0F4BIIluD1oEnuFgR45O3IewVPYAjbNH8psHvM4bYWH6GKEiZp4+pAfHqPXg8AlaauS260OLar+SEMhIAL1hWM0JE6xMeUzewoKanva8DZnTzAPkH9x5eg65Tf3Sj6iDp0EjBvPayNQCpycOL33QXxpBn1SMHOZL5xp/UU6zcXwBB5ef/RDqglvraaicJoFwhYyvDCW7FOYQEfws8X7siImrn9i0fW1SiTvVY8Cx5AYYMYTDl2QsHPXxEpi+/t3SY+jlkVAXFXPsf0971u89k95rAGahQhqD6UUdasG+awl+gZ+VcVzj5+cWanTiQQYsGCfNwPxGnvqm3RLkhY8bAgdzob4yct2CBJmB49qqOW41aKP0oF7esSMUtq1ed8T5By3Hu7xt5y/MJfXgMXOw1TFxPKXfb8pp4AQjiL6Q5ZGNKdQbMP/Ikco/AgwAOXIuNkPmJ+gAAAAASUVORK5CYII="

/***/ },
/* 57 */
/***/ function(module, exports) {

  module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIzMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsiPjxnIGlkPSJjbG9zZSI+PHBvbHlnb24gc3R5bGU9Im9wYWNpdHk6IDAuODU7IGZpbGw6IHJnYigwLCAwLCAwKTsiIHBvaW50cz0iMTksNi40IDE3LjYsNSAxMiwxMC42IDYuNCw1IDUsNi40IDEwLjYsMTIgNSwxNy42IDYuNCwxOSAxMiwxMy40IDE3LjYsMTkgMTksMTcuNiAxMy40LDEyICI+PC9wb2x5Z29uPjwvZz48L3N2Zz4NCg=="

/***/ },
/* 58 */
/***/ function(module, exports) {

  module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIzMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsiPjxnIGlkPSJrZXlib2FyZC1hcnJvdy1sZWZ0Ij48cG9seWdvbiBzdHlsZT0ib3BhY2l0eTogMC44NTsgZmlsbDogcmdiKDAsIDAsIDApOyIgcG9pbnRzPSIxNS40LDE2LjEgMTAuOCwxMS41IDE1LjQsNi45IDE0LDUuNSA4LDExLjUgMTQsMTcuNSAiPjwvcG9seWdvbj48L2c+PC9zdmc+DQo="

/***/ },
/* 59 */
/***/ function(module, exports) {

  module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIzMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsiPjxnIGlkPSJrZXlib2FyZC1hcnJvdy1yaWdodCI+PHBvbHlnb24gc3R5bGU9Im9wYWNpdHk6IDAuODU7IGZpbGw6IHJnYigwLCAwLCAwKTsiIHBvaW50cz0iOC42LDE2LjMgMTMuMiwxMS44IDguNiw3LjIgMTAsNS44IDE2LDExLjggMTAsMTcuOCAiPjwvcG9seWdvbj48L2c+PC9zdmc+DQo="

/***/ },
/* 60 */
/***/ function(module, exports) {

  module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIzMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsiPjxnIGlkPSJrZXlib2FyZC1hcnJvdy11cCI+PHBvbHlnb24gc3R5bGU9Im9wYWNpdHk6IDAuODU7IGZpbGw6IHJnYigwLCAwLCAwKTsiIHBvaW50cz0iNy40LDE1LjQgMTIsMTAuOCAxNi42LDE1LjQgMTgsMTQgMTIsOCA2LDE0ICI+PC9wb2x5Z29uPjwvZz48L3N2Zz4NCg=="

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = require("babel-core/polyfill");

/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = require("eventemitter3");

/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 64 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/invariant");

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 69 */
/***/ function(module, exports) {

  module.exports = require("jade");

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("re-base");

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 73 */
/***/ function(module, exports) {

  module.exports = require("react-lazy-load");

/***/ },
/* 74 */
/***/ function(module, exports) {

  module.exports = require("react-loader");

/***/ },
/* 75 */
/***/ function(module, exports) {

  module.exports = require("superagent");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map