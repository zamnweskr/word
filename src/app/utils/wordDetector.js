async function checkIfWord(line) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${line}`);

    if (response.ok) {
      await response.json();
      console.log(`"${line}" is a valid word!`);
      return true;
    } else {
      console.log(`"${line}" is not a valid word`);
      return false;
    }
  } catch (error) {
    console.log('Error checking word:', error);
    return false;
  }
}
export default checkIfWord