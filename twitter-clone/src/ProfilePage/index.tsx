import React from 'react';

import Feed from '../components/Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
        <Container> 
            <Banner> 
                <Avatar></ Avatar> 
            </Banner>
        
            <ProfileData> 
                <EditButton outlined>Editar perfil</EditButton> 
            
                <h1> Savio Lopes</h1> 
                <h2> @savio123 </h2>

                <p> 
                    Estudante de Análise e Desenvolvimento de Sistemas
                </p>

                <ul> 
                    <li> 
                        <LocationIcon /> 
                        Canas/SP 
                    </li> 


                    <li> 
                        <CakeIcon /> 
                        Nascido(a) em 17 de Junho 
                    </li>
                </ul>

                <Followage> 
                    <span>
                        seguindo <strong> 34 </strong> 
                    </span>

                    <span>
                        <strong> 12 </strong> seguidores
                    </span>  
                </Followage>
            </ProfileData> 
            <Feed />
        </Container> 
  );
}

export default ProfilePage;