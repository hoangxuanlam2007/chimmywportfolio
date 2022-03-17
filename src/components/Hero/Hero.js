import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Chimmyw Portfolio
        </SectionTitle>
        <SectionText>
          Hi there! I'm Xuan Lam, and I'm currently a middle school student who likes anime and enthusiastic 
          about technology. <br/>
          Do you want to become a Full-Stack Website Developer but don't know where to start? <br/>
          Start your journey now!
        </SectionText>
        <Button onClick={() => window.location = '/roadmaps/index.html'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;