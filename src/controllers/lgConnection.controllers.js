import { cleanVisualizationService,cleanlogosService, relaunchLGService, shutdownLGService, rebootLGService, cleanBalloonService, stopOrbitService, executeOrbitService} from "../services/index.js";
export class LgConnectionController{
    executeOrbit = async(req,res)=>{
        const {host,sshPort,username,password} = req.body;

        try {
            const  connections = await executeOrbitService(host,sshPort,username,password);
            return res.status(200).json(connections);
        } catch (
            error
        ) {
            throw new Error(error)
        }
       
    }
    cleanVisualization = async(req,res)=>{
        const {host, sshPort, username, password, command} = req.body;
        try {
            const response = await cleanVisualizationService(host, sshPort, username, password, command);
            return res.status(200).json(response);
        } catch (
            error
        ) {
            
        }
       
    }

    cleanlogos = async()=>{
        const {host, sshPort, username, password} = req.body;
        const response = await cleanlogosService(host, sshPort, username, password);
        return res.status(200).json(response);
    }
    relaunchLG = async()=>{
        const {host, sshPort, username, password, numberofrigs} = req.body;
        const response = await relaunchLGService(host, sshPort, username, password, numberofrigs);
        return res.status(200).json(response);
    }
    shutdownLG = async()=>{
        const {host, sshPort, username, password, numberofrigs} = req.body;
        const response = await shutdownLGService(host, sshPort, username, password, numberofrigs);
        return res.status(200).json(response);
    }
    rebootLG = async()=>{
        const {host, sshPort, username, password, numberofrigs} = req.body;
        const response = await rebootLGService(host, sshPort, username, password, numberofrigs);
        return res.status(200).json(response);
    }
    stopOrbit = async()=>{
        const {host,sshPort,username,password} = req.body;
        const response = await stopOrbitService(host,sshPort,username,password);
        return res.status(200).json(response);
    }
    cleanBalloon = async()=>{
        const {host,sshPort,username,password} = req.body;
        const response = await cleanBalloonService(host,sshPort,username,password);
        return res.status(200).json(response);
    }
}
