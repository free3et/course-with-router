import { redirect } from "react-router-dom";

export const ROUTES = {
  lessons: "/course-with-router/",
  lesson: (id) =>
    id
      ? `/course-with-router/lesson/${id}`
      : "/course-with-router/lesson/:lessonId",
};
