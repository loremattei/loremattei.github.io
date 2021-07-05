import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
import imgPhoto from "../../assets/image/png/portrait-2.png";
import imgSignLight from "../../assets/image/png/signature.png";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  Lorenzo Mattei
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  Hi! My name is Lorenzo Mattei and I was born and
                  raised Gubbio, Italy. I write code, build things and take
                  photos.
                </Text>
                <Text color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}>
                  I have spent most of my career working at technology companies 
                  helping build products. 
                </Text>
                <div className="mt-4">
                  <Text color="light">Email me at</Text>

                  <Text variant="p">
                    <Span color="light">lore </Span>
                    <Span color="light" className="font-weight-bold">dot </Span>
                    <Span color="light">mattei </Span>
                    <Span color="light" className="font-weight-bold">at </Span>
                    <Span color="light">gmail.com</Span>
                  </Text>
                </div>
                <div className="mt-5">
                  <img src={imgSignLight} alt="sign" className="img-fluid" />
                </div>
                <Text color="light" className="mt-3 font-weight-bold">
                  Lorenzo Mattei
                </Text>
                <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://www.twitter.com/lorenzomattei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Twitter
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.facebook.com/lorenzomatteiphotographer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
                  >
                    Facebook
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.instagram.com/loremattei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Instagram
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.github.com/loremattei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    GitHub
                  </LinkSocial>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
