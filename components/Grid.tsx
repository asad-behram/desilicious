import { TableData } from "@/common/interface"
import { Table } from "antd"

const Grid = ({
  dataSource,
  columns
}: TableData) => {
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50', '100']
        }}
      />
    </>
  )
}

export default Grid