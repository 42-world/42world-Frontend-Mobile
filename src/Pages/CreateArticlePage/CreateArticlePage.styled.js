import styled from 'styled-components';

const CreateArticlePage = styled.div`
  .header {
    background-color: rgba(42, 45, 56, 1);
    height: 10%;
  }
  .body {
    display: flex;
    flex-direction: column;
    height: 90%;
    .category {
      background-color: #53b7ba;
    }
    textarea {
      height: 1000px;
    }
  }
`;

export default { CreateArticlePage };
