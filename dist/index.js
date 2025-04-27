"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Limpia la consola
const console_clear_1 = __importDefault(require("console-clear"));
(0, console_clear_1.default)();
// Importaciones principales
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const _fn_1 = require("@fn");
const _router_1 = require("@router");
// Configuración de la aplicación
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Middleware básicos
app.use(express_1.default.static(path_1.default.join(__dirname, "./src/public")));
// Usa cors como middleware
const CORS_URL = process.env.CORS_URL || "*";
app.use((0, cors_1.default)({ origin: CORS_URL }));
// Middleware para analizar el cuerpo de las solicitudes
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set("views", path_1.default.join(__dirname, "./src/views"));
// Configuración de rutas
app.use("/", _router_1.inicioRouter);
// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("¡Algo salió mal!");
});
// Iniciar el servidor
app.listen(PORT, () => {
    _fn_1.log.success(`El servidor está corriendo en http://localhost:${PORT}`);
});
