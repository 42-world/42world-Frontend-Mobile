import styled from 'styled-components';

import GlobalStyled from 'Styled/Global.styled';

const CreateArticlePage = styled.div`
  .page_header {
    position: fixed;

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
    @media (min-width: ${GlobalStyled.theme.mobileMinWidth}) {
      width: ${GlobalStyled.theme.desktopWidth};
    }

    svg {
      cursor: pointer;
    }

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
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    min-height: calc(100vh - 4.5rem);

    .category {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      background-color: #53b7ba;
      padding: 0.65rem 1rem;
      align-items: center;
      cursor: pointer;
      justify-content: space-between;

      font-size: 1.1rem;
      font-weight: 700;
    }

    form {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      input {
        top: 4.5rem;
        flex-grow: 0;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        background-color: #fff;
        padding: 0.9rem 1rem;
        border: 1px solid
          ${GlobalStyled.theme.createArticlePageInputBorderColor};
        font-size: 1rem;
        &:focus {
          outline: none;
        }
      }

      .editor {
        flex-grow: 1;
        box-sizing: border-box;
        width: 100%;
        .toastui-editor-dropdown-toolbar {
          flex-wrap: wrap;
          height: auto;
          width: min-content;
        }
        .toastui-editor-popup {
          width: auto;
          max-width: 400px;
          .toastui-editor-file-select-button {
            width: auto;
            padding: 0 4px;
            font-size: 0.7rem;
          }
          @media (max-width: 480px) {
            margin-left: 0px;
          }
        }
      }
    }

    .category_form {
      * {
        border: none !important;
        border-bottom: none !important;
      }
      *:hover {
        border: none !important;
        border-bottom: none !important;
      }
      *::before {
        border: none !important;
        border-bottom: none !important;
      }
      *::after {
        border: none !important;
        border-bottom: none !important;
      }

      select {
        color: ${GlobalStyled.theme.categoryNameTextColor};
        font-size: 1.1rem;
        font-weight: 700;
        padding-top: 0;
        padding-bottom: 0;
      }
      svg {
        color: ${GlobalStyled.theme.categoryNameTextColor};
      }
    }
  }
`;

export default { CreateArticlePage };
