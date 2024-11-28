import model from "./model.js";
export function findAllCourses() {
  return model.find();
}
export function findCoursesForEnrolledUser(userId) {
  return model.findById(userId);
}
export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, courseUpdates);
}
export function createCourse(course) {
  delete course._id;
  console.log('tring to create course', course);
  return model.create(course);
}
