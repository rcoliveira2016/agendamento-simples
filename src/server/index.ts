import express from "express";
import  'dotenv/config'
import { router } from "@/server/router";


export class Server{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware(){
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: true}))
  }

  private router(){
    this.server.use(router);
  }

  public start(){
    this.server.listen(3000, ()=>{
        console.log("Server listening on PORT");
        console.log("http://localhost:3000");
        console.log(process.env)
    })
  }
}