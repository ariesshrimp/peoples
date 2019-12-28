const CONSTANTS = {
  BUSINESS_NAME: `People's Music Studio`,
  CONTACT: {
    PHONE_NUMBERS: {
      MAIN: `(503) 489-9701‬`
    },
    EMAILS: {
      MAIN: `lessons@peoplesmusic.studio`
    },
    ADDRESS: {
      MAIN: {
        STREET: `3730 NE Roselawn Street`,
        CITY: `Portland`,
        STATE: `OR`,
        ZIP_CODE: 97211,
        MAP_LINK: "https://goo.gl/maps/zGRtYBSqUwjdmiqf8"
      }
    }
  }
};

export default CONSTANTS;

export const standard_address = () =>
  `${CONSTANTS.CONTACT.ADDRESS.MAIN.STREET}, ${CONSTANTS.CONTACT.ADDRESS.MAIN.CITY}, ${CONSTANTS.CONTACT.ADDRESS.MAIN.STATE}, ${CONSTANTS.CONTACT.ADDRESS.MAIN.ZIP_CODE}`;
