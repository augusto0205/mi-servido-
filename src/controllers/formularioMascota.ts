import { Request, Response } from "express";
import { initDB } from "../database/database";

// archivo para importar todos los controladores
export const formularioMascota = (req: Request, res: Response) => {
    res.render("formularioMascota", { data: "express" });
}

export const formularioMascotaPost = async (
    req: Request,
    res: Response
  ): Promise<void> => {

// export const formularioMascotaPost = async (req: Request, res: Response) => {
    try {
        const { Nombre, Email, Comentario } = req.body;
        
        // Validación básica
        //if (!Nombre || !Email || !Comentario) {
        //    return res.status(400).json({ error: "Todos los campos son requeridos" });
        //}

        const db = await initDB();

        // Insertar en la base de datos
        const result = await db.run(
            'INSERT INTO contactos (nombre, email, comentario) VALUES (?, ?, ?)',
            [Nombre, Email, Comentario]
        );

        console.log('Registro insertado con ID:', result.lastID);

        res.status(201).json({ 
            success: true,
            message: "Mascota registrada exitosamente",
            id: result.lastID
          });
    } catch (error) {
        console.error("Error en formularioMascotaPost:", error);
        res.status(500).json({ 
          error: "Error interno del servidor",
          details: error instanceof Error ? error.message : 'Error desconocido'
        });

        // Aquí iría la lógica para guardar en la base de datos
        // Ejemplo con MongoDB:
        // const nuevaMascota = new Mascota({ nombre, especie, edad });
        // await nuevaMascota.save();
        
    }
}