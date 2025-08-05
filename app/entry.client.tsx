import {startTransition, StrictMode} from "react";
import {hydrateRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router";
import Card from "~/routes/card";

startTransition(() => {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                Component: Card
            }
        ],
        {
            basename: "/wcard"
        });

    hydrateRoot(
        document,
        <StrictMode>
            <RouterProvider router={router}/>
        </StrictMode>,
    );
});
