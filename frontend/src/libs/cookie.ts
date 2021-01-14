export const getCookie = (name: string) => {
  const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return value ? value[2] : null;
};

export const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; path=/ `;
};

export const deleteCookie = (name: string) => {
  const date = new Date();
  document.cookie = `${name}= ; expires=${date.toUTCString()}; path=/`;
};
