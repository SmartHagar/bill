/** @format */

import ModalDefault from "@/components/modal/ModalDefault";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import usePembayaranApi from "@/stores/api/Pembayaran";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import slide from "./slide";
import LightPlugins from "@/components/lightBox/LightPlugins";

type Props = {
  setModalRiwayat: Dispatch<SetStateAction<boolean>>;
  modalRiwayat: boolean;
};

const Riwayat: FC<Props> = ({ setModalRiwayat, modalRiwayat }) => {
  // store
  const { setPembayaranStatus, dtPembayaran } = usePembayaranApi();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const fetchData = useCallback(
    async (status: string) => {
      await setPembayaranStatus({
        status,
      });
    },
    [setPembayaranStatus]
  );

  useEffect(() => {
    if (modalRiwayat) {
      fetchData("lunas");
    }
  }, [fetchData, modalRiwayat]);
  // table
  const headTable = [
    "No",
    "Nama",
    "Tgl. Angsuran",
    "Status",
    "Bukti Pembayaran",
  ];
  const tableBodies = [
    "terima_pinjam.pinjaman.anggota.nm_anggota",
    "tgl_bayar",
    "status_bayar",
    "bukti_bayar",
  ];

  const [slides, setSlides] = useState<any>();
  const [indexBox, setIndexBox] = useState<number>(-1);
  useEffect(() => {
    setSlides(slide(dtPembayaran.data));
  }, [dtPembayaran.data]);

  return (
    <ModalDefault
      setShowModal={setModalRiwayat}
      showModal={modalRiwayat}
      title="Riwayat Pembayaran"
    >
      {/* lightBox */}
      <LightPlugins index={indexBox} setIndex={setIndexBox} slides={slides} />
      {/* table */}
      <TablesDefault
        headTable={headTable}
        tableBodies={tableBodies}
        dataTable={dtPembayaran.data}
        page={page}
        limit={limit}
        ubah={false}
        hapus={false}
        setIndexBox={setIndexBox}
      />
      {dtPembayaran?.last_page > 1 && (
        <div className="mt-4">
          <PaginationDefault
            currentPage={dtPembayaran?.current_page}
            totalPages={dtPembayaran?.last_page}
            setPage={setPage}
          />
        </div>
      )}
    </ModalDefault>
  );
};

export default Riwayat;
