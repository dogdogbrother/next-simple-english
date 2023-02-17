import { RegisterProps } from '@/request/user'
import type { NextApiRequest, NextApiResponse } from 'next'
import { readUserList } from '@/utils/readFile'
import { setUserList } from '@/utils/setFile'
import { withIronSessionApiRoute } from 'iron-session/next'

function registerRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body as RegisterProps
  const userList = readUserList()
  // 用户名重复了 报错
  if (userList.find(user => user.username === username)) {
    res.status(403)  // 状态码不是403 是啥忘了 后面再改
    res.send('用户名重复')
  } else {
    userList.push({ username, password})
    setUserList(userList)
    res.status(200)
    res.send('注册用户成功')  // 这里是要发送token的
  }
}
export default withIronSessionApiRoute(registerRoute, {password: '123456', cookieName: 'nextjs'})