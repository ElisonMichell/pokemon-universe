import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.md};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.spacing.md};
  transition: background 0.3s, color 0.3s, border 0.3s;
  color: ${props => props.theme.colors.text}

  h3 {
    margin-bottom: ${(props) => props.theme.spacing.lg};
  }

  li {
    list-style: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.xs};
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Types = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${(props) => props.theme.spacing.sm};
`