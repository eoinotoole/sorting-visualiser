const themeVariable = (themeModule: string, varName: string) => (props: any) =>
  props.theme[themeModule][varName];

export { themeVariable };
