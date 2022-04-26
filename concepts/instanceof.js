import { requiredParams } from '../utils/requiredParams.js';
import LearningPath from '../modules/LearningPathsFactory.js';

function Student({
    name = requiredParams("name"), 
    email = requiredParams("email"), 
    learningPaths = [],
  } = {}) {
  this.name = name;
  this.email = email;
  if (Array.isArray(learningPaths)) {
    this.learningPaths = [];

    for (learningPathIndex in learningPaths) {
      if (learningPaths[learningPathIndex] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[learningPathIndex]);
      }
    }
  }
}

const escuelaWebDev = new LearningPath({ name: "Escuela Web Dev"});
const escuelaData = new LearningPath({ name: "Escuela Data Science"});
const juan = new Student({ email: "juanito@frijoles.co", name: "Juanito", learningPaths: [escuelaData,escuelaWebDev] });