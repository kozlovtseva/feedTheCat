import React from "react";

import styled from "styled-components";

const ListItemHeader = (props) => {
    return (
        <Header>
            <Corner available={props.available} isSelected={props.isSelected} />
            <Type available={props.available} isSelected={props.isSelected}>
                <p className="food_type">{props.type}</p>
                <Question className="food_type_question">
                    Котэ не одобряет?
                </Question>
            </Type>
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
        ${(props) =>
            props.available
                ? props.isSelected
                    ? "#E52E7A"
                    : "#1698d9"
                : "#B3B3B3"};
    border-right: 4px solid
        ${(props) =>
            props.available
                ? props.isSelected
                    ? "#E52E7A"
                    : "#1698d9"
                : "#B3B3B3"};
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
        ${(props) =>
                props.available
                    ? props.isSelected
                        ? "#E52E7A"
                        : "#1698d9"
                    : "#B3B3B3"}
            48%,
        ${(props) =>
                props.available
                    ? props.isSelected
                        ? "#E52E7A"
                        : "#1698d9"
                    : "#B3B3B3"}
            55%,
        ${(props) => (props.available ? "#fff" : "#F2F2F2")} 55%,
        ${(props) => (props.available ? "#fff" : "#F2F2F2")} 100%
    );
    height: 45px;
    width: 45px;
`;
const Question = styled.p`
    color: #e52e7a;
    display: none;
`;

export default ListItemHeader;
