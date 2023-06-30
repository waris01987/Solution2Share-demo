import {
  AddIcon,
  Box,
  Button,
  Dialog,
  HandIcon,
  Header,
  Input,
  SearchIcon,
  Text,
  TriangleDownIcon,
  TriangleEndIcon,
} from "@fluentui/react-northstar";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SingleMenu = ({ items }: any) => {
  const [show, setShow] = useState(false);
  if (items?.menu?.items) {
    return (
      <li>
        <div>
            {show ? <TriangleDownIcon /> : <TriangleEndIcon />}
            {items.content}
            <br />
          {/* </Link> */}
          <ul style={{ display: show ? "block" : "none", paddingLeft: "30px" }}>
            {items?.menu?.items?.map((elem: any, index: number) => (
              <React.Fragment key={index}>
                <SingleMenu  items={elem} />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li style={{ minHeight: "25px", paddingLeft: "25px" }}>
      <Link to={`/${items.content}`} onClick={() => setShow(!show)}>
        {items.content}
      </Link>
  </li>
  );
};

const MainSection = ({ data, setData, selectedItem, setSelectedItem }: any) => {
  const [search, setSearch] = useState("");
  // const [data, setData] = useState(dummyData)
  const [searchedItems, setSearchedItems] = useState([]);
  const [show, setShow] = useState(false);
  const [searchData, setSearchData] = useState(false);

  const recursiveSearch: any = useCallback(
    (array: any, letter: string) =>  {
  
      const result = [];
      for (const obj of array) {
        if (obj.content?.toLowerCase().includes(letter?.toLowerCase())) {
          result.push(obj);
        }
        if (obj.menu?.items.length > 0) {
          result.push(...recursiveSearch(obj.menu?.items, letter));
        }
      }
      return result;
    },
    []
  ) 
  useEffect(() => {
    const arr = recursiveSearch(data, search);
    setSearchedItems(arr);
  }, [data, recursiveSearch, search]);

  const handleSubmit = () => {
    if (Object.keys(selectedItem).length === 0) {
      let test = [...data];
      test.push({
        key: "adfa",
        content: search,
        on: "hover",
        id: "2",
      });
      setData(test);
    } else {
      if (selectedItem.menu === undefined) {
        selectedItem.menu = {};
        selectedItem.menu.items = [];
      }
      selectedItem.menu.items.push({
        key: (Math.random() * 100).toString() ,
        content: search,
        on: "hover",
        id: "202",
      });
      setSelectedItem(selectedItem);
    }
  };

  useEffect(() => {}, [selectedItem]);

  return (
    <div className="settingTemplate">
      <Box className="settingTemplate-head">
        <Header as="h3" content="Configure Navigation" />
        <Text content="The mega menu can be configured here" />
      </Box>
      <Box className="settingTemplate-subHead">
        <Header as="h4" content="Add Navigation Entries" />
        <Text content="Here's an example of how a section can be used as group inputs" />
      </Box>
      <Box>
        <Text>
          Selected menu:{" "}
          <span style={{fontSize:"20px", fontWeight: "600"}}>
            {selectedItem.content &&
              selectedItem?.content}
          </span>
        </Text>
      </Box>
      <Box>
        {show ? (
          <div className="menuFilterBtn">
            <Input
              type="text"
              placeholder="Enter menu item..."
              onChange={(e: any) => setSearch(e.target.value)}
            />
            <Button
              loader="Bypass firewall"
              primary
              icon={<AddIcon />}
              onClick={() => handleSubmit()}
            />
            <Button
              loader="Bypass firewall"
              primary
              content="Go back"
              onClick={() => setShow(false)}
            />
          </div>
        ) : (
          <>
            <div className="menuFilterBtn">
              <Button
                content={"Add Entry"}
                loader="Bypass firewall"
                primary
                icon={<AddIcon />}
                onClick={() => setShow(true)}
                iconPosition="after"
              />
              <div className="searchInput">
                <Input
                  type="text"
                  role="search"
                  placeholder="Search..."
                  onChange={(e: any) => setSearch(e.target.value)}
                  onFocus={() => setSearchData(true)}
                  onBlur={() => setSearchData(false)}
                />
                <span className="searchInput-btn">
                  <SearchIcon />
                </span>
                  <Box className="searchInput-data">
                    {searchedItems?.map((el: any, index) => {
                      return (
                        <Box
                          key={index}
                          content={el?.content}
                          onClick={() => {
                            setSelectedItem(el);
                            setShow(true);
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      );
                    })}
                  </Box>
                {/* )} */}
              </div>
            </div>
          </>
        )}
      </Box>

      <ul className="settingMenu">
        {data.map((el: any, index: number) => {
          return <SingleMenu items={el} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default MainSection;
