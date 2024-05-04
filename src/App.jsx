import { useState } from 'react';
import { nanoid } from 'nanoid';

import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  console.log(count);

  return (
    <section className='section-center'>
      <h4>Tired of Boring Lorem Ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          max='8'
          step='1'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((paragraph) => {
          return <p key={nanoid()}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
