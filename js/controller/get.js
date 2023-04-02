import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTable(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = 
  isiTabel.replace("#NAMA#", value.biodata_mahasiswa.nama)
          .replace("#NPM#", value.biodata_mahasiswa.npm)
          .replace("#DOSENPEMBIMBING#", value.dosen_pembimbing.nama)
          .replace("#DOSENPENGUJI#", value.dosen_penguji.nama)
          .replace("#JUDUL#", value.judul)
          .replace("#TANGGALSIDANG#", value.tanggal_sidang)

          .replace("#WARNA#", getRandomColor())
          .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}