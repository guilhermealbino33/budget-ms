"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const Console_1 = require("./impl/Console");
const providers = {
    console: tsyringe_1.container.resolve(Console_1.Console),
};
tsyringe_1.container.registerInstance('LoggingProvider', providers.console);
