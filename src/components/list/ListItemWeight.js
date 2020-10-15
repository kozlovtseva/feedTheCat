import React from "react";

import styled from "styled-components";

const ListItemWeight = (props) => {
    return (
        <Container available={props.available}>
            <Weight>{props.weight.toString().replace(".", ",")}</Weight>
            <Measure>кг</Measure>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${(props) => (props.available ? "#2ea8e6" : "#B3B3B3")};
    border-radius: 50%;
    bottom: 16px;
    color: #fff;
    font-weight: 400;
    height: 80px;
    padding-top: 7px;
    position: absolute;
    right: 16px;
    text-align: center;
    width: 80px;
`;
const Weight = styled.p`
    font-size: 42px;
    line-height: 42px;
`;
const Measure = styled.p`
    font-size: 26px;
    font-weight: 300;
    line-height: 18px;
`;
export default ListItemWeight;
