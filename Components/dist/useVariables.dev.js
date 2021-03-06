"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useVariable;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useVariable() {
  var endpoint = "https://restcountries.eu/rest/v2/all";

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      countries = _useState2[0],
      setCountries = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isButtonDisabled = _useState4[0],
      setIsButtonDisabled = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      showQuestions = _useState6[0],
      setShowQuestions = _useState6[1];

  var _useState7 = (0, _react.useState)("btn"),
      _useState8 = _slicedToArray(_useState7, 2),
      answerButtonClass = _useState8[0],
      setAnswerButtonClass = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      scores = _useState10[0],
      setScores = _useState10[1]; // Fetch the countries


  function fetchCountries() {
    var response, countryData;
    return regeneratorRuntime.async(function fetchCountries$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch(endpoint));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            countryData = _context.sent;
            setCountries(countryData);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  (0, _react.useEffect)(function () {
    fetchCountries();
  }, []); // Calculate the scores

  var handleIncrement = function handleIncrement() {
    setScores(function (prevScores) {
      return prevScores + 1;
    });
  }; // Get different random numbers from the array of countries 


  var randomNumber1 = Math.floor(Math.random() * countries.length);
  var randomNumber2 = Math.floor(Math.random() * countries.length);
  var randomNumber3 = Math.floor(Math.random() * countries.length);
  var randomNumber4 = Math.floor(Math.random() * countries.length);
  return {
    fetchCountries: fetchCountries,
    countries: countries,
    setCountries: setCountries,
    showQuestions: showQuestions,
    setShowQuestions: setShowQuestions,
    answerButtonClass: answerButtonClass,
    setAnswerButtonClass: setAnswerButtonClass,
    isButtonDisabled: isButtonDisabled,
    setIsButtonDisabled: setIsButtonDisabled,
    randomNumber1: randomNumber1,
    randomNumber2: randomNumber2,
    randomNumber3: randomNumber3,
    randomNumber4: randomNumber4,
    scores: scores,
    setScores: setScores,
    handleIncrement: handleIncrement
  };
}