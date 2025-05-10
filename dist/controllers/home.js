"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// archivo para importar todos los controladores
const homeGet = (req, res) => {
    res.render("inicio", { data: "express" });
};
exports.default = homeGet;
