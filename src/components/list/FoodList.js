import React from "react";

import styled from "styled-components";
import Pattern from "../../images/pattern.jpg";
import ListItem from "./ListItem";
import { catsFoodList } from "../../data";

const FoodList = () => {
    return (
        <Container>
            <Title>Ты сегодня покормил кота?</Title>
            <List>
                {catsFoodList.map((item) => (
                    <ListItem item={item} key={item.id} />
                ))}
            </List>
        </Container>
    );
};

const Container = styled.div`
    background: url(${Pattern}) repeat;
    height: 100%;
    padding: 36px 50px;
`;
const Title = styled.h1`
    color: #fff;
    font-family: "Exo 2.0 Thin", arial;
    font-size: 36px;
    margin-bottom: 26px;
    text-align: center;
`;
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
export default FoodList;
