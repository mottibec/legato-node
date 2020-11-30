import { LegatoODataServer } from "./server";
import { Configuration } from "./config";

var config = Configuration.default();
const server = LegatoODataServer.create(config.path, config.port);