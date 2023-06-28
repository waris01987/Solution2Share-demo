import {
  AddIcon,
  Box,
  Button,
  HandIcon,
  Header,
  Input,
  Text,
} from "@fluentui/react-northstar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SingleMenu = ({ items }: any) => {
  const [show, setShow] = useState(false);
  if (items?.menu?.items) {
    return (
      <li style={{fontSize: "18px"}}>
        <div>
          <Link to={"#"} onClick={() => setShow(!show)} style={{textDecoration: "none", color: "black"}}>
            {items.content}
            <br />
          </Link>
          <ul
            style={{ display: show ? "block" : "none", paddingLeft: "30px" }}
          >
            {items?.menu?.items?.map((elem: any, index: number) => (
              <>
                {/* <div key={index}> */}
                  {/* {elem.title} */}
                  <SingleMenu items={elem} />
                {/* </div> */}
              </>
            ))}
          </ul>
        </div>
      </li>
    );
  }

  return <Link to={`/${items.content}`} style={{color: "black", fontSize: "18px"}}>{items.content}</Link>;
};

const MainSection = ({ data, setData, selectedItem, setSelectedItem }: any) => {
  const [search, setSearch] = useState("");
  // const [data, setData] = useState(dummyData)
  const [searchedItems, setSearchedItems] = useState([]);
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var ans: any = [];
  function recursiveSearch(array: any, letter: string): any {
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
  }
  useEffect(() => {
    const arr = recursiveSearch(data, search);
    setSearchedItems(arr);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSubmit = () => {
    if (Object.keys(selectedItem).length === 0) {
      let test = [...data];
      test.push({
        key: "adfa",
        content: search,
        id: "2",
      });
      setData(test);
    } else {
      console.log(data.find((el: any) => el.content === selectedItem.content));
      console.log(
        selectedItem,
        "THIS IS SELECTED ITEM",
        filterByLabel(data, search)
      );
      if (selectedItem.menu === undefined) {
        selectedItem.menu = {};
        selectedItem.menu.items = [];
      }
      selectedItem.menu.items.push({
        key: "asdafsdfsadf", // Random Key 
        content: search,
        id: "202",
      });
      setSelectedItem(selectedItem);
    }
  };

  const filterByLabel = (array: any, searchTerm: any) => {
    console.log(array, searchTerm);
    return array.reduce(
      (prev: any, curr: any) => {
        const children =
          curr.menu !== undefined && curr.menu.items !== undefined
            ? filterByLabel(curr.menu.items, search)
            : undefined;

        return curr.content === searchTerm || children?.length > 0
          ? [...prev, { ...curr, children }]
          : prev;
      },
      [...array]
    );
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
      <Box style={{marginBottom: "20px"}}>
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
              icon={<HandIcon />}
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
              <Box>
                  <Input type="text" role="search"  placeholder="Search..." onChange={(event: any) => setSearch(event.target.value)} onFocus={() => setShowSearch(true)} /> 
                  {/* // TODO: ComponentEventHandler<InputProps> | React.ChangeEvent<HTMLInputElement></HTMLInputElement> */}
                  {
                    showSearch &&
                    <Box style={{display: "flex", flexDirection: "column", height: "200px", overflowY: "scroll", boxShadow: "3px 10px 30px gray", padding: "10px", width: "100%", gap: "10px"}}>
                        {
                            searchedItems?.map((el: any) => {
                                return (
                                    <Box className="singleTab" content={el?.content} onClick={() => {
                                        setSelectedItem(el)
                                        setShow(true)
                                    }} style={{cursor: "pointer"}}/>
                                )
                            })
                        }
                    </Box>
                  }
              </Box>
            </div>
            {/* {searchedItems?.map((el: any) => {
              return (
                <Box
                  content={el?.content}
                  onClick={() => {
                    setSelectedItem(el);
                    setShow(true);
                  }}
                  style={{ cursor: "pointer" }}
                />
              );
            })} */}
          </>
        )}
      </Box>
      <ul className="settingMenu">
        {/* {singleMenu(dummyData)} */}
        {data.map((el: any, index: any) => {
          return <SingleMenu items={el} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default MainSection;
