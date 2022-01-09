export function url(path) {
  const version = "v1"; // process.env.REACT_APP_API_VERSION

  return `https://42world.kr/api/${version}/${path}`;
}

export function getAccessToken() {
  // localStorage
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
}
