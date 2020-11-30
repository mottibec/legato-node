import { odata, ODataController, ODataQuery, query } from "odata-v4-server";
import { createFilter, createQuery } from "./CDSQueryBuilder";
import { Execute } from "./CDSApiService";

export class LegatoController extends ODataController {
    constructor(){
        super();
        this.entitySetName = "TEST";
    }

    @odata.GET
    async find(@odata.query query: ODataQuery) {
        const cdsQuery = createQuery(query);
        console.log("cdsQuery", cdsQuery);
        const response = await Execute(cdsQuery);
        return response;
    }
}