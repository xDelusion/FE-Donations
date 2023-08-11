import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRecipientById } from "../api/bloodRequest";

export const BloodRequestInfo = ({ recipientId }) => {
  const queryClient = useQueryClient();
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipients", recipientId],
    queryFn: () => getRecipientById(recipientId),
  });
};
