import axios from "axios";

const apiKey = "400c8180e1b540a99102c3482600eade";

const fetchNewsApi = async (selectedSport) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`,
      {
        params: {
          category: selectedSport.toLowerCase(),
        },
      }
    );

    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export default fetchNewsApi;
