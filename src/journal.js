export function Journal(title, body, author) {
  this.title = title,
    this.body = body,
    this.author = author,
    this.currentId = 0
}

Journal.prototype.countWords = function () {
  var entryArray = this.body.split(' ');
  var wordCount = 0;
  entryArray.forEach(function (entry) {
    wordCount += 1;

  });
  return wordCount;
}

Journal.prototype.getTeaser = function () {
  var teaser = [];
  var entryArray = this.body.split(' ');
  //console.log(entryArray);
  for (var i = 0; i < 8; i++) {
    teaser.push(entryArray[i]);

  }
  teaser = teaser.join(" ");
  return teaser;
}