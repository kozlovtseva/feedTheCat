import React, { useState } from "react";

import styled from "styled-components";

import ListItemHeader from "./ListItemHeader";
import ListItemPromo from "./ListItemPromo";
import ListItemWeight from "./ListItemWeight";
import ListItemFooter from "./ListItemFooter";

const ListItem = (props) => {
    return (
        <Wrapper>
            <ListItemHeader
                type={props.item.type}
                available={props.item.available}
            />
            <Container available={props.item.available}>
                <Name>{props.item.name}</Name>
                <Taste>{props.item.taste}</Taste>
                <ListItemPromo
                    promo={props.item.promo}
                    available={props.item.available}
                />
                <ImageContainer>
                    <Image
                        src={require(`../../images/${props.item.image}`)}
                        alt={props.item.name}
                        available={props.item.available}
                    />
                    <ListItemWeight
                        weight={props.item.weight}
                        available={props.item.available}
                    />
                </ImageContainer>
            </Container>
            <ListItemFooter
                taste={props.item.taste}
                available={props.item.available}
            />
        </Wrapper>
    );
};
const Wrapper = styled.li`
    color: ${(props) => (props.available ? "#000" : "#B3B3B3")};
    flex: 0 1 350px;
    list-style: none;
    margin-bottom: 40px;
    &:hover {
        cursor: pointer;
    }
`;
const Container = styled.div`
    background-color: ${(props) => (props.available ? "#fff" : "#F2F2F2")};
    border: 4px solid ${(props) => (props.available ? "#1698d9" : "#B3B3B3")};
    border-top: none;
    border-radius: 0 0 12px 12px;
    padding-left: 45px;
    width: 300px;
`;
const Name = styled.h2`
    font-size: 48px;
    font-weight: 700;
`;
const Taste = styled.h3`
    font-size: 24px;
    font-weight: 700;
`;
const Image = styled.img`
    border-radius: 0 0 0 8px;
    bottom: 0;
    left: -45px;
    opacity: ${(props) => (props.available ? "1" : "0.5")};
    position: absolute;
`;
const ImageContainer = styled.div`
    height: 300px;
    position: relative;
`;

export default ListItem;
