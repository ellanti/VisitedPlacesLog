import axios from "axios";

type Location = {
  display_name?: string;
  address?: Address;
  error?: string;
};

type Address = {
  state?: string;
  country?: string;
};

export const getLocationName = async (latitude: number, longitude: number) => {
  const nameUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;
  const response = await axios.get(nameUrl);
  const location: Location = response.data;
  if (location.error) return "N/A";
  else {
    const placeName =
      location.address?.state ||
      location.address?.country ||
      location.display_name;
    return placeName;
  }
};
