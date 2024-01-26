import { writable } from "svelte/store";

  type User = {
    name: string;
    lastname: string;
    section: string;
    email: string;
    phone: string;
    personalNumber: string;
  };

  export const userStore = writable<User>({
    name: "",
    lastname: "",
    section: "",
    personalNumber: "",
    email: "",
    phone: ""
  });
