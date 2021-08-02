import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  flex-flow: column nowrap;
    background-color: #fff;
    position: absolute;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    z-index: 3;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  li {
    padding: 18px 10px;
    font-weight: bold;
    color: #000000;
  }
`

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
        </Ul>
    )
}

export default RightNav