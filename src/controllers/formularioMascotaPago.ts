import { Request, Response } from "express";

// archivo para importar todos los controladores
const formularioMascotaPago = (req: Request, res: Response) => {
    res.render("formularioMascotaPago", { data: "express" });
}

export default formularioMascotaPago;