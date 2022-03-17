import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <img src="/images/chimmyw.png" style={{width: '3rem', marginLeft: '-5px'}}></img> <span style={{marginLeft: '10px'}}>Chimmyw Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/hoangxuanlam2007" target={"_blank"}>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/hoangxuanlam2007" target={"_blank"}>
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.youtube.com/channel/UCVzxZyNZfd_O23kRpb1cT8Q" target={"_blank"}>
          <AiFillYoutube size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;