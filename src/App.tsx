import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Settings from "./components/Settings";
import { MenuIcon } from "@fluentui/react-icons-northstar";

const dummyData = [
  {
    key: "hamBurger",
    icon: <MenuIcon />,
  },
  {
    key: "MenuItem1",
    content: "MenuItem1",
    on: "hover",
    menu: {
      items: [
        {
          key: "subMenuItem1",
          content: "Sub Menu Item 1",
          on: "hover",
          menu: {
            items: [
              {
                key: "sub1.1",
                content: "My career & benefits",
              },
              {
                key: "sub1.2",
                content: "Travel & Expense",
              },
            ],
          },
        },
        {
          key: "subMenuItem2",
          content: "Sub Menu Item 2",
          on: "hover",
          menu: {
            items: [
              {
                key: "sub2.1",
                content: "Sub sub child 1",
                on: "hover",
                menu: {
                  items: [
                    {
                      key: "sub2.1.1",
                      content: "sub sub sub child 2",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "subMenuItem3",
          content: "Sub Menu Item 3",
        },
      ],
    },
  },
  {
    key: "menuItem2",
    content: "MenuItem2",
    on: "hover",
    menu: {
      items: [
        {
          key: "subMenu1.1",
          content: "Sub Menu Item 1",
          on: "hover",
          menu: {
            items: [
              {
                key: "sub1.1.1",
                content: "My career & benefits",
              },
              {
                key: "sub1.1.2",
                content: "Travel & Expense",
              },
            ],
          },
        },
        {
          key: "sub1.2.1",
          content: "Sub Menu Item 2",
        },
      ],
    },
  },
  {
    key: "menuItem3",
    content: "MenuItem3",
    on: "hover",
    menu: {
      items: [
        {
          key: "submenuItem3",
          content: "Sub Menu Item 1",
          on: "hover",
          menu: {
            items: [
              {
                key: "submenuItem3.2",
                content: "My career & benefits",
              },
              {
                key: "submenuItem3.3",
                content: "Travel & Expense",
              },
            ],
          },
        },
        {
          key: "submenuItem3.3.1",
          content: "Sub Menu Item 2",
        },
        {
          key: "submenuItem3.3.2",
          content: "Sub Menu Item 3",
        },
        {
          key: "submenuItem3.3.3",
          content: "Sub Menu Item 3",
        },
      ],
    },
  },
];

function App() {
  const [data, setData] = useState(dummyData);
  const [selectedItem, setSelectedItem] = useState<any>({});

  useEffect(() => {
    console.log("EFFECT TRIGGERED")
  }, [data])
  return (
    <div className="App">
      <Navbar data={data} />

      <Routes>
        <Route
          path={"/"}
          element={
            <Settings
              data={data}
              setData={setData}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          }
        />
        <Route path={"*"} element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
