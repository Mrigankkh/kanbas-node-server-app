import model from "./model.js";

export const findAssignmentsForCourse = async (courseId) => {
  return await model.find({ course: courseId });
};

export const createAssignment = async (assignment) => {
    delete assignment._id;
  return await model.create(assignment);
}

export const deleteAssignment = async (assignmentId) => {
  return await model.deleteOne({ _id: assignmentId });  
}

export const updateAssignment = async (assignmentId, assignmentUpdates) => {
  return await  model.updateOne({ _id: assignmentId }, assignmentUpdates);
}