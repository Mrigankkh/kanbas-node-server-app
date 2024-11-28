import * as assignmentsDao from "./dao.js";
export default function AssignmentsRoutes(app) {

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        try {
            const { assignmentId } = req.params;
            const status = await assignmentsDao.deleteAssignment(assignmentId);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    });

    app.put("/api/assignments", async (req, res) => {
        try {
            const { assignmentId } = req.params;
            const assignmentUpdates = req.body;
            const assignment = await assignmentsDao.createAssignment(assignmentUpdates);
            res.json(assignment);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    });
}