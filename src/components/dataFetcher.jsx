import axios from "axios";
// import { useParams } from "react-router-dom";

const FetchData = async ({ params }) => {
  try {
    const response = await axios.get(
      `https://threemttapi-ryoj.onrender.com/${params.id}`,
    );

    let data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
const FullData = async ({ params }) => {
  try {
    const response = await axios.get(`https://threemttapi-ryoj.onrender.com/`);

    let fullData = response.data;
    // Randomize (shuffle) the array
    for (let i = fullData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements
      [fullData[i], fullData[j]] = [fullData[j], fullData[i]];
    }
    return fullData;
  } catch (err) {
    console.log(err);
  }
};
export {FetchData as default, FullData};
