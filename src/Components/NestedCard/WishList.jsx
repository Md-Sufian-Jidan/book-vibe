import { useState } from "react";
import { getWish } from "../../Utils/LocalStorage";
import WishListDetails from "./WishListDetails";

const WishList = () => {
    // const [wishs, setWish] = useState()
    const storedWishList = getWish();
    // setWish(storedWishList)
    return (
        <div>
            {
                storedWishList.map((wish) => <WishListDetails key={wish.id} wish={wish} />)
            }
        </div>
    );
};

export default WishList;