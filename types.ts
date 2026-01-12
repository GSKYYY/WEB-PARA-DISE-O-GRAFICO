export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Hour {
  day: string;
  time: string;
}
