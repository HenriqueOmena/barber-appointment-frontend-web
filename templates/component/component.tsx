import React from 'react';
import { TemplateNameContainer } from './TemplateName.styles';

const TemplateName: React.FC = ({ children }) => (
  <TemplateNameContainer data-testid="TemplateName">
    TemplateName Component {children}
  </TemplateNameContainer>
);

export default TemplateName;
