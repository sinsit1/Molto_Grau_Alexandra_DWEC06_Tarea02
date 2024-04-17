function Article({ employeeData, fireEmployee }) {

  return (
    <article className="person">
      <img src={`https://randomuser.me/api/portraits/men/${employeeData.id}.jpg`} alt="" />
      <div>
        <h4>{employeeData.name}</h4>
        <p>{employeeData.email}</p>
        <p>{employeeData.phone}</p>
      </div>
      <button onClick={() => fireEmployee(employeeData.id)} type='button' className='delete-btn'>
        <img src='./src/trash.png' />
      </button>
    </article>
  )
}

export default Article;