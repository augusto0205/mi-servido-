import { Router } from "express";
import homeGet from "../controllers/home";
import formulariMascota from "../controllers/formularioMascota";
import formularioMascotaPago from "../controllers/formularioMascotaPago";


const router: Router = Router();

router.get("/", homeGet);

router.get("/formulario-mascota", formulariMascota);

router.get("/formulario-mascotaPago", formularioMascotaPago);

export default router;


