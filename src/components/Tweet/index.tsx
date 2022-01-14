import React from 'react';

import { Container, Retweeted, Icon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => { 
    return ( 
        <Container> 
            <Retweeted>
                <Icon/> 
                Você retweetou 
            </Retweeted> 

            <Body> 
                <Avatar /> 

                <Content> 
                    <Header> 
                        <strong> Savio Lopes</strong>
                        <span> @savio123</span>
                         <Dot /> 

                        <time> 12 de out</time> 
                    </ Header>
                    
                    <Description>
                        Importante
                    </Description> 

                    <ImageContent /> 
                    <Icons> 
                        <Status> 
                            <CommentIcon /> 
                            20 
                        </Status>

                        <Status> 
                            <RetweetIcon /> 
                            20 
                        </Status>

                        <Status> 
                            <LikeIcon /> 
                            202 
                        </Status>    
                    </ Icons>
                </ Content> 
            </ Body> 
        </ Container> 
    );
}

export default Tweet;