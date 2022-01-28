export function url(path) {
  // const version = 'v1'; // process.env.REACT_APP_API_VERSION

  return `https://api-alpha.42world.kr${path}`;
  // return `http://localhost:8888${path}`;
}

// 없어도 되는 코드
// export function getAccessToken() {
//   // localStorage
//   return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
// }
