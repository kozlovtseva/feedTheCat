import React from "react";

import styled from "styled-components";

const ListItemFooter = (props) => {
    const footer_content = props.available ? (
        <FooterContent>
            <span>Чего сидишь? Порадуй котэ, </span>
            <Link href="#">купи.</Link>
        </FooterContent>
    ) : (
        <FooterContent>
            <UnavailableText>
                Печалька, {props.taste} закончился.
            </UnavailableText>
        </FooterContent>
    );
    return <Footer>{footer_content}</Footer>;
};

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
const UnavailableText = styled.span`
    color: #ffff66;
`;
export default ListItemFooter;
