import StickyBox from 'react-sticky-box';
import React from 'react';
import { Container, SearchWrapper, SearchInput, SearchIcon, Body} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import New from '../New';

const Sidebar: React.FC = () => {
  return (
      <Container> 
            <SearchWrapper> 
                <SearchInput placeholder = "Buscar no Twitter" />
                <SearchIcon /> 
            </SearchWrapper>

            <StickyBox>
            <Body>
                <List
                    title="Talvez você curta"
                    elements={[
                    
                    <FollowSuggestion
                        name="Nome 01"
                        nickname="@nome101"
                    />,
                    
                    <FollowSuggestion   
                        name="Nome 02" 
                        nickname="@nome202" 
                    />,
                    
                    <FollowSuggestion
                        name="Nome 03"
                        nickname="@nome303"
                    />,
                    ]}
                />    
                    <List 
                        title = "talvez você curta"
                        elements = {[<New/>, <New />, <New />]}
                    />     

                    <List 
                        title = "talvez você curta"
                        elements = {[<New/>, <New />, <New />]}
                    />     

                    <List 
                        title = "talvez você curta"
                        elements = {[<New/>, <New />, <New />]}
                    />
                </Body>
            </StickyBox>
        </Container>
    );
}

export default Sidebar;