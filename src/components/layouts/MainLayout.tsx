import React, {FC, ReactNode} from "react";
import {Header, Footer} from "@components/modules";

type MainLayoutProps = {
    children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
