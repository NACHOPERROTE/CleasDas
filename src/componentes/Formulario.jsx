

const Formulario = () => {

 return(


    
<form className="header__formulario">
  <div clasNaclassName="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="header__formulario--brn">Submit</button>
</form>

);

};


export default Formulario;