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
    .replace("#DOSENPEMBIMBING#", value.biodata.jabatan)
    .replace("#DOSENPENGUJI#", value.location)
    .replace("#JUDUL#", value.checkin)
    .replace("#TANGGALSIDANG#", value.biodata.hari_kerja)
    .replace("#JAMKERJA#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].durasi : "#JAMKERJA")
    .replace("#JAMMASUK#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_masuk : "#JAMMASUK")
    .replace("#JAMKELUAR#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_keluar : "#JAMMKELUAR")
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}