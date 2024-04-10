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

  console.log({ dtPembayaran });
  // table
  const headTable = ["No", "Tgl. Angsuran", "Status", "Bukti Pembayaran"];
  const tableBodies = ["tgl_bayar", "status_bayar", "bukti_bayar"];
  return (
    <ModalDefault
      setShowModal={setModalRiwayat}
      showModal={modalRiwayat}
      title="Riwayat Pembayaran"
    >
      <TablesDefault
        headTable={headTable}
        tableBodies={tableBodies}
        dataTable={dtPembayaran.data}
        page={page}
        limit={limit}
        ubah={true}
        hapus={false}
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
