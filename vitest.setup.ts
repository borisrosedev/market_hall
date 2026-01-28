import { webcrypto } from "node:crypto";

Object.defineProperty(global.self, "crypto", {
  value: webcrypto,
});
if (typeof global.crypto === "undefined") {
  global.crypto = webcrypto as any;
}
