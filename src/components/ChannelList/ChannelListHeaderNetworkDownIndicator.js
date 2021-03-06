import React, { useContext } from 'react';
import styled from '@stream-io/styled-components';

import { TranslationContext } from '../../context';

const Container = styled.View`
  align-items: center;
  background-color: #fae6e8;
  justify-content: center;
  padding: 3px;
  width: 100%;
  ${({ theme }) => theme.channelListHeaderErrorIndicator.container.css}
`;

const ErrorText = styled.Text`
  color: red;
  padding: 3px;
  font-size: 12px;
  font-weight: bold;
  ${({ theme }) => theme.channelListHeaderErrorIndicator.errorText.css}
`;

const ChannelListHeaderNetworkDownIndicator = () => {
  const { t } = useContext(TranslationContext);
  return (
    <Container>
      <ErrorText>{t('Connection failure, reconnecting now ...')}</ErrorText>
    </Container>
  );
};

export default ChannelListHeaderNetworkDownIndicator;
