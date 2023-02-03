
import fs from 'fs'
import path from 'path'
import { UserProps } from '@/type/idnex'

export function setUserList(value: UserProps[]) {
  const joinPath =  path.join('./db', 'userList' + '.json')
  const res = { value }
  return fs.writeFileSync(joinPath, JSON.stringify(res))
}