declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_LAB_3D_BASE_URL: string;
    }
  }
}

export {};
