"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("colors"));
const success = (text) => {
    return console.log(colors_1.default.green(text));
};
const warning = (text) => {
    return console.log(colors_1.default.yellow(text));
};
const error = (text) => {
    return console.log(colors_1.default.red(text));
};
const info = (text) => {
    return console.log(colors_1.default.cyan(text));
};
const log = {
    success,
    warning,
    error,
    info,
};
exports.default = log;
