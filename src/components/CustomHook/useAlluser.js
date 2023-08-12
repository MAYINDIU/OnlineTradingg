import { useEffect, useState } from "react";

const useAlluser = () => {
  const [user, setUser] = useState([]);
  const [relode, setRelode] = useState(false);
  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setRelode(!relode);
      });
  }, [relode]);
  return [user, setUser];
};

export default useAlluser;