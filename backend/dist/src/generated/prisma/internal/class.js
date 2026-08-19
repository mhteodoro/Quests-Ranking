"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.9.1",
    "engineVersion": "e922089b7d7502aff4249d5da3420f6fa55fc6ad",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Player {\n  id           Int                 @id @default(autoincrement())\n  name         String\n  email        String              @unique\n  passwordHash String\n  createdAt    DateTime            @default(now())\n  completions  MissionCompletion[]\n}\n\nmodel Mission {\n  id          Int                 @id @default(autoincrement())\n  title       String              @unique\n  description String\n  points      Int\n  createdAt   DateTime            @default(now())\n  completions MissionCompletion[]\n}\n\nmodel MissionCompletion {\n  playerId    Int\n  missionId   Int\n  completedAt DateTime @default(now())\n\n  player  Player  @relation(fields: [playerId], references: [id], onDelete: Cascade)\n  mission Mission @relation(fields: [missionId], references: [id], onDelete: Cascade)\n\n  @@id([playerId, missionId])\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Player\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"completions\",\"kind\":\"object\",\"type\":\"MissionCompletion\",\"relationName\":\"MissionCompletionToPlayer\"}],\"dbName\":null},\"Mission\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"points\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"completions\",\"kind\":\"object\",\"type\":\"MissionCompletion\",\"relationName\":\"MissionToMissionCompletion\"}],\"dbName\":null},\"MissionCompletion\":{\"fields\":[{\"name\":\"playerId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"missionId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"player\",\"kind\":\"object\",\"type\":\"Player\",\"relationName\":\"MissionCompletionToPlayer\"},{\"name\":\"mission\",\"kind\":\"object\",\"type\":\"Mission\",\"relationName\":\"MissionToMissionCompletion\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"player\",\"completions\",\"_count\",\"mission\",\"Player.findUnique\",\"Player.findUniqueOrThrow\",\"Player.findFirst\",\"Player.findFirstOrThrow\",\"Player.findMany\",\"data\",\"Player.createOne\",\"Player.createMany\",\"Player.createManyAndReturn\",\"Player.updateOne\",\"Player.updateMany\",\"Player.updateManyAndReturn\",\"create\",\"update\",\"Player.upsertOne\",\"Player.deleteOne\",\"Player.deleteMany\",\"having\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Player.groupBy\",\"Player.aggregate\",\"Mission.findUnique\",\"Mission.findUniqueOrThrow\",\"Mission.findFirst\",\"Mission.findFirstOrThrow\",\"Mission.findMany\",\"Mission.createOne\",\"Mission.createMany\",\"Mission.createManyAndReturn\",\"Mission.updateOne\",\"Mission.updateMany\",\"Mission.updateManyAndReturn\",\"Mission.upsertOne\",\"Mission.deleteOne\",\"Mission.deleteMany\",\"Mission.groupBy\",\"Mission.aggregate\",\"MissionCompletion.findUnique\",\"MissionCompletion.findUniqueOrThrow\",\"MissionCompletion.findFirst\",\"MissionCompletion.findFirstOrThrow\",\"MissionCompletion.findMany\",\"MissionCompletion.createOne\",\"MissionCompletion.createMany\",\"MissionCompletion.createManyAndReturn\",\"MissionCompletion.updateOne\",\"MissionCompletion.updateMany\",\"MissionCompletion.updateManyAndReturn\",\"MissionCompletion.upsertOne\",\"MissionCompletion.deleteOne\",\"MissionCompletion.deleteMany\",\"MissionCompletion.groupBy\",\"MissionCompletion.aggregate\",\"AND\",\"OR\",\"NOT\",\"playerId\",\"missionId\",\"completedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"id\",\"title\",\"description\",\"points\",\"createdAt\",\"contains\",\"startsWith\",\"endsWith\",\"every\",\"some\",\"none\",\"name\",\"email\",\"passwordHash\",\"playerId_missionId\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "pAEhMAkEAABgACA_AABiADBAAAALABBBAABiADBNAgAAAAFRQABfACFYAQBeACFZAQAAAAFaAQBeACEBAAAAAQAgCAMAAGUAIAYAAGYAID8AAGQAMEAAAAMAEEEAAGQAMEICAF0AIUMCAF0AIURAAF8AIQIDAACXAQAgBgAAmAEAIAkDAABlACAGAABmACA_AABkADBAAAADABBBAABkADBCAgBdACFDAgBdACFEQABfACFbAABjACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAEAAAADACABAAAAAwAgAQAAAAEAIAkEAABgACA_AABiADBAAAALABBBAABiADBNAgBdACFRQABfACFYAQBeACFZAQBeACFaAQBeACEBBAAAhgEAIAMAAAALACABAAAMADACAAABACADAAAACwAgAQAADAAwAgAAAQAgAwAAAAsAIAEAAAwAMAIAAAEAIAYEAACWAQAgTQIAAAABUUAAAAABWAEAAAABWQEAAAABWgEAAAABAQwAABAAIAVNAgAAAAFRQAAAAAFYAQAAAAFZAQAAAAFaAQAAAAEBDAAAEgAwAQwAABIAMAYEAACMAQAgTQIAbQAhUUAAbAAhWAEAdwAhWQEAdwAhWgEAdwAhAgAAAAEAIAwAABUAIAVNAgBtACFRQABsACFYAQB3ACFZAQB3ACFaAQB3ACECAAAACwAgDAAAFwAgAgAAAAsAIAwAABcAIAMAAAABACATAAAQACAUAAAVACABAAAAAQAgAQAAAAsAIAUFAACHAQAgGQAAiAEAIBoAAIsBACAbAACKAQAgHAAAiQEAIAg_AABhADBAAAAeABBBAABhADBNAgBRACFRQABSACFYAQBZACFZAQBZACFaAQBZACEDAAAACwAgAQAAHQAwGAAAHgAgAwAAAAsAIAEAAAwAMAIAAAEAIAkEAABgACA_AABcADBAAAAkABBBAABcADBNAgAAAAFOAQAAAAFPAQBeACFQAgBdACFRQABfACEBAAAAIQAgAQAAACEAIAkEAABgACA_AABcADBAAAAkABBBAABcADBNAgBdACFOAQBeACFPAQBeACFQAgBdACFRQABfACEBBAAAhgEAIAMAAAAkACABAAAlADACAAAhACADAAAAJAAgAQAAJQAwAgAAIQAgAwAAACQAIAEAACUAMAIAACEAIAYEAACFAQAgTQIAAAABTgEAAAABTwEAAAABUAIAAAABUUAAAAABAQwAACkAIAVNAgAAAAFOAQAAAAFPAQAAAAFQAgAAAAFRQAAAAAEBDAAAKwAwAQwAACsAMAYEAAB4ACBNAgBtACFOAQB3ACFPAQB3ACFQAgBtACFRQABsACECAAAAIQAgDAAALgAgBU0CAG0AIU4BAHcAIU8BAHcAIVACAG0AIVFAAGwAIQIAAAAkACAMAAAwACACAAAAJAAgDAAAMAAgAwAAACEAIBMAACkAIBQAAC4AIAEAAAAhACABAAAAJAAgBQUAAHIAIBkAAHMAIBoAAHYAIBsAAHUAIBwAAHQAIAg_AABYADBAAAA3ABBBAABYADBNAgBRACFOAQBZACFPAQBZACFQAgBRACFRQABSACEDAAAAJAAgAQAANgAwGAAANwAgAwAAACQAIAEAACUAMAIAACEAIAEAAAAFACABAAAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgBQMAAHAAIAYAAHEAIEICAAAAAUMCAAAAAURAAAAAAQEMAAA_ACADQgIAAAABQwIAAAABREAAAAABAQwAAEEAMAEMAABBADAFAwAAbgAgBgAAbwAgQgIAbQAhQwIAbQAhREAAbAAhAgAAAAUAIAwAAEQAIANCAgBtACFDAgBtACFEQABsACECAAAAAwAgDAAARgAgAgAAAAMAIAwAAEYAIAMAAAAFACATAAA_ACAUAABEACABAAAABQAgAQAAAAMAIAUFAABnACAZAABoACAaAABrACAbAABqACAcAABpACAGPwAAUAAwQAAATQAQQQAAUAAwQgIAUQAhQwIAUQAhREAAUgAhAwAAAAMAIAEAAEwAMBgAAE0AIAMAAAADACABAAAEADACAAAFACAGPwAAUAAwQAAATQAQQQAAUAAwQgIAUQAhQwIAUQAhREAAUgAhDQUAAFQAIBkAAFcAIBoAAFQAIBsAAFQAIBwAAFQAIEUCAAAAAUYCAAAABEcCAAAABEgCAAAAAUkCAAAAAUoCAAAAAUsCAAAAAUwCAFYAIQsFAABUACAbAABVACAcAABVACBFQAAAAAFGQAAAAARHQAAAAARIQAAAAAFJQAAAAAFKQAAAAAFLQAAAAAFMQABTACELBQAAVAAgGwAAVQAgHAAAVQAgRUAAAAABRkAAAAAER0AAAAAESEAAAAABSUAAAAABSkAAAAABS0AAAAABTEAAUwAhCEUCAAAAAUYCAAAABEcCAAAABEgCAAAAAUkCAAAAAUoCAAAAAUsCAAAAAUwCAFQAIQhFQAAAAAFGQAAAAARHQAAAAARIQAAAAAFJQAAAAAFKQAAAAAFLQAAAAAFMQABVACENBQAAVAAgGQAAVwAgGgAAVAAgGwAAVAAgHAAAVAAgRQIAAAABRgIAAAAERwIAAAAESAIAAAABSQIAAAABSgIAAAABSwIAAAABTAIAVgAhCEUIAAAAAUYIAAAABEcIAAAABEgIAAAAAUkIAAAAAUoIAAAAAUsIAAAAAUwIAFcAIQg_AABYADBAAAA3ABBBAABYADBNAgBRACFOAQBZACFPAQBZACFQAgBRACFRQABSACEOBQAAVAAgGwAAWwAgHAAAWwAgRQEAAAABRgEAAAAERwEAAAAESAEAAAABSQEAAAABSgEAAAABSwEAAAABTAEAWgAhUgEAAAABUwEAAAABVAEAAAABDgUAAFQAIBsAAFsAIBwAAFsAIEUBAAAAAUYBAAAABEcBAAAABEgBAAAAAUkBAAAAAUoBAAAAAUsBAAAAAUwBAFoAIVIBAAAAAVMBAAAAAVQBAAAAAQtFAQAAAAFGAQAAAARHAQAAAARIAQAAAAFJAQAAAAFKAQAAAAFLAQAAAAFMAQBbACFSAQAAAAFTAQAAAAFUAQAAAAEJBAAAYAAgPwAAXAAwQAAAJAAQQQAAXAAwTQIAXQAhTgEAXgAhTwEAXgAhUAIAXQAhUUAAXwAhCEUCAAAAAUYCAAAABEcCAAAABEgCAAAAAUkCAAAAAUoCAAAAAUsCAAAAAUwCAFQAIQtFAQAAAAFGAQAAAARHAQAAAARIAQAAAAFJAQAAAAFKAQAAAAFLAQAAAAFMAQBbACFSAQAAAAFTAQAAAAFUAQAAAAEIRUAAAAABRkAAAAAER0AAAAAESEAAAAABSUAAAAABSkAAAAABS0AAAAABTEAAVQAhA1UAAAMAIFYAAAMAIFcAAAMAIAg_AABhADBAAAAeABBBAABhADBNAgBRACFRQABSACFYAQBZACFZAQBZACFaAQBZACEJBAAAYAAgPwAAYgAwQAAACwAQQQAAYgAwTQIAXQAhUUAAXwAhWAEAXgAhWQEAXgAhWgEAXgAhAkICAAAAAUMCAAAAAQgDAABlACAGAABmACA_AABkADBAAAADABBBAABkADBCAgBdACFDAgBdACFEQABfACELBAAAYAAgPwAAYgAwQAAACwAQQQAAYgAwTQIAXQAhUUAAXwAhWAEAXgAhWQEAXgAhWgEAXgAhXAAACwAgXQAACwAgCwQAAGAAID8AAFwAMEAAACQAEEEAAFwAME0CAF0AIU4BAF4AIU8BAF4AIVACAF0AIVFAAF8AIVwAACQAIF0AACQAIAAAAAAAAWFAAAAAAQVhAgAAAAFnAgAAAAFoAgAAAAFpAgAAAAFqAgAAAAEFEwAAnQEAIBQAAKMBACBeAACeAQAgXwAAogEAIGQAAAEAIAUTAACbAQAgFAAAoAEAIF4AAJwBACBfAACfAQAgZAAAIQAgAxMAAJ0BACBeAACeAQAgZAAAAQAgAxMAAJsBACBeAACcAQAgZAAAIQAgAAAAAAABYQEAAAABCxMAAHkAMBQAAH4AMF4AAHoAMF8AAHsAMGAAAHwAIGEAAH0AMGIAAH0AMGMAAH0AMGQAAH0AMGUAAH8AMGYAAIABADADAwAAcAAgQgIAAAABREAAAAABAgAAAAUAIBMAAIQBACADAAAABQAgEwAAhAEAIBQAAIMBACABDAAAmgEAMAkDAABlACAGAABmACA_AABkADBAAAADABBBAABkADBCAgBdACFDAgBdACFEQABfACFbAABjACACAAAABQAgDAAAgwEAIAIAAACBAQAgDAAAggEAIAY_AACAAQAwQAAAgQEAEEEAAIABADBCAgBdACFDAgBdACFEQABfACEGPwAAgAEAMEAAAIEBABBBAACAAQAwQgIAXQAhQwIAXQAhREAAXwAhAkICAG0AIURAAGwAIQMDAABuACBCAgBtACFEQABsACEDAwAAcAAgQgIAAAABREAAAAABBBMAAHkAMF4AAHoAMGAAAHwAIGQAAH0AMAAAAAAAAAsTAACNAQAwFAAAkQEAMF4AAI4BADBfAACPAQAwYAAAkAEAIGEAAH0AMGIAAH0AMGMAAH0AMGQAAH0AMGUAAJIBADBmAACAAQAwAwYAAHEAIEMCAAAAAURAAAAAAQIAAAAFACATAACVAQAgAwAAAAUAIBMAAJUBACAUAACUAQAgAQwAAJkBADACAAAABQAgDAAAlAEAIAIAAACBAQAgDAAAkwEAIAJDAgBtACFEQABsACEDBgAAbwAgQwIAbQAhREAAbAAhAwYAAHEAIEMCAAAAAURAAAAAAQQTAACNAQAwXgAAjgEAMGAAAJABACBkAAB9ADABBAAAhgEAIAEEAACGAQAgAkMCAAAAAURAAAAAAQJCAgAAAAFEQAAAAAEFTQIAAAABTgEAAAABTwEAAAABUAIAAAABUUAAAAABAgAAACEAIBMAAJsBACAFTQIAAAABUUAAAAABWAEAAAABWQEAAAABWgEAAAABAgAAAAEAIBMAAJ0BACADAAAAJAAgEwAAmwEAIBQAAKEBACAHAAAAJAAgDAAAoQEAIE0CAG0AIU4BAHcAIU8BAHcAIVACAG0AIVFAAGwAIQVNAgBtACFOAQB3ACFPAQB3ACFQAgBtACFRQABsACEDAAAACwAgEwAAnQEAIBQAAKQBACAHAAAACwAgDAAApAEAIE0CAG0AIVFAAGwAIVgBAHcAIVkBAHcAIVoBAHcAIQVNAgBtACFRQABsACFYAQB3ACFZAQB3ACFaAQB3ACECBAYCBQAFAgMAAQYAAwIEBwIFAAQBBAgAAQQJAAAAAAUFAAoZAAsaAAwbAA0cAA4AAAAAAAUFAAoZAAsaAAwbAA0cAA4AAAUFABMZABQaABUbABYcABcAAAAAAAUFABMZABQaABUbABYcABcCAwABBgADAgMAAQYAAwUFABwZAB0aAB4bAB8cACAAAAAAAAUFABwZAB0aAB4bAB8cACAHAgEICgEJDQEKDgELDwENEQEOEwYPFAcQFgERGAYSGQgVGgEWGwEXHAYdHwkeIA8fIgMgIwMhJgMiJwMjKAMkKgMlLAYmLRAnLwMoMQYpMhEqMwMrNAMsNQYtOBIuORgvOgIwOwIxPAIyPQIzPgI0QAI1QgY2Qxk3RQI4RwY5SBo6SQI7SgI8SwY9Ths-TyE"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map