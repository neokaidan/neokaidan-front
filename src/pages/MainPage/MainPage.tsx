import React from "react";

import {Main} from "@components/containers";
import {MainLayout} from "@components/layouts";

const MainPage = () => {
    console.log("hERE");
    return (
        <MainLayout>
            <Main />
        </MainLayout>
    );
};

export default MainPage;
