
// ExtractPropTypes是vue3中内置的类型声明,它的作用是接收一个类型，然后把对应的vue3所接收的props类型提供出来，后面有需要可以直接使用
import { ExtractPropTypes } from 'vue'


export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger', 'text']

export const ButtonSize = ['midium', 'small', 'mini'];


export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return ButtonType.includes(value)
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean,
  icon: String,
  iconPosition: String,
  size: {
    type: String,
    validator(value: string) {
      return ButtonSize.includes(value)
    }
  }
}



export type ButtonProps = ExtractPropTypes<typeof buttonProps>


