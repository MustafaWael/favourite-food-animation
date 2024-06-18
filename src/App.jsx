import { useState } from "react";
import { flushSync } from "react-dom";
import "./App.css";

function App() {
  const [list, setList] = useState(() => [
    { id: 1, text: "Broccoli", tic: false },
    { id: 2, text: "Pizza", tic: false },
    { id: 3, text: "Burger", tic: false },
    { id: 4, text: "Curry", tic: false },
    { id: 5, text: "Sushi rolls", tic: false },
    { id: 6, text: "Meat", tic: false },
    { id: 7, text: "Tacos", tic: false },
    { id: 8, text: "Smoothies", tic: false },
    { id: 9, text: "Steak", tic: false },
    { id: 10, text: "Stir-fri", tic: false },
    { id: 11, text: "Sushi", tic: false },
    { id: 12, text: "Potatos", tic: false },
    { id: 13, text: "Chicken", tic: false },
    { id: 14, text: "Apple", tic: false },
    { id: 15, text: "Peach", tic: false },
    { id: 16, text: "Cherry", tic: false },
    { id: 17, text: "Carrot", tic: false },
    { id: 18, text: "Beetroot", tic: false },
    { id: 19, text: "Cake", tic: false },
    { id: 20, text: "Orange", tic: false },
  ]);

  const toggleTic = (id) => {
    flushSync(() => {
      document.startViewTransition(() => {
        setList((l) => {
          return l.map((data) => {
            return data.id === id ? { ...data, tic: !data.tic } : { ...data };
          });
        });
      });
    });
  };

  return (
    <>
      <div className="container" style={{ viewTransitionName: "container" }}>
        <div className="checkbox_container">
          <h1>What's your favourites?</h1>
          <div className="checkboxes_list">
            {list.map((data) => (
              <Button key={data.id} data={data} toggleTic={toggleTic} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const Button = ({ data, toggleTic }) => {
  const handleClick = () => {
    toggleTic(data.id);
  };

  return (
    <>
      <button
        style={{ viewTransitionName: `button-${data.id}` }}
        key={data.id}
        className={`button ${data.tic ? "selected" : ""}`.trim()}
        onClick={handleClick}
      >
        {data.text}
        {data.tic && (
          <div className="lucide-check-wrapper">
            <Check />
          </div>
        )}
      </button>
    </>
  );
};

const Check = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-check"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

export default App;
