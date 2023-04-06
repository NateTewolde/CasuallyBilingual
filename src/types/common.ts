export interface OptionInfo {
  option: string
}
export interface OptionsArray {
  optionsArray: OptionInfo[]
}

export interface OptionProp {
  optionInfo: OptionInfo
}

export interface TranslationInfo {
  percent: number
  languageFrom: string
  languageTo: string
}

export interface TranslationDescProp {
  translateInfo: TranslationInfo
}
