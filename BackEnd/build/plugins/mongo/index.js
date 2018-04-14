'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = require('./package');

var _package2 = _interopRequireDefault(_package);

var _monk = require('monk');

var _monk2 = _interopRequireDefault(_monk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  pkg: _package2.default,
  register: function register(server) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var db = (0, _monk2.default)(options.mongoUri);

    server.expose({
      db: db
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbHVnaW5zL21vbmdvL2luZGV4LmpzIl0sIm5hbWVzIjpbInBrZyIsInJlZ2lzdGVyIiwic2VydmVyIiwib3B0aW9ucyIsImRiIiwibW9uZ29VcmkiLCJleHBvc2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiQSx3QkFEYTtBQUViQyxVQUZhLG9CQUVKQyxNQUZJLEVBRWtCO0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUM3QixRQUFNQyxLQUFLLG9CQUFLRCxRQUFRRSxRQUFiLENBQVg7O0FBRUFILFdBQU9JLE1BQVAsQ0FBYztBQUNaRjtBQURZLEtBQWQ7QUFJRDtBQVRZLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZSdcbmltcG9ydCBNb25rIGZyb20gJ21vbmsnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGtnLFxuICByZWdpc3RlcihzZXJ2ZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRiID0gTW9uayhvcHRpb25zLm1vbmdvVXJpKVxuICAgIFxuICAgIHNlcnZlci5leHBvc2Uoe1xuICAgICAgZGJcbiAgICB9KVxuICAgIFxuICB9XG59XG4iXX0=