import React from 'react';
import { useSelector } from 'react-redux';

function DoneList() {
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === true
  );

  return (
    <section>
      <h1>완료 목록</h1>
      <ul>
        {list.map((el) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </section>
  );
}

export default DoneList;
