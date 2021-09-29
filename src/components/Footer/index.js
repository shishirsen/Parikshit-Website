import React from 'react'
import logosat from '../../images/logopar (1).png'
import { FooterContainer,
  FooterLinksWrapper,
  FooterLinksContainer,
FooterLinkItems,
FooterLinkTitle,
FooterWrap,
FooterLink,
SocialMedia,
Developers,
SocialMediaWrap,
Yoyo, 
WebsiteRights} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
          <Yoyo>
          <img className="yoyo" src= { logosat } width="300px"></img>
          </Yoyo>
          {/* <FooterLinkItems>
            <img className="yoyo" src= { logosat } width="200px"></img>
          </FooterLinkItems> */}
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to ="/about">Instagram</FooterLink>
              <FooterLink to ="/about">LinkedIn</FooterLink>
              <FooterLink to ="/about">Facebook</FooterLink>
          </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>

          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to ="/about">Email: parikshit.musat@gmail.com</FooterLink>
              <FooterLink to ="/about">Cell: +919398805306</FooterLink>
              <FooterLink to ="/about"></FooterLink>
          </FooterLinkItems>

          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights> parikshit© All copyrights reserved
            developed by @shishirsen & @manavisharma</WebsiteRights>
            <Developers> </Developers>
          </SocialMediaWrap>
        </SocialMedia>

      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
