// O Fragment serve quando temos um component que não queremos retornar a div, por motivos variados. Então retorna-se a taga <> vazia, feito isso o component se gruda ao component pai de onde ele foi inserido
const Fragments = () => {
  return (
    <>
        <h2>Segundo titúlo</h2>
        <h3>Terceiro titúlo</h3>
    </>
  )
}

export default Fragments