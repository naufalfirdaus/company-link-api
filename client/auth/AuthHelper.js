const auth = {
  isAuthenticated() {
    console.log(typeof window)
    if (typeof window !== "undefined") {
      if (localStorage.getItem('userInfo'))
      return JSON.parse(localStorage.getItem('userInfo'))
      else return false
    }
    else return false
  },
/*   clearJWT(cb) {
    if (typeof window !== "undefined") 
      localStorage.removeItem('userInfo')
    cb()
    //optional
    signout().then((data) => {
      console.log(data)
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
  } */
}

export default auth
