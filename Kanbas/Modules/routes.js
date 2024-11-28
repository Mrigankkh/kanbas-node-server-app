import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
  app.delete("/api/modules/:moduleId", async (req, res) => {
    try {
      const { moduleId } = req.params;
      const status = await modulesDao.deleteModule(moduleId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

  app.put("/api/modules/:moduleId", async (req, res) => {
    try {
      const { moduleId } = req.params;
      const moduleUpdates = req.body;
      const status = await modulesDao.updateModule(moduleId, moduleUpdates);
      res.sendStatus(status);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });
}
