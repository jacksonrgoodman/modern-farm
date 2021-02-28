// import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { usePlants } from "./field.js";
console.log("Welcome to the main module");

// const yearlyPlan = createPlan();
// console.log(yearlyPlan);
const asparagusSeed = createAsparagus();
console.log(usePlants(asparagusSeed));
console.log(Array.isArray(usePlants(asparagusSeed)));