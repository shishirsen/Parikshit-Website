import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer id="landing">
            <HeroBg>
                <VideoBg loop autoPlay muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Extending thoughts into space..</HeroH1>
                <HeroP>"Parikshit is your 'Pariksha'! Learn well, question deeply. Don't take anything for granted.Success will be yours. God Bless,Happy Creating and testing!"
 </HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
