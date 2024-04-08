/** @format */

// pinjaman
interface PinjamanTypes {
  id: string | number;
  anggota_id: string | number;
  tgl_pinjam: Date | string;
  lama_pinjam: Date | string;
  nominal: number;
  status: string;
  angsuran: number;
}

export default PinjamanTypes;
