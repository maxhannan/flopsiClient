import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { getUserQuery } from "../Utilities/AuthMutations";

const Profile = () => {
  const { loading, error, data } = useQuery(getUserQuery, {
    fetchPolicy: "no-cache",
  });

  if (loading) return <CircularProgress color="secondary" />;
  return <h1>{data.getCurrentUser.email}</h1>;
};

export default Profile;
