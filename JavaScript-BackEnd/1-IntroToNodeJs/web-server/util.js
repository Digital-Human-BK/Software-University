const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{{title}}}</title>
</head>
<body>
  <h1>{{{title}}} Page</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/catalog">Catalog</a></li>
    </ul>
  </nav>
  {{{page}}}
</body>
</html>`;

function layout(title ='Home', page){
  return template.replace(/{{{title}}}/g, title).replace(/{{{page}}}/, page)
}

module.exports = layout;