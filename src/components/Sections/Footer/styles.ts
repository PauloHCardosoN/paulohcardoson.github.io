import styled from 'styled-components';

import { secundaryColor } from '../../../values/colors';
import { CodeFont } from '../../../values/fonts';

export const Container = styled.footer`
  width: 100%;
  line-height: 22.5px;
  padding: 20px;
  text-align: center;
  font-family: ${CodeFont};
  font-size: 14px;
`

export const DesignedAndBuilt = styled.p`
  color: #ccd6f6;

  a {
    color: ${secundaryColor};
    text-decoration: none;

    :hover{
      text-decoration: underline;
    }
  }
`