import { faHome, faTable, faCog, faUser, IconDefinition, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { ModelList } from "./components/SideBar";

const icon = (path: string, iconDef: IconDefinition, description: string) => ({
  link: path,
  icon: iconDef,
  description,
});

export const navModel: ModelList ={
  dataSet: [
    
    icon("/Home", faHome, "Home"),
    icon("/", faUser, "User"),
    icon("#", faTable, "Tables"),
    icon("#", faCog, "Config"),
    icon("https://github.com/moneyman-S", faAddressCard, "Project")
  ]
};
