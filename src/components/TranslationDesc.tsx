import type { TranslationDescProp } from "~types/common"

const TranslationDesc = ({
  percent,
  languageFrom,
  languageTo
}: TranslationDescProp) => {
  return (
    <div>
      <p>{`${percent} of all ${languageFrom} into ${languageTo}`}</p>
    </div>
  )
}

export default TranslationDesc
