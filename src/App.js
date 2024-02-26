import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the India?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curopen, setIsopen] = useState(null);
  function handleToggle(numms) {
    setIsopen((prevNum) => (prevNum === numms ? null : numms));
  }

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curopen={curopen}
          onOpen={setIsopen}
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, curopen, handleToggle }) {
  // const nums = num;
  // // numss(num);
  const isopen = num === curopen;
  // console.log("isopen value", isopen);

  // function handleToggle() {
  //   setIsopen((isopen) => num);
  // }

  return (
    <div
      className={`item ${isopen ? "open" : ""}`}
      onClick={() => handleToggle(num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isopen ? "+" : "-"}</p>
      {isopen && <div className="content-box">{text}</div>}
    </div>
  );
}
