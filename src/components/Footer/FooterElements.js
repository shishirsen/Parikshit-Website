import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const FooterContainer = styled.div`
  background-color: #000;
`


export const FooterWrap = styled.div`
  padding: 48px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1800px;
  margin: 0 auto;
  border-style: solid;
  border-color: darkblue;

`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;


  @media screen and (max-width: 820px) {

    padding-top: 32px;

  }
   
`


export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;


  @media screen and (max-width: 820px) {

    padding-top: 32px;
    
  }
   
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${'' /* margin: 16px; */}
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  margin-top:20px;



  @media screen and (max-width: 420px) {

    margin: 0;
    padding: 10px;
    width: 100%;
    
  }
   
`
export const FooterLinkTitle = styled.div`
  font-size: 20px;
  padding-right: 20px;
  margin-bottom: 16px;
  color: #fff;


   
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;



  &:hover
  {
      color: #fff;
      transition: 0.3s ease-in-out;
      
  }
   
`;


export const SocialMedia =  styled.section`
  max-width: 1000px;
  width: 100%;

`

export const SocialMediaWrap =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;


  @media screen and (max-width: 820px) {

    flex-direction: column;
    
  }
  
`

export const WebsiteRights =  styled.small`
  color: #fff;
  align-items: center;
  padding-bottom: 16px;
  text-align: center;
  margin-left: 335px;
`

export const Developers =  styled.small`
  color: #fff;
  align-items: center;
  padding-bottom: 16px;
  text-align: center;
  margin-left: 335px;
`
export const Yoyo = styled.div`
position: relative;
left: -125px;
`