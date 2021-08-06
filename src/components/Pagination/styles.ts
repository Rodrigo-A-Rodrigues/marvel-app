import styled from 'styled-components';

export const Container = styled.div`
  margin: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    list-style: none;

    li {
      margin: 0 0.4rem;

      button {
        background: transparent;
        color: #616480;
        padding: 0.5rem 0.7rem;
        font-weight: 600;
        transition: background 0.2s;

        &:hover {
          background: #F9F9F9;
          color: #0A0F0D;
        }
      }

      .current-page {
        background: #ED1B24;
        color: #FFFFFF;
      }
    }
  }
`;