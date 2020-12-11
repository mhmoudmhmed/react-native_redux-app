/* eslint-disable prettier/prettier */
export const selectedLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId,
  };
};
