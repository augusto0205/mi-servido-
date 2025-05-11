import { Router } from "express";
import homeGet from "../controllers/home";
import { 
    formularioMascota,
    formularioMascotaPost 
  } from "../controllers/formularioMascota";

import { 
    formularioMascotaPago, 
    formularioMascotaPagoPost 
  } from "../controllers/formularioMascotaPago";


const router: Router = Router();

router.get("/", homeGet);

router.get("/formularioMascota", formularioMascota);

router.post("/formularioMascota", formularioMascotaPost);

router.get("/formularioMascotaPago", formularioMascotaPago);

router.post("/formularioMascotaPago", formularioMascotaPagoPost);




export default router;


