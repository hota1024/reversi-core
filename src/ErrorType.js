"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["CanNotPutHere"] = 0] = "CanNotPutHere";
    ErrorType[ErrorType["NotYourTurn"] = 1] = "NotYourTurn";
    ErrorType[ErrorType["Pass"] = 2] = "Pass";
})(ErrorType || (ErrorType = {}));
exports.default = ErrorType;
