import React from "react";

import styled from "styled-components";

const Layout = () => {
    return <Container>{/* <FoodList /> */}</Container>;
};

const Container = styled.div`
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 5e-5) 49.88%,
        rgba(0, 0, 0, 0.5) 100%
    );
    height: 100vh;
`;

export default Layout;
