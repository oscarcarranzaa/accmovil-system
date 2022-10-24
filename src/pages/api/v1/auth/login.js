import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function loginHandler(req, res) {
  const { email, password } = req.body
  console.log({ email, password })
  if (email === 'admin@d.com' && password === 'admin') {
    // expire in 3 days
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 3,
        email,
        username: 'fazt'
      },
      'Dllll'
    )

    const serialized = serialize('accmovil_login', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: '/'
    })

    res.setHeader('Set-Cookie', serialized)
    return res.status(200).json({
      message: 'Login successful'
    })
  }

  return res.status(401).json({ error: 'Invalid credentials' })
}
