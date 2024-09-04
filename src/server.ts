import * as http from "http";
import { app } from "./App";


const server = http.createServer( app );

server.listen(3333, ()=>{
    console.log("Servidor iniciado com sucesso na porta 3333");
});