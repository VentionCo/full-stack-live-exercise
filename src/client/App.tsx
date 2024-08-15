import React from 'react'
import styled from "styled-components";

interface Props {
    /** Data used in the react prerender process. Use only in the server side. */
    serverData?: unknown;
}

/** * The root react component for both client side rendering and server side rendering */
export default function App(props: Props) {

    return (
        <Page>

        </Page>
    );
}

const Page = styled.div`
    
`;




