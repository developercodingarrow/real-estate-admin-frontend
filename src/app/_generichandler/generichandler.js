export const genericOnlyImageUplodHandler = (uploadFunction) => {
  return async (selectedFile, imageFor, id = null) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append(imageFor, selectedFile);

      // Add the id to the FormData
      if (id) {
        formDataToSend.append("_id", id);
      }
      const result = await uploadFunction(formDataToSend, id);

      return result;
    } catch (error) {}
  };
};
