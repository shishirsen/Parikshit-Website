import styled from 'styled-components';


export const TeamContainer = styled.div `
 
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: #000;

    @media screen and (max-width: 768px ){
        height: 1100px;

    }

    @media screen and (max-width: 480px ){
        height: 1300px;

    }
`

export const TeamWrapper = styled.div `
    max-width: 100px;
    margin: 20 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    align-content: center; 
    padding: 0 50px;
    margin-bottom: 50px;


    @media screen and (max-width: 1000px ){
        grid-template-columns: 1fr 1fr;

    }

    @media screen and (max-width: 768px ){
        grid-template-columns: 1fr;
        padding: 0 20px;
        
    }

   
`

export const TeamCard = styled.div `
    background: #000;
    display: flex;
    margin: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    border-radius: 10px;
   
    width: 220px;
    height: 300px;
    box-shadow: 10px 10px 5px black;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02s);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

   
`

export const TeamIcon = styled.img `
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    border-radius: 100px;


`

export const TeamH1 = styled.h1 `
   font-size: 4rem;
   color: #fff;
   margin-bottom: 64px;
   margin-top: 20px;

    @media screen and (max-width: 480px ){
        font-size: 2rem;
        
    }

`

export const TeamH2 = styled.h2 `
   font-size: 1rem;
   margin-bottom: 10px;
   color: #fff;

    @media screen and (max-width: 480px ){
        font-size: 2rem;
        
    }

`

export const TeamP = styled.p `
    font-size: 1rem;
    text-align: center;
    color: #fff;


`
export const SocialMedia = styled.a`
    display: inline-block;
    padding: 2px;
    margin: 2px;
    justify-content: space-between;


    
`


export const SocialMediaIcons = styled.a`

    padding: 2px;
    margin: 2px;
    padding-top: 3px;
   


    
`

export const TeamH3 = styled.h3 `
font-size: 1rem;
text-align: center;
color: #fff;


`

