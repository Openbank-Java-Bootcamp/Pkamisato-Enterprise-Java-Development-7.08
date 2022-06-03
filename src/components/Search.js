import { Divider, Input } from "antd";
import { useState } from "react";

function Search(props) {
  console.log("first", props);
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    props.filterFood(e.target.value);
  };

  return (
    <div>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={search} type="text" onChange={handleSearchInput} />
    </div>
  );
}

export default Search;
