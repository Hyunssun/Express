import React, { useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState<any>({
    input: "",
    getText: "",
    postText: "",
  });

  const onClickGet = async () => {
    const res = await axios("http://localhost:3001/get", {});
    setState({ ...state, getText: res.data });
  };

  const onClickPost = async () => {
    axios
      .post("http://localhost:3001/post", {
        postText: state.input,
      })
      .then((res: any) => {
        setState({ ...state, postText: res.data });
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  return (
    <div className="App">
      <input
        placeholder="input"
        onChange={(e: any) => {
          setState({ ...state, input: e.target.value });
        }}
      />
      <p>{state.postText}</p>
      <button onClick={onClickPost}>post</button>
      <p>{state.getText}</p>
      <button onClick={onClickGet}>get</button>
    </div>
  );
}

export default App;
