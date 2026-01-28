import { webcrypto } from "node:crypto";

Object.defineProperty(global.self, "crypto", {
  value: webcrypto,
});
