declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Allow CSS side-effect imports
declare module "*.css" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles: any;
  export default styles;
}
