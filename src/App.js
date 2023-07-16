import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      <Counter>
        {/* Add or remove components as needed */}
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
        <Counter.Label>My counter</Counter.Label>
      </Counter>

      <div>
        <Counter>
          {/* Add or remove components as needed */}
          <Counter.Increase icon="+" />
          <Counter.Count />
          <Counter.Label>My second counter</Counter.Label>
        </Counter>
      </div>
    </div>
  );
}
