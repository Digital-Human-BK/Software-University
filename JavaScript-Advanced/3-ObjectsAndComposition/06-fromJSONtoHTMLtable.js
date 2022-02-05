function fromJSONToHTMLTable(json) {
  let arr = JSON.parse(json);
  let outputArr = ["<table>"];

  outputArr.push(makeKeyRow(arr));

  arr.forEach(obj => outputArr.push(makeKeyValue(obj)));

  outputArr.push("</table>");


  console.log(outputArr.join('\n'));
  // functions
  function makeKeyRow(arr) {
    let keys = Object.keys(arr[0]);

    let result = ' <tr>';

    keys.forEach(key => {
      result += `<th>${escapeHtml(key)}</th>`;
    })

    result += '</tr>';
    return result;
  };

  function makeKeyValue(obj) {
    let keys = Object.keys(obj);

    let result = ' <tr>';

    keys.forEach(key => {
      result += `<td>${escapeHtml(obj[key])}</td>`;
    })
    result += '</tr>';
    return result;
  };

  function escapeHtml(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}
fromJSONToHTMLTable([
  '[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]'
]);
fromJSONToHTMLTable([
  '[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]'
]);
fromJSONToHTMLTable([
  '[{"Name":"Pesho", "Score":4, " Grade":8}, {"Name":"Gosho", "Score":5, " Grade":8}, {"Name":"Angel", "Score":5.50, " Grade":10}]'
]);