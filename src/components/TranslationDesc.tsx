const TranslationDesc = ({ percent, languageFrom, languageTo }) => {
  return (
    <div>
      <p>{`${percent} of all ${languageFrom} into ${languageTo}`}</p>
    </div>
  )
}

export default TranslationDesc
