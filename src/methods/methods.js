export const verificarFavorito = (dog) => {
  const fav = JSON.parse(localStorage.getItem('dog'))
  if(fav){
    const include = fav.includes(dog)
    return include
  }
  return false
}