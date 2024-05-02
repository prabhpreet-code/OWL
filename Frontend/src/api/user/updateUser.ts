import axios from "axios";
import { URLEndpoint } from "../games/getGames";
import { useAccount } from "wagmi";

type updateUser = {
  username: string;
  email: string;
  bio: string;
  tags: [string];
  picture: string;
  walletAddress: `0x${string}` | undefined;
};
export const updateUser = async ({
  username,
  email,
  bio,
  tags,
  picture,
  walletAddress,
},id: updateUser) => {
  // const { address } = useAccount();

  console.log(username, picture);
  await axios
    .put(`${URLEndpoint}user/${id}`, {
      username: username,
      email: email,
      Bio: bio,
      tags: tags,
      picture: picture,
      walletAddress: walletAddress,
    })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => console.log(err));
};
