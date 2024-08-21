import DataSection from "../../components/DataSection";
import data from "../../data.json";

const Header = () => {
  return <DataSection personalData={data.personalData} />;
};

export default Header;
