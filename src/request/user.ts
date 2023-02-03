import http from './config'

// 用户登录
export interface LoginProps {
  userName: string,
  password: string
}
export function login(data: LoginProps) {
  return http({
    url: '/login',
    method: 'post',
    data
  })
}

// 用户注册
export interface RegisterProps extends LoginProps {}
export function register(data: RegisterProps) {
  return http({
    url: '/register',
    method: 'post',
    data
  })
}