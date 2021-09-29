import styled from 'styled-components';


export const SubsystemContainer = styled.div `
 
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: #010606;

    @media screen and (max-width: 768px ){
        height: 1100px;

    }

    @media screen and (max-width: 480px ){
        height: 1300px;

    }
`

export const SubsystemWrapper = styled.div `
    max-width: 1300px;
    margin: 20 ;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: center;
    justify-content: center;
    align-content: center; 
    padding: 0 50px;


    @media screen and (max-width: 1000px ){
        grid-template-columns: 1fr 1fr;

    }

    @media screen and (max-width: 768px ){
        grid-template-columns: 1fr;
        padding: 0 20px;
        
    }

   
`

export const SubsystemCard = styled.div `
    background: #fff;
    display: flex;
    margin: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 10px;
   
    width: 300px;
    height: 400px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02s);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

   
`

export const SubsystemIcon = styled.img `
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    border-radius: 100px;


`

export const SubsystemH1 = styled.h1 `
   font-size: 4rem;
   color: #fff;
   margin-top: 20px;
   margin-bottom: 64px;

    @media screen and (max-width: 480px ){
        font-size: 2rem;
        
    }

`

export const SubsystemH2 = styled.h2 `
   font-size: 1rem;
   margin-bottom: 10px;

    @media screen and (max-width: 480px ){
        font-size: 2rem;
        
    }

`

export const SubsystemP = styled.p `
    font-size: 1rem;
    text-align: center


`

export const SecondRow = styled.div `

${'' /* justify-content: center;
    align-items: center;
    align-content: center;
    */}



`
export const SubsystemCard2 = styled.div `
    background: #fff;
    display: flex;
    margin: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 10px;
    width: 300px;
    height: 400px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    grid-column-start: 2;

    &:hover{
        transform: scale(1.02s);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

   
`