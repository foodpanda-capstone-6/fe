const AUTH_COOKIE_KEY = "username";

const getCookieValue = (key: string): string | null => {
  var nameEQ = key + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const eraseCookie = (name: string) => {
  document.cookie = name + "=; Max-Age=-99999999;";
};


export const setAuthCookie = (value: string) => {
  var expires = "";
  var date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
  expires = "; expires=" + date.toUTCString();
  document.cookie =
    AUTH_COOKIE_KEY + "=" + (value || "") + expires + "; path=/";
};


export const getAuthCookie = (): ReturnType<typeof getCookieValue> => {
  return getCookieValue(AUTH_COOKIE_KEY);
};

export const getUsernameFromCookie = getAuthCookie

export const eraseAuthCookie = () => {
  eraseCookie(AUTH_COOKIE_KEY);
};
