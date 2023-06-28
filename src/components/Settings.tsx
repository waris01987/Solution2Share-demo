import { Header, Layout, Text } from "@fluentui/react-northstar";
import MainSection from "./MainSection";
import { selectedItemPropTypes } from "../types";

interface settingsPropTypes { 
  data: any;
  setData: any;
  selectedItem: selectedItemPropTypes;
  setSelectedItem: any;
}


const Settings = ({ data, setData, selectedItem, setSelectedItem }: settingsPropTypes) => {
  return (
    <>
      <div className="container">
        <div className="sidebarPage">
          <div className="settingsSidebar">
            <div className="settingsSidebar-head">
              <h2>Settings</h2>
            </div>
          </div>
          <MainSection
            data={data}
            setData={setData}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </div>
    </>
  );
};

export default Settings;
