export = extenso;

interface ExtensoOptions {
  mode?: string;
  locale?: string;
  negative?: string;
  currency?: { type: string };
  number?: { gender?: string, decimal?: string };
}

declare function extenso (num: string | number, opts?: ExtensoOptions): any;

declare namespace extenso {
  const prototype: {
  };
}
