import React from "react";

import styled from "styled-components";

import ListItemHeader from "./ListItemHeader";
import ListItemPromo from "./ListItemPromo";
import ListItemWeight from "./ListItemWeight";

const ListItem = (props) => {
    return (
        <Wrapper>
            <ListItemHeader type={props.item.type} />
            <Container>
                <Name>{props.item.name}</Name>
                <Taste>{props.item.taste}</Taste>
                <ListItemPromo promo={props.item.promo} />
                <ImageContainer>
                    <Image
                        src={require(`../../images/${props.item.image}`)}
                        alt={props.item.name}
                    />
                    <ListItemWeight weight={props.item.weight} />
                </ImageContainer>
            </Container>
            <Footer>
                <FooterContent>
                    Чего сидишь? Порадуй котэ, <Link href="#">купи.</Link>
                </FooterContent>
            </Footer>
        </Wrapper>
    );
};
const Wrapper = styled.li`
    flex: 0 1 350px;
    list-style: none;
    margin-bottom: 40px;
`;
const Container = styled.div`
    background-color: #fff;
    border: 4px solid #1698d9;
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
    position: absolute;
`;
const ImageContainer = styled.div`
    height: 300px;
    position: relative;
`;
const Footer = styled.div`
    color: #fff;
    font-size: 13px;
    margin-top: 14px;
    padding-left: -45px;
    width: 300px;
`;
const FooterContent = styled.div`
    margin: 0 auto;
    width: fit-content;
`;

const Link = styled.a`
    border-bottom: 1.7px dashed #2ea8e6;
    color: #2ea8e6;
    font-size: 13px;
    font-weight: 700;
`;

export default ListItem;
