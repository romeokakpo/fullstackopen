import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + bad + neutral;

  const mean = (good * 1 + bad * -1) / total;

  return total === 0 ? (
    <span>No feedback given</span>
  ) : (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={mean} />
        <StatisticLine text="positive" value={`${(good / total) * 100} %`} />
      </tbody>
    </table>
  );
};

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text="good" handleClick={() => setGood((bad) => bad + 1)} />
        <Button
          text="neutral"
          handleClick={() => setNeutral((bad) => bad + 1)}
        />
        <Button text="bad" handleClick={() => setBad((bad) => bad + 1)} />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
