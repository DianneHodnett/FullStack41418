'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = require('./package');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  pkg: _package2.default,
  dependencies: ['mongo'],
  register: function register(server) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var db = server.plugins['mongo'].db;

    var senators = db.get('Senators');

    server.route({
      method: 'GET',
      path: '/v1/senators',
      options: {
        tags: ['api']
      },
      handler: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, h) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return senators.find({});

                case 2:
                  return _context.abrupt('return', _context.sent);

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function handler(_x2, _x3) {
          return _ref.apply(this, arguments);
        }

        return handler;
      }()
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL3NlbmF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJwa2ciLCJkZXBlbmRlbmNpZXMiLCJyZWdpc3RlciIsInNlcnZlciIsIm9wdGlvbnMiLCJkYiIsInBsdWdpbnMiLCJzZW5hdG9ycyIsImdldCIsInJvdXRlIiwibWV0aG9kIiwicGF0aCIsInRhZ3MiLCJoYW5kbGVyIiwicmVxdWVzdCIsImgiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7a0JBRWU7QUFDYkEsd0JBRGE7QUFFYkMsZ0JBQWMsQ0FBQyxPQUFELENBRkQ7QUFHYkMsVUFIYSxvQkFHSkMsTUFISSxFQUdrQjtBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLFFBQ3JCQyxFQURxQixHQUNkRixPQUFPRyxPQUFQLENBQWUsT0FBZixDQURjLENBQ3JCRCxFQURxQjs7QUFFN0IsUUFBTUUsV0FBV0YsR0FBR0csR0FBSCxDQUFPLFVBQVAsQ0FBakI7O0FBRUFMLFdBQU9NLEtBQVAsQ0FBYTtBQUNYQyxjQUFRLEtBREc7QUFFWEMsWUFBTSxjQUZLO0FBR1hQLGVBQVM7QUFDUFEsY0FBTSxDQUFDLEtBQUQ7QUFEQyxPQUhFO0FBTUxDLGFBTks7QUFBQSw0RkFNR0MsT0FOSCxFQU1ZQyxDQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU9JUixTQUFTUyxJQUFULENBQWMsRUFBZCxDQVBKOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLQUFiO0FBVUQ7QUFqQlksQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBrZyxcbiAgZGVwZW5kZW5jaWVzOiBbJ21vbmdvJ10sXG4gIHJlZ2lzdGVyKHNlcnZlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBkYiB9ID0gc2VydmVyLnBsdWdpbnNbJ21vbmdvJ11cbiAgICBjb25zdCBzZW5hdG9ycyA9IGRiLmdldCgnU2VuYXRvcnMnKVxuICAgIFxuICAgIHNlcnZlci5yb3V0ZSh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgcGF0aDogJy92MS9zZW5hdG9ycycsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHRhZ3M6IFsnYXBpJ11cbiAgICAgIH0sXG4gICAgICBhc3luYyBoYW5kbGVyKHJlcXVlc3QsIGgpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHNlbmF0b3JzLmZpbmQoe30pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19