import React from "react";

import styled from "styled-components";

const ListItemHeader = (props) => {
    return (
        <Header>
            <Corner />
            <Type>{props.type}</Type>
        </Header>
    );
};

const Header = styled.div`
    display: flex;
`;
const Type = styled.div`
    background-color: #fff;
    border-top: 4px solid #1698d9;
    border-right: 4px solid #1698d9;
    border-radius: 0 12px 0 0;
    color: #666;
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
        #1698d9 48%,
        #1698d9 55%,
        #fff 55%,
        #fff 100%
    );
    height: 45px;
    width: 45px;
`;
export default ListItemHeader;
