//Let keyword used to make sure variables don't get delcared twice look like
// scope semantics is the next one
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
