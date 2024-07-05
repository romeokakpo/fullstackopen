const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p, i) => (
        <Part key={i} name={p.name} exercises={p.exercises} />
      ))}
    </div>
  );
};

export default Content;
