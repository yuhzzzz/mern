import {
  createJob,
  getAllJobs,
  deleteJob,
  updateJob,
  showStats,
} from "../controller/jobController.js";

import express from "express";
const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);

router.route("/stats").post(showStats);

router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
