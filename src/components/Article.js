// Article.js
import React from "react";

function Article({ title, date, preview }) {
  // Calculate the number of emojis based on minutes to read
  const calculateEmojis = (minutes) => {
    const emojis = [];
    const coffeeCup = "☕️";
    const bentoBox = "🍱";

    if (minutes < 30) {
      const numCoffeeCups = Math.ceil(minutes / 5);
      for (let i = 0; i < numCoffeeCups; i++) {
        emojis.push(coffeeCup);
      }
    } else {
      const numBentoBoxes = Math.ceil(minutes / 10);
      for (let i = 0; i < numBentoBoxes; i++) {
        emojis.push(bentoBox);
      }
    }

    return emojis.join(" ");
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{calculateEmojis(30)} {date} read</small>
    </article>
  );
}

export default Article;
