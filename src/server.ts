import { ODataServer, odata } from "odata-v4-server";
import { LegatoController } from "./legatoController";

@odata.controller(LegatoController, true)
export class LegatoODataServer extends ODataServer {
}