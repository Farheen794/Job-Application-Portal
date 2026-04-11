import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchedQuery } = useSelector((store) => store.job);

  useEffect(() => {
    const fetchAllJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        if (searchedQuery?.filterType === "Location") params.append("location", searchedQuery.value);
        if (searchedQuery?.filterType === "Technology") params.append("keyword", searchedQuery.value);
        if (searchedQuery?.filterType === "Experience") params.append("experience", searchedQuery.value);
        if (searchedQuery?.filterType === "Salary") params.append("salary", searchedQuery.value);

        const res = await axios.get(
          `${JOB_API_ENDPOINT}/get?${params.toString()}`,
          {
            withCredentials: true,
          }
        );
        console.log("API Response:", res.data);
        if (res.data.status) {
          // Updated success check
          dispatch(setAllJobs(res.data.jobs));
        } else {
          setError("Failed to fetch jobs.");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, [dispatch, searchedQuery]); // Add searchedQuery to dependencies

  return { loading, error };
};

export default useGetAllJobs;
