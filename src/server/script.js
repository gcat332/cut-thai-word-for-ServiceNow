import { gs } from "@servicenow/glide";
import { cutThaiWord } from "../server/function/cutword.js";

export function cutThWord(words) {
  try {
    var answer = cutThaiWord(words);
    if (words != answer) {
      gs.info("[cut-thai-word] Completed ");
      return answer.toString();
    } else {
      gs.info("[cut-thai-word] Completed without updates");
      return words;
    }
  } catch (err) {
    gs.info("[cut-thai-word] Error : " + err.message);
  }
}
