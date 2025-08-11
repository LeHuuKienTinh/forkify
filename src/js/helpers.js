import recipeFaker from '../../public/data.json'
import { TIMEOUT_SEC } from './config'
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`))
    }, s * 1000)
  })
}

// export const getJSON = async function (url) {
//   try {
//     const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)])
//     const data = await res.json()

//     // const data = await recipeFaker
//     return data
//   } catch (err) {
//     console.error(err)
//   }
// }

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url)
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)])
    return await res.json()
  } catch (err) {
    console.log(err)
    throw err
  }
}

// export const sendJSON = async function (url, uploadData) {
//   try {
//     const fetchPro = fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(uploadData),
//     })
//     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)])
//     const data = await res.json()

//     // const data = await recipeFaker
//     return data
//   } catch (err) {
//     console.error(err)
//   }
// }
