import { TypeOfExpression } from "typescript";
import "../../dist/output.css";
import { Status, Undone, Done } from "./Status";

interface TableProps {}

/**
 * Primary UI component for user interaction
 */

interface rowDataType {
  title: string;
  percentage?: number;
}
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
      render: (rowdata: string | number | undefined) => {
        if (rowdata === "Chưa thực hiện") return <Status percentage={0} />;
        if (typeof(rowdata)==='number') return <Status percentage={rowdata} />;
        if (rowdata === "Tạm dừng") return <Undone />;
        if (rowdata === "Đã hoàn thành") return <Done />;
        return "";
      },
    },
  ];
  const data = [
    {
      id: 26631,
      name: "Báo cáo",
      startDate: "10/11/2022",
      endDate: "10/11/2022",
      admin: "Bùi Tân Thân",
      status: 60,
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
                {header.render
                  ? header.render(row[header.field as keyof typeof row])
                  : row[header.field as keyof typeof row]}
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
