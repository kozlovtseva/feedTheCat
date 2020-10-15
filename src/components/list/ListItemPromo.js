import React from "react";

import styled from "styled-components";

const ListItemPromo = (props) => {
    const getName = (value, type) => {
        value = value % 100;
        var number = value % 10;
        if (value > 10 && value < 20) return type[2];
        if (number > 1 && number < 5) return type[1];
        if (number === 1) return type[0];
        return type[2];
    };
    const promoItems = props.promo.map((item, index) => (
        <PromoItem key={index}>
            <Number>{`${item.number === 1 ? "" : item.number} `}</Number>
            {`${getName(item.number, item.type)} `}
            {index === props.promo.length - 1 ? " в подарок" : null}
        </PromoItem>
    ));

    return <Text available={props.available}>{promoItems}</Text>;
};

const Text = styled.p`
    color: ${(props) => (props.available ? "#666" : "#B3B3B3")};
    font-size: 14px;
    margin-top: 15px;
`;
const Number = styled.span`
    font-weight: 700;
`;
const PromoItem = styled.span`
    display: block;
`;

export default ListItemPromo;
