const Total = ({ parts }) => {
  let sum = 0;
  parts.forEach((v) => {
    sum += v.exercises;
  });
  return <p>Number of exercises {sum}</p>;
};

export default Total;
