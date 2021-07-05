import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub
 } from '@fortawesome/free-brands-svg-icons';

 import {
  faShapes
} from '@fortawesome/free-solid-svg-icons'

import {
  Title,
  Section,
  Box,
  Text,
  ButtonOutline,
} from "../../components/Core";

import { device } from "../../utils";
import bgHeroPattern from "../../assets/image/webp/hero-pattern-2.webp";
import imgL from "../../assets/image/png/portrait-2.png";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  };

  padding-bottom: 50px;
`;

const ImgRight = styled.img`
  max-width: 50%;
  @media ${device.sm} {
    max-width: 60%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
`;

const ButtonStyled = styled(ButtonOutline)`
  margin-right: 10px;
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="5" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  <ImgRight src={imgL} alt="" />
                </div>
              </div>
            </Col>
            <Col lg="7" className="mb-5 mb-lg-0">
              <Box pl={[0, null, null, "3.125rem"]}>
                <Title mb="2rem">Engineer // Photographer</Title>

                <Text
                  css={`
                    line-height: 1.5;
                  `}
                  mb="2.5rem"
                >
                  Lover of good code, good processes and good stories.
                  <br />
                  Based in Italy.
                </Text>

                <Box>
                  <a href="https://www.twitter.com/lorenzomattei" target="_blank" rel="noreferrer">
                    <ButtonStyled><FontAwesomeIcon icon={faTwitter} size="2x"/></ButtonStyled>
                  </a>
                  <a href="https://github.com/loremattei" target="_blank" rel="noreferrer">
                    <ButtonStyled><FontAwesomeIcon icon={faGithub} size="2x"/></ButtonStyled>
                  </a>
                  <a href="https://www.facebook.com/LorenzoMatteiPhotographer" target="_blank" rel="noreferrer">
                    <ButtonStyled><FontAwesomeIcon icon={faFacebook} size="2x"/></ButtonStyled>
                  </a>
                  <a href="https://www.instagram.com/loremattei/" target="_blank" rel="noreferrer">
                    <ButtonStyled><FontAwesomeIcon icon={faInstagram} size="2x"/></ButtonStyled>
                  </a>
                  <a href="https://foundation.app/@loremattei" target="_blank" rel="noreferrer">
                    <ButtonOutline><FontAwesomeIcon icon={faShapes} size="2x"/></ButtonOutline>
                  </a>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
