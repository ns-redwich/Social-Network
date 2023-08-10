import React from "react";
import s from "./Form.module.css";

const Form = (props) => {
  let RefInput = React.createRef();

  const addNewPost = () => {
    props.addPost();
  };

  const onPostValueChange = () => {
    let text = RefInput.current.value;
    props.InputValueChange(text);
  };

  return (
    <div className={s.form}>
      <input
        ref={RefInput}
        onChange={onPostValueChange}
        placeholder="..."   
        type="text"
        value={props.inputV}
        className={s.inp}
      />
      <div className={s.btn_frame}>
        <button onClick={addNewPost} type="button" className={s.btn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
