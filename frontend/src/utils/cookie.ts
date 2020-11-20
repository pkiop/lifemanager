export const getCookie = (name: string) => {
  const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return value ? value[2] : null;
};

export const deleteCookie = (name: string) => {
  const date = new Date();
  document.cookie = `${name}= ; expires=${date.toUTCString()}; path=/`;
};
