function extractFile(path) {
  let startIndex = path.lastIndexOf("\\");
  let endIndex = path.lastIndexOf(".");

  let fileName = path.substring(startIndex+1, endIndex)
  let extension = path.substring(endIndex + 1);

  console.log(`File name: ${fileName}\nFile extension: ${extension}`)
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')