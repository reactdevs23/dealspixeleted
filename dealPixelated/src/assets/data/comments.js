import { user1, user2, user3, user4 } from "../images/images";

export const getComments = async () => {
  return [
    {
      id: "1",
      user: user1,
      body: "If we consider the price then Lorem Ipsum is simply dummy text of the printing Overall nice! Thanks",
      username: "Esther Howard",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
      joinAt: "Nov 2018",
      like: 22,
      position: " Apprentice ",
      posts: 384,
      reputation: 50,
    },
    {
      id: "2",
      user: user4,
      body: "If we consider the price then Lorem Ipsum is simply dummy text of the printing Overall nice! Thanks",
      username: "Marvin McKinney",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
      joinAt: "Jan 2018",
      like: 22,
      position: " Apprentice ",
      posts: 384,
      reputation: 60,
    },
    {
      id: "3",
      user: user2,
      body: "If we consider the price then Lorem Ipsum is simply dummy text of the printing Overall nice! Thanks",
      username: "Robert Fox",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
      joinAt: "Feb 2023",
      like: 22,
    },
    {
      id: "4",
      user: user3,
      body: "If we consider the price then Lorem Ipsum is simply dummy text of the printing Overall nice! Thanks",
      username: "Cameron Williamson",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
      joinAt: "Jan 2018",
      like: 22,
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

// export const updateComment = async (text) => {
//   return { text };
// };

// export const deleteComment = async () => {
//   return {};
// };

export const TimeFormation = (time) => {
  const convertedTime = new Date(time);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedTime = convertedTime.toLocaleDateString("en-US", options);
  const finalTime = formattedTime
    .replace(/\//g, "-")
    .replace(",", " at ")
    .replace(/\b(\d{1})\b/g, "0$1");

  return finalTime;
};
