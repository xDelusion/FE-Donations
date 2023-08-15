import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDonorById } from "../api/donorProfile";

const DonorDetail = ({ donorId }) => {
  const queryClient = useQueryClient();
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["donor_req_id", donorId],
    queryFn: () => getDonorById(donorId),
  });
};

export default DonorDetail;
