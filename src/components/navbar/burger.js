import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import LeftNav from './LeftNav';


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1.5rem;
  right: 0.7rem;
  z-index: 21;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#000' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            {props.icon==='cat' ? <LeftNav open={open} /> : <RightNav open={open} />}
            
        </>
    )
}

export default Burger