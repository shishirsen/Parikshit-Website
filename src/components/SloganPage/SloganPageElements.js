import styled from 'styled-components'


export const SloganContainer = styled.div `
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

export const SloganBg = styled.div `
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



export const SloganContent = styled.div `
    z-index: 3;
    
    position: absolute;
  
  
  
`;

export const SloganH1 = styled.h1 `
    color: #fff;
    font-size: 30px;
    margin-top: 200px;
    margin-left: 20px;
    max-width: 1100px;
  

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }


    @media screen and (max-width: 480px) {
        font-size: 32px;
    }


`


export const SloganP = styled.p`
    margin-top: 100px;
    color: #fff;
    font-size: 24px;
    align-content: right;
    align-items: right;
    justify-content: right;
    max-width: 1200px;
    margin-lef: 500px;
    padding-left: 500px;
    max-width: 1100px;

`