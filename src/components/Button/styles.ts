import styled, { css } from 'styled-components'
import { darken } from 'polished';

interface ButtonProps {
  width?: number;
}
export const Button = styled.button<ButtonProps>`${({ theme: { colors }, width }) => css`
  width: ${width}%;
  max-width: 100%;
  padding: 32px;
  margin: 0;
  word-break: break-word;
  background-color: ${colors.green};
  color: ${colors.themeColors.background};
  box-shadow: 0px 6px 0px ${darken(0.08, colors.green)};
  border: none;
  border-radius: 5px;
  font-family: Roboto, sans-serif !important;
  text-transform: uppercase;

  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
  /* line-height: 64px; */
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
`}`