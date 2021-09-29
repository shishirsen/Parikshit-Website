import React from 'react';
import comms from '../../images/comms.png'
import adcs from '../../images/adcs.png'
import odhs from '../../images/odhs.png'
import payload from '../../images/payload.png'
import mgmt from '../../images/mgmt.png'
import eps from '../../images/eps.png'
import stms from '../../images/stms.png'
import {
    SubsystemContainer,
    SubsystemWrapper,
    SubsystemH1,
    SubsystemCard,
    SubsystemCard2,
    SubsystemIcon,
    SubsystemH2,
    SubsystemP,
    SecondRow
} from './SubsystemElements'

const Subsystem = () => {
    return(
        <SubsystemContainer>
            <SubsystemH1 id="subsystem">
                Subsystems
            </SubsystemH1>
            <SubsystemWrapper>
                <SubsystemCard>
                <SubsystemIcon src={adcs}/>
                <SubsystemH2>ADCS</SubsystemH2>
                <SubsystemP>ADCS has to exercise control over orientation of satellite by having the required accuracy and meeting other constraints like power and computational complexity. This is necesssary to point the onboard payloads at the right direction, transmit the payload data over the ground station accurately and ensure a stable satellite.</SubsystemP>

                
                </SubsystemCard>

                <SubsystemCard>
                <SubsystemIcon src={comms}/>
                <SubsystemH2>COMMS</SubsystemH2>
                <SubsystemP>The Communications and Ground Station Subsystem or COMMS is responsible for the exchange of information to and fro from the satellite.The Parikshit satellite will be identified by its call sign transmitted in every beacon packet, which can be used to track the satellite once operational.</SubsystemP>

                
                </SubsystemCard>
                
                
                <SubsystemCard>
                <SubsystemIcon src={eps}/>
                <SubsystemH2>EPS</SubsystemH2>
                <SubsystemP>The Electrical Power Subsystem or EPS is responsible for harnessing, conditioning, storing and distributing power on-board the satellite. It also deals with the design and soldering of the PCBs that we use for testing. All the PCBs that we use are designed and soldered in-house.</SubsystemP>

                
                </SubsystemCard>

                <SubsystemCard>
                <SubsystemIcon src={odhs}/>
                <SubsystemH2>ODHS</SubsystemH2>
                <SubsystemP>The ODHS subsystem deals with a variety of tasks that include working with both hardware as well as software. The subsystem also works on the various algorithms that are required to effectively process and use the acquired data and also ensure that the tasks of the satellite run in an ordered manner.</SubsystemP>

                
                </SubsystemCard>

        
                <SubsystemCard>
                <SubsystemIcon src={payload}/>
                <SubsystemH2>Payload</SubsystemH2>
                <SubsystemP>For a satellite, payload simply means the mission of the satellite. Parikshit has two payloads.Thermal infrared camera, that will take thermal infrared images of the Indian subcontinent and an Electrodynamic Tether, will be used for deorbiting the satellite after its life (expected to be 6 months).</SubsystemP>

                
                </SubsystemCard>

                <SubsystemCard>
                <SubsystemIcon src={stms}/>
                <SubsystemH2>STMS</SubsystemH2>
                <SubsystemP>Structures, thermal and mechanisms subsystem or STMS is responsible for designing, fabricating and assembling final structure of the satellite. While doing so, subsystem ensures that structure can withstand all launch loads and vibrations and exposure to space radiation during life of mission.</SubsystemP>

                
                </SubsystemCard>

                <SubsystemCard2>
                <SubsystemIcon src={mgmt}/>
                <SubsystemH2>Management</SubsystemH2>
                <SubsystemP>The Management subsystem is responsible for all the backend operations that go on within the team. It deals with tasks such as filing for reimbursements, getting administrative permissions, public relations, finding publication oppurtunities in conferences and journals and other logistical work.</SubsystemP>

                
                </SubsystemCard2>
                

                
            </SubsystemWrapper>
        </SubsystemContainer>
    )
}

export default Subsystem;