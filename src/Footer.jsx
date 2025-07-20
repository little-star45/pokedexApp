import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <>
     <hr style={{borderTop: '2px solid'}} />
     <div className='container my-2'>
      <div className='row'>
        <div className='col-4'>
          <div>author: Patrycja Domańska</div>
        </div>
        <div className='col-4'>
          <p>© 2025 Pokédex App</p>
        </div>
        <div className='col-4'>
          <div>github: <a href="https://github.com/little-star45">https://github.com/little-star45</a></div>
        </div>
      </div>
      
      
     </div>
     
    </>
  )
}

export default Footer
