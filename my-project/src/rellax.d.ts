declare module 'rellax' {
    interface RellaxOptions {
      speed?: number;
      center?: boolean;
      wrapper?: string | null;
      round?: boolean;
      vertical?: boolean;
      horizontal?: boolean;
    }
  
    class Rellax {
      constructor(selector: string, options?: RellaxOptions);
      refresh(): void;
      destroy(): void;
    }
  
    export default Rellax;
  }