import { cleanVisualizationService,cleanlogosService, relaunchLGService, shutdownLGService, rebootLGService, cleanBalloonService, stopOrbitService, executeOrbitService} from "../services/index.js";
export class LgConnectionController{
    executeOrbit = async(req,res)=>{
        let {host,sshPort,username,password} = req.body;
        let  connections = await executeOrbitService(host,sshPort,username,password);
        return res.status(200).json(connections);
    }
    cleanVisualization = async(req,res)=>{
        let {host, sshPort, username, password, command} = req.body;
        let response = await cleanVisualizationService(host, sshPort, username, password, command);
        return res.status(200).json(response);
    }

    cleanlogos = async()=>{
        let {host, sshPort, username, password} = req.body;
        let response = await cleanlogosService(host, sshPort, username, password);
        return res.status(200).json(response);
    }
    relaunchLG = async()=>{
        let {host, sshPort, username, password, numberofrigs} = req.body;
        let response = await relaunchLGService(host, sshPort, username, password, numberofrigs);
        return res.status(200).json(response);
    }
    shutdownLG = async()=>{
        let {host, sshPort, username, password, numberofrigs} = req.body;
        let response = await shutdownLGService(host, sshPort, username, password, numberofrigs);
        return res.status(200).json(response);
    }
    rebootLG = async()=>{
        let {host, sshPort, username, password, numberofrigs} = req.body;
        let response = await rebootLGService(host, sshPort, username, password, numberofrigs);
        return res.status(200).json(response);
    }
    stopOrbit = async()=>{
        let {host,sshPort,username,password} = req.body;
        let response = await stopOrbitService(host,sshPort,username,password);
        return res.status(200).json(response);
    }
    cleanBalloon = async()=>{
        let {host,sshPort,username,password} = req.body;
        let response = await cleanBalloonService(host,sshPort,username,password);
        return res.status(200).json(response);
    }
}
