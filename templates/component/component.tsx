import React from 'react';
import { ContainerTemplateName } from './TemplateName.styles';

const TemplateName: React.FC = ({ children }) => (
  <ContainerTemplateName data-testid="TemplateName">
    TemplateName Component {children}
  </ContainerTemplateName>
);

export default TemplateName;
