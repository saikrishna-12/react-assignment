import axios from 'axios';

const BASE_URL = 'https://media-content.ccbp.in/website/react-assignment/resources.json';

export const fetchResources = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch resources');
  }
};