declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg?react' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

declare module '*.otf' {
  const value: string;
  export default value;
}

declare module '*.ttf' {
  const value: string;
  export default value;
}
