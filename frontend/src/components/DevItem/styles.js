import styled from 'styled-components';

export const DevItem = styled.li`
  background: #fff;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
      }
    }

    button {
      border: 0;
      background: none;
    }
  }

  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }

  a {
    color: #8e4dff;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #5a2ea6;
    }
  }
`;

export const UserInfo = styled.div`
  margin-left: 10px;
  display: block !important;

  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }
`;
