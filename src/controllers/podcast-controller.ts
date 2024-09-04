import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpsodes } from "../services/listEpsodesServes";
import { serviceFilterEpsodes } from "../services/filterEpsodesServices";
import { StatusCode } from "../utils/status";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpsodes();
    
    res.writeHead(StatusCode.OK, {"Content-Type": "application/json"});
    res.end(
      JSON.stringify(content)
    )
}

export const getFilterEpsodes = async (req: IncomingMessage, res: ServerResponse) => {

  const queryString = req.url?.split("?p=")[1] ?? ""

  const content = await serviceFilterEpsodes(queryString);

  res.writeHead(StatusCode.OK, {"Content-Type": "application/json"});
    res.end(
      JSON.stringify(content)
    )
}
