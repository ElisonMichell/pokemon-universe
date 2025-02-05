import styled from 'styled-components'

export const Container = styled.button`
  flex: 1;
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.spacing.xl};
  color: ${ props => props.theme.colors.text};
  background: ${props => props.active && props.theme.colors.text+20};
  border: 1px solid ${ props => props.theme.colors.border};
  transition: background 0.3s, color 0.3s, border 0.3s;
  margin-bottom: ${props => props.theme.spacing.sm};
  cursor: pointer;

  :hover {
    background: ${props => !props.active && props.theme.colors.text+10};
  }
`

export const Ring = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${ props => props.theme.colors.background};
  border: 1px solid ${ props => props.theme.colors.border};
  transition: background 0.3s, color 0.3s, border 0.3s; 
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 600;
  gap: ${ props => props.theme.spacing.md};

  span {
    font-size: ${ props => props.theme.fonts.size.lg};
    text-transform: capitalize;
    text-align: start;
  }

  div {
    padding: ${ props => props.theme.spacing.xs } ${ props => props.theme.spacing.sm};
    background: ${ props => props.theme.colors.label};
    font-size: ${ props => props.theme.fonts.size.xs};
    color: ${ props => props.theme.colors.light};
    border-radius: ${ props => props.theme.spacing.lg};
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  gap: ${ props => props.theme.spacing.sm};
  flex-direction: column;
`

export const Types = styled.div`
  display: flex;
  gap: ${ props => props.theme.spacing.xs};
`