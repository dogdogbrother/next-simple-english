import { LoginProps } from '@/request/user'
import type { NextApiRequest, NextApiResponse } from 'next'
import { readUserList } from '@/utils/readFile'
import { withIronSessionApiRoute } from 'iron-session/next'

export type User = {
  username: string
}

async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body as LoginProps
  const userList = readUserList()
  const findUser = userList.find(user => user.username === username && user.password === password)
  if (findUser) {
    const { username } = findUser
    req.session.user = { username }
    res.status(200)
    res.send('登录成功')  // 这里是要发送token的
  } else {
    res.status(403)  // 状态码不是403 是啥忘了 后面再改
    res.send('用户名或密码错误')
  }
}
export default withIronSessionApiRoute(loginRoute, {password: '123456', cookieName: 'nextjs'})

declare module 'iron-session' {
  interface IronSessionData {
    user?: User
  }
}