import styled from 'styled-components';

const CreateArticlePage = styled.div`
  .header {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    height: 4.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0.8rem;
    background-color: rgba(42, 45, 56, 1);
    color: #fff;

    div {
      flex-grow: 1;
      width: 100%;
      &:nth-child(2) {
        text-align: center;
      }
      &:nth-child(3) {
        text-align: right;
      }
    }

    span {
      display: inline-block;
      font-size: 1.3rem;
      font-weight: 700;
      text-align: center;
    }

    .submit_button {
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      border: 2px solid #fff;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    height: 90%;
    .category {
      background-color: #53b7ba;
      height: 40px;
      text-align: center;
    }
    textarea {
      height: 1000px;
    }
  }
`;

export default { CreateArticlePage };
