const Container = ({ children, valor }) => {
  return (
    <div>
        <h1>Container</h1>
        <p>{valor}</p>
        {children}
    </div>
  )
}

export default Container