import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "no-discount",
            label: "No Discount",
          },
          {
            value: "with-discount",
            label: "With Discount",
          },
        ]}
      />

      <SortBy
        options={[
          {
            value: "name-asc",
            label: "Sort by name (A-Z)",
          },
          {
            value: "name-desc",
            label: "Sort by name (Z-A)",
          },
          {
            value: "regularPrice-asc",
            label: "Sort by price (lowest to highest)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by price (highest to lowest)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort by Capacity (lowest to highest)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by Capacity (highest to lowest)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
