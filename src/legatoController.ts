import { odata, ODataController, ODataQuery } from "odata-v4-server";
import {createFilter} from "./CDSQueryBuilder";
import {Execute} from "./CDSApiService";

export class LegatoController extends ODataController {
    @odata.GET
    async find(@odata.filter filter:ODataQuery){
        const cdsFilter = createFilter(filter);
        const response = await Execute(cdsFilter);
        return response;
    }
}