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
  wishlist: any[];
};
export const updateUser = async (
<<<<<<< HEAD
  { username, email, bio, tags, picture, walletAddress },
  id,
  wishlist: updateUser
=======
  { username, email, bio, tags, picture, walletAddress, wishlist },
  id: updateUser
>>>>>>> dbe52515ad1a7cfcad0225d60da85dfb7a644e83
) => {
  // const { address } = useAccount();

  console.log(username, picture,wishlist);
  await axios
    .put(`${URLEndpoint}user/${id}`, {
      username: username,
      email: email,
      Bio: bio,
      tags: tags,
      picture: picture,
      walletAddress: walletAddress,
      wishList: wishlist,
    })
    .then((result) => {
      console.log(result);
      return result.data;
    })
    .catch((err) => console.log(err));
};
