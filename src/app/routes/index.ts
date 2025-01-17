import express from 'express';
import { AuthRouter } from '../module/auth/auth.route';
import { PageRoutes } from '../module/company/page/page.route';
import { JobPostRouter } from '../module/job/job.route';
import { ProfileRoutes } from '../module/profile/profile.route';
import { SkillsRoutes } from '../module/skills/skills.route';
import { SocialPlatformRoutes } from '../module/socialPlatform/socialPlatform.route';
import { CategoryRouter } from '../module/category/category.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/profile',
    route: ProfileRoutes,
  },
  {
    path: '/social-platform',
    route: SocialPlatformRoutes,
  },
  {
    path: '/job-posts',
    route: JobPostRouter,
  },
  {
    path: '/page',
    route: PageRoutes,
  },
  {
    path: '/skills',
    route: SkillsRoutes,
  },
  {
    path: '/categories',
    route: CategoryRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
