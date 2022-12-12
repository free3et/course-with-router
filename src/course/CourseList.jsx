import styled from "@emotion/styled";
import { Lesson } from "./Lesson.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes";

const LessonCard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 450px;
  margin: 20px;
  margin-top: 32px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-top: 10px solid #7f78ac;
  border-radius: 15px;
  background-color: #3e3b3b;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-decoration: none;

  a {
    display: inline-block;
    box-sizing: border-box;
    margin: 10px auto 15px;
    padding: 0.6em 1.2em;
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: #646cff;
    color: #ffffff;
    font-family: inherit;
    font-weight: 500;
    font-size: 1.2em;
    cursor: pointer;
    transition: border, background-color 0.3s;

    &:hover {
      border: 1px solid #4b1549;
      background-color: #60226f;
      color: #ffffff;
    }
  }

  h3 {
    margin: 1em 0;
  }
`;
export const CourseList = ({ initialCouses }) => {
  if (initialCouses === undefined) return;
  return (
    <LessonCard className="lesson_card">
      {Object.values(initialCouses).map((lesson, index) =>
        lesson.hidden ? null : (
          <Card key={index}>
            <NavLink className="read-more" to={ROUTES.lesson(lesson.name)}>
              To card
            </NavLink>

            <h2>Title: {lesson.title}</h2>
            <h3>Type: {lesson.type}</h3>
          </Card>
        )
      )}
    </LessonCard>
  );
};
