import express from "express";
import { appRouter } from "../routers/index.js";


export class Server {
    constructor(config) {
        this.config = config || {};
        this.app = express();
        this.app.use(express.json());
        this.app.get("/ping", (req,res)=>{
            return res.status(200).json({message:"pong@@"})
        });
        this.app.use("/api", appRouter);
    
    }

    start() {
        const port = this.config.port || 8000;
        this.app.listen(port, (err) => {

            if (err) {
                console.error(`Failed to start server: ${err.message}`);
                process.exit(1); 
            } else {
                console.log(`Server is running at http://localhost:${port}`);
            }
        });
    }
}
