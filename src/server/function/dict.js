import { acronyms } from "../dict/dict_acronyms.js";
import { city } from "../dict/dict_city.js";
import { collection } from "../dict/dict_collection.js";
import { country } from "../dict/dict_country.js";
import { district } from "../dict/dict_district.js";
import { geo } from "../dict/dict_geo.js";
import { ict } from "../dict/dict_ict.js";
import { nhso } from "../dict/dict_nhso.js";
import { stopword } from "../dict/dict_stopword.js";

export var dict = Array.from(
  new Set(
    collection.concat(
      nhso,
      ict,
      acronyms,
      geo,
      country,
      city,
      district,
      //stopword,
    ),
  ),
);
