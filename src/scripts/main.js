import { createAsparagus } from "./seeds/asparagus.js";
import {createPlan} from "./plan.js";
console.log("Welcome to the main module");

const yearlyPlan = createPlan();
console.log(yearlyPlan);
const asparagusSeed = createAsparagus();
console.log(asparagusSeed);
