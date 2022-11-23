export const HEADER = {
  height: 55,
  titleSize: 16,
};

export const RETURN_URL = 'https://ruby.thietkewebsite.info.vn';

export const RESPONSE_CODE_VN_PAY = {
  userCancel: '24',
  success: '00',
};

export const PHONE_REGEX =
  /((086|096|097|098|032|033|034|035|036|037|038|039|088|091|094|083|084|085|081|082|089|090|093|070|079|077|076|078|092|056|058|099|059)+([0-9]{7})\b)/g;
// export const PHONE_REGEX =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const PHONE_LAOS = /^(\+|\d)[0-9]{7,16}$/;

export const EMAIL_REGEX =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
export const NUMBER_REGEX = /^[0-9]*$/;

export const NUMBER_FLOAT_REGEX = /^\d*\.?\d*$/;

export const CODE_REGEX = /^[a-zA-Z0-9]+$/;

export const ALPHABET_REGEX = /^[a-zA-Z ]*$/;

export const HO_CHI_MINH_CITY_REGION = {
  latitude: 10.762622,
  longitude: 106.660172,
  ...DEFAULT_MAP_DELTA,
};

export const DEFAULT_MAP_DELTA = {
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

export const APP_LANGUAGE = {
  vietnamese: 'vi',
  english: 'en',
};

export const TOAST_TYPE = {
  success: 'success',
  error: 'error',
};

export const MESSAGES_TYPE = {
  unread: 'unread',
  no_response: 'no_response', //only seller has no_response tab
};

export const CHECK_FAVORITE = {
  NO_LIKE: 0,
  LIKE: 1,
};
