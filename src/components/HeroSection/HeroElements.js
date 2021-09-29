import styled from 'styled-components'


export const HeroContainer = styled.div `
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;


    /* Add : before styles*/


`;

export const HeroBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    


`;

export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

`;



export const HeroContent = styled.div `
    z-index: 3;
    
    position: absolute;
  
  
  
`;

export const HeroH1 = styled.h1 `
    color: #fff;
    font-size: 48px;
  

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }


    @media screen and (max-width: 480px) {
        font-size: 32px;
    }


`


export const HeroP = styled.p`
    margin-top: 100px;
    color: #fff;
    font-size: 24px;
    margin-left: 0px;
    max-width: 600px;


`