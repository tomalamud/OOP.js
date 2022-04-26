export default function LearningPath({
  name = requiredParam("name"), 
  courses = [],
}) {
  this.name = name;
  this.courses = courses;
}
