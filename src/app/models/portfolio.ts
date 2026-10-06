export interface NavItem {
  _id: string;
  label: string;
  path: string;
  order: number;
}

export interface Home {
  _id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface About {
  _id: string;
  heading: string;
  text: string;
  image: string;
}

export interface Project {
  _id?: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}