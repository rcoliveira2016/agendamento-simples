import { Router } from "express";

import { Request, Response } from "express";

const router: Router = Router()

//Routes
router.get("/", (_, res)=>{
    res.json({"teste":"huehuehue"})
});

export { router };