import e from "express";
import express from "express";
import { authController } from "./controllers/authController";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { favoriteController } from "./controllers/favoritesController";
import { likesController } from "./controllers/likesController";
import { usersController } from "./controllers/usersController";
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth";

const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/categories", ensureAuth, categoriesController.index);
router.get("/categories/:id", ensureAuth, categoriesController.show);

router.get("/courses/featured", ensureAuth, coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/popular", ensureAuth, coursesController.popular);
router.get("/courses/search", ensureAuth, coursesController.search);
router.get("/courses/:id", ensureAuth, coursesController.show);

router.get("/episodes/stream", ensureAuthViaQuery, episodesController.stream);

router.get(
  "/episodes/:id/watchTime",
  ensureAuth,
  episodesController.getWatchTime
);
router.post(
  "/episodes/:id/watchTime",
  ensureAuth,
  episodesController.setWatchTime
);

router.get("/favorites", ensureAuth, favoriteController.index);
router.post("/favorites", ensureAuth, favoriteController.save);
router.delete("/favorites/:id", ensureAuth, favoriteController.delete);

router.post("/likes", ensureAuth, likesController.save);
router.delete("/likes/:id", ensureAuth, likesController.delete);

router.get("/users/current", ensureAuth, usersController.show);
router.get("/users/current/watching", ensureAuth, usersController.watching);
router.put("/users/current", ensureAuth, usersController.update);
router.put(
  "/users/current/password",
  ensureAuth,
  usersController.updatePassword
);

export { router };
