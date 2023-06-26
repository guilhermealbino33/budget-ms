"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
class Console {
    logInfo({ message, tag, additionalContent }) {
        console.log(JSON.stringify({
            message,
            severity: 'INFO',
            tag,
            additionalContent,
            config: this.config,
        }));
    }
    logDebug({ message, tag, transactionId, additionalContent }) {
        console.debug(JSON.stringify({
            message,
            severity: 'DEBUG',
            tag,
            transactionId,
            additionalContent,
            config: this.config,
        }));
    }
    logError({ message, tag, transactionId, error, additionalContent }) {
        console.error(JSON.stringify({
            message,
            severity: 'ERROR',
            tag,
            transactionId,
            error: error === null || error === void 0 ? void 0 : error.stack,
            additionalContent,
            config: this.config,
        }));
    }
    setConfig(obj) {
        this.config = obj;
    }
}
exports.Console = Console;
