import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Settings from "./components/Settings";
import { MenuIcon } from "@fluentui/react-icons-northstar";
import { selectedItemPropTypes } from "./types";

const dummyData = [
  {
    key: "hamBurger",
    icon: <MenuIcon />,
  },
  {
    key: "MenuItem1",
    content: "MenuItem1",
    menu: {
      on: "hover",
      items: [
        {
          key: "subMenuItem1",
          content: "Sub Menu Item 1",
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
          menu: {
            items: [
              {
                key: "sub2.1",
                content: "Sub sub child 1",
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
    menu: {
      items: [
        {
          key: "subMenu1.1",
          content: "Sub Menu Item 1",
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
    menu: {
      items: [
        {
          key: "submenuItem3",
          content: "Sub Menu Item 1",
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const localData = localStorage.setItem("dummyData", JSON.stringify(dummyData));

function App() {
  const localData = JSON.parse(localStorage.getItem("dummyData") as any);
  const [data, setData] = useState(localData);
  const [selectedItem, setSelectedItem] = useState<selectedItemPropTypes>({});
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
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
