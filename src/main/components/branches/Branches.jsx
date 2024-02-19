import { useSelector } from "react-redux";
import { Branch } from "./Branch";
export const Branches = () => {
  const { branches } = useSelector((state) => state.branch);
  return (
    <>
      {branches.map((branch) => (
        <div key={branch.id}>
          <Branch branch={branch} onEdit={onEdit} onDelete={onDelete}/>
        </div>
      ))}
    </>
  );
};
