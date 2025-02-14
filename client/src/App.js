import {Fragment, useEffect, useState} from "react";
import Market from "./appMarket/Market";
import axios from "axios";
import {API_URL} from "./index";

function App() {
  const [content, setContent] = useState([])

  useEffect(() => {
    getContent()
  }, [])

  const getContent = (data) => {
    axios.get(API_URL).then(data => setContent(data.data))
  }

  const resetState = () => {
    getContent();
  };

  return (
      <Fragment>
        <Market content={content} resetState={resetState} />
      </Fragment>
  );
}

export default App;
