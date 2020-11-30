export class Configuration {
    port: number | undefined;
    path: string | undefined;
    constructor(port:number, path:string){
        this.port = port;
        this.path = path;
    }
    static default(){
        return new Configuration(3000, "/tables")
    }
}