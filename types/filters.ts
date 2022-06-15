export interface Filter {
  label: string,
  name: string,
  placeholder?: string | null,
  options: FilterOption[]
}

export interface FilterOption {
  label: string,
  value: string,
  documentCount: number,
  options: FilterOption[],
  link: string,
  resetLink: string,
  parent: string
}