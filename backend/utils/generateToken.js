import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, 'pipok', {
    expiresIn: '30d',
  })
}

export default generateToken
