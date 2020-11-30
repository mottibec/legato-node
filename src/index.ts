import { LegatoODataServer } from "./server";
import { Configuration } from "./config";

var config = Configuration.default();
LegatoODataServer.create(config.path, config.port);