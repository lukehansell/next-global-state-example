export default function getUserDetails(name: string) {
  return (dispatch: any) => {
    fetch('/api/user?name=' + name).then(res => {
      return res.json()
    }).then(data => {

      dispatch({
        type: 'UPDATE_RESULT',
        payload: {
          name: data.name,
          age: data.age
        }
      })
    }).catch(err => {console.log(err)})
  }
}