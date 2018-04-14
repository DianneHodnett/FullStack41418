'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hapi = require('hapi');

var _relish = require('relish');

var _relish2 = _interopRequireDefault(_relish);

var _package = require('../package');

var _package2 = _interopRequireDefault(_package);

var _mongo = require('./plugins/mongo');

var _mongo2 = _interopRequireDefault(_mongo);

var _senate = require('./plugins/senate');

var _senate2 = _interopRequireDefault(_senate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var relish = (0, _relish2.default)();

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;
var mongoUri = process.env.MONGO_URI;

if (!mongoUri) throw Error('Please set a MONGO_URI environment variable');

var defaultPlugins = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(server) {
    var plugins;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            plugins = [{ plugin: require('inert') }, { plugin: require('vision') }, { plugin: require('blipp') }, {
              plugin: require('good'),
              options: {
                ops: {
                  interval: 5000
                },
                reporters: {
                  console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                      log: '*',
                      response: '*',
                      request: '*',
                      error: '*'
                    }]
                  }, {
                    module: 'good-console',
                    args: [{
                      log: '*',
                      response: '*',
                      request: '*',
                      error: '*'
                    }]
                  }, 'stdout']
                }
              }
            }, {
              plugin: require('hapi-swagger'),
              options: {
                cors: true,
                jsonEditor: false,
                documentationPath: '/',
                info: {
                  title: 'Example',
                  version: _package2.default.version,
                  description: 'An example api'
                }
              }
            }];
            _context.next = 3;
            return server.register(plugins);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function defaultPlugins(_x) {
    return _ref.apply(this, arguments);
  };
}();

var customPlugins = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(server) {
    var plugins;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            plugins = [{ plugin: _mongo2.default, options: { mongoUri: mongoUri } }, { plugin: _senate2.default }];
            _context2.next = 3;
            return server.register(plugins);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function customPlugins(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var options, server;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          options = {
            router: {
              isCaseSensitive: false
            },
            routes: {
              cors: true,
              validate: {
                failAction: relish.failAction,
                options: {
                  abortEarly: false
                }
              },
              timeout: {
                server: 5000
              }
            }
          };


          if (env !== 'testing') {}

          server = new _hapi.Server(options);
          _context3.next = 5;
          return defaultPlugins(server);

        case 5:
          _context3.next = 7;
          return customPlugins(server);

        case 7:
          _context3.next = 9;
          return server.initialize();

        case 9:
          return _context3.abrupt('return', server);

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined);
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWxpc2giLCJlbnYiLCJwcm9jZXNzIiwiTk9ERV9FTlYiLCJwb3J0IiwiUE9SVCIsIm1vbmdvVXJpIiwiTU9OR09fVVJJIiwiRXJyb3IiLCJkZWZhdWx0UGx1Z2lucyIsInNlcnZlciIsInBsdWdpbnMiLCJwbHVnaW4iLCJyZXF1aXJlIiwib3B0aW9ucyIsIm9wcyIsImludGVydmFsIiwicmVwb3J0ZXJzIiwiY29uc29sZSIsIm1vZHVsZSIsIm5hbWUiLCJhcmdzIiwibG9nIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwiZXJyb3IiLCJjb3JzIiwianNvbkVkaXRvciIsImRvY3VtZW50YXRpb25QYXRoIiwiaW5mbyIsInRpdGxlIiwidmVyc2lvbiIsImRlc2NyaXB0aW9uIiwicmVnaXN0ZXIiLCJjdXN0b21QbHVnaW5zIiwicm91dGVyIiwiaXNDYXNlU2Vuc2l0aXZlIiwicm91dGVzIiwidmFsaWRhdGUiLCJmYWlsQWN0aW9uIiwiYWJvcnRFYXJseSIsInRpbWVvdXQiLCJpbml0aWFsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLHVCQUFmOztBQUVBLElBQU1DLE1BQU1DLFFBQVFELEdBQVIsQ0FBWUUsUUFBWixJQUF3QixhQUFwQztBQUNBLElBQU1DLE9BQU9GLFFBQVFELEdBQVIsQ0FBWUksSUFBWixJQUFvQixJQUFqQztBQUNBLElBQU1DLFdBQVdKLFFBQVFELEdBQVIsQ0FBWU0sU0FBN0I7O0FBRUEsSUFBRyxDQUFDRCxRQUFKLEVBQ0UsTUFBTUUsTUFBTSw2Q0FBTixDQUFOOztBQUVGLElBQU1DO0FBQUEscUVBQWlCLGlCQUFNQyxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVmQyxtQkFGZSxHQUVMLENBQ2QsRUFBRUMsUUFBUUMsUUFBUSxPQUFSLENBQVYsRUFEYyxFQUVkLEVBQUVELFFBQVFDLFFBQVEsUUFBUixDQUFWLEVBRmMsRUFHZCxFQUFFRCxRQUFRQyxRQUFRLE9BQVIsQ0FBVixFQUhjLEVBSWQ7QUFDRUQsc0JBQVFDLFFBQVEsTUFBUixDQURWO0FBRUVDLHVCQUFTO0FBQ1BDLHFCQUFLO0FBQ0hDLDRCQUFVO0FBRFAsaUJBREU7QUFJUEMsMkJBQVc7QUFDVEMsMkJBQVMsQ0FDUDtBQUNFQyw0QkFBUSxjQURWO0FBRUVDLDBCQUFNLFNBRlI7QUFHRUMsMEJBQU0sQ0FBQztBQUNMQywyQkFBSyxHQURBO0FBRUxDLGdDQUFVLEdBRkw7QUFHTEMsK0JBQVMsR0FISjtBQUlMQyw2QkFBTztBQUpGLHFCQUFEO0FBSFIsbUJBRE8sRUFXUDtBQUNFTiw0QkFBUSxjQURWO0FBRUVFLDBCQUFNLENBQUM7QUFDTEMsMkJBQUssR0FEQTtBQUVMQyxnQ0FBVSxHQUZMO0FBR0xDLCtCQUFTLEdBSEo7QUFJTEMsNkJBQU87QUFKRixxQkFBRDtBQUZSLG1CQVhPLEVBbUJKLFFBbkJJO0FBREE7QUFKSjtBQUZYLGFBSmMsRUFrQ2Q7QUFDRWIsc0JBQVFDLFFBQVEsY0FBUixDQURWO0FBRUVDLHVCQUFTO0FBQ1BZLHNCQUFNLElBREM7QUFFUEMsNEJBQVksS0FGTDtBQUdQQyxtQ0FBbUIsR0FIWjtBQUlQQyxzQkFBTTtBQUNKQyx5QkFBTyxTQURIO0FBRUpDLDJCQUFTLGtCQUFJQSxPQUZUO0FBR0pDLCtCQUFhO0FBSFQ7QUFKQztBQUZYLGFBbENjLENBRks7QUFBQTtBQUFBLG1CQW1EZnRCLE9BQU91QixRQUFQLENBQWdCdEIsT0FBaEIsQ0FuRGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBakI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFzREEsSUFBTXVCO0FBQUEsc0VBQWdCLGtCQUFNeEIsTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEMsbUJBRGMsR0FDSixDQUNkLEVBQUVDLHVCQUFGLEVBQXVCRSxTQUFTLEVBQUVSLGtCQUFGLEVBQWhDLEVBRGMsRUFFZCxFQUFFTSx3QkFBRixFQUZjLENBREk7QUFBQTtBQUFBLG1CQU1kRixPQUFPdUIsUUFBUCxDQUFnQnRCLE9BQWhCLENBTmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7MEVBU2U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVBHLGlCQUZPLEdBRUc7QUFDZHFCLG9CQUFRO0FBQ05DLCtCQUFpQjtBQURYLGFBRE07QUFJZEMsb0JBQVE7QUFDTlgsb0JBQU0sSUFEQTtBQUVOWSx3QkFBVTtBQUNSQyw0QkFBWXZDLE9BQU91QyxVQURYO0FBRVJ6Qix5QkFBUztBQUNQMEIsOEJBQVk7QUFETDtBQUZELGVBRko7QUFRTkMsdUJBQVM7QUFDUC9CLHdCQUFRO0FBREQ7QUFSSDtBQUpNLFdBRkg7OztBQW9CYixjQUFJVCxRQUFRLFNBQVosRUFBdUIsQ0FFdEI7O0FBRUtTLGdCQXhCTyxHQXdCRSxpQkFBV0ksT0FBWCxDQXhCRjtBQUFBO0FBQUEsaUJBMEJQTCxlQUFlQyxNQUFmLENBMUJPOztBQUFBO0FBQUE7QUFBQSxpQkEyQlB3QixjQUFjeEIsTUFBZCxDQTNCTzs7QUFBQTtBQUFBO0FBQUEsaUJBNkJQQSxPQUFPZ0MsVUFBUCxFQTdCTzs7QUFBQTtBQUFBLDRDQStCTmhDLE1BL0JNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICdoYXBpJ1xuaW1wb3J0IFJlbGlzaCBmcm9tICdyZWxpc2gnXG5cbmltcG9ydCBQa2cgZnJvbSAnLi4vcGFja2FnZSdcbmltcG9ydCBNb25nb1BsdWdpbiBmcm9tICcuL3BsdWdpbnMvbW9uZ28nXG5pbXBvcnQgU2VuYXRlUGx1Z2luIGZyb20gJy4vcGx1Z2lucy9zZW5hdGUnXG5cbmNvbnN0IHJlbGlzaCA9IFJlbGlzaCgpXG5cbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCdcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDBcbmNvbnN0IG1vbmdvVXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJXG5cbmlmKCFtb25nb1VyaSlcbiAgdGhyb3cgRXJyb3IoJ1BsZWFzZSBzZXQgYSBNT05HT19VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUnKVxuXG5jb25zdCBkZWZhdWx0UGx1Z2lucyA9IGFzeW5jIHNlcnZlciA9PiB7XG4gIFxuICBjb25zdCBwbHVnaW5zID0gW1xuICAgIHsgcGx1Z2luOiByZXF1aXJlKCdpbmVydCcpIH0sXG4gICAgeyBwbHVnaW46IHJlcXVpcmUoJ3Zpc2lvbicpIH0sXG4gICAgeyBwbHVnaW46IHJlcXVpcmUoJ2JsaXBwJykgfSxcbiAgICB7XG4gICAgICBwbHVnaW46IHJlcXVpcmUoJ2dvb2QnKSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgb3BzOiB7XG4gICAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgICAgIH0sXG4gICAgICAgIHJlcG9ydGVyczoge1xuICAgICAgICAgIGNvbnNvbGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kdWxlOiAnZ29vZC1zcXVlZXplJyxcbiAgICAgICAgICAgICAgbmFtZTogJ1NxdWVlemUnLFxuICAgICAgICAgICAgICBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIGxvZzogJyonLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiAnKicsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogJyonLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnKicsXG4gICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kdWxlOiAnZ29vZC1jb25zb2xlJyxcbiAgICAgICAgICAgICAgYXJnczogW3tcbiAgICAgICAgICAgICAgICBsb2c6ICcqJyxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogJyonLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6ICcqJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJyonLFxuICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIH0sICdzdGRvdXQnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwbHVnaW46IHJlcXVpcmUoJ2hhcGktc3dhZ2dlcicpLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBjb3JzOiB0cnVlLFxuICAgICAgICBqc29uRWRpdG9yOiBmYWxzZSxcbiAgICAgICAgZG9jdW1lbnRhdGlvblBhdGg6ICcvJyxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgIHRpdGxlOiAnRXhhbXBsZScsXG4gICAgICAgICAgdmVyc2lvbjogUGtnLnZlcnNpb24sXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdBbiBleGFtcGxlIGFwaScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIF1cbiAgXG4gIGF3YWl0IHNlcnZlci5yZWdpc3RlcihwbHVnaW5zKVxufVxuXG5jb25zdCBjdXN0b21QbHVnaW5zID0gYXN5bmMgc2VydmVyID0+IHtcbiAgY29uc3QgcGx1Z2lucyA9IFtcbiAgICB7IHBsdWdpbjogTW9uZ29QbHVnaW4sIG9wdGlvbnM6IHsgbW9uZ29VcmkgfSB9LFxuICAgIHsgcGx1Z2luOiBTZW5hdGVQbHVnaW4gfVxuICBdXG4gIFxuICBhd2FpdCBzZXJ2ZXIucmVnaXN0ZXIocGx1Z2lucylcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4ge1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcm91dGVyOiB7XG4gICAgICBpc0Nhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgIH0sXG4gICAgcm91dGVzOiB7XG4gICAgICBjb3JzOiB0cnVlLFxuICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgZmFpbEFjdGlvbjogcmVsaXNoLmZhaWxBY3Rpb24sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBhYm9ydEVhcmx5OiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGltZW91dDoge1xuICAgICAgICBzZXJ2ZXI6IDUwMDBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZW52ICE9PSAndGVzdGluZycpIHtcbiAgXG4gIH1cbiAgXG4gIGNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIob3B0aW9ucylcbiAgXG4gIGF3YWl0IGRlZmF1bHRQbHVnaW5zKHNlcnZlcilcbiAgYXdhaXQgY3VzdG9tUGx1Z2lucyhzZXJ2ZXIpXG4gIFxuICBhd2FpdCBzZXJ2ZXIuaW5pdGlhbGl6ZSgpXG4gIFxuICByZXR1cm4gc2VydmVyXG59XG4iXX0=