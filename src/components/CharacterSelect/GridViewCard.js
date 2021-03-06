import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { characterPortraits } from '../../constants/characterPortraits';

const Container = styled.View`
    margin-vertical: 5;
    margin-horizontal: 5;
    margin-bottom: 12;
`;
const CharacterCard = styled.TouchableOpacity`
    margin-left: 5;
    margin-right: 5;
    height: 95;
    width: 64;
    margin-bottom: 10;
`;
const StarIcon = styled(FontAwesomeIcon)`
    color: #FF412C
    font-size: 30;
    opacity: ${({favorite}) => favorite ? 1 : 0.6}}
`;
const StarButton = styled.TouchableOpacity`
    position: absolute;
    top: -15;
    right: -10;
`;
const Name = styled.Text`
  color: white;
  text-align: center;
  flex-wrap: wrap;
`;

const CharacterImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const GridViewCard = ({ label, favorite, onPress, onStarPress, displayName }) => (
    <Container >
        <CharacterCard onPress={onPress}>
            <CharacterImage source={characterPortraits[label]} />
            <StarButton onPress={onStarPress}>
                <FontAwesomeIcon style={{opacity: favorite ? 1 : 0.7}} size={32} color='#FF412C' icon={favorite ? 'star' : ['far', 'star']} />
            </StarButton>
        </CharacterCard>
        <Name>{displayName}</Name>
    </Container>
);

GridViewCard.propTypes = {
    label: PropTypes.string,
    favorite: PropTypes.bool,
    onPress: PropTypes.func,
    onStarPress: PropTypes.func,
    displayName: PropTypes.string,
};

export default GridViewCard;
