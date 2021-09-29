import React from 'react'
import Data from './Data';



const Library = () => {
    return (
        <>



 <LibraryContainer id='subsystem'>
            <LibraryH1>
                Library
            </LibraryH1>
            <LibraryWrapper>
                <LibraryCard>
                <img src={item.imgSrc}/>
                <LibraryH2>ADCS</LibraryH2>
                <LibraryP>Parikshit is derived from the Sanskrit name ‘Parikshan’</LibraryP>

                
                </LibraryCard>

                <LibraryCard>
                <LibraryIcon src={Img2}/>
                <LibraryH2>ADCS</LibraryH2>
                <LibraryP>Parikshit is derived from the Sanskrit name ‘Parikshan’</LibraryP>

                
                </LibraryCard>

                <LibraryCard>
                <LibraryIcon src={Img3} alt={alt}/>
                <LibraryH2>ADCS</LibraryH2>
                <LibraryP>Parikshit is derived from the Sanskrit name ‘Parikshan’ </LibraryP>

                
                </LibraryCard>



                
                
                
            </LibraryWrapper>
        </LibraryContainer>


        </>
    )
}

export default Library

