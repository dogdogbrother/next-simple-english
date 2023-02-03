import styles from '../index.module.scss'
import { Input, Button, useInput, useToasts } from '@geist-ui/core'
import { useState } from 'react'

type inputType = 'secondary' | 'error'
type ActionType = 'login' | 'register'

export default function Login() {
  const { state: userName, reset: resetUserName, bindings: bindingsUsername } = useInput('')
  const { state: password, reset: resetPassword, bindings: bindingsPassword } = useInput('')
  const { state: _password, reset: _resetPassword, bindings: _bindingsPassword } = useInput('')
  const [ userNameType, setUserNameType ] = useState<inputType>('secondary')
  const [ passwordType, setPasswordType ] = useState<inputType>('secondary')
  const [ _passwordType, _setPasswordType ] = useState<inputType>('secondary')
  const [action, setAction] = useState<ActionType>('login')

  function resetStatus() {
    resetUserName()
    resetPassword()
    _resetPassword()
    setUserNameType('secondary')
    setPasswordType('secondary')
    _setPasswordType('secondary')
  }
  // const { state: password, reset: resetPassword, bindings: bindingsPassword } = useInput('')
  const { setToast } = useToasts()
  function onSubmit() {
    // 先把用户名和密码逻辑校验了
    if (!userName || !password) {
      if (!userName) {
        setUserNameType('error')
      }
      if (!password) {
        setPasswordType('error')
      }
      // ui库bug,显示不了 待修复 https://github.com/geist-org/geist-ui/issues/814
      return setToast({text: '用户名或密码不能为空', delay: 100000})
    }
    alert('呜呜呜呜')
  }
  function onSwitch() {
    setAction(action === 'login' ? 'register' : 'login')
    resetStatus()
  }
  return <div>
    <div className={styles.form}>
      <div>
        <span>用户名</span>
        <Input size={25} placeholder="请输入用户名" type={userNameType} {...bindingsUsername} onInput={() => setUserNameType('secondary')} />
      </div>
      <div>
        <span>密码</span>
        <Input size={25} placeholder="请输入密码" type={passwordType} {...bindingsPassword} onInput={() => setPasswordType('secondary')} />
      </div>
      {
        action === 'register' ? <div>
          <span>确认密码</span>
          <Input size={25} placeholder="请输入确认密码" type={_passwordType} {..._bindingsPassword} onInput={() => _setPasswordType('secondary')} />
        </div> : null
      }
      <div className={styles.switch}>
        <div className='a' onClick={onSwitch}>去{action === 'register' ? '登录' : '注册'}</div>
      </div>
      <Button style={{width: '100%'}} scale={0.9} type="success" onClick={onSubmit}>
        {action === 'register' ? '注 册' : '登 录'}
      </Button>
    </div>
  </div>
}