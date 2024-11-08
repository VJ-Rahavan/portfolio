import React from 'react';
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
  TechnologyIcon,
} from '../styles/Technologies.styled';
import { iconsData } from './icons';

const Technologies = () => {
  return (
    <TechnologiesContainer>
      <TechnologiesHeader>
        Familiar? Let’s just say I know these technologies inside out.
      </TechnologiesHeader>

      <TechnologiesIcons>
        {iconsData.map((iconData) => {
          return (
            <TechnologyIcon
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
          );
        })}
      </TechnologiesIcons>
    </TechnologiesContainer>
  );
};

export default Technologies;
