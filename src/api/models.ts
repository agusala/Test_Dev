export interface Modelos {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
}

export interface ModelDetail {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
  model_features: {
    name: string;
    description: string;
    photo: string;
  }[];
  model_highlights: {
    title: string;
    content: string;
    image: string;
  }[];
}

export async function getModels(): Promise<Modelos[]> {
  const response = await fetch("https://challenge.egodesign.dev/api/models/");
  if (!response.ok) {
    throw new Error("Failed to fetch models");
  }
  const data: Modelos[] = await response.json();
  return data;
}

export async function getModelDetail(id: number): Promise<ModelDetail> {
  const response = await fetch(
    `https://challenge.egodesign.dev/api/models/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch model detail");
  }
  const data: ModelDetail = await response.json();
  return data;
}
