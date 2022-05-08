let currentId = 3;

export const getId = () => {
  currentId += 1;
  return currentId;
};
