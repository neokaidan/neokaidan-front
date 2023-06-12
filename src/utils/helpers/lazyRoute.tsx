import React from "react";
import {lazy, Suspense} from "react";

export const lazyRoute = (pageName: string) => {
    const LazyElement = lazy(() => import(`../../containers/${pageName}`));

    return (
        <Suspense fallback="Loading">
            <LazyElement />
        </Suspense>
    );
};
