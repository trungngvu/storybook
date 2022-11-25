import "../../dist/output.css";

interface TableProps {}

/**
 * Primary UI component for user interaction
 */
export const Table = ({}: TableProps) => {
  const columns = [
    {
      title: "Mã dự án",
      field: "id",
    },
    {
      title: "Tên dự án",
      field: "name",
    },
    {
      title: "Ngày bắt đầu",
      field: "startDate",
    },
    {
      title: "Ngày kết thúc",
      field: "endDate",
    },
    {
      title: "Người quản trị",
      field: "admin",
    },
    {
      title: "Trạng thái",
      field: "status",
    },
  ];
  const data = [
    {
      id: 26631,
      name: "Báo cáo",
      startDate: "10/11/2022",
      endDate: "10/11/2022",
      admin: "Bùi Tân Thân",
      status: "Chưa thực hiện",
    },
    {
      id: 26631,
      name: "Báo cáo",
      startDate: "10/11/2022",
      endDate: "10/11/2022",
      admin: "Bùi Tân Thân",
      status: "Chưa thực hiện",
    },
    {
      id: 26631,
      name: "Báo cáo",
      startDate: "10/11/2022",
      admin: "Bùi Tân Thân",
      status: "Chưa thực hiện",
    },
    {
      id: 26631,
      name: "Báo cáo",
      startDate: "10/11/2022",
      endDate: "10/11/2022",
      admin: "Bùi Tân Thân",
      status: "Chưa thực hiện",
    },
  ];
  return (
    <table className="border-collapse">
      <tr>
        {columns.map((header) => (
          <td className="text-center py-3 px-9 border-[#E1E1E1] bg-[#E1E1E1]">
            {header.title}
          </td>
        ))}
      </tr>
      {data.map((row) => (
        <tr>
          {columns.map((header) =>
            header.field in row ? (
              <td className="text-center border py-3 px-9">
                {row[header.field as keyof typeof row]}
              </td>
            ) : (
              <td className="text-center border py-3 px-9">-</td>
            )
          )}
        </tr>
      ))}
    </table>
  );
};
