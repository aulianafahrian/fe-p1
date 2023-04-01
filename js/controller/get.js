import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = isiTabel
    .replace("#NAMA#", value.biodata_mahasiswa.nama)
    .replace("#NPM#", value.biodata_mahasiswa.npm)
    .replace("#DOSENPEMBIMBING#", value)
    .replace("#DOSENPENGUJI#", value.location)
    .replace("#JUDUL#", value.checkin)
    .replace("#TANGGALSIDANG#", value.biodata.hari_kerja)

    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}