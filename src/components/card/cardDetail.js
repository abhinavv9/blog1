import React from "react";
import styled from "styled-components";
import { Marginer } from "./marginer";

import NikeImg from "./assets/nike-logo.png";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 16px;
  background-color: #7fffd4;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #7fffd4;
  }
`;

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 13px;
  }
`;

export function ShoesDetails(props) {

    function func() {
        console.log("Hey!")
    }

    return (
        <DetailsContainer>
            <SmallText>CATEGORY</SmallText>
            <SpacedHorizontalContainer>
                <MediumText> POST TITLE BLAH BLAH BLAH </MediumText>
            </SpacedHorizontalContainer>
            <Marginer direction="vertical" margin="1.2em" />
            <SpacedHorizontalContainer>
                <SmallText>Dolore esse ex tempor.</SmallText>
                <Button type="submit" onClick={func}>
                    More?
                </Button>
            </SpacedHorizontalContainer>
            <NikeLogo>
                <img src={NikeImg} />
            </NikeLogo>
        </DetailsContainer>
    );
}
