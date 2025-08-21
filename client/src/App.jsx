import { useEffect, useRef, useState } from "react";
import { HeaderWidget } from "./components/Widgets/HeaderWidget";
import axios from "axios";
import { CardListWidget } from "./components/Widgets/CardListWidget";

function App() {
  const timerRef = useRef(null);
  const [_searchValue, _setSearchValue] = useState("");
  const [_inputValue, _setInputValue] = useState("");
  const [_data, _setData] = useState([]);
  const [_isLoading, _setIsLoading] = useState(true);

  useEffect(() => {
    _fetchData(_searchValue);
  }, [_searchValue]);

  const _fetchData = async (query) => {
    let encode = query
      ? `http://localhost:4001/trips?keywords=${encodeURIComponent(query)}`
      : `http://localhost:4001/trips?keywords=`;
    try {
      const res = await axios.get(encode);
      if (res.status === 200) {
        _setData(res.data.data);
        _setIsLoading(false);
      }
    } catch (error) {
      console.log("error", error);
      _setIsLoading(false);
    }
  };

  const _handleTagSearch = (newTag) => {
    const tagArray = _searchValue
      .split(" ")
      .map((t) => t.trim())
      .filter((t) => t !== "");
    const tag = String(newTag).trim();
    if (!tagArray.includes(tag)) {
      tagArray.push(newTag);
      _setInputValue(tagArray.join(" "));
      _setSearchValue(tagArray.join(" "));
    }
  };

  const debouncedSearch = (value) => {
    _setInputValue(value);
    let textValue = value.toString();
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      _setSearchValue(textValue);
    }, 500);
  };

  return (
    <>
      {_isLoading ? (
        <div className="p-10 text-center text-2xl ">Loading......</div>
      ) : (
        <div className="container ">
          <HeaderWidget value={_inputValue} onSearch={debouncedSearch} />
          <CardListWidget data={_data} onClickTag={_handleTagSearch} />
        </div>
      )}
    </>
  );
}

export default App;
