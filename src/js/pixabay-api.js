import axios from 'axios';

export async function fetchData(userInput, page, perPage) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=42390254-a1d01e86edd47d7ed3c2f6c78&q=${userInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}