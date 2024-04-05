import { getCompanies } from "@/api/getFranchises";
import { useQuery } from "react-query";

export default function useGetCompany(id: string | undefined) {
  const { data, isLoading } = useQuery(
    ["company-details", { game_id: id }],
    () => getCompanies(id),
    {
      staleTime: 10000,
    }
  );
  console.log(data);
  return {
    data,
    isLoading,
  };
}
