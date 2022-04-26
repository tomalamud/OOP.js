// this next function, will allow us to debug
// if the obloigatory artibutes are passing to
// in the creation of the object
function requiredParams(param) {
  throw new Error(param + " is required");
};

function createStudent({
  name = requiredParams("name"),
  email = requiredParams("email"),
  age,
  socialMedia = [], // Array default
  approvedCourses = [],
  learningPath = [],
}) {
  return {
    name,
    age,
    email,
    socialMedia,
    approvedCourses,
    learningPath,
  }
}

const arturito = createStudent({
  name: "Arturo",
  age: 16
})