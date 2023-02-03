import { LoginProps } from '@/request/user'
import type { NextApiRequest, NextApiResponse } from 'next'
import { readUserList } from '@/utils/readFile'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userName, password } = req.body as LoginProps
  const userList = readUserList()
  const findUser = userList.find(user => user.userName === userName && user.password === password)
  if (findUser) {
    res.status(200)
    res.send('登录成功')  // 这里是要发送token的
  } else {
    res.status(403)  // 状态码不是403 是啥忘了 后面再改
    res.send('用户名或密码错误')
  }
}