import { Route, Routes } from "react-router-dom";
import DataEntry from "../../modules/DataEntry";
import DataView from "../../modules/DataView";
import DetailedData from "../../modules/DetailedData";
import DataQuery from "../../modules/DataQuery";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<DataView />} />
            <Route path="entry" element={<DataEntry />} />
            <Route path="student/:id" element={<DetailedData />}/>
            <Route path="query" element={<DataQuery />}/>

        </Routes>
    );
};

export default AppRoutes;