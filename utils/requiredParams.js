export function requiredParams(param) {
  throw new Error(param + " is required");
};