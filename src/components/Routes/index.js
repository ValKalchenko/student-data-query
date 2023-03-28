import { Route, Routes } from "react-router-dom";
import DataEntry from "../../modules/DataEntry";
import DataView from "../../modules/DataView";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<DataView />} />
            <Route path="entry" element={<DataEntry />} />
        </Routes>
    );
};

export default AppRoutes;