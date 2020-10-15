import React from "react";

import styled from "styled-components";

import FoodList from "../components/list/FoodList";

const Layout = () => {
    return (
        <Container>
            <FoodList />
        </Container>
    );
};

const Container = styled.div`
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.5) 100%
    );
    height: 100vh;
`;

export default Layout;
