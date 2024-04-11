function aiResponseParser(responseText) {
  const recipesArray = responseText.toLowerCase().split("breakpoint");
  return recipesArray;
}

export default aiResponseParser;
