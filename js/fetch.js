import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTabel, isiTablePresensi } from "./controller/get.js";
import { urlAPI } from "./config/url.js";
get(urlAPI, isiTabel);
