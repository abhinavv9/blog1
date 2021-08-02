import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  margin-right: auto;
  display: flex;
  flex-flow: row nowrap;
  ${'' /* flex-flow: column nowrap; */}
    background-color: #fff;
    position: relative;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    top: 0;
    left: -2rem;
    height: 40vh;
    width: 136ch;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 3;
    cursor: default;
  li {
    font-weight: bold;
    padding: 6rem 3rem;
    color: #000;
    margin-left: 6rem;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    flex-flow: column nowrap;
    width: fit-content;
    position: absolute;
    left: 40%;
`

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <p>Pick your read!</p>
            <li>Latest</li>
            <li>Top</li>
            <li>Tech</li>
            <li>Languages</li>
            <li>Tips And Tricks</li>
        </Ul>
    )
}

export default RightNav