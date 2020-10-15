import React from "react";

import styled from "styled-components";

const ListItemHeader = (props) => {
    return (
        <Header>
            <Corner available={props.available} />
            <Type available={props.available}>{props.type}</Type>
        </Header>
    );
};

const Header = styled.div`
    display: flex;
    position: relative;
`;
const Type = styled.div`
    background-color: ${(props) => (props.available ? "#fff" : "#F2F2F2")};
    border-top: 4px solid
        ${(props) => (props.available ? "#1698d9" : "#B3B3B3")};
    border-right: 4px solid
        ${(props) => (props.available ? "#1698d9" : "#B3B3B3")};
    border-radius: 0 12px 0 0;
    color: ${(props) => (props.available ? "#666" : "#B3B3B3")};
    font-size: 16px;
    height: 45px;
    line-height: 45px;
    padding-left: 5px;
    width: 255px;
`;
const Corner = styled.div`
    background: linear-gradient(
        135deg,
        transparent,
        transparent 45%,
        ${(props) => (props.available ? "#1698d9" : "#B3B3B3")} 48%,
        ${(props) => (props.available ? "#1698d9" : "#B3B3B3")} 55%,
        ${(props) => (props.available ? "#fff" : "#F2F2F2")} 55%,
        ${(props) => (props.available ? "#fff" : "#F2F2F2")} 100%
    );
    height: 45px;
    width: 45px;
`;

export default ListItemHeader;
