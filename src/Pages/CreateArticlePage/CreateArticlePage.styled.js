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
    // height: calc(100vh - 4.5rem);
    height: 100%;
    .category {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      background-color: #53b7ba;
      // padding: 0.65rem 1.2rem;
      padding: 0.65rem 1rem;
      align-items: center;
      cursor: pointer;
      justify-content: space-between;

      font-size: 1.1rem;
      font-weight: 700;
    }

    input {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      background-color: #fff;
      padding: 0.9rem 1rem;
      border: 1px solid #ccc;
      font-size: 1rem;
      &:focus {
        outline: none;
      }
    }

    textarea {
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;

      display: flex;
      background-color: #fff;
      padding: 0.9rem 1rem;
      border: 1px solid #ccc;
      resize: none;
      &:focus {
        outline: none;
      }
    }
  }
`;

export default { CreateArticlePage };
