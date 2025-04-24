import { API_URL, RANDOM_WORDS_API_PATH } from '../utils/constants';

const randomWordsService = async () => {
  try {
    // improvement: trocar para Axios e criar um client
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // 10 segundos

    const response = await fetch(
      `${API_URL}${RANDOM_WORDS_API_PATH}`, {
        method: 'GET',
        signal: controller.signal
      }
    );

    clearTimeout(timeout);
    const data = await response.json();
    return data;
  } catch (error) {
    // Fallback: 
    // return {"data":["snipping","trump","husked","slurp","rack"]}
    // log de erro
    throw new Error("Failed to fetch random words", error);
  }
};

module.exports = { randomWordsService };