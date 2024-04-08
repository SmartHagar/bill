/** @format */

// simpanan
interface SimpananTypes {
  id: string | number;
  anggota_id: string | number;
  nominal: number;
  tgl_simpanan: Date | string;
  ket_simpanan?: string;
}

export default SimpananTypes;
