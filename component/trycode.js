function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

const themes = {
  default: 'bg-gray-800 text-gray-800 dark:text-orange-300 dark:bg-orange-200',
  error: 'bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30',
  warning: 'bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30'
};
var Trycode = (({
  children,
  code_source = 'https://belajarcoding.vercel.app/',
}) => {
  return  /*#__PURE__*/React.createElement("div", {
    className: ""
  }, children, React.createElement("a", {
    href: code_source,
    className: "bg-indigo-500"
  },"Try it"));
});

module.exports = Trycode;