import { UserProps } from '@/type/idnex'
import fs from 'fs'
import path from 'path'

export function readUserList(): UserProps[] {
  const joinPath =  path.join('./db', 'userList' + '.json')
  if (!fs.existsSync('./db')) {
    fs.mkdirSync('./db')
    fs.writeFileSync(joinPath, '{"value": []}')
    return []
  }
  if(fs.existsSync(joinPath)) {
    const file = fs.readFileSync(joinPath, 'utf-8')
    return JSON.parse(file).value
  } else {
    fs.writeFileSync(joinPath, '{"value": []}')
    return []
  }
}