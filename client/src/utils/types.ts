export interface iPost {
  uuid: string;
  username: string;
  createdAt: number;
  text: string;
  likes: number;
  media?: string;
}

export interface iUser {
  uuid: string;
  username: string;
}

export interface newUser {
  username: string;
  email: string;
  birthday: number;
  password: string;
}
