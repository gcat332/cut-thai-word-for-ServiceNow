import { GlideRecord, gs } from "@servicenow/glide";
import { dict } from "./dict.js";

export function cutThaiWord(words) {
  //check with thai dict
  words = dictWord(dict, words);
  return words.toString().replaceAll("  ", " ");
}

function dictWord(dict, words) {
  for (var word in dict) {
    if (words.includes(dict[word])) {
      words = words.toString().replaceAll(dict[word], " " + dict[word] + " ");
    }
  }
  gs.info(words);
  return words.toString().replaceAll("  ", " ");
}
