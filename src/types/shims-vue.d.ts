/* eslint-disable @typescript-eslint/ban-types */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'virtual:*' {
  const result: any
  export default result
}

declare module '*.json' {
  const value: any
  export default value
}

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

declare type TimeoutHandle = ReturnType<typeof setTimeout>;

declare type TargetContext = '_self' | '_blank';

declare type Nullable<T> = T | null;

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
