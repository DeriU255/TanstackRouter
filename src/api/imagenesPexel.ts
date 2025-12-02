export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

export interface PexelsResponse {
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
  next_page: string;
}

const PEXELS_API_KEY = 'FCq8nq7ks5GpitnZdxWKxv6JhuLNYYSNuP2QwpQxoEQarZulZlGINeCr';

export const fetchPexelsImages = async (query: string = 'Tigers'): Promise<PexelsResponse> => {
  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=10`, {
    headers: {
      Authorization: PEXELS_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener imágenes de Pexels');
  }

  return response.json();
};
