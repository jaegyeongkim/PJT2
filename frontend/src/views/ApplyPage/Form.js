<form
  name="accountFrm"
  onSubmit={this.handleSubmit}
  encType="multipart/form-data"
>
  <p>
    <input type="text" name="email"></input>
  </p>
  <p>
    <input type="password" name="pwd"></input>
  </p>
  <p>
    <input type="password" name="pwdcheck"></input>
  </p>
  <p>
    <input type="text" name="name"></input>
  </p>
  <p>
    <input type="text" name="nickname"></input>
  </p>
  <p>
    <input type="text" name="phone"></input>
  </p>
  <p>
    <input
      type="file"
      accept="image/jpg,impge/png,image/jpeg,image/gif"
      name="profile_img"
    ></input>
  </p>
  <p>
    <input type="submit" value="회원가입"></input>
  </p>
</form>;
